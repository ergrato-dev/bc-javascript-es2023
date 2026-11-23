# Proyecto Semana 15 — Cliente del catálogo

## Descripción

Una página que gestiona el catálogo de tu dominio (las obras de una colección, los productos de una tienda, las rutas de un parque...) a través de una API REST. Desde la página se buscan fichas por nombre, se abre una por su id, se crean, se edita su detalle y se borran. Cada acción es una petición `fetch` real a un servidor que corre en tu equipo, y cada fallo (una ficha que no existe, un formulario incompleto, el servidor apagado o demasiado lento) se muestra con un mensaje claro.

La página y el servidor ya están hechos. Tu trabajo es escribir las funciones de `src/logic.js`, que son las que hablan con la API, y cambiar las fichas de ejemplo por las de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-15
cp -r bootcamp/week-15-fetch_api/3-proyecto/starter/. ~/js-proyecto-semana-15/
cd ~/js-proyecto-semana-15
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `server.js` | El servidor: sirve la página y la API `/api/items` con las fichas de `data.js` | No |
| `index.html` | Los formularios, el registro de peticiones y la lista de fichas; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título y las fichas de ejemplo | Sí: paso 2 |
| `src/logic.js` | `TIMEOUT_MS` y `HttpError`, ya hechos, y siete funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | El código que conecta la página con `logic.js` | No |

- **Qué:** `requestJson` es la única función que llama a `fetch`. Las funciones de la API (`listItems`, `getItem`, `createItem`, `updateItem` y `deleteItem`) solo deciden la URL, el método y los datos, y se la pasan.
- **Para qué:** las cabeceras, el JSON, el tiempo máximo y la conversión de errores se escriben una sola vez. Si la API cambiara, por ejemplo para pedir un token, solo cambiaría `requestJson`.
- **Impacto:** `logic.js` no toca el DOM y recibe la URL base de la API como argumento, así `scripts/verificar-semana.sh` la prueba desde Node contra su propio servidor. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

La API que ofrece `server.js` (la cabecera del archivo la describe entera):

| Petición | Respuesta |
|---|---|
| `GET /api/items?search=texto&limit=n` | `200` con las fichas cuyo nombre contiene `texto`, sin distinguir mayúsculas; los dos parámetros son opcionales |
| `GET /api/items/:id` | `200` con la ficha, o `404` |
| `POST /api/items` con `{ name, detail }` | `201` con la ficha creada y su `id`, o `400` si falta algún campo |
| `PATCH /api/items/:id` con `{ name?, detail? }` | `200` con la ficha cambiada, `400` si un campo queda vacío o `404` |
| `DELETE /api/items/:id` | `204` sin cuerpo, o `404` |

Las respuestas de error traen un cuerpo JSON `{ "error": "mensaje" }`. Todas las rutas admiten `?delay=ms` para que la respuesta tarde más.

---

## Paso 1: arrancar el servidor y ver la página (10 min)

```bash
node server.js
```

```text
🚀 Servidor en http://localhost:3000 (Ctrl+C para pararlo)
```

Abre `http://localhost:3000`. Con el starter, la página dice `✔ 0 fichas recibidas` y la lista está vacía, porque `listItems` todavía devuelve `[]`. **Crear** y **Abrir** terminan con un `❌` sin texto, y la consola de las DevTools muestra `TypeError: Cannot read properties of null (reading 'id')`: las funciones aún devuelven `null` y `describeError` una cadena vacía.

Deja el servidor abierto en esa terminal y usa otra para el resto: los comandos de los pasos 3 a 10 hacen peticiones a `http://localhost:3000`. Las fichas que crees, cambies o borres viven en la memoria del servidor; para volver a las de `data.js`, páralo con `Ctrl+C` y arráncalo otra vez. Si cambias `data.js`, reinícialo también para que cargue los datos nuevos.

## Paso 2: tus datos (10 min)

En `src/data.js` están los datos del dominio Planetario, que es solo un ejemplo. Cámbialos por los de **tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- El export por defecto: de 4 a 8 fichas de tu dominio, cada una con `id` (un entero positivo sin repetir), `name` (3 caracteres o más, sin repetir) y `detail` (una línea de descripción).

