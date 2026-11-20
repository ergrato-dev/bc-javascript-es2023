// Página del gestor: lee el formulario, guarda en localStorage y pinta la lista.
// Toda la lógica está en logic.js; aquí solo cambias los datos del dominio (paso 2).
import {
  createItem,
  addItem,
  updateItem,
  removeItem,
  toggleActive,
  filterItems,
  getStats,
  missingFields,
} from './logic.js';

// ---------- Datos del dominio (paso 2) ----------
const TITLE = '🔭 Catálogo del planetario';

const CATEGORIES = {
  planet: { name: 'Planeta', emoji: '🪐' },
  star: { name: 'Estrella', emoji: '⭐' },
  nebula: { name: 'Nebulosa', emoji: '🌌' },
  other: { name: 'Otro', emoji: '📌' },
};

const SAMPLE_ITEMS = [
  { id: 1, name: 'Júpiter', description: 'Visible al anochecer', category: 'planet', priority: 'high', active: true },
  { id: 2, name: 'Sirio', description: 'La estrella más brillante', category: 'star', priority: 'medium', active: true },
  { id: 3, name: 'Nebulosa de Orión', description: 'Solo con telescopio', category: 'nebula', priority: 'low', active: false },
  { id: 4, name: 'Saturno', description: 'Anillos visibles con prismáticos', category: 'planet', priority: 'medium', active: true },
];

// ---------- Página (no hace falta tocar nada de aquí abajo) ----------
const PRIORITY_NAMES = { high: 'Alta', medium: 'Media', low: 'Baja' };
// Cambia la clave si quieres empezar de cero con los datos de ejemplo.
const STORAGE_KEY = 'js-semana-02-coleccion';

const byId = (id) => document.getElementById(id);

// El texto escrito en el formulario se escapa antes de meterlo con innerHTML.
const escapeHtml = (text) =>
  String(text).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]);

const loadItems = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? SAMPLE_ITEMS;
  } catch {
    return SAMPLE_ITEMS;
  }
};

let items = loadItems();
let editingId = null;

const categoryLabel = (key) => `${CATEGORIES[key]?.emoji ?? '📌'} ${CATEGORIES[key]?.name ?? key}`;

const itemHtml = ({ id, name, description, category, priority, active }) => `
  <div class="item ${active ? '' : 'inactive'} priority-${priority}" data-item-id="${id}">
    <input type="checkbox" class="item-checkbox" title="Activo" ${active ? 'checked' : ''}>
    <div class="item-content">
      <h3>${escapeHtml(name)}</h3>
      ${description ? `<p>${escapeHtml(description)}</p>` : ''}
      <div class="item-meta">
        <span class="item-badge badge-category">${categoryLabel(category)}</span>
        <span class="item-badge badge-priority priority-${priority}">${PRIORITY_NAMES[priority] ?? priority}</span>
      </div>
    </div>
    <div class="item-actions">
      <button class="btn-edit" title="Editar">✏️</button>
      <button class="btn-delete" title="Eliminar">🗑️</button>
    </div>
  </div>`;

const currentFilters = () => ({
  status: byId('filter-status').value,
  category: byId('filter-category').value,
  priority: byId('filter-priority').value,
  query: byId('search-input').value,
});

const render = () => {
  const visible = filterItems(items, currentFilters());
  byId('item-list').innerHTML = visible.map(itemHtml).join('');
  byId('empty-state').classList.toggle('show', visible.length === 0);

  const { total, active, inactive, byCategory } = getStats(items);
  byId('stat-total').textContent = total;
  byId('stat-active').textContent = active;
  byId('stat-inactive').textContent = inactive;
  byId('stats-details').innerHTML = Object.entries(byCategory)
    .map(([key, count]) => `<div class="stat-card"><h4>${categoryLabel(key)}</h4><p>${count}</p></div>`)
    .join('');
};

// Guarda el nuevo array, lo persiste y vuelve a pintar.
const save = (nextItems) => {
  items = nextItems;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  render();
};

const resetForm = () => {
  editingId = null;
  byId('item-form').reset();
  byId('form-title').textContent = '➕ Nuevo elemento';
  byId('submit-btn').textContent = 'Crear';
  byId('cancel-btn').hidden = true;
};

const startEdit = (id) => {
  const item = items.find((candidate) => candidate.id === id);
  if (!item) return;
  editingId = id;
  byId('item-name').value = item.name;
  byId('item-description').value = item.description;
  byId('item-category').value = item.category;
  byId('item-priority').value = item.priority;
  byId('form-title').textContent = '✏️ Editar elemento';
  byId('submit-btn').textContent = 'Guardar';
  byId('cancel-btn').hidden = false;
};

const categoryOptions = Object.keys(CATEGORIES)
  .map((key) => `<option value="${key}">${categoryLabel(key)}</option>`)
  .join('');
byId('item-category').innerHTML = categoryOptions;
byId('filter-category').innerHTML = `<option value="all">Todas</option>${categoryOptions}`;
byId('app-title').textContent = TITLE;
document.title = TITLE;

byId('item-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    name: byId('item-name').value.trim(),
    description: byId('item-description').value.trim(),
    category: byId('item-category').value,
    priority: byId('item-priority').value,
  };
  const missing = missingFields(data);
  if (missing.length > 0) {
    alert(`Faltan campos: ${missing.join(', ')}`);
    return;
  }
  save(editingId === null ? addItem(items, createItem(data, items)) : updateItem(items, editingId, data));
  resetForm();
});

byId('cancel-btn').addEventListener('click', resetForm);

// Un solo listener para toda la lista: mira en qué tarjeta y en qué botón se hizo clic.
byId('item-list').addEventListener('click', (event) => {
  const card = event.target.closest('[data-item-id]');
  if (!card) return;
  const id = Number(card.dataset.itemId);
  if (event.target.matches('.item-checkbox')) save(toggleActive(items, id));
  if (event.target.matches('.btn-delete')) save(removeItem(items, id));
  if (event.target.matches('.btn-edit')) startEdit(id);
});

byId('clear-inactive').addEventListener('click', () => save(filterItems(items, { status: 'active' })));

['filter-status', 'filter-category', 'filter-priority'].forEach((id) => byId(id).addEventListener('change', render));
byId('search-input').addEventListener('input', render);

render();
