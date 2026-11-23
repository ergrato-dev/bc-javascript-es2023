# Proyecto Semana 16 — Panel de la colección

## Descripción

Un panel para gestionar la colección de tu dominio (las obras de un museo, los productos de una tienda, las rutas de un parque...) a través de una API REST con páginas y con inicio de sesión. Cualquiera puede ver las fichas, buscarlas mientras escribe, ordenarlas y pasar de página; para crear, editar o borrar hay que iniciar sesión. La página muestra en todo momento en qué estado está la lista (cargando, vacía, con datos o con error), marca los campos que la API rechaza y borra al instante, volviendo atrás si la API no lo permite.

La página y el servidor ya están hechos. Tu trabajo es escribir las funciones de `src/logic.js`, que hablan con la API y calculan el estado de la lista, y cambiar las fichas de ejemplo por las de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-16
cp -r bootcamp/week-16-apis_rest_crud/3-proyecto/starter/. ~/js-proyecto-semana-16/
cd ~/js-proyecto-semana-16
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `server.js` | El servidor: sirve la página y la API `/api` con las fichas de `data.js` | No |
| `index.html` | La sesión, el formulario de alta, el buscador, la lista y la paginación; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título y las fichas de ejemplo | Sí: paso 2 |
| `src/logic.js` | `HttpError`, `buildUrl`, `INITIAL_STATE` y `describeError`, ya hechos, y ocho funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | El código que conecta la página con `logic.js` y guarda la sesión y el estado | No |

- **Qué:** `createApi` crea la función `api`, la única que llama a `fetch`. Las demás funciones de la API (`login`, `listPage`, `saveItem` y `deleteItem`) reciben `api` y solo deciden la ruta, el método y los datos. `reduce` calcula el estado de la lista y `createLatest` cancela las búsquedas que se quedan viejas.
- **Para qué:** el token, las cabeceras y la conversión de errores se escriben una vez, en `createApi`. Y como el estado solo cambia en `reduce`, cada cosa que se ve en la página sale de un estado que se puede imprimir y comprobar.
- **Impacto:** `logic.js` no toca el DOM ni guarda el token: `main.js` le da a `createApi` una función `getToken` que lo lee de su variable. Así `scripts/verificar-semana.sh` prueba cada función desde Node contra su propio servidor. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

La API que ofrece `server.js` (la cabecera del archivo la describe entera). Las rutas con 🔒 piden `Authorization: Bearer <token>`:

| Petición | Respuesta |
|---|---|
| `GET /api/items?search=&sort=&page=&perPage=` | `200` con `{ data, meta: { page, perPage, total, totalPages } }`. `sort` es `id`, `-id`, `name` o `-name`; `perPage`, de 1 a 20 (por defecto 4) |
| `GET /api/items/:id` | `200` con la ficha, o `404` |
| `POST /api/login` con `{ user, password }` | `200` con `{ token, user, expiresIn }`, o `401` |
| 🔒 `POST /api/logout` | `204`: el token deja de valer |
| 🔒 `POST /api/items` con `{ name, detail }` | `201` con la ficha creada, `409` si el nombre ya existe o `422` con `{ error, fields }` |
| 🔒 `PATCH /api/items/:id` con `{ name?, detail? }` | `200` con la ficha cambiada, `404`, `409` o `422` |
| 🔒 `DELETE /api/items/:id` | `204` sin cuerpo, o `404` |

Las respuestas de error traen un cuerpo JSON `{ "error": "mensaje" }`, y las `422` además `fields`, un mensaje por campo. Sin token, las rutas 🔒 dan `401`. La cuenta de prueba es el usuario `editor` con la contraseña `coleccion`. Todas las rutas admiten `?delay=ms` para que la respuesta tarde más.

---

## Paso 1: arrancar el servidor y ver la página (10 min)

```bash
node server.js
```

```text
🚀 Servidor en http://localhost:3000 (Ctrl+C para pararlo)
```

Abre `http://localhost:3000`. Con el starter, el estado se queda en `idle`, la lista está vacía y no hay texto de paginación: `reduce` todavía devuelve el mismo estado que recibe. **Iniciar sesión** y **Crear** terminan con `❌ No hay conexión con el servidor.`, y la consola de las DevTools muestra el `TypeError` real: las funciones aún devuelven `null`.

