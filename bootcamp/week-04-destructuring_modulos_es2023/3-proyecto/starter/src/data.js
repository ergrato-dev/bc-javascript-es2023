// Datos del dominio (paso 2). Planetario es solo un ejemplo: cámbialo por tu dominio.
// main.js los importa así: import SAMPLE_ITEMS, { TITLE, CATEGORIES } from './data.js';

export const TITLE = '🔭 Catálogo del planetario';

// De 3 a 5 categorías. La clave va en inglés y en camelCase; deja `other`.
export const CATEGORIES = {
  planet: { name: 'Planeta', emoji: '🪐' },
  star: { name: 'Estrella', emoji: '⭐' },
  nebula: { name: 'Nebulosa', emoji: '🌌' },
  other: { name: 'Otro', emoji: '📌' },
};

// El export por defecto: de 4 a 6 elementos de ejemplo, sin id (main.js se lo pone).
export default [
  { name: 'Urano', category: 'planet', details: { year: 1781 }, tags: ['gigante', 'helado'] },
  { name: 'Neptuno', category: 'planet', details: { year: 1846 }, tags: ['gigante', 'helado'] },
  { name: 'Sirio B', category: 'star', details: { year: 1862 }, tags: ['enana blanca'] },
  { name: 'Nebulosa del Cangrejo', category: 'nebula', details: { year: 1731 }, tags: ['supernova'] },
];
