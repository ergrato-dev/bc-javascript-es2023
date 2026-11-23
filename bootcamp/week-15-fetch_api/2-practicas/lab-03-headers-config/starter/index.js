/**
 * 📘 Lab 03: Cabeceras y configuración
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

import { startServer } from '../../shared/server.js';

const server = await startServer();
const API = server.url;

// ============================================
// PASO 1: Leer las cabeceras de la respuesta
// ============================================
console.log('--- Paso 1: Cabeceras de la respuesta ---');

// Descomenta las siguientes líneas:
// const list = await fetch(`${API}/planets?limit=3`);
// console.log('content-type:', list.headers.get('Content-Type'));
// console.log('x-total-count:', list.headers.get('x-total-count'));
// console.log('¿Tiene ETag?', list.headers.has('etag'));
// console.log('Recibidos:', (await list.json()).length);

console.log('');

// ============================================
// PASO 2: El objeto Headers
// ============================================
console.log('--- Paso 2: new Headers() ---');

// Descomenta las siguientes líneas:
// const headers = new Headers({ Accept: 'application/json' });
// headers.set('X-Client', 'lab-03');
// headers.append('Accept', 'text/plain');
// console.log('accept:', headers.get('accept'));
// console.log('¿x-client?', headers.has('x-client'));
// headers.delete('X-Client');
// console.log([...headers]);

console.log('');

// ============================================
// PASO 3: Ver qué envía fetch
// ============================================
console.log('--- Paso 3: /echo ---');

// Descomenta las siguientes líneas:
// const echo = await fetch(`${API}/echo`, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json', 'X-Client': 'lab-03' },
//   body: JSON.stringify({ planet: 'Venus' }),
// });
// console.log(await echo.json());

console.log('');

// ============================================
// PASO 4: Autenticación con Authorization
// ============================================
console.log('--- Paso 4: Authorization ---');

// Descomenta las siguientes líneas:
// const anonymous = await fetch(`${API}/private`);
// console.log('Sin token:', anonymous.status, (await anonymous.json()).error);
//
// const withToken = await fetch(`${API}/private`, {
//   headers: { Authorization: `Bearer ${server.token}` },
// });
// console.log('Con token:', withToken.status, (await withToken.json()).message);

console.log('');

// ============================================
// PASO 5: Request y clone()
// ============================================
console.log('--- Paso 5: Request y clone() ---');

// Descomenta las siguientes líneas:
// const saved = new Request(`${API}/planets/7`, { headers: { Accept: 'application/json' } });
// console.log(saved.method, new URL(saved.url).pathname, saved.headers.get('accept'));
//
// const uranus = await fetch(saved);
// const copy = uranus.clone();
// console.log('json():', (await uranus.json()).name);
// console.log('text() de la copia:', await copy.text());

console.log('');

// ============================================
// PASO 6: Cancelar con AbortController
// ============================================
console.log('--- Paso 6: AbortController ---');

// Descomenta las siguientes líneas:
// const controller = new AbortController();
// setTimeout(() => controller.abort(), 100);
// try {
//   await fetch(`${API}/slow?ms=500`, { signal: controller.signal });
// } catch (error) {
//   console.log(`❌ ${error.name}: ${error.message}`);
// }
//
// try {
//   await fetch(`${API}/slow?ms=500`, { signal: AbortSignal.timeout(100) });
// } catch (error) {
//   console.log(`⏱️ ${error.name}: ${error.message}`);
// }
//
// const fast = await fetch(`${API}/slow?ms=50`, { signal: AbortSignal.timeout(100) });
// console.log('✅', (await fast.json()).message);

console.log('');

// ============================================
// PASO 7: Un cliente con opciones por defecto
// ============================================
console.log('--- Paso 7: createClient ---');

// Descomenta las siguientes líneas:
// const createClient = (baseUrl, { token, timeoutMs = 1000 } = {}) => async (path, options = {}) => {
//   const headers = new Headers(options.headers);
//   headers.set('Accept', 'application/json');
//   if (token) headers.set('Authorization', `Bearer ${token}`);
//   const res = await fetch(`${baseUrl}${path}`, {
//     ...options,
//     headers,
//     signal: AbortSignal.timeout(timeoutMs),
//   });
//   return { status: res.status, data: await res.json() };
// };
//
// const api = createClient(API, { token: server.token });
// console.log(await api('/private'));
// console.log(await api('/echo', { headers: { 'X-Client': 'lab-03' } }));

console.log('');
console.log('✅ Lab completado.');

await server.close();
