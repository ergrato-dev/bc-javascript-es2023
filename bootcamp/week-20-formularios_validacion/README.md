# Semana 20 - Formularios y Validación

Un formulario es la forma en que una página pide datos. Esta semana vas a leerlos sin perder tipos por el camino, dejar que el navegador valide con atributos de HTML, preguntarle desde JavaScript qué falla y por qué, escribir tus propias reglas y mensajes, y enviar sin envíos dobles, colocando en su campo los errores que devuelve el servidor.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Leer un formulario con `form.elements` y `FormData`, y convertir lo que llega en un objeto con tipos.
- Atender el envío con `submit`, `preventDefault()` y `requestSubmit()`, y saber qué botón lo envió.
- Validar con `required`, `type`, `min`, `max`, `step`, `minlength`, `maxlength` y `pattern`, y marcar los errores con `:user-invalid`.
- Leer `validity`, usar `checkValidity()`, `reportValidity()` y `setCustomValidity()`, y escribir mensajes propios.
- Escribir las reglas como datos y comprobarlas con funciones puras que no usan el DOM.
- Mostrar cada error junto a su campo y en el momento adecuado, de forma accesible, y enviar una sola vez.

## Requisitos previos

- Las semanas [17](../week-17-dom_manipulation_moderna/README.md) y [18](../week-18-event_handling_avanzado/README.md): crear elementos con `textContent`, delegar eventos, la fase de captura y `preventDefault()`.
- Expresiones regulares de la [semana 6](../week-06-strings_regexp_modernos/README.md), y `async/await` y `try/finally` de las semanas [11](../week-11-manejo_errores_moderno/README.md) y [14](../week-14-async_await/README.md).
- Un navegador de escritorio actual (Chrome, Edge, Firefox o Safari) y saber abrir sus DevTools.
- Node y pnpm en las versiones de [docs/stack-versions.md](../../docs/stack-versions.md):

  ```bash
  node --version
  # v24.19.0 (o superior)
  pnpm --version
  # 12.20.0 (o superior)
  ```

---

## Contenidos

### 1. Teoría (2 h)

| Archivo | Tiempo | Tema |
|---|---|---|
| [01 - Formularios y FormData](1-teoria/01-formularios-formdata.md) | 30 min | Las piezas de un formulario, `form.elements`, el evento `submit`, `FormData` y de `FormData` a un objeto con tipos |
| [02 - Validación con atributos HTML](1-teoria/02-validacion-html.md) | 30 min | Las restricciones, cuándo valida el navegador, `:invalid` y `:user-invalid`, `novalidate` y por qué el servidor valida igualmente |
| [03 - La API de validación](1-teoria/03-constraint-validation.md) | 30 min | `validity`, `checkValidity()` y `reportValidity()`, el evento `invalid`, `setCustomValidity()` y mensajes propios |
| [04 - Validación propia y envío](1-teoria/04-validacion-propia-envio.md) | 30 min | Reglas como datos, errores accesibles, cuándo mostrar cada error, envío sin duplicados y errores del servidor |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Formularios y FormData](2-practicas/lab-01-formularios-formdata/README.md) | 50 min |
| [Lab 02 - Validación con atributos HTML](2-practicas/lab-02-validacion-html/README.md) | 50 min |
| [Lab 03 - La API de validación](2-practicas/lab-03-api-validacion/README.md) | 55 min |
| [Lab 04 - Validación propia y envío](2-practicas/lab-04-validacion-propia-envio/README.md) | 55 min |

Los labs son páginas que se abren en el navegador con doble clic: no necesitan Node ni servidor.

### 3. Proyecto (2 h)

[Formulario de inscripción](3-proyecto/README.md): completas las funciones de `src/logic.js` que leen el formulario, comprueban sus reglas, generan los atributos de cada campo, deciden qué errores se ven y tratan el envío y la respuesta del servidor, y describes en `src/data.js` el formulario del dominio que te asigna el instructor. `scripts/verificar-semana.sh 20` comprueba las funciones.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 15/15 comprobaciones y formulario del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-20-formularios_validacion/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 4 diagramas SVG
|-- 1-teoria/                  # 01 a 04
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-formularios-formdata/
|   |-- lab-02-validacion-html/
|   |-- lab-03-api-validacion/
|   `-- lab-04-validacion-propia-envio/  # cada lab: README.md y starter/ (index.html y main.js)
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/               # server.js, index.html, styles.css, src/data.js, src/logic.js, src/main.js
|-- 4-recursos/
|   |-- ebooks-free/README.md
|   |-- videografia/README.md
|   `-- webgrafia/README.md
`-- 5-glosario/
    `-- README.md
```

---

## Versiones de la semana

Los labs se ejecutan en el navegador: cada `main.js` es un script normal (`<script defer>`), que carga también desde un archivo abierto con doble clic. El proyecto usa módulos ES, que solo cargan por `http://`, así que se abre con `node server.js`, sin dependencias. Ese servidor usa `import.meta.main`, que necesita Node 24.2 o superior; las comprobaciones usan el `FormData` global de Node. Las salidas de los labs se obtuvieron en Chromium en español; las de los comandos del proyecto, con Node 24.19.0. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 19 - Web Storage APIs](../week-19-web_storage_apis/README.md) | [Semana 21 - Fechas y Tiempos (Date API)](../week-21-fechas_tiempos_date_api/README.md) |
