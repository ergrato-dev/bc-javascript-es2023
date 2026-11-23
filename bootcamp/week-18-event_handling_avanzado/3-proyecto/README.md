# Proyecto Semana 18 — Centro de avisos

## Descripción

Una página con los avisos del día de tu dominio (las incidencias de una biblioteca, los cambios de horario de un gimnasio...). Puedes marcarlos como leídos, fijarlos arriba, cerrarlos, añadir avisos nuevos y moverte por ellos con el teclado. Un registro lateral muestra cada evento que pasa por la página, y un aviso fijado no se deja cerrar.

Los botones no tienen listeners propios. Un listener en la lista y otro en la barra de herramientas atienden todos los clics por **delegación**, también los de los avisos que se crean después. Cada acción se anuncia con un **evento propio** cancelable (`notice:dismiss`, `notice:pin`...) en un bus de eventos: cualquier parte del código puede escucharlo, y vetarlo con `preventDefault`.

La página, el servidor y `main.js` ya están hechos. Tu trabajo es escribir las funciones de `src/logic.js` y cambiar los avisos de ejemplo por los de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-18
cp -r bootcamp/week-18-event_handling_avanzado/3-proyecto/starter/. ~/js-proyecto-semana-18/
cd ~/js-proyecto-semana-18
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `server.js` | Un servidor de archivos: sirve la página por `http://` | No |
| `index.html` | El formulario, la barra, la lista y el registro de eventos; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título y los avisos de ejemplo | Sí: paso 2 |
| `src/logic.js` | Ocho funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | Los listeners, el veto de los fijados, el registro y el render | No, pero léelo |

- **Qué:** `logic.js` interpreta lo que llega de los eventos (`parseAction` con un botón, `shortcutFor` con una tecla), calcula el resultado (`applyAction`, `summarize`, `sortNotices`, `nextIndex`) y crea los eventos propios (`createNoticeEvent`, `createBus`). `main.js` pone los listeners y toca el DOM.
- **Para qué:** un listener que solo traduce el evento y llama a funciones puras se lee de un vistazo, y esas funciones se prueban sin navegador.
- **Impacto:** `scripts/verificar-semana.sh` prueba cada función con Node, que también tiene `EventTarget`, `Event` y `CustomEvent`. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

Lee `src/main.js` mientras trabajas, porque aplica la teoría de esta semana:

