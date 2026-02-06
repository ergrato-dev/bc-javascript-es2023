// ============================================
// PRÁCTICA 03: Headers y Configuración
// ============================================

const API_BASE = 'https://jsonplaceholder.typicode.com';

// ============================================
// PASO 1: Headers Básicos
// ============================================
console.log('--- Paso 1: Headers Básicos ---');

// Configurar Accept y Content-Type
// Descomenta las siguientes líneas:

// const fetchWithHeaders = async () => {
//   const response = await fetch(`${API_BASE}/posts/1`, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'X-Custom-Header': 'valor-personalizado'
//     }
//   });
//
//   // Leer headers de la respuesta
//   console.log('Content-Type:', response.headers.get('content-type'));
//   console.log('Cache-Control:', response.headers.get('cache-control'));
//
//   return response.json();
// };

// const data = await fetchWithHeaders();
// console.log('Post title:', data.title);

console.log('');

// ============================================
// PASO 2: Constructor Headers
// ============================================
console.log('--- Paso 2: Constructor Headers ---');

// Crear y manipular headers dinámicamente
// Descomenta las siguientes líneas:

// const buildHeaders = (options = {}) => {
//   const headers = new Headers();
//
//   // Headers por defecto
//   headers.set('Accept', 'application/json');
//   headers.set('Content-Type', 'application/json');
//
//   // Agregar token si existe
//   if (options.token) {
//     headers.set('Authorization', `Bearer ${options.token}`);
//   }
//
//   // Agregar headers personalizados
//   if (options.custom) {
//     Object.entries(options.custom).forEach(([key, value]) => {
//       headers.append(key, value);
//     });
//   }
//
//   return headers;
// };

// // Crear headers con token
// const authHeaders = buildHeaders({
//   token: 'mi-token-secreto',
//   custom: { 'X-Request-ID': '12345' }
// });

// // Inspeccionar headers
// console.log('Headers creados:');
// for (const [name, value] of authHeaders) {
//   console.log(`  ${name}: ${value}`);
// }

console.log('');

// ============================================
// PASO 3: Autenticación
// ============================================
console.log('--- Paso 3: Autenticación ---');

// Simular autenticación con Bearer token
// Descomenta las siguientes líneas:

// const authenticatedFetch = async (url, token) => {
//   const response = await fetch(url, {
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Accept': 'application/json'
//     }
//   });
//
//   // En una API real, un 401 indicaría token inválido
//   if (response.status === 401) {
//     throw new Error('Token inválido o expirado');
//   }
//
//   return response.json();
// };

// // Simular token (JSONPlaceholder ignora auth pero funciona)
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
// const userData = await authenticatedFetch(`${API_BASE}/users/1`, token);
// console.log('Usuario autenticado:', userData.name);

// // Ejemplo de Basic Auth
// const basicAuth = (username, password) => {
//   const credentials = btoa(`${username}:${password}`);
//   return `Basic ${credentials}`;
// };

// console.log('Basic Auth header:', basicAuth('user', 'pass123'));

console.log('');

// ============================================
// PASO 4: AbortController
// ============================================
console.log('--- Paso 4: AbortController ---');

// Cancelar peticiones con timeout
// Descomenta las siguientes líneas:

// const fetchWithTimeout = async (url, timeoutMs = 5000) => {
//   const controller = new AbortController();
//   const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
//
//   try {
//     console.log(`Iniciando petición con timeout de ${timeoutMs}ms...`);
//
//     const response = await fetch(url, {
//       signal: controller.signal
//     });
//
//     clearTimeout(timeoutId);
//     return response.json();
//
//   } catch (error) {
//     clearTimeout(timeoutId);
//
//     if (error.name === 'AbortError') {
//       throw new Error(`Timeout: la petición tardó más de ${timeoutMs}ms`);
//     }
//     throw error;
//   }
// };

// // Petición normal (debería funcionar)
// try {
//   const result = await fetchWithTimeout(`${API_BASE}/posts/1`, 5000);
//   console.log('Éxito:', result.title);
// } catch (error) {
//   console.error('Error:', error.message);
// }

// // Simular timeout muy corto
// try {
//   const result = await fetchWithTimeout(`${API_BASE}/posts/1`, 1);
//   console.log('Éxito:', result.title);
// } catch (error) {
//   console.log('Timeout esperado:', error.message);
// }

console.log('');

// ============================================
// PASO 5: Wrapper Completo
// ============================================
console.log('--- Paso 5: Wrapper Completo ---');

// Cliente API con configuración por defecto
// Descomenta las siguientes líneas:

// const createApiClient = (config = {}) => {
//   const {
//     baseUrl = '',
//     defaultHeaders = {},
//     timeout = 30000,
//     getToken = () => null
//   } = config;
//
//   return {
//     async request(endpoint, options = {}) {
//       const controller = new AbortController();
//       const timeoutId = setTimeout(() => controller.abort(), timeout);
//
//       // Construir headers
//       const headers = new Headers({
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         ...defaultHeaders,
//         ...options.headers
//       });
//
//       // Agregar token si existe
//       const token = getToken();
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//       }
//
//       try {
//         const response = await fetch(`${baseUrl}${endpoint}`, {
//           ...options,
//           headers,
//           signal: controller.signal
//         });
//
//         clearTimeout(timeoutId);
//
//         if (!response.ok) {
//           throw new Error(`HTTP ${response.status}`);
//         }
//
//         return response.json();
//       } catch (error) {
//         clearTimeout(timeoutId);
//         throw error;
//       }
//     },
//
//     get(endpoint) {
//       return this.request(endpoint, { method: 'GET' });
//     },
//
//     post(endpoint, data) {
//       return this.request(endpoint, {
//         method: 'POST',
//         body: JSON.stringify(data)
//       });
//     }
//   };
// };

// // Crear cliente configurado
// const api = createApiClient({
//   baseUrl: API_BASE,
//   defaultHeaders: { 'X-Client-Version': '1.0.0' },
//   timeout: 10000,
//   getToken: () => 'token-de-sesion'
// });

// // Usar el cliente
// const users = await api.get('/users?_limit=3');
// console.log('Usuarios:', users.map(u => u.name));

console.log('');
console.log('=== Fin de la práctica ===');
