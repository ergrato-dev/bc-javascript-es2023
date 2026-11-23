// Los tests de src/logic.js. Cada it.todo es un caso que falta: cámbialo por un it con su expect
// (paso 4 en adelante). Usa fichas pequeñas escritas aquí, no SEED: así el test dice qué prueba.
import { describe, expect, it } from 'vitest';
import {
  INITIAL_STATE,
  filterItems,
  paginate,
  reduce,
  selectPage,
  sortItems,
  summarize,
  validate,
} from '../src/logic.js';

const FIELDS = [
  { name: 'name', label: 'Nombre', type: 'text', required: true, minLength: 3 },
  { name: 'kind', label: 'Tipo', type: 'text' },
  { name: 'size', label: 'Tamaño', type: 'number', min: 0, max: 100 },
];

describe('validate', () => {
  it('convierte los valores y no da errores cuando todo es correcto', () => {
    const { data, errors } = validate({ name: ' Vega ', kind: '', size: '12.5' }, FIELDS);

    expect(data).toEqual({ name: 'Vega', kind: null, size: 12.5 });
    expect(errors).toEqual({});
  });

  it.todo('da Obligatorio a un campo required vacío o en blanco');
  it.todo('da Debe ser un número a un number que no lo es');
  it.todo('da Entre min y max a un number fuera de sus límites');
  it.todo('da Mínimo N caracteres a un text demasiado corto');
});

describe('filterItems', () => {
  it.todo('sin query devuelve todas las fichas');
  it.todo('encuentra sin mirar tildes ni mayúsculas');
  it.todo('pide que estén todas las palabras, en cualquier campo text');
  it.todo('no busca en los campos number');
});

describe('sortItems', () => {
  it.todo('ordena los text en orden alfabético español');
  it.todo('ordena los number de menor a mayor, y al revés con desc');
  it.todo('deja los vacíos al final, también con desc');
  it.todo('con by null o desconocido deja el orden, y nunca cambia el array recibido');
});

describe('paginate', () => {
  it.todo('devuelve la página pedida con total y pages');
  it.todo('lleva una página fuera de rango a la primera o a la última');
  it.todo('sin fichas da una página vacía');
});

describe('summarize', () => {
  it.todo('calcula count, min, max y average de cada campo number');
  it.todo('ignora los vacíos y da null sin datos');
});

describe('reduce', () => {
  it.todo('loading, loaded y failed cambian status, items y error');
  it.todo('query y sort vuelven a la página 1');
  it.todo('sort con el mismo campo cambia desc');
  it.todo('saved reemplaza o añade, y removed quita');
  it.todo('un type desconocido devuelve el mismo objeto');
  it.todo('nunca modifica el estado anterior');
});

describe('selectPage', () => {
  it.todo('busca, ordena y pagina con el estado');
});
