/**
 * 📘 Lab 01: localStorage y sessionStorage
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Todas las claves del lab empiezan por «lab19:» para no pisar las de otras páginas.
 */

// Borra las claves de ejemplo de los pasos 1, 2 y 5, para que cada recarga empiece igual.
// Las de los pasos 3 y 4 (las visitas) se quedan: son las que tienen que sobrevivir a la recarga.
for (const key of Object.keys(localStorage)) {
  if (key.startsWith('lab19:demo:')) localStorage.removeItem(key);
}

// ============================================
// PASO 1: Guardar, leer y borrar
// ============================================
console.log('--- Paso 1: setItem, getItem y removeItem ---');

// Descomenta las siguientes líneas:
// localStorage.setItem('lab19:demo:tank', 'Arrecife');
// localStorage.setItem('lab19:demo:language', 'es');
// console.log('tank:', localStorage.getItem('lab19:demo:tank'));
// localStorage.setItem('lab19:demo:tank', 'Medusas');
// console.log('tank tras sobrescribir:', localStorage.getItem('lab19:demo:tank'));
// localStorage.removeItem('lab19:demo:language');
// console.log('language tras removeItem:', localStorage.getItem('lab19:demo:language'));
// console.log('Clave que no existe:', localStorage.getItem('lab19:demo:nada'));

console.log('');

// ============================================
// PASO 2: Solo guarda texto
// ============================================
console.log('--- Paso 2: Todo se convierte en texto ---');

// Descomenta las siguientes líneas:
// localStorage.setItem('lab19:demo:price', 12.5);
// localStorage.setItem('lab19:demo:open', false);
// localStorage.setItem('lab19:demo:tanks', ['Arrecife', 'Medusas']);
// localStorage.setItem('lab19:demo:ticket', { id: 7, adults: 2 });
// for (const name of ['price', 'open', 'tanks', 'ticket']) {
//   const value = localStorage.getItem(`lab19:demo:${name}`);
//   console.log(`${name}: ${JSON.stringify(value)} (${typeof value})`);
// }
// const open = localStorage.getItem('lab19:demo:open');
// console.log(`if ("false") entra: ${Boolean(open)} · comparado con 'true': ${open === 'true'}`);

console.log('');

// ============================================
// PASO 3: Valores por defecto y un contador que sobrevive
// ============================================
console.log('--- Paso 3: null, valores por defecto y visitas ---');

// Descomenta las siguientes líneas:
// console.log('Number(null):', Number(localStorage.getItem('lab19:demo:nada')));
// const language = localStorage.getItem('lab19:demo:nada') ?? 'es';
// console.log('Idioma con ?? :', language);
//
// const visits = Number(localStorage.getItem('lab19:visits') ?? '0') + 1;
// localStorage.setItem('lab19:visits', String(visits));
// document.querySelector('#visits').textContent = visits;
// console.log('Visitas (localStorage):', visits);

console.log('');

// ============================================
// PASO 4: sessionStorage es de la pestaña
// ============================================
console.log('--- Paso 4: sessionStorage ---');

// Descomenta las siguientes líneas:
// const sessionVisits = Number(sessionStorage.getItem('lab19:session-visits') ?? '0') + 1;
// sessionStorage.setItem('lab19:session-visits', String(sessionVisits));
// document.querySelector('#session-visits').textContent = sessionVisits;
// console.log('Visitas de esta pestaña (sessionStorage):', sessionVisits);
// console.log('La misma clave en localStorage:', localStorage.getItem('lab19:session-visits'));

console.log('');

// ============================================
// PASO 5: Recorrer y borrar solo tus claves
// ============================================
console.log('--- Paso 5: Claves con prefijo ---');

// Descomenta las siguientes líneas:
// localStorage.setItem('lab19:demo:a', '1');
// localStorage.setItem('lab19:demo:b', '2');
// const keysWith = (prefix) => Object.keys(localStorage).filter((key) => key.startsWith(prefix)).sort();
// console.log('Claves lab19:', keysWith('lab19:').join(', '));
// console.log('Con key(i):', Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i)).filter((key) => key.startsWith('lab19:demo:')).sort().join(', '));
// for (const key of keysWith('lab19:demo:')) localStorage.removeItem(key);
// console.log('Tras borrar lab19:demo:', keysWith('lab19:').join(', '));

console.log('');

// ============================================
// PASO 6: El evento storage avisa a las otras pestañas
// ============================================
console.log('--- Paso 6: El evento storage ---');

// Descomenta las siguientes líneas:
// window.addEventListener('storage', (event) => {
//   if (event.storageArea !== localStorage || event.key !== 'lab19:visits') return;
//   console.log(`storage: ${event.key} ${event.oldValue} → ${event.newValue}`);
//   document.querySelector('#visits').textContent = event.newValue;
// });
// console.log('Escuchando cambios de otras pestañas. Abre esta página en otra pestaña.');

console.log('');
console.log('✅ Lab completado.');
