// ============================================
// PRÁCTICA 02: PROMISES BÁSICAS
// ============================================

console.log('🎁 Promises Básicas\n');

// ============================================
// PASO 1: CREAR TU PRIMERA PROMISE
// ============================================
console.log('--- Paso 1: Primera Promise ---');

// Descomenta las siguientes líneas:
// const myFirstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('¡Promise cumplida! 🎉');
//   }, 1000);
// });

// myFirstPromise.then(result => {
//   console.log(result);
// });

console.log('');

// ============================================
// PASO 2: PROMISE QUE SE RECHAZA
// ============================================
console.log('--- Paso 2: Promise con Error ---');

// Descomenta las siguientes líneas:
// const riskyPromise = new Promise((resolve, reject) => {
//   const random = Math.random();
//
//   setTimeout(() => {
//     if (random > 0.5) {
//       resolve(`Éxito! (${random.toFixed(2)})`);
//     } else {
//       reject(new Error(`Falló! (${random.toFixed(2)})`));
//     }
//   }, 1000);
// });

// riskyPromise
//   .then(result => console.log('✅', result))
//   .catch(error => console.error('❌', error.message));

console.log('');

// ============================================
// PASO 3: USAR .FINALLY()
// ============================================
console.log('--- Paso 3: .finally() ---');

// Descomenta las siguientes líneas:
// console.log('⏳ Cargando datos...');

// const loadData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     Math.random() > 0.5
//       ? resolve('Datos cargados')
//       : reject(new Error('Error al cargar'));
//   }, 1500);
// });

// loadData
//   .then(data => console.log('✅', data))
//   .catch(error => console.error('❌', error.message))
//   .finally(() => console.log('🏁 Carga finalizada'));

console.log('');

// ============================================
// PASO 4: PROMISE.RESOLVE() Y PROMISE.REJECT()
// ============================================
console.log('--- Paso 4: Promise.resolve/reject ---');

// Descomenta las siguientes líneas:
// Promise.resolve('Valor inmediato')
//   .then(value => console.log('Resolved:', value));

// Promise.reject(new Error('Error inmediato'))
//   .catch(error => console.error('Rejected:', error.message));

console.log('');

// ============================================
// PASO 5: SIMULAR UNA PETICIÓN HTTP
// ============================================
console.log('--- Paso 5: Simular HTTP Request ---');

// Descomenta las siguientes líneas:
// const fetchUser = userId => {
//   return new Promise((resolve, reject) => {
//     console.log(`📡 Obteniendo usuario ${userId}...`);
//
//     setTimeout(() => {
//       if (userId > 0) {
//         resolve({
//           id: userId,
//           name: 'Ana García',
//           email: 'ana@example.com'
//         });
//       } else {
//         reject(new Error('ID de usuario inválido'));
//       }
//     }, 1000);
//   });
// };

// fetchUser(123)
//   .then(user => {
//     console.log('Usuario obtenido:', user);
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });

// fetchUser(-1)
//   .then(user => {
//     console.log('Usuario obtenido:', user);
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });

console.log('');

// ============================================
// PASO 6: CONVERTIR CALLBACKS A PROMISES
// ============================================
console.log('--- Paso 6: Callbacks a Promises ---');

// Descomenta las siguientes líneas:
// // Versión con callback (estilo antiguo)
// const readFileCallback = (filename, callback) => {
//   setTimeout(() => {
//     callback(null, `Contenido de ${filename}`);
//   }, 1000);
// };

// // Versión con Promise (estilo moderno)
// const readFilePromise = filename => {
//   return new Promise((resolve, reject) => {
//     readFileCallback(filename, (error, content) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(content);
//       }
//     });
//   });
// };

// readFilePromise('datos.txt')
//   .then(content => console.log('Archivo leído:', content))
//   .catch(error => console.error('Error:', error.message));

console.log('');
console.log('✅ Práctica 02 completada!');
