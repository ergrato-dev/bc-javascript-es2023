# Proyecto Semana 08 — Catálogo por páginas

## Descripción

Una página con las piezas de tu dominio ordenadas por nombre y repartidas en páginas. Eliges cuántas piezas ver por página (3, 4 o 6) y filtras por sala; los botones **Anterior** y **Siguiente** cambian de página y se desactivan en los extremos. Cada pieza recibe un id (`PLA-001`, `PLA-002`...) de un generador, y el formulario añade piezas nuevas con el siguiente id.

La página ya está montada. Tu trabajo es escribir los generadores y funciones de `src/logic.js` con lo que has visto esta semana (`function*`, `yield`, `yield*` y `Symbol.iterator`) y cambiar los datos de ejemplo por los de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-08
cp -r bootcamp/week-08-iteradores_generadores/3-proyecto/starter/. ~/js-proyecto-semana-08/
cd ~/js-proyecto-semana-08
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | El formulario, los filtros, la lista y los botones de página; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título, el prefijo de los ids y las piezas de ejemplo | Sí: paso 2 |
| `src/logic.js` | Cuatro generadores y tres funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | El código que lee el formulario y pinta la página | No |

- **Qué:** cada pieza tiene la forma `{ id, name, room }`. En `data.js` no llevan `id`: `main.js` se lo pone al cargar con `createIdGenerator`, y lo mismo a cada pieza nueva.
- **Para qué:** `take`, `skip` y `filterBy` reciben cualquier iterable (un array, un generador, el catálogo) y entregan valores de uno en uno. Encadenadas, `getPage` saca una página sin crear arrays intermedios, y `scripts/verificar-semana.sh` puede probarlas desde Node.
- **Impacto:** ninguna función modifica lo que recibe. Los generadores son perezosos: solo calculan lo que se les pide, así que funcionan también con secuencias infinitas. Las piezas viven en memoria: al recargar la página vuelven los datos de `data.js`. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

---

## Paso 1: ver la página (10 min)

```bash
pnpm dlx serve .
```

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. Con el starter, la lista sale vacía y la consola de las DevTools (`F12`, pestaña **Console**) muestra `TypeError: Cannot read properties of undefined (reading 'map')`: `getPage` todavía no devuelve nada. `main.js` usa las funciones para pintar la página, así que no aparece entera hasta el paso 9. Mientras tanto, comprueba cada función con el comando `node` de su paso, que importa tus datos y tu función. Deja el servidor abierto en esa terminal y usa otra para el resto.

## Paso 2: tus datos (15 min)

En `src/data.js` están los datos del dominio Planetario, que es solo un ejemplo. Cámbialos por los de **tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- `ID_PREFIX`: de 2 a 4 letras mayúsculas que abrevien tu dominio (`PLA` para Planetario).
- El export por defecto: de 8 a 15 piezas sin `id`, con `name` (sin repetir) y `room`, repartidas en al menos 2 salas. Con más de 8 hay al menos tres páginas de 3.

Las salidas de los pasos siguientes son las de los datos de ejemplo; con los tuyos verás tus piezas.

## Paso 3: `createIdGenerator` (10 min)

Un generador infinito de ids: `PLA-001`, `PLA-002`... Usa un bucle sin condición de fin (`for (let n = 1; ; n++)`) que entrega cada id con `yield` ([lab 03](../2-practicas/lab-03-generators/README.md), paso 2). El número va con 3 cifras: `String(n).padStart(3, '0')` (semana 06).

Cada llamada a `createIdGenerator` crea un generador nuevo con su propia cuenta. `main.js` crea uno solo y lo usa para todas las piezas: si borras `PLA-003`, la siguiente pieza nueva no lo reutiliza.

```bash
node --input-type=module -e "import { createIdGenerator } from './src/logic.js'; const ids = createIdGenerator('PLA'); console.log(ids.next(), ids.next().value, createIdGenerator('PLA').next().value);"
```

```text
{ value: 'PLA-001', done: false } PLA-002 PLA-001
```

## Paso 4: `take` (15 min)

Entrega los `n` primeros valores de un iterable y termina con `return`. Es el `take` del [lab 03](../2-practicas/lab-03-generators/README.md), paso 4: recorre el iterable con `for...of`, entrega cada valor y cuenta **después** del `yield`, para no pedirle al iterable un valor de más. Con `n <= 0` termina sin entregar nada. Con un generador infinito, `take` es lo que lo hace terminar.

```bash
node --input-type=module -e "import { createIdGenerator, take } from './src/logic.js'; console.log([...take(createIdGenerator('PLA'), 3)], [...take(['a', 'b'], 5)], [...take(['a', 'b'], 0)]);"
```

```text
[ 'PLA-001', 'PLA-002', 'PLA-003' ] [ 'a', 'b' ] []
```

## Paso 5: `skip` (10 min)

Lo contrario de `take`: se salta los `n` primeros valores y entrega todos los demás. Recorre el iterable con `for...of`, cuenta los que vas saltando (`continue` pasa a la siguiente vuelta) y entrega el resto con `yield`. Combinada con `take`, saca un trozo del medio, incluso de un generador infinito.

```bash
node --input-type=module -e "import { createIdGenerator, take, skip } from './src/logic.js'; console.log([...skip(['a', 'b', 'c', 'd'], 1)], [...take(skip(createIdGenerator('PLA'), 10), 2)]);"
```

```text
[ 'b', 'c', 'd' ] [ 'PLA-011', 'PLA-012' ]
```

## Paso 6: `filterBy` (10 min)

