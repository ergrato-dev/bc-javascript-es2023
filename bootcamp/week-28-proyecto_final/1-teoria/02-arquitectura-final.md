# 🏗️ Arquitectura de la aplicación final

## 🎯 Objetivos

- Saber qué hace cada archivo del proyecto final y qué patrón usa.
- Seguir el camino de una acción: del clic al almacén, a la vista y de vuelta a la pantalla.
- Saber qué se prueba con tests unitarios, qué con uno de integración y qué a mano en el navegador.

En la [semana 24](../../week-24-proyecto_integrador_intermedio/1-teoria/02-arquitectura.md) la lógica cabía en un archivo y `main.js` guardaba el estado en una variable suelta. El proyecto final reparte esa lógica en módulos con una responsabilidad cada uno (la S de SOLID) y pone el estado dentro de un almacén que avisa cuando cambia.

---

## 📋 Contenido

### 1. Un módulo por responsabilidad

![Los módulos del proyecto: main.js conecta la página y crea el almacén y la API; view.js da los textos y el HTML; data.js describe el dominio; store.js guarda el estado y avisa; logic.js tiene las funciones puras; api.js habla con server.js; los tests prueban store, logic y api, y pnpm check ejecuta ESLint, Prettier y Vitest con cobertura](../0-assets/01-arquitectura-final.svg)

| Archivo | Qué hace | Patrón | Quién lo escribe | Cómo se prueba |
|---|---|---|---|---|
| `src/data.js` | Describe el dominio: `APP`, `FIELDS` y `SEED` | — | Tú (paso 3) | Las comprobaciones |
| `src/logic.js` | Valida, busca, ordena, pagina, resume y calcula el estado nuevo. Sin DOM ni red | Strategy (`SORTERS` y las acciones de `reduce`) | Tú (pasos 4 a 8) | Tests unitarios |
| `src/store.js` | Guarda el estado, lo cambia con `reduce` y avisa a los oyentes | Observer, Factory | Tú (paso 9) | Tests unitarios |
| `src/api.js` | Habla con la API: URL, JSON y errores HTTP en un solo sitio | Factory con dependencias inyectadas | Tú (paso 10) | Tests con `fetch` falso y uno contra `server.js` |
| `src/view.js` | Los textos y el HTML de la página, sin tocar el DOM | Strategy (`STATUS_TEXTS`) | Ya escrito | — |
| `src/main.js` | Conecta lo anterior con la página: crea el almacén y la API, escucha eventos y pinta | Module | Ya escrito | En el navegador (paso 11) |
| `server.js` | La API REST y los archivos de la página | — | Ya escrito | — |

- **Qué:** los tres archivos que escribes no usan `document`, y el único que usa la red recibe `fetch` como parámetro.
- **Para qué:** así cada función se prueba con Node en milisegundos, sin navegador ni servidor, y el `fetch` falso puede simular un 422 o una respuesta que no es JSON.
- **Impacto:** `main.js` queda como una lista de conexiones. Si algo falla en la página, casi siempre el error está en una función que ya tiene su test.

`view.js` y `main.js` son tuyos para leer, no para cambiar: las comprobaciones usan los del starter. Leerlos te dice qué espera la página de tus funciones.

### 2. El camino de una acción

Todo cambio en la pantalla sigue el mismo camino, en una sola dirección:

1. **Evento.** La persona escribe en el buscador, pulsa «Año» para ordenar o envía el formulario. `main.js` lo escucha.
2. **Acción.** `main.js` llama a `store.dispatch({ type: 'sort', by: 'year' })`. Si hace falta la red, antes pide los datos a la API (`api.list()`, `api.create(data)`) y despacha el resultado: `loaded`, `saved` o `failed`.
3. **Estado nuevo.** El almacén llama a `reduce(estado, acción)`. Si devuelve otro objeto, lo guarda y avisa a los oyentes. Si devuelve el mismo, no avisa: no ha cambiado nada.
4. **Vista.** El oyente es `render`. Llama a `selectPage(state, ...)`, que busca, ordena y pagina las fichas, y pinta el resultado con los textos de `view.js`.

