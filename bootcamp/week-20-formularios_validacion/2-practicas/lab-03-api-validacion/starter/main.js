/**
 * 📘 Lab 03: La API de validación
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 */

const form = document.querySelector('#alerts');
const { visitor, email, confirmEmail, tickets } = form.elements;

// Los indicadores de ValidityState, en el orden en que los comprueba el navegador.
const FLAGS = ['valueMissing', 'typeMismatch', 'patternMismatch', 'tooLong', 'tooShort',
  'rangeUnderflow', 'rangeOverflow', 'stepMismatch', 'badInput', 'customError'];

// Devuelve los nombres de los indicadores que están a true.
const failing = (input) => FLAGS.filter((flag) => input.validity[flag]);

// ============================================
// PASO 1: validity
// ============================================
console.log('--- Paso 1: Qué restricción falla ---');

// Descomenta las siguientes líneas:
// for (const value of ['', '0', '12', '2.5', '4']) {
//   tickets.value = value;
//   console.log(`  tickets = ${JSON.stringify(value)} · valid ${tickets.validity.valid} · ${JSON.stringify(failing(tickets))}`);
// }
// email.value = 'ana';
// console.log(`  email = "ana" · ${JSON.stringify(failing(email))}`);
// email.value = '';
// tickets.value = '';

console.log('');

// ============================================
// PASO 2: checkValidity y reportValidity
// ============================================
console.log('--- Paso 2: Comprobar sin enviar ---');

// Descomenta las siguientes líneas:
// console.log('  visitor.checkValidity():', visitor.checkValidity());
// console.log('  form.checkValidity():', form.checkValidity(), '· foco en:', document.activeElement.tagName);
// console.log('  form.reportValidity():', form.reportValidity(), '· foco en:', document.activeElement.name);
// visitor.blur();

console.log('');

// ============================================
// PASO 3: El evento invalid
// ============================================
console.log('--- Paso 3: invalid no sube ---');

// Descomenta las siguientes líneas:
// const seen = [];
// form.addEventListener('invalid', (event) => seen.push(`burbuja:${event.target.name}`));
// form.addEventListener('invalid', (event) => seen.push(event.target.name), { capture: true });
// form.checkValidity();
// console.log('  Recibidos en el formulario:', seen.join(', '));

console.log('');

// ============================================
// PASO 4: setCustomValidity
// ============================================
console.log('--- Paso 4: Una regla propia ---');

// Descomenta las siguientes líneas:
// email.value = 'ana@acuario.es';
// confirmEmail.value = 'ana@acuario.com';
// confirmEmail.setCustomValidity('Los dos correos no coinciden.');
// console.log(`  Con el error · ${JSON.stringify(failing(confirmEmail))} · ${confirmEmail.validationMessage}`);
// confirmEmail.value = 'ana@acuario.es';
// console.log(`  Corregido pero sin quitar el error · valid ${confirmEmail.validity.valid}`);
// const checkSame = () => {
//   confirmEmail.setCustomValidity(confirmEmail.value === email.value ? '' : 'Los dos correos no coinciden.');
// };
// email.addEventListener('input', checkSame);
// confirmEmail.addEventListener('input', checkSame);
// checkSame();
// console.log(`  Tras checkSame · valid ${confirmEmail.validity.valid}`);
// email.value = 'luis@acuario.es';
// email.dispatchEvent(new Event('input'));
// console.log(`  Cambia el primer correo · valid ${confirmEmail.validity.valid} · ${confirmEmail.validationMessage}`);
// email.value = '';
// confirmEmail.value = '';
// checkSame();

console.log('');

// ============================================
// PASO 5: Mensajes propios
// ============================================
console.log('--- Paso 5: Tus mensajes junto a cada campo ---');

// Descomenta las siguientes líneas:
// const messageFor = (input) => {
//   const { validity } = input;
//   if (validity.valueMissing) return 'Rellena este campo.';
//   if (validity.typeMismatch) return 'Escribe un correo como nombre@ejemplo.com.';
//   if (validity.badInput) return 'Escribe un número.';
//   if (validity.rangeUnderflow) return `Como mínimo ${input.min}.`;
//   if (validity.rangeOverflow) return `Como máximo ${input.max}.`;
//   if (validity.stepMismatch) return 'Escribe un número entero.';
//   if (validity.customError) return input.validationMessage;
//   return '';
// };
// const showError = (input) => {
//   const message = messageFor(input);
//   input.setAttribute('aria-invalid', String(message !== ''));
//   document.querySelector(`#${input.id}-error`).textContent = message;
//   return message;
// };
// email.value = 'ana';
// tickets.value = '12';
// for (const input of [visitor, email, tickets]) console.log(`  ${input.name}: ${showError(input) || '(sin error)'}`);
// console.log('  aria-invalid de email:', email.getAttribute('aria-invalid'));
// email.value = '';
// tickets.value = '';

console.log('');

// ============================================
// PASO 6: Todo junto al enviar
// ============================================
console.log('--- Paso 6: Enviar con novalidate y mensajes propios ---');

// Descomenta las siguientes líneas (necesitan el paso 5, y el 4 para la confirmación):
// form.noValidate = true;
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const fields = [visitor, email, confirmEmail, tickets];
//   const wrong = fields.filter((input) => showError(input) !== '');
//   const status = document.querySelector('#status');
//   if (wrong.length > 0) {
//     wrong[0].focus();
//     status.textContent = `Campos con errores: ${wrong.length}.`;
//   } else {
//     status.textContent = `Avisaremos a ${email.value}.`;
//   }
//   const focus = wrong.length > 0 ? ` · foco en: ${document.activeElement.name}` : '';
//   console.log(`  submit · ${status.textContent}${focus}`);
// });
// form.requestSubmit();
// visitor.value = 'Ana';
// email.value = 'ana@acuario.es';
// confirmEmail.value = 'ana@acuario.es';
// tickets.value = '2';
// checkSame();
// form.requestSubmit();
// console.log('\n✅ Lab completado.');
