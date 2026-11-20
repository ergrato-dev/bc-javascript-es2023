/**
 * 📘 Lab 04: reduce() - El Método Más Poderoso
 *
 * Este es un lab guiado. Descomenta el código en cada paso
 * para dominar el método reduce().
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// DATOS DE PRUEBA (no modificar)
// ============================================

const numbers = [1, 2, 3, 4, 5];

const products = [
  { name: 'Laptop', price: 999, quantity: 2, category: 'electronics' },
  { name: 'Mouse', price: 25, quantity: 5, category: 'electronics' },
  { name: 'Desk', price: 200, quantity: 1, category: 'furniture' },
  { name: 'Chair', price: 150, quantity: 3, category: 'furniture' },
  { name: 'Monitor', price: 300, quantity: 2, category: 'electronics' },
];

const orders = [
  { id: 1, customer: 'Ana', items: ['laptop', 'mouse'], total: 1024 },
  { id: 2, customer: 'Bob', items: ['chair'], total: 150 },
  { id: 3, customer: 'Ana', items: ['desk', 'chair'], total: 350 },
  { id: 4, customer: 'Carlos', items: ['monitor', 'mouse'], total: 325 },
];

const words = ['Hola', 'mundo', 'JavaScript', 'es', 'genial'];

// ============================================
// PASO 1: reduce() - Sintaxis Básica
// ============================================
console.log('--- Paso 1: Sintaxis Básica ---');

// reduce((accumulator, currentValue) => newAccumulator, initialValue)
// - accumulator: valor acumulado (resultado parcial)
// - currentValue: elemento actual del array
// - initialValue: valor inicial del acumulador
// Descomenta las siguientes líneas:

// const sum = numbers.reduce((acc, num) => {
//   console.log(`acc: ${acc}, num: ${num}, resultado: ${acc + num}`);
//   return acc + num;
// }, 0);
// console.log('Suma total:', sum);

console.log('');

// ============================================
// PASO 2: Suma y Multiplicación
// ============================================
console.log('--- Paso 2: Operaciones Numéricas ---');

// Descomenta las siguientes líneas:

// // Suma (forma compacta)
// const total = numbers.reduce((acc, n) => acc + n, 0);
// console.log('Suma:', total);
//
// // Multiplicación (producto)
// const product = numbers.reduce((acc, n) => acc * n, 1);
// console.log('Producto:', product);
//
// // Encontrar máximo
// const max = numbers.reduce((acc, n) => (n > acc ? n : acc), numbers[0]);
// console.log('Máximo:', max);
//
// // Encontrar mínimo
// const min = numbers.reduce((acc, n) => (n < acc ? n : acc), numbers[0]);
// console.log('Mínimo:', min);

console.log('');

// ============================================
// PASO 3: reduce() con Objetos
// ============================================
console.log('--- Paso 3: Sumar Propiedades ---');

// Sumar propiedades numéricas de objetos
// Descomenta las siguientes líneas:

// // Total de precios
// const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
// console.log('Total precios:', totalPrice);
//
// // Total de unidades
// const totalQuantity = products.reduce((acc, p) => acc + p.quantity, 0);
// console.log('Total unidades:', totalQuantity);
//
// // Valor del inventario (precio * cantidad)
// const inventoryValue = products.reduce(
//   (acc, p) => acc + p.price * p.quantity,
//   0
// );
// console.log('Valor inventario: $' + inventoryValue);

console.log('');

// ============================================
// PASO 4: Construir Objetos con reduce()
// ============================================
console.log('--- Paso 4: Construir Objetos ---');

// reduce() puede crear objetos desde arrays
// Descomenta las siguientes líneas:

// // Crear un diccionario por nombre
// const productsByName = products.reduce((acc, p) => {
//   acc[p.name] = p.price;
//   return acc;
// }, {});
// console.log('Productos por nombre:', productsByName);
//
// // Agrupar por categoría
// const byCategory = products.reduce((acc, p) => {
//   if (!acc[p.category]) {
//     acc[p.category] = [];
//   }
//   acc[p.category].push(p.name);
//   return acc;
// }, {});
// console.log('Por categoría:', byCategory);

console.log('');

// ============================================
// PASO 5: Contar Ocurrencias
// ============================================
console.log('--- Paso 5: Contar Ocurrencias ---');

// Contar cuántas veces aparece cada elemento
// Descomenta las siguientes líneas:

// const letters = ['a', 'b', 'a', 'c', 'b', 'a', 'd', 'b'];
// const count = letters.reduce((acc, letter) => {
//   acc[letter] = (acc[letter] || 0) + 1;
//   return acc;
// }, {});
// console.log('Conteo de letras:', count);
//
// // Contar órdenes por cliente
// const ordersByCustomer = orders.reduce((acc, order) => {
//   acc[order.customer] = (acc[order.customer] || 0) + 1;
//   return acc;
// }, {});
// console.log('Órdenes por cliente:', ordersByCustomer);
//
// // Total gastado por cliente
// const spendingByCustomer = orders.reduce((acc, order) => {
//   acc[order.customer] = (acc[order.customer] || 0) + order.total;
//   return acc;
// }, {});
// console.log('Gasto por cliente:', spendingByCustomer);

console.log('');

// ============================================
// PASO 6: Aplanar Arrays (Flatten)
// ============================================
console.log('--- Paso 6: Aplanar Arrays ---');

// Convertir array de arrays en array plano
// Descomenta las siguientes líneas:

// const nested = [[1, 2], [3, 4], [5, 6]];
// const flat = nested.reduce((acc, arr) => [...acc, ...arr], []);
// console.log('Nested:', nested);
// console.log('Flat:', flat);
//
// // Todos los items de todas las órdenes
// const allItems = orders.reduce((acc, order) => [...acc, ...order.items], []);
// console.log('Todos los items:', allItems);
//
// // Nota: También puedes usar flat() (ES2019)
// const flatModern = nested.flat();
// console.log('Con flat():', flatModern);

console.log('');

// ============================================
// PASO 7: reduce() como map() y filter()
// ============================================
console.log('--- Paso 7: reduce() Reemplaza Todo ---');

// reduce() es tan poderoso que puede hacer lo que map() y filter()
// Descomenta las siguientes líneas:

// // reduce() como map()
// const doubled = numbers.reduce((acc, n) => [...acc, n * 2], []);
// console.log('Como map (x2):', doubled);
//
// // reduce() como filter()
// const evens = numbers.reduce((acc, n) => {
//   if (n % 2 === 0) acc.push(n);
//   return acc;
// }, []);
// console.log('Como filter (pares):', evens);
//
// // reduce() como map + filter en una pasada
// const expensiveNames = products.reduce((acc, p) => {
//   if (p.price > 100) {
//     acc.push(p.name.toUpperCase());
//   }
//   return acc;
// }, []);
// console.log('Caros (map+filter):', expensiveNames);

console.log('');

// ============================================
// PASO 8: Concatenar Strings
// ============================================
console.log('--- Paso 8: Concatenar Strings ---');

// Construir un string desde un array
// Descomenta las siguientes líneas:

// const sentence = words.reduce((acc, word) => acc + ' ' + word);
// console.log('Oración:', sentence.trim());
//
// // Con join() es más simple (pero reduce es más flexible)
// const withJoin = words.join(' ');
// console.log('Con join:', withJoin);
//
// // Crear lista HTML
// const productNames = products.map(p => p.name);
// const htmlList = productNames.reduce(
//   (acc, name) => acc + `<li>${name}</li>`,
//   '<ul>'
// ) + '</ul>';
// console.log('Lista HTML:', htmlList);

console.log('');

// ============================================
// PASO 9: Caso Práctico - Carrito de Compras
// ============================================
console.log('--- Paso 9: Carrito de Compras ---');

// Simulación de carrito con reduce()
// Descomenta las siguientes líneas:

// const cart = [
//   { name: 'Laptop', price: 999, quantity: 1 },
//   { name: 'Mouse', price: 25, quantity: 2 },
//   { name: 'Keyboard', price: 75, quantity: 1 },
// ];
//
// const cartSummary = cart.reduce(
//   (acc, item) => {
//     const itemTotal = item.price * item.quantity;
//     return {
//       items: acc.items + item.quantity,
//       subtotal: acc.subtotal + itemTotal,
//       products: [...acc.products, `${item.name} x${item.quantity}`]
//     };
//   },
//   { items: 0, subtotal: 0, products: [] }
// );
//
// console.log('Resumen del carrito:');
// console.log('- Productos:', cartSummary.products);
// console.log('- Total items:', cartSummary.items);
// console.log('- Subtotal: $' + cartSummary.subtotal);
// console.log('- IVA (21%): $' + (cartSummary.subtotal * 0.21).toFixed(2));
// console.log('- Total: $' + (cartSummary.subtotal * 1.21).toFixed(2));

console.log('');

// ============================================
// ✅ LAB COMPLETADO
// ============================================
console.log('🎉 ¡Felicidades! Has dominado reduce().');
console.log('Este es el método más versátil de los arrays.');
console.log('Practica creando tus propias reducciones.');
