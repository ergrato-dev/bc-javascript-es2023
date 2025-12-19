# 📦 Proyecto: Gestor de Tareas (Task Manager)

## 🎯 Objetivos del Proyecto

Construir una aplicación completa de gestión de tareas que consolide todos los conceptos aprendidos en Week-02:

- ✅ Spread & Rest operators
- ✅ Default parameters
- ✅ Array methods (map, filter, reduce, find, etc.)
- ✅ Object enhancements
- ✅ Manipulación del DOM
- ✅ LocalStorage para persistencia
- ✅ Inmutabilidad y programación funcional

---

## 📋 Descripción

Aplicación web para gestionar tareas (to-do list) con las siguientes características:

### Funcionalidades Principales

1. **Crear tareas** con título, descripción, prioridad y categoría
2. **Listar tareas** con filtros (todas, completadas, pendientes)
3. **Editar tareas** existentes
4. **Eliminar tareas**
5. **Marcar como completada/pendiente**
6. **Filtrar** por categoría y prioridad
7. **Buscar** tareas por texto
8. **Estadísticas** (total, completadas, pendientes)
9. **Persistencia** en LocalStorage

### Características Técnicas

- **Sin frameworks**: JavaScript puro (ES6+)
- **Inmutabilidad**: Nunca mutar el estado directamente
- **Array methods**: Uso intensivo de map, filter, reduce
- **Spread/Rest**: Para copiar y actualizar objetos/arrays
- **Modular**: Código organizado en funciones puras

---

## 🏗️ Estructura del Proyecto

```
gestor-tareas/
├── README.md           # Este archivo
├── index.html          # HTML principal
├── styles.css          # Estilos de la aplicación
├── starter/
│   └── script.js       # Código inicial con TODOs
└── solution/
    └── script.js       # Solución completa
```

---

## 📝 Modelo de Datos

### Task (Tarea)

```javascript
{
  id: 1,                    // Número único
  title: "Comprar pan",     // String
  description: "...",       // String (opcional)
  completed: false,         // Boolean
  priority: "high",         // "low" | "medium" | "high"
  category: "personal",     // "work" | "personal" | "shopping" | "other"
  createdAt: "2024-01-15",  // String (ISO Date)
  completedAt: null         // String | null
}
```

---

## 🎨 Interfaz de Usuario

### Secciones

1. **Header**: Título y estadísticas
2. **Form**: Formulario para crear/editar tareas
3. **Filters**: Filtros y búsqueda
4. **Task List**: Lista de tareas renderizadas
5. **Stats**: Resumen de estadísticas

### Estados Visuales

- Tareas completadas: Tachadas, con opacidad
- Prioridades: Colores diferentes (rojo/amarillo/verde)
- Categorías: Badges de colores

---

## 🔧 Funciones Principales a Implementar

### 1. Estado y Persistencia

- `loadTasks()`: Carga tareas desde LocalStorage
- `saveTasks(tasks)`: Guarda tareas en LocalStorage
- `getInitialState()`: Estado inicial

### 2. CRUD Básico

- `createTask(taskData)`: Crea nueva tarea
- `updateTask(id, updates)`: Actualiza tarea
- `deleteTask(id)`: Elimina tarea
- `toggleTaskComplete(id)`: Marca como completada/pendiente

### 3. Filtros y Búsqueda

- `filterByStatus(tasks, status)`: Filtra por estado
- `filterByCategory(tasks, category)`: Filtra por categoría
- `filterByPriority(tasks, priority)`: Filtra por prioridad
- `searchTasks(tasks, query)`: Busca por texto

### 4. Estadísticas

- `getStats(tasks)`: Calcula estadísticas
- `getTasksByCategory(tasks)`: Agrupa por categoría

### 5. Renderizado

- `renderTasks(tasks)`: Renderiza lista de tareas
- `renderStats(stats)`: Renderiza estadísticas
- `renderTask(task)`: Renderiza una tarea individual

---

## ✅ Criterios de Evaluación

### Funcionalidad (40 puntos)

