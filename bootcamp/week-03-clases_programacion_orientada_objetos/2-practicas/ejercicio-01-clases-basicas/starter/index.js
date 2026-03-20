/**
 * 📘 Ejercicio 01: Clases Básicas
 *
 * Este es un ejercicio guiado. Descomenta el código en cada paso
 * para aprender a crear clases en JavaScript ES2023.
 *
 * Ejecuta: node index.js
 */

// ============================================
// PASO 1: Definir una Clase Básica
// ============================================
console.log('--- Paso 1: Clase Básica ---');

// Las clases se definen con la palabra clave class
// El constructor inicializa las propiedades
// Descomenta las siguientes líneas:

// class Product {
//   constructor(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;
//     this.stock = 0;
//   }
// }
//
// const laptop = new Product('MacBook Pro', 1999, 'Electronics');
// console.log('Producto:', laptop);
// console.log('Nombre:', laptop.name);
// console.log('Precio:', laptop.price);

console.log('');

// ============================================
// PASO 2: Agregar Métodos de Instancia
// ============================================
console.log('--- Paso 2: Métodos de Instancia ---');

// Los métodos se definen dentro de la clase sin "function"
// this hace referencia a la instancia actual
// Descomenta las siguientes líneas:

// class Product {
//   constructor(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;
//     this.stock = 0;
//   }
//
//   // Método para obtener información
//   getInfo() {
//     return `${this.name} - $${this.price} (${this.category})`;
//   }
//
//   // Método para verificar disponibilidad
//   isAvailable() {
//     return this.stock > 0;
//   }
//
//   // Método para actualizar stock
//   updateStock(quantity) {
//     this.stock += quantity;
//     return this.stock;
//   }
// }
//
// const phone = new Product('iPhone 15', 999, 'Electronics');
// console.log('Info:', phone.getInfo());
// console.log('Disponible:', phone.isAvailable());
// phone.updateStock(10);
// console.log('Después de agregar stock:', phone.isAvailable());
// console.log('Stock actual:', phone.stock);

console.log('');

// ============================================
// PASO 3: Métodos que Modifican Estado
// ============================================
console.log('--- Paso 3: Métodos que Modifican Estado ---');

// Los métodos pueden modificar las propiedades de la instancia
// Es buena práctica retornar this para encadenar métodos
// Descomenta las siguientes líneas:

// class Product {
//   constructor(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;
//     this.stock = 0;
//   }
//
//   getInfo() {
//     return `${this.name} - $${this.price} (${this.category})`;
//   }
//
//   isAvailable() {
//     return this.stock > 0;
//   }
//
//   updateStock(quantity) {
//     this.stock += quantity;
//     return this; // Retorna this para encadenar
//   }
//
//   applyDiscount(percentage) {
//     if (percentage < 0 || percentage > 100) {
//       throw new Error('Porcentaje inválido');
//     }
//     this.price = this.price * (1 - percentage / 100);
//     return this;
//   }
// }
//
// const tablet = new Product('iPad Pro', 1099, 'Electronics');
// tablet.updateStock(5).applyDiscount(10); // Encadenamiento
// console.log('Tablet con descuento:', tablet.getInfo());
// console.log('Stock:', tablet.stock);

console.log('');

// ============================================
// PASO 4: Clase ShoppingCart (Composición)
// ============================================
console.log('--- Paso 4: Clase ShoppingCart ---');

// Una clase puede contener instancias de otras clases
// Esto se llama composición
// Descomenta las siguientes líneas:

// class ShoppingCart {
//   constructor() {
//     this.items = [];
//   }
//
//   addItem(product, quantity = 1) {
//     const existing = this.items.find(item => item.product.name === product.name);
//     if (existing) {
//       existing.quantity += quantity;
//     } else {
//       this.items.push({ product, quantity });
//     }
//     return this;
//   }
//
//   removeItem(productName) {
//     this.items = this.items.filter(item => item.product.name !== productName);
//     return this;
//   }
//
//   getTotal() {
//     return this.items.reduce((sum, item) => {
//       return sum + item.product.price * item.quantity;
//     }, 0);
//   }
//
//   getItemCount() {
//     return this.items.reduce((sum, item) => sum + item.quantity, 0);
//   }
// }
//
// // Necesitamos la clase Product del paso anterior
// class Product {
//   constructor(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;
//   }
// }
//
// const cart = new ShoppingCart();
// const p1 = new Product('Laptop', 999, 'Tech');
// const p2 = new Product('Mouse', 29, 'Tech');
//
// cart.addItem(p1, 1).addItem(p2, 2);
// console.log('Items en carrito:', cart.getItemCount());
// console.log('Total:', cart.getTotal());

