# Proyecto Semana 24 — Catálogo conectado

## Descripción

El cierre de la etapa Intermedio: una aplicación completa para el catálogo de tu dominio (los objetos del cielo de un planetario, las obras de un museo...). La página lista las fichas por páginas desde una API REST, busca mientras escribes, crea, corrige y borra fichas con un formulario validado, guarda una copia local para enseñar algo al instante (también sin conexión) y dice en todo momento qué está pasando: cargando, sin resultados, con error, con la copia de hace 5 minutos.

No hay conceptos nuevos: cada función repasa una o dos semanas de la etapa. La página, el servidor y `main.js` ya están hechos. Tu trabajo es escribir las siete funciones de `src/logic.js` y describir en `src/data.js` el catálogo de tu dominio.

**Tiempo:** 4 h 30 min.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-24
cp -r bootcamp/week-24-proyecto_integrador_intermedio/3-proyecto/starter/. ~/js-proyecto-semana-24/
cd ~/js-proyecto-semana-24
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `server.js` | La API REST (`/api/items`) con las fichas de `SEED` y las reglas de `FIELDS`, y los archivos de la página | No |
| `index.html` | El buscador, la línea de estado, la lista, los botones de página y el formulario; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | `APP` (textos y ajustes), `FIELDS` (campos y reglas) y `SEED` (fichas iniciales) | Sí: paso 2 |
| `src/logic.js` | `HttpError`, `escapeHtml` e `INITIAL_STATE` ya escritos, y siete funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | Conecta la lógica con la página: estado, red, copia local, buscador, formulario y lista | No, pero léelo |

- **Qué:** `logic.js` pide a la API (`requestJson`, `createLatest`), lleva el estado (`reduce`, `statusText`), prepara lo que se ve (`cardHtml`, `validate`) y guarda la copia (`createCache`). Ninguna función usa el DOM.
- **Para qué:** reciben lo que necesitan como argumento (`fetchFn`, `storage`, `now`), así que se prueban con Node con un `fetch` falso, un almacén hecho con un `Map` o una hora fija. `main.js` solo las conecta con la página.
- **Impacto:** `scripts/verificar-semana.sh` prueba cada función y, al final, todas juntas contra tu `server.js` con tus datos. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

Lee `src/main.js` antes de empezar: es el repaso de la etapa en un archivo, y la [teoría 02](../1-teoria/02-arquitectura.md) explica cómo encajan las piezas.

Las salidas se obtuvieron con Node 24.19.0 y Chromium 156.

---

## Paso 1: arrancar el servidor y ver la página (5 min)

```bash
node server.js
```

```text
🚀 Servidor en http://localhost:3000 (Ctrl+C para pararlo)
```

**Qué:** `server.js` sirve la página y la API. **Para qué:** `index.html` carga `src/main.js` como módulo, y el navegador no carga módulos desde un archivo abierto con doble clic; además, la página habla con la API en la misma dirección. **Impacto:** abre siempre `http://localhost:3000`, no el archivo.

Con el starter se ven el título, el buscador y el formulario, pero ninguna ficha. La consola de las DevTools muestra `Uncaught TypeError: Cannot read properties of undefined (reading 'read')`: `createCache` todavía no devuelve nada, y `main.js` se para ahí. La página no funcionará hasta que termines el paso 9; antes, cada paso se prueba con Node.

Deja el servidor abierto y usa otra terminal, en la misma carpeta, para los comandos de los pasos 3 a 9. El servidor lee los archivos de la página en cada petición, pero **las fichas las carga al arrancar**: si cambias `src/data.js`, páralo con `Ctrl+C` y vuelve a arrancarlo.

## Paso 2: tu catálogo (40 min)

Abre `src/data.js`. **`APP`** describe la página:

| Propiedad | Qué es | Ejemplo |
|---|---|---|
| `title`, `intro` | El título y la presentación | `'🔭 Planetario — catálogo del cielo'` |
| `cacheKey` | La clave de `localStorage` de la copia local; que no choque con otros proyectos | `'planetario-catalogo'` |
| `perPage` | Fichas por página, de 3 a 20 | `6` |

