# Lab 01 — Dobles de prueba

## Objetivo

Probar funciones que dependen de algo que no controlas (un cobro, un aviso, el azar, la consola, otro módulo) cambiándolo por un doble: primero uno escrito a mano y después con `vi.fn`, `vi.spyOn` y `vi.mock`.

**Tiempo:** 50 min · **Teoría:** [01 - Dobles de prueba](../../1-teoria/01-dobles-de-prueba.md)

## Cómo trabajar

[`starter/src/orders.js`](starter/src/orders.js) tiene tres funciones de una tienda: `checkout` cobra un carrito y avisa, `pickOffer` elige una oferta al azar y `warnOutOfStock` avisa por consola de lo que falta. [`starter/src/prices.js`](starter/src/prices.js) convierte precios con el cambio que le da [`starter/src/rates.js`](starter/src/rates.js), un servicio externo que en el lab falla siempre.

Los tests están en dos archivos: los pasos 1 a 4 en [`starter/tests/orders.test.js`](starter/tests/orders.test.js) y el paso 5 en [`starter/tests/prices.test.js`](starter/tests/prices.test.js). Descomenta el bloque de cada paso y ejecuta. Una sola vez, instala las dependencias:

```bash
cd bootcamp/week-26-testing_vitest_parte_2/2-practicas/lab-01-dobles-de-prueba/starter
pnpm install
```

En los pasos 1 a 4:

```bash
pnpm test --reporter=verbose orders
```

La palabra del final es un filtro: Vitest ejecuta solo los archivos de test cuya ruta la contiene, aquí `tests/orders.test.js`. Sin el filtro también ejecutaría `prices.test.js`, que no tiene ningún test hasta el paso 5, y Vitest marca como fallido un archivo de test vacío (`No test suite found`).

Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0 y Vitest 5.1.0. Se muestran las líneas de los tests nuevos de cada paso y, cuando hace falta, el fallo; se omiten la cabecera `RUN` y el resumen final (`Start at`, `Duration`).

---

## Paso 1: Un doble escrito a mano

```text
 ✓ tests/orders.test.js > Paso 1: un doble escrito a mano > checkout cobra el total y avisa con el recibo 2ms

 Test Files  1 passed (1)
      Tests  1 passed (1)
```

