// Datos de ejemplo del dominio. Cambia el título, el prefijo, las salas y las piezas por los de tu dominio.
import { required, minLength, between, oneOf } from './logic.js';

export const TITLE = '🔭 Fichas del Planetario';

// Prefijo de los ids: de 2 a 4 letras mayúsculas.
export const ID_PREFIX = 'PLA';

// Las únicas salas que acepta el formulario.
export const ROOMS = ['Cúpula', 'Sala Solar', 'Sala Lunar', 'Vestíbulo'];

// Reglas de cada campo del formulario, en el orden en que se comprueban.
// El valor llega del formulario como texto: between lo convierte a número.
export const SCHEMA = {
  name: [required(), minLength(3)],
  room: [required(), oneOf(ROOMS)],
  value: [required(), between(0, 100000)],
};

// Piezas de ejemplo, sin id: main.js se lo pone al crearlas.
export default [
  { name: 'Telescopio refractor', room: 'Cúpula', value: 18500 },
  { name: 'Meteorito de hierro', room: 'Vestíbulo', value: 42000 },
  { name: 'Esfera armilar', room: 'Sala Solar', value: 9800 },
  { name: 'Mapa lunar', room: 'Sala Lunar', value: 3200 },
  { name: 'Reloj de sol', room: 'Sala Solar', value: 6400 },
  { name: 'Traje de astronauta', room: 'Vestíbulo', value: 18400 },
];
