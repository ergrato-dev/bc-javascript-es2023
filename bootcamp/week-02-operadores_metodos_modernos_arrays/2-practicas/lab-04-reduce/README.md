# Lab 04 — `reduce`

## Objetivo

Convertir un array en un único valor con `reduce`: un número (sumas, máximos), un objeto (diccionarios, recuentos, grupos), otro array o un texto.

**Tiempo:** 45 min · **Teoría:** [04 - Métodos de array](../../1-teoria/04-array-methods.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) empieza con cuatro arrays de datos (`numbers`, `products`, `orders` y `words`) que ya están activos, y sigue con 9 pasos. En cada uno, descomenta el bloque que hay debajo de `Descomenta las siguientes líneas:` (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-02-operadores_metodos_modernos_arrays/2-practicas/lab-04-reduce
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: cómo funciona

`reduce` recibe una función y un valor inicial. La función recibe el **acumulador** (`acc`, el resultado hasta ahora) y el elemento actual, y devuelve el nuevo acumulador. En la primera vuelta `acc` vale el valor inicial (`0`); el resultado de la última vuelta es lo que devuelve `reduce`. El `console.log` dentro de la función muestra cada vuelta.

```text
--- Paso 1: Sintaxis Básica ---
acc: 0, num: 1, resultado: 1
acc: 1, num: 2, resultado: 3
acc: 3, num: 3, resultado: 6
acc: 6, num: 4, resultado: 10
acc: 10, num: 5, resultado: 15
Suma total: 15
```

## Paso 2: operaciones con números

Lo mismo en una línea. El valor inicial depende de la operación: `0` para sumar y `1` para multiplicar (con `0` el producto siempre daría 0). Para el máximo y el mínimo se empieza por el primer elemento, `numbers[0]`, y en cada vuelta el ternario se queda con el mayor (o el menor).

```text
--- Paso 2: Operaciones Numéricas ---
Suma: 15
Producto: 120
Máximo: 5
Mínimo: 1
```

## Paso 3: sumar propiedades

Con objetos se suma una propiedad: `acc + p.price`. El valor del inventario multiplica precio por cantidad en cada producto antes de sumar.

```text
--- Paso 3: Sumar Propiedades ---
Total precios: 1674
Total unidades: 13
Valor inventario: $3373
```

## Paso 4: construir objetos

Con `{}` como valor inicial, el acumulador es un objeto que se va rellenando. `acc[p.name] = p.price` crea una propiedad cuyo nombre es el del producto. Para agrupar, la primera vez que aparece una categoría se crea su array vacío y después se añade el nombre. La función tiene que terminar con `return acc`: sin él, la siguiente vuelta recibiría `undefined`.

```text
--- Paso 4: Construir Objetos ---
Productos por nombre: { Laptop: 999, Mouse: 25, Desk: 200, Chair: 150, Monitor: 300 }
Por categoría: {
  electronics: [ 'Laptop', 'Mouse', 'Monitor' ],
  furniture: [ 'Desk', 'Chair' ]
}
```

## Paso 5: contar

`(acc[letter] || 0) + 1` lee el recuento actual (o `0` si la letra aún no está) y le suma uno. Cambiando el `1` por `order.total` se suma el gasto en lugar de contar pedidos.

```text
--- Paso 5: Contar Ocurrencias ---
Conteo de letras: { a: 3, b: 3, c: 1, d: 1 }
Órdenes por cliente: { Ana: 2, Bob: 1, Carlos: 1 }
Gasto por cliente: { Ana: 1374, Bob: 150, Carlos: 325 }
```

## Paso 6: aplanar

`[...acc, ...arr]` une el acumulador con cada subarray, así que `[[1, 2], [3, 4], [5, 6]]` queda en un solo nivel. Para esto existe `flat()`, que hace lo mismo en una llamada.

```text
--- Paso 6: Aplanar Arrays ---
Nested: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
Flat: [ 1, 2, 3, 4, 5, 6 ]
Todos los items: [
  'laptop', 'mouse',
  'chair',  'desk',
  'chair',  'monitor',
  'mouse'
]
Con flat(): [ 1, 2, 3, 4, 5, 6 ]
```

## Paso 7: `reduce` en lugar de `map` y `filter`

Con `[]` como valor inicial, `reduce` puede devolver un array transformado (como `map`), con solo algunos elementos (como `filter`) o las dos cosas en una sola pasada. Funciona, pero `map` y `filter` se leen mejor: usa `reduce` cuando el resultado no sea un array del mismo tipo.

```text
--- Paso 7: reduce() Reemplaza Todo ---
Como map (x2): [ 2, 4, 6, 8, 10 ]
Como filter (pares): [ 2, 4 ]
Caros (map+filter): [ 'LAPTOP', 'DESK', 'CHAIR', 'MONITOR' ]
```

## Paso 8: textos

Sin valor inicial, `reduce` empieza con el primer elemento como acumulador (`'Hola'`) y recorre desde el segundo. Para unir palabras, `join(' ')` es más directo. `htmlList` empieza con `'<ul>'`, añade un `<li>` por producto y cierra con `'</ul>'` fuera del `reduce`.

```text
--- Paso 8: Concatenar Strings ---
Oración: Hola mundo JavaScript es genial
Con join: Hola mundo JavaScript es genial
Lista HTML: <ul><li>Laptop</li><li>Mouse</li><li>Desk</li><li>Chair</li><li>Monitor</li></ul>
```

## Paso 9: carrito de compra

El acumulador es un objeto con tres datos a la vez: unidades, subtotal y lista de productos. En cada vuelta se devuelve un objeto nuevo con los tres actualizados. Fuera del `reduce`, `toFixed(2)` muestra el IVA y el total con dos decimales.

```text
--- Paso 9: Carrito de Compras ---
Resumen del carrito:
- Productos: [ 'Laptop x1', 'Mouse x2', 'Keyboard x1' ]
- Total items: 4
- Subtotal: $1124
- IVA (21%): $236.04
- Total: $1360.04

🎉 ¡Felicidades! Has dominado reduce().
Este es el método más versátil de los arrays.
Practica creando tus propias reducciones.
```

---

## Comprobación

- [ ] Los 9 pasos descomentados y `node starter/index.js` termina sin errores.
- [ ] Sabes qué valor tiene `acc` en la primera vuelta, con y sin valor inicial.
- [ ] Sabes explicar por qué el producto del paso 2 empieza en `1` y no en `0`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — `map` y `filter`](../lab-03-map-filter/README.md) | [Lab 05 — `at()` y `Object.hasOwn()`](../lab-05-metodos-es2022/README.md) → |

[↑ Semana 02](../../README.md)
