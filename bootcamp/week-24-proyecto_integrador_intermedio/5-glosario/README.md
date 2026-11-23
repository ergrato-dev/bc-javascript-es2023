# 📖 Glosario - Semana 24: Proyecto Integrador - Intermedio

Términos clave de esta semana ordenados alfabéticamente. Son repaso: cada uno enlaza la semana donde se explicó.

---

## A

### AbortController
Objeto que cancela una o varias operaciones: su `signal` se pasa a `fetch` y `abort()` las rechaza con un `AbortError`. En el proyecto, `createLatest` cancela con él la búsqueda anterior ([semana 15](../../week-15-fetch_api/README.md)).

### AbortSignal.any / AbortSignal.timeout
`AbortSignal.timeout(ms)` es un signal que se cancela solo a los `ms` milisegundos, con un `TimeoutError`. `AbortSignal.any([a, b])` se cancela cuando se cancela cualquiera de los que recibe. `requestJson` los combina.

### Actualización pesimista
Cambiar la pantalla solo cuando el servidor confirma el cambio, no antes. Si falla, no hay nada que deshacer ([semana 16](../../week-16-apis_rest_crud/README.md)).

### aria-busy / aria-invalid
`aria-busy="true"` avisa de que una zona se está actualizando; `aria-invalid="true"` marca un campo con error. Los dos los leen los lectores de pantalla.

## C

### Condición de carrera
Error que depende del orden en que terminan varias operaciones: una respuesta vieja que llega después de una nueva y la tapa. Se evita ignorando o cancelando la vieja ([semana 16](../../week-16-apis_rest_crud/1-teoria/04-estados-carga.md#4-condiciones-de-carrera)).

### Copia local
Datos de la red guardados en `localStorage` para enseñarlos al instante al volver, o sin conexión. Lleva `version` y `savedAt` para descartarla si es de otro código o demasiado vieja ([semana 19](../../week-19-web_storage_apis/README.md)).

## D

### Delegación de eventos
Escuchar en un contenedor los eventos de todos sus hijos, gracias a la propagación, y averiguar con `closest` cuál fue. Sigue funcionando cuando los hijos se repintan ([semana 18](../../week-18-event_handling_avanzado/README.md)).

### dispatch
En `main.js`, la función que aplica un evento al estado con `reduce` y vuelve a pintar. Es el único camino para cambiar lo que se ve.

## E

### Escapar HTML
Convertir `<`, `>`, `&` y las comillas en sus entidades (`&lt;`...) para que un texto se vea como texto y no se interprete como HTML ([semana 17](../../week-17-dom_manipulation_moderna/README.md)).

### Estado de carga
Valor de `status` que dice qué está pasando con los datos: `idle`, `loading`, `ready`, `empty` o `error`.

## F

### Función pura
Función que, con los mismos argumentos, devuelve siempre lo mismo y no cambia nada de fuera. `reduce`, `statusText`, `cardHtml` y `validate` lo son.

## H

### HttpError
Error propio del proyecto con el `status` de la respuesta y, en un 422, los errores de cada campo en `fields`.

## R

### Reductor
Función `(state, event) => nuevoEstado` que no modifica el estado que recibe. En el proyecto, `reduce` ([semana 16](../../week-16-apis_rest_crud/README.md)).

### render
En `main.js`, la función que lee el estado y pinta toda la página a partir de él.

### role="status"
Atributo de una zona cuyo texto lee el lector de pantalla cada vez que cambia, sin mover el foco.

## T

### TimeoutError
Nombre del error con que se rechaza una operación cuyo signal de `AbortSignal.timeout` se ha cumplido.

## V

### Validación doble
Comprobar los datos en la página (para avisar enseguida) y otra vez en el servidor (que nunca se fía de lo que le llega), con las mismas reglas y los mismos mensajes ([semana 20](../../week-20-formularios_validacion/README.md)).

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | — |

[↑ Semana 24](../README.md)
