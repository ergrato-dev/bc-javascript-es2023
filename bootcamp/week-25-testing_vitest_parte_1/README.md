# Semana 25 - Testing con Vitest - Parte 1

Hasta ahora, `scripts/verificar-semana.sh` comprobaba tu código. Esta semana escribes tú las comprobaciones. Instalas tu primera dependencia, Vitest, con una versión exacta. Escribes tests que se leen como frases y eliges el matcher que compara lo que quieres. Organizas los tests para que no dependan unos de otros y buscas los casos límite. Y mides con la cobertura qué parte del código ejecutan, sabiendo lo que esa medida no dice.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Explicar qué es un test automático, qué es una regresión y qué diferencia un test unitario de uno de integración.
- Crear un `package.json` con pnpm e instalar Vitest como dependencia de desarrollo con una versión exacta.
- Escribir tests con `describe`, `it` y `expect`, ejecutarlos y leer el informe cuando fallan.
- Elegir entre `toBe`, `toEqual`, `toStrictEqual`, `toBeCloseTo`, `toContain`, `toMatch`, `toThrow` y otros matchers.
- Organizar los tests con preparar-actuar-comprobar, `beforeEach`, `describe` anidados e `it.each`, y probar los casos límite.
- Medir la cobertura, fijar umbrales y explicar por qué un 100 % no garantiza buenos tests.

## Requisitos previos

- Módulos ES (`import`/`export`) de la [semana 04](../week-04-destructuring_modulos_es2023/README.md).
- La separación entre `src/logic.js` y `src/main.js` que usan los proyectos desde la [semana 05](../week-05-arrays_avanzados/README.md).
- Clases de error (`RangeError`, `TypeError`) y `throw` de la [semana 11](../week-11-manejo_errores_moderno/README.md).
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
| [01 - Por qué escribir tests](1-teoria/01-por-que-tests.md) | 20 min | Qué es un test, regresiones, `node:assert`, tipos de tests, código fácil de probar y cualidades de un buen test |
| [02 - Vitest](1-teoria/02-vitest.md) | 30 min | `package.json`, versiones exactas y `pnpm-lock.yaml`, dónde van los tests, `describe`/`it`/`expect`, ejecutar y leer un fallo |
| [03 - Matchers](1-teoria/03-matchers.md) | 25 min | `toBe`, `toEqual`, `toStrictEqual`, números, textos y arrays, `toThrow`, `not` y partes de un objeto |
| [04 - Organizar los tests](1-teoria/04-organizar-tests.md) | 25 min | Preparar-actuar-comprobar, nombres, `beforeEach`, `describe` anidados, `it.each`, casos límite, `todo`, `skip` y `only` |
| [05 - Cobertura](1-teoria/05-cobertura.md) | 20 min | Las cuatro medidas, `@vitest/coverage-v8`, `include`, umbrales y mutantes |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Tu primer test](2-practicas/lab-01-primer-test/README.md) | 50 min |
| [Lab 02 - Matchers](2-practicas/lab-02-matchers/README.md) | 55 min |
| [Lab 03 - Organizar los tests](2-practicas/lab-03-organizar-tests/README.md) | 50 min |
| [Lab 04 - Cobertura](2-practicas/lab-04-cobertura/README.md) | 55 min |

Los cuatro se ejecutan con Node y Vitest. En el lab 01 creas tú el `package.json`; los demás lo traen hecho.

### 3. Proyecto (2 h)

[Tests del catálogo](3-proyecto/README.md): `src/logic.js` trae terminadas siete funciones de utilidad (normalizar textos, formatear números, paginar, buscar, ordenar, validar y resumir) y tú escribes sus tests, con los datos del catálogo del dominio que te asigna el instructor. `scripts/verificar-semana.sh 25` comprueba que tus tests pasan, cubren el 100 % de `logic.js` y fallan cuando las comprobaciones meten un error en cada función.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, explicados con tus propios tests |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 17/17 comprobaciones y el catálogo del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-25-testing_vitest_parte_1/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                          # 2 diagramas SVG
|-- 1-teoria/                          # 01 a 05
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-primer-test/            # starter/src, check.js y tests/
|   |-- lab-02-matchers/               # starter/ con package.json, src y tests
|   |-- lab-03-organizar-tests/        # starter/ con package.json, src y tests
|   `-- lab-04-cobertura/              # starter/ con package.json, src y tests
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/                       # package.json, vitest.config.js, src/ y tests/
|-- 4-recursos/
|   |-- ebooks-free/README.md
|   |-- videografia/README.md
|   `-- webgrafia/README.md
`-- 5-glosario/
    `-- README.md
```

---

## Versiones de la semana

Vitest 5.1.0 y `@vitest/coverage-v8` 5.1.0, fijados con versión exacta en cada `package.json` y en su `pnpm-lock.yaml`. Vitest 5 necesita Node 22.12 o superior. Los proyectos piden Node 24 en `engines` y pnpm 12.20.0 en `packageManager`. Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0 y Vitest 5.1.0. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 24 - Proyecto Integrador - Intermedio](../week-24-proyecto_integrador_intermedio/README.md) | [Semana 26 - Testing con Vitest - Parte 2](../week-26-testing_vitest_parte_2/README.md) |
