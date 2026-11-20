// Página del catálogo: lee el formulario y pinta la lista.
// La lógica está en logic.js y los tipos del dominio en types.js; este archivo no hace falta tocarlo.
import { Collection } from './logic.js';
import { TITLE, ITEM_TYPES, createSamples } from './types.js';

const byId = (id) => document.getElementById(id);

// El texto escrito en el formulario se escapa antes de meterlo con innerHTML.
const escapeHtml = (text) =>
  String(text).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]);

// Sin localStorage: la colección vive en memoria y vuelve a los ejemplos al recargar.
const collection = Collection.from(createSamples());
let editingId = null;

const typeLabel = (type) => ITEM_TYPES.find((Type) => Type.type === type)?.label ?? type;

const itemHtml = (item) => `
  <div class="item ${item.active ? '' : 'inactive'}" data-item-id="${item.id}">
    <input type="checkbox" class="item-checkbox" title="Activo" ${item.active ? 'checked' : ''}>
    <div class="item-content">
      <h3>${escapeHtml(item.name)}</h3>
      ${item.description ? `<p>${escapeHtml(item.description)}</p>` : ''}
      <div class="item-meta">
        <span class="item-badge badge-category">${escapeHtml(typeLabel(item.type))}</span>
        <span class="item-badge">${escapeHtml(item.describe())}</span>
      </div>
    </div>
    <div class="item-actions">
      <button class="btn-edit" title="Editar">✏️</button>
      <button class="btn-delete" title="Eliminar">🗑️</button>
    </div>
  </div>`;

const render = () => {
  const visible = collection.filter({
    type: byId('filter-type').value,
    status: byId('filter-status').value,
    query: byId('search-input').value,
  });
  byId('item-list').innerHTML = visible.map(itemHtml).join('');
  byId('empty-state').classList.toggle('show', visible.length === 0);

  byId('stat-total').textContent = collection.size;
  byId('stat-active').textContent = collection.activeCount;
  byId('stat-inactive').textContent = collection.size - collection.activeCount;
  byId('stats-details').innerHTML = Object.entries(collection.countByType())
    .map(([type, count]) => `<div class="stat-card"><h4>${escapeHtml(typeLabel(type))}</h4><p>${count}</p></div>`)
    .join('');
};

const selectedType = () => ITEM_TYPES[Number(byId('item-type').value)];

const updateExtraLabel = () => {
  byId('item-extra-label').textContent = selectedType().extraLabel ?? 'Dato extra';
};

const resetForm = () => {
  editingId = null;
  byId('item-form').reset();
  byId('item-type').disabled = false;
  byId('item-extra').disabled = false;
  byId('form-title').textContent = '➕ Nuevo elemento';
  byId('submit-btn').textContent = 'Crear';
  byId('cancel-btn').hidden = true;
  updateExtraLabel();
};

// Al editar solo se cambian el nombre y la descripción: el tipo y su dato propio quedan fijos.
const startEdit = (id) => {
  const item = collection.find(id);
  if (!item) return;
  editingId = id;
  byId('item-name').value = item.name;
  byId('item-description').value = item.description;
  byId('item-type').disabled = true;
  byId('item-extra').disabled = true;
  byId('form-title').textContent = '✏️ Editar elemento';
  byId('submit-btn').textContent = 'Guardar';
  byId('cancel-btn').hidden = false;
};

byId('item-type').innerHTML = ITEM_TYPES.map((Type, index) => `<option value="${index}">${escapeHtml(Type.label ?? Type.type)}</option>`).join('');
byId('filter-type').innerHTML = `<option value="all">Todos</option>${ITEM_TYPES.map((Type) => `<option value="${Type.type}">${escapeHtml(Type.label ?? Type.type)}</option>`).join('')}`;
byId('app-title').textContent = TITLE;
document.title = TITLE;
updateExtraLabel();

byId('item-type').addEventListener('change', updateExtraLabel);

byId('item-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = byId('item-name').value;
  const description = byId('item-description').value.trim();
  // El setter de name lanza un error si el nombre está vacío: aquí se convierte en un aviso.
  try {
    if (editingId === null) {
      const Type = selectedType();
      collection.add(new Type(name, description, byId('item-extra').value || undefined));
    } else {
      const item = collection.find(editingId);
      item.name = name;
      item.description = description;
    }
  } catch (error) {
    alert(error.message);
    return;
  }
  resetForm();
  render();
});

byId('cancel-btn').addEventListener('click', resetForm);

// Un solo listener para toda la lista: mira en qué tarjeta y en qué botón se hizo clic.
byId('item-list').addEventListener('click', (event) => {
  const card = event.target.closest('[data-item-id]');
  if (!card) return;
  const id = Number(card.dataset.itemId);
  if (event.target.matches('.item-checkbox')) collection.find(id)?.toggle();
  if (event.target.matches('.btn-delete')) collection.remove(id);
  if (event.target.matches('.btn-edit')) startEdit(id);
  render();
});

['filter-type', 'filter-status'].forEach((id) => byId(id).addEventListener('change', render));
byId('search-input').addEventListener('input', render);

render();
