# Lab 03 — Cabeceras y configuración

## Objetivo

Leer las cabeceras de una respuesta, manejar el objeto `Headers`, comprobar qué envía `fetch` al servidor, autenticarte con `Authorization`, preparar peticiones con `Request`, leer un cuerpo dos veces con `clone()` y cancelar peticiones con `AbortController` y `AbortSignal.timeout()`.

**Tiempo:** 55 min · **Teoría:** [02 - Request y Response](../../1-teoria/02-request-response.md) y [03 - Headers y configuración](../../1-teoria/03-headers-config.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-15-fetch_api/2-practicas/lab-03-headers-config
node starter/index.js
```

El lab usa la [API de prácticas](../lab-01-primera-peticion/README.md#la-api-de-prácticas) del lab 01. Su ruta `/echo` devuelve lo que ha recibido (método, algunas cabeceras y cuerpo), y `/private` solo responde a quien manda el token correcto. Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: leer las cabeceras de la respuesta

`response.headers.get(nombre)` devuelve el valor de una cabecera, o `null` si no viene. Los nombres no distinguen mayúsculas: `Content-Type` y `content-type` son la misma. La API manda en `X-Total-Count` cuántos planetas hay en total aunque solo devuelva 3, algo habitual en las API que paginan.

```text
--- Paso 1: Cabeceras de la respuesta ---
content-type: application/json; charset=utf-8
x-total-count: 8
¿Tiene ETag? false
Recibidos: 3
```

## Paso 2: el objeto `Headers`

`new Headers()` crea un conjunto de cabeceras que puedes modificar antes de enviarlo. `set` reemplaza el valor, `append` añade otro a los que ya hay (por eso `accept` tiene dos, separados por coma) y `delete` la borra. Se recorre como un `Map`, con los nombres siempre en minúsculas.

```text
--- Paso 2: new Headers() ---
accept: application/json, text/plain
¿x-client? true
[ [ 'accept', 'application/json, text/plain' ] ]
```

## Paso 3: ver qué envía `fetch`

`/echo` devuelve la petición tal como llegó. Las cabeceras que pones en `headers` viajan al servidor, y `fetch` añade otras por su cuenta, como `accept: */*` («acepto cualquier formato»). El cuerpo llega como texto: es el resultado de `JSON.stringify`.

```text
--- Paso 3: /echo ---
{
  method: 'POST',
  headers: {
    accept: '*/*',
    'content-type': 'application/json',
    'x-client': 'lab-03'
  },
  body: '{"planet":"Venus"}'
}
```

## Paso 4: autenticación con `Authorization`

Las API privadas piden una credencial en cada petición. La forma más común es `Authorization: Bearer <token>`. Sin ella, el servidor contesta `401 Unauthorized`.

```text
--- Paso 4: Authorization ---
Sin token: 401 Falta un token válido
Con token: 200 Acceso concedido al archivo de observaciones
```

En una aplicación real el token llega al iniciar sesión y nunca se escribe en el código: aquí lo da `server.token` solo para practicar.

## Paso 5: `Request` y `clone()`

`new Request(url, opciones)` prepara una petición sin enviarla; `fetch(request)` la envía después. `response.clone()` crea una copia de la respuesta **antes** de leerla, y cada una tiene su propio cuerpo: puedes leer el original con `json()` y la copia con `text()`.

```text
--- Paso 5: Request y clone() ---
GET /planets/7 application/json
json(): Urano
text() de la copia: {"id":7,"name":"Urano","type":"helado","moons":28}
```

## Paso 6: cancelar con `AbortController`

La opción `signal` conecta la petición con una señal de cancelación:

- `new AbortController()` crea una señal que cancelas tú con `controller.abort()`. Aquí se cancela a los 100 ms y `fetch` se rechaza con un error de nombre `AbortError`.
- `AbortSignal.timeout(ms)` crea una señal que se cancela sola pasados esos milisegundos. El error se llama `TimeoutError`, así que puedes distinguir un tiempo agotado de una cancelación tuya.
- Si la respuesta llega antes del límite, no pasa nada.

```text
--- Paso 6: AbortController ---
❌ AbortError: This operation was aborted
⏱️ TimeoutError: The operation was aborted due to timeout
✅ Respuesta lenta
```

## Paso 7: un cliente con opciones por defecto

`createClient` devuelve una función que ya sabe la URL base, el token y el tiempo máximo, y que respeta las cabeceras que le pases en cada llamada. Es la idea de los clientes HTTP de cualquier aplicación: la configuración común se escribe una vez.

```text
--- Paso 7: createClient ---
{
  status: 200,
  data: { message: 'Acceso concedido al archivo de observaciones' }
}
{
  status: 200,
  data: {
    method: 'GET',
    headers: {
      authorization: 'Bearer clave-del-planetario',
      accept: 'application/json',
      'x-client': 'lab-03'
    },
    body: ''
  }
}

✅ Lab completado.
```

---

## Comprobación

1. En el paso 2, cambia `headers.append('Accept', 'text/plain')` por `headers.set('Accept', 'text/plain')`. ¿Qué imprime ahora `headers.get('accept')`?
2. En el paso 5, lee `uranus.json()` antes de hacer `uranus.clone()`. ¿Qué error sale y por qué?
3. Crea con `createClient` del paso 7 un cliente sin token y con `timeoutMs: 100`, y pide `/slow?ms=300`. ¿Qué error llega? ¿Y si pides `/private`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Métodos HTTP](../lab-02-metodos-http/README.md) | [Lab 04 — Errores con fetch](../lab-04-error-handling/README.md) → |

[↑ Semana 15](../../README.md)
