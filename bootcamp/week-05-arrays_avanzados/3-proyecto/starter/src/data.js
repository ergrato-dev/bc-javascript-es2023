// Datos del dominio (paso 2). Planetario es solo un ejemplo: cámbialo por tu dominio.
// main.js los importa así: import SAMPLE_ITEMS, { TITLE, CATEGORIES } from './data.js';

export const TITLE = '🔭 Explorador del planetario';

// De 3 a 5 categorías. La clave va en inglés y en camelCase; deja `other`.
export const CATEGORIES = {
  planet: { name: 'Planeta', emoji: '🪐' },
  star: { name: 'Estrella', emoji: '⭐' },
  nebula: { name: 'Nebulosa', emoji: '🌌' },
  other: { name: 'Otro', emoji: '📌' },
};

// El export por defecto: de 4 a 6 elementos, sin id (main.js se lo pone en este orden).
// year puede ser null si no se conoce; tags es un array, que puede estar vacío.
export default [
  { name: 'Urano', category: 'planet', year: 1781, tags: ['gigante', 'helado'] },
  { name: 'Sirio B', category: 'star', year: 1862, tags: ['enana blanca'] },
  { name: 'Nebulosa del Cangrejo', category: 'nebula', year: 1731, tags: ['supernova'] },
  { name: 'Neptuno', category: 'planet', year: 1846, tags: ['gigante', 'helado'] },
  { name: 'Betelgeuse', category: 'star', year: null, tags: ['supergigante', 'roja'] },
];
