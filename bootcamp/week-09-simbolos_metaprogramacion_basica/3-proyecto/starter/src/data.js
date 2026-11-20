// Datos de ejemplo del dominio Planetario. Cámbialos por los de tu dominio (paso 2 del README).
// Las piezas no llevan id: main.js se lo pone con ID_PREFIX y un número.
// note es la nota reservada: createPiece la guarda con una clave simbólica.
export const TITLE = '🔭 Fichas del planetario';
export const ID_PREFIX = 'PLA';

export default [
  { name: 'Telescopio refractor', room: 'Cúpula', value: 12000, note: 'Lente con una raya en el borde' },
  { name: 'Globo lunar', room: 'Sala del Sistema Solar', value: 800, note: 'Préstamo de un coleccionista' },
  { name: 'Proyector estelar', room: 'Cúpula', value: 45000, note: 'Revisión pendiente en marzo' },
  { name: 'Reloj de sol', room: 'Jardín', value: 1500, note: 'Base de piedra suelta' },
  { name: 'Astrolabio', room: 'Sala del Sistema Solar', value: 9000, note: 'Copia; el original está en el almacén' },
  { name: 'Meteorito de hierro', room: 'Sala del Sistema Solar', value: 30000, note: 'Asegurado aparte' },
];
