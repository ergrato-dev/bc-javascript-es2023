// Interfaz del centro de avisos. Este archivo ya está hecho: pone los listeners, usa las
// funciones de logic.js para decidir qué hacer y pinta la página.
// Todas las acciones pasan por run(): run lanza el evento propio en el bus y, si nadie lo
// veta, cambia la lista de avisos y vuelve a pintar.

import NOTICES, { TITLE } from './data.js';
import {
  NOTICE_ACTIONS, LIST_ACTIONS, parseAction, applyAction, summarize, sortNotices, shortcutFor, nextIndex, createBus,
} from './logic.js';

// Selecciona una vez y falla con un mensaje claro si falta un elemento.
const must = (selector) => {
  const element = document.querySelector(selector);
  if (!element) throw new Error(`Falta ${selector} en index.html`);
  return element;
};

const title = must('#app-title');
const summary = must('#summary');
const form = must('#notice-form');
const toolbar = must('#toolbar');
const message = must('#message');
const list = must('#notice-list');
const empty = must('#empty');
const eventLog = must('#event-log');

const LEVEL_LABELS = { info: 'Info', aviso: 'Aviso', urgente: 'Urgente' };
const LOG_SIZE = 8;

let notices = NOTICES.map((notice) => ({ ...notice }));
let focusedId = null; // el aviso que tiene o tuvo el foco por última vez
const bus = createBus();

// ---------- Pintar ----------

const makeButton = (action, text, attributes = {}) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.action = action;
  button.textContent = text;
  for (const [name, value] of Object.entries(attributes)) button.setAttribute(name, value);
  return button;
};

// Un <li> por aviso. Los botones no llevan listeners: los atiende la lista (delegación).
const createNotice = (notice) => {
  const item = document.createElement('li');
  item.className = `notice level-${notice.level}`;
  item.classList.toggle('is-read', notice.read);
  item.classList.toggle('is-pinned', notice.pinned);
  item.dataset.id = notice.id;
  item.tabIndex = 0; // se puede enfocar con Tab y con los atajos j y k

  const level = document.createElement('span');
  level.className = 'notice-level';
  level.textContent = LEVEL_LABELS[notice.level] ?? notice.level;
  const text = document.createElement('p');
  text.className = 'notice-title';
  text.textContent = notice.title;
  const actions = document.createElement('div');
  actions.className = 'notice-actions';
  actions.append(
    makeButton('toggle-read', notice.read ? 'Marcar no leído' : 'Marcar leído'),
    makeButton('pin', notice.pinned ? 'Soltar' : 'Fijar', { 'aria-pressed': String(notice.pinned) }),
    makeButton('dismiss', 'Cerrar', { 'aria-label': `Cerrar «${notice.title}»` }),
  );
  item.append(level, text, actions);
  return item;
};

const listItems = () => [...list.children];

// Rehace la lista entera. Si el foco estaba en la lista, lo devuelve al mismo aviso o,
// si ese aviso ya no está, al que ha quedado en su sitio.
const render = () => {
  const hadFocus = list.contains(document.activeElement);
  const oldIndex = listItems().findIndex((item) => Number(item.dataset.id) === focusedId);
  list.replaceChildren(...sortNotices(notices).map(createNotice));

  const { total, unread, pinned, urgent } = summarize(notices);
  summary.textContent = `Avisos: ${total} · sin leer: ${unread} · fijados: ${pinned} · urgentes sin leer: ${urgent}`;
  empty.hidden = total > 0;

  if (!hadFocus) return;
  const items = listItems();
  const next = list.querySelector(`[data-id="${focusedId}"]`) ?? items[Math.min(oldIndex, items.length - 1)];
  next?.focus();
};

// ---------- El bus de eventos propios ----------

// run lanza notice:<tipo>; si ningún listener llama a preventDefault, aplica la acción.
const run = (action) => {
  if (!action) return;
  const notice = action.notice ?? notices.find(({ id }) => id === action.id);
  if (!bus.emit(action.type, { ...action, notice })) return;
  message.textContent = '';
  notices = applyAction(notices, action);
  render();
};

// Veto: un aviso fijado no se cierra. Este listener no sabe cerrar avisos; solo decide si se puede.
bus.on('dismiss', (event) => {
  const { notice } = event.detail;
  if (!notice?.pinned) return;
  event.preventDefault();
  message.textContent = `«${notice.title}» está fijado: suéltalo antes de cerrarlo.`;
});

// Registro: se añade después del veto, así ya sabe si el evento se ha cancelado.
const logEvent = (event) => {
  const { notice } = event.detail;
  const entry = document.createElement('li');
  entry.textContent = `${event.type}${notice ? ` #${notice.id}` : ''}${event.defaultPrevented ? ' · vetado' : ''}`;
  entry.classList.toggle('is-vetoed', event.defaultPrevented);
  eventLog.prepend(entry);
  for (const old of [...eventLog.children].slice(LOG_SIZE)) old.remove();
};
for (const type of [...NOTICE_ACTIONS, ...LIST_ACTIONS, 'add']) bus.on(type, logEvent);

// ---------- Listeners de la página ----------

// Delegación: un listener por contenedor, para todos sus botones, también los que se
// crean en cada render.
const actionFromClick = (event, container) => {
  const button = event.target.closest('[data-action]');
  if (!button || !container.contains(button)) return null;
  return parseAction({ action: button.dataset.action, id: button.closest('[data-id]')?.dataset.id });
};
list.addEventListener('click', (event) => run(actionFromClick(event, list)));
toolbar.addEventListener('click', (event) => run(actionFromClick(event, toolbar)));

// focus no sube; focusin sí: la lista se entera de qué aviso tiene el foco.
list.addEventListener('focusin', (event) => {
  focusedId = Number(event.target.closest('[data-id]').dataset.id);
});

// Atajos de teclado, en document para que funcionen tenga el foco quien lo tenga.
document.addEventListener('keydown', (event) => {
  const action = shortcutFor({
    key: event.key,
    ctrlKey: event.ctrlKey,
    metaKey: event.metaKey,
    altKey: event.altKey,
    inField: event.target.matches('input, select, textarea'),
  });
  if (!action) return;
  event.preventDefault(); // que las flechas no desplacen la página
  const inList = list.contains(document.activeElement);

  if (action === 'next' || action === 'prev') {
    const items = listItems();
    const current = inList ? items.findIndex((item) => Number(item.dataset.id) === focusedId) : -1;
    items[nextIndex(current, items.length, action === 'next' ? 1 : -1)]?.focus();
    return;
  }
  if (inList) run(parseAction({ action, id: String(focusedId) }));
});

form.addEventListener('submit', (event) => {
  // Sin esto, el navegador enviaría el formulario y recargaría la página.
  event.preventDefault();
  const { title: text, level } = form.elements;
  const id = Math.max(0, ...notices.map((notice) => notice.id)) + 1;
  run({ type: 'add', notice: { id, title: text.value.trim(), level: level.value, read: false, pinned: false } });
  form.reset();
  text.focus();
});

title.textContent = TITLE;
document.title = TITLE;
render();
