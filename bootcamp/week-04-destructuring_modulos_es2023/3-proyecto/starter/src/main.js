// Página del catálogo: lee el formulario y pinta la lista. No hace falta tocar este archivo.
// Los datos están en data.js, la lógica en logic.js y las estadísticas en stats.js,
// que se carga con import() la primera vez que pulsas «Ver estadísticas».
import SAMPLE_ITEMS, { TITLE, CATEGORIES } from './data.js';
import { parseLine, summarize, filterItems } from './logic.js';

const byId = (id) => document.getElementById(id);

// El texto escrito en el formulario se escapa antes de meterlo con innerHTML.
const escapeHtml = (text) =>
  String(text).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]);

// La colección vive en memoria: al recargar vuelven los datos de ejemplo.
let nextId = 1;
const withId = (item) => ({ id: nextId++, ...item });
let items = SAMPLE_ITEMS.map(withId);
let statsVisible = false;

const categoryLabel = (key) => `${CATEGORIES[key]?.emoji ?? '📌'} ${CATEGORIES[key]?.name ?? key}`;

const itemHtml = (item) => `
  <div class="item" data-item-id="${item.id}">
    <div class="item-content">
      <h3>${escapeHtml(summarize(item))}</h3>
      <div class="item-meta">
        <span class="item-badge badge-category">${escapeHtml(categoryLabel(item.category))}</span>
        ${(item.tags ?? []).map((tag) => `<span class="item-badge">${escapeHtml(tag)}</span>`).join('')}
      </div>
    </div>
    <div class="item-actions">
      <button class="btn-delete" title="Eliminar">🗑️</button>
    </div>
  </div>`;

// stats.js no se descarga hasta que hace falta. Las veces siguientes, import() lo devuelve desde la caché.
const renderStats = async () => {
  if (!statsVisible) return;
  const { default: buildStats } = await import('./stats.js');
  const { total, byCategory, yearRange: [oldest, newest] } = buildStats(items);
  byId('stats-range').textContent =
    oldest === null ? `${total} elementos, ninguno con año` : `${total} elementos, del año ${oldest} al ${newest}`;
  byId('stats-details').innerHTML = Object.entries(byCategory)
    .map(([key, count]) => `<div class="stat-card"><h4>${escapeHtml(categoryLabel(key))}</h4><p>${count}</p></div>`)
    .join('');
};

const render = () => {
  const visible = filterItems(items, { category: byId('filter-category').value, query: byId('search-input').value });
  byId('item-list').innerHTML = visible.map(itemHtml).join('');
  byId('empty-state').classList.toggle('show', visible.length === 0);
  byId('stat-total').textContent = items.length;
  renderStats();
};

byId('app-title').textContent = TITLE;
document.title = TITLE;
byId('line-hint').textContent = `Categorías: ${Object.keys(CATEGORIES).join(', ')}`;
byId('filter-category').innerHTML = `<option value="all">Todas</option>${Object.keys(CATEGORIES)
  .map((key) => `<option value="${key}">${escapeHtml(categoryLabel(key))}</option>`)
  .join('')}`;

byId('item-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const line = byId('item-line').value;
  if (line.trim() === '') return;
  items = [...items, withId(parseLine(line))];
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

byId('stats-btn').addEventListener('click', () => {
  statsVisible = true;
  byId('stats-btn').hidden = true;
  renderStats();
});

byId('filter-category').addEventListener('change', render);
byId('search-input').addEventListener('input', render);

render();
