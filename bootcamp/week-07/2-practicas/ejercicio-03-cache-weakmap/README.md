# 🔒 Ejercicio 3: Cache con WeakMap

## 📌 Descripción

Implementa sistemas de cache usando WeakMap para evitar memory leaks. WeakMap permite que las claves (objetos) sean recolectadas por el Garbage Collector cuando no hay otras referencias.

## 🎯 Objetivos

- ✅ Implementar cache con WeakMap
- ✅ Asociar metadata privada a objetos
- ✅ Evitar memory leaks en caches
- ✅ Usar WeakMap para memoization

## 📝 Tareas

### Tarea 1: Cache de Resultados

**Función**: `createResultCache()`

Retorna un objeto con métodos `set(obj, result)` y `get(obj)` usando WeakMap interno.

```javascript
const cache = createResultCache();
const user = { id: 1 };
cache.set(user, { processed: true });
cache.get(user); // { processed: true }
```

### Tarea 2: Memoización de Funciones

**Función**: `memoize(fn)`

Recibe una función y retorna una versión memoizada que cachea resultados por objeto (primer argumento).

```javascript
const expensive = obj => obj.value * 2;
const memoized = memoize(expensive);
```

### Tarea 3: Metadata Privada

**Función**: `createMetadataStore()`

Crea un store para asociar metadata privada a objetos sin modificarlos.

```javascript
const store = createMetadataStore();
store.set(obj, { created: Date.now() });
```

### Tarea 4: Get or Initialize

**Función**: `getOrInit(weakMap, obj, initFn)`

Obtiene valor de WeakMap o inicializa con `initFn()` si no existe.

```javascript
const map = new WeakMap();
getOrInit(map, obj, () => ({ count: 0 }));
```

## 🧪 Casos de Prueba

```javascript
const cache = createResultCache();
const obj = {};
cache.set(obj, 'result');
console.assert(cache.get(obj) === 'result', 'Cache falla');
```

## 📚 Referencia

- [WeakMap - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## 💡 Tips

1. WeakMap solo acepta objetos como claves
2. No se puede iterar sobre WeakMap
3. Ideal para asociar datos privados sin modificar objetos
4. Permite garbage collection automático

---

**Tiempo estimado**: 25 minutos
**Dificultad**: ⭐⭐⭐ Avanzado
