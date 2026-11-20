# Proyecto Semana 07 — Mapa de la colección

## Descripción

Una página con las piezas de tu dominio, agrupadas por sala. Cada pieza tiene un id (`globo-lunar`), un nombre, la sala donde está y unas etiquetas. La nube de etiquetas dice cuántas piezas lleva cada una y, al pulsarlas, filtra las piezas que tienen todas las marcadas. El buscador encuentra una pieza por su id, y el formulario añade piezas nuevas sin repetir id.

La página ya está montada. Tu trabajo es escribir las siete funciones de `src/logic.js` con lo que has visto esta semana (`Set`, operaciones de conjuntos, `Map` y `WeakMap`) y cambiar los datos de ejemplo por los de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-07
cp -r bootcamp/week-07-sets_maps/3-proyecto/starter/. ~/js-proyecto-semana-07/
cd ~/js-proyecto-semana-07
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | El formulario, el buscador, la nube de etiquetas y la lista; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título y las piezas de ejemplo | Sí: paso 2 |
| `src/logic.js` | Siete funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | El código que lee el formulario y pinta la página | No |

- **Qué:** cada pieza tiene la forma `{ id, name, room, tags }`, con `tags` como array de textos.
- **Para qué:** las funciones de `logic.js` reciben las piezas y devuelven un `Set`, un `Map` o un array nuevos, así que `scripts/verificar-semana.sh` puede probarlas desde Node con datos concretos.
- **Impacto:** ninguna función modifica lo que recibe. `main.js` crea un array nuevo cada vez que añades o borras una pieza, y un Set nuevo cada vez que marcas una etiqueta; el paso 9 se apoya en eso. Las piezas viven en memoria: al recargar la página vuelven los datos de `data.js`. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

---

## Paso 1: ver la página (10 min)

```bash
pnpm dlx serve .
```

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. Con el starter, la lista sale vacía y la consola de las DevTools (`F12`, pestaña **Console**) muestra un `TypeError`: `countTags` todavía no devuelve nada. `main.js` usa las siete funciones para pintar la página, así que no aparece entera hasta el paso 9. Mientras tanto, comprueba cada función con el comando `node` de su paso, que importa tus datos y tu función. Deja el servidor abierto en esa terminal y usa otra para el resto.

## Paso 2: tus datos (15 min)

En `src/data.js` están los datos del dominio Planetario, que es solo un ejemplo. Cámbialos por los de **tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- El export por defecto: de 5 a 8 piezas, repartidas en al menos 2 salas.
  - `id`: minúsculas, dígitos y guiones, sin repetir (`maqueta-de-saturno`). Es el mismo que `main.js` calcula para las piezas nuevas a partir del nombre.
  - `name` y `room`: texto.
  - `tags`: un array con al menos una etiqueta en minúsculas. Repite alguna etiqueta entre piezas, para que la nube y el filtro del paso 8 tengan algo que mostrar.

Las salidas de los pasos siguientes son las de los datos de ejemplo; con los tuyos verás tus piezas.

## Paso 3: `uniqueTags` (15 min)

Devuelve un `Set` con todas las etiquetas de todas las piezas. El Set descarta las repetidas y guarda el orden en que aparecieron ([lab 01](../2-practicas/lab-01-set-basics/README.md), pasos 1 y 5). Para juntar todos los arrays `tags` en uno, usa `flatMap` (semana 05). Es una línea.

```bash
node --input-type=module -e "import items from './src/data.js'; import { uniqueTags } from './src/logic.js'; console.log(uniqueTags(items));"
```

```text
Set(9) {
  'óptica',
  'historia',
  'luna',
  'maqueta',
  'meteoritos',
  'tacto',
  'proyección',
  'sol',
  'planetas'
}
```

## Paso 4: `indexById` (10 min)

Devuelve un `Map` cuyas claves son los `id` y cuyos valores son las piezas. `new Map()` acepta un array de pares `[clave, valor]` ([lab 03](../2-practicas/lab-03-map-basics/README.md), paso 1): crea esos pares con `map`. El buscador y el formulario lo usan para encontrar una pieza o saber si un id ya existe sin recorrer el array.

```bash
node --input-type=module -e "import items from './src/data.js'; import { indexById } from './src/logic.js'; const byId = indexById(items); console.log(byId.size, byId.get('reloj-de-sol').name, byId.has('luna'));"
```

```text
6 Reloj de sol false
```

## Paso 5: `groupByRoom` (20 min)

Devuelve un `Map` de sala a array de piezas de esa sala. Recorre las piezas con `for...of`. Para cada una, lee el array que ya tiene su sala con `get` (si todavía no hay ninguno, `?? []`), crea uno nuevo con la pieza al final y guárdalo con `set`. El Map recuerda el orden en que entró cada sala, que es el orden en que la página las pinta.

```bash
node --input-type=module -e "import items from './src/data.js'; import { groupByRoom } from './src/logic.js'; console.log(groupByRoom(items).get('Cúpula').map(({ name }) => name), [...groupByRoom(items).keys()]);"
```

```text
[ 'Telescopio refractor', 'Proyector estelar' ] [ 'Cúpula', 'Sala del Sistema Solar', 'Terraza' ]
```

Si conoces `Map.groupBy(items, fn)` (ES2024), también vale: devuelve lo mismo.

## Paso 6: `countTags` (15 min)

