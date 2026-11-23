# Lab 01 — Escuchar eventos

## Objetivo

Reaccionar a lo que hace quien usa la página: añadir listeners con `addEventListener`, leer el objeto evento, quitar listeners de uno en uno o todos a la vez con un `AbortController`, y saber qué valen `this` y `currentTarget` dentro de cada tipo de función.

**Tiempo:** 55 min · **Teoría:** [01 - Escuchar eventos](../../1-teoria/01-escuchar-eventos.md)

## Cómo trabajar

[`starter/index.html`](starter/index.html) trae un mostrador vacío. [`starter/main.js`](starter/main.js) tiene 7 pasos.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Al principio del archivo tienes `addButton(text)`, que crea un botón con ese texto, lo pone en el mostrador y lo devuelve: es el `createElement` y el `append` de la [semana 17](../../../week-17-dom_manipulation_moderna/1-teoria/02-crear-insertar.md). Cada paso usa su propio botón, así que los pasos no dependen unos de otros.

Para que la salida aparezca sin tocar nada, los pasos llaman a `button.click()`, que lanza un clic en el botón como si lo hubieras pulsado. Después de cada paso, pulsa tú el botón y mira qué cambia en la consola. Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados.

---

## Paso 1: `addEventListener` y el objeto evento

`addEventListener(tipo, listener)` guarda una función, el **listener**, para que el navegador la llame cada vez que ocurra un evento de ese tipo en el elemento. El navegador le pasa un único argumento, el **objeto evento**, con lo que ha pasado: `type` es el tipo, `target` el elemento donde ocurrió e `isTrusted` dice si lo provocó una persona (`true`) o el código (`false`).

`click()` no espera a nada: llama a los listeners en ese mismo momento y vuelve después. Por eso el mensaje del listener sale antes que `click() ya ha vuelto`.

```text
--- Paso 1: Escuchar un clic ---
Listener añadido. Simulo un clic:
type: click · target: Pedir documento · isTrusted: false
click() ya ha vuelto
```

Pulsa tú **Pedir documento**: el mensaje se repite con `isTrusted: true`.

## Paso 2: Varios listeners y la propiedad `onclick`

Un elemento puede tener tantos listeners del mismo tipo como quieras, y se llaman en el orden en que los añadiste. La propiedad `onclick` es la forma antigua: guarda **un solo** listener, y asignarle otra función sustituye a la anterior.

```text
--- Paso 2: Varios listeners ---
Orden: listener A → onclick 2 → listener B
```

`onclick 1` no aparece: `onclick 2` la sustituyó. Pero `onclick 2` se ejecuta en el sitio donde se asignó `onclick` la primera vez, entre A y B. Con `addEventListener`, un listener nuevo nunca borra otro escrito en otra parte del código; por eso, en este curso, siempre se usa `addEventListener`.

## Paso 3: `removeEventListener` necesita la misma función

`removeEventListener(tipo, listener)` quita un listener, pero solo si recibe **la misma función** que se añadió, no una que haga lo mismo. Por eso, la función que vayas a quitar se guarda antes en una constante.

```text
--- Paso 3: removeEventListener ---
Tras 1 clic: 1
Tras quitar una función nueva y otro clic: 2
Tras quitar notify y otro clic: 2
```

- **Tras 1 clic: 1.** Añadir dos veces la misma función al mismo tipo no la duplica: el navegador ya la tiene y no hace nada.
- **2.** La flecha de `removeEventListener` es una función nueva, distinta de `notify` aunque tenga el mismo código. No quita nada y `notify` sigue sumando.
- **2 otra vez.** Ahora sí se quita `notify` y el tercer clic no suma.

## Paso 4: `once`

El tercer argumento de `addEventListener` es un objeto de opciones. Con `{ once: true }`, el navegador quita el listener justo antes de llamarlo por primera vez.

```text
--- Paso 4: Una sola vez ---
Clics: 3 · bienvenidas: 1
```

## Paso 5: Quitar varios listeners con `signal`

Un `AbortController` es un objeto con una **señal** (`controller.signal`) y un método `abort()`. Si pasas la señal en la opción `signal`, `controller.abort()` quita de golpe todos los listeners que la recibieron, sin guardar ninguna función. Es la forma cómoda de quitar los listeners de un componente cuando desaparece.

```text
--- Paso 5: AbortController ---
Antes de abort: registrar, contar
Después de abort: registrar, contar · aborted: true
Con una señal ya abortada: registrar, contar
```

Un controlador solo se aborta una vez. Si añades un listener con una señal ya abortada, el navegador no lo añade, y el último clic no escribe `tarde`. Para volver a escuchar, crea otro `AbortController`.

## Paso 6: `this`, `currentTarget` y el evento después

Dentro de un listener escrito con `function`, `this` es el elemento que escucha. Una función flecha no tiene `this` propio, sino el de fuera: aquí, el del nivel superior del script, que es `window`. La forma que funciona con los dos tipos de función es `event.currentTarget`, el elemento cuyo listener se está ejecutando.

```text
--- Paso 6: Quién escucha ---
function: this es Catálogo
arrow: this es [object Window]
currentTarget durante el evento: Catálogo
currentTarget después: null · target después: Catálogo
```

`currentTarget` solo vale algo mientras se ejecutan los listeners: después, el navegador lo pone a `null`. `target`, en cambio, se conserva. Si guardas el evento para usarlo más tarde (en un `setTimeout`, después de un `await`), guarda antes en una constante el elemento que necesites.

## Paso 7: El teclado

`keydown` se lanza al pulsar una tecla y llega al elemento que tiene el foco, o a `document` si no lo tiene ninguno. `key` es el carácter o el nombre de la tecla (`r`, `R`, `Enter`, `ArrowDown`) y depende de las mayúsculas y de la distribución del teclado; `code` es la tecla física (`KeyR`) y no cambia. Las propiedades `ctrlKey`, `shiftKey`, `altKey` y `metaKey` dicen qué modificadores estaban pulsados, y `repeat` es `true` cuando la tecla se mantiene pulsada y se repite.

Este paso simula dos pulsaciones con `dispatchEvent`, que verás en el lab 04:

```text
--- Paso 7: keydown ---
key: r · code: KeyR · modificadores: ninguno · repeat: false
key: R · code: KeyR · modificadores: shiftKey · repeat: false
Ahora pulsa tú teclas con la página enfocada

✅ Lab completado.
```

Haz clic en la página para enfocarla y pulsa teclas. Mantén una pulsada para ver `repeat: true`, prueba las flechas y `Enter` y, si tu teclado tiene ñ, compara su `key` con su `code`.

---

## Comprobación

1. En el paso 3, cambia la primera línea de `addEventListener` por `notifyButton.addEventListener('click', () => notify());` y la segunda igual. ¿Cuánto vale `calls` tras el primer clic y tras quitar `notify`? ¿Por qué?
2. ¿Qué escribe el paso 6 si cambias la flecha por `function` y la `function` por una flecha?
3. Con el paso 7 descomentado, pulsa `Ctrl` y una letra. ¿Qué tecla sale en `key` y cuál en `modificadores`? ¿Para qué te sirve saberlo al escribir un atajo de teclado?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Propagación](../lab-02-propagacion/README.md) → |

[↑ Semana 18](../../README.md)
