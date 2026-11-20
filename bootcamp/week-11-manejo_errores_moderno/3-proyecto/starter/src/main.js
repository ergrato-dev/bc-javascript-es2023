// Página del importador: lee el JSON, pinta las piezas y simula el guardado. No hace falta tocar este archivo.
// Los datos están en data.js y la lógica en logic.js.
import SAMPLE_ITEMS, { TITLE, ID_PREFIX, ROOMS } from './data.js';
import { NetworkError, importItems, retry, userMessage } from './logic.js';

const byId = (id) => document.getElementById(id);

// Los textos importados se escapan antes de entrar con innerHTML.
const escapeHtml = (text) =>
  String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

// El contador sigue aunque borres piezas, así un id nunca se repite.
let lastNumber = 0;
const nextId = () => `${ID_PREFIX}-${String(++lastNumber).padStart(3, '0')}`;

// El estado vive en memoria: al recargar, la lista vuelve a estar vacía.
let items = [];

const showMessage = (id, text, ok) => {
  byId(id).textContent = text;
  byId(id).classList.toggle('ok', ok);
};

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

// El cuadro arranca con las piezas de data.js y dos piezas con errores a propósito.
byId('import-text').value = JSON.stringify(
  [...SAMPLE_ITEMS, { name: '  ', room: ROOMS[0], value: 10 }, { name: 'Pieza perdida', room: 'Garaje', value: 5 }],
  null,
  2,
);

byId('import-form').addEventListener('submit', (event) => {
  event.preventDefault();
  byId('import-errors').innerHTML = '';
  try {
    const { items: imported, errors } = importItems(byId('import-text').value, ROOMS);
    items = [...items, ...imported.map((piece) => ({ id: nextId(), ...piece }))];
    byId('import-errors').innerHTML = errors
      .map(({ index, field, message }) => `<li>Pieza ${index + 1} · ${escapeHtml(field)}: ${escapeHtml(message)}</li>`)
      .join('');
    showMessage('import-message', `${imported.length} importadas, ${errors.length} rechazadas`, errors.length === 0);
    render();
  } catch (error) {
    // Un ParseError llega aquí: la página muestra el mensaje amable y la consola el error completo, con su cause.
    console.error(error);
    showMessage('import-message', userMessage(error), false);
  }
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Servidor simulado: responde según el modo elegido y el número de intento.
const fakeSave = async (mode, attempt) => {
  await wait(400);
  if (mode === 'down' || (mode === 'flaky' && attempt < 3)) throw new NetworkError(503);
  if (mode === 'reject') throw new NetworkError(400);
  return { saved: items.length, attempt };
};

byId('save-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const mode = byId('server-mode').value;
  const log = (line) => byId('save-log').insertAdjacentHTML('beforeend', `<li>${escapeHtml(line)}</li>`);
  byId('save-log').innerHTML = '';
  byId('btn-save').disabled = true;
  showMessage('save-message', 'Guardando...', true);
  try {
    const result = await retry(
      (attempt) => fakeSave(mode, attempt),
      3,
      (error, attempt) => log(`Intento ${attempt}: ${error.message}. Se reintenta.`),
    );
    log(`Intento ${result.attempt}: guardado.`);
    showMessage('save-message', `✔ ${result.saved} piezas guardadas`, true);
  } catch (error) {
    console.error(error);
    log(`Último intento: ${error.message}.`);
    showMessage('save-message', `✖ ${userMessage(error)}`, false);
  } finally {
    // Pase lo que pase, el botón vuelve a estar disponible.
    byId('btn-save').disabled = false;
  }
});

byId('item-list').addEventListener('click', (event) => {
  const card = event.target.closest('[data-id]');
  if (card && event.target.matches('.btn-delete')) {
    items = items.filter((item) => item.id !== card.dataset.id);
    render();
  }
});

render();
