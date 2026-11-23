# Semana 22 - Trabajo con Archivos

Muchas páginas reciben archivos (una hoja de cálculo, una foto, un JSON de otro equipo) y muchas los devuelven (exportar a CSV, descargar un informe). Esta semana vas a ver qué es un archivo para JavaScript, a recibirlo con un botón o arrastrándolo, a leerlo y convertirlo en datos sin fiarte de su nombre, y a crear archivos en la página para que la persona los descargue, todo sin servidor.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Crear y leer `Blob` y `File`, contar bytes, cortar con `slice` y reconocer un archivo por sus primeros bytes.
- Recibir archivos con `<input type="file">` y validarlos por extensión y tamaño antes de leerlos.
- Leer archivos con `file.text()` y `FileReader`, y convertir JSON y CSV en datos validando cada fila.
- Mostrar y descargar archivos creados en la página con URLs de objeto, y liberarlas.
- Exportar datos a CSV, con sus comillas y la marca BOM, y a JSON.
- Montar una zona de arrastrar y soltar que funcione también con el botón, el teclado y el pegado.

## Requisitos previos

- `async`/`await` y `Promise.all` de las semanas [13](../week-13-programacion_asincronica_callbacks_promises/README.md) y [14](../week-14-async_await/README.md), y `try...catch` de la [semana 11](../week-11-manejo_errores_moderno/README.md).
- Crear elementos con `textContent` de la [semana 17](../week-17-dom_manipulation_moderna/README.md) y las acciones por defecto con `preventDefault` de la [semana 18](../week-18-event_handling_avanzado/README.md).
- El timestamp de un `Date` de la [semana 21](../week-21-fechas_tiempos_date_api/README.md).
- Un navegador de escritorio actual (Chrome, Edge o Firefox) con sus DevTools, y saber abrir una carpeta en el explorador de archivos.
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
| [01 - Blob y File](1-teoria/01-blob-file.md) | 30 min | Bytes y `type`, leer con `text`, `bytes` y `arrayBuffer`, `slice`, `File`, firmas y la marca BOM |
| [02 - Leer archivos del usuario](1-teoria/02-leer-archivos.md) | 35 min | `<input type="file">`, validar antes de leer, `file.text()`, `FileReader`, JSON, CSV y errores por fila |
| [03 - URLs de objeto y descargas](1-teoria/03-urls-descargas.md) | 30 min | `createObjectURL`, data URLs, `revokeObjectURL`, `<a download>`, exportar CSV y JSON, vista previa |
| [04 - Arrastrar y soltar archivos](1-teoria/04-arrastrar-soltar.md) | 25 min | Eventos de arrastre, `preventDefault`, `dataTransfer`, resaltar la zona, botón y pegado |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Blob y File](2-practicas/lab-01-blob-file/README.md) | 50 min |
| [Lab 02 - Leer archivos del usuario](2-practicas/lab-02-leer-archivos/README.md) | 55 min |
| [Lab 03 - URLs de objeto y descargas](2-practicas/lab-03-urls-descargas/README.md) | 55 min |
| [Lab 04 - Arrastrar y soltar archivos](2-practicas/lab-04-arrastrar-soltar/README.md) | 50 min |

El lab 01 se ejecuta con Node; los demás son páginas que se abren en el navegador con doble clic.

### 3. Proyecto (2 h)

[Importador de colección](3-proyecto/README.md): completas las funciones de `src/logic.js` que validan archivos, leen CSV y JSON, validan cada fila, unen los registros y preparan la exportación, y describes en `src/data.js` y en `muestras/` las fichas del dominio que te asigna el instructor. `scripts/verificar-semana.sh 22` comprueba las funciones y tus muestras.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 14/14 comprobaciones, campos y muestras del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-22-trabajo_archivos/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                      # 4 diagramas SVG
|-- 1-teoria/                      # 01 a 04
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-blob-file/          # starter/index.js
|   |-- lab-02-leer-archivos/      # starter/index.html, main.js y muestras/
|   |-- lab-03-urls-descargas/     # starter/index.html y main.js
|   `-- lab-04-arrastrar-soltar/   # starter/index.html, main.js y muestras/
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/                   # server.js, index.html, styles.css, src/ y muestras/
|-- 4-recursos/
|   |-- ebooks-free/README.md
|   |-- videografia/README.md
|   `-- webgrafia/README.md
`-- 5-glosario/
    `-- README.md
```

---

## Versiones de la semana

`Blob`, `File`, `TextEncoder` y `TextDecoder` existen en Node 24 igual que en el navegador: por eso el lab 01 y las comprobaciones del proyecto se ejecutan con Node. `FileReader`, `DataTransfer` y los eventos de arrastre solo existen en el navegador. `blob.bytes()` es reciente: necesita Node 22 o superior y un navegador actual; en uno antiguo, usa `new Uint8Array(await blob.arrayBuffer())`. El servidor del proyecto usa `import.meta.main`, que necesita Node 24.2 o superior. Las salidas se obtuvieron con Node 24.19.0 y Chromium 156. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 21 - Fechas y Tiempos (Date API)](../week-21-fechas_tiempos_date_api/README.md) | [Semana 23 - Performance y Optimización](../week-23-performance_optimizacion/README.md) |
