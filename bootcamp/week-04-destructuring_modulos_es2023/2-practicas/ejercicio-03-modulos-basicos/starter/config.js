/**
 * 📘 Ejercicio 03: Módulos Básicos
 *
 * Archivo: config.js
 *
 * Este es un ejercicio guiado. Descomenta el código para
 * aprender default exports.
 */

// ============================================
// PASO 1: Default Export
// ============================================

// export default exporta un valor principal del módulo
// Solo puede haber UN default export por archivo
// Descomenta las siguientes líneas:

// const config = {
//   appName: 'Module Exercise',
//   version: '1.0.0',
//   debug: true,
//   api: {
//     url: 'https://api.example.com',
//     timeout: 5000
//   }
// };
//
// export default config;

// ============================================
// NOTA: Diferencia con Named Export
// ============================================
// Named export:
//   export const config = { ... };
//   import { config } from './config.js';
//
// Default export:
//   export default { ... };
//   import config from './config.js';  // Sin llaves!
//   import miConfig from './config.js'; // Puedes usar cualquier nombre
