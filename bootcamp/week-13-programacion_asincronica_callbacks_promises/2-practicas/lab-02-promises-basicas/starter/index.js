/**
 * 📘 Lab 02: Promesas básicas
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// Espera `ms` milisegundos. Cada paso termina con `await wait(...)` para que
// sus promesas acaben antes de que empiece el paso siguiente.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ============================================
// PASO 1: Tu primera promesa
// ============================================
console.log('--- Paso 1: Primera promesa ---');

// Descomenta las siguientes líneas:
// const firstPromise = new Promise((resolve) => {
//   setTimeout(() => resolve('¡Promesa cumplida! 🎉'), 100);
// });
//
// console.log('Recién creada:', firstPromise);
// firstPromise.then((result) => console.log('then recibe:', result));
// await wait(150);
// console.log('Después:', firstPromise);

console.log('');

// ============================================
// PASO 2: Una promesa que se rechaza
// ============================================
console.log('--- Paso 2: Promesa rechazada ---');

// Descomenta las siguientes líneas:
// const checkTicket = (code) => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (code.startsWith('PLA-')) {
//       resolve(`Entrada ${code} válida`);
//     } else {
//       reject(new Error(`Entrada ${code} no reconocida`));
//     }
//   }, 50);
// });
//
// checkTicket('PLA-042')
//   .then((message) => console.log('✅', message))
//   .catch((error) => console.log('❌', error.message));
// checkTicket('XYZ-001')
//   .then((message) => console.log('✅', message))
//   .catch((error) => console.log('❌', error.message));
// await wait(100);

console.log('');

// ============================================
// PASO 3: .finally()
// ============================================
console.log('--- Paso 3: .finally() ---');

// Descomenta las siguientes líneas:
// const loadData = (shouldFail) => {
//   console.log('⏳ Cargando datos...');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) reject(new Error('Error al cargar'));
//       else resolve('Datos cargados');
//     }, 50);
//   });
// };
//
// loadData(false)
//   .then((data) => console.log('✅', data))
//   .catch((error) => console.log('❌', error.message))
//   .finally(() => console.log('🏁 Carga finalizada'));
// await wait(100);
//
// loadData(true)
//   .then((data) => console.log('✅', data))
//   .catch((error) => console.log('❌', error.message))
//   .finally(() => console.log('🏁 Carga finalizada'));
// await wait(100);

console.log('');

// ============================================
// PASO 4: Promise.resolve() y Promise.reject()
// ============================================
console.log('--- Paso 4: Promise.resolve/reject ---');

// Descomenta las siguientes líneas:
// Promise.resolve('Valor inmediato')
//   .then((value) => console.log('Resuelta:', value));
// Promise.reject(new Error('Error inmediato'))
//   .catch((error) => console.log('Rechazada:', error.message));
// console.log('Esta línea sale primero');
// await wait(10);

console.log('');

// ============================================
// PASO 5: Simular una petición HTTP
// ============================================
console.log('--- Paso 5: Petición simulada ---');

// Descomenta las siguientes líneas:
// const fetchVisitor = (visitorId) => new Promise((resolve, reject) => {
//   console.log(`📡 Pidiendo el visitante ${visitorId}...`);
//   setTimeout(() => {
//     if (visitorId > 0) {
//       resolve({ id: visitorId, name: 'Ana García', visits: 3 });
//     } else {
//       reject(new Error(`Id de visitante no válido: ${visitorId}`));
//     }
//   }, 100);
// });
//
// fetchVisitor(123)
//   .then((visitor) => console.log('Visitante:', visitor))
//   .catch((error) => console.log('Error:', error.message));
// fetchVisitor(-1)
//   .then((visitor) => console.log('Visitante:', visitor))
//   .catch((error) => console.log('Error:', error.message));
// await wait(150);

console.log('');

// ============================================
// PASO 6: Una promesa solo se resuelve una vez
// ============================================
console.log('--- Paso 6: Se resuelve una vez ---');

// Descomenta las siguientes líneas:
// const settledOnce = new Promise((resolve, reject) => {
//   resolve('primer resolve');
//   resolve('segundo resolve');
//   reject(new Error('reject tardío'));
//   console.log('El ejecutor sigue corriendo después de resolve');
// });
//
// settledOnce
//   .then((value) => console.log('Valor:', value))
//   .catch((error) => console.log('Nunca llega:', error.message));
// await wait(10);

console.log('');

// ============================================
// PASO 7: De callback a promesa
// ============================================
console.log('--- Paso 7: Callback a promesa ---');

// Descomenta las siguientes líneas:
// // Estilo antiguo: callback error-first
// const readFileCallback = (fileName, callback) => {
//   setTimeout(() => {
//     if (fileName.endsWith('.txt')) callback(null, `Contenido de ${fileName}`);
//     else callback(new Error(`Formato no admitido: ${fileName}`));
//   }, 50);
// };
//
// // Estilo moderno: la misma operación devuelve una promesa
// const readFile = (fileName) => new Promise((resolve, reject) => {
//   readFileCallback(fileName, (error, content) => {
//     if (error) reject(error);
//     else resolve(content);
//   });
// });
//
// readFile('notas.txt')
//   .then((content) => console.log('✅', content))
//   .catch((error) => console.log('❌', error.message));
// readFile('foto.png')
//   .then((content) => console.log('✅', content))
//   .catch((error) => console.log('❌', error.message));
// await wait(100);

console.log('');
console.log('✅ Lab completado.');
