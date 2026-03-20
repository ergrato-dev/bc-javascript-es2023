// ============================================
// PROYECTO: Sistema de Carga de Datos Asíncrono
// STARTER - Completa los TODOs
// ============================================

// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta estas constantes a tu dominio asignado.
// Ejemplos:
// - Biblioteca: Libros, Autores, Géneros, Préstamos, Usuarios
// - Farmacia: Medicamentos, Laboratorios, Inventario, Ventas, Proveedores
// - Gimnasio: Miembros, Rutinas, Clases, Equipos, Reservas
// - Restaurante: Platillos, Ingredientes, Mesas, Pedidos, Personal

/**
 * Configuración de las fuentes de datos
 * Cada fuente tiene:
 * - id: identificador único
 * - name: nombre para mostrar
 * - icon: emoji representativo
 * - latency: tiempo de carga simulado en ms
 * - failRate: probabilidad de fallo (0-1)
 * - data: función que retorna los datos
 */
const DATA_SOURCES = [
  // TODO: Define tus fuentes de datos según tu dominio
  // Ejemplo para Planetario:
  // {
  //   id: 'planets',
  //   name: 'Planetas',
  //   icon: '🪐',
  //   latency: 800,
  //   failRate: 0,
  //   data: () => ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Júpiter']
  // },
  // Agrega al menos 5 fuentes de datos
];

// ============================================
// UTILIDADES
// ============================================

/**
 * Helper para simular latencia de red
 * @param {number} ms - Milisegundos a esperar
 * @returns {Promise<void>}
 */
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Determina si una operación debe fallar según la tasa de fallo
 * @param {number} failRate - Tasa de fallo (0-1)
 * @returns {boolean}
 */
const shouldFail = failRate => Math.random() < failRate;

// ============================================
// SIMULADORES DE API
// ============================================

/**
 * Simula una llamada a API para obtener datos
 * @param {Object} source - Configuración de la fuente
 * @returns {Promise<Object>} - Datos de la fuente
 */
const fetchData = async source => {
  // TODO: Implementar simulador de API
  // 1. Esperar el tiempo de latencia usando delay()
  // 2. Si shouldFail(source.failRate) es true, lanzar un error
  // 3. Retornar un objeto con { id, name, items: source.data() }

  return null; // Reemplazar con implementación
};

/**
 * Simula una llamada a API con reintentos automáticos
 * @param {Object} source - Configuración de la fuente
 * @param {number} maxRetries - Número máximo de reintentos
 * @returns {Promise<Object>} - Datos de la fuente
 */
const fetchWithRetry = async (source, maxRetries = 3) => {
  // TODO: Implementar fetch con reintentos
  // 1. Usar un bucle for para intentar hasta maxRetries veces
  // 2. En cada intento, llamar a fetchData(source)
  // 3. Si tiene éxito, retornar los datos
  // 4. Si falla y quedan reintentos, esperar 500ms y reintentar
  // 5. Si se agotan los reintentos, lanzar el último error

  return null; // Reemplazar con implementación
};

// ============================================
// GESTIÓN DE UI
// ============================================

// Referencias a elementos del DOM
const sourcesContainer = document.getElementById('sourcesContainer');
const dataContainer = document.getElementById('dataContainer');
const btnLoadAll = document.getElementById('btnLoadAll');
const btnReset = document.getElementById('btnReset');

// Estadísticas
const statTotalTime = document.getElementById('statTotalTime');
const statSavings = document.getElementById('statSavings');
const statSuccess = document.getElementById('statSuccess');
const statFailed = document.getElementById('statFailed');

/**
 * Renderiza la lista de fuentes de datos
 */
const renderSources = () => {
  // TODO: Implementar renderizado de fuentes
  // Para cada fuente en DATA_SOURCES:
  // 1. Crear un div con clase 'source-card'
  // 2. Incluir nombre con icono
  // 3. Incluir barra de progreso
  // 4. Incluir estado (pendiente inicialmente)
  // 5. Incluir espacio para botón de retry

  sourcesContainer.innerHTML = '<p class="placeholder">Define tus fuentes de datos...</p>';
};

/**
 * Actualiza el estado visual de una fuente
 * @param {string} sourceId - ID de la fuente
 * @param {string} status - Estado: 'pending', 'loading', 'success', 'error'
 * @param {Object} options - Opciones adicionales (time, error)
 */
const updateSourceStatus = (sourceId, status, options = {}) => {
  // TODO: Implementar actualización de estado
  // 1. Buscar el elemento de la fuente por ID
  // 2. Actualizar clases CSS según el estado
  // 3. Actualizar barra de progreso
  // 4. Actualizar texto de estado (tiempo, error, etc.)
  // 5. Si es error, mostrar botón de retry
};

/**
 * Muestra los datos cargados
 * @param {Array} results - Array de resultados exitosos
 */
const renderLoadedData = results => {
  // TODO: Implementar visualización de datos cargados
  // Para cada resultado exitoso:
  // 1. Crear un div con clase 'data-card'
  // 2. Mostrar nombre de la fuente
  // 3. Listar los items obtenidos
};

/**
 * Actualiza las estadísticas
 * @param {Object} stats - Objeto con estadísticas
 */
const updateStatistics = stats => {
  // TODO: Implementar actualización de estadísticas
  // Actualizar los elementos:
  // - statTotalTime: tiempo total en ms
  // - statSavings: ahorro vs secuencial
  // - statSuccess: número de éxitos
  // - statFailed: número de fallos
};

// ============================================
// LÓGICA PRINCIPAL
// ============================================

/**
 * Carga todas las fuentes en paralelo
 */
const loadAllData = async () => {
  // TODO: Implementar carga paralela
  // 1. Deshabilitar botón de carga
  // 2. Marcar todas las fuentes como 'loading'
  // 3. Guardar tiempo de inicio
  // 4. Usar Promise.allSettled para cargar todas las fuentes
  // 5. Procesar resultados (fulfilled vs rejected)
  // 6. Calcular estadísticas
  // 7. Actualizar UI con resultados
  // 8. Habilitar botón de carga

  console.log('TODO: Implementar loadAllData');
};

/**
 * Reintenta cargar una fuente específica
 * @param {string} sourceId - ID de la fuente a reintentar
 */
const retrySource = async sourceId => {
  // TODO: Implementar retry individual
  // 1. Buscar la fuente por ID
  // 2. Marcar como 'loading'
  // 3. Intentar cargar con fetchWithRetry
  // 4. Actualizar estado según resultado

  console.log('TODO: Implementar retrySource');
};

/**
 * Reinicia el estado de la aplicación
 */
const resetAll = () => {
  // TODO: Implementar reset
  // 1. Limpiar estado de todas las fuentes
  // 2. Limpiar datos cargados
  // 3. Reiniciar estadísticas

  console.log('TODO: Implementar resetAll');
};

// ============================================
// EVENT LISTENERS
// ============================================

// TODO: Agregar event listeners a los botones
// btnLoadAll.addEventListener('click', loadAllData);
// btnReset.addEventListener('click', resetAll);

// ============================================
// INICIALIZACIÓN
// ============================================

/**
 * Inicializa la aplicación
 */
const init = () => {
  // TODO: Implementar inicialización
  // 1. Renderizar fuentes de datos
  // 2. Configurar event listeners

  console.log('TODO: Implementar init');
  renderSources();
};

// Ejecutar al cargar
init();
