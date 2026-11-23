# Lab 03 — Contenido, atributos y clases

## Objetivo

Cambiar lo que muestra un elemento sin cambiar la estructura de la página: leer y escribir su texto, ver por qué `innerHTML` con datos del usuario es peligroso, distinguir un atributo de una propiedad y pintar estados con `classList`, `hidden`, `aria-pressed` y variables CSS.

**Tiempo:** 55 min · **Teoría:** [03 - Contenido, atributos y clases](../../1-teoria/03-contenido-clases.md)

## Cómo trabajar

[`starter/index.html`](starter/index.html) trae la ficha de un pulpo y un formulario. [`starter/main.js`](starter/main.js) tiene 7 pasos y ya selecciona al principio los elementos que usan.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados.

---

## Paso 1: leer el contenido

Tres propiedades devuelven el contenido de un elemento, y cada una da algo distinto:

- `textContent`: todo el texto de dentro, también el de elementos ocultos.
- `innerText`: el texto tal como se ve. Se salta lo que está oculto, como el `<span hidden>`. Para saberlo, el navegador tiene que calcular los estilos, así que es más lento.
- `innerHTML`: el HTML de dentro, como texto con etiquetas.

```text
--- Paso 1: Leer ---
textContent: "Tanque 3 (cuarentena)"
innerText: "Tanque 3"
innerHTML: "Tanque 3 <span hidden=\"\">(cuarentena)</span>"
```

## Paso 2: escribir texto o HTML

Asignar a `textContent` cambia todo el contenido por un único nodo de texto: los `<` y `>` se ven tal cual, porque no se interpretan. Asignar a `innerHTML` interpreta el texto como HTML y crea los elementos que describe: aquí, un `<b>`.

```text
--- Paso 2: Escribir ---
Con textContent → hijos: 0 · se ve: Come <b>cangrejos</b>
Con innerHTML → hijos: 1 · se ve: Come cangrejos
```

## Paso 3: un texto del usuario no es HTML

Si el texto viene de alguien (un formulario, una API, la URL), puede traer etiquetas con código. Con `innerHTML`, el navegador crea un `<img>` que no carga y ejecuta su atributo `onerror`. Este código solo cambia el título de la pestaña, que pasa a ser «¡Página atacada!», pero podría leer cualquier cosa de la página, como un token guardado en `localStorage` (teoría 03 de la [semana 16](../../../week-16-apis_rest_crud/1-teoria/03-autenticacion.md)). Es un ataque **XSS**.

Fíjate en el orden: la línea con `textContent` sustituye al `<img>` justo después, y el código se ejecuta igualmente, porque la imagen ya había empezado a cargar. La consola muestra además `Failed to load resource`, el error de la imagen que no existe.

Con `textContent`, el mismo texto se queda en texto: no se crea ningún elemento y no se ejecuta nada.

```text
--- Paso 3: Inyección de HTML ---
¿Hay <img>? true · onerror: document.title = '¡Página atacada!'
Con textContent → ¿hay <img>? false
Se ve: Pulpo<img src="no-existe" onerror="document.title = '¡Página atacada!'">
```

## Paso 4: atributos y propiedades

El atributo es lo que pone el HTML; la propiedad es el valor actual del elemento en JavaScript. Muchas veces van juntos, como `title`: cambias uno y cambia el otro. En los campos de formulario, no:

- `input.value` es lo que hay escrito ahora. El atributo `value` sigue siendo el valor inicial, que también da `defaultValue`.
- `checkbox.checked` es si está marcado ahora. El atributo `checked` solo dice cómo empezó.

Para saber qué ha escrito o marcado alguien, lee la propiedad. `getAttribute`, `setAttribute`, `hasAttribute` y `removeAttribute` trabajan con los atributos.

```text
--- Paso 4: Atributos y propiedades ---
value: Medusa luna · atributo value: Pulpo común
defaultValue: Pulpo común
checked: false · ¿atributo checked? true
Propiedad title: Ficha del pulpo
Tras removeAttribute: ""
```

## Paso 5: `classList`

`classList` cambia las clases de una en una, sin tocar las demás. Asignar `className` sustituye todas a la vez, así que se pierde la clase `card` si te olvidas de ella.

`toggle(clase)` la quita si está y la pone si no, y devuelve si ha quedado puesta. Con un segundo argumento, `toggle(clase, force)`, deja de alternar: la pone si `force` es `true` y la quita si es `false`. Así, llamarlo dos veces con el mismo dato da el mismo resultado. Es la forma de pintar una clase a partir del estado.

```text
--- Paso 5: classList ---
add: [card is-featured is-new]
remove: [card is-featured]
contains is-featured: true
toggle is-closed devuelve true [card is-featured is-closed]
toggle is-closed devuelve false [card is-featured]
toggle con force, dos veces: [card is-featured is-closed]
replace: [card is-featured is-open] · className: card is-featured is-open
```

## Paso 6: estados que también se oyen

Una clase solo cambia cómo se ve. Para que un lector de pantalla también sepa que el botón está activado, `aria-pressed` tiene que cambiar a la vez. `setFeatured` pinta las tres cosas (clase, atributo y texto) a partir de un único dato, así no pueden contradecirse.

- `hidden` es la propiedad del atributo `hidden`: con `false`, el `<span>` vuelve a verse y `innerText` lo incluye.
- `toggleAttribute` alterna un atributo sin valor, como `disabled`, y devuelve si ha quedado puesto.

```text
--- Paso 6: hidden y aria ---
aria-pressed: true · texto: Quitar destacado
aria-pressed: false · texto: Destacar
innerText con hidden = false: "Tanque 3 (cuarentena)"
toggleAttribute disabled: true · disabled: true
```

## Paso 7: estilos en línea y variables CSS

`elemento.style` solo lee y escribe el atributo `style` del elemento, no lo que dice la hoja de estilos: por eso `style.color` está vacío. El color que se ve de verdad lo da `getComputedStyle`.

Para cambiar el aspecto, mejor una clase que muchos `style.x`. Cuando el valor sale de un dato (un color, un porcentaje), cambia una variable CSS con `style.setProperty`: el CSS ya sabe dónde usarla. Aquí, `--accent` cambia el título de azul a verde, y `removeProperty` lo devuelve al valor de la hoja de estilos.

```text
--- Paso 7: style ---
Color calculado: rgb(88, 166, 255)
style.color en línea: ""
Tras cambiar --accent: rgb(63, 185, 80)
Atributo style: --accent: #3fb950;
Tras quitarla: rgb(88, 166, 255)

✅ Lab completado.
```

---

## Comprobación

1. En el paso 3, comenta la línea `extra.textContent = evil;` y recarga. ¿Qué ves en la ficha y en el título de la pestaña? ¿Cambiaría algo si `evil` llegara de una API en lugar de estar escrito en el código?
2. En el paso 4, escribe algo en el campo «Nombre» de la página y ejecuta en la consola `nameInput.value` y `nameInput.getAttribute('value')`. ¿Cuál de los dos usarías para enviar el formulario?
3. En el paso 5, cambia `const open = false` por `true`. Antes de recargar, escribe qué clases tendrá la ficha tras las dos llamadas a `toggle` con `force`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Crear, insertar y quitar nodos](../lab-02-crear-insertar/README.md) | [Lab 04 — Plantillas y render](../lab-04-plantillas-render/README.md) → |

[↑ Semana 17](../../README.md)
