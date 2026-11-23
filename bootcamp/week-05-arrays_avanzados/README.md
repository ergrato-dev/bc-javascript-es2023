# Semana 05 - Arrays Avanzados

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Aplanar arrays anidados con `flat()` y transformar y aplanar a la vez con `flatMap()`.
- Crear arrays con `Array.from()` (desde texto, `Set` u objetos con `length`, y para generar secuencias) y con `Array.of()`.
- Encadenar `filter`, `map`, `sort`, `slice`, `some` y `reduce` en una sola expresión legible, con funciones con nombre.
- Ordenar números, textos y objetos con una función de comparación, por varios criterios y con valores vacíos, y elegir entre `sort()` y `toSorted()` (ES2023).
- Agrupar e indexar un array en un objeto con `reduce`.
- Buscar desde el final con `findLast()` y `findLastIndex()` (ES2023), y cambiar o quitar ese elemento sin modificar el array con `with()` y `toSpliced()`.

## Requisitos previos

- La [semana 02](../week-02-operadores_metodos_modernos_arrays/README.md) (spread, `map`, `filter`, `reduce`, propiedades computadas) y la [semana 04](../week-04-destructuring_modulos_es2023/README.md) (destructuring y módulos).
- Node y pnpm en las versiones de [docs/stack-versions.md](../../docs/stack-versions.md):

  ```bash
  node --version
  # v24.19.0 (o superior)
  pnpm --version
  # 12.21.0 (o superior)
  ```

---

## Contenidos

### 1. Teoría (2 h)

| Archivo | Tiempo | Tema |
|---|---|---|
| [01 - flat y flatMap](1-teoria/01-flat-flatmap.md) | 20 min | Aplanar arrays anidados |
| [02 - Array.from y Array.of](1-teoria/02-array-from-of.md) | 20 min | Crear arrays desde iterables y generar secuencias |
| [03 - Chaining avanzado](1-teoria/03-chaining-avanzado.md) | 20 min | Encadenar métodos de forma legible |
| [04 - Transformaciones de datos](1-teoria/04-transformaciones-datos.md) | 20 min | Agrupar, indexar y reorganizar datos |
| [05 - Sort personalizado](1-teoria/05-sort-personalizado.md) | 20 min | Funciones de comparación, `sort()` frente a `toSorted()` |
| [06 - findLast y findLastIndex](1-teoria/06-findLast-findLastIndex.md) | 20 min | Buscar desde el final (ES2023) |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - `flat()` y `flatMap()`](2-practicas/lab-01-flat-flatmap/README.md) | 40 min |
| [Lab 02 - `Array.from()` y `Array.of()`](2-practicas/lab-02-array-from-of/README.md) | 40 min |
| [Lab 03 - Encadenar métodos](2-practicas/lab-03-chaining/README.md) | 45 min |
| [Lab 04 - Ordenar y transformar](2-practicas/lab-04-sort-transform/README.md) | 45 min |
| [Lab 05 - `findLast()` y `findLastIndex()`](2-practicas/lab-05-findlast/README.md) | 40 min |

### 3. Proyecto (2 h)

[Explorador de colección](3-proyecto/README.md): completas las cinco funciones puras de `src/logic.js` (etiquetas sin repetir, ordenar por tres criterios, filtrar y ordenar, agrupar por categoría y buscar el último añadido) y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 05` comprueba las funciones.

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
week-05-arrays_avanzados/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 6 diagramas SVG
|-- 1-teoria/                  # 01 a 06
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-flat-flatmap/
|   |-- lab-02-array-from-of/
|   |-- lab-03-chaining/
|   |-- lab-04-sort-transform/
|   `-- lab-05-findlast/
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/               # index.html, styles.css, src/data.js, src/logic.js, src/main.js
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
| [Semana 04 - Destructuring y Módulos ES2023](../week-04-destructuring_modulos_es2023/README.md) | [Semana 06 - Strings y RegExp Modernos](../week-06-strings_regexp_modernos/README.md) |
