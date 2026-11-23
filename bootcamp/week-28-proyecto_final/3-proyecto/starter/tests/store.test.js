// Los tests de src/store.js (paso 9). Un reductor de mentira basta: el almacén no sabe de fichas.
import { describe, expect, it } from 'vitest'; // añade vi cuando uses vi.fn para los oyentes
import { createStore } from '../src/store.js';

// Suma action.by al contador; con otro type devuelve el mismo estado.
const counter = (state, action) =>
  action.type === 'add' ? { count: state.count + action.by } : state;

describe('createStore', () => {
  it('empieza con el estado inicial', () => {
    const store = createStore({ reducer: counter, initial: { count: 0 } });

    expect(store.getState()).toEqual({ count: 0 });
  });

  it.todo('dispatch guarda lo que devuelve el reductor');
  it.todo('avisa a cada oyente con el estado nuevo y la acción, en orden');
  it.todo('no avisa si el reductor devuelve el mismo estado');
  it.todo('la función de subscribe quita el oyente, y llamarla dos veces no falla');
  it.todo('quitar un oyente durante un aviso no cambia ese aviso');
});
