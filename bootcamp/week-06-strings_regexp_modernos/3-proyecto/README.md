# Proyecto Semana 06 — Registro de fichas

## Descripción

Una página para registrar fichas de tu dominio: cada ficha tiene un código (`PLA-0001`), un nombre, el correo de quien la lleva, una fecha y unas notas donde las etiquetas se marcan con `#`. El formulario valida lo que escribes, el buscador encuentra una ficha por su código y el selector filtra por etiqueta.

La página ya está montada. Tu trabajo es escribir las siete funciones de `src/logic.js` con lo que has visto esta semana (métodos de string, expresiones regulares, grupos con nombre, `matchAll` y tagged templates) y cambiar los datos de ejemplo por los de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-06
cp -r bootcamp/week-06-strings_regexp_modernos/3-proyecto/starter/. ~/js-proyecto-semana-06/
cd ~/js-proyecto-semana-06
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | El formulario, el buscador, el selector de etiquetas y la lista; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título, el prefijo de los códigos y las fichas de ejemplo | Sí: paso 2 |
| `src/logic.js` | Siete funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | El código que lee el formulario, valida y pinta la página | No |

- **Qué:** cada ficha tiene la forma `{ number, name, email, date, notes }`. El código no se guarda: se calcula con el prefijo y el número.
- **Para qué:** las funciones de `logic.js` reciben texto y devuelven un valor nuevo, así que `scripts/verificar-semana.sh` puede probarlas desde Node con datos concretos.
- **Impacto:** las fichas viven en memoria; al recargar la página vuelven los datos de `data.js`. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

---

## Paso 1: ver la página (10 min)

```bash
pnpm dlx serve .
```

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. Con el starter, la lista sale vacía y la consola de las DevTools (`F12`, pestaña **Console**) muestra un `TypeError`: `extractTags` todavía no devuelve nada. `main.js` usa las siete funciones para pintar cada ficha, así que la página no aparece entera hasta el paso 8. Mientras tanto, comprueba cada función con el comando `node` de su paso. Deja el servidor abierto en esa terminal y usa otra para el resto.

## Paso 2: tus datos (15 min)

En `src/data.js` están los datos del dominio Planetario, que es solo un ejemplo. Cámbialos por los de **tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- `CODE_PREFIX`: tres letras mayúsculas que identifiquen tu dominio (no `PLA`).
- El export por defecto: de 4 a 6 fichas. `number` es un entero positivo que no se repite; `name`, `email`, `date` y `notes` son texto. `date` va como `AAAA-MM-DD` (así la devuelve el `<input type="date">`), o `''` si no se conoce. En `notes` escribe etiquetas con `#`, repite alguna entre fichas y escribe alguna con mayúscula o tilde. Deja una ficha sin fecha y un `name` con espacios de sobra, como `'  Taller   de   telescopios '`, para que los pasos 3 y 6 se noten.

## Paso 3: `normalizeText` (10 min)

Devuelve el texto sin espacios en los extremos y con un solo espacio donde haya varios seguidos, incluidos tabuladores y saltos de línea. `main.js` la usa con el nombre y las notas antes de guardarlos.

`trim()` limpia los extremos ([lab 01](../2-practicas/lab-01-string-methods/README.md), paso 4), pero `replaceAll('  ', ' ')` no basta para el centro: el paso 8 del mismo lab muestra que tres espacios se quedan en dos. Usa `replace` con una expresión regular que encuentre «uno o más espacios en blanco» en todo el texto: la clase `\s`, el cuantificador `+` y el flag `g` ([lab 03](../2-practicas/lab-03-regexp-basics/README.md), pasos 2 a 4).

```bash
node --input-type=module -e "import { normalizeText } from './src/logic.js'; import entries from './src/data.js'; console.log(entries.map(({ name }) => normalizeText(name)))"
# [
#   'Eclipse lunar total',
#   'Lluvia de Perseidas',
#   'Taller de telescopios',
#   'Planetas gigantes',
#   'Noche de Saturno'
# ]
```

Esa salida es la de los datos de ejemplo; con los tuyos verás tus nombres.

## Paso 4: `formatCode` e `isValidCode` (20 min)

`formatCode(prefix, number)` devuelve el código: el prefijo, un guion y el número con al menos 4 cifras. `padStart` solo existe en strings: convierte el número con `String(number)` primero (lab 01, paso 3).

