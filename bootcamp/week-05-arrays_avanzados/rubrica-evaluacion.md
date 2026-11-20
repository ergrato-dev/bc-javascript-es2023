# Rúbrica de Evaluación - Semana 05

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | `flat`/`flatMap`, `Array.from`/`Array.of`, encadenamiento, funciones de comparación, agrupar con `reduce`, `findLast`/`findLastIndex` |
| Desempeño | 40% | Labs 01 a 05 descomentados y ejecutados |
| Producto | 30% | Explorador de colección: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué hace `flatMap` frente a `map` seguido de `flat()`, y qué pasa cuando la función devuelve `[]`.
- Genera un array con `Array.from({ length: n }, fn)` y explica por qué `Array(3)` y `Array.of(3)` dan resultados distintos.
- Escribe una cadena de métodos de varios pasos y dice qué devuelve cada uno.
- Escribe una función de comparación para números, para textos (`localeCompare`) y para varios criterios, y explica qué significa que devuelva un número negativo, positivo o `0`.
- Explica por qué `sort()` sin función ordena mal los números y por qué `toSorted()` no modifica el array.
- Usa `findLast` y `findLastIndex` y dice qué devuelven cuando no encuentran nada.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, el signo de la función de comparación).
- **Bajo (<21):** cree que `sort()` ordena números sin función, o confunde `findLast` con `findLastIndex`.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 10 pasos descomentados; explica cómo filtra y duplica el `flatMap` del paso 6.
- Lab 02: los 10 pasos; explica el `_` de `Array.from({ length: 5 }, (_, i) => i)` y por qué `Array(3)` sale vacío.
- Lab 03: los 10 pasos; explica por qué el paso 3 copia `products` antes de `sort` y qué devuelve `createTopPerformers`.
- Lab 04: los 10 pasos; explica por qué `sort()` del paso 1 pone `10` antes que `2` y cómo funcionan los dos criterios del paso 5.
- Lab 05: los 7 pasos; explica la diferencia entre `find` y `findLast` del paso 2 y por qué `with()` no cambia `notifications` en el paso 7.

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab.

### Niveles

- **Alto (36-40):** los cinco labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cinco labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 05` pasa las 12 comprobaciones.
- `TITLE`, `CATEGORIES` y los elementos de `src/data.js` describen una colección del dominio asignado, con 3 a 5 categorías, 4 a 6 elementos coherentes con ese dominio, etiquetas que se repiten entre elementos y al menos uno sin año.
- La página funciona servida con `pnpm dlx serve .`: añadir, eliminar, filtrar por etiqueta, ordenar por nombre, año y recientes, y ver el resumen por categoría con su último añadido, sin errores en la consola.
- Las funciones usan lo de la semana donde corresponde: `flatMap` y `Array.from` en `getAllTags`, `toSorted` con funciones de comparación en `sortItems`, una cadena en `queryItems`, `reduce` con propiedad computada en `groupByCategory` y `findLast` en `findLastAdded`.

### Niveles

- **Alto (27-30):** 12/12, datos propios del dominio y página sin errores.
- **Medio (21-26):** 12/12 con datos poco adaptados (categorías genéricas, elementos de relleno) o alguna acción de la página que falla.
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
| ← [Proyecto — Explorador de colección](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 05](README.md)
