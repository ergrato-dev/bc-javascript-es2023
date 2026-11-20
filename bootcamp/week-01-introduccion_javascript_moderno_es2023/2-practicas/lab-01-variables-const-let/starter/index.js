/**
 * 📘 Lab 01: Variables Modernas (const y let)
 *
 * Este es un lab guiado. Descomenta el código en cada paso
 * para aprender sobre variables modernas en JavaScript.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: const - Variables que No Cambian
// ============================================
console.log('--- Paso 1: const Básico ---');

// const declara variables que NO se pueden reasignar
// Usa const por defecto para todo
// Descomenta las siguientes líneas:

const appName = 'Mi Aplicación';
const version = '1.0.0';
const maxUsers = 100;
//
console.log('Nombre:', appName);
console.log('Versión:', version);
console.log('Máximo usuarios:', maxUsers);
//
// // Esto daría error (descomenta para probar):
// // appName = 'Otro Nombre'; // TypeError: Assignment to constant variable

console.log('');

// ============================================
// PASO 2: let - Variables que Pueden Cambiar
// ============================================
console.log('--- Paso 2: let Básico ---');

// let declara variables que SÍ se pueden reasignar
// Usa let cuando necesites cambiar el valor
// Descomenta las siguientes líneas:

// let counter = 0;
// console.log('Contador inicial:', counter);
//
// counter = counter + 1;
// console.log('Después de +1:', counter);
//
// counter += 1;  // Forma corta de counter = counter + 1
// console.log('Después de +=1:', counter);
//
// counter++;  // Incremento rápido
// console.log('Después de ++:', counter);

console.log('');

// ============================================
// PASO 3: const con Objetos
// ============================================
console.log('--- Paso 3: const con Objetos ---');

// const impide reasignar, pero NO impide modificar el contenido
// Puedes cambiar propiedades de un objeto const
// Descomenta las siguientes líneas:

// const user = {
//   name: 'Ana',
//   age: 25
// };
// console.log('Usuario inicial:', user);
//
// // Esto SÍ funciona - modificar propiedades
// user.age = 26;
// user.city = 'Madrid';
// console.log('Usuario modificado:', user);
//
// // Esto NO funciona - reasignar el objeto completo
// // user = { name: 'Bob' }; // TypeError: Assignment to constant variable

console.log('');

// ============================================
// PASO 4: const con Arrays
// ============================================
console.log('--- Paso 4: const con Arrays ---');

// Igual que con objetos, puedes modificar contenido de arrays const
// Descomenta las siguientes líneas:

// const fruits = ['apple', 'banana'];
// console.log('Frutas iniciales:', fruits);
//
// // Esto SÍ funciona
// fruits.push('orange');
// fruits[0] = 'grape';
// console.log('Frutas modificadas:', fruits);
//
// // Esto NO funciona
// // fruits = ['new', 'array']; // TypeError

console.log('');

// ============================================
// PASO 5: Block Scope
// ============================================
console.log('--- Paso 5: Block Scope ---');

// let y const tienen "block scope" (ámbito de bloque)
// Solo existen dentro de las llaves {} donde se declaran
// Descomenta las siguientes líneas:

// const globalMessage = 'Soy global';
//
// if (true) {
//   const blockMessage = 'Soy de bloque';
//   console.log('Dentro del if:', globalMessage);  // ✅ Funciona
//   console.log('Dentro del if:', blockMessage);   // ✅ Funciona
// }
//
// console.log('Fuera del if:', globalMessage);  // ✅ Funciona
// // console.log(blockMessage);  // ❌ Error: blockMessage is not defined

console.log('');

// ============================================
// PASO 6: let en Loops
// ============================================
console.log('--- Paso 6: let en Loops ---');

// En loops, let crea una nueva variable en cada iteración
// Descomenta las siguientes líneas:

// console.log('Loop con let:');
// for (let i = 1; i <= 5; i++) {
//   console.log('  Iteración:', i);
// }
// // console.log(i); // ❌ Error: i is not defined (solo existe en el loop)
//
// // Acumulador con let
// let sum = 0;
// for (let n = 1; n <= 5; n++) {
//   sum += n;
// }
// console.log('Suma de 1 a 5:', sum);

console.log('');

// ============================================
// PASO 7: Temporal Dead Zone (TDZ)
// ============================================
console.log('--- Paso 7: Temporal Dead Zone ---');

// No puedes usar let/const antes de declararlas
// Descomenta las siguientes líneas:

// // Esto daría error:
// // console.log(myVar);  // ReferenceError: Cannot access before initialization
// // let myVar = 'valor';
//
// // Siempre declara antes de usar:
// const myConst = 'valor correcto';
// console.log('Declarado primero:', myConst);

console.log('');

// ============================================
// PASO 8: Caso Práctico - Configuración
// ============================================
console.log('--- Paso 8: Caso Práctico ---');

// Patrón común: objeto de configuración con const
// Descomenta las siguientes líneas:

// const config = {
//   apiUrl: 'https://api.example.com',
//   timeout: 5000,
//   maxRetries: 3
// };
//
// console.log('Configuración inicial:', config);
//
// // Modificar para entorno de desarrollo
// config.timeout = 10000;
// config.debug = true;
//
// console.log('Configuración de desarrollo:', config);
//
// // Contador de peticiones
// let requestCount = 0;
// requestCount++;
// requestCount++;
// console.log('Peticiones realizadas:', requestCount);

console.log('');

// ============================================
// ✅ LAB COMPLETADO
// ============================================
console.log(
  '🎉 ¡Excelente! Has completado el lab de variables modernas.'
);
console.log(
  'Recuerda: const por defecto, let solo cuando necesites reasignar.'
);
