# Lab 02 — Debounce y throttle

## Objetivo

Ver cuántas veces se hace un trabajo caro cuando llega un evento por tecla o por movimiento, y reducirlo con un debounce, un throttle sencillo, un throttle que no pierde el último evento y una función que solo acepta la primera de varias llamadas seguidas.

**Tiempo:** 50 min · **Teoría:** [02 - Debounce y throttle](../../1-teoria/02-debounce-throttle.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (`Ctrl+/` o `Cmd+/`) y ejecuta:

```bash
cd bootcamp/week-23-performance_optimizacion/2-practicas/lab-02-debounce-throttle
node starter/index.js
```

No hace falta teclear ni hacer scroll: arriba del archivo están las ayudas que lo simulan.

- **`simulate(times, values, handler)`** programa con `setTimeout` una llamada a `handler(values[i])` a los `times[i]` milisegundos, y devuelve una promesa que se cumple con el último evento.
- **`work(label)`** es el «trabajo caro»: escribe el momento, la etiqueta y el valor, y cuenta las veces en `works`.
- **`at()`** da los milisegundos desde que empezó la simulación, redondeados a 10 para que la salida sea estable. Un temporizador nunca se adelanta, pero puede retrasarse algún milisegundo.

Los pasos van en orden: descomenta del 1 en adelante. Las salidas se obtuvieron con Node 24.19.0, y deberían coincidir con las tuyas.

---

## Paso 1: Un evento por tecla

```text
--- Paso 1: Buscar en cada tecla ---
     0 ms busco: o
   100 ms busco: or
   200 ms busco: ori
   300 ms busco: orio
   400 ms busco: orion
  5 teclas, 5 búsquedas
```

Cinco teclas, una cada 100 ms, y una búsqueda por tecla. En el proyecto, cada búsqueda recorre miles de fichas y repinta la lista.

## Paso 2: debounce, esperar a que dejen de escribir

```text
--- Paso 2: debounce de 250 ms ---
   650 ms busco: orion
  5 teclas, 1 búsqueda
```

Cada tecla cancela el temporizador anterior y programa otro de 250 ms. El último, programado a los 400 ms, es el único que llega a cumplirse: a los 650 ms. El `await wait(300)` da tiempo a que se cumpla antes de escribir el resumen.

## Paso 3: Una pausa al escribir

```text
--- Paso 3: Escribir, parar y seguir ---
   350 ms busco: or
   950 ms busco: orion
  5 teclas, 2 búsquedas
```

Entre la segunda tecla (100 ms) y la tercera (500 ms) pasan 400 ms, más que la espera: el debounce busca «or» a los 350 ms. Después, la búsqueda final llega 250 ms tras la última tecla.

## Paso 4: throttle, como mucho uno cada 100 ms

```text
--- Paso 4: throttle sencillo ---
     0 ms pinto en: 0
   130 ms pinto en: 260
   250 ms pinto en: 500
   370 ms pinto en: 740
  12 eventos, 4 actualizaciones · último scroll en 900
```

Los eventos de scroll llegan a los 0, 50, 90, 130... 450 ms, y cada uno lleva la posición (el doble del tiempo). `throttleSimple` deja pasar un evento si han pasado 100 ms desde el último que dejó pasar: el de 0, el de 130 (el de 90 llega antes de tiempo), el de 250 y el de 370. Los eventos de 410 y 450 llegan dentro de la ventana y se descartan, así que **la página se queda pintada en 740** aunque el scroll terminó en 900.

## Paso 5: throttle que no pierde el último

```text
--- Paso 5: throttle con llamada final ---
     0 ms pinto en: 0
   100 ms pinto en: 180
   200 ms pinto en: 340
   300 ms pinto en: 580
   400 ms pinto en: 740
   500 ms pinto en: 900
  12 eventos, 6 actualizaciones · último scroll en 900
```

Ahora la ventana es un temporizador. El primer evento pinta enseguida; los que llegan durante la ventana solo guardan sus argumentos en `pending`, y el último sustituye a los anteriores. Al cerrarse la ventana, a los 100 ms, se pinta el último guardado (el de 90 ms, posición 180) y se abre otra ventana. A los 500 ms se pinta el de 450: la posición final es correcta.

## Paso 6: Evitar el doble clic

```text
--- Paso 6: La primera vale, las repetidas no ---
     0 ms envío: clic 1
   900 ms envío: clic 4
  4 clics, 2 envíos

✅ Lab completado.
```

`once` ejecuta la llamada si no hay temporizador y, en cualquier caso, reinicia una espera de 500 ms. Los clics 2 y 3 (a los 80 y 150 ms) llegan dentro de la espera y se ignoran; el clic 4, a los 900 ms, llega cuando ya pasaron más de 500 ms desde el último, y vale. Es un debounce que se ejecuta al **principio** de la ráfaga en lugar de al final.

---

## Comprobación

1. En el paso 2, cambia la espera a 50 ms. ¿Cuántas búsquedas hay? ¿Y con 500 ms, a qué hora llega la búsqueda? ¿Qué espera elegirías para un buscador y por qué?
2. En el paso 5, añade un evento más a los 1000 ms (`scrolling.push(1000)` y `positions.push(2000)` justo después de crearlos). ¿Se pinta enseguida o espera? ¿Por qué?
3. Añade a `debounce` un método `cancel` que anule la búsqueda pendiente ([teoría 02](../../1-teoria/02-debounce-throttle.md#4-cancelar-lo-que-está-pendiente)) y pruébalo: en el paso 2, llama a `cancel()` a los 500 ms. Resultado esperado: `5 teclas, 0 búsquedas`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Medir el rendimiento](../lab-01-medir/README.md) | [Lab 03 — Hacer menos trabajo en la página](../lab-03-menos-trabajo/README.md) → |

[↑ Semana 23](../../README.md)
