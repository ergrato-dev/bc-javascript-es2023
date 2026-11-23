/**
 * Servidor del proyecto. No hace falta editarlo.
 *
 * Qué: sirve la página (index.html, styles.css y src/) y una API REST con las fichas de SEED
 *   (src/data.js), paginada, con búsqueda y con las reglas de FIELDS.
 * Para qué: que la página hable con una API como las reales (páginas, 404, 409, 422) sin depender
 *   de internet, y que al pararla puedas ver qué hace la página sin conexión.
 * Impacto: los cambios viven en memoria; al reiniciar el servidor las fichas vuelven a ser las de SEED.
 *
 * Arranca con:               node server.js              → http://localhost:3000
 * Simula un servidor lento:  DELAY=2000 node server.js
 *
 * API:
 *   GET    /api/items?search=&page=&perPage=   { data, meta: { page, perPage, total, totalPages } }
 *                                              search busca en los campos de texto, sin mirar tildes ni mayúsculas
 *   POST   /api/items      { ...campos }       201 con la ficha y su id, 409 si el primer campo ya existe, 422 { error, fields }
 *   PUT    /api/items/:id  { ...campos }       200, 404, 409 o 422
 *   DELETE /api/items/:id                      204, o 404
 *   Cualquier ruta /api admite ?delay=ms para tardar más en responder.
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
import { FIELDS, SEED } from './src/data.js';

const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const plain = (text) => String(text).normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

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

// Las mismas reglas que pide el proyecto a validate: el servidor nunca se fía de lo que llega.
const check = (data, fields) => {
  const clean = {};
  const errors = {};
  for (const { name, type, required, minLength, min, max } of fields) {
    const value = data[name];
    if (value === undefined || value === null || String(value).trim() === '') {
      if (required) errors[name] = 'Obligatorio';
      clean[name] = null;
    } else if (type === 'number') {
      if (typeof value !== 'number' || !Number.isFinite(value)) errors[name] = 'Debe ser un número';
      else if ((min !== undefined && value < min) || (max !== undefined && value > max)) errors[name] = `Entre ${min} y ${max}`;
      clean[name] = value;
    } else {
      if (typeof value !== 'string') errors[name] = 'Debe ser un texto';
      else if (minLength !== undefined && value.trim().length < minLength) errors[name] = `Mínimo ${minLength} caracteres`;
      clean[name] = String(value).trim();
    }
  }
  return { clean, errors: Object.keys(errors).length > 0 ? errors : null };
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

// `items` y `fields` permiten arrancar la API con otros datos (lo usan las comprobaciones).
export const startServer = async ({ port = 0, items: seed = SEED, fields = FIELDS } = {}) => {
  let items = seed.map((item, index) => ({ id: index + 1, ...item }));
  let nextId = items.length + 1;
  const first = fields[0].name;
  const texts = fields.filter(({ type }) => type === 'text').map(({ name }) => name);
  const findTaken = (value, exceptId) =>
    items.find((item) => item.id !== exceptId && plain(item[first]) === plain(value ?? ''));

  const handle = async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const [, api, resource, id, extra] = url.pathname.split('/');
    if (api !== 'api') return serveFile(res, url.pathname);

    await wait(Number(url.searchParams.get('delay') ?? process.env.DELAY ?? 0));
    if (resource !== 'items' || extra !== undefined) return sendJson(res, 404, { error: `Ruta desconocida: ${url.pathname}` });
    const { data, error: bodyError } = await readJson(req);
    if (bodyError) return sendJson(res, 400, { error: bodyError });

    if (!id && req.method === 'GET') {
      const page = Number(url.searchParams.get('page') ?? 1);
      const perPage = Number(url.searchParams.get('perPage') ?? 6);
      if (!Number.isInteger(page) || page < 1) return sendJson(res, 400, { error: 'page debe ser un entero mayor que 0' });
      if (!Number.isInteger(perPage) || perPage < 1 || perPage > 20) return sendJson(res, 400, { error: 'perPage debe estar entre 1 y 20' });
      const words = plain(url.searchParams.get('search') ?? '').split(/\s+/).filter(Boolean);
      const found = items.filter((item) => {
        const text = plain(texts.map((name) => item[name] ?? '').join(' '));
        return words.every((word) => text.includes(word));
      });
      return sendJson(res, 200, {
        data: found.slice((page - 1) * perPage, page * perPage),
        meta: { page, perPage, total: found.length, totalPages: Math.max(1, Math.ceil(found.length / perPage)) },
      });
    }
    if (!id && req.method === 'POST') {
      const { clean, errors } = check(data, fields);
      if (errors) return sendJson(res, 422, { error: 'Revisa los campos marcados', fields: errors });
      const taken = findTaken(clean[first]);
      if (taken) return sendJson(res, 409, { error: `Ya existe la ficha «${taken[first]}»` });
      const created = { id: nextId, ...clean };
      nextId += 1;
      items = [...items, created];
      return sendJson(res, 201, created, { Location: `/api/items/${created.id}` });
    }
    if (!id) return sendJson(res, 405, { error: `Método no permitido: ${req.method}` }, { Allow: 'GET, POST' });

    if (!['PUT', 'DELETE'].includes(req.method)) {
      return sendJson(res, 405, { error: `Método no permitido: ${req.method}` }, { Allow: 'PUT, DELETE' });
    }
    const item = items.find((entry) => entry.id === Number(id));
    if (!item) return sendJson(res, 404, { error: `No existe la ficha ${id}: puede que otra persona la haya borrado` });
    if (req.method === 'DELETE') {
      items = items.filter((entry) => entry !== item);
      return sendJson(res, 204);
    }
    const { clean, errors } = check(data, fields);
    if (errors) return sendJson(res, 422, { error: 'Revisa los campos marcados', fields: errors });
    const taken = findTaken(clean[first], item.id);
    if (taken) return sendJson(res, 409, { error: `Ya existe la ficha «${taken[first]}»` });
    const updated = { id: item.id, ...clean };
    items = items.map((entry) => (entry === item ? updated : entry));
    return sendJson(res, 200, updated);
  };

  // Si el cliente cancela a mitad (tiempo máximo, búsqueda nueva), la conexión ya no existe: se cierra sin más.
  const server = createServer((req, res) => handle(req, res).catch(() => res.destroy()));

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
