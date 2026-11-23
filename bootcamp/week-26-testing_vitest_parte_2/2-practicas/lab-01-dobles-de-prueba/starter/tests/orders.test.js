// Un bloque por paso. Ejecuta: pnpm test --reporter=verbose
import { describe, it, expect, vi, afterEach } from 'vitest';
import { checkout, pickOffer, warnOutOfStock } from '../src/orders.js';

const cart = [
  { name: 'cuaderno', price: 4, qty: 2 },
  { name: 'bolígrafo', price: 1.5, qty: 3 },
];

// Paso 1: un doble escrito a mano. Descomenta:
// describe('Paso 1: un doble escrito a mano', () => {
//   it('checkout cobra el total y avisa con el recibo', () => {
//     // pay y notify falsos: devuelven algo fijo y apuntan con qué se les llamó
//     const paid = [];
//     const messages = [];
//     const pay = (total) => {
//       paid.push(total);
//       return { id: 'A1' };
//     };
//     const notify = (message) => messages.push(message);
//
//     const receipt = checkout(cart, { pay, notify });
//
//     expect(receipt).toEqual({ id: 'A1', total: 12.5 });
//     expect(paid).toEqual([12.5]);
//     expect(messages).toEqual(['Pedido A1: 12.50 €']);
//   });
// });

// Paso 2: vi.fn. Descomenta:
// describe('Paso 2: vi.fn', () => {
//   it('checkout llama a pay y a notify una vez, con lo que toca', () => {
//     const pay = vi.fn().mockReturnValue({ id: 'A1' });
//     const notify = vi.fn();
//
//     checkout(cart, { pay, notify });
//
//     expect(pay).toHaveBeenCalledTimes(1);
//     expect(pay).toHaveBeenCalledWith(12.5);
//     expect(notify.mock.calls).toEqual([['Pedido A1: 12.50 €']]);
//     // ❌ Este falla: el mensaje no es ese. Lee el fallo y arréglalo.
//     expect(notify).toHaveBeenCalledWith('Pedido A1: 12.5 €');
//   });
// });

// Paso 3: lo que devuelve el doble. Descomenta:
// describe('Paso 3: lo que devuelve el doble', () => {
//   it('cada cobro tiene su recibo', () => {
//     const pay = vi.fn().mockReturnValueOnce({ id: 'A1' }).mockReturnValueOnce({ id: 'A2' });
//     const notify = vi.fn();
//
//     checkout(cart, { pay, notify });
//     checkout([{ name: 'regla', price: 2, qty: 1 }], { pay, notify });
//
//     expect(notify).toHaveBeenNthCalledWith(1, 'Pedido A1: 12.50 €');
//     expect(notify).toHaveBeenNthCalledWith(2, 'Pedido A2: 2.00 €');
//   });
//
//   it('si el cobro falla, checkout lanza el error y no avisa', () => {
//     const pay = vi.fn().mockImplementation(() => {
//       throw new Error('Tarjeta rechazada');
//     });
//     const notify = vi.fn();
//
//     expect(() => checkout(cart, { pay, notify })).toThrow('Tarjeta rechazada');
//     expect(notify).not.toHaveBeenCalled();
//   });
//
//   it('con el carrito vacío no cobra nada', () => {
//     const pay = vi.fn();
//
//     expect(() => checkout([], { pay, notify: vi.fn() })).toThrow('El carrito está vacío');
//     expect(pay).not.toHaveBeenCalled();
//   });
// });

// Paso 4: espiar lo que no recibes como parámetro. Descomenta:
// describe('Paso 4: vi.spyOn', () => {
//   const products = [
//     { name: 'cuaderno', stock: 5 },
//     { name: 'regla', stock: 0 },
//     { name: 'compás', stock: 0 },
//   ];
//
//   it('pickOffer elige según Math.random', () => {
//     vi.spyOn(Math, 'random').mockReturnValue(0.99);
//     expect(pickOffer(products).name).toBe('compás');
//   });
//
//   it('warnOutOfStock avisa de cada producto sin stock', () => {
//     const warn = vi.spyOn(console, 'warn');
//
//     expect(warnOutOfStock(products)).toBe(2);
//     expect(warn).toHaveBeenCalledWith('Sin stock: regla');
//     expect(warn).toHaveBeenCalledWith('Sin stock: compás');
//   });
//
//   it('Math.random vuelve a ser el de verdad', () => {
//     expect(Math.random()).not.toBe(0.99);
//   });
// });
