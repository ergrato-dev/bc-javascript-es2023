/**
 * Ejercicio 04: Propiedades Privadas con Symbols
 *
 * Aprende a usar símbolos para ocultar propiedades
 * y entiende sus limitaciones
 *
 * Instrucciones:
 * - Lee cada paso y descomenta el código
 * - Ejecuta con: node index.js
 * - Comprende la diferencia entre "oculto" y "privado"
 */

// ============================================
// PASO 1: Ocultar Propiedades
// ============================================
console.log('--- Paso 1: Ocultar Propiedades ---');

// Las propiedades con claves simbólicas no aparecen
// en Object.keys(), Object.values(), for...in, JSON.stringify()

// Descomenta las siguientes líneas:
// const _password = Symbol('password');
//
// const user = {
//   name: 'Alice',
//   email: 'alice@test.com',
//   [_password]: 'secret123'
// };
//
// console.log('Object.keys:', Object.keys(user));
// console.log('JSON.stringify:', JSON.stringify(user));
// console.log('El password está oculto de las enumeraciones normales');

console.log('');

// ============================================
// PASO 2: Pero NO es Privado
// ============================================
console.log('--- Paso 2: Pero NO es Privado ---');

// ⚠️ Los símbolos pueden ser descubiertos y accedidos

// Descomenta las siguientes líneas:
// const _secret = Symbol('secret');
//
// const data = {
//   visible: true,
//   [_secret]: 'información sensible'
// };
//
// // Descubrir símbolos
// const symbols = Object.getOwnPropertySymbols(data);
// console.log('Símbolos encontrados:', symbols);
//
// // Acceder al valor
// console.log('Secret accedido:', data[symbols[0]]);
// console.log('⚠️ Los símbolos se pueden descubrir');
//
// // Reflect.ownKeys obtiene TODO
// console.log('Todas las claves:', Reflect.ownKeys(data));

console.log('');

// ============================================
// PASO 3: Patrón de Módulo con Símbolos
// ============================================
console.log('--- Paso 3: Patrón de Módulo ---');

// El verdadero poder de los símbolos está en el scope del módulo
// Si no exportas el símbolo, es difícil acceder desde fuera

// Descomenta las siguientes líneas:
// // Símbolos "privados" del módulo (no exportados)
// const _balance = Symbol('balance');
// const _transactions = Symbol('transactions');
//
// // Factory function que usa los símbolos
// const createAccount = (initialBalance = 0) => ({
//   [_balance]: initialBalance,
//   [_transactions]: [],
//
//   deposit(amount) {
//     this[_balance] += amount;
//     this[_transactions].push({ type: 'deposit', amount });
//   },
//
//   withdraw(amount) {
//     if (amount > this[_balance]) {
//       throw new Error('Fondos insuficientes');
//     }
//     this[_balance] -= amount;
//     this[_transactions].push({ type: 'withdraw', amount });
//   },
//
//   getBalance() {
//     return this[_balance];
//   }
// });
//
// const account = createAccount(100);
// account.deposit(50);
//
// console.log('Balance:', account.getBalance());
// console.log('Object.keys:', Object.keys(account));
// console.log('El balance interno está oculto');

console.log('');

// ============================================
// PASO 4: Comparativa de Métodos
// ============================================
console.log('--- Paso 4: Comparativa ---');

// Descomenta las siguientes líneas:
// // 1. Convención underscore - NO oculto, NO privado
// const withUnderscore = {
//   _secret: 'visible everywhere'
// };
//
// // 2. Symbol - Oculto de keys, NO privado
// const _sym = Symbol('secret');
// const withSymbol = {
//   [_sym]: 'hidden from keys'
// };
//
// // 3. Private fields (ES2022) - Oculto Y privado
// class WithPrivate {
//   #secret = 'truly private';
//   getSecret() { return this.#secret; }
// }
//
// console.log('| Método      | Oculto | Privado |');
// console.log('|-------------|--------|---------|');
// console.log('| underscore  | ❌     | ❌      |');
// console.log('| Symbol      | ✅     | ❌      |');
// console.log('| #private    | ✅     | ✅      |');
//
// // Demostración
// console.log('\nUnderscore visible:', Object.keys(withUnderscore));
// console.log('Symbol oculto:', Object.keys(withSymbol));
// console.log('Symbol descubrible:', Object.getOwnPropertySymbols(withSymbol).length > 0);

