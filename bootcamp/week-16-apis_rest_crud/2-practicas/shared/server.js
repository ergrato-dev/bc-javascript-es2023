/**
 * Servidor de prácticas de la semana 16. No hace falta editarlo.
 *
 * Qué: una API REST pequeña de un acuario, hecha con node:http, que arranca dentro del propio lab.
 * Para qué: probar con fetch el diseño de una API (recursos, códigos de estado), la paginación,
 *   el inicio de sesión con token y los estados de carga, sin internet.
 * Impacto: cada ejecución parte de los mismos datos y da la misma salida.
 *
 * Uso:
 *   const server = await startServer();            // { tokenTtlMs } cambia lo que dura un token
 *   await fetch(`${server.url}/species?page=2`);
 *   await server.close();
 *
 * API:
 *   GET    /species?search=&habitat=&sort=&page=&perPage=   página de especies: { data, meta }
 *   GET    /species/:id                                     una especie, o 404
 *   POST   /species        { name, habitatId }              201, 409 si el nombre existe, 422 si faltan datos
 *   PUT    /species/:id    { name, habitatId }              reemplaza: 200, 404 o 422
 *   PATCH  /species/:id    { name?, habitatId? }            cambia: 200, 404 o 422
 *   DELETE /species/:id                                     204, o 404
 *   GET    /habitats  ·  GET /habitats/:id  ·  GET /habitats/:id/species
 *   GET    /feedings?cursor=&limit=                         paginación por cursor: { data, nextCursor }
 *   POST   /login          { user, password }               { token, user, role, expiresIn }, o 401
 *   POST   /logout                                          204: el token deja de valer
 *   GET    /me                                              usuario del token, o 401
 *   GET    /notes  ·  POST /notes { text }                  con token
 *   DELETE /notes/:id                                       solo el rol admin; si no, 403
 *   Cualquier ruta admite ?delay=ms (tarda más) y ?fail (responde 503).
 */
import { createServer } from 'node:http';

const HABITATS = [
  { id: 1, name: 'Arrecife de coral' },
  { id: 2, name: 'Océano abierto' },
  { id: 3, name: 'Río amazónico' },
];

const SPECIES = [
  { id: 1, name: 'Pez payaso', habitatId: 1 },
  { id: 2, name: 'Tiburón ballena', habitatId: 2 },
  { id: 3, name: 'Piraña roja', habitatId: 3 },
  { id: 4, name: 'Pez cirujano', habitatId: 1 },
  { id: 5, name: 'Manta raya', habitatId: 2 },
  { id: 6, name: 'Pez ángel', habitatId: 1 },
  { id: 7, name: 'Arapaima', habitatId: 3 },
  { id: 8, name: 'Atún rojo', habitatId: 2 },
  { id: 9, name: 'Caballito de mar', habitatId: 1 },
  { id: 10, name: 'Pez disco', habitatId: 3 },
  { id: 11, name: 'Pez luna', habitatId: 2 },
  { id: 12, name: 'Pez león', habitatId: 1 },
];

const FEEDINGS = [
  { id: 'f1', tank: 'Arrecife', time: '08:00' },
  { id: 'f2', tank: 'Río', time: '08:30' },
  { id: 'f3', tank: 'Océano', time: '09:00' },
  { id: 'f4', tank: 'Arrecife', time: '13:00' },
  { id: 'f5', tank: 'Río', time: '13:30' },
  { id: 'f6', tank: 'Océano', time: '14:00' },
  { id: 'f7', tank: 'Arrecife', time: '19:00' },
];

