// Página de fichas: conecta el formulario con el borrador reactivo y pinta las piezas. No hace falta tocar este archivo.
// Los datos están en data.js y la lógica en logic.js.
import SAMPLE_ITEMS, { TITLE, ID_PREFIX, ROOMS, SCHEMA } from './data.js';
import { createForm, readOnly } from './logic.js';

const byId = (id) => document.getElementById(id);
const FIELDS = Object.keys(SCHEMA);

// Los textos escritos en el formulario se escapan antes de entrar con innerHTML.
const escapeHtml = (text) =>
  String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

// El contador sigue aunque borres piezas, así un id nunca se repite.
let lastNumber = 0;
const nextId = () => `${ID_PREFIX}-${String(++lastNumber).padStart(3, '0')}`;

// Cada pieza guardada es un proxy de solo lectura. El estado vive en memoria: al recargar vuelven los datos de ejemplo.
let items = SAMPLE_ITEMS.map((data) => readOnly({ id: nextId(), ...data }));
let changes = [];

// Se ejecuta cada vez que el borrador recibe un valor: la página reacciona al cambio, no al revés.
const onChange = (field, value, error) => {
  const input = byId(`item-${field}`);
  byId(`error-${field}`).textContent = error ?? '';
  input.classList.toggle('invalid', error !== null);
  input.classList.toggle('valid', error === null);
  changes = [`${field} = ${JSON.stringify(value)} ${error === null ? '✔' : `✖ ${error}`}`, ...changes].slice(0, 5);
  byId('change-log').innerHTML = changes.map((line) => `<li>${escapeHtml(line)}</li>`).join('');
  byId('btn-add').disabled = !draft.isValid;
};

let draft = createForm(SCHEMA, onChange);

const itemHtml = (piece) => `
  <div class="item" data-id="${escapeHtml(piece.id)}">
    <div class="item-content">
      <h3>${escapeHtml(piece.name)}</h3>
      <div class="item-meta">
        <span class="item-badge">🆔 ${escapeHtml(piece.id)}</span>
        <span class="item-badge badge-category">🚪 ${escapeHtml(piece.room)}</span>
        <span class="item-badge badge-value">💶 ${escapeHtml(piece.value)} €</span>
      </div>
    </div>
    <div class="item-actions">
      <button class="btn-edit" title="Intentar cambiar el valor">✏️</button>
      <button class="btn-delete" title="Eliminar">🗑️</button>
    </div>
  </div>`;

const render = () => {
  byId('stat-pieces').textContent = items.length;
  byId('stat-value').textContent = `${items.reduce((sum, piece) => sum + piece.value, 0)} €`;
  byId('item-list').innerHTML = items.map(itemHtml).join('');
  byId('empty-state').classList.toggle('show', items.length === 0);
};

byId('app-title').textContent = TITLE;
document.title = TITLE;
byId('item-room').innerHTML = ['<option value="">Elige una sala</option>', ...ROOMS.map((room) => `<option>${escapeHtml(room)}</option>`)].join('');

// Cada tecla (o cada cambio del desplegable) pasa por el trap set del borrador.
for (const field of FIELDS) {
  byId(`item-${field}`).addEventListener('input', (event) => {
    draft[field] = event.target.value;
  });
}

byId('item-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!draft.isValid) return;
  items = [...items, readOnly({ id: nextId(), name: draft.name.trim(), room: draft.room, value: Number(draft.value) })];
  byId('item-form').reset();
  for (const field of FIELDS) {
    byId(`error-${field}`).textContent = '';
    byId(`item-${field}`).classList.remove('invalid', 'valid');
  }
  draft = createForm(SCHEMA, onChange);
  byId('btn-add').disabled = true;
  byId('message').textContent = '';
  render();
});

byId('item-list').addEventListener('click', (event) => {
  const card = event.target.closest('[data-id]');
  if (!card) return;
  const piece = items.find((item) => item.id === card.dataset.id);
  if (event.target.matches('.btn-delete')) {
    items = items.filter((item) => item !== piece);
    byId('message').textContent = '';
    render();
  }
  if (event.target.matches('.btn-edit')) {
    // La pieza es de solo lectura: el proxy rechaza la asignación y el módulo lanza TypeError.
    try {
      piece.value = 0;
    } catch (error) {
      byId('message').textContent = `No se puede cambiar ${piece.name}: ${error.message}`;
    }
  }
});

render();
