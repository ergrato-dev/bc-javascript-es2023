// Un bloque por paso. Ejecuta: pnpm test --reporter=verbose
import { describe, it, expect, vi, afterEach } from 'vitest';
import { loadProduct, loadWithRetry, createAutosave, isOpen } from '../src/loader.js';

// Una respuesta falsa con lo que loadProduct lee de una de verdad: ok, status y json().
const respond = (status, body) => ({ ok: status >= 200 && status < 300, status, json: async () => body });
const pen = { id: 7, name: 'bolígrafo', price: 1.5 };

// Paso 1: un test asíncrono. Descomenta:
// describe('Paso 1: un test asíncrono', () => {
//   it('loadProduct devuelve el producto', async () => {
//     const fetchFn = vi.fn().mockResolvedValue(respond(200, pen));
//
//     const product = await loadProduct(7, fetchFn);
//
//     expect(product).toEqual(pen);
//     expect(fetchFn).toHaveBeenCalledWith('/products/7');
//   });
//
//   it('lo mismo con resolves', async () => {
//     const fetchFn = vi.fn().mockResolvedValue(respond(200, pen));
//     await expect(loadProduct(7, fetchFn)).resolves.toEqual(pen);
//   });
// });

// Paso 2: promesas que fallan. Descomenta:
// describe('Paso 2: promesas que fallan', () => {
//   it('loadProduct lanza un error si la respuesta no es ok', async () => {
//     const fetchFn = vi.fn().mockResolvedValue(respond(404, { error: 'No existe' }));
//     await expect(loadProduct(7, fetchFn)).rejects.toThrow('Error 404 al cargar 7');
//   });
//
//   it('loadProduct deja pasar un fallo de red', async () => {
//     const fetchFn = vi.fn().mockRejectedValue(new TypeError('fetch failed'));
//     await expect(loadProduct(7, fetchFn)).rejects.toThrow(TypeError);
//   });
//
//   it('❌ sin await, el test no espera a la comprobación', () => {
//     const fetchFn = vi.fn().mockResolvedValue(respond(200, pen));
//     loadProduct(7, fetchFn).then((product) => {
//       expect(product.name).toBe('lápiz');
//     });
//   });
// });

// Paso 3: esperar de verdad. Descomenta:
// describe('Paso 3: esperar de verdad', () => {
//   it('loadWithRetry lo intenta otra vez tras un fallo', async () => {
//     const fetchFn = vi.fn().mockResolvedValueOnce(respond(503, {})).mockResolvedValueOnce(respond(200, pen));
//
//     await expect(loadWithRetry(7, fetchFn)).resolves.toEqual(pen);
//     expect(fetchFn).toHaveBeenCalledTimes(2);
//   });
//
//   it('loadWithRetry se rinde tras 5 reintentos', async () => {
//     const fetchFn = vi.fn().mockResolvedValue(respond(503, {}));
//
//     await expect(loadWithRetry(7, fetchFn, { retries: 5 })).rejects.toThrow('Error 503 al cargar 7');
//     expect(fetchFn).toHaveBeenCalledTimes(6);
//   });
// });

// Paso 4: el reloj falso. Descomenta:
// describe('Paso 4: el reloj falso', () => {
//   afterEach(() => {
//     vi.useRealTimers();
//   });
//
//   it('loadWithRetry espera delay ms entre intentos', async () => {
//     vi.useFakeTimers();
//     const fetchFn = vi.fn().mockResolvedValueOnce(respond(503, {})).mockResolvedValueOnce(respond(200, pen));
//
//     const promise = loadWithRetry(7, fetchFn);
//     await vi.advanceTimersByTimeAsync(999);
//     expect(fetchFn).toHaveBeenCalledTimes(1);
//     await vi.advanceTimersByTimeAsync(1);
//     expect(fetchFn).toHaveBeenCalledTimes(2);
//
//     await expect(promise).resolves.toEqual(pen);
//   });
//
//   it('loadWithRetry se rinde tras 5 reintentos, sin esperar 5 segundos', async () => {
//     vi.useFakeTimers();
//     const fetchFn = vi.fn().mockResolvedValue(respond(503, {}));
//
//     const check = expect(loadWithRetry(7, fetchFn, { retries: 5 })).rejects.toThrow('Error 503 al cargar 7');
//     await vi.runAllTimersAsync();
//     await check;
//     expect(fetchFn).toHaveBeenCalledTimes(6);
//   });
// });

// Paso 5: temporizadores sin promesas. Descomenta:
// describe('Paso 5: createAutosave', () => {
//   afterEach(() => {
//     vi.useRealTimers();
//   });
//
//   it('guarda una vez, 500 ms después de la última llamada, con lo último', () => {
//     vi.useFakeTimers();
//     const save = vi.fn();
//     const autosave = createAutosave(save, 500);
//
//     autosave('B');
//     vi.advanceTimersByTime(300);
//     autosave('Bo');
//     vi.advanceTimersByTime(300);
//     autosave('Bol');
//     vi.advanceTimersByTime(499);
//     expect(save).not.toHaveBeenCalled();
//
//     vi.advanceTimersByTime(1);
//     expect(save).toHaveBeenCalledTimes(1);
//     expect(save).toHaveBeenCalledWith('Bol');
//   });
// });

// Paso 6: la fecha falsa. Descomenta:
// describe('Paso 6: isOpen', () => {
//   afterEach(() => {
//     vi.useRealTimers();
//   });
//
//   it.each([
//     { time: '8:59', hour: 8, minute: 59, open: false },
//     { time: '9:00', hour: 9, minute: 0, open: true },
//     { time: '20:59', hour: 20, minute: 59, open: true },
//     { time: '21:00', hour: 21, minute: 0, open: false },
//   ])('a las $time, isOpen() es $open', ({ hour, minute, open }) => {
//     vi.useFakeTimers();
//     vi.setSystemTime(new Date(2026, 10, 23, hour, minute));
//     expect(isOpen()).toBe(open);
//   });
// });
