/**
 * 📘 Lab 02: Debounce y throttle
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta:
 *
 *   node starter/index.js
 *
 * En lugar de teclear o hacer scroll de verdad, el lab programa «eventos» con setTimeout en
 * momentos fijos (cada 100 ms, cada 20 ms...) y escribe en qué momento pasa cada cosa,
 * redondeado a 10 ms para que tu salida coincida con la del README.
 * Los pasos van en orden y cada uno espera a que termine el anterior.
 */

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Los milisegundos desde que empezó el paso, redondeados a 10: '250 ms'.
let start = performance.now();
const at = () => `${String(Math.round((performance.now() - start) / 10) * 10).padStart(4)} ms`;

// Llama a handler(value) en cada momento de la lista: el evento i llega en times[i] ms.
// Devuelve una promesa que se cumple cuando ha llegado el último evento.
const simulate = (times, values, handler) => {
  start = performance.now();
  for (const [i, time] of times.entries()) setTimeout(() => handler(values[i]), time);
  return wait(times.at(-1));
};

// El «trabajo caro»: en una página sería buscar o volver a pintar la lista.
let works = 0;
const work = (label) => (value) => {
  works += 1;
  console.log(`  ${at()} ${label}: ${value}`);
};

// ============================================
// PASO 1: Un evento por tecla
// ============================================
console.log('--- Paso 1: Buscar en cada tecla ---');

// Descomenta las siguientes líneas:
// const typing = [0, 100, 200, 300, 400];
// const prefixes = ['o', 'or', 'ori', 'orio', 'orion'];
// works = 0;
// await simulate(typing, prefixes, work('busco'));
// console.log(`  ${prefixes.length} teclas, ${works} búsquedas`);

// ============================================
// PASO 2: debounce, esperar a que dejen de escribir
// ============================================
console.log('\n--- Paso 2: debounce de 250 ms ---');

// Descomenta las siguientes líneas:
// const debounce = (fn, ms) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(...args), ms);
//   };
// };
// works = 0;
// await simulate(typing, prefixes, debounce(work('busco'), 250));
// await wait(300);
// console.log(`  ${prefixes.length} teclas, ${works} búsqueda`);

// ============================================
// PASO 3: Una pausa al escribir
// ============================================
console.log('\n--- Paso 3: Escribir, parar y seguir ---');

// Descomenta las siguientes líneas:
// const withPause = [0, 100, 500, 600, 700];
// works = 0;
// await simulate(withPause, prefixes, debounce(work('busco'), 250));
// await wait(300);
// console.log(`  ${prefixes.length} teclas, ${works} búsquedas`);

// ============================================
// PASO 4: throttle, como mucho uno cada 100 ms
// ============================================
console.log('\n--- Paso 4: throttle sencillo ---');

// Descomenta las siguientes líneas:
// const throttleSimple = (fn, ms) => {
//   let last = -Infinity;
//   return (...args) => {
//     const now = performance.now();
//     if (now - last < ms) return;
//     last = now;
//     fn(...args);
//   };
// };
// const scrolling = [0, ...Array.from({ length: 11 }, (_, i) => 50 + i * 40)];
// const positions = scrolling.map((time) => time * 2);
// works = 0;
// await simulate(scrolling, positions, throttleSimple(work('pinto en'), 100));
// await wait(200);
// console.log(`  ${scrolling.length} eventos, ${works} actualizaciones · último scroll en ${positions.at(-1)}`);

// ============================================
// PASO 5: throttle que no pierde el último
// ============================================
console.log('\n--- Paso 5: throttle con llamada final ---');

// Descomenta las siguientes líneas:
// const throttle = (fn, ms) => {
//   let timer = null;
//   let pending = null;
//   const close = () => {
//     if (pending) {
//       fn(...pending);
//       pending = null;
//       timer = setTimeout(close, ms);
//     } else {
//       timer = null;
//     }
//   };
//   return (...args) => {
//     if (timer) {
//       pending = args;
//       return;
//     }
//     fn(...args);
//     timer = setTimeout(close, ms);
//   };
// };
// works = 0;
// await simulate(scrolling, positions, throttle(work('pinto en'), 100));
// await wait(200);
// console.log(`  ${scrolling.length} eventos, ${works} actualizaciones · último scroll en ${positions.at(-1)}`);

// ============================================
// PASO 6: Evitar el doble clic
// ============================================
console.log('\n--- Paso 6: La primera vale, las repetidas no ---');

// Descomenta las siguientes líneas:
// const once = (fn, ms) => {
//   let timer = null;
//   return (...args) => {
//     if (!timer) fn(...args);
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       timer = null;
//     }, ms);
//   };
// };
// const clicks = [0, 80, 150, 900];
// works = 0;
// await simulate(clicks, ['clic 1', 'clic 2', 'clic 3', 'clic 4'], once(work('envío'), 500));
// console.log(`  ${clicks.length} clics, ${works} envíos`);
// console.log('\n✅ Lab completado.');
