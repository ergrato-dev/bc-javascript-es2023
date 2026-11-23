// Página del cliente: lee los formularios, llama a las funciones de logic.js y pinta lo que llega.
// No hace falta tocar este archivo. Los datos están en data.js y la lógica en logic.js.
import { TITLE } from './data.js';
import {
  listItems, getItem, createItem, updateItem, deleteItem, describeError,
} from './logic.js';

// La API la sirve el mismo servidor que la página (node server.js), así que su URL base es la de la página.
const API = window.location.origin;

const byId = (id) => document.getElementById(id);
const countItems = (count) => (count === 1 ? '1 ficha' : `${count} fichas`);

// Los textos que llegan de la API se escapan antes de entrar con innerHTML.
const escapeHtml = (text) =>
  String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

let requests = 0;

const showMessage = (text, ok) => {
  byId('message').textContent = text;
  byId('message').classList.toggle('ok', ok);
};

// Ejecuta una acción de la API: la anota en el registro y muestra su resultado o el mensaje de error.
const run = async (label, action) => {
  requests += 1;
  byId('stat-requests').textContent = requests;
  showMessage(`⏳ ${label}...`, true);
  try {
    const text = await action();
    showMessage(`✔ ${text}`, true);
    byId('request-log').insertAdjacentHTML('afterbegin', `<li>✅ ${escapeHtml(label)}</li>`);
  } catch (error) {
    showMessage(`❌ ${describeError(error)}`, false);
    byId('request-log').insertAdjacentHTML('afterbegin', `<li>❌ ${escapeHtml(label)}: ${escapeHtml(error.message)}</li>`);
    console.error(error);
  }
};

const itemHtml = (item) => `
  <div class="item" data-id="${escapeHtml(item.id)}">
    <div class="item-content">
      <h3>#${escapeHtml(item.id)} · ${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.detail)}</p>
    </div>
    <div class="item-actions">
      <button type="button" class="btn-edit" data-action="edit" title="Editar detalle">✏️</button>
      <button type="button" class="btn-delete" data-action="delete" title="Borrar">🗑️</button>
    </div>
  </div>`;

const render = (items) => {
  byId('stat-items').textContent = items.length;
  byId('item-list').innerHTML = items.length > 0
    ? items.map(itemHtml).join('')
    : '<p class="empty-state show">Ninguna ficha coincide con la búsqueda.</p>';
};

// Vuelve a pedir la lista con los filtros del formulario de búsqueda.
const refresh = async () => {
  const items = await listItems(API, { search: byId('search').value.trim(), limit: byId('limit').value });
  render(items);
  return `${countItems(items.length)} recibidas`;
};

byId('search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  run('Buscar fichas', refresh);
});

byId('create-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const item = { name: byId('new-name').value, detail: byId('new-detail').value };
  run('Crear ficha', async () => {
    const created = await createItem(API, item);
    event.target.reset();
    await refresh();
    return `Creada la ficha #${created.id} · ${created.name}`;
  });
});

byId('open-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const id = byId('open-id').value;
  run(`Abrir ficha ${id}`, async () => {
    const item = await getItem(API, id);
    return `#${item.id} · ${item.name}: ${item.detail}`;
  });
});

byId('item-list').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const { id } = button.closest('.item').dataset;

  if (button.dataset.action === 'delete') {
    run(`Borrar ficha ${id}`, async () => {
      await deleteItem(API, id);
      await refresh();
      return `Borrada la ficha #${id}`;
    });
  } else {
    const current = button.closest('.item').querySelector('p').textContent;
    const detail = window.prompt('Nuevo detalle', current);
    if (detail === null) return;
    run(`Editar ficha ${id}`, async () => {
      const updated = await updateItem(API, id, { detail });
      await refresh();
      return `Actualizada la ficha #${updated.id}`;
    });
  }
});

document.title = TITLE;
byId('app-title').textContent = TITLE;
run('Cargar fichas', refresh);
