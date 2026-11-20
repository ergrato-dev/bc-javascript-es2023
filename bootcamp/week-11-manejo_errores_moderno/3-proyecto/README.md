# Proyecto Semana 11 — Importador de fichas

## Descripción

Una página que importa las piezas de tu dominio desde un texto JSON y las guarda en un servidor simulado. Al pulsar **Importar**, cada pieza se valida por separado: las buenas pasan a la lista y las malas aparecen en **Piezas rechazadas** con el campo y el motivo, sin detener el resto. Si el texto ni siquiera es JSON, la página lo dice con un mensaje claro y la consola guarda el error completo. Al pulsar **Guardar**, la página reintenta cuando el servidor falla por un problema pasajero (503) y se rinde a la primera cuando el servidor rechaza los datos (400). **Intentos** cuenta lo que pasó en cada uno.

La página ya está montada. Tu trabajo es escribir las clases de error y las funciones de `src/logic.js` con lo que has visto esta semana (`extends Error`, `cause`, `try...catch`, `instanceof`, relanzar y reintentar) y cambiar los datos de ejemplo por los de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-11
cp -r bootcamp/week-11-manejo_errores_moderno/3-proyecto/starter/. ~/js-proyecto-semana-11/
cd ~/js-proyecto-semana-11
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | El cuadro de importación, el guardado, los registros y la lista; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título, el prefijo de los ids, las salas y las piezas de ejemplo | Sí: paso 2 |
| `src/logic.js` | Cuatro clases y cinco funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | El código que conecta la página con `logic.js` y simula el servidor | No |

- **Qué:** cada fallo tiene su clase de error. `ValidationError` dice qué campo de una pieza no cumple una regla, `ParseError` que el texto no se pudo leer y `NetworkError` con qué código respondió el servidor. Las tres heredan de `AppError`, que añade `code` y `cause`.
- **Para qué:** la página decide qué hacer según el **tipo** del error, no según su texto: una pieza inválida se apunta y se sigue con la siguiente; un 503 se reintenta; un fallo inesperado (un `TypeError` por un error del programa) no se esconde. `userMessage` traduce cada tipo a un mensaje para la persona que usa la página, y el error técnico completo va a la consola.
- **Impacto:** toda la lógica vive en `logic.js` y no toca el DOM, así `scripts/verificar-semana.sh` la prueba desde Node sin navegador. Ninguna función modifica lo que recibe. Las piezas viven en memoria: al recargar, la lista vuelve a estar vacía. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

---

## Paso 1: ver la página (10 min)

```bash
pnpm dlx serve .
```

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. El cuadro de importación ya trae las piezas de `data.js` y, al final, dos piezas con errores a propósito. Con el starter, **Importar** no hace nada visible y la consola de las DevTools (`F12`, pestaña **Console**) muestra `TypeError: Cannot destructure property 'items' of 'importItems(...)' as it is undefined.`: `importItems` todavía devuelve `undefined`. La importación funciona en el paso 7 y el guardado en el paso 9. Mientras tanto, comprueba cada función con el comando `node` de su paso, que importa tus datos y tu función. Deja el servidor abierto en esa terminal y usa otra para el resto.

## Paso 2: tus datos (10 min)

En `src/data.js` están los datos del dominio Planetario, que es solo un ejemplo. Cámbialos por los de **tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- `ID_PREFIX`: de 2 a 4 letras mayúsculas que abrevien tu dominio (`PLA` para Planetario).
- `ROOMS`: de 3 a 8 salas, zonas o secciones de tu dominio, sin repetir. Son las únicas que acepta el importador.
- El export por defecto: de 5 a 12 piezas sin `id`, con `name` (3 caracteres o más, sin repetir), `room` (una de `ROOMS`) y `value` (un número de 0 o más, sin comillas).

Las salidas de los pasos siguientes son las de los datos de ejemplo; con los tuyos verás tus salas.

## Paso 3: `AppError` (15 min)

La clase base de todos los errores de la aplicación ([lab 02](../2-practicas/lab-02-custom-errors/README.md), pasos 1 y 4). Su constructor recibe el mensaje y un objeto de opciones `{ code, cause }`, con valor por defecto `{}` para poder llamarlo sin opciones:

