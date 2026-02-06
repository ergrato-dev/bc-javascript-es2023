// ============================================
// PRÁCTICA 01: Tu Primera Petición Fetch
// ============================================

const API_BASE = 'https://jsonplaceholder.typicode.com';

// ============================================
// PASO 1: Fetch Básico
// ============================================
console.log('--- Paso 1: Fetch Básico ---');

// Obtener un usuario por ID
// Descomenta las siguientes líneas:

// const fetchUser = async (userId) => {
//   const response = await fetch(`${API_BASE}/users/${userId}`);
//   const user = await response.json();
//   return user;
// };

// const user = await fetchUser(1);
// console.log('Usuario:', user.name);
// console.log('Email:', user.email);
// console.log('Ciudad:', user.address.city);

console.log('');

// ============================================
// PASO 2: Obtener Lista
// ============================================
console.log('--- Paso 2: Obtener Lista ---');

// Obtener lista de posts
// Descomenta las siguientes líneas:

// const fetchPosts = async () => {
//   const response = await fetch(`${API_BASE}/posts`);
//   const posts = await response.json();
//   return posts;
// };

// const posts = await fetchPosts();
// console.log('Total posts:', posts.length);
// console.log('Primer post:', posts[0].title);
// console.log('Último post:', posts.at(-1).title);

console.log('');

// ============================================
// PASO 3: URL con Parámetros
// ============================================
console.log('--- Paso 3: URL con Parámetros ---');

// Usar URLSearchParams para construir query strings
// Descomenta las siguientes líneas:

// const fetchPostsWithParams = async (options = {}) => {
//   const { limit = 10, userId } = options;
//
//   // Construir parámetros de búsqueda
//   const params = new URLSearchParams();
//   params.set('_limit', limit);
//   if (userId) params.set('userId', userId);
//
//   const url = `${API_BASE}/posts?${params}`;
//   console.log('URL:', url);
//
//   const response = await fetch(url);
//   return response.json();
// };

// // Obtener 5 posts
// const limitedPosts = await fetchPostsWithParams({ limit: 5 });
// console.log('Posts limitados:', limitedPosts.length);

// // Obtener posts de un usuario específico
// const userPosts = await fetchPostsWithParams({ userId: 1, limit: 3 });
// console.log('Posts del usuario 1:', userPosts.length);

console.log('');

// ============================================
// PASO 4: Fetch Múltiple
// ============================================
console.log('--- Paso 4: Fetch Múltiple ---');

// Combinar datos de diferentes endpoints
// Descomenta las siguientes líneas:

// const fetchUserWithPosts = async (userId) => {
//   // Obtener usuario y sus posts en paralelo
//   const [userResponse, postsResponse] = await Promise.all([
//     fetch(`${API_BASE}/users/${userId}`),
//     fetch(`${API_BASE}/posts?userId=${userId}`)
//   ]);
//
//   const user = await userResponse.json();
//   const userPosts = await postsResponse.json();
//
//   return {
//     ...user,
//     posts: userPosts
//   };
// };

// const userWithPosts = await fetchUserWithPosts(1);
// console.log('Usuario:', userWithPosts.name);
// console.log('Cantidad de posts:', userWithPosts.posts.length);
// console.log('Títulos:', userWithPosts.posts.slice(0, 3).map(p => p.title));

console.log('');

// ============================================
// PASO 5: Función Reutilizable
// ============================================
console.log('--- Paso 5: Función Reutilizable ---');

// Crear una función fetch genérica
// Descomenta las siguientes líneas:

// const api = {
//   baseUrl: API_BASE,
//
//   async get(endpoint, params = {}) {
//     const searchParams = new URLSearchParams(params);
//     const url = `${this.baseUrl}${endpoint}?${searchParams}`;
//
//     const response = await fetch(url);
//     return response.json();
//   }
// };

// // Usar la API reutilizable
// const users = await api.get('/users', { _limit: 3 });
// console.log('Usuarios:', users.map(u => u.name));

// const comments = await api.get('/comments', { postId: 1, _limit: 2 });
// console.log('Comentarios:', comments.map(c => c.email));

console.log('');
console.log('=== Fin de la práctica ===');
