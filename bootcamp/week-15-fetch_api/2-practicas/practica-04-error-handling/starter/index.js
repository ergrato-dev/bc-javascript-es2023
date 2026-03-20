// ============================================
// PRÁCTICA 04: Manejo de Errores con Fetch
// ============================================

const API_BASE = 'https://jsonplaceholder.typicode.com';

// ============================================
// PASO 1: Error de Red vs Error HTTP
// ============================================
console.log('--- Paso 1: Error de Red vs Error HTTP ---');

// Demostrar la diferencia entre ambos tipos
// Descomenta las siguientes líneas:

// // Error de red (dominio inválido) - Promise RECHAZADA
// const testNetworkError = async () => {
//   try {
//     await fetch('https://dominio-que-no-existe.invalid/api');
//   } catch (error) {
//     console.log('Error de red capturado:', error.message);
//     console.log('Tipo:', error.name); // TypeError
//   }
// };

// await testNetworkError();

// // Error HTTP (404) - Promise RESUELTA pero con error
// const testHttpError = async () => {
//   const response = await fetch(`${API_BASE}/posts/99999`);
//   console.log('¿Promise rechazada? No, response recibido');
//   console.log('Status:', response.status);
//   console.log('¿response.ok?:', response.ok);
//
//   // JSONPlaceholder devuelve {} para IDs inexistentes
//   // Una API real devolvería 404
// };

// await testHttpError();

console.log('');

// ============================================
// PASO 2: Verificación con response.ok
// ============================================
console.log('--- Paso 2: Verificación con response.ok ---');

// Patrón fundamental: siempre verificar response.ok
// Descomenta las siguientes líneas:

// const fetchWithCheck = async url => {
//   const response = await fetch(url);
//
//   if (!response.ok) {
//     // Crear error con información útil
//     const error = new Error(`HTTP Error: ${response.status} ${response.statusText}`);
//     error.status = response.status;
//     error.response = response;
//     throw error;
//   }
//
//   return response.json();
// };

// // Petición exitosa
// try {
//   const post = await fetchWithCheck(`${API_BASE}/posts/1`);
//   console.log('Post encontrado:', post.title);
// } catch (error) {
//   console.error('Error:', error.message);
// }

// // Petición a URL inválida (simular con endpoint inexistente)
// try {
//   await fetchWithCheck(`${API_BASE}/endpoint-invalido`);
// } catch (error) {
//   console.log('Error HTTP capturado:', error.message);
// }

console.log('');

// ============================================
// PASO 3: Errores Personalizados
// ============================================
console.log('--- Paso 3: Errores Personalizados ---');

// Crear clases de error específicas
// Descomenta las siguientes líneas:

// class NetworkError extends Error {
//   constructor(message, options = {}) {
//     super(message, options);
//     this.name = 'NetworkError';
//   }
// }

// class HttpError extends Error {
//   constructor(response, body = null) {
//     super(`HTTP ${response.status}: ${response.statusText}`);
//     this.name = 'HttpError';
//     this.status = response.status;
//     this.statusText = response.statusText;
//     this.body = body;
//   }
//
//   get isClientError() {
//     return this.status >= 400 && this.status < 500;
//   }
//
//   get isServerError() {
//     return this.status >= 500;
//   }
// }

// class ValidationError extends Error {
//   constructor(message, fields = {}) {
//     super(message);
//     this.name = 'ValidationError';
//     this.fields = fields;
//   }
// }

// // Función que usa errores personalizados
// const fetchTyped = async url => {
//   let response;
//
//   try {
//     response = await fetch(url);
//   } catch (error) {
//     // Error de red
//     throw new NetworkError('No se pudo conectar al servidor', { cause: error });
//   }
//
//   if (!response.ok) {
//     const body = await response.text();
//     throw new HttpError(response, body);
//   }
//
//   return response.json();
// };

// // Probar con diferentes URLs
// const testUrls = [
//   `${API_BASE}/posts/1`,
//   'https://httpstat.us/404',
//   'https://httpstat.us/500'
// ];

// for (const url of testUrls) {
//   try {
//     const data = await fetchTyped(url);
//     console.log('Éxito:', typeof data);
//   } catch (error) {
//     console.log(`${error.name}: ${error.message}`);
//     if (error instanceof HttpError) {
//       console.log(`  - Es error cliente: ${error.isClientError}`);
//       console.log(`  - Es error servidor: ${error.isServerError}`);
//     }
//   }
// }

console.log('');

// ============================================
// PASO 4: Reintentos Automáticos
// ============================================
console.log('--- Paso 4: Reintentos Automáticos ---');

