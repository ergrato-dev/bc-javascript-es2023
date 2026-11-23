# 📖 Glosario - Semana 23: Performance y Optimización

Términos clave de esta semana ordenados alfabéticamente.

---

## A

### Alcanzable
Un objeto al que se puede llegar desde una raíz (una variable global o del módulo, una función en ejecución, un listener o un temporizador activo) siguiendo referencias. El recolector de basura nunca borra un objeto alcanzable.

## C

### Caché LRU
Una caché con un número máximo de entradas que, al llenarse, borra la que lleva más tiempo sin usarse. Del inglés *Least Recently Used*. Con un `Map`: la primera clave es la más antigua, y una clave usada se borra y se vuelve a insertar para pasarla al final.

### Centinela
Un elemento vacío al final de una lista que se observa con `IntersectionObserver`: cuando se acerca a la pantalla, se pinta la página siguiente.

### Closure
Una función junto con las variables de la función que la creó, que recuerda aunque esa ya haya terminado. Si usa una variable con datos grandes, los mantiene en memoria.

## D

### Debounce
Retrasar un trabajo hasta que los eventos dejan de llegar durante un tiempo: cada evento reinicia la espera y solo el último hace el trabajo. Para buscar mientras se escribe o guardar un borrador.

### Diseño (layout)
La fase en la que el navegador calcula el tamaño y la posición de cada caja. Leer `offsetWidth` o `getBoundingClientRect()` después de cambiar algo obliga a hacerla en ese momento.

## F

### Fuga de memoria
Memoria ocupada por datos que ya no se usan pero siguen alcanzables, normalmente por una referencia olvidada: un listener, un temporizador, una caché sin límite o un array que solo crece.

### Fotograma
Cada imagen que pinta la pantalla: unos 60 por segundo, uno cada 16 ms. `requestAnimationFrame` ejecuta código justo antes del siguiente.

## I

### Índice
Datos preparados por adelantado para que las consultas sean rápidas, como el texto normalizado de cada ficha en el proyecto. Cuesta memoria y hay que rehacerlo si los datos cambian.

### IntersectionObserver
API del navegador que avisa cuando un elemento entra o sale de la pantalla (o de otro elemento), sin escuchar `scroll`. `rootMargin` agranda la zona observada.

## J

### JIT
Compilación sobre la marcha (*just in time*): el motor compila primero de forma rápida y vuelve a compilar, optimizadas, las funciones que se repiten. Por eso la primera ejecución suele ser la más lenta.

## L

### Layout thrashing
Leer y escribir medidas por turnos dentro de un bucle, lo que obliga al navegador a recalcular el diseño en cada vuelta. Se evita haciendo primero todas las lecturas y después todas las escrituras.

### Listener pasivo
Un listener añadido con `{ passive: true }`: promete no llamar a `preventDefault`, así que el navegador desplaza la página sin esperar a que termine.

## M

### Mediana
El valor del medio de una lista ordenada (con un número par de valores, la media de los dos del medio). Para medir tiempos es mejor que la media, porque una ejecución anormalmente lenta no la mueve.

### Memoize
Guardar el resultado de una función según sus argumentos para devolverlo sin recalcular la próxima vez. Solo es correcto con funciones puras.

## P

### performance.mark / performance.measure
`mark(nombre)` guarda un instante con nombre; `measure(nombre, inicio, fin)` guarda la duración entre dos marcas. Se leen con `performance.getEntriesByType`.

### performance.now()
Milisegundos con decimales desde que empezó la página o el programa, con un reloj que solo avanza. Los navegadores lo redondean a pasos de 0,1 ms.

### PerformanceObserver
Recibe las entradas de rendimiento (`measure`, `longtask`...) a medida que se producen.

## R

### Recolector de basura
La parte del motor de JavaScript que busca los objetos que ya no son alcanzables y libera su memoria. En inglés, *garbage collector* (GC).

### requestAnimationFrame
Pide al navegador que ejecute una función justo antes del próximo fotograma. Sirve para hacer un cambio visual por fotograma, aunque lleguen muchos eventos.

## T

### Tarea larga
Un trozo de código que ocupa el hilo principal más de 50 ms seguidos: mientras dura, la página no responde. Se evita partiéndolo en trozos con un `await` entre ellos.

### Throttle
Hacer un trabajo como mucho una vez cada cierto tiempo mientras llegan eventos. La versión completa ejecuta al final de cada ventana el último evento recibido, para no perderlo.

## W

### WeakMap
Un `Map` cuyas claves son objetos guardados de forma débil: no impiden que el recolector los borre. No tiene `size` ni se puede recorrer.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | — |

[↑ Semana 23](../README.md)
