# Lab 01 — Iteradores

## Objetivo

Ver por dentro el protocolo de iteración: pedir el iterador de un array, un string, un `Map` y un `Set` con `[Symbol.iterator]()`, llamar a `next()` a mano, y escribir objetos iterables desde cero que funcionen con `for...of` y con spread.

**Tiempo:** 50 min · **Teoría:** [01 - Protocolo de iteración](../../1-teoria/01-iteration-protocol.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-08-iteradores_generadores/2-practicas/lab-01-iterators
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: el iterador de un array

`Symbol.iterator` es una clave especial que tienen todos los iterables. Su valor es una función que devuelve un **iterador**: un objeto con un método `next()`. Cada llamada a `next()` devuelve `{ value, done }`: el siguiente valor y si ya se terminó. Tras el último valor llega `done: true` con `value: undefined`.

```text
--- Paso 1: Iterador de Array ---
Primer next(): { value: 10, done: false }
Segundo next(): { value: 20, done: false }
Tercer next(): { value: 30, done: false }
Cuarto next(): { value: undefined, done: true }
```

## Paso 2: recorrer un string a mano

Un `while` que llama a `next()` hasta que `done` es `true` es exactamente lo que hace `for...of` por ti.

```text
--- Paso 2: Iterador de String ---
Char: H
Char: o
Char: l
Char: a
```

## Paso 3: el iterador de un `Map`

Cada valor del iterador de un `Map` es un array `[clave, valor]` (por eso `typeof` dice `object`). En `for...of`, el destructuring `[key, value]` lo separa.

```text
--- Paso 3: Iterador de Map ---
Primera entrada: [ 'user1', 'Alice' ] object
user1 → Alice
user2 → Bob
user3 → Charlie
```

## Paso 4: el iterador de un `Set`

Un `Set` da sus valores en el orden en que se añadieron. El segundo `'red'` no aparece: el `Set` no lo guardó.

```text
--- Paso 4: Iterador de Set ---
Color único: red
Color único: green
Color único: blue
```

## Paso 5: un iterable propio

`countdown` es un objeto normal con un método `[Symbol.iterator]()`. Ese método crea la variable `current` y devuelve el iterador; `next()` la va bajando. Como `current` se crea en cada llamada a `[Symbol.iterator]()`, el spread de la última línea vuelve a empezar desde 3.

```text
--- Paso 5: Iterador Manual ---
Countdown: 3
Countdown: 2
Countdown: 1
Spread: [ 3, 2, 1 ]
```

## Paso 6: un rango con paso

`createRange` es una arrow function que devuelve un objeto iterable (los paréntesis de `=> ({ ... })` indican que las llaves son un objeto y no el cuerpo de la función). El paso (`step`) decide cuánto avanza `current` en cada `next()`.

```text
--- Paso 6: Rango Iterable ---
Rango 1-5: [ 1, 2, 3, 4, 5 ]
Pares 0-10: [ 0, 2, 4, 6, 8, 10 ]
```

## Paso 7: Fibonacci

El iterador guarda tres datos entre llamadas: los dos últimos números (`prev`, `curr`) y cuántos lleva (`count`). `[prev, curr] = [curr, prev + curr]` actualiza los dos a la vez con destructuring. Cuando `count` llega a `limit`, `next()` devuelve `done: true` y el spread se para. Node reparte los arrays largos en varias líneas.

```text
--- Paso 7: Fibonacci ---
Fibonacci: [
  1,  1,  2,  3,  5,
  8, 13, 21, 34, 55
]

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, añade una quinta llamada a `next()`. ¿Qué devuelve?
2. En el paso 5, ¿qué pasaría si `let current = this.start` estuviera fuera de `[Symbol.iterator]()`, al nivel del objeto? Pista: piensa en el spread de la última línea.
3. En el paso 7, cambia `limit` a 0. ¿Qué imprime el spread?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — `for...of` y `for...in`](../lab-02-for-loops/README.md) → |

[↑ Semana 08](../../README.md)
