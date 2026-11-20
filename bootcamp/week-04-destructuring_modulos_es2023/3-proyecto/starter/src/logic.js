// Lógica del catálogo: funciones puras, sin DOM.
// main.js las importa para pintar la página y scripts/verificar-semana.sh las comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md, con destructuring donde se indica.

// TODO paso 3: convierte una línea de texto en un elemento. Las partes van separadas por ';'
// y las etiquetas por ','. Quita los espacios de los extremos de cada parte.
// parseLine('Urano; planet; 1781; gigante, helado')
//   → { name: 'Urano', category: 'planet', details: { year: 1781 }, tags: ['gigante', 'helado'] }
// parseLine('Vega') → { name: 'Vega', category: 'other', details: { year: null }, tags: [] }
export const parseLine = (line) => {
  // TODO
};

// TODO paso 4: devuelve el texto del título de la tarjeta.
// summarize({ name: 'Urano', category: 'planet', details: { year: 1781 } }) → 'Urano (planet, 1781)'
// summarize({ name: 'Vega', details: { year: null } }) → 'Vega (other, año desconocido)'
// summarize({ name: 'Vega' }) → 'Vega (other, año desconocido)'
export const summarize = (item) => {
  // TODO
};

// TODO paso 5: devuelve los elementos de esa categoría ('all' = todas) cuyo nombre o alguna
// etiqueta contienen el texto buscado, sin distinguir mayúsculas.
// filterItems(items) → todos; filterItems(items, { category: 'planet', query: 'HEL' })
export const filterItems = (items, filters) => {
  // TODO
};