// Implementar retry con backoff exponencial
// Descomenta las siguientes líneas:

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// const fetchWithRetry = async (url, options = {}) => {
//   const {
//     maxRetries = 3,
//     baseDelay = 1000,
//     retryOn = [408, 429, 500, 502, 503, 504],
//     ...fetchOptions
//   } = options;
//
//   let lastError;
//
//   for (let attempt = 0; attempt <= maxRetries; attempt++) {
//     try {
//       console.log(`  Intento ${attempt + 1}/${maxRetries + 1}...`);
//
//       const response = await fetch(url, fetchOptions);
//
//       if (!response.ok) {
//         // Verificar si debemos reintentar este código de estado
//         if (retryOn.includes(response.status) && attempt < maxRetries) {
//           const delay = baseDelay * Math.pow(2, attempt);
//           console.log(`  Status ${response.status}, reintentando en ${delay}ms...`);
//           await sleep(delay);
//           continue;
//         }
//
//         throw new Error(`HTTP ${response.status}`);
//       }
//
//       return response.json();
//
//     } catch (error) {
//       lastError = error;
//
//       // Error de red, reintentar si quedan intentos
//       if (error.name === 'TypeError' && attempt < maxRetries) {
//         const delay = baseDelay * Math.pow(2, attempt);
//         console.log(`  Error de red, reintentando en ${delay}ms...`);
//         await sleep(delay);
//         continue;
//       }
//     }
//   }
//
//   throw new Error(`Falló después de ${maxRetries + 1} intentos: ${lastError.message}`);
// };

// // Probar reintentos (debería funcionar al primer intento)
// console.log('Probando reintentos con API válida:');
// try {
//   const data = await fetchWithRetry(`${API_BASE}/posts/1`, { maxRetries: 2 });
//   console.log('  Éxito:', data.title);
// } catch (error) {
//   console.error('  Error final:', error.message);
// }

console.log('');

// ============================================
// PASO 5: Manejador Centralizado
// ============================================
console.log('--- Paso 5: Manejador Centralizado ---');

// Crear un wrapper completo para todas las peticiones
// Descomenta las siguientes líneas:

// const createFetcher = (config = {}) => {
//   const {
//     baseUrl = '',
//     timeout = 30000,
//     maxRetries = 3,
//     onError = () => {},
//     transformResponse = data => data
//   } = config;
//
//   return async (endpoint, options = {}) => {
//     const url = `${baseUrl}${endpoint}`;
//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => controller.abort(), timeout);
//
//     let attempt = 0;
//     let lastError;
//
//     while (attempt <= maxRetries) {
//       try {
//         const response = await fetch(url, {
//           ...options,
//           signal: controller.signal,
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             ...options.headers
//           }
//         });
//
//         clearTimeout(timeoutId);
//
//         if (!response.ok) {
//           const error = new Error(`HTTP ${response.status}`);
//           error.status = response.status;
//           error.response = response;
//
//           // Reintentar errores de servidor
//           if (response.status >= 500 && attempt < maxRetries) {
//             attempt++;
//             await new Promise(r => setTimeout(r, 1000 * attempt));
//             continue;
//           }
//
//           throw error;
//         }
//
//         const data = await response.json();
//         return transformResponse(data);
//
//       } catch (error) {
//         clearTimeout(timeoutId);
//         lastError = error;
//
//         // Manejar abort/timeout
//         if (error.name === 'AbortError') {
//           const timeoutError = new Error('Request timeout');
//           timeoutError.name = 'TimeoutError';
//           onError(timeoutError);
//           throw timeoutError;
//         }
//
//         // Error de red, reintentar
//         if (error.name === 'TypeError' && attempt < maxRetries) {
//           attempt++;
//           await new Promise(r => setTimeout(r, 1000 * attempt));
//           continue;
//         }
//
//         onError(error);
//         throw error;
//       }
//     }
//
//     throw lastError;
//   };
// };

// // Crear fetcher configurado
// const api = createFetcher({
//   baseUrl: API_BASE,
//   timeout: 10000,
//   maxRetries: 2,
//   onError: error => console.log('  [Log Error]:', error.message),
//   transformResponse: data => {
//     // Agregar timestamp a las respuestas
//     if (Array.isArray(data)) {
//       return { items: data, fetchedAt: new Date().toISOString() };
//     }
//     return { ...data, fetchedAt: new Date().toISOString() };
//   }
// });

// // Usar el fetcher centralizado
// console.log('Usando fetcher centralizado:');
// try {
//   const result = await api('/posts?_limit=2');
//   console.log('  Posts obtenidos:', result.items.length);
//   console.log('  Timestamp:', result.fetchedAt);
// } catch (error) {
//   console.error('  Error:', error.message);
// }

// try {
//   const post = await api('/posts/1');
//   console.log('  Post individual:', post.title);
// } catch (error) {
//   console.error('  Error:', error.message);
// }

console.log('');
console.log('=== Fin de la práctica ===');
