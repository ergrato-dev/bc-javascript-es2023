/**
 * 📘 Lab 03: Arrow Functions
 *
 * Este es un lab guiado. Descomenta el código en cada paso
 * para dominar las arrow functions de JavaScript moderno.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Sintaxis Básica
// ============================================
console.log('--- Paso 1: Sintaxis Básica ---');

// Arrow function con un parámetro (paréntesis opcionales)
// Descomenta las siguientes líneas:

// const square = x => x * x;
// console.log('Cuadrado de 5:', square(5));
//
// const greet = name => `Hola, ${name}!`;
// console.log(greet('Ana'));
//
// // Sin parámetros: paréntesis obligatorios
// const sayHello = () => 'Hello World';
// console.log(sayHello());

console.log('');

// ============================================
// PASO 2: Múltiples Parámetros
// ============================================
console.log('--- Paso 2: Múltiples Parámetros ---');

// Con 2+ parámetros, los paréntesis son obligatorios
// Descomenta las siguientes líneas:

// const add = (a, b) => a + b;
// console.log('Suma:', add(3, 4));
//
// const multiply = (a, b) => a * b;
// console.log('Multiplicación:', multiply(5, 6));
//
// const fullName = (first, last) => `${first} ${last}`;
// console.log('Nombre completo:', fullName('Ana', 'García'));
//
// const power = (base, exponent) => base ** exponent;
// console.log('2 elevado a 8:', power(2, 8));

console.log('');

// ============================================
// PASO 3: Retorno Implícito vs Explícito
// ============================================
console.log('--- Paso 3: Tipos de Retorno ---');

// Sin llaves: retorno implícito (una expresión)
// Con llaves: necesitas return explícito
// Descomenta las siguientes líneas:

// // Retorno implícito (una línea)
// const double = x => x * 2;
//
// // Retorno explícito (con llaves)
// const triple = x => {
//   const result = x * 3;
//   return result;
// };
//
// console.log('Doble de 5:', double(5));
// console.log('Triple de 5:', triple(5));
//
// // Retorno de objeto (necesita paréntesis)
// const createUser = (name, age) => ({ name, age });
// console.log('Usuario:', createUser('Carlos', 30));

console.log('');

// ============================================
// PASO 4: Arrow Functions con Arrays
// ============================================
console.log('--- Paso 4: Con Métodos de Array ---');

// Las arrow functions brillan con map, filter, reduce
// Descomenta las siguientes líneas:

// const numbers = [1, 2, 3, 4, 5];
//
// // map: transformar cada elemento
// const doubled = numbers.map(n => n * 2);
// console.log('Duplicados:', doubled);
//
// // filter: filtrar elementos
// const evens = numbers.filter(n => n % 2 === 0);
// console.log('Pares:', evens);
//
// // find: encontrar un elemento
// const firstEven = numbers.find(n => n % 2 === 0);
// console.log('Primer par:', firstEven);
//
// // some: verificar si alguno cumple
// const hasEven = numbers.some(n => n % 2 === 0);
// console.log('¿Tiene pares?:', hasEven);

console.log('');

// ============================================
// PASO 5: Encadenar Métodos
// ============================================
console.log('--- Paso 5: Encadenar Métodos ---');

// Puedes encadenar múltiples operaciones
// Descomenta las siguientes líneas:

// const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// // Filtrar pares y duplicarlos
// const doubledEvens = oneToTen
//   .filter(n => n % 2 === 0)
//   .map(n => n * 2);
// console.log('Pares duplicados:', doubledEvens);
//
// // Cuadrados de impares
// const oddSquares = oneToTen
//   .filter(n => n % 2 !== 0)
//   .map(n => n ** 2);
// console.log('Cuadrados de impares:', oddSquares);
//
// // Suma de los primeros 5
// const sumFirst5 = oneToTen
//   .slice(0, 5)
//   .reduce((sum, n) => sum + n, 0);
// console.log('Suma primeros 5:', sumFirst5);

console.log('');

// ============================================
// PASO 6: Transformar Objetos
// ============================================
console.log('--- Paso 6: Transformar Objetos ---');

// Trabajar con arrays de objetos
// Descomenta las siguientes líneas:

// const users = [
//   { name: 'Ana', age: 25, active: true },
//   { name: 'Bob', age: 17, active: false },
//   { name: 'Carlos', age: 30, active: true },
//   { name: 'Diana', age: 22, active: true }
// ];
//
// // Extraer nombres
// const names = users.map(u => u.name);
// console.log('Nombres:', names);
//
// // Filtrar adultos activos
// const activeAdults = users
//   .filter(u => u.age >= 18)
//   .filter(u => u.active);
// console.log('Adultos activos:', activeAdults);
//
// // Crear resumen
// const summaries = users.map(u => ({
//   displayName: u.name.toUpperCase(),
//   status: u.active ? 'Activo' : 'Inactivo'
// }));
// console.log('Resúmenes:', summaries);

console.log('');

// ============================================
// PASO 7: Callbacks Concisos
// ============================================
console.log('--- Paso 7: Callbacks ---');

// Arrow functions hacen callbacks más legibles
// Descomenta las siguientes líneas:

// // setTimeout
// console.log('Esperando 1 segundo...');
// setTimeout(() => {
//   console.log('¡1 segundo después!');
// }, 1000);
//
// // forEach
// const fruits = ['🍎', '🍌', '🍊'];
// fruits.forEach((fruit, index) => {
//   console.log(`${index + 1}. ${fruit}`);
// });

console.log('');

// ============================================
// PASO 8: Caso Práctico - Procesamiento de Datos
// ============================================
console.log('--- Paso 8: Caso Práctico ---');

// Procesar lista de productos
// Descomenta las siguientes líneas:

// const products = [
//   { name: 'Laptop', price: 999, inStock: true },
//   { name: 'Mouse', price: 25, inStock: true },
//   { name: 'Monitor', price: 300, inStock: false },
//   { name: 'Keyboard', price: 75, inStock: true }
// ];
//
// // Productos disponibles con precio formateado
// const available = products
//   .filter(p => p.inStock)
//   .map(p => `${p.name}: $${p.price}`)
//   .join(' | ');
// console.log('Disponibles:', available);
//
// // Total de productos en stock
// const totalStock = products
//   .filter(p => p.inStock)
//   .reduce((sum, p) => sum + p.price, 0);
// console.log('Total en stock: $' + totalStock);
//
// // Producto más caro disponible
// const mostExpensive = products
//   .filter(p => p.inStock)
//   .reduce((max, p) => p.price > max.price ? p : max);
// console.log('Más caro disponible:', mostExpensive.name);

console.log('');

// ============================================
// ✅ LAB COMPLETADO
// ============================================
console.log('🎉 ¡Excelente! Has dominado las arrow functions.');
console.log('Úsalas especialmente con map, filter y reduce.');