Deja el servidor abierto en esa terminal y usa otra para el resto: los comandos de los pasos 3 a 11 hacen peticiones a `http://localhost:3000`. Las fichas que crees, cambies o borres y las sesiones viven en la memoria del servidor; para volver a las de `data.js`, páralo con `Ctrl+C` y arráncalo otra vez. Si cambias `data.js`, reinícialo también.

## Paso 2: tus datos (10 min)

En `src/data.js` están los datos del dominio Planetario, que es solo un ejemplo. Cámbialos por los de **tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- El export por defecto: de 8 a 15 fichas, para que haya varias páginas de 4. Cada una con `id` (un entero positivo sin repetir), `name` (3 caracteres o más, sin repetir aunque cambien las mayúsculas) y `detail` (una línea de descripción).

Las salidas de los pasos siguientes son las de los datos de ejemplo, con el servidor recién arrancado y los pasos hechos en orden; con los tuyos verás tus fichas y tus ids.

## Paso 3: `createApi`, una petición sin sesión (15 min)

`createApi(baseUrl, { getToken, onUnauthorized })` no hace ninguna petición: **devuelve una función**, `api(path, options)`, que recuerda `baseUrl` y las dos funciones de las opciones. Es una función que fabrica funciones, como `createClient` en el [lab 03](../2-practicas/lab-03-autenticacion/README.md), paso 7. Empieza por el caso sin token ni errores:

- Devuelve una función `async` que recibe `(path, { method = 'GET', params, data, signal } = {})`.
- Dentro, prepara `headers` con `Accept: 'application/json'` y, si `data` no es `undefined`, `Content-Type: 'application/json'`.
- Llama a `fetch(buildUrl(baseUrl, path, params), { method, headers, body, signal })`, con `body` igual a `JSON.stringify(data)` cuando hay datos, y devuelve `response.json()`.

Esta es la única llamada a `fetch` de `logic.js`: una comprobación cuenta que haya exactamente una.

```bash
node --input-type=module -e "import { createApi } from './src/logic.js'; const api = createApi('http://localhost:3000'); console.log(await api('/api/items/5')); console.log((await api('/api/items', { params: { search: 'solar', perPage: 1 } })).meta);"
```

```text
{
  id: 5,
  name: 'Eclipses',
  detail: 'Por qué ocurren y cuándo será el próximo'
}
{ page: 1, perPage: 1, total: 2, totalPages: 2 }
```

## Paso 4: `createApi` con token (10 min)

Antes del `fetch`, llama a `getToken()`. Si devuelve un token (cualquier valor que no sea `null`, `undefined` ni `''`), añade `Authorization: Bearer <token>` a `headers` ([lab 03](../2-practicas/lab-03-autenticacion/README.md), paso 3). Llámala en **cada** petición, no una vez al crear `api`: el token cambia al iniciar y al cerrar la sesión.

El comando inicia sesión a mano con `api` y crea una ficha con el token:

```bash
node --input-type=module -e "import { createApi } from './src/logic.js'; let token = null; const api = createApi('http://localhost:3000', { getToken: () => token }); const session = await api('/api/login', { method: 'POST', data: { user: 'editor', password: 'coleccion' } }); token = session.token; console.log(session.user, session.expiresIn); console.log(await api('/api/items', { method: 'POST', data: { name: 'Prueba', detail: 'Creada desde la terminal' } }));"
```

```text
editor 1800
{ id: 11, name: 'Prueba', detail: 'Creada desde la terminal' }
```

## Paso 5: `createApi` con errores (15 min)

Después del `await fetch(...)`:

- Si `response.ok` es falso, lee el cuerpo con `json()` si la cabecera `Content-Type` incluye `application/json` (si no, usa `{}`). Lanza `new HttpError(response.status, body.error ?? response.statusText, body.fields ?? {})`.
- Si además el estado es `401`, llama a `onUnauthorized(mensaje)` **antes** de lanzar el error: así `main.js` olvida la sesión ([lab 03](../2-practicas/lab-03-autenticacion/README.md), paso 7).
- Si el estado es `204`, devuelve `null` sin leer el cuerpo.

```bash
node --input-type=module -e "import { createApi } from './src/logic.js'; const api = createApi('http://localhost:3000', { onUnauthorized: (message) => console.log('  onUnauthorized:', message) }); const cases = [['/api/items/42'], ['/api/items', { method: 'POST', data: { name: 'Sin sesión', detail: 'x' } }], ['/api/items', { params: { page: 0 } }]]; for (const [path, options] of cases) { try { await api(path, options); } catch (error) { console.log('❌', error.name, error.status, error.message); } }"
```

