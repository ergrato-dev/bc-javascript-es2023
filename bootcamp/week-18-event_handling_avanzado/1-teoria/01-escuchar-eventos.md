# 🎧 Escuchar eventos

## 🎯 Objetivos

- Explicar qué es un evento y cuándo se ejecuta un listener.
- Añadir listeners con `addEventListener` y leer el objeto evento: `type`, `target`, `currentTarget` e `isTrusted`.
- Leer el teclado con `key`, `code` y los modificadores.
- Quitar listeners con `removeEventListener`, `once` y un `AbortController`.
- Saber qué valen `this` y `currentTarget` dentro de un listener, y qué queda del evento cuando termina.

En la semana 17 cambiaste la página desde JavaScript, pero solo cuando se cargaba. Esta semana la página responde a lo que hace quien la usa: pulsar un botón, escribir, mover el foco. Todo eso le llega al código como **eventos**.

---

## 📋 Contenido

### 1. Qué es un evento

Un **evento** es un aviso del navegador de que algo ha pasado: un clic, una tecla, un campo que cambia, una página que termina de cargar. Tu código no pregunta cada poco si alguien ha pulsado el botón. Le da al navegador una función, el **listener**, y el navegador la llama cuando ocurre el evento.

Es la misma idea de los *callbacks* de la [semana 13](../../week-13-programacion_asincronica_callbacks_promises/1-teoria/02-callbacks-problemas.md). El listener no se ejecuta al añadirlo, sino cada vez que ocurre el evento, cero o muchas veces.

### 2. `addEventListener`

```js
const button = document.querySelector('#book-session');

button.addEventListener('click', (event) => {
  console.log('Reserva para la sesión de las 18:00');
});
```

`addEventListener(tipo, listener, opciones)` recibe:

- **El tipo** de evento, como texto y sin `on`: `'click'`, no `'onclick'`.
- **El listener**, la función que se llamará.
- **Las opciones** (opcional), un objeto que verás en la sección 6.

Un elemento puede tener varios listeners del mismo tipo, y se llaman en el orden en que se añadieron. Si añades **la misma función** dos veces al mismo tipo, el navegador no la duplica.

**Qué:** el listener guarda lo que hay que hacer cuando ocurra el evento. **Para qué:** que el código responda a la persona, no al revés. **Impacto:** el listener se ejecuta más tarde, quizá muchas veces o nunca. Lo que necesite tiene que estar disponible entonces, no solo al añadirlo.

### 3. El objeto evento

El navegador llama al listener con un argumento: un objeto con los datos de lo que ha pasado. Por costumbre se llama `event` (o `e`).

| Propiedad | Qué es |
|---|---|
| `type` | El tipo: `'click'`, `'keydown'`... |
| `target` | El elemento donde ocurrió el evento |
| `currentTarget` | El elemento cuyo listener se está ejecutando (lo verás en la [teoría 02](02-propagacion.md)) |
| `isTrusted` | `true` si lo provocó una persona; `false` si lo lanzó el código |
| `timeStamp` | Milisegundos desde que se cargó la página hasta el evento |

Cada familia de eventos añade sus propiedades: los del ratón llevan las coordenadas (`clientX`, `clientY`), y los del teclado, la tecla. Estos son los tipos que más vas a usar:

| Evento | Cuándo ocurre |
|---|---|
| `click` | Clic con el botón principal. En un `<button>`, también con `Enter` o la barra espaciadora |
| `input` | Cada vez que cambia el valor de un campo, letra a letra |
| `change` | Al confirmar un cambio: marcar una casilla, elegir en un `<select>`, salir de un campo de texto |
| `submit` | Al enviar un formulario (la [semana 20](../../week-20-formularios_validacion/README.md) lo ve a fondo) |
| `keydown` y `keyup` | Al pulsar y al soltar una tecla |
| `focus` y `blur` | Cuando un elemento recibe y pierde el foco |
| `pointerdown`, `pointermove` y `pointerup` | Ratón, dedo o lápiz: pulsar, mover y soltar |
| `DOMContentLoaded` | El navegador terminó de leer el HTML (con `defer` o módulos no lo necesitas) |

### 4. El teclado

`keydown` llega al elemento que tiene el foco o, si no lo tiene ninguno, al `body`. Desde ahí sube hasta `document`, como verás en la teoría 02. Para atajos de toda la página, se escucha en `document`.

```js
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeDialog();
});
```

- `key` es lo que escribe la tecla: `'r'`, `'R'` con mayúsculas, `'ñ'`, o su nombre si no escribe nada (`'Enter'`, `'Escape'`, `'ArrowDown'`). Depende de la distribución del teclado. Es lo que usas casi siempre.
- `code` es la tecla física: `'KeyR'` con o sin mayúsculas. Sirve para los juegos, donde importa la posición de la tecla y no la letra.
- `ctrlKey`, `shiftKey`, `altKey` y `metaKey` (la tecla `Cmd` en macOS) dicen qué modificadores estaban pulsados.
- `repeat` es `true` en las repeticiones de una tecla mantenida.

