// ============================================
// PROYECTO: Explorador de API REST
// Adapta este proyecto a tu dominio asignado
// ============================================

// ============================================
// CONFIGURACIÓN
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta estas constantes a tu dominio asignado.
// Ejemplos:
// - Biblioteca: { name: 'Libros', endpoint: '/posts' }
// - Farmacia: { name: 'Medicamentos', endpoint: '/posts' }
// - Gimnasio: { name: 'Rutinas', endpoint: '/posts' }
// - Restaurante: { name: 'Platillos', endpoint: '/posts' }

const CONFIG = {
  baseUrl: 'https://jsonplaceholder.typicode.com',
  itemsPerPage: 5,
  timeout: 10000 // milisegundos
};

// TODO: Adapta el nombre de la entidad a tu dominio
const ENTITY = {
  name: 'Registros', // Ej: 'Eventos', 'Libros', 'Medicamentos'
  endpoint: '/posts',
  icon: '📋'
};

// ============================================
// ESTADO DE LA APLICACIÓN
// ============================================

const state = {
  items: [],
  currentPage: 1,
  totalItems: 0,
  isLoading: false,
  editingId: null,
  currentController: null // Para cancelar peticiones
};

// ============================================
// ELEMENTOS DEL DOM
// ============================================

const elements = {
  // Tabs
  tabs: document.querySelectorAll('.tab'),
  sectionList: document.getElementById('sectionList'),
  sectionCreate: document.getElementById('sectionCreate'),

  // Listado
  cardsContainer: document.getElementById('cardsContainer'),
  searchInput: document.getElementById('searchInput'),
  btnRefresh: document.getElementById('btnRefresh'),

  // Paginación
  btnPrev: document.getElementById('btnPrev'),
  btnNext: document.getElementById('btnNext'),
  pageInfo: document.getElementById('pageInfo'),

  // Formulario
  formTitle: document.getElementById('formTitle'),
  itemForm: document.getElementById('itemForm'),
  formId: document.getElementById('formId'),
  formName: document.getElementById('formName'),
  formDescription: document.getElementById('formDescription'),
  btnSubmit: document.getElementById('btnSubmit'),
  btnCancel: document.getElementById('btnCancel'),

  // Estado
  statusMessage: document.getElementById('statusMessage'),
  responseTime: document.getElementById('responseTime'),

  // Modal
  confirmModal: document.getElementById('confirmModal'),
  confirmMessage: document.getElementById('confirmMessage'),
  btnConfirmYes: document.getElementById('btnConfirmYes'),
  btnConfirmNo: document.getElementById('btnConfirmNo')
};

// ============================================
// COMPONENTE: API Client
// Wrapper de Fetch con timeout y manejo de errores
// ============================================

// TODO: Implementar el cliente API con las siguientes características:
// 1. Usar AbortController para timeout configurable
// 2. Verificar response.ok en cada petición
// 3. Configurar headers por defecto (Accept, Content-Type)
// 4. Retornar datos parseados como JSON
// 5. Manejar errores de red y HTTP

/**
 * Realiza una petición HTTP con timeout y manejo de errores
 * @param {string} endpoint - Ruta relativa de la API
 * @param {Object} options - Opciones de fetch
 * @returns {Promise<Object>} Datos de la respuesta
 */
const apiRequest = async (endpoint, options = {}) => {
  // TODO: Crear AbortController y configurar timeout
  // const controller = new AbortController();
  // const timeoutId = setTimeout(() => controller.abort(), CONFIG.timeout);

  // TODO: Cancelar petición anterior si existe
  // if (state.currentController) {
  //   state.currentController.abort();
  // }
  // state.currentController = controller;

  // TODO: Medir tiempo de respuesta
  // const startTime = performance.now();

  // TODO: Implementar try/catch
  // try {
  //   const response = await fetch(`${CONFIG.baseUrl}${endpoint}`, {
  //     ...options,
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       ...options.headers
  //     },
  //     signal: controller.signal
  //   });
  //
  //   clearTimeout(timeoutId);
  //
  //   // TODO: Verificar response.ok
  //   if (!response.ok) {
  //     throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
  //   }
  //
  //   const data = await response.json();
  //
  //   // TODO: Calcular y mostrar tiempo de respuesta
  //   const elapsed = Math.round(performance.now() - startTime);
  //   updateResponseTime(elapsed);
  //
  //   return data;
  //
  // } catch (error) {
  //   clearTimeout(timeoutId);
  //
  //   if (error.name === 'AbortError') {
  //     throw new Error('La petición fue cancelada o excedió el tiempo límite');
  //   }
  //   throw error;
  //
  // } finally {
  //   state.currentController = null;
  // }

  return null;
};

