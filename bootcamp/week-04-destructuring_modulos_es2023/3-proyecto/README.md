# Proyecto Semana 04 — Catálogo modular

## Descripción

Una página para el catálogo de tu dominio, repartida en cuatro módulos: añades elementos escribiendo una sola línea de texto, filtras por categoría, buscas por nombre o etiqueta, y las estadísticas se cargan con un `import()` dinámico solo cuando las pides.

La página ya está montada. Tu trabajo es poner los datos de tu dominio en `src/data.js` y escribir las funciones de `src/logic.js` y `src/stats.js` con lo que has visto esta semana: destructuring de arrays y objetos (con valores por defecto, renombrado y anidado), exports con nombre y por defecto, e `import()`.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-04
cp -r bootcamp/week-04-destructuring_modulos_es2023/3-proyecto/starter/. ~/js-proyecto-semana-04/
cd ~/js-proyecto-semana-04
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | El formulario, los filtros, la lista y las estadísticas; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/main.js` | Importa los otros tres módulos, lee el formulario y pinta la página | No |
| `src/data.js` | El título, las categorías y los elementos de ejemplo | Sí: paso 2 |
| `src/logic.js` | Tres funciones con `TODO` | Sí: pasos 3 a 5 |
| `src/stats.js` | Un export por defecto con `TODO` | Sí: paso 6 |

- **Qué:** cada archivo de `src/` es un módulo con una sola responsabilidad: datos, lógica, estadísticas y página.
- **Para qué:** `main.js` es el único que toca el DOM. Los otros tres solo reciben y devuelven datos, así que se pueden comprobar desde Node, que es lo que hace `scripts/verificar-semana.sh`.
- **Impacto:** la colección vive en memoria. Al recargar la página vuelven los datos de ejemplo de `data.js`.

---

## Paso 1: ver la página (10 min)

Igual que en semanas anteriores, los módulos necesitan un servidor local:

```bash
pnpm dlx serve .
```

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. Con el starter, la lista sale vacía y la consola de las DevTools (`F12`, pestaña **Console**) muestra un `TypeError`: `filterItems` todavía no devuelve nada. Deja el servidor abierto en esa terminal, usa otra para el resto de pasos y recarga la página después de cada uno.

## Paso 2: tus datos (15 min)

Abre `src/data.js`. Tiene dos exports con nombre y uno por defecto, y `main.js` los importa los tres en una sola línea:

```javascript
import SAMPLE_ITEMS, { TITLE, CATEGORIES } from './data.js';
```

El export por defecto va primero y sin llaves, con el nombre que elige `main.js`; los exports con nombre van entre llaves ([teoría 04](../1-teoria/04-named-default-exports.md)). Cambia los tres por los de **tu dominio** (el que te asignó el instructor), porque Planetario es solo un ejemplo:

- `TITLE`: el título de la página, con un emoji.
- `CATEGORIES`: de 3 a 5 categorías. La clave va en inglés y en `camelCase` (`planet`); `name` y `emoji` son lo que se muestra. Deja `other`.
- El `export default`: de 4 a 6 elementos con la forma `{ name, category, details: { year }, tags }`. `category` tiene que existir en `CATEGORIES`, y `year` es un año que tenga sentido en tu dominio.

Al recargar, el título y las categorías del filtro ya son los tuyos.

## Paso 3: `parseLine` (25 min)

El formulario tiene un solo campo: escribes `Urano; planet; 1781; gigante, helado` y `main.js` llama a `parseLine` para convertirlo en un elemento.

```bash
node --input-type=module -e "import { parseLine } from './src/logic.js'; console.log(parseLine('Urano; planet; 1781; gigante, helado'), parseLine('Vega'))"
# {
#   name: 'Urano',
#   category: 'planet',
#   details: { year: 1781 },
#   tags: [ 'gigante', 'helado' ]
# } { name: 'Vega', category: 'other', details: { year: null }, tags: [] }
```

- **Partir la línea:** `line.split(';')` devuelve un array con las partes, y `.map((part) => part.trim())` quita los espacios de los extremos de cada una.
- **Destructuring de array:** en la misma línea, `const [name, category, year, tags = ''] = ...` reparte las partes en cuatro variables por su posición ([lab 01](../2-practicas/lab-01-destructuring-arrays/README.md)). Si la línea solo trae el nombre, las posiciones que faltan valen `undefined`, y `tags = ''` da un texto vacío para poder hacer `split` después.
- **Partes vacías:** el valor por defecto de un destructuring solo se aplica a `undefined`. Con `'Rigel; ; ;'`, el `split` y el `trim` dan `[ 'Rigel', '', '', '' ]`: la categoría es `''`, no `undefined`. Por eso la categoría se escribe `category || 'other'`, que también cubre el texto vacío, y el año `year ? Number(year) : null`.
- **Etiquetas:** `tags.split(',')`, cada una con `trim()`, y quita las vacías con `filter`. `''.split(',')` no da un array vacío sino `[ '' ]`.

Al recargar ya puedes añadir elementos desde el formulario (después del paso 5, que es el que pinta la lista).

## Paso 4: `summarize` (15 min)

Devuelve el título de cada tarjeta: `'Urano (planet, 1781)'`.

```bash
node --input-type=module -e "import { summarize } from './src/logic.js'; console.log(summarize({ name: 'Urano', category: 'planet', details: { year: 1781 } }), '|', summarize({ name: 'Vega' }))"
# Urano (planet, 1781) | Vega (other, año desconocido)
```

Desestructura el objeto directamente en el parámetro, con un patrón anidado para llegar a `year` ([lab 02](../2-practicas/lab-02-destructuring-objetos/README.md), pasos 5 y 7):

```javascript
({ name, category = 'other', details: { year } = {} }) => ...
```

El `= {}` después de `details: { year }` es el valor por defecto de `details`: sin él, un elemento sin `details` da `TypeError: Cannot read properties of undefined`. Para el año usa `year ?? 'año desconocido'` y no un valor por defecto en el patrón: `parseLine` pone `year: null`, y el valor por defecto no se aplica a `null`.

## Paso 5: `filterItems` (25 min)

Recibe la colección y un objeto con dos filtros:

| Filtro | Valores | Por defecto |
|---|---|---|
| `category` | `'all'` o una categoría | `'all'` |
| `query` | Texto que se busca en `name` y en las etiquetas, sin distinguir mayúsculas | `''` |

```bash
node --input-type=module -e "import { filterItems } from './src/logic.js'; import items from './src/data.js'; console.log(filterItems(items, { query: 'helado' }).map(({ name }) => name), filterItems(items, { category: 'star' }).length)"
# [ 'Urano', 'Neptuno' ] 1
```

(Esa salida es con los datos de Planetario; con los tuyos será otra.)

- **Parámetro desestructurado:** `(items, { category = 'all', query = '' } = {})`. El `= {}` final hace que `filterItems(items)` funcione sin filtros.
- **Renombrar en el callback:** dentro de `filter`, cada elemento también tiene una propiedad `category`, que chocaría con el filtro del mismo nombre. Renómbrala al desestructurar: `({ name, category: itemCategory, tags = [] }) => ...`.
- **Buscar en nombre y etiquetas:** `[name, ...tags]` junta el nombre y las etiquetas en un array, y `some` comprueba si alguno contiene el texto (en minúsculas y sin espacios en los extremos). `''` está incluido en cualquier texto, así que sin búsqueda pasan todos.

Al recargar, la lista aparece y puedes añadir, eliminar, filtrar y buscar.

## Paso 6: `stats.js` y el `import()` (20 min)

`stats.js` no tiene exports con nombre: exporta **por defecto** una función que recibe los elementos y devuelve `{ total, byCategory, yearRange }`.

```bash
node --input-type=module -e "import buildStats from './src/stats.js'; import items from './src/data.js'; console.log(buildStats(items))"
# {
#   total: 4,
#   byCategory: { planet: 2, star: 1, nebula: 1 },
#   yearRange: [ 1731, 1862 ]
# }
```

- **`byCategory`:** el `reduce` con propiedad computada de la semana 02, desestructurando la categoría en el parámetro: `(acc, { category }) => ({ ...acc, [category]: (acc[category] ?? 0) + 1 })`.
- **`yearRange`:** saca los años con `map(({ details: { year } = {} }) => year)`, quédate con los números con `filter(Number.isFinite)` (descarta `null` y `undefined`) y devuelve `[Math.min(...years), Math.max(...years)]`, o `[null, null]` si no queda ninguno.
- Puedes escribir dos funciones auxiliares sin `export` dentro de `stats.js`: no se ven desde fuera del módulo.

Mira cómo la usa `main.js`:

```javascript
const { default: buildStats } = await import('./stats.js');
const { total, byCategory, yearRange: [oldest, newest] } = buildStats(items);
```

La primera línea carga el módulo con `import()` y renombra su export por defecto ([lab 04](../2-practicas/lab-04-imports-avanzados/README.md), paso 3). La segunda desestructura el resultado, y dentro abre el array `yearRange` en dos variables.

(Con tus datos, los números serán otros.)

Abre DevTools → **Network**, recarga y pulsa **Ver estadísticas**: `stats.js` aparece en la lista solo al pulsar el botón, no al cargar la página.

## Paso 7: comprobar (10 min)

Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-04 ./scripts/verificar-semana.sh 04
# Semana 04 — Destructuring y Módulos ES2023
#   ✅ src/data.js, src/logic.js y src/stats.js son módulos ES válidos
#   ...
# 12/12 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla. `datos-dominio` falla mientras `data.js` siga con las categorías y el título de Planetario.

Por último, prueba la página entera: añade un elemento completo y otro solo con el nombre, filtra por categoría, busca por una etiqueta, abre las estadísticas, añade otro elemento (las estadísticas se actualizan) y elimina uno.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js`, `src/logic.js` y `src/stats.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` y `src/stats.js` no tienen ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `datos-exports` | `data.js` exporta `TITLE` y `CATEGORIES` con nombre, y por defecto de 4 a 6 elementos de categorías que existen |
| `datos-dominio` | Las categorías no son `planet`, `star` ni `nebula`, y el título no es el del planetario |
| `parse-line` | `parseLine` separa nombre, categoría, año y etiquetas, sin espacios en los extremos |
| `parse-line-defaults` | `parseLine` usa `'other'`, `null` y `[]` para las partes que faltan o están vacías |
| `summarize` | `summarize` devuelve `'nombre (categoría, año)'`, con `other` y `año desconocido` por defecto |
| `filter-items` | `filterItems` combina categoría y búsqueda en nombre y etiquetas, y devuelve un array nuevo |
| `stats-default` | `stats.js` exporta por defecto una función |
| `stats-total-categoria` | Esa función cuenta el total y los elementos de cada categoría |
| `stats-anios` | `yearRange` tiene el año menor y el mayor, sin contar los elementos sin año |

Que los datos sean de tu dominio y que la página funcione lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-04` con tus datos en `src/data.js` y `src/logic.js` y `src/stats.js` completos, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Imports avanzados](../2-practicas/lab-04-imports-avanzados/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 04](../README.md)
