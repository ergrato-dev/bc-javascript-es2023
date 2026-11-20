/**
 * 📘 Lab 01: Set básico
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Creación de Set
// ============================================
console.log('--- Paso 1: Creación de Set ---');

// Crear un Set vacío
// Descomenta las siguientes líneas:
// const emptySet = new Set();
// console.log('Set vacío:', emptySet);

// Crear un Set con valores iniciales (duplicados ignorados)
// Descomenta las siguientes líneas:
// const numbersWithDuplicates = [1, 2, 3, 3, 4, 4, 4];
// const numberSet = new Set(numbersWithDuplicates);
// console.log('Set con valores:', numberSet);
// console.log('Tamaño:', numberSet.size);

console.log('');

// ============================================
// PASO 2: Agregar Elementos con add()
// ============================================
console.log('--- Paso 2: Agregar Elementos ---');

// El método add() agrega elementos y permite encadenar
// Descomenta las siguientes líneas:
// const fruits = new Set();
// fruits.add('manzana');
// fruits.add('banana');
// fruits.add('naranja');
// console.log('Después de agregar frutas:', fruits);

// Intentar agregar un duplicado (será ignorado)
// Descomenta las siguientes líneas:
// fruits.add('manzana');
// console.log("Agregar duplicado 'manzana':", fruits);

console.log('');

// ============================================
// PASO 3: Verificar y Eliminar
// ============================================
console.log('--- Paso 3: Verificar y Eliminar ---');

// has() verifica si un valor existe
// Descomenta las siguientes líneas:
// console.log("¿Tiene 'banana'?", fruits.has('banana'));
// console.log("¿Tiene 'uva'?", fruits.has('uva'));

// delete() elimina un valor y retorna true si existía
// Descomenta las siguientes líneas:
// const deleted = fruits.delete('banana');
// console.log("Eliminar 'banana':", deleted);
// console.log('Después de eliminar:', fruits);

// clear() vacía el Set entero (trabaja sobre una copia para no perder fruits)
// Descomenta las siguientes líneas:
// const basket = new Set(fruits);
// basket.clear();
// console.log('Después de clear:', basket, '| fruits sigue igual:', fruits.size);

console.log('');

// ============================================
// PASO 4: Iteración
// ============================================
console.log('--- Paso 4: Iteración ---');

// Los Sets son iterables con for...of
// Descomenta las siguientes líneas:
// const colors = new Set(['rojo', 'verde', 'azul']);
// console.log('Colores en el Set:');
// for (const color of colors) {
//   console.log('-', color);
// }

// También puedes usar forEach
// Descomenta las siguientes líneas:
// console.log('Usando forEach:');
// colors.forEach(color => {
//   console.log('Color:', color);
// });

console.log('');

// ============================================
// PASO 5: Eliminar Duplicados de Arrays
// ============================================
console.log('--- Paso 5: Eliminar Duplicados ---');

// Técnica común: convertir array a Set y de vuelta a array
// Descomenta las siguientes líneas:
// const arrayWithDuplicates = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// console.log('Array original:', arrayWithDuplicates);
// const uniqueArray = [...new Set(arrayWithDuplicates)];
// console.log('Array sin duplicados:', uniqueArray);

// Ejemplo práctico: emails únicos
// Descomenta las siguientes líneas:
// const emailList = [
//   'alice@test.com',
//   'bob@test.com',
//   'alice@test.com',
//   'charlie@test.com',
//   'bob@test.com'
// ];
// const uniqueEmails = [...new Set(emailList)];
// console.log('Emails únicos:', uniqueEmails);

console.log('');

// ============================================
// PASO 6: Sets con Objetos
// ============================================
console.log('--- Paso 6: Sets con Objetos ---');

// Los objetos se comparan por referencia, no por contenido
// Descomenta las siguientes líneas:
// const user1 = { id: 1, name: 'Alice' };
// const user2 = { id: 2, name: 'Bob' };
// const user3 = { id: 1, name: 'Alice' }; // Mismo contenido que user1

// const userSet = new Set();
// userSet.add(user1);
// userSet.add(user2);
// userSet.add(user3); // Se agrega porque es objeto diferente

// console.log('Set de usuarios:', userSet);
// console.log('¿Tiene user1?', userSet.has(user1));
// console.log('¿Tiene objeto igual a user1?', userSet.has({ id: 1, name: 'Alice' }));

console.log('');

console.log('✅ Lab completado.');
