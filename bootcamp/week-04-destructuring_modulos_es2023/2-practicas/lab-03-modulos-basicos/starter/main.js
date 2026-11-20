/**
 * 📘 Lab 03: Módulos básicos
 *
 * Archivo: main.js (punto de entrada)
 *
 * Este es un lab guiado. En cada paso descomenta los exports del módulo que toca,
 * su import de aquí arriba y el bloque de prueba del paso.
 *
 * Ejecuta desde la carpeta del lab: node starter/main.js
 */

// Los import van al principio del archivo: se resuelven antes de ejecutar ninguna otra línea.
// Paso 1
// import { PI, sum, multiply, divide, power } from './utils/math.js';
// Paso 2
// import { capitalize, reverse, truncate, slugify } from './utils/strings.js';
// Paso 3
// import * as utils from './utils/index.js';
// Paso 4
// import config from './config.js';
// import settings from './config.js';
// Paso 5
// import { sum as add, capitalize as upperFirst } from './utils/index.js';

console.log('--- Paso 1: Named exports (math.js) ---');
// console.log('PI =', PI);
// console.log('sum(5, 3) =', sum(5, 3));
// console.log('multiply(4, 7) =', multiply(4, 7));
// console.log('divide(10, 4) =', divide(10, 4), '· divide(1, 0) =', divide(1, 0));
// console.log('power(2, 10) =', power(2, 10));
console.log('');

console.log('--- Paso 2: Named exports (strings.js) ---');
// console.log(capitalize('planeta'));
// console.log(reverse('Sirio'));
// console.log(truncate('Nebulosa de Orión', 8));
// console.log(slugify('  Gran Mancha Roja  '));
console.log('');

console.log('--- Paso 3: Barrel e import * as ---');
// console.log('El barrel exporta:', Object.keys(utils));
// console.log('utils.sum(2, 2) =', utils.sum(2, 2));
// console.log('Mismas funciones:', utils.sum === sum);
console.log('');

console.log('--- Paso 4: Default export ---');
// console.log(`${config.appName} v${config.version}`);
// console.log('API:', config.api.url, `(${config.api.timeout} ms)`);
// console.log('Mismo objeto con otro nombre:', settings === config);
console.log('');

console.log('--- Paso 5: Renombrar al importar ---');
// console.log('add(1, 2) =', add(1, 2));
// console.log(upperFirst('júpiter'));
console.log('');

console.log('✅ Lab completado.');
