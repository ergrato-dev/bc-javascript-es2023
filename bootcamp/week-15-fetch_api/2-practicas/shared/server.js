/**
 * Servidor de prácticas de la semana 15. No hace falta editarlo.
 *
 * Qué: una API HTTP pequeña hecha con el módulo node:http, que arranca dentro del propio lab.
 * Para qué: que los labs hagan peticiones reales con fetch sin depender de internet
 *   ni de servicios externos que cambian o se caen.
 * Impacto: cada ejecución parte de los mismos datos y da la misma salida.
 *
 * Uso:
 *   const server = await startServer();
 *   await fetch(`${server.url}/planets/1`);
 *   await server.close();
 */
import { createServer } from 'node:http';

const PLANETS = [
  { id: 1, name: 'Mercurio', type: 'rocoso', moons: 0 },
  { id: 2, name: 'Venus', type: 'rocoso', moons: 0 },
  { id: 3, name: 'Tierra', type: 'rocoso', moons: 1 },
  { id: 4, name: 'Marte', type: 'rocoso', moons: 2 },
  { id: 5, name: 'Júpiter', type: 'gaseoso', moons: 95 },
  { id: 6, name: 'Saturno', type: 'gaseoso', moons: 146 },
  { id: 7, name: 'Urano', type: 'helado', moons: 28 },
  { id: 8, name: 'Neptuno', type: 'helado', moons: 16 },
];

const TOKEN = 'clave-del-planetario';
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const send = (res, status, body, headers = {}) => {
  if (body === undefined) {
    res.writeHead(status, headers).end();
    return;
  }
  const isText = typeof body === 'string';
  res
    .writeHead(status, {
      'Content-Type': isText ? 'text/plain; charset=utf-8' : 'application/json; charset=utf-8',
      ...headers,
    })
    .end(isText ? body : JSON.stringify(body));
};

const readBody = async (req) => {
  let text = '';
  for await (const chunk of req) text += chunk;
  return text;
};

// Valida el cuerpo de un POST o PUT: tiene que ser JSON con un name de texto.
const parsePlanet = (text, contentType) => {
  if (!contentType?.includes('application/json')) return { error: 'El cuerpo debe ser JSON (Content-Type: application/json)' };
  try {
    const data = JSON.parse(text);
    if (typeof data.name !== 'string' || data.name.trim() === '') return { error: 'Falta el campo name' };
    return { data };
  } catch {
    return { error: `El cuerpo no es JSON válido: ${text.slice(0, 30)}` };
  }
};

export const startServer = async () => {
  let planets = structuredClone(PLANETS);
  let nextId = PLANETS.length + 1;
  let flakyCalls = 0;

  const server = createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const [, resource, id] = url.pathname.split('/');
    const planet = planets.find((item) => item.id === Number(id));
    const body = await readBody(req);

    if (resource === 'planets' && !id && req.method === 'GET') {
      const type = url.searchParams.get('type');
      const limit = Number(url.searchParams.get('limit') ?? planets.length);
      const found = type ? planets.filter((item) => item.type === type) : planets;
      send(res, 200, found.slice(0, limit), { 'X-Total-Count': String(found.length) });
    } else if (resource === 'planets' && !id && req.method === 'POST') {
      const { data, error } = parsePlanet(body, req.headers['content-type']);
      if (error) return send(res, 400, { error });
      const created = { ...data, id: nextId };
      nextId += 1;
      planets = [...planets, created];
      send(res, 201, created, { Location: `/planets/${created.id}` });
    } else if (resource === 'planets' && id && !planet) {
      send(res, 404, { error: `No existe el planeta ${id}` });
    } else if (resource === 'planets' && req.method === 'GET') {
      send(res, 200, planet);
    } else if (resource === 'planets' && req.method === 'PUT') {
      const { data, error } = parsePlanet(body, req.headers['content-type']);
      if (error) return send(res, 400, { error });
      const replaced = { ...data, id: planet.id };
      planets = planets.map((item) => (item === planet ? replaced : item));
      send(res, 200, replaced);
    } else if (resource === 'planets' && req.method === 'PATCH') {
      const updated = { ...planet, ...JSON.parse(body), id: planet.id };
      planets = planets.map((item) => (item === planet ? updated : item));
      send(res, 200, updated);
    } else if (resource === 'planets' && req.method === 'DELETE') {
      planets = planets.filter((item) => item !== planet);
      send(res, 204);
    } else if (resource === 'echo') {
      // Devuelve lo que ha recibido: sirve para ver qué envía fetch.
      const { authorization, accept, 'content-type': type, 'x-client': client } = req.headers;
      send(res, 200, { method: req.method, headers: { authorization, accept, 'content-type': type, 'x-client': client }, body });
    } else if (resource === 'private') {
      if (req.headers.authorization !== `Bearer ${TOKEN}`) return send(res, 401, { error: 'Falta un token válido' });
      send(res, 200, { message: 'Acceso concedido al archivo de observaciones' });
    } else if (resource === 'slow') {
      await wait(Number(url.searchParams.get('ms') ?? 500));
      send(res, 200, { message: 'Respuesta lenta' });
    } else if (resource === 'status') {
      // Con ?text la respuesta de error llega como texto en lugar de JSON.
      const message = `Respuesta con estado ${id}`;
      send(res, Number(id), url.searchParams.has('text') ? message : { error: message });
    } else if (resource === 'flaky') {
      // Falla las dos primeras veces con 503 y responde bien a la tercera.
      flakyCalls += 1;
      if (flakyCalls <= 2) return send(res, 503, { error: 'Servicio no disponible' });
      send(res, 200, { message: `Respuesta al intento ${flakyCalls}` });
    } else if (resource === 'text') {
      send(res, 200, 'Bienvenido al planetario');
    } else if (resource === 'broken') {
      send(res, 200, '{"name": "Plutón",', { 'Content-Type': 'application/json' });
    } else {
      send(res, 404, { error: `Ruta desconocida: ${url.pathname}` });
    }
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();

  return {
    url: `http://127.0.0.1:${port}`,
    token: TOKEN,
    close: () => new Promise((resolve) => {
      server.close(resolve);
      server.closeAllConnections();
    }),
  };
};
