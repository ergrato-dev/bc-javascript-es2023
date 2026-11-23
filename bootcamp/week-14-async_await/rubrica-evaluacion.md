# Rúbrica de Evaluación - Semana 14

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Funciones `async`, `await`, errores asíncronos, ejecución en orden y en paralelo, iteración asíncrona |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados |
| Producto | 30% | Explorador de catálogo: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué devuelve una función `async`, qué pasa con un `throw` dentro de ella y por qué el código que la llama no espera si no usa `await`.
- Reescribe una cadena de `.then()`/`.catch()` con `async`/`await` y `try`/`catch`, y al revés.
- Explica cuándo `return promesa` y `return await promesa` dan resultados distintos.
- Calcula cuánto tarda un fragmento con varios `await` en orden y con `Promise.all`, y decide cuál usar cuando unas operaciones dependen de otras.
- Explica por qué `forEach` no espera a una función `async` y qué usar en su lugar.
- Explica qué entrega un generador asíncrono, qué hace `for await...of` y qué pasa con el generador al salir del bucle con `break` o `return`.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, cree que `await` bloquea todo el programa o que `Promise.all` es lo único que hace paralelas dos operaciones).
- **Bajo (<21):** no distingue una promesa de su valor o no predice cuánto tarda un fragmento sencillo con `await`.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 7 pasos descomentados; explica el orden del paso 5 y por qué el paso 7 no da error aunque el valor esté mal.
- Lab 02: los 7 pasos; explica por qué `🏁` sale antes que el valor en el paso 2 y la diferencia del paso 6.
- Lab 03: los 7 pasos; explica los tiempos de los pasos 1 a 4 y por qué `forEach` termina antes en el paso 6.
- Lab 04: los 7 pasos; explica el orden del paso 1 y cuántas páginas se piden en el paso 5.

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 14` pasa las 13 comprobaciones.
- `TITLE` y las fichas de `src/data.js` describen el dominio asignado: de 4 a 8 fichas coherentes, con detalles creíbles y retrasos distintos entre sí.
- La página funciona servida con `pnpm dlx serve .`: los seis modos dan el resultado del paso 10 del proyecto y la consola no muestra errores inesperados.
- Las funciones usan lo de la semana donde corresponde: todas las peticiones pasan por `getItem`; `getInSequence` usa `await` dentro de un `for...of` y `getInParallel` un `Promise.all` sobre `ids.map(...)`; `retry` usa `return await` dentro del `try` y conserva el último error en `cause`; `findFirst` sale del `for await` con `return` en cuanto encuentra la ficha.

### Niveles

- **Alto (27-30):** 13/13, datos propios del dominio y página sin errores.
- **Medio (21-26):** 13/13 con datos poco adaptados (fichas de relleno o con el mismo retraso) o algún modo de la página que falla.
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
| ← [Proyecto — Explorador de catálogo](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 14](README.md)
