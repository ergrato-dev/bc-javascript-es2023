// Lógica del catálogo: funciones puras, sin DOM ni red. Se prueban con Vitest (tests/logic.test.js).
// Completa los TODO en el orden del README (pasos 4 a 8). ESLint pone a este archivo los límites
// de clean code de la semana 27: si una función no cabe, divídela en funciones con nombre.

// ── Ya escritas ────────────────────────────────────────────────────────────

// Un texto en minúsculas y sin tildes, para comparar: plain('Orión') → 'orion'.
export const plain = (text) =>
  String(text)
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();

// Vacío: null, undefined o un texto en blanco.
export const isEmpty = (value) =>
  value === null || value === undefined || String(value).trim() === '';

// El estado con el que arranca la página. status es 'idle', 'loading', 'ready' o 'error'.
export const INITIAL_STATE = Object.freeze({
  status: 'idle',
  items: [],
  query: '',
  sort: { by: null, desc: false },
  page: 1,
  error: null,
});

// ── 1. Validar ─────────────────────────────────────────────────────────────

// Comprueba los valores de un formulario (textos, como los da FormData) con las reglas de fields.
// Devuelve { data, errors }:
// - data: un valor por campo: null si está vacío (isEmpty), un número en los number, el texto
//   recortado con trim en los text.
// - errors: { [name]: mensaje } solo de los campos con error, el primero que falle:
//   'Obligatorio' (required y vacío) · 'Debe ser un número' · `Entre ${min} y ${max}` ·
//   `Mínimo ${minLength} caracteres`. Un campo vacío y no obligatorio no tiene error.
// Ejemplo: validate({ name: ' Ve ', type: '', magnitude: 'x' }, FIELDS).errors →
//   { name: 'Mínimo 3 caracteres', type: 'Obligatorio', magnitude: 'Debe ser un número' }
export const validate = (values, fields) => {
  // TODO
};

// ── 2. Buscar, ordenar y paginar ───────────────────────────────────────────

// Las fichas cuyo texto contiene todas las palabras de query, sin mirar tildes ni mayúsculas (plain).
// El texto de una ficha son sus campos text unidos con espacios; los number no cuentan.
// Un query vacío o en blanco → todas las fichas. Devuelve un array nuevo.
// Ejemplo: filterItems(SEED, { query: 'orion nebulosa', fields: FIELDS }) → [Nebulosa de Orión]
export const filterItems = (items, { query, fields }) => {
  // TODO
};

// Strategy: una función de comparar por cada type de campo. Cada una recibe dos valores no vacíos.
// - text:   en orden alfabético español (localeCompare con 'es'): 'Ábaco' va antes que 'Bola'.
// - number: de menor a mayor.
export const SORTERS = {
  // TODO
};

// Las fichas ordenadas por el campo `by`, con la estrategia de SORTERS que diga su type.
// - desc true → de mayor a menor.
// - Las fichas con ese campo vacío (isEmpty) van siempre al final, también con desc, en su orden.
// - Las que comparan igual quedan en el orden en que llegan.
// - by null o un campo que no está en fields → las mismas fichas en el mismo orden.
// Nunca cambia el array que recibe: devuelve uno nuevo.
// Ejemplo: sortItems(SEED, { by: 'magnitude', desc: false, fields: FIELDS })[0].name → 'Sirio'
export const sortItems = (items, { by, desc, fields }) => {
  // TODO
};

// Una página de items. Devuelve { items, page, pages, total }:
// - total: cuántas fichas hay. pages: cuántas páginas de perPage salen, como mínimo 1.
// - page: la que se pide, llevada a 1 si es menor y a pages si es mayor.
// - items: las fichas de esa página.
// Ejemplo: paginate(SEED, { page: 9, perPage: 6 }) → { items: [las 4 últimas], page: 2, pages: 2, total: 10 }
export const paginate = (items, { page, perPage }) => {
  // TODO
};

// ── 3. Resumir ─────────────────────────────────────────────────────────────

// Las cifras del catálogo: { total, stats }.
// - total: cuántas fichas hay.
// - stats: { [name]: { count, min, max, average } } por cada campo number, contando solo las fichas
//   que tienen ese campo (no vacío). average redondeado a 2 decimales.
//   Sin ninguna ficha con ese campo → { count: 0, min: null, max: null, average: null }.
// Ejemplo: summarize(SEED, FIELDS).stats.magnitude → { count: 10, min: -1.46, max: 8.8, average: 3.76 }
export const summarize = (items, fields) => {
  // TODO
};

// ── 4. Estado ──────────────────────────────────────────────────────────────

// Devuelve el estado nuevo tras una acción, sin modificar el anterior:
// - { type: 'loading' }          → status 'loading', error null.
// - { type: 'loaded', items }    → status 'ready', items, error null.
// - { type: 'failed', message }  → status 'error', error message. Conserva items.
// - { type: 'query', query }     → query y page 1.
// - { type: 'sort', by }         → con el mismo by que ya hay, cambia desc (true ↔ false); con otro,
//                                   sort { by, desc: false }. En los dos casos, page 1.
// - { type: 'page', page }       → page.
// - { type: 'saved', item }      → si hay un item con su id, lo reemplaza en su sitio; si no, lo añade al final.
// - { type: 'removed', id }      → quita el item con ese id.
// - Otro type                    → el mismo estado (el mismo objeto, no una copia).
// Pista: un objeto con una función por type (Strategy), como SORTERS; un switch no cabe en complexity 4.
export const reduce = (state, action) => {
  // TODO
};

// Lo que enseña la página: filterItems con state.query, después sortItems con state.sort y al final
// paginate con state.page. Devuelve lo que devuelve paginate.
// Ejemplo: selectPage({ ...INITIAL_STATE, items: SEED, query: 'galaxia' }, { fields: FIELDS, perPage: 6 }).total → 2
export const selectPage = (state, { fields, perPage }) => {
  // TODO
};
