/**
 * 📘 Lab 02: operaciones con Set
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Unión de Sets
// ============================================
console.log('--- Paso 1: Unión de Sets ---');

// Crear dos sets para trabajar
// Descomenta las siguientes líneas:
// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([3, 4, 5, 6]);
// console.log('Set A:', setA);
// console.log('Set B:', setB);

// Unión: combinar todos los elementos de ambos sets
// Descomenta las siguientes líneas:
// const union = new Set([...setA, ...setB]);
// console.log('Unión (A ∪ B):', union);

console.log('');

// ============================================
// PASO 2: Intersección
// ============================================
console.log('--- Paso 2: Intersección ---');

// Intersección: solo elementos presentes en ambos
// Descomenta las siguientes líneas:
// const intersection = new Set(
//   [...setA].filter(x => setB.has(x))
// );
// console.log('Intersección (A ∩ B):', intersection);

console.log('');

// ============================================
// PASO 3: Diferencia
// ============================================
console.log('--- Paso 3: Diferencia ---');

// Diferencia A - B: elementos en A que no están en B
// Descomenta las siguientes líneas:
// const differenceAB = new Set(
//   [...setA].filter(x => !setB.has(x))
// );
// console.log('Diferencia (A - B):', differenceAB);

// Diferencia B - A: elementos en B que no están en A
// Descomenta las siguientes líneas:
// const differenceBA = new Set(
//   [...setB].filter(x => !setA.has(x))
// );
// console.log('Diferencia (B - A):', differenceBA);

console.log('');

// ============================================
// PASO 4: Diferencia Simétrica
// ============================================
console.log('--- Paso 4: Diferencia Simétrica ---');

// Diferencia simétrica: elementos en uno u otro, pero no en ambos
// Descomenta las siguientes líneas:
// const symmetricDiff = new Set([
//   ...[...setA].filter(x => !setB.has(x)),
//   ...[...setB].filter(x => !setA.has(x))
// ]);
// console.log('Diferencia Simétrica (A △ B):', symmetricDiff);

console.log('');

// ============================================
// PASO 5: Subconjunto y Superconjunto
// ============================================
console.log('--- Paso 5: Subconjunto y Superconjunto ---');

// Verificar si un set es subconjunto de otro
// Descomenta las siguientes líneas:
// const setX = new Set([1, 2]);
// const setY = new Set([1, 2, 3, 4]);
// const setZ = new Set([5, 6]);

// console.log('Set X:', setX);
// console.log('Set Y:', setY);

// Subconjunto: todos los elementos de X están en Y
// const isSubset = [...setX].every(x => setY.has(x));
// console.log('¿X es subconjunto de Y?', isSubset);

// Superconjunto: Y contiene todos los elementos de X
// const isSuperset = [...setX].every(x => setY.has(x));
// console.log('¿Y es superconjunto de X?', isSuperset);

// Conjuntos disjuntos: no tienen elementos en común
// const areDisjoint = [...setX].every(x => !setZ.has(x));
// console.log('¿X y Z son disjuntos?', areDisjoint);

console.log('');

// ============================================
// PASO 6: Clase SetOps Reutilizable
// ============================================
console.log('--- Paso 6: Clase SetOps ---');

// Crear una clase con todas las operaciones
// Descomenta las siguientes líneas:
// class SetOps {
//   static union(a, b) {
//     return new Set([...a, ...b]);
//   }
//
//   static intersection(a, b) {
//     return new Set([...a].filter(x => b.has(x)));
//   }
//
//   static difference(a, b) {
//     return new Set([...a].filter(x => !b.has(x)));
//   }
//
//   static symmetricDifference(a, b) {
//     return new Set([
//       ...[...a].filter(x => !b.has(x)),
//       ...[...b].filter(x => !a.has(x))
//     ]);
//   }
//
//   static isSubset(a, b) {
//     return [...a].every(x => b.has(x));
//   }
//
//   static isSuperset(a, b) {
//     return [...b].every(x => a.has(x));
//   }
// }

// Ejemplo práctico: habilidades de desarrolladores
// Descomenta las siguientes líneas:
// const frontendDevs = new Set(['Alice', 'Bob', 'Charlie']);
// const backendDevs = new Set(['Bob', 'David', 'Eve']);

// console.log('Frontend:', frontendDevs);
// console.log('Backend:', backendDevs);
// console.log('Todos (unión):', SetOps.union(frontendDevs, backendDevs));
// console.log('Saben ambos (intersección):', SetOps.intersection(frontendDevs, backendDevs));
// console.log('Solo frontend:', SetOps.difference(frontendDevs, backendDevs));
// console.log('Solo backend:', SetOps.difference(backendDevs, frontendDevs));

console.log('');

// ============================================
// PASO 7: Métodos nativos (ES2025)
// ============================================
console.log('--- Paso 7: Métodos nativos (ES2025) ---');

// Desde ES2025 (Node 22+), Set trae estas operaciones de serie
// Descomenta las siguientes líneas:
// console.log('union:', setA.union(setB));
// console.log('intersection:', setA.intersection(setB));
// console.log('difference:', setA.difference(setB));
// console.log('symmetricDifference:', setA.symmetricDifference(setB));
// console.log('isSubsetOf:', setX.isSubsetOf(setY));
// console.log('isSupersetOf:', setY.isSupersetOf(setX));
// console.log('isDisjointFrom:', setX.isDisjointFrom(setZ));

// No modifican el Set original: devuelven uno nuevo
// console.log('setA sigue igual:', setA);

console.log('');

console.log('✅ Lab completado.');
