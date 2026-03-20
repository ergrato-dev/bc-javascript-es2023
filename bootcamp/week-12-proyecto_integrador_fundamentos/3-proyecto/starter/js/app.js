/**
 * App - Main Application Controller
 * Coordinates all components
 */

import { ProductList } from './ui/ProductList.js';
import { CartView } from './ui/CartView.js';
import { AuthView } from './ui/AuthView.js';
import { Notifications } from './ui/Notifications.js';

class App {
  /**
   * Initialize the application
   */
  init() {
    // TODO: Inicializar todos los componentes UI
    // console.log('🚀 Initializing TechStore App...');
    //
    // try {
    //   // Initialize UI components
    //   ProductList.init();
    //   CartView.init();
    //   AuthView.init();
    //
    //   console.log('✅ App initialized successfully');
    //   Notifications.success('¡Bienvenido a TechStore!');
    // } catch (error) {
    //   console.error('❌ Error initializing app:', error);
    //   Notifications.error('Error al cargar la aplicación');
    // }

    console.log('App.init() - TODO: Descomentar código para inicializar');
    console.log('Implementa los TODOs en models/, services/ y ui/ primero');
  }
}

// Export singleton instance
export const app = new App();
