/**
 * Ejercicio 02: Symbol.for y Registro Global
 *
 * Aprende la diferencia entre Symbol() y Symbol.for()
 *
 * Instrucciones:
 * - Lee cada paso y descomenta el código
 * - Ejecuta con: node index.js
 * - Observa las diferencias
 */

// ============================================
// PASO 1: Symbol() siempre crea nuevos
// ============================================
console.log('--- Paso 1: Symbol() siempre crea nuevos ---');

// Symbol() crea un símbolo ÚNICO cada vez
// Aunque tengan la misma descripción, son diferentes

// Descomenta las siguientes líneas:
// const local1 = Symbol('id');
// const local2 = Symbol('id');
//
// console.log('local1 === local2:', local1 === local2);
// console.log('Cada Symbol() es único');

console.log('');

// ============================================
// PASO 2: Symbol.for() reutiliza del registro
// ============================================
console.log('--- Paso 2: Symbol.for() reutiliza ---');

// Symbol.for() busca en el registro global
// Si existe, lo retorna. Si no, lo crea y registra.

// Descomenta las siguientes líneas:
// const global1 = Symbol.for('app.id');
// const global2 = Symbol.for('app.id');
//
// console.log('global1 === global2:', global1 === global2);
// console.log('Symbol.for() retorna el mismo símbolo para la misma clave');

console.log('');

// ============================================
// PASO 3: Symbol.keyFor() - Obtener la clave
// ============================================
console.log('--- Paso 3: Symbol.keyFor() ---');

// Symbol.keyFor() retorna la clave de un símbolo registrado
// Para símbolos locales (Symbol()), retorna undefined

// Descomenta las siguientes líneas:
// const registered = Symbol.for('app.shared');
// const local = Symbol('local');
//
// console.log('Clave de registered:', Symbol.keyFor(registered));
// console.log('Clave de local:', Symbol.keyFor(local));
// console.log('Solo símbolos de Symbol.for() tienen clave');

console.log('');

// ============================================
// PASO 4: Compartir entre "módulos"
// ============================================
console.log('--- Paso 4: Compartir entre módulos ---');

// Symbol.for() permite compartir símbolos entre diferentes
// partes de la aplicación sin necesidad de exportar/importar

// Simulamos dos módulos
// Descomenta las siguientes líneas:
// const moduleA = (() => {
//   // Módulo A crea/obtiene el símbolo
//   const SHARED = Symbol.for('module.shared');
//   return { SHARED };
// })();
//
// const moduleB = (() => {
//   // Módulo B obtiene el MISMO símbolo
//   const SHARED = Symbol.for('module.shared');
//   return { SHARED };
// })();
//
// console.log('En módulo A:', moduleA.SHARED);
// console.log('En módulo B:', moduleB.SHARED);
// console.log('¿Son iguales?', moduleA.SHARED === moduleB.SHARED);

console.log('');

// ============================================
// PASO 5: Namespacing (buenas prácticas)
// ============================================
console.log('--- Paso 5: Namespacing ---');

// Para evitar colisiones en el registro global,
// usa un namespace (prefijo) en tus claves

// Descomenta las siguientes líneas:
// // ✅ BIEN: namespace específico de tu app
// const APP_CONFIG = Symbol.for('myapp.config');
// const APP_DATABASE = Symbol.for('myapp.database');
// const APP_CACHE = Symbol.for('myapp.cache');
//
// console.log('Símbolo config:', APP_CONFIG);
// console.log('Símbolo database:', APP_DATABASE);
//
// // ❌ MAL: claves genéricas (pueden colisionar)
// // const CONFIG = Symbol.for('config');
// // Otra librería podría usar la misma clave

console.log('');

// ============================================
// PASO 6: Caso práctico - Sistema de plugins
// ============================================
console.log('--- Paso 6: Sistema de Plugins ---');

// Descomenta las siguientes líneas:
// // Definir símbolos del sistema de plugins
// const PLUGIN_NAME = Symbol.for('plugins.name');
// const PLUGIN_VERSION = Symbol.for('plugins.version');
// const PLUGIN_INIT = Symbol.for('plugins.init');
//
// // Crear un plugin
// const myPlugin = {
//   [PLUGIN_NAME]: 'MyAwesomePlugin',
//   [PLUGIN_VERSION]: '1.0.0',
//   [PLUGIN_INIT]() {
//     console.log(`  Inicializando ${this[PLUGIN_NAME]} v${this[PLUGIN_VERSION]}`);
//   }
// };
//
// // En otra parte de la app, usar los mismos símbolos
// const loadPlugin = (plugin) => {
//   const NAME = Symbol.for('plugins.name');
//   const INIT = Symbol.for('plugins.init');
//
//   console.log(`  Cargando plugin: ${plugin[NAME]}`);
//   plugin[INIT]();
// };
//
// loadPlugin(myPlugin);

console.log('');

// ============================================
// PASO 7: Comparativa completa
// ============================================
console.log('--- Paso 7: Comparativa ---');

// Descomenta las siguientes líneas:
// console.log('| Característica         | Symbol()  | Symbol.for() |');
// console.log('|------------------------|-----------|--------------|');
// console.log('| Crea único cada vez    | ✅ Sí     | ❌ No        |');
// console.log('| Usa registro global    | ❌ No     | ✅ Sí        |');
// console.log('| keyFor() retorna clave | ❌ No     | ✅ Sí        |');
// console.log('| Compartir entre módulos| Manual    | Automático   |');

console.log('');

// ============================================
// PASO 8: Ejercicio Práctico
// ============================================
console.log('--- Paso 8: Ejercicio Práctico ---');

// Crea un sistema de eventos usando Symbol.for()
// Los símbolos deben poder accederse desde cualquier parte

// Descomenta y completa:
// const Events = {
//   USER_LOGIN: Symbol.for('events.user.login'),
//   USER_LOGOUT: Symbol.for('events.user.logout'),
//   // Agrega más eventos...
// };
//
// // Función que emite eventos
// const emit = (event, data) => {
//   const eventKey = Symbol.keyFor(event);
//   console.log(`  Evento: ${eventKey}`, data);
// };
//
// // Prueba
// emit(Events.USER_LOGIN, { userId: 123 });
// emit(Symbol.for('events.user.login'), { userId: 456 }); // Mismo símbolo

console.log('');
console.log('✅ Ejercicio 02 completado');
