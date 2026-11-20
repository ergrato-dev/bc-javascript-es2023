# Proyecto Semana 05 — Explorador de colección

## Descripción

Una página para explorar una colección de elementos de tu dominio: filtrar por etiqueta, ordenar por nombre, por año o por los más recientes, ver cuántos elementos hay de cada categoría y cuál es el último que se añadió. También puedes añadir y eliminar elementos.

La página ya está montada. Tu trabajo es escribir las cinco funciones de `src/logic.js` con lo que has visto esta semana (`flatMap`, `Array.from`, encadenar métodos, ordenar con una función de comparación, agrupar con `reduce` y `findLast`) y cambiar los datos de ejemplo por los de tu dominio.

La regla del proyecto, la misma de la semana 02: **ninguna función modifica el array que recibe**.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-05
cp -r bootcamp/week-05-arrays_avanzados/3-proyecto/starter/. ~/js-proyecto-semana-05/
cd ~/js-proyecto-semana-05
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | El formulario, los selectores de etiqueta y orden, la lista y el resumen por categoría; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título, las categorías y los elementos de ejemplo | Sí: paso 2 |
| `src/logic.js` | Cinco funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | El código que lee el formulario y pinta la página | No |

- **Qué:** cada elemento tiene la forma `{ id, name, category, year, tags }`. `main.js` le pone el `id` al cargarlo o añadirlo, en orden: el id mayor es el más reciente.
- **Para qué:** las funciones de `logic.js` solo reciben elementos y devuelven datos nuevos, así que `scripts/verificar-semana.sh` puede probarlas desde Node con datos concretos.
- **Impacto:** la colección vive en memoria; al recargar la página vuelven los datos de `data.js`. Los datos de prueba de las comprobaciones están congelados con `Object.freeze`: si una función los modifica (por ejemplo, con `sort` en lugar de `toSorted`), sale un `TypeError` y la comprobación falla. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

---

## Paso 1: ver la página (10 min)

```bash
pnpm dlx serve .
```

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. Con el starter, la página sale vacía y la consola de las DevTools (`F12`, pestaña **Console**) muestra un `TypeError`: `getAllTags` todavía no devuelve nada. Deja el servidor abierto en esa terminal, usa otra para el resto de pasos y recarga la página después de cada uno.

## Paso 2: tus datos (15 min)

En `src/data.js` están los datos del dominio Planetario, que es solo un ejemplo. Cámbialos por los de **tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- `CATEGORIES`: de 3 a 5 categorías. La clave va en inglés y en `camelCase` (`planet`); `name` y `emoji` son lo que se muestra. Deja `other`.
- El export por defecto: de 4 a 6 elementos, sin `id`, con una `category` que exista en `CATEGORIES`, un `year` (un número entero, negativo para antes de nuestra era, o `null` si no se conoce) y un array de `tags`. Repite alguna etiqueta entre elementos y deja al menos uno sin año, para que el filtro y el orden se noten.

## Paso 3: `getAllTags` (20 min)

Devuelve todas las etiquetas de la colección, sin repetir y en orden alfabético. `main.js` las usa para rellenar el selector **Etiqueta**. Tres pasos encadenados:

1. `flatMap` saca los arrays `tags` de cada elemento y los junta en uno ([lab 01](../2-practicas/lab-01-flat-flatmap/README.md), paso 3).
2. `new Set(...)` quita los repetidos y `Array.from` lo convierte otra vez en array ([lab 02](../2-practicas/lab-02-array-from-of/README.md), paso 1).
3. `toSorted` con `localeCompare` los ordena sin modificar el array ([lab 04](../2-practicas/lab-04-sort-transform/README.md), paso 3).

```bash
node --input-type=module -e "import { getAllTags } from './src/logic.js'; import items from './src/data.js'; console.log(getAllTags(items))"
# [
#   'enana blanca',
#   'gigante',
#   'helado',
#   'roja',
#   'supergigante',
#   'supernova'
# ]
```

Esa salida es la de los datos de ejemplo; con los tuyos verás tus etiquetas. Al recargar, el selector de etiquetas ya tiene opciones (la lista sigue vacía hasta el paso 5).

## Paso 4: `sortItems` (25 min)

Devuelve una copia ordenada de la colección según `sortBy`, que vale `'name'` si no llega:

| `sortBy` | Orden |
|---|---|
| `'name'` | Por nombre, de la A a la Z, con `localeCompare` |
| `'year'` | Por año, el más antiguo primero; los que tienen `year: null` van al final |
| `'recent'` | Por `id`, el mayor primero |

Usa `toSorted` (no `sort`, que modifica el array). Una forma ordenada de escribirlo es un objeto con una función de comparación por cada clave y elegir la función con `comparators[sortBy]`, como el `priorityOrder` del [lab 04](../2-practicas/lab-04-sort-transform/README.md), paso 8. Para el año, empieza por los casos con `null`, como en el paso 6 del mismo lab: si `a.year` es `null`, `a` va después (`1`); si lo es `b.year`, `a` va antes (`-1`); si los dos son números, `a.year - b.year`.

