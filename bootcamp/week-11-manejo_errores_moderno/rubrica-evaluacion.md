# Rúbrica de Evaluación - Semana 11

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | `try`/`catch`/`finally`, errores nativos y propios, `cause`, errores asíncronos y patrones de recuperación |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados |
| Producto | 30% | Importador de fichas: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica cuándo se ejecuta cada bloque de `try`/`catch`/`finally` y qué pasa con un error que nadie captura.
- Distingue `SyntaxError`, `TypeError`, `RangeError` y `ReferenceError` con un ejemplo de cada uno.
- Explica para qué sirve heredar de `Error`, por qué se cambia `name` y qué aporta `cause` al relanzar un error.
- Explica cómo se captura el rechazo de una promesa con `.catch()` y con `await` dentro de `try`, y cuándo usar `Promise.all()` o `Promise.allSettled()`.
- Dice qué errores conviene reintentar y cuáles no, y por qué no se debe tragar un error que no se esperaba.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, sobre cuándo se ejecuta `finally` si el `catch` relanza).
- **Bajo (<21):** captura todos los errores con un `catch` vacío, o no distingue un error de validación de un fallo del programa.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 7 pasos descomentados; explica por qué `finally` se ejecuta en los dos casos del paso 3 y qué guarda `cause` en el paso 7.
- Lab 02: los 7 pasos; explica por qué un `Error` normal se serializa como `{}` y qué cambia `toJSON()` en el paso 5.
- Lab 03: los 7 pasos; explica por qué `Promise.all()` pierde los resultados del paso 4 y cómo los conserva `Promise.allSettled()` en el paso 5.
- Lab 04: los 7 pasos; explica la diferencia entre reintentar (paso 3), probar otra fuente (paso 5) y devolver un `Result` (paso 7).

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 11` pasa las 14 comprobaciones.
- `TITLE`, `ID_PREFIX`, `ROOMS` y las piezas de `src/data.js` describen el dominio asignado, con 5 a 12 piezas coherentes y valores creíbles.
- La página funciona servida con `pnpm dlx serve .`: **Importar** añade las piezas válidas y lista las rechazadas, un JSON roto muestra `El texto no es JSON válido`, y los cuatro modos del servidor dan el número de intentos y el mensaje del paso 10, sin errores inesperados en la consola.
- Las funciones usan lo de la semana donde corresponde: las cuatro clases heredan de `AppError` y no repiten `name`; `parseJson` encadena el `SyntaxError` con `cause`; `importItems` captura solo `ValidationError` y relanza el resto; `retry` decide con `retryable`; `userMessage` distingue los tipos con `instanceof`.

### Niveles

- **Alto (27-30):** 14/14, datos propios del dominio y página sin errores.
- **Medio (21-26):** 14/14 con datos poco adaptados (piezas de relleno) o alguna acción de la página que falla.
- **Bajo (<21):** menos de 14 comprobaciones, o datos del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Importador de fichas](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 11](README.md)
