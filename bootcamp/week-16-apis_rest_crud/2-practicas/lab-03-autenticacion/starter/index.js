/**
 * 📘 Lab 03: Autenticación con token
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

import { startServer } from '../../shared/server.js';

const server = await startServer();
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Hace una petición JSON y devuelve el estado y el cuerpo. `token` es opcional.
const call = async (method, path, { data, token, baseUrl = server.url } = {}) => {
  const headers = {};
  if (data !== undefined) headers['Content-Type'] = 'application/json';
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(`${baseUrl}${path}`, {
    method,
    headers,
    body: data === undefined ? undefined : JSON.stringify(data),
  });
  const body = response.status === 204 ? null : await response.json();
  return { status: response.status, headers: response.headers, body };
};

// ============================================
// PASO 1: Sin token, 401
// ============================================
console.log('--- Paso 1: Sin token ---');

// Descomenta las siguientes líneas:
// const anonymous = await call('GET', '/me');
// console.log('GET /me →', anonymous.status, anonymous.body);
// console.log('WWW-Authenticate:', anonymous.headers.get('www-authenticate'));
// const publicData = await call('GET', '/habitats/1');
// console.log('GET /habitats/1 →', publicData.status, '(ruta pública)');

console.log('');

// ============================================
// PASO 2: Iniciar sesión
// ============================================
console.log('--- Paso 2: POST /login ---');

// Descomenta las siguientes líneas:
// const wrong = await call('POST', '/login', { data: { user: 'ana', password: 'arena' } });
// console.log('Contraseña mal →', wrong.status, wrong.body);
// const login = await call('POST', '/login', { data: { user: 'ana', password: 'coral' } });
// console.log('Contraseña bien →', login.status, login.body);
// const anaToken = login.body.token;

console.log('');

// ============================================
// PASO 3: El token en la cabecera Authorization
// ============================================
console.log('--- Paso 3: Authorization ---');

// Descomenta las siguientes líneas:
// const me = await call('GET', '/me', { token: anaToken });
// console.log('GET /me →', me.status, me.body);
// const created = await call('POST', '/notes', { token: anaToken, data: { text: 'Limpiar el filtro del arrecife' } });
// console.log('POST /notes →', created.status, created.body);

console.log('');

// ============================================
// PASO 4: 401 no es lo mismo que 403
// ============================================
console.log('--- Paso 4: 401 y 403 ---');

// Descomenta las siguientes líneas:
// const forbidden = await call('DELETE', '/notes/1', { token: anaToken });
// console.log('ana borra la nota 1 →', forbidden.status, forbidden.body);
// const { body: admin } = await call('POST', '/login', { data: { user: 'luis', password: 'marea' } });
// const allowed = await call('DELETE', '/notes/1', { token: admin.token });
// console.log(`${admin.user} (${admin.role}) borra la nota 1 →`, allowed.status);

console.log('');

// ============================================
// PASO 5: Cabeceras mal escritas
// ============================================
console.log('--- Paso 5: Cabecera mal escrita ---');

// Descomenta las siguientes líneas:
// const noBearer = await fetch(`${server.url}/me`, { headers: { Authorization: anaToken } });
// console.log('Sin "Bearer " →', noBearer.status, await noBearer.json());
// const invented = await call('GET', '/me', { token: 'tok-99-ana' });
// console.log('Token inventado →', invented.status, invented.body);

console.log('');

// ============================================
// PASO 6: Los tokens caducan
// ============================================
console.log('--- Paso 6: Caducidad ---');

// Descomenta las siguientes líneas:
// const shortServer = await startServer({ tokenTtlMs: 100 });
// const { body: short } = await call('POST', '/login', { baseUrl: shortServer.url, data: { user: 'ana', password: 'coral' } });
// console.log('expiresIn:', short.expiresIn, 's');
// console.log('Enseguida →', (await call('GET', '/me', { baseUrl: shortServer.url, token: short.token })).status);
// await wait(150);
// const expired = await call('GET', '/me', { baseUrl: shortServer.url, token: short.token });
// console.log('A los 150 ms →', expired.status, expired.body);
// await shortServer.close();

console.log('');

// ============================================
// PASO 7: Un cliente que guarda la sesión
// ============================================
console.log('--- Paso 7: Cliente con sesión ---');

// Descomenta las siguientes líneas:
// const createClient = (baseUrl, { onUnauthorized }) => {
//   let token = null;
//   const request = async (method, path, data) => {
//     const response = await call(method, path, { baseUrl, data, token });
//     if (response.status === 401) {
//       token = null;
//       onUnauthorized(response.body.error);
//     }
//     if (response.status >= 400) throw new Error(`${response.status}: ${response.body.error}`);
//     return response.body;
//   };
//   return {
//     isLoggedIn: () => token !== null,
//     login: async (user, password) => {
//       const session = await request('POST', '/login', { user, password });
//       token = session.token;
//       return session;
//     },
//     logout: async () => {
//       await request('POST', '/logout');
//       token = null;
//     },
//     request,
//   };
// };
//
// const client = createClient(server.url, {
//   onUnauthorized: (reason) => console.log(`  (onUnauthorized: ${reason}; vuelve a pedir el inicio de sesión)`),
// });
// const session = await client.login('luis', 'marea');
// console.log('Sesión de', session.user, '· isLoggedIn:', client.isLoggedIn());
// const notes = await client.request('GET', '/notes');
// console.log('Notas:', notes.map(({ text }) => text));
// const oldToken = session.token;
// await client.logout();
// console.log('Después de logout · isLoggedIn:', client.isLoggedIn());
// console.log('El token viejo →', (await call('GET', '/me', { token: oldToken })).status);
// try {
//   await client.request('GET', '/notes');
// } catch (error) {
//   console.log('❌', error.message);
// }

await server.close();
console.log('\n✅ Lab completado.');