```text
❌ HttpError 404 No existe la ficha 42
  onUnauthorized: Inicia sesión: falta el token o no es válido
❌ HttpError 401 Inicia sesión: falta el token o no es válido
❌ HttpError 400 page debe ser un entero mayor que 0
```

`page: 0` sí llega a la URL: `buildUrl` solo descarta `undefined`, `null` y `''`.

## Paso 6: `login` (5 min)

Una línea: `api('/api/login', { method: 'POST', data: { user, password } })`. Un `401` aquí también llama a `onUnauthorized`; en la página no pasa nada, porque todavía no hay sesión que olvidar.

```bash
node --input-type=module -e "import { createApi, login } from './src/logic.js'; const api = createApi('http://localhost:3000'); const session = await login(api, 'editor', 'coleccion'); console.log(session.user, session.expiresIn, typeof session.token); try { await login(api, 'editor', 'mala'); } catch (error) { console.log('❌', error.status, error.message); }"
```

```text
editor 1800 string
❌ 401 Usuario o contraseña incorrectos
```

El token es un identificador aleatorio que cambia en cada inicio de sesión: por eso el comando solo imprime su tipo.

## Paso 7: `listPage` (10 min)

Pide `/api/items` con `{ params: { search, sort, page, perPage }, signal }` y aplana el sobre ([lab 02](../2-practicas/lab-02-paginacion/README.md), paso 1): devuelve `{ items: data, ...meta }`. Como `buildUrl` ignora los valores vacíos, la página puede pasar el buscador tal cual. Hay 11 fichas porque el paso 4 creó una.

```bash
node --input-type=module -e "import { createApi, listPage } from './src/logic.js'; const api = createApi('http://localhost:3000'); const first = await listPage(api); console.log(first.items.map(({ name }) => name), first.page, first.perPage, first.total, first.totalPages); console.log(await listPage(api, { search: 'es', sort: '-name', perPage: 2, page: 2 }));"
```

```text
[
  'Viaje a Saturno',
  'Nebulosas',
  'Taller de cohetes',
  'Cielo de invierno'
] 1 4 11 3
{
  items: [
    {
      id: 10,
      name: 'Sistema solar a escala',
      detail: 'Paseo de 1 km con los planetas a escala'
    },
    {
      id: 5,
      name: 'Eclipses',
      detail: 'Por qué ocurren y cuándo será el próximo'
    }
  ],
  page: 2,
  perPage: 2,
  total: 4,
  totalPages: 2
}
```

## Paso 8: `saveItem` y `deleteItem` (15 min)

`saveItem(api, { id, ...fields })` separa el `id` del resto con desestructuración (semana 04). Si `id` es `undefined`, hace `POST` a `/api/items` con `fields`; si no, `PATCH` a `/api/items/<id>`. El id va en la ruta y no en el cuerpo: identifica el recurso, no es un dato que cambie ([lab 01](../2-practicas/lab-01-diseno-rest/README.md), paso 1). `deleteItem` hace `DELETE` a `/api/items/<id>` y da `null` por el `204`.

```bash
node --input-type=module -e "import { createApi, login, saveItem, deleteItem } from './src/logic.js'; let token = null; const api = createApi('http://localhost:3000', { getToken: () => token }); ({ token } = await login(api, 'editor', 'coleccion')); const created = await saveItem(api, { name: 'Lluvia de estrellas', detail: 'Las Perseidas en agosto' }); console.log('Creada:', created); console.log('Cambiada:', await saveItem(api, { id: created.id, detail: 'Las Gemínidas en diciembre' })); console.log('Borrada:', await deleteItem(api, created.id)); for (const item of [{ name: 'Lu', detail: '' }, { name: 'eclipses', detail: 'Otra vez' }]) { try { await saveItem(api, item); } catch (error) { console.log('❌', error.status, error.message, error.fields); } }"
```

```text
Creada: {
  id: 12,
  name: 'Lluvia de estrellas',
  detail: 'Las Perseidas en agosto'
}
Cambiada: {
  id: 12,
  name: 'Lluvia de estrellas',
  detail: 'Las Gemínidas en diciembre'
}
Borrada: null
❌ 422 Revisa los campos marcados { name: 'Mínimo 3 caracteres', detail: 'Obligatorio' }
❌ 409 Ya existe la ficha «Eclipses» {}
```

`main.js` pone cada mensaje de `fields` debajo de su campo del formulario.

## Paso 9: `pageInfo` (10 min)

