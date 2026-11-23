/**
 * 📘 Lab 03: Delegación
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Cada paso parte de cómo dejó la lista el anterior: descomenta en orden.
 * Los pasos 1 a 4 quitan sus listeners al terminar; los de los pasos 5 y 6 se quedan,
 * para que al final puedas pulsar los botones tú.
 */

const panel = document.querySelector('#panel');
const list = document.querySelector('#requests');

// Crea una solicitud con la misma estructura que las del HTML y la añade a la lista.
const addRequest = (id, title) => {
  const item = document.createElement('li');
  item.dataset.id = id;
  const text = document.createElement('span');
  text.className = 'title';
  text.textContent = title;
  const approve = document.createElement('button');
  approve.type = 'button';
  approve.dataset.action = 'approve';
  const icon = document.createElement('span');
  icon.className = 'icon';
  icon.textContent = '✔';
  approve.append(icon, ' Aprobar');
  const reject = document.createElement('button');
  reject.type = 'button';
  reject.dataset.action = 'reject';
  reject.textContent = 'Rechazar';
  item.append(text, approve, reject);
  list.append(item);
  return item;
};

// Busca dentro de la solicitud con ese id: buttonOf(1, 'approve'), partOf(1, '.title').
const partOf = (id, selector) => list.querySelector(`[data-id="${id}"] ${selector}`);
const buttonOf = (id, action) => partOf(id, `[data-action="${action}"]`);

// El panel se pliega cuando haces clic en el propio panel, fuera de cualquier botón.
panel.addEventListener('click', (event) => {
  if (event.target.closest('[data-action]') !== panel) return;
  panel.classList.toggle('is-folded');
  console.log(`(panel: ${panel.classList.contains('is-folded') ? 'plegado' : 'desplegado'})`);
});

// ============================================
// PASO 1: Un listener por botón
// ============================================
console.log('--- Paso 1: Un listener por botón ---');

// Descomenta las siguientes líneas:
// const step1 = new AbortController();
// let added = 0;
// for (const button of list.querySelectorAll('button')) {
//   button.addEventListener('click', () => {
//     console.log(`Listener del botón: ${button.dataset.action} en la solicitud ${button.closest('li').dataset.id}`);
//   }, { signal: step1.signal });
//   added += 1;
// }
// console.log('Listeners añadidos:', added);
// addRequest(3, 'Censo de 1910');
// buttonOf(1, 'approve').click();
// buttonOf(3, 'approve').click();
// console.log('La solicitud 3 se añadió después: su botón no tiene listener');
// step1.abort();

console.log('');

// ============================================
// PASO 2: Un listener en la lista
// ============================================
console.log('--- Paso 2: Delegación ---');

// Descomenta las siguientes líneas:
// const step2 = new AbortController();
// list.addEventListener('click', (event) => {
//   const button = event.target.closest('[data-action]');
//   console.log(`Listener de la lista: ${button.dataset.action} en la solicitud ${button.closest('li').dataset.id}`);
// }, { signal: step2.signal });
// buttonOf(1, 'reject').click();
// buttonOf(3, 'approve').click();
// addRequest(4, 'Cartas del faro, 1902');
// buttonOf(4, 'reject').click();
// console.log('Listeners en la lista: 1, para', list.querySelectorAll('button').length, 'botones');
// step2.abort();

console.log('');

// ============================================
// PASO 3: El clic en el icono
// ============================================
console.log('--- Paso 3: target dentro del botón ---');

// Descomenta las siguientes líneas:
// const step3 = new AbortController();
// list.addEventListener('click', (event) => {
//   const { target } = event;
//   console.log(`target: ${target.tagName.toLowerCase()} · target.dataset.action: ${target.dataset.action} · con closest: ${target.closest('[data-action]').dataset.action}`);
// }, { signal: step3.signal });
// partOf(1, '.icon').click();
// buttonOf(1, 'approve').click();
// step3.abort();

console.log('');

// ============================================
// PASO 4: closest se sale de la lista
// ============================================
console.log('--- Paso 4: list.contains ---');

// Descomenta las siguientes líneas:
// const step4 = new AbortController();
// const naive = (event) => event.target.closest('[data-action]')?.dataset.action ?? 'ninguna';
// const safe = (event) => {
//   const button = event.target.closest('[data-action]');
//   return button && list.contains(button) ? button.dataset.action : 'ninguna';
// };
// list.addEventListener('click', (event) => {
//   console.log(`Sin comprobar: ${naive(event)} · con list.contains: ${safe(event)}`);
// }, { signal: step4.signal });
// partOf(2, '.title').click();
// partOf(2, '.title').click();
// buttonOf(2, 'reject').click();
// step4.abort();

console.log('');

// ============================================
// PASO 5: Una tabla de acciones
// ============================================
console.log('--- Paso 5: Acciones por nombre ---');

// Descomenta las siguientes líneas:
// const actions = {
//   approve: (item) => item.classList.add('is-approved'),
//   reject: (item) => item.remove(),
// };
// list.addEventListener('click', (event) => {
//   const button = event.target.closest('[data-action]');
//   if (!button || !list.contains(button)) return;
//   const item = button.closest('li');
//   const { action } = button.dataset;
//   if (!Object.hasOwn(actions, action)) {
//     console.log(`Acción desconocida: ${action}`);
//     return;
//   }
//   actions[action](item);
//   console.log(`${action} → solicitud ${item.dataset.id}`);
// });
// buttonOf(1, 'approve').click();
// buttonOf(2, 'reject').click();
//
// const archiveButton = document.createElement('button');
// archiveButton.type = 'button';
// archiveButton.dataset.action = 'archive';
// archiveButton.textContent = 'Archivar';
// list.querySelector('[data-id="3"]').append(archiveButton);
// archiveButton.click();
//
// const summary = [...list.children].map((item) => `${item.dataset.id}${item.classList.contains('is-approved') ? ' (aprobada)' : ''}`);
// console.log('Quedan:', summary.join(', '));

console.log('');

// ============================================
// PASO 6: Delegar el foco
// ============================================
console.log('--- Paso 6: focusin y focusout ---');

// Descomenta las siguientes líneas:
// list.addEventListener('focusin', (event) => event.target.closest('li').classList.add('is-active'));
// list.addEventListener('focusout', (event) => event.target.closest('li').classList.remove('is-active'));
// const active = () => list.querySelector('.is-active')?.dataset.id ?? 'ninguna';
// buttonOf(3, 'approve').focus();
// console.log('Foco en la 3 → activa:', active());
// buttonOf(4, 'reject').focus();
// console.log('Foco en la 4 → activa:', active());
// buttonOf(4, 'reject').blur();
// console.log('Sin foco → activa:', active());

console.log('');
console.log('✅ Lab completado.');
