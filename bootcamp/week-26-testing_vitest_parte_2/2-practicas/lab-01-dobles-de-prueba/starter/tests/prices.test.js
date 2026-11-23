// Paso 5: sustituir un módulo entero. Ejecuta: pnpm test --reporter=verbose
import { describe, it, expect, vi } from 'vitest';
import { convert } from '../src/prices.js';
import { getRate } from '../src/rates.js';

// Paso 5a: el módulo de verdad. Descomenta:
// describe('Paso 5: vi.mock', () => {
//   it('convert multiplica por el cambio y redondea', () => {
//     expect(convert(10, 'USD')).toBe(11);
//     expect(convert(9.99, 'USD')).toBe(10.99);
//   });
//
//   it('convert pide el cambio de la moneda que recibe', () => {
//     convert(10, 'GBP');
//     expect(getRate).toHaveBeenCalledWith('GBP');
//   });
// });

// Paso 5b: el módulo falso. Descomenta:
// vi.mock('../src/rates.js', () => ({
//   getRate: vi.fn(),
// }));
// vi.mocked(getRate).mockReturnValue(1.1);
