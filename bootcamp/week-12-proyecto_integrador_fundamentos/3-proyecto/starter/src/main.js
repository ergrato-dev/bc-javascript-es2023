// Página de la colección: formulario, filtros, páginas y resumen. No hace falta tocar este archivo.
// Los datos están en data.js y la lógica en logic.js.
import SAMPLE_PIECES, { TITLE, ID_PREFIX, ROOMS } from './data.js';
import { Collection, ValidationError, paginate, search, summarize } from './logic.js';

const PAGE_SIZE = 4;
const byId = (id) => document.getElementById(id);

// Los textos de las piezas se escapan antes de entrar con innerHTML.
const escapeHtml = (text) =>
  String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const collection = new Collection(ID_PREFIX, ROOMS);
let page = 0;

const pieceHtml = (piece) => `
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
      <button class="btn-delete" title="Eliminar">🗑️</button>
    </div>
  </div>`;

const render = () => {
  const { count, total, byRoom } = summarize(collection);
  byId('stat-pieces').textContent = count;
  byId('stat-value').textContent = `${total} €`;
  byId('room-summary').innerHTML = [...byRoom]
    .map(([room, n]) => `<span class="item-badge">${escapeHtml(room)}: ${n}</span>`)
    .join('');

  const found = search(collection, {
    text: byId('search-text').value,
    room: byId('filter-room').value,
    sort: byId('sort-by').value,
  });
  const pages = [...paginate(found, PAGE_SIZE)];
  page = Math.min(page, Math.max(pages.length - 1, 0));
  byId('item-list').innerHTML = (pages[page] ?? []).map(pieceHtml).join('');
  byId('empty-state').classList.toggle('show', found.length === 0);
  byId('page-info').textContent = `Página ${pages.length === 0 ? 0 : page + 1} de ${pages.length}`;
  byId('btn-prev').disabled = page === 0;
  byId('btn-next').disabled = page >= pages.length - 1;
};

byId('app-title').textContent = TITLE;
document.title = TITLE;
const roomOptions = ROOMS.map((room) => `<option value="${escapeHtml(room)}">${escapeHtml(room)}</option>`).join('');
byId('piece-room').innerHTML = roomOptions;
byId('filter-room').innerHTML = `<option value="">Todas</option>${roomOptions}`;

// La colección avisa de cada cambio: así la página se repinta sin que el formulario tenga que acordarse.
collection.subscribe(render);
SAMPLE_PIECES.forEach((piece) => collection.add(piece));

byId('piece-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const { elements } = event.target;
  try {
    const piece = collection.add({ name: elements.name.value, room: elements.room.value, value: elements.value.value });
    byId('form-message').textContent = `✔ ${piece.name} añadida como ${piece.id}`;
    byId('form-message').classList.add('ok');
    event.target.reset();
  } catch (error) {
    // Solo los datos malos se explican en la página; cualquier otro error es un fallo del programa.
    if (!(error instanceof ValidationError)) throw error;
    byId('form-message').textContent = `✖ Revisa el campo ${error.field}: ${error.message}`;
    byId('form-message').classList.remove('ok');
    elements[error.field]?.focus();
  }
});

['search-text', 'filter-room', 'sort-by'].forEach((id) =>
  byId(id).addEventListener('input', () => {
    page = 0;
    render();
  }),
);

byId('btn-prev').addEventListener('click', () => {
  page -= 1;
  render();
});

byId('btn-next').addEventListener('click', () => {
  page += 1;
  render();
});

byId('item-list').addEventListener('click', (event) => {
  const card = event.target.closest('[data-id]');
  if (card && event.target.matches('.btn-delete')) collection.remove(card.dataset.id);
});
