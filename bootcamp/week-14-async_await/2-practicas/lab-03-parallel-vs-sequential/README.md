# Lab 03 — En orden o a la vez

## Objetivo

Medir la diferencia entre esperar operaciones una detrás de otra y lanzarlas a la vez, combinar las dos formas cuando unas operaciones dependen de otras, evitar el `forEach` con funciones `async` y limitar cuántas operaciones corren a la vez.

**Tiempo:** 55 min · **Teoría:** [04 - Patrones avanzados](../../1-teoria/04-advanced-patterns.md), secciones 1 y 2

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-14-async_await/2-practicas/lab-03-parallel-vs-sequential
node starter/index.js
```

`fetchValue(value, ms)` simula una consulta que tarda `ms` milisegundos (100 si no se indica). `start()` pone el cronómetro a cero y `elapsed()` da el tiempo transcurrido redondeado a la centena: un temporizador nunca es exacto (100 ms reales suelen ser 101 o 102), y redondear hace que tu salida coincida con la de este README. Las salidas se obtuvieron con Node 24.

---

## Paso 1: en orden, un `await` detrás de otro

Cada `await` espera a que termine su consulta antes de lanzar la siguiente: 3 consultas de 100 ms tardan 300 ms.

```text
--- Paso 1: Secuencial ---
[ 'Mercurio', 'Venus', 'Tierra' ] 300 ms
```

## Paso 2: a la vez, con `Promise.all`

Las tres llamadas a `fetchValue` se hacen en la misma línea, así que las tres consultas empiezan juntas. `await Promise.all(...)` espera a la última: el total es lo que tarda la más lenta.

```text
--- Paso 2: Paralelo con Promise.all ---
[ 'Mercurio', 'Venus', 'Tierra' ] 100 ms
```

El diagrama [`02-sequential-vs-parallel.svg`](../../0-assets/02-sequential-vs-parallel.svg) compara los dos casos.

## Paso 3: lanzar primero, esperar después

Lo que hace paralelas a dos operaciones no es `Promise.all`, sino **llamarlas** antes de esperar. Aquí las dos promesas se crean seguidas y luego se esperan: cuando acaba la primera, la segunda ya ha terminado también.

```text
--- Paso 3: Lanzar y luego esperar ---
[ 'Marte', 'Júpiter' ] 100 ms
```

Con más de dos operaciones, `Promise.all` es más claro y además falla en cuanto falla una.

## Paso 4: mixto

La sala y las butacas necesitan la sesión, así que `getShow` va primero. Sala y butacas no dependen entre sí y van a la vez: 100 ms + 100 ms en lugar de 300 ms.

```text
--- Paso 4: Mixto ---
{ room: 'Sala de Anillos de Saturno', seats: 40 } 200 ms
```

## Paso 5: `Promise.allSettled` con `await`

`allSettled` se cumple siempre con un objeto por promesa: `{ status: 'fulfilled', value }` o `{ status: 'rejected', reason }`. Con `await` y un `for...of` se recorre como un array normal.

```text
--- Paso 5: allSettled ---
✅ Mapa estelar
❌ Telescopio sin conexión
```

## Paso 6: `forEach` no espera

`forEach` llama a la función `async` para cada elemento y no hace nada con las promesas que devuelve: el mensaje de fin sale antes que los valores (y las tres consultas corren a la vez). `for...of` con `await` dentro sí espera a cada una, en orden.

```text
--- Paso 6: forEach vs for...of ---
forEach terminó (sin esperar a nadie)
forEach: Luna
forEach: Fobos
forEach: Europa
for...of: Luna
for...of: Fobos
for...of: Europa
for...of terminó
```

`map` tampoco espera, pero devuelve las promesas: `await Promise.all(names.map(fetchName))` es la forma de recorrer un array en paralelo.

## Paso 7: como mucho N a la vez

Lanzar cien consultas juntas puede saturar un servidor. Aquí las lunas se procesan en grupos de `limit`: cada grupo va en paralelo y el siguiente empieza cuando termina el anterior.

```text
--- Paso 7: Concurrencia limitada ---
Grupo Ío + Europa listo a los 100 ms
Grupo Ganímedes + Calisto listo a los 200 ms
Grupo Titán + Encélado listo a los 300 ms
6 lunas en 300 ms

✅ Lab completado.
```

La teoría (sección 6) muestra una versión que no espera al grupo entero: en cuanto termina una consulta, empieza la siguiente.

---

## Comprobación

1. Sin ejecutar: ¿cuánto tarda el paso 1 si `Venus` tarda 300 ms? ¿Y el paso 2? Compruébalo cambiando `fetchValue('Venus')` por `fetchValue('Venus', 300)`.
2. En el paso 3, mueve `const jupiterPromise = fetchValue('Júpiter');` debajo de `const mars = await marsPromise;`. ¿Cuánto tarda ahora y por qué?
3. En el paso 7, cambia `limit` a `3` y a `6`. Anota el tiempo total de cada caso.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Errores con async/await](../lab-02-error-handling/README.md) | [Lab 04 — Iteración asíncrona](../lab-04-async-iteration/README.md) → |

[↑ Semana 14](../../README.md)
