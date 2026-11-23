/**
 * 📘 Lab 02: Crear, insertar y quitar nodos
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Cada paso cambia las dos listas de la página y show() imprime cómo quedan.
 */

const todo = document.querySelector('#todo');
const done = document.querySelector('#done');

// Imprime el texto de cada <li> de las dos listas.
const show = (label) => {
  const texts = (list) => [...list.children].map((item) => item.textContent).join(', ') || '—';
  console.log(`${label} → pendientes: ${texts(todo)} | hechas: ${texts(done)}`);
};

// Crea un <li> con el texto dado.
const makeItem = (text) => {
  const item = document.createElement('li');
  item.textContent = text;
  return item;
};

show('Inicio');
console.log('');

// ============================================
// PASO 1: createElement y append
// ============================================
console.log('--- Paso 1: Crear y añadir ---');

// Descomenta las siguientes líneas:
// const feed = document.createElement('li');
// console.log('¿Está en la página?', document.contains(feed));
// feed.textContent = 'Dar de comer';
// todo.append(feed);
// console.log('¿Y ahora?', document.contains(feed));
//
// todo.append(makeItem('Revisar luces'), makeItem('Contar peces'));
// show('Tras append');
//
// const returned = todo.appendChild(makeItem('Cambiar el agua'));
// console.log('appendChild devuelve:', returned.textContent);
// show('Tras appendChild');

console.log('');

// ============================================
// PASO 2: Cada sitio tiene su método
// ============================================
console.log('--- Paso 2: Posiciones ---');

// Descomenta las siguientes líneas:
// todo.prepend(makeItem('Abrir el acuario'));
// show('prepend');
//
// const ph = [...todo.children].find((item) => item.textContent === 'Medir el pH');
// ph.before(makeItem('Calibrar el medidor'));
// ph.after(makeItem('Apuntar el pH'));
// show('before y after');

console.log('');

// ============================================
// PASO 3: Insertar un nodo que ya está en la página lo mueve
// ============================================
console.log('--- Paso 3: Mover ---');

// Descomenta las siguientes líneas:
// const first = todo.firstElementChild;
// done.append(first);
// show('Primero a hechas');
//
// done.append(todo.firstElementChild, todo.firstElementChild);
// show('Dos más');
// console.log('Elementos <li> en la página:', document.querySelectorAll('li').length);

console.log('');

// ============================================
// PASO 4: cloneNode copia
// ============================================
console.log('--- Paso 4: Copiar ---');

// Descomenta las siguientes líneas:
// const source = done.firstElementChild;
// source.dataset.priority = 'alta';
//
// const shallow = source.cloneNode();
// console.log('Copia superficial:', JSON.stringify(shallow.textContent), '· priority:', shallow.dataset.priority);
//
// const deep = source.cloneNode(true);
// console.log('Copia profunda:', JSON.stringify(deep.textContent), '· priority:', deep.dataset.priority);
// console.log('¿Es el mismo nodo?', deep === source, '· ¿iguales?', deep.isEqualNode(source));
//
// todo.append(deep);
// show('Copia en pendientes');

console.log('');

// ============================================
// PASO 5: Quitar y sustituir
// ============================================
console.log('--- Paso 5: Quitar ---');

// Descomenta las siguientes líneas:
// todo.lastElementChild.remove();
// show('remove');
//
// todo.firstElementChild.replaceWith(makeItem('Revisar el termostato'));
// show('replaceWith');
//
// done.replaceChildren();
// show('replaceChildren() vacía');
//
// done.replaceChildren(makeItem('Limpiar filtros'), makeItem('Dar de comer'));
// show('replaceChildren(...) sustituye');

console.log('');

// ============================================
// PASO 6: Muchos nodos de una vez
// ============================================
console.log('--- Paso 6: Fragmentos ---');

// Descomenta las siguientes líneas:
// // MutationObserver anota cada cambio de la lista; takeRecords() entrega lo anotado.
// const observer = new MutationObserver(() => {});
// observer.observe(todo, { childList: true });
//
// const tasks = ['Lavar redes', 'Pedir pienso', 'Pesar la comida'];
// for (const task of tasks) todo.append(makeItem(task));
// console.log('Uno a uno:', observer.takeRecords().length, 'cambios');
//
// const fragment = document.createDocumentFragment();
// for (const task of tasks) fragment.append(makeItem(`${task} (2)`));
// console.log('Nodos en el fragmento:', fragment.childNodes.length);
// todo.append(fragment);
// console.log('Con un fragmento:', observer.takeRecords().length, 'cambio');
// console.log('Nodos en el fragmento después:', fragment.childNodes.length);
//
// todo.replaceChildren(...tasks.map(makeItem));
// console.log('Con replaceChildren(...):', observer.takeRecords().length, 'cambio');
// show('Final');
// observer.disconnect();

console.log('');
console.log('✅ Lab completado.');