`isValidCode(code, prefix)` devuelve `true` solo si `code` es exactamente el prefijo, un guion y 4 dígitos. El buscador la usa para avisar si el código está mal escrito. Como el prefijo es una variable, el patrón no se puede escribir entre barras: créalo con `new RegExp(texto)` (lab 03, paso 1). Para escribir ese texto sin doblar cada barra invertida, usa `String.raw` con interpolación (lab 02, paso 8):

```javascript
String.raw`^${prefix}-\d{4}$`
// con prefix = 'PLA' → '^PLA-\d{4}$'
```

`^` y `$` obligan a que el patrón ocupe el texto entero (lab 03, paso 5): sin ellos, `'XPLA-00071'` contaría como válido.

```bash
node --input-type=module -e "import { formatCode, isValidCode } from './src/logic.js'; console.log(formatCode('PLA', 12), isValidCode('PLA-0012', 'PLA'), isValidCode('PLA-12', 'PLA'))"
# PLA-0012 true false
```

## Paso 5: `isValidEmail` (15 min)

Devuelve `true` si el correo tiene la forma `usuario@dominio.ext`. El formulario no deja añadir una ficha si no la cumple. Construye el patrón por partes, anclado con `^` y `$`:

| Parte | Patrón | Acepta |
|---|---|---|
| Usuario | `[\w.+-]+` | Letras, dígitos, `_`, `.`, `+` y `-`, al menos uno |
| Arroba | `@` | Una sola |
| Dominio | `[\w-]+` | `planetario`, `sub` |
| Subdominios | `(\.[\w-]+)*` | `.museo` en `sub.museo.es`, o nada |
| Extensión | `\.[a-z]{2,}` | Un punto y dos letras o más: `.org`, `.es` |

Añade el flag `i` para que la extensión acepte mayúsculas (`.COM`) y devuelve el resultado de `test`. Dentro de `[...]` el punto es un punto de verdad y el `-` al final no forma rango.

```bash
node --input-type=module -e "import { isValidEmail } from './src/logic.js'; import entries from './src/data.js'; console.log(entries.map(({ email }) => isValidEmail(email)), isValidEmail('cupula@planetario'))"
# [ true, true, true, true, true ] false
```

Este patrón es para practicar: un correo puede pasarlo y aun así no existir. La única forma de saber que existe es enviarle un mensaje.

## Paso 6: `formatDate` (15 min)

Convierte `'2025-03-14'` en `'14/03/2025'` y devuelve `null` si el texto no tiene la forma `AAAA-MM-DD` (por ejemplo, `''` en las fichas sin fecha). `main.js` muestra «sin fecha» cuando recibe `null`.

Usa `match` con tres grupos con nombre, `year`, `month` y `day`, y el patrón anclado ([lab 04](../2-practicas/lab-04-matchall-search/README.md), paso 4). Sin coincidencia, `match` devuelve `null`; con ella, saca los grupos de `match.groups` con destructuring (semana 04) y únelos con un template literal.

```bash
node --input-type=module -e "import { formatDate } from './src/logic.js'; import entries from './src/data.js'; console.log(entries.map(({ date }) => formatDate(date)))"
# [ '14/03/2025', '12/08/2025', null, '05/11/2025', '20/01/2026' ]
```

## Paso 7: `extractTags` (20 min)

Devuelve las etiquetas del texto: cada `#` seguido de letras, dígitos, `_` o `-`, sin el `#`, en minúsculas, sin repetir y en el orden en que aparecen. `main.js` la usa para las etiquetas de cada ficha y para el selector **Etiqueta**.

Tres piezas:

1. El patrón. `\w` no incluye letras con tilde ni la `ñ` (lab 03, comprobación 2), así que `#cúpula` se cortaría en `#c`. Con el flag `u` (unicode), `\p{L}` es cualquier letra de cualquier idioma: el grupo `([\p{L}\d_-]+)` acepta `cúpula` y `año-2025`. Añade también el flag `g`, que `matchAll` exige.
2. `matchAll` con `Array.from(iterador, fn)` para quedarte con el grupo 1 de cada coincidencia en minúsculas (lab 04, paso 3).
3. `new Set(...)` para quitar repetidos y `Array.from` para volver a array, como el `getAllTags` de la semana 05. Un `Set` guarda los valores en el orden en que entran.

