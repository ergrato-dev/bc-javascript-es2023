/**
 * 📘 Lab 02: Patrón observer
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Set para Almacenar Listeners
// ============================================
console.log('--- Paso 1: Set para Listeners ---');

// Set es ideal para listeners porque:
// - No permite duplicados
// - Tiene add(), delete(), forEach()
// - O(1) para operaciones básicas
// Descomenta las siguientes líneas:

// class EventEmitter {
//   #listeners = new Set();
//
//   subscribe(callback) {
//     this.#listeners.add(callback);
//   }
//
//   get listenerCount() {
//     return this.#listeners.size;
//   }
// }
//
// const emitter = new EventEmitter();
//
// const listenerA = () => console.log('A ejecutado');
// const listenerB = () => console.log('B ejecutado');
//
// emitter.subscribe(listenerA);
// console.log('Listener A suscrito');
// emitter.subscribe(listenerB);
// console.log('Listener B suscrito');
// console.log(`Total listeners: ${emitter.listenerCount}`);
//
// // Set ignora duplicados
// emitter.subscribe(listenerA); // No añade duplicado
// console.log(`Después de duplicado: ${emitter.listenerCount}`);

console.log('');

// ============================================
// PASO 2: Método Notify
// ============================================
console.log('--- Paso 2: Notify ---');

// notify() itera sobre todos los listeners
// y les pasa los datos actuales
// Descomenta las siguientes líneas:

// class Observable {
//   #listeners = new Set();
//
//   subscribe(callback) {
//     this.#listeners.add(callback);
//   }
//
//   notify(data) {
//     this.#listeners.forEach(callback => {
//       callback(data);
//     });
//   }
// }
//
// const subject = new Observable();
//
// // Suscribir dos observers
// subject.subscribe(msg => console.log(`Observer 1 recibió: ${msg}`));
// subject.subscribe(msg => console.log(`Observer 2 recibió: ${msg}`));
//
// // Notificar a todos
// subject.notify('Primer mensaje');
// subject.notify('Segundo mensaje');

console.log('');

// ============================================
// PASO 3: Unsubscribe (Cancelar Suscripción)
// ============================================
console.log('--- Paso 3: Unsubscribe ---');

// subscribe() retorna una función para cancelar
// Es el patrón estándar en JavaScript
// Descomenta las siguientes líneas:

// class Store {
//   #listeners = new Set();
//   #state = { count: 0 };
//
//   subscribe(callback) {
//     this.#listeners.add(callback);
//
//     // Retorna función para desuscribirse
//     return () => {
//       this.#listeners.delete(callback);
//     };
//   }
//
//   notify(data) {
//     this.#listeners.forEach(cb => cb(data));
//   }
//
//   get listenerCount() {
//     return this.#listeners.size;
//   }
// }
//
// const store = new Store();
//
// const observer1 = msg => console.log(`Observer 1: ${msg}`);
// const observer2 = msg => console.log(`Observer 2: ${msg}`);
//
// // Guardar la función de unsubscribe
// const unsubscribe1 = store.subscribe(observer1);
// const unsubscribe2 = store.subscribe(observer2);
//
// console.log(`Antes de unsubscribe: ${store.listenerCount} listeners`);
// store.notify('Mensaje de prueba');
//
// // Cancelar suscripción del observer 1
// unsubscribe1();
// console.log(`Después de unsubscribe Observer 1: ${store.listenerCount} listener`);
// store.notify('Otro mensaje');
// // Solo Observer 2 recibe el mensaje

console.log('');

// ============================================
// PASO 4: Observer en CartService (Práctico)
// ============================================
console.log('--- Paso 4: CartService con Observer ---');

// Aplicamos el patrón a un caso real:
// múltiples componentes observan el carrito
// Descomenta las siguientes líneas:

// class CartService {
//   #items = [];
//   #listeners = new Set();
//
//   subscribe(callback) {
//     this.#listeners.add(callback);
//     // Notificar estado inicial
//     callback(this.getState());
//     return () => this.#listeners.delete(callback);
//   }
//
//   #notify() {
//     const state = this.getState();
//     this.#listeners.forEach(cb => cb(state));
//   }
//
//   getState() {
//     return {
//       items: [...this.#items],
//       itemCount: this.#items.length,
//       total: this.#items.reduce((sum, item) => sum + item.price, 0)
//     };
//   }
//
//   addItem(item) {
//     this.#items.push(item);
//     this.#notify();
//   }
//
//   removeItem(id) {
//     this.#items = this.#items.filter(item => item.id !== id);
//     this.#notify();
//   }
// }
//
// const cart = new CartService();
//
// // Observer 1: CartView (renderiza la UI)
// const cartViewObserver = state => {
//   console.log(`[CartView] Renderizando ${state.itemCount} items, total: $${state.total.toFixed(2)}`);
// };
//
// // Observer 2: Badge (muestra contador)
// const badgeObserver = state => {
//   console.log(`[Badge] Actualizando contador: ${state.itemCount}`);
// };
//
// // Observer 3: Logger (analytics)
// const loggerObserver = state => {
//   console.log(`[Logger] Cart updated: ${state.itemCount} items`);
// };
//
// // Suscribir observers (reciben estado inicial)
// cart.subscribe(cartViewObserver);
// cart.subscribe(badgeObserver);
// cart.subscribe(loggerObserver);
//
// console.log(''); // Separador
//
// // Agregar productos - todos los observers se actualizan
// cart.addItem({ id: 1, name: 'Laptop', price: 999.99 });
// console.log('');
// cart.addItem({ id: 2, name: 'Mouse', price: 49.99 });

console.log('');
console.log('✅ Lab completado.');
