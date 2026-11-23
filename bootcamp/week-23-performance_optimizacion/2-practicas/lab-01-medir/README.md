# Lab 01 — Medir el rendimiento

## Objetivo

Medir tiempos con `performance.now()`, poner nombre a las medidas con `mark` y `measure`, repetir una medida para quedarte con la mediana, comparar `includes` con `has` y preparar una vez los textos de una búsqueda.

**Tiempo:** 50 min · **Teoría:** [01 - Medir antes de optimizar](../../1-teoria/01-medir.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (`Ctrl+/` o `Cmd+/`) y ejecuta:

```bash
cd bootcamp/week-23-performance_optimizacion/2-practicas/lab-01-medir
node starter/index.js
```

Node 24 trae la misma API `performance` que el navegador. Arriba están `ms`, que escribe milisegundos con dos decimales, `records`, un catálogo de 2000 fichas con nombres como `Nebulosa de Orión 3`, y `clean`, que quita tildes y pasa a minúsculas ([teoría 03](../../1-teoria/03-menos-trabajo.md#2-preparar-una-vez-lo-que-no-cambia)). Los pasos van en orden: descomenta del 1 en adelante.

Las salidas se obtuvieron con Node 24.19.0. **Tus tiempos serán otros**, y cambian en cada ejecución: lo que debe coincidir son las respuestas `true`/`false`, los resultados de las búsquedas y, más o menos, cuántas veces es más rápida una versión que otra.

---

## Paso 1: Date.now() y performance.now()

```text
--- Paso 1: Date.now() y performance.now() ---
  Date.now(): 1795418388910
  performance.now(): 24.931224
  sumar un millón de números, con performance.now(): 3.10 ms
  lo mismo con Date.now(): 4 ms
```

`Date.now()` son los milisegundos desde 1970; `performance.now()`, los milisegundos desde que arrancó el programa, con decimales. Para el mismo bucle, `Date.now()` solo puede dar milisegundos enteros: con tareas de menos de 1 ms, daría `0` o `1`.

## Paso 2: Marcas y medidas con nombre

```text
--- Paso 2: mark y measure ---
  medida: limpiar · measure · 1.64 ms
  marcas guardadas: limpiar:inicio, limpiar:fin
  la tercera, limpia: nebulosa de orion 3
  tras clearMarks: 0
```

`measure` devuelve la entrada que crea: su `name`, su tipo (`entryType`) y su duración. Las marcas se quedan guardadas hasta que las borras con `clearMarks`.

## Paso 3: Repetir y quedarse con la mediana

```text
--- Paso 3: Repetir y quedarse con la mediana ---
  7 vueltas: 7.14 · 0.96 · 0.57 · 0.56 · 0.55 · 0.60 · 0.57
  la primera es la más lenta: true
  mediana: 0.57 ms
```

La primera vuelta tarda más de diez veces lo que las demás: el motor todavía no había optimizado `localeCompare` ni la función de ordenar. Con una sola medida habrías concluido que ordenar tarda 7 ms. La mediana, 0.57 ms, no se deja llevar por esa vuelta. `timeIt` y `median` se usan en los pasos siguientes.

## Paso 4: Comparar dos formas de hacer lo mismo

```text
--- Paso 4: includes en un array contra has en un Set ---
  array.includes: 1.64 ms
  set.has: 0.08 ms
  el Set es 20 veces más rápido
  mismos resultados: true
```

Las dos versiones encuentran los mismos ids. `includes` recorre el array de 2000 ids para cada uno de los 2000 buscados; `has` va directo. En tu equipo, el número de veces puede ir de 10 a 50: depende de la máquina y de la ejecución.

## Paso 5: No repetir el trabajo que no cambia

```text
--- Paso 5: Preparar una vez, buscar muchas ---
  limpiando en cada búsqueda: 3.23 ms
  con los textos ya limpios: 0.20 ms
  más rápido con los textos limpios: true
  resultados de «orion»: 400 400
```

`searchSlow` limpia los 2000 nombres en cada búsqueda; `searchFast` busca en `prepared`, con los textos limpios calculados una sola vez. Las dos encuentran las mismas 400 fichas. Es la idea del índice del [proyecto](../../3-proyecto/README.md).

## Paso 6: console.time y PerformanceObserver

```text
--- Paso 6: console.time y PerformanceObserver ---
ordenar: 0.797ms
  medida creada; el observador avisa después
  observado: buscar true

✅ Lab completado.
```

- `console.timeEnd` escribe la etiqueta y el tiempo sin sangría, en su propio formato.
- La línea `observado` sale **después** de `medida creada`: el observador recibe las entradas más tarde, cuando el programa ha terminado lo que estaba haciendo. Por eso el mensaje final está dentro de su función.
- Sin el segundo argumento, `measure('buscar', 'buscar:inicio')` mide desde la marca hasta ahora.

---

## Comprobación

1. En el paso 3, cambia `timeIt(sortNames)` por `timeIt(sortNames, 21)`. ¿Cambia mucho la mediana? ¿Y la media (suma de los tiempos entre 21)? ¿Cuál de las dos se parece más a lo que tarda «normalmente»?
2. En el paso 4, cambia el catálogo a 20 000 fichas (`length: 20000` arriba del todo). ¿Cuántas veces más tarda `includes`? ¿Y `has`? Explica la diferencia.
3. Mide con `mark` y `measure` cuánto tarda crear `prepared` en el paso 5. ¿Cuántas búsquedas hacen falta para que prepararlo compense?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Debounce y throttle](../lab-02-debounce-throttle/README.md) → |

[↑ Semana 23](../../README.md)