```bash
node --input-type=module -e "import { extractTags } from './src/logic.js'; import entries from './src/data.js'; console.log(extractTags(entries.map(({ notes }) => notes).join(' ')))"
# [
#   'cúpula',   'eclipse',
#   'luna',     'meteoros',
#   'verano',   'taller',
#   'planetas', 'telescopio',
#   'saturno'
# ]
```

`#Cúpula` de la tercera ficha no aparece dos veces: en minúsculas es la misma que `#cúpula`.

## Paso 8: `safeHtml` (15 min)

Es una función tag: escapa `&`, `<`, `>`, `"` y `'` en los valores interpolados y deja igual el texto fijo. `main.js` escribe cada ficha con `` safeHtml`<h3>${...}</h3>` `` y la mete en la página con `innerHTML`; sin escapar, un nombre como `<img src=x onerror=alert(1)>` ejecutaría código en la página.

Es el `safeHtml` del [lab 02](../2-practicas/lab-02-template-tags/README.md), paso 6: un `escapeHtml` con `replace(/[&<>"']/g, ...)` y un objeto con la entidad de cada carácter, y un `reduce` sobre `strings` que pone detrás de cada texto su valor escapado. Dos detalles que comprueban los checks:

- Convierte cada valor con `String(value)` antes de escaparlo: también llegan números.
- En la última vuelta no hay valor: `i < values.length` dice si lo hay. Un valor `0` sí hay que escribirlo, así que no uses `values[i] || ''`.

```bash
node --input-type=module -e "import { safeHtml } from './src/logic.js'; console.log(safeHtml\`<h3>\${'<i>Saturno</i> & \"Titán\"'}</h3>\`)"
# <h3>&lt;i&gt;Saturno&lt;/i&gt; &amp; &quot;Titán&quot;</h3>
```

En el comando, las barras invertidas antes de `` ` ``, `$` y `"` son para la terminal: dentro de comillas dobles los interpretaría ella.

Recarga la página: ya aparecen las fichas con su código, su fecha y sus etiquetas.

## Paso 9: comprobar (5 min)

Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-06 ./scripts/verificar-semana.sh 06
# Semana 06 — Strings y RegExp Modernos
#   ✅ src/data.js y src/logic.js son módulos ES válidos
#   ...
# 12/12 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla. Los checks de `safeHtml` llaman a la función directamente, `safeHtml(['<p>', '</p>'], valor)`, que es lo mismo que recibe con un template.

Por último, prueba la página entera:

1. Añade una ficha con un número que ya existe, sin nombre y con el correo `ana@museo`: salen los tres errores.
2. Corrígelos, escribe un nombre con `<b>` y espacios de sobra y unas notas con una etiqueta nueva: la ficha aparece con el nombre limpio y el `<b>` como texto.
3. Escribe en el buscador tu prefijo y un número sin ceros (`PLA-5`): sale el aviso de formato. Escríbelo con 4 cifras: sale solo esa ficha.
4. Filtra por la etiqueta nueva y elimina la ficha.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js` y `src/logic.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `datos-exports` | `data.js` exporta `TITLE` y `CODE_PREFIX` (3 mayúsculas) con nombre, y por defecto de 4 a 6 fichas con número sin repetir, texto en cada campo y alguna `#etiqueta` |
| `datos-dominio` | El prefijo y el título no son los del ejemplo Planetario |
| `normalize-text` | `normalizeText` quita los espacios de los extremos y deja uno solo entre palabras |
| `format-code` | `formatCode` une prefijo, guion y número con al menos 4 cifras |
| `valid-code` | `isValidCode` acepta solo el prefijo, un guion y 4 dígitos, sin nada más |
| `valid-email` | `isValidEmail` acepta `usuario@dominio.ext` y rechaza los correos incompletos |
| `format-date` | `formatDate` convierte `AAAA-MM-DD` en `DD/MM/AAAA` y devuelve `null` si no tiene esa forma |
| `extract-tags` | `extractTags` devuelve las `#etiquetas` en minúsculas, sin repetir y en orden de aparición, con tildes y ñ |
| `safe-html` | `safeHtml` escapa `&`, `<`, `>`, comillas dobles y simples en los valores y deja igual el texto fijo |

Que los datos sean de tu dominio y que la página funcione lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-06` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — `matchAll()` y búsqueda avanzada](../2-practicas/lab-04-matchall-search/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 06](../README.md)
