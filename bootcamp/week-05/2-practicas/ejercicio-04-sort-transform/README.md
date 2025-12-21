# 🏋️ Ejercicio 04: Sort y Transformaciones

## 🎯 Objetivo

Dominar el ordenamiento personalizado con `sort()` y aplicar transformaciones complejas de datos usando múltiples métodos de array.

---

## 📋 Descripción

Practicarás ordenamiento numérico, alfabético, por múltiples criterios, manejo de valores especiales (null, undefined) y transformaciones de datos complejas.

---

## 📚 Conceptos Clave

- Comparadores para `sort()`: `(a, b) => a - b`
- `localeCompare()` para strings
- Ordenamiento multi-criterio
- Manejo de null/undefined en sort
- Transformaciones con `reduce()`

---

## 🎯 Tareas

### Tarea 1: Ordenamiento Numérico

```javascript
const numbers = [10, 2, 30, 1, 25, 5, 100, 8];

// TODO: Ordenar ascendente y descendente
// Ascendente: [1, 2, 5, 8, 10, 25, 30, 100]
// Descendente: [100, 30, 25, 10, 8, 5, 2, 1]
```

### Tarea 2: Ordenamiento Alfabético

```javascript
const names = ['María', 'ana', 'Carlos', 'LUIS', 'pedro'];

// TODO: Ordenar alfabéticamente (case-insensitive)
// Resultado: ['ana', 'Carlos', 'LUIS', 'María', 'pedro']
```

### Tarea 3: Ordenar Objetos por Propiedad

```javascript
const products = [
  { name: 'Laptop', price: 1000, rating: 4.5 },
  { name: 'Phone', price: 500, rating: 4.8 },
  { name: 'Tablet', price: 300, rating: 4.2 },
  { name: 'Watch', price: 200, rating: 4.9 }
];

// TODO: Ordenar por precio (asc), por rating (desc), por nombre (asc)
```

### Tarea 4: Ordenamiento Multi-criterio

```javascript
const employees = [
  { name: 'Ana', dept: 'IT', salary: 5000 },
  { name: 'Luis', dept: 'HR', salary: 4000 },
  { name: 'María', dept: 'IT', salary: 5000 },
  { name: 'Carlos', dept: 'HR', salary: 4000 },
  { name: 'Pedro', dept: 'IT', salary: 4500 }
];

// TODO: Ordenar por departamento (asc), luego por salario (desc)
```

### Tarea 5: Manejar Null/Undefined

```javascript
const scores = [
  { name: 'Ana', score: 85 },
  { name: 'Luis', score: null },
  { name: 'María', score: 92 },
  { name: 'Carlos', score: undefined },
  { name: 'Pedro', score: 78 }
];

// TODO: Ordenar por score desc, nulls al final
```

### Tarea 6: Ordenamiento Natural de Strings

```javascript
const files = ['file10.txt', 'file2.txt', 'file1.txt', 'file20.txt', 'file3.txt'];

// TODO: Ordenar naturalmente
// Resultado: ['file1.txt', 'file2.txt', 'file3.txt', 'file10.txt', 'file20.txt']
```

### Tarea 7: Ordenar por Prioridad Personalizada

```javascript
const tasks = [
  { title: 'Bug fix', priority: 'high' },
  { title: 'Feature', priority: 'medium' },
  { title: 'Refactor', priority: 'low' },
  { title: 'Hotfix', priority: 'critical' },
  { title: 'Docs', priority: 'low' }
];

// TODO: Ordenar por prioridad: critical > high > medium > low
```

### Tarea 8: Agrupar Datos (groupBy)

```javascript
const sales = [
  { product: 'A', region: 'North', amount: 100 },
  { product: 'B', region: 'South', amount: 200 },
  { product: 'A', region: 'South', amount: 150 },
  { product: 'B', region: 'North', amount: 180 }
];

// TODO: Agrupar por región
// Resultado: { North: [...], South: [...] }
```

### Tarea 9: Normalizar Datos

```javascript
const users = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Luis' },
  { id: 3, name: 'María' }
];

// TODO: Convertir a objeto indexado por id
// Resultado: { 1: { id: 1, name: 'Ana' }, 2: {...}, 3: {...} }
```

### Tarea 10: Pipeline Completo

```javascript
const rawData = [
  { name: 'ana garcia', age: 25, status: 'A', score: 85 },
  { name: 'luis martinez', age: 30, status: 'I', score: 92 },
  { name: 'maria lopez', age: 28, status: 'A', score: 78 },
  { name: 'carlos ruiz', age: 35, status: 'A', score: 95 }
];

// TODO: Pipeline completo
// 1. Filtrar status 'A'
// 2. Transformar: capitalizar nombre, agregar campo fullName
// 3. Ordenar por score desc
// 4. Tomar top 2
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

1. `sort()` muta el array original - usa `[...arr].sort()`
2. `localeCompare()` maneja acentos y mayúsculas
3. Para multi-criterio, retorna 0 si son iguales y continúa
4. `reduce()` es ideal para transformaciones complejas

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Índice | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Ejercicio 03](../ejercicio-03-chaining/) | [Prácticas](../) | [Proyecto](../../3-proyecto/) |
