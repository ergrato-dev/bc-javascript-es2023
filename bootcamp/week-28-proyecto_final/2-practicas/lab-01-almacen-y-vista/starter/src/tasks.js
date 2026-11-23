// Las tareas de una lista: el estado, el reductor y la vista. Todo son funciones puras.

export const INITIAL = Object.freeze({ tasks: [], show: 'all' });

// Strategy: una función por tipo de acción. Añadir una acción es añadir una línea.
const HANDLERS = {
  add: (state, { id, text }) => ({ ...state, tasks: [...state.tasks, { id, text, done: false }] }),
  toggle: (state, { id }) => ({
    ...state,
    tasks: state.tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
  }),
  show: (state, { show }) => ({ ...state, show }),
};

// Un type que no está en HANDLERS devuelve el mismo estado: el mismo objeto, no una copia.
export const reduce = (state, action) =>
  Object.hasOwn(HANDLERS, action.type) ? HANDLERS[action.type](state, action) : state;

// Lo que se ve se calcula desde el estado; no se guarda aparte.
const FILTERS = {
  all: () => true,
  pending: (task) => !task.done,
  done: (task) => task.done,
};

export const selectView = (state) => ({
  visible: state.tasks.filter(FILTERS[state.show]),
  pending: state.tasks.filter(FILTERS.pending).length,
});
