# Semana 27 - Patrones de Diseño y Clean Code

Hasta ahora has escrito código que funciona. Esta semana aprendes a escribir código que se puede cambiar. Usas los patrones que deciden cómo se crean los objetos (Module, Singleton y Factory) y cómo se comunican y eligen su comportamiento (Observer y Strategy). Juntas las reglas del código limpio y los principios SOLID. Refactorizas código heredado sin romperlo, con tests de caracterización y pasos pequeños. Y dejas que ESLint y Prettier vigilen que no vuelva a empeorar.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Usar un módulo para separar lo público de lo privado, y explicar por qué un módulo con estado es un Singleton.
- Escribir funciones fábrica con datos privados y fábricas que eligen qué objeto crear.
- Escribir un emisor de eventos (Observer) y cambiar un `switch` por un objeto de estrategias.
- Aplicar las reglas de clean code y los principios SOLID a funciones y módulos de JavaScript.
- Reconocer los code smells y refactorizar en pasos pequeños con tests de caracterización.
- Configurar ESLint y Prettier con pnpm y arreglar lo que encuentran.

## Requisitos previos

- Módulos ES de la [semana 4](../week-04-destructuring_modulos_es2023/README.md) y clases de la [semana 3](../week-03-clases_programacion_orientada_objetos/README.md).
- Eventos propios del DOM de la [semana 18](../week-18-event_handling_avanzado/README.md) y closures y fugas de memoria de la [semana 23](../week-23-performance_optimizacion/README.md).
- Vitest de las semanas [25](../week-25-testing_vitest_parte_1/README.md) y [26](../week-26-testing_vitest_parte_2/README.md), sobre todo los dobles de prueba y el refactor en verde de TDD.
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
| [01 - Module, Singleton y Factory](1-teoria/01-module-singleton-factory.md) | 30 min | Qué es un patrón, lo público y lo privado de un módulo, la instancia única, funciones fábrica y fábricas que eligen qué crear |
| [02 - Observer y Strategy](1-teoria/02-observer-strategy.md) | 25 min | Emitir sin saber quién escucha, dejar de escuchar, `EventTarget` y estrategias en lugar de un `switch` |
| [03 - Clean code](1-teoria/03-clean-code.md) | 25 min | Nombres, funciones que hacen una cosa, objetos de opciones, cláusulas de guarda, números con nombre, efectos y comentarios |
| [04 - SOLID](1-teoria/04-solid.md) | 20 min | Los cinco principios con funciones y objetos, e inyección de dependencias |
| [05 - Code smells, refactorizar y herramientas](1-teoria/05-refactorizar-y-herramientas.md) | 20 min | Los olores más comunes, refactorizar con tests de caracterización, ESLint y Prettier |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Module, Singleton y Factory](2-practicas/lab-01-module-singleton-factory/README.md) | 50 min |
| [Lab 02 - Observer y Strategy](2-practicas/lab-02-observer-strategy/README.md) | 50 min |
| [Lab 03 - Refactorizar con tests](2-practicas/lab-03-refactorizar-con-tests/README.md) | 55 min |
| [Lab 04 - ESLint y Prettier](2-practicas/lab-04-eslint-prettier/README.md) | 55 min |

Los cuatro se ejecutan con Node. Los labs 03 y 04 tienen su `package.json`.

### 3. Proyecto (2 h)

[Refactorización de código legacy](3-proyecto/README.md): `src/legacy.js` trae `report()`, una función heredada de más de 40 líneas que valida, filtra, ordena, resume y escribe el informe de un catálogo. Escribes su versión limpia en `src/logic.js`: reglas de validación, estrategias de orden, un emisor de eventos y una fábrica que lo junta todo, con las fichas del dominio que te asigna el instructor. 60 tests de caracterización comprueban que el informe no cambia, y ESLint, que el código cumple los límites de clean code. `scripts/verificar-semana.sh 27` lo comprueba todo.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los patrones, el clean code y SOLID, explicados con tu propio código |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 18/18 comprobaciones y el catálogo del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-27-patrones_clean_code/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                                # 3 diagramas SVG
|-- 1-teoria/                                # 01 a 05
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-module-singleton-factory/     # starter/ con index.js y cuatro módulos
|   |-- lab-02-observer-strategy/            # starter/ con index.js, un emisor, un almacén y el envío
|   |-- lab-03-refactorizar-con-tests/       # starter/ con package.json, la función y sus tests
|   `-- lab-04-eslint-prettier/              # starter/ con package.json y la configuración de las dos
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/                             # package.json, eslint.config.js, src/ y tests/
|-- 4-recursos/
|   |-- ebooks-free/README.md
|   |-- videografia/README.md
|   `-- webgrafia/README.md
`-- 5-glosario/
    `-- README.md
```

---

## Versiones de la semana

ESLint 10.14.0 y Prettier 3.10.0, nuevas esta semana, y Vitest 5.1.0, la de las semanas 25 y 26, fijadas con versión exacta en cada `package.json` y en su `pnpm-lock.yaml`. ESLint 10.15.0 y Prettier 3.10.1 son las últimas publicadas, y por eso no se usan. Las reglas de ESLint se escriben una a una en `eslint.config.js`, sin `@eslint/js`: su única versión 10 es también la última publicada. Las salidas se obtuvieron con Node 24.19.0 y pnpm 12.20.0. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 26 - Testing con Vitest - Parte 2](../week-26-testing_vitest_parte_2/README.md) | [Semana 28 - Proyecto Final](../week-28-proyecto_final/README.md) |
