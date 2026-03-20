// ============================================
// PRÁCTICA 03: Actualización con PUT y PATCH
// ============================================

const API_BASE = 'https://jsonplaceholder.typicode.com';

// ============================================
// PASO 1: PUT (reemplazo completo)
// ============================================
console.log('--- Paso 1: PUT completo ---');

// Descomenta las siguientes líneas:
// const replaceItem = async (id, payload) => {
//   const response = await fetch(`${API_BASE}/posts/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(payload)
//   });
//
//   return response.json();
// };
//
// const replaced = await replaceItem(5, {
//   id: 5,
//   title: 'Reemplazo completo',
//   body: 'Body reemplazado',
//   userId: 1
// });
// console.log('PUT:', replaced.title);

console.log('');

// ============================================
// PASO 2: PATCH (actualización parcial)
// ============================================
console.log('--- Paso 2: PATCH parcial ---');

// Descomenta las siguientes líneas:
// const patchItem = async (id, partialPayload) => {
//   const response = await fetch(`${API_BASE}/posts/${id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(partialPayload)
//   });
//
//   return response.json();
// };
//
// const patched = await patchItem(5, { title: 'Título actualizado parcialmente' });
// console.log('PATCH:', patched.title);

console.log('');

// ============================================
// PASO 3: Verificar respuesta
// ============================================
console.log('--- Paso 3: Verificar response.ok ---');

// Descomenta las siguientes líneas:
// const safeUpdate = async (id, method, payload) => {
//   const response = await fetch(`${API_BASE}/posts/${id}`, {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(payload)
//   });
//
//   if (!response.ok) {
//     throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//   }
//
//   return response.json();
// };
//
// const updated = await safeUpdate(5, 'PATCH', { body: 'Texto actualizado' });
// console.log('safeUpdate:', updated.body);

console.log('');

// ============================================
// PASO 4: Función genérica update
// ============================================
console.log('--- Paso 4: Función genérica update ---');

// Descomenta las siguientes líneas:
// const apiUpdate = async ({ endpoint, id, payload, partial = true }) => {
//   const method = partial ? 'PATCH' : 'PUT';
//   return safeUpdate(id, method, payload);
// };
//
// const result = await apiUpdate({
//   endpoint: '/posts',
//   id: 7,
//   payload: { title: 'Actualización genérica' },
//   partial: true
// });
//
// console.log('Resultado genérico:', result.title);

console.log('');
console.log('=== Fin de la práctica ===');
