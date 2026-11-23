/**
 * 📘 Lab 01: El almacén y la vista
 * Este es un lab guiado. Quita las // del código de cada paso y ejecuta, desde la carpeta starter:
 *
 *   node index.js
 *
 * Los pasos van en orden: cada uno usa lo de los anteriores.
 */
import { INITIAL, reduce, selectView } from './src/tasks.js';
import { createStore } from './src/store.js';

// ============================================
// PASO 1: Un reductor puro
// ============================================
console.log('--- Paso 1: un reductor puro ---');

// Descomenta las siguientes líneas:
// const one = reduce(INITIAL, { type: 'add', id: 1, text: 'Comprar pan' });
// const two = reduce(one, { type: 'toggle', id: 1 });
// console.log('  INITIAL:', INITIAL.tasks.length, 'tareas');
// console.log('  one:', one.tasks);
// console.log('  two:', two.tasks);
// console.log('  type desconocido, mismo objeto:', reduce(two, { type: 'zoom' }) === two);

// ============================================
// PASO 2: El almacén
// ============================================
console.log('--- Paso 2: el almacén ---');

// Descomenta las siguientes líneas:
// const store = createStore(reduce, INITIAL);
// store.dispatch({ type: 'add', id: 1, text: 'Comprar pan' });
// store.dispatch({ type: 'add', id: 2, text: 'Llamar al taller' });
// console.log('  estado:', store.getState().tasks.map((task) => task.text));

// ============================================
// PASO 3: Oyentes que repintan
// ============================================
console.log('--- Paso 3: oyentes que repintan ---');

// Descomenta las siguientes líneas:
// let renders = 0;
// const render = (state, action) => {
//   renders += 1;
//   const marks = state.tasks.map((task) => `${task.done ? '✔' : '·'} ${task.text}`);
//   console.log(`  render ${renders} tras ${action.type}: ${marks.join(' | ')}`);
// };
// const stopRender = store.subscribe(render);
// const stopCount = store.subscribe((state) => console.log('  contador:', state.tasks.length, 'tareas'));
// store.dispatch({ type: 'toggle', id: 2 });
// store.dispatch({ type: 'add', id: 3, text: 'Regar las plantas' });

// ============================================
// PASO 4: Lo que le falta a este almacén
// ============================================
console.log('--- Paso 4: lo que le falta a este almacén ---');

// Descomenta las siguientes líneas:
// store.dispatch({ type: 'zoom' });
// console.log('  (a) zoom no cambia nada, y aun así se repintó');
// stopCount();
// stopCount();
// store.dispatch({ type: 'toggle', id: 3 });
// console.log('  (b) quitar el contador dos veces quitó también render: nadie repinta');
// const late = createStore(reduce, INITIAL);
// let stopFirst = () => {};
// stopFirst = late.subscribe(() => { console.log('  primero: me quito'); stopFirst(); });
// late.subscribe(() => console.log('  segundo: me toca'));
// late.dispatch({ type: 'add', id: 1, text: 'x' });
// console.log('  (c) el segundo oyente no recibió el aviso');

// ============================================
// PASO 5: La vista se calcula
// ============================================
console.log('--- Paso 5: la vista se calcula ---');

// Descomenta las siguientes líneas:
// const list = createStore(reduce, INITIAL);
// list.subscribe((state) => {
//   const { visible, pending } = selectView(state);
//   console.log(`  [${state.show}] ${visible.map((task) => task.text).join(', ') || '(nada)'} · ${pending} pendientes`);
// });
// list.dispatch({ type: 'add', id: 1, text: 'Pan' });
// list.dispatch({ type: 'add', id: 2, text: 'Taller' });
// list.dispatch({ type: 'toggle', id: 1 });
// list.dispatch({ type: 'show', show: 'pending' });
// list.dispatch({ type: 'show', show: 'done' });
// console.log('  estado guardado:', Object.keys(list.getState()));

console.log('✅ Lab completado.');
