// El almacén del estado: Observer (semana 27) sobre un reductor puro (semana 16).
// Completa el TODO en el paso 9 del README.

// Crea un almacén con el estado `initial` y la función `reducer(state, action)`. Devuelve:
// - getState()           → el estado actual.
// - dispatch(action)     → calcula reducer(estado, action). Si el resultado es otro objeto, lo guarda y
//                          llama a cada oyente con (estadoNuevo, action), en el orden en que se suscribieron.
//                          Si el reductor devuelve el mismo objeto, no avisa a nadie. No devuelve nada.
// - subscribe(listener)  → añade un oyente y devuelve una función que lo quita. Llamarla dos veces no
//                          da error. Un oyente que se quita durante un aviso no cambia ese aviso.
// Ejemplo:
//   const store = createStore({ reducer: reduce, initial: INITIAL_STATE });
//   const stop = store.subscribe((state) => console.log(state.status));
//   store.dispatch({ type: 'loading' }); // muestra 'loading'
export const createStore = ({ reducer, initial }) => {
  // TODO
};
