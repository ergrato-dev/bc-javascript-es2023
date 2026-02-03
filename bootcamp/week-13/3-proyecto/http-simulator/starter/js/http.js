// ============================================
// HTTP SIMULATOR - MÓDULO HTTP
// ============================================

/**
 * HTTP Status Codes
 */
const HTTP_STATUS = {
  OK: 200,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

/**
 * Simula latencia de red aleatoria
 * @returns {number} Tiempo en milisegundos (500-3000ms)
 */
const getRandomLatency = () => {
  // TODO: Implementar latencia aleatoria entre 500ms y 3000ms
  return 1000;
};

/**
 * Obtiene un status HTTP aleatorio
 * @returns {number} Status code (200, 404, 500)
 */
const getRandomStatus = () => {
  // TODO: Implementar lógica de status aleatorio
  // 80% probabilidad de 200 (OK)
  // 10% probabilidad de 404 (Not Found)
  // 10% probabilidad de 500 (Server Error)
  return HTTP_STATUS.OK;
};

/**
 * Simula una petición HTTP
 * @param {string} method - Método HTTP (GET, POST, PUT, DELETE)
 * @param {string} url - URL de la petición
 * @param {object} data - Datos a enviar (opcional)
 * @returns {Promise} Promise que resuelve con la respuesta
 */
const simulateRequest = (method, url, data = null) => {
  // TODO: Implementar Promise que simule una petición HTTP
  // 1. Crear nueva Promise
  // 2. Usar setTimeout con latencia aleatoria
  // 3. Obtener status aleatorio
  // 4. Si status es 200, resolver con datos
  // 5. Si status es 404 o 500, rechazar con error

  return new Promise((resolve, reject) => {
    // Tu código aquí
  });
};

/**
 * Crea un timeout que rechaza después de cierto tiempo
 * @param {number} ms - Milisegundos antes del timeout
 * @returns {Promise} Promise que rechaza después del tiempo
 */
const createTimeout = ms => {
  // TODO: Implementar timeout usando Promise
  // Debe rechazar con error "Request timeout"

  return new Promise((resolve, reject) => {
    // Tu código aquí
  });
};

/**
 * Ejecuta una petición con timeout
 * @param {string} method - Método HTTP
 * @param {string} url - URL
 * @param {object} data - Datos (opcional)
 * @param {number} timeout - Timeout en ms (default: 5000)
 * @returns {Promise} Promise con la petición o timeout
 */
const requestWithTimeout = (method, url, data = null, timeout = 5000) => {
  // TODO: Usar Promise.race() para implementar timeout
  // Combinar simulateRequest() con createTimeout()

  return null; // Reemplazar con tu implementación
};

// ============================================
// FUNCIONES HTTP
// ============================================

/**
 * Petición GET
 * @param {string} url - URL del recurso
 * @returns {Promise} Respuesta de la petición
 */
const get = url => {
  // TODO: Implementar usando requestWithTimeout
  return requestWithTimeout('GET', url);
};

/**
 * Petición POST
 * @param {string} url - URL del recurso
 * @param {object} data - Datos a enviar
 * @returns {Promise} Respuesta de la petición
 */
const post = (url, data) => {
  // TODO: Implementar usando requestWithTimeout
  return null;
};

/**
 * Petición PUT
 * @param {string} url - URL del recurso
 * @param {object} data - Datos a actualizar
 * @returns {Promise} Respuesta de la petición
 */
const put = (url, data) => {
  // TODO: Implementar usando requestWithTimeout
  return null;
};

/**
 * Petición DELETE
 * @param {string} url - URL del recurso
 * @returns {Promise} Respuesta de la petición
 */
const del = url => {
  // TODO: Implementar usando requestWithTimeout
  return null;
};

// ============================================
// OPERACIONES MÚLTIPLES
// ============================================

/**
 * Ejecuta múltiples peticiones en paralelo
 * @param {Array<Promise>} requests - Array de peticiones
 * @returns {Promise} Promise.all con todas las respuestas
 */
const fetchAll = requests => {
  // TODO: Usar Promise.all()
  return null;
};

/**
 * Ejecuta múltiples peticiones y retorna la más rápida
 * @param {Array<Promise>} requests - Array de peticiones
 * @returns {Promise} Promise.race con la primera respuesta
 */
const fetchFastest = requests => {
  // TODO: Usar Promise.race()
  return null;
};

/**
 * Ejecuta múltiples peticiones sin fallar
 * @param {Array<Promise>} requests - Array de peticiones
 * @returns {Promise} Promise.allSettled con todos los resultados
 */
const fetchAllSettled = requests => {
  // TODO: Usar Promise.allSettled()
  return null;
};
