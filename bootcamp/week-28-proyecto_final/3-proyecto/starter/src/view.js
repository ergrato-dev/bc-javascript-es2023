// Los textos y el HTML de la página, sin tocar el DOM. No hace falta editarlo: main.js lo usa.
const numbers = new Intl.NumberFormat('es-ES');

// Convierte un texto en HTML seguro (semana 17).
export const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const plural = (count, word) => `${count} ${word}${count === 1 ? '' : 's'}`;

const formatValue = (value, type) => (type === 'number' ? numbers.format(value) : value);

const isShown = (value) => value !== null && value !== undefined && value !== '';

// El HTML de una ficha: el primer campo es el título y los demás, filas de una lista (sin los vacíos).
export const cardHtml = (item, fields) => {
  const [title, ...rest] = fields;
  const rows = rest
    .filter(({ name }) => isShown(item[name]))
    .map(
      ({ name, label, type }) =>
        `<dt>${escapeHtml(label)}</dt><dd>${escapeHtml(formatValue(item[name], type))}</dd>`,
    )
    .join('');
  return [
    `<article class="card" data-id="${item.id}"><h3>${escapeHtml(item[title.name])}</h3><dl>${rows}</dl>`,
    '<button type="button" data-action="edit">Editar</button>',
    '<button type="button" data-action="delete">Borrar</button></article>',
  ].join('');
};

const countText = ({ total, page, pages }) =>
  pages === 1 ? plural(total, 'ficha') : `${plural(total, 'ficha')} · página ${page} de ${pages}`;

const emptyText = (query) =>
  query.trim() === '' ? 'Todavía no hay fichas' : `Ninguna ficha coincide con «${query.trim()}»`;

const readyText = (state, view) => (view.total > 0 ? countText(view) : emptyText(state.query));

const STATUS_TEXTS = {
  idle: () => '',
  loading: (state) => (state.items.length > 0 ? 'Actualizando…' : 'Cargando…'),
  ready: readyText,
  error: (state) => state.error,
};

// La línea de estado: `view` es lo que devuelve selectPage.
export const statusText = (state, view) => STATUS_TEXTS[state.status](state, view);

// El texto de un botón de ordenar: la flecha dice el orden actual de ese campo.
export const sortLabel = ({ name, label }, sort) => {
  if (sort.by !== name) return label;
  return `${label} ${sort.desc ? '↓' : '↑'}`;
};

const statText = ({ label }, { count, min, max, average }) =>
  count === 0
    ? `${label}: sin datos`
    : `${label}: de ${numbers.format(min)} a ${numbers.format(max)} (media ${numbers.format(average)})`;

// El resumen del catálogo: lo que devuelve summarize, en una línea.
export const summaryText = ({ total, stats }, fields) =>
  [
    plural(total, 'ficha'),
    ...fields
      .filter(({ name }) => name in stats)
      .map((field) => statText(field, stats[field.name])),
  ].join(' · ');
