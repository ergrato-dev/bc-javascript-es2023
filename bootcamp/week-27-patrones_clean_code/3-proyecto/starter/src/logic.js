// El informe del catálogo, refactorizado: tiene que hacer lo mismo que report() de src/legacy.js.
// Escribe cada función siguiendo los pasos del README. Cuando termines, este archivo
// no tiene ningún TODO y pasa `pnpm check` (ESLint, Prettier y los tests de caracterización).

// validateItem(item) → la lista de errores de una ficha, en este orden y con estos textos:
//   'falta el nombre'                                 name no es un texto con algo más que espacios
//   'falta el tipo'                                   type no es un texto con algo más que espacios
//   'la valoración debe estar entre 0 y 5'            rating no es un número de 0 a 5
//   'los visitantes deben ser un entero de 0 o más'   visitors no es un entero de 0 o más
// Una ficha correcta devuelve [].
export const validateItem = (item) => {
  // TODO (paso 4)
};

// splitValid(items) → { valid, invalid }: las fichas correctas, en su orden, y una entrada
// { id, errors } por cada ficha con errores (id '?' si la ficha no tiene id).
export const splitValid = (items) => {
  // TODO (paso 4)
};

// filterItems(items, { type, minRating }) → las fichas de ese tipo (todas si no hay type)
// con rating de minRating o más (todas si no hay minRating). No cambia items.
export const filterItems = (items, options) => {
  // TODO (paso 5)
};

// SORTERS: una función de comparación por cada criterio de orden: name, rating y visitors.
// Las tres desempatan por el nombre, como el original.
export const SORTERS = {
  // TODO (paso 6)
};

// sortItems(items, { by, desc }) → una copia ordenada con SORTERS[by] (en su orden si by no
// está en SORTERS), del revés si desc. No cambia items.
export const sortItems = (items, options) => {
  // TODO (paso 6)
};

// summarize(items) → { count, averageRating, totalVisitors, topType }, como el resumen
// que report() pasa a su cb.
export const summarize = (items) => {
  // TODO (paso 7)
};

// formatLine(item, position) → una línea del informe: '1. Nombre (tipo) · ★ 4.5 · 840 visitantes'.
export const formatLine = (item, position) => {
  // TODO (paso 8)
};

// formatReport({ items, total, summary, invalid }) → el texto entero del informe.
export const formatReport = (report) => {
  // TODO (paso 8)
};

// createEmitter() → { on, emit }. on(nombre, función) devuelve la función que deja de escuchar.
export const createEmitter = () => {
  // TODO (paso 9)
};

// createReporter({ emitter }) → { build, on }. build(items, { type, minRating, sort, desc })
// devuelve el informe y emite 'report' con el resumen. Si no recibe emitter, crea uno.
export const createReporter = (dependencies) => {
  // TODO (paso 10)
};
