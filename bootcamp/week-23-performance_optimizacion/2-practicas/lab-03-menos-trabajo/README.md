# Lab 03 — Hacer menos trabajo en la página

## Objetivo

Medir en el navegador el coste de leer y escribir medidas por turnos, insertar muchos elementos de tres formas, recordar un cálculo caro, cargar imágenes al verlas con `IntersectionObserver`, pintar una vez por fotograma con `requestAnimationFrame` y partir una tarea larga.

**Tiempo:** 60 min · **Teoría:** [03 - Hacer menos trabajo](../../1-teoria/03-menos-trabajo.md) y [02 - Debounce y throttle](../../1-teoria/02-debounce-throttle.md#5-un-cambio-por-fotograma-requestanimationframe)

## Cómo trabajar

Este lab es una página. [`starter/index.html`](starter/index.html) tiene tres zonas: las cajas, la lista y la galería. [`starter/main.js`](starter/main.js) crea 300 cajas azules y tiene 6 pasos.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic, y la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
2. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Cada paso añade una función a `steps`, y el final del archivo las ejecuta en orden esperando a cada una. Arriba están `wait`, `ms` (milisegundos con un decimal) y `timeIt(fn)`, que ejecuta `fn` cinco veces y devuelve la mediana ([teoría 01](../../1-teoria/01-medir.md#4-una-sola-medida-engaña)). Los pasos van en orden: descomenta del 1 en adelante.

Las salidas se obtuvieron en Chromium 156 con la página abierta con doble clic, en una ventana de 1000 × 800 píxeles. **Tus tiempos serán otros**: lo que debe coincidir son las conclusiones y los recuentos (salvo los del paso 4, que dependen del alto de tu ventana).

---

## Paso 1: Leer y escribir medidas por turnos

```text
--- Paso 1: Leer, escribir, leer, escribir... ---
  leer y escribir alternando: 29.9 ms
  leer todo y luego escribir todo: 0.5 ms
  por lotes, más rápido: true
```

En la primera versión, cada `offsetWidth` llega después de cambiar el ancho de la caja anterior: el navegador recalcula el diseño de las 300 cajas en cada vuelta. En la segunda, todas las lecturas van antes que las escrituras y el diseño se calcula una vez. El resultado en pantalla es el mismo: cada caja 1 px más ancha (`reset` las devuelve a 20 px).

## Paso 2: Insertar muchos elementos

```text
--- Paso 2: Uno a uno o con un fragmento ---
  uno a uno: 23.5 ms
  con un fragmento: 22.1 ms
  uno a uno leyendo la altura cada vez: 501.1 ms
  elementos en la lista: 2000
```

Insertar 2000 elementos uno a uno o reunidos en un `DocumentFragment` cuesta casi lo mismo: el navegador espera a que tu código termine para recalcular. Leer `scrollHeight` al final de cada versión obliga a calcular el diseño una vez, para que la medida lo incluya. Pero leerlo **después de cada inserción** lo calcula 2000 veces: más de veinte veces más lento. Lo caro no es insertar, sino obligar a recalcular a mitad.

## Paso 3: Recordar resultados caros

```text
--- Paso 3: memoize ---
  primos hasta 300000: 25997 en 17.6 ms
  primos hasta 300000: 25997 en 0.0 ms
  primos hasta 100000: 9592 en 3.4 ms
  primos hasta 300000: 25997 en 0.0 ms
  resultados guardados: 2
```

`countPrimesCached` calcula solo si el `Map` no tiene ya el resultado. Con 300 000, la primera vez cuenta y las siguientes leen el `Map`; con 100 000, que es otro argumento, cuenta de nuevo. `0.0 ms` no significa cero: el navegador redondea `performance.now()` a pasos de 0,1 ms ([teoría 01](../../1-teoria/01-medir.md#2-performancenow)).

## Paso 4: Cargar imágenes cuando se van a ver

```text
--- Paso 4: IntersectionObserver ---
  imágenes cargadas al empezar: 2 de 30
  tras bajar hasta la 15: 8 de 30
  tras bajar hasta el final: 13 de 30
```

Las 30 imágenes de la galería se crean sin `src`: su dirección (un SVG con su número) está en `data-src`. El observador la pasa a `src` cuando la imagen se acerca a menos de 100 px de la pantalla, y deja de observarla. El paso baja con `scrollIntoView` hasta la imagen 15 y hasta la última: las que quedan entre medias nunca han estado a la vista, y no se cargan. Al terminar, vuelve arriba. Con una ventana más alta o más baja, los números cambian.

## Paso 5: Un cambio por fotograma

```text
--- Paso 5: requestAnimationFrame ---
  eventos: 100 · veces pintado: 1 · último x: 100
  ancho de la primera caja: 30px
```

El paso lanza 100 eventos `pointermove` seguidos con `dispatchEvent`. El listener solo guarda `clientX` y pide un fotograma si no hay uno pedido: se pinta una vez, con el último valor (`20 + 100 / 10 = 30` px). Mueve el ratón de verdad sobre las cajas para ver que funciona igual: Chromium ya agrupa los movimientos del ratón por fotograma, pero otros eventos, como los de un sensor o los de una conexión, no.

## Paso 6: Tareas largas

```text
--- Paso 6: Tareas largas ---
  ¿el navegador avisa de tareas largas? true
  150 ms seguidos: 1 tarea larga de unos 150 ms
  10 trozos de 15 ms: 0 tareas largas

✅ Lab completado.
```

`busy(ms)` ocupa el hilo sin hacer nada útil durante esos milisegundos. 150 ms seguidos son una tarea larga: el observador la registra. El mismo trabajo en diez trozos, con `await wait(0)` entre uno y otro, son diez tareas cortas: entre ellas, la página puede atender clics y pintar. En Firefox y Safari, la primera línea da `false` y no se cuenta ninguna tarea larga, porque no tienen el tipo `longtask`.

---

## Comprobación

1. En el paso 1, cada vuelta lee y escribe una caja distinta de la anterior. ¿Por qué leer el ancho de una caja obliga a recalcular después de cambiar otra? Pista: las cajas están en una fila que salta de línea (`flex-wrap`); ¿qué les pasa a las siguientes cuando una crece?
2. En el paso 4, cambia `rootMargin` a `'0px'` y luego a `'1000px'`. ¿Cuántas imágenes se cargan al empezar en cada caso? ¿Qué ventaja y qué inconveniente tiene un margen grande?
3. En el paso 6, mientras se ejecutan los 150 ms seguidos, ¿responde la página a un clic? Añade un botón con un listener que escriba en la consola y haz clic justo al recargar. Repite con los trozos de 15 ms.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Debounce y throttle](../lab-02-debounce-throttle/README.md) | [Lab 04 — Fugas de memoria](../lab-04-fugas-memoria/README.md) → |

[↑ Semana 23](../../README.md)
