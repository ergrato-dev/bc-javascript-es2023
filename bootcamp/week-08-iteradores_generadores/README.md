# Semana 08 - Iteradores y Generadores

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Explicar el protocolo de iteración (`Symbol.iterator`, `next()` y `{ value, done }`) y recorrer a mano el iterador de un array, un string, un `Map` o un `Set`.
- Elegir entre `for...of` (valores de un iterable) y `for...in` (claves de un objeto), y recorrer objetos con `Object.entries()`, `Object.keys()` y `Object.values()`.
- Escribir generadores con `function*` y `yield`, pasarles valores con `next(value)` y delegar en otro iterable con `yield*`.
- Crear secuencias infinitas y tomar solo los valores que necesitas, gracias a que los generadores son perezosos.
- Hacer iterables tus propias clases y objetos con `*[Symbol.iterator]()`.

## Requisitos previos

- La [semana 03](../week-03-clases_programacion_orientada_objetos/README.md) (clases, getters y campos privados), la [semana 04](../week-04-destructuring_modulos_es2023/README.md) (destructuring y módulos) y la [semana 07](../week-07-sets_maps/README.md) (`Set` y `Map`).
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
| [01 - Protocolo de iteración](1-teoria/01-iteration-protocol.md) | 25 min | `Symbol.iterator`, `next()` e iterables nativos |
| [02 - for...of frente a for...in](1-teoria/02-for-of-vs-for-in.md) | 20 min | Valores frente a claves, `Object.entries()` |
| [03 - Generadores](1-teoria/03-generators-basics.md) | 25 min | `function*`, `yield`, `next(value)`, `return` y `throw` |
| [04 - yield y delegación](1-teoria/04-yield-delegation.md) | 25 min | `yield*`, composición de generadores |
| [05 - Iterables personalizados](1-teoria/05-custom-iterables.md) | 25 min | Clases iterables, iterables infinitos |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Iteradores](2-practicas/lab-01-iterators/README.md) | 50 min |
| [Lab 02 - `for...of` y `for...in`](2-practicas/lab-02-for-loops/README.md) | 45 min |
| [Lab 03 - Generadores y `yield`](2-practicas/lab-03-generators/README.md) | 60 min |
| [Lab 04 - Iterables personalizados](2-practicas/lab-04-custom-iterable/README.md) | 55 min |

### 3. Proyecto (2 h)

[Catálogo por páginas](3-proyecto/README.md): completas los cuatro generadores y las tres funciones de `src/logic.js` (ids con `createIdGenerator`, `take`, `skip`, `filterBy`, `countPages`, `getPage` y un catálogo iterable con `createCatalog`) y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 08` comprueba las funciones.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 12/12 comprobaciones y datos del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-08-iteradores_generadores/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 5 diagramas SVG
|-- 1-teoria/                  # 01 a 05
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-iterators/
|   |-- lab-02-for-loops/
|   |-- lab-03-generators/
|   `-- lab-04-custom-iterable/
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
| [Semana 07 - Sets y Maps](../week-07-sets_maps/README.md) | [Semana 09 - Símbolos y Metaprogramación Básica](../week-09-simbolos_metaprogramacion_basica/README.md) |
