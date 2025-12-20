/**
 * UTILS.JS
 * Funciones utilitarias para transformación de arrays
 * 
 * IMPORTANTES: Completa estas funciones usando métodos avanzados de arrays
 * Métodos a usar: flat(), flatMap(), Array.from(), sort(), filter(), map(), reduce()
 */

// ============================================
// FUNCIONES DE FILTRADO
// ============================================

/**
 * Filtra productos por categoría
 * @param {Array} products - Array de productos
 * @param {string} category - Categoría a filtrar
 * @returns {Array} Productos filtrados
 */
const filterByCategory = (products, category) => {
  // TODO: Implementar
  return products;
};

/**
 * Filtra productos por rango de precio
 * @param {Array} products - Array de productos
 * @param {number} min - Precio mínimo
 * @param {number} max - Precio máximo
 * @returns {Array} Productos dentro del rango
 */
const filterByPrice = (products, min, max) => {
  // TODO: Implementar
  return products;
};

/**
 * Filtra productos por disponibilidad
 * @param {Array} products - Array de productos
 * @param {string} status - 'inStock' o 'outOfStock'
 * @returns {Array} Productos filtrados
 */
const filterByStock = (products, status) => {
  // TODO: Implementar
  return products;
};

/**
 * Busca productos por nombre o ID
 * @param {Array} products - Array de productos
 * @param {string} term - Término a buscar
 * @returns {Array} Productos que coinciden
 */
const searchProducts = (products, term) => {
  // TODO: Implementar - case insensitive
  return products;
};

// ============================================
// FUNCIONES DE ORDENAMIENTO
// ============================================

/**
 * Ordena productos por columna
 * @param {Array} products - Array de productos
 * @param {string} column - Columna a ordenar (id, name, price, stock, etc)
 * @param {string} order - 'asc' o 'desc'
 * @returns {Array} Array ordenado
 */
const sortBy = (products, column, order = 'asc') => {
  // TODO: Implementar usando sort()
  // Considera: numéricos (precio, stock), strings (nombre), fechas
  return [...products];
};

// ============================================
// FUNCIONES DE ESTADÍSTICAS (REDUCE)
// ============================================

/**
 * Calcula estadísticas del array
 * @param {Array} products - Array de productos
 * @returns {Object} Objeto con estadísticas
 */
const calculateStats = (products) => {
  // TODO: Implementar usando reduce()
  // Retornar: { total, avgPrice, maxPrice, minPrice, totalStock, outOfStock }
  return {
    total: 0,
    avgPrice: 0,
    maxPrice: 0,
    minPrice: 0,
    totalStock: 0,
    outOfStock: 0
  };
};

// ============================================
// FUNCIONES DE PAGINACIÓN
// ============================================

/**
 * Pagina un array
 * @param {Array} items - Array a paginar
 * @param {number} page - Número de página (1-indexed)
 * @param {number} pageSize - Elementos por página
 * @returns {Array} Items de la página especificada
 */
const paginate = (items, page, pageSize = 10) => {
  // TODO: Implementar usando slice()
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return items.slice(start, end);
};

/**
 * Calcula total de páginas
 * @param {number} totalItems - Total de items
 * @param {number} pageSize - Items por página
 * @returns {number} Total de páginas
 */
const getTotalPages = (totalItems, pageSize = 10) => {
  return Math.ceil(totalItems / pageSize);
};

// ============================================
// FUNCIONES DE TRANSFORMACIÓN
// ============================================

/**
 * Formatea moneda
 * @param {number} amount - Cantidad a formatear
 * @returns {string} Cantidad formateada como moneda
 */
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(amount);
};

/**
 * Formatea fecha
 * @param {string} dateStr - Fecha en formato YYYY-MM-DD
 * @returns {string} Fecha formateada
 */
const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('es-CO');
};

// ============================================
// FUNCIONES DE EXPORTACIÓN
// ============================================

/**
 * Convierte array de objetos a CSV
 * @param {Array} data - Array de objetos
 * @param {Array} columns - Columnas a exportar
 * @returns {string} Datos en formato CSV
 */
const convertToCSV = (data, columns) => {
  // TODO: Implementar usando map() y join()
  // Formato: encabezados\n fila1\n fila2...
  return '';
};

/**
 * Descarga datos como CSV
 * @param {Array} data - Datos a descargar
 * @param {string} filename - Nombre del archivo
 */
const downloadCSV = (data, filename = 'data.csv') => {
  const csv = convertToCSV(data, ['id', 'name', 'category', 'price', 'stock', 'date']);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
};

// ============================================
// FUNCIONES DE VALIDACIÓN
// ============================================

/**
 * Valida que un producto tenga todas las propiedades requeridas
 * @param {Object} product - Producto a validar
 * @returns {boolean} true si es válido
 */
const isValidProduct = (product) => {
  // TODO: Implementar
  const requiredFields = ['id', 'name', 'category', 'price', 'stock', 'date'];
  return requiredFields.every(field => field in product);
};

/**
 * Limpia y valida datos
 * @param {Array} data - Datos brutos
 * @returns {Array} Datos validados y limpios
 */
const cleanData = (data) => {
  // TODO: Implementar usando filter() y map()
  // Validar cada producto y descartar inválidos
  return data;
};
