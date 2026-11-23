/**
 * 📘 Lab 04: Validación propia y envío
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Los pasos van en orden: cada uno usa lo que definen los anteriores.
 */

const form = document.querySelector('#workshop');
const button = form.querySelector('button');
const status = document.querySelector('#status');

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Un servidor simulado: tarda 300 ms y rechaza los correos que ya están inscritos.
let requests = 0;
const send = async (values) => {
  requests += 1;
  await wait(300);
  if (values.email === 'ana@acuario.es') {
    return { ok: false, errors: [{ field: 'email', message: 'Ese correo ya está inscrito.' }] };
  }
  return { ok: true };
};

const main = async () => {
  // ============================================
  // PASO 1: Las reglas como datos
  // ============================================
  console.log('--- Paso 1: checkField ---');

  // Descomenta las siguientes líneas:
  // const FIELDS = [
  //   { name: 'visitor', required: true, minLength: 2 },
  //   { name: 'email', required: true, email: true },
  //   { name: 'tickets', type: 'number', required: true, min: 1, max: 4 },
  //   { name: 'card', pattern: 'AC-\\d{4}', patternMessage: 'Escribe AC- y cuatro cifras, como AC-0420.' },
  // ];
  // const checkField = (field, value) => {
  //   if (value === '' || value === null) return field.required ? 'Rellena este campo.' : null;
  //   if (field.minLength && value.length < field.minLength) return `Escribe al menos ${field.minLength} caracteres.`;
  //   if (field.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Escribe un correo como nombre@ejemplo.com.';
  //   if (field.type === 'number' && Number.isNaN(value)) return 'Escribe un número.';
  //   if (field.min !== undefined && value < field.min) return `El mínimo es ${field.min}.`;
  //   if (field.max !== undefined && value > field.max) return `El máximo es ${field.max}.`;
  //   if (field.pattern && !new RegExp(`^(?:${field.pattern})$`).test(value)) return field.patternMessage;
  //   return null;
  // };
  // const [visitorField, emailField, ticketsField, cardField] = FIELDS;
  // const cases = [
  //   [visitorField, ''], [visitorField, 'A'], [visitorField, 'Ana'],
  //   [emailField, 'ana@acuario'], [ticketsField, 0], [ticketsField, 6],
  //   [cardField, ''], [cardField, 'AC-12345'],
  // ];
  // for (const [field, value] of cases) {
  //   console.log(`  ${field.name} = ${JSON.stringify(value)}: ${checkField(field, value) ?? 'sin error'}`);
  // }

  console.log('');

  // ============================================
  // PASO 2: Leer y validar el formulario
  // ============================================
  console.log('--- Paso 2: readValues y validate ---');

  // Descomenta las siguientes líneas:
  // const readValues = (data) => {
  //   const values = {};
  //   for (const field of FIELDS) {
  //     const raw = (data.get(field.name) ?? '').trim();
  //     values[field.name] = field.type === 'number' && raw !== '' ? Number(raw) : raw;
  //   }
  //   return values;
  // };
  // const validate = (values) => {
  //   const errors = {};
  //   for (const field of FIELDS) {
  //     const message = checkField(field, values[field.name]);
  //     if (message) errors[field.name] = message;
  //   }
  //   return { valid: Object.keys(errors).length === 0, errors };
  // };
  // form.elements.visitor.value = ' A ';
  // form.elements.tickets.value = '6';
  // const values = readValues(new FormData(form));
  // console.log('  values:', JSON.stringify(values));
  // console.log('  validate:', JSON.stringify(validate(values)));
  // form.reset();

  console.log('');

  // ============================================
  // PASO 3: Mostrar los errores
  // ============================================
  console.log('--- Paso 3: render accesible ---');

  // Descomenta las siguientes líneas:
  // const render = (errors) => {
  //   for (const field of FIELDS) {
  //     const input = form.elements[field.name];
  //     const message = errors[field.name] ?? '';
  //     input.setAttribute('aria-invalid', String(message !== ''));
  //     document.querySelector(`#${field.name}-error`).textContent = message;
  //   }
  // };
  // render(validate(readValues(new FormData(form))).errors);
  // const marked = [...form.querySelectorAll('[aria-invalid="true"]')].map((input) => input.name);
  // console.log('  Con aria-invalid:', marked.join(', '));
  // console.log('  Texto de #email-error:', document.querySelector('#email-error').textContent);
  // render({});

  console.log('');

  // ============================================
  // PASO 4: Cuándo mostrar cada error
  // ============================================
  console.log('--- Paso 4: Tocado, al escribir y al enviar ---');

  // Descomenta las siguientes líneas:
  // const touched = new Set();
  // let submitted = false;
  // const refresh = () => {
  //   const { errors } = validate(readValues(new FormData(form)));
  //   const visible = Object.fromEntries(
  //     Object.entries(errors).filter(([name]) => submitted || touched.has(name)),
  //   );
  //   render(visible);
  //   return visible;
  // };
  // form.addEventListener('focusout', (event) => {
  //   touched.add(event.target.name);
  //   refresh();
  // });
  // form.addEventListener('input', (event) => {
  //   if (touched.has(event.target.name)) refresh();
  // });
  // const { visitor } = form.elements;
  // const type = (text) => {
  //   visitor.value = text;
  //   visitor.dispatchEvent(new Event('input', { bubbles: true }));
  // };
  // type('A');
  // console.log('  Escribe «A» sin salir:', JSON.stringify(refresh()));
  // visitor.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
  // console.log('  Sale del campo:', JSON.stringify(refresh()));
  // type('An');
  // console.log('  Escribe «An»:', JSON.stringify(refresh()));
  // submitted = true;
  // console.log('  Intenta enviar:', Object.keys(refresh()).join(', '));
  // submitted = false;
  // touched.clear();
  // form.reset();
  // refresh();

  console.log('');

  // ============================================
  // PASO 5: Enviar una sola vez
  // ============================================
  console.log('--- Paso 5: Sin envíos dobles ---');

  // Descomenta las siguientes líneas:
  // let sending = false;
  // let handleResult = (result) => console.log('  Respuesta:', JSON.stringify(result));
  // form.addEventListener('submit', async (event) => {
  //   event.preventDefault();
  //   submitted = true;
  //   const values = readValues(new FormData(form));
  //   const { valid, errors } = validate(values);
  //   render(errors);
  //   if (!valid) {
  //     form.elements[Object.keys(errors)[0]].focus();
  //     console.log(`  submit: ${Object.keys(errors).length} errores, no se envía`);
  //     return;
  //   }
  //   if (sending) {
  //     console.log('  submit: ya hay un envío en marcha, se ignora');
  //     return;
  //   }
  //   sending = true;
  //   button.disabled = true;
  //   button.textContent = 'Enviando…';
  //   try {
  //     const result = await send(values);
  //     handleResult(result);
  //   } finally {
  //     sending = false;
  //     button.disabled = false;
  //     button.textContent = 'Inscribirme';
  //   }
  // });
  // form.requestSubmit();
  // form.elements.visitor.value = 'Luis';
  // form.elements.email.value = 'luis@acuario.es';
  // form.elements.tickets.value = '2';
  // form.requestSubmit();
  // form.requestSubmit();
  // console.log(`  Botón desactivado: ${button.disabled} · «${button.textContent}»`);
  // await wait(400);
  // console.log(`  Peticiones al servidor: ${requests} · botón desactivado: ${button.disabled}`);

  console.log('');

  // ============================================
  // PASO 6: Errores del servidor y después de enviar
  // ============================================
  console.log('--- Paso 6: Respuesta del servidor ---');

  // Descomenta las siguientes líneas:
  // const fromServer = (result) => Object.fromEntries((result.errors ?? []).map(({ field, message }) => [field, message]));
  // handleResult = (result) => {
  //   if (result.ok) {
  //     status.textContent = `Inscripción hecha para ${form.elements.email.value}.`;
  //     form.reset();
  //     touched.clear();
  //     submitted = false;
  //     render({});
  //   } else {
  //     status.textContent = 'Revisa los campos marcados.';
  //     render(fromServer(result));
  //   }
  //   console.log(`  ${status.textContent}`);
  // };
  // form.elements.email.value = 'ana@acuario.es';
  // form.requestSubmit();
  // await wait(400);
  // console.log('  Texto de #email-error:', document.querySelector('#email-error').textContent);
  // console.log('  ¿Se conserva lo escrito?', form.elements.visitor.value);
  // form.elements.email.value = 'eva@acuario.es';
  // form.requestSubmit();
  // await wait(400);
  // console.log(`  Tras el envío correcto · visitor: ${JSON.stringify(form.elements.visitor.value)} · errores visibles: ${form.querySelectorAll('[aria-invalid="true"]').length}`);
  // console.log('\n✅ Lab completado.');
};

main();
