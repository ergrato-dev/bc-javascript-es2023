/**
 * 📘 Lab 01: El objeto Date
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// Fija la zona horaria de Bogotá para que tu salida coincida con la del README.
// Bórrala al terminar el lab y verás las horas en la zona de tu equipo.
process.env.TZ = 'America/Bogota';

// ============================================
// PASO 1: Un Date es un instante
// ============================================
console.log('--- Paso 1: Un instante ---');

// Descomenta las siguientes líneas:
// const opening = new Date('2026-03-27T19:30:00');
// console.log('  getTime():', opening.getTime());
// console.log('  toISOString():', opening.toISOString());
// console.log('  epoch:', new Date(0).toISOString());
//
// const now = new Date();
// console.log('  ¿Date.now() es un número?', typeof Date.now() === 'number');
// console.log('  ¿new Date() es de este siglo?', now.getFullYear() >= 2000);

// ============================================
// PASO 2: Cuatro formas de crear un Date
// ============================================
console.log('--- Paso 2: Crear fechas ---');

// Descomenta las siguientes líneas:
// const fromTimestamp = new Date(1774657800000);
// const fromIso = new Date('2026-03-27T19:30:00');
// const fromParts = new Date(2026, 2, 27, 19, 30); // 2 = marzo
// const fromUtc = new Date('2026-03-27T19:30:00Z');
// const fromMadrid = new Date('2026-03-27T19:30:00+01:00');
//
// for (const [label, date] of Object.entries({ fromTimestamp, fromIso, fromParts, fromUtc, fromMadrid })) {
//   console.log(`  ${label.padEnd(14)} ${date.toISOString()}`);
// }
// console.log('  ¿fromIso y fromParts son el mismo instante?', fromIso.getTime() === fromParts.getTime());

// ============================================
// PASO 3: Leer los componentes
// ============================================
console.log('--- Paso 3: Componentes ---');

// Descomenta las siguientes líneas:
// const DAYS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
// const session = new Date(2026, 2, 27, 19, 30);
// console.log('  getFullYear:', session.getFullYear());
// console.log('  getMonth:', session.getMonth(), '→ mes', session.getMonth() + 1);
// console.log('  getDate:', session.getDate());
// console.log('  getDay:', session.getDay(), '→', DAYS[session.getDay()]);
// console.log('  getHours:getMinutes:', `${session.getHours()}:${session.getMinutes()}`);
// console.log('  En UTC: día', session.getUTCDate(), 'a las', session.getUTCHours());

// ============================================
// PASO 4: La trampa de la fecha sin hora
// ============================================
console.log('--- Paso 4: Fecha sin hora ---');

// Descomenta las siguientes líneas:
// const fromInput = '2026-03-27'; // lo que da un <input type="date">
// const asUtc = new Date(fromInput);
// const asLocal = new Date(`${fromInput}T00:00`);
// console.log('  new Date(texto):', asUtc.toISOString(), '→ getDate()', asUtc.getDate());
// console.log('  con T00:00:     ', asLocal.toISOString(), '→ getDate()', asLocal.getDate());

// ============================================
// PASO 5: Fechas inválidas y desbordadas
// ============================================
console.log('--- Paso 5: Inválidas y desbordadas ---');

// Descomenta las siguientes líneas:
// const isValidDate = (date) => !Number.isNaN(date.getTime());
// for (const text of ['2026-03-27T19:30', '27/03/2026', 'mañana', '2026-13-01']) {
//   const date = new Date(text);
//   console.log(`  "${text}" → ${isValidDate(date) ? date.toISOString() : String(date)}`);
// }
//
// const february30 = new Date(2026, 1, 30);
// console.log('  30 de febrero →', february30.getDate(), 'del mes', february30.getMonth() + 1);
// const month12 = new Date(2026, 12, 1);
// console.log('  mes 12 →', month12.getFullYear(), 'mes', month12.getMonth() + 1);
//
// try {
//   new Date('mañana').toISOString();
// } catch (error) {
//   console.log(`  toISOString de una fecha inválida: ${error.name}: ${error.message}`);
// }

// ============================================
// PASO 6: Copiar, comparar y guardar
// ============================================
console.log('--- Paso 6: Copiar, comparar y guardar ---');

// Descomenta las siguientes líneas:
// const start = new Date(2026, 2, 27, 19, 30);
// const alias = start;
// const copy = new Date(start);
// copy.setHours(21);
// alias.setMinutes(45);
// console.log('  start:', `${start.getHours()}:${start.getMinutes()}`, '· copy:', `${copy.getHours()}:${copy.getMinutes()}`);
//
// const same = new Date(start);
// console.log('  start === same:', start === same, '· getTime iguales:', start.getTime() === same.getTime());
// console.log('  start < copy:', start < copy);
//
// const json = JSON.stringify({ title: 'Noche de estrellas', start });
// console.log('  JSON:', json);
// const restored = JSON.parse(json);
// console.log('  typeof restored.start:', typeof restored.start);
// console.log('  ¿mismo instante?', new Date(restored.start).getTime() === start.getTime());

console.log('\n✅ Lab completado.');
