# 📖 Glosario - Semana 18: Event Handling Avanzado

Términos clave de esta semana ordenados alfabéticamente.

---

## A

### AbortController
Objeto con una señal (`signal`) y un método `abort()`. Si pasas la señal a `addEventListener` en la opción `signal`, `abort()` quita de golpe todos los listeners que la recibieron.

### Acción por defecto
Lo que hace el navegador después de los listeners de un evento: navegar con un enlace, marcar una casilla, enviar un formulario, escribir una letra. Se cancela con `preventDefault`.

### addEventListener
Método de todo `EventTarget` que guarda un listener para un tipo de evento: `elemento.addEventListener('click', listener, opciones)`.

## B

### Bubbles
Propiedad de un evento que dice si tiene fase de burbuja. `focus`, `blur`, `mouseenter` y `mouseleave` no la tienen; un evento creado con `new Event` tampoco, salvo que se pida con `{ bubbles: true }`.

### Burbuja (fase de)
Tercera fase de un evento: sube desde el padre del destino hasta `document` y `window`. Es la fase en la que escucha un listener sin opciones.

### Bus de eventos
Un `EventTarget` al que varias partes del código se suscriben para enterarse de cambios. Quien lanza un evento no sabe quién lo escucha.

## C

### Cancelable
Propiedad de un evento que dice si `preventDefault` tiene efecto. `click`, `submit` y `keydown` lo son; `input`, `change` y `focus`, no.

### Captura (fase de)
Primera fase de un evento: baja desde `window` y `document` hasta el padre del destino. Un listener escucha en ella con `{ capture: true }`.

### currentTarget
Propiedad del evento con el elemento cuyo listener se está ejecutando. Cambia en cada paso del camino y vale `null` cuando terminan los listeners.

### CustomEvent
Evento con un tipo inventado por ti y datos propios en `detail`: `new CustomEvent('notice:pin', { detail: { id: 3 } })`.

## D

### defaultPrevented
Propiedad del evento que vale `true` si algún listener canceló su acción por defecto con `preventDefault`.

### Delegación
Atender los eventos de muchos elementos con un solo listener en su contenedor. El listener encuentra el elemento con `event.target.closest(...)` y comprueba con `contains` que es suyo.

### Destino
Elemento donde ocurre un evento: `event.target`. Es la segunda fase, entre la captura y la burbuja.

### detail
Propiedad de un `CustomEvent` con los datos que le pasó quien lo creó.

### dispatchEvent
Método que lanza un evento en un `EventTarget`. Llama a los listeners antes de volver y devuelve `false` si alguno canceló el evento.

## E

### Evento
Aviso de que algo ha pasado: un clic, una tecla, un campo que cambia. El navegador lo representa con un objeto que recibe cada listener.

### eventPhase
Propiedad del evento con la fase en curso: `1` captura, `2` destino, `3` burbuja.

### EventTarget
Cualquier objeto que tiene `addEventListener`, `removeEventListener` y `dispatchEvent`: los elementos, `document`, `window` o uno creado con `new EventTarget()`, que también existe en Node.

## F

### focusin y focusout
Versiones de `focus` y `blur` que sí suben, así que se pueden escuchar en un contenedor.

## I

### isTrusted
Propiedad del evento: `true` si lo provocó una persona y `false` si lo lanzó el código con `click()` o `dispatchEvent`.

## K

### key y code
Propiedades de los eventos de teclado. `key` es lo que escribe la tecla (`'r'`, `'R'`, `'Enter'`); `code`, la tecla física (`'KeyR'`).

## L

### Listener
Función que el navegador llama cada vez que ocurre un evento en el elemento donde se añadió.

## O

### once
Opción de `addEventListener` que quita el listener justo antes de llamarlo la primera vez.

## P

### passive
Opción de `addEventListener` con la que el listener promete no llamar a `preventDefault`. Así el navegador puede desplazar la página sin esperar a que termine.

### preventDefault
Método del evento que cancela su acción por defecto, si el evento es cancelable.

### Propagación
Recorrido de un evento por el árbol: captura, destino y burbuja.

## R

### removeEventListener
Método que quita un listener. Necesita el mismo tipo, la misma función y la misma opción `capture` que se usaron al añadirlo.

## S

### stopPropagation y stopImmediatePropagation
Métodos que paran un evento en el elemento actual. El segundo salta además los listeners del mismo elemento que faltaban. Ninguno cancela la acción por defecto.

## T

### target
Propiedad del evento con el elemento donde ocurrió. Es el mismo durante todo el camino.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | [💾 Semana 19: Web Storage APIs](../../week-19-web_storage_apis/README.md) → |

[↑ Semana 18](../README.md)
