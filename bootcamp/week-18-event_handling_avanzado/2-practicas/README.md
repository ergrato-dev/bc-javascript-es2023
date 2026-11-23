# Prácticas — Semana 18

Cuatro labs guiados. Cada lab es una página: abres `starter/index.html` en el navegador, descomentas paso a paso `starter/main.js` y comparas lo que sale en la consola con la salida esperada del README. Antes de recargar, intenta predecir qué saldrá. No se entregan; preparan el [proyecto de la semana](../3-proyecto/README.md).

| Lab | Tema | Duración |
|---|---|---|
| [Lab 01](lab-01-escuchar-eventos/README.md) | `addEventListener`, el objeto evento, `onclick`, `removeEventListener`, `once`, `AbortController`, `this` y `currentTarget`, y `keydown` | 55 min |
| [Lab 02](lab-02-propagacion/README.md) | Fases de captura, destino y burbuja, `target` y `currentTarget`, `stopPropagation`, `stopImmediatePropagation`, `focus` y `focusin` | 50 min |
| [Lab 03](lab-03-delegacion/README.md) | Delegación con `closest` y `contains`, elementos añadidos después, tabla de acciones y foco delegado | 55 min |
| [Lab 04](lab-04-acciones-eventos-propios/README.md) | `preventDefault`, `cancelable` y `passive`, `Event`, `CustomEvent` y `dispatchEvent`, eventos que se pueden vetar y `EventTarget` | 50 min |

**Total:** 3 h 30 min.

## Antes de empezar

Necesitas un navegador de escritorio actual (Chrome, Edge, Firefox o Safari) con sus DevTools. No hace falta Node ni servidor: cada `main.js` es un script normal, que el navegador carga también desde un archivo abierto con doble clic. Si en Safari no ves el menú **Desarrollo**, actívalo en **Ajustes → Avanzado → Mostrar funciones para desarrolladores web**.

Los pasos lanzan los clics desde el código con `click()`, para que la salida sea siempre la misma. Después de cada paso, pulsa tú los botones que sigan escuchando y compara: con tus clics, `isTrusted` vale `true`. Cada README dice qué listeners quedan al final.

Si no ves nada en la consola, revisa que has guardado `main.js` antes de recargar y que el filtro de la consola muestra todos los niveles, no solo los errores.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🚦 Acciones por defecto y eventos propios](../1-teoria/04-acciones-eventos-propios.md) | [Lab 01 — Escuchar eventos](lab-01-escuchar-eventos/README.md) → |

[↑ Semana 18](../README.md)
