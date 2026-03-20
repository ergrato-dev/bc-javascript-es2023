/**
 * Ejercicio 03: Well-known Symbols
 *
 * Aprende a personalizar el comportamiento de objetos
 * usando los símbolos predefinidos de JavaScript
 *
 * Instrucciones:
 * - Lee cada paso y descomenta el código
 * - Ejecuta con: node index.js
 * - Observa cómo cambia el comportamiento
 */

// ============================================
// PASO 1: Symbol.toStringTag
// ============================================
console.log('--- Paso 1: Symbol.toStringTag ---');

// Por defecto, Object.prototype.toString.call() retorna '[object Object]'
// Con Symbol.toStringTag podemos personalizar ese tipo

// Descomenta las siguientes líneas:
// const defaultObj = {};
// console.log('Default:', Object.prototype.toString.call(defaultObj));
//
// const customObj = {
//   [Symbol.toStringTag]: 'Database'
// };
// console.log('Con toStringTag:', Object.prototype.toString.call(customObj));
//
// // En una clase
// class HTTPClient {
//   get [Symbol.toStringTag]() {
//     return 'HTTPClient';
//   }
// }
//
// const client = new HTTPClient();
// console.log('En clase:', Object.prototype.toString.call(client));

console.log('');

// ============================================
// PASO 2: Symbol.toPrimitive
// ============================================
console.log('--- Paso 2: Symbol.toPrimitive ---');

// Symbol.toPrimitive controla cómo se convierte un objeto
// Recibe un "hint": 'number', 'string', o 'default'

// Descomenta las siguientes líneas:
// const money = {
//   amount: 150,
//   currency: 'USD',
//
//   [Symbol.toPrimitive](hint) {
//     switch (hint) {
//       case 'number':
//         return this.amount;
//       case 'string':
//         return `${this.currency} ${this.amount.toFixed(2)}`;
//       default:
//         return this.amount;
//     }
//   }
// };
//
// // Contexto numérico (hint: 'number')
// console.log('Como número:', +money);
// console.log('Multiplicación:', money * 2);
//
// // Contexto string (hint: 'string')
// console.log('Como string:', `${money}`);
// console.log('String():', String(money));
//
// // Contexto default
// console.log('Default:', money + 0);

console.log('');

// ============================================
// PASO 3: Symbol.iterator
// ============================================
console.log('--- Paso 3: Symbol.iterator ---');

// Symbol.iterator hace un objeto compatible con for...of, spread, etc.
// (Repaso de week-08)

// Descomenta las siguientes líneas:
// const range = {
//   from: 1,
//   to: 5,
//
//   [Symbol.iterator]() {
//     let current = this.from;
//     const last = this.to;
//
//     return {
//       next() {
//         if (current <= last) {
//           return { value: current++, done: false };
//         }
//         return { done: true };
//       }
//     };
//   }
// };
//
// // for...of
// process.stdout.write('for...of: ');
// const values = [];
// for (const n of range) {
//   values.push(n);
// }
// console.log(values.join(', '));
//
// // spread
// console.log('spread:', [...range]);
//
// // destructuring
// const [a, b] = range;
// console.log(`destructuring: a=${a}, b=${b}`);

console.log('');

// ============================================
// PASO 4: Symbol.hasInstance
// ============================================
console.log('--- Paso 4: Symbol.hasInstance ---');

// Symbol.hasInstance personaliza el comportamiento de instanceof

// Descomenta las siguientes líneas:
// class Numeric {
//   static [Symbol.hasInstance](value) {
//     return typeof value === 'number' && !isNaN(value);
//   }
// }
//
// console.log('42 instanceof Numeric:', 42 instanceof Numeric);
// console.log("'42' instanceof Numeric:", '42' instanceof Numeric);
// console.log('NaN instanceof Numeric:', NaN instanceof Numeric);
// console.log('3.14 instanceof Numeric:', 3.14 instanceof Numeric);

console.log('');

// ============================================
// PASO 5: Ejemplo Completo - Clase Money
// ============================================
console.log('--- Paso 5: Clase Money Completa ---');

// Descomenta las siguientes líneas:
// class Money {
//   constructor(amount, currency = 'USD') {
//     this.amount = amount;
//     this.currency = currency;
//   }
//
//   // Personalizar tipo
//   get [Symbol.toStringTag]() {
//     return 'Money';
//   }
//
//   // Personalizar conversión
//   [Symbol.toPrimitive](hint) {
//     switch (hint) {
//       case 'number':
//         return this.amount;
//       case 'string':
//         return this.format();
//       default:
//         return this.amount;
//     }
//   }
//
//   // Hacer iterable (devuelve centavos)
//   *[Symbol.iterator]() {
//     const cents = Math.floor(this.amount * 100);
//     for (let i = 0; i < cents; i++) {
//       yield 0.01;
//     }
//   }
//
//   format() {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: this.currency
//     }).format(this.amount);
//   }
// }
//
// const price = new Money(5.25, 'EUR');
//
// console.log('Tipo:', Object.prototype.toString.call(price));
// console.log('Como string:', `${price}`);
// console.log('Como número:', +price);
// console.log('Doble:', price * 2);
// console.log('Centavos (count):', [...price].length);

console.log('');

// ============================================
// PASO 6: Ejercicio Práctico
// ============================================
console.log('--- Paso 6: Ejercicio Práctico ---');

// Crea una clase Temperature que:
// 1. Tenga toStringTag = 'Temperature'
// 2. toPrimitive retorne:
//    - number: el valor en Celsius
//    - string: formato "25°C"
//    - default: el valor numérico

// Descomenta y completa:
// class Temperature {
//   constructor(celsius) {
//     this.celsius = celsius;
//   }
//
//   // Agrega Symbol.toStringTag
//
//   // Agrega Symbol.toPrimitive
// }
//
// const temp = new Temperature(25);
// console.log('Tipo:', Object.prototype.toString.call(temp));
// console.log('String:', `La temperatura es ${temp}`);
// console.log('Número:', temp + 10);

console.log('');
console.log('✅ Ejercicio 03 completado');
