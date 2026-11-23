# Semana 03 - Clases y Programación Orientada a Objetos

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Declarar clases con `constructor` y métodos, crear objetos con `new` y encadenar métodos que devuelven `this`.
- Escribir métodos y propiedades estáticas para utilidades, contadores compartidos y métodos *factory*.
- Crear clases hijas con `extends`, llamar al padre con `super` y sobrescribir sus métodos.
- Controlar cómo se lee y se cambia una propiedad con getters y setters que validan.
- Proteger el estado de un objeto con campos y métodos privados (`#`).
- Inicializar la parte estática de una clase con bloques `static { }` (ES2022).

## Requisitos previos

- La [semana 02](../week-02-operadores_metodos_modernos_arrays/README.md): spread, rest, parámetros por defecto, `map`, `filter` y `reduce`.
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
| [01 - Clases básicas](1-teoria/01-clases-basicas.md) | 20 min | `class`, `constructor`, métodos y `this` |
| [02 - Métodos estáticos](1-teoria/02-metodos-estaticos.md) | 20 min | `static`: utilidades, contadores y *factory* |
| [03 - Herencia](1-teoria/03-herencia.md) | 25 min | `extends`, `super`, sobrescritura y polimorfismo |
| [04 - Getters y setters](1-teoria/04-getters-setters.md) | 20 min | Propiedades calculadas y validación |
| [05 - Campos privados](1-teoria/05-campos-privados.md) | 20 min | Campos y métodos privados con `#` |
| [06 - Static blocks](1-teoria/06-static-blocks.md) | 15 min | Inicialización estática con `static { }` |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Clases básicas](2-practicas/lab-01-clases-basicas/README.md) | 45 min |
| [Lab 02 - Métodos estáticos](2-practicas/lab-02-metodos-estaticos/README.md) | 40 min |
| [Lab 03 - Herencia](2-practicas/lab-03-herencia/README.md) | 45 min |
| [Lab 04 - Encapsulación](2-practicas/lab-04-encapsulacion/README.md) | 45 min |
| [Lab 05 - Static blocks](2-practicas/lab-05-static-blocks/README.md) | 35 min |

### 3. Proyecto (2 h)

[Catálogo con clases](3-proyecto/README.md): completas las clases `Item` y `Collection` de `src/logic.js` (id estático, nombre privado con getter y setter, array privado) y creas en `src/types.js` las clases hijas de los tipos del dominio que te asigna el instructor. `scripts/verificar-semana.sh 03` comprueba las clases.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cinco labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 12/12 comprobaciones y tipos del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-03-clases_programacion_orientada_objetos/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 6 diagramas SVG, uno por archivo de teoría
|-- 1-teoria/                  # 01 a 06
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-clases-basicas/
|   |-- lab-02-metodos-estaticos/
|   |-- lab-03-herencia/
|   |-- lab-04-encapsulacion/
|   `-- lab-05-static-blocks/
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/               # index.html, styles.css, src/logic.js, src/types.js, src/main.js
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
| [Semana 02 - Operadores y Métodos Modernos de Arrays](../week-02-operadores_metodos_modernos_arrays/README.md) | [Semana 04 - Destructuring y Módulos ES2023](../week-04-destructuring_modulos_es2023/README.md) |
