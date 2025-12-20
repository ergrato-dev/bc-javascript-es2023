/**
 * APP.JS
 * Lógica principal del dashboard
 * 
 * TODO: Completa las funciones para hacer que el dashboard sea funcional
 */

// ============================================
// ESTADO GLOBAL
// ============================================

const state = {
  allData: [],
  filteredData: [],
  currentPage: 1,
  itemsPerPage: 10,
  sortColumn: 'id',
  sortOrder: 'asc',
  filters: {
    category: '',
    priceMin: 0,
    priceMax: Infinity,
    stock: '',
    search: ''
  }
};

// ============================================
// ELEMENTOS DEL DOM
// ============================================

const elements = {
  // Estadísticas
  totalProducts: document.getElementById('totalProducts'),
  avgPrice: document.getElementById('avgPrice'),
  maxPrice: document.getElementById('maxPrice'),
  minPrice: document.getElementById('minPrice'),
  totalStock: document.getElementById('totalStock'),
  outOfStock: document.getElementById('outOfStock'),

  // Filtros
  categoryFilter: document.getElementById('categoryFilter'),
  priceMin: document.getElementById('priceMin'),
  priceMax: document.getElementById('priceMax'),
  stockFilter: document.getElementById('stockFilter'),
  searchInput: document.getElementById('searchInput'),
  clearFilters: document.getElementById('clearFilters'),
  exportCSV: document.getElementById('exportCSV'),

  // Tabla
  tableBody: document.getElementById('tableBody'),
  resultInfo: document.getElementById('resultInfo'),
  matchInfo: document.getElementById('matchInfo'),
  matchCount: document.getElementById('matchCount'),

  // Paginación
  prevPage: document.getElementById('prevPage'),
  nextPage: document.getElementById('nextPage'),
  pageIndicator: document.getElementById('pageIndicator'),
  jumpToPage: document.getElementById('jumpToPage'),
  goButton: document.getElementById('goButton'),

  // Tabla header
  tableHeaders: document.querySelectorAll('.data-table th.sortable')
};

// ============================================
// INICIALIZACIÓN
// ============================================

/**
 * Inicializa la aplicación
 */
const init = () => {
  console.log('Inicializando dashboard...');
  
  // TODO: 
  // 1. Cargar datos de PRODUCTS
  // 2. Validar datos con cleanData()
  // 3. Establecer estado inicial
  // 4. Registrar event listeners
  // 5. Renderizar vista inicial
  
  state.allData = cleanData([...PRODUCTS]);
  state.filteredData = [...state.allData];
  
  attachEventListeners();
  render();
};

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Registra todos los event listeners
 */
const attachEventListeners = () => {
  // TODO: Registrar listeners para:
  // - Cambios en filtros (category, priceMin, priceMax, stockFilter)
  // - Búsqueda (searchInput)
  // - Botones de filtro (clearFilters, exportCSV)
  // - Paginación (prevPage, nextPage, goButton)
  // - Ordenamiento (tableHeaders)
};

// ============================================
// MANEJO DE FILTROS
// ============================================

/**
 * Aplica todos los filtros activos
 */
const applyFilters = () => {
  // TODO: Implementar
  // 1. Leer valores de filtros del DOM o state.filters
  // 2. Aplicar filtros en cadena:
  //    - filterByCategory
  //    - filterByPrice
  //    - filterByStock
  //    - searchProducts
  // 3. Guardar resultado en state.filteredData
  // 4. Resetear a página 1
  // 5. Llamar a render()
  
  state.currentPage = 1;
  render();
};

/**
 * Limpia todos los filtros
 */
const clearAllFilters = () => {
  // TODO: Limpiar inputs y resetear estado
  state.filters = {
    category: '',
    priceMin: 0,
    priceMax: Infinity,
    stock: '',
    search: ''
  };
  state.currentPage = 1;
  applyFilters();
};

// ============================================
// MANEJO DE ORDENAMIENTO
// ============================================

/**
 * Cambia el ordenamiento
 * @param {string} column - Columna a ordenar
 */
const handleSort = (column) => {
  // TODO: Implementar
  // Si es la misma columna, alternar asc/desc
  // Si es columna diferente, ordenar ascendente
  // Aplicar sort con sortBy()
  // Llamar a render()
};

// ============================================
// PAGINACIÓN
// ============================================

/**
 * Va a la página anterior
 */
const goToPreviousPage = () => {
  if (state.currentPage > 1) {
    state.currentPage--;
    render();
  }
};

/**
 * Va a la siguiente página
 */
const goToNextPage = () => {
  const maxPage = getTotalPages(state.filteredData.length, state.itemsPerPage);
  if (state.currentPage < maxPage) {
    state.currentPage++;
    render();
  }
};

/**
 * Va a una página específica
 * @param {number} page - Número de página
 */
const goToPage = (page) => {
  // TODO: Validar página e ir si es válida
};

// ============================================
// RENDERIZADO
// ============================================

/**
 * Actualiza las estadísticas mostradas
 */
const renderStats = () => {
  // TODO: Implementar
  // Usar calculateStats(state.filteredData)
  // Actualizar elementos del DOM con valores formateados
};

/**
 * Renderiza la tabla
 */
const renderTable = () => {
  // TODO: Implementar
  // 1. Paginar datos: paginate(state.filteredData, state.currentPage)
  // 2. Si está vacío, mostrar "sin resultados"
  // 3. Si tiene datos, mapear a filas HTML
  // 4. Formatear valores (moneda, fecha)
  // 5. Actualizar tableBody.innerHTML
};

/**
 * Actualiza información de paginación
 */
const renderPagination = () => {
  // TODO: Implementar
  // 1. Calcular total de páginas
  // 2. Actualizar pageIndicator
  // 3. Habilitar/deshabilitar botones prev/next
  // 4. Actualizar jumpToPage value
};

/**
 * Renderiza todo (vista completa)
 */
const render = () => {
  console.log('Renderizando...', state);
  renderStats();
  renderTable();
  renderPagination();
  updateResultInfo();
};

// ============================================
// INFORMACIÓN Y FEEDBACK
// ============================================

/**
 * Actualiza texto de información de resultados
 */
const updateResultInfo = () => {
  // TODO: Mostrar "Mostrando X de Y productos"
  // Si hay búsqueda, mostrar "Z coincidencias encontradas"
};

// ============================================
// EXPORTACIÓN
// ============================================

/**
 * Maneja la exportación a CSV
 */
const handleExport = () => {
  // TODO: Exportar datos filtrados a CSV
  // Usar downloadCSV()
};

// ============================================
// PUNTO DE ENTRADA
// ============================================

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
