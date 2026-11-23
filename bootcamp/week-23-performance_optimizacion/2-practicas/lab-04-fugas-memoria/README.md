# Lab 04 — Fugas de memoria

## Objetivo

Medir con Node la memoria que ocupan los datos alcanzables y los que no, acumular y limpiar listeners, olvidar un `setInterval`, comparar una caché con y sin límite, un `Map` con un `WeakMap`, y dos closures que dan el mismo resultado.

**Tiempo:** 50 min · **Teoría:** [04 - Fugas de memoria](../../1-teoria/04-fugas-memoria.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (`Ctrl+/` o `Cmd+/`) y ejecuta:

```bash
cd bootcamp/week-23-performance_optimizacion/2-practicas/lab-04-fugas-memoria
node --expose-gc starter/index.js
```

- **Qué:** la opción `--expose-gc` crea la función global `gc()`, que obliga al recolector de basura a limpiar en ese momento.
- **Para qué:** sin ella, el recolector limpia cuando le parece, y la memoria medida cambia en cada ejecución. Con ella, las medidas son estables.
- **Impacto:** si ejecutas `node starter/index.js` sin la opción, los pasos que miden memoria fallan con `ReferenceError: gc is not defined`. Úsala solo para medir, nunca en un programa de verdad.

Arriba están `wait` y `heapMB()`, que espera un momento, llama a `gc()` y devuelve los MB que ocupan los objetos de JavaScript (`process.memoryUsage().heapUsed`). El archivo importa `getEventListeners` de `node:events`, que da la lista de listeners de un `EventTarget`. Los pasos van en orden: descomenta del 1 en adelante.

Las salidas se obtuvieron con Node 24.19.0, y salieron iguales en cinco ejecuciones seguidas. Los MB pueden variar un poco en otro equipo o con otra versión de Node.

---

## Paso 1: Lo que se puede alcanzar no se borra

```text
--- Paso 1: Alcanzable o no ---
  fichas procesadas: 200000
  tras una variable local: 0 MB de más
  tras guardarlas en history: 8 MB de más
  tras vaciar history: 0 MB de más
```

`processOnce` crea 200 000 fichas en una variable local y devuelve su número: al terminar, nada apunta a ellas y el recolector las borra. Las mismas fichas guardadas en `history`, un array del módulo, se quedan: ocupan unos 8 MB hasta que `history.length = 0` suelta la referencia.

## Paso 2: Listeners que se acumulan

```text
--- Paso 2: Listeners ---
  montado 5 veces sin quitar: listeners 5 · llamadas por evento 5
  con AbortController: listeners 1 · llamadas por evento 1
  tras abort(): 0
```

`mountLeaky` añade un listener nuevo en cada montaje: cinco montajes, cinco listeners y cinco llamadas por evento. `mount` aborta el controlador del montaje anterior antes de crear el suyo, así que solo queda uno. `abort()` al final quita el último, como harías al cerrar esa parte de la interfaz.

## Paso 3: Temporizadores olvidados

```text
--- Paso 3: setInterval ---
  el limpio se paró en 5 ticks y sigue en 5
  el olvidado sigue contando: true
```

Cada reloj guarda un array de 100 000 elementos y cuenta un tick cada 20 ms. `destroy()` llama a `clearInterval`: el limpio deja de contar, y su array se puede borrar. El olvidado sigue contando y reteniendo su array hasta el final del paso, que lo destruye para que el programa pueda terminar: en Node, un `setInterval` activo impide que el programa acabe.

## Paso 4: Cachés que solo crecen

```text
--- Paso 4: Caché con límite ---
  50000 búsquedas distintas: sin límite 50000 · con límite 100
  la más antigua que queda: búsqueda 49900
```

Con 50 000 textos distintos, la caché sin límite guarda 50 000 resultados. La que tiene límite borra la primera clave del `Map` (la más antigua) cada vez que pasa de 100: se queda con las 100 últimas, de `búsqueda 49900` a `búsqueda 49999`.

## Paso 5: Map contra WeakMap

```text
--- Paso 5: WeakMap ---
  borradas por el recolector: ficha en un WeakMap
  el Map todavía tiene: 1 ficha
```

Las dos fichas se usan como clave, una en un `Map` y otra en un `WeakMap`, y después se dejan de usar (`= null`). `FinalizationRegistry` llama a su función cuando el recolector borra un objeto registrado: solo avisa de la ficha del `WeakMap`. La del `Map` sigue alcanzable desde el `Map`, aunque ya no la use nadie.

## Paso 6: Closures que guardan de más

```text
--- Paso 6: Closures ---
  5 informes que guardan sus filas: 19 MB · 100000 filas
  5 informes que guardan solo el número: 0 MB · 100000 filas

✅ Lab completado.
```

Los dos tipos de informe escriben lo mismo. `makeReportLeaky` devuelve una función que usa `rows`, así que cada informe retiene sus 100 000 filas. `makeReport` copia `rows.length` en `count` y la función solo usa `count`: las filas se pueden borrar.

---

## Comprobación

1. En el paso 1, cambia `history.length = 0` por `history.pop()`. ¿Se libera la memoria? ¿Y con `history = []`? (Pista: `history` es `const`.)
2. En el paso 2, quita `controller?.abort();` de `mount`. ¿Cuántos listeners quedan? ¿Y después del `controller.abort()` final?
3. Escribe `createWatcher(target)` que añada un listener `'refresh'` y devuelva una función que lo quite. Compruébalo con `getEventListeners`: crea tres watchers, llama a las tres funciones de limpieza y el resultado esperado es `0`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Hacer menos trabajo en la página](../lab-03-menos-trabajo/README.md) | [Proyecto — Buscador rápido del catálogo](../../3-proyecto/README.md) → |

[↑ Semana 23](../../README.md)
