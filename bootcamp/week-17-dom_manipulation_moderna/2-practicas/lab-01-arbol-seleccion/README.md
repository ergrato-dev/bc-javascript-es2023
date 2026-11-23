# Lab 01 — El árbol y la selección

## Objetivo

Ver la página como la ve JavaScript: un árbol de nodos. Vas a distinguir nodos de texto y elementos, buscar con `querySelector` y `querySelectorAll`, comprobar qué colecciones cambian solas, moverte por el árbol con `parentElement` y `closest`, y leer y escribir atributos `data-*` con `dataset`.

**Tiempo:** 50 min · **Teoría:** [01 - El árbol y la selección](../../1-teoria/01-arbol-seleccion.md)

## Cómo trabajar

El lab es una página: [`starter/index.html`](starter/index.html) trae el HTML de un acuario y carga [`starter/main.js`](starter/main.js), que tiene 6 pasos.

1. Abre `starter/index.html` en el navegador. Puedes hacer doble clic en el archivo o arrastrarlo a una pestaña. No hace falta servidor: `main.js` es un script normal, no un módulo.
2. Abre las DevTools con `F12` (o `Cmd+Option+I` en macOS) y ve a la pestaña **Console**.
3. En cada paso, descomenta el código del paso en `main.js` (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS), guarda y recarga la página con `F5`.

Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados. Firefox y Safari muestran el mismo texto.

`index.html` carga el script con `<script src="main.js" defer>`. **Qué:** `defer` retrasa la ejecución hasta que el navegador ha leído todo el HTML. **Para qué:** cuando `main.js` busca `.tank-list`, el elemento ya existe. **Impacto:** sin `defer`, un script en el `<head>` se ejecuta antes de que exista el `<body>` y todos los `querySelector` devuelven `null`.

---

## Paso 1: el árbol de nodos

El navegador convierte el HTML en un árbol. La raíz es `<html>` (`document.documentElement`) y cada etiqueta es un **elemento**. Pero también son nodos los saltos de línea y espacios entre etiquetas: la lista tiene 3 `<li>`, pero 7 nodos hijos, porque antes, entre y después de cada `<li>` hay un nodo de texto con espacios.

`childNodes` devuelve todos los nodos; `children`, solo los elementos. `nodeType` dice qué es cada uno: `1` para un elemento y `3` para un texto.

```text
--- Paso 1: El árbol ---
Raíz: HTML
Hijos de <body>: 1
childNodes: 7 · children: 3
Primeros nodos: #text, LI, #text
Tipos: 3 (texto) · 1 (elemento)
```

## Paso 2: `querySelector`, el primero que encaja

`querySelector(selector)` recibe un selector CSS, el mismo que escribirías en una hoja de estilos, y devuelve el **primer** elemento que encaja, en el orden del HTML. Si ninguno encaja, devuelve `null`, no un error.

Se puede llamar sobre cualquier elemento, no solo sobre `document`: entonces solo busca dentro de él. La sección `#tanks` no contiene el `<h1>`, así que la segunda búsqueda da `null`.

```text
--- Paso 2: querySelector ---
Primer .tank: 1
Abierto y de río: 3
Sin coincidencias: null
h2 dentro de la sección: Tanques
h1 dentro de la sección: null
```

## Paso 3: `querySelectorAll` y las colecciones vivas

`querySelectorAll` devuelve **todos** los elementos que encajan en una `NodeList`. Tiene `length` y `forEach`, pero no `map` ni `filter`: para usarlos, conviértela en un array con `Array.from` o con `[...lista]`.

La `NodeList` de `querySelectorAll` es **estática**: es una foto del momento en que se pidió. `getElementsByClassName` devuelve una `HTMLCollection` **viva**, que se actualiza sola cuando cambia el documento. Por eso, tras añadir un `<li class="tank">`, una sigue en 3 y la otra pasa a 4.

```text
--- Paso 3: querySelectorAll ---
Tipo: NodeList · longitud: 3
Ids: 1, 2, 3
Abiertos: 2
Tras añadir uno → NodeList: 3 · HTMLCollection: 4
```

## Paso 4: moverse por el árbol

Desde un elemento puedes ir a su padre (`parentElement`), a sus hermanos (`previousElementSibling`, `nextElementSibling`) y a sus hijos (`firstElementChild`, `children`). Todas estas propiedades tienen *Element* en el nombre y se saltan los nodos de texto del paso 1.

`closest(selector)` sube desde el elemento, empezando por él mismo, hasta encontrar un antepasado que encaje, o `null`. `matches(selector)` dice si el propio elemento encaja. Los dos son la base de la delegación de eventos de la [semana 18](../../../week-18-event_handling_avanzado/README.md).

```text
--- Paso 4: Recorrer ---
Padre: tank-list
Anterior: 1 · siguiente: 3
Su primer hijo: cerrado
closest(".tank"): 2
closest("section"): tanks
closest("form"): null
matches(".tank.is-closed"): true
```

## Paso 5: `data-*` y `dataset`

Los atributos que empiezan por `data-` guardan datos propios en el HTML, como el id de cada tanque. `dataset` los lee y los escribe sin el prefijo y con los guiones pasados a *camelCase*: `data-last-check` es `dataset.lastCheck`.

Todo lo que guardas en `dataset` se convierte en texto, porque es un atributo HTML: `120` vuelve como `'120'`. `delete` quita el atributo.

```text
--- Paso 5: dataset ---
dataset: {"id":"1","habitat":"arrecife"}
Atributo creado: 2026-11-02
Tipo de visits: string
¿Sigue data-visits? false
Zona de la sección: norte
```

## Paso 6: seleccionar sin sorpresas

Si un selector no encuentra nada, `querySelector` devuelve `null` y el error salta más tarde, en otra línea, como `Cannot read properties of null`. `must` comprueba el resultado en el momento y lanza un error que dice qué selector ha fallado.

Dentro de un formulario, `form.elements` da cada campo por su `name`, sin selector. `getElementById` busca por `id` sin `#`.

```text
--- Paso 6: Selección robusta ---
Campo por nombre: coral
getElementById: true
Error: No hay ningún elemento #results

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, borra los saltos de línea y espacios entre los `<li>` del HTML para dejarlos en una sola línea. Antes de recargar, escribe qué darán ahora `childNodes.length` y `children.length`.
2. En el paso 3, cambia `getElementsByClassName('tank')` por `querySelectorAll('.tank')`. ¿Qué número sale ahora tras añadir el `<li>` y por qué?
3. En el paso 4, ¿qué devuelve `ocean.closest('.tank')`? ¿Y `ocean.closest('.badge')`? Piensa en qué dirección busca `closest` antes de probarlo.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Crear, insertar y quitar nodos](../lab-02-crear-insertar/README.md) → |

[↑ Semana 17](../../README.md)
