// ============================================
// PROYECTO WEEK 16: Panel CRUD REST
// ============================================

const CONFIG = {
  baseUrl: 'https://jsonplaceholder.typicode.com',
  endpoint: '/posts',
  token: 'demo-token-week16'
};

const state = {
  items: [],
  status: 'idle',
  editingId: null
};

const elements = {
  statusMessage: document.getElementById('statusMessage'),
  btnLoad: document.getElementById('btnLoad'),
  btnCreate: document.getElementById('btnCreate'),
  itemsContainer: document.getElementById('itemsContainer'),
  formTitle: document.getElementById('formTitle'),
  itemForm: document.getElementById('itemForm'),
  itemId: document.getElementById('itemId'),
  itemName: document.getElementById('itemName'),
  itemDescription: document.getElementById('itemDescription'),
  btnCancel: document.getElementById('btnCancel')
};

// ============================================
// PENDIENTE 1: Implementar cliente API reusable
// ============================================

const apiRequest = async (endpoint, options = {}) => {
  // PENDIENTE:
  // 1. Ejecutar fetch con URL completa
  // 2. Configurar headers por defecto:
  //    - Accept: application/json
  //    - Content-Type: application/json
  //    - Authorization: Bearer token
  // 3. Verificar response.ok
  // 4. Retornar JSON o null para status 204

  return null;
};

// ============================================
// PENDIENTE 2: Implementar operaciones CRUD
// ============================================

const loadItems = async () => {
  // PENDIENTE:
  // 1. setStatus('loading', 'Cargando...')
  // 2. GET /posts?_limit=8
  // 3. Guardar en state.items
  // 4. renderItems()
  // 5. setStatus('success', 'Datos cargados')
  // 6. Manejar errores con catch
};

const createItem = async itemData => {
  // PENDIENTE:
  // 1. POST a CONFIG.endpoint
  // 2. Actualizar listado local
  // 3. Limpiar formulario
  // 4. Cambiar estado
};

const updateItem = async (id, itemData) => {
  // PENDIENTE:
  // 1. PATCH o PUT a /posts/:id
  // 2. Actualizar item en state.items
  // 3. Salir de modo edición
  // 4. renderItems()
};

const deleteItem = async id => {
  // PENDIENTE:
  // 1. DELETE /posts/:id
  // 2. Eliminar item de state.items
  // 3. renderItems()
  // 4. setStatus success/error
};

// ============================================
// PENDIENTE 3: Render y estado
// ============================================

const setStatus = (status, message) => {
  state.status = status;
  elements.statusMessage.textContent = `Estado: ${message}`;

  elements.statusMessage.classList.remove('status-success', 'status-error');
  if (status === 'success') elements.statusMessage.classList.add('status-success');
  if (status === 'error') elements.statusMessage.classList.add('status-error');
};

const renderItems = () => {
  // PENDIENTE:
  // 1. Si no hay datos, renderizar placeholder
  // 2. Renderizar tarjetas con botones Editar/Eliminar
  // 3. Conectar eventos a handleEdit y handleDelete
};

const resetForm = () => {
  state.editingId = null;
  elements.formTitle.textContent = 'Crear recurso';
  elements.itemId.value = '';
  elements.itemName.value = '';
  elements.itemDescription.value = '';
};

// ============================================
// PENDIENTE 4: Eventos de interfaz
// ============================================

const handleEdit = id => {
  // PENDIENTE:
  // 1. Buscar item por id
  // 2. Cargar valores en formulario
  // 3. Cambiar título a "Editar recurso"
  // 4. Guardar editingId en state
};

const handleDelete = async id => {
  // PENDIENTE:
  // 1. Confirmar con window.confirm
  // 2. Ejecutar deleteItem(id)
};

elements.btnLoad.addEventListener('click', () => {
  // PENDIENTE: Invocar loadItems()
});

elements.btnCreate.addEventListener('click', () => {
  resetForm();
  elements.itemName.focus();
});

elements.itemForm.addEventListener('submit', async event => {
  event.preventDefault();

  const payload = {
    title: elements.itemName.value.trim(),
    body: elements.itemDescription.value.trim(),
    userId: 1
  };

  if (!payload.title || !payload.body) {
    setStatus('error', 'Nombre y descripción son obligatorios');
  }

  // PENDIENTE:
  // Si state.editingId existe -> updateItem
  // Si no existe -> createItem
});

elements.btnCancel.addEventListener('click', resetForm);

// Exponer funciones para botones inline si las usas en render
globalThis.handleEdit = handleEdit;
globalThis.handleDelete = handleDelete;
