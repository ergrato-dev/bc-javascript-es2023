// ============================================
// PRÁCTICA 03: PROMISE CHAINING
// ============================================

console.log('⛓️ Promise Chaining\n');

// ============================================
// PASO 1: CADENA SIMPLE DE PROMISES
// ============================================
console.log('--- Paso 1: Cadena Simple ---');

// Descomenta las siguientes líneas:
// Promise.resolve(5)
//   .then(value => {
//     console.log('Valor inicial:', value);
//     return value * 2;
//   })
//   .then(value => {
//     console.log('Después de x2:', value);
//     return value + 10;
//   })
//   .then(value => {
//     console.log('Después de +10:', value);
//     return value / 2;
//   })
//   .then(finalValue => {
//     console.log('Valor final:', finalValue);
//   });

console.log('');

// ============================================
// PASO 2: ENCADENAR PROMISES ASÍNCRONAS
// ============================================
console.log('--- Paso 2: Promises Asíncronas ---');

// Descomenta las siguientes líneas:
// const getUser = userId => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({ id: userId, name: 'Ana García' });
//     }, 1000);
//   });
// };

// const getPosts = userId => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, title: 'Post 1', userId },
//         { id: 2, title: 'Post 2', userId }
//       ]);
//     }, 1000);
//   });
// };

// const getComments = postId => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, text: 'Great!', postId },
//         { id: 2, text: 'Nice!', postId }
//       ]);
//     }, 1000);
//   });
// };

// getUser(123)
//   .then(user => {
//     console.log('1. Usuario:', user.name);
//     return getPosts(user.id);
//   })
//   .then(posts => {
//     console.log('2. Posts:', posts.length);
//     return getComments(posts[0].id);
//   })
//   .then(comments => {
//     console.log('3. Comentarios:', comments.length);
//   });

console.log('');

// ============================================
// PASO 3: MANEJAR ERRORES EN LA CADENA
// ============================================
console.log('--- Paso 3: Manejo de Errores ---');

// Descomenta las siguientes líneas:
// const step1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Step 1: OK');
//       resolve('Data from step 1');
//     }, 500);
//   });
// };

// const step2 = data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldFail = Math.random() > 0.5;
//       if (shouldFail) {
//         reject(new Error('Step 2 failed'));
//       } else {
//         console.log('Step 2: OK');
//         resolve(`${data} + Step 2`);
//       }
//     }, 500);
//   });
// };

// const step3 = data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Step 3: OK');
//       resolve(`${data} + Step 3`);
//     }, 500);
//   });
// };

// step1()
//   .then(result => step2(result))
//   .then(result => step3(result))
//   .then(finalResult => {
//     console.log('✅ Success:', finalResult);
//   })
//   .catch(error => {
//     console.error('❌ Error en la cadena:', error.message);
//   });

console.log('');

// ============================================
// PASO 4: PASAR MÚLTIPLES VALORES
// ============================================
console.log('--- Paso 4: Múltiples Valores ---');

// Descomenta las siguientes líneas:
// const authenticate = credentials => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({ userId: 123, token: 'abc123' });
//     }, 500);
//   });
// };

// const fetchProfile = authData => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const profile = { name: 'Ana', email: 'ana@example.com' };
//       resolve({ ...authData, profile });
//     }, 500);
//   });
// };

// const fetchPreferences = userData => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const preferences = { theme: 'dark', language: 'es' };
//       resolve({ ...userData, preferences });
//     }, 500);
//   });
// };

// authenticate({ username: 'ana', password: '1234' })
//   .then(authData => {
//     console.log('Autenticado:', authData.token);
//     return fetchProfile(authData);
//   })
//   .then(userData => {
//     console.log('Perfil:', userData.profile.name);
//     return fetchPreferences(userData);
//   })
//   .then(completeData => {
//     console.log('Datos completos:', completeData);
//   });

console.log('');

// ============================================
// PASO 5: COMPARACIÓN CON CALLBACK HELL
// ============================================
console.log('--- Paso 5: Callbacks vs Promises ---');

// Descomenta las siguientes líneas:
// console.log('--- Con Callbacks (Callback Hell) ---');

// const getUserCb = (userId, callback) => {
//   setTimeout(() => callback({ id: userId }), 500);
// };

// const getPostsCb = (userId, callback) => {
//   setTimeout(() => callback([{ id: 1 }]), 500);
// };

// const getCommentsCb = (postId, callback) => {
//   setTimeout(() => callback([{ id: 1 }]), 500);
// };

// getUserCb(123, user => {
//   getPostsCb(user.id, posts => {
//     getCommentsCb(posts[0].id, comments => {
//       console.log('Callback result:', comments);
//     });
//   });
// });

// console.log('--- Con Promises (Código Plano) ---');

// const getUserPr = userId => Promise.resolve({ id: userId });
// const getPostsPr = userId => Promise.resolve([{ id: 1 }]);
// const getCommentsPr = postId => Promise.resolve([{ id: 1 }]);

// getUserPr(123)
//   .then(user => getPostsPr(user.id))
//   .then(posts => getCommentsPr(posts[0].id))
//   .then(comments => console.log('Promise result:', comments));

console.log('');

// ============================================
// PASO 6: RECUPERARSE DE ERRORES
// ============================================
console.log('--- Paso 6: Recuperación de Errores ---');

// Descomenta las siguientes líneas:
// const riskyOperation = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error('Operación falló'));
//     }, 500);
//   });
// };

// const fallbackOperation = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Usando fallback');
//     }, 500);
//   });
// };

// riskyOperation()
//   .catch(error => {
//     console.log('Error detectado, usando fallback...');
//     return fallbackOperation();
//   })
//   .then(result => {
//     console.log('Resultado final:', result);
//   })
//   .catch(error => {
//     console.error('Error irrecuperable:', error.message);
//   });

console.log('');
console.log('✅ Práctica 03 completada!');