Entrega solo los valores para los que `predicate(value)` es verdadero. A diferencia de `filter` de los arrays, no crea un array con todos: cada `next()` avanza hasta el siguiente valor que cumple y se pausa ahí. El comando lo muestra: el primer `next()` entrega una pieza y el spread recoge las que quedan, sin repetir la primera.

```bash
node --input-type=module -e "import items from './src/data.js'; import { filterBy } from './src/logic.js'; const dome = filterBy(items, ({ room }) => room === 'Cúpula'); console.log(dome.next().value.name); console.log([...dome].map(({ name }) => name));"
```

```text
Telescopio refractor
[ 'Proyector estelar', 'Mapa celeste', 'Planisferio' ]
```

## Paso 7: `countPages` (5 min)

Cuántas páginas hacen falta: `total / pageSize` redondeado hacia arriba con `Math.ceil`. Con 0 piezas sigue habiendo una página (vacía), así que el resultado nunca es menor que 1: `Math.max(1, ...)`. Es una línea.

```bash
node --input-type=module -e "import { countPages } from './src/logic.js'; console.log(countPages(10, 4), countPages(8, 4), countPages(0, 4));"
```

```text
3 2 1
```

## Paso 8: `getPage` (15 min)

Devuelve un **array** con las piezas de la página `page` (la primera es la 1). En lugar de `slice`, que solo existe en los arrays, combina tus generadores: `skip` se salta las piezas de las páginas anteriores (`(page - 1) * pageSize`), `take` coge `pageSize` y el spread lo convierte en array. Así funciona con cualquier iterable: el segundo ejemplo saca la página 2 de un generador infinito. Es una línea.

```bash
node --input-type=module -e "import items from './src/data.js'; import { getPage, createIdGenerator } from './src/logic.js'; console.log(getPage(items, 3, 4)); console.log(getPage(createIdGenerator('PLA'), 2, 3));"
```

```text
[
  { name: 'Esfera armilar', room: 'Sala del Sistema Solar' },
  { name: 'Planisferio', room: 'Cúpula' }
]
[ 'PLA-004', 'PLA-005', 'PLA-006' ]
```

La página 3 de 4 en 4 solo tiene las piezas 9 y 10.

## Paso 9: `createCatalog` (15 min)

Devuelve un objeto con dos propiedades: `size`, el número de piezas, y un método generador `*[Symbol.iterator]()` que entrega las piezas ordenadas por nombre ([lab 04](../2-practicas/lab-04-custom-iterable/README.md), paso 1). Dentro, ordena una copia con `toSorted` (ES2023) y entrégala con `yield*`. Para comparar nombres usa `a.name.localeCompare(b.name, 'es')`: sabe que `Á` va con la `A`, mientras que la comparación normal de textos la pone detrás de la `Z`.

Como el método se ejecuta de nuevo en cada `for...of` o spread, el catálogo se puede recorrer todas las veces que quieras. `main.js` lo pasa a `filterBy` y el resultado a `getPage`.

```bash
node --input-type=module -e "import items from './src/data.js'; import { createCatalog } from './src/logic.js'; const catalog = createCatalog(items); console.log(catalog.size, [...catalog].slice(0, 3).map(({ name }) => name), items[0].name);"
```

```text
10 [ 'Astrolabio', 'Cuadrante solar', 'Esfera armilar' ] Telescopio refractor
```

`items[0]` sigue siendo el de `data.js`: el array original no se ordenó.

## Paso 10: comprobar (15 min)

Borra los `TODO` que queden en `src/logic.js`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-08 ./scripts/verificar-semana.sh 08
# Semana 08 — Iteradores y Generadores
#   ✅ src/data.js y src/logic.js son módulos ES válidos
#   ...
# 12/12 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla.

Por último, prueba la página entera:

1. Con 4 por página, la cabecera dice `Página 1 de 3` y **Anterior** está desactivado. Avanza hasta la última: se desactiva **Siguiente**.
2. Elige una sala: vuelves a la página 1 y solo quedan sus piezas, por orden de nombre.
3. Pulsa **Añadir** con el formulario vacío: salen los dos errores. Añade una pieza en una sala nueva: aparece en el filtro de salas, la cabecera suma una pieza y una sala, y su id es el siguiente al último (`PLA-011` con los datos de ejemplo).
4. Borra una pieza y añade otra: el id no se reutiliza. Cambia a 3 por página y comprueba que la última página tiene las que sobran.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js` y `src/logic.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `datos-exports` | `data.js` exporta `TITLE`, `ID_PREFIX` de 2 a 4 mayúsculas y por defecto de 8 a 15 piezas sin `id`, con nombre sin repetir y sala; al menos 2 salas |
| `datos-dominio` | El título, el prefijo y las piezas no son los del ejemplo Planetario |
| `id-generator` | `createIdGenerator` es un generador infinito de ids `PREFIJO-001`, `PREFIJO-002`... y cada llamada empieza su propia cuenta |
| `take` | `take` entrega los `n` primeros valores, ninguno con `n <= 0`, y no pide al iterable ningún valor de más |
| `skip` | `skip` se salta los `n` primeros valores y entrega el resto, también de un generador infinito |
| `filter-by` | `filterBy` entrega los valores que cumplen la condición a medida que se piden, también de un generador infinito |
| `count-pages` | `countPages` redondea hacia arriba y nunca devuelve menos de 1 |
| `get-page` | `getPage` devuelve un array con la página pedida, funciona con generadores y no recorre más allá de esa página |
| `catalog` | `createCatalog` devuelve un iterable con `size` que entrega las piezas por nombre (`localeCompare` con `'es'`), se puede recorrer varias veces y no ordena el array original |

Que los datos sean de tu dominio y que la página funcione lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-08` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Iterables personalizados](../2-practicas/lab-04-custom-iterable/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 08](../README.md)
