/**
 * 📘 Lab 02: Array Methods Básicos
 *
 * Este es un lab guiado. Descomenta el código en cada paso
 * para aprender find, findIndex, some, every e includes.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// DATOS DE PRUEBA (no modificar)
// ============================================

const users = [
  { id: 1, name: 'Ana', email: 'ana@example.com', age: 25, verified: true },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 17, verified: false },
  {
    id: 3,
    name: 'Carlos',
    email: 'carlos@example.com',
    age: 30,
    verified: true,
  },
  { id: 4, name: 'Diana', email: 'diana@example.com', age: 22, verified: true },
];

const products = [
  { id: 101, name: 'Laptop', price: 999, stock: 5, category: 'electronics' },
  { id: 102, name: 'Mouse', price: 25, stock: 0, category: 'electronics' },
  { id: 103, name: 'Keyboard', price: 75, stock: 10, category: 'electronics' },
  { id: 104, name: 'Monitor', price: 300, stock: 3, category: 'electronics' },
];

const numbers = [5, 12, 8, 130, 44, 3, 99];

// ============================================
// PASO 1: find() - Encontrar un Elemento
// ============================================
console.log('--- Paso 1: find() ---');

// find() retorna el PRIMER elemento que cumple la condición
// Si no encuentra nada, retorna undefined
// Descomenta las siguientes líneas:

// const userAna = users.find(user => user.name === 'Ana');
// console.log('Usuario Ana:', userAna);
//
// const userByEmail = users.find(user => user.email === 'carlos@example.com');
// console.log('Usuario por email:', userByEmail);
//
// const adult = users.find(user => user.age >= 18);
// console.log('Primer adulto:', adult);
//
// const notFound = users.find(user => user.name === 'Zoe');
// console.log('No encontrado:', notFound); // undefined

console.log('');

// ============================================
// PASO 2: findIndex() - Encontrar Posición
// ============================================
console.log('--- Paso 2: findIndex() ---');

// findIndex() retorna el ÍNDICE del primer elemento que cumple
// Si no encuentra nada, retorna -1
// Descomenta las siguientes líneas:

// const bobIndex = users.findIndex(user => user.name === 'Bob');
// console.log('Índice de Bob:', bobIndex);
//
// const laptopIndex = products.findIndex(p => p.name === 'Laptop');
// console.log('Índice de Laptop:', laptopIndex);
//
// // Útil para actualizar o eliminar
// const productToUpdate = products[laptopIndex];
// console.log('Producto a actualizar:', productToUpdate);
//
// const notFoundIndex = users.findIndex(user => user.id === 999);
// console.log('Índice no encontrado:', notFoundIndex); // -1

console.log('');

// ============================================
// PASO 3: some() - ¿Alguno Cumple?
// ============================================
console.log('--- Paso 3: some() ---');

// some() retorna true si AL MENOS UN elemento cumple
// Es como un OR lógico entre todos los elementos
// Descomenta las siguientes líneas:

// const hasMinors = users.some(user => user.age < 18);
// console.log('¿Hay menores?:', hasMinors);
//
// const hasOutOfStock = products.some(p => p.stock === 0);
// console.log('¿Hay productos sin stock?:', hasOutOfStock);
//
// const hasExpensive = products.some(p => p.price > 500);
// console.log('¿Hay productos > $500?:', hasExpensive);
//
// const hasUnverified = users.some(user => !user.verified);
// console.log('¿Hay no verificados?:', hasUnverified);

console.log('');

// ============================================
// PASO 4: every() - ¿Todos Cumplen?
// ============================================
console.log('--- Paso 4: every() ---');

// every() retorna true si TODOS los elementos cumplen
// Es como un AND lógico entre todos los elementos
// Descomenta las siguientes líneas:

// const allAdults = users.every(user => user.age >= 18);
// console.log('¿Todos son adultos?:', allAdults);
//
// const allVerified = users.every(user => user.verified);
// console.log('¿Todos verificados?:', allVerified);
//
// const allInStock = products.every(p => p.stock > 0);
// console.log('¿Todos con stock?:', allInStock);
//
// const allElectronics = products.every(p => p.category === 'electronics');
// console.log('¿Todos electronics?:', allElectronics);

console.log('');

// ============================================
// PASO 5: includes() - Arrays Simples
// ============================================
console.log('--- Paso 5: includes() ---');

// includes() busca un valor exacto en arrays de primitivos
// Retorna true/false
// Descomenta las siguientes líneas:

// const fruits = ['apple', 'banana', 'orange', 'grape'];
// console.log('¿Tiene banana?:', fruits.includes('banana'));
// console.log('¿Tiene mango?:', fruits.includes('mango'));
//
// console.log('¿Tiene 12?:', numbers.includes(12));
// console.log('¿Tiene 100?:', numbers.includes(100));
//
// // Buscar desde un índice específico
// const letters = ['a', 'b', 'c', 'a', 'd'];
// console.log('¿Tiene "a" desde índice 2?:', letters.includes('a', 2));

console.log('');

// ============================================
// PASO 6: Combinando Métodos
// ============================================
console.log('--- Paso 6: Combinando Métodos ---');

// Puedes combinar métodos para lógica más compleja
// Descomenta las siguientes líneas:

// // Verificar si un usuario existe y está verificado
// const checkUser = email => {
//   const user = users.find(u => u.email === email);
//   return user && user.verified;
// };
// console.log('¿ana@example.com verificado?:', checkUser('ana@example.com'));
// console.log('¿bob@example.com verificado?:', checkUser('bob@example.com'));
//
// // Verificar disponibilidad de producto
// const isAvailable = productName => {
//   const product = products.find(p => p.name === productName);
//   return product ? product.stock > 0 : false;
// };
// console.log('¿Laptop disponible?:', isAvailable('Laptop'));
// console.log('¿Mouse disponible?:', isAvailable('Mouse'));

console.log('');

// ============================================
// PASO 7: Validación de Formularios
// ============================================
console.log('--- Paso 7: Validación de Formularios ---');

// Caso práctico: validar campos de un formulario
// Descomenta las siguientes líneas:

// const formData = {
//   username: 'john_doe',
//   email: 'john@example.com',
//   password: 'secret123',
//   age: 25
// };
//
// const requiredFields = ['username', 'email', 'password'];
//
// // ¿Todos los campos requeridos tienen valor?
// const allFieldsFilled = requiredFields.every(field => {
//   const value = formData[field];
//   return value !== undefined && value !== '';
// });
// console.log('¿Formulario completo?:', allFieldsFilled);
//
// // ¿Algún campo está vacío?
// const hasEmptyField = requiredFields.some(field => {
//   const value = formData[field];
//   return value === undefined || value === '';
// });
// console.log('¿Hay campos vacíos?:', hasEmptyField);

console.log('');

// ============================================
// PASO 8: Búsqueda con Múltiples Criterios
// ============================================
console.log('--- Paso 8: Búsqueda Múltiple ---');

// Búsqueda combinando varios criterios
// Descomenta las siguientes líneas:

// const findProduct = (criteria) => {
//   return products.find(p => {
//     const matchName = !criteria.name || p.name.toLowerCase().includes(criteria.name.toLowerCase());
//     const matchMaxPrice = !criteria.maxPrice || p.price <= criteria.maxPrice;
//     const matchInStock = !criteria.inStock || p.stock > 0;
//     return matchName && matchMaxPrice && matchInStock;
//   });
// };
//
// console.log('Buscar barato:', findProduct({ maxPrice: 50 }));
// console.log('Buscar "key" con stock:', findProduct({ name: 'key', inStock: true }));
// console.log('Buscar "mouse" con stock:', findProduct({ name: 'mouse', inStock: true }));

console.log('');

// ============================================
// ✅ LAB COMPLETADO
// ============================================
console.log(
  '🎉 ¡Excelente! Has completado el lab de Array Methods Básicos.'
);
console.log('Revisa cada paso y experimenta modificando las condiciones.');