// ============================================
// COMPONENTE: Operaciones CRUD
// ============================================

// --- GET: Obtener registros ---
// TODO: Implementar función para obtener registros con paginación
// 1. Usar apiRequest con endpoint + parámetros de paginación
// 2. Actualizar state.items con los datos
// 3. Renderizar la lista de tarjetas

const fetchItems = async (page = 1) => {
  // TODO: Implementar
  // try {
  //   updateStatus('loading', `Cargando ${ENTITY.name}...`);
  //   state.isLoading = true;
  //
  //   const data = await apiRequest(
  //     `${ENTITY.endpoint}?_page=${page}&_limit=${CONFIG.itemsPerPage}`
  //   );
  //
  //   state.items = data;
  //   state.currentPage = page;
  //   // JSONPlaceholder tiene 100 posts por defecto
  //   state.totalItems = 100;
  //
  //   renderCards(state.items);
  //   updatePagination();
  //   updateStatus('success', `${data.length} ${ENTITY.name} cargados`);
  //
  // } catch (error) {
  //   updateStatus('error', error.message);
  //   renderError(error.message);
  //
  // } finally {
  //   state.isLoading = false;
  // }
};

// --- POST: Crear registro ---
// TODO: Implementar función para crear un nuevo registro
// 1. Usar apiRequest con método POST y body
// 2. Mostrar mensaje de éxito
// 3. Limpiar formulario y volver al listado

const createItem = async (itemData) => {
  // TODO: Implementar
  // try {
  //   updateStatus('loading', 'Creando registro...');
  //   disableForm(true);
  //
  //   const newItem = await apiRequest(ENTITY.endpoint, {
  //     method: 'POST',
  //     body: JSON.stringify(itemData)
  //   });
  //
  //   console.log('Registro creado:', newItem);
  //   updateStatus('success', `${ENTITY.name} creado con ID: ${newItem.id}`);
  //
  //   resetForm();
  //   switchTab('list');
  //   await fetchItems(state.currentPage);
  //
  // } catch (error) {
  //   updateStatus('error', `Error al crear: ${error.message}`);
  //
  // } finally {
  //   disableForm(false);
  // }
};

// --- PUT: Actualizar registro ---
// TODO: Implementar función para actualizar un registro existente
// 1. Usar apiRequest con método PUT y body
// 2. Mostrar mensaje de éxito
// 3. Limpiar formulario y volver al listado

const updateItem = async (id, itemData) => {
  // TODO: Implementar
  // try {
  //   updateStatus('loading', 'Actualizando registro...');
  //   disableForm(true);
  //
  //   const updated = await apiRequest(`${ENTITY.endpoint}/${id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify(itemData)
  //   });
  //
  //   console.log('Registro actualizado:', updated);
  //   updateStatus('success', `${ENTITY.name} #${id} actualizado`);
  //
  //   resetForm();
  //   switchTab('list');
  //   await fetchItems(state.currentPage);
  //
  // } catch (error) {
  //   updateStatus('error', `Error al actualizar: ${error.message}`);
  //
  // } finally {
  //   disableForm(false);
  // }
};

// --- DELETE: Eliminar registro ---
// TODO: Implementar función para eliminar un registro
// 1. Usar apiRequest con método DELETE
// 2. Remover el elemento del DOM
// 3. Mostrar mensaje de confirmación

const deleteItem = async id => {
  // TODO: Implementar
  // try {
  //   updateStatus('loading', 'Eliminando registro...');
  //
  //   await apiRequest(`${ENTITY.endpoint}/${id}`, {
  //     method: 'DELETE'
  //   });
  //
  //   // Remover del estado local
  //   state.items = state.items.filter(item => item.id !== id);
  //   renderCards(state.items);
  //   updateStatus('success', `${ENTITY.name} #${id} eliminado`);
  //
  // } catch (error) {
  //   updateStatus('error', `Error al eliminar: ${error.message}`);
  // }
};

// ============================================
// COMPONENTE: Renderizado
// ============================================

