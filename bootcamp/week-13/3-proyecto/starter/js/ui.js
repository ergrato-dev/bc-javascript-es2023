// ============================================
// HTTP SIMULATOR - MÓDULO UI
// ============================================

/**
 * Referencias a elementos del DOM
 */
const resultsContainer = document.getElementById('results-container');
const statTotal = document.getElementById('stat-total');
const statSuccess = document.getElementById('stat-success');
const statErrors = document.getElementById('stat-errors');
const statAvg = document.getElementById('stat-avg');

/**
 * Estadísticas globales
 */
let stats = {
  total: 0,
  success: 0,
  errors: 0,
  times: [],
};

/**
 * Limpia el área de resultados
 */
const clearResults = () => {
  // TODO: Limpiar el contenido de resultsContainer
  // Mostrar mensaje placeholder
};

/**
 * Muestra un resultado de loading
 * @param {string} method - Método HTTP
 * @param {string} url - URL de la petición
 * @returns {HTMLElement} Elemento creado
 */
const showLoading = (method, url) => {
  // TODO: Crear elemento HTML para mostrar loading
  // Incluir spinner, método y URL
  // Agregar al resultsContainer
  // Retornar el elemento para poder actualizarlo después

  return null; // Reemplazar con elemento creado
};

/**
 * Actualiza un resultado con éxito
 * @param {HTMLElement} element - Elemento a actualizar
 * @param {object} response - Respuesta de la petición
 * @param {number} time - Tiempo de respuesta en ms
 */
const showSuccess = (element, response, time) => {
  // TODO: Actualizar elemento con resultado exitoso
  // Mostrar status 200, datos y tiempo
  // Cambiar clase a 'success'
  // Actualizar estadísticas
};

/**
 * Actualiza un resultado con error
 * @param {HTMLElement} element - Elemento a actualizar
 * @param {Error} error - Error ocurrido
 * @param {number} time - Tiempo hasta el error
 */
const showError = (element, error, time) => {
  // TODO: Actualizar elemento con error
  // Mostrar mensaje de error y tiempo
  // Cambiar clase a 'error'
  // Actualizar estadísticas
};

/**
 * Actualiza las estadísticas en la UI
 */
const updateStats = () => {
  // TODO: Actualizar los valores en los elementos stat-*
  // - Total de requests
  // - Requests exitosos
  // - Requests con error
  // - Tiempo promedio
};

/**
 * Crea un elemento de resultado
 * @param {string} method - Método HTTP
 * @param {string} url - URL
 * @param {string} status - Estado (loading, success, error)
 * @param {object} content - Contenido a mostrar
 * @returns {HTMLElement} Elemento creado
 */
const createResultElement = (method, url, status, content = {}) => {
  // TODO: Crear estructura HTML completa para un resultado
  // Incluir:
  // - result-item div con clase de status
  // - result-header con método y status code
  // - result-body con contenido
  // - result-time con tiempo de respuesta

  const div = document.createElement('div');
  div.className = `result-item ${status}`;

  // Tu código aquí para construir el contenido

  return div;
};

/**
 * Quita el placeholder inicial
 */
const removePlaceholder = () => {
  const placeholder = resultsContainer.querySelector('.placeholder');
  if (placeholder) {
    placeholder.remove();
  }
};
