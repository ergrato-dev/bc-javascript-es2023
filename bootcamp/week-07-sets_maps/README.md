# Semana 07 - Sets y Maps

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Guardar valores sin repetir con `Set`: crear, añadir, consultar, borrar, recorrer y quitar duplicados de un array.
- Calcular la unión, la intersección y la diferencia de dos Sets a mano y con los métodos nativos de ES2025 (`union`, `intersection`, `isSubsetOf`...).
- Guardar pares clave-valor con `Map`, con claves de cualquier tipo, y convertirlo en objeto o array y al revés.
- Usar un `Map` para agrupar, contar e indexar datos, y como caché.
- Asociar datos a objetos con `WeakMap` y marcarlos con `WeakSet` sin impedir que se liberen, y usar Symbols como claves de `WeakMap` (ES2023).

## Requisitos previos

- La [semana 03](../week-03-clases_programacion_orientada_objetos/README.md) (clases, métodos `static` y campos privados), la [semana 05](../week-05-arrays_avanzados/README.md) (`flatMap`, `every`, cadenas de métodos) y la [semana 06](../week-06-strings_regexp_modernos/README.md) (iteradores con `matchAll`).
- Node y pnpm en las versiones de [docs/stack-versions.md](../../docs/stack-versions.md). Los métodos nativos de `Set` necesitan Node 22 o superior:

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
| [01 - Introducción a Set](1-teoria/01-set-basics.md) | 20 min | Crear, añadir, borrar, recorrer y quitar duplicados |
| [02 - Operaciones con Set](1-teoria/02-set-operations.md) | 25 min | Unión, intersección, diferencia y métodos nativos (ES2025) |
| [03 - Introducción a Map](1-teoria/03-map-basics.md) | 25 min | Métodos, claves de cualquier tipo y conversiones |
| [04 - Map avanzado](1-teoria/04-map-advanced.md) | 25 min | Cachés, agrupar, contar y serializar |
| [05 - WeakSet y WeakMap](1-teoria/05-weak-collections.md) | 25 min | Referencias débiles, datos privados y Symbols como claves (ES2023) |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Set básico](2-practicas/lab-01-set-basics/README.md) | 45 min |
| [Lab 02 - Operaciones con Set](2-practicas/lab-02-set-operations/README.md) | 55 min |
| [Lab 03 - Map básico](2-practicas/lab-03-map-basics/README.md) | 50 min |
| [Lab 04 - WeakMap, WeakSet y caché](2-practicas/lab-04-weakmap-cache/README.md) | 60 min |

### 3. Proyecto (2 h)

[Mapa de la colección](3-proyecto/README.md): completas las siete funciones puras de `src/logic.js` (etiquetas únicas, índice por id, piezas por sala, recuento de etiquetas, marcar y filtrar etiquetas, y un resumen guardado en un `WeakMap`) y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 07` comprueba las funciones.

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
week-07-sets_maps/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 5 diagramas SVG
|-- 1-teoria/                  # 01 a 05
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-set-basics/
|   |-- lab-02-set-operations/
|   |-- lab-03-map-basics/
|   `-- lab-04-weakmap-cache/
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
| [Semana 06 - Strings y RegExp Modernos](../week-06-strings_regexp_modernos/README.md) | [Semana 08 - Iteradores y Generadores](../week-08-iteradores_generadores/README.md) |
