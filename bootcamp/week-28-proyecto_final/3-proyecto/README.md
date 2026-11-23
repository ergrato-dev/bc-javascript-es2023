# Proyecto final — Catálogo completo

## Objetivo

El cierre del bootcamp: una aplicación web completa para el catálogo del dominio que te asigna el instructor, escrita y comprobada como en un equipo profesional. La página carga las fichas de una API REST, busca mientras escribes, ordena por cualquier campo, pagina, resume las cifras del catálogo y crea, corrige y borra fichas con un formulario validado.

Tú escribes la lógica en tres módulos sin DOM, y sus tests:

- `src/logic.js`: `validate`, `filterItems`, `SORTERS`, `sortItems`, `paginate`, `summarize`, `reduce` y `selectPage`. Son funciones puras.
- `src/store.js`: `createStore`, el almacén del estado, con oyentes (Observer).
- `src/api.js`: `createApi`, el cliente de la API, una fábrica que recibe `fetch`.
- `tests/`: 30 tests o más, que cubren el 90 % de los tres módulos.

La página (`main.js`, `view.js`, `index.html`) y el servidor (`server.js`) ya están escritos. Todo el código cumple los límites de clean code de la semana 27, y `pnpm check` lo comprueba de una vez.

**Tiempo:** 5 h: 30 min de plan, 4 h de desarrollo y 30 min para preparar y hacer la presentación.

Al terminar:

- `pnpm check` termina sin errores: ESLint, Prettier y tus tests con cobertura.
- `node server.js` sirve la aplicación con tu catálogo en `http://localhost:3000`.
- `PROYECTO=... ./scripts/verificar-semana.sh 28` pasa las 21 comprobaciones.

## Qué hay en el starter

```text
starter/
├── package.json         # @vitest/coverage-v8, eslint, prettier y vitest exactas; scripts start, test, coverage, lint, format y check
├── pnpm-lock.yaml
├── eslint.config.js     # las reglas de la semana 27: no se cambia
├── vitest.config.js     # cobertura de logic, store y api, con un mínimo del 90 %: no se cambia
├── .prettierrc.json     # no se cambia
├── .prettierignore      # no se cambia
├── server.js            # la API REST y los archivos de la página: no se cambia
├── index.html           # la página
├── styles.css           # los estilos (puedes adaptarlos a tu dominio)
├── src/
│   ├── data.js          # APP, FIELDS y SEED del ejemplo Planetario: lo cambias por tu dominio
│   ├── logic.js         # funciones puras, con TODO: tu trabajo
│   ├── store.js         # createStore, con TODO: tu trabajo
│   ├── api.js           # HttpError y createApi, con TODO: tu trabajo
│   ├── view.js          # textos y HTML de la página: no se cambia
│   └── main.js          # conecta todo con la página: no se cambia
└── tests/
    ├── logic.test.js    # un test escrito y 24 it.todo: tu trabajo
    ├── store.test.js    # un test escrito y 5 it.todo: tu trabajo
    └── api.test.js      # un test escrito y 7 it.todo, 2 de ellos de integración: tu trabajo
```

Cada función tiene encima su especificación: qué recibe, qué devuelve y un ejemplo. La especificación manda: si algo no está claro, léela otra vez antes de suponer.

---

## Paso 1: Preparar el proyecto

Copia el starter a una carpeta tuya fuera del repositorio, instala y ejecuta los tests:

```bash
cp -r bootcamp/week-28-proyecto_final/3-proyecto/starter ~/js-proyecto-final
cd ~/js-proyecto-final
pnpm install
pnpm test
```

```text
 FAIL  tests/api.test.js > createApi con un fetch falso > list pide GET /api/items y devuelve data
TypeError: Cannot read properties of undefined (reading 'list')
 FAIL  tests/logic.test.js > validate > convierte los valores y no da errores cuando todo es correcto
TypeError: Cannot destructure property 'data' of 'validate(...)' as it is undefined.
 FAIL  tests/store.test.js > createStore > empieza con el estado inicial
TypeError: Cannot read properties of undefined (reading 'getState')

 Test Files  3 failed (3)
      Tests  3 failed | 36 todo (39)
```

