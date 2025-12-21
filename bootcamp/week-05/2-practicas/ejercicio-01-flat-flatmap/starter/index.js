/**
 * Ejercicio 01: flat() y flatMap()
 *
 * Practica el aplanamiento de arrays anidados
 */

// ============================================
// TAREA 1: Aplanar Categorías de Productos
// ============================================

const categories = [
  ['Laptop', 'Desktop', 'Tablet'],
  ['Mouse', 'Keyboard', 'Monitor'],
  ['Headphones', 'Speakers'],
];

// TODO: Obtener lista plana de todos los productos
const allProducts = null; // Implementar

console.log('Tarea 1 - Productos:', allProducts);
// Esperado: ['Laptop', 'Desktop', 'Tablet', 'Mouse', 'Keyboard', 'Monitor', 'Headphones', 'Speakers']

// ============================================
// TAREA 2: Aplanar Estructura Profunda
// ============================================

const deepData = [1, [2, [3, [4, [5, [6]]]]]];

// TODO: Aplanar completamente
const flatDeep = null; // Implementar

console.log('Tarea 2 - Deep flat:', flatDeep);
// Esperado: [1, 2, 3, 4, 5, 6]

// ============================================
// TAREA 3: Extraer Todos los Tags
// ============================================

const posts = [
  { title: 'Post 1', tags: ['javascript', 'es6'] },
  { title: 'Post 2', tags: ['react', 'hooks', 'javascript'] },
  { title: 'Post 3', tags: ['node', 'express'] },
];

// TODO: Obtener array con todos los tags
const allTags = null; // Implementar

console.log('Tarea 3 - Todos los tags:', allTags);
// Esperado: ['javascript', 'es6', 'react', 'hooks', 'javascript', 'node', 'express']

// ============================================
// TAREA 4: Tags Únicos
// ============================================

// TODO: Obtener tags únicos (sin duplicados)
const uniqueTags = null; // Implementar usando allTags

console.log('Tarea 4 - Tags únicos:', uniqueTags);
// Esperado: ['javascript', 'es6', 'react', 'hooks', 'node', 'express']

// ============================================
// TAREA 5: Expandir Cantidades
// ============================================

const items = [
  { name: 'Apple', qty: 3 },
  { name: 'Banana', qty: 2 },
  { name: 'Orange', qty: 1 },
];

// TODO: Crear array con cada item repetido según su cantidad
const expandedItems = null; // Implementar

console.log('Tarea 5 - Items expandidos:', expandedItems);
// Esperado: ['Apple', 'Apple', 'Apple', 'Banana', 'Banana', 'Orange']

// ============================================
// TAREA 6: Filtrar y Expandir
// ============================================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: Solo números pares, cada uno duplicado
const evenDoubled = null; // Implementar

console.log('Tarea 6 - Pares duplicados:', evenDoubled);
// Esperado: [2, 2, 4, 4, 6, 6, 8, 8, 10, 10]

// ============================================
// TAREA 7: Procesar Órdenes
// ============================================

const orders = [
  {
    id: 'ORD001',
    items: [
      { product: 'Laptop', price: 1000 },
      { product: 'Mouse', price: 25 },
    ],
  },
  {
    id: 'ORD002',
    items: [
      { product: 'Keyboard', price: 75 },
      { product: 'Monitor', price: 300 },
      { product: 'Webcam', price: 50 },
    ],
  },
];

// TODO: Lista plana de items con orderId incluido
const flatOrderItems = null; // Implementar

console.log('Tarea 7 - Items de órdenes:', flatOrderItems);
// Esperado: Array de objetos { orderId, product, price }

// ============================================
// TAREA 8: Generar Combinaciones
// ============================================

const colors = ['red', 'blue'];
const sizes = ['S', 'M', 'L'];

// TODO: Todas las combinaciones color-size
const combinations = null; // Implementar

console.log('Tarea 8 - Combinaciones:', combinations);
// Esperado: Array de 6 objetos { color, size }

// ============================================
// TAREA 9: Parsear Oraciones
// ============================================

const sentences = ['Hello world', 'JavaScript is awesome', 'flatMap rocks'];

// TODO: Array de todas las palabras
const allWords = null; // Implementar

console.log('Tarea 9 - Palabras:', allWords);
// Esperado: ['Hello', 'world', 'JavaScript', 'is', 'awesome', 'flatMap', 'rocks']

// ============================================
// TAREA 10: Expandir Rangos
// ============================================

const ranges = [
  { start: 1, end: 3 },
  { start: 10, end: 12 },
  { start: 20, end: 21 },
];

// TODO: Expandir cada rango a sus números
const expandedRanges = null; // Implementar

console.log('Tarea 10 - Rangos expandidos:', expandedRanges);
// Esperado: [1, 2, 3, 10, 11, 12, 20, 21]

// ============================================
// BONUS: Función genérica flatMap con profundidad
// ============================================

// TODO: Implementar flatMapDeep que acepte profundidad
const flatMapDeep = (arr, fn, depth = 1) => {
  // Implementar
  return null;
};

// Test bonus
const nestedData = [[1, 2], [[3, 4]], [[[5, 6]]]];
// flatMapDeep(nestedData, x => x, 2) debería dar [1, 2, 3, 4, [5, 6]]