const USERS = [
  { user: 'ana', password: 'coral', role: 'keeper' },
  { user: 'luis', password: 'marea', role: 'admin' },
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const send = (res, status, body, headers = {}) => {
  if (body === undefined) return res.writeHead(status, headers).end();
  res
    .writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', ...headers })
    .end(JSON.stringify(body));
};

const readJson = async (req) => {
  let text = '';
  for await (const chunk of req) text += chunk;
  if (text === '') return {};
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
};

const compareBy = (sort) => {
  const field = sort.replace(/^-/, '');
  const direction = sort.startsWith('-') ? -1 : 1;
  return (a, b) => direction * String(a[field]).localeCompare(String(b[field]), 'es', { numeric: true });
};

export const startServer = async ({ tokenTtlMs = 60_000 } = {}) => {
  let species = structuredClone(SPECIES);
  let nextSpeciesId = SPECIES.length + 1;
  let notes = [{ id: 1, text: 'Revisar el pH del tanque del río', author: 'luis' }];
  let nextNoteId = 2;
  const sessions = new Map();
  let tokenCount = 0;

  // Comprueba los datos de una especie. Devuelve los errores por campo, o null si están bien.
  const validate = (data, { partial = false } = {}) => {
    const fields = {};
    if (!partial || 'name' in data) {
      if (typeof data.name !== 'string' || data.name.trim() === '') fields.name = 'Obligatorio';
    }
    if (!partial || 'habitatId' in data) {
      if (!HABITATS.some(({ id }) => id === data.habitatId)) fields.habitatId = `No existe el hábitat ${data.habitatId}`;
    }
    return Object.keys(fields).length > 0 ? fields : null;
  };

  // La especie que ya usa ese nombre (sin distinguir mayúsculas), o undefined.
  const findTaken = (name, exceptId) =>
    species.find((item) => item.id !== exceptId && item.name.toLowerCase() === name?.trim().toLowerCase());

  const currentUser = (req) => {
    const token = req.headers.authorization?.replace(/^Bearer /, '');
    const session = sessions.get(token);
    if (!token || !req.headers.authorization.startsWith('Bearer ')) return { error: 'Falta el token' };
    if (!session) return { error: 'Token no válido' };
    if (Date.now() > session.expiresAt) {
      sessions.delete(token);
      return { error: 'Token caducado' };
    }
    return { session, token };
  };

  const server = createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const [, resource, id, sub] = url.pathname.split('/');
    const query = url.searchParams;
    const data = await readJson(req);

    await wait(Number(query.get('delay') ?? 0));
    if (query.has('fail')) return send(res, 503, { error: 'Servicio no disponible' });
    if (data === null) return send(res, 400, { error: 'El cuerpo no es JSON válido' });

    const unauthorized = (error) => send(res, 401, { error }, { 'WWW-Authenticate': 'Bearer' });

    if (resource === 'species' && !id) {
      if (req.method === 'GET') {
        const page = Number(query.get('page') ?? 1);
        const perPage = Number(query.get('perPage') ?? 5);
        if (!Number.isInteger(page) || page < 1) return send(res, 400, { error: 'page debe ser un entero mayor que 0' });
        if (!Number.isInteger(perPage) || perPage < 1 || perPage > 20) return send(res, 400, { error: 'perPage debe estar entre 1 y 20' });
        const search = (query.get('search') ?? '').toLowerCase();
        const habitat = query.get('habitat');
        const found = species
          .filter(({ name }) => name.toLowerCase().includes(search))
          .filter(({ habitatId }) => !habitat || habitatId === Number(habitat))
          .toSorted(compareBy(query.get('sort') ?? 'id'));
        const totalPages = Math.max(1, Math.ceil(found.length / perPage));
        const pageUrl = (n) => {
          const link = new URL(url);
          link.searchParams.set('page', n);
          return `<${link.pathname}${link.search}>`;
        };
        const links = [page > 1 && `${pageUrl(page - 1)}; rel="prev"`, page < totalPages && `${pageUrl(page + 1)}; rel="next"`].filter(Boolean);
        return send(
          res,
          200,
          { data: found.slice((page - 1) * perPage, page * perPage), meta: { page, perPage, total: found.length, totalPages } },
          links.length > 0 ? { Link: links.join(', ') } : {},
        );
      }
      if (req.method === 'POST') {
        const fields = validate(data);
        if (fields) return send(res, 422, { error: 'Datos no válidos', fields });
        const taken = findTaken(data.name);
        if (taken) return send(res, 409, { error: `Ya existe la especie ${taken.name}` });
        const created = { id: nextSpeciesId, name: data.name.trim(), habitatId: data.habitatId };
        nextSpeciesId += 1;
        species = [...species, created];
        return send(res, 201, created, { Location: `/species/${created.id}` });
      }
      return send(res, 405, { error: `Método no permitido: ${req.method}` }, { Allow: 'GET, POST' });
    }

    if (resource === 'species') {
      const item = species.find((entry) => entry.id === Number(id));
      if (!['GET', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
        return send(res, 405, { error: `Método no permitido: ${req.method}` }, { Allow: 'GET, PUT, PATCH, DELETE' });
      }
      if (!item) return send(res, 404, { error: `No existe la especie ${id}` });
      if (req.method === 'GET') return send(res, 200, item);
      if (req.method === 'DELETE') {
        species = species.filter((entry) => entry !== item);
        return send(res, 204);
      }
      const fields = validate(data, { partial: req.method === 'PATCH' });
      if (fields) return send(res, 422, { error: 'Datos no válidos', fields });
      const taken = 'name' in data && findTaken(data.name, item.id);
      if (taken) return send(res, 409, { error: `Ya existe la especie ${taken.name}` });
      const changes = req.method === 'PUT' ? { name: data.name, habitatId: data.habitatId } : data;
      const updated = { ...item, ...changes, id: item.id };
      species = species.map((entry) => (entry === item ? updated : entry));
      return send(res, 200, updated);
    }

    if (resource === 'habitats' && req.method === 'GET') {
      if (!id) return send(res, 200, HABITATS);
      const habitat = HABITATS.find((entry) => entry.id === Number(id));
      if (!habitat) return send(res, 404, { error: `No existe el hábitat ${id}` });
      if (sub === 'species') return send(res, 200, species.filter(({ habitatId }) => habitatId === habitat.id));
      return send(res, 200, habitat);
    }

    if (resource === 'feedings' && req.method === 'GET') {
      const limit = Number(query.get('limit') ?? 3);
      const start = query.has('cursor') ? FEEDINGS.findIndex((entry) => entry.id === query.get('cursor')) : 0;
      if (start === -1) return send(res, 400, { error: 'Cursor no válido' });
      const page = FEEDINGS.slice(start, start + limit);
      return send(res, 200, { data: page, nextCursor: FEEDINGS[start + limit]?.id ?? null });
    }

    if (resource === 'login' && req.method === 'POST') {
      const account = USERS.find((entry) => entry.user === data.user && entry.password === data.password);
      if (!account) return send(res, 401, { error: 'Usuario o contraseña incorrectos' });
      tokenCount += 1;
      const token = `tok-${tokenCount}-${account.user}`;
      sessions.set(token, { user: account.user, role: account.role, expiresAt: Date.now() + tokenTtlMs });
      return send(res, 200, { token, user: account.user, role: account.role, expiresIn: tokenTtlMs / 1000 });
    }

    if (['logout', 'me', 'notes'].includes(resource)) {
      const { session, token, error } = currentUser(req);
      if (error) return unauthorized(error);
      if (resource === 'logout' && req.method === 'POST') {
        sessions.delete(token);
        return send(res, 204);
      }
      if (resource === 'me' && req.method === 'GET') return send(res, 200, { user: session.user, role: session.role });
      if (resource === 'notes' && !id && req.method === 'GET') return send(res, 200, notes);
      if (resource === 'notes' && !id && req.method === 'POST') {
        if (typeof data.text !== 'string' || data.text.trim() === '') return send(res, 422, { error: 'Datos no válidos', fields: { text: 'Obligatorio' } });
        const created = { id: nextNoteId, text: data.text.trim(), author: session.user };
        nextNoteId += 1;
        notes = [...notes, created];
        return send(res, 201, created, { Location: `/notes/${created.id}` });
      }
      if (resource === 'notes' && id && req.method === 'DELETE') {
        if (session.role !== 'admin') return send(res, 403, { error: `El rol ${session.role} no puede borrar notas` });
        const note = notes.find((entry) => entry.id === Number(id));
        if (!note) return send(res, 404, { error: `No existe la nota ${id}` });
        notes = notes.filter((entry) => entry !== note);
        return send(res, 204);
      }
    }

    send(res, 404, { error: `Ruta desconocida: ${req.method} ${url.pathname}` });
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();

  return {
    url: `http://127.0.0.1:${port}`,
    close: () => new Promise((resolve) => {
      server.close(resolve);
      server.closeAllConnections();
    }),
  };
};
