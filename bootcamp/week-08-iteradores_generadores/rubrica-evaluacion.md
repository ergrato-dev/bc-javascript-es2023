# Rúbrica de Evaluación - Semana 08

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Protocolo de iteración, `for...of` frente a `for...in`, generadores, `yield*` e iterables propios |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados |
| Producto | 30% | Catálogo por páginas: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué es un iterable, qué es un iterador y qué devuelve `next()`, y por qué un objeto normal no funciona con `for...of`.
- Elige entre `for...of`, `for...in` y `Object.entries()` para recorrer un array, un objeto o un `Map`, y explica por qué `for...in` no conviene con arrays.
- Explica qué pasa al llamar a una función `function*`, dónde se pausa con cada `next()` y qué recibe un `yield` cuando llamas a `next(value)`.
- Distingue `yield` de `yield*` con un ejemplo.
- Explica por qué un generador infinito no cuelga el programa y cómo se toma solo una parte de él.
- Explica por qué un iterable escrito con `*[Symbol.iterator]()` se puede recorrer varias veces y un generador solo una.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, entre iterable e iterador).
- **Bajo (<21):** no distingue `for...of` de `for...in`, o no sabe qué devuelve `next()`.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 7 pasos descomentados; explica por qué el spread del paso 5 vuelve a empezar desde 3 y cómo termina el iterador del paso 7.
- Lab 02: los 8 pasos; explica por qué los índices del paso 2 son strings y por qué el emoji del paso 3 sale en tres partes.
- Lab 03: los 7 pasos; explica qué hace `yield*` en `flatten` (paso 3), por qué `take` cuenta después del `yield` (paso 4) y qué recibe `name` en el paso 5.
- Lab 04: los 6 pasos; explica qué diferencia hay entre `[Symbol.iterator]` y `byRows` en el paso 4, y por qué la pila del paso 6 usa `toReversed()`.

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 08` pasa las 12 comprobaciones.
- `TITLE`, `ID_PREFIX` y las piezas de `src/data.js` describen el dominio asignado, con 8 a 15 piezas coherentes repartidas en al menos 2 salas, y algún nombre que empiece por vocal con tilde o que obligue a ordenar con `localeCompare`.
- La página funciona servida con `pnpm dlx serve .`: los botones de página se desactivan en los extremos, el filtro por sala y el cambio de tamaño vuelven a la página 1, los dos errores del formulario aparecen y desaparecen, una pieza nueva recibe el siguiente id y un id borrado no se reutiliza, sin errores en la consola.
- Las funciones usan lo de la semana donde corresponde: `function*` y `yield` en `createIdGenerator`, `take`, `skip` y `filterBy`; `getPage` combina `skip` y `take` sin `slice`; `createCatalog` devuelve un objeto con `*[Symbol.iterator]()`, `yield*` y `toSorted`.

### Niveles

- **Alto (27-30):** 12/12, datos propios del dominio y página sin errores.
- **Medio (21-26):** 12/12 con datos poco adaptados (piezas de relleno, una sola sala con casi todo) o alguna acción de la página que falla.
- **Bajo (<21):** menos de 12 comprobaciones, o datos del ejemplo Planetario sin cambiar.

---

## Calificación

| Evidencia | Peso | Mínimo para aprobar |
|---|---:|---:|
| Conocimiento | 30% | 21 |
| Desempeño | 40% | 28 |
| Producto | 30% | 21 |

La semana se aprueba con un 70% en total y el mínimo de cada evidencia.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Proyecto — Catálogo por páginas](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 08](README.md)
