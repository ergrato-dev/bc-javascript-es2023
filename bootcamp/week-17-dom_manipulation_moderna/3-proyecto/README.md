# Proyecto Semana 17 — Constructor de fichas

## Descripción

Una página que construye las fichas de la colección de tu dominio (las piezas de un museo, los productos de una tienda, las rutas de un parque...). Puedes añadir fichas, destacarlas, quitarlas, buscarlas, filtrarlas por categoría y ver el HTML exacto de cada una. Cada vez que algo cambia, la página reutiliza las fichas que no han cambiado y te dice cuántas ha creado, reutilizado y quitado.

Las fichas no se escriben con `innerHTML`. Una función pura, `cardSpec`, **describe** cada ficha con objetos `{ tag, props, children }`, y `main.js` monta esa descripción en nodos reales con `createElement`, `classList` y `dataset`. La misma descripción se convierte en HTML escapado con `toHtml`, para mostrarlo en la página y para saber si una ficha ha cambiado.

La página, el servidor y `main.js` ya están hechos. Tu trabajo es escribir las funciones de `src/logic.js` y cambiar las fichas de ejemplo por las de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-17
cp -r bootcamp/week-17-dom_manipulation_moderna/3-proyecto/starter/. ~/js-proyecto-semana-17/
cd ~/js-proyecto-semana-17
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `server.js` | Un servidor de archivos: sirve la página por `http://` | No |
| `index.html` | El formulario, los filtros, la lista y el panel del HTML; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título y las fichas de ejemplo | Sí: paso 2 |
| `src/logic.js` | Ocho funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | `mount`, que convierte descripciones en nodos, el render por clave y los listeners | No, pero léelo |

- **Qué:** `logic.js` describe la interfaz (`h`, `classNames`, `cardSpec`), la convierte en HTML (`escapeHtml`, `toHtml`) y decide qué se ve (`visibleItems`, `categoriesOf`) y qué nodos cambian (`diffKeys`). `main.js` hace todo lo que toca el DOM.
- **Para qué:** el DOM solo existe en el navegador. Separando la descripción, que son objetos normales, de su montaje, casi toda la lógica de la página se puede probar con Node.
- **Impacto:** `scripts/verificar-semana.sh` prueba cada función sin navegador. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

Lee `src/main.js` mientras trabajas: es el código de la teoría de esta semana, aplicado. `mount` usa `createElement`, `dataset` y `append` ([teoría 02](../1-teoria/02-crear-insertar.md)); `renderCards` es el render por clave del [lab 04](../2-practicas/lab-04-plantillas-render/README.md), y `createCard` añade un listener a cada botón.

---

## Paso 1: arrancar el servidor y ver la página (10 min)

```bash
node server.js
```

```text
🚀 Página en http://localhost:3000 (Ctrl+C para pararlo)
```

**Qué:** `server.js` sirve los archivos de la carpeta. **Para qué:** `index.html` carga `src/main.js` como módulo (`type="module"`) y el navegador no carga módulos desde un archivo abierto con doble clic. **Impacto:** abre siempre `http://localhost:3000`, no el archivo.

Con el starter solo se ven el título, el formulario y los filtros vacíos. La consola de las DevTools muestra el error: `Uncaught TypeError: Cannot read properties of undefined (reading 'includes')`. Las funciones de `logic.js` todavía devuelven `undefined`, y `main.js` intenta usar el resultado de `categoriesOf`.

Deja el servidor abierto. Cuando cambies un archivo, basta con recargar la página: el servidor lee los archivos en cada petición. Usa otra terminal, en la misma carpeta, para los comandos de los pasos 3 a 9.

## Paso 2: tus datos (10 min)

Abre `src/data.js` y cambia el título y las fichas del Planetario por las de tu dominio, con estas reglas:

- De 8 a 15 fichas.
- `id`: entero positivo, sin repetir.
- `name`: 3 caracteres o más, sin repetir (sin distinguir mayúsculas).
- `category`: un texto. Usa al menos 2 categorías distintas, con varias fichas cada una.
- `detail`: un texto corto.
- `featured`: `true` o `false`. Al menos una ficha destacada.

