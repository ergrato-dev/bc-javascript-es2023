# Lab 03 — Tests de integración

## Objetivo

Probar un cliente de una API contra el servidor de verdad: arrancarlo y pararlo desde los tests con `beforeAll` y `afterAll`, encontrar un error que los tests con un `fetch` falso no ven, dejar cada test con los datos iniciales y probar los errores que devuelve el servidor.

**Tiempo:** 50 min · **Teoría:** [03 - Tests de integración](../../1-teoria/03-tests-de-integracion.md)

## Cómo trabajar

[`starter/src/server.js`](starter/src/server.js) es una API REST de productos con `node:http`, como la de la [semana 16](../../../week-16-apis_rest_crud/README.md): guarda tres productos en memoria y `startServer()` la arranca en un puerto libre. [`starter/src/client.js`](starter/src/client.js) es el cliente que la usa, con `list`, `get` y `create`.

[`starter/tests/client.test.js`](starter/tests/client.test.js) ya tiene dos tests unitarios del cliente, con `fetch` falso, que pasan. Debajo, un `describe` de integración comentado. Una sola vez, instala las dependencias:

```bash
cd bootcamp/week-26-testing_vitest_parte_2/2-practicas/lab-03-tests-de-integracion/starter
pnpm install
```

Y en cada paso:

```bash
pnpm test --reporter=verbose
```

Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0 y Vitest 5.1.0. Se muestran las líneas de los tests y, cuando hace falta, el fallo. Los milisegundos de los tests de integración varían más que los de los unitarios.

---

## Paso 0: Los tests unitarios que ya hay

Ejecuta antes de descomentar nada:

```text
 ✓ tests/client.test.js > unitarios: createClient con un fetch falso > create envía un POST con el producto en JSON 2ms
 ✓ tests/client.test.js > unitarios: createClient con un fetch falso > un error del servidor lanza un Error con el status y el mensaje 2ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
```

