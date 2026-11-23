// Pasos 1 y 2: probar src/cart.js sin herramientas. Ejecuta: node check.js
import assert from 'node:assert/strict';
import { applyDiscount, cartTotal, lineTotal } from './src/cart.js';

const lines = [
  { price: 12.5, quantity: 2 },
  { price: 3, quantity: 1 },
];

// Paso 1: mirar el resultado. Descomenta:
// console.log('--- Paso 1: Mirar el resultado ---');
// console.log('  lineTotal de la primera línea:', lineTotal(lines[0]), '(esperado: 25)');
// console.log('  cartTotal:', cartTotal(lines), '(esperado: 28)');
// console.log('  cartTotal de un carrito vacío:', cartTotal([]), '(esperado: 0)');

// Paso 2: que lo compruebe el programa. Descomenta:
// console.log('--- Paso 2: node:assert ---');
// assert.equal(lineTotal(lines[0]), 25);
// assert.equal(cartTotal(lines), 28);
// assert.equal(cartTotal([]), 0);
// console.log('  3 comprobaciones correctas');
// assert.equal(applyDiscount(100, 10), 80);
// console.log('  esta línea no llega a escribirse');
