// Pasos 4 a 6: los mismos casos con Vitest. Ejecuta: pnpm test
import { describe, it, expect } from 'vitest';
import { applyDiscount, cartTotal, lineTotal } from '../src/cart.js';

const lines = [
  { price: 12.5, quantity: 2 },
  { price: 3, quantity: 1 },
];

// Paso 4: el primer test. Descomenta:
// describe('cartTotal', () => {
//   it('suma el importe de todas las líneas', () => {
//     expect(cartTotal(lines)).toBe(28);
//   });
//   it('un carrito vacío vale 0', () => {
//     expect(cartTotal([])).toBe(0);
//   });
// });

// Paso 5: un test que falla. Descomenta:
// describe('lineTotal', () => {
//   it('multiplica el precio por la cantidad', () => {
//     expect(lineTotal(lines[0])).toBe(24);
//   });
// });

// Paso 6: un test que encuentra un error. Descomenta:
// describe('applyDiscount', () => {
//   it('aplica el tanto por ciento', () => {
//     expect(applyDiscount(80, 25)).toBe(60);
//   });
//   it('nunca deja el total por debajo de 0', () => {
//     expect(applyDiscount(50, 120)).toBe(0);
//   });
// });
