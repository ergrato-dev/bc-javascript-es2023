/**
 * 📘 Lab 02: Propagación
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * La página tiene una caja dentro de una estantería dentro de un depósito:
 *   section#archive > div#shelf > button#box > span#label
 * Cada paso añade sus listeners con su propio AbortController y los quita al final
 * con abort(), así un paso no oye los clics del siguiente.
 */

const archive = document.querySelector('#archive');
const shelf = document.querySelector('#shelf');
const box = document.querySelector('#box');
const label = document.querySelector('#label');
const search = document.querySelector('#search');

// Nombre corto de un nodo: «document» o «etiqueta#id».
const describe = (node) => (node === document ? 'document' : `${node.tagName.toLowerCase()}#${node.id}`);

// eventPhase es un número: 1 captura, 2 en el destino, 3 burbuja.
const PHASES = ['ninguna', 'captura', 'destino', 'burbuja'];

// record es un listener que anota quién lo oye y en qué fase; flush imprime lo anotado.
let trace = [];
const record = (event) => trace.push(`${describe(event.currentTarget)} (${PHASES[event.eventPhase]})`);
const flush = (text) => {
  console.log(`${text}: ${trace.join(' → ') || 'nadie'}`);
  trace = [];
};

// ============================================
// PASO 1: El evento sube (burbuja)
// ============================================
console.log('--- Paso 1: Burbuja ---');

// Descomenta las siguientes líneas:
// const step1 = new AbortController();
// for (const node of [document, archive, shelf, box, label]) {
//   node.addEventListener('click', record, { signal: step1.signal });
// }
// label.click();
// flush('Clic en la etiqueta');
// box.click();
// flush('Clic en la caja');
// shelf.click();
// flush('Clic en la estantería');
// step1.abort();

console.log('');

// ============================================
// PASO 2: Antes baja (captura)
// ============================================
console.log('--- Paso 2: Captura ---');

// Descomenta las siguientes líneas:
// const step2 = new AbortController();
// for (const node of [document, archive, shelf, box, label]) {
//   node.addEventListener('click', record, { signal: step2.signal });
//   node.addEventListener('click', record, { capture: true, signal: step2.signal });
// }
// label.click();
// flush('Clic en la etiqueta');
// step2.abort();

console.log('');

// ============================================
// PASO 3: target y currentTarget
// ============================================
console.log('--- Paso 3: Dónde ocurrió y quién escucha ---');

// Descomenta las siguientes líneas:
// const step3 = new AbortController();
// shelf.addEventListener('click', (event) => {
//   const button = event.target.closest('button');
//   console.log(`target: ${describe(event.target)} · currentTarget: ${describe(event.currentTarget)} · botón: ${button ? describe(button) : 'ninguno'}`);
// }, { signal: step3.signal });
// label.click();
// box.click();
// shelf.click();
// step3.abort();

console.log('');

// ============================================
// PASO 4: stopPropagation
// ============================================
console.log('--- Paso 4: Parar la subida ---');

// Descomenta las siguientes líneas:
// const step4 = new AbortController();
// const { signal } = step4;
// document.addEventListener('click', () => trace.push('document: cierra los menús abiertos'), { signal });
// archive.addEventListener('click', record, { signal });
// shelf.addEventListener('click', (event) => {
//   record(event);
//   event.stopPropagation();
// }, { signal });
// shelf.addEventListener('click', () => trace.push('div#shelf (segundo listener)'), { signal });
// box.addEventListener('click', record, { signal });
// label.click();
// flush('Con stopPropagation');
// step4.abort();

console.log('');

// ============================================
// PASO 5: stopImmediatePropagation
// ============================================
console.log('--- Paso 5: Parar también al vecino ---');

// Descomenta las siguientes líneas:
// const step5 = new AbortController();
// archive.addEventListener('click', record, { signal: step5.signal });
// shelf.addEventListener('click', (event) => {
//   record(event);
//   event.stopImmediatePropagation();
// }, { signal: step5.signal });
// shelf.addEventListener('click', () => trace.push('div#shelf (segundo listener)'), { signal: step5.signal });
// label.click();
// flush('Con stopImmediatePropagation');
// step5.abort();

console.log('');

// ============================================
// PASO 6: Eventos que no suben
// ============================================
console.log('--- Paso 6: focus y focusin ---');

// Descomenta las siguientes líneas:
// const step6 = new AbortController();
// archive.addEventListener('focus', () => trace.push('focus en section (burbuja)'), { signal: step6.signal });
// archive.addEventListener('focus', () => trace.push('focus en section (captura)'), { capture: true, signal: step6.signal });
// archive.addEventListener('focusin', () => trace.push('focusin en section'), { signal: step6.signal });
// search.addEventListener('focus', (event) => trace.push(`focus en el input · bubbles: ${event.bubbles}`), { signal: step6.signal });
// search.focus();
// flush('Al enfocar el buscador');
// search.blur();
// step6.abort();

console.log('');
console.log('✅ Lab completado.');
