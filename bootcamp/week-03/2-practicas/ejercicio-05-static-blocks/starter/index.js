/**
 * Ejercicio 05: Static Blocks (ES2022)
 *
 * Instrucciones:
 * - Lee cada paso y descomenta el código correspondiente
 * - Ejecuta con: node index.js
 * - Observa los resultados en la consola
 */

// ============================================
// PASO 1: Introducción a Static Blocks
// ============================================
console.log('--- Paso 1: Introducción a Static Blocks ---');

// Un static block se ejecuta automáticamente cuando la clase se define
// Se usa para inicialización compleja de campos estáticos

// class Counter {
//   static count = 0;
//   static prefix;
//
//   // Static block - se ejecuta al definir la clase
//   static {
//     this.prefix = 'CNT';
//     console.log('Static block ejecutado!');
//   }
//
//   static increment() {
//     return `${this.prefix}-${++this.count}`;
//   }
// }

// Descomenta las siguientes líneas:
// console.log('Counter.count:', Counter.count);
// console.log('Counter.prefix:', Counter.prefix);
// console.log('Primer ID:', Counter.increment());
// console.log('Segundo ID:', Counter.increment());

console.log('');

// ============================================
// PASO 2: Inicialización Condicional
// ============================================
console.log('--- Paso 2: Inicialización Condicional ---');

// Static blocks permiten lógica condicional para inicializar campos

// class AppMode {
//   static environment;
//   static apiUrl;
//   static debug;
//
//   static {
//     // Detectar entorno (en Node.js sería process.env.NODE_ENV)
//     const env = typeof process !== 'undefined'
//       ? (process.env.NODE_ENV || 'development')
//       : 'browser';
//
//     this.environment = env;
//
//     // Configurar según entorno
//     if (env === 'production') {
//       this.apiUrl = 'https://api.example.com';
//       this.debug = false;
//     } else {
//       this.apiUrl = 'http://localhost:3000';
//       this.debug = true;
//     }
//   }
//
//   static log(message) {
//     if (this.debug) {
//       console.log(`[${this.environment.toUpperCase()}] ${message}`);
//     }
//   }
// }

// Descomenta las siguientes líneas:
// console.log('AppMode.environment:', AppMode.environment);
// console.log('AppMode.apiUrl:', AppMode.apiUrl);
// console.log('AppMode.debug:', AppMode.debug);
// AppMode.log('This is a debug message');

console.log('');

// ============================================
// PASO 3: Acceso a Campos Privados
// ============================================
console.log('--- Paso 3: Acceso a Campos Privados ---');

// Static blocks pueden acceder y modificar campos privados estáticos

// class SecureConfig {
//   static #apiKey;
//   static #encryptionSalt;
//   static initialized = false;
//
//   static {
//     // Generar valores seguros
//     this.#apiKey = this.#generateKey('API');
//     this.#encryptionSalt = this.#generateKey('SALT');
//     this.initialized = true;
//     console.log('SecureConfig initialized with private values');
//   }
//
//   static #generateKey(prefix) {
//     const random = Math.random().toString(36).substring(2, 10);
//     return `${prefix}_${random}`;
//   }
//
//   static getApiKey() {
//     return this.#apiKey;
//   }
//
//   static getSalt() {
//     return this.#encryptionSalt;
//   }
//
//   static getMaskedKey() {
//     const key = this.#apiKey;
//     return key.substring(0, 4) + '****' + key.substring(key.length - 4);
//   }
// }

// Descomenta las siguientes líneas:
// console.log('SecureConfig.initialized:', SecureConfig.initialized);
// console.log('API Key (masked):', SecureConfig.getMaskedKey());
// console.log('Full API Key:', SecureConfig.getApiKey());
//
// // Intentar acceder al campo privado directamente falla
// // console.log(SecureConfig.#apiKey); // SyntaxError

console.log('');

// ============================================
// PASO 4: Múltiples Static Blocks
// ============================================
console.log('--- Paso 4: Múltiples Static Blocks ---');

// Puedes tener varios static blocks, se ejecutan en orden

// class InitOrder {
//   static step1 = 'initialized inline';
//
//   static {
//     console.log('  1. Primer static block');
//     console.log('     step1 =', this.step1);
//     console.log('     step2 =', this.step2); // undefined aún
//   }
//
//   static step2 = 'also inline';
//
//   static {
//     console.log('  2. Segundo static block');
//     console.log('     step2 =', this.step2); // ya tiene valor
//   }
//
//   static step3;
//
//   static {
//     console.log('  3. Tercer static block');
//     this.step3 = 'set in static block';
//     console.log('     step3 =', this.step3);
//   }
// }

// Descomenta la siguiente línea para ver el orden de ejecución:
// console.log('Orden de inicialización completado');
// console.log('Valores finales:', InitOrder.step1, InitOrder.step2, InitOrder.step3);

console.log('');

// ============================================
// PASO 5: Patrón Singleton
// ============================================
console.log('--- Paso 5: Patrón Singleton ---');

// Static blocks son útiles para configurar singletons

