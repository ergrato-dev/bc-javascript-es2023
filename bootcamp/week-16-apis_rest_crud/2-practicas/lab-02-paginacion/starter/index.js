/**
 * 📘 Lab 02: Paginación, filtros y orden
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

import { startServer } from '../../shared/server.js';

const server = await startServer();
let requests = 0;

// Pide una ruta con parámetros y devuelve el cuerpo JSON. Cuenta las peticiones en `requests`.
const getJson = async (path, params = {}) => {
  const url = new URL(path, server.url);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
  requests += 1;
  const response = await fetch(url);
  const body = await response.json();
  if (!response.ok) throw new Error(`${response.status}: ${body.error}`);
  return { body, headers: response.headers };
};

const names = (items) => items.map(({ name }) => name).join(', ');

// ============================================
// PASO 1: Una página y sus metadatos
// ============================================
console.log('--- Paso 1: Una página ---');

// Descomenta las siguientes líneas:
// const { body: first } = await getJson('/species', { perPage: 4 });
// console.log('meta:', first.meta);
// console.log('data:', names(first.data));

console.log('');

// ============================================
// PASO 2: Recorrer todas las páginas
// ============================================
console.log('--- Paso 2: Todas las páginas ---');

// Descomenta las siguientes líneas:
// let page = 1;
// let totalPages = 1;
// while (page <= totalPages) {
//   const { body } = await getJson('/species', { page, perPage: 5 });
//   totalPages = body.meta.totalPages;
//   console.log(`Página ${page} de ${totalPages}:`, names(body.data));
//   page += 1;
// }

console.log('');

// ============================================
// PASO 3: Filtrar y ordenar en el servidor
// ============================================
console.log('--- Paso 3: Filtros y orden ---');

// Descomenta las siguientes líneas:
// const { body: reef } = await getJson('/species', { habitat: 1, sort: '-name' });
// console.log('Arrecife, de la Z a la A:', names(reef.data));
// const { body: fishes } = await getJson('/species', { search: 'pez', sort: 'name', perPage: 3 });
// console.log(`"pez" por nombre: ${fishes.meta.total} en total, ${fishes.meta.totalPages} páginas`);
// console.log('Primera página:', names(fishes.data));

console.log('');

// ============================================
// PASO 4: La cabecera Link
// ============================================
console.log('--- Paso 4: Link ---');

// Descomenta las siguientes líneas:
// const parseLinks = (header) =>
//   Object.fromEntries(Array.from((header ?? '').matchAll(/<([^>]+)>; rel="(\w+)"/g), ([, url, rel]) => [rel, url]));
// const { headers: second } = await getJson('/species', { page: 2, perPage: 5 });
// console.log('Link:', second.get('link'));
// console.log(parseLinks(second.get('link')));
// const { headers: last } = await getJson('/species', { page: 3, perPage: 5 });
// console.log('Última página:', parseLinks(last.get('link')));

console.log('');

// ============================================
// PASO 5: Páginas que no existen
// ============================================
console.log('--- Paso 5: Fuera de rango ---');

// Descomenta las siguientes líneas:
// const { body: beyond } = await getJson('/species', { page: 9 });
// console.log('page=9 →', beyond.data, beyond.meta);
// try {
//   await getJson('/species', { page: 0 });
// } catch (error) {
//   console.log('page=0 →', error.message);
// }

console.log('');

// ============================================
// PASO 6: Un generador que pide las páginas cuando hacen falta
// ============================================
console.log('--- Paso 6: Generador de páginas ---');

// Descomenta las siguientes líneas:
// async function* allSpecies(params = {}) {
//   let page = 1;
//   let totalPages = 1;
//   while (page <= totalPages) {
//     const { body } = await getJson('/species', { ...params, page, perPage: 5 });
//     totalPages = body.meta.totalPages;
//     yield* body.data;
//     page += 1;
//   }
// }
//
// requests = 0;
// const everything = await Array.fromAsync(allSpecies());
// console.log(`${everything.length} especies · peticiones: ${requests}`);
// requests = 0;
// for await (const item of allSpecies({ sort: 'name' })) {
//   if (item.name.startsWith('C')) {
//     console.log(`Primera con C: ${item.name} · peticiones: ${requests}`);
//     break;
//   }
// }

console.log('');

// ============================================
// PASO 7: Una página se descoloca si cambian los datos
// ============================================
console.log('--- Paso 7: Offset y datos nuevos ---');

// Descomenta las siguientes líneas:
// const { body: before } = await getJson('/species', { sort: 'name', perPage: 4 });
// console.log('Página 1:', names(before.data));
// await fetch(`${server.url}/species`, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ name: 'Anguila', habitatId: 3 }),
// });
// console.log('(otra persona crea «Anguila» mientras tanto)');
// const { body: after } = await getJson('/species', { sort: 'name', perPage: 4, page: 2 });
// console.log('Página 2:', names(after.data));

console.log('');

// ============================================
// PASO 8: Paginación por cursor
// ============================================
console.log('--- Paso 8: Cursor ---');

// Descomenta las siguientes líneas:
// let cursor;
// do {
//   const { body } = await getJson('/feedings', cursor ? { cursor, limit: 3 } : { limit: 3 });
//   console.log(body.data.map(({ time, tank }) => `${time} ${tank}`).join(' · '), '→ nextCursor:', body.nextCursor);
//   cursor = body.nextCursor;
// } while (cursor);

await server.close();
console.log('\n✅ Lab completado.');
