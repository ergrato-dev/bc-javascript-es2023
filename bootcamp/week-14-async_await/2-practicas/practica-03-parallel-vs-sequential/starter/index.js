// ============================================
// PRÁCTICA 03: Ejecución Paralela vs Secuencial
// ============================================

// Helper para simular latencia
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Simuladores con diferentes latencias
const fetchUser = async () => {
  await delay(200);
  return { id: 1, name: 'Usuario' };
};

const fetchPosts = async (userId) => {
  await delay(150);
  return [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
};

const fetchFollowers = async (userId) => {
  await delay(180);
  return [{ id: 2, name: 'Seguidor 1' }];
};

const fetchProducts = async () => {
  await delay(200);
  return [{ id: 1, name: 'Producto 1' }];
};

const fetchOrders = async () => {
  await delay(250);
  return [{ id: 1, total: 100 }];
};

const fetchMayFail = async (shouldFail) => {
  await delay(100);
  if (shouldFail) throw new Error('Operación falló');
  return { success: true };
};

// ============================================
// PASO 1: Ejecución Secuencial
// ============================================
console.log('--- Paso 1: Ejecución Secuencial ---');

// Cuando cada operación depende de la anterior
// Descomenta las siguientes líneas:

// async function sequentialExample() {
//   console.time('Secuencial');
//
//   // Cada await espera al anterior
//   const user = await fetchUser();
//   const posts = await fetchPosts(user.id);
//   const followers = await fetchFollowers(user.id);
//
//   console.timeEnd('Secuencial');
//   console.log('Resultados:', { user: user.name, posts: posts.length, followers: followers.length });
// }

// sequentialExample();

console.log('');

// ============================================
// PASO 2: Ejecución Paralela
// ============================================
console.log('--- Paso 2: Ejecución Paralela ---');

// Cuando las operaciones son independientes
// Descomenta las siguientes líneas:

// async function parallelExample() {
//   console.time('Paralelo');
//
//   // Todas las operaciones inician al mismo tiempo
//   const [user, products, orders] = await Promise.all([
//     fetchUser(),
//     fetchProducts(),
//     fetchOrders()
//   ]);
//
//   console.timeEnd('Paralelo');
//   console.log('Resultados:', { user: user.name, products: products.length, orders: orders.length });
// }

// parallelExample();

console.log('');

// ============================================
// PASO 3: Comparación de Tiempos
// ============================================
console.log('--- Paso 3: Comparación de Tiempos ---');

// Medir la diferencia de rendimiento
// Descomenta las siguientes líneas:

// async function comparePerformance() {
//   // Secuencial
//   const startSeq = Date.now();
//   await fetchUser();
//   await fetchProducts();
//   await fetchOrders();
//   const timeSeq = Date.now() - startSeq;
//
//   // Paralelo
//   const startPar = Date.now();
//   await Promise.all([fetchUser(), fetchProducts(), fetchOrders()]);
//   const timePar = Date.now() - startPar;
//
//   console.log(`Secuencial: ${timeSeq}ms`);
//   console.log(`Paralelo: ${timePar}ms`);
//   console.log(`Mejora: ${Math.round((1 - timePar/timeSeq) * 100)}% más rápido`);
// }

// comparePerformance();

console.log('');

// ============================================
// PASO 4: Patrón Mixto
// ============================================
console.log('--- Paso 4: Patrón Mixto ---');

// Combinar secuencial y paralelo según dependencias
// Descomenta las siguientes líneas:

// async function mixedPattern() {
//   console.time('Mixto');
//
//   // Paso 1: Obtener usuario (requerido primero)
//   const user = await fetchUser();
//   console.log('Usuario obtenido:', user.name);
//
//   // Paso 2: Operaciones que dependen del usuario (en paralelo)
//   const [posts, followers] = await Promise.all([
//     fetchPosts(user.id),
//     fetchFollowers(user.id)
//   ]);
//
//   console.timeEnd('Mixto');
//   console.log('Posts:', posts.length, '| Followers:', followers.length);
// }

// mixedPattern();

console.log('');

// ============================================
// PASO 5: Promise.allSettled
// ============================================
console.log('--- Paso 5: Promise.allSettled ---');

// Cuando quieres todos los resultados aunque algunos fallen
// Descomenta las siguientes líneas:

// async function allSettledExample() {
//   const results = await Promise.allSettled([
//     fetchMayFail(false),  // Éxito
//     fetchMayFail(true),   // Fallo
//     fetchMayFail(false)   // Éxito
//   ]);
//
//   const successes = results.filter(r => r.status === 'fulfilled');
//   const failures = results.filter(r => r.status === 'rejected');
//
//   console.log('Éxitos:', successes.length);
//   console.log('Fallos:', failures.length);
//
//   // Procesar solo los éxitos
//   successes.forEach((r, i) => {
//     console.log(`Resultado ${i}:`, r.value);
//   });
// }

// allSettledExample();

console.log('');
console.log('=== Fin de la práctica ===');
