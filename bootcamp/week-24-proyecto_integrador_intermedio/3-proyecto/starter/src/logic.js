// Lógica del catálogo conectado. Ninguna función usa el DOM: se prueban con Node.
// Completa los TODO en el orden del README (pasos 3 a 9).

// ── Ya escritas (repaso de semanas anteriores) ─────────────────────────────

// Un error HTTP con su código y, en un 422, los errores por campo (semanas 15 y 16).
export class HttpError extends Error {
  constructor(status, message, fields = null) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.fields = fields;
  }
}

// Convierte un texto en HTML seguro (semana 17).
export const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

// El estado con el que arranca la página.
export const INITIAL_STATE = Object.freeze({
  status: 'idle', items: [], meta: null, query: '', error: null, savedAt: null,
});

// ── 1. Red ─────────────────────────────────────────────────────────────────

// Pide `url` con fetchFn y devuelve el cuerpo JSON de la respuesta.
// - Con `data`, lo envía como JSON: cabecera 'Content-Type': 'application/json' y body JSON.stringify(data).
// - La petición se cancela a los `timeout` ms o cuando se cancele `signal`, lo que ocurra antes:
//   AbortSignal.any con AbortSignal.timeout(timeout) y `signal` (si llega).
// - 204 → null. Otra respuesta correcta → su JSON.
// - Respuesta con error → lanza new HttpError(status, body.error, body.fields ?? null); si el cuerpo
//   no es JSON o no trae `error`, el mensaje es `Error ${status}`.
// Ejemplo: await requestJson('/api/items', { method: 'POST', data: { name: 'Sirio' } })
export const requestJson = async (url, { method = 'GET', data, signal, timeout = 5000, fetchFn = fetch } = {}) => {
  // TODO
};

// Envuelve fn para que cada llamada cancele la anterior: llama a fn(...args, signal) con el
// signal de un AbortController nuevo y aborta el de la llamada previa. Devuelve lo que devuelva fn.
// Ejemplo: const list = createLatest((params, signal) => requestJson(url, { signal }))
export const createLatest = (fn) => {
  // TODO
};

// ── 2. Estado ──────────────────────────────────────────────────────────────

// Devuelve el estado nuevo tras un evento, sin modificar el anterior. status es
// 'idle', 'loading', 'ready', 'empty' o 'error'.
// - { type: 'load', query }           → status 'loading', query (si llega; si no, la de antes), error null.
//                                      Conserva items, meta y savedAt: la página sigue mostrándolos.
// - { type: 'cached', items, meta, savedAt } → items, meta y savedAt de la copia local; status no cambia.
// - { type: 'loaded', items, meta }   → status 'ready' (o 'empty' sin items), items, meta, error null, savedAt null.
// - { type: 'failed', message }       → status 'error', error message. Conserva lo demás.
// - { type: 'saved', item }           → si ya hay un item con ese id, lo reemplaza en su sitio; si no, lo pone
//                                      el primero y suma 1 a meta.total (si hay meta). status 'ready'.
// - { type: 'removed', id }           → quita el item con ese id y resta 1 a meta.total; status 'empty' si no
//                                      quedan items, 'ready' si quedan. Un id que no está → el mismo estado.
// - Otro type                         → el mismo estado.
export const reduce = (state, event) => {
  // TODO
};

// El texto de la línea de estado de la página. `now` es el momento actual en ms.
// La copia guardada se describe con Intl.RelativeTimeFormat('es', { numeric: 'always' }) y now - savedAt:
// menos de un minuto → 'hace un momento'; menos de una hora → minutos ('hace 5 minutos');
// menos de un día → horas ('hace 1 hora'); si no, días ('hace 2 días'). Siempre redondeando hacia abajo.
// - 'idle'    → ''
// - 'loading' → con savedAt: 'Mostrando la copia guardada hace 5 minutos · actualizando…';
//               sin savedAt: 'Actualizando…' si hay items, 'Cargando…' si no.
// - 'ready'   → '12 fichas · página 1 de 2' ('1 ficha' en singular; sin la página si solo hay una).
// - 'empty'   → 'Ninguna ficha coincide con «vega»', o 'Todavía no hay fichas' si query es ''.
// - 'error'   → el error; con savedAt: 'No se pudo conectar · mostrando la copia guardada hace 2 días'.
export const statusText = (state, now = Date.now()) => {
  // TODO
};

// ── 3. Página y formulario ─────────────────────────────────────────────────

// El HTML de una ficha, en una sola línea y con cada valor pasado por escapeHtml:
//   <article class="card" data-id="ID"><h3>PRIMER CAMPO</h3><dl>FILAS</dl>
//   <button type="button" data-action="edit">Editar</button><button type="button" data-action="delete">Borrar</button></article>
// FILAS: un <dt>label</dt><dd>valor</dd> por cada campo después del primero, sin los que valen null,
// undefined o ''. Los campos number se formatean con Intl.NumberFormat('es-ES') (-1.46 → '-1,46').
// Ejemplo: cardHtml({ id: 2, name: 'Vega', type: 'Estrella', magnitude: 0.03 }, FIELDS) →
//   '<article class="card" data-id="2"><h3>Vega</h3><dl><dt>Tipo</dt><dd>Estrella</dd><dt>Magnitud</dt><dd>0,03</dd></dl><button ...'
export const cardHtml = (item, fields) => {
  // TODO
};

// Comprueba los valores de un formulario (textos, como los da FormData) con las reglas de fields.
// Devuelve { data, errors }:
// - data: un valor por campo: null si está vacío (tras trim), un número en los number, el texto recortado en los text.
// - errors: { [name]: mensaje } solo de los campos con error, el primero que falle:
//   'Obligatorio' (required y vacío) · 'Debe ser un número' · `Entre ${min} y ${max}` · `Mínimo ${minLength} caracteres`.
// Ejemplo: validate({ name: ' Ve ', magnitude: 'x' }, FIELDS).errors → { name: 'Mínimo 3 caracteres', type: 'Obligatorio', magnitude: 'Debe ser un número' }
export const validate = (values, fields) => {
  // TODO
};

// ── 4. Copia local ─────────────────────────────────────────────────────────

// Una copia de datos en storage (localStorage o algo con getItem, setItem y removeItem), con versión y caducidad.
// Guarda en `key` el JSON de { version, savedAt: now(), data }. Devuelve un objeto con:
// - read()      → { data, savedAt }, o null si no hay copia, no es JSON, es de otra versión,
//                 tiene más de maxAge ms o storage lanza un error.
// - write(data) → true si se guardó; false si storage lanza un error (cuota llena, sin almacenamiento).
// - clear()     → borra la copia sin lanzar nunca.
export const createCache = (storage, { key, version = 1, maxAge = 86_400_000, now = Date.now } = {}) => {
  // TODO
};
