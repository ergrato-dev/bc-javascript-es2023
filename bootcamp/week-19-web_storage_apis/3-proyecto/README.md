# Proyecto Semana 19 — Cuaderno persistente

## Descripción

Un cuaderno de tu dominio (las observaciones de un planetario, las piezas que restaura un museo...) que **recuerda** lo que haces. Puedes añadir entradas, marcarlas como favoritas y borrarlas; al recargar o volver otro día, todo sigue ahí. Mientras escribes una entrada, el formulario se guarda como borrador y sobrevive a la recarga. Si abres el cuaderno en dos pestañas, lo que cambias en una aparece en la otra.

La página también aguanta lo que puede salir mal: datos guardados por una versión anterior, datos dañados, un almacenamiento lleno o bloqueado. En ningún caso deja de funcionar.

La página, el servidor y `main.js` ya están hechos. Tu trabajo es escribir las funciones de `src/logic.js` y cambiar los datos de ejemplo por los de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-19
cp -r bootcamp/week-19-web_storage_apis/3-proyecto/starter/. ~/js-proyecto-semana-19/
cd ~/js-proyecto-semana-19
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `server.js` | Un servidor de archivos: sirve la página por `http://` | No |
| `index.html` | El formulario y la lista; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El nombre, el prefijo de las claves, las categorías y las entradas iniciales | Sí: paso 2 |
| `src/logic.js` | Ocho funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | Los listeners, el render y el arranque | No, pero léelo |

- **Qué:** `logic.js` convierte la lista en texto y de vuelta (`serialize`, `deserialize`), valida y migra los datos (`isValidEntry`, `migrate`), y guarda sin romper la página (`createStore`, `createDraft`, `isStorageAvailable`, `fromStorageEvent`). Ninguna función usa `localStorage` directamente: reciben un objeto con `getItem`, `setItem` y `removeItem`.
- **Para qué:** recibir el almacenamiento como parámetro permite pasarle `localStorage`, `sessionStorage` o un objeto en memoria, y probar las funciones con Node, que no tiene `localStorage`.
- **Impacto:** `scripts/verificar-semana.sh` prueba cada función con un almacenamiento falso hecho con un `Map`, que también puede simular que está lleno. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

Lee `src/main.js` mientras trabajas, porque aplica la teoría de esta semana:

