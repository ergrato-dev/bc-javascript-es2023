# Lab 01 — Formularios y FormData

## Objetivo

Leer y cambiar los campos de un formulario con `form.elements`, atender el envío con `submit`, recorrer un `FormData` con casillas, campos desactivados y botones con nombre, y convertirlo en un objeto con tipos.

**Tiempo:** 50 min · **Teoría:** [01 - Formularios y FormData](../../1-teoria/01-formularios-formdata.md)

## Cómo trabajar

[`starter/index.html`](starter/index.html) tiene un formulario de reserva de entradas: nombre, número de entradas, una casilla de visita guiada, tres casillas de zonas con el mismo `name`, una taquilla desactivada y dos botones. [`starter/main.js`](starter/main.js) tiene 6 pasos.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Cada paso funciona solo, pero los valores que cambia un paso los ven los siguientes. Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados.

---

## Paso 1: Los campos por su nombre

`form.elements` da cada campo por su `name`, así que se pueden sacar con desestructuración. `value` es siempre texto, también en el campo de tipo `number`; `valueAsNumber` lo da como número. En una casilla, `value` es lo que se enviaría y `checked` dice si está marcada.

```text
--- Paso 1: form.elements ---
visitor: Ana
tickets: "1" string
tickets.valueAsNumber: 1 number
guide.value: yes · guide.checked: false
guide.checked tras marcarla: true
Campos del formulario: 10
```

Son 10 porque `form.elements` cuenta también el `<fieldset>` y los dos botones.

## Paso 2: El evento `submit`

El listener cancela el envío con `preventDefault()` (sin él, la página se recargaría) y muestra el botón que envió. `requestSubmit()` envía desde código sin botón: `submitter` es `null`. Con un botón como argumento, es como pulsarlo.

```text
--- Paso 2: submit y requestSubmit ---
submit · botón: ninguno
submit · botón: «Guardar borrador»
La página no se ha recargado: interactive
```

Pulsa **Reservar** en la página, y también `Enter` dentro del campo **Nombre**: los dos lanzan `submit`. Con `Enter`, el botón es el primero del formulario, **Guardar borrador**.

## Paso 3: `new FormData(form)`

`FormData` toma lo que se enviaría. El paso desmarca la visita guiada para ver lo que pasa con una casilla sin marcar: no aparece, y `get` da `null`. La taquilla tampoco aparece, porque está `disabled`. Todo lo que aparece es texto.

```text
--- Paso 3: new FormData(form) ---
Parejas: [["visitor","Ana"],["tickets","1"]]
get("visitor"): Ana
get("tickets"): "1"
get("guide"): null · has("guide"): false
get("office"): null (está disabled)
Con la casilla marcada: yes
```

## Paso 4: Varios valores con el mismo `name`

Las tres casillas de zonas se llaman `zones`. El paso marca Medusas y Tiburones. `get` devuelve solo el primer valor; `getAll`, todos, y un array vacío para un nombre que no está. `Object.fromEntries` se queda con el **último**: pierde Medusas.

```text
--- Paso 4: getAll y Object.fromEntries ---
get("zones"): Medusas
getAll("zones"): ["Medusas","Tiburones"]
getAll("nada"): []
Object.fromEntries: {"visitor":"Ana","tickets":"1","guide":"yes","zones":"Tiburones"}
```

## Paso 5: El botón que envió

Los dos botones se llaman `action`, con valores distintos. `new FormData(form)` no incluye ningún botón; `new FormData(form, event.submitter)` añade el que envió.

```text
--- Paso 5: new FormData(form, submitter) ---
submit · botón: «Reservar»
  action: book · sin submitter: null
submit · botón: «Guardar borrador»
  action: draft · sin submitter: null
```

Las líneas `submit · botón` son del listener del paso 2: los dos listeners de `submit` se ejecutan, en el orden en que se añadieron.

## Paso 6: De `FormData` a un objeto con tipos

`readBooking` convierte cada campo según lo que significa: el nombre sin espacios en los extremos, las entradas como número (o `null` si el campo está vacío), la casilla como booleano y las zonas como array. `URLSearchParams` escribe los datos como en una dirección, con los espacios como `+`. `form.reset()` devuelve cada campo a su valor inicial del HTML: `tickets` vuelve a `1`.

```text
--- Paso 6: Convertir, URLSearchParams y reset ---
Objeto: {"visitor":"Ana","tickets":1,"guide":true,"zones":["Medusas","Tiburones"]}
Sin entradas: null · con Number(""): 0
Como en una dirección: visitor=++Ana++&tickets=&guide=yes&zones=Medusas&zones=Tiburones
Tras reset: {"visitor":"","tickets":1,"guide":false,"zones":[]}

✅ Lab completado.
```

Un campo vacío no es un cero: `Number('')` vale `0`, por eso `readBooking` comprueba antes si está vacío.

---

## Comprobación

1. Quita el `name` del campo **Nombre** en `index.html` y recarga. ¿Qué cambia en el paso 3? ¿Y en `form.elements.visitor`?
2. Con el paso 2 descomentado, escribe en la consola `document.querySelector('#booking').submit()`. ¿Aparece la línea `submit · botón`? ¿Qué le pasa a la página y a la dirección de la barra? Compara con `requestSubmit()`.
3. Quita el atributo `value` de la casilla `guide` en `index.html`. ¿Qué da `get("guide")` en el paso 3 con la casilla marcada? ¿Cambia algo en `readBooking`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Validación con atributos HTML](../lab-02-validacion-html/README.md) → |

[↑ Semana 20](../../README.md)
