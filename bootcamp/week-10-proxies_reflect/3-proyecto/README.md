# Proyecto Semana 10 — Fichas validadas en vivo

## Descripción

Una página con las fichas de las piezas de tu dominio y un formulario para añadir más. El formulario se valida **mientras escribes**: cada tecla pasa por un proxy que comprueba el campo, guarda el valor y avisa a la página, que marca el campo en verde o en rojo, enseña el error debajo y apunta el cambio en **Últimos cambios**. El botón **Añadir** solo se activa cuando todos los campos son válidos. Las piezas guardadas son de solo lectura: el botón ✏️ intenta cambiar su valor y la página muestra el error con el que el proxy lo rechaza.

La página ya está montada. Tu trabajo es escribir los validadores y los dos proxies de `src/logic.js` con lo que has visto esta semana (`new Proxy()`, los traps `get`, `set` y `deleteProperty`, y `Reflect`) y cambiar los datos de ejemplo por los de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-10
cp -r bootcamp/week-10-proxies_reflect/3-proyecto/starter/. ~/js-proyecto-semana-10/
cd ~/js-proyecto-semana-10
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | El formulario, el registro de cambios y la lista; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título, el prefijo de los ids, las salas, las reglas de cada campo y las piezas de ejemplo | Sí: paso 2 |
| `src/logic.js` | Siete funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | El código que conecta el formulario con el borrador y pinta la página | No |

- **Qué:** un **validador** es una función que recibe un valor y devuelve un mensaje de error, o `null` si el valor es válido. `SCHEMA`, en `data.js`, dice qué validadores tiene cada campo. `createForm` crea el **borrador**: un proxy que aplica esos validadores en cada asignación. `readOnly` envuelve cada pieza guardada en un proxy que no deja cambiarla.
- **Para qué:** la página no comprueba nada por su cuenta. Solo asigna `draft.name = texto` en cada tecla y reacciona a lo que el proxy le cuenta con `onChange`. Toda la validación vive en `logic.js`, y `scripts/verificar-semana.sh` la puede probar desde Node sin navegador.
- **Impacto:** los valores llegan del formulario como texto, también el valor numérico: `between` lo convierte con `Number()`. Ninguna función modifica lo que recibe. Las piezas viven en memoria: al recargar la página vuelven los datos de `data.js`. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

---

## Paso 1: ver la página (10 min)

```bash
pnpm dlx serve .
```

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. Con el starter, la lista sale vacía y la consola de las DevTools (`F12`, pestaña **Console**) muestra `TypeError: Cannot read properties of undefined (reading 'value')`: `readOnly` todavía devuelve `undefined`. La lista aparece en el paso 3 y el formulario funciona en el paso 8. Mientras tanto, comprueba cada función con el comando `node` de su paso, que importa tus datos y tu función. Deja el servidor abierto en esa terminal y usa otra para el resto.

## Paso 2: tus datos (10 min)

En `src/data.js` están los datos del dominio Planetario, que es solo un ejemplo. Cámbialos por los de **tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- `ID_PREFIX`: de 2 a 4 letras mayúsculas que abrevien tu dominio (`PLA` para Planetario).
- `ROOMS`: de 3 a 8 salas, zonas o secciones de tu dominio, sin repetir. Son las opciones del desplegable.
- `SCHEMA`: las reglas de `name`, `room` y `value`. Puedes cambiar los números (la longitud mínima del nombre, el valor máximo) para que tengan sentido en tu dominio.
- El export por defecto: de 5 a 12 piezas sin `id`, con `name` (sin repetir), `room` (una de `ROOMS`) y `value` (un número de 0 o más, sin comillas). Cada pieza debe cumplir las reglas de `SCHEMA`.

`data.js` importa los validadores de `logic.js` para escribir `SCHEMA`. Hasta el paso 5 son `undefined`, pero el archivo se carga sin errores. Las salidas de los pasos siguientes son las de los datos de ejemplo; con los tuyos verás tus piezas.

## Paso 3: `readOnly` (15 min)

Un proxy sobre `object` con dos traps, `set` y `deleteProperty`, que devuelven `false` sin tocar el objeto ([lab 02](../2-practicas/lab-02-traps/README.md), paso 4). Las lecturas no necesitan trap: sin `get`, llegan tal cual al objeto ([lab 01](../2-practicas/lab-01-proxy-basics/README.md), paso 1).

Un trap que devuelve `false` le dice al lenguaje que la operación no se hizo. En un script normal eso pasa en silencio, pero los módulos ES funcionan siempre en **modo estricto**, y en modo estricto se convierte en un `TypeError`. Por eso `main.js`, que es un módulo, recibe el error al pulsar ✏️.