El cliente usa el `fetch` global, sin recibirlo como parámetro. Los tests lo cambian con `vi.stubGlobal('fetch', doble)`, que sustituye una variable global, y `vi.unstubAllGlobals()` en el `afterEach` devuelve la de verdad ([teoría 01](../../1-teoria/01-dobles-de-prueba.md#4-vispyon-y-vistubglobal-lo-que-no-recibes-como-parámetro)). Lee el primero: comprueba que `create` llama a `fetch` con la URL, `method: 'POST'` y el cuerpo en JSON. Parece completo.

## Paso 1: El servidor de verdad

Descomenta el bloque del paso 1, el `describe` de integración entero, hasta su `});` final. Los tests de los pasos 2 a 4 siguen comentados dentro: tienen un segundo `//`.

```text
 ✓ tests/client.test.js > integración: createClient contra el servidor > list devuelve los productos del servidor 13ms
 ✓ tests/client.test.js > integración: createClient contra el servidor > get devuelve un producto por su id 2ms

 Test Files  1 passed (1)
      Tests  4 passed (4)
```

- `beforeAll` arranca el servidor **una vez**, antes del primer test del `describe`, y crea el cliente con su URL. `afterAll` lo cierra después del último. Arrancar un servidor por test también funcionaría, pero más lento. Las dos funciones son `async`: Vitest espera a que el servidor escuche antes de empezar.
- `startServer()` escucha en el puerto 0: el sistema le da uno libre, y `server.url` dice cuál. Así los tests no chocan con otro programa que use el 3000.
- Estos tests no tienen dobles: el cliente hace peticiones HTTP de verdad con el `fetch` de Node, y el servidor las contesta. Son más lentos que los unitarios (13 ms frente a 2 ms), pero prueban que **las dos piezas se entienden**.

## Paso 2: El doble no lo sabía

Quita las `//` que quedan en el test del paso 2:

```text
 × tests/client.test.js > integración: createClient contra el servidor > create guarda un producto nuevo 6ms
   → 415: El cuerpo debe ser JSON (content-type: application/json)

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/client.test.js > integración: createClient contra el servidor > create guarda un producto nuevo
Error: 415: El cuerpo debe ser JSON (content-type: application/json)
 ❯ request src/client.js:6:29
 ❯ tests/client.test.js:56:21
```

`create` no funciona contra el servidor, y su test unitario sigue en verde. El servidor exige la cabecera `content-type: application/json` en un `POST`. Sin ella, `fetch` envía un texto como `text/plain`, y el servidor contesta 415 (*Unsupported Media Type*). El `fetch` falso aceptaba cualquier cosa: **un doble solo sabe lo que le contaste al escribirlo**. El test unitario comprueba que el cliente hace lo que tú creías que debía hacer, no lo que el servidor necesita.

Arregla `src/client.js`:

```js
    create: (product) => request('/products', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(product),
    }),
```

Ejecuta otra vez:

```text
 × tests/client.test.js > unitarios: createClient con un fetch falso > create envía un POST con el producto en JSON 9ms
   → expected "vi.fn()" to be called with arguments: [ 'http://api/products', …(1) ]

Received:

  1st vi.fn() call:

  [
    "http://api/products",
    {
      "body": "{\"name\":\"goma\",\"price\":0.5}",
+     "headers": {
+       "content-type": "application/json",
+     },
      "method": "POST",
    },
  ]
...
 ✓ tests/client.test.js > integración: createClient contra el servidor > create guarda un producto nuevo 6ms
```

Ahora el de integración pasa y falla el unitario, que comprobaba las opciones exactas de la versión rota. Añade la cabecera también a lo que espera el test unitario (la línea `headers` entre `method` y `body`) y vuelve a ejecutar: pasan los 5.

## Paso 3: Tests que comparten un servidor

Quita las `//` del test del paso 3:

```text
 ✓ tests/client.test.js > integración: createClient contra el servidor > create guarda un producto nuevo 6ms
 × tests/client.test.js > integración: createClient contra el servidor > list devuelve los 3 productos iniciales 10ms
   → expected [ …(4) ] to have a length of 3 but got 4
```

Es el error del [lab 03 de la semana 25](../../../week-25-testing_vitest_parte_1/2-practicas/lab-03-organizar-tests/README.md#paso-2-tests-que-dependen-unos-de-otros), ahora con un servidor: todos los tests usan el mismo, y la goma que guardó el test anterior sigue ahí. Pararlo y arrancarlo en cada test lo arreglaría, pero `server.reset()` vuelve a los datos iniciales en un momento. Añade después del `afterAll`:

```js
  beforeEach(() => {
    server.reset();
  });
```

```text
 ✓ tests/client.test.js > integración: createClient contra el servidor > create guarda un producto nuevo 7ms
 ✓ tests/client.test.js > integración: createClient contra el servidor > list devuelve los 3 productos iniciales 3ms

 Test Files  1 passed (1)
      Tests  6 passed (6)
```

El servidor se arranca una vez (`beforeAll`), y los datos se reinician antes de cada test (`beforeEach`). Es el reparto habitual: lo caro, una vez; el estado, en cada test.

## Paso 4: Los errores de verdad

Quita las `//` de los dos tests del paso 4:

```text
 ✓ tests/client.test.js > integración: createClient contra el servidor > get de un id que no existe lanza un error 404 3ms
 ✓ tests/client.test.js > integración: createClient contra el servidor > create sin nombre lanza un error 400 4ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
```

El test unitario de errores comprobaba que el cliente convierte una respuesta con error en un `Error`, con un mensaje que tú escribiste en el doble. Estos comprueban los **mensajes reales** del servidor: si alguien cambia `'No existe el producto 99'` en `server.js`, fallan.

¿Sobran entonces los unitarios? No. Son más rápidos, no necesitan servidor y prueban casos que el servidor de verdad no da cuando quieres, como un 500 o un fallo de red. Los de integración prueban que las piezas encajan. Hacen falta los dos ([teoría 03](../../1-teoria/03-tests-de-integracion.md#5-cuándo-un-doble-y-cuándo-lo-de-verdad)).

```text
✅ Lab completado.
```

---

## Comprobación

1. Quita el `await` de `await server.close()` en el `afterAll`. ¿Qué cambia? ¿Y si quitas el `afterAll` entero?
2. Cambia `beforeAll` por `beforeEach` y `afterAll` por `afterEach` (y borra el `server.reset()`). ¿Pasan los tests? Compara `Duration` con la de antes.
3. Escribe un test unitario de `create` que compruebe solo lo que importa con `expect.objectContaining` o con `fetchFn.mock.calls[0][1].method`. ¿Habría fallado igual en el paso 2?
4. ¿Qué caso de error no puedes probar contra este servidor y sí con el `fetch` falso? Escribe ese test unitario.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Tests asíncronos y reloj falso](../lab-02-tests-asincronos/README.md) | [Lab 04 — TDD](../lab-04-tdd/README.md) → |

[↑ Semana 26](../../README.md)
