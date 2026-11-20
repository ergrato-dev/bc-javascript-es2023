# Lab 04 — Iterables personalizados

## Objetivo

Hacer iterables tus propias clases con un método generador `*[Symbol.iterator]()`: un rango, una lista enlazada, una matriz con varias formas de recorrerla, una colección con métodos encadenables y una pila con campo privado.

**Tiempo:** 55 min · **Teoría:** [05 - Iterables personalizados](../../1-teoria/05-custom-iterables.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-08-iteradores_generadores/2-practicas/lab-04-custom-iterable
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: un objeto iterable con un generador

`*[Symbol.iterator]() { ... }` es un método generador: el `*` delante del nombre equivale a `function*`. Es la forma corta del iterador que en el lab 01 escribiste a mano con `next()`. `result.slice(0, -2)` quita la última `', '`.

```text
--- Paso 1: Objeto Iterable Simple ---
Countdown: 5, 4, 3, 2, 1
Spread: [ 5, 4, 3, 2, 1 ]
```

## Paso 2: una clase `Range`

Con el método en la clase, cada instancia es iterable: spread, `for...of` y también destructuring, que solo pide los dos primeros valores. `length` es un getter (semana 03): se lee como propiedad, sin paréntesis, y se calcula sin recorrer el rango.

```text
--- Paso 2: Clase Range ---
Range 1-5: [ 1, 2, 3, 4, 5 ]
Longitud: 5
Evens 0-10: [ 0, 2, 4, 6, 8, 10 ]
Destructuring: 1 2
```

## Paso 3: una lista enlazada

En una lista enlazada cada nodo (`ListNode`) guarda un valor y una referencia al siguiente; `head` es el primero y `tail` el último. `append` devuelve `this` para poder encadenar llamadas. El iterador sigue los `next` desde `head` hasta llegar a `null`. Como la lista es iterable, `[...this]` la convierte en array y ya puedes usar `join` o `reduce`.

```text
--- Paso 3: LinkedList ---
Lista: 10 -> 20 -> 30
Array: [ 10, 20, 30 ]
Suma: 60
```

## Paso 4: varias formas de recorrer

`[Symbol.iterator]` es la forma por defecto (la que usan spread y `for...of`), pero una clase puede tener otros métodos generadores. Aquí `byRows` da cada fila y `diagonal` los elementos `[i][i]`.

```text
--- Paso 4: Múltiples Iteradores ---
Default: [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
Por filas: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
Diagonal: [ 1, 5, 9 ]
```

## Paso 5: una colección encadenable

`filter` y `map` devuelven una `Collection` nueva en lugar de modificar `items`, así que se pueden encadenar. El constructor copia el array con spread para que la colección no comparta datos con quien la creó.

```text
--- Paso 5: Colección Fluida ---
25 o más: Alice (30)
25 o más: Charlie (35)
Nombres: [ 'Alice', 'Charlie' ]
```

## Paso 6: una pila iterable

Una pila (stack) saca primero lo último que entró (LIFO, last in, first out). `#items` es un campo privado (semana 03): desde fuera solo se usa con `push`, `pop` y `peek`. `at(-1)` lee el último elemento. El iterador recorre desde arriba con `toReversed()` (ES2023), que devuelve una copia invertida sin tocar `#items`.

```text
--- Paso 6: Pila iterable ---
Stack (LIFO): [ 'third', 'second', 'first' ]
Top: third
Pop: third | size: 2

✅ Lab completado.
```

---

## Comprobación

1. En el paso 2, ¿qué imprime `[...new Range(5, 1)]`? ¿Y su `length`?
2. En el paso 6, cambia `toReversed()` por `reverse()` e itera la pila dos veces. ¿Qué cambia y por qué?
3. Añade a `LinkedList` del paso 3 un getter `size` que cuente los nodos usando su propio iterador.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Generadores y `yield`](../lab-03-generators/README.md) | [Proyecto — Catálogo por páginas](../../3-proyecto/README.md) → |

[↑ Semana 08](../../README.md)