- [ ] Crear tareas con todos los campos (10pts)
- [ ] Editar tareas existentes (8pts)
- [ ] Eliminar tareas (5pts)
- [ ] Marcar como completada (5pts)
- [ ] Filtros funcionales (7pts)
- [ ] Búsqueda funcional (5pts)

### Código (30 puntos)

- [ ] Uso correcto de spread/rest (8pts)
- [ ] Array methods apropiados (10pts)
- [ ] Inmutabilidad mantenida (7pts)
- [ ] Código limpio y organizado (5pts)

### Persistencia y UI (30 puntos)

- [ ] LocalStorage funcionando (10pts)
- [ ] Estadísticas correctas (10pts)
- [ ] Interfaz responsiva y usable (10pts)

**Total: 100 puntos**
**Mínimo para aprobar: 70 puntos**

---

## 🚀 Cómo Empezar

### 1. Estructura HTML Básica

El HTML ya está preparado en `index.html` con:
- Formulario de creación
- Controles de filtros
- Contenedor para tareas
- Sección de estadísticas

### 2. Completar JavaScript

Abre `starter/script.js` y completa las funciones marcadas con `// TODO:`.

### 3. Orden Recomendado

1. Implementar `createTask()` y `renderTask()`
2. Conectar el formulario para crear tareas
3. Implementar `loadTasks()` y `saveTasks()`
4. Añadir funcionalidad de completar/eliminar
5. Implementar filtros y búsqueda
6. Calcular y mostrar estadísticas
7. Añadir edición de tareas

### 4. Testing Manual

Prueba cada funcionalidad:
- Crear varias tareas
- Completar algunas
- Filtrar por diferentes criterios
- Buscar tareas
- Recargar la página (persistencia)
- Editar tareas existentes

---

## 💡 Pistas y Consejos

### Inmutabilidad

```javascript
// ❌ MAL: Mutar array directamente
tasks.push(newTask);

// ✅ BIEN: Crear nuevo array
const newTasks = [...tasks, newTask];
```

### Actualizar Elemento

```javascript
// Usa map para actualizar
const updated = tasks.map(task =>
  task.id === id ? { ...task, completed: !task.completed } : task
);
```

### Eliminar Elemento

```javascript
// Usa filter para eliminar
const filtered = tasks.filter(task => task.id !== id);
```

### LocalStorage

```javascript
// Guardar
localStorage.setItem('tasks', JSON.stringify(tasks));

// Cargar
const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
```

### Generar ID Único

```javascript
const id = Date.now(); // Simple y efectivo para este proyecto
```

---

## 🎓 Conceptos Aplicados

### Spread Operator
- Copiar arrays: `[...tasks]`
- Copiar objetos: `{ ...task }`
- Combinar: `[...arr1, ...arr2]`

### Array Methods
- `map()`: Transformar tareas para renderizar
- `filter()`: Filtrar por estado, categoría, búsqueda
- `reduce()`: Calcular estadísticas
- `find()`: Encontrar tarea por ID

### Object Enhancements
- Property shorthand: `{ id, title, completed }`
- Computed properties: `{ [key]: value }`
- Object.entries() para iterar

### Default Parameters
- `filterByStatus(tasks, status = 'all')`
- `createTask({ priority = 'medium' } = {})`

---

## 📚 Recursos Adicionales

- [MDN - LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [MDN - Array Methods](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info - Array methods](https://javascript.info/array-methods)

---

## 🏆 Extensiones Opcionales (Bonus)

Si terminas antes de tiempo:

1. **Drag & Drop**: Reordenar tareas arrastrando
2. **Fechas límite**: Añadir deadline a las tareas
3. **Subtareas**: Tareas pueden tener subtareas
4. **Exportar**: Botón para exportar a JSON
5. **Temas**: Dark/Light mode
6. **Notificaciones**: Tareas próximas a vencer

---

## ⏱️ Tiempo Estimado

- **Implementación básica**: 1.5 horas
- **Filtros y búsqueda**: 30 minutos
- **Estadísticas**: 20 minutos
- **Refinamiento y testing**: 20 minutos

**Total: ~2.5 horas**

---

_Proyecto Week-02 - JavaScript Moderno Bootcamp_
