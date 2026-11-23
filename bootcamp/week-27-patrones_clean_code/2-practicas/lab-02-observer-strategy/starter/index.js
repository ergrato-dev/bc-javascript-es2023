/**
 * 📘 Lab 02: Observer y Strategy
 * Este es un lab guiado. Quita las // del código de cada paso y ejecuta, desde la carpeta starter:
 *
 *   node index.js
 *
 * Los pasos van en orden: cada uno usa lo de los anteriores.
 */

// ============================================
// PASO 1: Escuchar y emitir
// ============================================
console.log('--- Paso 1: escuchar y emitir ---');

// Descomenta las siguientes líneas:
// import { createEmitter } from './src/emitter.js';
// const shop = createEmitter();
// shop.on('sale', (sale) => console.log('  caja: cobrar', sale.total, '€'));
// shop.on('sale', (sale) => console.log('  almacén: restar', sale.units, 'unidades'));
// shop.emit('sale', { total: 12, units: 3 });
// shop.emit('refund', { total: 12 });
// console.log('  (refund no tiene oyentes: no pasa nada)');

// ============================================
// PASO 2: Dejar de escuchar
// ============================================
console.log('--- Paso 2: dejar de escuchar ---');

// Descomenta las siguientes líneas:
// const stopLog = shop.on('sale', (sale) => console.log('  registro: venta de', sale.total, '€'));
// shop.emit('sale', { total: 5, units: 2 });
// stopLog();
// console.log('  (el registro deja de escuchar)');
// shop.emit('sale', { total: 8, units: 2 });

// ============================================
// PASO 3: Un emisor dentro de otro objeto
// ============================================
console.log('--- Paso 3: un almacén que avisa ---');

// Descomenta las siguientes líneas:
// import { createStock } from './src/stock.js';
// const alerts = createEmitter();
// const stock = createStock(alerts);
// alerts.on('low', ({ name, left }) => console.log(`  aviso: ${name}, quedan ${left}`));
// alerts.once('low', ({ name }) => console.log(`  compras: primer pedido urgente, de ${name}`));
// stock.add('lápiz', 10);
// stock.take('lápiz', 6);
// console.log('  (quedan 4: no avisa)');
// stock.take('lápiz', 2);
// stock.take('lápiz', 1);

// ============================================
// PASO 4: El Observer que ya trae JavaScript
// ============================================
console.log('--- Paso 4: EventTarget ---');

// Descomenta las siguientes líneas:
// const target = new EventTarget();
// const controller = new AbortController();
// target.addEventListener('sale', (event) => console.log('  caja:', event.detail.total, '€'), {
//   signal: controller.signal,
// });
// target.addEventListener('sale', () => console.log('  primera venta del día'), { once: true });
// target.dispatchEvent(new CustomEvent('sale', { detail: { total: 12 } }));
// target.dispatchEvent(new CustomEvent('sale', { detail: { total: 7 } }));
// controller.abort();
// target.dispatchEvent(new CustomEvent('sale', { detail: { total: 3 } }));
// console.log('  (tras abort, nadie escucha)');

// ============================================
// PASO 5: Strategy en lugar de un switch
// ============================================
console.log('--- Paso 5: estrategias ---');

// Descomenta las siguientes líneas:
// import { SHIPPING, shippingCost, shippingCostSwitch } from './src/shipping.js';
// for (const method of ['standard', 'express', 'locker']) {
//   console.log(' ', method.padEnd(8), shippingCostSwitch(method, 2), shippingCost(method, 2));
// }
// // Un método nuevo, sin tocar shippingCost:
// SHIPPING.pickup = () => 0;
// console.log('  pickup  ', shippingCost('pickup', 2));
// try {
//   shippingCostSwitch('pickup', 2);
// } catch (error) {
//   console.log('  con el switch:', error.message);
// }
