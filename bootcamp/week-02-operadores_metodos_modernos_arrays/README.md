# Semana 02 - Operadores y Métodos Modernos de Arrays

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Copiar y combinar arrays y objetos con spread (`...`) sin modificar los originales.
- Recoger argumentos y elementos sobrantes con rest, en parámetros y en destructuring.
- Dar valores por defecto a los parámetros de una función, también a los desestructurados.
- Transformar, filtrar, buscar y resumir arrays con `map`, `filter`, `find`, `findIndex`, `some`, `every`, `includes` y `reduce`, y encadenarlos.
- Escribir objetos con propiedades y métodos abreviados y con propiedades computadas.
- Leer desde el final con `at()` y comprobar propiedades propias con `Object.hasOwn()` (ES2022).

## Requisitos previos

- La [semana 01](../week-01-introduccion_javascript_moderno_es2023/README.md): `const`/`let`, template literals, arrow functions, destructuring, `?.` y `??`.
- Node y pnpm en las versiones de [docs/stack-versions.md](../../docs/stack-versions.md):

  ```bash
  node --version
  # v24.19.0 (o superior)
  pnpm --version
  # 11.20.0 (o superior)
  ```

---

## Contenidos

### 1. Teoría (2 h)

| Archivo | Tiempo | Tema |
|---|---|---|
| [01 - Spread](1-teoria/01-spread-operator.md) | 20 min | Expandir arrays y objetos para copiar y combinar |
| [02 - Rest](1-teoria/02-rest-parameters.md) | 15 min | Recoger argumentos y elementos sobrantes |
| [03 - Parámetros por defecto](1-teoria/03-default-parameters.md) | 20 min | Valores por defecto, también con destructuring |
| [04 - Métodos de array](1-teoria/04-array-methods.md) | 25 min | `map`, `filter`, `reduce`, `find`, `some`, `every` y encadenamiento |
| [05 - Mejoras de objetos](1-teoria/05-object-enhancements.md) | 25 min | Propiedades abreviadas, computadas y `Object.entries` |
| [06 - Métodos ES2022](1-teoria/06-metodos-es2022.md) | 15 min | `at()` y `Object.hasOwn()` |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Spread y rest](2-practicas/lab-01-spread-rest/README.md) | 40 min |
| [Lab 02 - Buscar en arrays](2-practicas/lab-02-array-methods/README.md) | 40 min |
| [Lab 03 - `map` y `filter`](2-practicas/lab-03-map-filter/README.md) | 45 min |
| [Lab 04 - `reduce`](2-practicas/lab-04-reduce/README.md) | 45 min |
| [Lab 05 - `at()` y `Object.hasOwn()`](2-practicas/lab-05-metodos-es2022/README.md) | 40 min |

### 3. Proyecto (2 h)

[Gestor de colección de tu dominio](3-proyecto/README.md): completas las funciones puras de `src/logic.js` (crear, actualizar, eliminar, filtrar y contar sin modificar nunca el array) y adaptas los datos al dominio que te asigna el instructor. `scripts/verificar-semana.sh 02` comprueba las funciones.

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
week-02-operadores_metodos_modernos_arrays/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 6 diagramas SVG, uno por archivo de teoría
|-- 1-teoria/                  # 01 a 06
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-spread-rest/
|   |-- lab-02-array-methods/
|   |-- lab-03-map-filter/
|   |-- lab-04-reduce/
|   `-- lab-05-metodos-es2022/
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
| [Semana 01 - Introducción a JavaScript Moderno](../week-01-introduccion_javascript_moderno_es2023/README.md) | [Semana 03 - Clases y Programación Orientada a Objetos](../week-03-clases_programacion_orientada_objetos/README.md) |
