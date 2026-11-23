// Tests de integración: createCatalogClient contra src/server.js de verdad,
// sin dobles. Cambia cada it.todo por un it con su expect, sin cambiar su nombre.
import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import { createCatalogClient, HttpError } from '../src/logic.js';
import { startServer } from '../src/server.js';
import { SEED } from '../src/data.js';

describe('integración', () => {
  // TODO: arranca el servidor una vez, ciérralo al final y reinícialo antes de cada test (lab 03).

  it.todo('list sin texto devuelve todas las fichas');
  it.todo('list encuentra fichas sin distinguir mayúsculas ni tildes');
  it.todo('list con un texto con & no pierde lo que va detrás');
  it.todo('get devuelve una ficha por su id');
  it.todo('get de un id que no existe lanza HttpError 404');
  it.todo('create guarda una ficha y get la devuelve');
  it.todo('create sin nombre lanza HttpError 400');
  it.todo('cada test empieza con las fichas de SEED');
});
