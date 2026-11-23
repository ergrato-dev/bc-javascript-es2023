# Lab 04 — Acciones del navegador y eventos propios

## Objetivo

Cancelar lo que el navegador hace por defecto con un evento, crear y lanzar eventos desde el código, pasar datos en un `CustomEvent`, usar un evento cancelable para que otra parte del código pueda vetar una acción y avisar de cambios con un `EventTarget` que no es un elemento.

**Tiempo:** 50 min · **Teoría:** [04 - Acciones por defecto y eventos propios](../../1-teoria/04-acciones-eventos-propios.md)

## Cómo trabajar

[`starter/index.html`](starter/index.html) trae dos enlaces a secciones de la misma página, una casilla, un contador de préstamos y un catálogo de tres cajas. La segunda tiene `data-locked="true"`: está protegida. [`starter/main.js`](starter/main.js) tiene 6 pasos.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Los pasos no dependen unos de otros, salvo el 5, que quita cajas del catálogo. La primera línea del archivo, `location.hash = ''`, borra de la dirección el `#catalogo` que deja el paso 1, para que cada recarga empiece igual. Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados.

---

## Paso 1: La acción por defecto de un enlace

Algunos eventos tienen una **acción por defecto**: lo que hace el navegador después de los listeners. Un clic en un enlace navega a su `href`; aquí, como son enlaces a una sección de la misma página (`#catalogo`), solo cambia `location.hash` y la página baja hasta la sección. `event.preventDefault()` cancela esa acción, y después `event.defaultPrevented` vale `true`.

```text
--- Paso 1: preventDefault en un enlace ---
Antes: (sin #)
Tras el enlace al catálogo: #catalogo
cancelable: true · defaultPrevented: true
Tras el enlace al índice: #catalogo
```

El enlace al índice no navega: la dirección sigue en `#catalogo`. Pulsa tú los dos enlaces y mira la barra de direcciones. `click()` también lanza la acción por defecto, aunque `isTrusted` sea `false`.

## Paso 2: La casilla que vuelve atrás

En una casilla, el navegador cambia `checked` **antes** de llamar a los listeners del clic, para que puedan leer el valor nuevo. Si un listener cancela el clic, el navegador deshace el cambio al terminar y no lanza `change`.

```text
--- Paso 2: preventDefault en una casilla ---
Dentro del listener, checked: true
Después del clic, checked: false
```

Pulsa tú la casilla: no se marca nunca. El mensaje `change: no debería salir` no aparece.

## Paso 3: Crear y lanzar eventos

`new Event(tipo, opciones)` crea un evento y `elemento.dispatchEvent(evento)` lo lanza: llama a los listeners en ese momento, como `click()`. `dispatchEvent` devuelve `false` si algún listener canceló el evento y `true` si no.

Por defecto, un evento creado así no es cancelable (`cancelable: false`) y no sube (`bubbles: false`). `preventDefault` solo hace algo si el evento es cancelable, y nunca dentro de un listener añadido con `{ passive: true }`.

```text
--- Paso 3: new Event y dispatchEvent ---
No cancelable → dispatchEvent devuelve true · defaultPrevented: false
Cancelable → dispatchEvent devuelve false · defaultPrevented: true
Unable to preventDefault inside passive event listener invocation.
Listener passive → dispatchEvent devuelve true · defaultPrevented: false
```

El aviso `Unable to preventDefault...` lo escribe Chromium en la consola; otros navegadores pueden no escribir nada. `passive` es una promesa al navegador: «este listener no va a cancelar el evento». Con eso, el navegador puede desplazar la página en cuanto recibe `wheel` o `touchmove`, sin esperar a que termine el listener.

## Paso 4: `CustomEvent`, `detail` y `bubbles`

Un **evento propio** es un evento con un tipo que inventas tú, como `box:request`. Con `new CustomEvent(tipo, { detail })` lleva datos en la propiedad `detail`, que puede ser cualquier valor. Igual que con `Event`, si quieres que suba por el árbol tienes que pedirlo con `bubbles: true`.

```text
--- Paso 4: Un evento propio ---
Sin bubbles: document no lo ha oído
document oye box:request: caja 1, «Actas municipales de 1931» · target: li 1
```

El primer `dispatchEvent` se queda en el `<li>`, que no tiene listeners. El segundo sube hasta `document`, y su `target` es el `<li>` que lo lanzó. El prefijo `box:` evita que el nombre choque con un evento del navegador y agrupa los eventos que tienen que ver con las cajas.

## Paso 5: Un evento que se puede vetar

Si el evento propio es cancelable, quien lo lanza puede preguntar antes de actuar: lanza `box:remove` y solo quita la caja si `dispatchEvent` devuelve `true`. El listener del catálogo no sabe quitar cajas ni tiene que saberlo; solo decide si se puede, y la veta con `preventDefault` cuando está protegida.

```text
--- Paso 5: Vetar con preventDefault ---
Quitar la caja 1: quitada
Quitar la caja 2: vetada
Quitar la caja 3: quitada
Quedan: Fueros de la villa, 1472
```

Es el mismo mecanismo del paso 1, pero con una acción por defecto que escribe tu código.

## Paso 6: Un `EventTarget` sin elemento

Los elementos y `document` tienen `addEventListener` y `dispatchEvent` porque son `EventTarget`. `new EventTarget()` crea uno que no está en la página: un objeto al que cualquier parte del código puede suscribirse para enterarse de cambios. Aquí, `lend` añade un préstamo y lanza `change`; un listener actualiza el contador de la página y otro escribe en la consola, y ninguno de los dos sabe que el otro existe.

```text
--- Paso 6: EventTarget ---
Préstamos: Actas municipales de 1931
(primer préstamo del día)
Préstamos: Actas municipales de 1931, Planos del puerto, 1898
Contador en la página: 2

✅ Lab completado.
```

Un `EventTarget` creado así no tiene antepasados, así que `bubbles` no cambia nada. `EventTarget`, `Event` y `CustomEvent` también existen en Node: el proyecto de esta semana los usa en `logic.js` y las comprobaciones los prueban sin navegador.

---

## Comprobación

1. En el paso 2, cambia el evento `click` por `change`. ¿Se queda marcada la casilla? ¿Qué te dice eso de cuándo se puede cancelar una acción?
2. En el paso 5, quita `cancelable: true`. ¿Qué cajas quedan y por qué?
3. Añade al paso 6 un listener de `change` que escriba `Aviso: más de 1 préstamo` cuando haya más de uno. ¿Hay que tocar `lend`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Delegación](../lab-03-delegacion/README.md) | [Proyecto — Centro de avisos](../../3-proyecto/README.md) → |

[↑ Semana 18](../../README.md)