Una función pura, sin peticiones: recibe `{ page, totalPages, total }` y devuelve el texto y si se pueden pulsar los botones. Cuidado con el singular («1 ficha») y con la lista vacía.

```bash
node --input-type=module -e "import { pageInfo } from './src/logic.js'; for (const meta of [{ page: 1, totalPages: 3, total: 11 }, { page: 3, totalPages: 3, total: 11 }, { page: 1, totalPages: 1, total: 1 }, { page: 1, totalPages: 1, total: 0 }]) console.log(pageInfo(meta));"
```

```text
{ label: 'Página 1 de 3 · 11 fichas', hasPrev: false, hasNext: true }
{ label: 'Página 3 de 3 · 11 fichas', hasPrev: true, hasNext: false }
{ label: 'Página 1 de 1 · 1 ficha', hasPrev: false, hasNext: false }
{ label: 'Sin fichas', hasPrev: false, hasNext: false }
```

## Paso 10: `reduce` (15 min)

`reduce(state, event)` es el `setState` del [lab 04](../2-practicas/lab-04-estados-carga/README.md) convertido en función pura: recibe el estado actual y un evento, y devuelve un estado **nuevo** con `{ ...state, ... }`, sin modificar el que recibe (`INITIAL_STATE` está congelado con `Object.freeze`). Un `switch` sobre `event.type` con un `case` por evento, como describe el comentario de `logic.js`. En `success`, separa `items` del resto de `result` con desestructuración: el resto es `meta`.

```bash
node --input-type=module -e "import { reduce, INITIAL_STATE } from './src/logic.js'; const result = { items: [{ id: 1, name: 'Eclipses', detail: 'x' }, { id: 2, name: 'Nebulosas', detail: 'y' }], page: 1, perPage: 4, total: 2, totalPages: 1 }; const events = [{ type: 'start' }, { type: 'success', result }, { type: 'remove', id: 1 }, { type: 'restore', items: result.items, message: 'No se ha borrado' }, { type: 'start' }, { type: 'failure', message: 'No hay conexión con el servidor.' }]; let state = INITIAL_STATE; for (const event of events) { state = reduce(state, event); console.log(event.type.padEnd(8), '→', state.status.padEnd(8), state.items.map(({ id }) => id), state.error); } console.log('INITIAL_STATE sin cambios:', INITIAL_STATE.status);"
```

```text
start    → loading  [] null
success  → success  [ 1, 2 ] null
remove   → success  [ 2 ] null
restore  → error    [ 1, 2 ] No se ha borrado
start    → loading  [ 1, 2 ] null
failure  → error    [ 1, 2 ] No hay conexión con el servidor.
INITIAL_STATE sin cambios: idle
```

## Paso 11: `createLatest` (10 min)

El `searchLatest` del [lab 04](../2-practicas/lab-04-estados-carga/README.md), paso 6, para cualquier función: guarda en una variable el `AbortController` de la última llamada y devuelve `(...args) => { ... }`, que aborta el anterior (`controller?.abort()`), crea uno nuevo y llama a `fn(...args, controller.signal)`.

El comando lanza una búsqueda lenta y, enseguida, otra. La primera se cancela y solo termina la segunda:

```bash
node --input-type=module -e "import { createApi, createLatest } from './src/logic.js'; const api = createApi('http://localhost:3000'); const search = createLatest((params, signal) => api('/api/items', { params, signal })); const results = await Promise.allSettled([search({ search: 'sol', delay: 300 }), search({ search: 'luna' })]); for (const result of results) console.log(result.status, result.value?.data.map(({ name }) => name) ?? result.reason.name);"
```

```text
rejected AbortError
fulfilled [ 'Luna llena' ]
```

`main.js` envuelve `listPage` con `createLatest`: cada tecla del buscador lanza una búsqueda y cancela la anterior.

## Paso 12: probar la página y comprobar (10 min)

Reinicia el servidor (`Ctrl+C` y `node server.js`) y recarga la página. Con los datos de ejemplo:

