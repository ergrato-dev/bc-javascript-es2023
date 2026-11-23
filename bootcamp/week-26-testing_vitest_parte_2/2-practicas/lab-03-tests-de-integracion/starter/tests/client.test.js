// Ejecuta: pnpm test --reporter=verbose
import { describe, it, expect, vi, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';
import { createClient } from '../src/client.js';
import { startServer } from '../src/server.js';

// Tests unitarios, ya escritos: fetch es un doble y no hay servidor.
describe('unitarios: createClient con un fetch falso', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('create envía un POST con el producto en JSON', async () => {
    const fetchFn = vi.fn().mockResolvedValue({ ok: true, status: 201, json: async () => ({ id: 4, name: 'goma' }) });
    vi.stubGlobal('fetch', fetchFn);

    const product = await createClient('http://api').create({ name: 'goma', price: 0.5 });

    expect(product).toEqual({ id: 4, name: 'goma' });
    expect(fetchFn).toHaveBeenCalledWith('http://api/products', {
      method: 'POST',
      body: JSON.stringify({ name: 'goma', price: 0.5 }),
    });
  });

  it('un error del servidor lanza un Error con el status y el mensaje', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 404, json: async () => ({ error: 'No existe' }) }));
    await expect(createClient('http://api').get(9)).rejects.toThrow('404: No existe');
  });
});

// Paso 1: el servidor de verdad. Descomenta:
// describe('integración: createClient contra el servidor', () => {
//   let server;
//   let client;
//
//   beforeAll(async () => {
//     server = await startServer();
//     client = createClient(server.url);
//   });
//
//   afterAll(async () => {
//     await server.close();
//   });
//
//   it('list devuelve los productos del servidor', async () => {
//     const products = await client.list();
//     expect(products.map((product) => product.name)).toEqual(['cuaderno', 'bolígrafo', 'regla']);
//   });
//
//   it('get devuelve un producto por su id', async () => {
//     await expect(client.get(2)).resolves.toEqual({ id: 2, name: 'bolígrafo', price: 1.5 });
//   });
//
//   // Paso 2: el doble no lo sabía. Quita las // de este test:
//   // it('create guarda un producto nuevo', async () => {
//   //   const product = await client.create({ name: 'goma', price: 0.5 });
//   //   expect(product).toEqual({ id: 4, name: 'goma', price: 0.5 });
//   //   await expect(client.get(4)).resolves.toEqual(product);
//   // });
//
//   // Paso 3: tests que comparten un servidor. Quita las // de este test:
//   // it('list devuelve los 3 productos iniciales', async () => {
//   //   await expect(client.list()).resolves.toHaveLength(3);
//   // });
//
//   // Paso 4: los errores de verdad. Quita las // de este test:
//   // it('get de un id que no existe lanza un error 404', async () => {
//   //   await expect(client.get(99)).rejects.toThrow('404: No existe el producto 99');
//   // });
//
//   // it('create sin nombre lanza un error 400', async () => {
//   //   await expect(client.create({ name: '  ', price: 1 })).rejects.toThrow('400: El nombre es obligatorio');
//   // });
// });
