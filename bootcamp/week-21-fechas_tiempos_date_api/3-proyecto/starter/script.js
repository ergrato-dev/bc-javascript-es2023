// ============================================
// PROYECTO SEMANA 21: AGENDA INTELIGENTE
// Date API + formateo + diferencias de tiempo
// ============================================

/**
 * @typedef {Object} DomainItem
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {string} dateTime ISO string
 */

// TODO: Adapta estos datos a tu dominio asignado
const items = [
  {
    id: 1,
    name: 'Evento principal',
    description: 'Descripción del evento',
    dateTime: '2026-05-20T14:00:00'
  },
  {
    id: 2,
    name: 'Evento secundario',
    description: 'Otro evento de ejemplo',
    dateTime: '2026-05-18T09:30:00'
  }
];

const eventsContainer = document.getElementById('events-container');

/**
 * Formatea fecha/hora para mostrar al usuario
 * @param {Date} date
 * @returns {string}
 */
const formatDateTime = date => {
  // TODO: Personaliza locale/opciones según tu necesidad
  return date.toLocaleString('es-CO', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });
};

/**
 * Calcula estado temporal de un evento
 * @param {Date} eventDate
 * @returns {string}
 */
const getEventStatus = eventDate => {
  const now = new Date();
  const diffMs = eventDate.getTime() - now.getTime();

  if (diffMs < 0) {
    return 'Vencido';
  }

  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffHours < 24) {
    return `Próximo (${diffHours}h)`;
  }

  const diffDays = Math.floor(diffHours / 24);
  return `Pendiente (${diffDays} días)`;
};

/**
 * Ordena por fecha ascendente
 * @param {DomainItem[]} data
 * @returns {DomainItem[]}
 */
const sortByDate = data => {
  // TODO: Implementación alternativa opcional usando toSorted
  return [...data].sort(
    (a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
  );
};

/**
 * Renderiza un ítem de agenda
 * @param {DomainItem} item
 * @returns {string}
 */
const renderItemCard = item => {
  // TODO: Aplica destructuring más detallado si lo necesitas
  const eventDate = new Date(item.dateTime);
  const formatted = formatDateTime(eventDate);
  const status = getEventStatus(eventDate);

  return `
    <article class="event-card">
      <h3 class="event-title">${item.name}</h3>
      <p class="event-meta">${item.description}</p>
      <p class="event-meta">Fecha: ${formatted}</p>
      <p class="event-status">Estado: ${status}</p>
    </article>
  `;
};

const renderAll = () => {
  // TODO: Integrar filtros por estado si quieres extender el proyecto
  const sortedItems = sortByDate(items);
  eventsContainer.innerHTML = sortedItems.map(renderItemCard).join('');
};

renderAll();
