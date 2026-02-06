// ============================================
// PRÁCTICA 02: Métodos HTTP
// ============================================

const API_BASE = 'https://jsonplaceholder.typicode.com';

// ============================================
// PASO 1: POST - Crear Recurso
// ============================================
console.log('--- Paso 1: POST - Crear Recurso ---');

// Crear un nuevo post
// Descomenta las siguientes líneas:

// const createPost = async (postData) => {
//   const response = await fetch(`${API_BASE}/posts`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   });
//
//   const newPost = await response.json();
//   return newPost;
// };

// const newPost = await createPost({
//   title: 'Mi primer post',
//   body: 'Este es el contenido del post',
//   userId: 1
// });

// console.log('Post creado:');
// console.log('  ID:', newPost.id);
// console.log('  Título:', newPost.title);

console.log('');

// ============================================
// PASO 2: PUT - Reemplazar Recurso
// ============================================
console.log('--- Paso 2: PUT - Reemplazar Recurso ---');

// PUT reemplaza TODO el recurso
// Descomenta las siguientes líneas:

// const replacePost = async (postId, postData) => {
//   const response = await fetch(`${API_BASE}/posts/${postId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   });
//
//   return response.json();
// };

// const replacedPost = await replacePost(1, {
//   id: 1,
//   title: 'Título completamente nuevo',
//   body: 'Contenido completamente nuevo',
//   userId: 1
// });

// console.log('Post reemplazado:');
// console.log('  Título:', replacedPost.title);
// console.log('  Body:', replacedPost.body);

console.log('');

// ============================================
// PASO 3: PATCH - Actualización Parcial
// ============================================
console.log('--- Paso 3: PATCH - Actualización Parcial ---');

// PATCH solo actualiza los campos enviados
// Descomenta las siguientes líneas:

// const updatePost = async (postId, updates) => {
//   const response = await fetch(`${API_BASE}/posts/${postId}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(updates)
//   });
//
//   return response.json();
// };

// // Solo actualizar el título
// const patchedPost = await updatePost(1, {
//   title: 'Solo cambio el título'
// });

// console.log('Post parcheado:');
// console.log('  Título:', patchedPost.title);
// console.log('  Body (sin cambios):', patchedPost.body);

console.log('');

// ============================================
// PASO 4: DELETE - Eliminar Recurso
// ============================================
console.log('--- Paso 4: DELETE - Eliminar Recurso ---');

// Eliminar un recurso
// Descomenta las siguientes líneas:

// const deletePost = async (postId) => {
//   const response = await fetch(`${API_BASE}/posts/${postId}`, {
//     method: 'DELETE'
//   });
//
//   // DELETE típicamente retorna 200 o 204
//   console.log('Status:', response.status);
//   console.log('OK:', response.ok);
//
//   return response.ok;
// };

// const deleted = await deletePost(1);
// console.log('¿Eliminado exitosamente?', deleted);

console.log('');

// ============================================
// PASO 5: CRUD Completo
// ============================================
console.log('--- Paso 5: CRUD Completo ---');

// Crear un servicio CRUD reutilizable
// Descomenta las siguientes líneas:

// const postsService = {
//   baseUrl: `${API_BASE}/posts`,
//
//   async create(data) {
//     const response = await fetch(this.baseUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     });
//     return response.json();
//   },
//
//   async read(id) {
//     const url = id ? `${this.baseUrl}/${id}` : this.baseUrl;
//     const response = await fetch(url);
//     return response.json();
//   },
//
//   async update(id, data) {
//     const response = await fetch(`${this.baseUrl}/${id}`, {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     });
//     return response.json();
//   },
//
//   async delete(id) {
//     const response = await fetch(`${this.baseUrl}/${id}`, {
//       method: 'DELETE'
//     });
//     return response.ok;
//   }
// };

// // Demostración CRUD
// console.log('CREATE:');
// const created = await postsService.create({ title: 'Nuevo', body: 'Contenido', userId: 1 });
// console.log('  Creado ID:', created.id);

// console.log('READ:');
// const post = await postsService.read(1);
// console.log('  Leído:', post.title);

// console.log('UPDATE:');
// const updated = await postsService.update(1, { title: 'Actualizado' });
// console.log('  Actualizado:', updated.title);

// console.log('DELETE:');
// const isDeleted = await postsService.delete(1);
// console.log('  Eliminado:', isDeleted);

console.log('');
console.log('=== Fin de la práctica ===');
