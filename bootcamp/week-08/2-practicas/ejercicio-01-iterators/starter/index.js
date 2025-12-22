// ============================================
// EJERCICIO 01: Iteradores Básicos
// ============================================
// Aprende el protocolo de iteración de JavaScript
// Descomenta cada sección y ejecuta: node index.js

// ============================================
// PASO 1: Iterador de Array
// ============================================
console.log('--- Paso 1: Iterador de Array ---');

// Los arrays son iterables nativos
// Podemos obtener su iterador con Symbol.iterator
// Descomenta las siguientes líneas:

// const numbers = [10, 20, 30];
// const iterator = numbers[Symbol.iterator]();

// console.log('Primer next():', iterator.next());
// console.log('Segundo next():', iterator.next());
// console.log('Tercer next():', iterator.next());
// console.log('Cuarto next():', iterator.next());

console.log('');

// ============================================
// PASO 2: Iterador de String
// ============================================
console.log('--- Paso 2: Iterador de String ---');

// Los strings iteran carácter por carácter
// Descomenta las siguientes líneas:

// const greeting = 'Hola';
// const strIterator = greeting[Symbol.iterator]();

// let result = strIterator.next();
// while (!result.done) {
//   console.log('Char:', result.value);
//   result = strIterator.next();
// }

console.log('');

// ============================================
// PASO 3: Iterador de Map
// ============================================
console.log('--- Paso 3: Iterador de Map ---');

// Map itera sobre pares [key, value]
// Descomenta las siguientes líneas:

// const userMap = new Map([
//   ['user1', 'Alice'],
//   ['user2', 'Bob'],
//   ['user3', 'Charlie']
// ]);

// const mapIterator = userMap[Symbol.iterator]();

// const firstEntry = mapIterator.next().value;
// console.log('Tipo de entrada:', typeof firstEntry);

// for (const [key, value] of userMap) {
//   console.log(`${key} → ${value}`);
// }

console.log('');

// ============================================
// PASO 4: Iterador de Set
// ============================================
console.log('--- Paso 4: Iterador de Set ---');

// Set itera sobre sus valores únicos
// Descomenta las siguientes líneas:

// const colors = new Set(['red', 'green', 'blue', 'red']);

// for (const color of colors) {
//   console.log('Color único:', color);
// }

console.log('');

// ============================================
// PASO 5: Iterador Manual
// ============================================
console.log('--- Paso 5: Iterador Manual ---');

// Crear un objeto iterable desde cero
// Implementamos [Symbol.iterator] que retorna un iterador
// Descomenta las siguientes líneas:

// const countdown = {
//   start: 3,
//
//   [Symbol.iterator]() {
//     let current = this.start;
//
//     return {
//       next() {
//         if (current > 0) {
//           return { value: current--, done: false };
//         }
//         return { done: true };
//       }
//     };
//   }
// };

// for (const num of countdown) {
//   console.log('Countdown:', num);
// }

// console.log('Spread:', [...countdown]);

console.log('');

// ============================================
// PASO 6: Rango Iterable
// ============================================
console.log('--- Paso 6: Rango Iterable ---');

// Objeto rango con start, end y step
// Descomenta las siguientes líneas:

// const createRange = (start, end, step = 1) => ({
//   start,
//   end,
//   step,
//
//   [Symbol.iterator]() {
//     let current = this.start;
//     const end = this.end;
//     const step = this.step;
//
//     return {
//       next() {
//         if (current <= end) {
//           const value = current;
//           current += step;
//           return { value, done: false };
//         }
//         return { done: true };
//       }
//     };
//   }
// });

// const range1to5 = createRange(1, 5);
// console.log('Rango 1-5:', [...range1to5]);

// const evens = createRange(0, 10, 2);
// console.log('Pares 0-10:', [...evens]);

console.log('');

// ============================================
// 🎯 DESAFÍO EXTRA
// ============================================
// Crea un iterador que genere los primeros N
// números de la secuencia Fibonacci
// Descomenta y completa:

// const fibonacci = {
//   limit: 10,
//
//   [Symbol.iterator]() {
//     let prev = 0;
//     let curr = 1;
//     let count = 0;
//     const limit = this.limit;
//
//     return {
//       next() {
//         // Tu código aquí
//       }
//     };
//   }
// };

// console.log('Fibonacci:', [...fibonacci]);
