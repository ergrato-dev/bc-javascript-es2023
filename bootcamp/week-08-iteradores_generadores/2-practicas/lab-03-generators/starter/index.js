/**
 * 📘 Lab 03: for...of y for...in
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Generador Básico
// ============================================
console.log('--- Paso 1: Generador Básico ---');

// function* crea un generador
// yield pausa y retorna un valor
// Descomenta las siguientes líneas:

// function* simpleGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = simpleGenerator();
// console.log('Primer valor:', gen.next().value);

// Puedes usar spread para obtener todos los valores
// console.log('Todos los valores:', [...simpleGenerator()]);

// También funciona con for...of
// function* words() {
//   yield 'uno';
//   yield 'dos';
//   yield 'tres';
// }

// let result = '';
// for (const word of words()) {
//   result += word + ' ';
// }
// console.log('Con for...of:', result.trim());

console.log('');

// ============================================
// PASO 2: Generador con Estado
// ============================================
console.log('--- Paso 2: Generador con Estado ---');

// Los generadores mantienen su estado entre yields
// Descomenta las siguientes líneas:

// function* idGenerator(prefix) {
//   let id = 1;
//   while (true) {
//     yield `${prefix}-${id++}`;
//   }
// }

// const userIds = idGenerator('user');

// console.log('ID:', userIds.next().value);
// console.log('ID:', userIds.next().value);
// console.log('ID:', userIds.next().value);

console.log('');

// ============================================
// PASO 3: yield* Delegación
// ============================================
console.log('--- Paso 3: yield* Delegación ---');

// yield* delega a otro iterable
// Descomenta las siguientes líneas:

// function* numbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* letters() {
//   yield 'a';
//   yield 'b';
//   yield 'c';
// }

// function* combined() {
//   yield* numbers();
//   yield* letters();
// }

// console.log('Combinado:', [...combined()]);

// Flatten con yield*
// function* flatten(arr) {
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       yield* flatten(item);
//     } else {
//       yield item;
//     }
//   }
// }

// const nested = [1, [2, [3, 4]], 5];
// console.log('Flatten:', [...flatten(nested)]);

console.log('');

// ============================================
// PASO 4: Generador Infinito
// ============================================
console.log('--- Paso 4: Generador Infinito ---');

// Generadores pueden ser infinitos gracias a lazy evaluation
// Descomenta las siguientes líneas:

// function* naturals() {
//   let n = 0;
//   while (true) {
//     yield n++;
//   }
// }

// Helper para tomar N elementos
// function* take(iterable, n) {
//   if (n <= 0) return;
//   let count = 0;
//   for (const item of iterable) {
//     yield item;
//     count++;
//     if (count === n) return;
//   }
// }

// console.log('Primeros 5 naturales:', [...take(naturals(), 5)]);

// Fibonacci infinito
// function* fibonacci() {
//   let [prev, curr] = [0, 1];
//   while (true) {
//     yield curr;
//     [prev, curr] = [curr, prev + curr];
//   }
// }

// console.log('Fibonacci:', [...take(fibonacci(), 8)]);

console.log('');

// ============================================
// PASO 5: Pasar Valores a Generadores
// ============================================
console.log('--- Paso 5: Pasar Valores ---');

// next(value) pasa un valor al generador
// El valor se convierte en el resultado del yield
// Descomenta las siguientes líneas:

// function* conversation() {
//   const name = yield '¿Tu nombre?';
//   return `Hola, ${name}`;
// }

// const chat = conversation();
// const question = chat.next().value;
// console.log('Pregunta:', question);

// const answer = chat.next('Ana').value;
// console.log('Respuesta:', answer);

console.log('');

// ============================================
// PASO 6: Generadores Prácticos
// ============================================
console.log('--- Paso 6: Generadores Prácticos ---');

// Casos de uso del mundo real
// Descomenta las siguientes líneas:

// Range generator
// function* range(start, end, step = 1) {
//   for (let i = start; i <= end; i += step) {
//     yield i;
//   }
// }

// console.log('Rango:', [...range(1, 5)]);
// console.log('Pares:', [...range(0, 8, 2)]);

// Chunk generator - divide array en grupos
// function* chunk(arr, size) {
//   for (let i = 0; i < arr.length; i += size) {
//     yield arr.slice(i, i + size);
//   }
// }

// const data = [1, 2, 3, 4, 5];
// console.log('Chunks:', [...chunk(data, 2)]);

console.log('');

// ============================================
// PASO 7: Generador de primos
// ============================================
console.log('--- Paso 7: Generador de primos ---');

// Un bucle sin condición de fin: take() del paso 4 decide cuántos pedir
// Descomenta las siguientes líneas:

// function* primes() {
//   const isPrime = (n) => {
//     for (let i = 2; i * i <= n; i++) {
//       if (n % i === 0) return false;
//     }
//     return true;
//   };
//
//   for (let n = 2; ; n++) {
//     if (isPrime(n)) yield n;
//   }
// }

// console.log('Primeros 10 primos:', [...take(primes(), 10)]);

console.log('');
console.log('✅ Lab completado.');
