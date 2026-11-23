/**
 * Servidor del proyecto. No hace falta editarlo.
 *
 * Qué: sirve la página (index.html, styles.css y src/) y una API REST con las fichas de src/data.js.
 * Para qué: que src/logic.js haga peticiones reales con fetch a una API que controlas,
 *   sin depender de internet.
 * Impacto: los cambios (crear, editar, borrar) viven en memoria; al reiniciar el servidor
 *   las fichas vuelven a ser las de data.js.
 *
 * Arranca con:            node server.js            → http://localhost:3000
 * Simula un servidor lento: DELAY=4000 node server.js
 *
 * API:
 *   GET    /api/items?search=texto&limit=n   lista (búsqueda por nombre sin distinguir mayúsculas)
 *   GET    /api/items/:id                    una ficha, o 404
 *   POST   /api/items          { name, detail }       crea: 201, o 400 si falta algún campo
 *   PATCH  /api/items/:id      { name?, detail? }     cambia: 200, 400 o 404
 *   DELETE /api/items/:id                    borra: 204, o 404
 *   Cualquier ruta /api admite ?delay=ms para tardar más en responder.
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
import ITEMS from './src/data.js';

const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const sendJson = (res, status, body) => {
  if (body === undefined) return res.writeHead(status).end();
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' }).end(JSON.stringify(body));
};

const readJson = async (req) => {
  let text = '';
  for await (const chunk of req) text += chunk;
  if (!req.headers['content-type']?.includes('application/json')) return { error: 'El cuerpo debe ser JSON (Content-Type: application/json)' };
  try {
    return { data: JSON.parse(text) };
  } catch {
    return { error: 'El cuerpo no es JSON válido' };
  }
};

const isFilled = (value) => typeof value === 'string' && value.trim() !== '';

const serveFile = async (res, pathname) => {
  const file = pathname === '/' ? '/index.html' : pathname;
  if (file.includes('..') || !TYPES[extname(file)]) return sendJson(res, 404, { error: 'No encontrado' });
  try {
    const content = await readFile(new URL(`.${file}`, import.meta.url));
    res.writeHead(200, { 'Content-Type': `${TYPES[extname(file)]}; charset=utf-8` }).end(content);
  } catch {
    sendJson(res, 404, { error: 'No encontrado' });
  }
};

// `items` permite arrancar la API con otras fichas (lo usan las comprobaciones de verificar-semana.sh).
export const startServer = async ({ port = 0, items: initialItems = ITEMS } = {}) => {
  let items = structuredClone(initialItems);
  let nextId = Math.max(...items.map(({ id }) => id)) + 1;

  const server = createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const [, api, resource, id] = url.pathname.split('/');
    if (api !== 'api') return serveFile(res, url.pathname);

    await wait(Number(url.searchParams.get('delay') ?? process.env.DELAY ?? 0));
    if (resource !== 'items') return sendJson(res, 404, { error: `Ruta desconocida: ${url.pathname}` });

    if (!id && req.method === 'GET') {
      const search = (url.searchParams.get('search') ?? '').toLowerCase();
      const limit = Number(url.searchParams.get('limit') ?? items.length);
      const found = items.filter(({ name }) => name.toLowerCase().includes(search));
      return sendJson(res, 200, found.slice(0, limit));
    }
    if (!id && req.method === 'POST') {
      const { data, error } = await readJson(req);
      if (error) return sendJson(res, 400, { error });
      if (!isFilled(data.name) || !isFilled(data.detail)) return sendJson(res, 400, { error: 'La ficha necesita name y detail' });
      const created = { id: nextId, name: data.name.trim(), detail: data.detail.trim() };
      nextId += 1;
      items = [...items, created];
      return sendJson(res, 201, created);
    }

    const item = items.find((entry) => entry.id === Number(id));
    if (!item) return sendJson(res, 404, { error: `No existe la ficha ${id}` });

    if (req.method === 'GET') return sendJson(res, 200, item);
    if (req.method === 'PATCH') {
      const { data, error } = await readJson(req);
      if (error) return sendJson(res, 400, { error });
      const changes = Object.fromEntries(Object.entries(data).filter(([key]) => ['name', 'detail'].includes(key)));
      if (Object.values(changes).some((value) => !isFilled(value))) return sendJson(res, 400, { error: 'name y detail no pueden quedar vacíos' });
      const updated = { ...item, ...changes };
      items = items.map((entry) => (entry === item ? updated : entry));
      return sendJson(res, 200, updated);
    }
    if (req.method === 'DELETE') {
      items = items.filter((entry) => entry !== item);
      return sendJson(res, 204);
    }
    sendJson(res, 405, { error: `Método no permitido: ${req.method}` });
  });

  await new Promise((resolve) => server.listen(port, resolve));
  return {
    url: `http://localhost:${server.address().port}`,
    close: () => new Promise((resolve) => {
      server.close(resolve);
      server.closeAllConnections();
    }),
  };
};

// Solo arranca en el puerto 3000 cuando se ejecuta con `node server.js`, no al importarlo.
if (import.meta.main) {
  const { url } = await startServer({ port: Number(process.env.PORT ?? 3000) });
  console.log(`🚀 Servidor en ${url} (Ctrl+C para pararlo)`);
}
