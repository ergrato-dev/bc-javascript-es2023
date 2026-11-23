// Tests unitarios de src/logic.js: sin red y sin esperas de verdad.
// Cambia cada it.todo por un it con su expect, sin cambiar su nombre.
import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  HttpError,
  TimeoutError,
  requestJson,
  withRetry,
  withTimeout,
  createCache,
  debounce,
  createCatalogClient,
  createPoller,
} from '../src/logic.js';
import { SEED } from '../src/data.js';

// TODO: un helper respond(status, body) que cree una respuesta falsa (lab 02).

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('requestJson', () => {
  it.todo('devuelve el JSON y pasa a fetchFn la URL y las opciones');
  it.todo('devuelve null en una respuesta 204');
  it.todo('lanza HttpError con el status y el error del servidor');
  it.todo('lanza HttpError con HTTP y el status si el cuerpo no es JSON');
  it.todo('usa el fetch global si no recibe fetchFn');
});

describe('withRetry', () => {
  it.todo('devuelve el resultado sin reintentar si la tarea funciona');
  it.todo('reintenta hasta que la tarea funciona y le pasa el número de intento');
  it.todo('se rinde tras retries reintentos y lanza el último error');
  it.todo('espera delay, 2 × delay y 4 × delay entre intentos');
  it.todo('no reintenta un HttpError 4xx');
  it.todo('reintenta un HttpError 5xx');
});

describe('withTimeout', () => {
  it.todo('devuelve el valor si la promesa llega a tiempo');
  it.todo('rechaza con TimeoutError al cumplirse ms');
  it.todo('deja pasar el error de la promesa');
});

describe('createCache', () => {
  it.todo('lanza RangeError si ttl no es mayor que 0');
  it.todo('get devuelve lo que guardó set, y undefined si no existe');
  it.todo('una entrada caduca justo al cumplir ttl');
  it.todo('getOrLoad llama a load solo si no hay valor');
  it.todo('getOrLoad no guarda nada si load falla');
  it.todo('usa Date.now si no recibe now');
});

describe('debounce', () => {
  it.todo('llama a fn una vez, ms después de la última llamada, con sus argumentos');
  it.todo('cancel anula la llamada pendiente');
});

describe('createCatalogClient', () => {
  it.todo('list pide /items con el texto sin espacios a los lados y codificado');
  it.todo('list sin texto pide /items?q=');
  it.todo('get pide /items/:id');
  it.todo('create envía un POST con la ficha en JSON');
});

describe('createPoller', () => {
  it.todo('start ejecuta la tarea enseguida y después cada interval');
  it.todo('pasa a onError los fallos y sigue sondeando');
  it.todo('un fallo sin onError no para el sondeo');
  it.todo('stop detiene el sondeo');
  it.todo('start dos veces no duplica el sondeo');
});
