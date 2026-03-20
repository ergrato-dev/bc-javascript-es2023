// ============================================
// PAGINADOR CON GENERADORES - STARTER
// ============================================
// Completa los TODOs para implementar el paginador

// ============================================
// GENERADOR DE DATOS
// ============================================

/**
 * Generador que produce items de datos simulados
 * @param {number} total - Cantidad total de items a generar
 * @yields {Object} Item con id, title y description
 */
function* dataGenerator(total) {
  // TODO: Implementar generador que produce items del 1 al total
  // Cada item debe tener: { id, title, description }
  // Ejemplo: { id: 1, title: 'Item 1', description: 'Descripción del elemento 1' }
}

// ============================================
// UTILIDADES DE GENERADORES
// ============================================

/**
 * Toma los primeros n elementos de un iterador
 * @param {Iterator} iterator - Iterador fuente
 * @param {number} n - Cantidad de elementos a tomar
 * @yields {*} Elementos del iterador
 */
function* take(iterator, n) {
  // TODO: Implementar función que tome solo n elementos
  // Debe parar si el iterador termina antes de n
}

/**
 * Salta los primeros n elementos de un iterador
 * @param {Iterator} iterator - Iterador fuente
 * @param {number} n - Cantidad de elementos a saltar
 * @yields {*} Elementos restantes del iterador
 */
function* skip(iterator, n) {
  // TODO: Implementar función que salte n elementos
  // y luego produzca el resto
}

// ============================================
// CLASE PAGINATOR
// ============================================

/**
 * Paginador que usa generadores para lazy loading
 */
class Paginator {
  /**
   * @param {Function} generatorFn - Función generadora de datos
   * @param {number} totalItems - Total de items disponibles
   * @param {number} itemsPerPage - Items a mostrar por página
   */
  constructor(generatorFn, totalItems, itemsPerPage = 5) {
    // TODO: Inicializar propiedades
    // - generatorFn: función que crea el generador
    // - totalItems: total de items
    // - itemsPerPage: items por página
    // - currentPage: página actual (empieza en 1)
  }

  /**
   * Calcula el total de páginas
   * @returns {number} Total de páginas
   */
  get totalPages() {
    // TODO: Calcular total de páginas
    // Math.ceil(totalItems / itemsPerPage)
    return 1;
  }

  /**
   * Verifica si hay página siguiente
   * @returns {boolean}
   */
  get hasNext() {
    // TODO: Retornar true si currentPage < totalPages
    return false;
  }

  /**
   * Verifica si hay página anterior
   * @returns {boolean}
   */
  get hasPrevious() {
    // TODO: Retornar true si currentPage > 1
    return false;
  }

  /**
   * Obtiene los items de la página actual usando generadores
   * @returns {Array} Items de la página actual
   */
  getPageItems() {
    // TODO: Implementar usando los generadores take y skip
    // 1. Crear nuevo generador con generatorFn()
    // 2. Calcular cuántos items saltar: (currentPage - 1) * itemsPerPage
    // 3. Usar skip() para saltar items
    // 4. Usar take() para tomar itemsPerPage items
    // 5. Convertir a array con [...resultado]
    return [];
  }

  /**
   * Va a la página siguiente
   * @returns {boolean} true si cambió de página
   */
  next() {
    // TODO: Si hasNext, incrementar currentPage y retornar true
    return false;
  }

  /**
   * Va a la página anterior
   * @returns {boolean} true si cambió de página
   */
  previous() {
    // TODO: Si hasPrevious, decrementar currentPage y retornar true
    return false;
  }

  /**
   * Va a una página específica
   * @param {number} page - Número de página
   * @returns {boolean} true si la página es válida
   */
  goToPage(page) {
    // TODO: Validar que page esté entre 1 y totalPages
    // Si es válida, actualizar currentPage y retornar true
    return false;
  }

  /**
   * Va a la primera página
   */
  first() {
    // TODO: Establecer currentPage = 1
  }

  /**
   * Va a la última página
   */
  last() {
    // TODO: Establecer currentPage = totalPages
  }

  /**
   * Cambia la cantidad de items por página
   * @param {number} newItemsPerPage - Nueva cantidad
   */
  setItemsPerPage(newItemsPerPage) {
    // TODO: Actualizar itemsPerPage
    // Recalcular currentPage para mantener posición aproximada
    // (opcional: mantener el primer item visible)
  }

