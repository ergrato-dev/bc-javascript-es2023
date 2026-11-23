/**
 * 📘 Lab 04: Plantillas y render
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Los pasos 2 a 6 pintan los tanques en la página.
 */

const list = document.querySelector('#list');
const empty = document.querySelector('#empty');
const template = document.querySelector('#tank-template');

let tanks = [
  { id: 1, name: 'Arrecife de coral', species: 14 },
  { id: 2, name: 'Océano abierto', species: 9 },
  { id: 3, name: 'Río amazónico', species: 11 },
];

// Imprime los nombres que hay ahora en la lista de la página.
const show = (label) => {
  const names = [...list.querySelectorAll('.name')].map((name) => name.textContent).join(', ') || '—';
  console.log(`${label} → ${names}`);
};

// ============================================
// PASO 1: Una plantilla no está en la página
// ============================================
console.log('--- Paso 1: <template> ---');

// Descomenta las siguientes líneas:
// console.log('content es un', template.content.constructor.name);
// console.log('.tank en la página:', document.querySelectorAll('.tank').length);
// console.log('.tank en la plantilla:', template.content.querySelectorAll('.tank').length);

console.log('');

// ============================================
// PASO 2: Clonar y rellenar
// ============================================
console.log('--- Paso 2: Clonar ---');

// Descomenta las siguientes líneas:
// let created = 0;
//
// // Un <li> nuevo para cada tanque, a partir de la plantilla.
// let createTank = (tank) => {
//   created += 1;
//   const item = template.content.firstElementChild.cloneNode(true);
//   item.dataset.id = tank.id;
//   item.querySelector('.name').textContent = tank.name;
//   item.querySelector('.detail').textContent = `${tank.species} especies`;
//   return item;
// };
//
// list.append(createTank(tanks[0]));
// show('Uno');
// console.log('.tank en la plantilla:', template.content.querySelectorAll('.tank').length);

console.log('');

// ============================================
// PASO 3: Pintar la lista a partir de los datos
// ============================================
console.log('--- Paso 3: render ---');

// Descomenta las siguientes líneas:
// // La página se pinta siempre desde `tanks`: nunca se cambia la lista a mano.
// const render = () => {
//   list.replaceChildren(...tanks.map(createTank));
//   empty.hidden = tanks.length > 0;
// };
//
// render();
// show('render');
//
// tanks = tanks.filter((tank) => tank.id !== 2);
// render();
// show('Sin el 2');
//
// const saved = tanks;
// tanks = [];
// render();
// show('Vacía');
// console.log('¿Mensaje visible?', !empty.hidden);
// tanks = saved;

console.log('');

// ============================================
// PASO 4: Pintar todo de nuevo tiene un coste
// ============================================
console.log('--- Paso 4: Rehacer todo ---');

// Descomenta las siguientes líneas:
// render();
// const firstButton = list.querySelector('.feature');
// firstButton.focus();
// console.log('¿Foco en el botón?', document.activeElement === firstButton);
//
// created = 0;
// tanks = tanks.with(0, { ...tanks[0], species: 15 });
// render();
// console.log('Nodos creados:', created, '· ¿sigue el foco?', document.activeElement === firstButton);
// console.log('¿Sigue en la página?', list.contains(firstButton));

console.log('');

// ============================================
// PASO 5: Reutilizar los nodos que ya existen
// ============================================
console.log('--- Paso 5: render con clave ---');

// Descomenta las siguientes líneas:
// // El <li> de cada tanque, por id. Sobrevive entre renders.
// const nodes = new Map();
//
// const renderKeyed = () => {
//   const ids = new Set(tanks.map((tank) => tank.id));
//   for (const [id, node] of nodes) {
//     if (!ids.has(id)) {
//       node.remove();
//       nodes.delete(id);
//     }
//   }
//   tanks.forEach((tank, index) => {
//     const node = nodes.get(tank.id) ?? createTank(tank);
//     node.querySelector('.detail').textContent = `${tank.species} especies`;
//     nodes.set(tank.id, node);
//     // Solo se mueve el nodo si no está ya en su sitio.
//     const current = list.children[index];
//     if (current !== node) {
//       if (current) current.before(node);
//       else list.append(node);
//     }
//   });
//   empty.hidden = tanks.length > 0;
// };
//
// list.replaceChildren();
// created = 0;
// renderKeyed();
// console.log('Primera vez, nodos creados:', created);
//
// const button = list.querySelector('.feature');
// button.focus();
// created = 0;
// tanks = [{ id: 4, name: 'Manglar', species: 7 }, ...tanks.toReversed()];
// renderKeyed();
// show('Nuevo y al revés');
// console.log('Nodos creados:', created, '· ¿sigue el foco?', document.activeElement === button);

console.log('');

// ============================================
// PASO 6: Cada nodo nuevo trae su comportamiento
// ============================================
console.log('--- Paso 6: Listeners al crear ---');

// Descomenta las siguientes líneas:
// // Envuelve createTank para añadir el listener del botón a cada <li> nuevo.
// const createBase = createTank;
// createTank = (tank) => {
//   const item = createBase(tank);
//   const feature = item.querySelector('.feature');
//   feature.addEventListener('click', () => {
//     const featured = item.classList.toggle('is-featured');
//     feature.setAttribute('aria-pressed', String(featured));
//   });
//   return item;
// };
//
// tanks = [...tanks, { id: 5, name: 'Lago de montaña', species: 6 }];
// renderKeyed();
// const lake = list.querySelector('[data-id="5"]');
// lake.querySelector('.feature').click();
// console.log('Tras click → clases:', lake.className, '· aria-pressed:', lake.querySelector('.feature').getAttribute('aria-pressed'));
//
// const coral = list.querySelector('[data-id="1"]');
// coral.querySelector('.feature').click();
// console.log('El 1, creado antes del paso 6 → clases:', coral.className);

console.log('');
console.log('✅ Lab completado.');