```js
export const TITLE = 'Planetario: fichas del cielo';

const ITEMS = [
  { id: 1, name: 'Saturno', category: 'Planeta', detail: 'Sus anillos son de hielo y roca', featured: true },
  // ...
];
```

## Paso 3: `h` y `classNames` (15 min)

`h(tag, props, ...children)` es la función que escribe las descripciones. Los parámetros *rest* (`...children`) recogen todos los argumentos que sobran en un array. Para dejarlos limpios:

- `flat(Infinity)` aplana los arrays a cualquier profundidad (semana 05).
- Quita `null`, `undefined`, `false` y `''`. Así se puede escribir un hijo condicional, como `featured && 'Destacada'`, que da `false` cuando no toca.
- Convierte los números en texto: `mount` y `toHtml` solo esperan textos o descripciones.
- Sin `props`, `props` es `{}` (`??` de la semana 01).

`classNames(...values)` hace lo mismo con las clases: se queda con las que no son *falsy* y las une con espacios.

Comprueba las dos desde la otra terminal:

```bash
node --input-type=module -e "import { h, classNames } from './src/logic.js'; console.log(h('p', null, 'Hay ', 3, [' fichas', false])); console.log(classNames('card', false, 'is-featured', null));"
```

```text
{ tag: 'p', props: {}, children: [ 'Hay ', '3', ' fichas' ] }
card is-featured
```

## Paso 4: `escapeHtml` (10 min)

