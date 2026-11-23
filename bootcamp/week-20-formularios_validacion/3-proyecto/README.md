# Proyecto Semana 20 — Formulario de inscripción

## Descripción

El formulario con el que alguien se apunta a una actividad de tu dominio: un taller del planetario, una visita guiada del museo... Pide varios tipos de datos (texto, correo, número, una lista, casillas) y ayuda a rellenarlo bien: cada error aparece junto a su campo cuando toca, con un mensaje que explica qué falta. Un resumen arriba dice cuántos errores quedan. Al enviar, el botón se desactiva hasta que responde el servidor, y si el servidor rechaza un dato (un correo ya inscrito), el error aparece en su campo.

La página, el servidor y `main.js` ya están hechos. El formulario no está escrito en el HTML: `main.js` lo construye a partir de la lista de campos de `src/data.js`. Tu trabajo es escribir las funciones de `src/logic.js` y describir en `data.js` el formulario de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-20
cp -r bootcamp/week-20-formularios_validacion/3-proyecto/starter/. ~/js-proyecto-semana-20/
cd ~/js-proyecto-semana-20
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `server.js` | Un servidor de archivos: sirve la página por `http://` | No |
| `index.html` | El formulario vacío, el resumen de errores y el mensaje de estado; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título, los campos con sus reglas y los correos ya inscritos | Sí: paso 2 |
| `src/logic.js` | Ocho funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | Construye el formulario, escucha los eventos, pinta los errores y simula el servidor | No, pero léelo |

