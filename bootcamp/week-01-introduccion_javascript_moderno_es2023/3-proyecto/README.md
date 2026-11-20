# Proyecto Semana 01 — Ficha interactiva de tu dominio

## Descripción

Una página que muestra la ficha de una entidad de tu dominio: título, ubicación, descripción, una lista de elementos con su nivel y unas estadísticas. Tiene tres botones: mostrar todos los elementos, cambiar entre tema claro y oscuro, y copiar un resumen al portapapeles.

La página ya está montada. Tu trabajo es escribir las funciones de `src/logic.js` con lo que has visto esta semana (`const`, template literals, arrow functions, destructuring, `?.` y `??`) y cambiar los datos de ejemplo por los de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-01
cp -r bootcamp/week-01-introduccion_javascript_moderno_es2023/3-proyecto/starter/. ~/js-proyecto-semana-01/
cd ~/js-proyecto-semana-01
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | La estructura de la ficha; carga `src/main.js` | No |
| `styles.css` | Los estilos, con un tema oscuro en `[data-theme="dark"]` | Si quieres |
| `src/main.js` | Los datos de la entidad y el código que pinta la página y atiende los botones | Solo el objeto `entity` |
| `src/logic.js` | Ocho funciones con `TODO` | Sí: es el proyecto |

- **Qué:** `logic.js` solo calcula y devuelve valores; no toca la página.
- **Para qué:** así cada función se puede probar desde Node con datos concretos, sin navegador. Es lo que hace `scripts/verificar-semana.sh`.
- **Impacto:** si una función devuelve algo incorrecto, la comprobación te dice cuál y en qué paso se arregla. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

---

## Paso 1: ver la página (10 min)

`index.html` carga `src/main.js` con `<script type="module">`, que es lo que permite usar `import` y `export`. El navegador no carga módulos desde un archivo abierto con doble clic (`file://`), así que hace falta un servidor local:

```bash
pnpm dlx serve .
```

La primera vez, `pnpm dlx` descarga `serve` (unos segundos). Después el servidor muestra su dirección, en un recuadro `Serving!` o en una línea como esta:

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. Con el starter, la ficha sale casi vacía (el título en blanco y la ubicación como `📍 undefined`): abre las DevTools (`F12`), pestaña **Console**, y verás un `TypeError` en rojo. Es lo esperado: las funciones de `logic.js` todavía no devuelven nada. Deja el servidor abierto en esa terminal y usa otra para el resto de pasos; después de cada paso recarga la página.

## Paso 2: tus datos (15 min)

Abre `src/main.js`. El objeto `entity` trae datos del dominio Planetario, que es solo un ejemplo. Cámbialos por una entidad de **tu dominio** (el que te asignó el instructor), con la misma forma:

```javascript
const entity = {
  name: '...',          // nombre de la entidad
  code: '...',          // identificador corto, como 'EXH-001'
  description: '...',
  location: { room: '...', floor: 0 },  // dónde está; floor es un número
  items: [              // de 5 a 8 elementos relacionados con un nivel de 0 a 100
    { name: '...', level: 0 },
  ],
};
```

Los nombres de las propiedades se quedan en inglés; los valores, en español y de tu dominio. No cambies nada más de `main.js`.

## Paso 3: `formatHeader` (10 min)

Recibe la entidad y devuelve el título: `'Sala Cúpula (SC-01)'`. Usa destructuring en el parámetro para sacar `name` y `code`, y un template literal para el resultado. Repasa [teoría 03](../1-teoria/03-template-literals.md) y [teoría 05](../1-teoria/05-destructuring-basico.md).

Comprueba la función desde Node sin esperar al final:

```bash
node --input-type=module -e "import { formatHeader } from './src/logic.js'; console.log(formatHeader({ name: 'Sala Cúpula', code: 'SC-01' }))"
# Sala Cúpula (SC-01)
```

## Paso 4: `formatLocation` (15 min)

Devuelve `'sala · planta N'`. La entidad puede no tener `location`, o tenerla sin `room` o sin `floor`:

| Entrada | Salida |
|---|---|
| `{ location: { room: 'Sala A', floor: 0 } }` | `'Sala A · planta 0'` |
| `{ location: { floor: 3 } }` | `'Sin ubicación · planta 3'` |
| `{}` | `'Sin ubicación · planta -'` |