```js
// main.js, resumido
const store = createStore({ reducer: reduce, initial: INITIAL_STATE });
const api = createApi({ baseUrl: '', fetchFn: (...args) => fetch(...args) });

store.subscribe(render); // Observer: cada cambio de estado repinta

const load = async () => {
  store.dispatch({ type: 'loading' });
  try {
    store.dispatch({ type: 'loaded', items: await api.list() });
  } catch (error) {
    store.dispatch({ type: 'failed', message: messageFor(error) });
  }
};
```

El estado guarda lo que no se puede calcular: las fichas, lo que se busca, el orden y la página. Lo que se ve se calcula cada vez con `selectPage`. Es lo que viste en el [lab 01](../2-practicas/lab-01-almacen-y-vista/README.md): si guardaras también la página filtrada, cada acción tendría que acordarse de actualizarla.

`main.js` pasa a `createApi` una función que llama a `fetch`, y no `fetch` directamente. Hay navegadores que dan un error si `fetch` se llama como método de otro objeto en lugar de suelto. La función intermedia evita ese error.

### 3. Por qué la API devuelve todas las fichas

En la semana 24, el servidor buscaba y paginaba (`?search=&page=`). Aquí `GET /api/items` devuelve todas las fichas, y buscar, ordenar y paginar lo hace `logic.js` en el navegador.

- **Qué:** una petición al arrancar y después todo en memoria.
- **Para qué:** ordenar por cualquier campo y cambiar de página es instantáneo, y esas funciones son puras: se prueban sin red.
- **Impacto:** vale para catálogos de cientos de fichas, no de millones. Con muchas fichas volverías a paginar en el servidor, y `selectPage` pasaría a construir la URL de la petición.

Elegir dónde se hace cada cosa es una decisión de diseño. En tu presentación, explica por qué tu proyecto la hace así ([03 - Planificar y presentar](03-planificar-y-presentar.md)).

### 4. Qué se prueba y cómo

| Qué | Con qué | Por qué así |
|---|---|---|
| Las funciones de `logic.js` | Tests unitarios con fichas pequeñas escritas en el test | Son puras: mismos datos, mismo resultado. Cada caso límite es una línea |
| `createStore` | Tests unitarios con un reductor de mentira | El almacén no sabe de fichas: un contador basta para probar los avisos |
| `createApi` | Tests con un `fetch` falso (`vi.fn`) | Puedes pedir cualquier respuesta, también las de error, sin servidor |
| Que `createApi` y `server.js` se entienden | Un test de integración con `startServer` | El `fetch` falso responde lo que tú decides; el servidor, lo que hace de verdad |
| La página | A mano, en el navegador | `main.js` solo conecta; si las piezas pasan sus tests, lo que queda es mirar que se ve bien |

Los tests no usan `SEED`. Usan fichas pequeñas escritas en el mismo test, para que se lea qué se prueba sin abrir otro archivo y para que cambiar el catálogo no rompa ningún test.

---

## ✅ Resumen

- `logic.js`, `store.js` y `api.js` son tuyos, no usan el DOM y se prueban con Node. `view.js`, `main.js` y `server.js` ya están escritos.
- Una acción sigue siempre el mismo camino: evento, `dispatch`, `reduce`, aviso y `render` con `selectPage`.
- El almacén avisa solo cuando el reductor devuelve otro objeto.
- La lógica se prueba con tests unitarios, la API con un `fetch` falso y con un test contra `server.js`, y la página a mano.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🔁 Repaso de las semanas 25 a 27](01-repaso-semanas-25-27.md) | [Teoría — 🗺️ Planificar y presentar](03-planificar-y-presentar.md) → |

[↑ Semana 28](../README.md)
