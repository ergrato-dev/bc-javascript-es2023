/**
 * 📘 Lab 02: Traps avanzados
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Validación con set
// ============================================
console.log('--- Paso 1: Validación con set ---');

// Usar el trap set para validar datos antes de asignarlos
// Descomenta las siguientes líneas:

// const createValidatedUser = () => {
//   return new Proxy({}, {
//     set(target, prop, value) {
//       // Validar nombre
//       if (prop === 'name') {
//         if (typeof value !== 'string' || value.length < 2) {
//           throw new TypeError('name must be a string with at least 2 chars');
//         }
//       }

//       // Validar edad
//       if (prop === 'age') {
//         if (typeof value !== 'number') {
//           throw new TypeError('age must be a number');
//         }
//         if (value < 0 || value > 150) {
//           throw new RangeError('age must be between 0 and 150');
//         }
//       }

//       target[prop] = value;
//       return true;
//     }
//   });
// };

// const user = createValidatedUser();
// user.name = 'Alice';
// user.age = 25;
// console.log('User created:', user.name + ',', user.age);

// user.age = 26;
// console.log('Age updated:', user.age);

// try {
//   user.age = 'twenty-five';
// } catch (error) {
//   console.log('Validation error caught:', error.message);
// }

console.log('');

// ============================================
// PASO 2: Propiedades Privadas con get
// ============================================
console.log('--- Paso 2: Propiedades Privadas ---');

// Ocultar propiedades que empiezan con _
// Descomenta las siguientes líneas:

// const userData = {
//   name: 'Alice',
//   email: 'alice@test.com',
//   _password: 'secret123',
//   _token: 'abc-xyz'
// };

// const safeUser = new Proxy(userData, {
//   get(target, prop) {
//     if (typeof prop === 'string' && prop.startsWith('_')) {
//       throw new Error(`Access denied: ${prop} is private`);
//     }
//     return target[prop];
//   }
// });

// console.log('Name:', safeUser.name);
// console.log('Email:', safeUser.email);

// try {
//   console.log('Password:', safeUser._password);
// } catch (error) {
//   console.log('Private access blocked!');
// }

console.log('');

// ============================================
// PASO 3: Operador in con has
// ============================================
console.log('--- Paso 3: Operador in (has) ---');

// Personalizar el operador 'in' para ocultar propiedades
// Descomenta las siguientes líneas:

// const userWithSecrets = {
//   name: 'Alice',
//   email: 'alice@test.com',
//   _password: 'secret123'
// };

// const hiddenUser = new Proxy(userWithSecrets, {
//   has(target, prop) {
//     // Ocultar propiedades que empiezan con _
//     if (typeof prop === 'string' && prop.startsWith('_')) {
//       return false;
//     }
//     return prop in target;
//   }
// });

// console.log("'name' in user:", 'name' in hiddenUser);
// console.log("'_password' in user:", '_password' in hiddenUser, '(hidden)');
// console.log("'email' in user:", 'email' in hiddenUser);

console.log('');

// ============================================
// PASO 4: Proteger deleteProperty
// ============================================
console.log('--- Paso 4: Proteger deleteProperty ---');

// Prevenir eliminación de propiedades protegidas
// Descomenta las siguientes líneas:

// const protectedProps = ['id', 'createdAt'];

// const record = {
//   id: 'rec-001',
//   name: 'Important Record',
//   temporary: 'can delete this',
//   createdAt: new Date()
// };

// const protectedRecord = new Proxy(record, {
//   deleteProperty(target, prop) {
//     if (protectedProps.includes(prop)) {
//       console.log('Cannot delete protected:', prop);
//       return false;
//     }
//     return delete target[prop];
//   }
// });

// // Esto funciona
// const deleted = delete protectedRecord.temporary;
// console.log("Deleted 'temporary':", deleted);

// // Esto no funciona
// const deletedId = delete protectedRecord.id;
// console.log("Delete 'id' result:", deletedId);

// console.log('Remaining:', Object.keys(protectedRecord).join(', '));

console.log('');

// ============================================
// PASO 5: Filtrar ownKeys
// ============================================
console.log('--- Paso 5: Filtrar ownKeys ---');

// Controlar qué propiedades aparecen en Object.keys()
// Descomenta las siguientes líneas:

// const userComplete = {
//   name: 'Alice',
//   email: 'alice@test.com',
//   _password: 'secret',
//   _token: 'xyz'
// };

// const filteredUser = new Proxy(userComplete, {
//   ownKeys(target) {
//     // Solo retornar propiedades públicas
//     return Object.keys(target).filter(key => !key.startsWith('_'));
//   }
// });

// console.log('All keys (internal):', Object.keys(userComplete).join(', '));
// console.log('Visible keys:', Object.keys(filteredUser).join(', '));

console.log('');

// ============================================
// PASO 6: Logging Completo
// ============================================
console.log('--- Paso 6: Logging Completo ---');

// Combinar múltiples traps para logging completo
// Descomenta las siguientes líneas:

// const createLogger = (obj, name = 'Object') => {
//   return new Proxy(obj, {
//     get(target, prop) {
//       const value = target[prop];
//       console.log(`[GET] ${prop} → ${JSON.stringify(value)}`);
//       return value;
//     },

//     set(target, prop, value) {
//       const oldValue = target[prop];
//       console.log(`[SET] ${prop}: ${JSON.stringify(oldValue)} → ${JSON.stringify(value)}`);
//       target[prop] = value;
//       return true;
//     },

//     deleteProperty(target, prop) {
//       console.log(`[DELETE] ${prop}`);
//       return delete target[prop];
//     }
//   });
// };

// const logged = createLogger({ name: 'Alice' });
// logged.name;           // GET
// logged.score = 100;    // SET
// logged.score = 150;    // SET
// delete logged.score;   // DELETE

// console.log('Final state:', JSON.stringify(logged));

console.log('');

// ============================================
// PASO 7: Notificación de Cambios
// ============================================
console.log('--- Paso 7: Notificación de Cambios ---');

// Implementar patrón observer básico con set
// Descomenta las siguientes líneas:

// const createObservable = (initialState) => {
//   const listeners = [];

//   const proxy = new Proxy(initialState, {
//     set(target, prop, value) {
//       const oldValue = target[prop];

//       // Solo notificar si el valor cambió
//       if (oldValue !== value) {
//         target[prop] = value;

//         // Notificar a todos los listeners
//         listeners.forEach(fn => fn(prop, value, oldValue));
//       }

//       return true;
//     }
//   });

//   // Método para suscribirse
//   proxy.subscribe = (fn) => {
//     listeners.push(fn);
//     // Retornar función para desuscribirse
//     return () => {
//       const index = listeners.indexOf(fn);
//       if (index > -1) listeners.splice(index, 1);
//     };
//   };

//   return proxy;
// };

// const state = createObservable({
//   status: 'offline',
//   users: 0
// });

// // Suscribirse a cambios
// const unsubscribe = state.subscribe((prop, newVal, oldVal) => {
//   console.log(`[Observer] ${prop}: ${oldVal} → ${newVal}`);
// });

// state.status = 'online';
// state.users = 5;

// console.log('Status changed to:', state.status);
// console.log('Users count:', state.users);

console.log('');

console.log('✅ Lab completado.');
