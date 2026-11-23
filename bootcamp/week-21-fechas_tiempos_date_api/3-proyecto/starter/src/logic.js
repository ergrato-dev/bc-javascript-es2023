// Lógica de la agenda: lee fechas, calcula con ellas y prepara los textos. Ninguna función usa
// el DOM ni la hora actual: «ahora» llega como parámetro (now), así que se pueden probar con
// Node (scripts/verificar-semana.sh 21) y main.js solo pinta lo que devuelven.
//
// Un evento (event) de EVENTS es un objeto { id, title, date, time, minutes, place }:
// date es 'AAAA-MM-DD', time es 'HH:mm' (hora local) y minutes, la duración en minutos.

// Ayudas que puedes usar: los milisegundos de un minuto y de un día, y pad(5) → '05'.
const MINUTE = 60 * 1000;
const DAY = 24 * 60 * MINUTE;
const pad = (n) => String(n).padStart(2, '0');

// Convierte una fecha 'AAAA-MM-DD' y una hora 'HH:mm' (por defecto '00:00') en un Date en hora
// local. Devuelve null si los textos no tienen ese formato exacto o si la fecha u hora no
// existe (30 de febrero, 24:00, una hora que se salta el cambio de horario de verano).
// Ejemplo: parseLocal('2026-03-27', '19:30') → Date del 27 de marzo a las 19:30 locales.
export const parseLocal = (dateText, timeText = '00:00') => {
  // TODO
};

// La clave 'AAAA-MM-DD' del día local de date, con ceros a la izquierda.
// Ejemplo: toDateKey(new Date(2026, 2, 5, 23, 0)) → '2026-03-05'
export const toDateKey = (date) => {
  // TODO
};

// Un Date nuevo, days días de calendario después (o antes, si es negativo), a la misma hora
// local. No cambia date.
export const addDays = (date, days) => {
  // TODO
};

// Los días de calendario entre from y to (negativo si to es anterior), sin mirar la hora:
// del viernes a las 21:00 al sábado a las 8:00 hay 1 día. Correcto aunque haya un cambio de hora.
export const daysBetween = (from, to) => {
  // TODO
};

// La cuadrícula de un mes (monthIndex de 0 a 11) con la semana empezando en lunes: un array
// de semanas, cada una un array de 7 elementos con el número del día o null en los huecos
// de antes del día 1 y de después del último.
// Ejemplo: monthGrid(2026, 2)[0] → [null, null, null, null, null, null, 1]
export const monthGrid = (year, monthIndex) => {
  // TODO
};

// El estado de un evento en el instante now:
// - 'past': ya terminó (now es igual o posterior al final: inicio + minutes).
// - 'ongoing': ha empezado y no ha terminado (now igual o posterior al inicio).
// - 'soon': empieza dentro de 24 horas o menos.
// - 'upcoming': empieza dentro de más de 24 horas.
export const getStatus = (event, now) => {
  // TODO
};

// Cuánto falta (o cuánto hace) desde now hasta date, con Intl.RelativeTimeFormat(locale,
// { numeric: 'auto' }):
// - Menos de 60 minutos en valor absoluto: en minutos, Math.round(diferencia / 1 minuto).
// - Si no, menos de 24 horas redondeadas: en horas, Math.round(minutos / 60).
// - Si no: en días de calendario, con daysBetween(now, date).
// Ejemplo: relativeLabel(mañanaALas10, hoyALas20, 'es') → 'mañana'
export const relativeLabel = (date, now, locale) => {
  // TODO
};

// Los textos de date para la tarjeta de un evento, en locale y en la zona timeZone (si es
// undefined, la zona del equipo), cada uno con un Intl.DateTimeFormat distinto:
// - day: { dateStyle: 'full', timeZone }      → 'viernes, 27 de marzo de 2026'
// - time: { timeStyle: 'short', timeZone }    → '19:30'
// - offset: el valor de la pieza 'timeZoneName' de formatToParts con
//   { timeZoneName: 'shortOffset', timeZone } → 'GMT-5'
export const formatWhen = (date, locale, timeZone) => {
  // TODO
};
