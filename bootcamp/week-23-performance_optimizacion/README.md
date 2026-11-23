# Semana 23 - Performance y Optimización

Una página puede hacer lo correcto y, aun así, atascarse: al teclear en un buscador, al bajar por una lista de miles de fichas o tras una hora abierta. Esta semana vas a medir antes de cambiar nada, a hacer menos veces el trabajo caro cuando los eventos llegan en ráfagas, a no calcular ni pintar lo que no hace falta y a encontrar y evitar las fugas de memoria.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Medir con `performance.now()`, `mark` y `measure`, repetir las medidas y comparar soluciones con la mediana.
- Reducir el trabajo de los eventos en ráfaga con debounce, throttle y `requestAnimationFrame`, y cancelar lo pendiente.
- Guardar resultados con memoize y una caché con límite, y preparar índices una vez.
- Pintar listas por páginas con `IntersectionObserver`, cargar imágenes al verlas y evitar recalcular el diseño a mitad del código.
- Partir tareas largas para que la página siga respondiendo.
- Reconocer y evitar las fugas de memoria más comunes, y buscarlas con las DevTools.

## Requisitos previos

- `setTimeout`, `clearTimeout` y promesas de las semanas [13](../week-13-programacion_asincronica_callbacks_promises/README.md) y [14](../week-14-async_await/README.md).
- `Map`, `Set` y `WeakMap` de la [semana 07](../week-07-sets_maps/README.md).
- Crear elementos y `DocumentFragment` de la [semana 17](../week-17-dom_manipulation_moderna/README.md), y listeners con `AbortController` de la [semana 18](../week-18-event_handling_avanzado/README.md).
- Un navegador de escritorio actual (Chrome o Edge para todo el lab 03) con sus DevTools.
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
| [01 - Medir antes de optimizar](1-teoria/01-medir.md) | 30 min | 16, 50 y 100 ms, `performance.now()`, `mark` y `measure`, la mediana, comparar soluciones y las herramientas del navegador |
| [02 - Debounce y throttle](1-teoria/02-debounce-throttle.md) | 30 min | Eventos en ráfaga, debounce, throttle con llamada final, `cancel`, `requestAnimationFrame` y listeners pasivos |
| [03 - Hacer menos trabajo](1-teoria/03-menos-trabajo.md) | 30 min | Memoize con límite, índices, paginar con `IntersectionObserver`, `loading="lazy"`, fases del pintado, tareas largas e `import()` |
| [04 - Fugas de memoria](1-teoria/04-fugas-memoria.md) | 30 min | El recolector y lo alcanzable, listeners, temporizadores, cachés, nodos desconectados, closures, `WeakMap` y las DevTools |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Medir el rendimiento](2-practicas/lab-01-medir/README.md) | 50 min |
| [Lab 02 - Debounce y throttle](2-practicas/lab-02-debounce-throttle/README.md) | 50 min |
| [Lab 03 - Hacer menos trabajo en la página](2-practicas/lab-03-menos-trabajo/README.md) | 60 min |
| [Lab 04 - Fugas de memoria](2-practicas/lab-04-fugas-memoria/README.md) | 50 min |

Los labs 01, 02 y 04 se ejecutan con Node; el 03 es una página que se abre en el navegador con doble clic.

### 3. Proyecto (2 h)

[Buscador rápido del catálogo](3-proyecto/README.md): completas las funciones de `src/logic.js` que normalizan, indexan, buscan y paginan, las que limitan el trabajo (`debounce`, `throttle`, `memoize`) y la que mide, y describes en `src/data.js` el catálogo del dominio que te asigna el instructor. `scripts/verificar-semana.sh 23` comprueba las funciones y busca en tu catálogo.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios y medidas |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 14/14 comprobaciones y el catálogo del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-23-performance_optimizacion/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                          # 4 diagramas SVG
|-- 1-teoria/                          # 01 a 04
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-medir/                  # starter/index.js
|   |-- lab-02-debounce-throttle/      # starter/index.js
|   |-- lab-03-menos-trabajo/          # starter/index.html y main.js
|   `-- lab-04-fugas-memoria/          # starter/index.js
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/                       # server.js, index.html, styles.css y src/
|-- 4-recursos/
|   |-- ebooks-free/README.md
|   |-- videografia/README.md
|   `-- webgrafia/README.md
`-- 5-glosario/
    `-- README.md
```

---

## Versiones de la semana

`performance.now()`, `mark`, `measure` y `PerformanceObserver` existen en Node 24 igual que en el navegador: por eso los labs 01, 02 y 04 y las comprobaciones del proyecto se ejecutan con Node. `IntersectionObserver`, `requestAnimationFrame` y el cálculo del diseño solo existen en el navegador. El tipo de entrada `longtask` solo lo tienen Chrome y Edge. El servidor del proyecto usa `import.meta.main`, que necesita Node 24.2 o superior. Las salidas se obtuvieron con Node 24.19.0 y Chromium 156; los tiempos medidos dependen del equipo. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 22 - Trabajo con Archivos](../week-22-trabajo_archivos/README.md) | [Semana 24 - Proyecto Integrador - Intermedio](../week-24-proyecto_integrador_intermedio/README.md) |
