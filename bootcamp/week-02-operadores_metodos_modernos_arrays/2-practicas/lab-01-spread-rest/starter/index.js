/**
 * 📘 Lab 01: Spread & Rest Operators
 *
 * Este es un lab guiado. Descomenta el código en cada paso
 * para aprender spread y rest operators en JavaScript ES2023.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Spread con Arrays - Combinar
// ============================================
console.log('--- Paso 1: Spread - Combinar Arrays ---');

// El operador spread (...) expande un array en elementos individuales
// Útil para combinar arrays sin mutar los originales
// Descomenta las siguientes líneas:

// const fruits1 = ['apple', 'banana'];
// const fruits2 = ['orange', 'grape'];
// const allFruits = [...fruits1, ...fruits2];
// console.log('Frutas combinadas:', allFruits);
//
// // También puedes agregar elementos entre arrays
// const moreFruits = [...fruits1, 'mango', ...fruits2, 'kiwi'];
// console.log('Con extras:', moreFruits);

console.log('');

// ============================================
// PASO 2: Spread con Arrays - Clonar
// ============================================
console.log('--- Paso 2: Spread - Clonar Arrays ---');

// Spread crea una copia superficial (shallow copy)
// Los cambios en la copia no afectan al original
// Descomenta las siguientes líneas:

// const original = [1, 2, 3];
// const copy = [...original];
// copy.push(4);
// console.log('Original:', original); // [1, 2, 3] - no cambió
// console.log('Copia:', copy); // [1, 2, 3, 4]
//
// // Útil con Math.max/min
// const numbers = [5, 2, 9, 1, 7];
// const max = Math.max(...numbers);
// const min = Math.min(...numbers);
// console.log('Máximo:', max);
// console.log('Mínimo:', min);

console.log('');

// ============================================
// PASO 3: Spread con Objetos
// ============================================
console.log('--- Paso 3: Spread con Objetos ---');

// Spread también funciona con objetos
// Las propiedades posteriores sobreescriben las anteriores
// Descomenta las siguientes líneas:

// const defaults = { theme: 'light', language: 'en', debug: false };
// const userSettings = { theme: 'dark', fontSize: 16 };
// const config = { ...defaults, ...userSettings };
// console.log('Config final:', config);
// // { theme: 'dark', language: 'en', debug: false, fontSize: 16 }
//
// // Actualizar una propiedad sin mutar
// const product = { name: 'Laptop', price: 999, stock: 5 };
// const updated = { ...product, price: 899 };
// console.log('Original:', product);
// console.log('Actualizado:', updated);

console.log('');

// ============================================
// PASO 4: Spread Anidado
// ============================================
console.log('--- Paso 4: Spread Anidado ---');

// Para objetos anidados, spread solo copia el primer nivel
// Necesitas spread adicional para niveles internos
// Descomenta las siguientes líneas:

// const user = {
//   name: 'Ana',
//   address: { city: 'Madrid', country: 'Spain' }
// };
//
// // ⚠️ Shallow copy - address es la misma referencia
// const shallowCopy = { ...user };
//
// // ✅ Deep copy del primer nivel de address
// const deepCopy = {
//   ...user,
//   address: { ...user.address }
// };
//
// // Modificar deep copy
// deepCopy.address.city = 'Barcelona';
// console.log('Original city:', user.address.city); // Madrid
// console.log('Deep copy city:', deepCopy.address.city); // Barcelona

console.log('');

// ============================================
// PASO 5: Rest en Parámetros de Función
// ============================================
console.log('--- Paso 5: Rest en Parámetros ---');

// Rest (...) recoge múltiples argumentos en un array
// Debe ser el último parámetro
// Descomenta las siguientes líneas:

// const sum = (...numbers) => {
//   return numbers.reduce((acc, num) => acc + num, 0);
// };
// console.log('Suma:', sum(1, 2, 3, 4, 5));
//
// // Combinar parámetros normales con rest
// const greetAll = (greeting, ...names) => {
//   return names.map(name => `${greeting}, ${name}!`);
// };
// console.log(greetAll('Hola', 'Ana', 'Bob', 'Carlos'));

console.log('');

// ============================================
// PASO 6: Rest en Destructuring
// ============================================
console.log('--- Paso 6: Rest en Destructuring ---');

// Rest captura "el resto" de elementos en destructuring
// Descomenta las siguientes líneas:

// // En arrays
// const [first, second, ...remaining] = [1, 2, 3, 4, 5];
// console.log('Primero:', first);
// console.log('Segundo:', second);
// console.log('Resto:', remaining); // [3, 4, 5]
//
// // En objetos
// const { name, ...otherProps } = {
//   name: 'Product',
//   price: 100,
//   category: 'Tech',
//   inStock: true
// };
// console.log('Nombre:', name);
// console.log('Otras props:', otherProps);

console.log('');

// ============================================
// PASO 7: Spread para Insertar en Posición
// ============================================
console.log('--- Paso 7: Insertar en Posición ---');

// Combina slice con spread para insertar sin mutar
// Descomenta las siguientes líneas:

// const insertAt = (array, index, ...elements) => {
//   return [
//     ...array.slice(0, index),
//     ...elements,
//     ...array.slice(index)
//   ];
// };
//
// const letters = ['a', 'b', 'e', 'f'];
// const withInserted = insertAt(letters, 2, 'c', 'd');
// console.log('Original:', letters);
// console.log('Con inserción:', withInserted);

console.log('');

// ============================================
// PASO 8: Caso Práctico - Merge de Configuraciones
// ============================================
console.log('--- Paso 8: Caso Práctico ---');

// Función que combina configuraciones con valores por defecto
// Descomenta las siguientes líneas:

// const createConfig = (userOptions = {}) => {
//   const defaults = {
//     theme: 'light',
//     language: 'es',
//     notifications: true,
//     api: {
//       timeout: 5000,
//       retries: 3
//     }
//   };
//
//   return {
//     ...defaults,
//     ...userOptions,
//     api: {
//       ...defaults.api,
//       ...(userOptions.api || {})
//     }
//   };
// };
//
// const myConfig = createConfig({
//   theme: 'dark',
//   api: { timeout: 10000 }
// });
// console.log('Mi configuración:', myConfig);

console.log('');

// ============================================
// ✅ LAB COMPLETADO
// ============================================
console.log('🎉 ¡Excelente! Has completado el lab de Spread & Rest.');
console.log('Revisa cada paso y experimenta modificando los valores.');
