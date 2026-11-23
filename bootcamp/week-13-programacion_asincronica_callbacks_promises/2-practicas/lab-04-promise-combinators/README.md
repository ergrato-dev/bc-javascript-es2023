# Lab 04 — Combinadores de promesas

## Objetivo

Lanzar varias promesas a la vez y combinarlas con `Promise.all()`, `Promise.race()`, `Promise.allSettled()` y `Promise.any()`: cuándo se cumple y cuándo se rechaza cada uno, qué devuelve y para qué sirve.

**Tiempo:** 55 min · **Teoría:** [04 - Métodos de Promise](../../1-teoria/04-promise-methods.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) empieza con tres funciones auxiliares activas: `succeedAfter(ms, value)` se cumple con `value` pasados `ms` milisegundos, `failAfter(ms, message)` se rechaza con `new Error(message)` y `elapsed(start)` mide el tiempo transcurrido redondeado a la decena.

Tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-13-programacion_asincronica_callbacks_promises/2-practicas/lab-04-promise-combinators
node starter/index.js
```

Los cuatro combinadores reciben un array de promesas y devuelven **una** promesa. Las promesas del array ya están en marcha cuando las recibe: el combinador solo decide cuándo y con qué se cumple o se rechaza la suya. Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: `Promise.all()` en paralelo

`Promise.all()` se cumple cuando se cumplen **todas**, con un array de resultados en el **mismo orden** que el array de entrada, no en el orden en que terminan. Con destructuring das nombre a cada resultado. Como las tres corren a la vez, tarda lo que la más lenta, no la suma.

```text
--- Paso 1: Promise.all() ---
Visitante: Ana
Sesiones: 2
Butacas: 2
Tardó unos 300 ms, no 600
```

## Paso 2: `Promise.all()` con un error

En cuanto una se rechaza, `Promise.all()` se rechaza con ese error y descarta los resultados de las demás, aunque hayan salido bien. Úsalo cuando necesitas todos los datos o ninguno.

```text
--- Paso 2: Promise.all() con un error ---
❌ Falló una: Reservas no responde
```

## Paso 3: `Promise.race()`

`Promise.race()` copia el resultado de la **primera que termina**, se cumpla o se rechace.

```text
--- Paso 3: Promise.race() ---
Gana: Rápida (100 ms)
```

## Paso 4: tiempo límite con `race()`

`withTimeout` hace competir la operación con una promesa que se rechaza pasados `ms`. Si la operación tarda más, gana el rechazo.

- **Qué:** una carrera entre el dato y un temporizador.
- **Para qué:** que la página no se quede esperando para siempre a un servidor que no contesta.
- **Impacto:** la operación lenta **no se cancela**: sigue en marcha y su resultado se ignora. El `await succeedAfter(300)` del final espera a que acabe, para que no se mezcle con el paso siguiente.

```text
--- Paso 4: Tiempo límite ---
✅ Datos a tiempo
❌ Tiempo agotado: 200 ms
```

## Paso 5: `Promise.allSettled()`

`Promise.allSettled()` espera a **todas** y nunca se rechaza. Devuelve un objeto por promesa: `{ status: 'fulfilled', value }` o `{ status: 'rejected', reason }`. Úsalo cuando cada resultado sirve por separado, como un panel que muestra los servicios que responden y marca los que no.

```text
--- Paso 5: Promise.allSettled() ---
Claves: [ 'status', 'value' ] [ 'status', 'reason' ]
✅ Sesiones: [ 1, 2, 3 ]
❌ Reservas: Reservas no responde
✅ Tienda: [ 4, 5 ]
```

## Paso 6: `Promise.any()`

`Promise.any()` se cumple con la **primera que sale bien** e ignora los rechazos. Solo se rechaza si fallan todas, con un `AggregateError` que guarda en `errors` el error de cada una, en el orden del array. Úsalo con fuentes intercambiables, como varios servidores espejo.

```text
--- Paso 6: Promise.any() ---
Primera con éxito: Espejo medio
AggregateError: All promises were rejected
Errores: [ 'Espejo 1 caído', 'Espejo 2 caído' ]
```

## Paso 7: los cuatro con las mismas promesas

Tres promesas: P1 sale bien a los 200 ms, P2 falla a los 100 ms y P3 sale bien a los 300 ms. Cada combinador recibe promesas nuevas (`createPromises()`), porque una promesa solo se resuelve una vez.

```text
--- Paso 7: Comparación ---
all        → ❌ P2 falla (100 ms)
race       → ❌ P2 falla (100 ms)
allSettled → [ 'fulfilled', 'rejected', 'fulfilled' ]
any        → P1 (200 ms)

✅ Lab completado.
```

| Combinador | Se cumple cuando | Se rechaza cuando |
|---|---|---|
| `Promise.all()` | se cumplen todas | falla la primera |
| `Promise.race()` | la primera que termina se cumple | la primera que termina falla |
| `Promise.allSettled()` | terminan todas | nunca |
| `Promise.any()` | se cumple la primera | fallan todas (`AggregateError`) |

---

## Comprobación

1. En el paso 7, cambia el retraso de P2 a `400`. Antes de ejecutar, escribe qué imprime cada combinador.
2. En el paso 1, ¿cuánto tardaría si encadenaras las tres con `.then()` como en el [lab 03](../lab-03-promise-chaining/README.md), paso 2? ¿Cuándo es obligatorio encadenar en lugar de usar `Promise.all()`?
3. Un panel muestra el estado de cinco servicios. ¿Qué combinador usas para pintar todos, y cuál para mostrar los datos del primer servidor que conteste bien?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Encadenar promesas](../lab-03-promise-chaining/README.md) | [Proyecto — Panel de servicios](../../3-proyecto/README.md) → |

[↑ Semana 13](../../README.md)
