// Página del catálogo: lee el formulario y pinta la página actual. No hace falta tocar este archivo.
// Los datos están en data.js y la lógica en logic.js.
import SAMPLE_ITEMS, { TITLE, ID_PREFIX } from './data.js';
import { createIdGenerator, filterBy, countPages, getPage, createCatalog } from './logic.js';

const byId = (id) => document.getElementById(id);

// Los textos escritos en el formulario se escapan antes de entrar con innerHTML.
const escapeHtml = (text) =>
  String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

// Un solo generador da todos los ids: sigue la cuenta aunque borres piezas, así nunca se repiten.
const ids = createIdGenerator(ID_PREFIX);
const nextId = () => ids.next().value;

// El estado vive en memoria: al recargar vuelven los datos de ejemplo.
let items = SAMPLE_ITEMS.map((item) => ({ id: nextId(), ...item }));
let page = 1;

const itemHtml = (item) => `
  <div class="item" data-id="${escapeHtml(item.id)}">
    <div class="item-content">
      <h3>${escapeHtml(item.name)}</h3>
      <div class="item-meta">
        <span class="item-badge">🆔 ${escapeHtml(item.id)}</span>
        <span class="item-badge badge-category">🚪 ${escapeHtml(item.room)}</span>
      </div>
    </div>
    <div class="item-actions">
      <button class="btn-delete" title="Eliminar">🗑️</button>
    </div>
  </div>`;

// Las salas salen de las piezas; la elegida se mantiene si todavía existe.
const renderRooms = () => {
  const rooms = [...new Set(items.map(({ room }) => room))];
  const select = byId('filter-room');
  const current = rooms.includes(select.value) ? select.value : '';
  select.innerHTML = ['<option value="">Todas</option>', ...rooms.map((room) => `<option value="${escapeHtml(room)}">${escapeHtml(room)}</option>`)].join('');
  select.value = current;
  byId('room-options').innerHTML = rooms.map((room) => `<option value="${escapeHtml(room)}">`).join('');
  return rooms.length;
};

const render = () => {
  byId('stat-rooms').textContent = renderRooms();
  byId('stat-pieces').textContent = items.length;
  const room = byId('filter-room').value;
  const pageSize = Number(byId('page-size').value);
  // filterBy devuelve un generador nuevo en cada llamada: un generador solo se recorre una vez.
  const matches = () => filterBy(createCatalog(items), (item) => room === '' || item.room === room);
  // Para saber cuántas páginas hay hace falta contar todas; la página solo crea pageSize piezas.
  const total = [...matches()].length;
  const pages = countPages(total, pageSize);
  page = Math.min(page, pages);
  byId('item-list').innerHTML = getPage(matches(), page, pageSize).map(itemHtml).join('');
  byId('empty-state').classList.toggle('show', total === 0);
  byId('page-info').textContent = `Página ${page} de ${pages} · ${total} ${total === 1 ? 'pieza' : 'piezas'}`;
  byId('btn-prev').disabled = page === 1;
  byId('btn-next').disabled = page === pages;
};

// Cada campo con error recibe la clase invalid y su mensaje debajo.
const showErrors = (errors) => {
  for (const field of ['name', 'room']) {
    byId(`error-${field}`).textContent = errors[field] ?? '';
    byId(`item-${field}`).classList.toggle('invalid', field in errors);
  }
};

byId('app-title').textContent = TITLE;
document.title = TITLE;

byId('item-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = byId('item-name').value.trim();
  const room = byId('item-room').value.trim();
  const errors = {};
  if (name === '') errors.name = 'Escribe un nombre';
  if (room === '') errors.room = 'Escribe una sala';
  showErrors(errors);
  if (Object.keys(errors).length > 0) return;
  items = [...items, { id: nextId(), name, room }];
  byId('item-form').reset();
  render();
});

byId('item-list').addEventListener('click', (event) => {
  const card = event.target.closest('[data-id]');
  if (!card || !event.target.matches('.btn-delete')) return;
  items = items.filter((item) => item.id !== card.dataset.id);
  render();
});

// Al cambiar de sala o de tamaño se vuelve a la primera página.
for (const id of ['filter-room', 'page-size']) {
  byId(id).addEventListener('change', () => {
    page = 1;
    render();
  });
}

byId('btn-prev').addEventListener('click', () => {
  page -= 1;
  render();
});

byId('btn-next').addEventListener('click', () => {
  page += 1;
  render();
});

render();