Las salidas de los pasos siguientes son las de los datos de ejemplo, con el servidor recién arrancado; con los tuyos verás tus fichas y tus ids.

## Paso 3: `buildUrl` (10 min)

Como en el [lab 01](../2-practicas/lab-01-primera-peticion/README.md), paso 3: crea la URL con `new URL(path, baseUrl)` y recorre `params` con `Object.entries`, añadiendo con `url.searchParams.set` solo los que no son `undefined`, `null` ni `''`. Devuelve `url.href`, la URL como texto. `searchParams` codifica los caracteres especiales: el espacio de `cielo de` pasa a `+`. Fíjate en que un `0` sí es un valor válido.

```bash
node --input-type=module -e "import { buildUrl } from './src/logic.js'; console.log(buildUrl('http://localhost:3000', '/api/items', { search: 'cielo de', limit: 2, page: '' }));"
```

```text
http://localhost:3000/api/items?search=cielo+de&limit=2
```

## Paso 4: `requestJson`, una petición GET (15 min)

El centro del proyecto. Empieza por el caso más sencillo, sin `data` ni errores:

- Prepara un objeto `headers` con `Accept: 'application/json'` ([lab 03](../2-practicas/lab-03-headers-config/README.md), paso 3).
- Llama a `fetch(url, { method, headers, signal: AbortSignal.timeout(timeoutMs) })` con `await` ([lab 03](../2-practicas/lab-03-headers-config/README.md), paso 6).
- Devuelve el cuerpo con `response.json()`.

Esta es la única llamada a `fetch` de `logic.js`: una comprobación cuenta que haya exactamente una.

```bash
node --input-type=module -e "import { requestJson } from './src/logic.js'; console.log(await requestJson('http://localhost:3000/api/items/5'));"
```

```text
{
  id: 5,
  name: 'Eclipses',
  detail: 'Por qué ocurren y cuándo será el próximo'
}
```

## Paso 5: `requestJson` con datos (10 min)

Si `data` no es `undefined`, añade a `headers` el `Content-Type: application/json` y pon en las opciones `body: JSON.stringify(data)` ([lab 02](../2-practicas/lab-02-metodos-http/README.md), pasos 1 y 7).

```bash
node --input-type=module -e "import { requestJson } from './src/logic.js'; console.log(await requestJson('http://localhost:3000/api/items', { method: 'POST', data: { name: 'Prueba', detail: 'Creada desde la terminal' } }));"
```

```text
{ id: 7, name: 'Prueba', detail: 'Creada desde la terminal' }
```

## Paso 6: `requestJson` con errores (15 min)

Después del `await fetch(...)`:

- Si `response.ok` es falso, lanza `new HttpError(response.status, mensaje)`. El mensaje es el campo `error` del cuerpo si la cabecera `Content-Type` incluye `application/json`, y `response.statusText` si no ([lab 04](../2-practicas/lab-04-error-handling/README.md), paso 3).
- Si el estado es `204`, devuelve `null` sin leer el cuerpo ([lab 02](../2-practicas/lab-02-metodos-http/README.md), paso 5).

Los errores de red y el tiempo agotado no necesitan código: `fetch` ya se rechaza con un `TypeError` o un `TimeoutError`, y el error sale de `requestJson` tal cual.

```bash
node --input-type=module -e "import { requestJson } from './src/logic.js'; const api = 'http://localhost:3000/api/items'; const cases = [[api + '/42'], [api, { method: 'POST', data: { name: 'Sin detalle' } }], [api + '/1?delay=500', { timeoutMs: 200 }]]; for (const [url, options] of cases) { try { await requestJson(url, options); } catch (error) { console.log('❌', error.name, error.status ?? '-', error.message); } }"
```

```text
❌ HttpError 404 No existe la ficha 42
❌ HttpError 400 La ficha necesita name y detail
❌ TimeoutError - The operation was aborted due to timeout
```

