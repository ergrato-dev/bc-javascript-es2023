# Prácticas — Semana 20

Cuatro labs guiados. Cada lab es una página con un formulario: abres `starter/index.html` en el navegador, descomentas paso a paso `starter/main.js` y comparas lo que sale en la consola con la salida esperada del README. Antes de recargar, intenta predecir qué saldrá. No se entregan; preparan el [proyecto de la semana](../3-proyecto/README.md).

| Lab | Tema | Duración |
|---|---|---|
| [Lab 01](lab-01-formularios-formdata/README.md) | `form.elements`, `value` y `checked`, el evento `submit`, `requestSubmit()`, `FormData` con casillas, campos desactivados y botones, y de `FormData` a un objeto con tipos | 50 min |
| [Lab 02](lab-02-validacion-html/README.md) | `required`, `type`, `min`, `max`, `step`, `pattern`, `minlength`, lo que valida el navegador al enviar, `:invalid` frente a `:user-invalid` y `novalidate` | 50 min |
| [Lab 03](lab-03-api-validacion/README.md) | `validity` y sus indicadores, `checkValidity()` y `reportValidity()`, el evento `invalid`, `setCustomValidity()` y mensajes propios | 55 min |
| [Lab 04](lab-04-validacion-propia-envio/README.md) | Reglas como datos y funciones puras, errores accesibles, cuándo mostrar cada error, envío sin duplicados y errores del servidor | 55 min |

**Total:** 3 h 30 min.

## Antes de empezar

Necesitas un navegador de escritorio actual (Chrome, Edge, Firefox o Safari) con sus DevTools. No hace falta Node ni servidor: cada `main.js` es un script normal, que el navegador carga también desde un archivo abierto con doble clic. Si en Safari no ves el menú **Desarrollo**, actívalo en **Ajustes → Avanzado → Mostrar funciones para desarrolladores web**.

Cada paso pone valores en los campos desde el código, para que la salida sea siempre la misma. Después de los pasos, **usa el formulario**: escribe, sal de los campos con `Tab` y pulsa los botones. Algunas cosas solo pasan cuando escribe la persona (`minlength`, `:user-invalid`), y los READMEs te dicen qué probar.

Las salidas se obtuvieron en Chromium en español. Los mensajes de validación los escribe el navegador: en Firefox, en Safari o en otro idioma verás otras frases, pero los mismos valores de `valid` y de `validity`.

Si no ves nada en la consola, revisa que has guardado `main.js` antes de recargar y que el filtro de la consola muestra todos los niveles, no solo los errores.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🚦 Validación propia y envío](../1-teoria/04-validacion-propia-envio.md) | [Lab 01 — Formularios y FormData](lab-01-formularios-formdata/README.md) → |

[↑ Semana 20](../README.md)