1. Llama a `super(message, { cause })`: `Error` guarda el mensaje y, si llega, el error original en `cause` ([lab 01](../2-practicas/lab-01-try-catch/README.md), paso 7).
2. Pone `this.name = this.constructor.name`. `this.constructor` es la clase con la que se hizo `new`, así que las subclases del paso 4 reciben su nombre sin escribirlo.
3. Guarda `code`, o `'APP_ERROR'` si no llega (valor por defecto en la desestructuración).

```bash
node --input-type=module -e "import { AppError } from './src/logic.js'; const original = new SyntaxError('Unexpected token'); const error = new AppError('No se pudo leer', { cause: original }); console.log(error.name, '|', error.message, '|', error.code, '|', error.cause.name); console.log(new AppError('Sin opciones').code, error instanceof Error);"
```

```text
AppError | No se pudo leer | APP_ERROR | SyntaxError
APP_ERROR true
```

## Paso 4: las tres subclases (10 min)

Las tres heredan de `AppError` y le pasan su código en las opciones de `super`:

- `ValidationError(field, message)`: `code` `'VALIDATION'` y guarda `field`.
- `ParseError(message, { cause })`: `code` `'PARSE'` y reenvía `cause`. Como en `AppError`, las opciones llevan `{}` por defecto.
- `NetworkError(status)`: mensaje `` `Error de red (${status})` ``, `code` `'NETWORK'` y guarda `status`. Añade un getter `retryable` ([semana 03](../../week-03-clases_programacion_orientada_objetos/README.md)) que devuelve `true` con `status` 0 (sin conexión) o de 500 en adelante (fallo del servidor, que puede arreglarse solo). Un 4xx significa que los datos están mal: repetir la petición no lo arregla.

```bash
node --input-type=module -e "import { ValidationError, ParseError, NetworkError, AppError } from './src/logic.js'; const validation = new ValidationError('name', 'Campo obligatorio'); console.log(validation.name, validation.code, validation.field, validation instanceof AppError); const network = new NetworkError(503); console.log(network.name, network.message, network.retryable, new NetworkError(400).retryable); console.log(new ParseError('Mal', { cause: validation }).cause.field);"
```

```text
ValidationError VALIDATION name true
NetworkError Error de red (503) true false
name
```

## Paso 5: `parseJson` (10 min)

Devuelve `JSON.parse(text)` dentro de un `try`. En el `catch`, lanza `new ParseError('El texto no es JSON válido', { cause: error })`. El mensaje es para la persona que usa la página; el `SyntaxError` original, con la posición exacta del fallo, queda en `cause` para quien depura.

```bash
node --input-type=module -e "import { parseJson } from './src/logic.js'; console.log(parseJson('[{\"name\": \"Mapa\"}]')); try { parseJson('[{ name: Mapa }]'); } catch (error) { console.log(error.name, '|', error.message, '|', error.cause.name, '|', error.cause.message); }"
```

```text
[ { name: 'Mapa' } ]
ParseError | El texto no es JSON válido | SyntaxError | Expected property name or '}' in JSON at position 3 (line 1 column 4)
```

## Paso 6: `validateItem` (15 min)

Comprueba una pieza y lanza un `ValidationError` con el **primer** problema que encuentre, en este orden:

| Problema | `field` | `message` |
|---|---|---|
| `item` no es un objeto: `null`, un array (`Array.isArray`) u otro tipo (`typeof item !== 'object'`) | `item` | `Cada pieza debe ser un objeto` |
| `name` no es texto o, sin espacios en los extremos (`trim()`), queda vacío | `name` | `Campo obligatorio` |
| `name`, sin espacios en los extremos, tiene menos de 3 caracteres | `name` | `Mínimo 3 caracteres` |
| `room` no está en `rooms` (`includes`) | `room` | `Elige una sala válida` |
| `value` no es un número finito (`Number.isFinite`) o es negativo | `value` | `Debe ser un número de 0 o más` |

El primer `if` tiene que ir antes de leer `item.name`: con `null`, esa lectura lanzaría un `TypeError`. Si todo está bien, devuelve un objeto nuevo `{ name, room, value }` con el nombre recortado: así una propiedad de más en el JSON no llega a la lista.

