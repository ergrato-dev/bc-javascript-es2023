# 🗄️ Ejercicio 4: Registros Ordenados (Map + Set)

## 📌 Descripción

Combina Map y Set para crear estructuras de datos complejas: registros ordenados con índices múltiples, sistemas de tags bidireccionales y colecciones con metadata.

## 🎯 Objetivos

- ✅ Combinar Map y Set para estructuras complejas
- ✅ Mantener múltiples índices sincronizados
- ✅ Implementar búsquedas eficientes
- ✅ Preservar orden de inserción

## 📝 Tareas

### Tarea 1: Registro Ordenado

**Función**: `createOrderedRegistry()`

Crea un registro que mantiene orden de inserción y permite búsqueda por ID.

```javascript
const registry = createOrderedRegistry();
registry.add({ id: 1, name: 'Alice' });
registry.getById(1); // { id: 1, name: 'Alice' }
registry.getAll(); // Array en orden de inserción
```

### Tarea 2: Índice de Tags

**Función**: `createTagIndex()`

Sistema donde cada item tiene múltiples tags, permite buscar items por tag.

```javascript
const index = createTagIndex();
index.add('article-1', ['js', 'tutorial']);
index.getByTag('js'); // Set { 'article-1', ... }
```

### Tarea 3: Registro con Timestamps

**Función**: `createTimestampedRegistry()`

Registros con timestamps automáticos, ordenados cronológicamente.

```javascript
const reg = createTimestampedRegistry();
reg.add('user-1', { name: 'Alice' });
reg.getRecent(5); // Últimos 5 registros
```

### Tarea 4: Set Operations

**Función**: `setOperations(setA, setB)`

Retorna objeto con `union`, `intersection`, `difference`.

```javascript
setOperations(
  new Set([1, 2, 3]),
  new Set([2, 3, 4])
);
// {
//   union: Set { 1, 2, 3, 4 },
//   intersection: Set { 2, 3 },
//   difference: Set { 1 }
// }
```

### Tarea 5: Multi-Index Store

**Función**: `createMultiIndexStore()`

Store con múltiples índices (por ID, por categoría, por tag).

```javascript
const store = createMultiIndexStore();
store.add({ id: 1, category: 'A', tags: ['x', 'y'] });
store.findByCategory('A'); // [...]
store.findByTag('x'); // [...]
```

## 🧪 Casos de Prueba

```javascript
const registry = createOrderedRegistry();
registry.add({ id: 1, name: 'Test' });
console.assert(registry.getById(1).name === 'Test', 'Falla');
```

## 📚 Referencia

- [Map - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Set - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set)

## 💡 Tips

1. Map mantiene orden de inserción, ideal para registros
2. Set para tags evita duplicados automáticamente
3. Combina ambos para índices múltiples
4. Usa Map.get() para O(1) lookups

---

**Tiempo estimado**: 35 minutos
**Dificultad**: ⭐⭐⭐ Avanzado
