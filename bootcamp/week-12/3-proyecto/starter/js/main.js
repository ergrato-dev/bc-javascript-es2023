/**
 * Main Entry Point
 * Starts the application when DOM is ready
 */

import { app } from './app.js';

// ============================================
// APP INITIALIZATION
// ============================================

/**
 * Wait for DOM to be ready, then initialize app
 */
const initializeApp = () => {
  // TODO: Inicializar la aplicación
  // app.init();

  console.log('='.repeat(50));
  console.log('🛒 TechStore E-commerce App');
  console.log('Week 12: Proyecto Integrador');
  console.log('='.repeat(50));
  console.log('');
  console.log('📝 Para completar este proyecto:');
  console.log('1. Implementa los TODOs en models/');
  console.log('2. Implementa los TODOs en services/');
  console.log('3. Implementa los TODOs en ui/');
  console.log('4. Descomenta app.init() en este archivo');
  console.log('');
  console.log(
    '💡 Tip: Empieza por los models, luego services, y finalmente ui'
  );
  console.log('');
};

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
