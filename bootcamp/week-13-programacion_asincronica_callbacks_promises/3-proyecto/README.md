# Proyecto Semana 13 — Panel de servicios

## Descripción

Un panel que consulta los servicios de tu dominio (una taquilla, un inventario, unos sensores...) y muestra cuáles responden. Los servicios son simulados: cada uno tarda unos milisegundos en contestar y responde bien o no responde. El panel los consulta de cinco formas, y cada una enseña una herramienta de la semana: uno a uno con callbacks, en orden con una cadena de `.then()`, todos a la vez con `Promise.all`, un informe con `Promise.allSettled` y el primero que conteste con `Promise.any`. Un campo de tiempo límite usa `Promise.race` para no esperar de más.

La página ya está montada. Tu trabajo es escribir las siete funciones de `src/logic.js` y cambiar los servicios de ejemplo por los de tu dominio. Esta semana solo callbacks y promesas: `async`/`await` llega en la semana 14, y las comprobaciones no lo admiten.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-13
cp -r bootcamp/week-13-programacion_asincronica_callbacks_promises/3-proyecto/starter/. ~/js-proyecto-semana-13/
cd ~/js-proyecto-semana-13
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | El formulario de consulta, el registro y la lista de servicios; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título y los servicios de ejemplo | Sí: paso 2 |
| `src/logic.js` | Siete funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | El código que conecta la página con `logic.js` | No |

- **Qué:** `requestWithCallback` es la única función que toca un temporizador. `request` la convierte en promesa, y las otras cinco se construyen sobre `request`.
- **Para qué:** cada modo del panel cambia solo cómo se combinan las consultas, no cómo se hace una. Es el patrón del [lab 02](../2-practicas/lab-02-promises-basicas/README.md), paso 7: envolver una vez la función con callback y usar promesas en todo lo demás.
- **Impacto:** `logic.js` no toca el DOM, así `scripts/verificar-semana.sh` la prueba desde Node sin navegador. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

---

## Paso 1: ver la página (10 min)

```bash
pnpm dlx serve .
```

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. Con el starter, la página muestra los cinco servicios de ejemplo, pero ninguna consulta funciona. En el modo **Uno a uno con callbacks**, **Consultar** deja todas las tarjetas en `⏳ Consultando...` para siempre, porque `requestWithCallback` todavía no llama al callback. En los demás modos, la consola de las DevTools (`F12`, pestaña **Console**) muestra `TypeError: Cannot read properties of undefined (reading 'then')`, porque las funciones aún no devuelven promesas. Recarga la página para volver a probar.

Cada modo empieza a funcionar al terminar su paso. Mientras tanto, comprueba cada función con el comando `node` de su paso. Deja el servidor abierto en esa terminal y usa otra para el resto.

## Paso 2: tus datos (15 min)

En `src/data.js` están los datos del dominio Planetario, que es solo un ejemplo. Cámbialos por los de **tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- El export por defecto: de 4 a 8 servicios de tu dominio, cada uno con `name` (3 caracteres o más, sin repetir), `delay` (un entero de 50 a 3000: los milisegundos que tarda en responder), `available` (`true` o `false`) y `result` (el texto que devuelve cuando responde). Al menos uno tiene que estar disponible y otro no, para ver los dos casos.

Usa retrasos distintos entre sí: así se nota en qué orden responden. Las salidas de los pasos siguientes son las de los datos de ejemplo; con los tuyos verás tus servicios y tus tiempos.

## Paso 3: `requestWithCallback` (15 min)

Un callback *error-first* ([lab 01](../2-practicas/lab-01-callbacks/README.md), paso 6). Con `setTimeout` espera `service.delay` milisegundos y entonces llama a `callback(null, service.result)` si el servicio está disponible, o a `callback(new Error(...))` con el mensaje `` `${service.name}: sin respuesta` `` si no.

```bash
node --input-type=module -e "import services from './src/data.js'; import { requestWithCallback } from './src/logic.js'; const start = performance.now(); services.forEach((service) => requestWithCallback(service, (error, result) => console.log(Math.round((performance.now() - start) / 100) * 100, 'ms', error ? '❌ ' + error.message : '✅ ' + result))); console.log('Consultas lanzadas');"
```

```text
Consultas lanzadas
400 ms ✅ 6 sesiones hoy
600 ms ✅ 12 pedidos pendientes
900 ms ✅ 23 butacas libres
1200 ms ✅ Actividad solar baja
1500 ms ❌ Observatorio remoto: sin respuesta
```

`Consultas lanzadas` sale primero: `forEach` programa los cinco temporizadores y termina. Las respuestas llegan por orden de retraso, no en el orden de la lista. El comando redondea el tiempo a la centena porque cada ejecución varía unos pocos milisegundos.

Ahora el modo **Uno a uno con callbacks** funciona: cada tarjeta cambia cuando responde su servicio, y el registro apunta cuándo.

## Paso 4: `request` (15 min)