```bash
node --input-type=module -e "import { readOnly } from './src/logic.js'; const piece = readOnly({ id: 'PLA-001', value: 18500 }); console.log(piece.value, Object.keys(piece)); try { piece.value = 0; } catch (error) { console.log(error.name, error.message); } try { delete piece.id; } catch (error) { console.log(error.message); }"
```

```text
18500 [ 'id', 'value' ]
TypeError 'set' on proxy: trap returned falsish for property 'value'
'deleteProperty' on proxy: trap returned falsish for property 'id'
```

Recarga la página: aparecen las fichas y la cabecera suma su valor (`98300 €` con los datos de ejemplo). Pulsa ✏️ en una ficha: debajo de la lista sale el mismo mensaje. El formulario todavía no responde: al escribir, la consola muestra `TypeError: Cannot set properties of undefined (setting 'name')`.

## Paso 4: `required` (10 min)

`required()` no valida nada: **devuelve** el validador. Es una función que devuelve otra función ([lab 04](../2-practicas/lab-04-reactive-validation/README.md), paso 2). El validador pasa el valor a texto con `String()`, le quita los espacios de los extremos con `trim()` y, si queda vacío, devuelve `'Campo obligatorio'`. Si no, `null`.

```bash
node --input-type=module -e "import { required } from './src/logic.js'; const check = required(); console.log(check(''), '|', check('   '), '|', check('Mapa'));"
```

```text
Campo obligatorio | Campo obligatorio | null
```

## Paso 5: `minLength`, `between` y `oneOf` (15 min)

Los tres siguen la misma forma que `required`: reciben la configuración y devuelven el validador.

- `minLength(min)`: error `` `Mínimo ${min} caracteres` `` si el texto, sin espacios en los extremos, es más corto.
- `between(min, max)`: convierte el valor con `Number()`. Error `` `Debe estar entre ${min} y ${max}` `` si el resultado no es un número finito (`Number.isFinite`) o se sale del rango. Los dos extremos son válidos.
- `oneOf(options)`: error `'Elige una opción válida'` si el valor no está en `options` (`includes`).

```bash
node --input-type=module -e "import { minLength, between, oneOf } from './src/logic.js'; import { ROOMS } from './src/data.js'; console.log(minLength(3)('ab'), '|', minLength(3)('Mapa')); console.log(between(0, 100000)('-5'), '|', between(0, 100000)('abc'), '|', between(0, 100000)('3200')); console.log(oneOf(ROOMS)('Garaje'), '|', oneOf(ROOMS)('Cúpula'));"
```

```text
Mínimo 3 caracteres | null
Debe estar entre 0 y 100000 | Debe estar entre 0 y 100000 | null
Elige una opción válida | null
```

## Paso 6: `firstError` (10 min)

Aplica los validadores en orden y devuelve el primer error, o `null` si no hay ninguno. El orden importa: con un nombre vacío, el usuario debe leer «Campo obligatorio», no «Mínimo 3 caracteres». Una forma: `map` para obtener todos los resultados, `find` para quedarte con el primero que no sea `null`, y `?? null` para cuando `find` devuelve `undefined`.

```bash
node --input-type=module -e "import { firstError } from './src/logic.js'; import { SCHEMA } from './src/data.js'; console.log(firstError(SCHEMA.name, ''), '|', firstError(SCHEMA.name, 'ab'), '|', firstError(SCHEMA.name, 'Mapa lunar'));"
```

```text
Campo obligatorio | Mínimo 3 caracteres | null
```

## Paso 7: `createForm`, el trap `set` (15 min)

`createForm(schema, onChange)` guarda los errores en un `Map` propio y devuelve un proxy sobre un objeto vacío `{}`. Su trap `set(target, field, value, receiver)`:

1. Si `field` no es un campo de `schema` (`Object.hasOwn`), lanza `` new TypeError(`Campo desconocido: ${String(field)}`) ``. Así un error al escribir el nombre de un campo no pasa desapercibido.
2. Calcula el error del campo con `firstError`. Si es `null`, borra el campo del `Map`; si no, lo guarda.
3. Guarda el valor con `Reflect.set(target, field, value, receiver)` ([lab 03](../2-practicas/lab-03-reflect/README.md), paso 7).
4. Llama a `onChange(field, value, error)` y devuelve `true`.

El valor se guarda aunque no sea válido: el borrador recuerda lo que hay escrito en el formulario, y el error dice qué falta para que sirva.

