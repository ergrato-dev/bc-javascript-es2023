# 🔁 Repaso de las semanas 13 a 23

## 🎯 Objetivos

- Recordar, sin conceptos nuevos, lo que el proyecto necesita de cada semana de la etapa Intermedio.
- Saber en qué semana volver a mirar cada idea si no te resulta familiar.

Esta semana cierras la etapa Intermedio juntando en una sola aplicación lo de las semanas 13 a 23: una página que habla con una API, guarda una copia local, valida un formulario y no se atasca al escribir. Cada bloque de este repaso recuerda una idea con un ejemplo corto y enlaza la semana donde se explica a fondo. Si un ejemplo no te resulta familiar, vuelve a esa semana antes de empezar el proyecto.

---

## 📋 Contenido

### Qué usa el proyecto de cada semana

| Semana | Concepto | Dónde aparece en el proyecto |
|---|---|---|
| [13](../../week-13-programacion_asincronica_callbacks_promises/README.md) | Promesas, `Promise.allSettled` | Todo lo que espera a la red; [lab 01](../2-practicas/lab-01-peticiones-cruzadas/README.md) |
| [14](../../week-14-async_await/README.md) | `async`/`await`, `try...catch...finally` | `requestJson`, `load` y el envío del formulario en `main.js` |
| [15](../../week-15-fetch_api/README.md) | `fetch`, cabeceras, JSON, `AbortSignal` | `requestJson` |
| [16](../../week-16-apis_rest_crud/README.md) | REST, paginación, `HttpError`, reductor de estado, cancelar búsquedas viejas | `server.js`, `reduce`, `createLatest` |
| [17](../../week-17-dom_manipulation_moderna/README.md) | Pintar desde datos, escapar HTML | `cardHtml`, `render` en `main.js` |
| [18](../../week-18-event_handling_avanzado/README.md) | Delegación, `closest`, `preventDefault` | Los botones Editar y Borrar de la lista |
| [19](../../week-19-web_storage_apis/README.md) | `localStorage`, JSON, versiones, caducidad, errores de cuota | `createCache` |
| [20](../../week-20-formularios_validacion/README.md) | `FormData`, `novalidate`, mensajes propios, envío sin duplicados | `validate`, el formulario de `main.js` |
| [21](../../week-21-fechas_tiempos_date_api/README.md) | `Intl.NumberFormat`, `Intl.RelativeTimeFormat` | `cardHtml` (números) y `statusText` («hace 5 minutos») |
| [23](../../week-23-performance_optimizacion/README.md) | Debounce | La búsqueda mientras escribes, en `main.js` |

La [semana 22](../../week-22-trabajo_archivos/README.md) (archivos) no aparece en el código del proyecto; el [lab 02](../2-practicas/lab-02-copia-local/README.md) usa `Blob` para medir cuánto ocupa la copia local.

---

## Peticiones (semanas 13 a 16)

Una función `async` devuelve una promesa, y `await` espera a que se cumpla. Un error de red o un `throw` dentro se recogen con `try...catch`:

