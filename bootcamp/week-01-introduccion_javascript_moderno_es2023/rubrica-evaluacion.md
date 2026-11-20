# Rúbrica de Evaluación - Semana 01

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | `const` y `let`, ámbito de bloque, template literals, arrow functions, destructuring, `?.`, `??` y asignaciones lógicas |
| Desempeño | 40% | Labs 01 a 05 descomentados y ejecutados |
| Producto | 30% | Ficha interactiva: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica por qué una variable `const` que guarda un objeto permite cambiar sus propiedades.
- Distingue el ámbito de bloque de `let`/`const` y explica la Temporal Dead Zone con un ejemplo.
- Interpola expresiones en un template literal y escribe un texto de varias líneas sin `\n`.
- Distingue el retorno implícito del explícito en una arrow function y sabe cuándo el objeto devuelto necesita paréntesis.
- Desestructura objetos y arrays con valores por defecto, renombrado y `...`.
- Elige entre `||` y `??` cuando el valor puede ser `0` o `''`, y explica qué devuelve `?.` cuando la cadena se corta.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, entre `||=` y `??=`).
- **Bajo (<21):** confunde `const` con inmutable, o `??` con `||`.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 8 pasos descomentados; provoca y explica el `TypeError` del paso 1 y el `ReferenceError` del paso 5.
- Lab 02: los 8 pasos; explica `$${` y cómo escapar un backtick.
- Lab 03: los 8 pasos; explica por qué el mensaje del `setTimeout` sale al final.
- Lab 04: los 9 pasos; explica el `undefined` y el valor por defecto del paso 3.
- Lab 05: los 8 pasos; explica la diferencia entre `Con ||` y `Con ??` del paso 3.

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab.

### Niveles

- **Alto (36-40):** los cinco labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cinco labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 01` pasa las 12 comprobaciones.
- El objeto `entity` de `src/main.js` describe una entidad del dominio asignado, con 5 a 8 elementos y valores coherentes con ese dominio.
- La página funciona servida con `pnpm dlx serve .`: lista, botón **Mostrar todos**, cambio de tema y **Copiar resumen**, sin errores en la consola.
- Las funciones usan destructuring en los parámetros donde la entidad o el elemento se desestructuran, y `buildSummary` reutiliza las demás funciones.

### Niveles

- **Alto (27-30):** 12/12, datos propios del dominio y página sin errores.
- **Medio (21-26):** 12/12 con datos poco adaptados (nombres genéricos, niveles al azar) o algún botón que falla.
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
| ← [Proyecto — Ficha interactiva de tu dominio](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 01](README.md)
