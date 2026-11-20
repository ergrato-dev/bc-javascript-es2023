// Datos de ejemplo del dominio. Cambia el título, el prefijo, las salas y las piezas por los de tu dominio.

export const TITLE = '🔭 Colección del Planetario';

// Prefijo de los ids: de 2 a 4 letras mayúsculas.
export const ID_PREFIX = 'PLA';

// Las únicas salas que acepta la colección.
export const ROOMS = ['Cúpula', 'Sala Solar', 'Sala Lunar', 'Vestíbulo'];

// Piezas de ejemplo, sin id: main.js las añade a la colección al cargar la página y la colección les pone el id.
export default [
  { name: 'Telescopio refractor', room: 'Cúpula', value: 18500 },
  { name: 'Meteorito de hierro', room: 'Vestíbulo', value: 42000 },
  { name: 'Esfera armilar', room: 'Sala Solar', value: 9800 },
  { name: 'Mapa lunar', room: 'Sala Lunar', value: 3200 },
  { name: 'Reloj de sol', room: 'Sala Solar', value: 6400 },
  { name: 'Traje de astronauta', room: 'Vestíbulo', value: 18400 },
  { name: 'Globo celeste', room: 'Cúpula', value: 7600 },
  { name: 'Astrolabio de latón', room: 'Sala Solar', value: 15200 },
  { name: 'Fotografía de Saturno', room: 'Sala Lunar', value: 900 },
];
