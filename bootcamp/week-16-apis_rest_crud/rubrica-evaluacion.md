# Rúbrica de Evaluación - Semana 16

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Diseño REST, paginación, autenticación con token y estados de carga |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados |
| Producto | 30% | Panel de la colección: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Reconoce una ruta REST bien diseñada y corrige una mal diseñada (verbos en la ruta, ids en la *query*, anidamientos profundos).
- Explica qué métodos son seguros e idempotentes y qué consecuencia tiene al reintentar una petición.
- Elige el código de estado de cada situación y distingue `400` de `422`, `401` de `403` y `404` de `405`.
- Explica cómo se pagina una colección, de dónde salen el total y el número de páginas, y qué problema resuelve el cursor.
- Describe una sesión con token de principio a fin, qué hay dentro de un JWT y el riesgo de guardar el token en `localStorage`.
- Explica por qué un campo `status` es mejor que varios booleanos y cómo se evitan una condición de carrera y un envío doble.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar contra la API de prácticas.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, cree que un `DELETE` repetido no es idempotente porque da `404`, o que `403` se arregla volviendo a iniciar sesión).
- **Bajo (<21):** no distingue autenticación de autorización o no sabe qué datos de una página paginada necesita el cliente.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 7 pasos descomentados; explica por qué el segundo `DELETE` del paso 5 da `404` y el servidor sigue igual.
- Lab 02: los 8 pasos; explica por qué Manta raya sale dos veces en el paso 7 y por qué el cursor del paso 8 no tendría ese problema.
- Lab 03: los 7 pasos; explica la diferencia entre el `401` del paso 1 y el `403` del paso 4.
- Lab 04: los 7 pasos; explica la condición de carrera del paso 5 y cómo la evita el paso 6.

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 16` pasa las 18 comprobaciones.
- `TITLE` y las fichas de `src/data.js` describen el dominio asignado: de 8 a 15 fichas coherentes, con detalles creíbles.
- La página funciona servida con `node server.js`: las nueve pruebas del paso 12 del proyecto dan el resultado descrito y la consola no muestra errores inesperados.
- Las funciones usan lo de la semana donde corresponde: `createApi` es el único `fetch` y concentra las cabeceras, el token, la señal y la conversión de errores; `listPage`, `saveItem` y `deleteItem` se apoyan en `api` sin repetir esa lógica; `reduce` no modifica el estado que recibe; `createLatest` cancela con `AbortController`.

### Niveles

- **Alto (27-30):** 18/18, datos propios del dominio y página sin errores.
- **Medio (21-26):** 18/18 con datos poco adaptados (fichas de relleno) o alguna prueba de la página que falla.
- **Bajo (<21):** menos de 18 comprobaciones, o datos del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Panel de la colección](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 16](README.md)
