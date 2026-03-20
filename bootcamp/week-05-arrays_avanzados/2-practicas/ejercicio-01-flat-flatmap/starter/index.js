/**
 * 📘 Ejercicio 01: flat() y flatMap()
 * Práctica guiada - Descomenta cada sección para aprender
 */

console.log('=== Ejercicio 01: flat() y flatMap() ===\n');

// ============================================
// PASO 1: Entendiendo flat()
// ============================================
console.log('--- Paso 1: flat() básico ---');

const categories = [
  ['Laptop', 'Desktop', 'Tablet'],
  ['Mouse', 'Keyboard', 'Monitor'],
  ['Headphones', 'Speakers'],
];

// flat() convierte un array de arrays en un array simple
// Descomenta la siguiente línea:
// const allProducts = categories.flat();

// console.log('Productos:', allProducts);
// Esperado: ['Laptop', 'Desktop', 'Tablet', 'Mouse', 'Keyboard', 'Monitor', 'Headphones', 'Speakers']

console.log('');

// ============================================
// PASO 2: Controlando la Profundidad
// ============================================
console.log('--- Paso 2: flat() con profundidad ---');

const deepData = [1, [2, [3, [4, [5, [6]]]]]];

// flat() sin argumento solo aplana 1 nivel
// flat(Infinity) aplana completamente
// Descomenta la siguiente línea:
// const flatDeep = deepData.flat(Infinity);

// console.log('Deep flat:', flatDeep);
// Esperado: [1, 2, 3, 4, 5, 6]

console.log('');

// ============================================
// PASO 3: Introducción a flatMap()
// ============================================
console.log('--- Paso 3: flatMap() básico ---');

const posts = [
  { title: 'Post 1', tags: ['javascript', 'es6'] },
  { title: 'Post 2', tags: ['react', 'hooks', 'javascript'] },
  { title: 'Post 3', tags: ['node', 'express'] },
];

// flatMap() = map() + flat(1) en una operación
// Perfecto para extraer arrays anidados de objetos
// Descomenta la siguiente línea:
// const allTags = posts.flatMap(post => post.tags);

// console.log('Todos los tags:', allTags);
// Esperado: ['javascript', 'es6', 'react', 'hooks', 'javascript', 'node', 'express']

console.log('');

// ============================================
// PASO 4: Eliminar Duplicados
// ============================================
console.log('--- Paso 4: Tags únicos ---');

// Combina flatMap con Set para eliminar duplicados
// Descomenta las siguientes líneas:
// const allTagsForUnique = posts.flatMap(post => post.tags);
// const uniqueTags = [...new Set(allTagsForUnique)];

// console.log('Tags únicos:', uniqueTags);
// Esperado: ['javascript', 'es6', 'react', 'hooks', 'node', 'express']

console.log('');

// ============================================
// PASO 5: Expandir Elementos
// ============================================
console.log('--- Paso 5: Expandir con flatMap() ---');

const items = [
  { name: 'Apple', qty: 3 },
  { name: 'Banana', qty: 2 },
  { name: 'Orange', qty: 1 },
];

// flatMap puede generar múltiples elementos por cada elemento original
// Array(n).fill(value) crea un array con n copias de value
// Descomenta la siguiente línea:
// const expandedItems = items.flatMap(item => Array(item.qty).fill(item.name));

// console.log('Items expandidos:', expandedItems);
// Esperado: ['Apple', 'Apple', 'Apple', 'Banana', 'Banana', 'Orange']

console.log('');

// ============================================
// PASO 6: Filtrar con flatMap()
// ============================================
console.log('--- Paso 6: Filtrar y expandir ---');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Truco: retornar [] para "eliminar" un elemento
// Descomenta la siguiente línea:
// const evenDoubled = numbers.flatMap(n => n % 2 === 0 ? [n, n] : []);

// console.log('Pares duplicados:', evenDoubled);
// Esperado: [2, 2, 4, 4, 6, 6, 8, 8, 10, 10]

console.log('');

// ============================================
// PASO 7: Enriquecer Datos
// ============================================
console.log('--- Paso 7: Agregar contexto del padre ---');

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

// Al aplanar, agregamos el orderId a cada item
// Descomenta las siguientes líneas:
// const flatOrderItems = orders.flatMap(order =>
//   order.items.map(item => ({
//     orderId: order.id,
//     ...item
//   }))
// );

// console.log('Items con orderId:', flatOrderItems);
// Esperado: Array de 5 objetos, cada uno con orderId, product, price

console.log('');

// ============================================
// PASO 8: Generar Combinaciones
// ============================================
console.log('--- Paso 8: Combinaciones ---');

const colors = ['red', 'blue'];
const sizes = ['S', 'M', 'L'];

// flatMap anidado genera todas las combinaciones
// Descomenta las siguientes líneas:
// const combinations = colors.flatMap(color =>
//   sizes.map(size => ({ color, size }))
// );

// console.log('Combinaciones:', combinations);
// Esperado: 6 objetos con todas las combinaciones color-size

console.log('');

// ============================================
// PASO 9: Separar Strings
// ============================================
console.log('--- Paso 9: Parsear oraciones ---');

const sentences = ['Hello world', 'JavaScript is awesome', 'flatMap rocks'];

// split(' ') divide por espacios, flatMap aplana todo
// Descomenta la siguiente línea:
// const allWords = sentences.flatMap(s => s.split(' '));

// console.log('Palabras:', allWords);
// Esperado: ['Hello', 'world', 'JavaScript', 'is', 'awesome', 'flatMap', 'rocks']

console.log('');

// ============================================
// PASO 10: Expandir Rangos
// ============================================
console.log('--- Paso 10: Expandir rangos ---');

const ranges = [
  { start: 1, end: 3 },
  { start: 10, end: 12 },
  { start: 20, end: 21 },
];

// Generamos un array de números para cada rango
// Descomenta las siguientes líneas:
// const expandedRanges = ranges.flatMap(range => {
//   const result = [];
//   for (let i = range.start; i <= range.end; i++) {
//     result.push(i);
//   }
//   return result;
// });

// console.log('Rangos expandidos:', expandedRanges);
// Esperado: [1, 2, 3, 10, 11, 12, 20, 21]

console.log('');
console.log('=== ¡Descomenta cada sección y ejecuta de nuevo! ===');