console.log('');

// ============================================
// PASO 5: Copiar Objetos con Símbolos
// ============================================
console.log('--- Paso 5: Copiar con Símbolos ---');

// Object.assign y spread COPIAN las propiedades simbólicas

// Descomenta las siguientes líneas:
// const _internal = Symbol('internal');
//
// const original = {
//   name: 'Original',
//   [_internal]: 'datos internos'
// };
//
// // Ambos métodos copian símbolos
// const copy1 = { ...original };
// const copy2 = Object.assign({}, original);
//
// console.log('Original tiene símbolo:', original[_internal]);
// console.log('Spread copia símbolo:', copy1[_internal]);
// console.log('Assign copia símbolo:', copy2[_internal]);
//
// // ⚠️ Las copias tienen acceso a los datos "ocultos"
// console.log('Símbolos en copia:', Object.getOwnPropertySymbols(copy1));

console.log('');

// ============================================
// PASO 6: Uso en Clases
// ============================================
console.log('--- Paso 6: Uso en Clases ---');

// Descomenta las siguientes líneas:
// // Símbolos definidos fuera de la clase
// const _id = Symbol('id');
// const _createdAt = Symbol('createdAt');
// const _generateId = Symbol('generateId');
//
// class Entity {
//   constructor(data) {
//     this[_id] = this[_generateId]();
//     this[_createdAt] = new Date();
//     Object.assign(this, data);
//   }
//
//   [_generateId]() {
//     return Math.random().toString(36).substr(2, 9);
//   }
//
//   getId() {
//     return this[_id];
//   }
//
//   getCreatedAt() {
//     return this[_createdAt];
//   }
//
//   toJSON() {
//     // Solo serializar propiedades públicas
//     const result = {};
//     for (const key of Object.keys(this)) {
//       result[key] = this[key];
//     }
//     return result;
//   }
// }
//
// const entity = new Entity({ name: 'Test', value: 42 });
//
// console.log('ID:', entity.getId());
// console.log('Claves públicas:', Object.keys(entity));
// console.log('JSON:', JSON.stringify(entity));
// console.log('Todas las claves:', Reflect.ownKeys(entity).length);

console.log('');

// ============================================
// PASO 7: Ejercicio Práctico
// ============================================
console.log('--- Paso 7: Ejercicio Práctico ---');

// Crea un "SecureConfig" que:
// 1. Guarde apiKey y secretToken como símbolos
// 2. Tenga métodos públicos para verificar si están configurados
// 3. No exponga los valores en Object.keys() ni JSON

// Descomenta y completa:
// const _apiKey = Symbol('apiKey');
// const _secretToken = Symbol('secretToken');
//
// const createSecureConfig = (apiKey, secretToken) => ({
//   // Propiedades simbólicas
//
//   // Métodos públicos
//   hasApiKey() {
//     // Retorna true si apiKey existe
//   },
//
//   hasSecretToken() {
//     // Retorna true si secretToken existe
//   },
//
//   // Para uso interno (requiere el símbolo)
//   getApiKey(symbol) {
//     if (symbol === _apiKey) return this[_apiKey];
//     throw new Error('Acceso denegado');
//   }
// });
//
// const config = createSecureConfig('key-123', 'token-xyz');
// console.log('¿Tiene API Key?', config.hasApiKey());
// console.log('Claves visibles:', Object.keys(config));
// console.log('JSON:', JSON.stringify(config));

console.log('');
console.log('✅ Ejercicio 04 completado');
