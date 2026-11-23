// Interfaz del constructor de fichas. Este archivo ya está hecho: usa las funciones de
// logic.js para describir cada ficha y las convierte en nodos reales del DOM.
// Los datos (`items`, `filters`, `selectedId`) son la única fuente de verdad: cada cambio
// los modifica y llama a render() (teoría 04, sección 3).

import ITEMS, { TITLE } from './data.js';
import { h, toHtml, cardSpec, visibleItems, categoriesOf, diffKeys } from './logic.js';

// Selecciona una vez y falla con un mensaje claro si falta un elemento (teoría 01, sección 8).
const must = (selector) => {
  const element = document.querySelector(selector);
  if (!element) throw new Error(`Falta ${selector} en index.html`);
  return element;
};

const title = must('#app-title');
const summary = must('#summary');
const form = must('#card-form');
const search = must('#search');
const categorySelect = must('#category');
const renderInfo = must('#render-info');
const list = must('#card-list');
const empty = must('#empty');
const htmlTitle = must('#html-title');
const htmlOutput = must('#html-output');

let items = ITEMS.map((item) => ({ ...item }));
let selectedId = null;
const filters = { search: '', category: '' };

// Convierte una descripción de h() en nodos reales: el equivalente de toHtml para el DOM.
const mount = (spec) => {
  if (typeof spec === 'string') return document.createTextNode(spec);
  const element = document.createElement(spec.tag);
  for (const [name, value] of Object.entries(spec.props)) {
    if (name === 'dataset') Object.assign(element.dataset, value);
    // El nodo es nuevo: className pone de una vez todas las clases de la descripción.
    else if (name === 'class') element.className = value;
    else if (value === true) element.setAttribute(name, '');
    else if (value !== false && value !== null && value !== undefined) element.setAttribute(name, String(value));
  }
  element.append(...spec.children.map(mount));
  return element;
};

// --- Acciones: cambian los datos y vuelven a pintar ---

const toggleFeatured = (id) => {
  items = items.map((item) => (item.id === id ? { ...item, featured: !item.featured } : item));
  render();
};

const showHtml = (id) => {
  selectedId = id;
  render();
};

const removeItem = (id) => {
  items = items.filter((item) => item.id !== id);
  if (selectedId === id) selectedId = null;
  render();
};

// Monta la ficha y añade a sus botones los listeners (teoría 04, sección 6).
const createCard = (id, spec) => {
  const node = mount(spec);
  node.querySelector('.feature').addEventListener('click', () => toggleFeatured(id));
  node.querySelector('.show-html').addEventListener('click', () => showHtml(id));
  node.querySelector('.remove').addEventListener('click', () => removeItem(id));
  return node;
};

// --- Render por clave (teoría 04, sección 5) ---

// id → { node, html }. El html de la última descripción dice si la ficha ha cambiado.
const cards = new Map();

const renderCards = (visible) => {
  const { removed } = diffKeys([...cards.keys()], visible.map(({ id }) => id));
  for (const id of removed) {
    cards.get(id).node.remove();
    cards.delete(id);
  }

  let created = 0;
  let refocus = null;
  visible.forEach((item, index) => {
    const spec = cardSpec(item, { selected: item.id === selectedId });
    const html = toHtml(spec);
    let card = cards.get(item.id);
    if (!card || card.html !== html) {
      const node = createCard(item.id, spec);
      created += 1;
      if (card) {
        // Si el foco estaba en un botón de la ficha vieja, se devuelve al mismo botón de la nueva.
        if (card.node.contains(document.activeElement)) refocus = { node, className: document.activeElement.className };
        card.node.replaceWith(node);
      }
      card = { node, html };
      cards.set(item.id, card);
    }
    // Solo se mueve la ficha si no está ya en su sitio.
    const current = list.children[index];
    if (current !== card.node) {
      if (current) current.before(card.node);
      else list.append(card.node);
    }
  });
  refocus?.node.querySelector(`.${refocus.className}`)?.focus();

  renderInfo.textContent = `Último render: creadas ${created} · reutilizadas ${visible.length - created} · quitadas ${removed.length}`;
};

const renderCategories = () => {
  const categories = categoriesOf(items);
  if (!categories.includes(filters.category)) filters.category = '';
  const options = [h('option', { value: '' }, 'Todas'), ...categories.map((category) => h('option', { value: category }, category))];
  categorySelect.replaceChildren(...options.map(mount));
  categorySelect.value = filters.category;
};

const renderHtml = () => {
  const selected = items.find(({ id }) => id === selectedId);
  htmlTitle.textContent = selected ? `HTML de «${selected.name}»` : 'HTML de la ficha';
  htmlOutput.textContent = selected ? toHtml(cardSpec(selected)) : 'Pulsa «Ver HTML» en una ficha.';
};

const render = () => {
  renderCategories();
  const visible = visibleItems(items, filters);
  renderCards(visible);
  empty.hidden = visible.length > 0;
  const featured = items.filter(({ featured }) => featured).length;
  summary.textContent = `Mostrando ${visible.length} de ${items.length} · destacadas: ${featured}`;
  renderHtml();
};

// --- Formulario y filtros ---

form.addEventListener('submit', (event) => {
  // Sin esto, el navegador enviaría el formulario y recargaría la página (semana 18).
  event.preventDefault();
  const { name, category, detail, featured } = form.elements;
  const id = Math.max(0, ...items.map((item) => item.id)) + 1;
  items = [...items, {
    id,
    name: name.value.trim(),
    category: category.value.trim(),
    detail: detail.value.trim(),
    featured: featured.checked,
  }];
  form.reset();
  name.focus();
  render();
});

search.addEventListener('input', () => {
  filters.search = search.value;
  render();
});

categorySelect.addEventListener('change', () => {
  filters.category = categorySelect.value;
  render();
});

title.textContent = TITLE;
document.title = TITLE;
render();
