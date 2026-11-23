/**
 * 📘 Lab 03: Operaciones con fechas
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 * Los pasos van en orden: cada uno usa las funciones de los anteriores.
 */

// Fija la zona horaria de Bogotá para que tu salida coincida con la del README.
process.env.TZ = 'America/Bogota';

const DAY = 24 * 60 * 60 * 1000;
const pad = (n) => String(n).padStart(2, '0');
const show = (date) => (date ? `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}` : 'null');

// ============================================
// PASO 1: Leer una fecha local
// ============================================
console.log('--- Paso 1: parseLocal ---');

// Descomenta las siguientes líneas:
// const parseLocal = (dateText, timeText = '00:00') => {
//   const [year, month, day] = dateText.split('-').map(Number);
//   const [hours, minutes] = timeText.split(':').map(Number);
//   const date = new Date(year, month - 1, day, hours, minutes);
//   const same = date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
//     && date.getHours() === hours && date.getMinutes() === minutes;
//   return same ? date : null;
// };
// const inputs = [['2026-03-27', '19:30'], ['2026-03-27'], ['2026-02-30', '10:00'], ['2028-02-29', '10:00'], ['2026-04-31', '09:00'], ['2026-03-27', '24:00']];
// for (const [dateText, timeText] of inputs) {
//   console.log(`  ${dateText} ${timeText ?? '(sin hora)'} → ${show(parseLocal(dateText, timeText))}`);
// }

// ============================================
// PASO 2: Sumar días y meses
// ============================================
console.log('--- Paso 2: addDays y addMonths ---');

// Descomenta las siguientes líneas:
// const addDays = (date, days) => {
//   const result = new Date(date);
//   result.setDate(result.getDate() + days);
//   return result;
// };
// const addMonths = (date, months) => {
//   const result = new Date(date);
//   result.setMonth(result.getMonth() + months);
//   return result;
// };
// const start = parseLocal('2026-03-27', '19:30');
// console.log('  +1 día:  ', show(addDays(start, 1)));
// console.log('  +7 días: ', show(addDays(start, 7)));
// console.log('  −30 días:', show(addDays(start, -30)));
// console.log('  start sigue en:', show(start));
// console.log('  31 ene + 1 mes:', show(addMonths(parseLocal('2026-01-31'), 1)));
// console.log('  31 mar + 1 mes:', show(addMonths(parseLocal('2026-03-31'), 1)));

// ============================================
// PASO 3: Restar fechas
// ============================================
console.log('--- Paso 3: Diferencias ---');

// Descomenta las siguientes líneas:
// const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
// const daysBetween = (from, to) => Math.round((startOfDay(to) - startOfDay(from)) / DAY);
// const now = parseLocal('2026-03-27', '21:00');
// const targets = ['2026-03-27 22:15', '2026-03-28 08:00', '2026-03-30 08:00', '2026-03-20 10:00'];
// for (const target of targets) {
//   const date = parseLocal(...target.split(' '));
//   const minutes = Math.round((date - now) / 60000);
//   console.log(`  ${target}: ${minutes} min · ${(minutes / 60).toFixed(1)} h · ${daysBetween(now, date)} días de calendario`);
// }

// ============================================
// PASO 4: El horario de verano (Madrid)
// ============================================
console.log('--- Paso 4: Horario de verano ---');

// Descomenta las siguientes líneas:
// process.env.TZ = 'Europe/Madrid';
// const saturday = parseLocal('2026-03-28', '12:00');
// const sunday = parseLocal('2026-03-29', '12:00');
// console.log('  horas entre los dos mediodías:', (sunday - saturday) / (60 * 60 * 1000));
// console.log('  sábado + 24 h:', show(new Date(saturday.getTime() + DAY)));
// console.log('  addDays(sábado, 1):', show(addDays(saturday, 1)));
// const monday = parseLocal('2026-03-30');
// const raw = (startOfDay(monday) - startOfDay(saturday)) / DAY;
// console.log('  sábado → lunes:', raw, '· floor:', Math.floor(raw), '· daysBetween:', daysBetween(saturday, monday));
// console.log('  2026-03-29 02:30 →', show(parseLocal('2026-03-29', '02:30')));
// process.env.TZ = 'America/Bogota';

// ============================================
// PASO 5: Ordenar, filtrar y comparar
// ============================================
console.log('--- Paso 5: Una lista de sesiones ---');

// Descomenta las siguientes líneas:
// const sessions = [
//   { title: 'Planetas gigantes', start: parseLocal('2026-04-02', '18:00'), minutes: 60 },
//   { title: 'Noche de estrellas', start: parseLocal('2026-03-27', '19:30'), minutes: 90 },
//   { title: 'Constelaciones', start: parseLocal('2026-03-27', '11:00'), minutes: 45 },
//   { title: 'La Luna', start: parseLocal('2026-03-28', '10:00'), minutes: 60 },
// ];
// const isSameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
// const endOf = (session) => new Date(session.start.getTime() + session.minutes * 60 * 1000);
// const clock = parseLocal('2026-03-27', '20:00');
//
// const sorted = sessions.toSorted((a, b) => a.start - b.start);
// console.log('  ordenadas:', sorted.map((session) => session.title).join(' · '));
// console.log('  hoy:', sessions.filter((session) => isSameDay(session.start, clock)).length);
// console.log('  en curso:', sessions.find((session) => clock >= session.start && clock < endOf(session))?.title);
// console.log('  próxima:', sorted.find((session) => session.start > clock)?.title);
// console.log('  última que terminó:', sorted.findLast((session) => endOf(session) <= clock)?.title);
// console.log('  el array original sigue igual:', sessions[0].title);

// ============================================
// PASO 6: Un mes en la terminal
// ============================================
console.log('--- Paso 6: Calendario ---');

// Descomenta las siguientes líneas:
// const daysInMonth = (year, monthIndex) => new Date(year, monthIndex + 1, 0).getDate();
// const printMonth = (year, monthIndex, marked) => {
//   const offset = (new Date(year, monthIndex, 1).getDay() + 6) % 7; // lunes = 0
//   const cells = [...Array(offset).fill('  '), ...Array.from({ length: daysInMonth(year, monthIndex) }, (_, index) => {
//     const day = index + 1;
//     return marked.includes(day) ? ' *' : String(day).padStart(2);
//   })];
//   console.log('  ' + new Intl.DateTimeFormat('es', { month: 'long', year: 'numeric' }).format(new Date(year, monthIndex)));
//   console.log('  lu ma mi ju vi sá do');
//   for (let index = 0; index < cells.length; index += 7) console.log('  ' + cells.slice(index, index + 7).join(' '));
// };
// console.log('  días de febrero 2026, febrero 2028:', daysInMonth(2026, 1), daysInMonth(2028, 1));
// const marchDays = sessions.filter((session) => session.start.getMonth() === 2).map((session) => session.start.getDate());
// printMonth(2026, 2, marchDays);

console.log('\n✅ Lab completado.');
