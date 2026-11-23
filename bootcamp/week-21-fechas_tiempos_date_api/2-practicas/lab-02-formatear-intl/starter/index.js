/**
 * 📘 Lab 02: Formatear fechas con Intl
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// Fija la zona horaria de Bogotá para que tu salida coincida con la del README.
process.env.TZ = 'America/Bogota';

const session = new Date(2026, 2, 27, 19, 30); // viernes 27 de marzo de 2026, 19:30

// ============================================
// PASO 1: toLocaleDateString y compañía
// ============================================
console.log('--- Paso 1: toLocale ---');

// Descomenta las siguientes líneas:
// for (const locale of ['es-CO', 'es-ES', 'es-MX', 'en-US', 'de-DE', 'ja-JP']) {
//   console.log(`  ${locale.padEnd(6)} ${session.toLocaleDateString(locale)} · ${session.toLocaleTimeString(locale)}`);
// }
// console.log('  Sin locale:', session.toLocaleDateString());

// ============================================
// PASO 2: Estilos de fecha y hora
// ============================================
console.log('--- Paso 2: dateStyle y timeStyle ---');

// Descomenta las siguientes líneas:
// for (const style of ['full', 'long', 'medium', 'short']) {
//   const date = new Intl.DateTimeFormat('es', { dateStyle: style }).format(session);
//   const time = new Intl.DateTimeFormat('es', { timeStyle: style }).format(session);
//   console.log(`  ${style.padEnd(6)} ${date} · ${time}`);
// }
// const both = new Intl.DateTimeFormat('es-CO', { dateStyle: 'long', timeStyle: 'short' });
// console.log('  es-CO long + short:', both.format(session));

// ============================================
// PASO 3: Componentes sueltos
// ============================================
console.log('--- Paso 3: Componentes ---');

// Descomenta las siguientes líneas:
// const formats = {
//   chip: { weekday: 'short', day: 'numeric', month: 'short' },
//   header: { month: 'long', year: 'numeric' },
//   clock24: { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' },
//   clock12: { hour: 'numeric', minute: '2-digit', hourCycle: 'h12' },
//   numeric: { day: '2-digit', month: '2-digit', year: 'numeric' },
// };
// for (const [name, options] of Object.entries(formats)) {
//   console.log(`  ${name.padEnd(8)} ${new Intl.DateTimeFormat('es', options).format(session)}`);
// }
//
// try {
//   new Intl.DateTimeFormat('es', { dateStyle: 'long', weekday: 'long' });
// } catch (error) {
//   console.log(`  Mezclar estilo y componentes: ${error.name}`);
// }

// ============================================
// PASO 4: formatToParts
// ============================================
console.log('--- Paso 4: formatToParts ---');

// Descomenta las siguientes líneas:
// const toCard = (date, locale) => {
//   const parts = new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'short' }).formatToParts(date);
//   const pick = (type) => parts.find((part) => part.type === type).value;
//   return { weekday: pick('weekday'), day: pick('day'), month: pick('month') };
// };
// console.log('  types:', new Intl.DateTimeFormat('es', { dateStyle: 'medium' }).formatToParts(session).map((part) => part.type).join(' '));
// console.log('  es:', toCard(session, 'es'));
// console.log('  en:', toCard(session, 'en'));

// ============================================
// PASO 5: Tiempo relativo
// ============================================
console.log('--- Paso 5: RelativeTimeFormat ---');

// Descomenta las siguientes líneas:
// const auto = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });
// const always = new Intl.RelativeTimeFormat('es');
// for (const days of [-2, -1, 0, 1, 2, 7]) {
//   console.log(`  ${String(days).padStart(2)} días: ${auto.format(days, 'day').padEnd(16)} | ${always.format(days, 'day')}`);
// }
// console.log('  ', auto.format(-3, 'hour'), '·', auto.format(45, 'minute'), '·', auto.format(1, 'week'));

// ============================================
// PASO 6: Texto para máquinas
// ============================================
console.log('--- Paso 6: Claves AAAA-MM-DD ---');

// Descomenta las siguientes líneas:
// const pad = (n) => String(n).padStart(2, '0');
// const toDateKey = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
// console.log('  toDateKey:', toDateKey(session), '· toISOString().slice(0, 10):', session.toISOString().slice(0, 10));
//
// const sessions = [
//   new Date(2026, 9, 2, 18),
//   new Date(2026, 2, 27, 19, 30),
//   new Date(2026, 2, 27, 11),
//   new Date(2026, 10, 15, 10),
// ];
// const keys = sessions.map(toDateKey);
// console.log('  claves ordenadas:', keys.toSorted());
// const labels = sessions.map((date) => date.toLocaleDateString('es-CO'));
// console.log('  textos ordenados:', labels.toSorted());
// const byDay = Object.groupBy(sessions, toDateKey);
// console.log('  sesiones por día:', Object.entries(byDay).map(([key, list]) => `${key} (${list.length})`).join(', '));

console.log('\n✅ Lab completado.');
