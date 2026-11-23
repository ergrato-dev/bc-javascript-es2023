/**
 * Servidor del proyecto. No hace falta editarlo.
 *
 * Qué: sirve la página (index.html, styles.css y src/) y una API REST con las fichas de src/data.js,
 *   paginada y con inicio de sesión.
 * Para qué: que src/logic.js hable con una API como las reales (páginas, token, 401, 409, 422)
 *   sin depender de internet.
 * Impacto: los cambios y las sesiones viven en memoria; al reiniciar el servidor
 *   las fichas vuelven a ser las de data.js y hay que iniciar sesión otra vez.
 *
 * Arranca con:               node server.js              → http://localhost:3000
 * Simula un servidor lento:  DELAY=2000 node server.js
 * Tokens que caducan antes:  TOKEN_TTL=20 node server.js  (segundos; por defecto, 1800)
 *
 * Cuenta de prueba: usuario «editor», contraseña «coleccion».
 *
 * API (las rutas marcadas con 🔒 piden Authorization: Bearer <token>; sin él, 401):
 *   GET       /api/items?search=&sort=&page=&perPage=   { data, meta: { page, perPage, total, totalPages } }
 *                                                       sort: id, -id, name o -name · perPage de 1 a 20 (por defecto 4)
 *   GET       /api/items/:id                            una ficha, o 404
 *   POST      /api/login     { user, password }         200 { token, user, expiresIn }, o 401
 *   POST   🔒 /api/logout                               204: el token deja de valer
 *   POST   🔒 /api/items     { name, detail }           201, 409 si el nombre existe, 422 { error, fields }
 *   PATCH  🔒 /api/items/:id { name?, detail? }         200, 404, 409 o 422
 *   DELETE 🔒 /api/items/:id                            204, o 404
 *   Cualquier ruta /api admite ?delay=ms para tardar más en responder.
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
import { randomUUID } from 'node:crypto';
import ITEMS from './src/data.js';

const USERS = [{ user: 'editor', password: 'coleccion' }];
const SORTS = ['id', '-id', 'name', '-name'];
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const sendJson = (res, status, body, headers = {}) => {
  if (body === undefined) return res.writeHead(status, headers).end();
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', ...headers }).end(JSON.stringify(body));
};

const readJson = async (req) => {
  let text = '';
  for await (const chunk of req) text += chunk;
  if (text === '') return { data: {} };
  if (!req.headers['content-type']?.includes('application/json')) return { error: 'El cuerpo debe ser JSON (Content-Type: application/json)' };
  try {
    return { data: JSON.parse(text) };
  } catch {
    return { error: 'El cuerpo no es JSON válido' };
  }
};

const isFilled = (value) => typeof value === 'string' && value.trim() !== '';

// Errores por campo de una ficha. Con `partial`, solo se comprueban los campos que llegan.
const validate = (data, partial) => {
  const fields = {};
  for (const key of ['name', 'detail']) {
    if (partial && !(key in data)) continue;
    if (!isFilled(data[key])) fields[key] = 'Obligatorio';
    else if (key === 'name' && data.name.trim().length < 3) fields.name = 'Mínimo 3 caracteres';
  }
  return Object.keys(fields).length > 0 ? fields : null;
};

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

// `items`, `users` y `tokenTtlMs` permiten arrancar la API con otros datos (lo usan las comprobaciones).
export const startServer = async ({
  port = 0,
  items: initialItems = ITEMS,
  users = USERS,
  tokenTtlMs = Number(process.env.TOKEN_TTL ?? 1800) * 1000,
} = {}) => {
  let items = structuredClone(initialItems);
  let nextId = Math.max(...items.map(({ id }) => id)) + 1;
  const sessions = new Map();

  const sessionOf = (req) => {
    const [scheme, token] = (req.headers.authorization ?? '').split(' ');
    const session = scheme === 'Bearer' ? sessions.get(token) : undefined;
    if (!session) return { error: 'Inicia sesión: falta el token o no es válido' };
    if (Date.now() > session.expiresAt) {
      sessions.delete(token);
      return { error: 'La sesión ha caducado' };
    }
    return { session, token };
  };

  const findTaken = (name, exceptId) =>
    items.find((item) => item.id !== exceptId && item.name.toLowerCase() === name?.trim().toLowerCase());

  const server = createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const [, api, resource, id] = url.pathname.split('/');
    if (api !== 'api') return serveFile(res, url.pathname);

    await wait(Number(url.searchParams.get('delay') ?? process.env.DELAY ?? 0));
    const { data, error: bodyError } = await readJson(req);
    if (bodyError) return sendJson(res, 400, { error: bodyError });

    if (resource === 'login' && req.method === 'POST') {
      const account = users.find((entry) => entry.user === data.user && entry.password === data.password);
      if (!account) return sendJson(res, 401, { error: 'Usuario o contraseña incorrectos' });
      const token = randomUUID();
      sessions.set(token, { user: account.user, expiresAt: Date.now() + tokenTtlMs });
      return sendJson(res, 200, { token, user: account.user, expiresIn: Math.round(tokenTtlMs / 1000) });
    }
    if (resource !== 'items' && resource !== 'logout') return sendJson(res, 404, { error: `Ruta desconocida: ${url.pathname}` });

    // Leer es público; cambiar algo pide sesión.
    if (req.method !== 'GET') {
      const { token, error } = sessionOf(req);
      if (error) return sendJson(res, 401, { error }, { 'WWW-Authenticate': 'Bearer' });
      if (resource === 'logout' && req.method === 'POST') {
        sessions.delete(token);
        return sendJson(res, 204);
      }
    }
    if (resource === 'logout') return sendJson(res, 405, { error: `Método no permitido: ${req.method}` }, { Allow: 'POST' });

    if (!id && req.method === 'GET') {
      const page = Number(url.searchParams.get('page') ?? 1);
      const perPage = Number(url.searchParams.get('perPage') ?? 4);
      const sort = url.searchParams.get('sort') ?? 'id';
      if (!Number.isInteger(page) || page < 1) return sendJson(res, 400, { error: 'page debe ser un entero mayor que 0' });
      if (!Number.isInteger(perPage) || perPage < 1 || perPage > 20) return sendJson(res, 400, { error: 'perPage debe estar entre 1 y 20' });
      if (!SORTS.includes(sort)) return sendJson(res, 400, { error: `sort debe ser uno de: ${SORTS.join(', ')}` });
      const search = (url.searchParams.get('search') ?? '').toLowerCase();
      const field = sort.replace('-', '');
      const direction = sort.startsWith('-') ? -1 : 1;
      const found = items
        .filter(({ name }) => name.toLowerCase().includes(search))
        .toSorted((a, b) => direction * (field === 'id' ? a.id - b.id : a.name.localeCompare(b.name, 'es')));
      const totalPages = Math.max(1, Math.ceil(found.length / perPage));
      return sendJson(res, 200, {
        data: found.slice((page - 1) * perPage, page * perPage),
        meta: { page, perPage, total: found.length, totalPages },
      });
    }
    if (!id && req.method === 'POST') {
      const fields = validate(data, false);
      if (fields) return sendJson(res, 422, { error: 'Revisa los campos marcados', fields });
      const taken = findTaken(data.name);
      if (taken) return sendJson(res, 409, { error: `Ya existe la ficha «${taken.name}»` });
      const created = { id: nextId, name: data.name.trim(), detail: data.detail.trim() };
      nextId += 1;
      items = [...items, created];
      return sendJson(res, 201, created, { Location: `/api/items/${created.id}` });
    }
    if (!id) return sendJson(res, 405, { error: `Método no permitido: ${req.method}` }, { Allow: 'GET, POST' });

    const item = items.find((entry) => entry.id === Number(id));
    if (!['GET', 'PATCH', 'DELETE'].includes(req.method)) {
      return sendJson(res, 405, { error: `Método no permitido: ${req.method}` }, { Allow: 'GET, PATCH, DELETE' });
    }
    if (!item) return sendJson(res, 404, { error: `No existe la ficha ${id}` });

    if (req.method === 'GET') return sendJson(res, 200, item);
    if (req.method === 'DELETE') {
      items = items.filter((entry) => entry !== item);
      return sendJson(res, 204);
    }
    const changes = Object.fromEntries(Object.entries(data).filter(([key]) => ['name', 'detail'].includes(key)));
    const fields = validate(changes, true);
    if (fields) return sendJson(res, 422, { error: 'Revisa los campos marcados', fields });
    const taken = 'name' in changes && findTaken(changes.name, item.id);
    if (taken) return sendJson(res, 409, { error: `Ya existe la ficha «${taken.name}»` });
    const updated = { ...item, ...Object.fromEntries(Object.entries(changes).map(([key, value]) => [key, value.trim()])) };
    items = items.map((entry) => (entry === item ? updated : entry));
    return sendJson(res, 200, updated);
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
