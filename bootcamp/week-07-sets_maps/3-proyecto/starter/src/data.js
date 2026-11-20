// Datos del dominio (paso 2). Planetario es solo un ejemplo: cámbialo por tu dominio.
// main.js los importa así: import SAMPLE_ITEMS, { TITLE } from './data.js';

export const TITLE = '🔭 Piezas del planetario';

// El export por defecto: de 5 a 8 piezas. id es un texto en minúsculas y con guiones que no se repite.
// room es la sala donde está la pieza. tags es un array de etiquetas en minúsculas.
export default [
  { id: 'telescopio-refractor', name: 'Telescopio refractor', room: 'Cúpula', tags: ['óptica', 'historia'] },
  { id: 'globo-lunar', name: 'Globo lunar', room: 'Sala del Sistema Solar', tags: ['luna', 'maqueta'] },
  { id: 'meteorito-campo-del-cielo', name: 'Meteorito Campo del Cielo', room: 'Sala del Sistema Solar', tags: ['meteoritos', 'historia', 'tacto'] },
  { id: 'proyector-estelar', name: 'Proyector estelar', room: 'Cúpula', tags: ['óptica', 'proyección'] },
  { id: 'reloj-de-sol', name: 'Reloj de sol', room: 'Terraza', tags: ['historia', 'sol'] },
  { id: 'maqueta-de-saturno', name: 'Maqueta de Saturno', room: 'Sala del Sistema Solar', tags: ['maqueta', 'planetas', 'tacto'] },
];
