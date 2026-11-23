/**
 * 📘 Lab 01: Module, Singleton y Factory
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta, desde la carpeta starter:
 *
 *   node index.js
 *
 * Los pasos van en orden: cada uno usa lo de los anteriores.
 */

// ============================================
// PASO 1: Un módulo, con su parte pública y su parte privada
// ============================================
console.log('--- Paso 1: un módulo ---');

// Descomenta las siguientes líneas:
// import * as inventory from './src/inventory.js';
// inventory.add('lápiz', 2);
// inventory.add('lápiz', 3);
// console.log('  lápices:', inventory.unitsOf('lápiz'));
// console.log('  cambios:', inventory.changeCount());
// console.log('  lo que exporta:', Object.keys(inventory));
// console.log('  inventory.units:', inventory.units);
// console.log('  inventory.record:', inventory.record);

// ============================================
// PASO 2: Un solo inventario para todo el programa
// ============================================
console.log('--- Paso 2: una sola instancia ---');

// Descomenta las siguientes líneas:
// import { restock } from './src/restock.js';
// restock('lápiz');
// console.log('  lápices tras reponer desde otro módulo:', inventory.unitsOf('lápiz'));
// const again = await import('./src/inventory.js');
// console.log('  ¿el mismo módulo?', again === inventory);
// console.log('  cambios:', again.changeCount());

// ============================================
// PASO 3: Lo que no puedes hacer con una sola instancia
// ============================================
console.log('--- Paso 3: dos almacenes ---');

// Descomenta las siguientes líneas:
// // Abres una segunda tienda. Su código usa el mismo módulo y guarda sus gomas.
// const secondShop = await import('./src/inventory.js');
// secondShop.add('goma', 4);
// console.log('  gomas en la tienda 1:', inventory.unitsOf('goma'));
// // Un test que necesita un inventario vacío, como los de la semana 25.
// console.log('  ¿empieza vacío?', inventory.unitsOf('lápiz') === 0);

// ============================================
// PASO 4: Una fábrica de inventarios
// ============================================
console.log('--- Paso 4: una fábrica ---');

// Descomenta las siguientes líneas:
// import { createInventory } from './src/create-inventory.js';
// const north = createInventory();
// const south = createInventory();
// north.add('lápiz', 2);
// south.add('lápiz', 7);
// south.add('goma', 1);
// console.log('  norte:', north.unitsOf('lápiz'), 'lápices,', north.changeCount(), 'cambio');
// console.log('  sur:', south.unitsOf('lápiz'), 'lápices,', south.changeCount(), 'cambios');
// console.log('  lo que tiene cada uno:', Object.keys(north));
// console.log('  north.units:', north.units);
// console.log('  ¿el mismo add?', north.add === south.add);

// ============================================
// PASO 5: Una fábrica que elige qué crear
// ============================================
console.log('--- Paso 5: elegir el tipo ---');

// Descomenta las siguientes líneas:
// import { createNotifier } from './src/create-notifier.js';
// const notifiers = [
//   createNotifier('email', { to: 'ana@tienda.test' }),
//   createNotifier('sms', { to: '600 000 000' }),
//   createNotifier('console'),
// ];
// for (const notifier of notifiers) {
//   console.log(' ', notifier.kind.padEnd(8), notifier.send('Quedan 2 lápices'));
// }
// try {
//   createNotifier('paloma');
// } catch (error) {
//   console.log('  error:', error.message);
// }
