// Pasos 1 a 3: estos dos tests ya están escritos. Ejecuta: pnpm coverage
import { describe, it, expect } from 'vitest';
import { average, toGrade } from '../src/grades.js';

describe('toGrade', () => {
  it('una nota de 9,5 es sobresaliente', () => {
    expect(toGrade(9.5)).toBe('Sobresaliente');
  });
});

describe('average', () => {
  it('calcula la media', () => {
    expect(average([4, 6, 8])).toBe(6);
  });
});

// Paso 4: cubrir las ramas. Descomenta:
// describe('toGrade, el resto de calificaciones', () => {
//   it.each([
//     [8, 'Notable'],
//     [6, 'Aprobado'],
//     [2, 'Suspenso'],
//   ])('una nota de %s es %s', (score, grade) => {
//     expect(toGrade(score)).toBe(grade);
//   });
//   it.each([-1, 11, '7'])('rechaza %o', (score) => {
//     expect(() => toGrade(score)).toThrow(RangeError);
//   });
// });
// describe('average, sin notas', () => {
//   it('devuelve null', () => {
//     expect(average([])).toBeNull();
//   });
// });
