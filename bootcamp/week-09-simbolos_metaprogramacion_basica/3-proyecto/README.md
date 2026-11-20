# Proyecto Semana 09 — Fichas con notas reservadas

## Descripción

Una página con las fichas de las piezas de tu dominio: nombre, sala y valor. Cada pieza lleva además una **nota reservada** (un desperfecto, un préstamo, un aviso de conservación) que no debe salir cuando se envían los datos a otro sitio. La nota se guarda con una clave simbólica: no aparece en `Object.keys` ni en `JSON.stringify`, y la página solo la enseña si marcas **Ver notas reservadas**. Debajo de la lista, la **vista pública** muestra el JSON que saldría de la página, sin notas, y la cabecera suma el valor de todas las piezas.

La página ya está montada. Tu trabajo es escribir los símbolos y funciones de `src/logic.js` con lo que has visto esta semana (`Symbol()`, claves simbólicas, `Symbol.toStringTag`, `Symbol.toPrimitive`, `Symbol.hasInstance` y `Object.getOwnPropertySymbols`) y cambiar los datos de ejemplo por los de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-09
cp -r bootcamp/week-09-simbolos_metaprogramacion_basica/3-proyecto/starter/. ~/js-proyecto-semana-09/
cd ~/js-proyecto-semana-09
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | El formulario, la casilla de notas, la lista y la vista pública; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título, el prefijo de los ids y las piezas de ejemplo | Sí: paso 2 |
| `src/logic.js` | Un símbolo, un objeto y cinco funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | El código que lee el formulario y pinta la página | No |

- **Qué:** en `data.js` cada pieza tiene la forma `{ name, room, value, note }`. `main.js` la convierte en una pieza con `createPiece`, que le pone un `id` (`PLA-001`, `PLA-002`...) y guarda `note` con la clave `NOTES`.
- **Para qué:** las claves de texto (`id`, `name`, `room`, `value`) son los datos públicos; las simbólicas, los internos. Así la vista pública sale de la propia pieza sin tener que quitar la nota a mano, y `scripts/verificar-semana.sh` puede probar cada función desde Node.
- **Impacto:** una clave simbólica oculta la nota, pero no la protege: quien tenga la pieza puede encontrarla con `Object.getOwnPropertySymbols` ([lab 04](../2-practicas/lab-04-private-props/README.md), paso 2). Ninguna función modifica lo que recibe. Las piezas viven en memoria: al recargar la página vuelven los datos de `data.js`. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

---

## Paso 1: ver la página (10 min)

```bash
pnpm dlx serve .
```

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. Con el starter, la lista sale vacía y la consola de las DevTools (`F12`, pestaña **Console**) muestra `TypeError: Right-hand side of 'instanceof' is not callable`: `Piece` todavía no tiene `Symbol.hasInstance`. `main.js` usa todas las funciones para pintar la página, así que no aparece entera hasta el paso 10. Mientras tanto, comprueba cada función con el comando `node` de su paso, que importa tus datos y tu función. Deja el servidor abierto en esa terminal y usa otra para el resto.

## Paso 2: tus datos (15 min)

En `src/data.js` están los datos del dominio Planetario, que es solo un ejemplo. Cámbialos por los de **tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- `ID_PREFIX`: de 2 a 4 letras mayúsculas que abrevien tu dominio (`PLA` para Planetario).
- El export por defecto: de 5 a 12 piezas sin `id`, con `name` (sin repetir), `room`, `value` (un número de 0 o más, sin comillas) y `note`.

Las salidas de los pasos siguientes son las de los datos de ejemplo; con los tuyos verás tus piezas.

## Paso 3: `NOTES` (5 min)

Un símbolo local con la descripción `'notes'`: `Symbol('notes')` ([lab 01](../2-practicas/lab-01-symbols-basics/README.md), paso 1). No uses `Symbol.for`: un símbolo del registro global lo puede conseguir cualquier parte del programa con la misma clave ([lab 02](../2-practicas/lab-02-symbol-registry/README.md), paso 2), y la nota dejaría de estar reservada a quien importa `NOTES`.

```bash
node --input-type=module -e "import { NOTES } from './src/logic.js'; console.log(NOTES, NOTES.description, Symbol.keyFor(NOTES));"
```