```bash
node --input-type=module -e "import { validateItem } from './src/logic.js'; import { ROOMS } from './src/data.js'; console.log(validateItem({ name: '  Mapa lunar ', room: 'Sala Lunar', value: 3200 }, ROOMS)); for (const item of [null, { name: 'ab', room: 'Cúpula', value: 1 }, { name: 'Mapa', room: 'Garaje', value: 1 }, { name: 'Mapa', room: 'Cúpula', value: '1' }]) { try { validateItem(item, ROOMS); } catch (error) { console.log(error.name, error.field, '|', error.message); } }"
```

```text
{ name: 'Mapa lunar', room: 'Sala Lunar', value: 3200 }
ValidationError item | Cada pieza debe ser un objeto
ValidationError name | Mínimo 3 caracteres
ValidationError room | Elige una sala válida
ValidationError value | Debe ser un número de 0 o más
```

## Paso 7: `importItems` (15 min)

Une las dos funciones anteriores. Es una *error boundary* por elemento, como `safeMap` en el [lab 04](../2-practicas/lab-04-error-patterns/README.md), paso 6:

1. Lee el texto con `parseJson`. Si falla, el `ParseError` sale de la función tal cual: no hay nada que importar.
2. Si el resultado no es un array, lanza `new ParseError('Se esperaba una lista de piezas')`.
3. Recorre el array con su índice (`forEach((item, index) => ...)`). Cada `validateItem` va en su propio `try`: si sale bien, la pieza va a `items`; si lanza un `ValidationError`, apunta `{ index, field, message }` en `errors` y sigue con la siguiente.
4. Si el error **no** es un `ValidationError` (`instanceof`), relánzalo con `throw error`. No es un dato malo sino un fallo del programa, y tragárselo lo escondería.

Devuelve `{ items, errors }`.

```bash
node --input-type=module -e "import { importItems } from './src/logic.js'; import { ROOMS } from './src/data.js'; const text = JSON.stringify([{ name: 'Mapa lunar', room: 'Sala Lunar', value: 3200 }, { name: '', room: 'Cúpula', value: 10 }, { name: 'Reloj de sol', room: 'Garaje', value: 6400 }]); console.log(importItems(text, ROOMS)); try { importItems('{ \"name\": \"Mapa\" }', ROOMS); } catch (error) { console.log(error.name, '|', error.message); }"
```

```text
{
  items: [ { name: 'Mapa lunar', room: 'Sala Lunar', value: 3200 } ],
  errors: [
    { index: 1, field: 'name', message: 'Campo obligatorio' },
    { index: 2, field: 'room', message: 'Elige una sala válida' }
  ]
}
ParseError | Se esperaba una lista de piezas
```

Recarga la página y pulsa **Importar**: entran las 6 piezas de ejemplo (`98300 €`) y **Piezas rechazadas** muestra `Pieza 7 · name: Campo obligatorio` y `Pieza 8 · room: Elige una sala válida`. Borra una coma del cuadro e importa otra vez: la consola muestra el `ParseError`, pero debajo del botón todavía no sale ningún mensaje. Llega en el paso 9.

## Paso 8: `retry` (15 min)

Una función `async` que llama a `fn(intento)` hasta `attempts` veces ([lab 04](../2-practicas/lab-04-error-patterns/README.md), paso 3):

- Si `await fn(attempt)` sale bien, devuelve su resultado.
- Si falla, relanza el error cuando no se puede reintentar (`error.retryable !== true`) o era el último intento.
- Si no, llama a `onError(error, attempt)`, que la página usa para escribir **Intentos**, y vuelve a probar.

La comparación `!== true` hace que cualquier error sin `retryable`, como un `TypeError`, se relance a la primera.

```bash
node --input-type=module -e "import { retry, NetworkError } from './src/logic.js'; const flaky = async (attempt) => { if (attempt < 3) throw new NetworkError(503); return 'guardado en el intento ' + attempt; }; console.log(await retry(flaky, 3, (error, attempt) => console.log('onError:', attempt, error.message))); try { await retry(async () => { throw new NetworkError(400); }, 3, () => console.log('no se llama')); } catch (error) { console.log('sin reintentos:', error.message); }"
```

