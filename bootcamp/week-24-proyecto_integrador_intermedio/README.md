# Semana 24 - Proyecto Integrador - Intermedio

## Objetivos de aprendizaje

Esta semana no hay conceptos nuevos: cierras la etapa Intermedio juntando en una aplicación lo de las semanas 13 a 23. Al terminar la semana podrás:

- Repartir una aplicación asíncrona en datos, lógica sin DOM, página y servidor, y seguir el camino de un evento hasta la red y de vuelta a la pantalla.
- Hablar con una API REST con una sola función que concentra el JSON, el tiempo máximo, la cancelación y los errores HTTP.
- Llevar todo el estado de la página en un objeto que solo cambia una función pura, y describir cada estado con palabras para la persona.
- Guardar una copia local con versión y caducidad para enseñar algo al instante, también sin conexión.
- Pintar fichas desde datos sin riesgo, validar un formulario con las mismas reglas que el servidor y no enviar dos veces.

## Requisitos previos

- Las [semanas 13 a 23](../README.md). El [repaso](1-teoria/01-repaso-semanas-13-23.md) dice qué usa el proyecto de cada una y enlaza dónde se explica.
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
| [01 - Repaso de las semanas 13 a 23](1-teoria/01-repaso-semanas-13-23.md) | 15 min | Qué usa el proyecto de cada semana, con un ejemplo corto de cada idea |
| [02 - Arquitectura de una aplicación asíncrona](1-teoria/02-arquitectura.md) | 10 min | Cuatro archivos, el camino de un evento y la copia local al arrancar |
| [03 - Estados de carga y experiencia de uso](1-teoria/03-estados-carga.md) | 5 min | Qué ve la persona mientras espera, sin resultados y cuando algo falla |

### 2. Prácticas (2 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Peticiones que se cruzan](2-practicas/lab-01-peticiones-cruzadas/README.md) | 50 min |
| [Lab 02 - La copia local](2-practicas/lab-02-copia-local/README.md) | 50 min |
| [Lab 03 - Estados en la página](2-practicas/lab-03-estados-pagina/README.md) | 50 min |

### 3. Proyecto (4 h 30 min)

[Catálogo conectado](3-proyecto/README.md): completas `src/logic.js` (`requestJson`, `createLatest`, `reduce`, `statusText`, `cardHtml`, `validate` y `createCache`) y adaptas `src/data.js` al dominio que te asigna el instructor. La página lista, busca, crea, edita y borra fichas en una API local (`node server.js`) y guarda una copia en `localStorage`. `scripts/verificar-semana.sh 24` comprueba la lógica y la prueba contra tu servidor.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Explicar con ejemplos propios cómo encajan los conceptos de las semanas 13 a 23 en el proyecto |
| Desempeño | 40% | Los tres labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 14/14 comprobaciones, catálogo del dominio y página que funciona |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-24-proyecto_integrador_intermedio/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                          # 2 diagramas SVG
|-- 1-teoria/                          # 01 a 03 (repaso)
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-peticiones-cruzadas/    # starter/index.js
|   |-- lab-02-copia-local/            # starter/index.js
|   `-- lab-03-estados-pagina/         # starter/index.html y main.js
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

`fetch`, `Response`, `AbortSignal.timeout`, `AbortSignal.any` e `Intl` existen en Node 24 igual que en el navegador: por eso los labs 01 y 02 y las comprobaciones del proyecto se ejecutan con Node. `localStorage` solo existe en el navegador; el lab 02 y las comprobaciones usan un almacén de mentira con los mismos métodos. El servidor del proyecto usa `import.meta.main`, que necesita Node 24.2 o superior. Las salidas se obtuvieron con Node 24.19.0 y Chromium 156. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 23 - Performance y Optimización](../week-23-performance_optimizacion/README.md) | Semana 25 - Testing con Vitest - Parte 1 (pendiente) |