**`FIELDS`** son los campos de cada ficha, de 3 a 8, en el orden en que se muestran. Cada uno tiene `name` (en `camelCase` inglés, sin repetir y distinto de `id`, que lo pone el servidor), `label` (el texto que ve la persona) y `type` (`'text'` o `'number'`). Las reglas son opcionales: `required: true`, `minLength` (solo en `text`) y `min`/`max` (solo en `number`). El primer campo es el nombre de la ficha: tiene que ser `text` y `required`, y el servidor no deja repetirlo.

**`SEED`** son de 8 a 30 fichas reales de tu dominio, sin `id`, con todos los campos y cumpliendo sus reglas. Un campo opcional vacío vale `null`.

- **Qué:** `FIELDS` es la única descripción de las fichas.
- **Para qué:** de ella salen el formulario (`main.js`), las fichas (`cardHtml`), la validación de la página (`validate`) y la del servidor (`server.js`).
- **Impacto:** si añades un campo o una regla, todo lo demás se adapta solo. Elige reglas con sentido: un año entre 1000 y el actual, un nombre de al menos 2 o 3 letras, un número de sala obligatorio...

Cambia el ejemplo Planetario por tu dominio y reinicia el servidor. Las comprobaciones `datos-exports` y `datos-dominio` revisan la forma de los datos y que no sean los del ejemplo.

## Paso 3: `requestJson` (35 min)

Repasa: `fetch` y sus errores ([semana 15](../../week-15-fetch_api/README.md)), `HttpError` ([semana 16](../../week-16-apis_rest_crud/README.md)), `AbortSignal.timeout` y `AbortSignal.any` ([lab 01](../2-practicas/lab-01-peticiones-cruzadas/README.md), paso 4).

`requestJson(url, options)` es la única función que habla con la red:

1. Prepara las opciones de `fetchFn`: el `method` y un `signal` que combine `AbortSignal.timeout(timeout)` con el `signal` que llegue (si llega).
2. Si hay `data`, añade la cabecera `'Content-Type': 'application/json'` y el `body` con `JSON.stringify(data)`.
3. Con la respuesta: un 204 no tiene cuerpo y devuelve `null`. Si no, lee el JSON; si el JSON está roto, usa `{}` (`.catch(() => ({}))`).
4. Si `response.ok` es `false`, lanza `new HttpError(status, body.error ?? 'Error ' + status, body.fields ?? null)`. Si no, devuelve el cuerpo.

`fetchFn = fetch` es un valor por defecto: la página usa el `fetch` del navegador, y las comprobaciones pasan uno falso. Prueba la tuya contra el servidor (este comando arranca uno propio en otro puerto, así que no choca con el del paso 1):

```bash
node --input-type=module -e "
import { requestJson } from './src/logic.js';
import { startServer } from './server.js';
const server = await startServer();
const page = await requestJson(server.url + '/api/items?perPage=2');
console.log(page.meta, page.data.map((item) => item.name));
const created = await requestJson(server.url + '/api/items', { method: 'POST', data: { name: 'Altair', type: 'Estrella', constellation: 'Águila', magnitude: 0.76 } });
console.log(created);
console.log(await requestJson(server.url + '/api/items/' + created.id, { method: 'DELETE' }));
const error = await requestJson(server.url + '/api/items', { method: 'POST', data: { name: 'Al' } }).catch((e) => e);
console.log(error.name, error.status, error.message, error.fields);
const slow = await requestJson(server.url + '/api/items?delay=500', { timeout: 100 }).catch((e) => e);
console.log(slow.name);
await server.close();"
```

```text
{ page: 1, perPage: 2, total: 10, totalPages: 5 } [ 'Sirio', 'Vega' ]
{
  id: 11,
  name: 'Altair',
  type: 'Estrella',
  constellation: 'Águila',
  magnitude: 0.76
}
null
HttpError 422 Revisa los campos marcados { name: 'Mínimo 3 caracteres', type: 'Obligatorio' }
TimeoutError
```

Con tu catálogo, cambia `name` y los demás campos por los tuyos. `?delay=500` hace que el servidor tarde 500 ms, y el tiempo máximo de 100 ms corta la petición antes.

## Paso 4: `createLatest` (10 min)

