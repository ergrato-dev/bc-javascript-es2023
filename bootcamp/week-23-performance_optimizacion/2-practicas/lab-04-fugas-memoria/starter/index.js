/**
 * 📘 Lab 04: Fugas de memoria
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta:
 *
 *   node --expose-gc starter/index.js
 *
 * --expose-gc crea la función global gc(), que pide al recolector de basura que limpie ya.
 * Sin ella, el recolector limpia cuando él decide y las medidas de memoria cambian en cada
 * ejecución. No la uses en un programa de verdad: es solo para medir.
 * Los pasos van en orden y cada uno espera a que termine el anterior.
 */

import { getEventListeners } from 'node:events';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// La memoria ocupada por los objetos de JavaScript, en MB, después de limpiar.
const heapMB = async () => {
  await wait(10);
  gc();
  return process.memoryUsage().heapUsed / 1024 / 1024;
};

// ============================================
// PASO 1: Lo que se puede alcanzar no se borra
// ============================================
console.log('--- Paso 1: Alcanzable o no ---');

// Descomenta las siguientes líneas:
// const makeData = () => Array.from({ length: 200_000 }, (_, i) => ({ id: i }));
// const before = await heapMB();
// const processOnce = () => makeData().length;
// console.log('  fichas procesadas:', processOnce());
// const afterLocal = await heapMB();
// console.log('  tras una variable local:', Math.round(afterLocal - before), 'MB de más');
// const history = [];
// history.push(makeData());
// const afterGlobal = await heapMB();
// console.log('  tras guardarlas en history:', Math.round(afterGlobal - before), 'MB de más');
// history.length = 0;
// console.log('  tras vaciar history:', Math.round((await heapMB()) - before), 'MB de más');

// ============================================
// PASO 2: Listeners que se acumulan
// ============================================
console.log('\n--- Paso 2: Listeners ---');

// Descomenta las siguientes líneas:
// const bus = new EventTarget();
// let calls = 0;
// const mountLeaky = () => bus.addEventListener('refresh', () => (calls += 1));
// for (let i = 0; i < 5; i += 1) mountLeaky();
// bus.dispatchEvent(new Event('refresh'));
// console.log('  montado 5 veces sin quitar: listeners', getEventListeners(bus, 'refresh').length, '· llamadas por evento', calls);
// for (const listener of getEventListeners(bus, 'refresh')) bus.removeEventListener('refresh', listener);
//
// let controller = null;
// const mount = () => {
//   controller?.abort();
//   controller = new AbortController();
//   bus.addEventListener('refresh', () => (calls += 1), { signal: controller.signal });
// };
// calls = 0;
// for (let i = 0; i < 5; i += 1) mount();
// bus.dispatchEvent(new Event('refresh'));
// console.log('  con AbortController: listeners', getEventListeners(bus, 'refresh').length, '· llamadas por evento', calls);
// controller.abort();
// console.log('  tras abort():', getEventListeners(bus, 'refresh').length);

// ============================================
// PASO 3: Temporizadores olvidados
// ============================================
console.log('\n--- Paso 3: setInterval ---');

// Descomenta las siguientes líneas:
// const createClock = (label) => {
//   const data = new Array(100_000).fill(label);
//   let ticks = 0;
//   const timer = setInterval(() => (ticks += data.length > 0 ? 1 : 0), 20);
//   return { ticks: () => ticks, destroy: () => clearInterval(timer) };
// };
// const forgotten = createClock('olvidado');
// const cleaned = createClock('limpio');
// await wait(110);
// cleaned.destroy();
// const ticksCleaned = cleaned.ticks();
// await wait(200);
// console.log('  el limpio se paró en', ticksCleaned, 'ticks y sigue en', cleaned.ticks());
// console.log('  el olvidado sigue contando:', forgotten.ticks() > ticksCleaned);
// forgotten.destroy();

// ============================================
// PASO 4: Cachés que solo crecen
// ============================================
console.log('\n--- Paso 4: Caché con límite ---');

// Descomenta las siguientes líneas:
// const slowUpper = (text) => text.toUpperCase();
// const unbounded = new Map();
// const bounded = new Map();
// const MAX = 100;
// const cachedUnbounded = (text) => {
//   if (!unbounded.has(text)) unbounded.set(text, slowUpper(text));
//   return unbounded.get(text);
// };
// const cachedBounded = (text) => {
//   if (!bounded.has(text)) {
//     bounded.set(text, slowUpper(text));
//     if (bounded.size > MAX) bounded.delete(bounded.keys().next().value);
//   }
//   return bounded.get(text);
// };
// for (let i = 0; i < 50_000; i += 1) {
//   cachedUnbounded(`búsqueda ${i}`);
//   cachedBounded(`búsqueda ${i}`);
// }
// console.log('  50000 búsquedas distintas: sin límite', unbounded.size, '· con límite', bounded.size);
// console.log('  la más antigua que queda:', bounded.keys().next().value);

// ============================================
// PASO 5: Map contra WeakMap
// ============================================
console.log('\n--- Paso 5: WeakMap ---');

// Descomenta las siguientes líneas:
// const collected = [];
// const registry = new FinalizationRegistry((label) => collected.push(label));
// const strong = new Map();
// const weak = new WeakMap();
// let inMap = { name: 'ficha en un Map', data: new Array(100_000).fill(0) };
// let inWeakMap = { name: 'ficha en un WeakMap', data: new Array(100_000).fill(0) };
// strong.set(inMap, 'visto');
// weak.set(inWeakMap, 'visto');
// registry.register(inMap, inMap.name);
// registry.register(inWeakMap, inWeakMap.name);
// inMap = null;
// inWeakMap = null;
// await heapMB();
// await wait(50);
// console.log('  borradas por el recolector:', collected.join(', ') || 'ninguna');
// console.log('  el Map todavía tiene:', strong.size, 'ficha');

// ============================================
// PASO 6: Closures que guardan de más
// ============================================
console.log('\n--- Paso 6: Closures ---');

// Descomenta las siguientes líneas:
// const base = await heapMB();
// const makeReportLeaky = (rows) => () => `${rows.length} filas`;
// const makeReport = (rows) => {
//   const count = rows.length;
//   return () => `${count} filas`;
// };
// const reports = [];
// for (let i = 0; i < 5; i += 1) reports.push(makeReportLeaky(Array.from({ length: 100_000 }, (_, j) => ({ j }))));
// const leaky = await heapMB();
// console.log('  5 informes que guardan sus filas:', Math.round(leaky - base), 'MB ·', reports[0]());
// reports.length = 0;
// for (let i = 0; i < 5; i += 1) reports.push(makeReport(Array.from({ length: 100_000 }, (_, j) => ({ j }))));
// console.log('  5 informes que guardan solo el número:', Math.round((await heapMB()) - base), 'MB ·', reports[0]());
// console.log('\n✅ Lab completado.');
