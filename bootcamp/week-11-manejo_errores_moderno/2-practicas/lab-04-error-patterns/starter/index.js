/**
 * 📘 Lab 04: Patrones de manejo de errores
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// Helper
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// ============================================
// PASO 1: Safe Execute Pattern (Sync)
// ============================================
console.log('--- Paso 1: Safe Execute Pattern (Sync) ---');

// Envuelve operaciones riesgosas con un fallback
// Descomenta las siguientes líneas:

// const safeExecute = (fn, fallback = null) => {
//   try {
//     return fn();
//   } catch (error) {
//     console.log('  ⚠️ Caught:', error.message);
//     return fallback;
//   }
// };
//
// // Test with valid JSON
// const validResult = safeExecute(
//   () => JSON.parse('{"name": "John", "age": 30}'),
//   { name: 'Guest' }
// );
// console.log('Valid JSON result:', validResult);
//
// // Test with invalid JSON
// const invalidResult = safeExecute(
//   () => JSON.parse('not valid json'),
//   { name: 'Guest' }
// );
// console.log('Invalid JSON result:', invalidResult);
//
// // Test with risky calculation
// const calcResult = safeExecute(
//   () => {
//     const obj = null;
//     return obj.value * 2;  // TypeError!
//   },
//   0
// );
// console.log('Risky calc result:', calcResult);

console.log('');

// ============================================
// PASO 2: Safe Execute Async
// ============================================
console.log('--- Paso 2: Safe Execute Async ---');

// Versión asíncrona del patrón
// Descomenta las siguientes líneas:

// const safeExecuteAsync = async (fn, fallback = null) => {
//   try {
//     return await fn();
//   } catch (error) {
//     console.log('  ⚠️ Async caught:', error.message);
//     return fallback;
//   }
// };
//
// // Simulated async operations
// const fetchUserSuccess = async () => {
//   await delay(50);
//   return { id: 1, name: 'John' };
// };
//
// const fetchUserFail = async () => {
//   await delay(50);
//   throw new Error('User not found');
// };
//
// // Test success
// const user1 = await safeExecuteAsync(
//   fetchUserSuccess,
//   { id: 0, name: 'Guest' }
// );
// console.log('Success case:', user1);
//
// // Test failure
// const user2 = await safeExecuteAsync(
//   fetchUserFail,
//   { id: 0, name: 'Guest' }
// );
// console.log('Failure case:', user2);

console.log('');

// ============================================
// PASO 3: Retry Pattern
// ============================================
console.log('--- Paso 3: Retry Pattern ---');

// Reintenta operaciones que pueden fallar temporalmente
// Descomenta las siguientes líneas:

// const retry = async (fn, maxAttempts = 3) => {
//   let lastError;
//
//   for (let attempt = 1; attempt <= maxAttempts; attempt++) {
//     try {
//       console.log(`  Attempt ${attempt}/${maxAttempts}...`);
//       return await fn();
//     } catch (error) {
//       lastError = error;
//       console.log(`  ❌ Attempt ${attempt} failed: ${error.message}`);
//     }
//   }
//
//   throw lastError;
// };
//
// // Simulated flaky operation (fails first 2 times)
// let attemptCount = 0;
// const flakyOperation = async () => {
//   attemptCount++;
//   await delay(50);
//   if (attemptCount < 3) {
//     throw new Error('Temporary failure');
//   }
//   return 'Success on attempt ' + attemptCount;
// };
//
// // Test retry
// try {
//   attemptCount = 0;  // Reset counter
//   const result = await retry(flakyOperation, 5);
//   console.log('✅ Final result:', result);
// } catch (error) {
//   console.log('❌ All retries failed:', error.message);
// }

console.log('');

// ============================================
// PASO 4: Retry con Exponential Backoff
// ============================================
console.log('--- Paso 4: Retry con Exponential Backoff ---');

// Espera progresivamente más entre reintentos
// Descomenta las siguientes líneas:

// const retryWithBackoff = async (fn, maxAttempts = 3, baseDelay = 100) => {
//   let lastError;
//
//   for (let attempt = 1; attempt <= maxAttempts; attempt++) {
//     try {
//       console.log(`  Attempt ${attempt}...`);
//       return await fn();
//     } catch (error) {
//       lastError = error;
//       console.log(`  ❌ Failed: ${error.message}`);
//
//       if (attempt < maxAttempts) {
//         // Exponential backoff: 100ms, 200ms, 400ms...
//         const waitTime = baseDelay * Math.pow(2, attempt - 1);
//         console.log(`  ⏳ Waiting ${waitTime}ms before retry...`);
//         await delay(waitTime);
//       }
//     }
//   }
//
//   throw lastError;
// };
//
// // Always failing operation
// const alwaysFails = async () => {
//   throw new Error('Service unavailable');
// };
//
// // Test (will fail but shows backoff)
// console.log('Testing exponential backoff:');
// try {
//   await retryWithBackoff(alwaysFails, 3, 100);
// } catch (error) {
//   console.log('❌ Final failure after backoff:', error.message);
// }

console.log('');

// ============================================
// PASO 5: Fallback Chain
// ============================================
console.log('--- Paso 5: Fallback Chain ---');

// Intenta múltiples fuentes hasta que una funcione
// Descomenta las siguientes líneas:

// const withFallbackChain = async (...fns) => {
//   let lastError;
//
//   for (let i = 0; i < fns.length; i++) {
//     try {
//       console.log(`  Trying source ${i + 1}...`);
//       return await fns[i]();
//     } catch (error) {
//       lastError = error;
//       console.log(`  ❌ Source ${i + 1} failed: ${error.message}`);
//     }
//   }
//
//   throw new Error(`All ${fns.length} sources failed. Last: ${lastError.message}`);
// };
//
// // Simulated data sources
// const fetchFromAPI = async () => {
//   await delay(50);
//   throw new Error('API unavailable');
// };
//
// const fetchFromCache = async () => {
//   await delay(30);
//   throw new Error('Cache miss');
// };
//
// const getDefaultData = async () => {
//   await delay(10);
//   return { source: 'default', data: 'Default data' };
// };
//
// // Test fallback chain
// console.log('Testing fallback chain:');
// try {
//   const result = await withFallbackChain(
//     fetchFromAPI,
//     fetchFromCache,
//     getDefaultData
//   );
//   console.log('✅ Got data from:', result.source);
// } catch (error) {
//   console.log('❌', error.message);
// }

console.log('');

// ============================================
// PASO 6: Error Boundary para Arrays
// ============================================
console.log('--- Paso 6: Error Boundary para Arrays ---');

// Procesa items individualmente sin que uno falle todo
// Descomenta las siguientes líneas:

// const safeMap = (array, fn) => {
//   return array.map((item, index) => {
//     try {
//       return {
//         success: true,
//         index,
//         value: fn(item)
//       };
//     } catch (error) {
//       return {
//         success: false,
//         index,
//         item,
//         error: error.message
//       };
//     }
//   });
// };
//
// // Test data with some bad items
// const jsonStrings = [
//   '{"name": "Alice"}',
//   'not json',
//   '{"name": "Bob"}',
//   '{ invalid }',
//   '{"name": "Charlie"}'
// ];
//
// console.log('Processing JSON strings:');
// const results = safeMap(jsonStrings, JSON.parse);
//
// // Separate successes and failures
// const successes = results.filter(r => r.success);
// const failures = results.filter(r => !r.success);
//
// console.log('\n✅ Successes:');
// successes.forEach(r => console.log(`  [${r.index}]:`, r.value));
//
// console.log('\n❌ Failures:');
// failures.forEach(r => console.log(`  [${r.index}]: "${r.item}" - ${r.error}`));
//
// console.log(`\nSummary: ${successes.length} ok, ${failures.length} failed`);

console.log('');

// ============================================
// PASO 7: Result Pattern
// ============================================
console.log('--- Paso 7: Result Pattern ---');

// Retorna objetos que indican éxito o fallo explícitamente
// (Inspirado en Rust/Functional Programming)
// Descomenta las siguientes líneas:

// // Result factory
// const Result = {
//   ok: value => ({ ok: true, value }),
//   err: error => ({ ok: false, error: error instanceof Error ? error.message : error })
// };
//
// // Function that returns Result instead of throwing
// const parseJSON = jsonString => {
//   try {
//     const data = JSON.parse(jsonString);
//     return Result.ok(data);
//   } catch (error) {
//     return Result.err(error);
//   }
// };
//
// const divideResult = (a, b) => {
//   if (b === 0) {
//     return Result.err('Division by zero');
//   }
//   return Result.ok(a / b);
// };
//
// // Test Result pattern
// console.log('Testing Result pattern:');
//
// const jsonResult1 = parseJSON('{"valid": true}');
// const jsonResult2 = parseJSON('invalid');
//
// console.log('Valid JSON:', jsonResult1);
// console.log('Invalid JSON:', jsonResult2);
//
// // Chain Results (map over ok values)
// const mapResult = (result, fn) => {
//   if (result.ok) {
//     return Result.ok(fn(result.value));
//   }
//   return result;  // Pass through error
// };
//
// // Example: Parse JSON then extract name
// const extractName = parseJSON('{"name": "John", "age": 30}');
// const nameResult = mapResult(extractName, data => data.name.toUpperCase());
// console.log('\nExtracted name:', nameResult);
//
// // Handle both cases
// const handleResult = (result, onOk, onErr) => {
//   if (result.ok) {
//     return onOk(result.value);
//   }
//   return onErr(result.error);
// };
//
// const divResult = divideResult(10, 0);
// const message = handleResult(
//   divResult,
//   value => `Result: ${value}`,
//   error => `Error: ${error}`
// );
// console.log('Division result:', message);

console.log('');

console.log('✅ Lab completado.');
