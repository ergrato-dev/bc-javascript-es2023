// La página: construye el formulario a partir de FIELDS, escucha al usuario y pinta lo que
// devuelven las funciones de logic.js. No hace falta editarlo.

import { APP, FIELDS, TAKEN_EMAILS } from './data.js';
import { createFormState, createSubmitter, readValues, summarize, toAttributes, validate } from './logic.js';

const form = document.querySelector('#signup');
const fieldsBox = document.querySelector('#fields');
const summaryBox = document.querySelector('#summary');
const summaryList = document.querySelector('#summary-list');
const button = document.querySelector('#submit');
const status = document.querySelector('#status');

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Un servidor simulado: tarda 600 ms, rechaza los correos de TAKEN_EMAILS y falla «por la
// red» si algún campo contiene #sin-red. En una página real sería un fetch (semana 15).
const send = async (values) => {
  await wait(600);
  if (JSON.stringify(values).includes('#sin-red')) throw new TypeError('Failed to fetch');
  if (TAKEN_EMAILS.includes(String(values.email ?? '').toLowerCase())) {
    return { ok: false, errors: [{ field: 'email', message: 'Ese correo ya está inscrito.' }] };
  }
  return { ok: true };
};

// Crea un elemento con sus atributos y sus hijos (semana 17).
const el = (tag, attributes = {}, ...children) => {
  const node = document.createElement(tag);
  for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, value);
  node.append(...children);
  return node;
};

// El control de un campo, con los atributos que da toAttributes.
const controlFor = (field) => {
  const attributes = toAttributes(field);
  if (field.type === 'textarea') return el('textarea', { ...attributes, rows: '3' });
  if (field.type === 'select') {
    const options = field.options.map((option) => el('option', {}, option));
    return el('select', attributes, el('option', { value: '' }, 'Elige una opción'), ...options);
  }
  if (field.type === 'checkboxes') {
    const boxes = field.options.map((option) => el('label', {},
      el('input', { type: 'checkbox', name: field.name, value: option }), ` ${option}`));
    return el('fieldset', attributes, el('legend', {}, field.label), ...boxes);
  }
  return el('input', attributes);
};

// Cada campo con su etiqueta y su párrafo de error.
const fieldBlock = (field) => {
  const error = el('p', { id: `${field.name}-error`, class: 'error' });
  const control = controlFor(field);
  if (field.type === 'checkbox') return el('div', { class: 'field' }, el('label', {}, control, ` ${field.label}`), error);
  if (field.type === 'checkboxes') return el('div', { class: 'field' }, control, error);
  return el('div', { class: 'field' }, el('label', { for: field.name }, field.label), control, error);
};

// Escribe el error de cada campo (o lo vacía) y marca aria-invalid.
const render = (errors) => {
  for (const field of FIELDS) {
    const message = errors[field.name] ?? '';
    document.getElementById(field.name).setAttribute('aria-invalid', String(message !== ''));
    document.getElementById(`${field.name}-error`).textContent = message;
  }
};

// El resumen de arriba, con un enlace a cada campo con error.
const renderSummary = (errors) => {
  const items = summarize(FIELDS, errors);
  summaryList.replaceChildren(...items.map(({ name, text }) => el('li', {}, el('a', { href: `#${name}` }, text))));
  summaryBox.hidden = items.length === 0;
};

// Lleva el foco al primer control del campo (en un grupo de casillas, a la primera casilla).
const focusField = (name) => {
  form.querySelector(`:is(input, select, textarea)[name="${name}"]`)?.focus();
};

document.title = APP.title;
document.querySelector('#title').textContent = APP.title;
document.querySelector('#intro').textContent = APP.intro;
button.textContent = APP.submitLabel;
fieldsBox.replaceChildren(...FIELDS.map(fieldBlock));

const state = createFormState();
const submit = createSubmitter(send);

// Valida los valores con validate. Un número mal escrito (como «1e») llega vacío a FormData,
// pero el navegador lo sabe: validity.badInput (teoría 03). En ese caso, el error es otro.
const check = (values) => {
  const { errors } = validate(FIELDS, values);
  for (const input of form.querySelectorAll('input[type="number"]')) {
    if (input.validity.badInput) errors[input.name] = 'Escribe un número.';
  }
  return { valid: Object.keys(errors).length === 0, errors };
};

// Valida todo y muestra solo los errores que deben verse ya.
const refresh = () => {
  const { errors } = check(readValues(new FormData(form), FIELDS));
  render(state.visible(errors));
};

// Al salir de un campo, cuenta como tocado. focusout sube; blur no (semana 18).
form.addEventListener('focusout', (event) => {
  if (!event.target.name || event.target === button) return;
  state.touch(event.target.name);
  refresh();
});

// En un campo ya tocado, el error se actualiza con cada tecla o cada casilla.
form.addEventListener('input', (event) => {
  if (state.isTouched(event.target.name)) refresh();
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  state.submit();
  const values = readValues(new FormData(form), FIELDS);
  const { valid, errors } = check(values);
  render(errors);
  renderSummary(errors);
  if (!valid) {
    status.textContent = '';
    focusField(Object.keys(errors)[0]);
    return;
  }

  button.disabled = true;
  button.textContent = 'Enviando…';
  const result = await submit(values);
  button.disabled = false;
  button.textContent = APP.submitLabel;

  if (result.status === 'ok') {
    status.textContent = 'Inscripción enviada. ¡Gracias!';
    form.reset();
    state.reset();
    render({});
  } else if (result.status === 'invalid') {
    status.textContent = 'Revisa los campos marcados.';
    render(result.errors);
    renderSummary(result.errors);
    focusField(Object.keys(result.errors)[0]);
  } else if (result.status === 'error') {
    status.textContent = 'No se pudo enviar. Inténtalo de nuevo: tus datos siguen en el formulario.';
  }
});