Repasa: el [lab 01](../2-practicas/lab-01-peticiones-cruzadas/README.md), paso 3, y las [condiciones de carrera](../../week-16-apis_rest_crud/1-teoria/04-estados-carga.md#4-condiciones-de-carrera) de la semana 16.

`createLatest(fn)` devuelve una función que, cada vez que la llaman, aborta el `AbortController` de la llamada anterior, crea uno nuevo y llama a `fn(...args, controller.signal)`. Guarda el controlador en una variable de `createLatest` (un *closure*), no fuera: cada `createLatest` tiene el suyo.

```bash
node --input-type=module -e "
import { createLatest } from './src/logic.js';
const signals = [];
const latest = createLatest((query, signal) => { signals.push(signal); return 'buscando ' + query; });
console.log(latest('e'), '·', latest('ega'));
console.log(signals.map((signal) => signal.aborted));"
```

```text
buscando e · buscando ega
[ true, false ]
```

La segunda llamada ha abortado el signal de la primera. En `main.js`, `list` envuelve `requestJson` con `createLatest`: una búsqueda nueva cancela la que estaba en camino, y su `AbortError` no llega a la pantalla.

## Paso 5: `reduce` (40 min)

Repasa: el reductor de la [semana 16](../../week-16-apis_rest_crud/1-teoria/04-estados-carga.md#2-el-estado-siguiente-con-una-función-pura) y la [teoría 03](../1-teoria/03-estados-carga.md).

`reduce(state, event)` devuelve el estado siguiente **sin modificar** el que recibe: usa *spread* (`{ ...state, status: 'loading' }`), `map` y `filter`, nunca `push` ni asignaciones sobre `state`. Un `switch` sobre `event.type` con un `case` por evento, tal como los describe el comentario de `logic.js`. Tres detalles:

- `load` y `failed` **conservan** `items`, `meta` y `savedAt`: la página sigue enseñando lo que tenía.
- `loaded` pone `savedAt` a `null`: los datos ya no vienen de la copia.
- `saved` busca la ficha por `id`: si está, la reemplaza en su sitio (`map`); si no, la pone la primera y suma 1 a `meta.total` (si hay `meta`).

```bash
node --input-type=module -e "
import { INITIAL_STATE, reduce } from './src/logic.js';
let state = INITIAL_STATE;
for (const event of [
  { type: 'cached', items: [{ id: 1, name: 'Sirio' }], meta: { page: 1, perPage: 6, total: 1, totalPages: 1 }, savedAt: 1000 },
  { type: 'load', query: '' },
  { type: 'failed', message: 'No se pudo conectar con el servidor' },
  { type: 'load' },
  { type: 'loaded', items: [{ id: 1, name: 'Sirio' }, { id: 2, name: 'Vega' }], meta: { page: 1, perPage: 6, total: 2, totalPages: 1 } },
  { type: 'saved', item: { id: 11, name: 'Altair' } },
  { type: 'removed', id: 1 },
]) {
  state = reduce(state, event);
  console.log(event.type.padEnd(7), state.status.padEnd(7), state.items.map((item) => item.name).join(', ').padEnd(20), 'total', state.meta.total, '· error', state.error, '· savedAt', state.savedAt);
}
console.log(INITIAL_STATE.status, INITIAL_STATE.items.length);"
```

```text
cached  idle    Sirio                total 1 · error null · savedAt 1000
load    loading Sirio                total 1 · error null · savedAt 1000
failed  error   Sirio                total 1 · error No se pudo conectar con el servidor · savedAt 1000
load    loading Sirio                total 1 · error null · savedAt 1000
loaded  ready   Sirio, Vega          total 2 · error null · savedAt null
saved   ready   Altair, Sirio, Vega  total 3 · error null · savedAt null
removed ready   Altair, Vega         total 2 · error null · savedAt null
idle 0
```

La última línea comprueba que `INITIAL_STATE` sigue igual: está congelado con `Object.freeze`, así que si tu `reduce` intenta cambiarlo, lanza un error.

## Paso 6: `statusText` (25 min)

Repasa: `Intl.RelativeTimeFormat` ([semana 21](../../week-21-fechas_tiempos_date_api/1-teoria/02-formatear-intl.md)) y el [lab 02](../2-practicas/lab-02-copia-local/README.md), paso 3.

`statusText(state, now)` devuelve la frase de la línea de estado, con un `switch` sobre `state.status`. Para la edad de la copia, escribe dentro de `logic.js` una función auxiliar (sin exportar) que reciba los milisegundos `now - state.savedAt` y elija la unidad: menos de un minuto, «hace un momento»; si no, minutos, horas o días con `Intl.RelativeTimeFormat('es', { numeric: 'always' })`, siempre con `Math.floor` y un número negativo (`format(-5, 'minute')` es «hace 5 minutos»). Crea el formateador una vez, fuera de la función.

```bash
node --input-type=module -e "
import { INITIAL_STATE, statusText } from './src/logic.js';
const now = Date.now();
const meta = { page: 2, perPage: 6, total: 10, totalPages: 2 };
console.log(statusText({ ...INITIAL_STATE, status: 'loading' }, now));
console.log(statusText({ ...INITIAL_STATE, status: 'loading', items: [{ id: 1 }], savedAt: now - 5 * 60_000 }, now));
console.log(statusText({ ...INITIAL_STATE, status: 'ready', meta }, now));
console.log(statusText({ ...INITIAL_STATE, status: 'empty', query: 'zzz' }, now));
console.log(statusText({ ...INITIAL_STATE, status: 'error', error: 'No se pudo conectar con el servidor', savedAt: now - 26 * 3_600_000 }, now));"
```

```text
Cargando…
Mostrando la copia guardada hace 5 minutos · actualizando…
10 fichas · página 2 de 2
Ninguna ficha coincide con «zzz»
No se pudo conectar con el servidor · mostrando la copia guardada hace 1 día
```

Los puntos suspensivos son un solo carácter (`…`), no tres puntos: cópialos del comentario de `logic.js`.

## Paso 7: `cardHtml` (20 min)

Repasa: pintar desde datos y escapar ([semana 17](../../week-17-dom_manipulation_moderna/1-teoria/03-contenido-clases.md)), el [lab 03](../2-practicas/lab-03-estados-pagina/README.md), paso 3, e `Intl.NumberFormat` ([semana 21](../../week-21-fechas_tiempos_date_api/README.md)).

`cardHtml(item, fields)` devuelve el HTML de una ficha en **una sola línea**, sin espacios entre etiquetas. Separa el primer campo de los demás con desestructuración (`const [first, ...rest] = fields`), filtra los que no tienen valor (`null`, `undefined` o `''`; un `0` sí es un valor), formatea los `number` y pasa **todo** por `escapeHtml`, también el `id` del atributo `data-id`.

```bash
node --input-type=module -e "
import { cardHtml } from './src/logic.js';
import { FIELDS } from './src/data.js';
console.log(cardHtml({ id: 1, name: 'Sirio', type: 'Estrella', constellation: null, magnitude: -1.46 }, FIELDS));
console.log(cardHtml({ id: 2, name: '<b>Vega</b>', type: 'A & B', constellation: '', magnitude: null }, FIELDS));"
```

```text
<article class="card" data-id="1"><h3>Sirio</h3><dl><dt>Tipo</dt><dd>Estrella</dd><dt>Magnitud</dt><dd>-1,46</dd></dl><button type="button" data-action="edit">Editar</button><button type="button" data-action="delete">Borrar</button></article>
<article class="card" data-id="2"><h3>&lt;b&gt;Vega&lt;/b&gt;</h3><dl><dt>Tipo</dt><dd>A &amp; B</dd></dl><button type="button" data-action="edit">Editar</button><button type="button" data-action="delete">Borrar</button></article>
```

Con tus `FIELDS`, el primer comando dará otras etiquetas: usa una ficha de tu dominio. Los `data-action` son los que busca el listener delegado de `main.js` para saber qué botón se pulsó.

## Paso 8: `validate` (25 min)

Repasa: validación propia ([semana 20](../../week-20-formularios_validacion/1-teoria/04-validacion-propia-envio.md)).

`validate(values, fields)` recibe los valores del formulario tal como los da `FormData` (siempre texto) y devuelve `{ data, errors }`. Recorre `fields` y, para cada campo, recorta el texto (`String(values[name] ?? '').trim()`, porque un campo puede faltar). Después:

- Vacío: `data[name] = null` y, si es `required`, el error `'Obligatorio'`.
- `number`: `Number(text)`. Si no es finito (`Number.isFinite`), `'Debe ser un número'`; si está fuera de `min`/`max` (los dos incluidos), `` `Entre ${min} y ${max}` ``.
- `text`: el texto recortado; si es más corto que `minLength`, `` `Mínimo ${minLength} caracteres` ``.

Cada campo tiene como mucho un error: el primero que falle, en ese orden.

```bash
node --input-type=module -e "
import { validate } from './src/logic.js';
import { FIELDS } from './src/data.js';
console.log(validate({ name: '  Altair ', type: 'Estrella', constellation: '', magnitude: '0.76' }, FIELDS));
console.log(validate({ name: 'Al', type: ' ', magnitude: '99' }, FIELDS));"
```

```text
{
  data: {
    name: 'Altair',
    type: 'Estrella',
    constellation: null,
    magnitude: 0.76
  },
  errors: {}
}
{
  data: { name: 'Al', type: null, constellation: null, magnitude: 99 },
  errors: {
    name: 'Mínimo 3 caracteres',
    type: 'Obligatorio',
    magnitude: 'Entre -30 y 30'
  }
}
```

Los mensajes son los mismos que da `server.js`: así, un error que se escape de la página y lo detecte el servidor se enseña igual, en el mismo campo.

## Paso 9: `createCache` (25 min)

Repasa: `localStorage`, versiones y caducidad ([semana 19](../../week-19-web_storage_apis/1-teoria/04-cuotas-y-errores.md)) y el [lab 02](../2-practicas/lab-02-copia-local/README.md).

`createCache(storage, options)` devuelve un objeto con tres métodos que usan `storage`, `key`, `version`, `maxAge` y `now` del *closure*:

- **`read()`**: dentro de un `try`, `JSON.parse(storage.getItem(key))`. Si no hay copia (`JSON.parse(null)` es `null`), la `version` no coincide o `now() - savedAt` pasa de `maxAge`, devuelve `null`; si no, `{ data, savedAt }`. El `catch` (JSON roto, `storage` que lanza o que no existe) también devuelve `null`.
- **`write(data)`**: guarda `JSON.stringify({ version, savedAt: now(), data })` y devuelve `true`; si lanza, `false`.
- **`clear()`**: `removeItem` dentro de un `try`, sin devolver nada.

```bash
node --input-type=module -e "
import { createCache } from './src/logic.js';
const map = new Map();
const storage = { getItem: (key) => map.get(key) ?? null, setItem: (key, value) => map.set(key, value), removeItem: (key) => map.delete(key) };
let now = 1000;
const cache = createCache(storage, { key: 'copia', version: 1, maxAge: 60_000, now: () => now });
console.log(cache.read(), cache.write({ items: ['Sirio'] }), map.get('copia'));
now = 31_000; console.log(cache.read());
now = 62_000; console.log(cache.read());
console.log(createCache(storage, { key: 'copia', version: 2, now: () => 1000 }).read());
const full = { getItem: () => null, setItem: () => { throw new DOMException('lleno', 'QuotaExceededError'); }, removeItem: () => {} };
console.log(createCache(full, { key: 'copia' }).write({}));"
```

```text
null true {"version":1,"savedAt":1000,"data":{"items":["Sirio"]}}
{ data: { items: [ 'Sirio' ] }, savedAt: 1000 }
null
null
false
```

Sin copia, `null`; a los 30 s, la copia; a los 61 s, caducada; con otra versión, descartada; y con el almacén lleno, `write` devuelve `false` sin lanzar.

## Paso 10: probar la página y comprobar (45 min)

Recarga `http://localhost:3000` (con el servidor arrancado de nuevo si cambiaste `data.js`). Con los datos de ejemplo:

1. La línea de estado dice `10 fichas · página 1 de 2` y se ven 6 fichas. **Siguiente →** lleva a `página 2 de 2`, con 4.
2. Escribe `nebulosa` en el buscador: la búsqueda espera a que dejes de escribir y dice `3 fichas`, sin botones de página. Con `zzz`: `Ninguna ficha coincide con «zzz»`. Borra el texto y pulsa Enter.
3. Pulsa **Guardar** con el formulario vacío: `Obligatorio` en los campos obligatorios y el foco en el primero. Escribe el nombre de una ficha que ya existe y rellena el resto: el servidor responde 409 y debajo del botón aparece `Ya existe la ficha «...»`.
4. Cambia el nombre y guarda: la ficha aparece la primera, el total sube a 11 y el formulario se vacía. Pulsa **Editar** en ella, cambia algo y guarda. Pulsa **Borrar** y acepta: desaparece y el total vuelve a 10.
5. Recarga la página: durante un instante, `Mostrando la copia guardada hace un momento · actualizando…`. Para verlo con calma, para el servidor y arráncalo con `DELAY=2000 node server.js`.
6. Sin conexión: en la pestaña **Network** de las DevTools, haz clic derecho en una petición a `/api/items` y elige **Block request** (en versiones anteriores de Chrome, **Block request URL**; en Firefox, **Block URL**). Recarga: `No se pudo conectar con el servidor · mostrando la copia guardada hace 1 minuto` (o los que hayan pasado), con las fichas de la copia y el botón **Reintentar**. Quita el bloqueo (en Chrome, en el panel **Request conditions** que se ha abierto) y pulsa **Reintentar**.

La consola de las DevTools no debe mostrar errores de tu código. Las peticiones que el servidor rechaza a propósito (el 409 del punto 3) o que bloqueas (punto 6) sí aparecen en rojo, como `Failed to load resource`: es el navegador avisando de la respuesta, no un fallo de la página. Después, haz lo mismo con tu catálogo, y prueba la página solo con el teclado (`Tab`, `Enter`).

Repasa `src/logic.js` antes de entregar: borra los `TODO` que queden y comprueba que no usas `var`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-24 ./scripts/verificar-semana.sh 24
# Semana 24 — Proyecto Integrador — Intermedio
#   ✅ src/data.js, src/logic.js y src/main.js son módulos ES válidos
#   ...
# 14/14 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla. La última, `servidor`, arranca tu `server.js` con tus datos y prueba las funciones juntas: si las demás pasan y esta no, revisa `data.js`.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js`, `src/logic.js` y `src/main.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `datos-exports` | `data.js` exporta `APP` (`title`, `intro`, `cacheKey` y `perPage` entero de 3 a 20), de 3 a 8 `FIELDS` (`name` camelCase sin repetir ni `id`, `label`, `type` `text` o `number`, el primero `text` y obligatorio, `minLength`, `min` y `max` bien puestos) y de 8 a 30 `SEED` que cumplen las reglas de `FIELDS`, con el primer campo sin repetir |
| `datos-dominio` | El título, los campos y las fichas no son los del ejemplo Planetario |
| `request-json` | `requestJson` pide con `fetchFn`, envía `data` como JSON, devuelve el JSON (`null` con 204), lanza `HttpError` con `status`, mensaje y `fields`, y se cancela con `signal` o a los `timeout` ms (`TimeoutError`) |
| `create-latest` | `createLatest` llama a `fn` con los argumentos y un `signal` nuevo, aborta el `signal` de la llamada anterior y devuelve lo que devuelve `fn` |
| `reduce-carga` | `reduce` con `load`, `cached`, `loaded` y `failed` devuelve el estado nuevo sin modificar el anterior, conservando lo que se muestra |
| `reduce-cambios` | `reduce` con `saved` reemplaza la ficha en su sitio o la pone la primera sumando 1 al total, y con `removed` la quita restando 1 (`status` `empty` si no quedan) |
| `status-text` | `statusText` describe cada estado (cargando, fichas y páginas, sin resultados, error) y la edad de la copia guardada con `Intl.RelativeTimeFormat` |
| `card-html` | `cardHtml` devuelve el HTML de la ficha con `data-id`, el primer campo en `h3`, un `dt`/`dd` por campo con valor (números con formato es-ES), los botones de editar y borrar, y todo escapado |
| `validate` | `validate` devuelve `{ data, errors }`: textos recortados, números convertidos, `null` en los vacíos y un mensaje por campo con error (`Obligatorio`, `Debe ser un número`, `Entre min y max`, `Mínimo n caracteres`) |
| `create-cache` | `createCache` guarda `{ version, savedAt, data }` en `storage` y `read` devuelve `{ data, savedAt }`, o `null` si no hay copia, no es JSON, es de otra versión, ha caducado o `storage` falla; `write` devuelve `false` si `storage` falla y `clear` nunca lanza |
| `servidor` | Con tus datos y `server.js`: `requestJson` lista la primera página, `validate` prepara una ficha que el servidor acepta (201), una vacía da los mismos errores en `validate` y en el servidor (422), `cardHtml` la pinta y `DELETE` devuelve `null` |

Que los datos sean de tu dominio, que la página funcione y que el código se lea bien lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-24` con tu catálogo en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Estados en la página](../2-practicas/lab-03-estados-pagina/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 24](../README.md)
