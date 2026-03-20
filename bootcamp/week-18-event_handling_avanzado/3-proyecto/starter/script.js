// ============================================
// PROYECTO: Sistema de Notificaciones Interactivas
// ============================================

const dom = {
  form: document.querySelector('#notification-form'),
  title: document.querySelector('#title'),
  type: document.querySelector('#type'),
  list: document.querySelector('#notification-list'),
  total: document.querySelector('#metric-total'),
  read: document.querySelector('#metric-read'),
  pending: document.querySelector('#metric-pending')
};

// TODO: Ajusta estos datos a tu dominio asignado.
let notifications = [
  { id: 1, title: 'Nueva solicitud registrada', type: 'info', read: false },
  { id: 2, title: 'Inventario actualizado', type: 'success', read: true }
];

const createNotificationElement = notification => {
  const { id, title, type, read } = notification;

  return `
    <li class="notification" data-id="${id}" data-read="${read}">
      <div class="meta">
        <strong>${title}</strong>
        <span class="badge ${type}">${type.toUpperCase()}</span>
      </div>
      <div class="actions">
        <button data-action="toggle-read" type="button">
          ${read ? 'Marcar pendiente' : 'Marcar leída'}
        </button>
        <button data-action="close" type="button">Cerrar</button>
      </div>
    </li>
  `;
};

const renderNotifications = () => {
  dom.list.innerHTML = notifications.map(createNotificationElement).join('');
};

const updateMetrics = () => {
  const total = notifications.length;
  const read = notifications.filter(item => item.read).length;
  const pending = total - read;

  dom.total.textContent = String(total);
  dom.read.textContent = String(read);
  dom.pending.textContent = String(pending);
};

const emitDomainEvent = (name, detail) => {
  document.dispatchEvent(new CustomEvent(name, { detail }));
};

const handleFormSubmit = event => {
  event.preventDefault();

  const title = dom.title.value.trim();
  const type = dom.type.value;

  if (!title) return;

  const newNotification = {
    id: Date.now(),
    title,
    type,
    read: false
  };

  notifications = [newNotification, ...notifications];
  emitDomainEvent('notification:created', { notification: newNotification });

  dom.form.reset();
  renderNotifications();
  updateMetrics();
};

const handleListClick = event => {
  const actionButton = event.target.closest('button[data-action]');
  if (!actionButton) return;

  const listItem = actionButton.closest('.notification');
  if (!listItem) return;

  const id = Number(listItem.dataset.id);
  const action = actionButton.dataset.action;

  if (action === 'close') {
    notifications = notifications.filter(item => item.id !== id);
    emitDomainEvent('notification:closed', { id });
  }

  if (action === 'toggle-read') {
    notifications = notifications.map(item =>
      item.id === id ? { ...item, read: !item.read } : item
    );
    emitDomainEvent('notification:toggled', { id });
  }

  renderNotifications();
  updateMetrics();
};

const setupDomainListeners = () => {
  document.addEventListener('notification:created', event => {
    console.log('Evento de dominio:', event.type, event.detail);
  });

  document.addEventListener('notification:closed', event => {
    console.log('Evento de dominio:', event.type, event.detail);
  });

  document.addEventListener('notification:toggled', event => {
    console.log('Evento de dominio:', event.type, event.detail);
  });
};

const init = () => {
  dom.form.addEventListener('submit', handleFormSubmit);
  dom.list.addEventListener('click', handleListClick);
  setupDomainListeners();
  renderNotifications();
  updateMetrics();
};

init();
