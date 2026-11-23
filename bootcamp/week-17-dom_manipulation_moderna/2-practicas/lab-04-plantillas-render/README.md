# Lab 04 — Plantillas y render

## Objetivo

Pintar una lista a partir de un array de datos: clonar una plantilla `<template>`, rellenarla, volver a pintar cuando cambian los datos y ver qué se pierde al rehacerlo todo. Después, reutilizar los nodos que ya existen con un render por clave, que conserva el foco, y dar a cada nodo nuevo su comportamiento.

**Tiempo:** 55 min · **Teoría:** [04 - Plantillas y render](../../1-teoria/04-plantillas-render.md)

## Cómo trabajar

[`starter/index.html`](starter/index.html) trae una lista vacía y la plantilla de un tanque. [`starter/main.js`](starter/main.js) tiene 6 pasos y empieza con el array `tanks`, los datos que se pintan.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Cada paso usa funciones de los anteriores: descomenta en orden. Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados.

---

## Paso 1: una plantilla no está en la página

El contenido de un `<template>` se lee como HTML, pero no se muestra ni forma parte de la página: `document.querySelectorAll('.tank')` no lo encuentra. Está en `template.content`, un `DocumentFragment` como el del paso 6 del lab 02, y ahí sí se puede buscar.

```text
--- Paso 1: <template> ---
content es un DocumentFragment
.tank en la página: 0
.tank en la plantilla: 1
```

## Paso 2: clonar y rellenar

`createTank` copia el `<li>` de la plantilla con `cloneNode(true)` y rellena la copia con `textContent` y `dataset`. La plantilla no cambia: sigue teniendo su `.tank` para la próxima copia.

Con una plantilla, el HTML de cada tanque está en el HTML y no repartido en muchos `createElement`. Y como los datos entran con `textContent`, un nombre con `<` o `>` no se interpreta como HTML (paso 3 del lab 03).

`createTank` cuenta en `created` cuántos nodos crea, para medirlo en los pasos 4 y 5.

```text
--- Paso 2: Clonar ---
Uno → Arrecife de coral
.tank en la plantilla: 1
```

## Paso 3: pintar la lista a partir de los datos

`render` es la única función que cambia la lista: crea un `<li>` por tanque y sustituye todo el contenido con `replaceChildren`. Para cambiar la página, cambias `tanks` y llamas a `render`, y la lista siempre coincide con los datos. El mensaje de lista vacía también sale de los datos: `hidden` vale `false` solo si no hay tanques.

```text
--- Paso 3: render ---
render → Arrecife de coral, Océano abierto, Río amazónico
Sin el 2 → Arrecife de coral, Río amazónico
Vacía → —
¿Mensaje visible? true
```

## Paso 4: pintar todo de nuevo tiene un coste

Cambia el número de especies de un solo tanque (con `with` de la semana 05, que devuelve un array nuevo) y `render` vuelve a crear todos los nodos. El botón que tenía el foco ya no está en la página: lo ha sustituido una copia nueva, y el foco se ha perdido. Pasa lo mismo con el texto escrito en un campo o con la posición de scroll de un elemento.

```text
--- Paso 4: Rehacer todo ---
¿Foco en el botón? true
Nodos creados: 2 · ¿sigue el foco? false
¿Sigue en la página? false
```

## Paso 5: reutilizar los nodos que ya existen

`renderKeyed` guarda en un `Map` el `<li>` de cada tanque, con su `id` como **clave**. En cada render:

1. Quita los nodos de los tanques que ya no están.
2. Para cada tanque, reutiliza su nodo o crea uno si es nuevo, y actualiza el dato que puede cambiar.
3. Mueve cada nodo a su posición solo si no está ya en ella.

El tercer punto importa: mover un elemento lo saca un momento de la página, y eso le quita el foco. Moviendo solo los que hace falta, el botón del Arrecife no se toca, aunque la lista se haya dado la vuelta. Al añadir el Manglar se crea un único nodo.

```text
--- Paso 5: render con clave ---
Primera vez, nodos creados: 2
Nuevo y al revés → Manglar, Río amazónico, Arrecife de coral
Nodos creados: 1 · ¿sigue el foco? true
```

## Paso 6: cada nodo nuevo trae su comportamiento

Para que el botón «Destacar» funcione, cada `<li>` necesita un *listener* de `click`. `addEventListener(tipo, función)` ejecuta la función cada vez que pasa ese evento en el elemento. Lo añades al crear el nodo, así que el paso envuelve `createTank` para que todos los nodos nuevos lo traigan. `button.click()` simula el clic desde el código.

El Lago, creado ahora, funciona. El Arrecife no: su nodo se creó en el paso 5, antes de que existiera el listener, y `renderKeyed` lo reutiliza tal cual. Tampoco `cloneNode` copia los listeners. La [semana 18](../../../week-18-event_handling_avanzado/README.md) resuelve esto con un solo listener en la lista para todos sus elementos, la delegación de eventos.

```text
--- Paso 6: Listeners al crear ---
Tras click → clases: tank is-featured · aria-pressed: true
El 1, creado antes del paso 6 → clases: tank

✅ Lab completado.
```

---

## Comprobación

1. En el paso 5, sustituye el bloque `const current = ...` y su `if` por una sola línea, `list.append(node);`. ¿Sigue el foco en el botón tras el render? Explica por qué con el tercer punto del paso 5.
2. En el paso 3, ¿qué pasaría si `render` usara `list.append(...)` en lugar de `list.replaceChildren(...)`? Pruébalo llamando dos veces a `render`.
3. ¿Por qué `nodes` usa el `id` del tanque como clave y no su posición en el array? Piensa en qué pasa en el paso 5 cuando el Manglar entra el primero.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Contenido, atributos y clases](../lab-03-contenido-clases/README.md) | [Proyecto — Constructor de fichas](../../3-proyecto/README.md) → |

[↑ Semana 17](../../README.md)
