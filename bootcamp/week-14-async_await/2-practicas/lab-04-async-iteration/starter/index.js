/**
 * 📘 Lab 04: Iteración asíncrona
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchValue = async (value, ms) => {
  await wait(ms);
  return value;
};

// Catálogo de constelaciones que se lee por páginas, como una API que no devuelve todo de golpe.
const CONSTELLATIONS = [
  'Andrómeda', 'Casiopea', 'Orión', 'Pegaso', 'Perseo', 'Lira', 'Cisne', 'Escorpio',
];

// ============================================
// PASO 1: for await...of con un array de promesas
// ============================================
console.log('--- Paso 1: for await...of ---');

// Descomenta las siguientes líneas:
// const pending = [fetchValue('Sol', 60), fetchValue('Luna', 20), fetchValue('Venus', 40)];
//
// for await (const body of pending) {
//   console.log('Recibido:', body);
// }

console.log('');

// ============================================
// PASO 2: Un generador asíncrono
// ============================================
console.log('--- Paso 2: async function* ---');

// Descomenta las siguientes líneas:
// async function* countdown(from) {
//   for (let count = from; count > 0; count -= 1) {
//     await wait(30);
//     yield count;
//   }
// }
//
// const iterator = countdown(3);
// console.log('next():', await iterator.next());
// for await (const count of iterator) {
//   console.log('Cuenta atrás:', count);
// }
// console.log('🚀 Despegue');

console.log('');

// ============================================
// PASO 3: Leer por páginas
// ============================================
console.log('--- Paso 3: Paginación ---');

// Descomenta las siguientes líneas:
// const getPage = async (page, size) => {
//   await wait(30);
//   const items = CONSTELLATIONS.slice((page - 1) * size, page * size);
//   return { items, hasMore: page * size < CONSTELLATIONS.length };
// };
//
// async function* pages(size) {
//   let page = 1;
//   let hasMore = true;
//   while (hasMore) {
//     const result = await getPage(page, size);
//     yield result.items;
//     hasMore = result.hasMore;
//     page += 1;
//   }
// }
//
// for await (const items of pages(3)) {
//   console.log('Página:', items);
// }

console.log('');

// ============================================
// PASO 4: yield* para delegar en otro generador
// ============================================
console.log('--- Paso 4: yield* ---');

// Descomenta las siguientes líneas:
// async function* allConstellations(size) {
//   for await (const items of pages(size)) {
//     yield* items;
//   }
// }
//
// const names = [];
// for await (const name of allConstellations(3)) {
//   names.push(name);
// }
// console.log(names.length, 'constelaciones:', names.join(', '));

console.log('');

// ============================================
// PASO 5: break detiene el generador
// ============================================
console.log('--- Paso 5: Salir antes ---');

// Descomenta las siguientes líneas:
// async function* tracedPages(size) {
//   try {
//     for await (const items of pages(size)) {
//       console.log('  (página pedida)');
//       yield items;
//     }
//   } finally {
//     console.log('  (generador cerrado)');
//   }
// }
//
// for await (const items of tracedPages(3)) {
//   if (items.includes('Pegaso')) {
//     console.log('Pegaso encontrado en', items);
//     break;
//   }
// }

console.log('');

// ============================================
// PASO 6: Errores dentro de for await
// ============================================
console.log('--- Paso 6: Errores ---');

// Descomenta las siguientes líneas:
// async function* unstableFeed() {
//   yield 'Lectura 1';
//   await wait(20);
//   yield 'Lectura 2';
//   throw new Error('Sensor desconectado');
// }
//
// try {
//   for await (const reading of unstableFeed()) {
//     console.log('✅', reading);
//   }
// } catch (error) {
//   console.log('❌', error.message);
// }

console.log('');

// ============================================
// PASO 7: Array.fromAsync
// ============================================
console.log('--- Paso 7: Array.fromAsync ---');

// Descomenta las siguientes líneas:
// const firstPages = await Array.fromAsync(pages(4));
// console.log(firstPages);
//
// const upper = await Array.fromAsync(allConstellations(4), (name) => name.toUpperCase());
// console.log(upper.slice(0, 3));

console.log('');
console.log('✅ Lab completado.');
