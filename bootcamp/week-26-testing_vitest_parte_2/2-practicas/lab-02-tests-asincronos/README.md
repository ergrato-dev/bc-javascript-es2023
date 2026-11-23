# Lab 02 — Tests asíncronos y reloj falso

## Objetivo

Probar funciones que devuelven promesas o esperan con temporizadores: tests `async`, `resolves` y `rejects`, el error de no esperar, el coste de esperar de verdad, y el reloj falso de Vitest para temporizadores y fechas.

**Tiempo:** 55 min · **Teoría:** [02 - Tests asíncronos y reloj falso](../../1-teoria/02-tests-asincronos.md)

## Cómo trabajar

[`starter/src/loader.js`](starter/src/loader.js) tiene cuatro funciones de una tienda: `loadProduct` pide un producto con el `fetchFn` que recibe, `loadWithRetry` lo reintenta si falla, `createAutosave` guarda un texto cuando se deja de escribir y `isOpen` dice si la tienda está abierta. [`starter/tests/loader.test.js`](starter/tests/loader.test.js) tiene un bloque por paso: descomenta el bloque del paso y ejecuta. Una sola vez, instala las dependencias:

```bash
cd bootcamp/week-26-testing_vitest_parte_2/2-practicas/lab-02-tests-asincronos/starter
pnpm install
```

Y en cada paso:

```bash
pnpm test --reporter=verbose
```

Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0 y Vitest 5.1.0. Se muestran las líneas de los tests nuevos de cada paso y, cuando hace falta, el fallo y el resumen.

Al principio del archivo de tests, `respond(status, body)` crea una respuesta falsa con lo único que `loadProduct` lee de una de verdad: `ok`, `status` y `json()`. Es un doble como los del [lab 01](../lab-01-dobles-de-prueba/README.md).

---

## Paso 1: Un test asíncrono

```text
 ✓ tests/loader.test.js > Paso 1: un test asíncrono > loadProduct devuelve el producto 2ms
 ✓ tests/loader.test.js > Paso 1: un test asíncrono > lo mismo con resolves 1ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
```

- `fetch` devuelve una promesa, así que el doble también: `mockResolvedValue(x)` hace que cada llamada devuelva una promesa que se cumple con `x`. Es lo mismo que `mockReturnValue(Promise.resolve(x))`.
- La función del test es `async`. Vitest espera a la promesa que devuelve antes de dar el test por terminado, y dentro puedes usar `await` como en la [semana 14](../../../week-14-async_await/README.md).
- El segundo test hace lo mismo en una línea: `expect(promesa).resolves` espera a que la promesa se cumpla y aplica el matcher a su valor. Ese `expect` también es una promesa, y por eso lleva `await` delante.

## Paso 2: Promesas que fallan

```text
 ✓ tests/loader.test.js > Paso 2: promesas que fallan > loadProduct lanza un error si la respuesta no es ok 1ms
 ✓ tests/loader.test.js > Paso 2: promesas que fallan > loadProduct deja pasar un fallo de red 0ms
 ✓ tests/loader.test.js > Paso 2: promesas que fallan > ❌ sin await, el test no espera a la comprobación 1ms
⎯⎯⎯⎯⎯⎯ Unhandled Errors ⎯⎯⎯⎯⎯⎯

Vitest caught 1 unhandled error during the test run.
This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.

⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯
AssertionError: expected 'bolígrafo' to be 'lápiz' // Object.is equality
 ❯ tests/loader.test.js:41:28

 Test Files  1 passed (1)
      Tests  5 passed (5)
     Errors  1 error
```

- `rejects` es el `resolves` de los errores: espera a que la promesa **se rechace** y comprueba su error con `toThrow`, igual que en la semana 25.
- Para los fallos, el doble usa `mockResolvedValue` con una respuesta 404 (el servidor contesta, pero con error) o `mockRejectedValue`, que devuelve una promesa rechazada (no hay respuesta: sin red, `fetch` lanza un `TypeError`).

El tercer test sale con `✓` y está mal: comprueba que el producto se llama `'lápiz'`, y se llama `'bolígrafo'`. La función del test no es `async` y no espera a nada: llama a `loadProduct`, deja el `.then` para cuando llegue la respuesta y termina. Cuando el `expect` falla, el test ya pasó. Aquí Vitest se da cuenta por casualidad (`Unhandled Rejection`, `Errors 1 error`), porque la promesa se resolvió antes de que acabara la ejecución. Con una respuesta más lenta, nadie se enteraría.

Arréglalo con `async` y `await`:

```js
  it('❌ sin await, el test no espera a la comprobación', async () => {
    const fetchFn = vi.fn().mockResolvedValue(respond(200, pen));
    const product = await loadProduct(7, fetchFn);
    expect(product.name).toBe('lápiz');
  });
```

```text
 × tests/loader.test.js > Paso 2: promesas que fallan > ❌ sin await, el test no espera a la comprobación 4ms
   → expected 'bolígrafo' to be 'lápiz' // Object.is equality
```

Ahora el test espera y el fallo aparece donde debe. Cambia `'lápiz'` por `'bolígrafo'`: pasan los 5 tests.

Con `resolves` y `rejects` Vitest 5 te protege: si olvidas el `await` delante de `expect(...).rejects`, el test falla con `Promise returned by expect(actual).rejects.toThrow(expected) was not awaited`. Con un `.then` no puede saberlo.

## Paso 3: Esperar de verdad

