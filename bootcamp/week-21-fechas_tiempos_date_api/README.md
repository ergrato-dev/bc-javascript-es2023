# Semana 21 - Fechas y Tiempos (Date API)

Casi todas las páginas muestran fechas: cuándo empieza una sesión, cuánto falta, qué día cae. Esta semana vas a ver qué guarda de verdad un `Date`, a escribir fechas para personas con `Intl` en cualquier idioma, a sumar y restar días sin que el cambio de hora te engañe, a mostrar un mismo instante en varias zonas horarias y a conocer `Temporal`, la API nueva que resuelve los problemas de `Date`.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Crear un `Date` desde un timestamp, un texto ISO 8601 o sus componentes, y leerlo en hora local y en UTC.
- Evitar las trampas de `Date`: el mes desde 0, la fecha sin hora leída en UTC, las fechas inválidas, el desbordamiento y la mutabilidad.
- Formatear con `Intl.DateTimeFormat`, `formatToParts` e `Intl.RelativeTimeFormat`, y usar ISO y claves `AAAA-MM-DD` para guardar y ordenar.
- Sumar días, contar días de calendario, ordenar fechas y dibujar la cuadrícula de un mes con funciones puras.
- Distinguir un instante de una fecha de calendario y mostrar un instante en otra zona con `timeZone`.
- Reconocer los tipos de `Temporal` y saber dónde se puede usar ya.

## Requisitos previos

- `toSorted`, `findLast` y `Object.groupBy` de la [semana 5](../week-05-arrays_avanzados/README.md), y las expresiones regulares de la [semana 6](../week-06-strings_regexp_modernos/README.md).
- Guardar datos en JSON de la [semana 19](../week-19-web_storage_apis/README.md) y leer un formulario con `FormData` de la [semana 20](../week-20-formularios_validacion/README.md).
- Un navegador de escritorio actual con `Temporal` (Chrome, Edge o Firefox) y saber abrir sus DevTools.
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
| [01 - El objeto Date](1-teoria/01-objeto-date.md) | 30 min | El timestamp, crear fechas, componentes locales y UTC, la fecha sin hora, fechas inválidas, copiar, comparar y JSON |
| [02 - Formatear fechas con Intl](1-teoria/02-formatear-intl.md) | 30 min | `toLocaleDateString`, `Intl.DateTimeFormat`, `formatToParts`, `RelativeTimeFormat` y texto para máquinas |
| [03 - Operaciones con fechas](1-teoria/03-operaciones.md) | 30 min | Leer fechas locales, sumar días y meses, días de calendario, horario de verano, ordenar y meses |
| [04 - Zonas horarias y Temporal](1-teoria/04-zonas-horarias-temporal.md) | 30 min | Instantes y fechas de calendario, `timeZone`, desfases, la regla de las tres capas y `Temporal` |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - El objeto Date](2-practicas/lab-01-objeto-date/README.md) | 50 min |
| [Lab 02 - Formatear fechas con Intl](2-practicas/lab-02-formatear-intl/README.md) | 50 min |
| [Lab 03 - Operaciones con fechas](2-practicas/lab-03-operaciones/README.md) | 55 min |
| [Lab 04 - Zonas horarias y Temporal](2-practicas/lab-04-zonas-temporal/README.md) | 55 min |

Los labs 01 a 03 se ejecutan con Node; el 04 es una página que se abre en el navegador con doble clic.

### 3. Proyecto (2 h)

[Agenda de actividades](3-proyecto/README.md): completas las funciones de `src/logic.js` que leen fechas, suman días, cuentan días de calendario, construyen la cuadrícula del mes, deciden el estado de cada actividad y escriben sus textos, y describes en `src/data.js` la agenda del dominio que te asigna el instructor. `scripts/verificar-semana.sh 21` comprueba las funciones.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 14/14 comprobaciones y agenda del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-21-fechas_tiempos_date_api/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 4 diagramas SVG
|-- 1-teoria/                  # 01 a 04
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-objeto-date/    # starter/index.js
|   |-- lab-02-formatear-intl/ # starter/index.js
|   |-- lab-03-operaciones/    # starter/index.js
|   `-- lab-04-zonas-temporal/ # starter/index.html y main.js
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

Las horas locales dependen de la zona del equipo. Para que las salidas coincidan, los labs de Node fijan la zona de Bogotá con `process.env.TZ`, los comandos del proyecto también, y el lab 04 escribe la zona en cada formato. `Temporal` no existe en Node 24: el lab 04 se ejecuta en el navegador y el proyecto usa solo `Date` e `Intl`. El servidor del proyecto usa `import.meta.main`, que necesita Node 24.2 o superior. Las salidas se obtuvieron con Node 24.19.0 y Chromium 156. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 20 - Formularios y Validación](../week-20-formularios_validacion/README.md) | [Semana 22 - Trabajo con Archivos](../week-22-trabajo_archivos/README.md) |
