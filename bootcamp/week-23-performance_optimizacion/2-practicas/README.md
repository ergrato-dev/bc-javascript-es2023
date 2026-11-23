# Prácticas — Semana 23

Cuatro labs guiados. Los labs 01, 02 y 04 se ejecutan con Node: descomentas paso a paso `starter/index.js`, ejecutas el comando del README y comparas la salida. El lab 03 es una página, porque mide cosas que solo hace el navegador (calcular el diseño, pintar, observar lo que se ve): descomentas `starter/main.js`, recargas la página y miras la consola de las DevTools. Antes de ejecutar, intenta predecir qué saldrá. No se entregan; preparan el [proyecto de la semana](../3-proyecto/README.md).

| Lab | Tema | Duración |
|---|---|---|
| [Lab 01](lab-01-medir/README.md) | `performance.now()`, `mark` y `measure`, la mediana, `includes` contra `has` y preparar una vez | 50 min |
| [Lab 02](lab-02-debounce-throttle/README.md) | Una búsqueda por tecla, debounce, throttle sencillo y con llamada final, y evitar el doble clic | 50 min |
| [Lab 03](lab-03-menos-trabajo/README.md) | Leer y escribir medidas por lotes, insertar elementos, memoize, `IntersectionObserver`, `requestAnimationFrame` y tareas largas | 60 min |
| [Lab 04](lab-04-fugas-memoria/README.md) | Memoria alcanzable, listeners, temporizadores, cachés con límite, `WeakMap` y closures | 50 min |

**Total:** 3 h 30 min.

## Antes de empezar

Para los labs 01, 02 y 04 necesitas Node en la versión de [docs/stack-versions.md](../../../docs/stack-versions.md); para el lab 03, Chrome o Edge actuales con sus DevTools. En Firefox también funciona, salvo el recuento de tareas largas del paso 6.

**Los tiempos que mides dependen de tu equipo** y cambian en cada ejecución. Los READMEs de los labs 01 y 03 muestran una ejecución real: compara las conclusiones (qué versión es más rápida, y cuántas veces más o menos), no los milisegundos exactos. Los labs 02 y 04 sí deberían darte la misma salida.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🧹 Fugas de memoria](../1-teoria/04-fugas-memoria.md) | [Lab 01 — Medir el rendimiento](lab-01-medir/README.md) → |

[↑ Semana 23](../README.md)
