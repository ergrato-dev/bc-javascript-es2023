# 🗺️ Ejercicio 2: Mapeo y Conteo con Map

## 📌 Descripción

En este ejercicio trabajarás con Map para asociar claves con valores de forma eficiente. Aprenderás a contar frecuencias, agrupar datos y construir índices usando la flexibilidad de Map (acepta cualquier tipo de clave).

## 🎯 Objetivos

- ✅ Usar Map para conteo de frecuencias
- ✅ Construir índices y estructuras de datos complejas
- ✅ Aprovechar Map con claves de cualquier tipo (objetos, arrays)
- ✅ Iterar y transformar Maps de forma idiomática

## 📝 Tareas

### Tarea 1: Contar Palabras

**Función**: `wordCount(text)`

Recibe un texto y retorna un Map con la frecuencia de cada palabra (case-insensitive).

```javascript
// Ejemplo
wordCount('Hola mundo hola');
// Esperado: Map { 'hola' => 2, 'mundo' => 1 }
```

### Tarea 2: Agrupar por Categoría

**Función**: `groupByCategory(products)`

Recibe un array de productos (objetos con `name` y `category`) y retorna un Map donde cada clave es una categoría y el valor es un array de nombres de productos.

```javascript
// Ejemplo
const products = [
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Mouse', category: 'Electronics' },
  { name: 'Shirt', category: 'Clothing' }
];
groupByCategory(products);
// Esperado: Map {
//   'Electronics' => ['Laptop', 'Mouse'],
//   'Clothing' => ['Shirt']
// }
```

### Tarea 3: Top N Elementos

**Función**: `topN(items, n)`

Recibe un array de items y un número `n`. Retorna un array con los `n` elementos más frecuentes, ordenados de mayor a menor frecuencia.

```javascript
// Ejemplo
topN(['a', 'b', 'a', 'c', 'a', 'b'], 2);
// Esperado: ['a', 'b']
```

### Tarea 4: Crear Índice Bidireccional

**Función**: `createBidirectionalMap(pairs)`

Recibe un array de pares `[key, value]` y retorna dos Maps: uno normal (key → value) y otro invertido (value → key).

```javascript
// Ejemplo
createBidirectionalMap([['es', 'España'], ['fr', 'Francia']]);
// Esperado: {
//   forward: Map { 'es' => 'España', 'fr' => 'Francia' },
//   reverse: Map { 'España' => 'es', 'Francia' => 'fr' }
// }
```

### Tarea 5: Contar Caracteres Únicos

**Función**: `uniqueChars(str)`

Recibe un string y retorna un Map con cada carácter único y su frecuencia.

```javascript
// Ejemplo
uniqueChars('hello');
// Esperado: Map { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }
```

### Tarea 6: Fusionar Maps

**Función**: `mergeMaps(map1, map2)`

Recibe dos Maps y retorna un nuevo Map con todas las entradas. Si hay claves duplicadas, el valor de `map2` tiene prioridad.

```javascript
// Ejemplo
const m1 = new Map([['a', 1], ['b', 2]]);
const m2 = new Map([['b', 3], ['c', 4]]);
mergeMaps(m1, m2);
// Esperado: Map { 'a' => 1, 'b' => 3, 'c' => 4 }
```

## 🧪 Casos de Prueba

```javascript
// Test 1: wordCount
const counts = wordCount('Test test TEST');
console.assert(counts.get('test') === 3, 'wordCount falla');

// Test 2: groupByCategory
const grouped = groupByCategory([
  { name: 'A', category: 'X' },
  { name: 'B', category: 'X' }
]);
console.assert(grouped.get('X').length === 2, 'groupByCategory falla');

// Test 3: topN
const top = topN(['a', 'a', 'b'], 1);
console.assert(top[0] === 'a', 'topN falla');
```

## 📚 Referencia

- [Map - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Map.prototype.entries()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)

## 💡 Tips

1. `map.get(key) || defaultValue` para manejar claves inexistentes
2. `map.set(key, (map.get(key) || 0) + 1)` para contadores
3. `[...map.entries()]` para convertir Map a array de pares
4. `Array.from(map, ([k, v]) => transform)` para mapear directamente
5. Map mantiene el orden de inserción

## 📁 Archivos

- [starter/index.js](starter/index.js) - Código para completar
- [solution/index.js](solution/index.js) - Solución de referencia

---

**Tiempo estimado**: 30 minutos
**Dificultad**: ⭐⭐ Intermedio
