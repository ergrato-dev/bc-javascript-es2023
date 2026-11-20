# Lab 03 — Generadores y `yield`

## Objetivo

Escribir funciones generadoras (`function*`) que entregan valores de uno en uno con `yield`, delegar en otro iterable con `yield*`, crear secuencias infinitas y tomar solo las que necesitas, y pasar valores al generador con `next(value)`.

**Tiempo:** 60 min · **Teoría:** [03 - Generadores](../../1-teoria/03-generators-basics.md) y [04 - yield y delegación](../../1-teoria/04-yield-delegation.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-08-iteradores_generadores/2-practicas/lab-03-generators
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título. El paso 7 usa `take` del paso 4: descomenta el 4 antes.

---

## Paso 1: un generador básico

Llamar a una función con `function*` no ejecuta su cuerpo: devuelve un **generador**, que es un iterador y a la vez un iterable. Cada `next()` ejecuta el cuerpo hasta el siguiente `yield`, entrega ese valor y se pausa ahí. Por eso funciona con spread y con `for...of` sin escribir `[Symbol.iterator]` a mano como en el lab 01.

```text
--- Paso 1: Generador Básico ---
Primer valor: 1
Todos los valores: [ 1, 2, 3 ]
Con for...of: uno dos tres
```

## Paso 2: estado entre `yield`

`id` es una variable local, pero no se pierde: el generador está pausado, no terminado. `while (true)` no cuelga el programa porque cada vuelta se detiene en el `yield` hasta el siguiente `next()`.

```text
--- Paso 2: Generador con Estado ---
ID: user-1
ID: user-2
ID: user-3
```

## Paso 3: delegar con `yield*`

`yield* iterable` entrega, uno a uno, todos los valores de otro iterable. `combined` encadena dos generadores. `flatten` se llama a sí misma con cada array interior (recursión) y aplana cualquier nivel de anidamiento.

```text
--- Paso 3: yield* Delegación ---
Combinado: [ 1, 2, 3, 'a', 'b', 'c' ]
Flatten: [ 1, 2, 3, 4, 5 ]
```

## Paso 4: secuencias infinitas

`naturals` y `fibonacci` no terminan nunca. Es seguro porque un generador es **perezoso** (lazy): solo calcula el valor que le piden. `take(iterable, n)` es otro generador que pide `n` valores y termina con `return`; al salir del `for...of`, el generador de origen se cierra.

`take` comprueba la cuenta **después** del `yield`: si la comprobara antes, pediría un valor de más al origen (el `n + 1`) solo para descartarlo.

```text
--- Paso 4: Generador Infinito ---
Primeros 5 naturales: [ 0, 1, 2, 3, 4 ]
Fibonacci: [
  1, 1,  2,  3,
  5, 8, 13, 21
]
```

## Paso 5: pasar valores con `next(value)`

El primer `next()` ejecuta hasta `yield '¿Tu nombre?'` y entrega la pregunta. El segundo, `next('Ana')`, reanuda el generador: `'Ana'` pasa a ser el resultado de ese `yield` y se guarda en `name`. El `return` final llega como `value` con `done: true`.

```text
--- Paso 5: Pasar Valores ---
Pregunta: ¿Tu nombre?
Respuesta: Hola, Ana
```

## Paso 6: generadores útiles

`range` es el rango del lab 01 en tres líneas. `chunk` parte un array en grupos de `size` con `slice`; el último grupo lleva lo que sobra.

```text
--- Paso 6: Generadores Prácticos ---
Rango: [ 1, 2, 3, 4, 5 ]
Pares: [ 0, 2, 4, 6, 8 ]
Chunks: [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```

## Paso 7: primos

`for (let n = 2; ; n++)` no tiene condición de fin: el generador entrega cada primo que encuentra y `take` decide cuándo parar. `isPrime` solo prueba divisores hasta la raíz cuadrada (`i * i <= n`): si `n` tuviera un divisor mayor, tendría también uno menor.

```text
--- Paso 7: Generador de primos ---
Primeros 10 primos: [
   2,  3,  5,  7, 11,
  13, 17, 19, 23, 29
]

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, ¿qué imprime `console.log(gen.next(), gen.next(), gen.next())` justo después del primer `next()`?
2. En el paso 3, cambia `yield* flatten(item)` por `yield flatten(item)`. ¿Qué sale en `Flatten` y por qué?
3. En el paso 4, ¿qué pasa si escribes `[...naturals()]` sin `take`? No lo ejecutes: razónalo.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — `for...of` y `for...in`](../lab-02-for-loops/README.md) | [Lab 04 — Iterables personalizados](../lab-04-custom-iterable/README.md) → |

[↑ Semana 08](../../README.md)
