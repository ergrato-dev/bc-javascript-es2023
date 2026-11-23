/**
 * 📘 Lab 04: Errores con fetch
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

import { startServer } from '../../shared/server.js';

const server = await startServer();
const API = server.url;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Error de una respuesta HTTP que no es 2xx. Guarda el código de estado.
class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
  }
}

// ============================================
// PASO 1: Error de red
// ============================================
console.log('--- Paso 1: Error de red ---');

// Descomenta las siguientes líneas:
// const stopped = await startServer();
// await stopped.close();
// try {
//   await fetch(`${stopped.url}/planets`);
// } catch (error) {
//   console.log(`❌ ${error.name}: ${error.message}`);
//   console.log('Causa:', error.cause.code);
// }

console.log('');

// ============================================
// PASO 2: Convertir un estado HTTP en un error
// ============================================
console.log('--- Paso 2: HttpError ---');

// Descomenta las siguientes líneas:
// const checkStatus = (res) => {
//   if (!res.ok) throw new HttpError(res.status, `HTTP ${res.status} ${res.statusText}`);
//   return res;
// };
//
// for (const path of ['/planets/1', '/status/500']) {
//   try {
//     const res = checkStatus(await fetch(`${API}${path}`));
//     console.log('✅', path, res.status);
//   } catch (error) {
//     console.log('❌', path, error instanceof HttpError, error.status, error.message);
//   }
// }

console.log('');

// ============================================
// PASO 3: Usar el mensaje del servidor
// ============================================
console.log('--- Paso 3: Mensaje del servidor ---');

// Descomenta las siguientes líneas:
// const toHttpError = async (res) => {
//   const isJson = res.headers.get('content-type')?.includes('application/json');
//   const message = isJson ? (await res.json()).error : res.statusText;
//   return new HttpError(res.status, message);
// };
//
// const missing = await fetch(`${API}/planets/42`);
// console.log((await toHttpError(missing)).message);
//
// const unknown = await fetch(`${API}/status/502?text`);
// console.log((await toHttpError(unknown)).message);

console.log('');

// ============================================
// PASO 4: Un cuerpo que no es JSON válido
// ============================================
console.log('--- Paso 4: JSON roto ---');

// Descomenta las siguientes líneas:
// const broken = await fetch(`${API}/broken`);
// console.log('ok:', broken.ok);
// try {
//   await broken.json();
// } catch (error) {
//   console.log(`❌ ${error.name}: ${error.message}`);
// }

console.log('');

// ============================================
// PASO 5: Tiempo agotado
// ============================================
console.log('--- Paso 5: Tiempo agotado ---');

// Descomenta las siguientes líneas:
// try {
//   await fetch(`${API}/slow?ms=400`, { signal: AbortSignal.timeout(150) });
// } catch (error) {
//   console.log(error.name === 'TimeoutError' ? '⏱️ El servidor tardó más de 150 ms' : error.message);
// }

console.log('');

// ============================================
// PASO 6: Reintentar solo lo que puede salir bien
// ============================================
console.log('--- Paso 6: Reintentos ---');

// Descomenta las siguientes líneas:
// const isRetryable = (error) => error.name === 'TypeError' || error.status >= 500;
//
// const fetchWithRetry = async (path, attempts = 3) => {
//   for (let attempt = 1; attempt <= attempts; attempt += 1) {
//     try {
//       const res = await fetch(`${API}${path}`);
//       if (!res.ok) throw new HttpError(res.status, `HTTP ${res.status}`);
//       return await res.json();
//     } catch (error) {
//       console.log(`  intento ${attempt}: ${error.message}`);
//       if (attempt === attempts || !isRetryable(error)) throw error;
//       await wait(100 * attempt);
//     }
//   }
// };
//
// console.log('✅', (await fetchWithRetry('/flaky')).message);
// try {
//   await fetchWithRetry('/planets/42');
// } catch (error) {
//   console.log('❌ Sin reintentos:', error.message);
// }

console.log('');

// ============================================
// PASO 7: Un mensaje para cada tipo de error
// ============================================
console.log('--- Paso 7: describeError ---');

// Descomenta las siguientes líneas:
// const describeError = (error) => {
//   if (error.name === 'TimeoutError') return 'El servidor tarda demasiado. Inténtalo más tarde.';
//   if (error.name === 'TypeError') return 'No hay conexión con el servidor.';
//   if (error.name === 'SyntaxError') return 'El servidor ha enviado datos que no se pueden leer.';
//   if (error.status === 404) return 'No se ha encontrado lo que buscas.';
//   if (error.status >= 500) return 'El servidor tiene un problema. Inténtalo más tarde.';
//   return `Error inesperado: ${error.message}`;
// };
//
// const loadPlanet = async (path, options) => {
//   try {
//     const res = await fetch(`${API}${path}`, options);
//     if (!res.ok) throw new HttpError(res.status, `HTTP ${res.status}`);
//     const planet = await res.json();
//     return `✅ ${planet.name}`;
//   } catch (error) {
//     return `❌ ${describeError(error)}`;
//   }
// };
//
// console.log(await loadPlanet('/planets/2'));
// console.log(await loadPlanet('/planets/42'));
// console.log(await loadPlanet('/status/503'));
// console.log(await loadPlanet('/broken'));
// console.log(await loadPlanet('/slow?ms=400', { signal: AbortSignal.timeout(150) }));
// console.log(await loadPlanet('/status/401'));

console.log('');
console.log('✅ Lab completado.');

await server.close();
