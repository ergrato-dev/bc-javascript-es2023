# Semana 18 - Event Handling Avanzado

En la semana 17 cambiaste la página desde JavaScript; esta semana la página responde a quien la usa. Vas a escuchar clics y teclas, seguir el camino que recorre un evento por el árbol, atender con un solo listener todos los botones de una lista (también los que se crean después), cancelar lo que el navegador hace por defecto e inventar eventos propios para que las partes de tu código se avisen sin conocerse.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Añadir y quitar listeners con `addEventListener`, `removeEventListener`, `once` y `AbortController`, y leer el objeto evento y el teclado.
- Explicar las fases de captura, destino y burbuja, y distinguir `target` de `currentTarget`.
- Saber qué rompe `stopPropagation` y qué eventos no suben.
- Delegar los eventos de una lista en su contenedor con `closest`, `contains` y `data-action`.
- Cancelar acciones por defecto con `preventDefault` y saber cuándo no se puede.
- Crear eventos con `CustomEvent` y `dispatchEvent`, vetar una acción con un evento cancelable y usar un `EventTarget` como bus de eventos.

## Requisitos previos

- La [semana 17](../week-17-dom_manipulation_moderna/README.md) completa: `querySelector`, `closest`, `dataset`, `createElement` y `classList`.
- Los *callbacks* de la [semana 13](../week-13-programacion_asincronica_callbacks_promises/README.md) y el `AbortController` de la [semana 14](../week-14-async_await/README.md).
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
| [01 - Escuchar eventos](1-teoria/01-escuchar-eventos.md) | 30 min | `addEventListener`, el objeto evento, el teclado, `onclick`, quitar listeners, `this` y `currentTarget` |
| [02 - Propagación](1-teoria/02-propagacion.md) | 30 min | Captura, destino y burbuja, `target` y `currentTarget`, `stopPropagation` y eventos que no suben |
| [03 - Delegación](1-teoria/03-delegacion.md) | 30 min | Un listener en el contenedor, `closest` y `contains`, `data-action`, qué eventos se delegan y teclado |
| [04 - Acciones por defecto y eventos propios](1-teoria/04-acciones-eventos-propios.md) | 30 min | `preventDefault`, `cancelable` y `passive`, `CustomEvent`, `dispatchEvent`, vetos y `EventTarget` |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Escuchar eventos](2-practicas/lab-01-escuchar-eventos/README.md) | 55 min |
| [Lab 02 - Propagación](2-practicas/lab-02-propagacion/README.md) | 50 min |
| [Lab 03 - Delegación](2-practicas/lab-03-delegacion/README.md) | 55 min |
| [Lab 04 - Acciones del navegador y eventos propios](2-practicas/lab-04-acciones-eventos-propios/README.md) | 50 min |

Los labs son páginas que se abren en el navegador con doble clic: no necesitan Node ni servidor.

### 3. Proyecto (2 h)

[Centro de avisos](3-proyecto/README.md): completas las funciones de `src/logic.js` que interpretan los botones y las teclas, cambian la lista de avisos sin modificarla y crean los eventos propios y el bus, y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 18` comprueba las funciones.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 15/15 comprobaciones y datos del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-18-event_handling_avanzado/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 3 diagramas SVG
|-- 1-teoria/                  # 01 a 04
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-escuchar-eventos/
|   |-- lab-02-propagacion/
|   |-- lab-03-delegacion/
|   `-- lab-04-acciones-eventos-propios/  # cada lab: README.md y starter/ (index.html y main.js)
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

Los labs se ejecutan en el navegador: cada `main.js` es un script normal (`<script defer>`), que carga también desde un archivo abierto con doble clic. El proyecto usa módulos ES, que solo cargan por `http://`, así que se abre con `node server.js`, sin dependencias. Ese servidor usa `import.meta.main`, que necesita Node 24.2 o superior. Las salidas de los labs se obtuvieron en Chromium; las de los comandos del proyecto, con Node 24.19.0. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 17 - DOM Manipulation Moderna](../week-17-dom_manipulation_moderna/README.md) | [Semana 19 - Web Storage APIs](../week-19-web_storage_apis/README.md) |
