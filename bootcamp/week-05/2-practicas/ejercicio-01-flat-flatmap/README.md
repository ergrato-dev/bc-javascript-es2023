# 🏋️ Ejercicio 01: flat() y flatMap()

## 🎯 Objetivo

Practicar el aplanamiento de arrays anidados usando `flat()` y `flatMap()` para transformar y procesar estructuras de datos complejas.

---

## 📋 Descripción

En este ejercicio trabajarás con datos que contienen arrays anidados, como listas de categorías con productos, departamentos con empleados, y órdenes con items. Aprenderás a aplanar estas estructuras y extraer información de manera eficiente.

---

## 📚 Conceptos Clave

- `flat(depth)` - Aplana arrays anidados hasta el nivel especificado
- `flat(Infinity)` - Aplana completamente sin importar profundidad
- `flatMap(fn)` - Combina `map()` + `flat(1)` en una operación
- Usar `flatMap()` para filtrar y expandir elementos

---

## 🎯 Tareas

### Tarea 1: Aplanar Categorías de Productos

```javascript
const categories = [
  ['Laptop', 'Desktop', 'Tablet'],
  ['Mouse', 'Keyboard', 'Monitor'],
  ['Headphones', 'Speakers']
];

// TODO: Obtener lista plana de todos los productos
// Resultado esperado: ['Laptop', 'Desktop', 'Tablet', 'Mouse', 'Keyboard', 'Monitor', 'Headphones', 'Speakers']
```

### Tarea 2: Aplanar Estructura Profunda

```javascript
const deepData = [1, [2, [3, [4, [5, [6]]]]]];

// TODO: Aplanar completamente
// Resultado esperado: [1, 2, 3, 4, 5, 6]
```

### Tarea 3: Extraer Todos los Tags

```javascript
const posts = [
  { title: 'Post 1', tags: ['javascript', 'es6'] },
  { title: 'Post 2', tags: ['react', 'hooks', 'javascript'] },
  { title: 'Post 3', tags: ['node', 'express'] }
];

// TODO: Obtener array con todos los tags (puede haber duplicados)
// Resultado esperado: ['javascript', 'es6', 'react', 'hooks', 'javascript', 'node', 'express']
```

### Tarea 4: Tags Únicos

```javascript
// TODO: Usando el resultado anterior, obtener tags únicos
// Resultado esperado: ['javascript', 'es6', 'react', 'hooks', 'node', 'express']
```

### Tarea 5: Expandir Cantidades

```javascript
const items = [
  { name: 'Apple', qty: 3 },
  { name: 'Banana', qty: 2 },
  { name: 'Orange', qty: 1 }
];

// TODO: Crear array con cada item repetido según su cantidad
// Resultado esperado: ['Apple', 'Apple', 'Apple', 'Banana', 'Banana', 'Orange']
```

### Tarea 6: Filtrar y Expandir

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: Solo números pares, cada uno duplicado
// Resultado esperado: [2, 2, 4, 4, 6, 6, 8, 8, 10, 10]
```

### Tarea 7: Procesar Órdenes

```javascript
const orders = [
  {
    id: 'ORD001',
    items: [
      { product: 'Laptop', price: 1000 },
      { product: 'Mouse', price: 25 }
    ]
  },
  {
    id: 'ORD002',
    items: [
      { product: 'Keyboard', price: 75 },
      { product: 'Monitor', price: 300 },
      { product: 'Webcam', price: 50 }
    ]
  }
];

// TODO: Lista plana de items con orderId incluido
// Resultado esperado:
// [
//   { orderId: 'ORD001', product: 'Laptop', price: 1000 },
//   { orderId: 'ORD001', product: 'Mouse', price: 25 },
//   { orderId: 'ORD002', product: 'Keyboard', price: 75 },
//   { orderId: 'ORD002', product: 'Monitor', price: 300 },
//   { orderId: 'ORD002', product: 'Webcam', price: 50 }
// ]
```

### Tarea 8: Generar Combinaciones

```javascript
const colors = ['red', 'blue'];
const sizes = ['S', 'M', 'L'];

// TODO: Todas las combinaciones color-size
// Resultado esperado:
// [
//   { color: 'red', size: 'S' },
//   { color: 'red', size: 'M' },
//   { color: 'red', size: 'L' },
//   { color: 'blue', size: 'S' },
//   { color: 'blue', size: 'M' },
//   { color: 'blue', size: 'L' }
// ]
```

### Tarea 9: Parsear Oraciones

```javascript
const sentences = [
  'Hello world',
  'JavaScript is awesome',
  'flatMap rocks'
];

// TODO: Array de todas las palabras
// Resultado esperado: ['Hello', 'world', 'JavaScript', 'is', 'awesome', 'flatMap', 'rocks']
```

### Tarea 10: Expandir Rangos

```javascript
const ranges = [
  { start: 1, end: 3 },
  { start: 10, end: 12 },
  { start: 20, end: 21 }
];

// TODO: Expandir cada rango a sus números
// Resultado esperado: [1, 2, 3, 10, 11, 12, 20, 21]
```

---

## 📁 Archivos

- `starter/index.js` - Archivo inicial con los ejercicios
- `solution/index.js` - Solución completa

---

## ⏱️ Tiempo Estimado

40 minutos

---

## 🎓 Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Uso correcto de `flat()` | 20 |
| Uso correcto de `flatMap()` | 30 |
| Manejo de estructuras anidadas | 20 |
| Combinaciones y expansiones | 20 |
| Código limpio y ES6+ | 10 |

---

## 💡 Pistas

1. `flat()` sin argumentos aplana solo 1 nivel
2. `flatMap()` es equivalente a `map().flat(1)`
3. Para filtrar con `flatMap()`, retorna array vacío `[]`
4. Para duplicar elementos, retorna `[elem, elem]`
5. `Array.from({ length: n })` ayuda a generar secuencias

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Índice | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Teoría](../../1-teoria/) | [Prácticas](../) | [Ejercicio 02](../ejercicio-02-array-from-of/) |
