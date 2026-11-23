# Rúbrica de Evaluación - Semana 15

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | `fetch` y `Response`, métodos HTTP, cabeceras, cancelación y tipos de error |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados |
| Producto | 30% | Cliente del catálogo: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué devuelve `fetch`, cuándo se cumple su promesa y por qué el cuerpo se lee aparte y una sola vez.
- Explica por qué `fetch` no se rechaza con un `404` o un `500`, cuándo sí se rechaza y cómo se comprueba el estado.
- Elige el método HTTP adecuado para crear, reemplazar, cambiar y borrar, y explica para qué sirven `Content-Type`, `Accept` y `Authorization`.
- Explica qué pasa si se envía un objeto en `body` sin `JSON.stringify` y qué hacer con una respuesta `204`.
- Distingue un `AbortError` de un `TimeoutError` y explica cómo se produce cada uno.
- Decide qué errores tiene sentido reintentar y cuáles no, y por qué.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar contra la API de prácticas.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, cree que un `404` salta al `catch` o que `PUT` y `PATCH` son intercambiables).
- **Bajo (<21):** no distingue la `Response` de su cuerpo o no sabe comprobar si una petición ha ido bien.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 7 pasos descomentados; explica por qué el paso 4 da error y por qué el paso 6 no lo da.
- Lab 02: los 7 pasos; explica el `400` del paso 2 y por qué el paso 5 lee el cuerpo con `text()`.
- Lab 03: los 7 pasos; explica qué cabeceras añade `fetch` por su cuenta en el paso 3 y la diferencia entre los dos errores del paso 6.
- Lab 04: los 7 pasos; explica de dónde sale `ECONNREFUSED` en el paso 1 y por qué el `404` del paso 6 no se reintenta.

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 15` pasa las 17 comprobaciones.
- `TITLE` y las fichas de `src/data.js` describen el dominio asignado: de 4 a 8 fichas coherentes, con detalles creíbles.
- La página funciona servida con `node server.js`: las siete pruebas del paso 11 del proyecto dan el resultado descrito y la consola no muestra errores inesperados.
- Las funciones usan lo de la semana donde corresponde: `requestJson` es el único `fetch` y concentra las cabeceras, el `JSON.stringify`, `AbortSignal.timeout()` y la conversión de errores; las funciones de la API se apoyan en `buildUrl` y `requestJson` sin repetir esa lógica; `describeError` distingue los errores por `name`, `instanceof HttpError` y `status`.

### Niveles

- **Alto (27-30):** 17/17, datos propios del dominio y página sin errores.
- **Medio (21-26):** 17/17 con datos poco adaptados (fichas de relleno) o alguna prueba de la página que falla.
- **Bajo (<21):** menos de 17 comprobaciones, o datos del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Cliente del catálogo](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 15](README.md)