`escapeHtml` sustituye los cinco caracteres con significado en HTML por su entidad: `&` → `&amp;`, `<` → `&lt;`, `>` → `&gt;`, `"` → `&quot;` y `'` → `&#39;`. Convierte antes el valor en texto con `String`, porque puede llegar un número. La [teoría 03](../1-teoria/03-contenido-clases.md#3-inyección-de-html-xss) explica por qué el `&` va primero.

```bash
node --input-type=module -e "import { escapeHtml } from './src/logic.js'; console.log(escapeHtml('Tom & \"Jerry\" <3'));"
```

```text
Tom &amp; &quot;Jerry&quot; &lt;3
```

## Paso 5: `toHtml` (20 min)

`toHtml(spec)` convierte una descripción en HTML. Es recursiva: para los hijos de un elemento, se llama a sí misma con cada uno y junta los resultados.

- Un texto da el texto escapado.
- Un elemento da `<tag atributos>hijos</tag>`.

Cada atributo lleva un espacio delante, en el orden de `props`:

| En `props` | En el HTML |
|---|---|
| `class: 'note'` | ` class="note"` (con `''`, nada) |
| `dataset: { id: '1', lastCheck: 'hoy' }` | ` data-id="1" data-last-check="hoy"` |
| `hidden: true` | ` hidden` |
| `disabled: false`, `title: null` o `undefined` | nada |
| `type: 'button'` o `tabindex: 0` | ` type="button"`, ` tabindex="0"` |

Los valores de los atributos también se escapan: un `"` dentro de un valor cerraría el atributo antes de tiempo. Para pasar `lastCheck` a `last-check`, sustituye cada mayúscula por un guion y su minúscula: `replace(/[A-Z]/g, ...)` con una función (semana 06).

```bash
node --input-type=module -e "import { h, toHtml } from './src/logic.js'; console.log(toHtml(h('p', { class: 'note', dataset: { lastCheck: 'hoy' }, hidden: true }, 'a < b')));"
```

```text
<p class="note" data-last-check="hoy" hidden>a &lt; b</p>
```

Para que no aparezca el texto `innerHTML` en ningún archivo de `src/` (comprobación `sin-innerhtml`), no lo uses ni en los comentarios.

## Paso 6: `cardSpec` (15 min)

`cardSpec(item, { selected })` describe una ficha con `h`. El comentario de la función en `logic.js` tiene la estructura exacta. Las clases salen de `classNames`, y el botón «Destacar» lleva `aria-pressed` con `'true'` o `'false'` en texto ([teoría 03, sección 6](../1-teoria/03-contenido-clases.md#6-estados-accesibles)).

El orden de las propiedades importa, porque `toHtml` escribe los atributos en ese orden: en el `<li>`, primero `class` y después `dataset`; en el botón, `type`, `class` y `aria-pressed`.

```bash
node --input-type=module -e "import { cardSpec, toHtml } from './src/logic.js'; const spec = cardSpec({ id: 1, name: 'Saturno', category: 'Planeta', detail: 'Anillos', featured: true }); console.log(spec.props, spec.children.length); console.log(toHtml(spec));"
```

```text
{ class: 'card is-featured', dataset: { id: '1' } } 4
<li class="card is-featured" data-id="1"><h3 class="card-title">Saturno</h3><p class="card-category">Planeta</p><p class="card-detail">Anillos</p><div class="card-actions"><button type="button" class="feature" aria-pressed="true">Quitar destacado</button><button type="button" class="show-html">Ver HTML</button><button type="button" class="remove">Quitar</button></div></li>
```

La comprobación `ficha-html` compara el resultado entero con este HTML para una ficha destacada **y** seleccionada (`class="card is-featured is-selected"`) cuyos textos llevan `&` y `<`.

## Paso 7: `visibleItems` (15 min)

`visibleItems(items, { search, category })` devuelve las fichas que se ven con los filtros, sin cambiar `items`:

1. Si `category` no es `''`, solo las de esa categoría.
2. Si `search`, sin espacios en los extremos (`trim`), no es `''`, solo las que lo contienen en `name` o `detail`, sin distinguir mayúsculas (`toLowerCase` en los dos lados).
3. Las destacadas primero. `toSorted` (semana 05) devuelve un array nuevo y es **estable**: las fichas que empatan quedan en el orden en que estaban. Compara `Number(b.featured) - Number(a.featured)`.

```bash
node --input-type=module -e "import { visibleItems } from './src/logic.js'; const items = [{ id: 1, name: 'Marte', category: 'Planeta', detail: 'Rojo', featured: false }, { id: 2, name: 'Sirio', category: 'Estrella', detail: 'Muy brillante', featured: false }, { id: 3, name: 'Saturno', category: 'Planeta', detail: 'Anillos brillantes', featured: true }]; const names = (list) => list.map(({ name }) => name); console.log(names(visibleItems(items))); console.log(names(visibleItems(items, { search: ' BRILL ' }))); console.log(names(visibleItems(items, { category: 'Planeta' })));"
```

```text
[ 'Saturno', 'Marte', 'Sirio' ]
[ 'Saturno', 'Sirio' ]
[ 'Saturno', 'Marte' ]
```

## Paso 8: `categoriesOf` (5 min)

`categoriesOf(items)` da las categorías sin repetir (un `Set`, semana 07) en orden alfabético en español: compara con `a.localeCompare(b, 'es')`, que ordena bien las tildes. `main.js` la usa para las opciones del filtro de categoría.

```bash
node --input-type=module -e "import { categoriesOf } from './src/logic.js'; console.log(categoriesOf([{ category: 'Planeta' }, { category: 'Estrella' }, { category: 'Planeta' }]));"
```

```text
[ 'Estrella', 'Planeta' ]
```

## Paso 9: `diffKeys` (10 min)

`diffKeys(previous, next)` compara los `id` de las fichas que hay en la página con los que tiene que haber, como el render por clave de la [teoría 04](../1-teoria/04-plantillas-render.md#5-render-por-clave). Con un `Set` de cada array, comprobar si una clave está es inmediato (`has`).

```bash
node --input-type=module -e "import { diffKeys } from './src/logic.js'; console.log(diffKeys([1, 2, 3], [4, 3, 1]));"
```

```text
{ removed: [ 2 ], added: [ 4 ], kept: [ 3, 1 ] }
```

`renderCards`, en `main.js`, quita los nodos de `removed`. Para las demás fichas, compara el HTML de su descripción con el del render anterior: si es igual, reutiliza el nodo; si no, monta uno nuevo.

## Paso 10: probar la página y comprobar (10 min)

Recarga `http://localhost:3000`. Con los datos de ejemplo:

1. Al cargar: `Mostrando 10 de 10 · destacadas: 2`, `Último render: creadas 10 · reutilizadas 0 · quitadas 0`, y Saturno y Betelgeuse, con borde amarillo, las primeras. El filtro de categoría ofrece `Todas, Estrella, Galaxia, Nebulosa, Planeta`.
2. Escribe `ROJA` en el buscador: quedan Betelgeuse y Júpiter, con `creadas 0 · reutilizadas 2 · quitadas 8`. Las dos fichas que se ven son los mismos nodos de antes.
3. Vacía el buscador y elige la categoría `Planeta`: Saturno, Júpiter y Marte.
4. Pulsa **Destacar** en Marte: pasa delante de Júpiter, el botón cambia a **Quitar destacado** y el foco sigue en él (`creadas 1 · reutilizadas 2`).
5. **Ver HTML** en Júpiter: su ficha se marca con un borde azul y el panel muestra `HTML de «Júpiter»` con su `<li class="card" data-id="2">...`.
6. Vuelve a `Todas` y añade una ficha destacada con el nombre `Copa <img src=x onerror="document.title=1">`, la categoría `Cerámica` y cualquier detalle. La ficha muestra el nombre tal cual, el título de la pestaña no cambia y `Cerámica` aparece en el filtro. Su **Ver HTML** muestra `Copa &lt;img src=x ...`.
7. **Quitar** en esa ficha: `creadas 0 · reutilizadas 10 · quitadas 1`, el panel vuelve a `Pulsa «Ver HTML» en una ficha.` y `Cerámica` desaparece del filtro.
8. Busca `zzz`: `Mostrando 0 de 10` y el mensaje `No hay fichas con estos filtros.`

La consola de las DevTools no debe mostrar ningún error. Después, haz lo mismo con tus datos.

Repasa `src/logic.js` antes de entregar: borra los `TODO` que queden y comprueba que no usas `var`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-17 ./scripts/verificar-semana.sh 17
# Semana 17 — DOM Manipulation Moderna
#   ✅ src/data.js, src/logic.js y src/main.js son módulos ES válidos
#   ...
# 16/16 comprobaciones superadas.
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
| `sin-innerhtml` | Ningún archivo de `src/` usa `innerHTML`, `outerHTML` ni `insertAdjacentHTML` |
| `datos-exports` | `data.js` exporta `TITLE` y por defecto de 8 a 15 fichas con `id` entero positivo sin repetir, `name` de 3 o más caracteres sin repetir, `category` y `detail` de texto y `featured` booleano; al menos 2 categorías y 1 destacada |
| `datos-dominio` | El título y las fichas no son los del ejemplo Planetario |
| `describir` | `h` devuelve `{ tag, props, children }` con `props` `{}` por defecto, los hijos aplanados, sin `null`, `undefined`, `false` ni `''`, y los números como texto |
| `clases` | `classNames` junta con espacios las clases que no son *falsy* |
| `escapar` | `escapeHtml` sustituye `&`, `<`, `>`, `"` y `'` por sus entidades, con el `&` primero, y acepta números |
| `html` | `toHtml` convierte textos y elementos en HTML: atributos en orden, `class` vacía omitida, `dataset` en *kebab-case*, `true` sin valor y `false`, `null` o `undefined` omitidos |
| `html-seguro` | `toHtml` escapa los textos y los valores de los atributos, así que un dato con HTML no crea etiquetas |
| `ficha` | `cardSpec` describe la ficha: un `li` con `class` `card` y `data-id`, el título, la categoría, el detalle y los tres botones |
| `ficha-html` | `toHtml(cardSpec(...))` de una ficha destacada y seleccionada da exactamente el HTML del paso 6, con los datos escapados |
| `visibles` | `visibleItems` filtra por categoría y por texto en `name` o `detail` (sin mayúsculas ni espacios de los extremos), pone las destacadas primero y no cambia el array |
| `categorias` | `categoriesOf` devuelve las categorías sin repetir y en orden alfabético en español, sin cambiar el array |
| `claves` | `diffKeys` devuelve `removed`, `added` y `kept`, cada uno en el orden pedido, sin cambiar los arrays |

Que los datos sean de tu dominio, que la página funcione y que el código se lea bien lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-17` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Plantillas y render](../2-practicas/lab-04-plantillas-render/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 17](../README.md)
