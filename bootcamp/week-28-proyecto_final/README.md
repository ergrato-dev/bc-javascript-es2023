# Semana 28 - Proyecto Final

## Objetivos de aprendizaje

Esta semana no hay conceptos nuevos: cierras el bootcamp con una aplicación completa que junta lo de las 27 semanas anteriores, escrita y comprobada como en un equipo profesional. Al terminar la semana podrás:

- Repartir una aplicación en módulos con una responsabilidad cada uno y explicar qué patrón usa cada uno y por qué.
- Llevar el estado de una página en un almacén que cambia solo con acciones, avisa cuando algo cambia y del que la vista se calcula.
- Escribir un cliente de API que recibe `fetch`, y probarlo con un `fetch` falso y contra un servidor de verdad.
- Escribir los tests de tu propio código con una cobertura mínima, y dejar que ESLint, Prettier y Vitest lo comprueben todo con un solo comando.
- Planificar un proyecto en pasos pequeños y presentarlo en 5 minutos.

## Requisitos previos

- Las [semanas 1 a 27](../README.md). El [repaso](1-teoria/01-repaso-semanas-25-27.md) dice qué usa el proyecto de las semanas 25 a 27 y enlaza los repasos de las etapas anteriores.
- Node y pnpm en las versiones de [docs/stack-versions.md](../../docs/stack-versions.md), y un navegador actual (Chrome, Edge o Firefox) con sus DevTools:

  ```bash
  node --version
  # v24.19.0 (o superior)
  pnpm --version
  # 12.20.0 (o superior)
  ```

---

## Contenidos

### 1. Repaso (30 min)

Semana integradora: la teoría es un repaso de lo que ya conoces, y el tiempo que otras semanas van a teoría nueva va al proyecto.

| Archivo | Tiempo | Tema |
|---|---|---|
| [01 - Repaso de las semanas 25 a 27](1-teoria/01-repaso-semanas-25-27.md) | 15 min | Tests, dobles de prueba, patrones y clean code: qué usa el proyecto de cada semana |
| [02 - Arquitectura de la aplicación final](1-teoria/02-arquitectura-final.md) | 10 min | Un módulo por responsabilidad, el camino de una acción y qué se prueba cómo |
| [03 - Planificar y presentar](1-teoria/03-planificar-y-presentar.md) | 5 min | El plan, los pasos pequeños en verde, qué hacer si te atascas y la presentación de 5 minutos |

### 2. Prácticas (2 h)

| Lab | Tiempo |
|---|---|
| [Lab 01 - El almacén y la vista](2-practicas/lab-01-almacen-y-vista/README.md) | 1 h |
| [Lab 02 - La cadena de calidad](2-practicas/lab-02-cadena-de-calidad/README.md) | 1 h |

### 3. Proyecto (5 h)

[Catálogo completo](3-proyecto/README.md): adaptas `src/data.js` al dominio que te asigna el instructor, completas `src/logic.js` (`validate`, `filterItems`, `SORTERS`, `sortItems`, `paginate`, `summarize`, `reduce` y `selectPage`), `src/store.js` (`createStore`) y `src/api.js` (`createApi`), y escribes sus tests. La página carga las fichas de una API local, busca, ordena, pagina, resume y edita. `pnpm check` comprueba ESLint, Prettier y la cobertura, y `scripts/verificar-semana.sh 28` comprueba la lógica, tus tests y la API contra tu servidor. El tiempo incluye 30 minutos de plan y 30 de presentación.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | La presentación: explicar la arquitectura y las decisiones del proyecto con ejemplos propios |
| Desempeño | 40% | Los dos labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 21/21 comprobaciones, catálogo del dominio y página que funciona |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-28-proyecto_final/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                          # 1 diagrama SVG
|-- 1-teoria/                          # 01 a 03 (repaso)
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-almacen-y-vista/        # starter/index.js y src/
|   `-- lab-02-cadena-de-calidad/      # starter/ con package.json, src/ y tests/
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/                       # server.js, index.html, styles.css, src/ y tests/
|-- 4-recursos/
|   |-- ebooks-free/README.md
|   |-- videografia/README.md
|   `-- webgrafia/README.md
`-- 5-glosario/
    `-- README.md
```

---

## Versiones de la semana

El lab 02 y el proyecto usan Vitest 5.1.0 y `@vitest/coverage-v8` 5.1.0 (semanas 25 y 26), y ESLint 10.14.0 y Prettier 3.10.0 (semana 27), todas con versión exacta y su `pnpm-lock.yaml`. `Response` y `fetch` existen en Node 24 igual que en el navegador: por eso los tests de `createApi` se ejecutan con Node. El servidor del proyecto usa `import.meta.main`, que necesita Node 24.2 o superior. Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0 y Chromium 156. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 27 - Patrones de Diseño y Clean Code](../week-27-patrones_clean_code/README.md) | [Índice del bootcamp](../README.md) |