  /**
   * Obtiene el rango de items mostrados
   * @returns {Object} { start, end } del rango actual
   */
  getRange() {
    // TODO: Calcular start y end
    // start = (currentPage - 1) * itemsPerPage + 1
    // end = Math.min(currentPage * itemsPerPage, totalItems)
    return { start: 1, end: 1 };
  }
}

// ============================================
// CONTROLADOR DE UI
// ============================================

// Estado de la aplicación
let paginator = null;

// Referencias al DOM
const elements = {
  totalItems: document.getElementById('totalItems'),
  itemsPerPage: document.getElementById('itemsPerPage'),
  btnGenerate: document.getElementById('btnGenerate'),
  dataList: document.getElementById('dataList'),
  pagination: document.getElementById('pagination'),
  btnFirst: document.getElementById('btnFirst'),
  btnPrev: document.getElementById('btnPrev'),
  btnNext: document.getElementById('btnNext'),
  btnLast: document.getElementById('btnLast'),
  pageInput: document.getElementById('pageInput'),
  totalPages: document.getElementById('totalPages'),
  stats: document.getElementById('stats'),
  itemRange: document.getElementById('itemRange'),
  totalItemsDisplay: document.getElementById('totalItemsDisplay'),
};

/**
 * Renderiza los items de la página actual
 */
function renderItems() {
  // TODO: Implementar renderizado
  // 1. Obtener items con paginator.getPageItems()
  // 2. Generar HTML para cada item usando createItemHTML()
  // 3. Actualizar elements.dataList.innerHTML
  // 4. Llamar a updatePaginationUI()
}

/**
 * Crea el HTML para un item
 * @param {Object} item - Item a renderizar
 * @returns {string} HTML del item
 */
function createItemHTML(item) {
  // TODO: Retornar HTML del item
  // Usar las clases: data-item, data-item-id, data-item-content,
  // data-item-title, data-item-description
  return `
    <div class="data-item">
      <div class="data-item-id">${item.id}</div>
      <div class="data-item-content">
        <div class="data-item-title">${item.title}</div>
        <div class="data-item-description">${item.description}</div>
      </div>
    </div>
  `;
}

/**
 * Actualiza la UI de paginación
 */
function updatePaginationUI() {
  // TODO: Implementar actualización de UI
  // 1. Actualizar estado de botones (disabled si no hay prev/next)
  // 2. Actualizar pageInput.value con currentPage
  // 3. Actualizar totalPages text
  // 4. Actualizar itemRange con getRange()
  // 5. Actualizar totalItemsDisplay
}

/**
 * Inicializa el paginador con los valores seleccionados
 */
function initializePaginator() {
  // TODO: Implementar inicialización
  // 1. Obtener valores de totalItems y itemsPerPage
  // 2. Crear nuevo Paginator con dataGenerator
  // 3. Mostrar pagination y stats
  // 4. Llamar a renderItems()
}

// ============================================
// EVENT LISTENERS
// ============================================

// TODO: Agregar event listeners

// Botón generar
elements.btnGenerate.addEventListener('click', () => {
  // TODO: Llamar a initializePaginator()
});

// Botones de navegación
elements.btnFirst.addEventListener('click', () => {
  // TODO: Llamar a paginator.first() y renderItems()
});

elements.btnPrev.addEventListener('click', () => {
  // TODO: Llamar a paginator.previous() y renderItems()
});

elements.btnNext.addEventListener('click', () => {
  // TODO: Llamar a paginator.next() y renderItems()
});

elements.btnLast.addEventListener('click', () => {
  // TODO: Llamar a paginator.last() y renderItems()
});

// Input de página
elements.pageInput.addEventListener('change', e => {
  // TODO: Llamar a paginator.goToPage() con el valor del input
  // Si es válido, renderItems()
});

// Selector de items por página
elements.itemsPerPage.addEventListener('change', e => {
  // TODO: Si hay paginator, llamar a setItemsPerPage() y renderItems()
});

// ============================================
// INICIALIZACIÓN
// ============================================

console.log('🚀 Paginador con Generadores - Starter');
console.log('Completa los TODOs para implementar el paginador');
