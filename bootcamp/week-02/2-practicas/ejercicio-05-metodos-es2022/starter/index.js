/**
 * Ejercicio 05: Métodos ES2022 - at() y Object.hasOwn()
 *
 * Instrucciones:
 * - Lee cada paso y descomenta el código correspondiente
 * - Ejecuta con: node index.js
 * - Observa los resultados en la consola
 */

// ============================================
// PASO 1: Introducción a at()
// ============================================
console.log('--- Paso 1: Introducción a at() ---');

// at() permite acceder a elementos con índices positivos y negativos
// Los índices negativos cuentan desde el final

// const colors = ['rojo', 'verde', 'azul', 'amarillo', 'morado'];

// Descomenta las siguientes líneas:
// const firstColor = colors.at(0);
// const lastColor = colors.at(-1);
// const secondToLast = colors.at(-2);

// console.log('Primer color:', firstColor);
// console.log('Último color:', lastColor);
// console.log('Penúltimo:', secondToLast);

console.log('');

// ============================================
// PASO 2: Comparando at() con corchetes
// ============================================
console.log('--- Paso 2: Comparando at() con corchetes ---');

// La notación de corchetes NO soporta índices negativos
// at() SÍ los soporta

// const nums = [10, 20, 30, 40, 50];

// Descomenta las siguientes líneas:
// console.log('nums[-1] con corchetes:', nums[-1]);
// console.log('nums.at(-1) con at():', nums.at(-1));

// console.log('');
// console.log('Acceso al último elemento:');
// console.log('Forma antigua: nums[nums.length - 1] =', nums[nums.length - 1]);
// console.log('Forma moderna: nums.at(-1) =', nums.at(-1));

console.log('');

// ============================================
// PASO 3: Casos prácticos de at()
// ============================================
console.log('--- Paso 3: Casos prácticos de at() ---');

// Caso 1: Obtener extensión de archivo
// const getExtension = filename => {
//   const parts = filename.split('.');
//   return parts.at(-1);
// };

// Descomenta las siguientes líneas:
// console.log('Extensión de "documento.pdf":', getExtension('documento.pdf'));
// console.log('Extensión de "archivo.tar.gz":', getExtension('archivo.tar.gz'));
// console.log('Extensión de "imagen.min.js":', getExtension('imagen.min.js'));

// Caso 2: Obtener nombre de archivo de una ruta
// const getFileName = path => {
//   const segments = path.split('/');
//   return segments.at(-1);
// };

// Descomenta las siguientes líneas:
// console.log('');
// console.log('Archivo de "/home/user/docs/report.pdf":', getFileName('/home/user/docs/report.pdf'));
// console.log('Archivo de "images/logo.png":', getFileName('images/logo.png'));

// Caso 3: at() también funciona con strings
// const message = 'JavaScript';

// Descomenta las siguientes líneas:
// console.log('');
// console.log('Primera letra de "JavaScript":', message.at(0));
// console.log('Última letra de "JavaScript":', message.at(-1));

console.log('');

// ============================================
// PASO 4: Introducción a Object.hasOwn()
// ============================================
console.log('--- Paso 4: Introducción a Object.hasOwn() ---');

// Object.hasOwn() verifica si un objeto tiene una propiedad PROPIA
// (no heredada del prototype)

// const user = {
//   name: 'Ana',
//   age: 25,
//   email: 'ana@example.com'
// };

// Descomenta las siguientes líneas:
// console.log('¿user tiene "name"?', Object.hasOwn(user, 'name'));
// console.log('¿user tiene "age"?', Object.hasOwn(user, 'age'));
// console.log('¿user tiene "phone"?', Object.hasOwn(user, 'phone'));

// toString es heredada de Object.prototype
// console.log('¿user tiene "toString"?', Object.hasOwn(user, 'toString'));

console.log('');

// ============================================
// PASO 5: Object.hasOwn() vs hasOwnProperty()
// ============================================
console.log('--- Paso 5: Object.hasOwn() vs hasOwnProperty() ---');

// Object.hasOwn() es más seguro que hasOwnProperty()
// porque funciona incluso con objetos sin prototype

// Objeto sin prototype (caso especial)
// const configSinPrototype = Object.create(null);
// configSinPrototype.debug = true;
// configSinPrototype.logLevel = 'info';

// Descomenta las siguientes líneas:
// console.log('Config sin prototype:', configSinPrototype);
// console.log('¿tiene "debug"? (hasOwn):', Object.hasOwn(configSinPrototype, 'debug'));

// Esto fallaría con hasOwnProperty:
// try {
//   configSinPrototype.hasOwnProperty('debug');
// } catch (error) {
//   console.log('Error con hasOwnProperty:', error.message);
// }

