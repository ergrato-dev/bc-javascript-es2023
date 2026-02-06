// ============================================
// PRÁCTICA 02: Manejo de Errores en Async/Await
// ============================================

// Helpers para simular operaciones
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const simulateSuccess = data => new Promise(resolve => {
  setTimeout(() => resolve(data), 100);
});

const simulateError = message => new Promise((_, reject) => {
  setTimeout(() => reject(new Error(message)), 100);
});

// ============================================
// PASO 1: Try/Catch Básico
// ============================================
console.log('--- Paso 1: Try/Catch Básico ---');

// try/catch captura errores de Promises rechazadas
// Descomenta las siguientes líneas:

// async function safeFetch(shouldFail) {
//   try {
//     if (shouldFail) {
//       const data = await simulateError('Simulando error de red');
//     } else {
//       const data = await simulateSuccess({ id: 1, data: 'test' });
//       console.log('Datos recibidos:', data);
//       return data;
//     }
//   } catch (error) {
//     console.log('Error capturado:', error.message);
//     return null;
//   }
// }

// // Probar ambos casos
// safeFetch(false);  // Éxito
// safeFetch(true).then(result => {
//   console.log('Resultado con error:', result);
// });

console.log('');

// ============================================
// PASO 2: Usando Finally
// ============================================
console.log('--- Paso 2: Usando Finally ---');

// finally siempre se ejecuta
// Descomenta las siguientes líneas:

// async function fetchWithLoading() {
//   console.log('Mostrando loading...');
//
//   try {
//     const data = await simulateSuccess({ success: true });
//     return data;
//   } catch (error) {
//     console.log('Error:', error.message);
//     return null;
//   } finally {
//     // Esto SIEMPRE se ejecuta
//     console.log('Ocultando loading (finally)');
//   }
// }

// fetchWithLoading().then(data => {
//   console.log('Datos:', data);
// });

console.log('');

// ============================================
// PASO 3: Errores Personalizados
// ============================================
console.log('--- Paso 3: Errores Personalizados ---');

// Crear clases de error para diferentes situaciones
// Descomenta las siguientes líneas:

// class NetworkError extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.name = 'NetworkError';
//     this.statusCode = statusCode;
//   }
// }

// class ValidationError extends Error {
//   constructor(message, field) {
//     super(message);
//     this.name = 'ValidationError';
//     this.field = field;
//   }
// }

// async function handleCustomErrors() {
//   // Simular errores personalizados
//   const errors = [
//     new NetworkError('Recurso no encontrado', 404),
//     new ValidationError('Email inválido', 'email')
//   ];
//
//   for (const error of errors) {
//     try {
//       throw error;
//     } catch (e) {
//       if (e instanceof NetworkError) {
//         console.log(`Error de red - Código: ${e.statusCode}`);
//       } else if (e instanceof ValidationError) {
//         console.log(`Error de validación - Campo: ${e.field}`);
//       } else {
//         console.log('Error desconocido:', e.message);
//       }
//     }
//   }
// }

// handleCustomErrors();

console.log('');

// ============================================
// PASO 4: Error Cause (ES2022)
// ============================================
console.log('--- Paso 4: Error Cause ---');

// Preservar el error original como causa
// Descomenta las siguientes líneas:

// async function complexOperation() {
//   try {
//     // Operación que puede fallar
//     throw new Error('Error interno simulado');
//   } catch (originalError) {
//     // Envolver con contexto adicional
//     throw new Error('Fallo en operación compleja', {
//       cause: originalError
//     });
//   }
// }

// async function handleWithCause() {
//   try {
//     await complexOperation();
//   } catch (error) {
//     console.log('Error:', error.message);
//     if (error.cause) {
//       console.log('Causa original:', error.cause.message);
//     }
//   }
// }

// handleWithCause();

console.log('');

// ============================================
// PASO 5: Manejo Granular
// ============================================
console.log('--- Paso 5: Manejo Granular ---');

// Múltiples bloques try/catch para control fino
// Descomenta las siguientes líneas:

// async function granularHandling() {
//   let user;
//   let products;
//
//   // Intento 1: Obtener usuario (crítico)
//   try {
//     user = await simulateSuccess({ name: 'Admin' });
//     console.log('Usuario obtenido:', user.name);
//   } catch (error) {
//     console.log('Error crítico al obtener usuario');
//     throw error; // Re-lanzar - no podemos continuar
//   }
//
//   // Intento 2: Obtener productos (no crítico)
//   try {
//     products = await simulateError('Productos no disponibles');
//   } catch (error) {
//     console.log('Productos obtenidos: [] (usando fallback)');
//     products = []; // Fallback - podemos continuar
//   }
//
//   return { user, products };
// }

// granularHandling();

console.log('');
console.log('=== Fin de la práctica ===');
