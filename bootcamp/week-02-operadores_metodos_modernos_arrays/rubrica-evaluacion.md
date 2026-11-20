# Rúbrica de Evaluación - Semana 02

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Spread y rest, parámetros por defecto, `map`/`filter`/`reduce` y métodos de búsqueda, mejoras de objetos, `at()` y `Object.hasOwn()` |
| Desempeño | 40% | Labs 01 a 05 descomentados y ejecutados |
| Producto | 30% | Gestor de colección: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Distingue spread de rest por la posición del `...` y explica por qué spread hace una copia superficial.
- Escribe una función con parámetros por defecto, también sobre un parámetro desestructurado (`({ a = 1 } = {}) => ...`).
- Elige entre `map`, `filter`, `find`, `some`, `every` y `reduce` según el resultado que necesita (array del mismo tamaño, parte del array, un elemento, un booleano o un valor).
- Usa propiedades abreviadas, métodos abreviados y propiedades computadas (`[key]: value`).
- Explica qué aporta `at(-1)` frente a `array[array.length - 1]` y por qué `Object.hasOwn()` sustituye a `hasOwnProperty`.
- Explica qué significa que una función no modifique su entrada y cómo se actualiza un elemento de un array sin modificarlo.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, entre `find` y `filter`).
- **Bajo (<21):** confunde spread con rest, o cree que spread copia también los objetos anidados.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 8 pasos descomentados; explica por qué el paso 4 necesita un segundo spread para `address`.
- Lab 02: los 8 pasos; explica qué devuelven `find` y `findIndex` cuando no encuentran nada.
- Lab 03: los 8 pasos; explica por qué el objeto que devuelve `map` en el paso 2 va entre paréntesis.
- Lab 04: los 9 pasos; explica qué vale `acc` en la primera vuelta, con y sin valor inicial.
- Lab 05: los 8 pasos; explica por qué `nums[-1]` es `undefined` y la diferencia entre `Object.hasOwn()` e `in`.

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab (salvo el `timestamp` del lab 05).

### Niveles

- **Alto (36-40):** los cinco labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cinco labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 02` pasa las 12 comprobaciones.
- `TITLE`, `CATEGORIES` y `SAMPLE_ITEMS` de `src/main.js` describen una colección del dominio asignado, con 3 a 5 categorías y 4 a 6 elementos coherentes con ese dominio.
- La página funciona servida con `pnpm dlx serve .`: crear, editar, marcar como inactivo, eliminar, filtrar, buscar y quitar inactivos; los datos siguen al recargar y no hay errores en la consola.
- Las funciones usan lo de la semana donde corresponde: valores por defecto en `createItem` y `filterItems`, rest en `addItem`, spread para copiar, `reduce` con propiedad computada en `getStats` y `Object.hasOwn()` en `missingFields`.

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
| ← [Proyecto — Gestor de colección de tu dominio](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 02](README.md)
