// El cliente de la API de server.js: una fábrica (semana 27) que recibe fetch (semana 26).
// Completa el TODO en el paso 10 del README.

// ── Ya escrita ─────────────────────────────────────────────────────────────

// Un error HTTP con su código y, en un 422, los errores por campo.
// Ejemplo: new HttpError({ status: 404, message: 'No existe la ficha 7' })
export class HttpError extends Error {
  constructor({ status, message, fields = null }) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.fields = fields;
  }
}

// ── Por escribir ───────────────────────────────────────────────────────────

// Crea un cliente para la API que está en baseUrl ('' en la página, que usa la misma dirección;
// 'http://localhost:3000' desde Node). Usa fetchFn para cada petición: nunca el fetch global
// directamente, para que los tests le pasen uno falso. Devuelve:
// - list()            → GET    `${baseUrl}/api/items`        → el array `data` de la respuesta.
// - create(data)      → POST   `${baseUrl}/api/items`        → la ficha creada, con su id.
// - update(id, data)  → PUT    `${baseUrl}/api/items/${id}`  → la ficha guardada.
// - remove(id)        → DELETE `${baseUrl}/api/items/${id}`  → null.
// Cada petición es fetchFn(url, { method, ... }), con method siempre escrito, también 'GET'.
// create y update envían data como JSON: cabecera 'Content-Type': 'application/json' y body JSON.stringify(data).
// Una respuesta con error (response.ok false) lanza new HttpError({ status, message: body.error, fields: body.fields });
// si el cuerpo no es JSON o no trae error, el mensaje es `Error ${status}`.
// Ejemplo: const api = createApi({ baseUrl: '', fetchFn: fetch }); const items = await api.list();
export const createApi = ({ baseUrl, fetchFn = fetch }) => {
  // TODO
};
