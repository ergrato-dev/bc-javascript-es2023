// Un bloque por ciclo. Ejecuta: pnpm test --reporter=verbose
import { describe, it, expect } from 'vitest';
import { formatDuration } from '../src/duration.js';

// Ciclo 1: el caso más simple. Descomenta:
// describe('Ciclo 1', () => {
//   it('0 segundos son 0 s', () => {
//     expect(formatDuration(0)).toBe('0 s');
//   });
// });

// Ciclo 2: otro número de segundos. Descomenta:
// describe('Ciclo 2', () => {
//   it('45 segundos son 45 s', () => {
//     expect(formatDuration(45)).toBe('45 s');
//   });
// });

// Ciclo 3: los minutos. Descomenta:
// describe('Ciclo 3', () => {
//   it('90 segundos son 1 min 30 s', () => {
//     expect(formatDuration(90)).toBe('1 min 30 s');
//   });
//   it('60 segundos son 1 min, sin 0 s', () => {
//     expect(formatDuration(60)).toBe('1 min');
//   });
// });

// Ciclo 4: las horas. Descomenta:
// describe('Ciclo 4', () => {
//   it('3600 segundos son 1 h', () => {
//     expect(formatDuration(3600)).toBe('1 h');
//   });
//   it('3725 segundos son 1 h 2 min 5 s', () => {
//     expect(formatDuration(3725)).toBe('1 h 2 min 5 s');
//   });
//   it('3605 segundos son 1 h 5 s, sin 0 min', () => {
//     expect(formatDuration(3605)).toBe('1 h 5 s');
//   });
// });

// Ciclo 6: los días. Lo resuelves tú. Descomenta:
// describe('Ciclo 6', () => {
//   it('86400 segundos son 1 d', () => {
//     expect(formatDuration(86400)).toBe('1 d');
//   });
//   it('90061 segundos son 1 d 1 h 1 min 1 s', () => {
//     expect(formatDuration(90061)).toBe('1 d 1 h 1 min 1 s');
//   });
// });

// Ciclo 7: lo que no es una duración. Lo resuelves tú. Descomenta:
// describe('Ciclo 7', () => {
//   it.each([-1, 1.5, NaN, Infinity, '60'])('rechaza %o', (value) => {
//     expect(() => formatDuration(value)).toThrow(RangeError);
//   });
// });
