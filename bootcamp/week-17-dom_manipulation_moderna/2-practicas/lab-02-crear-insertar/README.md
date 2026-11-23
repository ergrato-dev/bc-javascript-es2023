# Lab 02 — Crear, insertar y quitar nodos

## Objetivo

Cambiar la estructura de una página desde JavaScript: crear elementos, ponerlos en el sitio exacto, moverlos de una lista a otra, copiarlos, quitarlos y sustituir el contenido entero de un contenedor con un solo cambio.

**Tiempo:** 50 min · **Teoría:** [02 - Crear, insertar y quitar nodos](../../1-teoria/02-crear-insertar.md)

## Cómo trabajar

[`starter/index.html`](starter/index.html) trae dos listas de tareas, «Pendientes» y «Hechas». [`starter/main.js`](starter/main.js) tiene 6 pasos.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Los pasos cambian las dos listas de la página, así que también verás el resultado sin la consola. Cada paso parte de cómo dejó las listas el anterior: descomenta en orden. Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados.

Al principio del archivo ya tienes dos funciones:

- `show(label)` imprime el texto de cada `<li>` de las dos listas.
- `makeItem(text)` crea un `<li>` con ese texto. Hace lo mismo que las tres primeras líneas del paso 1, pero en una función que se puede reutilizar.

```text
Inicio → pendientes: Limpiar filtros, Medir el pH | hechas: —
```

---

## Paso 1: `createElement` y `append`

`document.createElement('li')` crea un elemento que todavía no está en la página: existe en memoria, pero `document.contains` dice `false` y no se ve. Aparece cuando lo insertas dentro de un elemento que sí está en la página.

`append` añade al final del contenedor y acepta varios nodos a la vez. `appendChild`, el método antiguo, acepta uno solo y devuelve el nodo que ha insertado. Los dos funcionan; en código nuevo, `append` es más cómodo.

```text
--- Paso 1: Crear y añadir ---
¿Está en la página? false
¿Y ahora? true
Tras append → pendientes: Limpiar filtros, Medir el pH, Dar de comer, Revisar luces, Contar peces | hechas: —
appendChild devuelve: Cambiar el agua
Tras appendChild → pendientes: Limpiar filtros, Medir el pH, Dar de comer, Revisar luces, Contar peces, Cambiar el agua | hechas: —
```

## Paso 2: cada sitio tiene su método

| Método | Dónde inserta |
|---|---|
| `contenedor.prepend(nodo)` | Al principio, dentro del contenedor |
| `contenedor.append(nodo)` | Al final, dentro del contenedor |
| `elemento.before(nodo)` | Justo antes del elemento, como hermano |
| `elemento.after(nodo)` | Justo después del elemento, como hermano |

`before` y `after` se llaman sobre el elemento de referencia, no sobre la lista. Aquí la referencia es el `<li>` «Medir el pH».

```text
--- Paso 2: Posiciones ---
prepend → pendientes: Abrir el acuario, Limpiar filtros, Medir el pH, Dar de comer, Revisar luces, Contar peces, Cambiar el agua | hechas: —
before y after → pendientes: Abrir el acuario, Limpiar filtros, Calibrar el medidor, Medir el pH, Apuntar el pH, Dar de comer, Revisar luces, Contar peces, Cambiar el agua | hechas: —
```

## Paso 3: insertar un nodo que ya está en la página lo mueve

Un nodo solo puede estar en un sitio. Si haces `append` de un elemento que ya está en la página, el navegador lo saca de donde estaba y lo pone en el sitio nuevo: no se copia. Por eso «Abrir el acuario» desaparece de pendientes al llegar a hechas, y el total de `<li>` sigue en 9.

En la segunda llamada, cada `todo.firstElementChild` se calcula antes de mover nada: los dos argumentos son el mismo elemento, «Limpiar filtros», que se mueve una sola vez. Si querías mover los dos primeros, tendrás que leerlos antes en dos variables.

```text
--- Paso 3: Mover ---
Primero a hechas → pendientes: Limpiar filtros, Calibrar el medidor, Medir el pH, Apuntar el pH, Dar de comer, Revisar luces, Contar peces, Cambiar el agua | hechas: Abrir el acuario
Dos más → pendientes: Calibrar el medidor, Medir el pH, Apuntar el pH, Dar de comer, Revisar luces, Contar peces, Cambiar el agua | hechas: Abrir el acuario, Limpiar filtros
Elementos <li> en la página: 9
```

