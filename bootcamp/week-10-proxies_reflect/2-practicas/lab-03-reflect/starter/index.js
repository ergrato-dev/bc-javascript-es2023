/**
 * 📘 Lab 03: La API Reflect
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Reflect.get vs Acceso Directo
// ============================================
console.log('--- Paso 1: Reflect.get vs Acceso Directo ---');

// Reflect.get() es equivalente funcional a obj[prop]
// Descomenta las siguientes líneas:

// const user = { name: 'Alice', age: 30 };

// // Acceso directo
// const directAccess = user.name;

// // Con Reflect
// const reflectAccess = Reflect.get(user, 'name');

// console.log('Direct access:', directAccess);
// console.log('Reflect.get:', reflectAccess);
// console.log('Both are equal:', directAccess === reflectAccess);

console.log('');

// ============================================
// PASO 2: Reflect.set Retorno Boolean
// ============================================
console.log('--- Paso 2: Reflect.set Retorno Boolean ---');

// Reflect.set retorna boolean en lugar de lanzar error
// Descomenta las siguientes líneas:

// const normalObj = { value: 10 };
// const frozenObj = Object.freeze({ value: 42 });

// // En objeto normal - retorna true
// const success1 = Reflect.set(normalObj, 'value', 20);
// console.log('Set on normal object:', success1);

// // En objeto congelado - retorna false (no lanza error)
// const success2 = Reflect.set(frozenObj, 'value', 100);
// console.log('Set on frozen object:', success2);
// console.log('Frozen value unchanged:', frozenObj.value);

console.log('');

// ============================================
// PASO 3: El Parámetro receiver
// ============================================
console.log('--- Paso 3: El Parámetro receiver ---');

// El receiver determina el valor de 'this' en getters
// Descomenta las siguientes líneas:

// const parent = {
//   multiplier: undefined,
//   get value() {
//     return this.multiplier * 10;
//   }
// };

// const child = {
//   multiplier: 5
// };

// // Sin receiver: this es parent (multiplier = undefined)
// const withoutReceiver = Reflect.get(parent, 'value');
// console.log('Sin receiver (this=parent):', withoutReceiver);

// // Con receiver: this es child (multiplier = 5)
// const withReceiver = Reflect.get(parent, 'value', child);
// console.log('Con receiver (this=child):', withReceiver);

// console.log('Getter usa this.multiplier del receiver');

console.log('');

// ============================================
// PASO 4: Reflect en Traps
// ============================================
console.log('--- Paso 4: Reflect en Traps ---');

// Usar Reflect dentro de handlers para comportamiento correcto
// Descomenta las siguientes líneas:

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// const proxy = new Proxy(person, {
//   get(target, prop, receiver) {
//     console.log(`[Proxy GET] ${prop}`);
//     // Usar Reflect.get con receiver para que this funcione en getters
//     return Reflect.get(target, prop, receiver);
//   }
// });

// // fullName usa this.firstName y this.lastName
// // Gracias a receiver, el getter funciona correctamente
// console.log('Full name:', proxy.fullName);

console.log('');

// ============================================
// PASO 5: has y deleteProperty
// ============================================
console.log('--- Paso 5: has y deleteProperty ---');

// Reflect.has y Reflect.deleteProperty
// Descomenta las siguientes líneas:

// const obj = { name: 'Alice', temp: 'temporary' };

// // Reflect.has - equivalente a 'prop' in obj
// console.log("Has 'name':", Reflect.has(obj, 'name'));
// console.log("Has 'age':", Reflect.has(obj, 'age'));

// // Reflect.deleteProperty - equivalente a delete obj.prop
// const deleted = Reflect.deleteProperty(obj, 'temp');
// console.log("Delete 'temp':", deleted);
// console.log('Object after delete:', obj);

console.log('');

// ============================================
// PASO 6: Reflect.ownKeys
// ============================================
console.log('--- Paso 6: Reflect.ownKeys ---');

// Reflect.ownKeys retorna strings Y symbols
// Descomenta las siguientes líneas:

// const id = Symbol('id');
// const objWithSymbol = {
//   name: 'Alice',
//   age: 30,
//   [id]: 12345
// };

// // Object.keys solo retorna strings enumerables
// console.log('Object.keys:', Object.keys(objWithSymbol).join(', '));

// // Reflect.ownKeys retorna todo (strings + symbols)
// const allKeys = Reflect.ownKeys(objWithSymbol);
// console.log('Reflect.ownKeys:', allKeys.map(k => String(k)).join(', '));
// console.log('Symbols included!');

console.log('');

// ============================================
// PASO 7: Proxy + Reflect Completo
// ============================================
console.log('--- Paso 7: Proxy + Reflect Completo ---');

// Combinar todos los métodos Reflect en un Proxy
// Descomenta las siguientes líneas:

// const createInstrumentedObject = (obj) => {
//   return new Proxy(obj, {
//     get(target, prop, receiver) {
//       console.log(`[GET] ${prop}`);
//       return Reflect.get(target, prop, receiver);
//     },

//     set(target, prop, value, receiver) {
//       console.log(`[SET] ${prop} = ${value}`);
//       return Reflect.set(target, prop, value, receiver);
//     },

//     has(target, prop) {
//       console.log(`[HAS] ${prop}`);
//       return Reflect.has(target, prop);
//     },

//     deleteProperty(target, prop) {
//       console.log(`[DELETE] ${prop}`);
//       return Reflect.deleteProperty(target, prop);
//     }
//   });
// };

// const instrumented = createInstrumentedObject({ name: 'Alice' });

// // Probar todas las operaciones
// instrumented.name;           // GET
// instrumented.score = 100;    // SET
// 'name' in instrumented;      // HAS
// delete instrumented.score;   // DELETE

// console.log('Name:', instrumented.name);
// console.log('Has name:', 'name' in instrumented);
// console.log('Final:', JSON.stringify(instrumented));

console.log('');

console.log('✅ Lab completado.');