Lee cada dato con `?.` y pon el valor por defecto con `??` ([teoría 06](../1-teoria/06-operadores-modernos.md)). La primera fila es la trampa: con `||` la planta `0` se convertiría en `-`.

## Paso 5: `itemToHtml` y `visibleItems` (20 min)

`itemToHtml` recibe un elemento y devuelve su `<li>` exactamente así (los estilos dependen de esas clases):

```html
<li class="skill-item"><span class="skill-name">Telescopio</span> <span class="skill-level">80%</span></li>
```

`visibleItems(items, showAll)` devuelve los 3 primeros elementos si `showAll` es `false`, y todos si es `true`. `items.slice(0, 3)` devuelve un array nuevo con las posiciones 0, 1 y 2 sin modificar el original; un operador ternario (`condición ? a : b`) elige entre las dos respuestas.

Al recargar la página ya ves la lista, y el botón **Mostrar todos** funciona.

## Paso 6: `averageLevel` y `countAbove` (20 min)

- `averageLevel(items)`: suma los niveles con `reduce`, divide entre el número de elementos y redondea con `Math.round`. Con un array vacío devuelve `0` (sin esa comprobación, dividiría entre 0 y daría `NaN`).
- `countAbove(items, minLevel)`: filtra con `filter` los elementos con `level >= minLevel` y devuelve cuántos quedan (`.length`).

`reduce` y `filter` aparecen en la [teoría 04](../1-teoria/04-arrow-functions.md) y en el [lab 03](../2-practicas/lab-03-arrow-functions/README.md). Usa destructuring en el parámetro de la arrow function: `({ level }) => ...`.

```bash
node --input-type=module -e "import { averageLevel, countAbove } from './src/logic.js'; const items = [{ level: 90 }, { level: 75 }]; console.log(averageLevel(items), countAbove(items, 80), averageLevel([]))"
# 83 1 0
```

## Paso 7: `buildSummary` (15 min)

Devuelve un texto de 4 líneas con un template literal multilínea (los saltos de línea dentro de los backticks forman parte del texto). Reutiliza `formatHeader`, `formatLocation` y `averageLevel`. Si falta `items`, usa `[]` con `??`.

```bash
node --input-type=module -e "import { buildSummary } from './src/logic.js'; console.log(buildSummary({ name: 'X', code: 'Y' }))"
# X (Y)
# Sin descripción
# Sin ubicación · planta -
# Elementos: 0 · nivel medio 0%
```

Cuidado con los espacios al principio de las líneas 2 a 4: si indentas el template literal, los espacios también forman parte del texto.

## Paso 8: `nextTheme` (5 min)

Devuelve `'light'` si recibe `'dark'` y `'dark'` en cualquier otro caso. Una línea con un ternario. Con eso funciona el botón de tema; prueba también **Copiar resumen** y pega el resultado en un editor.

## Paso 9: comprobar (10 min)

Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-01 ./scripts/verificar-semana.sh 01
# Semana 01 — Introducción a JavaScript Moderno
#   ✅ src/logic.js es un módulo ES válido
#   ...
# 12/12 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla. Además de las funciones, el script comprueba que no queda ningún `TODO`, que no usas `var` y que `logic.js` no usa la palabra `function`.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/logic.js` es un módulo ES válido |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `arrow-functions` | `src/logic.js` no usa la palabra `function` |
| `format-header` | `formatHeader` devuelve `'nombre (código)'` |
| `format-location` | `formatLocation` pone `Sin ubicación` y `-` por defecto y respeta la planta `0` |
| `item-to-html` | `itemToHtml` devuelve el `<li>` con las clases del paso 5 |
| `visible-items` | `visibleItems` devuelve 3 elementos, o todos con `showAll` |
| `average-level` | `averageLevel` redondea la media y devuelve `0` sin elementos |
| `count-above` | `countAbove` cuenta los elementos con `level >= minLevel` |
| `build-summary` | `buildSummary` devuelve las 4 líneas, con sus valores por defecto |
| `next-theme` | `nextTheme` alterna entre `light` y `dark` |

El script comprueba las funciones. Que los datos sean de tu dominio y que la página funcione lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-01` con tus datos en `src/main.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 05 — Operadores modernos](../2-practicas/lab-05-operadores-modernos/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 01](../README.md)
