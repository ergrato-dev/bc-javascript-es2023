# Semana 13 - Programación Asincrónica - Callbacks y Promises

Primera semana de la etapa Intermedio. Hasta ahora, cada línea de código terminaba antes de que empezara la siguiente. Esta semana aparece el código que **espera**: un temporizador, una petición a un servidor, un archivo que se lee. Verás cómo lo organiza JavaScript con el event loop, cómo se escribía con callbacks y por qué las promesas lo hacen más fácil de leer y de controlar.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Explicar el event loop y predecir en qué orden se ejecutan el código síncrono, las microtareas (promesas) y las macrotareas (`setTimeout`).
- Escribir y usar callbacks *error-first*, y reconocer el *callback hell*.
- Crear promesas con `new Promise`, consumirlas con `.then()`, `.catch()` y `.finally()`, y convertir una función con callback en una que devuelve una promesa.
- Encadenar operaciones asíncronas con `.then()`, propagar errores hasta un único `.catch()` y recuperarse de ellos.
- Combinar varias promesas con `Promise.all()`, `Promise.race()`, `Promise.allSettled()` y `Promise.any()`, y elegir el adecuado en cada caso.

## Requisitos previos

- Las semanas 01 a 12, en especial las arrow functions, el destructuring, `reduce` ([semana 05](../week-05-arrays_avanzados/README.md)) y los errores con `cause` ([semana 11](../week-11-manejo_errores_moderno/README.md)).
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
| [01 - Introducción a la asincronía](1-teoria/01-introduccion-asincronia.md) | 30 min | Síncrono y asíncrono, pila de llamadas, colas y event loop |
| [02 - Callbacks y sus problemas](1-teoria/02-callbacks-problemas.md) | 25 min | Callbacks, *error-first*, *callback hell* e inversión de control |
| [03 - Promises: fundamentos](1-teoria/03-promises-fundamentos.md) | 35 min | Estados, `then`/`catch`/`finally` y encadenamiento |
| [04 - Métodos de Promise](1-teoria/04-promise-methods.md) | 30 min | `all`, `race`, `allSettled` y `any` |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Callbacks y event loop](2-practicas/lab-01-callbacks/README.md) | 50 min |
| [Lab 02 - Promesas básicas](2-practicas/lab-02-promises-basicas/README.md) | 50 min |
| [Lab 03 - Encadenar promesas](2-practicas/lab-03-promise-chaining/README.md) | 55 min |
| [Lab 04 - Combinadores de promesas](2-practicas/lab-04-promise-combinators/README.md) | 55 min |

### 3. Proyecto (2 h)

[Panel de servicios](3-proyecto/README.md): completas las funciones de `src/logic.js` que consultan servicios simulados de tu dominio con un callback, con una promesa, en orden, todos a la vez, en un informe, el primero que conteste y con tiempo límite, y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 13` comprueba las funciones.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 13/13 comprobaciones y datos del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-13-programacion_asincronica_callbacks_promises/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 4 diagramas SVG
|-- 1-teoria/                  # 01 a 04
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-callbacks/
|   |-- lab-02-promises-basicas/
|   |-- lab-03-promise-chaining/
|   `-- lab-04-promise-combinators/
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
| [Semana 12 - Proyecto Integrador - Fundamentos](../week-12-proyecto_integrador_fundamentos/README.md) | [Semana 14 - Async/Await](../week-14-async_await/README.md) |
