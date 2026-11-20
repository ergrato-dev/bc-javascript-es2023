// Capa de DOM: pinta la ficha con las funciones de logic.js y responde a los botones.
// Solo tienes que cambiar el objeto entity (paso 2 del README); el resto ya funciona
// cuando logic.js está completo. El DOM se estudia a fondo en la semana 17.
import {
  formatHeader,
  formatLocation,
  itemToHtml,
  visibleItems,
  averageLevel,
  countAbove,
  buildSummary,
  nextTheme,
} from './logic.js';

// Datos de ejemplo del dominio Planetario (no asignable). Sustitúyelos por los de tu dominio.
const entity = {
  name: 'Sistema Solar Interactivo',
  code: 'EXH-001',
  description: 'Exhibición inmersiva del sistema solar con proyección en la cúpula.',
  location: { room: 'Sala Cúpula', floor: 2 },
  items: [
    { name: 'Proyección 360°', level: 95 },
    { name: 'Audio envolvente', level: 88 },
    { name: 'Maqueta de Saturno', level: 72 },
    { name: 'Simulador de gravedad', level: 91 },
    { name: 'Guía en lengua de señas', level: 64 },
  ],
};

// document.getElementById busca en la página el elemento con ese id
const byId = (id) => document.getElementById(id);

let showAll = false;
let theme = 'light';

const renderItems = () => {
  byId('itemsList').innerHTML = visibleItems(entity.items, showAll).map(itemToHtml).join('');
  byId('toggleItems').textContent = showAll ? 'Mostrar menos' : 'Mostrar todos';
};

const renderStats = () => {
  const stats = [
    { label: 'Elementos', value: entity.items.length },
    { label: 'Nivel medio', value: `${averageLevel(entity.items)}%` },
    { label: 'Nivel 90 o más', value: countAbove(entity.items, 90) },
  ];
  byId('stats').innerHTML = stats
    .map(({ label, value }) => `<div class="stat-item"><span class="stat-value">${value}</span><span class="stat-label">${label}</span></div>`)
    .join('');
};

// Muestra un aviso durante 2 segundos
const showToast = (message) => {
  const toast = byId('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
};

byId('toggleItems').addEventListener('click', () => {
  showAll = !showAll;
  renderItems();
});

byId('themeToggle').addEventListener('click', () => {
  theme = nextTheme(theme);
  document.documentElement.dataset.theme = theme; // styles.css cambia los colores con [data-theme="dark"]
  byId('themeToggle').querySelector('.theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
});

// navigator.clipboard copia texto; .then/.catch reaccionan cuando termina (promesas, semana 13)
byId('copyBtn').addEventListener('click', () => {
  navigator.clipboard
    .writeText(buildSummary(entity))
    .then(() => showToast('Resumen copiado'))
    .catch(() => showToast('No se pudo copiar'));
});

byId('header').textContent = formatHeader(entity);
byId('location').textContent = `📍 ${formatLocation(entity)}`;
byId('description').textContent = entity.description;
renderItems();
renderStats();
