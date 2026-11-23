/**
 * 📘 Lab 04: Zonas horarias y Temporal
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Los pasos van en orden: cada uno usa lo que definen los anteriores.
 */

// Un instante fijo: el 28 de marzo de 2026 a las 00:30 UTC.
const launch = new Date('2026-03-28T00:30:00Z');
const ZONES = ['America/Bogota', 'America/Mexico_City', 'Europe/Madrid', 'Asia/Tokyo', 'UTC'];

// ============================================
// PASO 1: Tu zona y el mismo instante en varias
// ============================================
console.log('--- Paso 1: Un instante, cinco zonas ---');

// Descomenta las siguientes líneas:
// console.log('  Tu zona:', Intl.DateTimeFormat().resolvedOptions().timeZone);
// const inZone = (date, timeZone) =>
//   new Intl.DateTimeFormat('es', { weekday: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone }).format(date);
// for (const timeZone of ZONES) {
//   console.log(`  ${timeZone.padEnd(20)} ${inZone(launch, timeZone)}`);
// }
// try {
//   inZone(launch, 'Marte/Olympus');
// } catch (error) {
//   console.log(`  Zona inventada: ${error.name}`);
// }

// ============================================
// PASO 2: El desfase depende de la fecha
// ============================================
console.log('--- Paso 2: Desfases ---');

// Descomenta las siguientes líneas:
// const offsetOf = (date, timeZone) =>
//   new Intl.DateTimeFormat('en', { timeZone, timeZoneName: 'shortOffset' })
//     .formatToParts(date)
//     .find((part) => part.type === 'timeZoneName').value;
// const dates = ['2026-01-15T12:00Z', '2026-03-28T12:00Z', '2026-03-29T12:00Z', '2026-07-15T12:00Z'];
// for (const timeZone of ['America/Bogota', 'Europe/Madrid', 'America/New_York']) {
//   console.log(`  ${timeZone.padEnd(17)} ${dates.map((iso) => offsetOf(new Date(iso), timeZone)).join('  ')}`);
// }

// ============================================
// PASO 3: Guardar en UTC, mostrar en la zona de quien lee
// ============================================
console.log('--- Paso 3: Las tres capas ---');

// Descomenta las siguientes líneas:
// // Un evento en directo desde Madrid, guardado como lo guardaría un servidor.
// const stored = JSON.stringify({ title: 'Eclipse en directo', start: '2026-08-12T17:30:00.000Z', zone: 'Europe/Madrid' });
// const event = JSON.parse(stored);
// const start = new Date(event.start);
// const label = (date, timeZone) =>
//   new Intl.DateTimeFormat('es', { dateStyle: 'medium', timeStyle: 'short', timeZone }).format(date);
// console.log('  Guardado:', event.start);
// console.log(`  En ${event.zone}: ${label(start, event.zone)} (${offsetOf(start, event.zone)})`);
// for (const viewer of ['America/Bogota', 'America/Mexico_City']) {
//   console.log(`  Quien lo ve en ${viewer}: ${label(start, viewer)}`);
// }

// ============================================
// PASO 4: Temporal con fechas de calendario
// ============================================
console.log('--- Paso 4: Temporal.PlainDate ---');

// Descomenta las siguientes líneas:
// if (typeof Temporal === 'undefined') {
//   console.log('  Este navegador no tiene Temporal: prueba los pasos 4 y 5 en Chrome, Edge o Firefox.');
// } else {
//   const day = Temporal.PlainDate.from('2026-03-27');
//   console.log('  day:', day.toString(), '· mes', day.month, '· día de la semana', day.dayOfWeek, '· días del mes', day.daysInMonth);
//   console.log('  +5 días:', day.add({ days: 5 }).toString(), '· 31 ene + 1 mes:', Temporal.PlainDate.from('2026-01-31').add({ months: 1 }).toString());
//   console.log('  días hasta el 2 de abril:', day.until(Temporal.PlainDate.from('2026-04-02')).days);
//   console.log('  ¿day cambió?', day.toString());
//   try {
//     Temporal.PlainDate.from('2026-02-30');
//   } catch (error) {
//     console.log(`  30 de febrero: ${error.name}`);
//   }
//   const sorted = ['2026-10-02', '2026-03-27', '2026-03-05'].map((text) => Temporal.PlainDate.from(text)).toSorted(Temporal.PlainDate.compare);
//   console.log('  ordenadas:', sorted.map(String).join(' '));
// }

// ============================================
// PASO 5: Temporal con zonas
// ============================================
console.log('--- Paso 5: Temporal.ZonedDateTime ---');

// Descomenta las siguientes líneas:
// if (typeof Temporal !== 'undefined') {
//   const talk = Temporal.ZonedDateTime.from({ timeZone: 'Europe/Madrid', year: 2026, month: 3, day: 27, hour: 19, minute: 30 });
//   console.log('  talk:', talk.toString());
//   console.log('  instante:', talk.toInstant().toString());
//   console.log('  en Bogotá:', talk.withTimeZone('America/Bogota').toPlainDateTime().toString());
//   const noon = Temporal.ZonedDateTime.from('2026-03-28T12:00[Europe/Madrid]');
//   console.log('  +1 día:  ', noon.add({ days: 1 }).toPlainDateTime().toString());
//   console.log('  +24 h:   ', noon.add({ hours: 24 }).toPlainDateTime().toString());
//   const duration = Temporal.Duration.from({ hours: 1, minutes: 30 });
//   console.log('  termina:', talk.add(duration).toPlainTime().toString(), '·', duration.toString(), '=', duration.total('minutes'), 'min');
//   console.log('  Date → Temporal:', launch.toTemporalInstant().toString());
// }

// ============================================
// PASO 6: Un reloj mundial
// ============================================
console.log('--- Paso 6: Reloj mundial ---');

// Descomenta las siguientes líneas:
// const list = document.querySelector('#clocks');
// const items = ZONES.map((timeZone) => {
//   const item = document.createElement('li');
//   const name = document.createElement('span');
//   name.textContent = timeZone.split('/').at(-1).replaceAll('_', ' ');
//   const time = document.createElement('time');
//   item.append(name, time);
//   list.append(item);
//   return { timeZone, time };
// });
// const tick = () => {
//   const now = new Date();
//   for (const { timeZone, time } of items) {
//     time.dateTime = now.toISOString();
//     time.textContent = new Intl.DateTimeFormat('es', { weekday: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23', timeZone }).format(now);
//   }
// };
// tick();
// setInterval(tick, 1000);
// console.log('  Relojes en la página:', list.children.length);

console.log('\n✅ Lab completado.');
