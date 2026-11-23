# Lab 04 — Iteración asíncrona

## Objetivo

Recorrer valores que llegan poco a poco con `for await...of`, producirlos con generadores asíncronos (`async function*`), leer datos por páginas, delegar con `yield*`, salir antes de tiempo, capturar errores del recorrido y reunir todo en un array con `Array.fromAsync`.

**Tiempo:** 50 min · **Teoría:** [04 - Patrones avanzados](../../1-teoria/04-advanced-patterns.md), secciones 3 a 5

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-14-async_await/2-practicas/lab-04-async-iteration
node starter/index.js
```

Los pasos 4, 5 y 7 usan la función `pages` del paso 3: descomenta los pasos en orden. Los generadores (`function*`, `yield`, `next()`) son los de la [semana 08](../../../week-08-iteradores_generadores/README.md); aquí se añade la espera. Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: `for await...of` con un array de promesas

`for await...of` espera a cada valor antes de entrar en el cuerpo del bucle. Con un array de promesas las recorre **en el orden del array**: `Luna` llega antes que `Sol`, pero el bucle espera a `Sol` porque va primero.

```text
--- Paso 1: for await...of ---
Recibido: Sol
Recibido: Luna
Recibido: Venus
```

`for await` solo se puede usar dentro de una función `async` o en el nivel superior de un módulo, igual que `await`.

## Paso 2: un generador asíncrono

`async function*` declara un generador asíncrono: puede usar `await` y `yield`. Su `next()` devuelve una **promesa** de `{ value, done }`. El primer `next()` consume el `3`, así que el bucle empieza en el `2`.

```text
--- Paso 2: async function* ---
next(): { value: 3, done: false }
Cuenta atrás: 2
Cuenta atrás: 1
🚀 Despegue
```

## Paso 3: leer por páginas

`getPage` simula una API que devuelve unas pocas constelaciones por consulta e indica con `hasMore` si quedan más. El generador `pages` pide la página siguiente solo cuando el bucle termina con la anterior. Quien lo usa recorre páginas sin saber cómo se piden.

```text
--- Paso 3: Paginación ---
Página: [ 'Andrómeda', 'Casiopea', 'Orión' ]
Página: [ 'Pegaso', 'Perseo', 'Lira' ]
Página: [ 'Cisne', 'Escorpio' ]
```

## Paso 4: `yield*` para delegar

`yield* items` entrega los elementos de `items` uno a uno. `allConstellations` convierte las páginas en una secuencia de nombres sueltos.

```text
--- Paso 4: yield* ---
8 constelaciones: Andrómeda, Casiopea, Orión, Pegaso, Perseo, Lira, Cisne, Escorpio
```

## Paso 5: `break` detiene el generador

Al salir del bucle con `break`, JavaScript cierra el generador: se ejecuta su `finally` y no se piden más páginas. Solo se han consultado 2 de las 3.

```text
--- Paso 5: Salir antes ---
  (página pedida)
  (página pedida)
Pegaso encontrado en [ 'Pegaso', 'Perseo', 'Lira' ]
  (generador cerrado)
```

Lo mismo pasa con `return` dentro del bucle o con un error que lo interrumpa.

## Paso 6: errores dentro de `for await`

Si el generador lanza un error (o una promesa que espera se rechaza), el error sale del `for await`, y un `try`/`catch` alrededor lo captura. Los valores que llegaron antes ya se procesaron.

```text
--- Paso 6: Errores ---
✅ Lectura 1
✅ Lectura 2
❌ Sensor desconectado
```

## Paso 7: `Array.fromAsync`

`Array.fromAsync(iterable)` (ES2024) recorre un iterable asíncrono y devuelve una promesa del array con todos sus valores. Como `Array.from`, acepta una función que transforma cada valor.

```text
--- Paso 7: Array.fromAsync ---
[
  [ 'Andrómeda', 'Casiopea', 'Orión', 'Pegaso' ],
  [ 'Perseo', 'Lira', 'Cisne', 'Escorpio' ]
]
[ 'ANDRÓMEDA', 'CASIOPEA', 'ORIÓN' ]

✅ Lab completado.
```

Úsalo solo cuando sepas que la secuencia termina y cabe en memoria: lee todas las páginas antes de devolver nada.

---

## Comprobación

1. En el paso 1, cambia el array por `[fetchValue('Sol', 60), fetchValue('Luna', 20)]` y añade `const start = performance.now();` antes del bucle y `console.log(Math.round(performance.now() - start))` dentro. ¿Por qué `Luna` sale casi a la vez que `Sol`?
2. En el paso 5, busca `'Escorpio'` en lugar de `'Pegaso'`. ¿Cuántas veces sale `(página pedida)` y cuándo sale `(generador cerrado)`?
3. Escribe un generador `async function* firstN(iterable, n)` que entregue solo los `n` primeros valores de otro. `await Array.fromAsync(firstN(allConstellations(3), 2))` debe dar `[ 'Andrómeda', 'Casiopea' ]` y pedir una sola página.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — En orden o a la vez](../lab-03-parallel-vs-sequential/README.md) | [Proyecto — Explorador de catálogo](../../3-proyecto/README.md) → |

[↑ Semana 14](../../README.md)
