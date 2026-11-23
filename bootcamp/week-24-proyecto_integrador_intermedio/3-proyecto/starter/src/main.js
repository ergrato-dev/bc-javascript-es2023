// Conecta src/logic.js con la página. No hace falta editarlo, pero léelo: es el repaso de la etapa.
import { APP, FIELDS } from './data.js';
import {
  HttpError, INITIAL_STATE, cardHtml, createCache, createLatest, reduce, requestJson, statusText, validate,
} from './logic.js';

const $ = (selector) => document.querySelector(selector);
const first = FIELDS[0].name;

// ── Estado: un único objeto que solo cambia reduce (semana 16) ─────────────
let state = INITIAL_STATE;
const dispatch = (event) => {
  state = reduce(state, event);
  render();
};

// ── Copia local: si localStorage no está disponible, la página funciona sin copia (semana 19) ──
const storage = (() => {
  try {
    return localStorage;
  } catch {
    return undefined;
  }
})();
const cache = createCache(storage, { key: APP.cacheKey, version: 1 });
const isHome = () => state.query === '' && (state.meta?.page ?? 1) === 1;
// Solo se guarda la primera página sin búsqueda: es lo que se enseña al abrir la página.
const remember = () => {
  if (isHome()) cache.write({ items: state.items, meta: state.meta });
};

// ── Red: cada búsqueda cancela la anterior (semanas 15 y 16) ───────────────
const list = createLatest((params, signal) =>
  requestJson(`/api/items?${new URLSearchParams(params)}`, { signal }));

const messageFor = (error) => {
  if (error instanceof HttpError) return error.message;
  if (error.name === 'TimeoutError') return 'El servidor tarda demasiado en responder';
  return 'No se pudo conectar con el servidor';
};

const load = async ({ query = state.query, page = 1 } = {}) => {
  dispatch({ type: 'load', query });
  try {
    const { data, meta } = await list({ search: query, page, perPage: APP.perPage });
    dispatch({ type: 'loaded', items: data, meta });
    remember();
  } catch (error) {
    // Una búsqueda cancelada por otra más nueva no es un error: la nueva ya está en marcha.
    if (error.name !== 'AbortError') dispatch({ type: 'failed', message: messageFor(error) });
  }
};

// ── Pintar: todo sale de state (semana 17) ────────────────────────────────
const render = () => {
  $('#status').textContent = statusText(state);
  $('#retry').hidden = state.status !== 'error';
  $('#list').setAttribute('aria-busy', String(state.status === 'loading'));
  $('#list').innerHTML = state.items.map((item) => cardHtml(item, FIELDS)).join('');
  const { page = 1, totalPages = 1 } = state.meta ?? {};
  $('#pager').hidden = totalPages <= 1;
  $('#prev').disabled = page <= 1 || state.status === 'loading';
  $('#next').disabled = page >= totalPages || state.status === 'loading';
};

// ── Buscar mientras se escribe, con debounce (semana 23) ──────────────────
let searchTimer;
$('#query').addEventListener('input', (event) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => load({ query: event.target.value.trim() }), 300);
});
$('#search').addEventListener('submit', (event) => {
  event.preventDefault();
  clearTimeout(searchTimer);
  load({ query: $('#query').value.trim() });
});

$('#retry').addEventListener('click', () => load({ page: state.meta?.page ?? 1 }));
$('#prev').addEventListener('click', () => load({ page: state.meta.page - 1 }));
$('#next').addEventListener('click', () => load({ page: state.meta.page + 1 }));

// ── Formulario construido desde FIELDS (semana 20) ────────────────────────
let editingId = null;

$('#fields').innerHTML = FIELDS.map(({ name, label, type, required }) => `
  <div class="field">
    <label for="field-${name}">${label}${required ? ' *' : ''}</label>
    <input id="field-${name}" name="${name}" ${type === 'number' ? 'type="number" step="any"' : 'type="text"'}
      aria-describedby="error-${name}">
    <small id="error-${name}"></small>
  </div>`).join('');

const showErrors = (errors) => {
  for (const { name } of FIELDS) {
    const input = $(`#field-${name}`);
    input.setAttribute('aria-invalid', String(name in errors));
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
    const url = editingId === null ? '/api/items' : `/api/items/${editingId}`;
    const item = await requestJson(url, { method: editingId === null ? 'POST' : 'PUT', data });
    dispatch({ type: 'saved', item });
    remember();
    startEditing(null);
    $('#form-status').textContent = `Guardada «${item[first]}»`;
  } catch (error) {
    if (error instanceof HttpError && error.fields) showErrors(error.fields);
    $('#form-status').textContent = messageFor(error);
  } finally {
    $('#save').disabled = false;
  }
});

// ── Editar y borrar con un solo listener en la lista: delegación (semana 18) ──
$('#list').addEventListener('click', async (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const id = Number(button.closest('.card').dataset.id);
  const item = state.items.find((entry) => entry.id === id);

  if (button.dataset.action === 'edit') {
    startEditing(item);
    $(`#field-${first}`).focus();
    return;
  }
  if (!confirm(`¿Borrar «${item[first]}»?`)) return;
  button.disabled = true;
  try {
    await requestJson(`/api/items/${id}`, { method: 'DELETE' });
    dispatch({ type: 'removed', id });
    remember();
    if (editingId === id) startEditing(null);
    $('#form-status').textContent = `Borrada «${item[first]}»`;
  } catch (error) {
    button.disabled = false;
    $('#form-status').textContent = messageFor(error);
  }
});

// ── Arranque: primero la copia local (si hay), después la red ──────────────
document.title = APP.title;
$('#title').textContent = APP.title;
$('#intro').textContent = APP.intro;

const saved = cache.read();
if (saved) dispatch({ type: 'cached', ...saved.data, savedAt: saved.savedAt });
load();
// Cada minuto se reescribe la línea de estado, para que «hace 1 minuto» no se quede viejo.
setInterval(render, 60_000);
