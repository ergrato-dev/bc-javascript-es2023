// Tests de caracterización: apuntan lo que calc hace hoy, también lo raro.
// Mientras refactorizas no se tocan: son la red que dice si algo ha cambiado.
import { describe, expect, it } from 'vitest';
import { calc } from '../src/invoice.js';

const pens = { price: 1.5, quantity: 4 }; // 6 €
const books = { price: 22, quantity: 2 }; // 44 €
const lamp = { price: 60, quantity: 1 }; // 60 €

describe('calc: lo que hace hoy', () => {
  it('suma las líneas y añade 4.95 € de envío', () => {
    expect(calc([pens, books])).toBe(54.95);
  });

  it('el envío es gratis desde 100 €', () => {
    expect(calc([books, lamp])).toBe(104);
  });

  it('VIP descuenta un 10 %, y el descuento puede quitar el envío gratis', () => {
    expect(calc([books, lamp], 'VIP')).toBe(98.55);
  });

  it('NUEVO descuenta 5 € con 50 € justos', () => {
    expect(calc([pens, books], 'NUEVO')).toBe(49.95);
  });

  it('NUEVO no descuenta nada por debajo de 50 €', () => {
    expect(calc([{ price: 49.99, quantity: 1 }], 'NUEVO')).toBe(54.94);
  });

  it('un cupón que no existe no hace nada', () => {
    expect(calc([pens, books], 'GRATIS')).toBe(54.95);
  });

  it('un pedido vacío cuesta el envío', () => {
    expect(calc([])).toBe(4.95);
  });

  it('redondea a céntimos', () => {
    expect(calc([{ price: 0.1, quantity: 3 }])).toBe(5.25);
  });

  it('con el tercer parámetro a true, devuelve un texto en euros', () => {
    expect(calc([pens, books], undefined, true)).toBe('54.95 €');
  });
});
