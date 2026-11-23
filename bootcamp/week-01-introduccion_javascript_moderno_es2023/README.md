# Semana 01 - Introducción a JavaScript Moderno

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Declarar variables con `const` y `let` y explicar el ámbito de bloque.
- Construir textos con template literals, con interpolación y varias líneas.
- Escribir arrow functions con retorno implícito y explícito, y pasarlas a `map`, `filter` y `reduce`.
- Extraer datos de objetos y arrays con destructuring, valores por defecto y renombrado.
- Leer datos que pueden faltar con `?.` y `??`, y asignar valores por defecto con `??=`, `||=` y `&&=`.
- Escribir números grandes legibles con separadores numéricos (`1_000_000`).

## Requisitos previos

- Terminal básica: moverte entre carpetas con `cd` y ejecutar comandos.
- Node y pnpm instalados, en las versiones de [docs/stack-versions.md](../../docs/stack-versions.md):

  ```bash
  node --version
  # v24.19.0 (o superior)
  pnpm --version
  # 12.20.0 (o superior)
  ```

- Un navegador con DevTools (Chrome, Edge o Firefox) y VS Code.

No se asume nada de JavaScript.

---

## Contenidos

### 1. Teoría (2 h)

| Archivo | Tiempo | Tema |
|---|---|---|
| [01 - Introducción a ES2023](1-teoria/01-introduccion-es6.md) | 15 min | De ES5 a ES2023: por qué JavaScript cambió |
| [02 - let y const](1-teoria/02-let-const.md) | 20 min | Declaración de variables y ámbito de bloque |
| [03 - Template literals](1-teoria/03-template-literals.md) | 20 min | Interpolación y textos de varias líneas |
| [04 - Arrow functions](1-teoria/04-arrow-functions.md) | 25 min | Sintaxis de flecha, retorno y métodos de array |
| [05 - Destructuring básico](1-teoria/05-destructuring-basico.md) | 15 min | Extraer valores de objetos y arrays |
| [06 - Operadores modernos](1-teoria/06-operadores-modernos.md) | 25 min | `?.`, `??`, `??=`, `\|\|=`, `&&=` y `1_000` |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Variables con `const` y `let`](2-practicas/lab-01-variables-const-let/README.md) | 40 min |
| [Lab 02 - Template literals](2-practicas/lab-02-template-literals/README.md) | 40 min |
| [Lab 03 - Arrow functions](2-practicas/lab-03-arrow-functions/README.md) | 45 min |
| [Lab 04 - Destructuring](2-practicas/lab-04-destructuring/README.md) | 45 min |
| [Lab 05 - Operadores modernos](2-practicas/lab-05-operadores-modernos/README.md) | 40 min |

### 3. Proyecto (2 h)

[Ficha interactiva de tu dominio](3-proyecto/README.md): completas las funciones puras de `src/logic.js` y adaptas los datos al dominio que te asigna el instructor. `scripts/verificar-semana.sh 01` comprueba las funciones.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cinco labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 12/12 comprobaciones y datos del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-01-introduccion_javascript_moderno_es2023/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 6 diagramas SVG, uno por archivo de teoría
|-- 1-teoria/                  # 01 a 06
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-variables-const-let/
|   |-- lab-02-template-literals/
|   |-- lab-03-arrow-functions/
|   |-- lab-04-destructuring/
|   `-- lab-05-operadores-modernos/
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/               # index.html, styles.css, src/logic.js, src/main.js
|-- 4-recursos/
|   |-- ebooks-free/README.md
|   |-- videografia/README.md
|   `-- webgrafia/README.md
`-- 5-glosario/
    `-- README.md
```

---

## Versiones de la semana

Node para ejecutar los labs y comprobar el proyecto; `pnpm dlx serve` para abrir el proyecto en el navegador. Las salidas de este material se obtuvieron con Node 24.19.0. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Inicio del bootcamp](../README.md) | [Semana 02 - Operadores y Métodos Modernos de Arrays](../week-02-operadores_metodos_modernos_arrays/README.md) |