Los tres tests escritos fallan porque sus funciones todavía no devuelven nada, y los 36 `it.todo` son los casos que faltan. Arranca también el servidor:

```bash
pnpm start
```

```text
🚀 Servidor en http://localhost:3000 (Ctrl+C para pararlo)
```

Abre `http://localhost:3000` con las DevTools abiertas: la página sale vacía y la consola muestra un error, porque `createStore` aún no devuelve un almacén. Para el servidor con `Ctrl+C`.

## Paso 2: Planificar

Antes de escribir código, dedica 30 minutos a lo que cuenta la [teoría 03](../1-teoria/03-planificar-y-presentar.md):

1. Lee este README entero y la lista de [requisitos verificables](#-requisitos-verificables).
2. Lee `src/main.js` y `src/view.js`: ahí ves cómo se usan tus funciones y qué datos reciben.
3. Escribe tu lista de tareas, una por paso, con un tiempo estimado para cada una.

## Paso 3: Tu dominio en data.js

`src/data.js` describe el catálogo con tres exportaciones, igual que en la [semana 24](../../week-24-proyecto_integrador_intermedio/3-proyecto/README.md):

- `APP`: el título, la presentación y cuántas fichas por página (`perPage`, de 3 a 20).
- `FIELDS`: de 3 a 8 campos con `name` (camelCase en inglés), `label`, `type` (`'text'` o `'number'`) y sus reglas (`required`, `minLength`, `min`, `max`). El primero es el nombre de la ficha: `text` y obligatorio. Al menos uno tiene que ser `number`, para ordenar por cifras y para el resumen.
- `SEED`: de 8 a 30 fichas reales de tu dominio que cumplen las reglas de `FIELDS`, sin repetir el primer campo.

Cambia los tres por los de tu dominio. Elige un campo `number` con valores variados: con todas las fichas en 0, ordenar y resumir no enseñan nada. Comprueba los datos con las dos primeras comprobaciones de datos de `verificar-semana.sh`.

## Paso 4: Validar

Empieza por `validate` en `src/logic.js`. Lee su especificación y el test que ya está escrito en `tests/logic.test.js`. Después, para cada `it.todo` del bloque `validate`:

1. Cámbialo por un `it` con su `expect`, con valores escritos en el test.
2. `pnpm test`: el test nuevo falla.
3. Escribe el código que lo hace pasar, y ejecuta `pnpm test` y `pnpm lint`.

Los tests usan el `FIELDS` pequeño que hay al principio de `logic.test.js`, no el de tu dominio: así no se rompen si cambias el catálogo. Fíjate en que un valor de `FormData` siempre es un texto: `'12.5'` se convierte en el número `12.5`.

ESLint pone a `validate` los límites de la semana 27: complejidad 4 y 15 líneas. Una función que valida tres tipos de error no cabe entera. Separa una función que da el error de un campo, y otra que convierte el valor.

## Paso 5: Buscar y ordenar

`filterItems` busca todas las palabras de `query` en los campos `text` de cada ficha, sin mirar tildes ni mayúsculas. Ya tienes `plain` escrita para comparar.

`SORTERS` es un objeto con una estrategia de comparar por cada `type` de campo, como `SHIPPING` en el [lab 02 de la semana 27](../../week-27-patrones_clean_code/2-practicas/lab-02-observer-strategy/README.md). `sortItems` elige la estrategia por el `type` del campo `by`. Lee bien tres detalles de la especificación:

- Los vacíos van al final **también** con `desc`. Si solo das la vuelta al resultado, quedan al principio.
- Las fichas que comparan igual mantienen su orden. `toSorted` lo garantiza.
- Nunca se cambia el array que llega. Tu test debería comprobarlo.

## Paso 6: Paginar

`paginate` devuelve una página y los datos para pintar el paginador. Prueba los bordes: la página 0, una página mayor que la última, un array vacío y un número de fichas que es múltiplo exacto de `perPage`.

## Paso 7: Resumir

`summarize` calcula, por cada campo `number`, cuántas fichas tienen valor, el mínimo, el máximo y la media con dos decimales. `100` para redondear es un número mágico para ESLint: dale un nombre.

`view.js` convierte el resumen en la línea que aparece bajo el título: `10 fichas · Magnitud: de -1,46 a 8,8 (media 3,76)`.

## Paso 8: El estado

`reduce` recibe el estado y una acción y devuelve el estado nuevo. Un `switch` con ocho casos no cabe en complejidad 4. Usa un objeto con una función por `type`, como `HANDLERS` en el [lab 01](../2-practicas/lab-01-almacen-y-vista/README.md). Con un `type` desconocido, devuelve **el mismo objeto**: el almacén lo usa para saber que no ha cambiado nada.

`selectPage` junta `filterItems`, `sortItems` y `paginate` con lo que dice el estado. Es lo que pinta la página.

## Paso 9: El almacén

`createStore` en `src/store.js` es el almacén del lab 01, sin sus tres fallos. Su especificación los pide uno a uno: no avisar si el estado no cambió, quitar un oyente dos veces sin que pase nada, y que quitarse durante un aviso no cambie ese aviso. Escribe un test para cada uno en `tests/store.test.js`. Con `vi.fn()` como oyente compruebas fácilmente cuántas veces y con qué se le llamó.

## Paso 10: La API

`createApi` en `src/api.js` hace las cuatro peticiones con el `fetchFn` que recibe. Las cuatro comparten casi todo: la URL base, el JSON y el tratamiento de errores. Escribe ese código una vez, en una función privada, y que los cuatro métodos la usen.

En `tests/api.test.js`:

- Los tests con `fakeFetch` comprueban qué se envía (`toHaveBeenCalledWith`) y qué se devuelve, también con respuestas de error y con un cuerpo que no es JSON.
- Los dos tests de integración usan `startServer` con unas fichas y unos campos propios, como en el [lab 02](../2-practicas/lab-02-cadena-de-calidad/README.md).

## Paso 11: La página

Con todo en verde, arranca el servidor (`pnpm start`) y prueba la aplicación en `http://localhost:3000` con las DevTools abiertas:

1. Al cargar se ven las fichas, el resumen y «N fichas · página 1 de M».
2. Busca una palabra con y sin tildes. Busca algo que no existe: «Ninguna ficha coincide con…».
3. Ordena por un campo `number`, pulsa otra vez (la flecha cambia a ↓) y cambia de página.
4. Envía el formulario vacío: cada campo obligatorio dice «Obligatorio». Crea una ficha correcta y comprueba el resumen.
5. Corrige una ficha con «Editar» y borra otra.
6. En la pestaña Network de las DevTools, haz clic derecho en la petición `items` y elige «Block request URL». Recarga: la página dice «No se pudo conectar con el servidor» y aparece «Reintentar». Quita el bloqueo en el panel «Request conditions» y pulsa «Reintentar».

Si algo falla y los tests pasan, la consola de las DevTools suele decir qué función devuelve algo con otra forma de la que espera `main.js`. Escribe el test que lo reproduce antes de arreglarlo.

## Paso 12: pnpm check y las comprobaciones

```bash
pnpm format
pnpm check
```

`pnpm check` ejecuta ESLint, Prettier y tus tests con cobertura, en ese orden, y se para en el primero que falla. Si la cobertura no llega al 90 %, la tabla dice qué líneas no ejecuta ningún test: casi siempre son las ramas de error. No vale desactivar una regla con `eslint-disable`, dejar código sin formato con `prettier-ignore`, esconder líneas a la cobertura con un comentario `v8 ignore`, ni dejar `it.todo` o `it.skip`: las comprobaciones lo buscan.

Desde la raíz del repositorio del bootcamp:

```bash
PROYECTO=~/js-proyecto-final ./scripts/verificar-semana.sh 28
```

Y repasa tu código como si fuera de otra persona: ¿se entiende cada función por su nombre? ¿Se entiende qué prueba cada test por su título?

## Paso 13: La presentación

Prepara los 5 minutos que describe la [teoría 03](../1-teoria/03-planificar-y-presentar.md#4-la-presentación-5-minutos): la aplicación funcionando con tu catálogo, la arquitectura, dos decisiones con su porqué y `pnpm check` en verde. Ensaya una vez con reloj.

---

## ✅ Requisitos verificables

`PROYECTO=~/js-proyecto-final ./scripts/verificar-semana.sh 28` comprueba (con `pnpm install` hecho):

1. `server.js`, `src/` y `tests/` son módulos ES válidos.
2. `package.json` es un módulo ES con `eslint` 10.x, `prettier` 3.x, `vitest` 5.x y `@vitest/coverage-v8` 5.x en versión exacta, y hay `pnpm-lock.yaml`.
3. `server.js`, `src/main.js`, `src/view.js` y la configuración de ESLint, Vitest y Prettier son los del starter.
4. `src/logic.js`, `src/store.js` y `src/api.js` no tienen ningún `TODO`, y los tests no tienen `it.todo` ni `it.skip`.
5. `src/` y `tests/` no desactivan reglas de ESLint, Prettier ni la cobertura.
6. `data.js` exporta `APP` (`title`, `intro` y `perPage` entero de 3 a 20), de 3 a 8 `FIELDS` (`name` camelCase sin repetir ni `id`, `label`, `type` `text` o `number`, el primero `text` y obligatorio, al menos un `number`) y de 8 a 30 `SEED` que cumplen las reglas de `FIELDS`, con el primer campo sin repetir.
7. `APP` y `SEED` son de tu dominio, no del ejemplo Planetario.
8. `validate` convierte los valores y da el primer error de cada campo con los textos del enunciado.
9. `filterItems` busca todas las palabras en los campos `text`, sin tildes ni mayúsculas, y devuelve un array nuevo.
10. `SORTERS` tiene `text` y `number`, y `sortItems` ordena con ellos, vacíos al final, estable y sin cambiar el array.
11. `paginate` devuelve `items`, `page`, `pages` y `total`, con la página llevada a su rango.
12. `summarize` cuenta las fichas y da `count`, `min`, `max` y `average` (2 decimales) de cada campo `number`, sin los vacíos.
13. `reduce` aplica las ocho acciones sin modificar el estado, y con otra devuelve el mismo objeto.
14. `selectPage` busca, ordena y pagina con el estado.
15. `createStore` guarda el estado, avisa a los oyentes en orden solo cuando cambia, y `subscribe` devuelve la función que los quita.
16. `createApi` hace las cuatro peticiones con el `fetchFn` que recibe y convierte los errores en `HttpError`.
17. `createApi` funciona contra `server.js` con tus `FIELDS` y tu `SEED`: lista, crea, corrige, borra y recibe los 404 y 422.
18. Tus tests pasan: 30 o más, y 5 o más en cada uno de `tests/logic.test.js`, `tests/store.test.js` y `tests/api.test.js`.
19. Tus tests cubren el 90 % o más de `src/logic.js`, `src/store.js` y `src/api.js` en las cuatro medidas.
20. ESLint no encuentra ningún problema en `src/` ni en `tests/` con la configuración del starter.
21. `src/` y `tests/` tienen el formato de Prettier.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — La cadena de calidad](../2-practicas/lab-02-cadena-de-calidad/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 28](../README.md)
