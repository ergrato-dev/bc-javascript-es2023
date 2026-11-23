/**
 * 📘 Lab 01: Tu primera petición
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

import { startServer } from '../../shared/server.js';

// Arranca la API de prácticas en tu equipo. API vale algo como http://127.0.0.1:41234
const server = await startServer();
const API = server.url;

// ============================================
// PASO 1: fetch devuelve una Response
// ============================================
console.log('--- Paso 1: La respuesta ---');

// Descomenta las siguientes líneas:
// const response = await fetch(`${API}/planets/3`);
// console.log('status:', response.status, response.statusText);
// console.log('ok:', response.ok);
// console.log('Content-Type:', response.headers.get('content-type'));

console.log('');

// ============================================
// PASO 2: Leer el cuerpo como JSON
// ============================================
console.log('--- Paso 2: response.json() ---');

// Descomenta las siguientes líneas:
// const earthResponse = await fetch(`${API}/planets/3`);
// const earth = await earthResponse.json();
// console.log(earth);
// console.log(`${earth.name} tiene ${earth.moons} luna`);

console.log('');

// ============================================
// PASO 3: Una lista y parámetros en la URL
// ============================================
console.log('--- Paso 3: URLSearchParams ---');

// Descomenta las siguientes líneas:
// const url = new URL('/planets', API);
// url.searchParams.set('type', 'gaseoso');
// url.searchParams.set('limit', '1');
// console.log('Ruta pedida:', url.pathname + url.search);
//
// const listResponse = await fetch(url);
// const giants = await listResponse.json();
// console.log(giants.map(({ name }) => name));

console.log('');

// ============================================
// PASO 4: text() y el cuerpo se lee una sola vez
// ============================================
console.log('--- Paso 4: text() ---');

// Descomenta las siguientes líneas:
// const textResponse = await fetch(`${API}/text`);
// console.log('Texto:', await textResponse.text());
//
// try {
//   await textResponse.text();
// } catch (error) {
//   console.log(`❌ ${error.name}: ${error.message}`);
// }

console.log('');

// ============================================
// PASO 5: Varias peticiones a la vez
// ============================================
console.log('--- Paso 5: Promise.all ---');

// Descomenta las siguientes líneas:
// const ids = [5, 6, 8];
// const responses = await Promise.all(ids.map((id) => fetch(`${API}/planets/${id}`)));
// const planets = await Promise.all(responses.map((item) => item.json()));
// for (const { name, moons } of planets) {
//   console.log(`${name}: ${moons} lunas`);
// }

console.log('');

// ============================================
// PASO 6: Un 404 no es un error para fetch
// ============================================
console.log('--- Paso 6: 404 ---');

// Descomenta las siguientes líneas:
// const missing = await fetch(`${API}/planets/9`);
// console.log('La promesa se ha cumplido. status:', missing.status, '· ok:', missing.ok);
// console.log('Cuerpo:', await missing.json());

console.log('');

// ============================================
// PASO 7: Una función reutilizable
// ============================================
console.log('--- Paso 7: getJson ---');

// Descomenta las siguientes líneas:
// const getJson = async (path) => {
//   const res = await fetch(`${API}${path}`);
//   if (!res.ok) {
//     throw new Error(`HTTP ${res.status} en ${path}`);
//   }
//   return res.json();
// };
//
// const mars = await getJson('/planets/4');
// console.log('✅', mars.name);
//
// try {
//   await getJson('/planets/9');
// } catch (error) {
//   console.log('❌', error.message);
// }

console.log('');
console.log('✅ Lab completado.');

// Apaga la API para que Node termine.
await server.close();
