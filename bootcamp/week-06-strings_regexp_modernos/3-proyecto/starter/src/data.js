// Datos del dominio (paso 2). Planetario es solo un ejemplo: cámbialo por tu dominio.
// main.js los importa así: import SAMPLE_ENTRIES, { TITLE, CODE_PREFIX } from './data.js';

export const TITLE = '🔭 Registro de sesiones del planetario';

// Tres letras mayúsculas: el código de cada ficha es CODE_PREFIX, un guion y su número con 4 cifras (PLA-0001).
export const CODE_PREFIX = 'PLA';

// El export por defecto: de 4 a 6 fichas. number es un entero positivo y no se repite.
// date va en formato AAAA-MM-DD, o '' si no se conoce. Las etiquetas se escriben en notes con #.
export default [
  { number: 1, name: 'Eclipse lunar total', email: 'cupula@planetario.org', date: '2025-03-14', notes: 'Retransmisión desde la #cúpula norte. #eclipse #luna' },
  { number: 2, name: 'Lluvia de Perseidas', email: 'divulgacion@planetario.org', date: '2025-08-12', notes: 'Sesión nocturna en la terraza. #meteoros #verano' },
  { number: 3, name: '  Taller   de   telescopios ', email: 'talleres@planetario.org', date: '', notes: 'Fecha por confirmar. #taller #Cúpula' },
  { number: 4, name: 'Planetas gigantes', email: 'cupula@planetario.org', date: '2025-11-05', notes: 'Proyección en la #cúpula. #planetas' },
  { number: 12, name: 'Noche de Saturno', email: 'divulgacion@planetario.org', date: '2026-01-20', notes: 'Observación con el #telescopio grande. #planetas #saturno' },
];
