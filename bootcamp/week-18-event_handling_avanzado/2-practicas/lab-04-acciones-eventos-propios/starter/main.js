/**
 * 📘 Lab 04: Acciones del navegador y eventos propios
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Cada paso es independiente, salvo el 5, que quita cajas del catálogo.
 */

const boxes = document.querySelector('#boxes');

// Si una recarga anterior dejó #catalogo o #indice en la dirección, la limpia.
location.hash = '';

// ============================================
// PASO 1: La acción por defecto de un enlace
// ============================================
console.log('--- Paso 1: preventDefault en un enlace ---');

// Descomenta las siguientes líneas:
// console.log('Antes:', location.hash || '(sin #)');
// document.querySelector('#to-catalog').click();
// console.log('Tras el enlace al catálogo:', location.hash);
//
// const toIndex = document.querySelector('#to-index');
// toIndex.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log(`cancelable: ${event.cancelable} · defaultPrevented: ${event.defaultPrevented}`);
// });
// toIndex.click();
// console.log('Tras el enlace al índice:', location.hash);

console.log('');

// ============================================
// PASO 2: La casilla que vuelve atrás
// ============================================
console.log('--- Paso 2: preventDefault en una casilla ---');

// Descomenta las siguientes líneas:
// const digitized = document.querySelector('#digitized');
// digitized.addEventListener('change', () => console.log('change: no debería salir'));
// digitized.addEventListener('click', (event) => {
//   console.log('Dentro del listener, checked:', digitized.checked);
//   event.preventDefault();
// });
// digitized.click();
// console.log('Después del clic, checked:', digitized.checked);

console.log('');

// ============================================
// PASO 3: Crear y lanzar eventos
// ============================================
console.log('--- Paso 3: new Event y dispatchEvent ---');

// Descomenta las siguientes líneas:
// document.addEventListener('ping', (event) => event.preventDefault());
// const plain = new Event('ping');
// console.log(`No cancelable → dispatchEvent devuelve ${document.dispatchEvent(plain)} · defaultPrevented: ${plain.defaultPrevented}`);
// const cancelable = new Event('ping', { cancelable: true });
// console.log(`Cancelable → dispatchEvent devuelve ${document.dispatchEvent(cancelable)} · defaultPrevented: ${cancelable.defaultPrevented}`);
//
// document.addEventListener('pong', (event) => event.preventDefault(), { passive: true });
// const passive = new Event('pong', { cancelable: true });
// console.log(`Listener passive → dispatchEvent devuelve ${document.dispatchEvent(passive)} · defaultPrevented: ${passive.defaultPrevented}`);

console.log('');

// ============================================
// PASO 4: CustomEvent, detail y bubbles
// ============================================
console.log('--- Paso 4: Un evento propio ---');

// Descomenta las siguientes líneas:
// document.addEventListener('box:request', (event) => {
//   const { id, title } = event.detail;
//   console.log(`document oye box:request: caja ${id}, «${title}» · target: li ${event.target.dataset.id}`);
// });
// const first = boxes.querySelector('li');
// const detail = { id: Number(first.dataset.id), title: first.textContent };
// first.dispatchEvent(new CustomEvent('box:request', { detail }));
// console.log('Sin bubbles: document no lo ha oído');
// first.dispatchEvent(new CustomEvent('box:request', { bubbles: true, detail }));

console.log('');

// ============================================
// PASO 5: Un evento que se puede vetar
// ============================================
console.log('--- Paso 5: Vetar con preventDefault ---');

// Descomenta las siguientes líneas:
// boxes.addEventListener('box:remove', (event) => {
//   if (event.target.dataset.locked === 'true') event.preventDefault();
// });
// const requestRemove = (item) => {
//   const event = new CustomEvent('box:remove', { bubbles: true, cancelable: true, detail: { id: Number(item.dataset.id) } });
//   const allowed = item.dispatchEvent(event);
//   if (allowed) item.remove();
//   console.log(`Quitar la caja ${event.detail.id}: ${allowed ? 'quitada' : 'vetada'}`);
// };
// for (const item of [...boxes.children]) requestRemove(item);
// console.log('Quedan:', [...boxes.children].map((item) => item.textContent).join(', '));

console.log('');

// ============================================
// PASO 6: Un EventTarget sin elemento
// ============================================
console.log('--- Paso 6: EventTarget ---');

// Descomenta las siguientes líneas:
// const loans = new EventTarget();
// let items = [];
// const lend = (title) => {
//   items = [...items, title];
//   loans.dispatchEvent(new CustomEvent('change', { detail: { items } }));
// };
//
// const counter = document.querySelector('#loan-count');
// loans.addEventListener('change', (event) => {
//   counter.textContent = event.detail.items.length;
// });
// loans.addEventListener('change', (event) => console.log('Préstamos:', event.detail.items.join(', ')));
// loans.addEventListener('change', () => console.log('(primer préstamo del día)'), { once: true });
// lend('Actas municipales de 1931');
// lend('Planos del puerto, 1898');
// console.log('Contador en la página:', counter.textContent);

console.log('');
console.log('✅ Lab completado.');
