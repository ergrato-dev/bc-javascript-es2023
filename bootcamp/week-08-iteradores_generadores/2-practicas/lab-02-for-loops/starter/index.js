/**
 * 📘 Lab 02: Iteradores
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: for...of con Arrays
// ============================================
console.log('--- Paso 1: for...of con Arrays ---');

// for...of itera sobre VALORES
// Es la forma recomendada para arrays
// Descomenta las siguientes líneas:

// const fruits = ['apple', 'banana', 'cherry'];

// for (const fruit of fruits) {
//   console.log('Fruta:', fruit);
// }

// Con .entries() obtenemos índice y valor
// for (const [index, fruit] of fruits.entries()) {
//   console.log(`Con índice: ${index} → ${fruit}`);
// }

console.log('');

// ============================================
// PASO 2: for...in con Arrays (problemas)
// ============================================
console.log('--- Paso 2: for...in con Arrays (problemas) ---');

// for...in itera sobre CLAVES (índices como strings)
// ⚠️ NO recomendado para arrays
// Descomenta las siguientes líneas:

// const numbers = [10, 20, 30];

// for (const index in numbers) {
//   console.log(`Índice (tipo string): ${index} (${typeof index})`);
// }

// Problema: también itera propiedades adicionales
// numbers.customProp = 'oops';

// for (const key in numbers) {
//   if (key === 'customProp') {
//     console.log('⚠️ Propiedad extra:', key);
//   }
// }

console.log('');

// ============================================
// PASO 3: for...of con Strings
// ============================================
console.log('--- Paso 3: for...of con Strings ---');

// Los strings son iterables carácter por carácter
// Descomenta las siguientes líneas:

// const word = 'Java';

// for (const letter of word) {
//   console.log('Letra:', letter);
// }

// Ojo: for...of recorre puntos de código (code points), no lo que ves como un carácter
// const emoji = '👨‍💻';
// for (const char of emoji) {
//   console.log('Emoji chars:', char);
// }
// console.log('Partes:', [...emoji].length, '| length:', emoji.length);

console.log('');

// ============================================
// PASO 4: for...in con Objetos
// ============================================
console.log('--- Paso 4: for...in con Objetos ---');

// for...in es ideal para objetos planos
// Itera sobre propiedades enumerables
// Descomenta las siguientes líneas:

// const user = {
//   name: 'Alice',
//   age: 25,
//   city: 'NYC'
// };

// for (const key in user) {
//   console.log(`Propiedad: ${key} = ${user[key]}`);
// }

console.log('');

// ============================================
// PASO 5: for...of con Map y Set
// ============================================
console.log('--- Paso 5: for...of con Map y Set ---');

// Map y Set son iterables nativos
// Descomenta las siguientes líneas:

// const infoMap = new Map([
//   ['name', 'JavaScript'],
//   ['year', 1995]
// ]);

// for (const [key, value] of infoMap) {
//   console.log(`Map entry: ${key} → ${value}`);
// }

// const versionsSet = new Set(['ES6', 'ES7', 'ES8']);

// for (const version of versionsSet) {
//   console.log('Set value:', version);
// }

console.log('');

// ============================================
// PASO 6: Object.entries() con for...of
// ============================================
console.log('--- Paso 6: Object.entries() con for...of ---');

// Forma moderna de iterar objetos con for...of
// Object.entries() convierte objeto a array de pares
// Descomenta las siguientes líneas:

// const config = {
//   theme: 'dark',
//   language: 'es',
//   debug: false
// };

// for (const [key, value] of Object.entries(config)) {
//   console.log(`Config: ${key} = ${value}`);
// }

console.log('');

// ============================================
// PASO 7: Comparación Directa
// ============================================
console.log('--- Paso 7: Comparación Directa ---');

// Mismo dato, diferentes resultados
// Descomenta las siguientes líneas:

// const data = ['x', 'y', 'z'];

// console.log('for...of (valores):');
// for (const item of data) {
//   console.log(' ', item);
// }

// console.log('for...in (claves):');
// for (const item in data) {
//   console.log(' ', item);
// }

console.log('');

// ============================================
// PASO 8: Contar y filtrar sin bucle
// ============================================
console.log('--- Paso 8: Contar y filtrar sin bucle ---');

// Object.keys() y Object.values() devuelven arrays: length y filter hacen el resto
// Descomenta las siguientes líneas:

// const product = {
//   name: 'Laptop',
//   price: 999,
//   stock: 50,
//   category: 'Electronics',
//   rating: 4.5
// };

// const propCount = Object.keys(product).length;
// const numericValues = Object.values(product).filter((value) => typeof value === 'number');

// console.log('Total propiedades:', propCount);
// console.log('Valores numéricos:', numericValues);

console.log('');
console.log('✅ Lab completado.');