```text
Symbol(notes) notes undefined
```

## Paso 4: `createPiece` (15 min)

Devuelve un objeto nuevo con `id`, `name`, `room` y `value`, y la nota en la clave simbólica: `[NOTES]: note` ([lab 01](../2-practicas/lab-01-symbols-basics/README.md), paso 3). El parámetro ya está desestructurado, y como la función solo devuelve un objeto puedes escribirlo entre paréntesis: `=> ({ ... })`.

```bash
node --input-type=module -e "import items from './src/data.js'; import { NOTES, createPiece } from './src/logic.js'; const piece = createPiece(items[0], 'PLA-001'); console.log(piece.name, Object.keys(piece), piece[NOTES], JSON.stringify(piece));"
```

```text
Telescopio refractor [ 'id', 'name', 'room', 'value' ] Lente con una raya en el borde {"id":"PLA-001","name":"Telescopio refractor","room":"Cúpula","value":12000}
```

La nota está en la pieza, pero ni `Object.keys` ni el JSON la enseñan.

## Paso 5: `toStringTag` y `toPrimitive` (15 min)

Añade dos claves más al objeto de `createPiece` ([lab 03](../2-practicas/lab-03-well-known/README.md), pasos 1, 2 y 6):

- `[Symbol.toStringTag]: 'Piece'`, para que `Object.prototype.toString` diga `[object Piece]`.
- Un método con clave `Symbol.toPrimitive` que recibe `hint` y devuelve el texto `nombre (id)` cuando `hint` es `'string'` y el `value` en los demás casos. Dentro del método, `this` es la pieza.

```bash
node --input-type=module -e "import items from './src/data.js'; import { createPiece } from './src/logic.js'; const piece = createPiece(items[0], 'PLA-001'); console.log(String(piece), +piece, piece * 2, Object.prototype.toString.call(piece));"
```

```text
Telescopio refractor (PLA-001) 12000 24000 [object Piece]
```

Repite el comando del paso 4: la salida no cambia, porque las dos claves nuevas también son símbolos.

## Paso 6: `typeOf` (10 min)

`Object.prototype.toString.call(value)` devuelve `[object Tipo]`. `typeOf` devuelve solo `Tipo`: quita los 8 primeros caracteres (`'[object '`) y el último (`']'`) con `slice(8, -1)`.

```bash
node --input-type=module -e "import items from './src/data.js'; import { createPiece, typeOf } from './src/logic.js'; console.log(typeOf(createPiece(items[0], 'PLA-001')), typeOf([]), typeOf(null), typeOf(new Map()));"
```

```text
Piece Array Null Map
```

## Paso 7: `Piece` (10 min)

`Piece` no es una clase: es un objeto con un método con clave `Symbol.hasInstance`, que `x instanceof Piece` llama con `x` como `value` ([lab 03](../2-practicas/lab-03-well-known/README.md), paso 4). Devuelve `true` solo si `typeOf(value)` es `'Piece'`. Con `typeOf`, `null` y los valores primitivos dan `false` sin lanzar errores.

```bash
node --input-type=module -e "import items from './src/data.js'; import { createPiece, Piece } from './src/logic.js'; console.log(createPiece(items[0], 'PLA-001') instanceof Piece, items[0] instanceof Piece, null instanceof Piece);"
```

```text
true false false
```

`items[0]` tiene los mismos datos, pero no es una pieza: no la creó `createPiece`.

## Paso 8: `totalValue` (10 min)

Suma las piezas con `reduce`, empezando en `0` (semana 02). Suma **las piezas**, no `piece.value`: `sum + piece` llama a `Symbol.toPrimitive` con el hint `'default'`, que devuelve el valor. La comprobación lo prueba también con objetos que no tienen `value` y solo saben convertirse en número.

```bash
node --input-type=module -e "import items from './src/data.js'; import { createPiece, totalValue } from './src/logic.js'; const pieces = items.map((data, i) => createPiece(data, 'PLA-00' + (i + 1))); console.log(totalValue(pieces), totalValue([]));"
```

```text
98300 0
```

## Paso 9: `toPublic` (10 min)

