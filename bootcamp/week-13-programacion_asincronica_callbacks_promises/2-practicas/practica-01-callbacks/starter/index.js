// ============================================
// PRÁCTICA 01: CALLBACKS Y EVENT LOOP
// ============================================

console.log('🔗 Callbacks y Event Loop\n');

// ============================================
// PASO 1: CALLBACKS SÍNCRONOS
// ============================================
console.log('--- Paso 1: Callbacks Síncronos ---');

// Los callbacks síncronos se ejecutan inmediatamente
// Descomenta las siguientes líneas:
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num * 2));

console.log('');

// ============================================
// PASO 2: CALLBACKS ASÍNCRONOS CON SETTIMEOUT
// ============================================
console.log('--- Paso 2: Callbacks Asíncronos ---');

// Descomenta las siguientes líneas:
// console.log('Inicio');
// setTimeout(() => console.log('Dentro del timeout'), 0);
// console.log('Fin');

console.log('');

// ============================================
// PASO 3: EVENT LOOP EN ACCIÓN
// ============================================
console.log('--- Paso 3: Event Loop ---');

// Observa el orden de ejecución
// Descomenta las siguientes líneas:
// console.log('1');
// setTimeout(() => console.log('2'), 0);
// Promise.resolve().then(() => console.log('3'));
// console.log('4');

console.log('');

// ============================================
// PASO 4: MÚLTIPLES CALLBACKS ASÍNCRONOS
// ============================================
console.log('--- Paso 4: Múltiples Callbacks ---');

// Descomenta las siguientes líneas:
// setTimeout(() => console.log('Timeout 1 (1000ms)'), 1000);
// setTimeout(() => console.log('Timeout 2 (500ms)'), 500);
// setTimeout(() => console.log('Timeout 3 (0ms)'), 0);
// console.log('Código síncrono');

console.log('');

// ============================================
// PASO 5: CALLBACK HELL
// ============================================
console.log('--- Paso 5: Callback Hell ---');

// Observa cómo el código crece horizontalmente
// Descomenta las siguientes líneas:
// setTimeout(() => {
//   console.log('Nivel 1');
//   setTimeout(() => {
//     console.log('Nivel 2');
//     setTimeout(() => {
//       console.log('Nivel 3');
//       setTimeout(() => {
//         console.log('Nivel 4 - Esto es Callback Hell! 😱');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

console.log('');

// ============================================
// PASO 6: ERROR HANDLING CON CALLBACKS
// ============================================
console.log('--- Paso 6: Error Handling ---');

// Patrón error-first callback
// Descomenta las siguientes líneas:
// const divideNumbers = (a, b, callback) => {
//   if (b === 0) {
//     callback(new Error('División por cero'), null);
//   } else {
//     callback(null, a / b);
//   }
// };

// divideNumbers(10, 2, (error, result) => {
//   if (error) {
//     console.error('Error:', error.message);
//     return;
//   }
//   console.log('Resultado:', result);
// });

// divideNumbers(10, 0, (error, result) => {
//   if (error) {
//     console.error('Error:', error.message);
//     return;
//   }
//   console.log('Resultado:', result);
// });

console.log('');
console.log('✅ Práctica 01 completada!');
