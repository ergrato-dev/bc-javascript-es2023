// Monta el cuaderno en la página. No hace falta editarlo: tu trabajo está en logic.js y data.js.
// - Carga la lista de localStorage y, si no hay nada guardado, empieza con SEED.
// - Guarda cada cambio y avisa si no cabe.
// - Guarda el formulario como borrador en sessionStorage mientras escribes.
// - Se entera de los cambios que hace otra pestaña con el evento storage.
import { APP, CATEGORIES, DRAFT_TTL_MS, SEED } from './data.js';
import { createDraft, createStore, fromStorageEvent, isStorageAvailable } from './logic.js';

const KEY = `${APP.namespace}:entries`;
const DRAFT_KEY = `${APP.namespace}:draft`;

// Si el navegador no deja usar el almacenamiento, el cuaderno funciona igual con un objeto
// en memoria que tiene los mismos métodos; los cambios se pierden al cerrar la pestaña.
const inMemory = () => {
  const items = new Map();
  return {
    getItem: (key) => items.get(key) ?? null,
    setItem: (key, value) => items.set(key, String(value)),
    removeItem: (key) => items.delete(key),
  };
};
const hasLocal = isStorageAvailable(() => localStorage);
const local = hasLocal ? localStorage : inMemory();
const session = isStorageAvailable(() => sessionStorage) ? sessionStorage : inMemory();

const store = createStore(local, KEY);
const draft = createDraft(session, DRAFT_KEY, DRAFT_TTL_MS);

const form = document.querySelector('#entry-form');
const list = document.querySelector('#entry-list');
const message = document.querySelector('#message');

const MESSAGES = {
  ok: '',
  empty: `Primera visita: el cuaderno empieza con ${SEED.length} ${APP.entry.many} de ejemplo.`,
  migrated: 'Los datos guardados eran de una versión anterior y se han convertido.',
  corrupt: 'Los datos guardados estaban dañados: el cuaderno empieza vacío.',
};

let entries = [];

const formatDate = (date) => date.toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' });

const renderEntry = (entry) => {
  const item = document.createElement('li');
  item.className = 'entry';
  item.dataset.id = entry.id;
  item.dataset.favorite = entry.favorite;

  const text = document.createElement('div');
  const title = document.createElement('p');
  title.className = 'entry-title';
  title.textContent = entry.title;
  const meta = document.createElement('p');
  meta.className = 'entry-meta';
  meta.textContent = `${entry.category} · ${formatDate(entry.createdAt)}`;
  text.append(title, meta);

  const actions = document.createElement('div');
  actions.className = 'entry-actions';
  const favorite = document.createElement('button');
  favorite.type = 'button';
  favorite.dataset.action = 'favorite';
  favorite.setAttribute('aria-pressed', entry.favorite);
  favorite.textContent = entry.favorite ? '★ Favorita' : '☆ Favorita';
  const remove = document.createElement('button');
  remove.type = 'button';
  remove.dataset.action = 'delete';
  remove.textContent = 'Borrar';
  actions.append(favorite, remove);

  item.append(text, actions);
  return item;
};

const render = () => {
  const sorted = entries.toSorted((a, b) => b.createdAt - a.createdAt);
  list.replaceChildren(...sorted.map(renderEntry));
  document.querySelector('#empty').hidden = entries.length > 0;
  const favorites = entries.filter(({ favorite }) => favorite).length;
  document.querySelector('#summary').textContent =
    `${entries.length} ${entries.length === 1 ? APP.entry.one : APP.entry.many} · ${favorites} favoritas`;
  document.querySelector('#storage-info').textContent = hasLocal
    ? `Guardado en localStorage con la clave «${KEY}»: ${local.getItem(KEY)?.length ?? 0} caracteres.`
    : 'El navegador no deja guardar datos: los cambios se pierden al cerrar la pestaña.';
};

// Cambia la lista, la guarda y la pinta. Si no cabe, la página sigue con la lista nueva en
// memoria y avisa.
const commit = (next) => {
  entries = next;
  const result = store.save(entries);
  message.textContent = result.ok ? '' : 'No queda espacio para guardar: el último cambio se perderá al recargar.';
  render();
};

// Formulario: borrador mientras escribes y entrada nueva al enviarlo.
const readFields = () => ({ title: form.elements.title.value, category: form.elements.category.value });

form.addEventListener('input', () => draft.save(readFields()));
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { title, category } = readFields();
  if (title.trim() === '') return;
  const id = Math.max(0, ...entries.map((entry) => entry.id)) + 1;
  commit([...entries, { id, title: title.trim(), category, createdAt: new Date(), favorite: false }]);
  draft.clear();
  form.reset();
  form.elements.title.focus();
});

// Botones de cada entrada, con un solo listener en la lista (delegación, semana 18).
list.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button || !list.contains(button)) return;
  const id = Number(button.closest('.entry').dataset.id);
  if (button.dataset.action === 'favorite') {
    commit(entries.map((entry) => (entry.id === id ? { ...entry, favorite: !entry.favorite } : entry)));
  } else if (button.dataset.action === 'delete') {
    commit(entries.filter((entry) => entry.id !== id));
  }
});

document.querySelector('#reset').addEventListener('click', () => {
  store.clear();
  entries = [];
  message.textContent = 'Datos borrados. Recarga para empezar con los de ejemplo.';
  render();
});

// Otra pestaña con la misma página ha cambiado la lista.
window.addEventListener('storage', (event) => {
  if (event.storageArea !== localStorage) return;
  const result = fromStorageEvent(event, KEY);
  if (result === null) return;
  entries = result.entries;
  message.textContent = 'La lista ha cambiado en otra pestaña.';
  render();
});

// Arranque.
document.title = APP.title;
document.querySelector('#app-title').textContent = APP.title;
document.querySelector('#category').append(
  ...CATEGORIES.map((category) => new Option(category, category)),
);

// Lo vacío y lo migrado se guardan ya en el formato actual. Lo dañado no se toca hasta el
// primer cambio, por si quieres rescatarlo a mano desde las DevTools.
const loaded = store.load();
if (loaded.status === 'empty') {
  commit(SEED);
} else if (loaded.status === 'migrated') {
  commit(loaded.entries);
} else {
  entries = loaded.entries;
  render();
}
message.textContent = hasLocal ? MESSAGES[loaded.status] : message.textContent;

const saved = draft.load();
if (saved) {
  form.elements.title.value = saved.title;
  form.elements.category.value = saved.category;
  message.textContent = 'Has recuperado el borrador que estabas escribiendo.';
}
