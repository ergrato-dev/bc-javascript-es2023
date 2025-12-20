# 📊 Proyecto Integrador: Dashboard de Análisis de Datos

## 📌 Descripción

En este proyecto integrador, construirás un **Dashboard de análisis de datos** completo que demuestra el dominio de técnicas avanzadas de arrays. La aplicación permitirá cargar, filtrar, ordenar, buscar y analizar datos de forma interactiva.

## 🎯 Objetivos del Proyecto

- ✅ Aplicar todos los conceptos de la semana en un proyecto real
- ✅ Manipular datos complejos con arrays avanzados
- ✅ Crear interfaz interactiva y responsive
- ✅ Implementar búsqueda, filtrado y paginación
- ✅ Escribir código limpio, modular y documentado

## 🏗️ Estructura del Proyecto

```
3-proyecto/
├── README.md                 # Esta guía
├── starter/                  # Código inicial
│   ├── index.html           # Estructura HTML
│   ├── styles.css           # Estilos
│   ├── data.js              # Datos de ejemplo
│   ├── utils.js             # Funciones utilitarias
│   └── app.js               # Lógica principal
└── solution/                # Solución completa
    ├── index.html
    ├── styles.css
    ├── data.js
    ├── utils.js
    └── app.js
```

## 📋 Requisitos Funcionales

### 1. Carga de Datos
- [ ] Cargar datos de un array (simulado o JSON)
- [ ] Parsear y validar datos
- [ ] Mostrar cantidad total de registros

### 2. Visualización de Datos
- [ ] Tabla con todos los datos
- [ ] Columnas: ID, Nombre, Categoría, Precio, Stock, Fecha
- [ ] Formateo adecuado de moneda y fechas

### 3. Filtrado
- [ ] Filtrar por categoría (dropdown)
- [ ] Filtrar por rango de precio (min-max)
- [ ] Filtrar por disponibilidad (en stock / agotado)
- [ ] Filtros se pueden aplicar en conjunto

### 4. Ordenamiento
- [ ] Ordenar por cualquier columna
- [ ] Ordenamiento ascendente/descendente
- [ ] Múltiples criterios (click en encabezados)

### 5. Búsqueda
- [ ] Búsqueda en tiempo real por nombre
- [ ] Búsqueda por ID
- [ ] Resaltado de resultados

### 6. Paginación
- [ ] Mostrar 10 registros por página
- [ ] Botones anterior/siguiente
- [ ] Indicador de página actual
- [ ] Saltar a página específica

### 7. Análisis/Estadísticas
- [ ] Total de productos
- [ ] Promedio de precio
- [ ] Producto más caro
- [ ] Producto más barato
- [ ] Total en stock

### 8. Exportación
- [ ] Exportar resultados filtrados a CSV
- [ ] Exportar estadísticas

## 🎨 Interfaz de Usuario

```
┌─────────────────────────────────────────────────────────┐
│  📊 Dashboard de Análisis de Datos                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 📈 ESTADÍSTICAS                                         │
│ ┌──────────┬──────────┬──────────┬──────────┐           │
│ │ Total: 45│ Promedio │ Máximo  │ Mínimo   │           │
│ │ Productos│ $50.50   │ $199.99 │ $5.99    │           │
│ └──────────┴──────────┴──────────┴──────────┘           │
│                                                         │
│ 🔍 FILTROS Y BÚSQUEDA                                   │
│ Categoría: [▼] | Precio: [___] - [___] | Stock: [▼]   │
│ Buscar: [________________] | [Limpiar Filtros]         │
│                                                         │
│ 📋 RESULTADOS (Mostrando 1-10 de 45)                   │
│ ┌─────┬──────────┬──────────┬────────┬───────┬────────┐│
│ │ ID  │ Nombre   │ Categoría│ Precio │ Stock │ Fecha  ││
│ ├─────┼──────────┼──────────┼────────┼───────┼────────┤│
│ │ 001 │ Product A│ Electro. │$99.99  │  15   │2025-01││
│ │ 002 │ Product B│ Hogar    │$25.50  │   5   │2025-01││
│ ...                                                     │
│ └─────┴──────────┴──────────┴────────┴───────┴────────┘│
│                                                         │
│ ◀ Prev | Page 1 of 5 | Next ▶  [Ir a página: ___]     │
│                                                         │
│ [📥 Exportar CSV] [📊 Exportar Estadísticas]           │
└─────────────────────────────────────────────────────────┘
```

## 💻 Técnicas de Arrays a Aplicar

### Métodos Obligatorios a Usar
- ✅ `filter()` - Filtrado de datos
- ✅ `map()` - Transformación de datos
- ✅ `sort()` - Ordenamiento
- ✅ `reduce()` - Agregación (estadísticas)
- ✅ `flatMap()` - Transformaciones complejas
- ✅ `flat()` - Si necesitas aplanar datos
- ✅ `Array.from()` - Convertir NodeList
- ✅ `find()`, `findIndex()` - Búsquedas
- ✅ `includes()`, `some()`, `every()` - Validaciones

### Patrones a Implementar
- Chaining complejo de métodos
- Transformación de datos en pipelines
- Agrupamiento y agregación
- Normalización de datos