La misma consulta, pero devuelve una promesa ([lab 02](../2-practicas/lab-02-promises-basicas/README.md), paso 7): crea un `new Promise((resolve, reject) => ...)` y dentro llama a `requestWithCallback` con un callback que pasa el error a `reject` o el resultado a `resolve`.

```bash
node --input-type=module -e "import services from './src/data.js'; import { request } from './src/logic.js'; const pending = request(services[0]); console.log(pending); pending.then((result) => console.log('✅', result)); request(services[2]).catch((error) => console.log('❌', error.message));"
```

```text
Promise { <pending> }
✅ 6 sesiones hoy
❌ Observatorio remoto: sin respuesta
```

## Paso 5: `requestInSequence` (25 min)

Consulta los servicios uno detrás de otro: cada consulta empieza cuando termina la anterior, como la cadena del [lab 03](../2-practicas/lab-03-promise-chaining/README.md), paso 2, pero con una lista de cualquier longitud.

1. Empieza con una promesa ya cumplida con un array vacío: `Promise.resolve([])`.
2. Recorre los servicios con `reduce` ([semana 05](../../week-05-arrays_avanzados/README.md)). El acumulador es la cadena hasta ahora. Para cada servicio, devuelve `chain.then((results) => ...)`: dentro, llama a `request(service)` y, con otro `.then()`, devuelve un array nuevo con lo anterior más el resultado: `[...results, result]`.
3. No olvides los `return` (o usa arrow functions sin llaves): sin ellos, la cadena no espera ([lab 03](../2-practicas/lab-03-promise-chaining/README.md), paso 5).

Si un servicio falla, su rechazo salta todos los `.then()` que quedan y los servicios siguientes no se llegan a consultar.

```bash
node --input-type=module -e "import services from './src/data.js'; import { requestInSequence } from './src/logic.js'; let start = performance.now(); const took = () => Math.round((performance.now() - start) / 100) * 100 + ' ms'; requestInSequence(services.slice(0, 2)).then((results) => { console.log(took(), results); start = performance.now(); return requestInSequence(services); }).catch((error) => console.log(took(), '❌', error.message));"
```

```text
1300 ms [ '6 sesiones hoy', '23 butacas libres' ]
2800 ms ❌ Observatorio remoto: sin respuesta
```

Los dos primeros tardan 400 + 900 ms. La lista completa falla en el tercero, a los 400 + 900 + 1500 ms, y la tienda y el clima no se consultan.

## Paso 6: `requestAll` (10 min)

Todos a la vez con `Promise.all` ([lab 04](../2-practicas/lab-04-promise-combinators/README.md), pasos 1 y 2): convierte cada servicio en su promesa con `services.map(request)` y pásale el array.

```bash
node --input-type=module -e "import services from './src/data.js'; import { requestAll } from './src/logic.js'; let start = performance.now(); const took = () => Math.round((performance.now() - start) / 100) * 100 + ' ms'; requestAll(services.filter(({ available }) => available)).then((results) => { console.log(took(), results); start = performance.now(); return requestAll(services); }).catch((error) => console.log(took(), '❌', error.message));"
```

```text
1200 ms [
  '6 sesiones hoy',
  '23 butacas libres',
  '12 pedidos pendientes',
  'Actividad solar baja'
]
1500 ms ❌ Observatorio remoto: sin respuesta
```

Los cuatro disponibles tardan lo que el más lento (1200 ms), no la suma, y los resultados salen en el orden de la lista. Con el servicio caído, `Promise.all` se rechaza y pierdes los otros cuatro resultados.

## Paso 7: `requestReport` (15 min)

Un informe con `Promise.allSettled` ([lab 04](../2-practicas/lab-04-promise-combinators/README.md), paso 5), que nunca se rechaza. Encadena un `.then()` que convierta cada resultado con `map((outcome, index) => ...)` en `{ name, ok, text }`: `name` sale de `services[index]`, `ok` es `outcome.status === 'fulfilled'` y `text` es `outcome.value` o `outcome.reason.message`.

```bash
node --input-type=module -e "import services from './src/data.js'; import { requestReport } from './src/logic.js'; requestReport(services).then((report) => console.log(report));"
```

```text
[
  { name: 'Cartelera de sesiones', ok: true, text: '6 sesiones hoy' },
  { name: 'Reservas de cúpula', ok: true, text: '23 butacas libres' },
  {
    name: 'Observatorio remoto',
    ok: false,
    text: 'Observatorio remoto: sin respuesta'
  },
  {
    name: 'Tienda de recuerdos',
    ok: true,
    text: '12 pedidos pendientes'
  },
  { name: 'Clima espacial', ok: true, text: 'Actividad solar baja' }
]
```

## Paso 8: `requestFirst` (10 min)

