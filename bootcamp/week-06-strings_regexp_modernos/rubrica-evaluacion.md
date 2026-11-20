# Rúbrica de Evaluación - Semana 06

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Métodos modernos de string, tagged templates y `String.raw`, sintaxis de RegExp, grupos con nombre, `matchAll` y flag `d` |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados |
| Producto | 30% | Registro de fichas: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Elige entre `includes`, `startsWith`, `endsWith`, `padStart`, `trim`, `at` y `replaceAll` para un problema concreto, y explica por qué ninguno modifica el texto original.
- Explica qué recibe una función tag (`strings` y `...values`), por qué `strings` tiene siempre un elemento más que `values`, y para qué sirve `String.raw`.
- Lee un patrón como `/^\d{3}[-\s]?\d{3}$/` parte por parte: clases, cuantificadores, conjuntos y anclas.
- Explica qué cambian los flags `g`, `i`, `u` y `d`.
- Explica por qué `match` con `g` pierde los grupos y cómo lo resuelve `matchAll`, y para qué sirve un grupo con nombre.
- Explica por qué un texto escrito por una persona se escapa antes de meterlo en la página con `innerHTML`.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, el `^` dentro y fuera de `[...]`).
- **Bajo (<21):** no distingue `replace` de `replaceAll`, o valida sin anclas y no ve el problema.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 8 pasos descomentados; explica por qué el paso 8 deja dos espacios y por qué `&` va primero en `escapeHtml`.
- Lab 02: los 9 pasos; explica el array `strings` del paso 1 y qué le pasa a la ruta de Windows del paso 8 sin `String.raw`.
- Lab 03: los 9 pasos; explica qué datos extra devuelve `match` sin `g` (paso 2) y qué hace cada parte de los patrones del paso 9.
- Lab 04: los 10 pasos; explica por qué el paso 8 recorre las palabras desde la última y qué es cada par de `indices` del paso 10.

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab (salvo la hora del paso 9 del lab 02).

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 06` pasa las 12 comprobaciones.
- `TITLE`, `CODE_PREFIX` y las fichas de `src/data.js` describen el dominio asignado, con 4 a 6 fichas coherentes, etiquetas que se repiten (alguna con mayúscula o tilde), una ficha sin fecha y un nombre con espacios de sobra.
- La página funciona servida con `pnpm dlx serve .`: los tres errores del formulario aparecen y desaparecen, un nombre con `<b>` se muestra como texto, el buscador avisa del formato y encuentra la ficha, y el filtro por etiqueta y el borrado funcionan, sin errores en la consola.
- Las funciones usan lo de la semana donde corresponde: `trim` y `replace` con `\s+` en `normalizeText`, `padStart` en `formatCode`, `new RegExp` con `String.raw` en `isValidCode`, un patrón anclado en `isValidEmail`, grupos con nombre en `formatDate`, `matchAll` con el flag `u` en `extractTags` y una función tag en `safeHtml`.

### Niveles

- **Alto (27-30):** 12/12, datos propios del dominio y página sin errores.
- **Medio (21-26):** 12/12 con datos poco adaptados (fichas de relleno, sin etiquetas repetidas) o alguna acción de la página que falla.
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
| ← [Proyecto — Registro de fichas](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 06](README.md)
