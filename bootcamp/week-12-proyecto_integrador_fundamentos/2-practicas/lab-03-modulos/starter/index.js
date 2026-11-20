/**
 * 📘 Lab 03: Módulos ES
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Importar exports con nombre
// ============================================
console.log('--- Paso 1: Exports con nombre ---');

// utils/format.js exporta APP_NAME, formatPrice, validateEmail y badge.
// Entre llaves van los nombres exactos que exporta el módulo; la ruta empieza por ./ y lleva la extensión .js.
// Descomenta las siguientes líneas:

// import { APP_NAME, formatPrice, validateEmail } from './utils/format.js';
//
// console.log(`APP_NAME = ${APP_NAME}`);
// console.log(`formatPrice(99.99) = ${formatPrice(99.99)}`);
// console.log(`validateEmail('ana@mail.com') = ${validateEmail('ana@mail.com')}`);

console.log('');

// ============================================
// PASO 2: Renombrar e importar el módulo entero
// ============================================
console.log('--- Paso 2: Renombrar y namespace ---');

// as cambia el nombre local de un import; * as reúne todos los exports en un objeto.
// Descomenta las siguientes líneas:

// import { formatPrice as toDollars } from './utils/format.js';
// import * as format from './utils/format.js';
//
// console.log(`toDollars(5) = ${toDollars(5)}`);
// console.log('Exports de format.js:', Object.keys(format));
// console.log(`format.badge('nuevo') = ${format.badge('nuevo')}`);
// console.log(`¿Se ve pad? ${'pad' in format}`);

console.log('');

// ============================================
// PASO 3: Export por defecto
// ============================================
console.log('--- Paso 3: Export por defecto ---');

// models/Product.js tiene un export default (la clase) y un export con nombre (MAX_PRICE).
// El default se importa sin llaves y con el nombre que quieras; los demás, entre llaves.
// Descomenta las siguientes líneas:

// import Product, { MAX_PRICE } from './models/Product.js';
//
// const lamp = new Product('Lámpara', 45);
// console.log(lamp);
// console.log(`¿Supera ${MAX_PRICE}? ${lamp.price > MAX_PRICE}`);

console.log('');

// ============================================
// PASO 4: Un punto de entrada por carpeta
// ============================================
console.log('--- Paso 4: Re-exportación con index.js ---');

// models/index.js re-exporta Product y User: se importan los dos desde un solo sitio.
// La ruta incluye index.js: en los módulos ES, Node no lo busca solo.
// Descomenta las siguientes líneas:

// import { Product as Item, User } from './models/index.js';
//
// const ana = new User('Ana', 'ana@mail.com');
// const desk = new Item('Escritorio', 230);
// console.log(`${ana.name} compra ${desk.name}`);

console.log('');

// ============================================
// PASO 5: import() dinámico
// ============================================
console.log('--- Paso 5: import() dinámico ---');

// import() carga un módulo cuando el programa llega a esa línea y devuelve una promesa.
// await espera a que llegue; fuera de una función, Node lo permite porque este archivo es un módulo.
// Descomenta las siguientes líneas:

// console.log('Antes de import()');
// const { totalReport } = await import('./services/report.js');
// console.log('Después de import()');
// console.log(totalReport([{ price: 45 }, { price: 230 }]));

console.log('');
console.log('✅ Lab completado.');