En código antiguo verás `keyCode` y `which`: están obsoletos, usa `key`.

Un atajo de una letra tiene dos trampas. Si el foco está en un campo de texto, la persona está escribiendo, no usando un atajo. Y con un modificador la combinación es del navegador: `Ctrl+R` recarga la página. Un listener de atajos tiene que comprobar las dos cosas antes de actuar, como hace `shortcutFor` en el [proyecto](../3-proyecto/README.md).

### 5. `onclick`: la forma antigua

Antes de `addEventListener` se usaban propiedades (`button.onclick = ...`) o atributos en el HTML (`<button onclick="reserve()">`). Siguen funcionando, pero tienen dos problemas:

- Solo guardan **un** listener: asignar otro borra el anterior, aunque lo haya puesto otra parte del código.
- El atributo del HTML ejecuta código escrito como texto. Es la puerta del XSS de la [semana 17](../../week-17-dom_manipulation_moderna/1-teoria/03-contenido-clases.md), y la política de seguridad de muchas páginas lo prohíbe.

En este curso se usa siempre `addEventListener`.

### 6. Quitar listeners

Un listener que ya no hace falta sigue ocupando memoria y ejecutándose: si un panel se cierra y su listener de `keydown` en `document` sigue ahí, cada tecla llama a código que ya no tiene sentido. Hay tres formas de quitarlo.

**`removeEventListener`** necesita el mismo tipo y **la misma función**. Una flecha escrita dentro de la llamada es una función nueva cada vez y nunca coincide con la que se añadió, así que la función se guarda antes en una constante:

```js
const onKey = (event) => { /* ... */ };
document.addEventListener('keydown', onKey);
// ...
document.removeEventListener('keydown', onKey);
```

**`{ once: true }`** quita el listener solo, justo antes de llamarlo la primera vez.

**`{ signal }`** recibe la señal de un `AbortController`, el mismo objeto que en la [semana 14](../../week-14-async_await/1-teoria/04-advanced-patterns.md) cancelaba peticiones. `controller.abort()` quita de golpe todos los listeners que recibieron esa señal:

```js
const controller = new AbortController();
const { signal } = controller;

document.addEventListener('keydown', onKey, { signal });
window.addEventListener('resize', onResize, { signal });
list.addEventListener('click', onListClick, { signal });

// Al cerrar el panel:
controller.abort();
```

Es la forma más cómoda cuando un componente añade varios listeners: no hay que guardar cada función, solo el controlador. Un controlador abortado no se puede reutilizar; para volver a escuchar, crea otro.

### 7. `this`, `currentTarget` y el evento después

Dentro de un listener escrito con `function`, `this` es el elemento que escucha. Una función flecha no tiene `this` propio: usa el del sitio donde se escribió. `event.currentTarget` funciona igual con los dos tipos de función, y es lo que se usa en este curso:

```js
button.addEventListener('click', (event) => {
  event.currentTarget.classList.add('is-booked');
});
```

`currentTarget` solo vale algo mientras se ejecutan los listeners. Cuando terminan, el navegador lo pone a `null`. Si el listener espera algo (un `await`, un `setTimeout`), guarda antes en una constante lo que vaya a necesitar:

```js
button.addEventListener('click', async (event) => {
  const button = event.currentTarget; // después del await ya sería null
  await saveBooking();
  button.disabled = true;
});
```

### 8. Eventos lanzados por el código

`elemento.click()` lanza un clic como si alguien hubiera pulsado: llama a los listeners en ese mismo momento y, cuando terminan, vuelve. Los labs lo usan para que la salida sea siempre la misma. La diferencia con un clic de verdad es `event.isTrusted`, que vale `false`.

El navegador no deja que el código haga todo lo que hace una persona. Por ejemplo, un `click()` sobre un campo de archivo no siempre abre el selector, y un evento de teclado creado por el código no escribe letras en un campo. En la [teoría 04](04-acciones-eventos-propios.md) verás cómo crear eventos de cualquier tipo.

---

## 🧪 Pruébalo

El [lab 01](../2-practicas/lab-01-escuchar-eventos/README.md) añade listeners y mira su orden, intenta quitar uno con otra función, usa `once` y `AbortController`, compara `this` en los dos tipos de función y lee las teclas con `keydown`.

## ✅ Checklist de aprendizaje

- [ ] Sé por qué un listener no se ejecuta al añadirlo y cuántas veces puede ejecutarse.
- [ ] Leo en el objeto evento el tipo, el destino y si lo provocó una persona.
- [ ] Distingo `key` de `code` y compruebo los modificadores antes de un atajo.
- [ ] Sé por qué `removeEventListener` con una flecha nueva no quita nada.
- [ ] Quito varios listeners de una vez con un `AbortController`.
- [ ] Uso `event.currentTarget` y lo guardo antes de un `await`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Semana 18 - Event Handling Avanzado](../README.md) | [Teoría — 🌊 Propagación](02-propagacion.md) → |

[↑ Semana 18](../README.md)
