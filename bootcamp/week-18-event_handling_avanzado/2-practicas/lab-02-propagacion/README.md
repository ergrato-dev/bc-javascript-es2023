# Lab 02 — Propagación

## Objetivo

Ver el camino que recorre un evento por el árbol: cómo baja desde `document` hasta el elemento donde ocurre y cómo vuelve a subir, qué elementos lo oyen en cada fase, qué cambia al pararlo y qué eventos no suben.

**Tiempo:** 50 min · **Teoría:** [02 - Propagación](../../1-teoria/02-propagacion.md)

## Cómo trabajar

[`starter/index.html`](starter/index.html) trae una caja dentro de una estantería dentro de un depósito, y un buscador:

```text
section#archive > div#shelf > button#box > span#label
```

[`starter/main.js`](starter/main.js) tiene 6 pasos.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Al principio del archivo ya tienes:

- `describe(node)` devuelve un nombre corto: `document` o `etiqueta#id`.
- `record` es un listener que anota quién lo oye (`event.currentTarget`) y en qué fase (`event.eventPhase`). `flush(text)` imprime lo anotado y lo vacía.

Cada paso añade sus listeners con su propio `AbortController` y los quita al final con `abort()`, como en el [paso 5 del lab 01](../lab-01-escuchar-eventos/README.md#paso-5-quitar-varios-listeners-con-signal). Así, los pasos no dependen unos de otros. Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados.

---

## Paso 1: El evento sube (burbuja)

Se pone el mismo listener en los cinco nodos del camino y se hace clic en tres sitios distintos. El evento empieza en el elemento donde ocurre, el **destino** (`event.target`), y después **sube** por sus antepasados hasta `document`. Es la fase de **burbuja**: cada antepasado oye el clic de cualquier elemento que tenga dentro.

```text
--- Paso 1: Burbuja ---
Clic en la etiqueta: span#label (destino) → button#box (burbuja) → div#shelf (burbuja) → section#archive (burbuja) → document (burbuja)
Clic en la caja: button#box (destino) → div#shelf (burbuja) → section#archive (burbuja) → document (burbuja)
Clic en la estantería: div#shelf (destino) → section#archive (burbuja) → document (burbuja)
```

Un evento nunca baja hacia los hijos: el clic en la estantería no llega a la caja.

## Paso 2: Antes baja (captura)

Con la opción `{ capture: true }`, el listener escucha en la fase de **captura**, que ocurre antes: el evento baja desde `document` hasta el padre del destino. Este paso pone en cada nodo dos listeners, uno de cada fase.

```text
--- Paso 2: Captura ---
Clic en la etiqueta: document (captura) → section#archive (captura) → div#shelf (captura) → button#box (captura) → span#label (destino) → span#label (destino) → button#box (burbuja) → div#shelf (burbuja) → section#archive (burbuja) → document (burbuja)
```

En el destino no hay captura ni burbuja: sus dos listeners se ejecutan en la fase `destino`. Casi siempre escucharás en la burbuja, que es la opción por defecto; la captura sirve cuando un antepasado tiene que enterarse antes que nadie.

## Paso 3: `target` y `currentTarget`

Un solo listener en la estantería. `event.target` dice dónde ocurrió el clic y `event.currentTarget`, quién lo está oyendo, que aquí siempre es la estantería. `target.closest('button')`, de la [semana 17](../../../week-17-dom_manipulation_moderna/1-teoria/01-arbol-seleccion.md), sube desde el destino hasta el primer botón.

```text
--- Paso 3: Dónde ocurrió y quién escucha ---
target: span#label · currentTarget: div#shelf · botón: button#box
target: button#box · currentTarget: div#shelf · botón: button#box
target: div#shelf · currentTarget: div#shelf · botón: ninguno
```

Si el botón tiene un elemento dentro, el `target` puede ser ese elemento, no el botón. `closest` encuentra el botón en los dos casos, y devuelve `null` cuando el clic no fue dentro de ninguno. Es la base de la delegación del lab 03.

## Paso 4: `stopPropagation`

`event.stopPropagation()` para el evento: los antepasados que quedaban ya no lo oyen. Los demás listeners del mismo elemento sí se ejecutan.

```text
--- Paso 4: Parar la subida ---
Con stopPropagation: button#box (burbuja) → div#shelf (burbuja) → div#shelf (segundo listener)
```

Ni el depósito ni `document` se enteran del clic. El listener de `document` representa algo que pasa en muchas páginas: cerrar los menús abiertos cuando haces clic en cualquier sitio. Con `stopPropagation` en la estantería, un clic en la caja deja el menú abierto, y el fallo aparece lejos del código que lo causa. Úsalo solo cuando sepas quién más escucha ese evento.

## Paso 5: `stopImmediatePropagation`

`event.stopImmediatePropagation()` hace lo mismo y además salta los listeners del mismo elemento que faltaban.

```text
--- Paso 5: Parar también al vecino ---
Con stopImmediatePropagation: div#shelf (burbuja)
```

## Paso 6: Eventos que no suben

`focus` (un elemento recibe el foco) y `blur` (lo pierde) no tienen fase de burbuja: `event.bubbles` es `false`. Tampoco suben `mouseenter`, `mouseleave` ni `load`. Para oírlos en un antepasado tienes dos caminos: escuchar en captura, o usar `focusin` y `focusout`, que son iguales pero sí suben.

```text
--- Paso 6: focus y focusin ---
Al enfocar el buscador: focus en section (captura) → focus en el input · bubbles: false → focusin en section

✅ Lab completado.
```

El listener de `focus` en burbuja del depósito no aparece. `search.focus()` mueve el foco desde el código, y `search.blur()` lo quita al final.

---

## Comprobación

1. En el paso 1, ¿qué se imprime si haces clic en el texto `section#archive` de la página? ¿Y en el título `Depósito del archivo histórico`?
2. En el paso 4, mueve `event.stopPropagation()` al listener de la caja. ¿Qué queda en la traza?
3. Quieres marcar con una clase la fila que tiene el foco en una tabla de 200 filas, con un solo listener en la tabla. ¿Qué evento escuchas y por qué no vale `focus` sin más?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Escuchar eventos](../lab-01-escuchar-eventos/README.md) | [Lab 03 — Delegación](../lab-03-delegacion/README.md) → |

[↑ Semana 18](../../README.md)
