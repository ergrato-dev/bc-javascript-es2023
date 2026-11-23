/**
 * 📘 Lab 01: Callbacks y event loop
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// Espera `ms` milisegundos. Cada paso termina con `await wait(...)` para que
// sus temporizadores acaben antes de que empiece el paso siguiente.
// Cómo funciona por dentro lo ves en el lab 02 (promesas) y en la semana 14 (await).
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ============================================
// PASO 1: Callbacks síncronos
// ============================================
console.log('--- Paso 1: Callbacks síncronos ---');

// Descomenta las siguientes líneas:
// const numbers = [1, 2, 3];
// numbers.forEach((number) => console.log('Doble de', number, '=', number * 2));
// console.log('forEach ya terminó');

console.log('');

// ============================================
// PASO 2: Callbacks asíncronos con setTimeout
// ============================================
console.log('--- Paso 2: Callbacks asíncronos ---');

// Descomenta las siguientes líneas:
// console.log('Inicio');
// setTimeout(() => console.log('Dentro del timeout'), 0);
// console.log('Fin');
// await wait(10);

console.log('');

// ============================================
// PASO 3: El event loop en acción
// ============================================
console.log('--- Paso 3: Event loop ---');

// Descomenta las siguientes líneas:
// console.log('1 (síncrono)');
// setTimeout(() => console.log('2 (setTimeout: macrotarea)'), 0);
// Promise.resolve().then(() => console.log('3 (promesa: microtarea)'));
// console.log('4 (síncrono)');
// await wait(10);

console.log('');

// ============================================
// PASO 4: Varios temporizadores
// ============================================
console.log('--- Paso 4: Varios temporizadores ---');

// Descomenta las siguientes líneas:
// setTimeout(() => console.log('Timeout 1 (300 ms)'), 300);
// setTimeout(() => console.log('Timeout 2 (150 ms)'), 150);
// setTimeout(() => console.log('Timeout 3 (0 ms)'), 0);
// console.log('Código síncrono');
// await wait(350);

console.log('');

// ============================================
// PASO 5: Callback hell
// ============================================
console.log('--- Paso 5: Callback hell ---');

// Descomenta las siguientes líneas:
// setTimeout(() => {
//   console.log('Nivel 1');
//   setTimeout(() => {
//     console.log('Nivel 2');
//     setTimeout(() => {
//       console.log('Nivel 3');
//       setTimeout(() => {
//         console.log('Nivel 4: cada paso nuevo mete el código más a la derecha 😱');
//       }, 100);
//     }, 100);
//   }, 100);
// }, 100);
// await wait(450);

console.log('');

// ============================================
// PASO 6: Callbacks error-first
// ============================================
console.log('--- Paso 6: Error-first ---');

// Descomenta las siguientes líneas:
// const divide = (a, b, callback) => {
//   setTimeout(() => {
//     if (b === 0) {
//       callback(new Error('División por cero'));
//       return;
//     }
//     callback(null, a / b);
//   }, 50);
// };
//
// const showResult = (error, result) => {
//   if (error) {
//     console.log('❌ Error:', error.message);
//     return;
//   }
//   console.log('✅ Resultado:', result);
// };
//
// divide(10, 2, showResult);
// divide(10, 0, showResult);
// await wait(100);

console.log('');

// ============================================
// PASO 7: Aplanar el callback hell con funciones con nombre
// ============================================
console.log('--- Paso 7: Funciones con nombre ---');

// Descomenta las siguientes líneas:
// const loadLevel = (level, callback) => {
//   setTimeout(() => {
//     if (level > 3) {
//       callback(new Error(`El nivel ${level} no existe`));
//       return;
//     }
//     callback(null, `Nivel ${level} cargado`);
//   }, 50);
// };
//
// const onLevel3 = (error, message) => {
//   if (error) return console.log('❌', error.message);
//   console.log(message);
//   loadLevel(4, (lastError) => console.log('❌', lastError.message));
// };
// const onLevel2 = (error, message) => {
//   if (error) return console.log('❌', error.message);
//   console.log(message);
//   loadLevel(3, onLevel3);
// };
// const onLevel1 = (error, message) => {
//   if (error) return console.log('❌', error.message);
//   console.log(message);
//   loadLevel(2, onLevel2);
// };
//
// loadLevel(1, onLevel1);
// await wait(250);

console.log('');
console.log('✅ Lab completado.');