// TODO: Implementar la función de renderizado de tarjetas
// Debe crear HTML con: título, descripción, botones de editar/eliminar

/**
 * Renderiza las tarjetas de registros en el contenedor
 * @param {Array} items - Array de registros
 */
const renderCards = items => {
  // TODO: Implementar
  // if (items.length === 0) {
  //   elements.cardsContainer.innerHTML =
  //     '<p class="placeholder">No se encontraron registros</p>';
  //   return;
  // }
  //
  // elements.cardsContainer.innerHTML = items
  //   .map(item => `
  //     <div class="card" data-id="${item.id}">
  //       <div class="card__header">
  //         <h3 class="card__title">${item.title}</h3>
  //         <span class="card__id">#${item.id}</span>
  //       </div>
  //       <p class="card__body">${item.body}</p>
  //       <div class="card__actions">
  //         <button class="btn btn--small" onclick="handleEdit(${item.id})">
  //           ✏️ Editar
  //         </button>
  //         <button class="btn btn--small btn--danger" onclick="handleDelete(${item.id})">
  //           🗑️ Eliminar
  //         </button>
  //       </div>
  //     </div>
  //   `)
  //   .join('');
};

/**
 * Renderiza un mensaje de error en el contenedor
 * @param {string} message - Mensaje de error
 */
const renderError = message => {
  elements.cardsContainer.innerHTML = `
    <div class="error-message">
      <p>❌ ${message}</p>
      <button class="btn btn--secondary" onclick="fetchItems(${state.currentPage})">
        🔄 Reintentar
      </button>
    </div>
  `;
};

// ============================================
// COMPONENTE: UI Helpers
// ============================================

// TODO: Implementar las funciones auxiliares de UI

/**
 * Actualiza la barra de estado
 * @param {'idle'|'loading'|'success'|'error'} type - Tipo de estado
 * @param {string} message - Mensaje a mostrar
 */
const updateStatus = (type, message) => {
  // TODO: Implementar
  // const dot = elements.statusMessage.querySelector('.status-bar__dot');
  // dot.className = `status-bar__dot status-bar__dot--${type}`;
  // elements.statusMessage.innerHTML =
  //   `<span class="status-bar__dot status-bar__dot--${type}"></span> ${message}`;
};

/**
 * Muestra el tiempo de respuesta
 * @param {number} ms - Milisegundos
 */
const updateResponseTime = ms => {
  // TODO: Implementar
  // elements.responseTime.textContent = `⏱️ ${ms}ms`;
};

/**
 * Actualiza los controles de paginación
 */
const updatePagination = () => {
  // TODO: Implementar
  // const totalPages = Math.ceil(state.totalItems / CONFIG.itemsPerPage);
  // elements.pageInfo.textContent = `Página ${state.currentPage} de ${totalPages}`;
  // elements.btnPrev.disabled = state.currentPage <= 1;
  // elements.btnNext.disabled = state.currentPage >= totalPages;
};

/**
 * Cambia entre tabs (secciones)
 * @param {'list'|'create'} section - Sección a mostrar
 */
const switchTab = section => {
  // TODO: Implementar
  // elements.tabs.forEach(tab => {
  //   tab.classList.toggle('tab--active', tab.dataset.section === section);
  // });
  // elements.sectionList.classList.toggle('section--active', section === 'list');
  // elements.sectionCreate.classList.toggle('section--active', section === 'create');
};

/**
 * Habilita o deshabilita el formulario
 * @param {boolean} disabled - Estado
 */
const disableForm = disabled => {
  // TODO: Implementar
  // elements.formName.disabled = disabled;
  // elements.formDescription.disabled = disabled;
  // elements.btnSubmit.disabled = disabled;
  // if (disabled) {
  //   elements.btnSubmit.classList.add('btn--loading');
  //   elements.btnSubmit.innerHTML = '<span class="loading-spinner"></span> Guardando...';
  // } else {
  //   elements.btnSubmit.classList.remove('btn--loading');
  //   elements.btnSubmit.innerHTML = '<span class="btn__icon">💾</span> Guardar';
  // }
};

/**
 * Limpia y reinicia el formulario
 */
const resetForm = () => {
  // TODO: Implementar
  // elements.itemForm.reset();
  // elements.formId.value = '';
  // state.editingId = null;
  // elements.formTitle.textContent = `➕ Crear ${ENTITY.name}`;
  // elements.btnSubmit.innerHTML = '<span class="btn__icon">💾</span> Guardar';
};

