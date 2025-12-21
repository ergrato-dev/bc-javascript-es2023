# 🏋️ Ejercicio 02: Array.from() y Array.of()

## 🎯 Objetivo

Dominar la creación de arrays desde diferentes fuentes usando `Array.from()` y entender cuándo usar `Array.of()` en lugar del constructor `Array()`.

---

## 📋 Descripción

En este ejercicio practicarás la creación de arrays desde strings, Sets, Maps, objetos array-like, y generarás secuencias numéricas usando la función de mapeo de `Array.from()`.

---

## 📚 Conceptos Clave

- `Array.from(iterable)` - Crea array desde cualquier iterable
- `Array.from(iterable, mapFn)` - Crea array con transformación
- `Array.from({ length: n })` - Crea array de longitud n
- `Array.of(...elements)` - Crea array con los elementos dados

---

## 🎯 Tareas

### Tarea 1: Caracteres de un String

```javascript
const word = 'JavaScript';

// TODO: Convertir a array de caracteres
// Resultado esperado: ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
```

### Tarea 2: Caracteres Únicos

```javascript
const text = 'programming';

// TODO: Obtener caracteres únicos ordenados
// Resultado esperado: ['a', 'g', 'i', 'm', 'n', 'o', 'p', 'r']
```

### Tarea 3: De Set a Array

```javascript
const numbersSet = new Set([1, 2, 3, 2, 1, 4, 5, 4]);

// TODO: Convertir Set a Array
// Resultado esperado: [1, 2, 3, 4, 5]
```

### Tarea 4: De Map a Array de Objetos

```javascript
const userMap = new Map([
  ['u1', { name: 'Ana', age: 25 }],
  ['u2', { name: 'Luis', age: 30 }],
  ['u3', { name: 'María', age: 28 }]
]);

// TODO: Convertir a array de objetos con id incluido
// Resultado esperado:
// [
//   { id: 'u1', name: 'Ana', age: 25 },
//   { id: 'u2', name: 'Luis', age: 30 },
//   { id: 'u3', name: 'María', age: 28 }
// ]
```

### Tarea 5: Generar Rango de Números

```javascript
// TODO: Crear función que genere array de números desde start hasta end
// createRange(1, 5) → [1, 2, 3, 4, 5]
// createRange(10, 15) → [10, 11, 12, 13, 14, 15]
```

### Tarea 6: Generar Array de Ceros

```javascript
// TODO: Crear array de 10 ceros
// Resultado esperado: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

### Tarea 7: Generar Índices

```javascript
// TODO: Crear array de índices del 0 al 9
// Resultado esperado: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Tarea 8: Números Aleatorios

```javascript
// TODO: Generar 5 números aleatorios entre 1 y 100
// Resultado: array de 5 números aleatorios
```

### Tarea 9: Alfabeto

```javascript
// TODO: Generar array con letras a-z
// Resultado esperado: ['a', 'b', 'c', ..., 'z']
// Pista: String.fromCharCode(97) === 'a'
```

### Tarea 10: Matriz 3x3

```javascript
// TODO: Crear matriz 3x3 inicializada con ceros
// Resultado esperado:
// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]
```

### Tarea 11: Matriz con Posiciones

```javascript
// TODO: Crear matriz 3x3 donde cada celda contiene "fila,columna"
// Resultado esperado:
// [
//   ['0,0', '0,1', '0,2'],
//   ['1,0', '1,1', '1,2'],
//   ['2,0', '2,1', '2,2']
// ]
```

### Tarea 12: Array.of vs Array

```javascript
// TODO: Demostrar la diferencia entre Array(5) y Array.of(5)
// y explicar cuándo usar cada uno
```

### Tarea 13: Convertir Arguments

```javascript
// TODO: Crear función que sume todos sus argumentos
// usando Array.from() para convertir arguments
function sumAll() {
  // Implementar
}

// sumAll(1, 2, 3, 4, 5) → 15
```

### Tarea 14: Dividir en Chunks

```javascript
// TODO: Función que divide un array en subarrays de tamaño n
// chunk([1,2,3,4,5,6,7], 3) → [[1,2,3], [4,5,6], [7]]
```

### Tarea 15: Generar IDs Únicos

```javascript
// TODO: Función que genera n IDs únicos aleatorios
// generateIds(3) → ['x7f2k9m3n', 'a1b2c3d4e', 'q8w9e0r1t']
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
| Conversión desde iterables | 25 |
| Uso de función de mapeo | 25 |
| Generación de secuencias | 25 |
| Funciones reutilizables | 15 |
| Código limpio y ES6+ | 10 |

---

## 💡 Pistas

1. `Array.from({ length: n })` crea array de longitud n
2. El segundo argumento de `Array.from()` es una función de mapeo
3. La función de mapeo recibe `(elemento, índice)`
4. `String.fromCharCode(65)` = 'A', `String.fromCharCode(97)` = 'a'
5. Para matrices, usa `Array.from()` anidado

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Índice | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Ejercicio 01](../ejercicio-01-flat-flatmap/) | [Prácticas](../) | [Ejercicio 03](../ejercicio-03-chaining/) |