1. Al cargar: estado `success`, cuatro tarjetas y `Página 1 de 3 · 10 fichas`, con **← Anterior** deshabilitado.
2. **Siguiente →** lleva a la página 2. Escribe `ro` en el buscador: la lista se filtra mientras escribes y vuelve a la página 1. Con `zzz`: estado `empty`, `Ninguna ficha coincide con la búsqueda.` y `Sin fichas`.
3. Vacía el buscador y pulsa **Crear** con nombre y detalle sin haber iniciado sesión: `❌ Inicia sesión: falta el token o no es válido`.
4. Inicia sesión con una contraseña mala (`❌ Usuario o contraseña incorrectos`) y después con `editor` y `coleccion`: `✔ Sesión iniciada como editor (caduca en 1800 s)`.
5. **Crear** con el nombre `Ab` y sin detalle: debajo de cada campo sale su error. Con datos correctos: `✔ Creada la ficha #11 · ...`. Con el nombre de una ficha que ya existe, en otras mayúsculas: `❌ Ya existe la ficha «...»`.
6. ✏️ pide el detalle nuevo; 🗑️ quita la tarjeta al instante y termina con `✔ Borrada la ficha #...`.
7. **Cerrar sesión** y pulsa 🗑️: la tarjeta desaparece y vuelve, con `❌ No se ha borrado: Inicia sesión: falta el token o no es válido`.
8. Arranca el servidor con `TOKEN_TTL=20 node server.js`, inicia sesión, espera 20 s y crea una ficha: `❌ La sesión ha caducado`, y la cabecera vuelve a `Sesión: sin iniciar`.
9. Para el servidor con `Ctrl+C` y pulsa **Siguiente →**: estado `error` y `❌ No hay conexión con el servidor.`, con las tarjetas de antes todavía en pantalla.

En los casos con ❌, la consola de las DevTools muestra el error completo. Vuelve a arrancar el servidor normal con `node server.js`.

Repasa `src/logic.js` antes de entregar. Borra los `TODO` que queden y comprueba que no usas `var` ni `.then()`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-16 ./scripts/verificar-semana.sh 16
# Semana 16 — APIs REST y CRUD
#   ✅ src/data.js, src/logic.js y src/main.js son módulos ES válidos
#   ...
# 18/18 comprobaciones superadas.
```

Las comprobaciones arrancan su propio servidor con unas fichas y una cuenta de prueba: no hace falta que el tuyo esté abierto. Cada ❌ trae una pista con el paso que lo arregla.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js`, `src/logic.js` y `src/main.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `un-fetch` | `src/logic.js` llama a `fetch` una sola vez (en `createApi`) y no usa `.then()`, fuera de los comentarios |
| `datos-exports` | `data.js` exporta `TITLE` y por defecto de 8 a 15 fichas con `id` entero positivo sin repetir, `name` de 3 o más caracteres sin repetir (sin distinguir mayúsculas) y `detail` de texto |
| `datos-dominio` | El título y las fichas no son los del ejemplo Planetario |
| `api-get` | `createApi` devuelve una función que hace un `GET` a la URL con sus parámetros, con `Accept: application/json` y la señal recibida, sin cuerpo ni token, y devuelve el cuerpo JSON |
| `api-json` | La función de `createApi` envía `data` como cuerpo JSON con `Content-Type: application/json` y el método indicado |
| `api-token` | La función de `createApi` pide el token a `getToken` en cada petición y lo envía como `Authorization: Bearer` solo cuando hay uno |
| `api-errores` | La función de `createApi` se rechaza con un `HttpError` con el `status`, el mensaje y los `fields` de la API (`statusText` y `{}` si el cuerpo no es JSON), y da `null` con un `204` |
| `api-401` | Con un `401`, la función de `createApi` llama a `onUnauthorized` con el mensaje de la API antes de rechazarse; con otros errores, no |
| `login` | `login` inicia sesión con `POST /api/login` y devuelve `token`, `user` y `expiresIn`; con una contraseña mala se rechaza con un `401` |
| `listar` | `listPage` pide `/api/items` con `search`, `sort`, `page` y `perPage`, devuelve `{ items, page, perPage, total, totalPages }` y pasa la señal |
| `guardar` | `saveItem` crea con `POST` si la ficha no tiene `id` y cambia con `PATCH /api/items/<id>` si lo tiene, sin enviar el `id` en el cuerpo |
| `borrar` | `deleteItem` borra con `DELETE /api/items/<id>` y da `null`; la ficha deja de existir |
| `paginas` | `pageInfo` da el texto de la paginación y si hay página anterior y siguiente |
| `estados` | `reduce` calcula el estado siguiente para `start`, `success`, `failure`, `remove` y `restore` sin modificar el anterior |
| `ultima` | `createLatest` añade una señal a cada llamada y aborta la anterior, así que solo la última llamada termina |

Que los datos sean de tu dominio, que la página funcione y que el código se lea bien lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-16` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Estados de carga](../2-practicas/lab-04-estados-carga/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 16](../README.md)
