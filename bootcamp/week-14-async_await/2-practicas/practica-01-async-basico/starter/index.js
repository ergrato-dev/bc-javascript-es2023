// ============================================
// PRÁCTICA 01: Sintaxis Básica de Async/Await
// ============================================

// Helper para simular operaciones asíncronas
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const simulateFetch = data => new Promise(resolve => {
  setTimeout(() => resolve(data), 100);
});

// ============================================
// PASO 1: Función Async Básica
// ============================================
console.log('--- Paso 1: Función Async Básica ---');

// Una función async siempre retorna una Promise
// Descomenta las siguientes líneas:

// async function sayHello() {
//   return 'Hola mundo';
// }

// // Verificar que retorna una Promise
// const result = sayHello();
// console.log('Retorno de sayHello:', result.constructor.name);

// // Obtener el valor con .then()
// result.then(value => {
//   console.log('Valor resuelto:', value);
// });

console.log('');

// ============================================
// PASO 2: Diferentes Sintaxis de Async
// ============================================
console.log('--- Paso 2: Diferentes Sintaxis ---');

// Hay varias formas de declarar funciones async
// Descomenta las siguientes líneas:

// // 1. Function Declaration
// async function asyncDeclaration() {
//   return 'function async';
// }

// // 2. Function Expression
// const asyncExpression = async function() {
//   return 'function async';
// };

// // 3. Arrow Function
// const asyncArrow = async () => {
//   return 'arrow async';
// };

// // 4. Método de objeto
// const obj = {
//   async asyncMethod() {
//     return 'method async';
//   }
// };

// // Probar todas las sintaxis
// asyncDeclaration().then(v => console.log('Declaration:', v));
// asyncExpression().then(v => console.log('Expression:', v));
// asyncArrow().then(v => console.log('Arrow:', v));
// obj.asyncMethod().then(v => console.log('Method:', v));

console.log('');

// ============================================
// PASO 3: Usando Await
// ============================================
console.log('--- Paso 3: Usando Await ---');

// await "desenvuelve" el valor de una Promise
// Descomenta las siguientes líneas:

// async function useAwait() {
//   // await con Promise.resolve
//   const value = await Promise.resolve(42);
//   console.log('Valor con await:', value);
//
//   // await con función que retorna Promise
//   const user = await simulateFetch({ id: 1, name: 'Usuario' });
//   console.log('Usuario:', user);
// }

// useAwait();

console.log('');

// ============================================
// PASO 4: Conversión de Promises a Async/Await
// ============================================
console.log('--- Paso 4: Conversión de Promises ---');

// Convertir código con .then() a async/await
// Descomenta las siguientes líneas:

// // VERSIÓN ORIGINAL con .then()
// function fetchItemsWithThen() {
//   return simulateFetch({ items: ['item1', 'item2', 'item3'] })
//     .then(response => response.items)
//     .then(items => items.map(item => item.toUpperCase()));
// }

// // VERSIÓN CONVERTIDA con async/await
// async function fetchItemsWithAsync() {
//   const response = await simulateFetch({ items: ['item1', 'item2', 'item3'] });
//   const items = response.items;
//   const uppercased = items.map(item => item.toUpperCase());
//   return uppercased;
// }

// // Ambas producen el mismo resultado
// fetchItemsWithAsync().then(items => {
//   console.log('Items:', items);
// });

console.log('');

// ============================================
// PASO 5: Flujo de Ejecución
// ============================================
console.log('--- Paso 5: Flujo de Ejecución ---');

// Entender cómo fluye el código con await
// Descomenta las siguientes líneas:

// async function demonstrateFlow() {
//   console.log('2. Inicio de función async');
//
//   await delay(100);  // Pausa aquí
//
//   console.log('4. Después de await');
//   return 'completado';
// }

// console.log('1. Antes de async');
// demonstrateFlow().then(() => console.log('5. Promise resuelta'));
// console.log('3. Después de llamar (no espera)');

// Observa el orden: 1, 2, 3, 4, 5
// El código exterior NO espera a que termine la función async

console.log('');
console.log('=== Fin de la práctica ===');
