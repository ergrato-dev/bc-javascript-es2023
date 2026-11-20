/**
 * 📘 Lab 03: Módulos básicos
 *
 * Archivo: utils/strings.js (paso 2)
 *
 * Más named exports, esta vez de funciones de texto. Descomenta los cuatro.
 */

// Primera letra en mayúscula: 'hola' → 'Hola'
// export const capitalize = (text) => (text ? text[0].toUpperCase() + text.slice(1) : '');

// Le da la vuelta al texto: 'hola' → 'aloh'
// export const reverse = (text) => [...text].reverse().join('');

// Corta el texto a `length` caracteres y añade '...'
// export const truncate = (text, length) => (text.length <= length ? text : `${text.slice(0, length)}...`);

// Texto para una URL: 'Hola Mundo' → 'hola-mundo'
// export const slugify = (text) => text.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
