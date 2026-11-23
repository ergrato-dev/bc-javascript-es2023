# Lab 03 — Delegación

## Objetivo

Atender con un solo listener los botones de una lista entera, incluidos los que se añaden después. Vas a encontrar el botón pulsado aunque el clic caiga en un elemento de dentro, evitar que `closest` se salga de la lista, elegir la acción por su nombre y delegar también el foco.

**Tiempo:** 55 min · **Teoría:** [03 - Delegación](../../1-teoria/03-delegacion.md)

## Cómo trabajar

[`starter/index.html`](starter/index.html) trae un panel con dos solicitudes de consulta. Cada una es un `<li data-id>` con dos botones, `data-action="approve"` y `data-action="reject"`, y el botón de aprobar lleva un icono en un `<span>`. El panel también tiene un `data-action`: se pliega cuando haces clic en el propio panel, fuera de cualquier botón.

[`starter/main.js`](starter/main.js) tiene 6 pasos.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Cada paso parte de cómo dejó la lista el anterior: descomenta en orden. Al principio del archivo ya tienes:

- `addRequest(id, title)` crea una solicitud igual que las del HTML y la añade al final de la lista.
- `buttonOf(id, action)` y `partOf(id, selector)` buscan un botón o un elemento dentro de la solicitud con ese `id`.
- El listener que pliega el panel, que escribe `(panel: plegado)` o `(panel: desplegado)`.

Los pasos 1 a 4 quitan sus listeners al terminar, con su `AbortController`. Los de los pasos 5 y 6 se quedan: al final, pulsa tú los botones. Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados.

---

## Paso 1: Un listener por botón

Es lo que hacía el `main.js` del [proyecto de la semana 17](../../../week-17-dom_manipulation_moderna/3-proyecto/README.md): recorrer los botones y añadir un listener a cada uno.

```text
--- Paso 1: Un listener por botón ---
Listeners añadidos: 4
Listener del botón: approve en la solicitud 1
La solicitud 3 se añadió después: su botón no tiene listener
```

El bucle solo ve los botones que había al ejecutarse. La solicitud 3 llega después y su clic no hace nada. Para que funcione, quien crea un elemento nuevo tiene que acordarse de añadirle también los listeners.

## Paso 2: Un listener en la lista

Por el [lab 02](../lab-02-propagacion/README.md), un clic en un botón sube hasta la lista. En eso consiste la **delegación**: un solo listener en el contenedor, que mira en `event.target` dónde fue el clic y sube con `closest('[data-action]')` hasta el botón.

```text
--- Paso 2: Delegación ---
Listener de la lista: reject en la solicitud 1
Listener de la lista: approve en la solicitud 3
Listener de la lista: reject en la solicitud 4
Listeners en la lista: 1, para 8 botones
```

Funciona con la solicitud 3, que no tenía listener, y con la 4, creada en mitad del paso. El listener está en la lista, que no cambia; los botones pueden ir y venir.

## Paso 3: El clic en el icono

Si haces clic justo sobre el `✔`, el `target` es el `<span>` del icono, no el botón, y el `<span>` no tiene `data-action`.

```text
--- Paso 3: target dentro del botón ---
target: span · target.dataset.action: undefined · con closest: approve
target: button · target.dataset.action: approve · con closest: approve
```

Por eso la delegación no lee `event.target.dataset` directamente: `closest` empieza en el propio `target` y sube, y encuentra el botón en los dos casos.

## Paso 4: `closest` se sale de la lista

Un clic en el título de una solicitud no cae en ningún botón. `closest('[data-action]')` sigue subiendo, sale de la lista y encuentra el panel, que también tiene `data-action`. El listener de la lista cree entonces que le han pedido `toggle-panel`, una acción que no es suya. `list.contains(button)` comprueba que el elemento encontrado está dentro de la lista.

```text
--- Paso 4: list.contains ---
Sin comprobar: toggle-panel · con list.contains: ninguna
(panel: plegado)
Sin comprobar: toggle-panel · con list.contains: ninguna
(panel: desplegado)
Sin comprobar: reject · con list.contains: reject
```

El paso hace clic dos veces en el título: el panel se pliega y se vuelve a desplegar. Su listener sí es el dueño de `toggle-panel` y escribe después del de la lista, porque el clic sube y la lista está dentro del panel.

## Paso 5: Una tabla de acciones

Con muchas acciones, una cadena de `if` crece sin parar. Un objeto que guarda una función por nombre de acción lo resuelve: el listener busca la función con `button.dataset.action`, y añadir una acción es añadir una propiedad.

```text
--- Paso 5: Acciones por nombre ---
approve → solicitud 1
reject → solicitud 2
Acción desconocida: archive
Quedan: 1 (aprobada), 3, 4
```

El botón **Archivar** se crea en mitad del paso con una acción que la tabla no conoce. `Object.hasOwn(actions, action)` comprueba que la acción es una propiedad del propio objeto. Con `actions[action]` a secas, un `data-action="toString"` encontraría el `toString` que todo objeto hereda y lo ejecutaría.

El listener de este paso se queda. Pulsa tú **Aprobar** y **Rechazar** en las solicitudes que quedan.

## Paso 6: Delegar el foco

Por el [paso 6 del lab 02](../lab-02-propagacion/README.md#paso-6-eventos-que-no-suben), `focus` no sube, pero `focusin` y `focusout` sí. Con ellos, un solo listener en la lista marca con la clase `is-active` la solicitud que tiene el foco.

```text
--- Paso 6: focusin y focusout ---
Foco en la 3 → activa: 3
Foco en la 4 → activa: 4
Sin foco → activa: ninguna

✅ Lab completado.
```

Al pasar de la 3 a la 4, `focusout` quita la clase de la 3 y `focusin` la pone en la 4. Recorre tú los botones con `Tab` y mira cómo cambia el borde azul.

---

## Comprobación

1. Quita `if (!button || !list.contains(button)) return;` del paso 5 y haz clic en el título de una solicitud. ¿Qué sale en la consola y por qué?
2. Añade al paso 5 una acción `archive` que ponga el texto `(archivada)` al final del título. ¿Cuántos listeners tienes que añadir o cambiar?
3. Con el paso 1, ¿qué habría que hacer en `addRequest` para que los botones de las solicitudes nuevas funcionen? ¿Por qué con delegación no hace falta?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Propagación](../lab-02-propagacion/README.md) | [Lab 04 — Acciones del navegador y eventos propios](../lab-04-acciones-eventos-propios/README.md) → |

[↑ Semana 18](../../README.md)
