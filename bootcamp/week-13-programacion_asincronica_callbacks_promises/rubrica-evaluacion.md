# Rúbrica de Evaluación - Semana 13

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Event loop, callbacks y sus problemas, estados de una promesa, encadenamiento y combinadores |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados |
| Producto | 30% | Panel de servicios: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué hacen la pila de llamadas, la cola de tareas y la cola de microtareas, y predice el orden de salida de un fragmento con código síncrono, `setTimeout` y `.then()`.
- Explica por qué una función asíncrona no puede avisar de un error con `throw` y cómo lo resuelven el callback *error-first* y el rechazo de una promesa.
- Nombra los tres estados de una promesa y explica por qué una promesa resuelta ya no cambia.
- Explica qué devuelve `.then()`, qué pasa si su callback devuelve una promesa y qué pasa si olvida el `return`.
- Dice cuándo se cumple y cuándo se rechaza cada combinador (`all`, `race`, `allSettled`, `any`) y elige el adecuado para un caso dado.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, entre microtareas y macrotareas, o entre `race` y `any`).
- **Bajo (<21):** no predice el orden de salida de un fragmento asíncrono sencillo o no distingue una promesa de su valor.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 7 pasos descomentados; explica el orden del paso 3 y por qué el `return` del paso 6 es necesario.
- Lab 02: los 7 pasos; explica los estados que imprime el paso 1 y qué se ignora en el paso 6.
- Lab 03: los 7 pasos; explica qué cambia el `return` en el paso 5 y cómo se recupera la cadena en el paso 6.
- Lab 04: los 7 pasos; explica la tabla del paso 7 y por qué el tiempo límite del paso 4 no cancela la operación lenta.

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 13` pasa las 13 comprobaciones.
- `TITLE` y los servicios de `src/data.js` describen el dominio asignado: de 4 a 8 servicios coherentes, con resultados creíbles y retrasos distintos entre sí.
- La página funciona servida con `pnpm dlx serve .`: los cinco modos dan el resultado del paso 10 del proyecto, el tiempo límite corta las consultas lentas y la consola no muestra errores inesperados.
- Las funciones usan lo de la semana donde corresponde: `request` envuelve a `requestWithCallback` en lugar de repetir el `setTimeout`; `requestInSequence` encadena `.then()` sin `async`/`await`; los combinadores reciben `services.map(request)`; `requestFirst` conserva el `AggregateError` en `cause`.

### Niveles

- **Alto (27-30):** 13/13, datos propios del dominio y página sin errores.
- **Medio (21-26):** 13/13 con datos poco adaptados (servicios de relleno o con el mismo retraso) o algún modo de la página que falla.
- **Bajo (<21):** menos de 13 comprobaciones, o datos del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Panel de servicios](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 13](README.md)
