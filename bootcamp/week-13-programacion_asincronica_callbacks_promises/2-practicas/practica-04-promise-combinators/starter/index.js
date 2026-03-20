// ============================================
// PRÁCTICA 04: PROMISE COMBINATORS
// ============================================

console.log('🔀 Promise Combinators\n');

// ============================================
// PASO 1: PROMISE.ALL() - EJECUTAR EN PARALELO
// ============================================
console.log('--- Paso 1: Promise.all() ---');

// Descomenta las siguientes líneas:
// const fetchUser = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve({ name: 'Ana' }), 1000);
//   });
// };

// const fetchPosts = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve([{ id: 1 }, { id: 2 }]), 1500);
//   });
// };

// const fetchComments = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve([{ id: 1 }]), 800);
//   });
// };

// console.time('Promise.all');

// Promise.all([
//   fetchUser(),
//   fetchPosts(),
//   fetchComments()
// ])
//   .then(([user, posts, comments]) => {
//     console.log('User:', user);
//     console.log('Posts:', posts.length);
//     console.log('Comments:', comments.length);
//     console.timeEnd('Promise.all');
//   });

console.log('');

// ============================================
// PASO 2: PROMISE.ALL() CON ERRORES
// ============================================
console.log('--- Paso 2: Promise.all() con Errores ---');

// Descomenta las siguientes líneas:
// const success1 = () => Promise.resolve('Success 1');
// const fail = () => Promise.reject(new Error('Failed!'));
// const success2 = () => Promise.resolve('Success 2');

// Promise.all([success1(), fail(), success2()])
//   .then(results => {
//     console.log('All succeeded:', results);
//   })
//   .catch(error => {
//     console.error('One failed:', error.message);
//   });

console.log('');

// ============================================
// PASO 3: PROMISE.RACE() - LA MÁS RÁPIDA GANA
// ============================================
console.log('--- Paso 3: Promise.race() ---');

// Descomenta las siguientes líneas:
// const slow = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('Slow (2s)'), 2000);
//   });
// };

// const fast = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('Fast (0.5s)'), 500);
//   });
// };

// const medium = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('Medium (1s)'), 1000);
//   });
// };

// Promise.race([slow(), fast(), medium()])
//   .then(winner => {
//     console.log('Winner:', winner);
//   });

console.log('');

// ============================================
// PASO 4: PROMISE.RACE() PARA TIMEOUT
// ============================================
console.log('--- Paso 4: Timeout con race() ---');

// Descomenta las siguientes líneas:
// const fetchData = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Datos obtenidos');
//     }, 5000);
//   });
// };

// const timeout = ms => {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error(`Timeout después de ${ms}ms`));
//     }, ms);
//   });
// };

// Promise.race([
//   fetchData(),
//   timeout(3000)
// ])
//   .then(result => {
//     console.log('Success:', result);
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });

console.log('');

// ============================================
// PASO 5: PROMISE.ALLSETTLED() - TODAS SIN FALLAR
// ============================================
console.log('--- Paso 5: Promise.allSettled() ---');

// Descomenta las siguientes líneas:
// const api1 = () => Promise.resolve({ source: 'API1', data: [1, 2, 3] });
// const api2 = () => Promise.reject(new Error('API2 down'));
// const api3 = () => Promise.resolve({ source: 'API3', data: [4, 5, 6] });

// Promise.allSettled([api1(), api2(), api3()])
//   .then(results => {
//     results.forEach((result, index) => {
//       if (result.status === 'fulfilled') {
//         console.log(`API ${index + 1}: ✅`, result.value);
//       } else {
//         console.log(`API ${index + 1}: ❌`, result.reason.message);
//       }
//     });
//   });

console.log('');

// ============================================
// PASO 6: PROMISE.ANY() - PRIMERA EXITOSA
// ============================================
console.log('--- Paso 6: Promise.any() ---');

// Descomenta las siguientes líneas:
// const slowSuccess = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('Slow success (2s)'), 2000);
//   });
// };

// const fastFail = () => {
//   return new Promise((_, reject) => {
//     setTimeout(() => reject(new Error('Fast fail (0.5s)')), 500);
//   });
// };

// const mediumSuccess = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('Medium success (1s)'), 1000);
//   });
// };

// Promise.any([slowSuccess(), fastFail(), mediumSuccess()])
//   .then(result => {
//     console.log('First success:', result);
//   })
//   .catch(error => {
//     console.error('All failed:', error);
//   });

console.log('');

// ============================================
// PASO 7: COMPARACIÓN DE MÉTODOS
// ============================================
console.log('--- Paso 7: Comparación ---');

// Descomenta las siguientes líneas:
// const createPromises = () => [
//   new Promise(resolve => setTimeout(() => resolve('P1: 1s'), 1000)),
//   new Promise((_, reject) => setTimeout(() => reject(new Error('P2: Error')), 500)),
//   new Promise(resolve => setTimeout(() => resolve('P3: 2s'), 2000))
// ];

// console.log('--- Promise.all() ---');
// Promise.all(createPromises())
//   .then(r => console.log('Result:', r))
//   .catch(e => console.log('Error:', e.message));

// console.log('--- Promise.race() ---');
// Promise.race(createPromises())
//   .then(r => console.log('Result:', r))
//   .catch(e => console.log('Error:', e.message));

// console.log('--- Promise.allSettled() ---');
// Promise.allSettled(createPromises())
//   .then(r => console.log('Results:', r.map(x => x.status)));

// console.log('--- Promise.any() ---');
// Promise.any(createPromises())
//   .then(r => console.log('Result:', r))
//   .catch(e => console.log('Error:', e.message));

console.log('');
console.log('✅ Práctica 04 completada!');
