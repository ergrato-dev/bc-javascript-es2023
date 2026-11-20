/**
 * 📘 Lab 04: Imports avanzados
 *
 * Archivo: app.js (punto de entrada)
 *
 * Este es un lab guiado. import() carga un módulo mientras el programa ya se está
 * ejecutando y devuelve una promesa con el módulo. Descomenta el bloque de cada paso.
 *
 * Ejecuta desde la carpeta del lab: node starter/app.js
 */

console.log('--- Paso 1: import() básico ---');
// En un módulo, await se puede usar fuera de una función (top-level await).
// const calculator = await import('./features/calculator.js');
// console.log('Exports:', Object.keys(calculator));
// console.log('add(2, 3) =', calculator.add(2, 3));
// console.log('Default:', calculator.default.name, calculator.default.version);
console.log('');

console.log('--- Paso 2: import() con destructuring ---');
// const { celsiusToFahrenheit, kmToMiles } = await import('./features/converter.js');
// console.log('25 °C =', celsiusToFahrenheit(25), '°F');
// console.log('10 km =', kmToMiles(10).toFixed(2), 'millas');
console.log('');

console.log('--- Paso 3: El default export se llama default ---');
// const { default: formatter, formatNumber } = await import('./features/formatter.js');
// console.log(formatter.name, '·', formatNumber(3.14159, 3));
// console.log(formatter.formatCurrency(1234.5, 'EUR'));
// console.log(formatter.formatDate(new Date(2026, 2, 14)));
console.log('');

console.log('--- Paso 4: Cargar solo lo que se pide ---');
// const featurePaths = {
//   calculator: './features/calculator.js',
//   converter: './features/converter.js',
// };
// const loadFeature = async (name) => {
//   const path = featurePaths[name];
//   if (!path) throw new Error(`Feature desconocida: ${name}`);
//   const { default: feature } = await import(path);
//   return feature;
// };
// const requested = 'converter';
// const feature = await loadFeature(requested);
// console.log(`Cargada ${requested}:`, feature.name);
console.log('');

console.log('--- Paso 5: Varios módulos a la vez y caché ---');
// Promise.all espera a todas las promesas y devuelve sus resultados en el mismo orden.
// const [calc, conv] = await Promise.all([
//   import('./features/calculator.js'),
//   import('./features/converter.js'),
// ]);
// console.log(calc.default.name, '+', conv.default.name);
// const again = await import('./features/calculator.js');
// console.log('Mismo módulo que en el paso 1:', again === calc);
console.log('');

console.log('--- Paso 6: Errores al cargar ---');
// try {
//   await import('./features/missing.js');
// } catch (error) {
//   console.log('Error:', error.code);
// }
console.log('');

console.log('✅ Lab completado.');
