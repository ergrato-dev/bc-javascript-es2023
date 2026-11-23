// Conecta la lógica con la página. No hace falta editarlo, pero léelo: es el repaso del bootcamp.
import { APP, FIELDS } from './data.js';
import { INITIAL_STATE, reduce, selectPage, summarize, validate } from './logic.js';
import { createStore } from './store.js';
import { HttpError, createApi } from './api.js';
import { cardHtml, sortLabel, statusText, summaryText } from './view.js';

const $ = (selector) => document.querySelector(selector);
const first = FIELDS[0].name;
const SEARCH_DELAY = 300;

// ── Dependencias: el almacén y la API se crean aquí y se pasan, no se importan sueltas (semanas 26 y 27) ──
const store = createStore({ reducer: reduce, initial: INITIAL_STATE });
const api = createApi({ baseUrl: '', fetchFn: (...args) => fetch(...args) });

const messageFor = (error) =>
  error instanceof HttpError ? error.message : 'No se pudo conectar con el servidor';

const load = async () => {
  store.dispatch({ type: 'loading' });
  try {
    store.dispatch({ type: 'loaded', items: await api.list() });
  } catch (error) {
    store.dispatch({ type: 'failed', message: messageFor(error) });
  }
};

// ── Pintar: todo sale del estado, y se repinta cada vez que el almacén avisa (Observer) ──
const viewOf = (state) => selectPage(state, { fields: FIELDS, perPage: APP.perPage });

const render = (state) => {
  const view = viewOf(state);
  $('#status').textContent = statusText(state, view);
  $('#summary').textContent =
    state.status === 'ready' ? summaryText(summarize(state.items, FIELDS), FIELDS) : '';
  $('#retry').hidden = state.status !== 'error';
  $('#list').setAttribute('aria-busy', String(state.status === 'loading'));
  $('#list').innerHTML = view.items.map((item) => cardHtml(item, FIELDS)).join('');
  for (const button of $('#sort').querySelectorAll('button')) {
    const field = FIELDS.find(({ name }) => name === button.dataset.by);
    button.textContent = sortLabel(field, state.sort);
    button.setAttribute('aria-pressed', String(state.sort.by === field.name));
  }
  $('#pager').hidden = view.pages <= 1;
  $('#page').textContent = `${view.page} / ${view.pages}`;
  $('#prev').disabled = view.page <= 1;
  $('#next').disabled = view.page >= view.pages;
};
store.subscribe(render);

// ── Buscar mientras se escribe, con debounce (semana 23) ──────────────────
let searchTimer;
$('#query').addEventListener('input', (event) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(
    () => store.dispatch({ type: 'query', query: event.target.value }),
    SEARCH_DELAY,
  );
});
$('#search').addEventListener('submit', (event) => {
  event.preventDefault();
  clearTimeout(searchTimer);
  store.dispatch({ type: 'query', query: $('#query').value });
});

// ── Ordenar: un botón por campo, con un solo listener (delegación, semana 18) ──
$('#sort').innerHTML = FIELDS.map(
  ({ name }) => `<button type="button" data-by="${name}"></button>`,
).join('');
$('#sort').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-by]');
  if (button) store.dispatch({ type: 'sort', by: button.dataset.by });
});

$('#retry').addEventListener('click', load);
// La página que se ve, no state.page: tras borrar, state.page puede pasar de la última (paginate la corrige).
const goTo = (step) => store.dispatch({ type: 'page', page: viewOf(store.getState()).page + step });
$('#prev').addEventListener('click', () => goTo(-1));
$('#next').addEventListener('click', () => goTo(1));

// ── Formulario construido desde FIELDS (semana 20) ────────────────────────
let editingId = null;

$('#fields').innerHTML = FIELDS.map(
  ({ name, label, type, required }) => `
  <div class="field">
    <label for="field-${name}">${label}${required ? ' *' : ''}</label>
    <input id="field-${name}" name="${name}" ${type === 'number' ? 'type="number" step="any"' : 'type="text"'}
      aria-describedby="error-${name}">
    <small id="error-${name}"></small>
  </div>`,
).join('');

const showErrors = (errors) => {
  for (const { name } of FIELDS) {
    $(`#field-${name}`).setAttribute('aria-invalid', String(name in errors));
    $(`#error-${name}`).textContent = errors[name] ?? '';
  }
  const wrong = FIELDS.find(({ name }) => name in errors);
  if (wrong) $(`#field-${wrong.name}`).focus();
};

const startEditing = (item) => {
  editingId = item?.id ?? null;
  for (const { name } of FIELDS) $(`#field-${name}`).value = item?.[name] ?? '';
  showErrors({});
  $('#editor-title').textContent = item ? `Editar «${item[first]}»` : 'Nueva ficha';
  $('#cancel').hidden = !item;
  $('#form-status').textContent = '';
};

$('#cancel').addEventListener('click', () => startEditing(null));

$('#editor').addEventListener('submit', async (event) => {
  event.preventDefault();
  const { data, errors } = validate(Object.fromEntries(new FormData(event.target)), FIELDS);
  showErrors(errors);
  if (Object.keys(errors).length > 0) return;

  // Mientras se envía, el botón está desactivado: un segundo clic no crea la ficha dos veces.
  $('#save').disabled = true;
  $('#form-status').textContent = 'Guardando…';
  try {
    const item = editingId === null ? await api.create(data) : await api.update(editingId, data);
    store.dispatch({ type: 'saved', item });
    startEditing(null);
    $('#form-status').textContent = `Guardada «${item[first]}»`;
  } catch (error) {
    if (error instanceof HttpError && error.fields) showErrors(error.fields);
    $('#form-status').textContent = messageFor(error);
  } finally {
    $('#save').disabled = false;
  }
});

// ── Editar y borrar con un solo listener en la lista ─────────────────────
$('#list').addEventListener('click', async (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const id = Number(button.closest('.card').dataset.id);
  const item = store.getState().items.find((entry) => entry.id === id);

  if (button.dataset.action === 'edit') {
    startEditing(item);
    $(`#field-${first}`).focus();
    return;
  }
  if (!confirm(`¿Borrar «${item[first]}»?`)) return;
  button.disabled = true;
  try {
    await api.remove(id);
    store.dispatch({ type: 'removed', id });
    if (editingId === id) startEditing(null);
    $('#form-status').textContent = `Borrada «${item[first]}»`;
  } catch (error) {
    button.disabled = false;
    $('#form-status').textContent = messageFor(error);
  }
});

// ── Arranque ──────────────────────────────────────────────────────────────
document.title = APP.title;
$('#title').textContent = APP.title;
$('#intro').textContent = APP.intro;
render(store.getState());
load();
