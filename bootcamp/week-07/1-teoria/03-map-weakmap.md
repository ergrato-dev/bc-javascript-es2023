# Map y WeakMap

## 🎯 Objetivos
- Usar Map para claves de cualquier tipo y mantener orden de inserción.
- Implementar caches y metadatos con WeakMap sin fugas de memoria.

## 📋 Contenido
### Map
- Métodos: `set`, `get`, `has`, `delete`, `clear`, propiedad `size`.
- Iteración: `map.keys()`, `map.values()`, `map.entries()`, `for...of` devuelve `[key, value]`.
- Conversión desde arrays de pares: `new Map([['id', 1], ['name', 'Ada']])`.
- Diferencias vs Object:
  - Claves de cualquier tipo (objetos, funciones, NaN).
  - Orden de inserción preservado.
  - Mejor rendimiento en grandes volúmenes (en general) para lookups frecuentes.

### WeakMap
- Claves deben ser objetos; valores cualquier tipo.
- No iterable; sin `size`.
- GC puede liberar entradas cuando no existen más referencias a la clave.
- Uso típico: caché de resultados o metadatos asociados a instancias sin alterar las instancias.

### Patrones útiles
- Memoización por objeto: `const cache = new WeakMap();` guardar resultado por instancia.
- Map + Set combinados: Map para datos, Set para índices secundarios o permisos.

## 🧠 Tips rápidos
- Si necesitas serializar, Map/WeakMap no se convierten automáticamente a JSON; conviértelo con `Object.fromEntries(map)` o arrays.
- Evita usar objetos como claves en Map si se mutan a menudo en sus propiedades críticas (la referencia es estable, pero el significado puede cambiar).

## ✅ Checklist
- [ ] Puedes crear, leer y borrar entradas en Map.
- [ ] Sabes cuándo elegir Map vs Object.
- [ ] Entiendes el ciclo de vida y limitaciones de WeakMap.
