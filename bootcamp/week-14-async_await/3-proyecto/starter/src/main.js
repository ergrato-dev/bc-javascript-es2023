// Página del explorador: pinta las fichas, lanza las peticiones y muestra qué llega y cuándo.
// No hace falta tocar este archivo. Los datos están en data.js y la lógica en logic.js.
import ITEMS, { TITLE } from './data.js';
import {
  getItem, getInSequence, getInParallel, getAvailable, retry, pages, findFirst,
} from './logic.js';

const PAGE_SIZE = 2;
const ATTEMPTS = 3;
const RETRY_DELAY = 300;

const byId = (id) => document.getElementById(id);
const countItems = (count) => (count === 1 ? '1 ficha' : `${count} fichas`);

// Los textos de data.js se escapan antes de entrar con innerHTML.
const escapeHtml = (text) =>
  String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

// Estado de cada tarjeta, por id de ficha.
let statuses = new Map();
const STATE_ICONS = { idle: '⚪', pending: '⏳', ok: '✅', fail: '❌' };
const statusOf = (id) => statuses.get(id) ?? { state: 'idle', text: 'Sin pedir' };

const itemHtml = (item) => {
  const { state, text } = statusOf(item.id);
  return `
  <div class="item">
    <div class="item-content">
      <h3>#${escapeHtml(item.id)} · ${escapeHtml(item.name)}</h3>
      <p>${state === 'ok' ? escapeHtml(item.detail) : ''}</p>
      <div class="item-meta">
        <span class="item-badge">⏱️ ${escapeHtml(item.delay)} ms</span>
        <span class="item-badge badge-status ${state}">${STATE_ICONS[state]} ${escapeHtml(text)}</span>
      </div>
    </div>
  </div>`;
};

const render = () => {
  byId('stat-items').textContent = ITEMS.length;
  byId('stat-loaded').textContent = [...statuses.values()].filter(({ state }) => state === 'ok').length;
  byId('item-list').innerHTML = ITEMS.map(itemHtml).join('');
};

const mark = (ids, state, text) => {
  ids.forEach((id) => statuses.set(id, { state, text }));
  render();
};

const showMessage = (text, ok) => {
  byId('query-message').textContent = text;
  byId('query-message').classList.toggle('ok', ok);
};

let start = 0;
const log = (line) => {
  const ms = Math.round(performance.now() - start);
  byId('query-log').insertAdjacentHTML('beforeend', `<li>${ms} ms · ${escapeHtml(line)}</li>`);
};

const readIds = () => byId('ids').value.split(',').map((text) => Number(text.trim())).filter(Number.isInteger);

// Cada modo pide fichas con una función de logic.js y devuelve el texto final.
const MODES = {
  sequence: async (ids) => {
    mark(ids, 'pending', 'Pidiendo...');
    const found = await getInSequence(ITEMS, ids);
    mark(found.map(({ id }) => id), 'ok', 'Cargada');
    return `✔ ${countItems(found.length)}, una detrás de otra`;
  },
  parallel: async (ids) => {
    mark(ids, 'pending', 'Pidiendo...');
    const found = await getInParallel(ITEMS, ids);
    mark(found.map(({ id }) => id), 'ok', 'Cargada');
    return `✔ ${countItems(found.length)} a la vez`;
  },
  available: async (ids) => {
    mark(ids, 'pending', 'Pidiendo...');
    const { found, missing } = await getAvailable(ITEMS, ids);
    mark(found.map(({ id }) => id), 'ok', 'Cargada');
    missing.forEach((id) => log(`No existe la ficha ${id}`));
    return `✔ ${found.length} encontradas, ${missing.length} sin ficha (${missing.join(', ') || 'ninguna'})`;
  },
  retry: async (ids) => {
    // Servidor inestable: las primeras `failures` llamadas fallan, las siguientes responden.
    let failuresLeft = Number(byId('failures').value);
    let attempt = 0;
    const unstableTask = async () => {
      attempt += 1;
      log(`Intento ${attempt}`);
      if (failuresLeft > 0) {
        failuresLeft -= 1;
        await getItem(ITEMS, ids[0]);
        throw new Error(`El servidor falló en el intento ${attempt}`);
      }
      return getInParallel(ITEMS, ids);
    };
    mark(ids, 'pending', 'Pidiendo...');
    const found = await retry(unstableTask, ATTEMPTS, RETRY_DELAY);
    mark(found.map(({ id }) => id), 'ok', 'Cargada');
    return `✔ ${countItems(found.length)} en el intento ${attempt}`;
  },
  pages: async () => {
    let count = 0;
    mark(ITEMS.map(({ id }) => id), 'pending', 'En cola');
    for await (const page of pages(ITEMS, PAGE_SIZE)) {
      count += 1;
      log(`Página ${count}: ${page.map(({ name }) => name).join(', ')}`);
      mark(page.map(({ id }) => id), 'ok', `Página ${count}`);
    }
    return `✔ ${count} páginas de ${PAGE_SIZE} fichas`;
  },
  search: async () => {
    const text = byId('search').value.trim();
    const item = await findFirst(ITEMS, PAGE_SIZE, text);
    if (!item) return `✔ Ninguna ficha contiene «${text}»`;
    mark([item.id], 'ok', 'Encontrada');
    return `✔ Primera ficha con «${text}»: ${item.name}`;
  },
};

byId('app-title').textContent = TITLE;
document.title = TITLE;

byId('query-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const mode = byId('mode').value;
  statuses = new Map();
  render();
  byId('query-log').innerHTML = '';
  showMessage('Pidiendo...', true);
  byId('btn-query').disabled = true;
  start = performance.now();
  try {
    const text = await MODES[mode](readIds());
    log(text);
    showMessage(text, true);
  } catch (error) {
    // La página muestra el mensaje; la consola, el error completo (con su cause, si lo tiene).
    console.error(error);
    statuses.forEach((status, id) => {
      if (status.state === 'pending') statuses.set(id, { state: 'fail', text: 'Sin resultado' });
    });
    render();
    log(`✖ ${error.message}`);
    showMessage(`✖ ${error.message}`, false);
  } finally {
    byId('btn-query').disabled = false;
  }
});

render();
