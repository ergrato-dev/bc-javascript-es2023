// Lógica del explorador: funciones puras, sin DOM.
// main.js las importa para pintar la página y scripts/verificar-semana.sh las comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md. Ninguna función modifica el array que recibe.
// Cada elemento tiene la forma { id, name, category, year, tags }.

// TODO paso 3: devuelve todas las etiquetas, sin repetir y en orden alfabético.
// getAllTags([{ tags: ['helado', 'gigante'] }, { tags: [] }, { tags: ['gigante'] }]) → ['gigante', 'helado']
export const getAllTags = (items) => {
  // TODO
};

// TODO paso 4: devuelve una copia ordenada.
// sortBy: 'name' (A → Z), 'year' (más antiguo primero, los que no tienen año al final), 'recent' (id mayor primero).
export const sortItems = (items, sortBy) => {
  // TODO
};

// TODO paso 5: devuelve los elementos con esa etiqueta ('all' = todos), ordenados con sortItems.
// queryItems(items) → todos por nombre; queryItems(items, { tag: 'helado', sortBy: 'year' })
export const queryItems = (items, options) => {
  // TODO
};

// TODO paso 6: devuelve un objeto con una clave por categoría y la lista de sus elementos.
// groupByCategory([{ name: 'Urano', category: 'planet' }]) → { planet: [{ name: 'Urano', category: 'planet' }] }
export const groupByCategory = (items) => {
  // TODO
};

// TODO paso 7: devuelve el último elemento del array de esa categoría ('all' = el último de todos), o undefined.
export const findLastAdded = (items, category) => {
  // TODO
};