- `run` lanza el evento propio y solo aplica la acción si nadie la veta ([lab 04, paso 5](../2-practicas/lab-04-acciones-eventos-propios/README.md#paso-5-un-evento-que-se-puede-vetar)).
- `actionFromClick` es la delegación del [lab 03](../2-practicas/lab-03-delegacion/README.md), con `closest` y `contains`.
- El listener de `focusin` recuerda qué aviso tiene el foco.
- Los atajos escuchan `keydown` en `document`.

---

## Paso 1: arrancar el servidor y ver la página (5 min)

```bash
node server.js
```

```text
🚀 Página en http://localhost:3000 (Ctrl+C para pararlo)
```

**Qué:** `server.js` sirve los archivos de la carpeta. **Para qué:** `index.html` carga `src/main.js` como módulo (`type="module"`), y el navegador no carga módulos desde un archivo abierto con doble clic. **Impacto:** abre siempre `http://localhost:3000`, no el archivo.

Con el starter solo se ven el título, el formulario y la barra, sin avisos. La consola de las DevTools muestra el error `Uncaught TypeError: Cannot read properties of undefined (reading 'on')`: `createBus` todavía devuelve `undefined`, y `main.js` intenta usar su `on`.

Deja el servidor abierto. Cuando cambies un archivo, basta con recargar la página, porque el servidor lee los archivos en cada petición. Usa otra terminal, en la misma carpeta, para los comandos de los pasos 3 a 9.

## Paso 2: tus datos (10 min)

Abre `src/data.js` y cambia el título y los avisos del Planetario por los de tu dominio, con estas reglas:

- De 6 a 12 avisos.
- `id`: entero positivo, sin repetir.
- `title`: 5 caracteres o más, sin repetir (sin distinguir mayúsculas).
- `level`: `'info'`, `'aviso'` o `'urgente'`. Usa al menos 2 niveles distintos.
- `read` y `pinned`: `true` o `false`. Al menos 1 aviso fijado, 2 leídos y 2 sin leer.

```js
export const TITLE = 'Planetario: avisos de la cúpula';

const NOTICES = [
  { id: 1, title: 'Sesión de las 18:00 completa', level: 'info', read: true, pinned: false },
  // ...
];
```

## Paso 3: `parseAction` (15 min)

Cuando el listener de la lista recibe un clic, encuentra el botón con `closest` y llama a `parseAction` con `{ action, id }`: el `data-action` del botón y el `data-id` de su aviso. Los dos llegan como texto, porque `dataset` siempre guarda texto ([semana 17](../../week-17-dom_manipulation_moderna/1-teoria/01-arbol-seleccion.md)). `parseAction` decide si es una acción válida:

- Si `action` está en `LIST_ACTIONS` (los botones de la barra), devuelve `{ type, id: null }`, sin mirar el id.
- Si está en `NOTICE_ACTIONS`, necesita un id: `Number(id)` tiene que ser un entero positivo (`Number.isInteger`). Cuidado: `Number('')` es `0`.
- Cualquier otro caso, `null`. `main.js` no hace nada con `null`.

`includes` sobre los arrays de acciones evita el problema del `toString` del [lab 03](../2-practicas/lab-03-delegacion/README.md#paso-5-una-tabla-de-acciones): un `data-action="toString"` no está en ninguno de los dos.

```bash
node --input-type=module -e "import { parseAction } from './src/logic.js'; console.log(parseAction({ action: 'pin', id: '3' })); console.log(parseAction({ action: 'read-all' })); console.log(parseAction({ action: 'pin', id: '' }), parseAction({ action: 'archive', id: '3' }));"
```

```text
{ type: 'pin', id: 3 }
{ type: 'read-all', id: null }
null null
```

## Paso 4: `applyAction` (20 min)

`applyAction(notices, action)` devuelve la lista nueva sin modificar la que recibe. Con un `switch` sobre `action.type`:

- `toggle-read` y `pin`: `map` que copia con *spread* el aviso del id pedido y le cambia `read` o `pinned` por su contrario. Los demás avisos se devuelven tal cual, sin copiarlos.
- `dismiss`: `filter` sin ese id.
- `read-all`: todos con `read: true`.
- `clear-read`: quita los leídos, salvo los fijados.
- `add`: la lista con `action.notice` al final.
- Cualquier otra acción: la misma lista que recibe.

El veto de los fijados no está aquí: es un listener de `main.js`. `applyAction` cierra el aviso que le pidan; quien decide si se puede es el bus.

```bash
node --input-type=module -e "import { applyAction } from './src/logic.js'; import notices from './src/data.js'; const after = applyAction(notices, { type: 'toggle-read', id: 3 }); console.log(after.find(({ id }) => id === 3).read, notices.find(({ id }) => id === 3).read); console.log(applyAction(notices, { type: 'clear-read', id: null }).map(({ id }) => id));"
```

```text
true false
[ 2, 3, 4, 6, 7 ]
```

El aviso 3 pasa a leído en la lista nueva y sigue sin leer en la original. `clear-read` deja los no leídos y el 7, que está leído pero fijado. Las salidas de los pasos 4 y 5 son las de los datos del Planetario: con los tuyos cambian los números.

## Paso 5: `summarize` y `sortNotices` (15 min)

`summarize` cuenta los avisos para la línea de arriba de la página: `total`, `unread` (sin leer), `pinned` (fijados) y `urgent`, que son los urgentes **sin leer**.

`sortNotices` decide el orden de la lista, sin modificarla (`toSorted`, semana 05): primero los fijados, después los no leídos y, dentro de cada grupo, el id más alto primero, que es el aviso más reciente. Para comparar booleanos, `Number(true)` es `1` y `Number(false)`, `0`; y `||` encadena los criterios, porque una resta que da `0` es *falsy* y pasa al siguiente.

```bash
node --input-type=module -e "import { summarize, sortNotices } from './src/logic.js'; import notices from './src/data.js'; console.log(summarize(notices)); console.log(sortNotices(notices).map(({ id }) => id).join(' '));"
```

```text
{ total: 8, unread: 4, pinned: 2, urgent: 1 }
2 7 6 4 3 8 5 1
```

## Paso 6: `shortcutFor` (10 min)

El listener de `keydown` de `main.js` llama a `shortcutFor` con las propiedades del evento que importan: `key`, `ctrlKey`, `metaKey`, `altKey` e `inField`, que dice si la tecla se pulsó escribiendo en el formulario. La acción de cada tecla está en `SHORTCUTS`, ya escrito en `logic.js`.

- Devuelve `null` si `inField` es `true`: si no, escribir una `x` en el texto de un aviso nuevo cerraría otro aviso.
- Devuelve `null` con Ctrl, Meta (`Cmd` en macOS) o Alt: `Ctrl+R` es recargar, y no hay que quitárselo al navegador. Mayúsculas sí vale.
- Las teclas de un solo carácter valen en mayúscula y en minúscula: `R` es `r`. Las demás (`ArrowDown`, `Delete`) se comparan tal cual.
- Busca con `Object.hasOwn`, como la tabla de acciones del lab 03.

```bash
node --input-type=module -e "import { shortcutFor } from './src/logic.js'; const keys = [{ key: 'R' }, { key: 'ArrowDown' }, { key: 'r', ctrlKey: true }, { key: 'x', inField: true }, { key: 'q' }]; console.log(keys.map((press) => shortcutFor(press)));"
```

```text
[ 'toggle-read', 'next', null, null, null ]
```

## Paso 7: `nextIndex` (5 min)

`nextIndex(current, length, step)` calcula a qué aviso mover el foco con `j` y `k`. `step` es `1` o `-1`, y la lista da la vuelta: después del último va el primero. `current` es `-1` cuando ningún aviso tiene el foco, y entonces `1` va al primero y `-1`, al último. Con la lista vacía, `-1`. El resto de la división, `%`, da la vuelta si antes sumas `length` para no tener un número negativo.

```bash
node --input-type=module -e "import { nextIndex } from './src/logic.js'; console.log(nextIndex(2, 3, 1), nextIndex(0, 3, -1), nextIndex(-1, 3, 1), nextIndex(-1, 3, -1), nextIndex(-1, 0, 1));"
```

```text
0 2 0 2 -1
```

## Paso 8: `createNoticeEvent` (10 min)

`createNoticeEvent(type, detail)` crea el evento propio de una acción: un `CustomEvent` llamado `notice:` más el tipo, con `bubbles: true` y `cancelable: true` ([lab 04](../2-practicas/lab-04-acciones-eventos-propios/README.md#paso-4-customevent-detail-y-bubbles)). En `detail` va una copia de `detail` congelada con `Object.freeze`, para que ningún listener pueda cambiar los datos que verán los siguientes. Sin `detail`, la copia es un objeto vacío.

```bash
node --input-type=module -e "import { createNoticeEvent } from './src/logic.js'; const event = createNoticeEvent('pin', { id: 3 }); console.log(event.type, event.bubbles, event.cancelable, event.detail, Object.isFrozen(event.detail));"
```

```text
notice:pin true true { id: 3 } true
```

## Paso 9: `createBus` (15 min)

`createBus()` crea un `EventTarget` propio ([lab 04, paso 6](../2-practicas/lab-04-acciones-eventos-propios/README.md#paso-6-un-eventtarget-sin-elemento)) y devuelve un objeto con dos funciones que lo envuelven:

- `on(type, handler, options)` añade `handler` como listener de `notice:${type}`. Pasa las `options` (por ejemplo `{ once: true }`) junto con la `signal` de un `AbortController` nuevo, y devuelve una función que llama a `abort()` para quitar ese listener ([lab 01, paso 5](../2-practicas/lab-01-escuchar-eventos/README.md#paso-5-quitar-varios-listeners-con-signal)).
- `emit(type, detail)` lanza `createNoticeEvent(type, detail)` y devuelve lo que devuelve `dispatchEvent`: `false` si algún listener llamó a `preventDefault`.

```bash
node --input-type=module -e "import { createBus } from './src/logic.js'; const bus = createBus(); bus.on('dismiss', (event) => { if (event.detail.id === 2) event.preventDefault(); }); const off = bus.on('dismiss', (event) => console.log('oído:', event.type, event.detail.id)); console.log(bus.emit('dismiss', { id: 1 })); console.log(bus.emit('dismiss', { id: 2 })); off(); console.log(bus.emit('dismiss', { id: 3 }));"
```

```text
oído: notice:dismiss 1
true
oído: notice:dismiss 2
false
true
```

El primer listener veta el aviso 2, y el segundo lo oye igual: `preventDefault` cancela la acción, no la propagación. Tras `off()`, el aviso 3 ya no se oye.

## Paso 10: probar la página y comprobar (15 min)

Recarga `http://localhost:3000`. Con los datos de ejemplo:

1. Al cargar: `Avisos: 8 · sin leer: 4 · fijados: 2 · urgentes sin leer: 1`. Arriba, los dos fijados (el telescopio y el corte de luz), y al final los leídos. El registro está vacío.
2. **Marcar leído** en el taller de constelaciones: baja con los leídos, `sin leer: 3`, y el registro muestra `notice:toggle-read #6`.
3. **Cerrar** en el telescopio: no se cierra. Sale `«Telescopio 2 en mantenimiento hasta el lunes» está fijado: suéltalo antes de cerrarlo.` y el registro añade `notice:dismiss #2 · vetado`, en rojo.
4. **Soltar** en el telescopio: deja de estar arriba, `fijados: 1`, y el mensaje desaparece.
5. Haz clic en el título de la página y pulsa `j` dos veces: el foco pasa al primer aviso y después al segundo. `k` vuelve atrás y, desde el primero, la flecha arriba salta al último.
6. Con el foco en un aviso, pulsa `r`: cambia entre leído y no leído, y el foco se queda en él aunque cambie de sitio. Pulsa `x` en uno sin fijar: se cierra y el foco pasa al aviso que ha quedado en su lugar.
7. Escribe en el formulario `Texto con <b>j</b> y x`, elige `Urgente` y pulsa `Enter`: el aviso aparece debajo del fijado con el texto tal cual, `urgentes sin leer: 2` y `notice:add #9`. Al escribir la `j` y la `x`, el foco no se ha movido ni se ha cerrado nada.
8. **Marcar todos leídos** y después **Quitar los leídos**: solo queda el corte de luz, leído pero fijado. El registro muestra `notice:clear-read` y `notice:read-all`.

La consola de las DevTools no debe mostrar ningún error. Después, haz lo mismo con tus datos.

Repasa `src/logic.js` antes de entregar: borra los `TODO` que queden y comprueba que no usas `var`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-18 ./scripts/verificar-semana.sh 18
# Semana 18 — Event Handling Avanzado
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
| `datos-exports` | `data.js` exporta `TITLE` y por defecto de 6 a 12 avisos con `id` entero positivo sin repetir, `title` de 5 o más caracteres sin repetir, `level` `info`, `aviso` o `urgente`, y `read` y `pinned` booleanos; al menos 2 niveles, 1 fijado, 2 leídos y 2 sin leer |
| `datos-dominio` | El título y los avisos no son los del ejemplo Planetario |
| `accion` | `parseAction` convierte `{ action, id }` en `{ type, id }`: las acciones de aviso con `id` entero positivo, las de la lista con `id` `null` y el resto `null` |
| `aplicar` | `applyAction` aplica `toggle-read`, `pin`, `dismiss`, `read-all`, `clear-read` y `add` |
| `aplicar-inmutable` | `applyAction` no modifica la lista ni los avisos, cambia solo el aviso pedido y devuelve la misma lista con una acción desconocida |
| `resumen` | `summarize` cuenta `total`, `unread`, `pinned` y `urgent` (urgentes sin leer) |
| `ordenar` | `sortNotices` pone primero los fijados, después los no leídos y, en cada grupo, el `id` más alto, sin cambiar la lista |
| `atajos` | `shortcutFor` devuelve la acción de cada tecla de `SHORTCUTS`, en mayúscula o minúscula, y `null` con Ctrl, Meta o Alt, escribiendo en un campo o con otra tecla |
| `indice` | `nextIndex` avanza o retrocede con vuelta al principio y al final, empieza por el primero o el último si `current` es `-1` y devuelve `-1` con la lista vacía |
| `evento` | `createNoticeEvent` crea un `CustomEvent` `notice:<tipo>` que sube y se puede cancelar, con una copia congelada de `detail` |
| `bus` | `createBus` devuelve `on` y `emit`: `on` escucha `notice:<tipo>`, acepta `once` y devuelve una función que quita el listener; cada bus es independiente |
| `bus-veto` | `emit` devuelve `false` si un listener llama a `preventDefault` y `true` si no; los listeners siguientes ven `defaultPrevented` |

Que los datos sean de tu dominio, que la página funcione y que el código se lea bien lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-18` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Acciones del navegador y eventos propios](../2-practicas/lab-04-acciones-eventos-propios/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 18](../README.md)
