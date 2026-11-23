# Lab 01 — Tu primera petición

## Objetivo

Hacer peticiones GET con `fetch`, leer la `Response` que devuelve (estado, `ok`, cabeceras y cuerpo), construir URLs con parámetros, lanzar varias peticiones a la vez y escribir una función que convierta los errores HTTP en excepciones.

**Tiempo:** 50 min · **Teoría:** [01 - Fetch básico](../../1-teoria/01-fetch-basics.md) y [02 - Request y Response](../../1-teoria/02-request-response.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-15-fetch_api/2-practicas/lab-01-primera-peticion
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24.

### La API de prácticas

Las primeras líneas del lab arrancan una API en tu propio equipo con `startServer()`, del archivo [`../shared/server.js`](../shared/server.js), y la apagan al final con `server.close()`.

- **Qué:** un servidor HTTP pequeño, escrito con el módulo `node:http` de Node, que responde con datos de los planetas del sistema solar.
- **Para qué:** las peticiones son reales (salen de `fetch`, viajan por HTTP y vuelven), pero no necesitas internet ni dependes de una API pública que cambie sus datos o deje de funcionar.
- **Impacto:** cada ejecución empieza con los mismos datos, así que tu salida debe coincidir con la de este README. El puerto cambia en cada ejecución; por eso el código usa siempre la variable `API`.

No hace falta que entiendas ni edites `server.js`. Los labs 02 a 04 usan el mismo servidor.

---

## Paso 1: `fetch` devuelve una `Response`

`fetch(url)` devuelve una promesa que se cumple en cuanto llegan el estado y las cabeceras, **antes** de leer el cuerpo. La `Response` trae el código de estado (`status`), su texto (`statusText`), `ok` (verdadero si el estado está entre 200 y 299) y las cabeceras en `headers`.

```text
--- Paso 1: La respuesta ---
status: 200 OK
ok: true
Content-Type: application/json; charset=utf-8
```

## Paso 2: leer el cuerpo como JSON

El cuerpo se lee aparte, con otro `await`: `response.json()` lo descarga y lo convierte de texto JSON a un objeto de JavaScript.

```text
--- Paso 2: response.json() ---
{ id: 3, name: 'Tierra', type: 'rocoso', moons: 1 }
Tierra tiene 1 luna
```

## Paso 3: una lista y parámetros en la URL

`new URL(ruta, base)` crea una URL y `url.searchParams.set()` le añade parámetros (`?type=gaseoso&limit=1`) codificando los caracteres especiales por ti. `fetch` acepta el objeto `URL` directamente. La API devuelve solo el primer planeta gaseoso porque `limit` vale `1`.

```text
--- Paso 3: URLSearchParams ---
Ruta pedida: /planets?type=gaseoso&limit=1
[ 'Júpiter' ]
```

## Paso 4: `text()` y el cuerpo se lee una sola vez

`text()` devuelve el cuerpo como texto, sin interpretarlo. El cuerpo es un flujo de datos que se consume al leerlo: si intentas leerlo otra vez (con `text()`, `json()` o cualquier otro método), `fetch` lanza un `TypeError`.

```text
--- Paso 4: text() ---
Texto: Bienvenido al planetario
❌ TypeError: Body is unusable: Body has already been read
```

Si necesitas el cuerpo dos veces, guarda el resultado en una variable o usa `response.clone()` antes de leer (lo verás en el lab 03).

## Paso 5: varias peticiones a la vez

Como en el lab 03 de la semana 14, `Promise.all` lanza las tres peticiones a la vez. Hacen falta dos esperas: una para las respuestas y otra para sus cuerpos. Los planetas salen en el orden de `ids`, no en el orden en que llegan.

```text
--- Paso 5: Promise.all ---
Júpiter: 95 lunas
Saturno: 146 lunas
Neptuno: 16 lunas
```

## Paso 6: un 404 no es un error para `fetch`

El servidor ha contestado, así que la promesa de `fetch` **se cumple** aunque el estado sea 404. `fetch` solo se rechaza cuando no llega ninguna respuesta (sin conexión, servidor apagado, petición cancelada). Comprobar el estado es cosa tuya, con `response.ok` o `response.status`.

```text
--- Paso 6: 404 ---
La promesa se ha cumplido. status: 404 · ok: false
Cuerpo: { error: 'No existe el planeta 9' }
```

## Paso 7: una función reutilizable

`getJson` junta los pasos anteriores: hace la petición, lanza un error si `ok` es falso y, si no, devuelve el JSON. Quien la usa trabaja con `try`/`catch`, como con cualquier otra función asíncrona.

```text
--- Paso 7: getJson ---
✅ Marte
❌ HTTP 404 en /planets/9

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, imprime `typeof response.json` y `response.bodyUsed`. ¿Qué vale `bodyUsed` antes y después de un `await response.json()`?
2. En el paso 3, cambia `type` por `'rocoso'` y quita la línea de `limit`. ¿Qué ruta se pide y qué planetas llegan? Prueba también `url.searchParams.set('type', 'gas & polvo')` y fíjate en cómo queda escrita la ruta.
3. En el paso 7, ¿qué pasaría con `getJson('/planets/9')` si quitaras el `if (!res.ok)`? Pruébalo y explica por qué no salta el `catch`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Métodos HTTP](../lab-02-metodos-http/README.md) → |

[↑ Semana 15](../../README.md)
