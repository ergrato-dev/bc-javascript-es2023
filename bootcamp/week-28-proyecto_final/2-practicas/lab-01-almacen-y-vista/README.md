# Lab 01 — El almacén y la vista

## Objetivo

Juntar el reductor puro de la semana 16 con el Observer de la semana 27 en un almacén: un objeto que guarda el estado, lo cambia solo con acciones y avisa a quien escucha. Después encuentras tres fallos de un almacén escrito deprisa, y calculas lo que se ve desde el estado en lugar de guardarlo. Es la base de `createStore` y `selectPage` del proyecto.

**Tiempo:** 1 h · **Teoría:** [02 - Arquitectura de la aplicación final](../../1-teoria/02-arquitectura-final.md)

## Cómo trabajar

[`starter/src/tasks.js`](starter/src/tasks.js) tiene el estado de una lista de tareas, su reductor y su vista. [`starter/src/store.js`](starter/src/store.js) tiene un almacén mínimo. [`starter/index.js`](starter/index.js) los usa en cinco pasos. Lee los dos archivos de `src/` antes de empezar: son cortos.

En cada paso, quita las `//` de las líneas que siguen a «Descomenta» y ejecuta, desde la carpeta `starter`:

```bash
cd bootcamp/week-28-proyecto_final/2-practicas/lab-01-almacen-y-vista/starter
node index.js
```

No hace falta instalar nada. Las salidas se obtuvieron con Node 24.19.0. Cada paso muestra solo su parte de la salida.

---

## Paso 1: Un reductor puro

`reduce(state, action)` devuelve un estado nuevo y nunca cambia el que recibe. En lugar de un `switch`, usa un objeto `HANDLERS` con una función por `type`: es la Strategy de la [semana 27](../../../week-27-patrones_clean_code/1-teoria/02-observer-strategy.md). `Object.hasOwn` evita que un `type` como `'toString'` encuentre un método heredado de `Object`.

```text
--- Paso 1: un reductor puro ---
  INITIAL: 0 tareas
  one: [ { id: 1, text: 'Comprar pan', done: false } ]
  two: [ { id: 1, text: 'Comprar pan', done: true } ]
  type desconocido, mismo objeto: true
```

`INITIAL` sigue con 0 tareas: cada llamada creó un objeto nuevo. Un `type` que el reductor no conoce devuelve **el mismo objeto**, no una copia. El paso 4 usa ese detalle.

## Paso 2: El almacén

`createStore(reducer, initial)` guarda el estado en una variable de su closure, como las fábricas de la [semana 27](../../../week-27-patrones_clean_code/1-teoria/01-module-singleton-factory.md). Desde fuera solo se puede leer con `getState()` y cambiar con `dispatch(action)`.

```text
--- Paso 2: el almacén ---
  estado: [ 'Comprar pan', 'Llamar al taller' ]
```

## Paso 3: Oyentes que repintan

`subscribe(listener)` añade un oyente, y `dispatch` llama a todos después de cada acción con el estado nuevo y la acción. `render` y el contador no se conocen, y el almacén no sabe qué hacen: es el Observer.

```text
--- Paso 3: oyentes que repintan ---
  render 1 tras toggle: · Comprar pan | ✔ Llamar al taller
  contador: 2 tareas
  render 2 tras add: · Comprar pan | ✔ Llamar al taller | · Regar las plantas
  contador: 3 tareas
```

En la página del proyecto, `main.js` hace lo mismo: `store.subscribe(render)`, y cada acción repinta la página.

## Paso 4: Lo que le falta a este almacén

Este almacén funciona en el caso normal, pero tiene tres fallos:

```text
--- Paso 4: lo que le falta a este almacén ---
  render 3 tras zoom: · Comprar pan | ✔ Llamar al taller | · Regar las plantas
  contador: 3 tareas
  (a) zoom no cambia nada, y aun así se repintó
  (b) quitar el contador dos veces quitó también render: nadie repinta
  primero: me quito
  (c) el segundo oyente no recibió el aviso
```

- **(a) Avisos de más.** `zoom` devolvió el mismo estado, y aun así se repintó todo. En una página, repintar sin motivo cuesta tiempo (semana 23).
- **(b) Quitar dos veces.** La segunda llamada a `stopCount()` busca el contador con `indexOf`, que ya no está y devuelve `-1`. `splice(-1, 1)` borra el **último** elemento del array: `render`. Después del `toggle` nadie repinta, y no hay ningún error.
- **(c) Quitarse durante un aviso.** El primer oyente se quita mientras el `for...of` recorre el array. El array se encoge, el bucle salta una posición y el segundo oyente se queda sin aviso.

Los tres fallos son silenciosos: el programa no lanza ningún error y hace algo distinto de lo que esperas. Por eso `createStore` del proyecto pide, en su especificación, lo contrario de cada uno. Arreglarlos es tu trabajo en el paso 9 del proyecto. Una pista: el paso 1 te dio la forma de saber si algo cambió.

## Paso 5: La vista se calcula

El estado guarda solo los datos (`tasks`) y lo que eligió la persona (`show`). Lo que se ve, `selectView(state)`, se calcula cada vez: las tareas visibles según el filtro y cuántas quedan pendientes.

```text
--- Paso 5: la vista se calcula ---
  [all] Pan · 1 pendientes
  [all] Pan, Taller · 2 pendientes
  [all] Pan, Taller · 1 pendientes
  [pending] Taller · 1 pendientes
  [done] Pan · 1 pendientes
  estado guardado: [ 'tasks', 'show' ]
✅ Lab completado.
```

Si el estado guardara también la lista filtrada y el número de pendientes, cada acción tendría que acordarse de actualizar los tres, y tarde o temprano una se olvidaría. Calculando la vista no hay nada que se desincronice. `selectPage` del proyecto hace lo mismo: busca, ordena y pagina desde `state.items`, `state.query`, `state.sort` y `state.page`.

---

## Comprobación

1. ¿Por qué `reduce` devuelve el mismo objeto con un `type` desconocido, y no `{ ...state }`? ¿Qué fallo del paso 4 se arregla gracias a eso?
2. Escribe en `src/store.js` el arreglo de **(b)** y de **(c)**, sin mirar el proyecto. Vuelve a ejecutar el paso 4: ¿qué líneas cambian?
3. Añade a `HANDLERS` una acción `remove` que quite una tarea por `id`. ¿Has tenido que cambiar `reduce`?
4. `selectView` cuenta las pendientes con `FILTERS.pending`. ¿Qué ventaja tiene sobre escribir otra vez `(task) => !task.done`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — La cadena de calidad](../lab-02-cadena-de-calidad/README.md) → |

[↑ Semana 28](../../README.md)
