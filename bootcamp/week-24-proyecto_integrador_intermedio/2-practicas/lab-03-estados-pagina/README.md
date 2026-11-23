# Lab 03 — Estados en la página

## Objetivo

Repasar en una página real lo que hace `main.js` en el proyecto: un texto por estado, una lista que no se vacía mientras carga, texto ajeno pintado sin riesgo, un solo listener que sobrevive a los repintados, un botón que no envía dos veces y el foco en el primer error. Es el repaso de las semanas 16 a 20.

**Tiempo:** 50 min · **Repaso:** [teoría 03](../../1-teoria/03-estados-carga.md) y [teoría 01](../../1-teoria/01-repaso-semanas-13-23.md#la-página-semanas-17-18-y-20)

## Cómo trabajar

Este lab es una página. [`starter/index.html`](starter/index.html) tiene dos zonas: las fichas (con su línea de estado) y un formulario. [`starter/main.js`](starter/main.js) tiene 6 pasos.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic, y la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
2. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Cada paso añade una función a `steps`, y el final del archivo las ejecuta en orden esperando a cada una. Arriba están `wait`, `$` (un atajo de `document.querySelector`), `fakeApi(items, ms)`, que responde con `items` a los `ms` milisegundos, tres fichas de ejemplo en `ITEMS` y `escapeHtml`. Los pasos van en orden: el 2 usa `renderStatus` del 1, y del 3 en adelante usan `paintCards` del 2.

Las salidas se obtuvieron en Chromium 156 con la página abierta con doble clic. No dependen de tu equipo: deberían coincidir con las tuyas, salvo el aviso de la imagen que no existe en el paso 3, que cada navegador escribe a su manera.

---

## Paso 1: Un estado, un texto

```text
--- Paso 1: Cinco estados ---
  idle    → «» · aria-busy=false
  loading → «Cargando…» · aria-busy=true
  ready   → «3 fichas» · aria-busy=false
  empty   → «Ninguna ficha coincide con «zzz»» · aria-busy=false
  error   → «No se pudo conectar con el servidor» · aria-busy=false
```

La línea de estado cambia cada 300 ms. Cada `status` tiene **un** texto, y el texto sale del estado, nunca de un `if` repartido por el código ([semana 16](../../../week-16-apis_rest_crud/1-teoria/04-estados-carga.md#1-un-estado-no-varios-booleanos)). El párrafo tiene `role="status"`: un lector de pantalla lee en voz alta cada texto nuevo, sin mover el foco. `aria-busy="true"` avisa de que la lista se está actualizando, y la hoja de estilos la pinta más tenue.

## Paso 2: No vaciar la lista mientras carga

```text
--- Paso 2: Vaciar o conservar ---
  A, a mitad de la carga: 0 fichas en pantalla
  B, a mitad de la carga: 3 fichas en pantalla, aria-busy = true
  B, al terminar: 3 fichas, aria-busy = false
```

En A, la lista se vacía y vuelve a llenarse: durante 200 ms la página parpadea y la persona pierde lo que estaba mirando (y el sitio en el scroll). En B, las fichas de antes se quedan, marcadas como «ocupadas», hasta que llegan las nuevas. Por eso `reduce` con `load` conserva `items` en el proyecto.

## Paso 3: Pintar texto ajeno

```text
--- Paso 3: innerHTML con y sin escapar ---
Failed to load resource: net::ERR_FILE_NOT_FOUND
  💥 se ha ejecutado código de la ficha
  sin escapar: imágenes en la lista = 1
  con escapeHtml: imágenes en la lista = 0
  se ve como texto: <img src="nada.png" …
```

El nombre de la ficha es HTML. Pintado con `innerHTML` tal cual, el navegador crea una imagen; la imagen no existe, y su atributo `onerror` ejecuta código. Ese código podría leer `localStorage` o enviar el formulario por ti ([semana 17](../../../week-17-dom_manipulation_moderna/1-teoria/03-contenido-clases.md)). Con `escapeHtml`, los `<` se convierten en `&lt;` y el nombre se ve como texto. Las fichas del proyecto las escribe cualquiera que use el formulario: por eso `cardHtml` escapa **todos** los valores, también el `id`.

## Paso 4: Listeners que se pierden al repintar

```text
--- Paso 4: Un listener por botón o uno en la lista ---
  antes de repintar: por botón 1, delegado 1
  después de repintar: por botón 1, delegado 2
```

`paintCards` usa `innerHTML`, que tira los botones y crea otros nuevos. Los listeners puestos en cada botón se van con los botones viejos: después de repintar, el clic no lo escucha nadie. El listener de la lista sigue ahí, porque la lista no se repinta: recibe el clic de cualquier botón de dentro gracias a la propagación, y `closest` dice cuál fue ([semana 18](../../../week-18-event_handling_avanzado/1-teoria/03-delegacion.md)). El proyecto repinta la lista con cada cambio de estado, así que solo puede funcionar con delegación.

## Paso 5: El doble envío

```text
--- Paso 5: Dos clics seguidos en Guardar ---
  sin desactivar el botón: 2 envíos
  desactivando el botón mientras se envía: 1 envío
```

El «POST» tarda 200 ms. Sin protección, el segundo clic llega mientras el primero está en camino y se envía otra vez: en el proyecto, dos fichas iguales (o un 409). Con `disabled = true` al empezar, el navegador ignora el segundo clic; el `disabled = false` del final (en el proyecto, en el `finally`) lo vuelve a activar tanto si el envío sale bien como si falla ([semana 20](../../../week-20-formularios_validacion/1-teoria/04-validacion-propia-envio.md)).

## Paso 6: Llevar el foco al primer error

```text
--- Paso 6: Errores al enviar ---
  errores: {"name":"Obligatorio","type":"Obligatorio"} · foco en: name
  errores: {"type":"Obligatorio"} · foco en: type
  errores: {} · foco en: type

✅ Lab completado.
```

El formulario tiene `novalidate`: el navegador no enseña sus globos y la validación la hace el código. Cada campo con error se marca con `aria-invalid="true"` (borde rojo, y un lector de pantalla dice «no válido»), y el foco va al **primero**, para que la persona sepa dónde mirar sin buscar. En el último envío no hay errores y el foco se queda donde estaba. `showErrors` del proyecto hace lo mismo con los errores de `validate` y con los del servidor (`HttpError` con `fields`).

---

## Comprobación

1. En el paso 1, ¿por qué es mejor un `status` con cinco valores que tres booleanos (`isLoading`, `hasError`, `isEmpty`)? ¿Qué combinación de booleanos no tendría sentido?
2. En el paso 2, ¿en qué caso sí vaciarías la lista antes de cargar? (Piensa en una búsqueda nueva cuyos resultados no tienen nada que ver con los de antes.)
3. En el paso 3, cambia `escapeHtml(evil.name)` por `evil.name` y pinta con `textContent` en lugar de `innerHTML`. ¿Qué ves? ¿Por qué `cardHtml` no puede usar `textContent`?
4. En el paso 5, quita `$('#send').disabled = false;`. ¿Qué pasa con el botón después del primer envío? ¿Qué pasaría en el proyecto si `requestJson` fallara y no hubiera `finally`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — La copia local](../lab-02-copia-local/README.md) | [Proyecto — Catálogo conectado](../../3-proyecto/README.md) → |

[↑ Semana 24](../../README.md)