El primer servicio que responda bien, con `Promise.any` ([lab 04](../2-practicas/lab-04-promise-combinators/README.md), paso 6). Si fallan todos, `Promise.any` se rechaza con un `AggregateError` cuyo mensaje (`All promises were rejected`) no dice nada al usuario. Añade un `.catch((error) => ...)` que lance `new Error('Ningún servicio respondió', { cause: error })`: el mensaje es para la página, y el `AggregateError` queda en `cause` para quien depure ([semana 11](../../week-11-manejo_errores_moderno/README.md)). Un `throw` dentro de un `.catch()` rechaza la promesa que devuelve.

```bash
node --input-type=module -e "import services from './src/data.js'; import { requestFirst } from './src/logic.js'; requestFirst(services).then((result) => console.log('✅', result)); requestFirst(services.filter(({ available }) => !available)).catch((error) => console.log('❌', error.message, '·', error.cause.name, error.cause.errors.length));"
```

```text
✅ 6 sesiones hoy
❌ Ningún servicio respondió · AggregateError 1
```

## Paso 9: `withTimeout` (10 min)

Un tiempo límite con `Promise.race` ([lab 04](../2-practicas/lab-04-promise-combinators/README.md), paso 4): haz competir `promise` con una promesa nueva que se rechace pasados `ms` milisegundos con `` new Error(`Tiempo agotado: ${ms} ms`) ``.

```bash
node --input-type=module -e "import services from './src/data.js'; import { requestAll, withTimeout } from './src/logic.js'; const available = services.filter(({ available }) => available); withTimeout(requestAll(available), 2000).then((results) => console.log('✅', results.length, 'resultados')); withTimeout(requestAll(available), 1000).catch((error) => console.log('❌', error.message));"
```

```text
❌ Tiempo agotado: 1000 ms
✅ 4 resultados
```

Las dos consultas tardan 1200 ms. Con un límite de 1000 ms gana el temporizador, a los 1000 ms; con 2000 ms gana la consulta. La consulta que pierde la carrera no se cancela: sigue en marcha y su resultado se ignora.

## Paso 10: probar la página y comprobar (20 min)

Recarga la página. Ahora funcionan los cinco modos:

1. **Uno a uno con callbacks**: las tarjetas cambian en el orden en que responden y el registro apunta el tiempo de cada una. Al final sale `✔ 4 de 5 servicios respondieron` (con tus datos, tus números).
2. **En orden**: falla al llegar al primer servicio caído, con su mensaje. Desmarca **Disponible** en los servicios caídos y repite: ahora tarda la suma de todos los retrasos.
3. **Todos a la vez**: falla en cuanto falla uno; con todos disponibles, tarda lo que el más lento.
4. **Informe**: siempre termina, con ✅ o ❌ en cada tarjeta.
5. **El primero que responda**: muestra el resultado del más rápido de los disponibles. Desmarca todos y sale `✖ Ningún servicio respondió`.
6. Pon un tiempo límite menor que el retraso de algún servicio y repite **Todos a la vez**: sale `✖ Tiempo agotado: <ms> ms`.

Repasa `src/logic.js` antes de entregar. Borra los `TODO` que queden y comprueba que no usas `var`, `async` ni `await`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-13 ./scripts/verificar-semana.sh 13
# Semana 13 — Programación Asincrónica - Callbacks y Promises
#   ✅ src/data.js, src/logic.js y src/main.js son módulos ES válidos
#   ...
# 13/13 comprobaciones superadas.
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
| `sin-async-await` | `src/logic.js` usa callbacks y promesas, sin `async` ni `await` fuera de los comentarios |
| `datos-exports` | `data.js` exporta `TITLE` y por defecto de 4 a 8 servicios con nombre de 3 o más caracteres sin repetir, `delay` entero de 50 a 3000, `available` booleano (al menos uno `true` y uno `false`) y `result` de texto |
| `datos-dominio` | El título y los servicios no son los del ejemplo Planetario |
| `callback` | `requestWithCallback` llama al callback pasados `delay` ms (nunca antes), con `(null, result)` o con un `Error` «`<nombre>: sin respuesta`» |
| `request` | `request` devuelve una promesa que se cumple con `result` o se rechaza con el error del servicio |
| `secuencia` | `requestInSequence` consulta uno detrás de otro, devuelve los resultados en orden, se detiene en el primer fallo sin consultar los siguientes y con `[]` se cumple con `[]` |
| `todos` | `requestAll` consulta todos a la vez, con los resultados en el orden de la lista, o se rechaza con el primer error |
| `informe` | `requestReport` devuelve `{ name, ok, text }` por servicio, en orden, aunque alguno falle |
| `primero` | `requestFirst` devuelve el primer resultado bueno y, si fallan todos, un `Error` «Ningún servicio respondió» con el `AggregateError` como `cause` |
| `tiempo-limite` | `withTimeout` deja pasar el resultado o el error si llegan a tiempo y, si no, se rechaza con «Tiempo agotado: `<ms>` ms» |

Que los datos sean de tu dominio, que la página funcione y que el código se lea bien lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-13` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Combinadores de promesas](../2-practicas/lab-04-promise-combinators/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 13](../README.md)
