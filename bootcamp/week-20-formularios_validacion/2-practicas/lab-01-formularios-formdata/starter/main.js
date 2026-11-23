/**
 * 📘 Lab 01: Formularios y FormData
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 */

const form = document.querySelector('#booking');

// ============================================
// PASO 1: Los campos por su nombre
// ============================================
console.log('--- Paso 1: form.elements ---');

// Descomenta las siguientes líneas:
// const { visitor, tickets, guide } = form.elements;
// visitor.value = 'Ana';
// console.log('visitor:', visitor.value);
// console.log('tickets:', JSON.stringify(tickets.value), typeof tickets.value);
// console.log('tickets.valueAsNumber:', tickets.valueAsNumber, typeof tickets.valueAsNumber);
// console.log('guide.value:', guide.value, '· guide.checked:', guide.checked);
// guide.checked = true;
// console.log('guide.checked tras marcarla:', guide.checked);
// console.log('Campos del formulario:', form.elements.length);

console.log('');

// ============================================
// PASO 2: El evento submit
// ============================================
console.log('--- Paso 2: submit y requestSubmit ---');

// Descomenta las siguientes líneas:
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   console.log(`submit · botón: ${event.submitter ? `«${event.submitter.textContent}»` : 'ninguno'}`);
// });
// form.requestSubmit();
// const draftButton = form.querySelector('[value="draft"]');
// form.requestSubmit(draftButton);
// console.log('La página no se ha recargado:', document.readyState);

console.log('');

// ============================================
// PASO 3: FormData
// ============================================
console.log('--- Paso 3: new FormData(form) ---');

// Descomenta las siguientes líneas:
// form.elements.guide.checked = false;
// const data = new FormData(form);
// console.log('Parejas:', JSON.stringify([...data]));
// console.log('get("visitor"):', data.get('visitor'));
// console.log('get("tickets"):', JSON.stringify(data.get('tickets')));
// console.log('get("guide"):', data.get('guide'), '· has("guide"):', data.has('guide'));
// console.log('get("office"):', data.get('office'), '(está disabled)');
// form.elements.guide.checked = true;
// console.log('Con la casilla marcada:', new FormData(form).get('guide'));

console.log('');

// ============================================
// PASO 4: Varios valores con el mismo name
// ============================================
console.log('--- Paso 4: getAll y Object.fromEntries ---');

// Descomenta las siguientes líneas:
// for (const box of form.querySelectorAll('[name="zones"]')) {
//   box.checked = box.value !== 'Arrecife';
// }
// const zonesData = new FormData(form);
// console.log('get("zones"):', zonesData.get('zones'));
// console.log('getAll("zones"):', JSON.stringify(zonesData.getAll('zones')));
// console.log('getAll("nada"):', JSON.stringify(zonesData.getAll('nada')));
// console.log('Object.fromEntries:', JSON.stringify(Object.fromEntries(zonesData)));

console.log('');

// ============================================
// PASO 5: El botón que envió
// ============================================
console.log('--- Paso 5: new FormData(form, submitter) ---');

// Descomenta las siguientes líneas:
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const sent = new FormData(form, event.submitter);
//   console.log(`  action: ${sent.get('action')} · sin submitter: ${new FormData(form).get('action')}`);
// });
// form.requestSubmit(form.querySelector('[value="book"]'));
// form.requestSubmit(form.querySelector('[value="draft"]'));

console.log('');

// ============================================
// PASO 6: De FormData a un objeto con tipos
// ============================================
console.log('--- Paso 6: Convertir, URLSearchParams y reset ---');

// Descomenta las siguientes líneas:
// const readBooking = (formData) => ({
//   visitor: (formData.get('visitor') ?? '').trim(),
//   tickets: formData.get('tickets') === '' ? null : Number(formData.get('tickets')),
//   guide: formData.has('guide'),
//   zones: formData.getAll('zones'),
// });
// form.elements.visitor.value = '  Ana  ';
// console.log('Objeto:', JSON.stringify(readBooking(new FormData(form))));
// form.elements.tickets.value = '';
// console.log('Sin entradas:', readBooking(new FormData(form)).tickets, '· con Number(""):', Number(''));
// console.log('Como en una dirección:', new URLSearchParams(new FormData(form)).toString());
// form.reset();
// console.log('Tras reset:', JSON.stringify(readBooking(new FormData(form))));
// console.log('\n✅ Lab completado.');