// ============================================
// COMPONENTE: Event Handlers
// ============================================

// TODO: Implementar los manejadores de eventos

/**
 * Maneja la edición de un registro
 * @param {number} id - ID del registro a editar
 */
const handleEdit = async id => {
  // TODO: Implementar
  // try {
  //   updateStatus('loading', 'Cargando datos para edición...');
  //   const item = await apiRequest(`${ENTITY.endpoint}/${id}`);
  //
  //   elements.formId.value = item.id;
  //   elements.formName.value = item.title;
  //   elements.formDescription.value = item.body;
  //   state.editingId = id;
  //
  //   elements.formTitle.textContent = `✏️ Editar ${ENTITY.name} #${id}`;
  //   switchTab('create');
  //   updateStatus('idle', 'Editando registro');
  //
  // } catch (error) {
  //   updateStatus('error', error.message);
  // }
};

// Hacer handleEdit y handleDelete accesibles globalmente (para onclick inline)
window.handleEdit = handleEdit;

/**
 * Maneja la eliminación de un registro
 * @param {number} id - ID del registro a eliminar
 */
const handleDelete = id => {
  // TODO: Implementar
  // elements.confirmMessage.textContent =
  //   `¿Estás seguro de que deseas eliminar ${ENTITY.name} #${id}?`;
  // elements.confirmModal.hidden = false;
  //
  // // Configurar botón de confirmación
  // elements.btnConfirmYes.onclick = async () => {
  //   elements.confirmModal.hidden = true;
  //   await deleteItem(id);
  // };
};

window.handleDelete = handleDelete;

// ============================================
// COMPONENTE: Event Listeners
// ============================================

// TODO: Configurar todos los event listeners

// --- Tabs ---
// elements.tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     switchTab(tab.dataset.section);
//     if (tab.dataset.section === 'create' && !state.editingId) {
//       resetForm();
//     }
//   });
// });

// --- Formulario ---
// elements.itemForm.addEventListener('submit', async event => {
//   event.preventDefault();
//
//   const itemData = {
//     title: elements.formName.value.trim(),
//     body: elements.formDescription.value.trim(),
//     userId: 1
//   };
//
//   // Validación básica
//   if (!itemData.title || !itemData.body) {
//     updateStatus('error', 'Todos los campos son obligatorios');
//     return;
//   }
//
//   // Crear o actualizar según el estado
//   if (state.editingId) {
//     await updateItem(state.editingId, itemData);
//   } else {
//     await createItem(itemData);
//   }
// });

// --- Cancelar formulario ---
// elements.btnCancel.addEventListener('click', () => {
//   resetForm();
//   switchTab('list');
// });

// --- Refrescar ---
// elements.btnRefresh.addEventListener('click', () => {
//   fetchItems(state.currentPage);
// });

// --- Paginación ---
// elements.btnPrev.addEventListener('click', () => {
//   if (state.currentPage > 1) {
//     fetchItems(state.currentPage - 1);
//   }
// });

// elements.btnNext.addEventListener('click', () => {
//   fetchItems(state.currentPage + 1);
// });

// --- Búsqueda (con debounce) ---
// let searchTimeout;
// elements.searchInput.addEventListener('input', event => {
//   clearTimeout(searchTimeout);
//   searchTimeout = setTimeout(async () => {
//     const query = event.target.value.trim().toLowerCase();
//     if (query.length === 0) {
//       await fetchItems(1);
//       return;
//     }
//     // Filtrar localmente (JSONPlaceholder no soporta búsqueda)
//     const filtered = state.items.filter(
//       item =>
//         item.title.toLowerCase().includes(query) ||
//         item.body.toLowerCase().includes(query)
//     );
//     renderCards(filtered);
//   }, 300);
// });

// --- Modal: Cancelar ---
// elements.btnConfirmNo.addEventListener('click', () => {
//   elements.confirmModal.hidden = true;
// });

// --- Cerrar modal con backdrop ---
// elements.confirmModal.querySelector('.modal__backdrop')
//   .addEventListener('click', () => {
//     elements.confirmModal.hidden = true;
//   });

// ============================================
// INICIALIZACIÓN
// ============================================

// TODO: Cargar datos iniciales al abrir la página
// fetchItems(1);