## Paso 7: `listItems` (10 min)

Una línea: `requestJson(buildUrl(baseUrl, '/api/items', { search, limit }))`. Como `buildUrl` ignora los valores vacíos, la página puede pasar los campos del formulario tal cual. Hay 7 fichas porque el paso 5 creó una.

```bash
node --input-type=module -e "import { listItems } from './src/logic.js'; const api = 'http://localhost:3000'; console.log((await listItems(api)).length, 'fichas'); console.log(await listItems(api, { search: 'TE', limit: 2 })); console.log(await listItems(api, { search: 'luna' }));"
```

```text
7 fichas
[
  {
    id: 3,
    name: 'Taller de cohetes',
    detail: 'Actividad para grupos escolares'
  },
  {
    id: 6,
    name: 'Telescopio solar',
    detail: 'Observación de manchas solares en la terraza'
  }
]
[]
```

## Paso 8: `getItem` (5 min)

Igual que `listItems`, con la ruta `` `/api/items/${id}` ``. El `404` ya lo convierte en error `requestJson`.

```bash
node --input-type=module -e "import { getItem } from './src/logic.js'; const api = 'http://localhost:3000'; console.log(await getItem(api, 3)); try { await getItem(api, 42); } catch (error) { console.log('❌', error.status, error.message); }"
```

```text
{
  id: 3,
  name: 'Taller de cohetes',
  detail: 'Actividad para grupos escolares'
}
❌ 404 No existe la ficha 42
```

## Paso 9: `createItem`, `updateItem` y `deleteItem` (15 min)

Las tres llaman a `requestJson` con su método: `POST` a `/api/items` con la ficha como `data`, `PATCH` a `/api/items/<id>` con los cambios como `data` y `DELETE` a `/api/items/<id>` sin datos. `deleteItem` da `null` porque la API responde `204`.

```bash
node --input-type=module -e "import { createItem, updateItem, deleteItem, getItem } from './src/logic.js'; const api = 'http://localhost:3000'; const created = await createItem(api, { name: 'Lluvia de estrellas', detail: 'Las Perseidas en agosto' }); console.log('Creada:', created); console.log('Cambiada:', await updateItem(api, created.id, { detail: 'Las Gemínidas en diciembre' })); console.log('Borrada:', await deleteItem(api, created.id)); try { await getItem(api, created.id); } catch (error) { console.log('❌', error.status, error.message); }"
```

```text
Creada: {
  id: 8,
  name: 'Lluvia de estrellas',
  detail: 'Las Perseidas en agosto'
}
Cambiada: {
  id: 8,
  name: 'Lluvia de estrellas',
  detail: 'Las Gemínidas en diciembre'
}
Borrada: null
❌ 404 No existe la ficha 8
```

## Paso 10: `describeError` (10 min)

Una cadena de `if` como la del [lab 04](../2-practicas/lab-04-error-handling/README.md), paso 7, con los mensajes del comentario de `logic.js`. Comprueba primero `error.name` (`TimeoutError` y `TypeError`) y después si es un `HttpError` (con `instanceof`) y su `status`. Los errores con estado menor de 500 muestran el mensaje de la API, que ya explica el problema.

```bash
node --input-type=module -e "import { describeError, HttpError } from './src/logic.js'; const errors = [new DOMException('Tiempo agotado', 'TimeoutError'), new TypeError('fetch failed'), new HttpError(503, 'Service Unavailable'), new HttpError(404, 'No existe la ficha 42'), new SyntaxError('Unexpected token')]; for (const error of errors) console.log(error.name.padEnd(12), '→', describeError(error));"
```

```text
TimeoutError → El servidor no ha respondido en 3 s.
TypeError    → No hay conexión con el servidor.
HttpError    → El servidor tiene un problema. Inténtalo más tarde.
HttpError    → No existe la ficha 42
SyntaxError  → Error inesperado: Unexpected token
```

`AbortSignal.timeout()` rechaza con un `DOMException` de nombre `TimeoutError`; por eso el comando lo crea así.

## Paso 11: probar la página y comprobar (10 min)

