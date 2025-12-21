# 🏋️ Ejercicio 03: Chaining Complejo

## 🎯 Objetivo

Dominar el encadenamiento de métodos de array para realizar transformaciones complejas de datos de forma legible y eficiente.

---

## 📋 Descripción

Trabajarás con datasets realistas aplicando múltiples métodos encadenados para filtrar, transformar, ordenar y extraer información.

---

## 📚 Conceptos Clave

- Encadenar `filter()`, `map()`, `sort()`, `slice()`
- Optimizar el orden de operaciones
- Extraer funciones para legibilidad
- Combinar filters para mejor rendimiento

---

## 🎯 Tareas

### Tarea 1: Pipeline Básico

```javascript
const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Tablet', price: 300, inStock: true },
  { name: 'Watch', price: 200, inStock: true },
  { name: 'Headphones', price: 150, inStock: false }
];

// TODO: Productos en stock, ordenados por precio desc, solo nombres
// Resultado: ['Laptop', 'Tablet', 'Watch']
```

### Tarea 2: Top N con Transformación

```javascript
const users = [
  { name: 'Ana', score: 85, active: true },
  { name: 'Luis', score: 92, active: true },
  { name: 'María', score: 78, active: false },
  { name: 'Carlos', score: 95, active: true },
  { name: 'Pedro', score: 88, active: true }
];

// TODO: Top 3 usuarios activos por score, formato "Name: score pts"
// Resultado: ['Carlos: 95 pts', 'Luis: 92 pts', 'Pedro: 88 pts']
```

### Tarea 3: Filtrado Múltiple Optimizado

```javascript
const employees = [
  { name: 'Ana', dept: 'IT', salary: 5000, years: 3 },
  { name: 'Luis', dept: 'HR', salary: 4000, years: 5 },
  { name: 'María', dept: 'IT', salary: 5500, years: 7 },
  { name: 'Carlos', dept: 'IT', salary: 4500, years: 2 },
  { name: 'Pedro', dept: 'HR', salary: 4200, years: 4 }
];

// TODO: Empleados de IT con más de 2 años, salario > 4500
// Ordenados por salario desc
// Resultado: [{ name: 'María', ... }, { name: 'Ana', ... }]
```

### Tarea 4: Extracción de Funciones

```javascript
const orders = [
  { id: 1, total: 150, status: 'completed', date: '2024-01-15' },
  { id: 2, total: 200, status: 'pending', date: '2024-01-16' },
  { id: 3, total: 75, status: 'completed', date: '2024-01-14' },
  { id: 4, total: 300, status: 'completed', date: '2024-01-17' },
  { id: 5, total: 50, status: 'cancelled', date: '2024-01-13' }
];

// TODO: Crear funciones separadas y usarlas en el chain
// - isCompleted: filtra órdenes completadas
// - hasMinTotal: filtra órdenes con total >= 100
// - toOrderSummary: transforma a { id, total }
// - byTotalDesc: comparador para ordenar por total desc
```

### Tarea 5: Agregación con Chaining

```javascript
const transactions = [
  { type: 'income', category: 'salary', amount: 3000 },
  { type: 'expense', category: 'rent', amount: 1000 },
  { type: 'income', category: 'freelance', amount: 500 },
  { type: 'expense', category: 'food', amount: 300 },
  { type: 'expense', category: 'transport', amount: 150 }
];

// TODO: Total de gastos (expenses)
// Resultado: 1450
```

### Tarea 6: Chain con flatMap

```javascript
const departments = [
  { name: 'IT', employees: ['Ana', 'Luis', 'María'] },
  { name: 'HR', employees: ['Carlos', 'Pedro'] },
  { name: 'Sales', employees: ['Laura', 'Jorge', 'Sofia', 'Miguel'] }
];

// TODO: Departamentos con más de 2 empleados,
// lista de todos sus empleados ordenados alfabéticamente
// Resultado: ['Ana', 'Jorge', 'Laura', 'Luis', 'María', 'Miguel', 'Sofia']
```

### Tarea 7: Procesamiento de Strings

```javascript
const comments = [
  '  Great product!  ',
  'not bad',
  '   AMAZING SERVICE   ',
  'Could be better',
  '  love it!  '
];

// TODO: Limpiar espacios, capitalizar, filtrar > 10 chars, ordenar
// Resultado: ['Amazing service', 'Could be better', 'Great product!']
```

### Tarea 8: Pipeline Condicional

```javascript
const items = [
  { name: 'A', price: 100, featured: true },
  { name: 'B', price: 50, featured: false },
  { name: 'C', price: 75, featured: true },
  { name: 'D', price: 200, featured: false }
];

// TODO: Crear función que acepte opciones
// filterItems(items, { onlyFeatured: true, minPrice: 50, sortBy: 'price' })
```

---

## 📁 Archivos

- `starter/index.js` - Archivo inicial
- `solution/index.js` - Solución completa

---

## ⏱️ Tiempo Estimado

50 minutos

---

## 💡 Pistas

1. Filtrar antes de mapear mejora rendimiento
2. Combina múltiples condiciones en un solo filter
3. Extrae funciones con nombres descriptivos
4. Usa `slice()` después de `sort()` para Top N

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Índice | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Ejercicio 02](../ejercicio-02-array-from-of/) | [Prácticas](../) | [Ejercicio 04](../ejercicio-04-sort-transform/) |
