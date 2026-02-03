// ============================================
// HTTP SIMULATOR - APLICACIÓN PRINCIPAL
// ============================================

/**
 * Maneja una petición individual
 * @param {string} method - Método HTTP
 * @param {string} url - URL de la petición
 * @param {object} data - Datos (opcional)
 */
const handleRequest = (method, url, data = null) => {
  // TODO: Implementar manejo de petición individual
  // 1. Mostrar loading en la UI
  // 2. Iniciar timer
  // 3. Ejecutar petición HTTP correspondiente
  // 4. Actualizar UI con éxito o error
  // 5. Calcular tiempo transcurrido
};

/**
 * Maneja múltiples peticiones con Promise.all()
 */
const handleMultipleRequests = () => {
  // TODO: Ejecutar 3 peticiones GET en paralelo
  // Usar Promise.all() y mostrar todos los resultados
};

/**
 * Maneja peticiones con Promise.race()
 */
const handleRaceRequests = () => {
  // TODO: Ejecutar 3 peticiones y mostrar la más rápida
  // Usar Promise.race()
};

/**
 * Maneja peticiones con Promise.allSettled()
 */
const handleAllSettledRequests = () => {
  // TODO: Ejecutar peticiones (algunas pueden fallar)
  // Usar Promise.allSettled() y mostrar todos los resultados
};

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Inicializa los event listeners
 */
const initEventListeners = () => {
  // TODO: Agregar event listeners a todos los botones
  // Peticiones individuales
  // document.getElementById('btn-get').addEventListener('click', ...);
  // document.getElementById('btn-post').addEventListener('click', ...);
  // document.getElementById('btn-put').addEventListener('click', ...);
  // document.getElementById('btn-delete').addEventListener('click', ...);
  // Peticiones múltiples
  // document.getElementById('btn-all').addEventListener('click', ...);
  // document.getElementById('btn-race').addEventListener('click', ...);
  // document.getElementById('btn-allSettled').addEventListener('click', ...);
  // Limpiar resultados
  // document.getElementById('btn-clear').addEventListener('click', ...);
};

// ============================================
// INICIALIZACIÓN
// ============================================

/**
 * Inicializa la aplicación
 */
const init = () => {
  console.log('🚀 HTTP Simulator iniciado');
  initEventListeners();
};

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
