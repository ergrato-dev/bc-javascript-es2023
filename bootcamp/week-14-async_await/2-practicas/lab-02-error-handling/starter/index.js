/**
 * 📘 Lab 02: Errores con async/await
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Simula la consulta de una entrada del planetario: tarda 30 ms y falla si el código no empieza por PLA-.
const checkTicket = async (code) => {
  await wait(30);
  if (!code.startsWith('PLA-')) {
    throw new Error(`Entrada ${code} no reconocida`);
  }
  return `Entrada ${code} válida`;
};

// ============================================
// PASO 1: try/catch con await
// ============================================
console.log('--- Paso 1: try/catch ---');

// Descomenta las siguientes líneas:
// const showTicket = async (code) => {
//   try {
//     const message = await checkTicket(code);
//     console.log('✅', message);
//   } catch (error) {
//     console.log('❌', error.message);
//   }
// };
//
// await showTicket('PLA-042');
// await showTicket('XYZ-001');

console.log('');

// ============================================
// PASO 2: finally
// ============================================
console.log('--- Paso 2: finally ---');

// Descomenta las siguientes líneas:
// const loadWithSpinner = async (code) => {
//   console.log('⏳ Cargando...');
//   try {
//     return await checkTicket(code);
//   } catch (error) {
//     return `Sin datos (${error.message})`;
//   } finally {
//     console.log('🏁 Indicador de carga oculto');
//   }
// };
//
// console.log(await loadWithSpinner('PLA-100'));
// console.log(await loadWithSpinner('ABC-100'));

console.log('');

// ============================================
// PASO 3: Errores propios e instanceof
// ============================================
console.log('--- Paso 3: Errores propios ---');

// Descomenta las siguientes líneas:
// class NotFoundError extends Error {
//   constructor(id) {
//     super(`No existe la sesión ${id}`);
//     this.name = 'NotFoundError';
//     this.id = id;
//   }
// }
//
// const sessions = { 1: 'Viaje a Saturno', 2: 'Nebulosas' };
// const getSession = async (id) => {
//   await wait(20);
//   if (typeof id !== 'number') throw new TypeError('El id debe ser un número');
//   if (!(id in sessions)) throw new NotFoundError(id);
//   return sessions[id];
// };
//
// for (const id of [1, 9, 'dos']) {
//   try {
//     console.log('✅', await getSession(id));
//   } catch (error) {
//     if (error instanceof NotFoundError) {
//       console.log(`🔍 ${error.name}: ${error.message}`);
//     } else {
//       console.log(`💥 ${error.name}: ${error.message}`);
//     }
//   }
// }

console.log('');

// ============================================
// PASO 4: Relanzar con cause
// ============================================
console.log('--- Paso 4: cause ---');

// Descomenta las siguientes líneas:
// const reserveSeat = async (code) => {
//   try {
//     await checkTicket(code);
//     return `Butaca reservada con ${code}`;
//   } catch (error) {
//     throw new Error('No se pudo reservar la butaca', { cause: error });
//   }
// };
//
// try {
//   await reserveSeat('MAL-7');
// } catch (error) {
//   console.log('Error:', error.message);
//   console.log('Causa:', error.cause.message);
// }

console.log('');

// ============================================
// PASO 5: Un fallo no tiene por qué parar todo
// ============================================
console.log('--- Paso 5: Errores por operación ---');

// Descomenta las siguientes líneas:
// const codes = ['PLA-1', 'BAD-2', 'PLA-3'];
// const report = [];
//
// for (const code of codes) {
//   try {
//     report.push(await checkTicket(code));
//   } catch (error) {
//     report.push(`(saltada) ${error.message}`);
//   }
// }
// console.log(report);

console.log('');

// ============================================
// PASO 6: return sin await dentro de try
// ============================================
console.log('--- Paso 6: return vs return await ---');

// Descomenta las siguientes líneas:
// const withoutAwait = async (code) => {
//   try {
//     return checkTicket(code);
//   } catch {
//     return 'capturado dentro';
//   }
// };
// const withAwait = async (code) => {
//   try {
//     return await checkTicket(code);
//   } catch {
//     return 'capturado dentro';
//   }
// };
//
// console.log('return await:', await withAwait('MAL-1'));
// try {
//   console.log('return:', await withoutAwait('MAL-1'));
// } catch (error) {
//   console.log('return: el error salió de la función →', error.message);
// }

console.log('');

// ============================================
// PASO 7: Reintentar
// ============================================
console.log('--- Paso 7: Reintentar ---');

// Descomenta las siguientes líneas:
// // Falla las dos primeras veces y responde a la tercera.
// let calls = 0;
// const unstableService = async () => {
//   calls += 1;
//   await wait(10);
//   if (calls < 3) throw new Error(`Fallo en la llamada ${calls}`);
//   return `Respuesta en la llamada ${calls}`;
// };
//
// const retry = async (task, attempts, delayMs) => {
//   for (let attempt = 1; attempt <= attempts; attempt += 1) {
//     try {
//       return await task();
//     } catch (error) {
//       console.log(`Intento ${attempt}: ${error.message}`);
//       if (attempt === attempts) throw error;
//       await wait(delayMs);
//     }
//   }
// };
//
// console.log('✅', await retry(unstableService, 5, 50));
// calls = 0;
// try {
//   await retry(unstableService, 2, 50);
// } catch (error) {
//   console.log('❌ Se acabaron los intentos:', error.message);
// }

console.log('');
console.log('✅ Lab completado.');
