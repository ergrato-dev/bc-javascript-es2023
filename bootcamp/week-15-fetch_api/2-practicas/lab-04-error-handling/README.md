# Lab 04 — Errores con fetch

## Objetivo

Distinguir los errores que puede dar una petición (de red, de estado HTTP, de un cuerpo que no se puede leer y de tiempo agotado), convertir los estados HTTP en errores propios con el mensaje del servidor, reintentar solo los fallos que pueden arreglarse solos y dar a cada error un mensaje que entienda quien usa la aplicación.

**Tiempo:** 50 min · **Teoría:** [04 - Manejo de errores](../../1-teoria/04-error-handling.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-15-fetch_api/2-practicas/lab-04-error-handling
node starter/index.js
```

El lab usa la [API de prácticas](../lab-01-primera-peticion/README.md#la-api-de-prácticas) del lab 01. Sus rutas `/status/<código>` responden con el estado que pidas, `/broken` manda un JSON cortado y `/flaky` falla dos veces antes de responder bien. La clase `HttpError` del principio del archivo ya está escrita: es un error con la propiedad `status`, como los errores propios de la [semana 11](../../../week-11-manejo_errores_moderno/README.md). Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: error de red

El paso arranca un segundo servidor y lo apaga enseguida, así que en su dirección no escucha nadie. Sin respuesta, `fetch` **se rechaza** con un `TypeError` de mensaje genérico `fetch failed`. El motivo concreto está en `error.cause`: `ECONNREFUSED` significa que la conexión se ha rechazado. Sin internet o con un dominio que no existe saldría otro código, como `ENOTFOUND`.

```text
--- Paso 1: Error de red ---
❌ TypeError: fetch failed
Causa: ECONNREFUSED
```

## Paso 2: convertir un estado HTTP en un error

Como viste en el lab 01, un `500` no rechaza la promesa. `checkStatus` lanza un `HttpError` cuando `ok` es falso, así el `catch` recoge los fallos de red y los de estado en el mismo sitio, y `error.status` dice cuál ha sido.

```text
--- Paso 2: HttpError ---
✅ /planets/1 200
❌ /status/500 true 500 HTTP 500 Internal Server Error
```

## Paso 3: usar el mensaje del servidor

El mensaje del servidor suele explicar mejor el problema que el estado. Antes de leer el cuerpo con `json()`, `toHttpError` mira la cabecera `Content-Type`: si el error no viene en JSON (aquí, `/status/502?text` responde con texto), usa `statusText`.

```text
--- Paso 3: Mensaje del servidor ---
No existe el planeta 42
Bad Gateway
```

## Paso 4: un cuerpo que no es JSON válido

`/broken` responde `200` con un JSON cortado a medias. La petición ha ido bien (`ok` es verdadero), pero `json()` se rechaza con un `SyntaxError`, el mismo error que lanza `JSON.parse`.

```text
--- Paso 4: JSON roto ---
ok: true
❌ SyntaxError: Expected double-quoted property name in JSON at position 18 (line 1 column 19)
```

## Paso 5: tiempo agotado

Con `AbortSignal.timeout(150)`, `fetch` se rechaza con un `TimeoutError` si la respuesta no llega en 150 ms. Comprobar `error.name` permite dar un mensaje propio.

```text
--- Paso 5: Tiempo agotado ---
⏱️ El servidor tardó más de 150 ms
```

## Paso 6: reintentar solo lo que puede salir bien

Repetir una petición tiene sentido si el fallo es pasajero: la red (`TypeError`) o un problema del servidor (estado 500 o superior). Un `404` dará lo mismo cada vez, así que `isRetryable` lo descarta y el error sale al primer intento. Entre intentos se espera cada vez más (100 ms, 200 ms…) para no saturar a un servidor que ya va mal.

```text
--- Paso 6: Reintentos ---
  intento 1: HTTP 503
  intento 2: HTTP 503
✅ Respuesta al intento 3
  intento 1: HTTP 404
❌ Sin reintentos: HTTP 404
```

El `return await` es necesario: sin `await`, un `SyntaxError` de `res.json()` escaparía del `try` (lo viste en el lab 02 de la semana 14).

## Paso 7: un mensaje para cada tipo de error

`describeError` traduce cada error en una frase para quien usa la aplicación, según su `name` o su `status`. `loadPlanet` nunca se rechaza: devuelve el texto que se mostraría en pantalla.

```text
--- Paso 7: describeError ---
✅ Venus
❌ No se ha encontrado lo que buscas.
❌ El servidor tiene un problema. Inténtalo más tarde.
❌ El servidor ha enviado datos que no se pueden leer.
❌ El servidor tarda demasiado. Inténtalo más tarde.
❌ Error inesperado: HTTP 401

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, imprime `error.cause.message`. ¿Qué información añade a `fetch failed`?
2. En el paso 6, pide `/status/500` en lugar de `/planets/42`. ¿Cuántos intentos salen y cuánto tarda en total? Calcula las esperas antes de ejecutar.
3. Añade a `describeError` un caso para el estado `401` que diga «Tienes que iniciar sesión.» y comprueba que la última línea del paso 7 cambia.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Cabeceras y configuración](../lab-03-headers-config/README.md) | [Proyecto — Cliente del catálogo](../../3-proyecto/README.md) → |

[↑ Semana 15](../../README.md)
