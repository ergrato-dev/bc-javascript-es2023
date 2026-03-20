/**
 * 📘 Ejercicio 01: Clases y Encapsulación
 *
 * Este es un ejercicio guiado. Descomenta el código en cada paso
 * para aprender clases con campos privados en JavaScript ES2023.
 *
 * Ejecuta: node index.js
 */

// ============================================
// PASO 1: Clase Básica con Campos Privados
// ============================================
console.log('--- Paso 1: Clase con Campos Privados ---');

// Los campos privados se declaran con # y solo son
// accesibles dentro de la clase
// Descomenta las siguientes líneas:

// class Book {
//   #id;
//   #title;
//   #author;
//   #price;
//   #available;
//
//   constructor({ id, title, author, price, available = true }) {
//     this.#id = id;
//     this.#title = title;
//     this.#author = author;
//     this.#price = price;
//     this.#available = available;
//   }
//
//   // Getters para acceder a campos privados
//   get id() { return this.#id; }
//   get title() { return this.#title; }
//   get author() { return this.#author; }
//   get price() { return this.#price; }
//   get available() { return this.#available; }
// }
//
// const book = new Book({
//   id: '1',
//   title: 'Clean Code',
//   author: 'Robert C. Martin',
//   price: 45.99
// });
//
// console.log(`Libro: ${book.title} por ${book.author}`);
// console.log(`Precio: ${book.price}`);
// console.log(`Disponible: ${book.available}`);
// // Intenta: console.log(book.#title); // Error! Campo privado

console.log('');

// ============================================
// PASO 2: Getters Computados
// ============================================
console.log('--- Paso 2: Getters Computados ---');

// Los getters pueden retornar valores calculados
// que se usan como si fueran propiedades
// Descomenta las siguientes líneas:

// class Product {
//   #name;
//   #price;
//   #quantity;
//
//   constructor({ name, price, quantity }) {
//     this.#name = name;
//     this.#price = price;
//     this.#quantity = quantity;
//   }
//
//   get name() { return this.#name; }
//   get price() { return this.#price; }
//   get quantity() { return this.#quantity; }
//
//   // Getter computado - formatea el precio
//   get formattedPrice() {
//     return `$${this.#price.toFixed(2)}`;
//   }
//
//   // Getter computado - calcula el valor total
//   get totalValue() {
//     return this.#price * this.#quantity;
//   }
//
//   // Getter computado - estado del stock
//   get stockStatus() {
//     if (this.#quantity === 0) return 'Sin stock';
//     if (this.#quantity < 5) return 'Pocas unidades';
//     return 'Disponible';
//   }
// }
//
// const laptop = new Product({
//   name: 'MacBook Pro',
//   price: 1999.99,
//   quantity: 3
// });
//
// console.log(`Producto: ${laptop.name}`);
// console.log(`Precio: ${laptop.formattedPrice}`);
// console.log(`Valor total inventario: $${laptop.totalValue.toFixed(2)}`);
// console.log(`Estado: ${laptop.stockStatus}`);

console.log('');

// ============================================
// PASO 3: Métodos de Instancia
// ============================================
console.log('--- Paso 3: Métodos de Instancia ---');

// Los métodos pueden modificar el estado interno
// y realizar validaciones
// Descomenta las siguientes líneas:

// class Counter {
//   #value;
//   #min;
//   #max;
//
//   constructor({ initial = 0, min = 0, max = 100 } = {}) {
//     this.#value = initial;
//     this.#min = min;
//     this.#max = max;
//   }
//
//   get value() { return this.#value; }
//
//   increment() {
//     if (this.#value < this.#max) {
//       this.#value++;
//     }
//     return this; // Permite encadenamiento
//   }
//
//   decrement() {
//     if (this.#value > this.#min) {
//       this.#value--;
//     }
//     return this;
//   }
//
//   reset() {
//     this.#value = this.#min;
//     return this;
//   }
// }
//
// const counter = new Counter({ initial: 5, min: 0, max: 10 });
// console.log(`Valor inicial: ${counter.value}`);
//
// counter.increment().increment().increment();
// console.log(`Después de 3 incrementos: ${counter.value}`);
//
// counter.decrement();
// console.log(`Después de 1 decremento: ${counter.value}`);
//
// counter.reset();
// console.log(`Después de reset: ${counter.value}`);

console.log('');

// ============================================
// PASO 4: Método toJSON para Serialización
// ============================================
console.log('--- Paso 4: toJSON para Serialización ---');

// toJSON() permite controlar cómo se serializa
// el objeto con JSON.stringify()
// Descomenta las siguientes líneas:

