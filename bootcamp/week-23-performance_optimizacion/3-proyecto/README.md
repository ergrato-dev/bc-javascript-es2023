# Proyecto Semana 23 — Buscador rápido del catálogo

## Descripción

El catálogo de tu dominio (los objetos del cielo de un planetario, las obras de un museo...) tiene miles de fichas, y la persona quiere encontrarlas escribiendo. Un buscador ingenuo recorre y limpia todas las fichas con cada tecla y pinta miles de resultados de golpe: la página se atasca. El tuyo prepara un índice al cargar, espera a que la persona deje de escribir, recuerda las búsquedas ya hechas, pinta los resultados por páginas a medida que se baja y mide lo que tarda cada búsqueda.

La página, el servidor y `main.js` ya están hechos. Tu trabajo es escribir las funciones de `src/logic.js` y describir en `src/data.js` el catálogo de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-23
cp -r bootcamp/week-23-performance_optimizacion/3-proyecto/starter/. ~/js-proyecto-semana-23/
cd ~/js-proyecto-semana-23
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `server.js` | Un servidor de archivos: sirve la página por `http://` | No |
| `index.html` | El buscador, las medidas, la lista de resultados, su centinela y el botón «Volver arriba»; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | `APP` (textos y ajustes), `FIELDS` (los campos), `SEED` (fichas de ejemplo) y `makeRecords`, que genera el catálogo grande | Sí: paso 2 |
| `src/logic.js` | Ocho funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | Prepara el índice, conecta el buscador, pinta las páginas y actualiza las medidas | No, pero léelo |

- **Qué:** `logic.js` prepara y busca (`normalize`, `buildIndex`, `search`), pagina (`paginate`), controla cuántas veces se trabaja (`debounce`, `throttle`, `memoize`) y mide (`measure`). Ninguna función usa el DOM.
- **Para qué:** reciben datos y funciones y devuelven datos y funciones, así que se prueban con Node, que tiene `setTimeout` y `performance` como el navegador. `main.js` solo las conecta con la página.
- **Impacto:** `scripts/verificar-semana.sh` prueba cada función, también los tiempos de `debounce` y `throttle`, y busca en tu catálogo. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

Lee `src/main.js` mientras trabajas, porque aplica la teoría de la semana:

