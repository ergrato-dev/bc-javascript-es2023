/**
 * 📘 Lab 01: Escuchar eventos
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Cada paso crea su propio botón con addButton, así los listeners de un paso no
 * se mezclan con los de otro. Los pasos llaman a button.click() para que la salida
 * aparezca sin tocar nada; después, pulsa tú los botones y compara.
 */

const desk = document.querySelector('#desk');

// Crea un <button> con el texto dado, lo añade al mostrador y lo devuelve.
const addButton = (text) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = text;
  desk.append(button);
  return button;
};

// ============================================
// PASO 1: addEventListener y el objeto evento
// ============================================
console.log('--- Paso 1: Escuchar un clic ---');

// Descomenta las siguientes líneas:
// const request = addButton('Pedir documento');
// request.addEventListener('click', (event) => {
//   console.log(`type: ${event.type} · target: ${event.target.textContent} · isTrusted: ${event.isTrusted}`);
// });
// console.log('Listener añadido. Simulo un clic:');
// request.click();
// console.log('click() ya ha vuelto');

console.log('');

// ============================================
// PASO 2: Varios listeners y la propiedad onclick
// ============================================
console.log('--- Paso 2: Varios listeners ---');

// Descomenta las siguientes líneas:
// const stamp = addButton('Sellar');
// const order = [];
// stamp.addEventListener('click', () => order.push('listener A'));
// stamp.onclick = () => order.push('onclick 1');
// stamp.addEventListener('click', () => order.push('listener B'));
// stamp.onclick = () => order.push('onclick 2');
// stamp.click();
// console.log('Orden:', order.join(' → '));

console.log('');

// ============================================
// PASO 3: Quitar un listener: la misma función
// ============================================
console.log('--- Paso 3: removeEventListener ---');

// Descomenta las siguientes líneas:
// const notifyButton = addButton('Avisar');
// let calls = 0;
// const notify = () => {
//   calls += 1;
// };
// notifyButton.addEventListener('click', notify);
// notifyButton.addEventListener('click', notify); // la misma función: no se añade otra vez
// notifyButton.click();
// console.log('Tras 1 clic:', calls);
//
// notifyButton.removeEventListener('click', () => {
//   calls += 1;
// });
// notifyButton.click();
// console.log('Tras quitar una función nueva y otro clic:', calls);
//
// notifyButton.removeEventListener('click', notify);
// notifyButton.click();
// console.log('Tras quitar notify y otro clic:', calls);

console.log('');

// ============================================
// PASO 4: once
// ============================================
console.log('--- Paso 4: Una sola vez ---');

// Descomenta las siguientes líneas:
// const firstVisit = addButton('Primera visita');
// let welcomes = 0;
// firstVisit.addEventListener('click', () => {
//   welcomes += 1;
// }, { once: true });
// firstVisit.click();
// firstVisit.click();
// firstVisit.click();
// console.log('Clics: 3 · bienvenidas:', welcomes);

console.log('');

// ============================================
// PASO 5: Quitar varios listeners con signal
// ============================================
console.log('--- Paso 5: AbortController ---');

// Descomenta las siguientes líneas:
// const reading = addButton('Sala de lectura');
// const controller = new AbortController();
// const log = [];
// reading.addEventListener('click', () => log.push('registrar'), { signal: controller.signal });
// reading.addEventListener('click', () => log.push('contar'), { signal: controller.signal });
// reading.click();
// console.log('Antes de abort:', log.join(', '));
//
// controller.abort();
// reading.click();
// console.log('Después de abort:', log.join(', '), '· aborted:', controller.signal.aborted);
//
// reading.addEventListener('click', () => log.push('tarde'), { signal: controller.signal });
// reading.click();
// console.log('Con una señal ya abortada:', log.join(', '));

console.log('');

// ============================================
// PASO 6: this, currentTarget y el evento después
// ============================================
console.log('--- Paso 6: Quién escucha ---');

// Descomenta las siguientes líneas:
// const catalog = addButton('Catálogo');
// catalog.addEventListener('click', function () {
//   console.log('function: this es', this.textContent);
// });
// catalog.addEventListener('click', () => {
//   console.log('arrow: this es', String(this));
// });
// let saved;
// catalog.addEventListener('click', (event) => {
//   saved = event;
//   console.log('currentTarget durante el evento:', event.currentTarget.textContent);
// });
// catalog.click();
// console.log('currentTarget después:', saved.currentTarget, '· target después:', saved.target.textContent);

console.log('');

// ============================================
// PASO 7: El teclado
// ============================================
console.log('--- Paso 7: keydown ---');

// Descomenta las siguientes líneas:
// document.addEventListener('keydown', (event) => {
//   const modifiers = ['ctrlKey', 'shiftKey', 'altKey', 'metaKey'].filter((name) => event[name]);
//   console.log(`key: ${event.key} · code: ${event.code} · modificadores: ${modifiers.join(', ') || 'ninguno'} · repeat: ${event.repeat}`);
// });
// // Simula dos pulsaciones (en el lab 04 verás cómo se crean eventos):
// document.dispatchEvent(new KeyboardEvent('keydown', { key: 'r', code: 'KeyR' }));
// document.dispatchEvent(new KeyboardEvent('keydown', { key: 'R', code: 'KeyR', shiftKey: true }));
// console.log('Ahora pulsa tú teclas con la página enfocada');

console.log('');
console.log('✅ Lab completado.');
