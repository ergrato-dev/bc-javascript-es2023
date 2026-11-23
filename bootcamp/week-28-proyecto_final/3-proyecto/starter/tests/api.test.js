// Los tests de src/api.js (paso 10): unitarios con un fetch falso y uno de integración contra server.js.
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { createApi } from '../src/api.js'; // añade HttpError para los tests de errores
import { startServer } from '../server.js';

// Un fetch falso que responde siempre `status` con `body` (texto o un objeto que se pasa a JSON).
const fakeFetch = (status, body) =>
  vi.fn(
    async () => new Response(typeof body === 'string' ? body : JSON.stringify(body), { status }),
  );

describe('createApi con un fetch falso', () => {
  it('list pide GET /api/items y devuelve data', async () => {
    const fetchFn = fakeFetch(200, { data: [{ id: 1, name: 'Vega' }] });
    const api = createApi({ baseUrl: 'http://api.test', fetchFn });

    await expect(api.list()).resolves.toEqual([{ id: 1, name: 'Vega' }]);
    expect(fetchFn).toHaveBeenCalledWith(
      'http://api.test/api/items',
      expect.objectContaining({ method: 'GET' }),
    );
  });

  it.todo('create envía POST con el JSON y su cabecera, y devuelve la ficha');
  it.todo('update envía PUT a /api/items/:id');
  it.todo('remove envía DELETE y devuelve null');
  it.todo('un error lanza HttpError con status, mensaje y fields');
  it.todo('un error sin JSON lanza HttpError con el mensaje Error status');
});

describe('createApi contra server.js', () => {
  let server;
  beforeAll(async () => {
    server = await startServer({
      items: [{ name: 'Vega', kind: 'Estrella', size: 12 }],
      fields: [
        { name: 'name', label: 'Nombre', type: 'text', required: true, minLength: 3 },
        { name: 'kind', label: 'Tipo', type: 'text' },
        { name: 'size', label: 'Tamaño', type: 'number', min: 0, max: 100 },
      ],
    });
  });
  afterAll(() => server.close());

  it.todo('crea, lista, actualiza y borra una ficha de verdad');
  it.todo('un 422 del servidor llega como HttpError con fields');
});
