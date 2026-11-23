// Un bloque por paso. En cada uno hay un test marcado con ❌ que falla a propósito:
// lee el mensaje y arréglalo como dice el README antes de pasar al siguiente paso.
import { describe, it, expect } from 'vitest';
import { createProduct, describeProduct, findProduct, parsePrice, sum, toRow, withTag } from '../src/catalog.js';

const products = [createProduct('Lápiz', 1.2), withTag(createProduct('Cuaderno', 3.5), 'papel'), createProduct('Regla', 2)];

// Paso 1: toBe y toEqual. Descomenta:
// describe('Paso 1: toBe y toEqual', () => {
//   it('toBe compara números y textos', () => {
//     expect(products[0].price).toBe(1.2);
//     expect(products[0].name).toBe('Lápiz');
//   });
//   it('toBe con el mismo objeto', () => {
//     const first = products[0];
//     expect(findProduct(products, 'Lápiz')).toBe(first);
//   });
//   it('❌ toBe con dos objetos iguales', () => {
//     expect(createProduct('Goma', 0.8)).toBe({ name: 'Goma', price: 0.8, tags: [] });
//   });
// });

// Paso 2: toEqual y toStrictEqual. Descomenta:
// describe('Paso 2: toEqual y toStrictEqual', () => {
//   it('toEqual no mira las propiedades sin valor', () => {
//     expect(toRow(products[0])).toEqual({ name: 'Lápiz', price: 1.2 });
//   });
//   it('❌ toStrictEqual sí las mira', () => {
//     expect(toRow(products[0])).toStrictEqual({ name: 'Lápiz', price: 1.2 });
//   });
//   it('withTag no cambia el producto original', () => {
//     const tagged = withTag(products[0], 'oferta');
//     expect(tagged.tags).toEqual(['oferta']);
//     expect(products[0].tags).toEqual([]);
//   });
// });

// Paso 3: números. Descomenta:
// describe('Paso 3: números', () => {
//   it('compara mayor y menor', () => {
//     expect(sum([1.2, 3.5, 2])).toBeGreaterThan(6);
//     expect(sum([])).toBeLessThanOrEqual(0);
//   });
//   it('❌ suma decimales con toBe', () => {
//     expect(sum([0.1, 0.2])).toBe(0.3);
//   });
// });

// Paso 4: textos y arrays. Descomenta:
// describe('Paso 4: textos y arrays', () => {
//   it('un texto contiene o cumple un patrón', () => {
//     expect(describeProduct(products[1])).toContain('Cuaderno');
//     expect(describeProduct(products[1])).toMatch(/^Cuaderno: \d+\.\d{2} €$/);
//   });
//   it('un array tiene una longitud y contiene un valor', () => {
//     expect(products).toHaveLength(3);
//     expect(products[1].tags).toContain('papel');
//   });
//   it('❌ un array contiene un objeto', () => {
//     expect(products).toContain({ name: 'Regla', price: 2, tags: [] });
//   });
// });

// Paso 5: errores. Descomenta:
// describe('Paso 5: errores', () => {
//   it('parsePrice acepta la coma decimal', () => {
//     expect(parsePrice('3,50')).toBe(3.5);
//   });
//   it('❌ parsePrice rechaza un precio negativo', () => {
//     expect(parsePrice('-3')).toThrow();
//   });
//   it('el error es un RangeError con un mensaje', () => {
//     expect(() => parsePrice('gratis')).toThrow(RangeError);
//     expect(() => parsePrice('gratis')).toThrow('Precio no válido: gratis');
//   });
// });

// Paso 6: not, undefined, tipos y partes de un objeto. Descomenta:
// describe('Paso 6: not, undefined, tipos y partes', () => {
//   it('not da la vuelta a cualquier matcher', () => {
//     expect(products[0].tags).not.toContain('papel');
//     expect(() => parsePrice('2')).not.toThrow();
//   });
//   it('❌ findProduct sin resultado', () => {
//     expect(findProduct(products, 'Goma')).toBeNull();
//   });
//   it('tipos y partes de un objeto', () => {
//     expect(products[0].price).toBeTypeOf('number');
//     expect(products[1]).toMatchObject({ name: 'Cuaderno', tags: ['papel'] });
//     expect(products[1]).toHaveProperty('tags.0', 'papel');
//   });
// });