## Paso 4: `cloneNode` copia

Para tener el mismo elemento en dos sitios hay que copiarlo. `cloneNode()` copia el elemento con sus atributos (también `data-priority`), pero sin hijos: el texto de un `<li>` es un nodo hijo, así que la copia sale vacía. `cloneNode(true)` copia también todo lo que hay dentro.

La copia es otro nodo (`===` da `false`), aunque `isEqualNode` diga que son iguales. Ojo con los `id`: una copia profunda los duplica, y un `id` debe ser único en la página.

```text
--- Paso 4: Copiar ---
Copia superficial: "" · priority: alta
Copia profunda: "Abrir el acuario" · priority: alta
¿Es el mismo nodo? false · ¿iguales? true
Copia en pendientes → pendientes: Calibrar el medidor, Medir el pH, Apuntar el pH, Dar de comer, Revisar luces, Contar peces, Cambiar el agua, Abrir el acuario | hechas: Abrir el acuario, Limpiar filtros
```

## Paso 5: quitar y sustituir

- `elemento.remove()` saca el elemento de la página. Antes había que pedírselo al padre con `padre.removeChild(elemento)`.
- `elemento.replaceWith(otro)` pone otro nodo en su lugar.
- `contenedor.replaceChildren()` sin argumentos vacía el contenedor; con argumentos, cambia todo su contenido por los nodos que le pasas.

```text
--- Paso 5: Quitar ---
remove → pendientes: Calibrar el medidor, Medir el pH, Apuntar el pH, Dar de comer, Revisar luces, Contar peces, Cambiar el agua | hechas: Abrir el acuario, Limpiar filtros
replaceWith → pendientes: Revisar el termostato, Medir el pH, Apuntar el pH, Dar de comer, Revisar luces, Contar peces, Cambiar el agua | hechas: Abrir el acuario, Limpiar filtros
replaceChildren() vacía → pendientes: Revisar el termostato, Medir el pH, Apuntar el pH, Dar de comer, Revisar luces, Contar peces, Cambiar el agua | hechas: —
replaceChildren(...) sustituye → pendientes: Revisar el termostato, Medir el pH, Apuntar el pH, Dar de comer, Revisar luces, Contar peces, Cambiar el agua | hechas: Limpiar filtros, Dar de comer
```

## Paso 6: muchos nodos de una vez

Cada inserción en la página es un cambio que el navegador tiene que procesar. Un `MutationObserver` lo hace visible: anota cada cambio en la lista que observa, y `takeRecords()` devuelve lo anotado.

- Tres `append` seguidos son 3 cambios.
- Un `DocumentFragment` es un contenedor que no está en la página. Montas los nodos dentro y lo insertas una vez: es 1 cambio, y el fragmento se queda vacío porque sus nodos se han movido a la lista.
- `replaceChildren(...nodos)` con la sintaxis `...` (*spread*) de la semana 02 también es 1 cambio, y sustituye lo que había.

Con tres nodos no se nota la diferencia; con mil, insertar de uno en uno puede hacer que la página tarde en responder.

```text
--- Paso 6: Fragmentos ---
Uno a uno: 3 cambios
Nodos en el fragmento: 3
Con un fragmento: 1 cambio
Nodos en el fragmento después: 0
Con replaceChildren(...): 1 cambio
Final → pendientes: Lavar redes, Pedir pienso, Pesar la comida | hechas: Limpiar filtros, Dar de comer

✅ Lab completado.
```

---

## Comprobación

1. En el paso 3, cambia `done.append(first)` por `done.append(first.cloneNode(true))`. ¿Cuántos `<li>` habrá en la página y qué listas cambian?
2. ¿Por qué la copia superficial del paso 4 tiene el atributo `data-priority`, pero no el texto?
3. Reescribe `show` del principio del archivo para que use `todo.childNodes` en lugar de `todo.children`. ¿Qué aparece ahora en la salida? Relaciónalo con el paso 1 del lab 01.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — El árbol y la selección](../lab-01-arbol-seleccion/README.md) | [Lab 03 — Contenido, atributos y clases](../lab-03-contenido-clases/README.md) → |

[↑ Semana 17](../../README.md)
