/**
 * 📦 Gestor de Tareas - Task Manager
 * Week 02 - Proyecto Integrador
 *
 * Completa las funciones marcadas con TODO
 */

// ============================================
// ESTADO GLOBAL
// ============================================

let tasks = [];
let editingTaskId = null;

// ============================================
// 1. PERSISTENCIA (LocalStorage)
// ============================================

/**
 * TODO: Carga las tareas desde LocalStorage
 * @returns {Array} - Array de tareas guardadas
 */
const loadTasks = () => {
  // TODO: Obtén las tareas de localStorage (key: 'tasks')
  // Si no existen, retorna array vacío
  // Recuerda usar JSON.parse()
};

/**
 * TODO: Guarda las tareas en LocalStorage
 * @param {Array} tasks - Array de tareas a guardar
 */
const saveTasks = tasks => {
  // TODO: Guarda el array de tareas en localStorage
  // Usa JSON.stringify()
};

// ============================================
// 2. CRUD - CREAR, LEER, ACTUALIZAR, ELIMINAR
// ============================================

/**
 * TODO: Crea una nueva tarea
 * @param {Object} taskData - Datos de la tarea
 * @returns {Array} - Nuevo array de tareas
 */
const createTask = taskData => {
  // TODO: Crea un objeto de tarea con:
  // - id: Date.now()
  // - title, description, priority, category (de taskData)
  // - completed: false
  // - createdAt: new Date().toISOString()
  // - completedAt: null
  // TODO: Añade la nueva tarea al array tasks usando spread
  // TODO: Guarda en localStorage
  // TODO: Retorna el nuevo array
};

/**
 * TODO: Actualiza una tarea existente
 * @param {Number} id - ID de la tarea
 * @param {Object} updates - Propiedades a actualizar
 * @returns {Array} - Nuevo array de tareas actualizado
 */
const updateTask = (id, updates) => {
  // TODO: Usa map para crear nuevo array
  // Si task.id === id, combina con spread: { ...task, ...updates }
  // Si no, retorna la tarea sin cambios
  // TODO: Guarda en localStorage
  // TODO: Retorna el nuevo array
};

/**
 * TODO: Elimina una tarea
 * @param {Number} id - ID de la tarea a eliminar
 * @returns {Array} - Nuevo array sin la tarea eliminada
 */
const deleteTask = id => {
  // TODO: Usa filter para crear nuevo array sin la tarea
  // TODO: Guarda en localStorage
  // TODO: Retorna el nuevo array
};

/**
 * TODO: Marca una tarea como completada/pendiente
 * @param {Number} id - ID de la tarea
 * @returns {Array} - Nuevo array actualizado
 */
const toggleTaskComplete = id => {
  // TODO: Usa map para actualizar la tarea
  // Invierte el valor de completed
  // Si completed cambia a true, añade completedAt: new Date().toISOString()
  // Si cambia a false, completedAt: null
  // TODO: Guarda y retorna
};

/**
 * TODO: Limpia todas las tareas completadas
 * @returns {Array} - Nuevo array sin tareas completadas
 */
const clearCompleted = () => {
  // TODO: Usa filter para mantener solo tareas NO completadas
  // TODO: Guarda y retorna
};

// ============================================
// 3. FILTROS Y BÚSQUEDA
// ============================================

/**
 * TODO: Filtra tareas por estado
 * @param {Array} tasks - Array de tareas
 * @param {String} status - 'all' | 'pending' | 'completed'
 * @returns {Array} - Tareas filtradas
 */
const filterByStatus = (tasks, status = 'all') => {
  // TODO: Según el status:
  // - 'all': retorna todas
  // - 'pending': filtra completed === false
  // - 'completed': filtra completed === true
};

/**
 * TODO: Filtra tareas por categoría
 * @param {Array} tasks - Array de tareas
 * @param {String} category - Categoría a filtrar
 * @returns {Array} - Tareas filtradas
 */
const filterByCategory = (tasks, category = 'all') => {
  // TODO: Si category === 'all', retorna todas
  // Si no, filtra por category
};

/**
 * TODO: Filtra tareas por prioridad
 * @param {Array} tasks - Array de tareas
 * @param {String} priority - Prioridad a filtrar
 * @returns {Array} - Tareas filtradas
 */