`checkout` no sabe cobrar ni avisar: recibe `pay` y `notify` como parámetros y las llama. En la tienda de verdad serían una pasarela de pago y un correo. En el test son dos funciones falsas de tres líneas ([teoría 01](../../1-teoria/01-dobles-de-prueba.md#1-qué-es-un-doble-de-prueba)):

- **Devuelven algo fijo:** `pay` siempre devuelve el recibo `{ id: 'A1' }`, sin cobrar nada.
- **Apuntan cómo se las llamó:** cada llamada guarda su argumento en un array, `paid` o `messages`.

Con eso el test comprueba las dos caras de `checkout`: lo que **devuelve** (el recibo con el total) y lo que **hace** con sus dependencias (cobrar 12.5 una vez, avisar con el mensaje correcto). Sin red, sin tarjeta y en milisegundos.

## Paso 2: vi.fn

```text
 × tests/orders.test.js > Paso 2: vi.fn > checkout llama a pay y a notify una vez, con lo que toca 6ms
   → expected "vi.fn()" to be called with arguments: [ 'Pedido A1: 12.5 €' ]

Received:

  1st vi.fn() call:

  [
-   "Pedido A1: 12.5 €",
+   "Pedido A1: 12.50 €",
  ]


Number of calls: 1

 ❯ tests/orders.test.js:42:20
```

`vi.fn()` crea el mismo doble del paso 1 sin escribirlo. Por defecto devuelve `undefined`; `.mockReturnValue(x)` le dice qué devolver. Y apunta cada llamada él solo, en `notify.mock.calls`: un array con un array de argumentos por llamada. Los matchers de dobles leen ese registro:

| Matcher | Comprueba |
|---|---|
| `toHaveBeenCalled()` | Que se llamó al menos una vez |
| `toHaveBeenCalledTimes(n)` | Que se llamó exactamente `n` veces |
| `toHaveBeenCalledWith(a, b)` | Que alguna llamada recibió esos argumentos |

El fallo se lee como los de la semana 25: se esperaba una llamada con `'Pedido A1: 12.5 €'` (`-`) y hubo una con `'Pedido A1: 12.50 €'` (`+`). `Number of calls: 1` dice que `notify` sí se llamó, una vez. El error está en el test: `toFixed(2)` siempre escribe dos decimales. Corrige el texto esperado y vuelve a ejecutar: pasan los 2 tests.

## Paso 3: Lo que devuelve el doble

```text
 ✓ tests/orders.test.js > Paso 3: lo que devuelve el doble > cada cobro tiene su recibo 0ms
 ✓ tests/orders.test.js > Paso 3: lo que devuelve el doble > si el cobro falla, checkout lanza el error y no avisa 1ms
 ✓ tests/orders.test.js > Paso 3: lo que devuelve el doble > con el carrito vacío no cobra nada 0ms

 Test Files  1 passed (1)
      Tests  5 passed (5)
```

Un doble puede devolver cosas distintas en cada llamada o comportarse como quieras:

- `mockReturnValueOnce(x)` devuelve `x` **solo en la siguiente llamada**. Encadenados, el primer cobro da `A1` y el segundo `A2`. `toHaveBeenNthCalledWith(2, ...)` comprueba los argumentos de la segunda llamada.
- `mockImplementation(fn)` cambia el doble por la función que le das. Aquí lanza un error, como una pasarela que rechaza la tarjeta. Así se prueba el camino del error, el que nunca podrías provocar con una tarjeta de verdad, y se comprueba con `not.toHaveBeenCalled()` que no se avisó de un pedido que no se cobró.
- El tercer test usa el doble solo para mirar: con el carrito vacío, `pay` no debe llamarse.

## Paso 4: Espiar lo que no recibes como parámetro

```text
stderr | tests/orders.test.js > Paso 4: vi.spyOn > warnOutOfStock avisa de cada producto sin stock
Sin stock: regla
Sin stock: compás

 ✓ tests/orders.test.js > Paso 4: vi.spyOn > pickOffer elige según Math.random 0ms
 ✓ tests/orders.test.js > Paso 4: vi.spyOn > warnOutOfStock avisa de cada producto sin stock 1ms
 × tests/orders.test.js > Paso 4: vi.spyOn > Math.random vuelve a ser el de verdad 1ms
   → expected 0.99 not to be 0.99 // Object.is equality
```

`pickOffer` y `warnOutOfStock` no reciben sus dependencias: usan `Math.random` y `console.warn`, que son globales. `vi.spyOn(objeto, 'método')` cambia ese método por un espía, que apunta las llamadas igual que `vi.fn`:

- `vi.spyOn(Math, 'random').mockReturnValue(0.99)` hace que el azar dé siempre 0.99, y la oferta es siempre el último producto. Un test con azar de verdad pasaría unas veces sí y otras no.
- `vi.spyOn(console, 'warn')`, sin más, **sigue llamando al `console.warn` de verdad**: por eso los dos avisos salen en la salida, bajo `stderr`.

Y el tercer test falla: el espía de `Math.random` sigue puesto, aunque se creó en otro test. Un espía no se quita solo. Arregla las dos cosas:

1. Añade al principio del `describe` del paso 4, antes de `const products`, la limpieza:

   ```js
     afterEach(() => {
       vi.restoreAllMocks();
     });
   ```

   `afterEach` es como el `beforeEach` de la semana 25, pero se ejecuta **después** de cada test. `vi.restoreAllMocks()` devuelve a cada objeto espiado su método original.

2. Haz que el espía de `console.warn` no escriba nada:

   ```js
       const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
   ```

Vuelve a ejecutar:

```text
 ✓ tests/orders.test.js > Paso 4: vi.spyOn > pickOffer elige según Math.random 1ms
 ✓ tests/orders.test.js > Paso 4: vi.spyOn > warnOutOfStock avisa de cada producto sin stock 0ms
 ✓ tests/orders.test.js > Paso 4: vi.spyOn > Math.random vuelve a ser el de verdad 0ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
```

Sin `stderr` y con los 8 tests en verde.

## Paso 5: Sustituir un módulo entero

`convert` no recibe `getRate`: la importa de `rates.js`. Ni parámetro que cambiar ni objeto que espiar. Descomenta el **paso 5a** de `tests/prices.test.js` y ejecuta ese archivo:

```bash
pnpm test --reporter=verbose prices
```

```text
 × tests/prices.test.js > Paso 5: vi.mock > convert multiplica por el cambio y redondea 4ms
   → Sin conexión: no se pudo pedir el cambio a USD
 × tests/prices.test.js > Paso 5: vi.mock > convert pide el cambio de la moneda que recibe 1ms
   → Sin conexión: no se pudo pedir el cambio a GBP

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 2 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/prices.test.js > Paso 5: vi.mock > convert multiplica por el cambio y redondea
Error: Sin conexión: no se pudo pedir el cambio a USD
 ❯ getRate src/rates.js:4:9
 ❯ convert src/prices.js:6:16
 ❯ tests/prices.test.js:9:12
```

Los tests llaman al servicio de verdad, que falla. La pila del error (`❯`) dice el camino: el test llamó a `convert`, que llamó a `getRate`. Así fallarían tus tests un día sin red.

Descomenta ahora el **paso 5b**, al final del archivo, y vuelve a ejecutar:

```text
 ✓ tests/prices.test.js > Paso 5: vi.mock > convert multiplica por el cambio y redondea 1ms
 ✓ tests/prices.test.js > Paso 5: vi.mock > convert pide el cambio de la moneda que recibe 0ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
```

- `vi.mock(ruta, fábrica)` cambia el módulo entero, para **todo el archivo de test**, por el objeto que devuelve la fábrica: aquí, un `getRate` que es un `vi.fn()`. `convert` importa ese doble sin saberlo.
- Está al final del archivo y aun así funciona: Vitest **sube** cada `vi.mock` por encima de los `import` antes de ejecutar el archivo. Por eso el `getRate` que importa el test es también el doble.
- `vi.mocked(getRate)` es el mismo `getRate`; solo deja claro al leerlo que es un doble. `mockReturnValue(1.1)` fija el cambio.

`vi.mock` es la herramienta más fuerte y la más difícil de seguir: el doble se define lejos de donde se usa y vale para todo el archivo. Cuando la función es tuya, pasarle la dependencia como parámetro, como `checkout`, es más sencillo de probar ([teoría 01](../../1-teoria/01-dobles-de-prueba.md#5-vimock-un-módulo-entero)).

Para terminar, ejecuta los dos archivos juntos, sin filtro:

```bash
pnpm test
```

```text
 Test Files  2 passed (2)
      Tests  10 passed (10)
```

```text
✅ Lab completado.
```

---

## Comprobación

1. En el paso 2, ¿qué ganas con `vi.fn()` frente a los dobles escritos a mano del paso 1? ¿Qué sigue siendo igual?
2. Quita el `afterEach` del paso 4 y cambia el orden de los tests del `describe`: pon el tercero primero. ¿Pasa? ¿Por qué un test que pasa o falla según el orden es un problema?
3. En el paso 3, cambia `mockReturnValueOnce({ id: 'A2' })` por `mockReturnValue({ id: 'A2' })` y añade un tercer `checkout`. ¿Qué recibo le toca?
4. ¿Cómo cambiarías `convert` para probarla sin `vi.mock`? Escribe la nueva firma y un test.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Tests asíncronos y reloj falso](../lab-02-tests-asincronos/README.md) → |

[↑ Semana 26](../../README.md)
