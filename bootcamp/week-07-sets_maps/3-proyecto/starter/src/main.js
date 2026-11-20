// Página de la colección: lee el formulario y pinta las piezas. No hace falta tocar este archivo.
// Los datos están en data.js y la lógica en logic.js.
import SAMPLE_ITEMS, { TITLE } from './data.js';
import { uniqueTags, indexById, groupByRoom, countTags, toggleTag, filterByTags, getSummary } from './logic.js';

const byId = (id) => document.getElementById(id);

// Los textos escritos en el formulario se escapan antes de entrar con innerHTML.
const escapeHtml = (text) =>
  String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

// El estado vive en memoria: al recargar vuelven los datos de ejemplo.
// Cada cambio crea un array o un Set nuevo; así getSummary sabe cuándo recalcular.
let items = [...SAMPLE_ITEMS];
let selectedTags = new Set();

// 'Reloj de sol' → 'reloj-de-sol'
const toId = (name) => name.trim().toLowerCase().split(/\s+/).join('-');

const itemHtml = (item) => `
  <div class="item" data-id="${escapeHtml(item.id)}">
    <div class="item-content">
      <h3>${escapeHtml(item.name)}</h3>
      <div class="item-meta">
        <span class="item-badge">🆔 ${escapeHtml(item.id)}</span>
        ${item.tags.map((tag) => `<span class="item-badge badge-category">#${escapeHtml(tag)}</span>`).join('')}
      </div>
    </div>
    <div class="item-actions">
      <button class="btn-delete" title="Eliminar">🗑️</button>
    </div>
  </div>`;

const roomHtml = ([room, roomItems]) => `
  <div class="room-group">
    <h3>🚪 ${escapeHtml(room)} (${roomItems.length})</h3>
    <div class="item-list">${roomItems.map(itemHtml).join('')}</div>
  </div>`;

// Las etiquetas del filtro salen de countTags; las marcadas llevan la clase active.
// Una etiqueta marcada que ya no lleva ninguna pieza se quita del filtro.
const renderTagCloud = () => {
  const counts = countTags(items);
  selectedTags = new Set([...selectedTags].filter((tag) => counts.has(tag)));
  byId('tag-cloud').innerHTML = [...counts]
    .map(([tag, count]) => {
      const active = selectedTags.has(tag) ? ' active' : '';
      return `<button class="tag-chip${active}" data-tag="${escapeHtml(tag)}">#${escapeHtml(tag)} (${count})</button>`;
    })
    .join('');
};

// Con el buscador vacío se ven todas; con un id que no existe, avisa y no muestra nada.
const searchResults = () => {
  const id = byId('search-id').value.trim().toLowerCase();
  if (id === '') return items;
  const found = indexById(items).get(id);
  if (!found) byId('error-search').textContent = `No hay ninguna pieza con id ${id}`;
  return found ? [found] : [];
};

const render = () => {
  renderTagCloud();
  byId('error-search').textContent = '';
  const visible = filterByTags(searchResults(), selectedTags);
  byId('room-list').innerHTML = [...groupByRoom(visible)].map(roomHtml).join('');
  byId('empty-state').classList.toggle('show', visible.length === 0);
  byId('room-options').innerHTML = [...groupByRoom(items).keys()]
    .map((room) => `<option value="${escapeHtml(room)}">`)
    .join('');
  const { pieces, rooms, tags } = getSummary(items);
  byId('stat-pieces').textContent = pieces;
  byId('stat-rooms').textContent = rooms;
  byId('stat-tags').textContent = tags;
};

// Cada campo con error recibe la clase invalid y su mensaje debajo.
const showErrors = (errors) => {
  for (const field of ['name', 'room']) {
    byId(`error-${field}`).textContent = errors[field] ?? '';
    byId(`item-${field}`).classList.toggle('invalid', field in errors);
  }
};

const validate = ({ id, name, room }) => {
  const errors = {};
  if (name === '') errors.name = 'Escribe un nombre';
  else if (indexById(items).has(id)) errors.name = `Ya existe una pieza con id ${id}`;
  if (room === '') errors.room = 'Escribe una sala';
  return errors;
};

byId('app-title').textContent = TITLE;
document.title = TITLE;

byId('item-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = byId('item-name').value.trim();
  const tagText = byId('item-tags').value.toLowerCase();
  const newItem = {
    id: toId(name),
    name,
    room: byId('item-room').value.trim(),
    // uniqueTags también quita las etiquetas repetidas dentro de una misma pieza.
    tags: [...uniqueTags([{ tags: tagText.split(',').map((tag) => tag.trim()).filter((tag) => tag !== '') }])],
  };
  const errors = validate(newItem);
  showErrors(errors);
  if (Object.keys(errors).length > 0) return;
  items = [...items, newItem];
  byId('item-form').reset();
  render();
});

// Un solo listener para la lista y otro para las etiquetas: miran dónde se hizo clic.
byId('room-list').addEventListener('click', (event) => {
  const card = event.target.closest('[data-id]');
  if (!card || !event.target.matches('.btn-delete')) return;
  items = items.filter((item) => item.id !== card.dataset.id);
  render();
});

byId('tag-cloud').addEventListener('click', (event) => {
  const chip = event.target.closest('[data-tag]');
  if (!chip) return;
  selectedTags = toggleTag(selectedTags, chip.dataset.tag);
  render();
});

byId('search-id').addEventListener('input', render);

render();