// class Logger {
//   static #instance = null;
//   static #logLevel;
//   static #prefix;
//
//   static {
//     this.#logLevel = 'info';
//     this.#prefix = '[APP]';
//     console.log('Logger singleton initialized');
//   }
//
//   #logs = [];
//
//   constructor() {
//     if (Logger.#instance) {
//       return Logger.#instance;
//     }
//     Logger.#instance = this;
//   }
//
//   static getInstance() {
//     if (!this.#instance) {
//       this.#instance = new Logger();
//     }
//     return this.#instance;
//   }
//
//   static setLevel(level) {
//     this.#logLevel = level;
//   }
//
//   log(message) {
//     const entry = `${Logger.#prefix} [${Logger.#logLevel.toUpperCase()}] ${message}`;
//     this.#logs.push(entry);
//     console.log(entry);
//   }
//
//   getLogs() {
//     return [...this.#logs];
//   }
// }

// Descomenta las siguientes líneas:
// const logger1 = Logger.getInstance();
// const logger2 = Logger.getInstance();
//
// console.log('Same instance?', logger1 === logger2);
//
// logger1.log('First message');
// Logger.setLevel('debug');
// logger2.log('Second message');
//
// console.log('All logs:', logger1.getLogs());

console.log('');

// ============================================
// PASO 6: Registro de Plugins
// ============================================
console.log('--- Paso 6: Registro de Plugins ---');

// Implementar un sistema de registro con defaults

// class PluginManager {
//   static #plugins = new Map();
//   static #initialized = false;
//
//   static {
//     // Registrar plugins por defecto
//     this.#plugins.set('formatter', {
//       name: 'JSON Formatter',
//       format: data => JSON.stringify(data, null, 2)
//     });
//
//     this.#plugins.set('validator', {
//       name: 'Basic Validator',
//       validate: data => data !== null && data !== undefined
//     });
//
//     this.#initialized = true;
//     console.log('PluginManager initialized with default plugins');
//   }
//
//   static register(id, plugin) {
//     if (this.#plugins.has(id)) {
//       console.warn(`Plugin "${id}" exists, overwriting...`);
//     }
//     this.#plugins.set(id, plugin);
//     return this;
//   }
//
//   static get(id) {
//     return this.#plugins.get(id);
//   }
//
//   static list() {
//     return [...this.#plugins.entries()].map(([id, p]) => ({
//       id,
//       name: p.name
//     }));
//   }
//
//   static isInitialized() {
//     return this.#initialized;
//   }
// }

// Descomenta las siguientes líneas:
// console.log('Is initialized?', PluginManager.isInitialized());
// console.log('Default plugins:', PluginManager.list());
//
// // Usar un plugin
// const formatter = PluginManager.get('formatter');
// console.log('Formatted:', formatter.format({ name: 'Test', value: 42 }));
//
// // Registrar nuevo plugin
// PluginManager.register('logger', {
//   name: 'Console Logger',
//   log: msg => console.log(`[PLUGIN] ${msg}`)
// });
//
// console.log('After adding logger:', PluginManager.list());
// PluginManager.get('logger').log('Hello from plugin!');

console.log('');

// ============================================
// PASO 7: Ejercicio Integrador
// ============================================
console.log('--- Paso 7: Ejercicio Integrador ---');

// Sistema completo de configuración de aplicación

// class AppConfig {
//   static #config = {};
//   static #secrets = {};
//   static #ready = false;
//
//   static {
//     // Configuración base
//     this.#config = {
//       appName: 'MyAwesomeApp',
//       version: '1.0.0',
//       theme: 'dark'
//     };
//
//     console.log('AppConfig: Loading base config...');
//   }
//
//   static {
//     // Configuración de entorno
//     const isDev = typeof process === 'undefined' ||
//                   process.env.NODE_ENV !== 'production';
//
//     this.#config.environment = isDev ? 'development' : 'production';
//     this.#config.debug = isDev;
//     this.#config.apiUrl = isDev
//       ? 'http://localhost:3000/api'
//       : 'https://api.myapp.com';
//
//     console.log('AppConfig: Environment configured...');
//   }
//
//   static {
//     // Configuración de secretos (simulado)
//     this.#secrets = {
//       apiKey: 'sk_' + Math.random().toString(36).substring(2),
//       jwtSecret: 'jwt_' + Math.random().toString(36).substring(2)
//     };
//
//     this.#ready = true;
//     console.log('AppConfig: Secrets generated...');
//     console.log('AppConfig: Ready!');
//   }
//
//   static get(key) {
//     return key ? this.#config[key] : { ...this.#config };
//   }
//
//   static set(key, value) {
//     if (this.#config.hasOwnProperty(key)) {
//       this.#config[key] = value;
//     } else {
//       throw new Error(`Unknown config key: ${key}`);
//     }
//   }
//
//   static getSecret(key) {
//     return this.#secrets[key];
//   }
//
//   static isReady() {
//     return this.#ready;
//   }
//
//   static getStatus() {
//     return {
//       ready: this.#ready,
//       environment: this.#config.environment,
//       debug: this.#config.debug,
//       hasSecrets: Object.keys(this.#secrets).length > 0
//     };
//   }
// }

// Descomenta las siguientes líneas:
// console.log('');
// console.log('App Status:', AppConfig.getStatus());
// console.log('Full Config:', AppConfig.get());
// console.log('API URL:', AppConfig.get('apiUrl'));
// console.log('API Key (first 10 chars):', AppConfig.getSecret('apiKey').substring(0, 10) + '...');
//
// // Cambiar configuración
// AppConfig.set('theme', 'light');
// console.log('New theme:', AppConfig.get('theme'));

console.log('');
console.log('='.repeat(50));
console.log('✅ Ejercicio completado');
console.log('='.repeat(50));
