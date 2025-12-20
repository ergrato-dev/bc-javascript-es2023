# 📦 Ejercicio 2: Array.from() y Conversiones

## 📌 Descripción

En este ejercicio practicarás con `Array.from()` y `Array.of()` para convertir objects array-like en arrays reales. También trabajarás con NodeList del DOM y crearás ranges.

## 🎯 Objetivos

- ✅ Convertir NodeList a arrays
- ✅ Usar Array.from() con función de mapeo
- ✅ Diferenciar Array.of() del constructor Array()
- ✅ Crear ranges con Array.from()

## 📝 Tareas

### Tarea 1: Convertir Array-like a Array

**Función**: `convertArrayLike(arrayLike)`

Recibe un object array-like y retorna un array real.

```javascript
// Ejemplo
const obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
convertArrayLike(obj);
// Esperado: ['a', 'b', 'c']
```

### Tarea 2: Array.from() con Mapeo

**Función**: `mapFromArrayLike(arrayLike, mapFn)`

Recibe un array-like y una función de mapeo, retorna array transformado.

```javascript
// Ejemplo
const obj = { 0: 1, 1: 2, 2: 3, length: 3 };
mapFromArrayLike(obj, x => x * 2);
// Esperado: [2, 4, 6]
```

### Tarea 3: Convertir String a Array

**Función**: `stringToArray(str)`

Recibe un string y retorna array de caracteres.

```javascript
// Ejemplo
stringToArray('hello');
// Esperado: ['h', 'e', 'l', 'l', 'o']
```

### Tarea 4: Crear Range de Números

**Función**: `createRange(start, end)`

Crea array de números desde start hasta end (inclusive).

```javascript
// Ejemplo
createRange(1, 5);
// Esperado: [1, 2, 3, 4, 5]
```

### Tarea 5: Array.of() vs Constructor

**Función**: `safeArrayOf(...elements)`

Retorna array de los elementos usando Array.of() para seguridad.

```javascript
// Ejemplo
safeArrayOf(1, 2, 3);
// Esperado: [1, 2, 3]

safeArrayOf(5); // Con constructor sería array de 5 elementos vacíos
// Esperado: [5] - No 5 elementos vacíos
```

### Tarea 6: Extender NodeList (simulado)

**Función**: `processNodeList(nodeArray)`

Simula procesar NodeList (recibe array de objetos con atributos).

```javascript
// Ejemplo
const nodes = [
  { id: '1', class: 'btn' },
  { id: '2', class: 'input' }
];
processNodeList(nodes);
// Extrae IDs: ['1', '2']
```

### Tarea 7: Crear Array de Objetos

**Función**: `createObjectArray(count)`

Crea array de `count` objetos vacíos usando Array.from().

```javascript
// Ejemplo
createObjectArray(3);
// Esperado: [{}, {}, {}]
```

### Tarea 8: Llenar Array con Valores

**Función**: `fillArray(size, value)`

Crea array de `size` elementos todos con `value`.

```javascript
// Ejemplo
fillArray(3, 'x');
// Esperado: ['x', 'x', 'x']
```

## 📚 Referencia de Métodos

- [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [`Array.of()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
- [`Array-like Objects`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)

## 💡 Tips

1. Array.from() es mejor que manual loops para conversión
2. Array.of(5) retorna [5], NO array de 5 elementos
3. El segundo parámetro de Array.from() es la función de mapeo
4. Array-like objects necesitan propiedad `length`

## 📁 Archivos

- [starter/index.js](starter/index.js) - Código para completar
- [solution/index.js](solution/index.js) - Solución de referencia

---

**Tiempo estimado**: 40 minutos
**Dificultad**: ⭐⭐ Intermedio
