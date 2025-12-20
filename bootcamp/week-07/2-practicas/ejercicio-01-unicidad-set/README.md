# 🔹 Ejercicio 1: Unicidad con Set

## 📌 Descripción

En este ejercicio practicarás con Set para garantizar unicidad de valores. Aprenderás a deduplicar arrays, unir colecciones y verificar presencia de elementos manteniendo el orden de inserción.

## 🎯 Objetivos

- ✅ Usar Set para eliminar duplicados preservando orden
- ✅ Implementar operaciones de unión con Sets
- ✅ Verificar existencia de elementos eficientemente
- ✅ Convertir entre Array y Set de forma idiomática

## 📝 Tareas

### Tarea 1: Deduplicar IDs

**Función**: `uniqueIds(ids)`

Recibe un array de IDs (strings o números) y retorna un array sin duplicados, preservando el orden de primera aparición.

```javascript
// Ejemplo
uniqueIds([1, 2, 1, 3, 2, 4]);
// Esperado: [1, 2, 3, 4]

uniqueIds(['a', 'b', 'a', 'c']);
// Esperado: ['a', 'b', 'c']
```

### Tarea 2: Unir Features

**Función**: `mergeFeatures(primary, secondary)`

Recibe dos arrays de features (strings) y retorna un Set con todos los elementos únicos. Los elementos de `primary` van primero, seguidos por los de `secondary` que no estén ya presentes.

```javascript
// Ejemplo
mergeFeatures(['login', 'profile'], ['profile', 'settings']);
// Esperado: Set { 'login', 'profile', 'settings' }
```

### Tarea 3: Verificar Presencia Total

**Función**: `hasAll(required, availableSet)`

Recibe un array `required` y un Set `availableSet`. Retorna `true` si todos los elementos de `required` existen en `availableSet`.

```javascript
// Ejemplo
hasAll(['read', 'write'], new Set(['read', 'write', 'delete']));
// Esperado: true

hasAll(['admin'], new Set(['read', 'write']));
// Esperado: false
```

### Tarea 4: Encontrar Elementos Únicos

**Función**: `uniqueValues(array)`

Recibe un array y retorna solo los valores que aparecen exactamente una vez.

```javascript
// Ejemplo
uniqueValues([1, 2, 2, 3, 4, 4, 5]);
// Esperado: [1, 3, 5]
```

### Tarea 5: Intersección de Tags

**Función**: `commonTags(tagsA, tagsB)`

Recibe dos arrays de tags y retorna un array con los tags presentes en ambos.

```javascript
// Ejemplo
commonTags(['js', 'web', 'tutorial'], ['js', 'backend', 'tutorial']);
// Esperado: ['js', 'tutorial']
```

## 🧪 Casos de Prueba

```javascript
// Test 1: uniqueIds
console.assert(
  uniqueIds([1, 2, 1, 3]).join(',') === '1,2,3',
  'uniqueIds falla'
);

// Test 2: mergeFeatures
const merged = mergeFeatures(['a', 'b'], ['b', 'c']);
console.assert(
  merged.size === 3 && merged.has('a') && merged.has('c'),
  'mergeFeatures falla'
);

// Test 3: hasAll
console.assert(
  hasAll(['x', 'y'], new Set(['x', 'y', 'z'])) === true,
  'hasAll falla'
);
```

## 📚 Referencia

- [Set - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Set.prototype.has()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set/has)

## 💡 Tips

1. `new Set(array)` elimina duplicados automáticamente
2. `[...set]` convierte Set a Array preservando orden
3. `set.has(value)` es O(1) promedio, más rápido que `array.includes()`
4. Set usa SameValueZero: `NaN === NaN` en Sets

## 📁 Archivos

- [starter/index.js](starter/index.js) - Código para completar
- [solution/index.js](solution/index.js) - Solución de referencia

---

**Tiempo estimado**: 25 minutos  
**Dificultad**: ⭐ Básico