// Forma segura antigua (verbosa):
// console.log('');
// console.log('Forma antigua segura:');
// console.log('Object.prototype.hasOwnProperty.call(config, "debug"):',
//   Object.prototype.hasOwnProperty.call(configSinPrototype, 'debug'));

console.log('');

// ============================================
// PASO 6: Propiedades propias vs heredadas
// ============================================
console.log('--- Paso 6: Propiedades propias vs heredadas ---');

// Es importante distinguir entre propiedades propias y heredadas

// const animal = {
//   breathe: true,
//   eat: true
// };

// const dog = Object.create(animal);
// dog.bark = true;
// dog.name = 'Max';

// Descomenta las siguientes líneas:
// console.log('Propiedades de dog:');
// console.log('  dog.bark =', dog.bark, '(propia)');
// console.log('  dog.breathe =', dog.breathe, '(heredada)');

// console.log('');
// console.log('Verificando con Object.hasOwn():');
// console.log('  ¿hasOwn(dog, "bark")?', Object.hasOwn(dog, 'bark'));
// console.log('  ¿hasOwn(dog, "breathe")?', Object.hasOwn(dog, 'breathe'));

// console.log('');
// console.log('Verificando con "in" operator:');
// console.log('  ¿"bark" in dog?', 'bark' in dog);
// console.log('  ¿"breathe" in dog?', 'breathe' in dog);
// console.log('  (nota: "in" incluye propiedades heredadas)');

console.log('');

// ============================================
// PASO 7: Combinando at() y Object.hasOwn()
// ============================================
console.log('--- Paso 7: Combinando at() y Object.hasOwn() ---');

// Escenario: Validar el último registro de una lista

// const records = [
//   { id: 1, name: 'Item 1' },
//   { id: 2, name: 'Item 2', description: 'Con descripción' },
//   { id: 3, name: 'Item 3', price: 100 }
// ];

// const validateLastRecord = (data, requiredFields) => {
//   const lastRecord = data.at(-1);
//
//   if (!lastRecord) {
//     return { valid: false, reason: 'No hay registros' };
//   }
//
//   const missingFields = requiredFields.filter(
//     field => !Object.hasOwn(lastRecord, field)
//   );
//
//   return {
//     valid: missingFields.length === 0,
//     record: lastRecord,
//     missingFields
//   };
// };

// Descomenta las siguientes líneas:
// const result1 = validateLastRecord(records, ['id', 'name']);
// console.log('Validación con [id, name]:', result1);

// const result2 = validateLastRecord(records, ['id', 'name', 'description']);
// console.log('Validación con [id, name, description]:', result2);

console.log('');

// ============================================
// PASO 8: Ejercicio integrador - Sistema de historial
// ============================================
console.log('--- Paso 8: Ejercicio integrador ---');

// Sistema de historial de navegación

// const createBrowserHistory = () => {
//   const history = [];
//   const metadata = Object.create(null);
//
//   return {
//     visit(url, title) {
//       const entry = {
//         url,
//         title,
//         timestamp: Date.now(),
//         id: history.length + 1
//       };
//       history.push(entry);
//       return entry;
//     },
//
//     getCurrentPage() {
//       return history.at(-1) ?? null;
//     },
//
//     getPreviousPage() {
//       return history.at(-2) ?? null;
//     },
//
//     getRecentPages(count = 3) {
//       return history.slice(-count);
//     },
//
//     setMeta(key, value) {
//       metadata[key] = value;
//     },
//
//     getMeta(key) {
//       return Object.hasOwn(metadata, key) ? metadata[key] : undefined;
//     },
//
//     hasMeta(key) {
//       return Object.hasOwn(metadata, key);
//     },
//
//     getStats() {
//       return {
//         totalPages: history.length,
//         currentPage: this.getCurrentPage()?.url ?? 'ninguna',
//         hasSessionId: this.hasMeta('sessionId')
//       };
//     }
//   };
// };

// Descomenta las siguientes líneas:
// const browserHistory = createBrowserHistory();

// // Simular navegación
// browserHistory.visit('https://google.com', 'Google');
// browserHistory.visit('https://github.com', 'GitHub');
// browserHistory.visit('https://mdn.io', 'MDN Web Docs');

// // Establecer metadata
// browserHistory.setMeta('sessionId', 'abc123');
// browserHistory.setMeta('userId', 42);

// console.log('Página actual:', browserHistory.getCurrentPage());
// console.log('Página anterior:', browserHistory.getPreviousPage());
// console.log('');
// console.log('¿Tiene sessionId?', browserHistory.hasMeta('sessionId'));
// console.log('¿Tiene theme?', browserHistory.hasMeta('theme'));
// console.log('');
// console.log('Estadísticas:', browserHistory.getStats());

console.log('');
console.log('='.repeat(50));
console.log('✅ Ejercicio completado');
console.log('='.repeat(50));