```bash
node --input-type=module -e "import { createForm } from './src/logic.js'; import { SCHEMA } from './src/data.js'; const form = createForm(SCHEMA, (field, value, error) => console.log('onChange:', field, value, error)); form.name = 'ab'; form.name = 'Mapa lunar'; console.log(form.name); try { form.color = 'azul'; } catch (error) { console.log(error.name, error.message); }"
```

```text
onChange: name ab Mínimo 3 caracteres
onChange: name Mapa lunar null
Mapa lunar
TypeError Campo desconocido: color
```

## Paso 8: `createForm`, el trap `get` (15 min)

Añade un trap `get(target, property, receiver)` con dos propiedades calculadas ([lab 01](../2-practicas/lab-01-proxy-basics/README.md), paso 5):

- `errors`: un objeto nuevo con los errores actuales. `Object.fromEntries(map)` lo crea a partir del `Map`. Al ser nuevo cada vez, quien lo reciba no puede cambiar los errores guardados.
- `isValid`: `true` si no hay errores **y** todos los campos de `schema` tienen valor (`Object.hasOwn(target, field)`). Sin la segunda condición, el formulario vacío sería válido.

Cualquier otra propiedad se lee con `Reflect.get(target, property, receiver)`.

```bash
node --input-type=module -e "import { createForm } from './src/logic.js'; import { SCHEMA } from './src/data.js'; const form = createForm(SCHEMA, () => {}); form.name = 'ab'; console.log(form.errors, form.isValid); form.name = 'Mapa lunar'; form.room = 'Cúpula'; console.log(form.errors, form.isValid); form.value = '3200'; console.log(form.errors, form.isValid);"
```

```text
{ name: 'Mínimo 3 caracteres' } false
{} false
{} true
```

## Paso 9: probar la página (10 min)

Recarga la página. Ahora todo funciona:

1. Escribe `ab` en **Nombre**: el campo se pone rojo y sale «Mínimo 3 caracteres». Sigue escribiendo: al llegar a 3 caracteres se pone verde. **Últimos cambios** apunta cada tecla, con ✔ o con ✖ y el error.
2. Elige una sala y escribe un valor fuera del rango: sale su error y **Añadir** sigue desactivado. Corrígelo: **Añadir** se activa.
3. Pulsa **Añadir**: la pieza aparece al final con el siguiente id (`PLA-007` con los datos de ejemplo), la cabecera suma su valor y el formulario queda vacío.
4. Pulsa ✏️ en la pieza nueva: tampoco se puede cambiar. Bórrala y añade otra: el id no se reutiliza.

## Paso 10: comprobar (10 min)

Borra los `TODO` que queden en `src/logic.js`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-10 ./scripts/verificar-semana.sh 10
# Semana 10 — Proxies y Reflect
#   ✅ src/data.js, src/logic.js y src/main.js son módulos ES válidos
#   ...
# 14/14 comprobaciones superadas.
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
| `datos-exports` | `data.js` exporta `TITLE`, `ID_PREFIX` de 2 a 4 mayúsculas, de 3 a 8 salas sin repetir, un `SCHEMA` con reglas para `name`, `room` y `value`, y por defecto de 5 a 12 piezas sin `id`, con nombre sin repetir, una sala de `ROOMS` y valor numérico de 0 o más |
| `datos-dominio` | El título, el prefijo, las salas y las piezas no son los del ejemplo Planetario |
| `datos-validos` | Cada pieza de ejemplo pasa las reglas de `SCHEMA`, y `SCHEMA` rechaza un nombre vacío, una sala que no está en `ROOMS` y un valor no numérico |
| `required` | `required()` devuelve un validador que da `Campo obligatorio` con texto vacío o solo espacios y `null` en otro caso |
| `min-length` | `minLength(min)` falla con menos de `min` caracteres sin contar los espacios de los extremos |
| `between` | `between(min, max)` acepta números entre `min` y `max`, ambos incluidos, también escritos como texto, y rechaza el resto |
| `one-of` | `oneOf(options)` solo acepta los valores de `options` |
| `first-error` | `firstError` devuelve el primer error en el orden de los validadores, o `null`, sin modificar la lista |
| `form-set` | `createForm` devuelve un proxy cuyo `set` guarda el valor, llama a `onChange(campo, valor, error)` y lanza `TypeError` con un campo que no está en `schema` |
| `form-get` | `form.errors` devuelve un objeto nuevo con los errores actuales y `form.isValid` solo es `true` con todos los campos rellenos y sin errores |
| `read-only` | `readOnly` devuelve un proxy que se lee igual que el objeto y lanza `TypeError` al asignar o borrar, sin cambiar el original |

Que los datos sean de tu dominio y que la página funcione lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-10` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Validación reactiva](../2-practicas/lab-04-reactive-validation/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 10](../README.md)
