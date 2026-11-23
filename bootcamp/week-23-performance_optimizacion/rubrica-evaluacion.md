# Rúbrica de Evaluación - Semana 23

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Medir, debounce y throttle, hacer menos trabajo y fugas de memoria |
| Desempeño | 40% | Labs 01, 02 y 04 ejecutados con Node y lab 03 en el navegador |
| Producto | 30% | Buscador rápido del catálogo: `src/logic.js` completo y catálogo del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué significan 16 ms, 50 ms y 100 ms para quien usa la página, y por qué una función lenta bloquea los clics y el scroll.
- Mide con `performance.now()`, `mark` y `measure`, repite la medida y explica por qué usa la mediana.
- Compara dos soluciones y explica cómo crece el tiempo de cada una con el tamaño de los datos.
- Distingue debounce, throttle y `requestAnimationFrame`, y elige uno para cada situación.
- Explica memoize (y por qué la caché necesita límite), el índice preparado una vez, la paginación con `IntersectionObserver` y `loading="lazy"`.
- Explica las fases del pintado y por qué leer una medida después de escribir es caro.
- Explica qué es un objeto alcanzable, qué es una fuga y cómo se evita con listeners, temporizadores, observadores, cachés, nodos desconectados y closures, y qué aporta un `WeakMap`.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio y una medida que lo demuestra.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, confunde debounce y throttle en un caso, o se fía de una sola medida).
- **Bajo (<21):** optimiza sin medir, no distingue debounce de throttle o no sabe por qué un listener olvidado retiene memoria.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 6 pasos descomentados; explica por qué la primera vuelta del paso 3 es más lenta y cómo crece `includes` frente a `has`.
- Lab 02: los 6 pasos con la salida del README; explica por qué el throttle sencillo se queda en 740 y el completo llega a 900.
- Lab 03: los 6 pasos en el navegador; explica por qué insertar uno a uno cuesta lo mismo que con un fragmento hasta que se lee `scrollHeight` en cada vuelta.
- Lab 04: los 6 pasos con `node --expose-gc`; explica por qué la ficha del `Map` no se borra y qué retiene `makeReportLeaky`.

En los labs 02 y 04 la salida coincide con la del README. En los labs 01 y 03 coinciden las conclusiones (`true`/`false`, recuentos y proporciones aproximadas); los milisegundos dependen del equipo.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras y, cuando lo pide, con una medida.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 23` pasa las 14 comprobaciones.
- `APP`, `FIELDS` y `SEED` de `src/data.js` describen un catálogo creíble del dominio asignado: campos por los que alguien buscaría esas fichas, `searchFields` con sentido (nombres, categorías, lugares; no números de serie) y fichas reales, no las del ejemplo.
- La página funciona servida con `node server.js`: las pruebas del paso 10 del proyecto dan el resultado descrito con su catálogo (una búsqueda al dejar de escribir, la repetida desde la caché, páginas nuevas al bajar, el botón «Volver arriba») y la consola no muestra errores.
- Las funciones usan lo de la semana donde corresponde: `search` no vuelve a normalizar las fichas, `paginate` usa `slice`, `debounce` y `throttle` limpian sus temporizadores en `cancel`, `memoize` limita la caché con el orden del `Map`, `measure` usa `performance.now()` y la mediana, y ninguna función usa el DOM.

### Niveles

- **Alto (27-30):** 14/14, catálogo bien adaptado, página sin errores y funciones claras.
- **Medio (21-26):** 14/14 con un catálogo poco adaptado (campos genéricos, `searchFields` sin sentido) o alguna prueba de la página que falla.
- **Bajo (<21):** menos de 14 comprobaciones, o el catálogo del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Buscador rápido del catálogo](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 23](README.md)
