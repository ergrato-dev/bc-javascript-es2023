# 📘 Ejercicio 02: Array.from() y Array.of()

## 🎯 Objetivos

- Crear arrays desde iterables con `Array.from()`
- Generar arrays con valores específicos usando `Array.of()`
- Aplicar transformaciones durante la creación

---

## 📋 Descripción

`Array.from()` y `Array.of()` son métodos estáticos que crean arrays de formas especiales. Son fundamentales para convertir estructuras de datos y generar secuencias.

---

## 📝 Práctica Guiada

### Paso 1: Array.from() Básico

`Array.from()` crea un array desde cualquier objeto iterable:

```javascript
// Desde un string (cada carácter es un elemento)
Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

// Desde un Set (elimina la estructura Set)
Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]

// Desde un Map
Array.from(new Map([['a', 1], ['b', 2]])); // [['a', 1], ['b', 2]]
```

**Abre `starter/index.js`** y descomenta el primer ejemplo para ver cómo funciona.

---

### Paso 2: Convertir NodeList

En el navegador, `querySelectorAll` retorna un `NodeList`, no un array. Con `Array.from()` lo convertimos:

```javascript
// En el navegador:
const divs = document.querySelectorAll('div'); // NodeList
const divsArray = Array.from(divs);            // Ahora es Array

// Ya puedes usar map, filter, reduce, etc.
divsArray.map(div => div.textContent);
```

**Descomenta** el ejemplo de NodeList (simulado) en el starter.

---

### Paso 3: Array.from() con Función de Mapeo

El segundo argumento de `Array.from()` es una función de mapeo que transforma cada elemento:

```javascript
const str = 'abc';

// Sin mapeo
Array.from(str);                    // ['a', 'b', 'c']

// Con mapeo
Array.from(str, c => c.toUpperCase()); // ['A', 'B', 'C']
```

**Descomenta** el ejemplo de conversión a mayúsculas.

---

### Paso 4: Crear Secuencias Numéricas

Truco muy útil: crear un array de longitud N con valores generados:

```javascript
// Array con { length: 5 } se comporta como un array de 5 elementos undefined
Array.from({ length: 5 }, (_, index) => index);
// [0, 1, 2, 3, 4]

Array.from({ length: 5 }, (_, i) => i + 1);
// [1, 2, 3, 4, 5]

Array.from({ length: 5 }, (_, i) => i * 2);
// [0, 2, 4, 6, 8]
```

**Descomenta** los ejemplos de secuencias en el starter.

---

### Paso 5: Generar Rangos

Crea una función que genere rangos de números:

```javascript
const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

range(1, 5);   // [1, 2, 3, 4, 5]
range(10, 15); // [10, 11, 12, 13, 14, 15]
```

**Descomenta** la función `range` y sus ejemplos.

---

### Paso 6: Array.of()

`Array.of()` crea un array con los argumentos como elementos. Resuelve un problema del constructor `Array()`:

```javascript
// Problema con Array()
Array(3);      // [empty × 3] - crea array con 3 slots vacíos
Array(1, 2);   // [1, 2] - comportamiento diferente con 1 vs 2+ args

// Array.of() es consistente
Array.of(3);      // [3]
Array.of(1, 2);   // [1, 2]
Array.of(1, 2, 3); // [1, 2, 3]
```

**Descomenta** los ejemplos de `Array.of()`.

---

### Paso 7: Clonar y Transformar

`Array.from()` es una forma elegante de clonar arrays:

```javascript
const original = [1, 2, 3];
const clone = Array.from(original);

// Con transformación
const doubled = Array.from(original, x => x * 2);
// [2, 4, 6]
```

**Descomenta** los ejemplos de clonación.

---

### Paso 8: Crear Matriz (Array 2D)

Genera matrices usando `Array.from()` anidado:

```javascript
const createMatrix = (rows, cols, fill = 0) =>
  Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => fill)
  );

createMatrix(2, 3, 0);
// [[0, 0, 0], [0, 0, 0]]

createMatrix(3, 3, 1);
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
```

**Descomenta** la función `createMatrix` y sus ejemplos.

---

### Paso 9: Chunks (Dividir Array)

Usa `Array.from()` para dividir un array en chunks:

```javascript
const chunk = (arr, size) =>
  Array.from(
    { length: Math.ceil(arr.length / size) },
    (_, i) => arr.slice(i * size, i * size + size)
  );

chunk([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], [5]]
```

**Descomenta** la función `chunk` y sus ejemplos.

---

### Paso 10: Generar Datos de Prueba

Combina todo para generar datos de prueba:

```javascript
const generateUsers = count =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`
  }));

generateUsers(3);
// [{ id: 1, name: 'User 1', ... }, { id: 2, ... }, { id: 3, ... }]
```

**Descomenta** el último ejemplo.

---

## 🚀 Cómo Ejecutar

```bash
cd bootcamp/week-05-arrays_avanzados/2-practicas/ejercicio-02-array-from-of
node starter/index.js
```

---

## ✅ Verificación

Al finalizar, deberías ver:
- Conversiones desde strings y Sets
- Secuencias numéricas generadas
- Rangos personalizados
- Matrices 2D
- Arrays divididos en chunks
- Datos de prueba generados

---

## 💡 Resumen

| Método | Uso | Ejemplo |
|--------|-----|---------|
| `Array.from(iterable)` | Convertir iterable a array | `Array.from('abc')` |
| `Array.from(iterable, fn)` | Convertir + transformar | `Array.from('abc', c => c.toUpperCase())` |
| `Array.from({length: n}, fn)` | Generar secuencia | `Array.from({length: 5}, (_, i) => i)` |
| `Array.of(...items)` | Crear array con items | `Array.of(1, 2, 3)` |

---

## 📚 Recursos

- [Teoría: Array.from() y Array.of()](../../1-teoria/02-array-from-of.md)
- [MDN: Array.from()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [MDN: Array.of()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/of)

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Índice | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Ejercicio 01](../ejercicio-01-flat-flatmap/) | [Prácticas](../) | [Ejercicio 03](../ejercicio-03-chaining/) |