const filterByPriority = (tasks, priority = 'all') => {
  // TODO: Similar a filterByCategory
};

/**
 * TODO: Busca tareas por texto en título o descripción
 * @param {Array} tasks - Array de tareas
 * @param {String} query - Texto a buscar
 * @returns {Array} - Tareas que coinciden
 */
const searchTasks = (tasks, query) => {
  // TODO: Si query está vacío, retorna todas las tareas
  // Si no, filtra tareas donde title o description incluyan query
  // Usa .toLowerCase() para búsqueda case-insensitive
};

/**
 * TODO: Aplica todos los filtros
 * @param {Array} tasks - Array de tareas
 * @param {Object} filters - Objeto con todos los filtros
 * @returns {Array} - Tareas filtradas
 */
const applyFilters = (tasks, filters = {}) => {
  const {
    status = 'all',
    category = 'all',
    priority = 'all',
    search = '',
  } = filters;

  // TODO: Aplica los filtros en secuencia:
  // 1. Filtra por status
  // 2. Filtra por category
  // 3. Filtra por priority
  // 4. Aplica búsqueda
  // Usa encadenamiento de métodos
};

// ============================================
// 4. ESTADÍSTICAS
// ============================================

/**
 * TODO: Calcula estadísticas generales
 * @param {Array} tasks - Array de tareas
 * @returns {Object} - Objeto con estadísticas
 */
const getStats = tasks => {
  // TODO: Retorna objeto con:
  // - total: total de tareas
  // - completed: tareas completadas (filter + length)
  // - pending: tareas pendientes
  // - byCategory: objeto con conteo por categoría (usa reduce)
  // - byPriority: objeto con conteo por prioridad (usa reduce)
};

// ============================================
// 5. RENDERIZADO
// ============================================

/**
 * TODO: Renderiza una tarea individual
 * @param {Object} task - Objeto de tarea
 * @returns {String} - HTML de la tarea
 */
const renderTask = task => {
  // TODO: Usa template literals para crear el HTML
  // Incluye:
  // - Checkbox para marcar completada
  // - Título y descripción
  // - Badges de categoría y prioridad
  // - Fecha de creación
  // - Botones de editar y eliminar
  // Ejemplo de estructura:
  /*
  <div class="task-item ${task.completed ? 'completed' : ''} priority-${task.priority}" data-task-id="${task.id}">
    <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
    <div class="task-content">
      <h3>${task.title}</h3>
      ${task.description ? `<p>${task.description}</p>` : ''}
      <div class="task-meta">
        <span class="task-badge badge-category">${getCategoryEmoji(task.category)} ${task.category}</span>
        <span class="task-badge badge-priority priority-${task.priority}">${task.priority}</span>
        <span class="task-date">📅 ${formatDate(task.createdAt)}</span>
      </div>
    </div>
    <div class="task-actions">
      <button class="btn-edit" title="Editar">✏️</button>
      <button class="btn-delete" title="Eliminar">🗑️</button>
    </div>
  </div>
  */
};

/**
 * TODO: Renderiza la lista completa de tareas
 * @param {Array} tasks - Array de tareas a renderizar
 */
const renderTasks = tasks => {
  const taskList = document.getElementById('task-list');
  const emptyState = document.getElementById('empty-state');

  // TODO: Si no hay tareas, muestra el empty state
  // Si hay tareas:
  // - Usa map para convertir cada tarea a HTML
  // - Une con .join('')
  // - Asigna a taskList.innerHTML
};

/**
 * TODO: Renderiza las estadísticas
 * @param {Object} stats - Objeto con estadísticas
 */
const renderStats = stats => {
  // TODO: Actualiza los elementos del DOM:
  // - #stat-total
  // - #stat-completed
  // - #stat-pending
  // - #stats-details (estadísticas detalladas por categoría/prioridad)
};

// ============================================
// 6. UTILIDADES
// ============================================

const getCategoryEmoji = category => {
  const emojis = {
    work: '💼',
    personal: '👤',
    shopping: '🛒',
    other: '📌',
  };
  return emojis[category] || '📌';
};

const formatDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

// ============================================
// 7. EVENT HANDLERS
// ============================================

/**
 * TODO: Maneja el submit del formulario
 */
const handleFormSubmit = e => {
  e.preventDefault();

  // TODO: Obtén los valores del formulario
  const title = document.getElementById('task-title').value.trim();
  const description = document.getElementById('task-description').value.trim();
  const category = document.getElementById('task-category').value;
  const priority = document.getElementById('task-priority').value;
  const taskId = document.getElementById('task-id').value;

  // TODO: Si hay taskId (editingTaskId), actualiza la tarea
  // Si no, crea una nueva tarea

  // TODO: Resetea el formulario
  // TODO: Re-renderiza las tareas
  // TODO: Actualiza estadísticas
};

/**
 * TODO: Maneja click en checkbox de tarea
 */
const handleTaskToggle = taskId => {
  // TODO: Llama a toggleTaskComplete
  // TODO: Re-renderiza
};

/**
 * TODO: Maneja click en botón editar
 */
const handleTaskEdit = taskId => {
  // TODO: Encuentra la tarea con find()
  // TODO: Rellena el formulario con los datos de la tarea
  // TODO: Cambia el título del formulario a "✏️ Editar Tarea"
  // TODO: Cambia el botón submit a "Actualizar Tarea"
  // TODO: Muestra el botón cancelar
  // TODO: Guarda editingTaskId
};

/**
 * TODO: Maneja click en botón eliminar
 */
const handleTaskDelete = taskId => {
  // TODO: Pide confirmación con confirm()
  // TODO: Si confirma, elimina la tarea
  // TODO: Re-renderiza
};

/**
 * TODO: Maneja cambios en los filtros
 */
const handleFilterChange = () => {
  // TODO: Obtén los valores de todos los filtros
  // TODO: Aplica los filtros
  // TODO: Re-renderiza con las tareas filtradas
};

/**
 * TODO: Resetea el formulario
 */
const resetForm = () => {
  // TODO: Limpia todos los campos del formulario
  // TODO: Resetea editingTaskId a null
  // TODO: Cambia título del formulario a "➕ Nueva Tarea"
  // TODO: Cambia botón a "Crear Tarea"
  // TODO: Oculta botón cancelar
};

// ============================================
// 8. EVENT LISTENERS
// ============================================

const attachEventListeners = () => {
  // TODO: Form submit
  document
    .getElementById('task-form')
    .addEventListener('submit', handleFormSubmit);

  // TODO: Cancel button
  document.getElementById('cancel-btn').addEventListener('click', resetForm);

  // TODO: Filters
  document
    .getElementById('filter-status')
    .addEventListener('change', handleFilterChange);
  document
    .getElementById('filter-category')
    .addEventListener('change', handleFilterChange);
  document
    .getElementById('filter-priority')
    .addEventListener('change', handleFilterChange);
  document
    .getElementById('search-input')
    .addEventListener('input', handleFilterChange);

  // TODO: Clear completed
  document.getElementById('clear-completed').addEventListener('click', () => {
    if (confirm('¿Eliminar todas las tareas completadas?')) {
      tasks = clearCompleted();
      renderTasks(tasks);
      renderStats(getStats(tasks));
    }
  });

  // TODO: Task list (delegation)
  document.getElementById('task-list').addEventListener('click', e => {
    const taskItem = e.target.closest('.task-item');
    if (!taskItem) return;

    const taskId = parseInt(taskItem.dataset.taskId);

    if (e.target.classList.contains('task-checkbox')) {
      handleTaskToggle(taskId);
    } else if (e.target.classList.contains('btn-edit')) {
      handleTaskEdit(taskId);
    } else if (e.target.classList.contains('btn-delete')) {
      handleTaskDelete(taskId);
    }
  });
};

// ============================================
// 9. INICIALIZACIÓN
// ============================================

/**
 * TODO: Inicializa la aplicación
 */
const init = () => {
  // TODO: Carga las tareas desde localStorage
  // TODO: Renderiza las tareas
  // TODO: Renderiza las estadísticas
  // TODO: Adjunta los event listeners

  console.log('✅ Gestor de Tareas iniciado');
};

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