## 📊 Datos de Ejemplo

El archivo `data.js` contendrá un array de productos:

```javascript
const PRODUCTS = [
  {
    id: 1,
    name: 'Laptop Pro',
    category: 'Electronics',
    price: 1299.99,
    stock: 5,
    date: '2025-01-15'
  },
  // ... más productos
];
```

## 🧪 Criterios de Evaluación

### Funcionalidad (40%)
- [ ] Todos los filtros funcionan correctamente
- [ ] Búsqueda en tiempo real
- [ ] Paginación funcional
- [ ] Ordenamiento en múltiples columnas
- [ ] Estadísticas correctas
- [ ] Exportación de datos

### Calidad de Código (30%)
- [ ] Código limpio y modular
- [ ] Variables bien nombradas
- [ ] Funciones con responsabilidad única
- [ ] Uso correcto de métodos array
- [ ] Comentarios en secciones complejas
- [ ] Sin código duplicado (DRY)

### Interfaz/UX (20%)
- [ ] Responsive (móvil + desktop)
- [ ] Feedback visual claro
- [ ] Interfaz intuitiva
- [ ] Carga de datos visible
- [ ] Manejo de errores visible

### Documentación (10%)
- [ ] README con instrucciones
- [ ] Comentarios en el código
- [ ] Funciones documentadas
- [ ] Casos de uso claros

## 🚀 Cómo Ejecutar

### Opción 1: Con Live Server (recomendado)
```bash
cd starter
# Abrir index.html con Live Server en VS Code
```

### Opción 2: Servidor Simple Python
```bash
cd starter
python -m http.server 8000
# Abrir http://localhost:8000
```

### Opción 3: Node.js http-server
```bash
npm install -g http-server
cd starter
http-server
```

## 📝 Implementación Paso a Paso

### Fase 1: Setup (15 minutos)
1. [ ] Abrir los archivos starter
2. [ ] Revisar estructura HTML
3. [ ] Entender los datos en data.js

### Fase 2: Funcionalidad Básica (30 minutos)
1. [ ] Cargar y mostrar todos los datos
2. [ ] Implementar tabla básica
3. [ ] Mostrar estadísticas

### Fase 3: Filtrado (20 minutos)
1. [ ] Implementar filtro por categoría
2. [ ] Filtro por precio
3. [ ] Filtro por stock

### Fase 4: Búsqueda y Ordenamiento (25 minutos)
1. [ ] Búsqueda en tiempo real
2. [ ] Ordenamiento de columnas
3. [ ] Múltiples criterios

### Fase 5: Paginación (15 minutos)
1. [ ] Dividir en páginas de 10
2. [ ] Botones navegación
3. [ ] Ir a página específica

### Fase 6: Pulido (15 minutos)
1. [ ] Exportación CSV
2. [ ] Manejo de errores
3. [ ] Estilos finales

**Total: ~2 horas**

## 💡 Tips de Implementación

### Organización del Código
```javascript
// utils.js - Funciones puras de transformación
const filterByPrice = (items, min, max) => { };
const filterByCategory = (items, category) => { };
const sortByColumn = (items, column, order) => { };

// app.js - Lógica de la aplicación
const state = { filters: {}, currentPage: 1 };
const render = () => { };
const handleFilterChange = (e) => { };
```

### Datos Reactivos
Mantener estado central:
```javascript
const state = {
  allData: [],           // Datos originales
  filteredData: [],      // Datos filtrados
  searchTerm: '',
  currentPage: 1,
  filters: {
    category: null,
    priceMin: 0,
    priceMax: Infinity,
    inStock: null
  }
};
```

### Pipeline de Datos
```javascript
const getDisplayData = () => {
  return state.allData
    .filter(item => matchesFilters(item))
    .filter(item => matchesSearch(item))
    .sort(getCurrentSort())
    .slice(start, end); // Paginación
};
```

## 📂 Archivos a Completar

### starter/index.html
Estructura básica con placeholders

### starter/app.js
Lógica principal con funciones vacías

### starter/utils.js
Funciones utilitarias para array operations

## ✅ Checklist Final

Antes de entregar:
- [ ] Todos los filtros funcionan
- [ ] Búsqueda en tiempo real
- [ ] Paginación correcta
- [ ] Ordenamiento funcional
- [ ] Estadísticas calculadas
- [ ] Exportación funciona
- [ ] Responsive en móvil
- [ ] Código sin errores en consola
- [ ] README completo
- [ ] Solución subida a GitHub

## 🎯 Bonus (Opcional)

Implementa estas características para puntos extra:
- [ ] Temas claro/oscuro
- [ ] Gráficos de estadísticas (Chart.js)
- [ ] Filtros avanzados (multi-select)
- [ ] Historial de búsquedas
- [ ] Importar CSV personalizado
- [ ] Guardar preferencias en localStorage

## 🔗 Recursos

- [MDN Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Fetch API para datos](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CSV Handling in JavaScript](https://www.papaparse.com/)

---

**Tiempo total estimado**: 2-3 horas  
**Dificultad**: ⭐⭐⭐ Avanzado

¡Este es tu chance de demostrar todo lo que has aprendido! 🚀
