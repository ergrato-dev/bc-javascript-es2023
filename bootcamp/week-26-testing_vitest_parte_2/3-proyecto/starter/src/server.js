// API REST del catálogo con node:http y los datos en memoria. Está terminada: no se cambia.
//   GET  /items?q=texto  → 200 [ficha, ...]  las que contienen todas las palabras de q en sus
//                          campos de texto, sin distinguir mayúsculas ni tildes (lo que no es
//                          letra ni cifra separa palabras: 'Tauro & estrella' son dos)
//   GET  /items/:id      → 200 ficha | 404 { error }
//   POST /items          → 201 ficha | 400 { error } | 415 { error }
//   cualquier otra       → 404 { error }
// startServer({ port, items }) arranca en port (0: uno libre) con una copia de items
// (por defecto, SEED) y devuelve { url, reset, close }:
// - reset() vuelve a la copia inicial de items.
// - close() para el servidor; devuelve una promesa.
// Arráncalo a mano con: node src/server.js
import { createServer } from 'node:http';
import { SEED } from './data.js';

const normalize = (text) =>
  String(text)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

const matches = (item, words) => {
  const text = normalize(Object.values(item).filter((value) => typeof value === 'string').join(' '));
  return words.every((word) => text.includes(word));
};

const readBody = async (request) => {
  let text = '';
  for await (const chunk of request) text += chunk;
  return text;
};

export const startServer = async ({ port = 0, items = SEED } = {}) => {
  let data = structuredClone(items);

  const server = createServer(async (request, response) => {
    const send = (status, body) => {
      response.writeHead(status, { 'content-type': 'application/json' });
      response.end(JSON.stringify(body));
    };
    const { pathname, searchParams } = new URL(request.url, 'http://localhost');
    const byId = pathname.match(/^\/items\/(\d+)$/);

    if (request.method === 'GET' && pathname === '/items') {
      const words = normalize(searchParams.get('q') ?? '').split(/[^\p{L}\p{N}]+/u).filter(Boolean);
      return send(200, data.filter((item) => matches(item, words)));
    }
    if (request.method === 'GET' && byId) {
      const item = data.find((entry) => entry.id === Number(byId[1]));
      return item ? send(200, item) : send(404, { error: `No existe la ficha ${byId[1]}` });
    }
    if (request.method === 'POST' && pathname === '/items') {
      if (request.headers['content-type'] !== 'application/json') {
        return send(415, { error: 'El cuerpo debe ser JSON (content-type: application/json)' });
      }
      let body;
      try {
        body = JSON.parse(await readBody(request));
      } catch {
        return send(400, { error: 'El cuerpo no es JSON válido' });
      }
      if (typeof body?.name !== 'string' || body.name.trim() === '') {
        return send(400, { error: 'El nombre es obligatorio' });
      }
      const item = { ...body, id: Math.max(0, ...data.map((entry) => entry.id)) + 1, name: body.name.trim() };
      data.push(item);
      return send(201, item);
    }
    send(404, { error: 'Ruta no encontrada' });
  });

  await new Promise((resolve) => server.listen(port, '127.0.0.1', resolve));
  return {
    url: `http://127.0.0.1:${server.address().port}`,
    reset: () => {
      data = structuredClone(items);
    },
    close: () =>
      new Promise((resolve) => {
        server.close(resolve);
        server.closeAllConnections();
      }),
  };
};

// node src/server.js: arranca en el puerto 3000.
if (import.meta.filename === process.argv[1]) {
  const { url } = await startServer({ port: 3000 });
  console.log(`API del catálogo en ${url}/items`);
}