- **Qué:** `logic.js` lee el formulario (`readValues`), comprueba las reglas (`checkField`, `validate`), genera los atributos HTML de cada campo (`toAttributes`), decide qué errores se ven (`createFormState`, `summarize`) y trata el envío y la respuesta (`createSubmitter`, `fromServer`). Ninguna función usa el DOM.
- **Para qué:** las reglas viven en un solo sitio, los datos de `FIELDS`. De ahí salen los atributos del HTML (`required`, `min`, `pattern`) y los mensajes propios, y las mismas funciones podrían validar en un servidor con Node ([teoría 02](../1-teoria/02-validacion-html.md#5-el-navegador-no-es-el-único-que-valida)).
- **Impacto:** `scripts/verificar-semana.sh` prueba cada función con Node, que también tiene `FormData`. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

Lee `src/main.js` mientras trabajas, porque aplica la teoría de esta semana:

- El formulario tiene `novalidate` y cada campo los atributos de `toAttributes`: el navegador elige el teclado, y tu código escribe los mensajes ([teoría 02](../1-teoria/02-validacion-html.md#4-novalidate-tú-decides-cuándo-y-cómo)).
- `check` añade a `validate` el caso que solo conoce el navegador: un número mal escrito, con `validity.badInput` ([teoría 03](../1-teoria/03-constraint-validation.md#1-validity-por-qué-un-campo-no-es-válido)).
- Los listeners de `focusout` e `input` aplican el patrón «al salir del campo y después al escribir» ([lab 04, paso 4](../2-practicas/lab-04-validacion-propia-envio/README.md#paso-4-cuándo-mostrar-cada-error)).
- `send` simula el servidor: tarda 600 ms, rechaza los correos de `TAKEN_EMAILS` y falla «por la red» si algún campo contiene `#sin-red`. En una página real sería un `fetch` ([semana 15](../../week-15-fetch_api/README.md)).

---

## Paso 1: arrancar el servidor y ver la página (5 min)

```bash
node server.js
```

```text
🚀 Página en http://localhost:3000 (Ctrl+C para pararlo)
```

**Qué:** `server.js` sirve los archivos de la carpeta. **Para qué:** `index.html` carga `src/main.js` como módulo (`type="module"`), y el navegador no carga módulos desde un archivo abierto con doble clic. **Impacto:** abre siempre `http://localhost:3000`, no el archivo.

Con el starter se ven el título y los campos, pero sin atributos: `toAttributes` todavía devuelve `undefined`. Al pulsar **Inscribirme**, la consola de las DevTools muestra `Uncaught TypeError: Cannot read properties of undefined (reading 'submit')`: `createFormState` también devuelve `undefined`, y `main.js` intenta usar su `submit`.

Deja el servidor abierto. Cuando cambies un archivo, basta con recargar la página, porque el servidor lee los archivos en cada petición. Usa otra terminal, en la misma carpeta, para los comandos de los pasos 3 a 9.

## Paso 2: tus datos (15 min)

Abre `src/data.js` y describe el formulario de tu dominio, con estas reglas:

- `APP`: `title` (el título de la página), `intro` (una frase que explica para qué es el formulario) y `submitLabel` (el texto del botón).
- `FIELDS`: de 5 a 12 campos. Cada uno con `name` (en `camelCase`, sin repetir), `label` y `type`: `text`, `email`, `number`, `textarea`, `select`, `checkbox` (una casilla) o `checkboxes` (un grupo de casillas).
- Usa al menos 4 tipos distintos, un campo obligatorio (`required: true`) y uno opcional.
- Tiene que haber un campo de tipo `email` que se llame `email`: el servidor simulado lo usa para comprobar los correos ya inscritos.
- Reglas posibles, explicadas al principio de `logic.js`: `minLength` y `maxLength` (texto), `min` y `max` (número), `pattern` (una expresión regular sin `^` ni `$`, siempre con su `patternMessage`), `options` (lista de 2 o más textos, en `select` y `checkboxes`), `minChecked` (en `checkboxes`) y `sameAs` (el `name` de un campo **anterior** que tiene que coincidir).
- `TAKEN_EMAILS`: al menos un correo, en minúsculas, que el servidor simulado dará por ya inscrito.

```js
{ name: 'age', label: 'Edad', type: 'number', required: true, min: 8, max: 99 },
{
  name: 'memberCard',
  label: 'Carné de socio (opcional)',
  type: 'text',
  pattern: 'PL-\\d{4}',
  patternMessage: 'Escribe PL- y cuatro cifras, como PL-0042.',
},
```

`pattern` es un texto: la barra invertida se escribe doble (`'PL-\\d{4}'` es la expresión `PL-\d{4}`).

## Paso 3: `readValues` (10 min)

`readValues(formData, fields)` convierte el `FormData` del formulario en un objeto con una propiedad por campo y con su tipo ([teoría 01](../1-teoria/01-formularios-formdata.md#5-de-formdata-a-un-objeto-con-tipos)): texto sin espacios en los extremos, número o `null`, casilla como booleano y grupo de casillas como array. Los detalles están en el comentario de la función.

```bash
node --input-type=module -e "import { readValues } from './src/logic.js'; import { FIELDS } from './src/data.js'; const data = new FormData(); data.append('fullName', '  Ana Gil  '); data.append('age', '12'); data.append('targets', 'Luna'); data.append('targets', 'Galaxias'); data.append('rules', 'on'); console.log(readValues(data, FIELDS));"
```

```text
{
  fullName: 'Ana Gil',
  email: '',
  confirmEmail: '',
  age: 12,
  session: '',
  targets: [ 'Luna', 'Galaxias' ],
  memberCard: '',
  notes: '',
  rules: true
}
```

Los campos que no están en el `FormData` también aparecen: `''`, `false` o `[]`. Si `age` llegara vacío, sería `null`, no `0`.

## Paso 4: `checkField` (25 min)

`checkField(field, values)` devuelve el primer error de un campo o `null`. Recibe todos los valores, no solo el del campo, porque `sameAs` (paso 5) necesita el de otro. El comentario de la función da el orden de las comprobaciones y el texto exacto de cada mensaje. Fíjate en dos detalles:

- Un campo vacío y opcional no tiene error, aunque tenga más reglas: la función sale antes de mirarlas.
- `pattern` tiene que encajar con el valor entero, como en el HTML: constrúyelo con ``new RegExp(`^(?:${field.pattern})$`)`` ([teoría 04](../1-teoria/04-validacion-propia-envio.md#1-las-reglas-como-datos)). Los paréntesis `(?:...)` hacen falta si el patrón tiene una alternativa, como `a|b`.

```bash
node --input-type=module -e "import { checkField } from './src/logic.js'; import { FIELDS } from './src/data.js'; const [fullName, email, , age, session, targets, memberCard, , rules] = FIELDS; const values = { fullName: 'Al', email: 'ana@planetario', age: 120, session: 'Lunes', targets: [], memberCard: 'PL-12345', rules: false }; for (const field of [fullName, email, age, session, targets, memberCard, rules]) console.log(field.name + ':', checkField(field, values)); console.log('vacío opcional:', checkField(memberCard, { memberCard: '' }));"
```

```text
fullName: Escribe al menos 3 caracteres (llevas 2).
email: Escribe un correo como nombre@ejemplo.com.
age: El máximo es 99.
session: Elige una de las opciones.
targets: Elige al menos 1.
memberCard: Escribe PL- y cuatro cifras, como PL-0042.
rules: Marca esta casilla para continuar.
vacío opcional: null
```

El correo pide un punto en el dominio, así que `ana@planetario` no vale, aunque `type="email"` lo aceptaría ([lab 02, paso 2](../2-practicas/lab-02-validacion-html/README.md#paso-2-correos-y-direcciones)). Las opciones de un `select` también se comprueban: alguien puede cambiar el HTML desde las DevTools.

## Paso 5: `sameAs` y `validate` (10 min)

La última regla de `checkField` es `sameAs`: el valor tiene que ser igual al del campo que indica. Va al final, para que un correo vacío o mal escrito dé su propio error antes que «no coinciden». Después, `validate(fields, values)` aplica `checkField` a cada campo y devuelve `{ valid, errors }`, con los errores en el orden de los campos.

```bash
node --input-type=module -e "import { validate } from './src/logic.js'; import { FIELDS } from './src/data.js'; const values = { fullName: 'Ana Gil', email: 'ana@ejemplo.es', confirmEmail: 'ana@ejemplo.com', age: 12, session: 'Viernes 21:00', targets: ['Luna'], memberCard: '', notes: '', rules: true }; console.log(validate(FIELDS, values)); console.log(validate(FIELDS, { ...values, confirmEmail: 'ana@ejemplo.es' }));"
```

```text
{
  valid: false,
  errors: { confirmEmail: 'Los dos valores no coinciden.' }
}
{ valid: true, errors: {} }
```

## Paso 6: `toAttributes` (10 min)

`toAttributes(field)` devuelve los atributos HTML del control, como textos: `main.js` los pone con `setAttribute`. Así el campo `Edad` lleva `type="number"` (el móvil muestra el teclado numérico) y `min` y `max`, aunque quien valida es tu código. Un grupo de casillas no lleva `required`: el HTML no sabe pedir «al menos una».

```bash
node --input-type=module -e "import { toAttributes } from './src/logic.js'; import { FIELDS } from './src/data.js'; for (const name of ['age', 'targets', 'memberCard']) console.log(toAttributes(FIELDS.find((field) => field.name === name)));"
```

```text
{
  id: 'age',
  name: 'age',
  'aria-describedby': 'age-error',
  type: 'number',
  required: '',
  min: '8',
  max: '99'
}
{ id: 'targets', name: 'targets', 'aria-describedby': 'targets-error' }
{
  id: 'memberCard',
  name: 'memberCard',
  'aria-describedby': 'memberCard-error',
  type: 'text',
  pattern: 'PL-\\d{4}'
}
```

Node muestra la barra invertida doble porque escribe el texto como lo escribirías en el código; el atributo lleva una sola. Recarga la página: ahora aparece el formulario completo. En **Elements** de las DevTools, el campo **Edad** tiene `required`, `min="8"` y `max="99"`.

## Paso 7: `createFormState` y `summarize` (15 min)

`createFormState()` recuerda qué campos ha tocado la persona y si ya intentó enviar, como el `Set` y la variable `submitted` del [lab 04](../2-practicas/lab-04-validacion-propia-envio/README.md#paso-4-cuándo-mostrar-cada-error), pero dentro de una función que devuelve un objeto con métodos: los métodos siguen viendo las variables de `createFormState` después de que termine (un *closure*, como `createStore` en la [semana 19](../../week-19-web_storage_apis/3-proyecto/README.md)). `visible(errors)` filtra los errores que se deben ver ya. `summarize(fields, errors)` prepara las líneas del resumen de arriba, en el orden de los campos.

```bash
node --input-type=module -e "import { createFormState, summarize } from './src/logic.js'; import { FIELDS } from './src/data.js'; const errors = { email: 'Rellena este campo.', fullName: 'Escribe al menos 3 caracteres (llevas 2).' }; const state = createFormState(); console.log(state.visible(errors)); state.touch('fullName'); console.log(state.visible(errors)); state.submit(); console.log(Object.keys(state.visible(errors))); console.log(summarize(FIELDS, errors));"
```

```text
{}
{ fullName: 'Escribe al menos 3 caracteres (llevas 2).' }
[ 'email', 'fullName' ]
[
  {
    name: 'fullName',
    text: 'Nombre y apellidos: Escribe al menos 3 caracteres (llevas 2).'
  },
  { name: 'email', text: 'Correo: Rellena este campo.' }
]
```

`visible` devuelve un objeto nuevo, sin tocar el que recibe. `summarize` ordena por los campos, no por las claves de `errors`: el nombre va antes que el correo.

## Paso 8: `fromServer` (5 min)

`fromServer(response)` convierte la respuesta del servidor en el mismo formato que usa `main.js` para todo: `{ status, errors }`. Los errores del servidor vienen como lista (`[{ field, message }]`) y salen como objeto, igual que los de `validate`. Una respuesta que no se entiende es un error, no un éxito.

```bash
node --input-type=module -e "import { fromServer } from './src/logic.js'; console.log(fromServer({ ok: true })); console.log(fromServer({ ok: false, errors: [{ field: 'email', message: 'Ese correo ya está inscrito.' }] })); console.log(fromServer('500 Internal Server Error'));"
```

```text
{ status: 'ok', errors: {} }
{
  status: 'invalid',
  errors: { email: 'Ese correo ya está inscrito.' }
}
{ status: 'error', errors: {} }
```

## Paso 9: `createSubmitter` (10 min)

`createSubmitter(send)` envuelve la función que envía para que no haya envíos dobles ([teoría 04](../1-teoria/04-validacion-propia-envio.md#4-enviar-una-vez-y-con-respuesta)). Mientras un envío está en marcha, otro intento devuelve `{ status: 'busy' }` sin llamar a `send`. Si `send` lanza (sin red), devuelve `{ status: 'error' }`. En los dos casos, al terminar se puede volver a enviar: usa `finally`.

```bash
node --input-type=module -e "import { createSubmitter } from './src/logic.js'; const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); let calls = 0; const send = async () => { calls += 1; await wait(100); return { ok: true }; }; const submit = createSubmitter(send); const [first, second] = await Promise.all([submit({}), submit({})]); console.log(first, second, 'llamadas:', calls); console.log(await submit({}), 'llamadas:', calls); const broken = createSubmitter(async () => { throw new TypeError('Failed to fetch'); }); console.log(await broken({}));"
```

```text
{ status: 'ok', errors: {} } { status: 'busy', errors: {} } llamadas: 1
{ status: 'ok', errors: {} } llamadas: 2
{ status: 'error', errors: {} }
```

`main.js` también desactiva el botón, pero eso no basta: `Enter` en un campo envía igualmente.

## Paso 10: probar la página y comprobar (15 min)

Recarga `http://localhost:3000`. Con los datos de ejemplo:

1. Pulsa **Inscribirme** sin rellenar nada: arriba aparece **Revisa estos campos** con 7 líneas, de `Nombre y apellidos: Rellena este campo.` a `Acepto las normas del planetario: Marca esta casilla para continuar.`; los 7 campos tienen el borde rojo y el foco está en **Nombre y apellidos**.
2. Pulsa la línea `Edad: Rellena este campo.` del resumen: el foco salta al campo **Edad**.
3. Recarga. Escribe `Al` en el nombre: no aparece ningún error. Pulsa `Tab`: aparece `Escribe al menos 3 caracteres (llevas 2).` Vuelve al campo y escribe otra letra: el error desaparece al instante.
4. Escribe un correo y, en **Repite el correo**, otro distinto. Al salir: `Los dos valores no coinciden.` Corrígelo: desaparece.
5. Escribe `1e` en **Edad** y sal: `Escribe un número.` Cámbialo por `5`: `El mínimo es 8.`
6. Escribe `PL-1` en el carné y sal: `Escribe PL- y cuatro cifras, como PL-0042.` Bórralo: el error desaparece, porque es opcional.
7. Rellena todo bien con el correo `ana@planetario.es` y envía. Durante algo más de medio segundo el botón dice `Enviando…` y no se puede pulsar. Después sale `Revisa los campos marcados.`, el correo tiene el error `Ese correo ya está inscrito.` y el foco va a él. El resto de los datos sigue ahí.
8. Cambia los dos correos por uno nuevo, escribe `#sin-red` en **Comentarios** y envía: `No se pudo enviar. Inténtalo de nuevo: tus datos siguen en el formulario.` Nada se ha borrado.
9. Borra `#sin-red` y envía: `Inscripción enviada. ¡Gracias!`, el formulario se vacía y no queda ningún error ni el resumen.
10. Escribe una letra en el nombre y sal: el error vuelve a aparecer solo en ese campo. El formulario recién vacío no se llena de errores, porque `reset()` olvidó los campos tocados.

La consola de las DevTools no debe mostrar ningún error. Después, haz lo mismo con tus datos.

Repasa `src/logic.js` antes de entregar: borra los `TODO` que queden y comprueba que no usas `var`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-20 ./scripts/verificar-semana.sh 20
# Semana 20 — Formularios y Validación
#   ✅ src/data.js, src/logic.js y src/main.js son módulos ES válidos
#   ...
# 15/15 comprobaciones superadas.
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
| `datos-exports` | `data.js` exporta `APP` (`title`, `intro` y `submitLabel`), de 5 a 12 `FIELDS` con `name` sin repetir, `label` y `type` válidos, un campo `email` de tipo `email`, al menos 4 tipos distintos, uno obligatorio y uno opcional, reglas coherentes (`options`, `pattern`, `sameAs`, `min` y `max`), y `TAKEN_EMAILS` con correos en minúsculas |
| `datos-dominio` | El título, los correos ocupados, las opciones y las etiquetas no son los del ejemplo Planetario |
| `leer` | `readValues` convierte un `FormData`: texto sin espacios en los extremos (`''` si falta), `number` en `null` si está vacío y en `Number` si no, `checkbox` en booleano y `checkboxes` en el array de `getAll` |
| `validar-vacios` | `checkField`: `'Rellena este campo.'` en un campo obligatorio vacío (`''` o `null`) y `null` en uno opcional; casillas con `'Marca esta casilla para continuar.'`, `'Elige al menos N.'` y `'Elige una de las opciones.'` |
| `validar-reglas` | `checkField` comprueba `email`, `minLength` y `maxLength` (con los caracteres que lleva), número no válido, `min`, `max`, `pattern` anclado entero (con `patternMessage` o el mensaje por defecto) y `options` de un `select` |
| `validar-coincide` | `checkField` con `sameAs`: `'Los dos valores no coinciden.'` si el valor es distinto del campo indicado, `null` si coinciden, y primero las demás reglas |
| `validar-todo` | `validate` devuelve `{ valid, errors }` con un mensaje por cada campo con error, en el orden de los campos, y `{ valid: true, errors: {} }` si no hay ninguno |
| `atributos` | `toAttributes` devuelve `id`, `name` y `aria-describedby`, el `type` de `text`, `email`, `number` y `checkbox`, `required` `''` (salvo en `checkboxes`) y `minlength`, `maxlength`, `min`, `max` y `pattern` como texto |
| `estado` | `createFormState` muestra solo los errores de los campos tocados, todos tras `submit()`, en un objeto nuevo, y `reset()` lo olvida todo; cada llamada crea un estado independiente |
| `resumen` | `summarize` devuelve `[{ name, text: 'Etiqueta: mensaje' }]` en el orden de los campos, solo con los que tienen error |
| `servidor` | `fromServer` convierte `{ ok: true }` en `status` `'ok'`, `{ ok: false, errors: [{ field, message }] }` en `status` `'invalid'` con `errors` por campo y cualquier otra respuesta en `status` `'error'` |
| `envio` | `createSubmitter` llama a `send` una sola vez mientras hay un envío en marcha (`status` `'busy'`), devuelve `fromServer` de la respuesta, `'error'` si `send` lanza, y permite un envío nuevo al terminar |

Que los datos sean de tu dominio, que la página funcione y que el código se lea bien lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-20` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Validación propia y envío](../2-practicas/lab-04-validacion-propia-envio/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 20](../README.md)
