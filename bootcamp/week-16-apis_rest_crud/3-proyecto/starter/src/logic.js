// Lógica del panel: las peticiones a la API, la paginación y los estados de la lista.
// Ninguna función toca el DOM ni guarda variables globales, así que se pueden probar
// con Node (scripts/verificar-semana.sh 16). main.js guarda el token y el estado.

// Error de una respuesta HTTP que no es 2xx. Ya está hecho: úsalo en createApi.
// `fields` trae los errores por campo de un 422 ({ name: 'Obligatorio' }), o {}.
export class HttpError extends Error {
  constructor(status, message, fields = {}) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.fields = fields;
  }
}

// La URL completa de `path` sobre `baseUrl`, con los parámetros que tienen valor.
// Ya está hecha: es la de la semana 15.
export const buildUrl = (baseUrl, path, params = {}) => {
  const url = new URL(path, baseUrl);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== '') url.searchParams.set(key, value);
  }
  return url.href;
};

// Devuelve la función `api(path, options)` que hace todas las peticiones a `baseUrl`:
// - Arma la URL con buildUrl(baseUrl, path, params).
// - Envía siempre Accept: application/json, y pasa `signal` a fetch para poder cancelarla.
// - Si hay `data`, la manda como cuerpo JSON con su Content-Type.
// - Si getToken() devuelve un token, añade Authorization: Bearer <token>.
// - Si la respuesta no es ok, se rechaza con new HttpError(status, error, fields),
//   tomando `error` y `fields` del cuerpo JSON (statusText y {} si no vienen).
//   Con un 401, antes de rechazarse llama a onUnauthorized(mensaje).
// - Con una respuesta 204 devuelve null; si no, el cuerpo JSON.
export const createApi = (baseUrl, { getToken = () => null, onUnauthorized = () => {} } = {}) => {
  // TODO: devuelve una función async (path, { method = 'GET', params, data, signal } = {}) => ...
  //       con el único fetch de todo el archivo
  return async () => null;
};

// Inicia sesión con POST /api/login y devuelve { token, user, expiresIn }.
export const login = async (api, user, password) => {
  // TODO
  return null;
};

// Pide una página de fichas con GET /api/items y la devuelve aplanada:
// { items, page, perPage, total, totalPages }.
// `search`, `sort`, `page` y `perPage` son opcionales; `signal` se pasa a api.
export const listPage = async (api, { search, sort, page, perPage } = {}, signal) => {
  // TODO
  return { items: [], page: 1, perPage: 4, total: 0, totalPages: 1 };
};

// Guarda una ficha: si trae `id`, cambia sus campos con PATCH /api/items/<id>;
// si no, la crea con POST /api/items. Devuelve la ficha que responde la API.
// El id va en la URL, no en el cuerpo.
export const saveItem = async (api, { id, ...fields }) => {
  // TODO
  return null;
};

// Borra una ficha con DELETE /api/items/<id>. La API responde 204, así que da null.
export const deleteItem = async (api, id) => {
  // TODO
  return null;
};

// El texto y los botones de la paginación a partir de los metadatos de una página:
// pageInfo({ page: 2, totalPages: 3, total: 10 })
//   → { label: 'Página 2 de 3 · 10 fichas', hasPrev: true, hasNext: true }
// Con total 1, «1 ficha»; con total 0, el label es 'Sin fichas'.
export const pageInfo = ({ page, totalPages, total }) => {
  // TODO
  return { label: '', hasPrev: false, hasNext: false };
};

// Estado inicial de la lista. `meta` guarda { page, perPage, total, totalPages } de la última página.
export const INITIAL_STATE = Object.freeze({ status: 'idle', items: [], meta: null, error: null });

// Devuelve el estado siguiente a `state` tras `event`, sin modificar `state`:
// - { type: 'start' }                    → status 'loading' y error null; items y meta se conservan
// - { type: 'success', result }          → `result` es lo que da listPage: items, meta y
//                                          status 'success', o 'empty' si no hay items; error null
// - { type: 'failure', message }         → status 'error' y error `message`; items y meta se conservan
// - { type: 'remove', id }               → items sin la ficha `id` (el borrado optimista)
// - { type: 'restore', items, message }  → vuelven `items`, status 'error' y error `message`
// - cualquier otro evento                → el mismo `state`
export const reduce = (state, event) => {
  // TODO
  return state;
};

// Envuelve `fn` para que solo cuente la última llamada: cada llamada aborta la anterior.
// La función devuelta recibe los mismos argumentos que `fn` y le añade al final
// el `signal` de un AbortController nuevo; devuelve lo que devuelva `fn`.
export const createLatest = (fn) => {
  // TODO
  return fn;
};

// Convierte un error en un mensaje para la página. Ya está hecha: es la de la semana 15,
// con el 422, que añade los campos que fallan.
export const describeError = (error) => {
  if (error.name === 'TypeError') return 'No hay conexión con el servidor.';
  if (error instanceof HttpError && error.status >= 500) return 'El servidor tiene un problema. Inténtalo más tarde.';
  if (error instanceof HttpError && error.status === 422) return `${error.message}: ${Object.keys(error.fields).join(', ')}`;
  if (error instanceof HttpError) return error.message;
  return `Error inesperado: ${error.message}`;
};
