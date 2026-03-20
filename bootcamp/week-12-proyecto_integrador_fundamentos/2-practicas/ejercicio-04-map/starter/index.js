/**
 * 📘 Ejercicio 04: Map para Colecciones
 *
 * Este es un ejercicio guiado. Descomenta el código en cada paso
 * para aprender a usar Map en JavaScript ES2023.
 *
 * Ejecuta: node index.js
 */

// ============================================
// PASO 1: Crear y Poblar un Map
// ============================================
console.log('--- Paso 1: Crear Map ---');

// Map es mejor que Object para colecciones porque:
// - Las keys pueden ser de cualquier tipo
// - Mantiene el orden de inserción
// - Tiene .size para contar elementos
// - Mejor rendimiento para añadir/eliminar frecuente
// Descomenta las siguientes líneas:

// const products = new Map();
//
// // set(key, value) para agregar
// products.set('p1', { id: 'p1', name: 'Laptop', price: 999.99 });
// products.set('p2', { id: 'p2', name: 'Mouse', price: 29.99 });
// products.set('p3', { id: 'p3', name: 'Keyboard', price: 79.99 });
//
// console.log(`Productos en catálogo: ${products.size}`);
// console.log(products);

console.log('');

// ============================================
// PASO 2: Acceso y Verificación
// ============================================
console.log('--- Paso 2: Acceso ---');

// get() retorna el valor o undefined
// has() retorna boolean
// Descomenta las siguientes líneas:

// const laptop = products.get('p1');
// console.log(`Laptop encontrada: ${laptop.name} ($${laptop.price})`);
//
// // has() es más explícito que verificar undefined
// console.log(`¿Existe p1? ${products.has('p1')}`);
// console.log(`¿Existe p99? ${products.has('p99')}`);
//
// // Diferencia importante con objetos:
// const obj = { key: undefined };
// console.log(`obj.key existe? ${'key' in obj}`); // true
// console.log(`obj.key valor: ${obj.key}`); // undefined
// // Con Map, has() te dice claramente si existe

console.log('');

// ============================================
// PASO 3: Iteración
// ============================================
console.log('--- Paso 3: Iteración ---');

// Map tiene varios métodos de iteración
// Descomenta las siguientes líneas:

// console.log('Listado de productos:');
//
// // forEach recibe (value, key) - ¡orden inverso a Array!
// products.forEach((product, id) => {
//   console.log(`- [${id}] ${product.name}: $${product.price}`);
// });
//
// // Calcular total con for...of y destructuring
// let total = 0;
// for (const [id, product] of products) {
//   total += product.price;
// }
// console.log(`Total en inventario: $${total.toFixed(2)}`);

console.log('');

// ============================================
// PASO 4: Conversión Array ↔ Map
// ============================================
console.log('--- Paso 4: Conversión ---');

// Convertir entre Map y Array es muy común
// Descomenta las siguientes líneas:

// // Map a Array de entries [key, value]
// const entries = [...products];
// console.log('Array de entries:', entries.length, 'elementos');
//
// // Solo los valores (para renderizar, filtrar, etc.)
// const productList = [...products.values()];
// console.log('Solo valores:', productList.length, 'productos');
//
// // Filtrar productos (necesitas convertir a array)
// const expensive = [...products.values()].filter(p => p.price > 50);
// console.log(`Filtrar por precio > $50: ${expensive.length} productos`);
//
// // Crear Map desde array de entries
// const newMap = new Map([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3]
// ]);
// console.log('Map desde array:', newMap);

console.log('');

// ============================================
// PASO 5: Map en ProductService (Práctico)
// ============================================
console.log('--- Paso 5: ProductService ---');

// Así se usa Map en un servicio real
// Descomenta las siguientes líneas:

// class ProductService {
//   #products = new Map();
//
//   constructor(initialProducts) {
//     // Poblar el Map desde un array
//     initialProducts.forEach(product => {
//       this.#products.set(product.id, product);
//     });
//   }
//
//   // O(1) - acceso directo por ID
//   getById(id) {
//     return this.#products.get(id);
//   }
//
//   // Retornar todos como array
//   getAll() {
//     return [...this.#products.values()];
//   }
//
//   // Buscar por criterio
//   filter(predicate) {
//     return this.getAll().filter(predicate);
//   }
// }
//
// const catalog = new ProductService([
//   { id: 'p1', name: 'Laptop', price: 999.99 },
//   { id: 'p2', name: 'Mouse', price: 29.99 },
//   { id: 'p3', name: 'Keyboard', price: 79.99 }
// ]);
//
// console.log(`Buscar por ID (O(1)): ${catalog.getById('p1').name}`);
// console.log(`Buscar inexistente: ${catalog.getById('p99')}`);

console.log('');

// ============================================
// PASO 6: Map en CartService (Práctico)
// ============================================
console.log('--- Paso 6: CartService ---');

// El carrito usa Map con productId como key
// Descomenta las siguientes líneas:

// class CartService {
//   #items = new Map(); // productId -> { product, quantity }
//
//   addItem(product, quantity = 1) {
//     if (this.#items.has(product.id)) {
//       // Si existe, aumentar cantidad
//       const item = this.#items.get(product.id);
//       item.quantity += quantity;
//     } else {
//       // Si no existe, crear nuevo
//       this.#items.set(product.id, { product, quantity });
//     }
//   }
//
//   updateQuantity(productId, quantity) {
//     if (this.#items.has(productId)) {
//       this.#items.get(productId).quantity = quantity;
//     }
//   }
//
//   getItems() {
//     return [...this.#items.values()];
//   }
//
//   get total() {
//     let sum = 0;
//     this.#items.forEach(({ product, quantity }) => {
//       sum += product.price * quantity;
//     });
//     return sum;
//   }
//
//   get itemCount() {
//     return this.#items.size;
//   }
// }
//
// const cart = new CartService();
//
// // Agregar productos
// cart.addItem({ id: 'p1', name: 'Laptop', price: 999.99 }, 2);
// cart.addItem({ id: 'p2', name: 'Mouse', price: 29.99 }, 1);
//
// console.log(`Carrito inicial: ${cart.itemCount} items`);
// cart.getItems().forEach(({ product, quantity }) => {
//   const subtotal = product.price * quantity;
//   console.log(`${product.name} x${quantity} = $${subtotal.toFixed(2)}`);
// });
// console.log(`Total: $${cart.total.toFixed(2)}`);
//
// // Actualizar cantidad
// console.log('');
// console.log('Actualizar cantidad Laptop a 3:');
// cart.updateQuantity('p1', 3);
// cart.getItems().forEach(({ product, quantity }) => {
//   const subtotal = product.price * quantity;
//   console.log(`${product.name} x${quantity} = $${subtotal.toFixed(2)}`);
// });
// console.log(`Total: $${cart.total.toFixed(2)}`);

console.log('');
console.log('✅ ¡Ejercicio completado!');
