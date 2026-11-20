/**
 * 📘 Lab 03: Errores asíncronos
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// Helper: Simular operaciones asíncronas
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const simulateFetch = (shouldFail = false, delayMs = 100) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Network request failed'));
      } else {
        resolve({ data: 'Success!', timestamp: Date.now() });
      }
    }, delayMs);
  });
};

// ============================================
// PASO 1: .catch() en Promises
// ============================================
console.log('--- Paso 1: .catch() en Promises ---');

// Usa .catch() para capturar rechazos
// Descomenta las siguientes líneas:

// simulateFetch(true)  // true = will fail
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch(error => {
//     console.log('❌ Caught with .catch():', error.message);
//   });
//
// // Wait for async operation
// await delay(200);
// console.log('✅ Program continues after error');

console.log('');

// ============================================
// PASO 2: Propagación en Cadena
// ============================================
console.log('--- Paso 2: Propagación en Cadena ---');

// Los errores se propagan hasta el primer .catch()
// Descomenta las siguientes líneas:

// const processChain = async () => {
//   console.log('Starting chain...');
//
//   await simulateFetch(false)  // Success
//     .then(data => {
//       console.log('Step 1: Got data');
//       throw new Error('Error in step 2!');  // Throw in middle
//     })
//     .then(data => {
//       console.log('Step 3: This never runs');
//       return data;
//     })
//     .then(data => {
//       console.log('Step 4: This never runs either');
//       return data;
//     })
//     .catch(error => {
//       console.log('❌ Caught at end:', error.message);
//     });
//
//   console.log('Chain complete');
// };
//
// await processChain();

console.log('');

// ============================================
// PASO 3: try...catch con async/await
// ============================================
console.log('--- Paso 3: try...catch con async/await ---');

// Combina async/await con try...catch
// Descomenta las siguientes líneas:

// const fetchWithTryCatch = async () => {
//   console.log('Fetching with async/await...');
//
//   try {
//     const result1 = await simulateFetch(false);
//     console.log('First fetch:', result1.data);
//
//     const result2 = await simulateFetch(true);  // This will fail
//     console.log('Second fetch:', result2.data);  // Never runs
//
//   } catch (error) {
//     console.log('❌ Caught in try/catch:', error.message);
//   }
//
//   console.log('Function continues after catch');
// };
//
// await fetchWithTryCatch();

console.log('');

// ============================================
// PASO 4: Promise.all() - Fail Fast
// ============================================
console.log('--- Paso 4: Promise.all() - Fail Fast ---');

// Promise.all() falla si CUALQUIER promesa falla
// Descomenta las siguientes líneas:

// const testPromiseAll = async () => {
//   console.log('Testing Promise.all()...');
//
//   const promises = [
//     simulateFetch(false, 50).then(() => 'Result 1'),   // Success
//     simulateFetch(true, 100).then(() => 'Result 2'),   // FAILS
//     simulateFetch(false, 150).then(() => 'Result 3')   // Success (but lost!)
//   ];
//
//   try {
//     const results = await Promise.all(promises);
//     console.log('All results:', results);
//   } catch (error) {
//     console.log('❌ Promise.all failed:', error.message);
//     console.log('⚠️ ALL results are lost, even successful ones!');
//   }
// };
//
// await testPromiseAll();

console.log('');

// ============================================
// PASO 5: Promise.allSettled() - Get All Results
// ============================================
console.log('--- Paso 5: Promise.allSettled() ---');

// Promise.allSettled() reporta todos los resultados
// Descomenta las siguientes líneas:

// const testPromiseAllSettled = async () => {
//   console.log('Testing Promise.allSettled()...');
//
//   const promises = [
//     simulateFetch(false, 50).then(() => 'Result 1'),   // Success
//     simulateFetch(true, 100).then(() => 'Result 2'),   // Fails
//     simulateFetch(false, 150).then(() => 'Result 3')   // Success
//   ];
//
//   const results = await Promise.allSettled(promises);
//
//   console.log('\nAll results:');
//   results.forEach((result, index) => {
//     if (result.status === 'fulfilled') {
//       console.log(`  ✅ Promise ${index + 1}: ${result.value}`);
//     } else {
//       console.log(`  ❌ Promise ${index + 1}: ${result.reason.message}`);
//     }
//   });
//
//   // Separate successes and failures
//   const successes = results.filter(r => r.status === 'fulfilled');
//   const failures = results.filter(r => r.status === 'rejected');
//
//   console.log(`\nSummary: ${successes.length} succeeded, ${failures.length} failed`);
// };
//
// await testPromiseAllSettled();

console.log('');

// ============================================
// PASO 6: Timeout con Promise.race()
// ============================================
console.log('--- Paso 6: Timeout con Promise.race() ---');

// Implementa timeouts usando Promise.race()
// Descomenta las siguientes líneas:

// const withTimeout = (promise, ms) => {
//   const timeout = new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error(`Timeout after ${ms}ms`));
//     }, ms);
//   });
//
//   return Promise.race([promise, timeout]);
// };
//
// const testTimeout = async () => {
//   // Test 1: Fast operation (should succeed)
//   console.log('Test 1: Fast operation with 500ms timeout');
//   try {
//     const result = await withTimeout(
//       simulateFetch(false, 100),  // Takes 100ms
//       500                          // Timeout at 500ms
//     );
//     console.log('  ✅ Success:', result.data);
//   } catch (error) {
//     console.log('  ❌ Failed:', error.message);
//   }
//
//   // Test 2: Slow operation (should timeout)
//   console.log('\nTest 2: Slow operation with 50ms timeout');
//   try {
//     const result = await withTimeout(
//       simulateFetch(false, 200),  // Takes 200ms
//       50                           // Timeout at 50ms
//     );
//     console.log('  ✅ Success:', result.data);
//   } catch (error) {
//     console.log('  ❌ Failed:', error.message);
//   }
// };
//
// await testTimeout();

console.log('');

// ============================================
// PASO 7: finally() para Cleanup
// ============================================
console.log('--- Paso 7: finally() para Cleanup ---');

// finally() siempre se ejecuta
// Descomenta las siguientes líneas:

// const fetchWithCleanup = async (shouldFail) => {
//   let isLoading = true;
//   console.log('🔄 Loading started...');
//
//   try {
//     const result = await simulateFetch(shouldFail, 100);
//     console.log('✅ Data received:', result.data);
//     return result;
//   } catch (error) {
//     console.log('❌ Error:', error.message);
//     throw error;
//   } finally {
//     isLoading = false;
//     console.log('🏁 Loading finished (finally block)');
//   }
// };
//
// // Test success case
// console.log('Case 1: Success');
// try {
//   await fetchWithCleanup(false);
// } catch (e) {}
//
// console.log('');
//
// // Test failure case
// console.log('Case 2: Failure');
// try {
//   await fetchWithCleanup(true);
// } catch (e) {}

console.log('');

console.log('✅ Lab completado.');
