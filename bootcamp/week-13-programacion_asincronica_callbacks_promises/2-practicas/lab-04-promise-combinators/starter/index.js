/**
 * 📘 Lab 04: Combinadores de promesas
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// Cumple la promesa con `value` pasados `ms` milisegundos.
const succeedAfter = (ms, value) => new Promise((resolve) => setTimeout(() => resolve(value), ms));

// Rechaza la promesa con un Error de mensaje `message` pasados `ms` milisegundos.
const failAfter = (ms, message) => new Promise((_, reject) => {
  setTimeout(() => reject(new Error(message)), ms);
});

// Milisegundos desde `start`, redondeados a la decena (cada ejecución varía unos pocos ms).
const elapsed = (start) => Math.round((performance.now() - start) / 10) * 10;

// ============================================
// PASO 1: Promise.all() en paralelo
// ============================================
console.log('--- Paso 1: Promise.all() ---');

// Descomenta las siguientes líneas:
// const start = performance.now();
// await Promise.all([
//   succeedAfter(200, { name: 'Ana' }),
//   succeedAfter(300, ['Viaje a Marte', 'Cielo de invierno']),
//   succeedAfter(100, ['F4', 'F5']),
// ]).then(([visitor, shows, seats]) => {
//   console.log('Visitante:', visitor.name);
//   console.log('Sesiones:', shows.length);
//   console.log('Butacas:', seats.length);
//   console.log(`Tardó unos ${elapsed(start)} ms, no 600`);
// });

console.log('');

// ============================================
// PASO 2: Promise.all() con un error
// ============================================
console.log('--- Paso 2: Promise.all() con un error ---');

// Descomenta las siguientes líneas:
// await Promise.all([
//   succeedAfter(50, 'Sesiones'),
//   failAfter(100, 'Reservas no responde'),
//   succeedAfter(150, 'Tienda'),
// ])
//   .then((results) => console.log('Todas bien:', results))
//   .catch((error) => console.log('❌ Falló una:', error.message));

console.log('');

// ============================================
// PASO 3: Promise.race() - la primera que termina
// ============================================
console.log('--- Paso 3: Promise.race() ---');

// Descomenta las siguientes líneas:
// await Promise.race([
//   succeedAfter(300, 'Lenta (300 ms)'),
//   succeedAfter(100, 'Rápida (100 ms)'),
//   succeedAfter(200, 'Media (200 ms)'),
// ]).then((winner) => console.log('Gana:', winner));

console.log('');

// ============================================
// PASO 4: Tiempo límite con race()
// ============================================
console.log('--- Paso 4: Tiempo límite ---');

// Descomenta las siguientes líneas:
// const withTimeout = (promise, ms) => Promise.race([
//   promise,
//   failAfter(ms, `Tiempo agotado: ${ms} ms`),
// ]);
//
// await withTimeout(succeedAfter(100, 'Datos a tiempo'), 300)
//   .then((data) => console.log('✅', data))
//   .catch((error) => console.log('❌', error.message));
// await withTimeout(succeedAfter(500, 'Datos tarde'), 200)
//   .then((data) => console.log('✅', data))
//   .catch((error) => console.log('❌', error.message));
// await succeedAfter(300); // espera a que acabe el temporizador que perdió

console.log('');

// ============================================
// PASO 5: Promise.allSettled() - todas, fallen o no
// ============================================
console.log('--- Paso 5: Promise.allSettled() ---');

// Descomenta las siguientes líneas:
// const sources = ['Sesiones', 'Reservas', 'Tienda'];
// await Promise.allSettled([
//   succeedAfter(50, [1, 2, 3]),
//   failAfter(100, 'Reservas no responde'),
//   succeedAfter(150, [4, 5]),
// ]).then((results) => {
//   console.log('Claves:', Object.keys(results[0]), Object.keys(results[1]));
//   results.forEach((result, index) => {
//     if (result.status === 'fulfilled') {
//       console.log(`✅ ${sources[index]}:`, result.value);
//     } else {
//       console.log(`❌ ${sources[index]}:`, result.reason.message);
//     }
//   });
// });

console.log('');

// ============================================
// PASO 6: Promise.any() - la primera que sale bien
// ============================================
console.log('--- Paso 6: Promise.any() ---');

// Descomenta las siguientes líneas:
// await Promise.any([
//   succeedAfter(300, 'Espejo lento'),
//   failAfter(100, 'Espejo 1 caído'),
//   succeedAfter(200, 'Espejo medio'),
// ]).then((result) => console.log('Primera con éxito:', result));
//
// await Promise.any([
//   failAfter(50, 'Espejo 1 caído'),
//   failAfter(100, 'Espejo 2 caído'),
// ]).catch((error) => {
//   console.log(error.name + ':', error.message);
//   console.log('Errores:', error.errors.map(({ message }) => message));
// });

console.log('');

// ============================================
// PASO 7: Los cuatro con las mismas promesas
// ============================================
console.log('--- Paso 7: Comparación ---');

// Descomenta las siguientes líneas:
// const createPromises = () => [
//   succeedAfter(200, 'P1 (200 ms)'),
//   failAfter(100, 'P2 falla (100 ms)'),
//   succeedAfter(300, 'P3 (300 ms)'),
// ];
//
// await Promise.all(createPromises())
//   .then((result) => console.log('all        →', result))
//   .catch((error) => console.log('all        → ❌', error.message));
// await Promise.race(createPromises())
//   .then((result) => console.log('race       →', result))
//   .catch((error) => console.log('race       → ❌', error.message));
// await Promise.allSettled(createPromises())
//   .then((results) => console.log('allSettled →', results.map(({ status }) => status)));
// await Promise.any(createPromises())
//   .then((result) => console.log('any        →', result))
//   .catch((error) => console.log('any        → ❌', error.message));
// await succeedAfter(300); // espera a las promesas que siguen en marcha

console.log('');
console.log('✅ Lab completado.');
