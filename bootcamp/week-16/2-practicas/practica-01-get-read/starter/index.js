// ============================================
// PRÁCTICA 01: Lectura de Recursos con GET
// ============================================

const API_BASE = 'https://jsonplaceholder.typicode.com';

// ============================================
// PASO 1: GET de colección
// ============================================
console.log('--- Paso 1: GET de colección ---');

// Descomenta las siguientes líneas:
// const fetchItems = async () => {
//   const response = await fetch(`${API_BASE}/posts`);
//   return response.json();
// };
//
// const items = await fetchItems();
// console.log('Total:', items.length);

console.log('');

// ============================================
// PASO 2: GET por ID
// ============================================
console.log('--- Paso 2: GET por ID ---');

// Descomenta las siguientes líneas:
// const fetchById = async id => {
//   const response = await fetch(`${API_BASE}/posts/${id}`);
//   return response.json();
// };
//
// const item = await fetchById(3);
// console.log('Título:', item.title);

console.log('');

// ============================================
// PASO 3: GET con query params
// ============================================
console.log('--- Paso 3: GET con query params ---');

// Descomenta las siguientes líneas:
// const fetchWithParams = async ({ page = 1, limit = 5 } = {}) => {
//   const params = new URLSearchParams({ _page: page, _limit: limit });
//   const response = await fetch(`${API_BASE}/posts?${params}`);
//   return response.json();
// };
//
// const pageOne = await fetchWithParams({ page: 1, limit: 3 });
// console.log('Resultados página 1:', pageOne.length);

console.log('');

// ============================================
// PASO 4: Función reusable
// ============================================
console.log('--- Paso 4: Función reusable ---');

// Descomenta las siguientes líneas:
// const apiRead = async (endpoint, params = {}) => {
//   const query = new URLSearchParams(params);
//   const url = `${API_BASE}${endpoint}?${query}`;
//   const response = await fetch(url);
//   return response.json();
// };
//
// const comments = await apiRead('/comments', { postId: 1, _limit: 2 });
// console.log('Comentarios:', comments.map(comment => comment.email));

console.log('');
console.log('=== Fin de la práctica ===');