console.log('');

// ============================================
// PASO 5: Métodos de Resumen
// ============================================
console.log('--- Paso 5: Métodos de Resumen ---');

// Los métodos pueden generar reportes o resúmenes
// Descomenta las siguientes líneas:

// class ShoppingCart {
//   constructor() {
//     this.items = [];
//   }
//
//   addItem(product, quantity = 1) {
//     const existing = this.items.find(item => item.product.name === product.name);
//     if (existing) {
//       existing.quantity += quantity;
//     } else {
//       this.items.push({ product, quantity });
//     }
//     return this;
//   }
//
//   getTotal() {
//     return this.items.reduce((sum, item) => {
//       return sum + item.product.price * item.quantity;
//     }, 0);
//   }
//
//   clear() {
//     this.items = [];
//     return this;
//   }
//
//   getSummary() {
//     const lines = this.items.map(item => {
//       const subtotal = item.product.price * item.quantity;
//       return `${item.product.name} x${item.quantity} = $${subtotal}`;
//     });
//     lines.push(`---`);
//     lines.push(`TOTAL: $${this.getTotal()}`);
//     return lines.join('\n');
//   }
// }
//
// class Product {
//   constructor(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;
//   }
// }
//
// const myCart = new ShoppingCart();
// myCart.addItem(new Product('Keyboard', 79, 'Tech'), 1);
// myCart.addItem(new Product('Monitor', 299, 'Tech'), 2);
// myCart.addItem(new Product('Webcam', 89, 'Tech'), 1);
// console.log(myCart.getSummary());

console.log('');

// ============================================
// PASO 6: Clase Customer (Uso de otras clases)
// ============================================
console.log('--- Paso 6: Clase Customer ---');

// Una clase puede crear y usar instancias de otras clases
// Descomenta las siguientes líneas:

// class Customer {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     this.cart = new ShoppingCart();
//     this.orders = [];
//   }
//
//   addToCart(product, quantity = 1) {
//     this.cart.addItem(product, quantity);
//     return this;
//   }
//
//   checkout() {
//     if (this.cart.items.length === 0) {
//       return null;
//     }
//     const order = {
//       id: Date.now(),
//       items: [...this.cart.items],
//       total: this.cart.getTotal(),
//       date: new Date().toISOString()
//     };
//     this.orders.push(order);
//     this.cart.clear();
//     return order;
//   }
//
//   getProfile() {
//     return {
//       name: this.name,
//       email: this.email,
//       cartItems: this.cart.items.length,
//       totalOrders: this.orders.length
//     };
//   }
// }
//
// // Definiciones necesarias
// class Product {
//   constructor(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;
//   }
// }
//
// class ShoppingCart {
//   constructor() { this.items = []; }
//   addItem(product, quantity = 1) {
//     this.items.push({ product, quantity });
//     return this;
//   }
//   getTotal() {
//     return this.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
//   }
//   clear() { this.items = []; }
// }
//
// const customer = new Customer('María López', 'maria@email.com');
// customer.addToCart(new Product('Laptop', 1299, 'Tech'));
// customer.addToCart(new Product('Case', 49, 'Accessories'), 2);
//
// console.log('Perfil antes de checkout:', customer.getProfile());
// const order = customer.checkout();
// console.log('Orden creada:', order);
// console.log('Perfil después:', customer.getProfile());

console.log('');

// ============================================
// ✅ EJERCICIO COMPLETADO
// ============================================
console.log('🎉 ¡Excelente! Has completado el ejercicio de clases básicas.');
console.log('Revisa cada paso y experimenta modificando los valores.');
