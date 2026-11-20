# Lab 01 — `flat()` y `flatMap()`

## Objetivo

Aplanar arrays anidados con `flat()` y transformar y aplanar en una sola pasada con `flatMap()`: extraer listas de dentro de objetos, expandir, filtrar y combinar.

**Tiempo:** 40 min · **Teoría:** [01 - flat y flatMap](../../1-teoria/01-flat-flatmap.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 10 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-05-arrays_avanzados/2-practicas/lab-01-flat-flatmap
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: `flat()`

`categories` es un array de tres arrays. `categories.flat()` devuelve un array nuevo con los elementos de los tres, uno detrás de otro. `categories` no cambia.

```text
--- Paso 1: flat() básico ---
Productos: [
  'Laptop',
  'Desktop',
  'Tablet',
  'Mouse',
  'Keyboard',
  'Monitor',
  'Headphones',
  'Speakers'
]
```

## Paso 2: profundidad

Sin argumento, `flat()` aplana un solo nivel. `deepData` tiene cinco niveles de anidamiento; `flat(Infinity)` los aplana todos. Con `flat(2)` quedarían arrays dentro a partir del tercer nivel.

```text
--- Paso 2: flat() con profundidad ---
Deep flat: [ 1, 2, 3, 4, 5, 6 ]
```

## Paso 3: `flatMap()`

`posts.flatMap(post => post.tags)` hace un `map` (cada post da su array de tags) y aplana un nivel. Con `map` a secas tendrías `[['javascript', 'es6'], ...]`, un array de arrays.

```text
--- Paso 3: flatMap() básico ---
Todos los tags: [
  'javascript',
  'es6',
  'react',
  'hooks',
  'javascript',
  'node',
  'express'
]
```

## Paso 4: tags únicos

`'javascript'` sale dos veces en el paso 3. Un `Set` solo guarda valores distintos, y `[...new Set(array)]` lo vuelve a convertir en array, en el orden en que aparecieron.

```text
--- Paso 4: Tags únicos ---
Tags únicos: [ 'javascript', 'es6', 'react', 'hooks', 'node', 'express' ]
```

## Paso 5: expandir

Cada elemento puede dar varios: `Array(item.qty).fill(item.name)` crea un array de `qty` posiciones con el nombre repetido, y `flatMap` los junta.

```text
--- Paso 5: Expandir con flatMap() ---
Items expandidos: [ 'Apple', 'Apple', 'Apple', 'Banana', 'Banana', 'Orange' ]
```

## Paso 6: filtrar y expandir a la vez

Si la función devuelve `[]`, ese elemento desaparece; si devuelve `[n, n]`, sale dos veces. Así `flatMap` filtra los impares y duplica los pares en una sola pasada.

```text
--- Paso 6: Filtrar y expandir ---
Pares duplicados: [
  2, 2, 4,  4,  6,
  6, 8, 8, 10, 10
]
```

## Paso 7: contexto del padre

Cada pedido tiene sus `items`. El `map` interior copia cada item con spread y le añade el `orderId` del pedido que lo contiene. El resultado es una lista plana de líneas de pedido, cómoda para sumar o filtrar.

```text
--- Paso 7: Agregar contexto del padre ---
Items con orderId: [
  { orderId: 'ORD001', product: 'Laptop', price: 1000 },
  { orderId: 'ORD001', product: 'Mouse', price: 25 },
  { orderId: 'ORD002', product: 'Keyboard', price: 75 },
  { orderId: 'ORD002', product: 'Monitor', price: 300 },
  { orderId: 'ORD002', product: 'Webcam', price: 50 }
]
```

## Paso 8: combinaciones

Un `flatMap` con un `map` dentro recorre todas las parejas: por cada color, todas las tallas. Con 2 colores y 3 tallas salen 6 combinaciones.

```text
--- Paso 8: Combinaciones ---
Combinaciones: [
  { color: 'red', size: 'S' },
  { color: 'red', size: 'M' },
  { color: 'red', size: 'L' },
  { color: 'blue', size: 'S' },
  { color: 'blue', size: 'M' },
  { color: 'blue', size: 'L' }
]
```

## Paso 9: separar texto

`s.split(' ')` convierte cada frase en un array de palabras; `flatMap` junta las palabras de todas las frases.

```text
--- Paso 9: Parsear oraciones ---
Palabras: [ 'Hello', 'world', 'JavaScript', 'is', 'awesome', 'flatMap', 'rocks' ]
```

## Paso 10: expandir rangos

Cada rango `{ start, end }` se convierte en la lista de números que cubre, con un bucle `for` que va del principio al final. Node imprime los arrays largos de números en columnas.

```text
--- Paso 10: Expandir rangos ---
Rangos expandidos: [
   1,  2,  3, 10,
  11, 12, 20, 21
]

✅ Lab completado.
```

---

## Comprobación

1. En el paso 2, cambia `flat(Infinity)` por `flat()` y después por `flat(2)`. ¿Qué imprime cada uno?
2. En el paso 3, cambia `flatMap` por `map`. ¿Qué forma tiene el resultado?
3. En el paso 6, ¿qué devuelve la función para un número impar y por qué ese elemento no aparece en el resultado?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — `Array.from()` y `Array.of()`](../lab-02-array-from-of/README.md) → |

[↑ Semana 05](../../README.md)
