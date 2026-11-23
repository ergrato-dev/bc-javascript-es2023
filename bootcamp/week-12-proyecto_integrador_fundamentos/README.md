# Semana 12 - Proyecto Integrador - Fundamentos

## Objetivos de aprendizaje

Esta semana no hay conceptos nuevos: cierras la etapa de Fundamentos juntando en un proyecto lo de las semanas 1 a 11. Al terminar la semana podrás:

- Repartir una aplicación pequeña en módulos con una responsabilidad cada uno: datos, lógica sin DOM y página.
- Escribir una clase que es la única dueña de su estado, con campos privados, un `Map` y métodos que validan antes de cambiar nada.
- Avisar de los cambios con el patrón *observer* (un `Set` de suscriptores) en lugar de repintar a mano.
- Hacer iterable una clase con `Symbol.iterator` y repartir una lista en páginas con un generador.
- Buscar, ordenar y resumir datos con métodos que no modifican el original, y explicar un dato inválido con un error propio.

## Requisitos previos

- Las [semanas 01 a 11](../README.md). El [repaso](1-teoria/01-revision-conceptos.md) dice qué usa el proyecto de cada una y enlaza dónde se explica.
- Node y pnpm en las versiones de [docs/stack-versions.md](../../docs/stack-versions.md):

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
| [01 - Repaso de las semanas 1 a 11](1-teoria/01-revision-conceptos.md) | 15 min | Qué usa el proyecto de cada semana, con un ejemplo corto de cada idea |
| [02 - Arquitectura del proyecto](1-teoria/02-arquitectura-aplicacion.md) | 10 min | Tres archivos, un dueño del estado y avisar en lugar de acordarse |
| [03 - Clean Code](1-teoria/03-clean-code.md) | 5 min | Nombres, funciones cortas, DRY y orden dentro de un archivo |

### 2. Prácticas (3 h)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Clases y encapsulación](2-practicas/lab-01-clases/README.md) | 50 min |
| [Lab 02 - Patrón observer](2-practicas/lab-02-observer/README.md) | 45 min |
| [Lab 03 - Módulos ES](2-practicas/lab-03-modulos/README.md) | 40 min |
| [Lab 04 - Map para colecciones](2-practicas/lab-04-map/README.md) | 45 min |

### 3. Proyecto (4 h)

[Gestor de colección](3-proyecto/README.md): completas `src/logic.js` (un error de validación, una clase `Collection` con campos privados, un `Map`, suscriptores e iterador, y las funciones `search`, `paginate` y `summarize`) y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 12` comprueba la lógica.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Explicar con ejemplos propios cómo encajan los conceptos de las semanas 1 a 11 en el proyecto |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 15/15 comprobaciones, datos del dominio y código legible |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-12-proyecto_integrador_fundamentos/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 3 diagramas SVG
|-- 1-teoria/                  # 01 a 03 (repaso)
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-clases/
|   |-- lab-02-observer/
|   |-- lab-03-modulos/
|   `-- lab-04-map/
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
| [Semana 11 - Manejo de Errores Moderno](../week-11-manejo_errores_moderno/README.md) | [Semana 13 - Programación Asincrónica](../week-13-programacion_asincronica_callbacks_promises/README.md) |
