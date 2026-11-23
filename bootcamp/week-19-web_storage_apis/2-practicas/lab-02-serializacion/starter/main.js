/**
 * 📘 Lab 02: Serialización con JSON
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Cada paso es independiente. Las claves del lab empiezan por «lab19:demo:».
 */

for (const key of Object.keys(localStorage)) {
  if (key.startsWith('lab19:demo:')) localStorage.removeItem(key);
}

// ============================================
// PASO 1: Ida y vuelta, y lo que se pierde
// ============================================
console.log('--- Paso 1: JSON.stringify y JSON.parse ---');

// Descomenta las siguientes líneas:
// const pass = { id: 7, holder: 'Lucía', adults: 2, kids: 0, active: true, tanks: ['Arrecife', 'Medusas'] };
// localStorage.setItem('lab19:demo:pass', JSON.stringify(pass));
// console.log('Guardado:', localStorage.getItem('lab19:demo:pass'));
// const back = JSON.parse(localStorage.getItem('lab19:demo:pass'));
// console.log(`Leído: ${back.holder}, ${back.adults} adultos, tanques ${back.tanks.length} · ¿mismo objeto? ${back === pass}`);
//
// const tricky = { note: undefined, greet() {}, ratio: NaN, top: Infinity, list: [undefined, () => 1] };
// console.log('Con valores raros:', JSON.stringify(tricky));
// try {
//   JSON.stringify({ visits: 10n });
// } catch (error) {
//   console.log(`BigInt: ${error.name}: ${error.message}`);
// }

console.log('');

// ============================================
// PASO 2: Las fechas vuelven como texto
// ============================================
console.log('--- Paso 2: Date y reviver ---');

// Descomenta las siguientes líneas:
// const renewal = { id: 7, expires: new Date('2026-12-31T10:00:00Z') };
// const text = JSON.stringify(renewal);
// console.log('Texto:', text);
// const plain = JSON.parse(text);
// console.log(`Sin reviver: ${typeof plain.expires} · ¿tiene getFullYear? ${typeof plain.expires.getFullYear}`);
// const revive = (key, value) => (key === 'expires' ? new Date(value) : value);
// const revived = JSON.parse(text, revive);
// console.log(`Con reviver: ${revived.expires instanceof Date} · año ${revived.expires.getUTCFullYear()}`);

console.log('');

// ============================================
// PASO 3: Map y Set no se guardan solos
// ============================================
console.log('--- Paso 3: Map y Set ---');

// Descomenta las siguientes líneas:
// const capacity = new Map([['Arrecife', 40], ['Medusas', 15]]);
// const favorites = new Set(['Medusas']);
// console.log('Tal cual:', JSON.stringify({ capacity, favorites }));
// const saved = JSON.stringify({ capacity: [...capacity], favorites: [...favorites] });
// console.log('Como arrays:', saved);
// const data = JSON.parse(saved);
// const capacityBack = new Map(data.capacity);
// const favoritesBack = new Set(data.favorites);
// console.log(`Recuperados: Medusas → ${capacityBack.get('Medusas')} · ¿favorito Arrecife? ${favoritesBack.has('Arrecife')}`);

console.log('');

// ============================================
// PASO 4: Datos rotos o que no existen
// ============================================
console.log('--- Paso 4: JSON corrupto y null ---');

// Descomenta las siguientes líneas:
// localStorage.setItem('lab19:demo:broken', '{"id": 7, "holder": ');
// try {
//   JSON.parse(localStorage.getItem('lab19:demo:broken'));
// } catch (error) {
//   console.log(`${error.name}: ${error.message}`);
// }
// console.log('JSON.parse(null):', JSON.parse(localStorage.getItem('lab19:demo:nada')));
//
// const readJSON = (key, fallback) => {
//   const text = localStorage.getItem(key);
//   if (text === null) return fallback;
//   try {
//     return JSON.parse(text);
//   } catch {
//     console.warn(`«${key}» no es JSON válido: se usa el valor por defecto`);
//     return fallback;
//   }
// };
// console.log('readJSON de la rota:', readJSON('lab19:demo:broken', []));
// console.log('readJSON de la que no existe:', readJSON('lab19:demo:nada', []));

console.log('');

// ============================================
// PASO 5: Comprobar la forma de lo que lees
// ============================================
console.log('--- Paso 5: Validar lo leído ---');

// Descomenta las siguientes líneas:
// const isPass = (value) =>
//   typeof value === 'object' && value !== null &&
//   Number.isInteger(value.id) && typeof value.holder === 'string' && Number.isInteger(value.adults);
// const samples = ['{"id":7,"holder":"Lucía","adults":2}', '{"id":"7","holder":"Lucía"}', '[1,2,3]', 'null', '42'];
// for (const sample of samples) console.log(`${sample.padEnd(36)} → ${isPass(JSON.parse(sample))}`);

console.log('');

// ============================================
// PASO 6: Versionar lo que guardas
// ============================================
console.log('--- Paso 6: Un sobre con versión ---');

// Descomenta las siguientes líneas:
// const VERSION = 2;
// const migrate = (envelope) => {
//   if (Array.isArray(envelope)) {
//     // Versión 1: un array de nombres. La 2 guarda objetos con nombre y adultos.
//     return { version: 2, passes: envelope.map((holder, index) => ({ id: index + 1, holder, adults: 1 })) };
//   }
//   if (envelope.version === VERSION) return envelope;
//   throw new Error(`Versión desconocida: ${envelope.version}`);
// };
// localStorage.setItem('lab19:demo:passes', JSON.stringify(['Lucía', 'Omar']));
// const loaded = migrate(JSON.parse(localStorage.getItem('lab19:demo:passes')));
// localStorage.setItem('lab19:demo:passes', JSON.stringify(loaded));
// console.log('Migrado y guardado:', localStorage.getItem('lab19:demo:passes'));
// console.log('Ya en la versión 2:', migrate(JSON.parse(localStorage.getItem('lab19:demo:passes'))).passes.length, 'abonos');
// try {
//   migrate({ version: 3, passes: [] });
// } catch (error) {
//   console.log(error.message);
// }

console.log('');
console.log('✅ Lab completado.');
