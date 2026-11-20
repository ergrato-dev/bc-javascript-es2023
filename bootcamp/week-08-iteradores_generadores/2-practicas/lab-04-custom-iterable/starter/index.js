/**
 * 📘 Lab 04: Generadores y yield
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Objeto Iterable Simple
// ============================================
console.log('--- Paso 1: Objeto Iterable Simple ---');

// Un objeto simple que cuenta hacia atrás
// Descomenta las siguientes líneas:

// const countdown = {
//   from: 5,
//   to: 1,
//
//   *[Symbol.iterator]() {
//     for (let i = this.from; i >= this.to; i--) {
//       yield i;
//     }
//   }
// };

// let result = '';
// for (const num of countdown) {
//   result += num + ', ';
// }
// console.log('Countdown:', result.slice(0, -2));
// console.log('Spread:', [...countdown]);

console.log('');

// ============================================
// PASO 2: Clase Range Iterable
// ============================================
console.log('--- Paso 2: Clase Range ---');

// Clase que genera rangos de números
// Descomenta las siguientes líneas:

// class Range {
//   constructor(start, end, step = 1) {
//     this.start = start;
//     this.end = end;
//     this.step = step;
//   }
//
//   *[Symbol.iterator]() {
//     for (let i = this.start; i <= this.end; i += this.step) {
//       yield i;
//     }
//   }
//
//   get length() {
//     return Math.floor((this.end - this.start) / this.step) + 1;
//   }
// }

// const range = new Range(1, 5);
// console.log('Range 1-5:', [...range]);
// console.log('Longitud:', range.length);

// const evens = new Range(0, 10, 2);
// console.log('Evens 0-10:', [...evens]);

// Funciona con destructuring
// const [first, second] = new Range(1, 10);
// console.log('Destructuring:', first, second);

console.log('');

// ============================================
// PASO 3: LinkedList Iterable
// ============================================
console.log('--- Paso 3: LinkedList ---');

// Lista enlazada que se puede iterar
// Descomenta las siguientes líneas:

// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//
//   append(value) {
//     const node = new ListNode(value);
//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     return this;
//   }
//
//   *[Symbol.iterator]() {
//     let current = this.head;
//     while (current) {
//       yield current.value;
//       current = current.next;
//     }
//   }
//
//   toString() {
//     return [...this].join(' -> ');
//   }
// }

// const list = new LinkedList();
// list.append(10).append(20).append(30);

// console.log('Lista:', list.toString());
// console.log('Array:', [...list]);

// Podemos usar reduce gracias a ser iterable
// const sum = [...list].reduce((a, b) => a + b, 0);
// console.log('Suma:', sum);

console.log('');

// ============================================
// PASO 4: Múltiples Iteradores
// ============================================
console.log('--- Paso 4: Múltiples Iteradores ---');

// Una clase puede ofrecer diferentes formas de iteración
// Descomenta las siguientes líneas:

// class Matrix {
//   constructor(rows) {
//     this.data = rows;
//     this.rows = rows.length;
//     this.cols = rows[0]?.length || 0;
//   }
//
//   // Iteración por defecto: todos los elementos
//   *[Symbol.iterator]() {
//     for (const row of this.data) {
//       yield* row;
//     }
//   }
//
//   // Iterar por filas
//   *byRows() {
//     yield* this.data;
//   }
//
//   // Iterar diagonal
//   *diagonal() {
//     const min = Math.min(this.rows, this.cols);
//     for (let i = 0; i < min; i++) {
//       yield this.data[i][i];
//     }
//   }
// }

// const matrix = new Matrix([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]);

// console.log('Default:', [...matrix]);
// console.log('Por filas:', [...matrix.byRows()]);
// console.log('Diagonal:', [...matrix.diagonal()]);

console.log('');

// ============================================
// PASO 5: Colección con Métodos Fluidos
// ============================================
console.log('--- Paso 5: Colección Fluida ---');

// Colección que permite encadenar operaciones
// Descomenta las siguientes líneas:

// class Collection {
//   constructor(items = []) {
//     this.items = [...items];
//   }
//
//   *[Symbol.iterator]() {
//     yield* this.items;
//   }
//
//   filter(predicate) {
//     const filtered = this.items.filter(predicate);
//     return new Collection(filtered);
//   }
//
//   map(transform) {
//     const mapped = this.items.map(transform);
//     return new Collection(mapped);
//   }
//
//   toArray() {
//     return [...this.items];
//   }
// }

// const users = new Collection([
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 35 }
// ]);

// Encadenamiento de operaciones
// const adults = users.filter(u => u.age >= 25);
// for (const user of adults) {
//   console.log(`25 o más: ${user.name} (${user.age})`);
// }

// const names = users
//   .filter(u => u.age >= 25)
//   .map(u => u.name)
//   .toArray();
// console.log('Nombres:', names);

console.log('');

// ============================================
// PASO 6: Pila iterable
// ============================================
console.log('--- Paso 6: Pila iterable ---');

// Una pila (LIFO): el último que entra es el primero que sale
// El iterador la recorre desde arriba, sin modificar #items
// Descomenta las siguientes líneas:

// class Stack {
//   #items = [];
//
//   push(item) {
//     this.#items.push(item);
//     return this;
//   }
//
//   pop() {
//     return this.#items.pop();
//   }
//
//   peek() {
//     return this.#items.at(-1);
//   }
//
//   get size() {
//     return this.#items.length;
//   }
//
//   *[Symbol.iterator]() {
//     yield* this.#items.toReversed();
//   }
// }

// const stack = new Stack();
// stack.push('first').push('second').push('third');
// console.log('Stack (LIFO):', [...stack]);
// console.log('Top:', stack.peek());
// console.log('Pop:', stack.pop(), '| size:', stack.size);

console.log('');
console.log('✅ Lab completado.');
