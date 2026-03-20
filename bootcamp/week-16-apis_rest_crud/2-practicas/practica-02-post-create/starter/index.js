// ============================================
// PRÁCTICA 02: Creación de Recursos con POST
// ============================================

const API_BASE = 'https://jsonplaceholder.typicode.com';

// ============================================
// PASO 1: Construir payload
// ============================================
console.log('--- Paso 1: Construir payload ---');

// Descomenta las siguientes líneas:
// const newItem = {
//   title: 'Elemento creado desde práctica',
//   body: 'Contenido de ejemplo',
//   userId: 7
// };
//
// console.log('Payload:', newItem);

console.log('');

// ============================================
// PASO 2: Enviar POST con headers
// ============================================
console.log('--- Paso 2: Enviar POST ---');

// Descomenta las siguientes líneas:
// const createItem = async payload => {
//   const response = await fetch(`${API_BASE}/posts`, {
//     method: 'POST',
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
// const created = await createItem(newItem);
// console.log('Creado con ID:', created.id);

console.log('');

// ============================================
// PASO 3: Validar antes de enviar
// ============================================
console.log('--- Paso 3: Validar payload ---');

// Descomenta las siguientes líneas:
// const validatePayload = payload => {
//   if (!payload.title?.trim()) {
//     throw new Error('El campo title es obligatorio');
//   }
//
//   if (!payload.body?.trim()) {
//     throw new Error('El campo body es obligatorio');
//   }
// };
//
// validatePayload(newItem);
// console.log('Payload válido');

console.log('');

// ============================================
// PASO 4: Función reusable create
// ============================================
console.log('--- Paso 4: Función reusable create ---');

// Descomenta las siguientes líneas:
// const apiCreate = async (endpoint, payload) => {
//   validatePayload(payload);
//
//   const response = await fetch(`${API_BASE}${endpoint}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(payload)
//   });
//
//   if (!response.ok) {
//     throw new Error(`HTTP ${response.status}`);
//   }
//
//   return response.json();
// };
//
// const item = await apiCreate('/posts', newItem);
// console.log('Resultado reusable:', item.id);

console.log('');
console.log('=== Fin de la práctica ===');
