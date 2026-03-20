/**
 * Ejercicio 01: Proxy Básico
 * ==========================
 * Aprende a crear Proxies, interceptar operaciones
 * y entender la relación target-handler-proxy.
 */

// ============================================
// PASO 1: Proxy Transparente
// ============================================
console.log('--- Paso 1: Proxy Transparente ---');

// Un Proxy con handler vacío actúa igual que el target
// Descomenta las siguientes líneas:

// const user = { name: 'Alice', age: 25 };
// const transparentProxy = new Proxy(user, {});

// // Se comporta como el objeto original
// console.log('Proxy name:', transparentProxy.name);

// // Los cambios en el proxy afectan al target
// transparentProxy.age = 26;
// console.log('Target también cambió:', user.age);

console.log('');

// ============================================
// PASO 2: Interceptar Lectura (get)
// ============================================
console.log('--- Paso 2: Interceptar Lectura ---');

// El trap 'get' intercepta la lectura de propiedades
// Descomenta las siguientes líneas:

// const person = { name: 'Alice', age: 25 };

// const loggedPerson = new Proxy(person, {
//   get(target, property) {
//     console.log(`[GET] ${property}`);
//     return target[property];
//   }
// });

// console.log(loggedPerson.name);
// console.log(loggedPerson.age);

console.log('');

// ============================================
// PASO 3: Interceptar Escritura (set)
// ============================================
console.log('--- Paso 3: Interceptar Escritura ---');

// El trap 'set' intercepta la asignación de valores
// IMPORTANTE: debe retornar true para indicar éxito
// Descomenta las siguientes líneas:

// const game = { score: 0 };

// const trackedGame = new Proxy(game, {
//   set(target, property, value) {
//     console.log(`[SET] ${property} = ${value}`);
//     target[property] = value;
//     return true; // Indica que la asignación fue exitosa
//   }
// });

// trackedGame.score = 100;
// trackedGame.score = 200;
// console.log('Score:', trackedGame.score);

console.log('');

// ============================================
// PASO 4: Valores por Defecto
// ============================================
console.log('--- Paso 4: Valores por Defecto ---');

// Retornar valores por defecto para propiedades inexistentes
// Descomenta las siguientes líneas:

// const defaults = {
//   language: 'es',
//   timeout: 5000,
//   retries: 3
// };

// const config = { theme: 'dark' };

// const configWithDefaults = new Proxy(config, {
//   get(target, property) {
//     if (property in target) {
//       return target[property];
//     }
//     // Retornar default si existe, o undefined
//     return defaults[property] !== undefined
//       ? `${defaults[property]} (default)`
//       : undefined;
//   }
// });

// console.log('Theme:', configWithDefaults.theme);
// console.log('Language:', configWithDefaults.language);
// console.log('Timeout:', configWithDefaults.timeout);

console.log('');

// ============================================
// PASO 5: Propiedades Computadas
// ============================================
console.log('--- Paso 5: Propiedades Computadas ---');

// Calcular propiedades al vuelo basadas en otras
// Descomenta las siguientes líneas:

// const personData = {
//   firstName: 'John',
//   lastName: 'Doe',
//   width: 10,
//   height: 5
// };

// const computed = new Proxy(personData, {
//   get(target, property) {
//     // Propiedad computada: fullName
//     if (property === 'fullName') {
//       return `${target.firstName} ${target.lastName}`;
//     }
//     // Propiedad computada: area
//     if (property === 'area') {
//       return target.width * target.height;
//     }
//     return target[property];
//   }
// });

// console.log('First:', computed.firstName);
// console.log('Last:', computed.lastName);
// console.log('Full:', computed.fullName);
// console.log('Area:', computed.area);

console.log('');

// ============================================
// PASO 6: Proxy Revocable
// ============================================
console.log('--- Paso 6: Proxy Revocable ---');

// Crear un Proxy que se puede desactivar
// Útil para acceso temporal a datos sensibles
// Descomenta las siguientes líneas:

// const sensitiveData = { apiKey: 'secret123' };

// const { proxy: tempAccess, revoke } = Proxy.revocable(sensitiveData, {
//   get(target, property) {
//     return target[property];
//   }
// });

// // Funciona mientras no se revoque
// console.log('Before revoke:', tempAccess.apiKey);

// // Revocar el proxy
// revoke();

// // Ahora cualquier acceso lanza error
// try {
//   console.log(tempAccess.apiKey);
// } catch (error) {
//   console.log('Proxy revoked - access error caught!');
// }

console.log('');

// ============================================
// PASO 7: Proxy con Arrays
// ============================================
console.log('--- Paso 7: Proxy con Arrays ---');

// Los Proxies también funcionan con arrays
// Ejemplo: permitir índices negativos (como Python)
// Descomenta las siguientes líneas:

// const numbers = [10, 20, 30, 40, 50];

// const pythonArray = new Proxy(numbers, {
//   get(target, property) {
//     const index = Number(property);

//     // Si es un índice numérico negativo
//     if (!isNaN(index) && index < 0) {
//       return target[target.length + index];
//     }

//     // Comportamiento normal para otros casos
//     return target[property];
//   }
// });

// console.log('First:', pythonArray[0]);
// console.log('Last (arr[-1]):', pythonArray[-1]);
// console.log('Second to last (arr[-2]):', pythonArray[-2]);

console.log('');

// ============================================
// 🎉 ¡Ejercicio completado!
// ============================================
console.log('🎉 ¡Ejercicio 01 completado!');
console.log('Has aprendido a crear Proxies básicos.');
console.log('Siguiente: Ejercicio 02 - Traps Avanzados');
