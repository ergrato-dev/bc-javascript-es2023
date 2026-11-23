# Semana 17 - DOM Manipulation Moderna

Hasta ahora, el `main.js` de cada proyecto venía hecho: tú escribías la lógica y él la pintaba en la página. Esta semana aprendes qué hace ese archivo. Vas a ver la página como un árbol de nodos, encontrar en él lo que quieres cambiar, crear, mover y quitar elementos, cambiar su texto, sus atributos y sus clases sin abrir la puerta a un ataque XSS, y pintar una lista a partir de los datos reutilizando los nodos que no cambian.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Explicar el DOM como un árbol de nodos y distinguir elementos, nodos de texto y colecciones estáticas y vivas.
- Seleccionar elementos con `querySelector` y `querySelectorAll` y moverte por el árbol con `parentElement`, `closest` y `dataset`.
- Crear, insertar, mover, copiar y quitar nodos con `createElement`, `append`, `before`, `after`, `cloneNode`, `remove` y `replaceChildren`.
- Elegir entre `textContent` e `innerHTML`, explicar un ataque XSS y escapar un texto para meterlo en HTML.
- Distinguir atributos de propiedades y pintar estados con `classList`, `hidden`, `aria-pressed` y variables CSS.
- Pintar una lista desde los datos con `<template>` y con un render por clave que conserva el foco.

## Requisitos previos

- `Array.from`, `flat` y `toSorted` de la [semana 05](../week-05-arrays_avanzados/README.md), y `Set` y `Map` de la [semana 07](../week-07-sets_maps/README.md).
- Los módulos ES (`import` y `export`) de la [semana 04](../week-04-destructuring_modulos_es2023/README.md).
- Un navegador de escritorio actual (Chrome, Edge, Firefox o Safari) y saber abrir sus DevTools.
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
| [01 - El árbol y la selección](1-teoria/01-arbol-seleccion.md) | 30 min | El DOM, nodos y elementos, `querySelector`, colecciones vivas, `closest`, `dataset` y cuándo existe el árbol |
| [02 - Crear, insertar y quitar nodos](1-teoria/02-crear-insertar.md) | 30 min | `createElement`, posiciones de inserción, mover, `cloneNode`, `remove`, `replaceChildren` y fragmentos |
| [03 - Contenido, atributos y clases](1-teoria/03-contenido-clases.md) | 30 min | `textContent` e `innerHTML`, XSS y escapado, atributos y propiedades, `classList`, estados accesibles y estilos |
| [04 - Plantillas y render](1-teoria/04-plantillas-render.md) | 30 min | `<template>`, render desde los datos, render por clave y describir la interfaz con objetos |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - El árbol y la selección](2-practicas/lab-01-arbol-seleccion/README.md) | 50 min |
| [Lab 02 - Crear, insertar y quitar nodos](2-practicas/lab-02-crear-insertar/README.md) | 50 min |
| [Lab 03 - Contenido, atributos y clases](2-practicas/lab-03-contenido-clases/README.md) | 55 min |
| [Lab 04 - Plantillas y render](2-practicas/lab-04-plantillas-render/README.md) | 55 min |

Los labs son páginas que se abren en el navegador con doble clic: no necesitan Node ni servidor.

### 3. Proyecto (2 h)

[Constructor de fichas](3-proyecto/README.md): completas las funciones de `src/logic.js` que describen cada ficha con objetos, las convierten en HTML escapado, filtran y ordenan las que se ven y calculan qué nodos hay que crear o quitar, y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 17` comprueba las funciones.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 16/16 comprobaciones y datos del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-17-dom_manipulation_moderna/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 4 diagramas SVG
|-- 1-teoria/                  # 01 a 04
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-arbol-seleccion/
|   |-- lab-02-crear-insertar/
|   |-- lab-03-contenido-clases/
|   `-- lab-04-plantillas-render/  # cada lab: README.md y starter/ (index.html y main.js)
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/               # server.js, index.html, styles.css, src/data.js, src/logic.js, src/main.js
|-- 4-recursos/
|   |-- ebooks-free/README.md
|   |-- videografia/README.md
|   `-- webgrafia/README.md
`-- 5-glosario/
    `-- README.md
```

---

## Versiones de la semana

Los labs se ejecutan en el navegador: cada `main.js` es un script normal (`<script defer>`), que carga también desde un archivo abierto con doble clic. El proyecto usa módulos ES, que solo cargan por `http://`, así que se abre con `node server.js`, sin dependencias. Ese servidor usa `import.meta.main`, que necesita Node 24.2 o superior. Las salidas de los labs se obtuvieron en Chromium; las de los comandos del proyecto, con Node 24.19.0. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 16 - APIs REST y CRUD](../week-16-apis_rest_crud/README.md) | [Semana 18 - Event Handling Avanzado](../week-18-event_handling_avanzado/README.md) |
