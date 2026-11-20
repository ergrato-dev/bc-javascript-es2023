/**
 * 📘 Lab 03: Map básico
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Creación de Map
// ============================================
console.log('--- Paso 1: Creación de Map ---');

// Crear un Map vacío
// Descomenta las siguientes líneas:
// const emptyMap = new Map();
// console.log('Map vacío:', emptyMap);

// Crear un Map con valores iniciales (array de arrays)
// Descomenta las siguientes líneas:
// const userMap = new Map([
//   ['name', 'Alice'],
//   ['age', 30]
// ]);
// console.log('Map con valores:', userMap);
// console.log('Tamaño:', userMap.size);

console.log('');

// ============================================
// PASO 2: Métodos Básicos (set, get, has, delete)
// ============================================
console.log('--- Paso 2: Métodos Básicos ---');

// set() agrega o actualiza pares clave-valor
// Descomenta las siguientes líneas:
// const productMap = new Map();
// productMap.set('color', 'blue');
// productMap.set('size', 'large');
// productMap.set('price', 99.99);
// console.log('Después de set:', productMap);

// get() obtiene el valor de una clave
// Descomenta las siguientes líneas:
// console.log("get('color'):", productMap.get('color'));

// has() verifica si una clave existe
// Descomenta las siguientes líneas:
// console.log("has('size'):", productMap.has('size'));
// console.log("has('weight'):", productMap.has('weight'));

// delete() elimina un par clave-valor
// Descomenta las siguientes líneas:
// productMap.delete('size');
// console.log('Después de delete:', productMap);

console.log('');

// ============================================
// PASO 3: Iteración
// ============================================
console.log('--- Paso 3: Iteración ---');

// Descomenta las siguientes líneas:
// const personMap = new Map([
//   ['name', 'Bob'],
//   ['age', 25],
//   ['city', 'New York']
// ]);

// Iterar solo claves
// Descomenta las siguientes líneas:
// console.log('Claves:', [...personMap.keys()].join(', '));

// Iterar solo valores
// Descomenta las siguientes líneas:
// console.log('Valores:', [...personMap.values()].join(', '));

// Iterar entradas (clave-valor)
// Descomenta las siguientes líneas:
// console.log('Entradas:');
// for (const [key, value] of personMap.entries()) {
//   console.log(`  ${key} => ${value}`);
// }

console.log('');

// ============================================
// PASO 4: Claves de Cualquier Tipo
// ============================================
console.log('--- Paso 4: Claves de Cualquier Tipo ---');

// Map permite claves de cualquier tipo (a diferencia de Object)
// Descomenta las siguientes líneas:
// const flexibleMap = new Map();

// Objeto como clave
// const userObj = { id: 1 };
// flexibleMap.set(userObj, 'datos del usuario');
// console.log('Valor con clave objeto:', flexibleMap.get(userObj));

// Función como clave
// const callback = () => console.log('hello');
// flexibleMap.set(callback, 'resultado del callback');
// console.log('Valor con clave función:', flexibleMap.get(callback));

// Número como clave (en Object se convertiría a string)
// flexibleMap.set(42, 'cuarenta y dos');
// console.log('Valor con clave número:', flexibleMap.get(42));

console.log('');

// ============================================
// PASO 5: Conversiones
// ============================================
console.log('--- Paso 5: Conversiones ---');

// Descomenta las siguientes líneas:
// const originalMap = new Map([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3]
// ]);
// console.log('Map original:', originalMap);

// Map → Object
// const mapToObj = Object.fromEntries(originalMap);
// console.log('Map → Object:', mapToObj);

// Object → Map
// const someObj = { x: 10, y: 20 };
// const objToMap = new Map(Object.entries(someObj));
// console.log('Object → Map:', objToMap);

// Map → Array
// const mapToArray = [...originalMap];
// console.log('Map → Array:', mapToArray);

console.log('');

// ============================================
// PASO 6: Caso Práctico - Caché de Datos
// ============================================
console.log('--- Paso 6: Caché de Datos ---');

// Implementar un sistema de caché simple
// Descomenta las siguientes líneas:
// const cache = new Map();
// let cacheHits = 0;
// let cacheMisses = 0;

// const getUser = id => {
//   if (cache.has(id)) {
//     cacheHits++;
//     return cache.get(id);
//   }
//
//   // Simular fetch de datos
//   cacheMisses++;
//   const user = { id, name: `User ${id}` };
//   cache.set(id, user);
//   return user;
// };

// Primera llamada - no está en caché
// console.log('Primera llamada (computing):');
// console.log('  getUser(1):', getUser(1));

// Segunda llamada - está en caché
// console.log('Segunda llamada (cached):');
// console.log('  getUser(1):', getUser(1));

// Estadísticas
// console.log('Estadísticas:', { hits: cacheHits, misses: cacheMisses });

console.log('');

console.log('✅ Lab completado.');
