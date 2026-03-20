/**
 * ============================================
 * MÓDULO DE CONFIGURACIÓN
 * Constantes y configuración global de la aplicación
 * ============================================
 *
 * INSTRUCCIONES:
 * Adapta TODA la configuración a tu dominio asignado.
 * Los valores aquí definidos se usarán en toda la aplicación.
 *
 * EJEMPLO (Planetario - NO asignable):
 * - APP_CONFIG.name: 'Observatorio Estelar'
 * - CATEGORIES: planet, star, satellite, asteroid
 * - THRESHOLDS: magnitud máxima visible
 *
 * ============================================
 */

// ============================================
// TODO 1: CONFIGURACIÓN DE LA APLICACIÓN
// ============================================
// Adapta estos valores a tu dominio

export const APP_CONFIG = {
  // TODO: Cambia el nombre según tu dominio
  name: 'Sistema de Gestión',
  version: '1.0.0',
  // TODO: Cambia la key de storage según tu dominio
  storageKey: 'system_items',
};

// ============================================
// TODO 2: UMBRALES Y LÍMITES
// ============================================
// Define los umbrales específicos de tu dominio
//
// EJEMPLO Planetario:
// export const THRESHOLDS = {
//   visibleMagnitude: 6,      // Magnitud máxima visible a simple vista
//   nearDistance: 10,         // Distancia considerada "cercana" (UA)
// };

export const THRESHOLDS = {
  // TODO: Define los umbrales de tu dominio
  low: 10,
  critical: 5,
};

// ============================================
// TODO 3: CATEGORÍAS DEL DOMINIO
// ============================================
// Define las categorías específicas de tu dominio.
// Cada categoría debe tener: id, name, icon (emoji)
//
// EJEMPLO (Planetario - NO asignable):
// export const CATEGORIES = [
//   { id: 'planet', name: 'Planeta', icon: '🪐' },
//   { id: 'star', name: 'Estrella', icon: '⭐' },
//   { id: 'satellite', name: 'Satélite', icon: '🌙' },
//   { id: 'asteroid', name: 'Asteroide', icon: '☄️' },
// ];

export const CATEGORIES = [
  // TODO: Define las categorías de tu dominio
  // { id: 'category1', name: 'Categoría 1', icon: '🔹' },
  // { id: 'category2', name: 'Categoría 2', icon: '🔸' },
  // { id: 'category3', name: 'Categoría 3', icon: '🔷' },
  // { id: 'other', name: 'Otro', icon: '📌' },
];

// ============================================
// TODO 4: ESTADOS POSIBLES (si aplica)
// ============================================
// Define los estados que pueden tener los elementos
//
// EJEMPLO Planetario:
// export const STATES = {
//   VISIBLE: { id: 'visible', name: 'Visible', color: '#22c55e' },
//   HIDDEN: { id: 'hidden', name: 'Oculto', color: '#ef4444' },
// };

export const STATES = {
  ACTIVE: { id: 'active', name: 'Activo', color: '#22c55e' },
  INACTIVE: { id: 'inactive', name: 'Inactivo', color: '#ef4444' },
};

// ============================================
// DEFAULT EXPORT (para conveniencia)
// ============================================
// Permite importar todo con: import config from './config.js'

export default {
  APP_CONFIG,
  THRESHOLDS,
  CATEGORIES,
  STATES,
};
