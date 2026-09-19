/**
 * ============================================
 * PROYECTO SEMANA 04 - SISTEMA MODULAR ES
 * Punto de entrada principal de la aplicación
 * ============================================
 *
 * INSTRUCCIONES:
 * 1. Lee el README.md del proyecto para entender la estructura
 * 2. Adapta TODOS los módulos a tu dominio asignado
 * 3. Usa import/export (módulos ES) en todos los archivos
 * 4. Implementa dynamic imports para features
 * 5. Comentarios en español, nomenclatura en inglés
 *
 * NOTA IMPORTANTE:
 * Este proyecto usa arquitectura modular.
 * Debes adaptar TODOS los módulos a tu dominio.
 *
 * EJEMPLO (Planetario - NO asignable):
 * - Product.js → CelestialBody.js
 * - inventory.js → observatory.js
 * - CATEGORIES: planet, star, satellite
 *
 * ============================================
 */

// ============================================
// TODO 1: IMPORTAR DEPENDENCIAS
// ============================================
// Usa named imports para traer las dependencias necesarias
// Recuerda usar destructuring en los imports

// Importar configuración
// import { CATEGORIES, APP_CONFIG } from './config.js';

// Importar servicios (usa barrel export)
// import { manager } from './services/index.js';

// Importar funciones de UI (usa barrel export)
// import {
//   initEvents,
//   renderItems,
//   renderCategoryOptions,
//   updateItemCount
// } from './ui/index.js';

// ============================================
// TODO 2: INICIALIZAR LA APLICACIÓN
// ============================================

/**
 * Inicializa la aplicación
 * Esta función se ejecuta cuando el DOM está listo
 */
const init = () => {
  console.log('🚀 Iniciando aplicación...');

  // TODO: Implementa la inicialización en orden:
  // 1. Cargar elementos desde localStorage
  // manager.loadFromStorage();

  // 2. Renderizar opciones de categoría en los selectores
  // renderCategoryOptions(CATEGORIES);

  // 3. Renderizar la lista de elementos
  // renderItems(manager.getAll());

  // 4. Actualizar contador de elementos
  // updateItemCount(manager.getCount());

  // 5. Inicializar event listeners
  // initEvents();

  console.log('✅ Aplicación inicializada correctamente');
};

// ============================================
// TODO 3: FUNCIÓN PARA CARGAR REPORTES (DYNAMIC IMPORT)
// ============================================

/**
 * Carga el módulo de reportes bajo demanda
 * Usa dynamic import para lazy loading
 * @returns {Promise} Resultado del reporte
 */
const loadReports = async () => {
  // TODO: Implementa dynamic import
  // try {
  //   // Importa el módulo de reportes solo cuando se necesita
  //   const { generateReport, getStatistics } = await import('./features/reports.js');
  //
  //   // Genera el reporte con los elementos actuales
  //   const items = manager.getAll();
  //   const report = generateReport(items);
  //   const stats = getStatistics(items);
  //
  //   console.log('📊 Reporte generado:', report);
  //   return { report, stats };
  // } catch (error) {
  //   console.error('Error cargando módulo de reportes:', error);
  //   throw error;
  // }
};

// ============================================
// TODO 4: FUNCIÓN PARA EXPORTAR DATOS (DYNAMIC IMPORT)
// ============================================

/**
 * Carga el módulo de exportación bajo demanda
 * @param {string} format - Formato de exportación ('csv' | 'json')
 */
const loadExport = async format => {
  // TODO: Implementa dynamic import para exportación
  // try {
  //   const exportModule = await import('./features/export.js');
  //
  //   const items = manager.getAll();
  //
  //   if (format === 'csv') {
  //     exportModule.exportToCSV(items);
  //   } else {
  //     exportModule.exportToJSON(items);
  //   }
  // } catch (error) {
  //   console.error('Error cargando módulo de exportación:', error);
  // }
};

// ============================================
// EJECUTAR CUANDO EL DOM ESTÉ LISTO
// ============================================
document.addEventListener('DOMContentLoaded', init);

// ============================================
// EXPORTAR FUNCIONES PARA USO EXTERNO
// ============================================
// Exporta las funciones que podrían ser usadas por otros módulos
export { init, loadReports, loadExport };
