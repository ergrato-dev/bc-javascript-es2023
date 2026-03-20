// ============================================
// PROYECTO WEEK 17: Constructor de UI Dinámico
// ============================================

const state = {
  items: [
    { id: 1, title: 'Elemento inicial', description: 'Descripción inicial', featured: false }
  ],
  status: 'idle'
};

const elements = {
  statusMessage: document.getElementById('statusMessage'),
  itemForm: document.getElementById('itemForm'),
  itemTitle: document.getElementById('itemTitle'),
  itemDescription: document.getElementById('itemDescription'),
  itemsContainer: document.getElementById('itemsContainer'),
  itemTemplate: document.getElementById('itemTemplate')
};

// ============================================
// PENDIENTE 1: Estado visual de interfaz
// ============================================

const setStatus = (status, message) => {
  state.status = status;
  elements.statusMessage.textContent = `Estado: ${message}`;

  elements.statusMessage.classList.remove('status-success', 'status-error');
  if (status === 'success') elements.statusMessage.classList.add('status-success');
  if (status === 'error') elements.statusMessage.classList.add('status-error');
};

// ============================================
// PENDIENTE 2: Render con template
// ============================================

const renderItems = () => {
  // PENDIENTE:
  // 1. Limpiar contenedor
  // 2. Iterar state.items
  // 3. Clonar template
  // 4. Mapear title y description con textContent
  // 5. Aplicar clase is-featured si corresponde
  // 6. Conectar acciones destacar/eliminar
};

// ============================================
// PENDIENTE 3: Operaciones de estado
// ============================================

const addItem = itemData => {
  // PENDIENTE:
  // 1. Crear objeto con id único
  // 2. Push a state.items
  // 3. setStatus success
  // 4. renderItems
};

const removeItem = itemId => {
  // PENDIENTE:
  // 1. Filtrar state.items
  // 2. setStatus success
  // 3. renderItems
};

const toggleFeatured = itemId => {
  // PENDIENTE:
  // 1. Ubicar item por id
  // 2. Alternar propiedad featured
  // 3. renderItems
};

// ============================================
// PENDIENTE 4: Eventos de formulario
// ============================================

elements.itemForm.addEventListener('submit', event => {
  event.preventDefault();

  const payload = {
    title: elements.itemTitle.value.trim(),
    description: elements.itemDescription.value.trim()
  };

  if (!payload.title || !payload.description) {
    setStatus('error', 'Título y descripción son obligatorios');
    return;
  }

  // PENDIENTE: llamar addItem(payload)

  elements.itemForm.reset();
});

// Render inicial
renderItems();
