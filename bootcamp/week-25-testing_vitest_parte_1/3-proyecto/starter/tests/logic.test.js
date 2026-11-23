// Tests de src/logic.js. Cada it.todo es un caso que falta: cámbialo por un it con su expect.
// Puedes añadir más casos, pero no borres ninguno. Pasos 3 a 9 del README.
import { describe, it, expect } from 'vitest';
import { FIELDS, SEED } from '../src/data.js';
import { formatNumber, normalize, paginate, search, sortBy, summarize, validate } from '../src/logic.js';

describe('normalize', () => {
  it.todo('pasa a minúsculas y quita las tildes');
  it.todo('quita los espacios de los lados y deja uno solo entre palabras');
  it.todo('devuelve un texto vacío con null o undefined');
});

describe('formatNumber', () => {
  it.todo('separa los miles con punto y los decimales con coma');
  it.todo('redondea a 2 decimales como mucho');
  it.todo('devuelve — si no recibe un número finito');
});

describe('paginate', () => {
  it.todo('devuelve los elementos de la página pedida, el número de páginas y el total');
  it.todo('la última página puede tener menos elementos');
  it.todo('lleva una página fuera de rango a la primera o a la última');
  it.todo('una lista vacía tiene 1 página');
  it.todo('lanza un RangeError si perPage no es un entero mayor que 0');
});

describe('search', () => {
  it.todo('encuentra fichas de tu catálogo sin distinguir mayúsculas ni tildes');
  it.todo('exige que estén todas las palabras de la búsqueda');
  it.todo('devuelve todas las fichas con una búsqueda vacía');
  it.todo('devuelve un array vacío si nada coincide');
});

describe('sortBy', () => {
  it.todo('ordena los números de menor a mayor');
  it.todo('ordena los textos en orden alfabético español');
  it.todo("con 'desc' ordena al revés");
  it.todo('deja las fichas sin valor al final');
  it.todo('no modifica el array que recibe');
});

describe('validate', () => {
  it.todo('una ficha de SEED no tiene errores');
  it.todo('marca los campos obligatorios vacíos');
  it.todo('limpia los textos y convierte los números');
  it.todo('acepta los valores justo en el límite y rechaza los de fuera');
  it.todo('lanza un TypeError si fields no es un array');
});

describe('summarize', () => {
  it.todo('resume un campo numérico de tu catálogo');
  it.todo('no cuenta las fichas sin número');
  it.todo('sin ninguna ficha con número, devuelve count 0 y lo demás null');
});

describe('data.js', () => {
  it.todo('cada ficha de SEED cumple las reglas de FIELDS');
});
