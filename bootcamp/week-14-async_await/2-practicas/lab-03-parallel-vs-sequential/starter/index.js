/**
 * 📘 Lab 03: En orden o a la vez
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Simula una consulta que tarda `ms` milisegundos y devuelve `value`.
const fetchValue = async (value, ms = 100) => {
  await wait(ms);
  return value;
};

// Cronómetro: start() lo pone a cero y elapsed() da el tiempo redondeado a la centena de ms,
// para que la salida sea la misma en cualquier equipo.
let startedAt = 0;
const start = () => {
  startedAt = performance.now();
};
const elapsed = () => `${Math.round((performance.now() - startedAt) / 100) * 100} ms`;

// ============================================
// PASO 1: En orden, un await detrás de otro
// ============================================
console.log('--- Paso 1: Secuencial ---');

// Descomenta las siguientes líneas:
// start();
// const mercury = await fetchValue('Mercurio');
// const venus = await fetchValue('Venus');
// const earth = await fetchValue('Tierra');
// console.log([mercury, venus, earth], elapsed());

console.log('');

// ============================================
// PASO 2: A la vez, con Promise.all
// ============================================
console.log('--- Paso 2: Paralelo con Promise.all ---');

// Descomenta las siguientes líneas:
// start();
// const planets = await Promise.all([
//   fetchValue('Mercurio'),
//   fetchValue('Venus'),
//   fetchValue('Tierra'),
// ]);
// console.log(planets, elapsed());

console.log('');

// ============================================
// PASO 3: Lanzar primero, esperar después
// ============================================
console.log('--- Paso 3: Lanzar y luego esperar ---');

// Descomenta las siguientes líneas:
// start();
// const marsPromise = fetchValue('Marte');
// const jupiterPromise = fetchValue('Júpiter');
// const mars = await marsPromise;
// const jupiter = await jupiterPromise;
// console.log([mars, jupiter], elapsed());

console.log('');

// ============================================
// PASO 4: Mixto: lo que depende, en orden; lo demás, a la vez
// ============================================
console.log('--- Paso 4: Mixto ---');

// Descomenta las siguientes líneas:
// const getShow = (id) => fetchValue({ id, title: 'Anillos de Saturno' });
// const getRoom = (show) => fetchValue(`Sala de ${show.title}`);
// const getSeats = (show) => fetchValue(show.id * 10);
//
// start();
// const show = await getShow(4);
// const [room, seats] = await Promise.all([getRoom(show), getSeats(show)]);
// console.log({ room, seats }, elapsed());

console.log('');

// ============================================
// PASO 5: Promise.allSettled con await
// ============================================
console.log('--- Paso 5: allSettled ---');

// Descomenta las siguientes líneas:
// const failing = async () => {
//   await wait(50);
//   throw new Error('Telescopio sin conexión');
// };
//
// const results = await Promise.allSettled([fetchValue('Mapa estelar', 50), failing()]);
// for (const result of results) {
//   if (result.status === 'fulfilled') console.log('✅', result.value);
//   else console.log('❌', result.reason.message);
// }

console.log('');

// ============================================
// PASO 6: forEach no espera
// ============================================
console.log('--- Paso 6: forEach vs for...of ---');

// Descomenta las siguientes líneas:
// const names = ['Luna', 'Fobos', 'Europa'];
//
// names.forEach(async (name) => {
//   const value = await fetchValue(name, 50);
//   console.log('forEach:', value);
// });
// console.log('forEach terminó (sin esperar a nadie)');
// await wait(100);
//
// for (const name of names) {
//   const value = await fetchValue(name, 50);
//   console.log('for...of:', value);
// }
// console.log('for...of terminó');

console.log('');

// ============================================
// PASO 7: Como mucho N a la vez
// ============================================
console.log('--- Paso 7: Concurrencia limitada ---');

// Descomenta las siguientes líneas:
// const moons = ['Ío', 'Europa', 'Ganímedes', 'Calisto', 'Titán', 'Encélado'];
// const limit = 2;
// const loaded = [];
//
// start();
// for (let index = 0; index < moons.length; index += limit) {
//   const group = moons.slice(index, index + limit);
//   loaded.push(...(await Promise.all(group.map((moon) => fetchValue(moon)))));
//   console.log(`Grupo ${group.join(' + ')} listo a los ${elapsed()}`);
// }
// console.log(loaded.length, 'lunas en', elapsed());

console.log('');
console.log('✅ Lab completado.');
