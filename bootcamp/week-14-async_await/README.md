# Semana 14 - Async/Await

La semana 13 terminó con cadenas de `.then()` y combinadores de promesas. Esta semana se escribe el mismo código asíncrono con `async` y `await`, que lo deja de arriba abajo como el código síncrono y devuelve el `try`/`catch` de siempre para los errores. Verás también cuándo esperar una cosa detrás de otra y cuándo lanzarlas a la vez, y cómo recorrer datos que llegan poco a poco con `for await...of` y los generadores asíncronos.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Declarar funciones `async`, explicar por qué siempre devuelven una promesa y esperar resultados con `await`, también en el nivel superior de un módulo.
- Reescribir una cadena de `.then()` con `async`/`await` y predecir en qué orden se ejecuta el código que rodea a un `await`.
- Manejar errores asíncronos con `try`/`catch`/`finally`, relanzarlos con `cause`, saber cuándo hace falta `return await` y reintentar una operación que falla.
- Elegir entre ejecución en orden y en paralelo, combinarlas cuando unas operaciones dependen de otras y limitar cuántas corren a la vez.
- Recorrer iterables asíncronos con `for await...of`, escribir generadores asíncronos (`async function*`) y reunir sus valores con `Array.fromAsync`.

## Requisitos previos

- La [semana 13](../week-13-programacion_asincronica_callbacks_promises/README.md): promesas, `.then()`/`.catch()` y `Promise.all`, `allSettled` y `race`.
- Los generadores de la [semana 08](../week-08-iteradores_generadores/README.md) y los errores con `cause` de la [semana 11](../week-11-manejo_errores_moderno/README.md).
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
| [01 - Funciones async](1-teoria/01-async-functions.md) | 30 min | Sintaxis, valor de retorno y comparación con promesas |
| [02 - await](1-teoria/02-await-keyword.md) | 30 min | Qué espera, flujo de ejecución, errores comunes y *top-level await* |
| [03 - Manejo de errores](1-teoria/03-error-handling.md) | 30 min | `try`/`catch`/`finally`, errores propios, `cause` y reintentos |
| [04 - Patrones avanzados](1-teoria/04-advanced-patterns.md) | 30 min | En orden o en paralelo, `for await...of`, generadores asíncronos, concurrencia y cancelación |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Funciones async y await](2-practicas/lab-01-async-basico/README.md) | 50 min |
| [Lab 02 - Errores con async/await](2-practicas/lab-02-error-handling/README.md) | 55 min |
| [Lab 03 - En orden o a la vez](2-practicas/lab-03-parallel-vs-sequential/README.md) | 55 min |
| [Lab 04 - Iteración asíncrona](2-practicas/lab-04-async-iteration/README.md) | 50 min |

### 3. Proyecto (2 h)

[Explorador de catálogo](3-proyecto/README.md): completas las funciones de `src/logic.js` que piden las fichas de tu dominio a un servidor simulado en orden, a la vez, solo las que existan, con reintentos, por páginas y buscando por nombre, y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 14` comprueba las funciones.

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
week-14-async_await/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 3 diagramas SVG
|-- 1-teoria/                  # 01 a 04
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-async-basico/
|   |-- lab-02-error-handling/
|   |-- lab-03-parallel-vs-sequential/
|   `-- lab-04-async-iteration/
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

Node para ejecutar los labs y comprobar el proyecto; `pnpm dlx serve` para abrir el proyecto en el navegador. `Array.fromAsync` (lab 04 y comprobaciones del proyecto) necesita Node 22 o superior. Las salidas de este material se obtuvieron con Node 24.19.0. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 13 - Programación Asincrónica - Callbacks y Promises](../week-13-programacion_asincronica_callbacks_promises/README.md) | [Semana 15 - Fetch API](../week-15-fetch_api/README.md) |
