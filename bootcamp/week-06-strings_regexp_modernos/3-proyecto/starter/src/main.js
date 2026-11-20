// Página del registro: lee el formulario y pinta las fichas. No hace falta tocar este archivo.
// Los datos están en data.js y la lógica en logic.js.
import SAMPLE_ENTRIES, { TITLE, CODE_PREFIX } from './data.js';
import { normalizeText, formatCode, isValidCode, isValidEmail, formatDate, extractTags, safeHtml } from './logic.js';

const byId = (id) => document.getElementById(id);

// Las fichas viven en memoria: al recargar vuelven los datos de ejemplo.
let entries = [...SAMPLE_ENTRIES];

// Todo el texto de las fichas pasa por safeHtml antes de entrar con innerHTML.
const entryHtml = (entry) => {
  const tags = extractTags(entry.notes).map((tag) => `#${tag}`).join(' ');
  return safeHtml`
  <div class="item" data-number="${entry.number}">
    <div class="item-content">
      <h3>${formatCode(CODE_PREFIX, entry.number)} · ${normalizeText(entry.name)}</h3>
      <div class="item-meta">
        <span class="item-badge">📅 ${formatDate(entry.date) ?? 'sin fecha'}</span>
        <span class="item-badge">✉️ ${entry.email}</span>
        <span class="item-badge badge-category">${tags || 'sin etiquetas'}</span>
      </div>
      <p class="item-notes">${normalizeText(entry.notes)}</p>
    </div>
    <div class="item-actions">
      <button class="btn-delete" title="Eliminar">🗑️</button>
    </div>
  </div>`;
};

const allTags = () => extractTags(entries.map(({ notes }) => notes).join(' '));

// El selector de etiquetas se rehace en cada render, porque añadir o eliminar cambia las etiquetas.
const renderTags = () => {
  const select = byId('filter-tag');
  const current = select.value || 'all';
  const tags = allTags();
  select.innerHTML = [
    safeHtml`<option value="all">Todas</option>`,
    ...tags.map((tag) => safeHtml`<option value="${tag}">#${tag}</option>`),
  ].join('');
  select.value = tags.includes(current) ? current : 'all';
};

// Con el buscador vacío no filtra; con un código mal escrito avisa y no muestra nada.
const searchFilter = () => {
  const code = byId('search-code').value.trim();
  if (code === '') return () => true;
  if (!isValidCode(code, CODE_PREFIX)) {
    byId('error-search').textContent = `Formato: ${formatCode(CODE_PREFIX, 0)}`;
    return () => false;
  }
  return (entry) => formatCode(CODE_PREFIX, entry.number) === code;
};

const render = () => {
  renderTags();
  byId('error-search').textContent = '';
  const tag = byId('filter-tag').value;
  const visible = entries
    .filter(searchFilter())
    .filter(({ notes }) => tag === 'all' || extractTags(notes).includes(tag))
    .toSorted((a, b) => a.number - b.number);
  byId('entry-list').innerHTML = visible.map(entryHtml).join('');
  byId('empty-state').classList.toggle('show', visible.length === 0);
  byId('stat-total').textContent = entries.length;
  byId('stat-tags').textContent = allTags().length;
};

// Cada campo con error recibe la clase invalid y su mensaje debajo.
const showErrors = (errors) => {
  for (const field of ['number', 'name', 'email']) {
    byId(`error-${field}`).textContent = errors[field] ?? '';
    byId(`entry-${field}`).classList.toggle('invalid', field in errors);
  }
};

const validate = ({ number, name, email }) => {
  const errors = {};
  if (!Number.isInteger(number) || number < 1) errors.number = 'Escribe un número entero mayor que 0';
  else if (entries.some((entry) => entry.number === number)) errors.number = `Ya existe ${formatCode(CODE_PREFIX, number)}`;
  if (name === '') errors.name = 'Escribe un nombre';
  if (!isValidEmail(email)) errors.email = 'Escribe un correo con la forma nombre@dominio.org';
  return errors;
};

byId('app-title').textContent = TITLE;
document.title = TITLE;
byId('search-code').placeholder = formatCode(CODE_PREFIX, 1);

byId('entry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const newEntry = {
    number: Number(byId('entry-number').value || NaN),
    name: normalizeText(byId('entry-name').value),
    email: byId('entry-email').value.trim().toLowerCase(),
    date: byId('entry-date').value,
    notes: normalizeText(byId('entry-notes').value),
  };
  const errors = validate(newEntry);
  showErrors(errors);
  if (Object.keys(errors).length > 0) return;
  entries = [...entries, newEntry];
  byId('entry-form').reset();
  render();
});

// Un solo listener para toda la lista: mira en qué tarjeta se hizo clic.
byId('entry-list').addEventListener('click', (event) => {
  const card = event.target.closest('[data-number]');
  if (!card || !event.target.matches('.btn-delete')) return;
  const number = Number(card.dataset.number);
  entries = entries.filter((entry) => entry.number !== number);
  render();
});

byId('search-code').addEventListener('input', render);
byId('filter-tag').addEventListener('change', render);

render();