```bash
node --input-type=module -e "import { sortItems } from './src/logic.js'; import data from './src/data.js'; const items = data.map((item, i) => ({ id: i + 1, ...item })); for (const sortBy of ['name', 'year', 'recent']) console.log(sortBy, sortItems(items, sortBy).map(({ name }) => name))"
# name [
#   'Betelgeuse',
#   'Nebulosa del Cangrejo',
#   'Neptuno',
#   'Sirio B',
#   'Urano'
# ]
# year [
#   'Nebulosa del Cangrejo',
#   'Urano',
#   'Neptuno',
#   'Sirio B',
#   'Betelgeuse'
# ]
# recent [
#   'Betelgeuse',
#   'Neptuno',
#   'Nebulosa del Cangrejo',
#   'Sirio B',
#   'Urano'
# ]
```

El comando pone los ids igual que `main.js` (`data.map` con el índice más uno), porque `'recent'` los necesita.

## Paso 5: `queryItems` (15 min)

Recibe la colección y un objeto `{ tag, sortBy }` con valores por defecto (`tag = 'all'`, `sortBy = 'name'`, y el objeto entero `= {}`), y devuelve los elementos con esa etiqueta, ordenados. Es una cadena de dos pasos: `filter` (pasa todo si `tag` es `'all'`, y si no, los elementos cuyo `tags` incluye esa etiqueta) y después `sortItems` con el `sortBy` recibido ([lab 03](../2-practicas/lab-03-chaining/README.md)).

```bash
node --input-type=module -e "import { queryItems } from './src/logic.js'; import data from './src/data.js'; const items = data.map((item, i) => ({ id: i + 1, ...item })); console.log(queryItems(items, { tag: 'gigante', sortBy: 'year' }).map(({ name }) => name))"
# [ 'Urano', 'Neptuno' ]
```

Al recargar, la lista aparece y los selectores **Etiqueta** y **Ordenar por** funcionan.

## Paso 6: `groupByCategory` (20 min)

Devuelve un objeto con una clave por categoría y, en cada una, el array de sus elementos. `main.js` lo usa para el resumen **Por categoría**. Es el «agrupar» del [lab 04](../2-practicas/lab-04-sort-transform/README.md), paso 9, pero sin modificar el acumulador: en cada vuelta devuelve un objeto nuevo con una propiedad computada, igual que el `getStats` de la semana 02:

```javascript
{ ...groups, [item.category]: [...(groups[item.category] ?? []), item] }
```

Las categorías sin elementos no aparecen.

```bash
node --input-type=module -e "import { groupByCategory } from './src/logic.js'; import items from './src/data.js'; console.log(Object.entries(groupByCategory(items)).map(([key, list]) => [key, list.length]))"
# [ [ 'planet', 2 ], [ 'star', 2 ], [ 'nebula', 1 ] ]
```

## Paso 7: `findLastAdded` (10 min)

Devuelve el último elemento del array que es de esa categoría, o el último de todos si `category` vale `'all'` (su valor por defecto). Si no hay ninguno, `undefined`. Como `main.js` añade los elementos nuevos al final, el último del array es el último añadido: un solo `findLast` con la condición `category === 'all' || item.category === category` ([lab 05](../2-practicas/lab-05-findlast/README.md)).

```bash
node --input-type=module -e "import { findLastAdded } from './src/logic.js'; import items from './src/data.js'; console.log(findLastAdded(items, 'planet').name, findLastAdded(items).name, findLastAdded(items, 'other'))"
# Neptuno Betelgeuse undefined
```

Al recargar, la cabecera muestra el último añadido y cada tarjeta de categoría el suyo. Añade un elemento con el formulario y comprueba que los dos cambian.

## Paso 8: comprobar (5 min)

Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-05 ./scripts/verificar-semana.sh 05
# Semana 05 — Arrays Avanzados
#   ✅ src/data.js y src/logic.js son módulos ES válidos
#   ...
# 12/12 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla. Por último, prueba la página entera: añade un elemento con una etiqueta nueva, fíltralo por esa etiqueta, cambia el orden, mira el resumen por categoría y elimínalo.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js` y `src/logic.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `datos-exports` | `data.js` exporta `TITLE` y `CATEGORIES` con nombre, y por defecto de 4 a 6 elementos con año y etiquetas |
| `datos-dominio` | Las categorías y el título no son los del ejemplo Planetario |
| `all-tags` | `getAllTags` devuelve las etiquetas sin repetir y en orden alfabético |
| `sort-name` | `sortItems` ordena por nombre por defecto y con `'name'`, sin modificar el array |
| `sort-year` | `sortItems` con `'year'` pone primero el más antiguo y al final los que no tienen año |
| `sort-recent` | `sortItems` con `'recent'` pone primero el id mayor |
| `query-items` | `queryItems` filtra por etiqueta y ordena, con valores por defecto |
| `group-by-category` | `groupByCategory` devuelve un objeto con la lista de elementos de cada categoría |
| `find-last-added` | `findLastAdded` devuelve el último elemento de la categoría, el último de todos con `'all'` o `undefined` |

Que los datos sean de tu dominio y que la página funcione lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-05` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 05 — `findLast()` y `findLastIndex()`](../2-practicas/lab-05-findlast/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 05](../README.md)