```text
onError: 1 Error de red (503)
onError: 2 Error de red (503)
guardado en el intento 3
sin reintentos: Error de red (400)
```

## Paso 9: `userMessage` (10 min)

Traduce un error a un mensaje para la persona que usa la página. Comprueba el tipo con `instanceof`:

| Error | Mensaje |
|---|---|
| `ValidationError` | `` `Revisa el campo ${field}: ${message}` `` |
| `ParseError` | su `message` |
| `NetworkError` con `retryable` | `El servidor no responde. Inténtalo más tarde.` |
| `NetworkError` sin `retryable` | `` `El servidor rechazó los datos (${status})` `` |
| Cualquier otro | `Algo salió mal. Inténtalo de nuevo.` |

El último caso es importante: el mensaje de un `TypeError` (`x is undefined`) no le sirve a nadie que no sea quien programa.

```bash
node --input-type=module -e "import { userMessage, ValidationError, ParseError, NetworkError } from './src/logic.js'; for (const error of [new ValidationError('room', 'Elige una sala válida'), new ParseError('El texto no es JSON válido'), new NetworkError(503), new NetworkError(400), new TypeError('x is undefined')]) console.log(userMessage(error));"
```

```text
Revisa el campo room: Elige una sala válida
El texto no es JSON válido
El servidor no responde. Inténtalo más tarde.
El servidor rechazó los datos (400)
Algo salió mal. Inténtalo de nuevo.
```

## Paso 10: probar la página y comprobar (10 min)

Recarga la página. Ahora todo funciona:

1. **Importar**: entran tus piezas y salen las dos rechazadas. Rompe el JSON e importa: sale `El texto no es JSON válido` y la consola muestra el `ParseError` con su `cause`.
2. **Guardar** con el servidor **Estable**: `Intento 1: guardado.`
3. **Inestable**: dos intentos con `Error de red (503). Se reintenta.` y el tercero guarda.
4. **Caído**: tres intentos y `✖ El servidor no responde. Inténtalo más tarde.`
5. **Rechaza los datos**: un solo intento y `✖ El servidor rechazó los datos (400)`. Mientras guarda, el botón está desactivado; el `finally` de `main.js` lo reactiva pase lo que pase.

Borra los `TODO` que queden en `src/logic.js`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-11 ./scripts/verificar-semana.sh 11
# Semana 11 — Manejo de Errores Moderno
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
| `datos-exports` | `data.js` exporta `TITLE`, `ID_PREFIX` de 2 a 4 mayúsculas, de 3 a 8 salas sin repetir y por defecto de 5 a 12 piezas sin `id`, con nombre de 3 o más caracteres sin repetir, una sala de `ROOMS` y valor numérico de 0 o más |
| `datos-dominio` | El título, el prefijo, las salas y las piezas no son los del ejemplo Planetario |
| `app-error` | `AppError` hereda de `Error`, toma el `name` de su clase, guarda `code` (`APP_ERROR` por defecto) y `cause` |
| `subclases` | `ValidationError`, `ParseError` y `NetworkError` heredan de `AppError` con su `code`, `field`, `cause`, `status` y `retryable` |
| `parse-json` | `parseJson` devuelve el JSON leído o lanza `ParseError` con el `SyntaxError` original como `cause` |
| `validate-ok` | `validateItem` devuelve una copia `{ name, room, value }` con el nombre recortado, sin modificar la pieza |
| `validate-errores` | `validateItem` lanza `ValidationError` con el campo y el mensaje del primer problema |
| `import-items` | `importItems` separa las piezas válidas de las rechazadas (`{ index, field, message }`) y lanza `ParseError` si el texto no es JSON o no es una lista |
| `import-relanza` | `importItems` solo captura `ValidationError`: cualquier otro error se relanza |
| `retry` | `retry` repite `fn` mientras el error sea reintentable y queden intentos, avisa con `onError` y relanza el resto |
| `user-message` | `userMessage` traduce cada tipo de error a un mensaje para el usuario |

Que los datos sean de tu dominio y que la página funcione lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-11` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Patrones de manejo de errores](../2-practicas/lab-04-error-patterns/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 11](../README.md)
