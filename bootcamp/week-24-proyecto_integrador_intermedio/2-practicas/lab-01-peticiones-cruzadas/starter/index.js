/**
 * 📘 Lab 01: Peticiones que se cruzan
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta:
 *
 *   node starter/index.js
 *
 * No hay servidor: `fakeApi` responde con setTimeout después de los milisegundos que le pidas,
 * y `at()` dice en qué momento pasa cada cosa, redondeado a 10 ms para que tu salida coincida
 * con la del README. Los pasos van en orden y cada uno espera a que termine el anterior.
 */

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Los milisegundos desde que empezó el paso, redondeados a 10: '  250 ms'.
let start = performance.now();
const restart = () => { start = performance.now(); };
const at = () => `${String(Math.round((performance.now() - start) / 10) * 10).padStart(5)} ms`;

const CATALOG = ['Sirio', 'Vega', 'Betelgeuse', 'Nebulosa de Orión', 'Pléyades', 'Galaxia de Andrómeda'];

// Una API falsa: busca `query` en CATALOG y responde a los `ms` milisegundos.
// - Si `signal` se cancela antes, rechaza con el motivo del signal (AbortError o TimeoutError).
// - Con fail: 'red' rechaza con un TypeError, como fetch cuando no hay conexión.
// - Con fail: 404 (u otro número) rechaza con un error que lleva ese status.
const fakeApi = (query, { ms = 100, signal, fail } = {}) =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      if (fail === 'red') return reject(new TypeError('fetch failed'));
      if (typeof fail === 'number') return reject(Object.assign(new Error(`HTTP ${fail}`), { status: fail }));
      resolve(CATALOG.filter((name) => name.toLowerCase().includes(query.toLowerCase())));
    }, ms);
    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(signal.reason);
    });
  });

// La «pantalla»: lo último que se pintó.
let screen = '';
const paint = (query, results) => {
  screen = `«${query}»: ${results.join(', ')}`;
  console.log(`  ${at()} pinto ${screen}`);
};

// ============================================
// PASO 1: La respuesta vieja llega la última
// ============================================
console.log('--- Paso 1: Pintar cada respuesta que llega ---');

// Descomenta las siguientes líneas:
// restart();
// const naive = async (query, ms) => paint(query, await fakeApi(query, { ms }));
// naive('e', 300);                // la persona escribe «e»: esta búsqueda tarda 300 ms
// await wait(50);
// naive('ega', 100);              // sigue escribiendo «ega»: esta tarda solo 100 ms
// await wait(400);
// console.log(`  En pantalla: ${screen}`);

// ============================================
// PASO 2: Ignorar las respuestas viejas con un contador
// ============================================
console.log('\n--- Paso 2: Solo cuenta la última búsqueda ---');

// Descomenta las siguientes líneas:
// restart();
// let lastId = 0;
// const counted = async (query, ms) => {
//   lastId += 1;
//   const id = lastId;            // el número de esta búsqueda
//   const results = await fakeApi(query, { ms });
//   if (id !== lastId) return console.log(`  ${at()} ignoro «${query}»: ya hay una búsqueda más nueva`);
//   paint(query, results);
// };
// counted('e', 300);
// await wait(50);
// counted('ega', 100);
// await wait(400);
// console.log(`  En pantalla: ${screen}`);

// ============================================
// PASO 3: Cancelar la búsqueda vieja con AbortController
// ============================================
console.log('\n--- Paso 3: Cada búsqueda cancela la anterior ---');

// Descomenta las siguientes líneas:
// restart();
// let controller = null;
// const cancelling = async (query, ms) => {
//   controller?.abort();          // cancela la anterior, si la hay
//   controller = new AbortController();
//   try {
//     paint(query, await fakeApi(query, { ms, signal: controller.signal }));
//   } catch (error) {
//     if (error.name !== 'AbortError') throw error;
//     console.log(`  ${at()} «${query}» cancelada (${error.name})`);
//   }
// };
// cancelling('e', 300);
// await wait(50);
// cancelling('ega', 100);
// await wait(400);
// console.log(`  En pantalla: ${screen}`);

// ============================================
// PASO 4: Un tiempo máximo y una cancelación a la vez
// ============================================
console.log('\n--- Paso 4: AbortSignal.timeout y AbortSignal.any ---');

// Descomenta las siguientes líneas:
// const search = async (query, { ms, timeout, signal }) => {
//   restart();
//   const both = AbortSignal.any([AbortSignal.timeout(timeout), signal].filter(Boolean));
//   try {
//     paint(query, await fakeApi(query, { ms, signal: both }));
//   } catch (error) {
//     console.log(`  ${at()} «${query}» falla con ${error.name}`);
//   }
// };
// await search('vega', { ms: 100, timeout: 200 });
// await search('vega', { ms: 500, timeout: 200 });
// const mine = new AbortController();
// setTimeout(() => mine.abort(), 50);
// await search('vega', { ms: 500, timeout: 200, signal: mine.signal });

// ============================================
// PASO 5: Varias peticiones a la vez: allSettled
// ============================================
console.log('\n--- Paso 5: Tres búsquedas a la vez ---');

// Descomenta las siguientes líneas:
// restart();
// const queries = ['e', 'nebulosa', 'vega'];
// const results = await Promise.allSettled([
//   fakeApi('e', { ms: 120 }),
//   fakeApi('nebulosa', { ms: 80 }),
//   fakeApi('vega', { ms: 50, fail: 'red' }),
// ]);
// console.log(`  ${at()} todas han terminado`);
// results.forEach((result, i) => {
//   if (result.status === 'fulfilled') console.log(`  ✅ «${queries[i]}»: ${result.value.join(', ')}`);
//   else console.log(`  ⚠️  «${queries[i]}»: no se pudo cargar (${result.reason.message})`);
// });

// ============================================
// PASO 6: Reintentar solo lo que tiene sentido
// ============================================
console.log('\n--- Paso 6: Reintentos con espera creciente ---');

// Descomenta las siguientes líneas:
// const withRetry = async (request, { retries = 3, delay = 100 } = {}) => {
//   for (let attempt = 1; ; attempt += 1) {
//     try {
//       return await request(attempt);
//     } catch (error) {
//       const retryable = error instanceof TypeError || error.status >= 500;
//       console.log(`  ${at()} intento ${attempt}: ${error.message}${retryable ? '' : ' (no se reintenta)'}`);
//       if (!retryable || attempt > retries) throw error;
//       await wait(delay * 2 ** (attempt - 1));   // 100, 200, 400 ms...
//     }
//   }
// };
// restart();
// const flaky = (attempt) => fakeApi('vega', { ms: 10, fail: attempt < 3 ? 'red' : undefined });
// const found = await withRetry(flaky);
// console.log(`  ${at()} resultado: ${found}`);
// restart();
// await withRetry(() => fakeApi('vega', { ms: 10, fail: 404 })).catch(() => {});
// restart();
// await withRetry(() => fakeApi('vega', { ms: 10, fail: 503 }), { retries: 2 }).catch((error) => console.log(`  ${at()} me rindo: ${error.message}`));

console.log('\n✅ Lab completado.');
