# Ejercicio 04: Map para Colecciones

## 🎯 Objetivo

Practicar el uso de Map para almacenar colecciones con acceso O(1) - ideal para catálogos de productos y carritos.

---

## 📋 Conceptos a Practicar

- Crear y poblar un Map
- Métodos: `set`, `get`, `has`, `delete`
- Iterar con `forEach` y `for...of`
- Convertir Map a Array y viceversa

---

## 🏋️ Instrucciones

1. Abre `starter/index.js`
2. Lee cada sección y descomenta el código
3. Ejecuta con `node index.js` después de cada paso
4. Observa las ventajas de Map vs Object

---

## 📚 Pasos del Ejercicio

### Paso 1: Crear y Poblar Map
- `new Map()` vs objeto literal
- `set(key, value)` para agregar

### Paso 2: Acceso y Verificación
- `get(key)` retorna el valor
- `has(key)` verifica existencia
- Diferencia con `undefined`

### Paso 3: Iteración
- `forEach((value, key) => {})`
- `for (const [key, value] of map)`
- `map.keys()`, `map.values()`, `map.entries()`

### Paso 4: Conversión Array ↔ Map
- `new Map(entries)`
- `Array.from(map)` o spread `[...map]`

### Paso 5: Map en ProductService
- Catálogo de productos con Map
- Búsqueda O(1) por ID

### Paso 6: Map en CartService
- Items del carrito con Map
- Actualizar cantidad fácilmente

---

## ✅ Resultado Esperado

```
--- Paso 1: Crear Map ---
Productos en catálogo: 3
Map(3) { 'p1' => {...}, 'p2' => {...}, 'p3' => {...} }

--- Paso 2: Acceso ---
Laptop encontrada: Laptop ($999.99)
¿Existe p1? true
¿Existe p99? false

--- Paso 3: Iteración ---
Listado de productos:
- [p1] Laptop: $999.99
- [p2] Mouse: $29.99
- [p3] Keyboard: $79.99
Total en inventario: $1109.97

--- Paso 4: Conversión ---
Array de entries: [['p1', {...}], ['p2', {...}], ...]
Solo valores: [{...}, {...}, {...}]
Filtrar por precio > $50: 2 productos

--- Paso 5: ProductService ---
Buscar por ID (O(1)): Laptop
Buscar inexistente: undefined

--- Paso 6: CartService ---
Carrito inicial: 2 items
Laptop x2 = $1999.98
Mouse x1 = $29.99
Total: $2029.97

Actualizar cantidad Laptop a 3:
Laptop x3 = $2999.97
Total: $3029.96

✅ ¡Ejercicio completado!
```

---

## 🔗 Navegación

| ⬅️ Anterior | Lista |
|:------------|:-----:|
| [Ejercicio 03](../ejercicio-03-modulos/README.md) | [Ejercicios](../README.md) |
