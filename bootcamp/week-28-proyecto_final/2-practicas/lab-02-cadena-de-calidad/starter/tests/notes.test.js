// Los tests de src/notes.js. Cada paso del README descomenta un bloque.
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { NotesError, createNotesApi } from '../src/notes.js';
import { startNotesServer } from '../src/server.js';

// Un fetch falso que responde siempre `status` con `body` en JSON.
const fakeFetch = (status, body) =>
  vi.fn(async () => new Response(JSON.stringify(body), { status }));

describe('createNotesApi con un fetch falso', () => {
  it('list pide GET /notes y devuelve el array', async () => {
    const fetchFn = fakeFetch(200, [{ id: 1, text: 'Hola' }]);
    const api = createNotesApi({ baseUrl: 'http://notas.test', fetchFn });

    await expect(api.list()).resolves.toEqual([{ id: 1, text: 'Hola' }]);
    expect(fetchFn).toHaveBeenCalledWith('http://notas.test/notes', { method: 'GET' });
  });

  // Paso 2. Descomenta las siguientes líneas:
  // it('add envía POST con el JSON', async () => {
  //   const fetchFn = fakeFetch(201, { id: 2, text: 'Pan' });
  //   const api = createNotesApi({ baseUrl: '', fetchFn });
  //   await expect(api.add('Pan')).resolves.toEqual({ id: 2, text: 'Pan' });
  //   expect(fetchFn).toHaveBeenCalledWith('/notes', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: '{"text":"Pan"}',
  //   });
  // });

  // Paso 4. Descomenta las siguientes líneas:
  // it('un error lanza NotesError con status y mensaje', async () => {
  //   const api = createNotesApi({ baseUrl: '', fetchFn: fakeFetch(422, { error: 'Vacía' }) });
  //   await expect(api.add('')).rejects.toThrow(NotesError);
  //   await expect(api.add('')).rejects.toMatchObject({ status: 422, message: 'Vacía' });
  // });
});

// Paso 3. Descomenta las siguientes líneas:
// describe('createNotesApi contra el servidor', () => {
//   let server;
//   beforeAll(async () => {
//     server = await startNotesServer();
//   });
//   afterAll(() => server.close());
//
//   it('añade y lista notas de verdad', async () => {
//     const api = createNotesApi({ baseUrl: server.url, fetchFn: fetch });
//
//     await api.add('  Comprar pan ');
//     await api.add('Llamar al taller');
//
//     expect(await api.list()).toEqual([
//       { id: 1, text: 'Comprar pan' },
//       { id: 2, text: 'Llamar al taller' },
//     ]);
//   });
// });