```text
 ✓ tests/loader.test.js > Paso 3: esperar de verdad > loadWithRetry lo intenta otra vez tras un fallo 1002ms
 × tests/loader.test.js > Paso 3: esperar de verdad > loadWithRetry se rinde tras 5 reintentos 5002ms
   → Test timed out in 5000ms.
If this is a long-running test, pass a timeout value as the last argument or configure it globally with "testTimeout".

 Test Files  1 failed (1)
      Tests  1 failed | 6 passed (7)
   Start at  03:42:44
   Duration  6.14s (tests 99%)
```

`loadWithRetry` espera `delay` ms (1000 por defecto) entre intentos, con un `setTimeout` de verdad.

- El primer test pasa, pero tarda **un segundo** entero: un fallo y una espera.
- El segundo necesita 5 esperas, 5 segundos, y Vitest corta cada test a los 5000 ms: `Test timed out in 5000ms`.

Podrías subir el límite o pasar `delay: 1`, pero el primero hace la suite lenta y el segundo deja sin probar que la espera es la que toca. **Borra el segundo test** de este paso: el paso 4 lo escribe bien.

## Paso 4: El reloj falso

```text
 ✓ tests/loader.test.js > Paso 4: el reloj falso > loadWithRetry espera delay ms entre intentos 2ms
 ✓ tests/loader.test.js > Paso 4: el reloj falso > loadWithRetry se rinde tras 5 reintentos, sin esperar 5 segundos 1ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
   Start at  03:43:26
   Duration  1.13s (tests 97%, transform 2%, import 1%)
```

Los mismos reintentos, en 2 ms. `vi.useFakeTimers()` cambia `setTimeout`, `setInterval` y `Date` por versiones falsas: el tiempo **solo avanza cuando el test lo dice** ([teoría 02](../../1-teoria/02-tests-asincronos.md#4-el-reloj-falso)).

- En el primer test, `vi.advanceTimersByTimeAsync(999)` adelanta el reloj 999 ms: el segundo intento aún no ha salido (`toHaveBeenCalledTimes(1)`). Con 1 ms más, sí. El test comprueba **cuánto** espera la función, cosa que con el reloj de verdad no podías.
- La versión `Async` adelanta el reloj y, entre temporizador y temporizador, deja que se resuelvan las promesas pendientes. `loadWithRetry` mezcla los dos (`await` y `setTimeout`), así que la necesita.
- En el segundo, `vi.runAllTimersAsync()` ejecuta todos los temporizadores pendientes, también los que se crean mientras tanto, hasta que no queda ninguno.
- Fíjate en el orden del segundo: primero se guarda la comprobación (`const check = expect(...).rejects...`), después se adelanta el reloj y al final `await check`. Si adelantaras el reloj antes de que nadie escuche, la promesa se rechazaría sin nadie que la recoja: otro `Unhandled Rejection`.
- `afterEach(() => vi.useRealTimers())` devuelve el reloj de verdad al terminar cada test, para que no afecte a los demás. Es el `restoreAllMocks` del lab 01, para el tiempo.

El resumen sigue diciendo `1.13s`: es el test del paso 3, que espera de verdad. Para comprobarlo, pásalo a reloj falso (pregunta 1 de la «Comprobación»).

## Paso 5: Temporizadores sin promesas

```text
 ✓ tests/loader.test.js > Paso 5: createAutosave > guarda una vez, 500 ms después de la última llamada, con lo último 1ms

 Test Files  1 passed (1)
      Tests  9 passed (9)
```

`createAutosave` es el `debounce` de la [semana 23](../../../week-23-performance_optimizacion/README.md): cada llamada cancela la espera anterior y empieza otra. El test escribe «B», «Bo» y «Bol» con 300 ms entre cada una, como alguien tecleando:

- A los 499 ms de la última, nada guardado. Al ms 500, una sola vez y con `'Bol'`.
- Aquí no hay promesas: `vi.advanceTimersByTime`, sin `Async`, basta, y el test no necesita ser `async`.

## Paso 6: La fecha falsa

```text
 ✓ tests/loader.test.js > Paso 6: isOpen > a las 8:59, isOpen() es false 1ms
 ✓ tests/loader.test.js > Paso 6: isOpen > a las 9:00, isOpen() es true 0ms
 ✓ tests/loader.test.js > Paso 6: isOpen > a las 20:59, isOpen() es true 0ms
 ✓ tests/loader.test.js > Paso 6: isOpen > a las 21:00, isOpen() es false 0ms

 Test Files  1 passed (1)
      Tests  13 passed (13)
```

`isOpen()` sin argumentos usa `new Date()`, la hora de ahora. Un test con la hora de verdad pasaría por la mañana y fallaría por la noche. Con el reloj falso, `vi.setSystemTime(fecha)` fija la fecha que devuelven `new Date()` y `Date.now()`. El `it.each` prueba los cuatro bordes del horario, como los casos límite de la semana 25. La fecha se crea con `new Date(año, mes, día, hora, minuto)`, en hora local, la misma que lee `getHours()`.

```text
✅ Lab completado.
```

---

## Comprobación

1. Pasa el test del paso 3 a reloj falso, como los del paso 4. ¿Cuánto dice ahora `Duration`?
2. En el paso 4, cambia `advanceTimersByTimeAsync` por `advanceTimersByTime`. ¿Qué pasa y por qué?
3. Quita el `afterEach` del paso 5 y ejecuta. ¿Siguen pasando los tests? ¿Por qué no te puedes fiar de que sigan pasando si añades más?
4. Escribe un test de `loadWithRetry` con `retries: 0`: un fallo y ningún reintento. ¿Necesita el reloj falso?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Dobles de prueba](../lab-01-dobles-de-prueba/README.md) | [Lab 03 — Tests de integración](../lab-03-tests-de-integracion/README.md) → |

[↑ Semana 26](../../README.md)
