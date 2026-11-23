/**
 * 📘 Lab 01: Medir el rendimiento
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta:
 *
 *   node starter/index.js
 *
 * Node 24 trae performance.now(), performance.mark() y performance.measure() igual que el
 * navegador. Los tiempos dependen de tu equipo: los tuyos serán otros, pero las conclusiones
 * (qué es más rápido y cuánto, más o menos) deberían coincidir con las del README.
 * Los pasos van en orden: cada uno usa lo de los anteriores.
 */

// Escribe unos milisegundos con dos decimales: ms(1.23456) → '1.23 ms'.
const ms = (value) => `${value.toFixed(2)} ms`;

// Un catálogo de prueba: 2000 fichas con nombres como 'Nebulosa de Orión 7'.
const NAMES = ['Sirio', 'Vega', 'Nebulosa de Orión', 'Pléyades', 'Galaxia de Andrómeda'];
const records = Array.from({ length: 2000 }, (_, i) => ({ id: i + 1, name: `${NAMES[i % 5]} ${i + 1}` }));

// Quita tildes y pasa a minúsculas: clean('Orión') → 'orion'.
const clean = (text) => text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

// ============================================
// PASO 1: Date.now() y performance.now()
// ============================================
console.log('--- Paso 1: Date.now() y performance.now() ---');

// Descomenta las siguientes líneas:
// console.log('  Date.now():', Date.now());
// console.log('  performance.now():', performance.now());
// const startDate = Date.now();
// const start = performance.now();
// let total = 0;
// for (let i = 0; i < 1_000_000; i += 1) total += i;
// console.log('  sumar un millón de números, con performance.now():', ms(performance.now() - start));
// console.log('  lo mismo con Date.now():', Date.now() - startDate, 'ms');

// ============================================
// PASO 2: Marcas y medidas con nombre
// ============================================
console.log('\n--- Paso 2: mark y measure ---');

// Descomenta las siguientes líneas:
// performance.mark('limpiar:inicio');
// const cleaned = records.map((record) => clean(record.name));
// performance.mark('limpiar:fin');
// const entry = performance.measure('limpiar', 'limpiar:inicio', 'limpiar:fin');
// console.log('  medida:', entry.name, '·', entry.entryType, '·', ms(entry.duration));
// console.log('  marcas guardadas:', performance.getEntriesByType('mark').map((mark) => mark.name).join(', '));
// console.log('  la tercera, limpia:', cleaned[2]);
// performance.clearMarks();
// performance.clearMeasures();
// console.log('  tras clearMarks:', performance.getEntriesByType('mark').length);

// ============================================
// PASO 3: Una sola medida engaña
// ============================================
console.log('\n--- Paso 3: Repetir y quedarse con la mediana ---');

// Descomenta las siguientes líneas:
// const median = (values) => {
//   const sorted = values.toSorted((a, b) => a - b);
//   const middle = Math.floor(sorted.length / 2);
//   return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
// };
// const timeIt = (fn, runs = 7) => {
//   const times = [];
//   for (let i = 0; i < runs; i += 1) {
//     const begin = performance.now();
//     fn();
//     times.push(performance.now() - begin);
//   }
//   return times;
// };
// const sortNames = () => records.map((record) => record.name).toSorted((a, b) => a.localeCompare(b));
// const times = timeIt(sortNames);
// console.log('  7 vueltas:', times.map((time) => time.toFixed(2)).join(' · '));
// console.log('  la primera es la más lenta:', times[0] === Math.max(...times));
// console.log('  mediana:', ms(median(times)));

// ============================================
// PASO 4: Comparar dos formas de hacer lo mismo
// ============================================
console.log('\n--- Paso 4: includes en un array contra has en un Set ---');

// Descomenta las siguientes líneas:
// const ids = records.map((record) => record.id);
// const idSet = new Set(ids);
// const wanted = Array.from({ length: 2000 }, (_, i) => i * 2);
// const withArray = median(timeIt(() => wanted.filter((id) => ids.includes(id))));
// const withSet = median(timeIt(() => wanted.filter((id) => idSet.has(id))));
// console.log('  array.includes:', ms(withArray));
// console.log('  set.has:', ms(withSet));
// console.log('  el Set es', Math.round(withArray / withSet), 'veces más rápido');
// console.log('  mismos resultados:', wanted.filter((id) => ids.includes(id)).length === wanted.filter((id) => idSet.has(id)).length);

// ============================================
// PASO 5: No repetir el trabajo que no cambia
// ============================================
console.log('\n--- Paso 5: Preparar una vez, buscar muchas ---');

// Descomenta las siguientes líneas:
// const queries = ['orion', 'vega', 'andromeda', 'sirio', 'pleyades'];
// const searchSlow = (query) => records.filter((record) => clean(record.name).includes(query));
// const prepared = records.map((record) => ({ record, text: clean(record.name) }));
// const searchFast = (query) => prepared.filter((item) => item.text.includes(query)).map((item) => item.record);
// const slow = median(timeIt(() => queries.map(searchSlow)));
// const fast = median(timeIt(() => queries.map(searchFast)));
// console.log('  limpiando en cada búsqueda:', ms(slow));
// console.log('  con los textos ya limpios:', ms(fast));
// console.log('  más rápido con los textos limpios:', fast < slow);
// console.log('  resultados de «orion»:', searchSlow('orion').length, searchFast('orion').length);

// ============================================
// PASO 6: console.time y PerformanceObserver
// ============================================
console.log('\n--- Paso 6: console.time y PerformanceObserver ---');

// Descomenta las siguientes líneas:
// console.time('ordenar');
// sortNames();
// console.timeEnd('ordenar');
// const observer = new PerformanceObserver((list) => {
//   for (const item of list.getEntries()) console.log('  observado:', item.name, item.duration > 0);
//   observer.disconnect();
//   console.log('\n✅ Lab completado.');
// });
// observer.observe({ type: 'measure' });
// performance.mark('buscar:inicio');
// queries.map(searchFast);
// performance.measure('buscar', 'buscar:inicio');
// console.log('  medida creada; el observador avisa después');
