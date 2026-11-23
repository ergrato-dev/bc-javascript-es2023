// Conecta la página con las funciones de logic.js. No hace falta editarlo, pero léelo:
// aplica la teoría de la semana.
import { APP, FIELDS, makeRecords } from './data.js';
import { buildIndex, debounce, measure, memoize, normalize, paginate, search, throttle } from './logic.js';

const $ = (selector) => document.querySelector(selector);
const list = $('#results');
const sentinel = $('#sentinel');

document.title = APP.title;
$('h1').textContent = APP.title;
$('#intro').textContent = APP.intro;

// El catálogo y su índice se preparan una sola vez, al cargar (teoría 03).
const records = makeRecords();
const built = measure(() => buildIndex(records, APP.searchFields), 1);
const index = built.result;
$('#catalog').textContent = `${records.length} fichas · índice preparado en ${built.ms.toFixed(2)} ms`;

const counts = { keys: 0, calls: 0, searches: 0, scrolls: 0, updates: 0 };
let lastMs = 0;

const updateMetrics = () => {
  const { keys, calls, searches, scrolls, updates } = counts;
  $('#metrics').textContent =
    `Teclas: ${keys} · búsquedas: ${searches} · desde la caché: ${calls - searches} · ` +
    `última búsqueda: ${lastMs.toFixed(2)} ms · scroll: ${scrolls} eventos, ${updates} actualizaciones`;
};

// La búsqueda de verdad, medida y guardada en caché por texto normalizado (teorías 01 y 03).
const runSearch = memoize((query) => {
  counts.searches += 1;
  const { result, ms } = measure(() => search(index, query), 1);
  lastMs = ms;
  return result;
}, 50);

let results = [];
let page = 1;

const card = (record) => {
  const item = document.createElement('li');
  const title = document.createElement('strong');
  title.textContent = record[FIELDS[0].name];
  const details = document.createElement('span');
  details.textContent = FIELDS.slice(1)
    .map(({ name, label }) => `${label}: ${record[name]}`)
    .join(' · ');
  item.append(title, details);
  return item;
};

// Cuando el centinela del final de la lista se acerca a la pantalla, se pinta la página
// siguiente (teoría 03). Dejar de observarlo y volver a observarlo provoca un aviso nuevo
// aunque siga a la vista.
const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) return;
    page += 1;
    renderPage();
  },
  { rootMargin: '200px' },
);

// Pinta la página actual al final de la lista, todas sus fichas de una vez con un fragmento.
const renderPage = () => {
  const current = paginate(results, page, APP.pageSize);
  const fragment = document.createDocumentFragment();
  for (const record of current.items) fragment.append(card(record));
  list.append(fragment);
  $('#summary').textContent = `${current.total} resultados · mostrando ${list.children.length}`;
  observer.unobserve(sentinel);
  if (current.hasMore) observer.observe(sentinel);
};

const show = (query) => {
  counts.calls += 1;
  results = runSearch(normalize(query));
  page = 1;
  list.replaceChildren();
  renderPage();
  updateMetrics();
};

// Teclear no busca en cada tecla: espera a que dejes de escribir APP.delay ms (teoría 02).
const searchLater = debounce(show, APP.delay);

$('#search').addEventListener('input', (event) => {
  counts.keys += 1;
  updateMetrics();
  searchLater(event.target.value);
});

// Enter busca ya: cancela la búsqueda pendiente para no hacerla dos veces.
$('#form').addEventListener('submit', (event) => {
  event.preventDefault();
  searchLater.cancel();
  show($('#search').value);
});

// El botón «Volver arriba» se actualiza como mucho cada 100 ms, no en cada evento de scroll.
const updateTop = throttle(() => {
  counts.updates += 1;
  $('#top').hidden = window.scrollY < 600;
  updateMetrics();
}, 100);

window.addEventListener(
  'scroll',
  () => {
    counts.scrolls += 1;
    updateTop();
  },
  { passive: true },
);

$('#top').addEventListener('click', () => window.scrollTo({ top: 0 }));

show('');
