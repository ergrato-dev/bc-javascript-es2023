# Lab 01 — Callbacks y event loop

## Objetivo

Distinguir un callback síncrono de uno asíncrono, predecir en qué orden imprime Node el código síncrono, las promesas y los temporizadores, ver cómo crece el *callback hell* y manejar errores con el patrón *error-first*.

**Tiempo:** 50 min · **Teoría:** [01 - Introducción a la asincronía](../../1-teoria/01-introduccion-asincronia.md) y [02 - Callbacks y sus problemas](../../1-teoria/02-callbacks-problemas.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-13-programacion_asincronica_callbacks_promises/2-practicas/lab-01-callbacks
node starter/index.js
```

Antes de ejecutar cada paso, escribe en un papel el orden en que crees que saldrán las líneas. Luego compáralo con la salida.

La función `wait(ms)` del principio ya está activa. Cada paso termina con `await wait(...)`: espera a que los temporizadores del paso terminen antes de imprimir el título del siguiente, así la salida de cada paso queda junta. `await` fuera de una función (*top-level await*) solo funciona en módulos ES; Node lo detecta y trata el archivo como módulo sin que cambies nada. Qué es una promesa lo ves en el [lab 02](../lab-02-promises-basicas/README.md), y `await` en la semana 14. Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: callbacks síncronos

Un *callback* es una función que pasas a otra función para que la llame ella. `forEach` llama a la tuya una vez por elemento y **no devuelve el control hasta terminar**: es un callback síncrono.

```text
--- Paso 1: Callbacks síncronos ---
Doble de 1 = 2
Doble de 2 = 4
Doble de 3 = 6
forEach ya terminó
```

## Paso 2: callbacks asíncronos con `setTimeout`

`setTimeout(callback, ms)` no espera: entrega el callback al entorno (Node o el navegador), que lo pone en la **cola de tareas** cuando pasan `ms` milisegundos. El event loop solo saca una tarea de la cola cuando la pila de llamadas está vacía, es decir, cuando ha terminado todo el código síncrono. Por eso `Fin` sale antes aunque el retraso sea `0`.

```text
--- Paso 2: Callbacks asíncronos ---
Inicio
Fin
Dentro del timeout
```

## Paso 3: el event loop en acción

Hay dos colas. Los callbacks de las promesas (`.then`) van a la cola de **microtareas**, y los de `setTimeout` a la de **macrotareas** (tareas). Al vaciarse la pila, el event loop ejecuta **todas** las microtareas antes de pasar a la siguiente macrotarea.

```text
--- Paso 3: Event loop ---
1 (síncrono)
4 (síncrono)
3 (promesa: microtarea)
2 (setTimeout: macrotarea)
```

El diagrama de la teoría lo muestra: [`01-event-loop.svg`](../../0-assets/01-event-loop.svg).

## Paso 4: varios temporizadores

Los tres `setTimeout` se programan a la vez. Cada callback entra en la cola cuando vence su tiempo, así que salen ordenados por retraso, no por el orden en que se escribieron.

```text
--- Paso 4: Varios temporizadores ---
Código síncrono
Timeout 3 (0 ms)
Timeout 2 (150 ms)
Timeout 1 (300 ms)
```

## Paso 5: callback hell

Para que una tarea asíncrona empiece cuando acaba la anterior, la siguiente tiene que ir **dentro** del callback de la anterior. Con cuatro pasos el código ya forma una pirámide hacia la derecha: es el *callback hell*.

```text
--- Paso 5: Callback hell ---
Nivel 1
Nivel 2
Nivel 3
Nivel 4: cada paso nuevo mete el código más a la derecha 😱
```

## Paso 6: callbacks *error-first*

Una función asíncrona no puede usar `throw` para avisar de un error: cuando su callback se ejecuta, quien la llamó ya terminó y su `try...catch` ya no existe. La convención de Node es pasar el error como **primer argumento** del callback: `callback(error)` si falla y `callback(null, resultado)` si va bien. Quien recibe el callback comprueba `error` primero.

- **Qué:** `divide` llama a `callback(new Error(...))` o a `callback(null, a / b)`, y `return` evita seguir después de avisar del error.
- **Para qué:** el mismo callback `showResult` trata los dos casos sin `try...catch`.
- **Impacto:** si quien llama olvida comprobar `error`, el fallo pasa desapercibido. Las promesas del lab 02 resuelven eso.

```text
--- Paso 6: Error-first ---
✅ Resultado: 5
❌ Error: División por cero
```

## Paso 7: aplanar el callback hell con funciones con nombre

La misma secuencia que el paso 5, pero cada nivel es una función con nombre que decide qué cargar después. El código ya no crece hacia la derecha y cada función comprueba su error, pero para seguir el flujo hay que leer de abajo arriba: `onLevel1` llama a `loadLevel(2, onLevel2)`, que llama a `onLevel3`.

```text
--- Paso 7: Funciones con nombre ---
Nivel 1 cargado
Nivel 2 cargado
Nivel 3 cargado
❌ El nivel 4 no existe

✅ Lab completado.
```

---

## Comprobación

1. Borra el `await wait(10);` del paso 2 y ejecuta. `Dentro del timeout` se cuela en el paso 3:

   ```text
   --- Paso 3: Event loop ---
   1 (síncrono)
   4 (síncrono)
   3 (promesa: microtarea)
   Dentro del timeout
   2 (setTimeout: macrotarea)
   ```

   ¿Por qué sale después de `3` y antes de `2`? Vuelve a poner la línea.
2. En el paso 4, cambia el retraso del `Timeout 3` a `200`. Antes de ejecutar, escribe el orden de las cuatro líneas.
3. En el paso 6, cambia `return;` por un comentario y ejecuta `divide(10, 0, ...)`. ¿Qué imprime y por qué el `return` es necesario?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Promesas básicas](../lab-02-promises-basicas/README.md) → |

[↑ Semana 13](../../README.md)
