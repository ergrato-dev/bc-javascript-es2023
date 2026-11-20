// Lógica de la colección: funciones puras, sin DOM.
// main.js las importa para pintar la página y scripts/verificar-semana.sh las comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md. Ninguna modifica lo que recibe.
// Cada pieza tiene la forma { id, name, room, tags }.

// TODO paso 3: devuelve un Set con todas las etiquetas de las piezas, sin repetir, en orden de aparición.
// uniqueTags(items) → Set(9) { 'óptica', 'historia', 'luna', ... }
export const uniqueTags = (items) => {
  // TODO
};

// TODO paso 4: devuelve un Map cuyas claves son los id y cuyos valores son las piezas.
// indexById(items).get('globo-lunar') → { id: 'globo-lunar', name: 'Globo lunar', ... }
export const indexById = (items) => {
  // TODO
};

// TODO paso 5: devuelve un Map de sala → array de piezas de esa sala, con las salas en orden de aparición.
// groupByRoom(items).get('Cúpula') → [ { id: 'telescopio-refractor', ... }, { id: 'proyector-estelar', ... } ]
export const groupByRoom = (items) => {
  // TODO
};

// TODO paso 6: devuelve un Map de etiqueta → número de piezas que la llevan, en orden de aparición.
// countTags(items) → Map(9) { 'óptica' => 2, 'historia' => 3, 'luna' => 1, ... }
export const countTags = (items) => {
  // TODO
};

// TODO paso 7: devuelve un Set nuevo: sin tag si selected lo tenía, con tag si no. selected no cambia.
// toggleTag(new Set(['luna']), 'sol') → Set(2) { 'luna', 'sol' } · toggleTag(new Set(['luna']), 'luna') → Set(0) {}
export const toggleTag = (selected, tag) => {
  // TODO
};

// TODO paso 8: devuelve las piezas que llevan TODAS las etiquetas de selected. Con selected vacío, todas.
// filterByTags(items, new Set(['historia', 'tacto'])) → [ { id: 'meteorito-campo-del-cielo', ... } ]
export const filterByTags = (items, selected) => {
  // TODO
};

// TODO paso 9: devuelve { pieces, rooms, tags } con el número de piezas, de salas y de etiquetas distintas.
// Guarda el resultado en summaryCache con el array items como clave: si te pasan el mismo array, devuelve
// el mismo objeto sin recalcular. getSummary(items) → { pieces: 6, rooms: 3, tags: 9 }
const summaryCache = new WeakMap();

export const getSummary = (items) => {
  // TODO
};
