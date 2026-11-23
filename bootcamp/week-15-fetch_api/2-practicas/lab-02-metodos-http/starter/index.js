/**
 * 📘 Lab 02: Métodos HTTP
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

import { startServer } from '../../shared/server.js';

const server = await startServer();
const API = server.url;

// Cabecera que dice al servidor que el cuerpo va en JSON.
const JSON_HEADERS = { 'Content-Type': 'application/json' };

// ============================================
// PASO 1: POST para crear
// ============================================
console.log('--- Paso 1: POST ---');

// Descomenta las siguientes líneas:
// const created = await fetch(`${API}/planets`, {
//   method: 'POST',
//   headers: JSON_HEADERS,
//   body: JSON.stringify({ name: 'Plutón', type: 'enano', moons: 5 }),
// });
// console.log('status:', created.status, created.statusText);
// console.log('Location:', created.headers.get('location'));
// console.log(await created.json());

console.log('');

// ============================================
// PASO 2: Olvidar JSON.stringify
// ============================================
console.log('--- Paso 2: Sin JSON.stringify ---');

// Descomenta las siguientes líneas:
// const wrong = await fetch(`${API}/planets`, {
//   method: 'POST',
//   headers: JSON_HEADERS,
//   body: { name: 'Ceres' },
// });
// console.log('status:', wrong.status);
// console.log(await wrong.json());

console.log('');

// ============================================
// PASO 3: PUT para reemplazar
// ============================================
console.log('--- Paso 3: PUT ---');

// Descomenta las siguientes líneas:
// const replaced = await fetch(`${API}/planets/9`, {
//   method: 'PUT',
//   headers: JSON_HEADERS,
//   body: JSON.stringify({ name: 'Plutón' }),
// });
// console.log('status:', replaced.status);
// console.log(await replaced.json());

console.log('');

// ============================================
// PASO 4: PATCH para cambiar solo un campo
// ============================================
console.log('--- Paso 4: PATCH ---');

// Descomenta las siguientes líneas:
// const patched = await fetch(`${API}/planets/4`, {
//   method: 'PATCH',
//   headers: JSON_HEADERS,
//   body: JSON.stringify({ moons: 3 }),
// });
// console.log('status:', patched.status);
// console.log(await patched.json());

console.log('');

// ============================================
// PASO 5: DELETE y una respuesta sin cuerpo
// ============================================
console.log('--- Paso 5: DELETE ---');

// Descomenta las siguientes líneas:
// const deleted = await fetch(`${API}/planets/9`, { method: 'DELETE' });
// console.log('status:', deleted.status, deleted.statusText);
// console.log('Cuerpo:', JSON.stringify(await deleted.text()));
//
// const after = await fetch(`${API}/planets/9`);
// console.log('Después, GET /planets/9 →', after.status);

console.log('');

// ============================================
// PASO 6: Leer el error que manda el servidor
// ============================================
console.log('--- Paso 6: 400 ---');

// Descomenta las siguientes líneas:
// const invalid = await fetch(`${API}/planets`, {
//   method: 'POST',
//   headers: JSON_HEADERS,
//   body: JSON.stringify({ type: 'enano' }),
// });
// if (!invalid.ok) {
//   const { error } = await invalid.json();
//   console.log(`❌ ${invalid.status}: ${error}`);
// }

console.log('');

// ============================================
// PASO 7: Una función para todos los métodos
// ============================================
console.log('--- Paso 7: request ---');

// Descomenta las siguientes líneas:
// const request = async (method, path, data) => {
//   const options = { method };
//   if (data !== undefined) {
//     options.headers = JSON_HEADERS;
//     options.body = JSON.stringify(data);
//   }
//   const res = await fetch(`${API}${path}`, options);
//   if (!res.ok) {
//     const { error } = await res.json();
//     throw new Error(`${res.status}: ${error}`);
//   }
//   return res.status === 204 ? null : res.json();
// };
//
// const eris = await request('POST', '/planets', { name: 'Eris', type: 'enano', moons: 1 });
// console.log('Creado:', eris);
// console.log('Cambiado:', await request('PATCH', `/planets/${eris.id}`, { moons: 2 }));
// console.log('Borrado:', await request('DELETE', `/planets/${eris.id}`));
//
// try {
//   await request('GET', `/planets/${eris.id}`);
// } catch (error) {
//   console.log('❌', error.message);
// }

console.log('');
console.log('✅ Lab completado.');

await server.close();
