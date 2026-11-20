/**
 * 📘 Lab 02: Tagged templates
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Anatomía de un Tagged Template
// ============================================
console.log('--- Paso 1: Anatomía Básica ---');

// Una función tag recibe strings y valores separados
// Descomenta las siguientes líneas:

// const inspect = (strings, ...values) => {
//   console.log('Strings:', strings);
//   console.log('Values:', values);
//   return 'resultado';
// };
//
// const name = 'Ana';
// const age = 25;
// const result = inspect`Nombre: ${name}, Edad: ${age}`;
// console.log('Resultado:', result);

console.log('');

// ============================================
// PASO 2: Reconstruir el String
// ============================================
console.log('--- Paso 2: Reconstruir String ---');

// Combinar strings y values para recrear el original
// Descomenta las siguientes líneas:

// const identity = (strings, ...values) => {
//   return strings.reduce((result, str, i) => {
//     const value = values[i] !== undefined ? values[i] : '';
//     return result + str + value;
//   }, '');
// };
//
// const x = 10;
// const y = 20;
// console.log(identity`${x} + ${y} = ${x + y}`);

console.log('');

// ============================================
// PASO 3: Tag que Transforma Valores
// ============================================
console.log('--- Paso 3: Transformar Valores ---');

// Modificar los valores interpolados
// Descomenta las siguientes líneas:

// const upper = (strings, ...values) => {
//   return strings.reduce((result, str, i) => {
//     let value = values[i];
//     if (typeof value === 'string') {
//       value = value.toUpperCase();
//     }
//     return result + str + (value ?? '');
//   }, '');
// };
//
// const fullName = 'ana garcía';
// const city = 'madrid';
// console.log(upper`Nombre: ${fullName}, Ciudad: ${city}`);

console.log('');

// ============================================
// PASO 4: Tag para Formato de Moneda
// ============================================
console.log('--- Paso 4: Formato de Moneda ---');

// Formatear números como moneda automáticamente
// Descomenta las siguientes líneas:

// const currency = (strings, ...values) => {
//   return strings.reduce((result, str, i) => {
//     let value = values[i];
//     if (typeof value === 'number') {
//       value = value.toLocaleString('es-ES', {
//         style: 'currency',
//         currency: 'EUR'
//       });
//     }
//     return result + str + (value ?? '');
//   }, '');
// };
//
// const price = 1234.5;
// const discount = 123.45;
// console.log(currency`Precio: ${price}, Descuento: ${discount}`);
// console.log(currency`Total: ${price - discount}`);

console.log('');

// ============================================
// PASO 5: Tag para Resaltar Valores
// ============================================
console.log('--- Paso 5: Resaltar Valores ---');

// Envolver valores en marcadores
// Descomenta las siguientes líneas:

// const highlight = (strings, ...values) => {
//   return strings.reduce((result, str, i) => {
//     const value = values[i] !== undefined ? `**${values[i]}**` : '';
//     return result + str + value;
//   }, '');
// };
//
// const product = 'Laptop';
// const laptopPrice = 999;
// console.log(highlight`El producto ${product} cuesta $${laptopPrice}`);
//
// // Para HTML
// const htmlHighlight = (strings, ...values) => {
//   return strings.reduce((result, str, i) => {
//     const value = values[i] !== undefined
//       ? `<strong>${values[i]}</strong>`
//       : '';
//     return result + str + value;
//   }, '');
// };
// console.log(htmlHighlight`Bienvenido, ${product}!`);

console.log('');

// ============================================
// PASO 6: Tag para Escapar HTML (XSS Prevention)
// ============================================
console.log('--- Paso 6: Escapar HTML ---');

// Prevenir ataques XSS escapando valores
// Descomenta las siguientes líneas:

// const escapeHtml = str => {
//   const escapes = {
//     '&': '&amp;',
//     '<': '&lt;',
//     '>': '&gt;',
//     '"': '&quot;',
//     "'": '&#39;'
//   };
//   return String(str).replace(/[&<>"']/g, char => escapes[char]);
// };
//
// const safeHtml = (strings, ...values) => {
//   return strings.reduce((result, str, i) => {
//     const value = values[i] !== undefined ? escapeHtml(values[i]) : '';
//     return result + str + value;
//   }, '');
// };
//
// const userInput = '<script>alert("XSS")</script>';
// const safeOutput = safeHtml`<div>Usuario: ${userInput}</div>`;
// console.log('HTML seguro:', safeOutput);

console.log('');

// ============================================
// PASO 7: Tag Factory - Crear Tags Reutilizables
// ============================================
console.log('--- Paso 7: Tag Factory ---');

// Función que genera funciones tag
// Descomenta las siguientes líneas:

// const createTag = transformer => {
//   return (strings, ...values) => {
//     return strings.reduce((result, str, i) => {
//       const value = values[i] !== undefined
//         ? transformer(values[i])
//         : '';
//       return result + str + value;
//     }, '');
//   };
// };
//
// // Crear diferentes tags
// const upperTag = createTag(v => String(v).toUpperCase());
// const lowerTag = createTag(v => String(v).toLowerCase());
// const jsonTag = createTag(v => JSON.stringify(v));
//
// const userName = 'Ana García';
// console.log(upperTag`Nombre: ${userName}`);
// console.log(lowerTag`Nombre: ${userName}`);
//
// const data = { x: 1, y: 2 };
// console.log(jsonTag`Data: ${data}`);

console.log('');

// ============================================
// PASO 8: String.raw - Strings Crudos
// ============================================
console.log('--- Paso 8: String.raw ---');

// String.raw no procesa secuencias de escape
// Descomenta las siguientes líneas:

// // Normal: interpreta \n como salto de línea
// console.log('Normal:', `Line1\nLine2`);
//
// // String.raw: mantiene \n literal
// console.log('Raw:', String.raw`Line1\nLine2`);
//
// // Útil para rutas de Windows
// console.log('Path normal:', `C:\Users\name`);  // Interpreta \U y \n
// console.log('Path raw:', String.raw`C:\Users\name`);
//
// // Útil para RegExp
// const pattern = String.raw`\d+\.\d+`;
// console.log('Pattern:', pattern);
// console.log('RegExp:', new RegExp(pattern));

console.log('');

// ============================================
// PASO 9: Caso Práctico - Debug Logger
// ============================================
console.log('--- Paso 9: Debug Logger ---');

// Tag para logging con formato
// Descomenta las siguientes líneas:

// const debug = (strings, ...values) => {
//   const timestamp = new Date().toISOString().slice(11, 19);
//   const message = strings.reduce((result, str, i) => {
//     let value = values[i];
//     if (typeof value === 'object') {
//       value = JSON.stringify(value, null, 2);
//     }
//     return result + str + (value ?? '');
//   }, '');
//
//   console.log(`[${timestamp}] ${message}`);
//   return message;
// };
//
// const user = { id: 1, name: 'Ana' };
// const action = 'login';
// debug`Usuario ${user} realizó acción: ${action}`;

console.log('');

console.log('✅ Lab completado.');
