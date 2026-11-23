/**
 * 📘 Lab 01: Diseño de una API REST
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

import { startServer } from '../../shared/server.js';

const server = await startServer();

// Hace una petición y devuelve el estado, las cabeceras y el cuerpo ya leído.
// Es la función request del lab 02 de la semana 15, sin lanzar errores:
// aquí interesa ver cada respuesta, también las de error.
const call = async (method, path, data) => {
  const response = await fetch(`${server.url}${path}`, {
    method,
    headers: data === undefined ? {} : { 'Content-Type': 'application/json' },
    body: data === undefined ? undefined : JSON.stringify(data),
  });
  const body = response.status === 204 ? null : await response.json();
  return { status: response.status, headers: response.headers, body };
};

// ============================================
// PASO 1: Colecciones, elementos y recursos anidados
// ============================================
console.log('--- Paso 1: Recursos ---');

// Descomenta las siguientes líneas:
// const habitats = await call('GET', '/habitats');
// console.log('GET /habitats →', habitats.status, habitats.body.map(({ name }) => name));
// const reef = await call('GET', '/habitats/1');
// console.log('GET /habitats/1 →', reef.status, reef.body);
// const reefSpecies = await call('GET', '/habitats/1/species');
// console.log('GET /habitats/1/species →', reefSpecies.status, reefSpecies.body.length, 'especies');
// const missing = await call('GET', '/habitats/9/species');
// console.log('GET /habitats/9/species →', missing.status, missing.body);

console.log('');

// ============================================
// PASO 2: Crear devuelve 201 y Location
// ============================================
console.log('--- Paso 2: 201 y Location ---');

// Descomenta las siguientes líneas:
// const created = await call('POST', '/species', { name: 'Pulpo común', habitatId: 1 });
// console.log('POST /species →', created.status, created.body);
// const location = created.headers.get('location');
// console.log('Location:', location);
// const followed = await call('GET', location);
// console.log(`GET ${location} →`, followed.status, followed.body.name);

console.log('');

// ============================================
// PASO 3: 422 y 409, dos errores distintos
// ============================================
console.log('--- Paso 3: 422 y 409 ---');

// Descomenta las siguientes líneas:
// const invalid = await call('POST', '/species', { name: '', habitatId: 9 });
// console.log('Datos incompletos →', invalid.status, invalid.body);
// const duplicated = await call('POST', '/species', { name: 'pez payaso', habitatId: 1 });
// console.log('Nombre repetido →', duplicated.status, duplicated.body);

console.log('');

// ============================================
// PASO 4: PUT es idempotente; POST no
// ============================================
console.log('--- Paso 4: Idempotencia ---');

// countSpecies cuenta las especies que hay: el total llega en meta (lo verás en el lab 02).
// Descomenta las siguientes líneas:
// const countSpecies = async () => (await call('GET', '/species')).body.meta.total;
// console.log('Al empezar:', await countSpecies(), 'especies');
// for (const attempt of [1, 2]) {
//   const put = await call('PUT', '/species/11', { name: 'Pez luna gigante', habitatId: 2 });
//   console.log(`PUT intento ${attempt} →`, put.status, put.body);
// }
// console.log('Después de dos PUT:', await countSpecies(), 'especies');
// for (const attempt of [1, 2]) {
//   const post = await call('POST', '/species', { name: `Medusa ${attempt}`, habitatId: 2 });
//   console.log(`POST intento ${attempt} →`, post.status, 'id', post.body.id);
// }
// console.log('Después de dos POST:', await countSpecies(), 'especies');

console.log('');

// ============================================
// PASO 5: DELETE dos veces
// ============================================
console.log('--- Paso 5: DELETE repetido ---');

// Descomenta las siguientes líneas:
// const firstDelete = await call('DELETE', '/species/12');
// console.log('DELETE /species/12 →', firstDelete.status, firstDelete.body);
// const secondDelete = await call('DELETE', '/species/12');
// console.log('DELETE /species/12 →', secondDelete.status, secondDelete.body);

console.log('');

// ============================================
// PASO 6: 405 y la cabecera Allow
// ============================================
console.log('--- Paso 6: 405 ---');

// Descomenta las siguientes líneas:
// const notAllowed = await call('POST', '/species/1', { name: 'Otro' });
// console.log('POST /species/1 →', notAllowed.status, notAllowed.body);
// console.log('Allow:', notAllowed.headers.get('allow'));
// const unknown = await call('GET', '/fishes');
// console.log('GET /fishes →', unknown.status, unknown.body);

console.log('');

// ============================================
// PASO 7: Qué hace el cliente con cada estado
// ============================================
console.log('--- Paso 7: Una reacción por estado ---');

// Descomenta las siguientes líneas:
// const reactTo = ({ status, body }) => {
//   if (status === 201) return 'Mostrar la ficha nueva';
//   if (status >= 200 && status < 300) return 'Mostrar los datos';
//   if (status === 401) return 'Pedir que inicie sesión';
//   if (status === 403) return 'Avisar de que no tiene permiso';
//   if (status === 404) return 'Avisar de que no existe';
//   if (status === 409) return `Pedir otro valor: ${body.error}`;
//   if (status === 422) return `Marcar los campos: ${Object.keys(body.fields).join(', ')}`;
//   if (status >= 500) return 'Reintentar más tarde';
//   return `Error ${status}: ${body.error}`;
// };
//
// const cases = [
//   ['GET', '/species/1'],
//   ['POST', '/species', { name: 'Morena', habitatId: 1 }],
//   ['POST', '/species', { name: 'Morena', habitatId: 1 }],
//   ['PATCH', '/species/1', { name: '', habitatId: 7 }],
//   ['GET', '/species/99'],
//   ['GET', '/species/1?fail'],
// ];
// for (const [method, path, data] of cases) {
//   const response = await call(method, path, data);
//   console.log(`${method} ${path} → ${response.status}: ${reactTo(response)}`);
// }

await server.close();
console.log('\n✅ Lab completado.');
