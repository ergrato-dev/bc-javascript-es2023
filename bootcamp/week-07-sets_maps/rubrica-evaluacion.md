# Rúbrica de Evaluación - Semana 07

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | `Set`, operaciones de conjuntos (a mano y nativas), `Map`, conversiones, `WeakMap`, `WeakSet` y Symbols como claves |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados |
| Producto | 30% | Mapa de la colección: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Elige entre array, `Set`, objeto y `Map` para un problema concreto y justifica la elección (valores únicos, claves que no son texto, orden, tamaño con `size`).
- Explica por qué un Set o un Map comparan los objetos por referencia y qué consecuencia tiene al buscar con `has` o `get`.
- Escribe la unión, la intersección y la diferencia de dos Sets con spread y `filter`, y las relaciona con `union`, `intersection` y `difference` (ES2025).
- Convierte entre `Map`, objeto y array con `Object.fromEntries`, `Object.entries` y spread.
- Explica qué significa que un `WeakMap` sujete sus claves de forma débil, por qué eso le impide tener `size` o recorrerse, y qué claves acepta (objetos y Symbols no registrados, desde ES2023).

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, cree que `Set` compara objetos por contenido).
- **Bajo (<21):** no distingue `Map` de un objeto ni `Map` de `WeakMap`.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 6 pasos descomentados; explica por qué el paso 6 guarda dos objetos iguales.
- Lab 02: los 7 pasos; explica por qué el paso 2 necesita `[...setA]` antes de `filter` y compara sus resultados con los del paso 7.
- Lab 03: los 6 pasos; explica qué pasa con un número como clave en un objeto y en un Map (paso 4) y cómo cuenta la caché del paso 6 los aciertos y los fallos.
- Lab 04: los 6 pasos; explica por qué falla `Symbol.for()` como clave (paso 1) y por qué el paso 6 usa un `WeakSet` y no un `Set`.

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 07` pasa las 12 comprobaciones.
- `TITLE` y las piezas de `src/data.js` describen el dominio asignado, con 5 a 8 piezas coherentes en al menos 2 salas y etiquetas que se repiten entre piezas.
- La página funciona servida con `pnpm dlx serve .`: los dos errores del formulario aparecen y desaparecen, una pieza con etiquetas repetidas las guarda una vez, el filtro de varias etiquetas deja solo las piezas que las llevan todas, y el buscador y el borrado funcionan, sin errores en la consola.
- Las funciones usan lo de la semana donde corresponde: un `Set` en `uniqueTags`, `new Map` con pares en `indexById`, `get` y `set` en `groupByRoom` y `countTags`, una copia del Set en `toggleTag`, `isSubsetOf` o `every` con `has` en `filterByTags` y el `WeakMap` en `getSummary`.

### Niveles

- **Alto (27-30):** 12/12, datos propios del dominio y página sin errores.
- **Medio (21-26):** 12/12 con datos poco adaptados (piezas de relleno, sin etiquetas repetidas) o alguna acción de la página que falla.
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
| ← [Proyecto — Mapa de la colección](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 07](README.md)
