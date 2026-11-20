# Semana 04 - Destructuring y Módulos ES2023

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Sacar valores de un array a variables por posición, con huecos, rest y valores por defecto.
- Sacar propiedades de un objeto por nombre, renombrarlas, darles valores por defecto y abrir objetos anidados, también en los parámetros de una función.
- Repartir un programa en módulos con `export` e `import`, y reunirlos en un barrel.
- Elegir entre exports con nombre y export por defecto, e importar cada uno.
- Cargar un módulo bajo demanda con `import()` y usar lo que devuelve.

## Requisitos previos

- La [semana 03](../week-03-clases_programacion_orientada_objetos/README.md), y de la [semana 02](../week-02-operadores_metodos_modernos_arrays/README.md) spread, rest y los parámetros por defecto.
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
| [01 - Destructuring de arrays](1-teoria/01-destructuring-arrays.md) | 20 min | Posición, huecos, rest, valores por defecto e intercambio |
| [02 - Destructuring de objetos](1-teoria/02-destructuring-objetos.md) | 25 min | Renombrado, valores por defecto, anidado y parámetros |
| [03 - Módulos ES](1-teoria/03-modulos-es6.md) | 30 min | `import`/`export`, rutas y organización en archivos |
| [04 - Named y default exports](1-teoria/04-named-default-exports.md) | 25 min | Cuándo usar cada uno y cómo se importan |
| [05 - Imports dinámicos](1-teoria/05-dynamic-imports.md) | 20 min | `import()`, carga bajo demanda y errores |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Destructuring de arrays](2-practicas/lab-01-destructuring-arrays/README.md) | 45 min |
| [Lab 02 - Destructuring de objetos](2-practicas/lab-02-destructuring-objetos/README.md) | 55 min |
| [Lab 03 - Módulos básicos](2-practicas/lab-03-modulos-basicos/README.md) | 55 min |
| [Lab 04 - Imports avanzados](2-practicas/lab-04-imports-avanzados/README.md) | 55 min |

### 3. Proyecto (2 h)

[Catálogo modular](3-proyecto/README.md): pones los datos de tu dominio en `src/data.js` y escribes con destructuring las funciones de `src/logic.js` (leer una línea de texto, resumir y filtrar) y el export por defecto de `src/stats.js`, que la página carga con `import()`. `scripts/verificar-semana.sh 04` comprueba los tres módulos.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 12/12 comprobaciones y datos del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-04-destructuring_modulos_es2023/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 5 diagramas SVG, uno por archivo de teoría
|-- 1-teoria/                  # 01 a 05
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-destructuring-arrays/
|   |-- lab-02-destructuring-objetos/
|   |-- lab-03-modulos-basicos/     # varios módulos: main.js, config.js, utils/
|   `-- lab-04-imports-avanzados/   # app.js y features/
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/               # index.html, styles.css, src/{main,data,logic,stats}.js
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
| [Semana 03 - Clases y Programación Orientada a Objetos](../week-03-clases_programacion_orientada_objetos/README.md) | [Semana 05 - Arrays Avanzados](../week-05-arrays_avanzados/README.md) |
