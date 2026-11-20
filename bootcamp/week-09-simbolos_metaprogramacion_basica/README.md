# Semana 09 - Símbolos y Metaprogramación Básica

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Crear símbolos con `Symbol()` y explicar por qué cada uno es único.
- Compartir símbolos con el registro global de `Symbol.for()` y leer su clave con `Symbol.keyFor()`.
- Usar símbolos como claves de objeto para ocultar datos de `Object.keys`, `for...in` y `JSON.stringify`, y distinguir ocultar de proteger (campos `#`).
- Cambiar cómo JavaScript trata a tus objetos con `Symbol.toStringTag`, `Symbol.toPrimitive`, `Symbol.iterator` y `Symbol.hasInstance`.
- Encontrar las claves simbólicas de un objeto con `Object.getOwnPropertySymbols` y `Reflect.ownKeys`.

## Requisitos previos

- La [semana 03](../week-03-clases_programacion_orientada_objetos/README.md) (clases y campos privados `#`), la [semana 07](../week-07-sets_maps/README.md) (`Object.fromEntries`) y la [semana 08](../week-08-iteradores_generadores/README.md) (`Symbol.iterator` y generadores).
- Node y pnpm en las versiones de [docs/stack-versions.md](../../docs/stack-versions.md):

  ```bash
  node --version
  # v24.19.0 (o superior)
  pnpm --version
  # 11.20.0 (o superior)
  ```

---

## Contenidos

### 1. Teoría (2 h)

| Archivo | Tiempo | Tema |
|---|---|---|
| [01 - Introducción a Symbols](1-teoria/01-symbols-intro.md) | 25 min | `Symbol()`, unicidad y claves simbólicas |
| [02 - Symbol.for y registro global](1-teoria/02-symbol-for-registry.md) | 20 min | `Symbol.for()` y `Symbol.keyFor()` |
| [03 - Well-known symbols](1-teoria/03-well-known-symbols.md) | 30 min | `toStringTag`, `toPrimitive`, `iterator`, `hasInstance` y otros |
| [04 - Símbolos como claves](1-teoria/04-symbols-as-keys.md) | 25 min | Ocultar propiedades frente a `_nombre` y campos `#` |
| [05 - Object.getOwnPropertySymbols](1-teoria/05-get-own-property-symbols.md) | 20 min | Introspección con `getOwnPropertySymbols` y `Reflect.ownKeys` |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Crear y usar símbolos](2-practicas/lab-01-symbols-basics/README.md) | 50 min |
| [Lab 02 - `Symbol.for` y el registro global](2-practicas/lab-02-symbol-registry/README.md) | 50 min |
| [Lab 03 - Well-known symbols](2-practicas/lab-03-well-known/README.md) | 55 min |
| [Lab 04 - Ocultar propiedades con símbolos](2-practicas/lab-04-private-props/README.md) | 55 min |

### 3. Proyecto (2 h)

[Fichas con notas reservadas](3-proyecto/README.md): completas el símbolo `NOTES`, el objeto `Piece` y las cinco funciones de `src/logic.js` (crear piezas con una nota en clave simbólica, convertirlas con `Symbol.toPrimitive`, identificarlas con `Symbol.toStringTag` e `instanceof`, sumarlas y sacar su vista pública) y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 09` comprueba las funciones.

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
week-09-simbolos_metaprogramacion_basica/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 5 diagramas SVG
|-- 1-teoria/                  # 01 a 05
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-symbols-basics/
|   |-- lab-02-symbol-registry/
|   |-- lab-03-well-known/
|   `-- lab-04-private-props/
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
| [Semana 08 - Iteradores y Generadores](../week-08-iteradores_generadores/README.md) | [Semana 10 - Proxy y Reflect](../week-10-proxies_reflect/README.md) |
