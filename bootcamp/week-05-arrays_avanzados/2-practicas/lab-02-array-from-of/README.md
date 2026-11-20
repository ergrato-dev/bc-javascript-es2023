# Lab 02 — `Array.from()` y `Array.of()`

## Objetivo

Crear arrays a partir de otras cosas (texto, `Set`, objetos con `length`) y generar arrays nuevos con `Array.from({ length })`: secuencias, rangos, matrices, trozos y datos de prueba.

**Tiempo:** 40 min · **Teoría:** [02 - Array.from y Array.of](../../1-teoria/02-array-from-of.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 10 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-05-arrays_avanzados/2-practicas/lab-02-array-from-of
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: desde texto y desde un `Set`

`Array.from` recibe cualquier cosa que se pueda recorrer (un *iterable*) y devuelve un array con sus elementos: un texto da sus letras y un `Set` sus valores, sin repetidos.

```text
--- Paso 1: Array.from() básico ---
Desde string: [ 'h', 'e', 'l', 'l', 'o' ]
Desde Set: [ 1, 2, 3 ]
```

## Paso 2: objetos «parecidos a un array»

`nodeLikeObject` tiene claves `0`, `1`, `2` y `length`, como la `NodeList` que devuelve `document.querySelectorAll` en el navegador. No tiene `map` ni `filter`; `Array.from` lo convierte en un array de verdad que sí los tiene.

```text
--- Paso 2: Convertir estructuras ---
NodeList a Array: [ 'div1', 'div2', 'div3' ]
```

## Paso 3: transformar al crear

El segundo argumento de `Array.from` es una función que se aplica a cada elemento, como un `map` en el mismo paso: `Array.from(letters, char => char.toUpperCase())`.

```text
--- Paso 3: Mapeo durante creación ---
Con mapeo: [ 'A', 'B', 'C' ]
Duplicados: [ 2, 4, 6 ]
```

## Paso 4: generar secuencias

`{ length: 5 }` es un objeto con `length` y sin elementos: `Array.from` crea cinco posiciones y la función decide qué va en cada una a partir del índice. El primer parámetro (el elemento, que aquí es `undefined`) no se usa, y por convención se llama `_`.

```text
--- Paso 4: Generar secuencias ---
0 a 4: [ 0, 1, 2, 3, 4 ]
1 a 5: [ 1, 2, 3, 4, 5 ]
Pares: [ 0, 2, 4, 6, 8 ]
```

## Paso 5: `range`

La misma idea dentro de una función: `range(start, end)` crea `end - start + 1` posiciones y suma `start` al índice.

```text
--- Paso 5: Función range ---
Range 1-5: [ 1, 2, 3, 4, 5 ]
Range 10-15: [ 10, 11, 12, 13, 14, 15 ]
```

## Paso 6: `Array.of()`

`Array(3)` con un solo número no crea `[3]`: crea un array vacío de longitud 3 (Node lo muestra como `<3 empty items>`). Con dos o más argumentos sí los usa como elementos. `Array.of` siempre usa los argumentos como elementos, sean cuantos sean.

```text
--- Paso 6: Array.of() ---
Array(3): [ <3 empty items> ]
Array(1, 2): [ 1, 2 ]
Array.of(3): [ 3 ]
Array.of(1, 2): [ 1, 2 ]
Array.of(1, 2, 3): [ 1, 2, 3 ]
```

## Paso 7: clonar

`Array.from(original)` crea un array nuevo con los mismos elementos: `original !== clone` es `true` porque son dos arrays distintos. Con una función, clona y transforma a la vez.

```text
--- Paso 7: Clonar arrays ---
Clone: [ 1, 2, 3, 4, 5 ]
Son diferentes: true
Cuadrados: [ 1, 4, 9, 16, 25 ]
```

## Paso 8: matrices

Un `Array.from` dentro de otro: cada fila es un array nuevo de `cols` posiciones. La función interior se llama por cada fila, así que las filas no son el mismo array repetido.

```text
--- Paso 8: Matrices ---
Matriz 2x3: [ [ 0, 0, 0 ], [ 0, 0, 0 ] ]
Matriz 3x3: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ]
```

## Paso 9: dividir en trozos

`chunk` calcula cuántos trozos salen con `Math.ceil(arr.length / size)` (redondea hacia arriba, porque el último puede ir incompleto) y cada trozo es un `slice` de `size` elementos.

```text
--- Paso 9: Dividir en chunks ---
Chunks de 3: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
Chunks de 4: [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10 ] ]
```

## Paso 10: datos de prueba

`generateUsers(3)` crea tres objetos a partir del índice. `active` alterna con `i % 2 === 0`: es `true` en los índices pares.

```text
--- Paso 10: Datos de prueba ---
Usuarios generados: [
  { id: 1, name: 'User 1', email: 'user1@example.com', active: true },
  { id: 2, name: 'User 2', email: 'user2@example.com', active: false },
  { id: 3, name: 'User 3', email: 'user3@example.com', active: true }
]

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, ¿qué devuelve `Array.from(new Set('banana'))`? Pruébalo y explica el resultado.
2. En el paso 6, ¿por qué `Array(3)` y `Array.of(3)` dan resultados distintos?
3. En el paso 8, cambia `createMatrix` para que use `Array(rows).fill(Array(cols).fill(fill))`, cambia un valor con `matrix[0][0] = 9` e imprime la matriz. ¿Qué filas cambian y por qué?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — `flat()` y `flatMap()`](../lab-01-flat-flatmap/README.md) | [Lab 03 — Encadenar métodos](../lab-03-chaining/README.md) → |

[↑ Semana 05](../../README.md)
