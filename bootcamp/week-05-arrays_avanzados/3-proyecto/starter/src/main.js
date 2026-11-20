// Página del explorador: lee el formulario y pinta la lista. No hace falta tocar este archivo.
// Los datos están en data.js y la lógica en logic.js.
import SAMPLE_ITEMS, { TITLE, CATEGORIES } from './data.js';
import { getAllTags, sortItems, queryItems, groupByCategory, findLastAdded } from './logic.js';

const byId = (id) => document.getElementById(id);

// El texto escrito en el formulario se escapa antes de meterlo con innerHTML.
const escapeHtml = (text) =>
  String(text).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]);

// La colección vive en memoria: al recargar vuelven los datos de ejemplo.
// Los ids siguen el orden en que se añaden: el mayor es el más reciente.
let nextId = 1;
const withId = (item) => ({ id: nextId++, ...item });
let items = SAMPLE_ITEMS.map(withId);

const categoryLabel = (key) => `${CATEGORIES[key]?.emoji ?? '📌'} ${CATEGORIES[key]?.name ?? key}`;
const options = (pairs) => pairs.map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`).join('');

const itemHtml = (item) => `
  <div class="item" data-item-id="${item.id}">
    <div class="item-content">
      <h3>${escapeHtml(item.name)}</h3>
      <div class="item-meta">
        <span class="item-badge badge-category">${escapeHtml(categoryLabel(item.category))}</span>
        <span class="item-badge">${item.year ?? 'año desconocido'}</span>
        ${item.tags.map((tag) => `<span class="item-badge">${escapeHtml(tag)}</span>`).join('')}
      </div>
    </div>
    <div class="item-actions">
      <button class="btn-delete" title="Eliminar">🗑️</button>
    </div>
  </div>`;

const groupHtml = ([key, group]) => `
  <div class="stat-card">
    <h4>${escapeHtml(categoryLabel(key))}</h4>
    <p>${group.length}</p>
    <small>Último: ${escapeHtml(findLastAdded(items, key)?.name ?? '—')}</small>
  </div>`;

// El selector de etiquetas se rehace en cada render, porque añadir o eliminar cambia las etiquetas.
const renderTags = () => {
  const select = byId('filter-tag');
  const current = select.value || 'all';
  const tags = getAllTags(items);
  select.innerHTML = options([['all', 'Todas'], ...tags.map((tag) => [tag, tag])]);
  select.value = tags.includes(current) ? current : 'all';
};

const render = () => {
  renderTags();
  const visible = queryItems(items, { tag: byId('filter-tag').value, sortBy: byId('sort-by').value });
  byId('item-list').innerHTML = visible.map(itemHtml).join('');
  byId('empty-state').classList.toggle('show', visible.length === 0);
  byId('stat-total').textContent = items.length;
  byId('stat-last').textContent = findLastAdded(items)?.name ?? '—';
  byId('groups').innerHTML = Object.entries(groupByCategory(sortItems(items, 'name'))).map(groupHtml).join('');
};

byId('app-title').textContent = TITLE;
document.title = TITLE;
byId('item-category').innerHTML = options(Object.keys(CATEGORIES).map((key) => [key, categoryLabel(key)]));

byId('item-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const year = byId('item-year').value;
  const newItem = {
    name: byId('item-name').value.trim(),
    category: byId('item-category').value,
    year: year === '' ? null : Number(year),
    tags: byId('item-tags').value.split(',').map((tag) => tag.trim()).filter((tag) => tag !== ''),
  };
  if (newItem.name === '') return;
  items = [...items, withId(newItem)];
  byId('item-form').reset();
  render();
});

// Un solo listener para toda la lista: mira en qué tarjeta se hizo clic.
byId('item-list').addEventListener('click', (event) => {
  const card = event.target.closest('[data-item-id]');
  if (!card || !event.target.matches('.btn-delete')) return;
  const id = Number(card.dataset.itemId);
  items = items.filter((item) => item.id !== id);
  render();
});

byId('filter-tag').addEventListener('change', render);
byId('sort-by').addEventListener('change', render);

render();