// class User {
//   #id;
//   #name;
//   #email;
//   #password; // Nunca incluir en JSON!
//
//   constructor({ id, name, email, password }) {
//     this.#id = id;
//     this.#name = name;
//     this.#email = email;
//     this.#password = password;
//   }
//
//   get id() { return this.#id; }
//   get name() { return this.#name; }
//   get email() { return this.#email; }
//
//   // Controla qué se incluye en JSON
//   toJSON() {
//     return {
//       id: this.#id,
//       name: this.#name,
//       email: this.#email
//       // password NO se incluye por seguridad
//     };
//   }
// }
//
// const user = new User({
//   id: 'u1',
//   name: 'Ana García',
//   email: 'ana@example.com',
//   password: 'secret123'
// });
//
// const json = JSON.stringify(user, null, 2);
// console.log('Usuario serializado:');
// console.log(json);
// // Nota: password no aparece en el JSON

console.log('');

// ============================================
// PASO 5: Métodos Estáticos (Factory)
// ============================================
console.log('--- Paso 5: Métodos Estáticos ---');

// Los métodos estáticos se llaman en la clase,
// no en las instancias. Útiles para factory methods
// Descomenta las siguientes líneas:

// class Task {
//   #id;
//   #title;
//   #completed;
//   #createdAt;
//
//   constructor({ id, title, completed = false, createdAt }) {
//     this.#id = id;
//     this.#title = title;
//     this.#completed = completed;
//     this.#createdAt = createdAt;
//   }
//
//   get id() { return this.#id; }
//   get title() { return this.#title; }
//   get completed() { return this.#completed; }
//   get createdAt() { return this.#createdAt; }
//
//   toggle() {
//     this.#completed = !this.#completed;
//     return this;
//   }
//
//   toJSON() {
//     return {
//       id: this.#id,
//       title: this.#title,
//       completed: this.#completed,
//       createdAt: this.#createdAt.toISOString()
//     };
//   }
//
//   // Factory method - crea con valores por defecto
//   static create(title) {
//     return new Task({
//       id: crypto.randomUUID(),
//       title,
//       completed: false,
//       createdAt: new Date()
//     });
//   }
//
//   // Factory method - recrea desde JSON
//   static fromJSON(json) {
//     const data = typeof json === 'string' ? JSON.parse(json) : json;
//     return new Task({
//       ...data,
//       createdAt: new Date(data.createdAt)
//     });
//   }
// }
//
// // Crear nueva tarea con factory
// const task1 = Task.create('Aprender clases ES2023');
// console.log(`Nueva tarea: ${task1.title}`);
// console.log(`ID generado: ${task1.id}`);
//
// // Serializar y restaurar
// const saved = JSON.stringify(task1);
// const restored = Task.fromJSON(saved);
// console.log(`Tarea restaurada: ${restored.title}`);
// console.log(`Completada: ${restored.completed}`);

console.log('');

// ============================================
// PASO 6: Clase Completa - Integrando Todo
// ============================================
console.log('--- Paso 6: Clase Completa ---');

// Combinamos todos los conceptos en una clase
// que podría usarse en un proyecto real
// Descomenta las siguientes líneas:

// class CartItem {
//   #product;
//   #quantity;
//
//   constructor({ product, quantity = 1 }) {
//     this.#product = product;
//     this.#quantity = quantity;
//   }
//
//   get product() { return this.#product; }
//   get quantity() { return this.#quantity; }
//
//   // Getter computado
//   get subtotal() {
//     return this.#product.price * this.#quantity;
//   }
//
//   get formattedSubtotal() {
//     return `$${this.subtotal.toFixed(2)}`;
//   }
//
//   // Métodos de instancia
//   increaseQuantity(amount = 1) {
//     this.#quantity += amount;
//     return this;
//   }
//
//   decreaseQuantity(amount = 1) {
//     this.#quantity = Math.max(1, this.#quantity - amount);
//     return this;
//   }
//
//   // Serialización
//   toJSON() {
//     return {
//       productId: this.#product.id,
//       quantity: this.#quantity
//     };
//   }
//
//   // Factory estático
//   static create(product) {
//     return new CartItem({ product, quantity: 1 });
//   }
// }
//
// // Simular un producto
// const product = { id: 'p1', name: 'Laptop', price: 999.99 };
//
// // Crear item del carrito
// const item = CartItem.create(product);
// console.log(`Producto: ${item.product.name}`);
// console.log(`Cantidad: ${item.quantity}`);
// console.log(`Subtotal: ${item.formattedSubtotal}`);
//
// // Modificar cantidad
// item.increaseQuantity(2);
// console.log(`Después de +2: cantidad=${item.quantity}, subtotal=${item.formattedSubtotal}`);
//
// // Serializar
// console.log('JSON:', JSON.stringify(item));

console.log('');
console.log('✅ ¡Ejercicio completado!');
