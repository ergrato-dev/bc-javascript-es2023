/**
 * Ejercicio 01: Creación y Uso de Symbols
 *
 * Aprende los fundamentos de Symbol en JavaScript ES2023
 *
 * Instrucciones:
 * - Lee cada paso y descomenta el código
 * - Ejecuta con: node index.js
 * - Observa los resultados
 */

// ============================================
// PASO 1: Crear Símbolos
// ============================================
console.log('--- Paso 1: Crear Símbolos ---');

// Los símbolos se crean con Symbol(), opcionalmente con una descripción
// La descripción es solo para debugging, no afecta la identidad

// Descomenta las siguientes líneas:
// const userId = Symbol('user-id');
// console.log('Símbolo creado:', userId);
// console.log('Descripción:', userId.description);
// console.log('Tipo:', typeof userId);

console.log('');

// ============================================
// PASO 2: Unicidad de Símbolos
// ============================================
console.log('--- Paso 2: Unicidad ---');

// Cada llamada a Symbol() crea un valor ÚNICO
// Incluso con la misma descripción, son diferentes

// Descomenta las siguientes líneas:
// const sym1 = Symbol('id');
// const sym2 = Symbol('id');
// console.log('sym1 === sym2:', sym1 === sym2);
// console.log('Aunque tienen la misma descripción, son únicos');

// Esto es diferente a strings:
// const str1 = 'id';
// const str2 = 'id';
// console.log('str1 === str2:', str1 === str2); // true

console.log('');

// ============================================
// PASO 3: Símbolos como Claves de Objeto
// ============================================
console.log('--- Paso 3: Como Claves de Objeto ---');

// Los símbolos pueden usarse como claves de propiedades
// Se usa la sintaxis de propiedad computada [symbol]

// Descomenta las siguientes líneas:
// const ID = Symbol('id');
//
// const user = {
//   name: 'Alice',
//   [ID]: 12345  // Propiedad con clave simbólica
// };
//
// // Acceder con el símbolo
// console.log('Nombre:', user.name);
// console.log('ID (con símbolo):', user[ID]);
//
// // ⚠️ La notación de punto NO funciona
// console.log('ID (con punto):', user.ID); // undefined

console.log('');

// ============================================
// PASO 4: Ocultos de Enumeraciones
// ============================================
console.log('--- Paso 4: Ocultos de Enumeraciones ---');

// Las propiedades simbólicas NO aparecen en:
// - Object.keys()
// - Object.values()
// - Object.entries()
// - for...in
// - JSON.stringify()

// Descomenta las siguientes líneas:
// const _id = Symbol('id');
// const _createdAt = Symbol('createdAt');
//
// const profile = {
//   name: 'Alice',
//   email: 'alice@test.com',
//   [_id]: 'usr_123',
//   [_createdAt]: new Date()
// };
//
// console.log('Object.keys:', Object.keys(profile));
// console.log('Object.values:', Object.values(profile));
// console.log('JSON:', JSON.stringify(profile));
//
// // for...in tampoco muestra símbolos
// process.stdout.write('for...in: ');
// const keys = [];
// for (const key in profile) {
//   keys.push(key);
// }
// console.log(keys.join(', '));

console.log('');

// ============================================
// PASO 5: Acceder a Propiedades Simbólicas
// ============================================
console.log('--- Paso 5: Acceder a Símbolos ---');

// Aunque están "ocultos", los símbolos SON accesibles
// Object.getOwnPropertySymbols() retorna array de símbolos
// Reflect.ownKeys() retorna TODAS las claves (strings + symbols)

// Descomenta las siguientes líneas:
// const _secret = Symbol('secret');
// const _meta = Symbol('metadata');
//
// const data = {
//   visible: 'puedes verme',
//   [_secret]: 'dato oculto',
//   [_meta]: { version: 1 }
// };
//
// // Obtener solo símbolos
// const symbols = Object.getOwnPropertySymbols(data);
// console.log('Símbolos del objeto:', symbols);
//
// // Obtener TODO
// const allKeys = Reflect.ownKeys(data);
// console.log('Todas las claves:', allKeys);
//
// // Acceder al valor usando el símbolo encontrado
// console.log('Valor de _secret:', data[symbols[0]]);

console.log('');

// ============================================
// PASO 6: Ejercicio Práctico
// ============================================
console.log('--- Paso 6: Ejercicio Práctico ---');

// Crea un objeto "producto" con:
// - Propiedades públicas: name, price
// - Propiedades simbólicas: _internalId, _supplierCode

// Descomenta y completa:
// const _internalId = Symbol('internalId');
// const _supplierCode = Symbol('supplierCode');
//
// const producto = {
//   name: 'Laptop',
//   price: 999,
//   // Agrega las propiedades simbólicas aquí
// };
//
// // Verificar
// console.log('Claves públicas:', Object.keys(producto));
// console.log('Todas las claves:', Reflect.ownKeys(producto));
// console.log('ID interno:', producto[_internalId]);

console.log('');

// ============================================
// BONUS: No Usar new con Symbol
// ============================================
console.log('--- Bonus: Symbol no es Constructor ---');

// Symbol NO es un constructor, no se puede usar con new

// Descomenta para ver el error:
// try {
//   const sym = new Symbol('test');
// } catch (error) {
//   console.log('Error:', error.message);
//   console.log('Symbol() se llama como función, no con new');
// }

console.log('');
console.log('✅ Ejercicio 01 completado');
