/**
 * 📘 Ejercicio 03: Módulos Básicos
 *
 * Archivo: utils/index.js (Barrel Export)
 *
 * Este es un ejercicio guiado. Descomenta el código para crear
 * un barrel export que re-exporta todo de los otros módulos.
 */

// ============================================
// PASO 1: Re-exportar todo de math.js
// ============================================

// La sintaxis export * from './module' re-exporta todo
// Descomenta la siguiente línea:

// export * from './math.js';

// ============================================
// PASO 2: Re-exportar todo de strings.js
// ============================================

// Descomenta la siguiente línea:

// export * from './strings.js';

// ============================================
// NOTA: Barrel Pattern
// ============================================
// Ahora en lugar de importar de cada archivo:
//   import { sum } from './utils/math.js';
//   import { capitalize } from './utils/strings.js';
//
// Podemos importar todo desde un solo punto:
//   import { sum, capitalize } from './utils/index.js';
// O simplemente:
//   import { sum, capitalize } from './utils';
