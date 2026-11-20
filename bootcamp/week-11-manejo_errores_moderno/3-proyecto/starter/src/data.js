// Datos de ejemplo del dominio. Cambia el título, el prefijo, las salas y las piezas por los de tu dominio.

export const TITLE = '🔭 Importador del Planetario';

// Prefijo de los ids: de 2 a 4 letras mayúsculas.
export const ID_PREFIX = 'PLA';

// Las únicas salas que acepta el importador.
export const ROOMS = ['Cúpula', 'Sala Solar', 'Sala Lunar', 'Vestíbulo'];

// Piezas de ejemplo, sin id: main.js las convierte en el texto JSON que aparece en el cuadro de importación.
export default [
  { name: 'Telescopio refractor', room: 'Cúpula', value: 18500 },
  { name: 'Meteorito de hierro', room: 'Vestíbulo', value: 42000 },
  { name: 'Esfera armilar', room: 'Sala Solar', value: 9800 },
  { name: 'Mapa lunar', room: 'Sala Lunar', value: 3200 },
  { name: 'Reloj de sol', room: 'Sala Solar', value: 6400 },
  { name: 'Traje de astronauta', room: 'Vestíbulo', value: 18400 },
];
