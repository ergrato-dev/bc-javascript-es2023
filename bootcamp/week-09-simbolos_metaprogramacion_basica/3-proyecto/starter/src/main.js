// Página de fichas: lee el formulario y pinta las piezas. No hace falta tocar este archivo.
// Los datos están en data.js y la lógica en logic.js.
import SAMPLE_ITEMS, { TITLE, ID_PREFIX } from './data.js';
import { NOTES, createPiece, typeOf, Piece, totalValue, toPublic, hiddenKeys } from './logic.js';

const byId = (id) => document.getElementById(id);

// Los textos escritos en el formulario se escapan antes de entrar con innerHTML.
const escapeHtml = (text) =>
  String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

// El contador sigue aunque borres piezas, así un id nunca se repite.
let lastNumber = 0;
const nextId = () => `${ID_PREFIX}-${String(++lastNumber).padStart(3, '0')}`;

// El estado vive en memoria: al recargar vuelven los datos de ejemplo.
let items = SAMPLE_ITEMS.map((data) => createPiece(data, nextId()));

// La nota se lee con la clave NOTES: sin ese símbolo no hay forma directa de llegar a ella.
const itemHtml = (piece, showNotes) => `
  <div class="item" data-id="${escapeHtml(piece.id)}">
    <div class="item-content">
      <h3>${escapeHtml(piece.name)}</h3>
      <div class="item-meta">
        <span class="item-badge">🆔 ${escapeHtml(piece.id)}</span>
        <span class="item-badge badge-category">🚪 ${escapeHtml(piece.room)}</span>
        <span class="item-badge badge-value">💶 ${escapeHtml(piece.value)} €</span>
      </div>
      ${showNotes ? `<p class="item-note">🔒 ${escapeHtml(piece[NOTES])}</p>` : ''}
    </div>
    <div class="item-actions">
      <button class="btn-delete" title="Eliminar">🗑️</button>
    </div>
  </div>`;

const render = () => {
  const showNotes = byId('show-notes').checked;
  // Solo se pintan los objetos que son piezas: instanceof pregunta a Piece[Symbol.hasInstance].
  const pieces = items.filter((item) => item instanceof Piece);
  byId('stat-pieces').textContent = pieces.length;
  byId('stat-value').textContent = `${totalValue(pieces)} €`;
  byId('item-list').innerHTML = pieces.map((piece) => itemHtml(piece, showNotes)).join('');
  byId('empty-state').classList.toggle('show', pieces.length === 0);
  // La vista pública es lo que saldría si enviaras las piezas a otro sitio: sin notas.
  byId('public-json').textContent = JSON.stringify(pieces.map(toPublic), null, 2);
  const [first] = pieces;
  byId('hidden-info').textContent = first
    ? `Cada ficha es de tipo ${typeOf(first)} y tiene ${hiddenKeys(first).length} claves simbólicas que no salen aquí: ${hiddenKeys(first).join(', ')}. Ejemplo: ${first}.`
    : '';
};

// Cada campo con error recibe la clase invalid y su mensaje debajo.
const showErrors = (errors) => {
  for (const field of ['name', 'room', 'value', 'note']) {
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
  const valueText = byId('item-value').value.trim();
  const value = Number(valueText);
  const note = byId('item-note').value.trim();
  const errors = {};
  if (name === '') errors.name = 'Escribe un nombre';
  if (room === '') errors.room = 'Escribe una sala';
  if (valueText === '' || !Number.isFinite(value) || value < 0) errors.value = 'Escribe un valor de 0 o más';
  if (note === '') errors.note = 'Escribe una nota';
  showErrors(errors);
  if (Object.keys(errors).length > 0) return;
  items = [...items, createPiece({ name, room, value, note }, nextId())];
  byId('item-form').reset();
  render();
});

byId('item-list').addEventListener('click', (event) => {
  const card = event.target.closest('[data-id]');
  if (!card || !event.target.matches('.btn-delete')) return;
  items = items.filter((item) => item.id !== card.dataset.id);
  render();
});

byId('show-notes').addEventListener('change', render);

render();
