# Lab 04 — Estados de carga

## Objetivo

Guardar en un objeto en qué punto está una petición (`idle`, `loading`, `success`, `empty` o `error`) y pintar la interfaz a partir de él; ignorar los clics repetidos mientras carga; ver una condición de carrera entre dos búsquedas y arreglarla con `AbortController`; y borrar de forma optimista, volviendo atrás si el servidor falla.

**Tiempo:** 50 min · **Teoría:** [04 - Estados de carga](../../1-teoria/04-estados-carga.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-16-apis_rest_crud/2-practicas/lab-04-estados-carga
node starter/index.js
```

El lab usa la [API de prácticas](../lab-01-diseno-rest/README.md#la-api-de-prácticas) del lab 01. Con `?delay=ms` la respuesta tarda más y con `?fail` el servidor contesta `503`. Todos los pasos usan `load` del paso 1 y el mismo `state`, así que descomenta en orden; las salidas se obtuvieron con Node 24 y todos los pasos descomentados.

Ya hechos al principio del archivo:

- `fetchSpecies(params, signal)` pide una página de especies y devuelve su `data`.
- `state` guarda el estado de la lista: `{ status, data, error }`.
- `setState(changes)` crea un estado nuevo con los cambios (sin modificar el anterior) y llama a `render()`.
- `render()` imprime el estado. En una página pintaría el DOM: un indicador de carga, la lista o un mensaje.

---

## Paso 1: `idle` → `loading` → `success`

`load` marca `loading` antes de pedir y `success` cuando llegan los datos. La interfaz no decide qué mostrar mirando si hay datos o no: lo dice `status`. `render()` se llama una vez al principio para ver el estado inicial, `idle` («todavía no se ha pedido nada»).

```text
--- Paso 1: Un ciclo de carga ---
  [idle] datos: —
  [loading] datos: —
  [success] datos: Piraña roja, Arapaima, Pez disco
```

## Paso 2: una lista vacía no es un error

Una búsqueda sin resultados ha ido bien: la petición respondió `200`. Merece su propio estado, `empty`, para mostrar «No hay especies con ese nombre» en lugar de una lista en blanco o un mensaje de error. Mientras carga, la lista anterior sigue en pantalla.

```text
--- Paso 2: empty ---
  [loading] datos: Piraña roja, Arapaima, Pez disco
  [empty] datos: —
```

## Paso 3: el error conserva los datos anteriores

Cuando falla la segunda carga, `setState` cambia `status` y `error`, pero no `data`: la página puede mostrar el aviso encima de la lista que ya tenía, en lugar de dejarla vacía.

```text
--- Paso 3: error ---
  [loading] datos: —
  [success] datos: Tiburón ballena, Manta raya
  [loading] datos: Tiburón ballena, Manta raya
  [error] datos: Tiburón ballena, Manta raya · error: Servicio no disponible
```

## Paso 4: ignorar el segundo clic mientras carga

`Promise.all` lanza dos cargas a la vez, como un doble clic en «Buscar». La segunda ve `status: 'loading'` y no hace nada: solo sale una petición. En una página, además, el botón se deshabilita mientras dura la carga (`button.disabled = true`) para que se vea.

```text
--- Paso 4: Doble clic ---
  [loading] datos: Tiburón ballena, Manta raya
  (ya está cargando: se ignora)
  [success] datos: Pez payaso, Pez cirujano
  peticiones: 1
```

## Paso 5: dos búsquedas que llegan en otro orden

Quien escribe en el buscador lanza una búsqueda por tecla. Aquí, `"pe"` tarda 300 ms y `"pez l"`, que se escribió después, 50 ms. Las respuestas llegan en otro orden del que salieron, y la última en llegar sobrescribe a la buena: el campo dice `"pez l"` y la lista es la de `"pe"`. Esto es una **condición de carrera**: el resultado depende de qué respuesta llega antes, algo que el código no controla.

```text
--- Paso 5: Condición de carrera ---
  llega la respuesta de "pez l"
  [success] datos: Pez luna, Pez león
  llega la respuesta de "pe"
  [success] datos: Pez payaso, Pez cirujano, Pez ángel, Pez disco, Pez luna
  El campo de búsqueda dice "pez l", pero la lista es la de "pe"
```

## Paso 6: cancelar la búsqueda anterior

`searchLatest` guarda el `AbortController` de la última búsqueda (semana 15) y lo aborta al empezar una nueva. La búsqueda vieja se rechaza con un `AbortError`, que no es un fallo: se ignora sin tocar el estado. Ahora solo la última búsqueda puede cambiar la lista, llegue cuando llegue.

```text
--- Paso 6: AbortController ---
  "pe" cancelada: ya no hace falta
  llega la respuesta de "pez l"
  [success] datos: Pez luna, Pez león
```

## Paso 7: borrado optimista con vuelta atrás

Una **actualización optimista** cambia la interfaz antes de que responda el servidor, como si todo fuera a ir bien: la especie desaparece al instante. `previous` guarda la lista de antes; si la respuesta no es `ok`, `setState` la recupera y explica por qué ha vuelto la especie.

```text
--- Paso 7: Actualización optimista ---
  [loading] datos: Pez luna, Pez león
  [success] datos: Piraña roja, Arapaima, Pez disco
  Borrar Arapaima (id 7) con el servidor bien:
  [success] datos: Piraña roja, Pez disco
  Borrar Pez disco (id 10) con el servidor caído:
  [success] datos: Piraña roja
  [success] datos: Piraña roja, Pez disco · error: No se pudo borrar (503); se recupera la lista

✅ Lab completado.
```

Va bien con acciones que casi siempre salen bien y se pueden deshacer, como borrar de una lista o marcar un favorito. Para un pago, mejor esperar la respuesta.

---

## Comprobación

1. En el paso 3, la última línea dice `[error]` con datos. Escribe qué mostraría una página en cada uno de los cinco estados: `idle`, `loading`, `success`, `empty` y `error`.
2. En el paso 6, cambia el retraso de `"pez l"` a 400 ms, para que sea la más lenta. ¿Cambia la salida? ¿Por qué la cancelación no depende de qué búsqueda tarda más?
3. En el paso 7, `removeOptimistic` no usa `try`/`catch`. Para el servidor antes del borrado (`await server.close()` justo antes de la llamada) y explica qué pasaría con la lista y cómo lo arreglarías.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Autenticación con token](../lab-03-autenticacion/README.md) | [Proyecto — Panel de la colección](../../3-proyecto/README.md) → |

[↑ Semana 16](../../README.md)
