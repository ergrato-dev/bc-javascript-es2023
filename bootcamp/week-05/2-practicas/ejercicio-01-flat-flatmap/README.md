# 🔹 Ejercicio 1: Flat y FlatMap

## 📌 Descripción

En este ejercicio practicarás con los métodos `flat()` y `flatMap()` para trabajar con arrays anidados. Completarás una serie de funciones que procesan datos complejos utilizando estos métodos.

## 🎯 Objetivos

- ✅ Usar `flat()` con diferentes profundidades
- ✅ Implementar `flatMap()` para transformación + aplanamiento
- ✅ Manejar arrays vacíos y valores especiales
- ✅ Resolver problemas prácticos con datos anidados

## 📝 Tareas

### Tarea 1: Aplanar Arrays Simples

**Función**: `flattenSimple(array)`

Recibe un array anidado de una profundidad y retorna un array plano.

```javascript
// Ejemplo
flattenSimple([1, [2, 3], 4, [5, 6]]);
// Esperado: [1, 2, 3, 4, 5, 6]
```

### Tarea 2: Aplanar con Profundidad

**Función**: `flattenByDepth(array, depth)`

Recibe un array y una profundidad, retorna el array aplanado a esa profundidad.

```javascript
// Ejemplos
flattenByDepth([1, [2, [3, 4]]], 1);
// Esperado: [1, 2, [3, 4]]

flattenByDepth([1, [2, [3, 4]]], 2);
// Esperado: [1, 2, 3, 4]
```

### Tarea 3: FlatMap - Duplicar Elementos

**Función**: `flatMapDuplicate(array)`

Usa `flatMap()` para duplicar cada elemento en el array.

```javascript
// Ejemplo
flatMapDuplicate(['a', 'b', 'c']);
// Esperado: ['a', 'a', 'b', 'b', 'c', 'c']
```

### Tarea 4: FlatMap - Expandir Rangos

**Función**: `expandRanges(array)`

Recibe un array de números y usa `flatMap()` para expandir cada número en un rango del 1 al ese número.

```javascript
// Ejemplo
expandRanges([2, 3]);
// Esperado: [1, 2, 1, 2, 3]
```

### Tarea 5: FlatMap - Filtrar y Transformar

**Función**: `flatMapFilter(data)`

Recibe un array de objetos con propiedad `tags` (array de strings). Usa `flatMap()` para:
- Extraer todos los tags
- Eliminar duplicados
- Retornar en mayúsculas

```javascript
// Ejemplo
flatMapFilter([
  { name: 'post1', tags: ['javascript', 'web'] },
  { name: 'post2', tags: ['javascript', 'tutorial'] }
]);
// Esperado: ['JAVASCRIPT', 'WEB', 'TUTORIAL']
```

### Tarea 6: Aplanar Arrays Anidados Complejos

**Función**: `flattenComplex(array)`

Recibe un array profundamente anidado y retorna completamente aplanado.

```javascript
// Ejemplo
flattenComplex([1, [2, [3, [4, [5]]]]]);
// Esperado: [1, 2, 3, 4, 5]
```

### Tarea 7: FlatMap con Objetos

**Función**: `flatMapUsers(users)`

Recibe un array de usuarios con sus órdenes. Usa `flatMap()` para extraer todas las órdenes de todos los usuarios.

```javascript
// Ejemplo
flatMapUsers([
  { name: 'Ana', orders: [100, 200] },
  { name: 'Bob', orders: [150] }
]);
// Esperado: [100, 200, 150]
```

### Tarea 8: Eliminar Valores Falsy

**Función**: `flatMapClean(array)`

Usa `flatMap()` para:
- Aplanar el array
- Eliminar valores falsy (null, undefined, 0, '', false)
- Retornar solo valores truthy

```javascript
// Ejemplo
flatMapClean([1, [null, 2, undefined], [0, 3, '']]);
// Esperado: [1, 2, 3]
```

## 🧪 Casos de Prueba

Ejecuta los siguientes tests para verificar tu código:

```javascript
// Test 1
console.assert(
  flattenSimple([1, [2, 3], 4]).join(',') === '1,2,3,4',
  'flattenSimple falla'
);

// Test 2
console.assert(
  flattenByDepth([1, [2, [3, 4]]], 1).join(',') === '1,2,3,4',
  'flattenByDepth falla con depth=1'
);

// Test 3
console.assert(
  flatMapDuplicate(['a', 'b']).join(',') === 'a,a,b,b',
  'flatMapDuplicate falla'
);

// Y más...
```

## 📚 Referencia de Métodos

- [`Array.prototype.flat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [`Array.prototype.flatMap()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

## 💡 Tips

1. Recuerda que `flat()` elimina automáticamente slots vacíos
2. `flatMap()` siempre aplana un nivel (depth=1)
3. Usa `Infinity` en `flat()` para aplanar completamente
4. Para eliminar duplicados, considera usar `Set`

## 📁 Archivos

- [starter/index.js](starter/index.js) - Código para completar
- [solution/index.js](solution/index.js) - Solución de referencia

---

**Tiempo estimado**: 30 minutos  
**Dificultad**: ⭐ Básico
