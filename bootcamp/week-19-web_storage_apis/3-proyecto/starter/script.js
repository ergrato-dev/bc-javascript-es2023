// ============================================
// PROYECTO: Persistencia de Datos Local
// ============================================

const STORAGE_KEY = 'app:items';
const SESSION_KEY = 'app:last-action';

const dom = {
  form: document.querySelector('#item-form'),
  name: document.querySelector('#name'),
  category: document.querySelector('#category'),
  list: document.querySelector('#items-list'),
  status: document.querySelector('#status'),
  save: document.querySelector('#save-state'),
  restore: document.querySelector('#restore-state'),
  clear: document.querySelector('#clear-state')
};

// TODO: Adapta esta estructura a tu dominio asignado.
let items = [];

const renderItems = () => {
  dom.list.innerHTML = items
    .map(item => `<li><strong>${item.name}</strong> · ${item.category}</li>`)
    .join('');
};

const safeParse = (value, fallback) => {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const setStatus = (message, type = 'info') => {
  dom.status.textContent = `Estado: ${message}`;
  dom.status.style.color = type === 'error' ? '#f97316' : '#94a3b8';
};

const persistState = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    sessionStorage.setItem(SESSION_KEY, 'saved');
    setStatus('guardado exitoso', 'ok');
  } catch {
    // TODO: Implementa fallback en memoria y mensaje contextualizado a tu dominio.
    setStatus('falló la persistencia, usando fallback temporal', 'error');
  }
};

const restoreState = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  items = safeParse(raw, []);
  renderItems();
  setStatus('estado restaurado');
};

const handleSubmit = event => {
  event.preventDefault();

  const name = dom.name.value.trim();
  const category = dom.category.value.trim();

  if (!name || !category) return;

  const newItem = {
    id: Date.now(),
    name,
    category
  };

  items = [newItem, ...items];
  dom.form.reset();
  renderItems();
};

const clearState = () => {
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(SESSION_KEY);
  items = [];
  renderItems();
  setStatus('estado limpiado');
};

const init = () => {
  dom.form.addEventListener('submit', handleSubmit);
  dom.save.addEventListener('click', persistState);
  dom.restore.addEventListener('click', restoreState);
  dom.clear.addEventListener('click', clearState);

  restoreState();
};

init();
