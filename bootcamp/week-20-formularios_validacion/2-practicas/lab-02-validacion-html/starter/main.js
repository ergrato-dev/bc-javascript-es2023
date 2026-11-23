/**
 * 📘 Lab 02: Validación con atributos HTML
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Los mensajes los escribe el navegador en su idioma: los de este README son de Chromium en español.
 */

const form = document.querySelector('#member');
const { visitor, email, website, tickets, card, zone, terms } = form.elements;

// Prueba un valor en un campo y muestra si es válido y el mensaje del navegador.
const tryValue = (input, value) => {
  input.value = value;
  const verdict = input.validity.valid ? 'válido' : `NO válido · ${input.validationMessage}`;
  console.log(`  ${input.name} = ${JSON.stringify(value)}: ${verdict}`);
};

// ============================================
// PASO 1: required
// ============================================
console.log('--- Paso 1: Campos obligatorios ---');

// Descomenta las siguientes líneas:
// for (const input of [visitor, zone, terms]) {
//   console.log(`  ${input.name}: valid ${input.validity.valid} · ${input.validationMessage}`);
// }
// console.log('  website (opcional y vacío): valid', website.validity.valid);
// console.log('¿Formulario válido?', form.checkValidity());

console.log('');

// ============================================
// PASO 2: type="email" y type="url"
// ============================================
console.log('--- Paso 2: Correos y direcciones ---');

// Descomenta las siguientes líneas:
// for (const value of ['ana', 'ana@acuario', 'ana@acuario.es']) tryValue(email, value);
// for (const value of ['acuario.es', 'https://acuario.es', '']) tryValue(website, value);
// email.value = '';

console.log('');

// ============================================
// PASO 3: min, max y step
// ============================================
console.log('--- Paso 3: Números ---');

// Descomenta las siguientes líneas:
// for (const value of ['0', '12', '2.5', '3']) tryValue(tickets, value);
// console.log('  tickets.value es', typeof tickets.value, '· valueAsNumber:', tickets.valueAsNumber);
// tickets.value = '';
// tickets.addEventListener('input', () => {
//   console.log(`  Escribes en Entradas: value ${JSON.stringify(tickets.value)} · badInput ${tickets.validity.badInput}`);
// });
// console.log('  Escribe 1e en Entradas para ver badInput.');

console.log('');

// ============================================
// PASO 4: pattern, minlength y maxlength
// ============================================
console.log('--- Paso 4: Formato y longitud ---');

// Descomenta las siguientes líneas:
// for (const value of ['AC-12', 'AC-12345', 'ac-0420', 'AC-0420']) tryValue(card, value);
// card.value = '';
// visitor.value = 'A';
// console.log(`  visitor = "A" desde código: valid ${visitor.validity.valid} · tooShort ${visitor.validity.tooShort}`);
// visitor.value = '';
// visitor.addEventListener('input', () => {
//   console.log(`  Escribes «${visitor.value}»: tooShort ${visitor.validity.tooShort} · ${visitor.validationMessage}`);
// });
// console.log('  Escribe una letra en Nombre para ver tooShort.');

console.log('');

// ============================================
// PASO 5: Enviar con errores, :invalid y :user-invalid
// ============================================
console.log('--- Paso 5: Al enviar ---');

// Descomenta las siguientes líneas:
// const count = (selector) => form.querySelectorAll(selector).length;
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   console.log('  submit: llegó al listener');
// });
// console.log(`Antes de enviar · :invalid ${count(':invalid')} · :user-invalid ${count(':user-invalid')}`);
// form.requestSubmit();
// console.log('  (no aparece «submit: llegó al listener»: el navegador canceló el envío)');
// console.log(`Después · :user-invalid ${count(':user-invalid')} · foco en: ${document.activeElement.name}`);

console.log('');

// ============================================
// PASO 6: novalidate
// ============================================
console.log('--- Paso 6: Sin validación del navegador ---');

// Descomenta las siguientes líneas:
// form.noValidate = true;
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   console.log(`  submit con novalidate · ¿válido? ${form.checkValidity()}`);
// });
// form.requestSubmit();
// visitor.value = 'Ana';
// email.value = 'ana@acuario.es';
// tickets.value = '4';
// zone.value = 'Medusas';
// terms.checked = true;
// form.requestSubmit();
// form.noValidate = false;
// console.log('\n✅ Lab completado.');
