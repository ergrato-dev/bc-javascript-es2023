/**
 * 📘 Lab 01: El árbol y la selección
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * La página no cambia en este lab: todo lo que pasa sale en la consola.
 */

// ============================================
// PASO 1: El árbol de nodos
// ============================================
console.log('--- Paso 1: El árbol ---');

// Descomenta las siguientes líneas:
// console.log('Raíz:', document.documentElement.tagName);
// console.log('Hijos de <body>:', document.body.children.length);
//
// const list = document.querySelector('.tank-list');
// console.log('childNodes:', list.childNodes.length, '· children:', list.children.length);
// console.log('Primeros nodos:', [...list.childNodes].slice(0, 3).map((node) => node.nodeName).join(', '));
// console.log('Tipos:', list.firstChild.nodeType, '(texto) ·', list.firstElementChild.nodeType, '(elemento)');

console.log('');

// ============================================
// PASO 2: querySelector, el primero que encaja
// ============================================
console.log('--- Paso 2: querySelector ---');

// Descomenta las siguientes líneas:
// const firstTank = document.querySelector('.tank');
// console.log('Primer .tank:', firstTank.dataset.id);
// console.log('Abierto y de río:', document.querySelector('.tank:not(.is-closed)[data-habitat="rio"]').dataset.id);
// console.log('Sin coincidencias:', document.querySelector('.tank.is-full'));
//
// const section = document.querySelector('#tanks');
// console.log('h2 dentro de la sección:', section.querySelector('h2').textContent);
// console.log('h1 dentro de la sección:', section.querySelector('h1'));

console.log('');

// ============================================
// PASO 3: querySelectorAll y las colecciones vivas
// ============================================
console.log('--- Paso 3: querySelectorAll ---');

// Descomenta las siguientes líneas:
// const tanks = document.querySelectorAll('.tank');
// console.log('Tipo:', tanks.constructor.name, '· longitud:', tanks.length);
// console.log('Ids:', Array.from(tanks, (tank) => tank.dataset.id).join(', '));
// console.log('Abiertos:', [...tanks].filter((tank) => !tank.matches('.is-closed')).length);
//
// const live = document.getElementsByClassName('tank');
// const extra = document.createElement('li');
// extra.className = 'tank';
// document.querySelector('.tank-list').append(extra);
// console.log('Tras añadir uno → NodeList:', tanks.length, '· HTMLCollection:', live.length);
// extra.remove();

console.log('');

// ============================================
// PASO 4: Moverse por el árbol
// ============================================
console.log('--- Paso 4: Recorrer ---');

// Descomenta las siguientes líneas:
// const ocean = document.querySelector('[data-id="2"]');
// console.log('Padre:', ocean.parentElement.className);
// console.log('Anterior:', ocean.previousElementSibling.dataset.id, '· siguiente:', ocean.nextElementSibling.dataset.id);
// console.log('Su primer hijo:', ocean.firstElementChild.textContent);
//
// const badge = ocean.querySelector('.badge');
// console.log('closest(".tank"):', badge.closest('.tank').dataset.id);
// console.log('closest("section"):', badge.closest('section').id);
// console.log('closest("form"):', badge.closest('form'));
// console.log('matches(".tank.is-closed"):', ocean.matches('.tank.is-closed'));

console.log('');

// ============================================
// PASO 5: data-* y dataset
// ============================================
console.log('--- Paso 5: dataset ---');

// Descomenta las siguientes líneas:
// const coral = document.querySelector('[data-id="1"]');
// console.log('dataset:', JSON.stringify(coral.dataset));
//
// coral.dataset.lastCheck = '2026-11-02';
// console.log('Atributo creado:', coral.getAttribute('data-last-check'));
//
// coral.dataset.visits = 120;
// console.log('Tipo de visits:', typeof coral.dataset.visits);
//
// delete coral.dataset.visits;
// console.log('¿Sigue data-visits?', coral.hasAttribute('data-visits'));
// console.log('Zona de la sección:', coral.closest('[data-zone]').dataset.zone);

console.log('');

// ============================================
// PASO 6: Seleccionar sin sorpresas
// ============================================
console.log('--- Paso 6: Selección robusta ---');

// Descomenta las siguientes líneas:
// // Falla en el momento con un mensaje claro, en lugar de un TypeError más adelante.
// const must = (selector, root = document) => {
//   const element = root.querySelector(selector);
//   if (!element) throw new Error(`No hay ningún elemento ${selector}`);
//   return element;
// };
//
// const form = must('#search');
// console.log('Campo por nombre:', form.elements.q.value);
// console.log('getElementById:', document.getElementById('q') === form.elements.q);
//
// try {
//   must('#results');
// } catch (error) {
//   console.log('Error:', error.message);
// }

console.log('');
console.log('✅ Lab completado.');