Reinicia el servidor (`Ctrl+C` y `node server.js`) y recarga la página. Con los datos de ejemplo:

1. Al cargar: `✔ 6 fichas recibidas` y las seis tarjetas.
2. **Buscar** `TE` con un máximo de `2`: `✔ 2 fichas recibidas`, Taller de cohetes y Telescopio solar. Vacía los dos campos y busca otra vez para verlas todas.
3. **Crear** con nombre y detalle: `✔ Creada la ficha #7 · ...` y la ficha nueva al final de la lista. Sin detalle: `❌ La ficha necesita name y detail`.
4. ✏️ en una tarjeta pide el detalle nuevo y termina con `✔ Actualizada la ficha #...`; 🗑️ la borra con `✔ Borrada la ficha #...`.
5. **Abrir** el id `3`: `✔ #3 · Taller de cohetes: Actividad para grupos escolares`. Con `999`: `❌ No existe la ficha 999`.
6. Para el servidor con `Ctrl+C` y pulsa **Buscar**: `❌ No hay conexión con el servidor.`
7. Arráncalo lento con `DELAY=4000 node server.js` y pulsa **Buscar**: a los 3 s sale `❌ El servidor no ha respondido en 3 s.`

En los casos con ❌, la consola de las DevTools muestra el error completo y el registro de peticiones de la página, su mensaje original. Vuelve a arrancar el servidor normal con `node server.js`.

Repasa `src/logic.js` antes de entregar. Borra los `TODO` que queden y comprueba que no usas `var` ni `.then()`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-15 ./scripts/verificar-semana.sh 15
# Semana 15 — Fetch API
#   ✅ src/data.js, src/logic.js y src/main.js son módulos ES válidos
#   ...
# 17/17 comprobaciones superadas.
```

Las comprobaciones arrancan su propio servidor con unas fichas de prueba: no hace falta que el tuyo esté abierto. Cada ❌ trae una pista con el paso que lo arregla.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js`, `src/logic.js` y `src/main.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `un-fetch` | `src/logic.js` llama a `fetch` una sola vez (en `requestJson`) y no usa `.then()`, fuera de los comentarios |
| `datos-exports` | `data.js` exporta `TITLE` y por defecto de 4 a 8 fichas con `id` entero positivo sin repetir, `name` de 3 o más caracteres sin repetir y `detail` de texto |
| `datos-dominio` | El título y las fichas no son los del ejemplo Planetario |
| `url` | `buildUrl` une la base y la ruta, codifica los parámetros y añade solo los que tienen valor (`0` incluido) |
| `peticion-get` | `requestJson` hace un `GET` con `Accept: application/json` y una señal de cancelación, sin cuerpo, y devuelve el cuerpo JSON |
| `peticion-json` | `requestJson` envía `data` como cuerpo JSON con `Content-Type: application/json` |
| `peticion-errores` | `requestJson` se rechaza con un `HttpError` con el `status` y el mensaje de la API (o `statusText` si el cuerpo no es JSON), y devuelve `null` con un `204` |
| `tiempo-agotado` | `requestJson` cancela la petición pasados `timeoutMs` con un `TimeoutError`, y espera si la API responde a tiempo |
| `listar` | `listItems` pide `/api/items` con `search` y `limit` solo cuando tienen valor |
| `ficha` | `getItem` devuelve una ficha por su id o se rechaza con un `404` |
| `crear` | `createItem` crea la ficha con `POST` y la devuelve con su `id`; sin `detail` se rechaza con un `400` |
| `editar` | `updateItem` cambia solo los campos enviados con `PATCH` y devuelve la ficha actualizada |
| `borrar` | `deleteItem` borra con `DELETE` y da `null`; la ficha deja de existir |
| `mensajes` | `describeError` da el mensaje de cada tipo de error: tiempo agotado, red, HTTP 5xx, HTTP 4xx y otros |

Que los datos sean de tu dominio, que la página funcione y que el código se lea bien lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-15` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Errores con fetch](../2-practicas/lab-04-error-handling/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 15](../README.md)
