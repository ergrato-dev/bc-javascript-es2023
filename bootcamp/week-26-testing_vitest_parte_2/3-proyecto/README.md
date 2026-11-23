# Proyecto — Tests del cliente asíncrono

## Objetivo

Escribir los tests de un módulo asíncrono que habla con la API de un catálogo: peticiones con errores HTTP (`requestJson`), reintentos con espera creciente (`withRetry`), límite de tiempo (`withTimeout`), caché con caducidad (`createCache`), `debounce`, el cliente de la API (`createCatalogClient`) y un sondeo periódico (`createPoller`). Las funciones ya están escritas y funcionan; **tu trabajo son los tests**: unitarios con dobles y reloj falso, y de integración contra el servidor de verdad, con las fichas del dominio que te asigna el instructor.

**Tiempo:** 2 h

Al terminar, tus tests:

- Pasan todos, sin red externa y sin esperas de verdad.
- Cubren el 100 % de `src/logic.js`.
- Detectan los ocho errores que las comprobaciones meten a propósito en `src/logic.js` ([teoría 05 de la semana 25](../../week-25-testing_vitest_parte_1/1-teoria/05-cobertura.md#5-lo-que-la-cobertura-no-mide)).

## Qué hay en el starter

```text
starter/
├── package.json             # vitest y @vitest/coverage-v8 5.1.0; scripts test y coverage
├── pnpm-lock.yaml
├── vitest.config.js         # cobertura de src/logic.js, en la terminal y en HTML
├── src/
│   ├── data.js              # SEED del ejemplo Planetario: lo cambias por tu dominio
│   ├── logic.js             # las siete funciones, terminadas: no se cambia
│   └── server.js            # la API del catálogo con node:http, terminada: no se cambia
└── tests/
    ├── logic.test.js        # 31 casos con it.todo: tests unitarios
    └── integration.test.js  # 8 casos con it.todo: tests contra server.js
```

Cada función de `logic.js` tiene encima un comentario que dice qué hace y qué pasa en los casos raros. **Esos comentarios son la especificación.** `logic.js` y `server.js` no se tocan: si un test tuyo falla, el error está en el test.

---

## Paso 1: Preparar el proyecto

Copia el starter a una carpeta tuya fuera del repositorio, instala y ejecuta los tests:

```bash
cp -r bootcamp/week-26-testing_vitest_parte_2/3-proyecto/starter ~/js-proyecto-semana-26
cd ~/js-proyecto-semana-26
pnpm install
pnpm test
```

```text
 Test Files  2 skipped (2)
      Tests  39 todo (39)
```

Lee `src/logic.js` entero y la cabecera de `src/server.js` antes de seguir. Si quieres ver la API funcionando, arráncala con `node src/server.js` y abre `http://127.0.0.1:3000/items?q=tauro` en el navegador; la paras con `Ctrl+C`.

## Paso 2: Tus fichas en data.js

Cambia `SEED` de `src/data.js` por fichas de tu dominio, con las reglas de su comentario: de 6 a 20 fichas, cada una con `id`, `name` y de 1 a 4 campos más, los mismos en todas. Elige datos que te sirvan para probar la búsqueda: dos fichas que compartan una palabra (el mismo autor, la misma sala) y una con tildes.

El servidor arranca con estas fichas. Tus tests de integración las usarán, y los unitarios pueden usarlas como datos de prueba.

## Paso 3: El doble de una respuesta

Las funciones reciben `fetchFn`, o usan el `fetch` global. En `tests/logic.test.js`, cambia el `TODO` por un helper que cree respuestas falsas, como el del [lab 02](../2-practicas/lab-02-tests-asincronos/README.md):

```js
// Una respuesta falsa con lo que requestJson lee de una de verdad.
// Sin body, json() falla como con un cuerpo que no es JSON.
const respond = (status, body) => ({
  ok: status >= 200 && status < 300,
  status,
  json: async () => {
    if (body === undefined) throw new SyntaxError('Unexpected end of JSON input');
    return body;
  },
});
```

El `afterEach` del principio del archivo ya devuelve el reloj, los espías y los globales de verdad después de cada test, para todos los `describe`.

En los pasos 4 a 11 cambias cada `it.todo` por un `it` con su `expect`. **No cambies los nombres de los casos**: las comprobaciones los buscan tal cual. Puedes añadir más casos y varios `expect` en cada uno. Después de cada paso, ejecuta `pnpm test`.

## Paso 4: requestJson

Un `fetchFn = vi.fn().mockResolvedValue(respond(...))` en cada caso. Comprueba lo que devuelve con `resolves` y lo que lanza con `rejects`, siempre con `await` ([teoría 02](../1-teoria/02-tests-asincronos.md#3-promesas-que-fallan-rejects)).

- Para el `HttpError`, comprueba el tipo **y** sus datos. Dos formas: `rejects.toThrow(new HttpError(404, 'mensaje'))` compara el mensaje, y para el `status`, recoge el error con `.catch((error) => error)` y usa `toBeInstanceOf(HttpError)` y `toMatchObject({ status: 404 })`.
- Para el cuerpo que no es JSON, `respond(502)` sin `body`.
- Para el `fetch` global, `vi.stubGlobal('fetch', doble)` y llama a `requestJson` sin `fetchFn`.

Mutante: `if (!response.ok)` por `if (response.status >= 500)`, que deja pasar un 404 como si fuera bueno.

## Paso 5: withRetry

`withRetry` espera entre intentos: usa el reloj falso en cada caso que reintente, o esperarás de verdad ([lab 02, paso 4](../2-practicas/lab-02-tests-asincronos/README.md#paso-4-el-reloj-falso)). La tarea es un `vi.fn()` con `mockRejectedValueOnce` y `mockResolvedValueOnce` encadenados.

- Para «le pasa el número de intento», `task.mock.calls` debe ser `[[0], [1]]`.
- Para «se rinde», guarda primero la comprobación (`const check = expect(...).rejects...`), después `await vi.runAllTimersAsync()` y al final `await check`. Comprueba cuántas veces se llamó a la tarea.
- Para «espera delay, 2 × delay y 4 × delay», usa `retries: 3` y adelanta el reloj a trozos con `vi.advanceTimersByTimeAsync`: 99 ms después del primer fallo, el segundo intento no ha salido; 1 ms más, sí. Igual con 199 + 1 y con 399 + 1.
- Los dos casos de `HttpError` deciden si se reintenta: un 404 se ejecuta **una** vez; un 503, dos.

Dos mutantes:

- `attempt >= retries` por `attempt > retries`: un reintento de más. Lo detecta `toHaveBeenCalledTimes`.
- `delay * 2 ** attempt` por `delay * (attempt + 1)`: esperas de 1, 2 y **3** veces `delay`. Con dos reintentos las esperas coinciden (100 y 200 ms); solo un test que mire la **tercera** espera lo detecta.

## Paso 6: withTimeout

- Para la promesa que no llega nunca, `new Promise(() => {})`. Con el reloj falso, adelanta justo `ms` y comprueba el `TimeoutError` con `rejects.toThrow(new TimeoutError(1000))`.
- Para la que llega a tiempo, `Promise.resolve(valor)`. Además del valor, comprueba que **no queda ningún temporizador pendiente**: con el reloj falso, `vi.getTimerCount()` dice cuántos hay ([teoría 02](../1-teoria/02-tests-asincronos.md#5-lo-que-el-reloj-falso-te-deja-comprobar)).
- El error de la promesa pasa tal cual: `Promise.reject(new TypeError('fetch failed'))`.

Mutante: quitar el `clearTimeout` del `finally`. El resultado es el mismo, pero cada llamada deja un temporizador vivo hasta que se cumple (una fuga como las de la [semana 23](../../week-23-performance_optimizacion/README.md)). Solo lo detecta `vi.getTimerCount()`.

## Paso 7: createCache

`createCache` recibe `now`, la función que da la hora. En los tests, pásale una tuya: `let time = 5000;` y `now: () => time`. Cambiar `time` es mover el reloj, sin `vi.useFakeTimers`.

- «Caduca justo al cumplir ttl»: con `ttl: 1000`, a los 999 ms el valor sigue ahí; a los 1000, `undefined`.
- `getOrLoad`: `load` es un `vi.fn().mockResolvedValue(...)`. Dos llamadas seguidas, una sola carga. Si `load` falla, `size` sigue en 0.
- «Usa Date.now si no recibe now» es el único caso con el reloj falso: `vi.setSystemTime(...)` antes de crear la caché y antes de cada `get`.
- El `RangeError`: `createCache()` sin nada y con `ttl: 0`.

Mutante: `>= ttl` por `> ttl`. Solo lo detecta un test con el valor exacto de `ttl`.

## Paso 8: debounce

Como el `createAutosave` del lab 02: reloj falso, varias llamadas seguidas y `vi.advanceTimersByTime`, sin `Async`. Comprueba que a `ms - 1` no se ha llamado a `fn` y a `ms` sí, una vez y con los argumentos de la **última** llamada. Para `cancel`, llama, cancela y adelanta mucho.

Mutante: quitar el `clearTimeout` de cada llamada. `fn` se llama una vez por llamada, no una en total.

## Paso 9: createCatalogClient

Unitarios, con `fetchFn` falso: crea el cliente con `baseUrl: 'http://museo.test'` (cualquier URL vale, nadie la visita) y comprueba con `toHaveBeenCalledWith` la URL y las opciones exactas de cada petición. Las opciones que `requestJson` pasa a `fetchFn` en un `GET` son `{}`.

- `list` con un texto con espacios a los lados y un `&` en medio: `'  Goya & Madrid '` debe pedir `?q=Goya%20%26%20Madrid`. `encodeURIComponent` convierte el espacio en `%20` y el `&` en `%26`.
- `create`: el `POST` con `headers` y `body` en JSON, como en el [lab 03](../2-practicas/lab-03-tests-de-integracion/README.md#paso-2-el-doble-no-lo-sabía).

Mutante: quitar `encodeURIComponent`. Sin él, el `&` corta la URL: el servidor ve `q=Goya ` y un parámetro `Madrid` que no conoce.

## Paso 10: createPoller

Reloj falso y `vi.advanceTimersByTimeAsync`, porque cada vuelta espera a `task`, que es una promesa.

- `start` ejecuta la tarea **enseguida**: `await vi.advanceTimersByTimeAsync(0)` deja que se resuelva y `onData` ya tiene el primer resultado. A `interval - 1` ms sigue en 1 llamada; a `interval`, 2.
- Para los fallos, `mockRejectedValueOnce` seguido de `mockResolvedValueOnce`: `onError` recibe el error y la vuelta siguiente llega a su hora. Y otro caso sin `onError`: un fallo no rompe nada.
- Llama a `poller.stop()` al final de cada test, como se cierra un servidor.

Mutante: quitar `clearInterval` de `stop`. `running` dice `false`, pero la tarea se sigue ejecutando.

## Paso 11: Integración

En `tests/integration.test.js`, cambia el `TODO` por el montaje del [lab 03](../2-practicas/lab-03-tests-de-integracion/README.md): `beforeAll` arranca el servidor con `startServer()` y crea el cliente con `createCatalogClient({ baseUrl: server.url })`, sin `fetchFn`; `afterAll` lo cierra con `await server.close()`; `beforeEach` llama a `server.reset()`. **Sin dobles**: las comprobaciones rechazan `vi.fn`, `vi.spyOn`, `vi.mock` y `vi.stubGlobal` en este archivo.

- Las búsquedas usan tus fichas: una palabra en mayúsculas y sin tildes que encuentre fichas que sí las tienen, y dos palabras con un `&` en medio que solo cumpla una ficha. Compara los nombres: `(await client.list('...')).map((item) => item.name)`.
- Los errores, con el `status` y el mensaje reales del servidor.
- «Cada test empieza con las fichas de SEED»: ponlo **después** del de `create`. Si el `beforeEach` funciona, la ficha nueva ya no está.

Los mutantes de `requestJson` y de `createCatalogClient` también los detectan estos tests.

## Paso 12: Cobertura y repaso final

```bash
pnpm coverage
```

Cuando todo esté cubierto:

```text
 % Coverage report from v8
No files with missing coverage.
1 file fully covered.

=============================== Coverage summary ===============================
Statements   : 100% ( 83/83 )
Branches     : 100% ( 31/31 )
Functions    : 100% ( 32/32 )
Lines        : 100% ( 66/66 )
================================================================================
```

Si falta algo, la tabla dice qué líneas de `logic.js` no se ejecutan; abre `coverage/index.html` para ver las ramas. Después:

1. Que no quede ningún `it.todo` ni `TODO`, ni ningún `.only` o `.skip`.
2. Que `pnpm test` tarde menos de un segundo: si tarda más, algún test espera de verdad.
3. Rompe tú mismo `logic.js` en una copia: cambia un `>=` por `>` o quita una línea. ¿Falla algún test? Deshaz el cambio.
4. Desde la raíz del repositorio del bootcamp:

   ```bash
   PROYECTO=~/js-proyecto-semana-26 ./scripts/verificar-semana.sh 26
   ```

---

## ✅ Requisitos verificables

`PROYECTO=~/js-proyecto-semana-26 ./scripts/verificar-semana.sh 26` comprueba (con `pnpm install` hecho):

1. `src/` y `tests/` son módulos ES válidos.
2. `package.json` es un módulo ES con `vitest` y `@vitest/coverage-v8` 5.x en la misma versión exacta, el script `test` ejecuta `vitest run` y hay `pnpm-lock.yaml`.
3. `src/logic.js` y `src/server.js` son los del starter, sin cambios.
4. `tests/` no tiene ningún `it.todo` ni `TODO`.
5. `tests/` no tiene `.only` ni `.skip`, que esconden tests.
6. `data.js` exporta de 6 a 20 fichas en `SEED`, todas con los mismos campos (`id`, `name` y de 1 a 4 más), `id` entero mayor que 0 y `name` sin repetir.
7. `SEED` es de tu dominio, no el del ejemplo Planetario.
8. `pnpm test` pasa en menos de 30 segundos.
9. Cada caso del starter es un test que pasa, con su `describe` y su título (39 casos).
10. `tests/logic.test.js` usa el reloj falso (`vi.useFakeTimers`) y lo devuelve (`vi.useRealTimers`).
11. `tests/integration.test.js` arranca `src/server.js` y no usa dobles (`vi.fn`, `vi.spyOn`, `vi.mock` ni `vi.stubGlobal`).
12. Los tests cubren el 100 % de `src/logic.js`: líneas, ramas, funciones y sentencias.
13. Tus tests fallan si `requestJson` solo trata como error los status 5xx.
14. Tus tests fallan si `withRetry` hace un reintento de más.
15. Tus tests fallan si `withRetry` espera `delay`, 2 × `delay` y 3 × `delay` en lugar de doblar la espera.
16. Tus tests fallan si `withTimeout` no cancela su temporizador al terminar.
17. Tus tests fallan si `createCache` da por buena una entrada justo al cumplir `ttl`.
18. Tus tests fallan si `debounce` no cancela la espera anterior en cada llamada.
19. Tus tests fallan si `createCatalogClient` no codifica el texto de la búsqueda.
20. Tus tests fallan si `createPoller` no para el sondeo con `stop`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — TDD](../2-practicas/lab-04-tdd/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 26](../README.md)
