/**
 * 📘 Lab 04: Estados de carga
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 *
 * En una página, render() pintaría el estado en el DOM; aquí lo imprime,
 * para ver cada cambio de estado en la terminal.
 */

import { startServer } from '../../shared/server.js';

const server = await startServer();
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Pide una página de especies. `signal` es opcional y sirve para cancelarla (paso 6).
const fetchSpecies = async (params = {}, signal) => {
  const url = new URL('/species', server.url);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
  const response = await fetch(url, { signal });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error);
  return body.data;
};

// El estado de la lista: qué se está haciendo, qué datos hay y qué error ha ocurrido.
let state = { status: 'idle', data: [], error: null };

const render = () => {
  const names = state.data.map(({ name }) => name).join(', ') || '—';
  console.log(`  [${state.status}] datos: ${names}${state.error ? ` · error: ${state.error}` : ''}`);
};

// Cambia solo las claves de `changes` y vuelve a pintar.
const setState = (changes) => {
  state = { ...state, ...changes };
  render();
};

// ============================================
// PASO 1: idle → loading → success
// ============================================
console.log('--- Paso 1: Un ciclo de carga ---');

// Descomenta las siguientes líneas:
// const load = async (params) => {
//   setState({ status: 'loading', error: null });
//   try {
//     const data = await fetchSpecies(params);
//     setState({ status: data.length === 0 ? 'empty' : 'success', data });
//   } catch (error) {
//     setState({ status: 'error', error: error.message });
//   }
// };
//
// render();
// await load({ habitat: 3 });

console.log('');

// ============================================
// PASO 2: Una lista vacía no es un error
// ============================================
console.log('--- Paso 2: empty ---');

// Descomenta las siguientes líneas:
// await load({ search: 'tiburón tigre' });

console.log('');

// ============================================
// PASO 3: El error conserva los datos anteriores
// ============================================
console.log('--- Paso 3: error ---');

// Descomenta las siguientes líneas:
// await load({ habitat: 2, perPage: 2 });
// await load({ habitat: 2, fail: '' });

console.log('');

// ============================================
// PASO 4: Ignorar el segundo clic mientras carga
// ============================================
console.log('--- Paso 4: Doble clic ---');

// Descomenta las siguientes líneas:
// let requests = 0;
// const loadOnce = async (params) => {
//   if (state.status === 'loading') {
//     console.log('  (ya está cargando: se ignora)');
//     return;
//   }
//   requests += 1;
//   await load(params);
// };
// await Promise.all([loadOnce({ habitat: 1, perPage: 2 }), loadOnce({ habitat: 1, perPage: 2 })]);
// console.log('  peticiones:', requests);

console.log('');

// ============================================
// PASO 5: Dos búsquedas que llegan en otro orden
// ============================================
console.log('--- Paso 5: Condición de carrera ---');

// Descomenta las siguientes líneas:
// const search = async (text, delay) => {
//   const data = await fetchSpecies({ search: text, delay });
//   console.log(`  llega la respuesta de "${text}"`);
//   setState({ status: 'success', data });
// };
// await Promise.all([search('pe', 300), search('pez l', 50)]);
// console.log('  El campo de búsqueda dice "pez l", pero la lista es la de "pe"');
// await wait(50);

console.log('');

// ============================================
// PASO 6: Cancelar la búsqueda anterior
// ============================================
console.log('--- Paso 6: AbortController ---');

// Descomenta las siguientes líneas:
// let controller = null;
// const searchLatest = async (text, delay) => {
//   controller?.abort();
//   controller = new AbortController();
//   try {
//     const data = await fetchSpecies({ search: text, delay }, controller.signal);
//     console.log(`  llega la respuesta de "${text}"`);
//     setState({ status: 'success', data });
//   } catch (error) {
//     if (error.name === 'AbortError') return console.log(`  "${text}" cancelada: ya no hace falta`);
//     setState({ status: 'error', error: error.message });
//   }
// };
// await Promise.all([searchLatest('pe', 300), searchLatest('pez l', 50)]);
// await wait(50);

console.log('');

// ============================================
// PASO 7: Borrado optimista con vuelta atrás
// ============================================
console.log('--- Paso 7: Actualización optimista ---');

// Descomenta las siguientes líneas:
// const removeOptimistic = async (id, { fail = false } = {}) => {
//   const previous = state.data;
//   setState({ data: previous.filter((item) => item.id !== id), error: null });
//   const response = await fetch(`${server.url}/species/${id}${fail ? '?fail' : ''}`, { method: 'DELETE' });
//   if (!response.ok) {
//     setState({ data: previous, error: `No se pudo borrar (${response.status}); se recupera la lista` });
//   }
// };
// await load({ habitat: 3 });
// console.log('  Borrar Arapaima (id 7) con el servidor bien:');
// await removeOptimistic(7);
// console.log('  Borrar Pez disco (id 10) con el servidor caído:');
// await removeOptimistic(10, { fail: true });

await server.close();
console.log('\n✅ Lab completado.');
