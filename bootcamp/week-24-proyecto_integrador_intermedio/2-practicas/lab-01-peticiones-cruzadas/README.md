# Lab 01 — Peticiones que se cruzan

## Objetivo

Ver qué pasa cuando varias peticiones están en marcha a la vez: una respuesta vieja que llega tarde y tapa la nueva, una petición que no termina nunca, varias secciones que cargan a la vez y fallos que merece la pena reintentar. Es el repaso de las semanas 13 a 16 que necesita la búsqueda del proyecto.

**Tiempo:** 50 min · **Repaso:** [teoría 01](../../1-teoria/01-repaso-semanas-13-23.md#peticiones-semanas-13-a-16) y [condiciones de carrera (semana 16)](../../../week-16-apis_rest_crud/1-teoria/04-estados-carga.md#4-condiciones-de-carrera)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (`Ctrl+/` o `Cmd+/`) y ejecuta:

```bash
cd bootcamp/week-24-proyecto_integrador_intermedio/2-practicas/lab-01-peticiones-cruzadas
node starter/index.js
```

No hay servidor. Arriba del archivo están las ayudas:

- **`fakeApi(query, { ms, signal, fail })`** busca `query` en una lista de seis objetos del cielo y responde a los `ms` milisegundos. Si `signal` se cancela antes, rechaza con el motivo del signal. Con `fail: 'red'` rechaza con un `TypeError`, como `fetch` sin conexión; con `fail: 404` (u otro número), con un error que lleva ese `status`.
- **`paint(query, results)`** «pinta» los resultados: guarda en `screen` lo último pintado y lo escribe.
- **`at()`** da los milisegundos desde el último `restart()`, redondeados a 10 para que la salida sea estable.

Las salidas se obtuvieron con Node 24.19.0, y deberían coincidir con las tuyas.

---

## Paso 1: La respuesta vieja llega la última

```text
--- Paso 1: Pintar cada respuesta que llega ---
    150 ms pinto «ega»: Vega
    300 ms pinto «e»: Vega, Betelgeuse, Nebulosa de Orión, Pléyades, Galaxia de Andrómeda
  En pantalla: «e»: Vega, Betelgeuse, Nebulosa de Orión, Pléyades, Galaxia de Andrómeda
```

La persona escribe `e` y, 50 ms después, `ega`. La búsqueda de `ega` responde antes (100 ms) que la de `e` (300 ms), así que la pantalla acaba mostrando los resultados de `e` mientras el buscador dice `ega`. Nadie garantiza que las respuestas lleguen en el orden en que salieron las peticiones: depende de lo que tarde el servidor en cada una.

## Paso 2: Ignorar las respuestas viejas con un contador

```text
--- Paso 2: Solo cuenta la última búsqueda ---
    150 ms pinto «ega»: Vega
    300 ms ignoro «e»: ya hay una búsqueda más nueva
  En pantalla: «ega»: Vega
```

Cada búsqueda guarda su número en `id`. Cuando llega la respuesta, compara ese número con `lastId`, el de la última búsqueda: si no coinciden, la respuesta es vieja y se tira. La pantalla ya es correcta, pero la petición vieja ha seguido en marcha hasta el final, gastando red y trabajo del servidor.

## Paso 3: Cancelar la búsqueda vieja con AbortController

```text
--- Paso 3: Cada búsqueda cancela la anterior ---
     50 ms «e» cancelada (AbortError)
    150 ms pinto «ega»: Vega
  En pantalla: «ega»: Vega
```

Cada búsqueda crea un `AbortController` y, antes, cancela el de la anterior con `abort()`. La búsqueda de `e` se rechaza a los 50 ms con un error de nombre `AbortError`, el mismo que da `fetch` con un `signal` cancelado ([semana 15](../../../week-15-fetch_api/README.md)). Una cancelación no es un fallo que haya que enseñar: el `catch` la reconoce por el nombre y no hace nada más. Es lo que hace `createLatest` en el proyecto ([semana 16](../../../week-16-apis_rest_crud/README.md)).

## Paso 4: Un tiempo máximo y una cancelación a la vez

```text
--- Paso 4: AbortSignal.timeout y AbortSignal.any ---
    100 ms pinto «vega»: Vega
    200 ms «vega» falla con TimeoutError
     50 ms «vega» falla con AbortError
```

- **Qué:** `AbortSignal.timeout(200)` es un signal que se cancela solo a los 200 ms, con un error de nombre `TimeoutError`. `AbortSignal.any([a, b])` es un signal que se cancela en cuanto se cancela cualquiera de los dos.
- **Para qué:** una petición necesita a la vez un tiempo máximo (que un servidor colgado no deje la página esperando para siempre) y poder cancelarse desde fuera (una búsqueda más nueva).
- **Impacto:** la primera búsqueda responde a tiempo; la segunda tarda 500 ms y el tiempo máximo la corta a los 200 ms; la tercera la cancela `mine` a los 50 ms. El nombre del error dice cuál de las dos causas fue, y la página puede dar un mensaje distinto a cada una. Es lo que hace `requestJson` en el proyecto.

## Paso 5: Tres búsquedas a la vez

```text
--- Paso 5: Tres búsquedas a la vez ---
    120 ms todas han terminado
  ✅ «e»: Vega, Betelgeuse, Nebulosa de Orión, Pléyades, Galaxia de Andrómeda
  ✅ «nebulosa»: Nebulosa de Orión
  ⚠️  «vega»: no se pudo cargar (fetch failed)
```

`Promise.allSettled` ([semana 13](../../../week-13-programacion_asincronica_callbacks_promises/README.md)) espera a que terminen todas, bien o mal, y da un resultado por promesa: `{ status: 'fulfilled', value }` o `{ status: 'rejected', reason }`. Tarda lo que la más lenta (120 ms), no la suma. Con `Promise.all`, el fallo de la tercera habría rechazado todo y la página no podría enseñar las dos que sí cargaron: en una página con varias secciones, una sección caída no debe dejar las demás en blanco.

## Paso 6: Reintentar solo lo que tiene sentido

```text
--- Paso 6: Reintentos con espera creciente ---
     10 ms intento 1: fetch failed
    120 ms intento 2: fetch failed
    330 ms resultado: Vega
     10 ms intento 1: HTTP 404 (no se reintenta)
     10 ms intento 1: HTTP 503
    120 ms intento 2: HTTP 503
    330 ms intento 3: HTTP 503
    330 ms me rindo: HTTP 503

✅ Lab completado.
```

`withRetry` vuelve a llamar a `request` cuando el fallo puede ser pasajero: sin red (`TypeError`) o un error del servidor (5xx). Entre intentos espera cada vez el doble (100, 200 ms...), para no saturar un servidor que ya va mal. Un 404 no se reintenta: la ficha no existe y no va a existir por preguntar otra vez. Tampoco un 422: los datos seguirán siendo los mismos. Con `retries: 2`, el tercer fallo se rinde y lanza el error.

En el proyecto no hay reintentos automáticos: la página enseña el error y un botón **Reintentar**, y es la persona quien decide.

---

## Comprobación

1. En el paso 1, cambia los tiempos para que `e` tarde 50 ms y `ega` 100 ms. ¿Qué queda en pantalla? ¿Por qué el error del paso 1 no se ve siempre, y por qué eso lo hace más peligroso?
2. ¿Qué ventaja tiene el paso 3 sobre el paso 2? ¿Hay algún caso en el que el contador del paso 2 siga haciendo falta aunque uses `AbortController`? (Piensa en una respuesta que ya ha llegado pero cuyo JSON aún se está leyendo.)
3. En el paso 4, ¿qué mensaje darías a la persona con un `TimeoutError` y cuál con un `AbortError`? Compáralo con `messageFor` en el `main.js` del proyecto.
4. En el paso 6, ¿qué pasaría si una petición `POST` que crea una ficha se reintentara después de que el servidor la hubiera creado pero antes de que llegara la respuesta?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — La copia local](../lab-02-copia-local/README.md) → |

[↑ Semana 24](../../README.md)
