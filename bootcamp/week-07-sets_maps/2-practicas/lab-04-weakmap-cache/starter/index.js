/**
 * 📘 Lab 04: WeakMap, WeakSet y caché
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Map vs WeakMap
// ============================================
console.log('--- Paso 1: Map vs WeakMap ---');

// WeakMap solo acepta objetos como claves
// Descomenta las siguientes líneas:
// const weakMap = new WeakMap();

// Crear un objeto como clave
// const user = { id: 1, name: 'Alice' };
// weakMap.set(user, 'datos asociados');
// console.log('WeakMap creado con éxito');
// console.log('Valor obtenido:', weakMap.get(user));

// Intentar usar primitivo como clave (falla)
// try {
//   weakMap.set('string-key', 'value');
// } catch (error) {
//   console.log('Clave primitiva:', error.message);
// }

// Desde ES2023, un Symbol también vale como clave
// const sessionKey = Symbol('session');
// weakMap.set(sessionKey, 'datos de la sesión');
// console.log('Valor con clave Symbol:', weakMap.get(sessionKey));

// Pero no uno registrado con Symbol.for(): es global y nunca se libera
// try {
//   weakMap.set(Symbol.for('global'), 'value');
// } catch (error) {
//   console.log('Symbol.for():', error.message);
// }

console.log('');

// ============================================
// PASO 2: Limitaciones de WeakMap
// ============================================
console.log('--- Paso 2: Limitaciones de WeakMap ---');

// WeakMap no es iterable y tiene API limitada
// Descomenta las siguientes líneas:
// console.log('WeakMap no tiene: size, keys(), values(), entries(), clear()');
// console.log('Métodos disponibles: set, get, has, delete');

// Solo 4 métodos disponibles:
// const wm = new WeakMap();
// const key = {};
// wm.set(key, 'value');  // Agregar
// wm.get(key);           // Obtener
// wm.has(key);           // Verificar
// wm.delete(key);        // Eliminar

console.log('');

// ============================================
// PASO 3: Datos Privados con WeakMap
// ============================================
console.log('--- Paso 3: Datos Privados ---');

// Patrón para datos privados en clases
// Descomenta las siguientes líneas:
// const _private = new WeakMap();

// class BankAccount {
//   constructor(owner, initialBalance, pin) {
//     this.owner = owner;
//     // Guardar datos privados
//     _private.set(this, {
//       balance: initialBalance,
//       pin,
//       transactions: []
//     });
//   }
//
//   getBalance(pin) {
//     const data = _private.get(this);
//     if (pin !== data.pin) {
//       throw new Error('PIN inválido');
//     }
//     return data.balance;
//   }
//
//   deposit(amount) {
//     const data = _private.get(this);
//     data.balance += amount;
//     data.transactions.push({ type: 'deposit', amount, date: new Date() });
//   }
// }

// const account = new BankAccount('Alice', 1000, '1234');
// console.log('Cuenta creada para', account.owner);

// try {
//   console.log('Balance (con PIN correcto):', account.getBalance('1234'));
// } catch (e) {
//   console.log('Error:', e.message);
// }

// try {
//   console.log('Balance (PIN incorrecto):', account.getBalance('0000'));
// } catch (e) {
//   console.log('Balance (PIN incorrecto): Error -', e.message);
// }

// Los datos privados no son accesibles
// console.log('Propiedades públicas:', Object.keys(account).join(', '));
// console.log('¿balance es accesible directamente?', account.balance);

console.log('');

// ============================================
// PASO 4: Caché sin Memory Leak
// ============================================
console.log('--- Paso 4: Caché sin Memory Leak ---');

// WeakMap para cachear resultados de procesamiento
// Descomenta las siguientes líneas:
// const processedCache = new WeakMap();
// let cacheReads = 0;

// const processObject = obj => {
//   if (processedCache.has(obj)) {
//     cacheReads++;
//     return processedCache.get(obj);
//   }
//
//   // Simular procesamiento costoso
//   const result = {
//     ...obj,
//     processed: true
//   };
//
//   processedCache.set(obj, result);
//   return result;
// };

// const data = { id: 1 };

// console.log('Primera llamada:', processObject(data));
// console.log('Segunda llamada:', processObject(data));
// console.log('Lecturas del caché:', cacheReads);

// Cuando data = null, el caché se limpia automáticamente

console.log('');

// ============================================
// PASO 5: WeakSet para Marcar Objetos
// ============================================
console.log('--- Paso 5: WeakSet para Marcar Objetos ---');

// WeakSet para tracking de objetos visitados
// Descomenta las siguientes líneas:
// const visited = new WeakSet();

// const processNode = node => {
//   if (visited.has(node)) {
//     console.log(`${node.name} ya fue visitado (evitando ciclo)`);
//     return;
//   }
//
//   visited.add(node);
//   console.log(`Procesando: ${node.name}`);
//
//   if (node.next) {
//     processNode(node.next);
//   }
// };

// Crear estructura con ciclo
// const node1 = { name: 'node1' };
// const node2 = { name: 'node2' };
// const node3 = { name: 'node3' };

// node1.next = node2;
// node2.next = node3;
// node3.next = node1; // ¡Ciclo!

// processNode(node1);

console.log('');

// ============================================
// PASO 6: Caso Práctico - Sistema Completo
// ============================================
console.log('--- Paso 6: Sistema Completo ---');

// Sistema de tracking de usuarios con sesiones
// Descomenta las siguientes líneas:
// const userData = new WeakMap();
// const activeSessions = new WeakSet();

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.id = `user_${name.toLowerCase()}`;
//
//     userData.set(this, {
//       email,
//       createdAt: new Date(),
//       loginCount: 0
//     });
//   }
//
//   login() {
//     if (activeSessions.has(this)) {
//       throw new Error('Usuario ya tiene sesión activa');
//     }
//
//     activeSessions.add(this);
//     const data = userData.get(this);
//     data.loginCount++;
//     console.log(`Sesión iniciada para: ${this.name}`);
//   }
//
//   logout() {
//     if (!activeSessions.has(this)) {
//       throw new Error('Usuario no tiene sesión activa');
//     }
//
//     activeSessions.delete(this);
//     console.log(`Sesión cerrada para: ${this.name}`);
//   }
//
//   isLoggedIn() {
//     return activeSessions.has(this);
//   }
// }

// const alice = new User('Alice', 'alice@example.com');
// console.log('Usuario creado:', alice.id);

// alice.login();

// try {
//   console.log('Intentando iniciar otra sesión...');
//   alice.login();
// } catch (e) {
//   console.log('Error:', e.message);
// }

// alice.logout();
// alice.login();

console.log('');

console.log('✅ Lab completado.');
