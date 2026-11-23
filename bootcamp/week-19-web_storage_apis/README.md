# Semana 19 - Web Storage APIs

Hasta ahora, todo lo que tu página sabía se perdía al recargar. Esta semana la página recuerda: vas a guardar datos en `localStorage` y `sessionStorage`, convertir objetos en texto y de vuelta sin perder fechas ni romper nada con datos dañados, sincronizar pestañas, conocer IndexedDB para cuando los datos crecen y hacer que tu código aguante un almacenamiento lleno o bloqueado.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Guardar, leer y borrar con `localStorage` y `sessionStorage`, y elegir entre ellos según cuánto debe durar un dato.
- Sincronizar pestañas con el evento `storage` y borrar solo tus claves con un prefijo.
- Serializar con `JSON.stringify` y `JSON.parse`, recuperar fechas, `Map` y `Set`, y leer sin romper la página cuando el texto falta, está roto o tiene otra forma.
- Guardar con un número de versión y migrar los datos antiguos.
- Abrir una base de IndexedDB, crear almacenes e índices y leer y escribir en transacciones.
- Capturar `QuotaExceededError`, comprobar si el almacenamiento está disponible y hacer que un dato caduque.

## Requisitos previos

- Las semanas [17](../week-17-dom_manipulation_moderna/README.md) y [18](../week-18-event_handling_avanzado/README.md): crear elementos con `textContent` y escuchar eventos con delegación.
- `try/catch` de la [semana 11](../week-11-manejo_errores_moderno/README.md), y promesas y `async/await` de las semanas [13](../week-13-programacion_asincronica_callbacks_promises/README.md) y [14](../week-14-async_await/README.md).
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
| [01 - localStorage y sessionStorage](1-teoria/01-web-storage.md) | 30 min | `setItem`, `getItem`, `removeItem`, todo como texto, cuánto dura y quién lo ve, prefijos y el evento `storage` |
| [02 - Serialización con JSON](1-teoria/02-serializacion.md) | 30 min | `JSON.stringify` y `JSON.parse`, lo que se pierde, *reviver*, leer con desconfianza y versionar |
| [03 - IndexedDB](1-teoria/03-indexeddb.md) | 30 min | Cuándo usarlo, `open` y `upgradeneeded`, peticiones como promesas, transacciones e índices |
| [04 - Cuotas, errores y caducidad](1-teoria/04-cuotas-y-errores.md) | 30 min | Almacenamiento no disponible, cuánto cabe, `QuotaExceededError`, caducidad y `navigator.storage` |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - localStorage y sessionStorage](2-practicas/lab-01-local-session-storage/README.md) | 55 min |
| [Lab 02 - Serialización con JSON](2-practicas/lab-02-serializacion/README.md) | 50 min |
| [Lab 03 - IndexedDB](2-practicas/lab-03-indexeddb/README.md) | 55 min |
| [Lab 04 - Cuotas, errores y caducidad](2-practicas/lab-04-cuotas-y-errores/README.md) | 50 min |

Los labs son páginas que se abren en el navegador con doble clic: no necesitan Node ni servidor.

### 3. Proyecto (2 h)

[Cuaderno persistente](3-proyecto/README.md): completas las funciones de `src/logic.js` que guardan la lista con una versión, la leen sin romperse con datos antiguos o dañados, guardan el borrador del formulario con caducidad y sincronizan las pestañas, y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 19` comprueba las funciones.

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
week-19-web_storage_apis/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 3 diagramas SVG
|-- 1-teoria/                  # 01 a 04
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-local-session-storage/
|   |-- lab-02-serializacion/
|   |-- lab-03-indexeddb/
|   `-- lab-04-cuotas-y-errores/  # cada lab: README.md y starter/ (index.html y main.js)
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
| [Semana 18 - Event Handling Avanzado](../week-18-event_handling_avanzado/README.md) | [Semana 20 - Formularios y Validación](../week-20-formularios_validacion/README.md) |
