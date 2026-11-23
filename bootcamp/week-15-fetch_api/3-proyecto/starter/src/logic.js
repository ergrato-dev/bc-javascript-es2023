// Lógica del cliente: todas las peticiones a la API pasan por este archivo.
// Ninguna función toca el DOM: reciben la URL base de la API y devuelven promesas,
// así que se pueden probar con Node (scripts/verificar-semana.sh 15).

// Milisegundos que se espera a la API antes de cancelar una petición.
export const TIMEOUT_MS = 3000;

// Error de una respuesta HTTP que no es 2xx. Ya está hecho: úsalo en requestJson.
export class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
  }
}

// Devuelve la URL completa, como texto, de `path` sobre `baseUrl`, con `params` como parámetros de búsqueda.
// Los parámetros que valen undefined, null o '' no se añaden.
// buildUrl('http://localhost:3000', '/api/items', { search: 'sol', limit: 2, x: '' })
//   → 'http://localhost:3000/api/items?search=sol&limit=2'
export const buildUrl = (baseUrl, path, params = {}) => {
  // TODO: crea la URL con new URL(path, baseUrl) y añade cada parámetro con url.searchParams.set
  return '';
};

// Hace una petición y devuelve una promesa con el cuerpo JSON de la respuesta.
// - Envía siempre la cabecera Accept: application/json.
// - Si hay `data`, la manda como cuerpo JSON con su Content-Type.
// - Cancela la petición pasados `timeoutMs` milisegundos (por defecto TIMEOUT_MS).
// - Si la respuesta no es ok, se rechaza con un HttpError: su status y, como mensaje,
//   el campo error del cuerpo JSON (o statusText si el cuerpo no es JSON).
// - Con una respuesta 204 devuelve null.
export const requestJson = async (url, { method = 'GET', data, timeoutMs = TIMEOUT_MS } = {}) => {
  // TODO: este es el único fetch de todo el archivo
  return null;
};

// Lista de fichas. `search` filtra por nombre y `limit` limita cuántas llegan; los dos son opcionales.
export const listItems = async (baseUrl, { search, limit } = {}) => {
  // TODO: GET /api/items con buildUrl y requestJson
  return [];
};

// Una ficha por su id.
export const getItem = async (baseUrl, id) => {
  // TODO: GET /api/items/<id>
  return null;
};

// Crea una ficha con { name, detail } y devuelve la ficha creada, con su id.
export const createItem = async (baseUrl, item) => {
  // TODO: POST /api/items con la ficha como data
  return null;
};

// Cambia solo los campos de `changes` y devuelve la ficha actualizada.
export const updateItem = async (baseUrl, id, changes) => {
  // TODO: PATCH /api/items/<id>
  return null;
};

// Borra una ficha. La API responde 204, así que la promesa da null.
export const deleteItem = async (baseUrl, id) => {
  // TODO: DELETE /api/items/<id>
  return null;
};

// Convierte un error de las funciones anteriores en un mensaje para la página:
// - TimeoutError                → `El servidor no ha respondido en ${TIMEOUT_MS / 1000} s.`
// - TypeError (error de red)    → 'No hay conexión con el servidor.'
// - HttpError con status ≥ 500  → 'El servidor tiene un problema. Inténtalo más tarde.'
// - HttpError con otro status   → el mensaje del propio error (el que manda la API)
// - Cualquier otro error        → `Error inesperado: ${error.message}`
export const describeError = (error) => {
  // TODO
  return '';
};