- `inMemory` es el plan B cuando el almacenamiento está bloqueado ([lab 04, paso 1](../2-practicas/lab-04-cuotas-y-errores/README.md#paso-1-se-puede-usar-el-almacenamiento)).
- `commit` guarda cada cambio y avisa si no cabe.
- El listener de `storage` sincroniza las pestañas ([lab 01, paso 6](../2-practicas/lab-01-local-session-storage/README.md#paso-6-el-evento-storage-avisa-a-las-otras-pestañas)).
- El arranque decide qué hacer según el `status` de lo que lee: empezar con las entradas de ejemplo, convertir datos antiguos o avisar de datos dañados.

---

## Paso 1: arrancar el servidor y ver la página (5 min)

```bash
node server.js
```

```text
🚀 Página en http://localhost:3000 (Ctrl+C para pararlo)
```

**Qué:** `server.js` sirve los archivos de la carpeta. **Para qué:** `index.html` carga `src/main.js` como módulo (`type="module"`), y el navegador no carga módulos desde un archivo abierto con doble clic. **Impacto:** abre siempre `http://localhost:3000`, no el archivo. Los datos se guardan para el origen `http://localhost:3000`: si arrancas en otro puerto, empiezas con el almacén vacío.

Con el starter solo se ven el título, el formulario vacío y la lista sin entradas. La consola de las DevTools muestra el error `Uncaught TypeError: Cannot read properties of undefined (reading 'load')`: `createStore` todavía devuelve `undefined`, y `main.js` intenta usar su `load`.

Deja el servidor abierto. Cuando cambies un archivo, basta con recargar la página, porque el servidor lee los archivos en cada petición. Usa otra terminal, en la misma carpeta, para los comandos de los pasos 3 a 9.

## Paso 2: tus datos (10 min)

Abre `src/data.js` y cambia los datos del Planetario por los de tu dominio, con estas reglas:

- `APP.title`: el nombre de la página. `APP.namespace`: el prefijo de las claves, en minúsculas, cifras y guiones (`biblioteca`, `club-ajedrez`). `APP.entry`: cómo se llama una entrada en singular y en plural.
- `CATEGORIES`: de 3 a 8 categorías, sin repetir.
- `DRAFT_TTL_MS`: cuánto dura el borrador, en milisegundos (un entero positivo).
- `SEED`: de 4 a 12 entradas. `id` entero positivo sin repetir; `title` de 5 caracteres o más, sin repetir; `category` una de `CATEGORIES` (al menos 2 distintas); `createdAt` un `new Date(...)`; `favorite` `true` o `false` (al menos una de cada).

```js
export const APP = {
  title: 'Cuaderno del planetario',
  namespace: 'planetario',
  entry: { one: 'observación', many: 'observaciones' },
};
```

`SEED` solo se usa la primera vez, cuando no hay nada guardado. Si ya probaste la página con los datos del Planetario y cambias el `namespace`, el cuaderno empieza de cero con tu prefijo.

## Paso 3: `serialize` e `isValidEntry` (15 min)

Una entrada es `{ id, title, category, createdAt, favorite }`, con `createdAt` como `Date`. `serialize(entries)` la convierte en el texto que se guarda: un **sobre** con la versión, `{ version: SCHEMA_VERSION, entries }`, pasado por `JSON.stringify`. Las fechas se convierten solas en texto ISO ([teoría 02](../1-teoria/02-serializacion.md#2-lo-que-no-vuelve-igual)).

`isValidEntry(value)` comprueba la forma de una entrada antes de usarla. Las reglas están en el comentario de `logic.js`. Para la fecha, no basta con `instanceof Date`: `new Date('ayer')` es un `Date` inválido, y su `getTime()` es `NaN`.

```bash
node --input-type=module -e "import { serialize, isValidEntry } from './src/logic.js'; const entry = { id: 1, title: 'Luna llena', category: 'luna', createdAt: new Date('2026-11-24T20:00:00Z'), favorite: false }; console.log(serialize([entry])); console.log(isValidEntry(entry), isValidEntry({ ...entry, createdAt: '2026-11-24' }), isValidEntry(null));"
```

```text
{"version":2,"entries":[{"id":1,"title":"Luna llena","category":"luna","createdAt":"2026-11-24T20:00:00.000Z","favorite":false}]}
true false false
```

## Paso 4: `migrate` (15 min)

La primera versión del cuaderno guardaba un array de `{ id, title, date }`, sin sobre. `migrate(data)` recibe lo que devuelve `JSON.parse` y lo lleva a la versión 2 ([lab 02, paso 6](../2-practicas/lab-02-serializacion/README.md#paso-6-versionar-lo-que-guardas)):

- Si es un array (`Array.isArray`), es la versión 1: devuelve `{ version: 2, entries }`, donde cada entrada tiene `category: 'general'`, `createdAt` igual a su `date` (todavía texto) y `favorite: false`.
- Si es un sobre con `version` igual a `SCHEMA_VERSION`, lo devuelve tal cual.
- Si no, lanza un `Error` con el mensaje `Versión desconocida: <version>`, por ejemplo con ``new Error(`Versión desconocida: ${data?.version}`)``. El `?.` evita otro error si `data` es `null`.

```bash
node --input-type=module -e "import { migrate } from './src/logic.js'; console.log(JSON.stringify(migrate([{ id: 1, title: 'Luna llena', date: '2026-10-17' }]))); try { migrate({ version: 3, entries: [] }); } catch (error) { console.log(error.message); }"
```

```text
{"version":2,"entries":[{"id":1,"title":"Luna llena","category":"general","createdAt":"2026-10-17","favorite":false}]}
Versión desconocida: 3
```

## Paso 5: `deserialize` (20 min)

`deserialize(text)` es el camino de vuelta, y el que tiene que desconfiar de todo. Devuelve siempre `{ entries, status }`:

1. Si `text` es `null` (no hay nada guardado): `{ entries: [], status: 'empty' }`.
2. Dentro de un `try`: `JSON.parse(text)`, después `migrate`, y convierte cada `createdAt` en `Date` con `{ ...entry, createdAt: new Date(entry.createdAt) }`.
3. Si alguna entrada no pasa `isValidEntry` (usa `every`), los datos están dañados.
4. `status` es `'migrated'` si lo leído era un array y `'ok'` si era un sobre.
5. En el `catch` (JSON roto o versión desconocida) y en el punto 3: `{ entries: [], status: 'corrupt' }`.

`deserialize` no lanza nunca: quien la llama solo mira `status`.

```bash
node --input-type=module -e "import { deserialize } from './src/logic.js'; console.log(deserialize(null)); const { entries, status } = deserialize('[{\"id\":1,\"title\":\"Luna llena\",\"date\":\"2026-10-17\"}]'); console.log(status, entries[0].createdAt instanceof Date); console.log(deserialize('{\"version\":2,'));"
```

```text
{ entries: [], status: 'empty' }
migrated true
{ entries: [], status: 'corrupt' }
```

## Paso 6: `createStore` (15 min)

`createStore(storage, key)` devuelve un objeto con tres métodos que usan `storage` y la clave `key`:

- `load()`: `deserialize(storage.getItem(key))`.
- `save(entries)`: `storage.setItem(key, serialize(entries))` dentro de un `try`, y devuelve `{ ok: true }`. Si el error tiene `name` igual a `'QuotaExceededError'`, devuelve `{ ok: false, reason: 'quota' }`; si es otro, lo relanza con `throw error` ([lab 04, paso 4](../2-practicas/lab-04-cuotas-y-errores/README.md#paso-4-un-guardado-que-no-rompe-la-página)).
- `clear()`: `storage.removeItem(key)`.

Las funciones de los métodos recuerdan `storage` y `key` aunque `createStore` ya haya terminado: es un *closure*. En el comando, `storage` es un objeto con un `Map` que imita a `localStorage`, y después se cambia su `setItem` por uno que lanza el error de cuota:

```bash
node --input-type=module -e "import { createStore } from './src/logic.js'; const items = new Map(); const storage = { getItem: (key) => items.get(key) ?? null, setItem: (key, value) => items.set(key, String(value)), removeItem: (key) => items.delete(key) }; const store = createStore(storage, 'planetario:entries'); console.log(store.save([])); console.log(items); console.log(store.load()); storage.setItem = () => { throw new DOMException('Lleno', 'QuotaExceededError'); }; console.log(store.save([]));"
```

```text
{ ok: true }
Map(1) { 'planetario:entries' => '{"version":2,"entries":[]}' }
{ entries: [], status: 'ok' }
{ ok: false, reason: 'quota' }
```

## Paso 7: `createDraft` (15 min)

El borrador del formulario va en `sessionStorage` y caduca. `createDraft(storage, key, ttlMs, now)` devuelve:

- `save(fields)`: guarda `JSON.stringify({ fields, savedAt: now() })`.
- `load()`: si no hay nada, `null`. Si `now() - savedAt` es menor que `ttlMs`, devuelve `fields`. Si ha caducado o el texto no es JSON válido, borra la clave y devuelve `null`.
- `clear()`: borra la clave.

`now` es una función que devuelve la hora en milisegundos; por defecto, `Date.now`. Las pruebas le pasan una hora fija para no tener que esperar ([lab 04, paso 5](../2-practicas/lab-04-cuotas-y-errores/README.md#paso-5-datos-que-caducan)). Aquí el borrador dura 1000 ms:

```bash
node --input-type=module -e "import { createDraft } from './src/logic.js'; const items = new Map(); const storage = { getItem: (key) => items.get(key) ?? null, setItem: (key, value) => items.set(key, String(value)), removeItem: (key) => items.delete(key) }; let now = 0; const draft = createDraft(storage, 'planetario:draft', 1000, () => now); draft.save({ title: 'Saturno', category: 'planeta' }); console.log(items.get('planetario:draft')); now = 999; console.log(draft.load()); now = 1000; console.log(draft.load(), items.size);"
```

```text
{"fields":{"title":"Saturno","category":"planeta"},"savedAt":0}
{ title: 'Saturno', category: 'planeta' }
null 0
```

## Paso 8: `isStorageAvailable` (10 min)

`isStorageAvailable(getStorage)` llama a `getStorage()`, escribe una clave de prueba, la borra y devuelve `true`. Si cualquiera de los tres pasos lanza, devuelve `false` ([teoría 04](../1-teoria/04-cuotas-y-errores.md#1-puede-no-estar-disponible)). No debe dejar la clave de prueba.

```bash
node --input-type=module -e "import { isStorageAvailable } from './src/logic.js'; const items = new Map(); const storage = { getItem: (key) => items.get(key) ?? null, setItem: (key, value) => items.set(key, String(value)), removeItem: (key) => items.delete(key) }; console.log(isStorageAvailable(() => storage), items.size); console.log(isStorageAvailable(() => { throw new DOMException('Bloqueado', 'SecurityError'); }));"
```

```text
true 0
false
```

## Paso 9: `fromStorageEvent` (10 min)

Cuando otra pestaña cambia `localStorage`, `main.js` recibe un evento `storage` y llama a `fromStorageEvent(event, key)` para saber qué lista pintar:

- `event.key` es `null` (la otra pestaña llamó a `clear()`): `{ entries: [], status: 'empty' }`.
- `event.key` es otra clave: `null`. `main.js` no hace nada.
- `event.key` es `key`: `deserialize(event.newValue)`. Si la otra pestaña borró la clave, `newValue` es `null` y sale `'empty'`.

Solo usa `key` y `newValue`, así que se prueba con objetos normales en lugar de eventos:

```bash
node --input-type=module -e "import { fromStorageEvent, serialize } from './src/logic.js'; const key = 'planetario:entries'; console.log(fromStorageEvent({ key: 'otra', newValue: '[]' }, key)); console.log(fromStorageEvent({ key: null, newValue: null }, key)); console.log(fromStorageEvent({ key, newValue: serialize([]) }, key));"
```

```text
null
{ entries: [], status: 'empty' }
{ entries: [], status: 'ok' }
```

## Paso 10: probar la página y comprobar (15 min)

Abre **Application** → **Local storage** → `http://localhost:3000` en las DevTools y recarga la página. Con los datos de ejemplo:

1. Primera visita: `6 observaciones · 2 favoritas`, de la más reciente (las Pléyades) a la más antigua. Arriba sale `Primera visita: el cuaderno empieza con 6 observaciones de ejemplo.` y abajo `Guardado en localStorage con la clave «planetario:entries»: 746 caracteres.` En **Application** aparece la clave con el sobre `{"version":2,"entries":[...]}`.
2. Pulsa **☆ Favorita** en las Pléyades y **Borrar** en los anillos de Saturno: `5 observaciones · 3 favoritas` y `630 caracteres`.
3. Recarga: todo sigue igual, sin mensaje.
4. Escribe un título sin enviarlo, elige otra categoría y recarga: el formulario lo recupera y sale `Has recuperado el borrador que estabas escribiendo.` En **Application** → **Session storage** está `planetario:draft`.
5. Pulsa **Guardar**: la entrada aparece la primera, `6 observaciones`, y `planetario:draft` desaparece.
6. Abre `http://localhost:3000` en otra pestaña: muestra la misma lista y el formulario vacío (el borrador era de la otra pestaña). Borra ahí una entrada y vuelve a la primera: ya no está, y sale `La lista ha cambiado en otra pestaña.`
7. Simula datos de la versión 1. En la consola:

   ```js
   localStorage.setItem('planetario:entries', JSON.stringify([{ id: 1, title: 'Versión antigua', date: '2026-01-15' }]));
   ```

   Recarga: `1 observación · 0 favoritas`, de categoría `general`, con `Los datos guardados eran de una versión anterior y se han convertido.` La clave ya guarda el sobre de la versión 2 (`137 caracteres`).
8. Simula datos dañados con `localStorage.setItem('planetario:entries', '{"version": 2, "entries": [')` y recarga: la lista está vacía y sale `Los datos guardados estaban dañados: el cuaderno empieza vacío.` La página funciona, y el texto dañado sigue guardado (`27 caracteres`) hasta el primer cambio, por si quieres rescatarlo a mano.
9. Añade una entrada con el título `<img src=x onerror=alert(1)>`: aparece como texto y no sale ninguna alerta (semana 17).
10. **Borrar todo**: la lista se vacía y la clave desaparece de **Application**. Recarga para volver a los datos de ejemplo.

La consola de las DevTools no debe mostrar ningún error. Después, haz lo mismo con tus datos.

Repasa `src/logic.js` antes de entregar: borra los `TODO` que queden y comprueba que no usas `var`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-19 ./scripts/verificar-semana.sh 19
# Semana 19 — Web Storage APIs
#   ✅ src/data.js, src/logic.js y src/main.js son módulos ES válidos
#   ...
# 15/15 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js`, `src/logic.js` y `src/main.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `datos-exports` | `data.js` exporta `APP` (`title`, `namespace` en minúsculas y `entry.one` y `entry.many`), de 3 a 8 `CATEGORIES` sin repetir, `DRAFT_TTL_MS` entero positivo y de 4 a 12 entradas en `SEED` con `id` entero positivo y `title` de 5 o más caracteres sin repetir, `category` de `CATEGORIES`, `createdAt` `Date` válido y `favorite` booleano; al menos 2 categorías, 1 favorita y 1 que no lo es |
| `datos-dominio` | El título, el prefijo, las categorías y las entradas no son los del ejemplo Planetario |
| `serializar` | `serialize` guarda `{ version: 2, entries }` en JSON con `createdAt` como texto ISO, y `SCHEMA_VERSION` vale 2 |
| `validar` | `isValidEntry` acepta una entrada correcta y rechaza `null`, `id` no entero o no positivo, `title` vacío, `category` no texto, `createdAt` que no es un `Date` válido y `favorite` no booleano |
| `migrar` | `migrate` convierte un array de la versión 1 en el sobre de la versión 2, devuelve igual un sobre de la versión 2 y lanza «Versión desconocida» con cualquier otra cosa |
| `deserializar` | `deserialize` devuelve `status` `empty` con `null`, `ok` con el texto de `serialize` (`createdAt` vuelve a ser `Date`) y `migrated` con un array de la versión 1 |
| `deserializar-corrupto` | `deserialize` devuelve `{ entries: [], status: 'corrupt' }` con JSON roto, una versión desconocida o una entrada no válida, sin lanzar errores |
| `almacen` | `createStore` guarda con `save` (`{ ok: true }`), lee con `load` y borra con `clear` solo su clave |
| `almacen-cuota` | `save` devuelve `{ ok: false, reason: 'quota' }` con `QuotaExceededError`, deja lo guardado como estaba y relanza cualquier otro error |
| `borrador` | `createDraft` guarda y recupera el borrador, lo borra y devuelve `null` al caducar o si está roto, y `clear` lo quita |
| `disponible` | `isStorageAvailable` devuelve `true` si se puede escribir y borrar (sin dejar claves) y `false` si `getStorage`, `setItem` o `removeItem` lanzan |
| `evento-storage` | `fromStorageEvent` devuelve la lista vacía si `key` es `null`, `null` si el cambio es de otra clave y `deserialize(newValue)` si es de su clave |

Que los datos sean de tu dominio, que la página funcione y que el código se lea bien lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-19` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Cuotas, errores y caducidad](../2-practicas/lab-04-cuotas-y-errores/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 19](../README.md)