```javascript
const load = async () => {
  try {
    const response = await fetch('/api/items?page=1');
    if (!response.ok) throw new Error(`Error ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log('No se pudo cargar:', error.message);
  }
};
```

`fetch` solo rechaza cuando no hay respuesta (sin red, petición cancelada); un 404 o un 500 **cumple** la promesa con `response.ok` en `false`. Por eso hay que mirar `ok` y convertir el error en algo útil: en el proyecto, un `HttpError` con su `status` y, en un 422, los errores de cada campo ([semana 15](../../week-15-fetch_api/1-teoria/04-error-handling.md), [semana 16](../../week-16-apis_rest_crud/README.md)).

Una petición se cancela con el `signal` de un `AbortController`, y un tiempo máximo es un signal que se cancela solo:

```javascript
const controller = new AbortController();
const signal = AbortSignal.any([controller.signal, AbortSignal.timeout(5000)]);
fetch('/api/items', { signal });
controller.abort(); // rechaza con un error de nombre AbortError; a los 5 s sería TimeoutError
```

Cancelar la búsqueda anterior evita que una respuesta vieja tape a la nueva ([condiciones de carrera](../../week-16-apis_rest_crud/1-teoria/04-estados-carga.md#4-condiciones-de-carrera)). El [lab 01](../2-practicas/lab-01-peticiones-cruzadas/README.md) lo enseña paso a paso.

La API del proyecto sigue las reglas REST de la [semana 16](../../week-16-apis_rest_crud/1-teoria/01-diseno-rest.md): `GET /api/items?search=&page=&perPage=` lista por páginas, `POST` crea (201), `PUT /api/items/:id` reemplaza (200), `DELETE` borra (204, sin cuerpo), y los errores dicen qué pasó con su código: 404, 409 (nombre repetido), 422 (datos inválidos).

## Estado (semana 16)

Toda la página sale de **un** objeto de estado, y solo una función pura lo cambia:

```javascript
const reduce = (state, event) => {
  switch (event.type) {
    case 'load': return { ...state, status: 'loading' };
    case 'loaded': return { ...state, status: 'ready', items: event.items };
    default: return state;
  }
};
let state = { status: 'idle', items: [] };
state = reduce(state, { type: 'load' }); // { status: 'loading', items: [] }
```

`reduce` no cambia el estado que recibe: devuelve uno nuevo con *spread*. Se prueba con Node sin página, y `main.js` solo tiene que hacer `state = reduce(state, event)` y volver a pintar ([semana 16](../../week-16-apis_rest_crud/1-teoria/04-estados-carga.md#2-el-estado-siguiente-con-una-función-pura)). La [teoría 03](03-estados-carga.md) explica qué estados usa el proyecto.

## La página (semanas 17, 18 y 20)

Pintar desde datos con `innerHTML` es cómodo, pero todo texto que venga de fuera tiene que pasar por `escapeHtml`, o un nombre como `<img onerror=...>` ejecuta código ([semana 17](../../week-17-dom_manipulation_moderna/1-teoria/03-contenido-clases.md)):

```javascript
list.innerHTML = items.map((item) => `<h3>${escapeHtml(item.name)}</h3>`).join('');
```

Como `innerHTML` crea botones nuevos en cada repintado, los clics se escuchan **en la lista**, una sola vez, y `closest` dice de qué botón y de qué ficha vienen ([semana 18](../../week-18-event_handling_avanzado/1-teoria/03-delegacion.md)):

```javascript
list.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const id = Number(button.closest('.card').dataset.id);
  console.log(button.dataset.action, id); // 'delete' 3
});
```

Un formulario con `novalidate` deja la validación al código: `new FormData(form)` da los valores como texto, `Object.fromEntries` los convierte en objeto, y la validación devuelve los datos limpios y un mensaje por campo con error ([semana 20](../../week-20-formularios_validacion/1-teoria/04-validacion-propia-envio.md)). El botón se desactiva mientras se envía. El [lab 03](../2-practicas/lab-03-estados-pagina/README.md) repasa todo esto en una página.

## Guardar y formatear (semanas 19 a 22)

`localStorage` guarda texto: todo pasa por JSON, y leer puede fallar (no hay copia, el JSON está roto, el almacén está bloqueado). Guardar también: la cuota puede estar llena ([semana 19](../../week-19-web_storage_apis/1-teoria/04-cuotas-y-errores.md)):

```javascript
const save = (data) => {
  try {
    localStorage.setItem('copia', JSON.stringify({ version: 1, savedAt: Date.now(), data }));
  } catch {
    // Sin copia, la página sigue funcionando con la red.
  }
};
```

La `version` permite descartar una copia guardada por una versión anterior del código, y `savedAt` (milisegundos, que JSON guarda sin problemas) permite descartar una copia demasiado vieja y decir su edad con `Intl` ([semana 21](../../week-21-fechas_tiempos_date_api/1-teoria/02-formatear-intl.md)):

```javascript
new Intl.RelativeTimeFormat('es', { numeric: 'always' }).format(-5, 'minute'); // 'hace 5 minutos'
new Intl.NumberFormat('es-ES').format(-1.46);                                 // '-1,46'
```

El [lab 02](../2-practicas/lab-02-copia-local/README.md) recorre los fallos de una copia local uno a uno.

## No hacer trabajo de más (semana 23)

Buscar en cada tecla lanza una petición por letra. Con un debounce, la búsqueda espera a que dejes de escribir ([semana 23](../../week-23-performance_optimizacion/1-teoria/02-debounce-throttle.md)). `main.js` lo hace con un temporizador:

```javascript
let timer;
input.addEventListener('input', () => {
  clearTimeout(timer);
  timer = setTimeout(() => load({ query: input.value.trim() }), 300);
});
```

Y la API pagina: la página pide 6 fichas cada vez, no el catálogo entero.

---

## ✅ Checklist de aprendizaje

- [ ] Sé en qué semana se explica cada concepto de la tabla.
- [ ] Sé por qué `fetch` no rechaza con un 404 y qué hace el proyecto con él.
- [ ] Distingo un `AbortError` de un `TimeoutError` y sé cuándo aparece cada uno.
- [ ] Sé por qué todo texto ajeno pasa por `escapeHtml` y por qué los clics se escuchan en la lista.
- [ ] Sé qué puede fallar al leer y al guardar en `localStorage`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Semana 24 - Proyecto Integrador - Intermedio](../README.md) | [Teoría — 🏗️ Arquitectura de una aplicación asíncrona](02-arquitectura.md) → |

[↑ Semana 24](../README.md)
