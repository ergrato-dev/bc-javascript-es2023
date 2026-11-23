// Un almacén mínimo: guarda el estado, lo cambia con el reductor y avisa a los oyentes (Observer).
// Es la versión más sencilla posible. El paso 4 del lab encuentra lo que le falta.
export const createStore = (reducer, initial) => {
  let state = initial;
  const listeners = [];

  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
      for (const listener of listeners) listener(state, action);
    },
    subscribe: (listener) => {
      listeners.push(listener);
      return () => listeners.splice(listeners.indexOf(listener), 1);
    },
  };
};
