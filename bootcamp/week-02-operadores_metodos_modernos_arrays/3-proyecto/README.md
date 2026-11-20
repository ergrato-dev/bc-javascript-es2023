# Proyecto Semana 02 — Gestor de colección de tu dominio

## Descripción

Una página para gestionar una colección de elementos de tu dominio: crear, editar, eliminar, marcar como activo o inactivo, filtrar, buscar y ver estadísticas por categoría. Los datos se guardan en el navegador (`localStorage`), así que siguen ahí al recargar.

La página ya está montada. Tu trabajo es escribir las ocho funciones de `src/logic.js` con lo que has visto esta semana (spread, rest, parámetros por defecto, `map`, `filter`, `reduce`, propiedades computadas, `at()` y `Object.hasOwn()`) y cambiar los datos de ejemplo por los de tu dominio.

La regla del proyecto: **ninguna función modifica el array ni los objetos que recibe**. Todas devuelven un array u objeto nuevo.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-02
cp -r bootcamp/week-02-operadores_metodos_modernos_arrays/3-proyecto/starter/. ~/js-proyecto-semana-02/
cd ~/js-proyecto-semana-02
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | El formulario, los filtros, la lista y las estadísticas; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/main.js` | Los datos del dominio y el código que lee el formulario, guarda en `localStorage` y pinta la página | Solo los datos del principio |
| `src/logic.js` | Ocho funciones con `TODO` | Sí: es el proyecto |

- **Qué:** `logic.js` solo recibe datos y devuelve datos nuevos; no toca la página ni `localStorage`.
- **Para qué:** cada función se puede probar desde Node con datos concretos, que es lo que hace `scripts/verificar-semana.sh`. Y como nunca modifican lo que reciben, `main.js` puede guardar siempre «el array nuevo» sin preocuparse de quién más usa el anterior.
- **Impacto:** si una función modifica su entrada, la comprobación falla: los datos de prueba están congelados con `Object.freeze`, y cambiarlos da un `TypeError` (por ejemplo, `Cannot add property 1, object is not extensible` si haces `push`). Más detalles en [docs/autograding.md](../../../docs/autograding.md).

---

## Paso 1: ver la página (10 min)

Igual que en la semana 01, los módulos necesitan un servidor local:

```bash
pnpm dlx serve .
```

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. Con el starter, la lista sale vacía y la consola de las DevTools (`F12`, pestaña **Console**) muestra un `TypeError`: `filterItems` todavía no devuelve nada. Deja el servidor abierto en esa terminal, usa otra para el resto de pasos y recarga la página después de cada uno.

## Paso 2: tus datos (15 min)

Al principio de `src/main.js` hay tres datos del dominio Planetario, que es solo un ejemplo. Cámbialos por los de **tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- `CATEGORIES`: de 3 a 5 categorías. La clave va en inglés y en `camelCase` (`planet`); `name` y `emoji` son lo que se muestra. Deja `other`.
- `SAMPLE_ITEMS`: de 4 a 6 elementos con la misma forma, con `id` del 1 en adelante y una `category` que exista en `CATEGORIES`.

`main.js` guarda la colección en `localStorage` con la clave `STORAGE_KEY`. Los datos de ejemplo solo se cargan si no hay nada guardado: si cambias `SAMPLE_ITEMS` después de haber usado la página, cambia también `STORAGE_KEY` (o borra el dato en DevTools → **Application** → **Local Storage**).

## Paso 3: `createItem` (15 min)

Recibe los datos del formulario y la colección actual, y devuelve el elemento nuevo:

```javascript
createItem({ name: 'Marte' })
// { id: 1, name: 'Marte', description: '', category: 'other', priority: 'medium', active: true }
```

- **Valores por defecto:** desestructura el primer parámetro y da valores por defecto a `description`, `category` y `priority` ([teoría 03](../1-teoria/03-default-parameters.md)). El segundo parámetro, `items`, vale `[]` si no llega.
- **Propiedades abreviadas:** si la variable se llama igual que la propiedad, basta con escribirla una vez: `{ name, description }` ([teoría 05](../1-teoria/05-object-enhancements.md)).
- **El id:** es el mayor id de la colección más uno. `Math.max(...ids)` busca el mayor de una lista de números; con la colección vacía, `Math.max()` sin argumentos da `-Infinity`, así que añade un `0` a la lista: `Math.max(0, ...ids)`. Los ids salen de `items` con `map`.

```bash
node --input-type=module -e "import { createItem } from './src/logic.js'; console.log(createItem({ name: 'Venus', category: 'planet' }, [{ id: 4 }, { id: 9 }]))"
# {
#   id: 10,
#   name: 'Venus',
#   description: '',
#   category: 'planet',
#   priority: 'medium',
#   active: true
# }
```

¿Por qué el mayor y no el último? Si eliminas el último elemento, `items.at(-1).id + 1` repetiría un id que ya se usó.

## Paso 4: añadir, cambiar y eliminar (25 min)

Cuatro funciones cortas, todas de una línea:

| Función | Qué devuelve | Con qué |
|---|---|---|
| `addItem(items, ...newItems)` | `items` con los nuevos al final | Rest en el parámetro y spread en el array ([lab 01](../2-practicas/lab-01-spread-rest/README.md)) |
| `updateItem(items, id, changes)` | El mismo array, pero el elemento con ese `id` lleva los cambios | `map` + `{ ...item, ...changes }` |
| `removeItem(items, id)` | El array sin ese elemento | `filter` |
| `toggleActive(items, id)` | El array con `active` invertido en ese elemento | `map` + `{ ...item, active: !item.active }` |

En `updateItem` y `toggleActive`, la función de `map` devuelve una copia modificada si el id coincide y el mismo elemento si no: `item.id === id ? { ... } : item`.

```bash
node --input-type=module -e "import * as l from './src/logic.js'; const items = Object.freeze([{ id: 1, active: true }, { id: 2, active: true }]); console.log(l.toggleActive(items, 2), l.removeItem(items, 1), l.addItem(items, { id: 3 }, { id: 4 }).length)"
# [ { id: 1, active: true }, { id: 2, active: false } ] [ { id: 2, active: true } ] 4
```

`Object.freeze` congela el array: si alguna función intenta modificarlo (con `push`, `splice` o `items[0] = ...`), sale un `TypeError`. Con estas cuatro funciones ya puedes crear, editar, eliminar y marcar elementos en la página (después del paso 5, que es el que pinta la lista).

## Paso 5: `filterItems` (20 min)

Recibe la colección y un objeto con cuatro filtros, todos con valor por defecto:

| Filtro | Valores | Por defecto |
|---|---|---|
| `status` | `'all'`, `'active'`, `'inactive'` | `'all'` |
| `category` | `'all'` o una categoría | `'all'` |
| `priority` | `'all'`, `'high'`, `'medium'`, `'low'` | `'all'` |
| `query` | Texto que se busca en `name` y `description`, sin distinguir mayúsculas | `''` |

Desestructura el segundo parámetro con valores por defecto, y el objeto entero también con `= {}`, para que `filterItems(items)` funcione sin filtros. Un solo `filter` con cuatro condiciones unidas por `&&`; cada condición se cumple si el filtro vale `'all'` o si el elemento coincide. Para el texto, pasa a minúsculas con `toLowerCase()`, quita los espacios de los extremos con `trim()` y busca con `includes`: `''` está incluido en cualquier texto, así que sin búsqueda pasan todos.

Al recargar, la lista aparece y los filtros funcionan. El botón **Quitar inactivos** también, porque `main.js` lo hace con `filterItems(items, { status: 'active' })`.

## Paso 6: `getStats` (15 min)

Devuelve `{ total, active, inactive, byCategory }`. Los tres primeros son recuentos (`length` y `filter`). `byCategory` cuenta los elementos de cada categoría con `reduce`, como el «contar ocurrencias» del [lab 04](../2-practicas/lab-04-reduce/README.md), pero sin modificar el acumulador: devuelve en cada vuelta un objeto nuevo con una **propiedad computada**, cuyo nombre sale de una variable:

```javascript
{ ...acc, [category]: (acc[category] ?? 0) + 1 }
```

```bash
node --input-type=module -e "import { getStats } from './src/logic.js'; console.log(getStats([{ category: 'star', active: true }, { category: 'planet', active: false }, { category: 'star', active: true }]))"
# {
#   total: 3,
#   active: 2,
#   inactive: 1,
#   byCategory: { star: 2, planet: 1 }
# }
```

## Paso 7: `missingFields` (10 min)

Devuelve la lista de campos obligatorios que faltan o están vacíos. `main.js` la usa antes de guardar: si no está vacía, muestra un aviso con los campos.

```javascript
missingFields({ name: '  ', category: 'star' })          // ['name']
missingFields({ name: 'Sirio' }, ['name', 'priority'])   // ['priority']
```

El segundo parámetro vale `['name', 'category']` por defecto. Recorre los campos con `filter`: un campo falta si `Object.hasOwn(data, field)` es `false` o si su valor, convertido a texto y sin espacios (`String(data[field]).trim()`), es `''`. Usa `Object.hasOwn` y no `in`: una propiedad heredada no cuenta como rellenada ([lab 05](../2-practicas/lab-05-metodos-es2022/README.md), paso 6).

## Paso 8: comprobar (10 min)

Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-02 ./scripts/verificar-semana.sh 02
# Semana 02 — Operadores y Métodos Modernos de Arrays
#   ✅ src/logic.js es un módulo ES válido
#   ...
# 12/12 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla. Además de las funciones, el script comprueba que no queda ningún `TODO`, que no usas `var` y que `logic.js` no usa la palabra `function`.

Por último, prueba la página entera: crea un elemento, edítalo, márcalo como inactivo, filtra, busca, recarga (los datos siguen) y quita los inactivos.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/logic.js` es un módulo ES válido |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `arrow-functions` | `src/logic.js` no usa la palabra `function` |
| `create-item` | `createItem` pone los valores por defecto y el id siguiente al mayor |
| `add-item` | `addItem` añade uno o varios elementos sin modificar el array |
| `update-item` | `updateItem` cambia solo el elemento con ese id y devuelve un array nuevo |
| `remove-item` | `removeItem` quita el elemento con ese id |
| `toggle-active` | `toggleActive` invierte `active` solo en ese elemento |
| `filter-items` | `filterItems` combina estado, categoría, prioridad y búsqueda |
| `get-stats` | `getStats` cuenta total, activos, inactivos y elementos por categoría |
| `missing-fields` | `missingFields` devuelve los campos que faltan o están vacíos, sin contar los heredados |

Todas las comprobaciones de funciones usan datos congelados: una función que modifica su entrada falla. Que los datos sean de tu dominio y que la página funcione lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-02` con tus datos en `src/main.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 05 — `at()` y `Object.hasOwn()`](../2-practicas/lab-05-metodos-es2022/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 02](../README.md)