Un objeto nuevo y normal con solo las claves de texto de la pieza. `Object.entries` solo devuelve las claves de texto, y `Object.fromEntries` (semana 07) construye el objeto a partir de esos pares. No uses spread: `{ ...piece }` también copia las claves simbólicas, nota incluida ([lab 04](../2-practicas/lab-04-private-props/README.md), paso 5).

```bash
node --input-type=module -e "import items from './src/data.js'; import { NOTES, createPiece, toPublic } from './src/logic.js'; const piece = createPiece(items[0], 'PLA-001'); const view = toPublic(piece); console.log(view, String(view), view[NOTES]);"
```

```text
{
  id: 'PLA-001',
  name: 'Telescopio refractor',
  room: 'Cúpula',
  value: 12000
} [object Object] undefined
```

`String(view)` ya no da `nombre (id)`: la vista no tiene `Symbol.toPrimitive`, y tampoco la nota (`undefined`).

## Paso 10: `hiddenKeys` (5 min)

La descripción de cada clave simbólica propia del objeto: `Object.getOwnPropertySymbols` ([lab 01](../2-practicas/lab-01-symbols-basics/README.md), paso 5) y un `map` a `symbol.description`.

```bash
node --input-type=module -e "import items from './src/data.js'; import { createPiece, hiddenKeys } from './src/logic.js'; console.log(hiddenKeys(createPiece(items[0], 'PLA-001')), hiddenKeys(items[0]));"
```

```text
[ 'notes', 'Symbol.toStringTag', 'Symbol.toPrimitive' ] []
```

Los símbolos del lenguaje también tienen descripción: la de `Symbol.toStringTag` es `'Symbol.toStringTag'`.

## Paso 11: comprobar (15 min)

Borra los `TODO` que queden en `src/logic.js`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-09 ./scripts/verificar-semana.sh 09
# Semana 09 — Símbolos y Metaprogramación Básica
#   ✅ src/data.js y src/logic.js son módulos ES válidos
#   ...
# 13/13 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla.

Por último, prueba la página entera:

1. La cabecera cuenta las piezas y suma su valor (`98300 €` con los datos de ejemplo). La vista pública enseña el JSON sin notas, y la frase de encima dice que cada ficha es de tipo `Piece` y tiene 3 claves simbólicas.
2. Marca **Ver notas reservadas**: cada ficha muestra su nota. Desmárcala: desaparecen. La vista pública no cambia en ningún caso.
3. Pulsa **Añadir** con el formulario vacío: salen los cuatro errores. Prueba un valor negativo: sale su error. Añade una pieza válida: su id es el siguiente al último (`PLA-007` con los datos de ejemplo), la cabecera suma su valor y su nota no aparece en la vista pública.
4. Borra una pieza y añade otra: el id no se reutiliza.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js` y `src/logic.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `datos-exports` | `data.js` exporta `TITLE`, `ID_PREFIX` de 2 a 4 mayúsculas y por defecto de 5 a 12 piezas sin `id`, con nombre sin repetir, sala, valor numérico de 0 o más y nota |
| `datos-dominio` | El título, el prefijo y las piezas no son los del ejemplo Planetario |
| `notes-symbol` | `NOTES` es un símbolo local (no del registro global) con la descripción `notes` |
| `create-piece` | `createPiece` crea una pieza con `id`, `name`, `room` y `value` como únicas claves de texto, guarda la nota con la clave `NOTES` y no modifica los datos |
| `to-primitive` | Una pieza se convierte en el texto `nombre (id)` cuando se espera un string y en su valor en los demás casos |
| `type-of` | `typeOf` devuelve el tipo que da `Object.prototype.toString`, sin `[object ]`: `Piece` para una pieza |
| `instance` | `x instanceof Piece` es `true` solo para las piezas, también con `null` y valores primitivos |
| `total-value` | `totalValue` suma las piezas convirtiéndolas en número con `Symbol.toPrimitive`, 0 sin piezas, y no modifica el array |
| `to-public` | `toPublic` devuelve un objeto nuevo y normal con solo las claves de texto de la pieza, sin ninguna clave simbólica |
| `hidden-keys` | `hiddenKeys` devuelve la descripción de cada clave simbólica propia del objeto |

Que los datos sean de tu dominio y que la página funcione lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-09` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Ocultar propiedades con símbolos](../2-practicas/lab-04-private-props/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 09](../README.md)
