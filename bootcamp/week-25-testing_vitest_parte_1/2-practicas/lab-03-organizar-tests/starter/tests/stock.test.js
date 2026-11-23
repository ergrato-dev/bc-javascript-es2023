// Un bloque por paso. Ejecuta: pnpm test --reporter=verbose
import { describe, it, expect, beforeEach } from 'vitest';
import { createStock, shippingCost } from '../src/stock.js';

// Paso 1: preparar, actuar y comprobar. Descomenta:
// describe('Paso 1: preparar, actuar y comprobar', () => {
//   it('add suma unidades a las que ya había', () => {
//     // Preparar: un almacén con 2 lápices
//     const stock = createStock();
//     stock.add('lápiz', 2);
//     // Actuar: lo que se prueba, una sola vez
//     stock.add('lápiz', 3);
//     // Comprobar
//     expect(stock.count('lápiz')).toBe(5);
//   });
// });

// Paso 2: tests que dependen unos de otros. Descomenta:
// describe('Paso 2: un almacén para todos los tests', () => {
//   const stock = createStock();
//   it('add guarda un producto nuevo', () => {
//     stock.add('goma', 2);
//     expect(stock.count('goma')).toBe(2);
//   });
//   it('un almacén nuevo está vacío', () => {
//     expect(stock.size).toBe(0);
//   });
// });

// Paso 3: describe dentro de describe. Descomenta:
// describe('Paso 3: createStock', () => {
//   let stock;
//   beforeEach(() => {
//     stock = createStock();
//     stock.add('regla', 3);
//   });
//   describe('remove', () => {
//     it('quita unidades', () => {
//       stock.remove('regla', 2);
//       expect(stock.count('regla')).toBe(1);
//     });
//     it('un producto que llega a 0 desaparece', () => {
//       stock.remove('regla', 3);
//       expect(stock.size).toBe(0);
//     });
//     it('no quita más de las que hay', () => {
//       expect(() => stock.remove('regla', 4)).toThrow('No hay 4 de regla');
//       expect(stock.count('regla')).toBe(3);
//     });
//   });
// });

// Paso 4: el mismo test con varios datos. Descomenta:
// describe('Paso 4: shippingCost', () => {
//   it.each([
//     { weight: 0.5, cost: 3 },
//     { weight: 3, cost: 5 },
//     { weight: 7, cost: 7 },
//   ])('$weight kg cuestan $cost €', ({ weight, cost }) => {
//     expect(shippingCost(weight)).toBe(cost);
//   });
// });

// Paso 5: casos límite. Descomenta:
// describe('Paso 5: los límites de shippingCost', () => {
//   it.each([
//     [1, 3],
//     [1.01, 5],
//     [5, 5],
//     [5.01, 6],
//     [6, 6],
//   ])('%s kg cuestan %s €', (weight, cost) => {
//     expect(shippingCost(weight)).toBe(cost);
//   });
//   it.each([0, -2, NaN, '3', undefined])('rechaza el peso %o', (weight) => {
//     expect(() => shippingCost(weight)).toThrow(RangeError);
//   });
// });

// Paso 6: todo, skip y only. Descomenta:
// describe('Paso 6: lo que falta y lo que se salta', () => {
//   it.todo('add rechaza cantidades decimales');
//   it.skip('size cuenta productos, no unidades', () => {
//     expect(createStock().size).toBe(99);
//   });
// });
