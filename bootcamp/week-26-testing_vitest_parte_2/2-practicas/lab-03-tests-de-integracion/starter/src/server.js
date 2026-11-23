// API REST de productos con node:http, con los datos en memoria.
//   GET  /products       → 200 [producto, ...]
//   GET  /products/:id   → 200 producto | 404 { error }
//   POST /products       → 201 producto | 400 { error } | 415 { error }
// startServer() arranca en un puerto libre y devuelve { url, reset, close }.
import { createServer } from 'node:http';

const SEED = [
  { id: 1, name: 'cuaderno', price: 4 },
  { id: 2, name: 'bolígrafo', price: 1.5 },
  { id: 3, name: 'regla', price: 2 },
];

const readBody = async (request) => {
  let text = '';
  for await (const chunk of request) text += chunk;
  return text;
};

export const startServer = async ({ port = 0 } = {}) => {
  let products = structuredClone(SEED);

  const server = createServer(async (request, response) => {
    const send = (status, body) => {
      response.writeHead(status, { 'content-type': 'application/json' });
      response.end(JSON.stringify(body));
    };
    const { pathname } = new URL(request.url, 'http://localhost');
    const match = pathname.match(/^\/products\/(\d+)$/);

    if (request.method === 'GET' && pathname === '/products') return send(200, products);
    if (request.method === 'GET' && match) {
      const product = products.find((item) => item.id === Number(match[1]));
      return product ? send(200, product) : send(404, { error: `No existe el producto ${match[1]}` });
    }
    if (request.method === 'POST' && pathname === '/products') {
      if (request.headers['content-type'] !== 'application/json') {
        return send(415, { error: 'El cuerpo debe ser JSON (content-type: application/json)' });
      }
      const { name, price } = JSON.parse(await readBody(request));
      if (typeof name !== 'string' || name.trim() === '') return send(400, { error: 'El nombre es obligatorio' });
      const product = { id: Math.max(0, ...products.map((item) => item.id)) + 1, name: name.trim(), price };
      products.push(product);
      return send(201, product);
    }
    send(404, { error: 'Ruta no encontrada' });
  });

  await new Promise((resolve) => server.listen(port, '127.0.0.1', resolve));
  return {
    url: `http://127.0.0.1:${server.address().port}`,
    // Vuelve a los datos iniciales.
    reset: () => {
      products = structuredClone(SEED);
    },
    // closeAllConnections cierra también las conexiones abiertas que fetch reutiliza.
    close: () =>
      new Promise((resolve) => {
        server.close(resolve);
        server.closeAllConnections();
      }),
  };
};