- El catálogo y su índice se preparan **una vez**, al cargar, y `measure` dice cuánto tarda ([teoría 03](../1-teoria/03-menos-trabajo.md#2-preparar-una-vez-lo-que-no-cambia)).
- Cada tecla cuenta en `Teclas`, pero la búsqueda espera `APP.delay` ms con tu `debounce`. Enter busca enseguida y cancela la pendiente con `cancel()` ([teoría 02](../1-teoria/02-debounce-throttle.md#4-cancelar-lo-que-está-pendiente)).
- La búsqueda pasa por tu `memoize` con el texto normalizado: `Orión` y `orion ` son la misma búsqueda y la segunda sale de la caché.
- La lista pinta una página con un `DocumentFragment`, y un `IntersectionObserver` sobre el centinela pinta la siguiente al acercarse al final ([teoría 03](../1-teoria/03-menos-trabajo.md#3-pintar-solo-lo-que-se-ve)).
- El botón «Volver arriba» se actualiza con tu `throttle` y un listener de `scroll` pasivo: la línea de medidas cuenta eventos y actualizaciones.

Las salidas se obtuvieron con Node 24.19.0 y Chromium 156.

---

## Paso 1: arrancar el servidor y ver la página (5 min)

```bash
node server.js
```

```text
🚀 Página en http://localhost:3000 (Ctrl+C para pararlo)
```

**Qué:** `server.js` sirve los archivos de la carpeta. **Para qué:** `index.html` carga `src/main.js` como módulo, y el navegador no carga módulos desde un archivo abierto con doble clic. **Impacto:** abre siempre `http://localhost:3000`, no el archivo.

Con el starter solo se ven el título, la presentación y el buscador. La consola de las DevTools muestra `Uncaught TypeError: Cannot read properties of undefined (reading 'result')`: `measure` todavía no devuelve nada, y `main.js` se para ahí.

Deja el servidor abierto y usa otra terminal, en la misma carpeta, para los comandos de los pasos 3 a 9. El servidor lee los archivos en cada petición: basta con recargar la página.

## Paso 2: tu catálogo (20 min)

Abre `src/data.js`. **`APP`** describe la página y sus ajustes:

| Propiedad | Qué es | Ejemplo |
|---|---|---|
| `title`, `intro` | El título y la presentación | `'Catálogo del cielo del planetario'` |
| `total` | Cuántas fichas genera `makeRecords`, de 500 a 5000 | `2000` |
| `searchFields` | Los `name` de los campos en los que se busca | `['name', 'type', 'constellation']` |
| `pageSize` | Las fichas de cada página de resultados, de 10 a 50 | `20` |
| `delay` | Los milisegundos que espera la búsqueda a que dejes de escribir, de 150 a 500 | `250` |

**`FIELDS`** son los campos de cada ficha, de 3 a 8, en el orden en que se muestran: `name` (en `camelCase` inglés, sin repetir y distinto de `id`) y `label` (el texto que ve la persona). El primero es el nombre de la ficha. **`SEED`** son de 8 a 30 fichas reales de ejemplo, con todos los campos.

`makeRecords` no se edita: repite `SEED` hasta llegar a `total` fichas, les pone un `id` del 1 en adelante y añade el número de copia al primer campo (`Sirio #1`, `Vega #1`... `Sirio #2`). Así tienes un catálogo grande sin escribir miles de fichas.

Cambia el ejemplo Planetario por tu dominio: elige los campos por los que alguien buscaría esas fichas, y pon en `searchFields` los que tenga sentido buscar (no un número de serie, sí un nombre, una categoría o un lugar). La comprobación `catalogo` busca la primera palabra del primer campo de búsqueda de tu primera ficha: tiene que encontrar todas sus copias.

## Paso 3: `normalize` (10 min)

`normalize(text)` prepara un texto para comparar: sin tildes ni diéresis, en minúsculas, sin espacios al principio ni al final y con los espacios repetidos convertidos en uno. Convierte con `String(text)` lo que no sea texto. Las tildes se quitan como en la [teoría 03](../1-teoria/03-menos-trabajo.md#2-preparar-una-vez-lo-que-no-cambia); los espacios repetidos, con `replace(/\s+/g, ' ')` (`\s` es cualquier espacio en blanco y `+`, uno o más seguidos).

```bash
node --input-type=module -e "import { normalize } from './src/logic.js'; console.log(['  Nebulosa   de ORIÓN ', 'Pingüino', 'Ñandú', 1540].map(normalize));"
```

```text
[ 'nebulosa de orion', 'pinguino', 'nandu', '1540' ]
```

## Paso 4: `buildIndex` (10 min)

`buildIndex(records, fields)` devuelve un elemento `{ record, text }` por registro, en el mismo orden: `record` es el mismo objeto (no una copia) y `text`, el `normalize` de los valores de los campos `fields` unidos con un espacio. Un campo que falta cuenta como texto vacío.

```bash
node --input-type=module -e "import { buildIndex } from './src/logic.js'; import { APP, makeRecords } from './src/data.js'; const index = buildIndex(makeRecords(), APP.searchFields); console.log(index.length, index[3]);"
```

```text
2000 {
  record: {
    id: 4,
    name: 'Nebulosa de Orión #1',
    type: 'Nebulosa',
    constellation: 'Orión',
    magnitude: 4
  },
  text: 'nebulosa de orion #1 nebulosa orion'
}
```

## Paso 5: `search` (15 min)

`search(index, query)` normaliza la búsqueda, la parte en palabras por los espacios y devuelve los `record` cuyo `text` contiene **todas** las palabras, en el orden del índice. Sin palabras (texto vacío o solo espacios), devuelve todos. Usa `filter`, `every` e `includes`; no vuelvas a normalizar las fichas, que ya lo están.

```bash
node --input-type=module -e "import { buildIndex, search } from './src/logic.js'; import { APP, makeRecords } from './src/data.js'; const index = buildIndex(makeRecords(), APP.searchFields); for (const query of ['orion', 'NEBULOSA orión', 'lira', 'tauro cumulo', 'cometa', '']) console.log(JSON.stringify(query), search(index, query).length);"
```

```text
"orion" 400
"NEBULOSA orión" 200
"lira" 400
"tauro cumulo" 400
"cometa" 0
"" 2000
```

`"tauro cumulo"` encuentra las Pléyades (cúmulo abierto en Tauro) y también Omega Centauri, porque «cen**tauro**» contiene «tauro». Buscar por trozos de palabra es lo que permite encontrar resultados mientras se escribe.

## Paso 6: `paginate` (10 min)

`paginate(items, page, size)` devuelve una página de la lista, empezando por la 1: `{ items, page, pages, total, hasMore }`. `items` son los de esa página (vacío si la página no existe), `pages` el número de páginas (como mínimo 1, también con la lista vacía), `total` la longitud de la lista y `hasMore` si hay páginas después. Usa `slice`, que no cambia la lista.

```bash
node --input-type=module -e "import { paginate } from './src/logic.js'; import { makeRecords } from './src/data.js'; const records = makeRecords(); for (const page of [1, 100, 101]) { const { items, ...rest } = paginate(records, page, 20); console.log(items.length, items[0]?.name, rest); }"
```

```text
20 Sirio #1 { page: 1, pages: 100, total: 2000, hasMore: true }
20 Sirio #199 { page: 100, pages: 100, total: 2000, hasMore: false }
0 undefined { page: 101, pages: 100, total: 2000, hasMore: false }
```

## Paso 7: `debounce` (15 min)

`debounce(fn, ms)` devuelve una función que espera a que dejen de llamarla: cada llamada reinicia una espera de `ms` milisegundos, y solo cuando termina se ejecuta `fn` con los argumentos de la última llamada. La función devuelta tiene un método `cancel()` que anula la ejecución pendiente ([teoría 02](../1-teoria/02-debounce-throttle.md#2-debounce-esperar-a-que-paren)).

```bash
node --input-type=module -e "import { debounce } from './src/logic.js'; const start = performance.now(); const log = (text) => console.log(Math.round((performance.now() - start) / 10) * 10, 'ms', text); const later = debounce(log, 100); later('o'); setTimeout(() => later('or'), 50); setTimeout(() => later('orion'), 120); const other = debounce(log, 100); other('cancelada'); other.cancel();"
```

```text
220 ms orion
```

La última llamada llega a los 120 ms y se ejecuta 100 ms después. `cancelada` no aparece.

## Paso 8: `throttle` (20 min)

`throttle(fn, ms)` devuelve una función que ejecuta `fn` como mucho una vez cada `ms` milisegundos:

- La primera llamada ejecuta `fn` enseguida y abre una ventana de `ms`.
- Si llegan llamadas durante la ventana, al cerrarse se ejecuta `fn` una vez con los argumentos de la última, y se abre otra ventana.
- Si no llegan, la ventana se cierra y la próxima llamada vuelve a ejecutarse enseguida.
- `cancel()` anula la ejecución pendiente y cierra la ventana.

```bash
node --input-type=module -e "import { throttle } from './src/logic.js'; const start = performance.now(); const log = (text) => console.log(Math.round((performance.now() - start) / 10) * 10, 'ms', text); const limited = throttle(log, 100); for (const time of [0, 30, 60, 90, 250]) setTimeout(() => limited('evento ' + time), time);"
```

```text
0 ms evento 0
100 ms evento 90
250 ms evento 250
```

Los eventos de 30, 60 y 90 llegan durante la primera ventana: a los 100 ms se ejecuta el último. La segunda ventana (de 100 a 200 ms) se cierra sin llamadas, así que el evento de 250 se ejecuta enseguida.

## Paso 9: `memoize` y `measure` (20 min)

`memoize(fn, max = 100)` devuelve una función que guarda los resultados de `fn` según su primer argumento, en un `Map` que se puede leer en la propiedad `cache`. Si el argumento ya está, devuelve el resultado guardado sin llamar a `fn` y lo pasa al final del `Map` (recién usado). Si al guardar uno nuevo pasa de `max`, borra el primero: el que lleva más tiempo sin usarse ([teoría 03](../1-teoria/03-menos-trabajo.md#1-recordar-resultados-memoize)).

`measure(fn, runs = 5)` ejecuta `fn` `runs` veces, mide cada vez con `performance.now()` y devuelve `{ result, ms, runs }`: `result` es lo que devolvió la última ejecución y `ms` la mediana de los tiempos ([teoría 01](../1-teoria/01-medir.md#4-una-sola-medida-engaña)).

```bash
node --input-type=module -e "import { buildIndex, memoize, measure, search } from './src/logic.js'; import { APP, makeRecords } from './src/data.js'; const index = buildIndex(makeRecords(), APP.searchFields); let searches = 0; const cached = memoize((query) => { searches += 1; return search(index, query); }, 2); for (const query of ['orion', 'lira', 'orion', 'vega', 'lira']) cached(query); console.log(searches, [...cached.cache.keys()]); const { result, ms, runs } = measure(() => search(index, 'orion')); console.log(result.length, runs, ms < 5);"
```

```text
4 [ 'vega', 'lira' ]
400 5 true
```

Con un máximo de 2: `orion` y `lira` se calculan; `orion` sale de la caché y pasa al final; `vega` se calcula y borra `lira`, la más antigua; `lira` se calcula otra vez y borra `orion`. Cuatro búsquedas de cinco.

## Paso 10: probar la página y comprobar (15 min)

Recarga `http://localhost:3000`. Con los datos de ejemplo:

1. Debajo del buscador: `2000 fichas · índice preparado en 9.60 ms` (tu tiempo será otro) y `Teclas: 0 · búsquedas: 1 · desde la caché: 0 · ...`. El título de la lista dice `2000 resultados · mostrando 20`.
2. Baja con la rueda del ratón: cada vez que te acercas al final se añaden 20 fichas (`mostrando 40`, `60`...). Aparece el botón **↑ Volver arriba**, y la línea de medidas cuenta muchos más eventos de scroll que actualizaciones. Pulsa el botón.
3. Escribe `nebulosa orion` sin pararte: `Teclas` sube con cada tecla, pero `búsquedas` solo sube una vez, cuando dejas de escribir. El título dice `200 resultados · mostrando 20`.
4. Borra el texto y vuelve a escribir `Nebulosa Orión`: los resultados salen de la caché (`desde la caché` sube y `búsquedas` no), porque el texto normalizado es el mismo.
5. Borra el texto y pulsa Enter: se buscan enseguida todas las fichas, sin esperar, y la búsqueda vacía también sale de la caché.

La consola de las DevTools no debe mostrar ningún error. Después, haz lo mismo con tu catálogo. Si quieres ver la diferencia, sube `APP.total` a 5000 y compara el tiempo de preparar el índice y el de una búsqueda.

Repasa `src/logic.js` antes de entregar: borra los `TODO` que queden y comprueba que no usas `var`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-23 ./scripts/verificar-semana.sh 23
# Semana 23 — Performance y Optimización
#   ✅ src/data.js, src/logic.js y src/main.js son módulos ES válidos
#   ...
# 14/14 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla. Las comprobaciones de `debounce` y `throttle` esperan unos milisegundos: tardan algo más que las demás.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js`, `src/logic.js` y `src/main.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `datos-exports` | `data.js` exporta `APP` (`title`, `intro`, `total` entero de 500 a 5000, `searchFields` con campos de `FIELDS`, `pageSize` de 10 a 50 y `delay` de 150 a 500), de 3 a 8 `FIELDS` con `name` camelCase sin repetir (ni `id`) y `label`, de 8 a 30 `SEED` con todos los campos, y `makeRecords` genera `total` fichas con `id` del 1 en adelante |
| `datos-dominio` | El título, los campos y las fichas no son los del ejemplo Planetario |
| `normalize` | `normalize` quita tildes y diéresis, pasa a minúsculas, recorta y deja un solo espacio entre palabras, y acepta números |
| `build-index` | `buildIndex` devuelve `{ record, text }` por registro, en orden, con el mismo objeto y `text` normalizado de los campos pedidos (un campo que falta no deja espacios de más) |
| `search` | `search` devuelve los registros con todas las palabras (en cualquier orden, sin mirar tildes ni mayúsculas), en el orden del índice; sin palabras, todos |
| `paginate` | `paginate` devuelve `{ items, page, pages, total, hasMore }`, con `pages` como mínimo 1 e `items` vacío en una página que no existe |
| `debounce` | `debounce` ejecuta `fn` una vez, con los últimos argumentos, cuando dejan de llamarla `ms` milisegundos; llamadas separadas se ejecutan todas y `cancel()` anula la pendiente |
| `throttle` | `throttle` ejecuta la primera llamada enseguida, una más al cerrar la ventana con los últimos argumentos si llegaron llamadas, nada si no llegaron, y `cancel()` anula la pendiente |
| `memoize` | `memoize` llama a `fn` una vez por argumento, expone la caché en `cache` (un `Map`) y, al pasar de `max`, borra el que lleva más tiempo sin usarse |
| `measure` | `measure` ejecuta `fn` `runs` veces (5 si no se indica) con `performance.now()` y devuelve `{ result, ms, runs }`, con la mediana de los tiempos |
| `catalogo` | Con tus datos: el catálogo se indexa por `searchFields`, la primera palabra de una ficha de `SEED` encuentra sus copias, una búsqueda vacía devuelve todas, la paginación da las páginas esperadas y buscar tarda menos de 50 ms |

Que los datos sean de tu dominio, que la página funcione y que el código se lea bien lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-23` con tu catálogo en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Fugas de memoria](../2-practicas/lab-04-fugas-memoria/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 23](../README.md)
