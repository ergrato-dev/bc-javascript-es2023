# Rúbrica de Evaluación - Semana 04

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Destructuring de arrays y objetos, módulos ES, exports con nombre y por defecto, `import()` |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados |
| Producto | 30% | Catálogo modular: `src/logic.js` y `src/stats.js` completos y datos del dominio asignado en `src/data.js` |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica que el destructuring de arrays va por posición y el de objetos por nombre, y escribe un ejemplo de cada uno.
- Usa renombrado (`prop: variable`), valores por defecto y patrones anidados, también en los parámetros de una función.
- Explica que un valor por defecto solo se aplica a `undefined`, no a `null` ni a `''`.
- Escribe un módulo con exports con nombre y otro con `export default`, e importa cada uno con su sintaxis.
- Explica qué es un barrel y qué aporta `import * as`.
- Explica qué devuelve `import()`, cuándo compensa frente a un `import` estático y que un módulo se ejecuta una sola vez.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, el orden de `prop: variable` al renombrar).
- **Bajo (<21):** confunde el destructuring de arrays con el de objetos, o los exports con nombre con el export por defecto.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 10 pasos descomentados; explica por qué `[...rest, last]` da error.
- Lab 02: los 10 pasos; explica por qué `department` no es una variable en el paso 5.
- Lab 03: los 5 pasos, con los exports de cada módulo descomentados; explica por qué `import { config }` falla con un `export default`.
- Lab 04: los 6 pasos; explica por qué el paso 5 no vuelve a imprimir `📦 ... module loaded`.

En todos, el comando del README termina sin errores y la salida coincide con la del lab (salvo `createdAt` en el lab 02).

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 04` pasa las 12 comprobaciones.
- `TITLE`, `CATEGORIES` y el export por defecto de `src/data.js` describen una colección del dominio asignado, con 3 a 5 categorías y 4 a 6 elementos con años y etiquetas coherentes con ese dominio.
- La página funciona servida con `pnpm dlx serve .`: añadir (completo y solo con el nombre), filtrar, buscar por etiqueta, eliminar y ver estadísticas; `stats.js` se descarga solo al pulsar el botón y no hay errores en la consola.
- Las funciones usan lo de la semana donde corresponde: destructuring de array en `parseLine`, patrón anidado con valor por defecto en `summarize`, parámetro desestructurado y renombrado en `filterItems`, y destructuring en los callbacks de `stats.js`.

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
| ← [Proyecto — Catálogo modular](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 04](README.md)
