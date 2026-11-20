# Lab 04 — Map para colecciones

## Objetivo

Repasar `Map` ([semana 07](../../../week-07-sets_maps/README.md)) como almacén de una colección: crear y llenar, buscar por clave, recorrer, convertir a array y de vuelta, y guardarlo en un campo privado de una clase, como hace `Collection` en el proyecto.

**Tiempo:** 45 min · **Teoría:** [01 - Repaso](../../1-teoria/01-revision-conceptos.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-12-proyecto_integrador_fundamentos/2-practicas/lab-04-map
node starter/index.js
```

Los pasos 2, 3 y 4 usan el `Map` `products` del paso 1: deja el paso 1 descomentado. Los pasos 5 y 6 funcionan solos. Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: crear y llenar un `Map`

`new Map()` crea el almacén y `set(clave, valor)` añade un par. Las claves son los ids de los productos. `size` dice cuántos hay y `console.log` muestra cada par con `=>`.

```text
--- Paso 1: Crear Map ---
Productos en catálogo: 3
Map(3) {
  'p1' => { id: 'p1', name: 'Laptop', price: 999.99 },
  'p2' => { id: 'p2', name: 'Mouse', price: 29.99 },
  'p3' => { id: 'p3', name: 'Keyboard', price: 79.99 }
}
```

## Paso 2: buscar por clave

`get(id)` devuelve el valor o `undefined`, sin recorrer nada. `has(id)` responde `true` o `false`. Con un objeto normal, una clave puede existir con valor `undefined`, y leerla no distingue ese caso de una clave que no existe.

```text
--- Paso 2: Acceso ---
Laptop encontrada: Laptop ($999.99)
¿Existe p1? true
¿Existe p99? false
obj.key existe? true
obj.key valor: undefined
```

## Paso 3: recorrer

`forEach` recibe primero el valor y después la clave, al revés que el orden en que se escriben con `set`. `for...of` entrega pares `[clave, valor]`, que se desestructuran. En los dos casos, el orden es el de inserción.

```text
--- Paso 3: Iteración ---
Listado de productos:
- [p1] Laptop: $999.99
- [p2] Mouse: $29.99
- [p3] Keyboard: $79.99
Total en inventario: $1109.97
```

## Paso 4: de `Map` a array y de vuelta

`[...products]` da un array de pares, `[...products.values()]` solo los valores. Para filtrar se pasa a array, se usa `filter` y, si hace falta, se vuelve a `Map` con `new Map(pares)`.

```text
--- Paso 4: Conversión ---
Array de entries: 3 elementos
Solo valores: 3 productos
Filtrar por precio > $50: 2 productos
Map desde array: Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
```

## Paso 5: un `Map` dentro de una clase

`ProductService` guarda los productos en un campo privado `#products` y ofrece `getById`, que es un `get` del `Map`, y `getAll`, que lo pasa a array. Es la misma idea que `#pieces` en la `Collection` del proyecto.

```text
--- Paso 5: ProductService ---
Buscar por ID (O(1)): Laptop
Buscar inexistente: undefined
```

## Paso 6: actualizar valores

El carrito usa el id del producto como clave y guarda `{ product, quantity }` como valor. `updateQuantity` cambia la cantidad con `this.#items.get(productId).quantity = quantity`: `get` devuelve el mismo objeto que guarda el `Map`, no una copia, así que cambiarlo cambia lo guardado. Por eso la `Collection` del proyecto congela sus piezas con `Object.freeze`.

```text
--- Paso 6: CartService ---
Carrito inicial: 2 items
Laptop x2 = $1999.98
Mouse x1 = $29.99
Total: $2029.97

Actualizar cantidad Laptop a 3:
Laptop x3 = $2999.97
Mouse x1 = $29.99
Total: $3029.96

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, añade `products.set('p1', { id: 'p1', name: 'Laptop Pro', price: 1299.99 });` al final. ¿Cuántos productos hay ahora y en qué posición queda `p1`?
2. En el paso 3, ¿qué imprime `[...products.keys()]`? ¿Y `products.get('P1')`, con mayúscula?
3. El `summarize` del proyecto cuenta piezas por sala con `byRoom.set(room, (byRoom.get(room) ?? 0) + 1)`. ¿Por qué hace falta el `?? 0`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Módulos ES](../lab-03-modulos/README.md) | [Proyecto — Gestor de colección](../../3-proyecto/README.md) → |

[↑ Semana 12](../../README.md)