Devuelve un `Map` de etiqueta a número de piezas que la llevan. Es el mismo patrón que el paso 5 con un número en lugar de un array: `get` el valor actual (`?? 0`), súmale uno y `set`. La nube de etiquetas lo usa para mostrar `#historia (3)`.

```bash
node --input-type=module -e "import items from './src/data.js'; import { countTags } from './src/logic.js'; console.log(countTags(items).get('historia'), countTags(items).get('sol'));"
```

```text
3 1
```

## Paso 7: `toggleTag` (10 min)

Recibe el Set de etiquetas marcadas y una etiqueta. Devuelve un Set **nuevo**: sin la etiqueta si estaba, con ella si no. Copia primero con `new Set(selected)` ([lab 01](../2-practicas/lab-01-set-basics/README.md), paso 3) y cambia la copia con `has`, `add` y `delete`. El Set original no debe cambiar: el check lo comprueba.

```bash
node --input-type=module -e "import { toggleTag } from './src/logic.js'; const selected = new Set(['luna']); console.log(toggleTag(selected, 'sol'), toggleTag(selected, 'luna'), selected);"
```

```text
Set(2) { 'luna', 'sol' } Set(0) {} Set(1) { 'luna' }
```

## Paso 8: `filterByTags` (15 min)

Devuelve las piezas que llevan **todas** las etiquetas marcadas: las marcadas tienen que ser un subconjunto de las etiquetas de la pieza. Usa `isSubsetOf` ([lab 02](../2-practicas/lab-02-set-operations/README.md), paso 7) sobre `new Set(tags)`, o `every` con `has` (paso 5 del mismo lab). Con el Set vacío no hay nada que cumplir, así que se quedan todas: las dos formas lo hacen sin un `if`.

```bash
node --input-type=module -e "import items from './src/data.js'; import { filterByTags } from './src/logic.js'; console.log(filterByTags(items, new Set(['historia', 'tacto'])).map(({ id }) => id), filterByTags(items, new Set()).length);"
```

```text
[ 'meteorito-campo-del-cielo' ] 6
```

## Paso 9: `getSummary` y comprobar (20 min)

`getSummary(items)` devuelve `{ pieces, rooms, tags }`: el número de piezas, de salas (el `size` de `groupByRoom`) y de etiquetas distintas (el `size` de `uniqueTags`). La cabecera de la página lo muestra.

`main.js` la llama en cada render, también al escribir en el buscador, aunque las piezas no hayan cambiado. Para no recalcular, guarda cada resumen en `summaryCache`, el `WeakMap` que ya está declarado, con el array `items` como clave ([lab 04](../2-practicas/lab-04-weakmap-cache/README.md), paso 4): si ya tiene ese array, devuelve lo guardado. Como `main.js` crea un array nuevo al añadir o borrar, el resumen se recalcula justo cuando hace falta, y el array viejo y su resumen pueden liberarse de la memoria: con un `Map` se quedarían ahí.

```bash
node --input-type=module -e "import items from './src/data.js'; import { getSummary } from './src/logic.js'; const first = getSummary(items); console.log(first, getSummary(items) === first, getSummary([...items]) === first);"
```

```text
{ pieces: 6, rooms: 3, tags: 9 } true false
```

`[...items]` tiene las mismas piezas, pero es otro array: otra clave.

Cuando termines, desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-07 ./scripts/verificar-semana.sh 07
# Semana 07 — Sets y Maps
#   ✅ src/data.js y src/logic.js son módulos ES válidos
#   ...
# 12/12 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla.

Por último, prueba la página entera:

1. Añade una pieza con el nombre de una que ya existe y sin sala: salen los dos errores. Al escribir en la sala, el navegador te sugiere las que ya hay.
2. Corrígelos con una sala nueva y las etiquetas `Nueva, nueva, historia`: aparece la sala con la pieza, que lleva `#nueva` una sola vez, y la cabecera suma una pieza, una sala y una etiqueta.
3. Marca dos etiquetas en la nube: quedan solo las piezas que llevan las dos. Desmárcalas.
4. Escribe un id que no existe en el buscador: sale el aviso. Escribe el de tu pieza nueva: sale solo ella. Bórrala.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js` y `src/logic.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `datos-exports` | `data.js` exporta `TITLE` con nombre, y por defecto de 5 a 8 piezas con `id` sin repetir (minúsculas y guiones), nombre, sala y etiquetas; al menos 2 salas y alguna etiqueta en dos piezas |
| `datos-dominio` | El título y las piezas no son los del ejemplo Planetario |
| `unique-tags` | `uniqueTags` devuelve un `Set` con las etiquetas sin repetir y en orden de aparición |
| `index-by-id` | `indexById` devuelve un `Map` de id a la misma pieza |
| `group-by-room` | `groupByRoom` devuelve un `Map` de sala a sus piezas, con las salas en orden de aparición |
| `count-tags` | `countTags` devuelve un `Map` de etiqueta a número de piezas, en orden de aparición |
| `toggle-tag` | `toggleTag` añade o quita la etiqueta en un `Set` nuevo y no cambia el original |
| `filter-by-tags` | `filterByTags` deja las piezas con todas las etiquetas marcadas, y todas si no hay ninguna marcada |
| `summary-cache` | `getSummary` cuenta piezas, salas y etiquetas, y con el mismo array devuelve el mismo objeto guardado en un `WeakMap` |

Que los datos sean de tu dominio y que la página funcione lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-07` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — WeakMap, WeakSet y caché](../2-practicas/lab-04-weakmap-cache/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 07](../README.md)
