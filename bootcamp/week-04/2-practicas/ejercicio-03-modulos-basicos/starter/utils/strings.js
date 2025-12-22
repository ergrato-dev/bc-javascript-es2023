/**
 * 📘 Ejercicio 03: Módulos Básicos
 *
 * Archivo: utils/strings.js
 *
 * Este es un ejercicio guiado. Descomenta el código en cada paso
 * para aprender named exports de funciones de strings.
 */

// ============================================
// PASO 1: Exportar capitalize
// ============================================

// Convierte la primera letra a mayúscula
// Descomenta las siguientes líneas:

// export const capitalize = str => {
//   if (!str) return '';
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };

// ============================================
// PASO 2: Exportar reverse
// ============================================

// Invierte un string usando spread y reverse
// Descomenta la siguiente línea:

// export const reverse = str => [...str].reverse().join('');

// ============================================
// PASO 3: Exportar truncate
// ============================================

// Corta el string a una longitud máxima y agrega "..."
// Descomenta las siguientes líneas:

// export const truncate = (str, length) => {
//   if (str.length <= length) return str;
//   return str.slice(0, length) + '...';
// };

// ============================================
// PASO 4: Exportar slugify
// ============================================

// Convierte "Hello World" a "hello-world"
// Descomenta las siguientes líneas:

// export const slugify = str => {
//   return str
//     .toLowerCase()
//     .trim()
//     .replace(/\s+/g, '-')
//     .replace(/[^\w-]/g, '');
// };
