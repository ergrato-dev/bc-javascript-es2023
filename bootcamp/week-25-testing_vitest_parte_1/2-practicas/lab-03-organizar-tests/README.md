# Lab 03 — Organizar los tests

## Objetivo

Escribir tests que se entienden y no dependen unos de otros: preparar, actuar y comprobar, `beforeEach`, `describe` dentro de `describe`, `it.each` con tablas de datos, casos límite, y `todo`, `skip`, `only` y `-t` para elegir qué se ejecuta.

**Tiempo:** 50 min · **Teoría:** [04 - Organizar los tests](../../1-teoria/04-organizar-tests.md)

## Cómo trabajar

[`starter/src/stock.js`](starter/src/stock.js) tiene `createStock`, un almacén que guarda unidades de productos, y `shippingCost`, una tarifa de envío por peso. [`starter/tests/stock.test.js`](starter/tests/stock.test.js) tiene un bloque por paso: descomenta el bloque del paso y ejecuta. Una sola vez, instala las dependencias:

```bash
cd bootcamp/week-25-testing_vitest_parte_1/2-practicas/lab-03-organizar-tests/starter
pnpm install
```

Y en cada paso:

```bash
pnpm test --reporter=verbose
```

En este lab el reporter `verbose` importa: la estructura de los tests se ve en sus nombres. Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0 y Vitest 5.1.0. Se muestran las líneas de los tests y, cuando hace falta, el fallo. El resumen final (`Start at`, `Duration`) se omite salvo en el paso 6.

---

## Paso 1: Preparar, actuar y comprobar

```text
 ✓ tests/stock.test.js > Paso 1: preparar, actuar y comprobar > add suma unidades a las que ya había 1ms

 Test Files  1 passed (1)
      Tests  1 passed (1)
```

El test tiene tres partes, separadas por comentarios ([teoría 04](../../1-teoria/04-organizar-tests.md#1-preparar-actuar-y-comprobar)):

1. **Preparar:** un almacén con 2 lápices.
2. **Actuar:** una sola llamada, la que se prueba.
3. **Comprobar:** el `expect`.

El nombre dice qué hace la función, no cómo está escrita. Cuando falle, el nombre te dirá qué se ha roto sin abrir el archivo.

## Paso 2: Tests que dependen unos de otros

```text
 ✓ tests/stock.test.js > Paso 2: un almacén para todos los tests > add guarda un producto nuevo 0ms
 × tests/stock.test.js > Paso 2: un almacén para todos los tests > un almacén nuevo está vacío 4ms
   → expected 1 to be +0 // Object.is equality

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/stock.test.js > Paso 2: un almacén para todos los tests > un almacén nuevo está vacío
AssertionError: expected 1 to be +0 // Object.is equality

- Expected
+ Received

- 0
+ 1

 ❯ tests/stock.test.js:26:24
```

El segundo test falla sin tocar el código. Los dos usan el mismo `stock`, creado una vez para todo el `describe`, y la goma del primer test sigue ahí. Si ejecutaras solo el segundo, pasaría. Un test que pasa o falla según lo que se ejecutó antes es un test en el que no puedes confiar.

Cada test necesita su propio almacén. Cambia la línea `const stock = createStock();` del bloque por:

```js
  let stock;
  beforeEach(() => {
    stock = createStock();
  });
```

`beforeEach` ejecuta su función antes de **cada** test del `describe`: cada test recibe un almacén nuevo. `stock` se declara con `let` fuera, para que los tests lo vean, y se asigna dentro. Vuelve a ejecutar: los 3 tests pasan.

## Paso 3: describe dentro de describe

```text
 ✓ tests/stock.test.js > Paso 3: createStock > remove > quita unidades 0ms
 ✓ tests/stock.test.js > Paso 3: createStock > remove > un producto que llega a 0 desaparece 0ms
 ✓ tests/stock.test.js > Paso 3: createStock > remove > no quita más de las que hay 1ms

 Test Files  1 passed (1)
      Tests  6 passed (6)
```

- Un `describe` dentro de otro agrupa los tests de un método (`remove`) dentro de los de su objeto (`createStock`). El nombre de cada test los encadena: `createStock > remove > quita unidades`.
- El `beforeEach` de fuera vale para todos los tests de dentro: cada uno empieza con un almacén con 3 reglas. Ninguno repite la preparación.
- El tercer test comprueba dos cosas del mismo caso: que `remove` lanza el error y que, tras el error, las 3 reglas siguen ahí. Un error no debe dejar el almacén a medias.

## Paso 4: El mismo test con varios datos

```text
 ✓ tests/stock.test.js > Paso 4: shippingCost > 0.5 kg cuestan 3 € 0ms
 ✓ tests/stock.test.js > Paso 4: shippingCost > 3 kg cuestan 5 € 0ms
 ✓ tests/stock.test.js > Paso 4: shippingCost > 7 kg cuestan 7 € 0ms

 Test Files  1 passed (1)
      Tests  9 passed (9)
```

`it.each(tabla)(nombre, función)` crea un test por fila de la tabla. Cada fila es un objeto, la función lo recibe como argumento (aquí, desestructurado en `{ weight, cost }`) y `$weight` y `$cost` en el nombre se cambian por sus valores. Tres tests sin copiar tres veces el mismo código. Si uno falla, su nombre dice con qué datos.

## Paso 5: Casos límite

```text
 ✓ tests/stock.test.js > Paso 5: los límites de shippingCost > 1 kg cuestan 3 € 0ms
 ✓ tests/stock.test.js > Paso 5: los límites de shippingCost > 1.01 kg cuestan 5 € 0ms
 ✓ tests/stock.test.js > Paso 5: los límites de shippingCost > 5 kg cuestan 5 € 0ms
 ✓ tests/stock.test.js > Paso 5: los límites de shippingCost > 5.01 kg cuestan 6 € 0ms
 ✓ tests/stock.test.js > Paso 5: los límites de shippingCost > 6 kg cuestan 6 € 0ms
 ✓ tests/stock.test.js > Paso 5: los límites de shippingCost > rechaza el peso 0 0ms
 ✓ tests/stock.test.js > Paso 5: los límites de shippingCost > rechaza el peso -2 0ms
 ✓ tests/stock.test.js > Paso 5: los límites de shippingCost > rechaza el peso NaN 0ms
 × tests/stock.test.js > Paso 5: los límites de shippingCost > rechaza el peso '3' 2ms
   → expected function to throw an error, but it didn't
 ✓ tests/stock.test.js > Paso 5: los límites de shippingCost > rechaza el peso undefined 0ms

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/stock.test.js > Paso 5: los límites de shippingCost > rechaza el peso '3'
AssertionError: expected function to throw an error, but it didn't
 ❯ tests/stock.test.js:79:40
```

Los errores se esconden en los bordes. La tarifa cambia en 1 y en 5 kg, y el test prueba justo esos valores y los de al lado. Con 1 kg, ¿3 € o 5 €? El comentario de la función dice «hasta 1 kg», y el test lo confirma.

- Esta vez las filas son arrays, y el nombre usa `%s`, que se cambia por cada valor en orden.
- En la segunda tabla cada fila es un solo valor, y `%o` lo escribe tal cual es: `'3'` con comillas, porque es un texto.
- Ese es el que falla. `'3' > 0` es `true` en JavaScript, porque el texto se convierte en número al comparar, así que `shippingCost('3')` devuelve 5 en lugar de lanzar el error que promete su comentario.

Arregla `src/stock.js` para que solo acepte números:

```js
  if (typeof weight !== 'number' || !(weight > 0)) throw new RangeError('El peso debe ser mayor que 0');
```

Vuelve a ejecutar: pasan los 10 tests del paso.

## Paso 6: todo, skip y only

```text
 □ tests/stock.test.js > Paso 6: lo que falta y lo que se salta > add rechaza cantidades decimales
 ↓ tests/stock.test.js > Paso 6: lo que falta y lo que se salta > size cuenta productos, no unidades

 Test Files  1 passed (1)
      Tests  19 passed | 1 skipped | 1 todo (21)
```

- `it.todo('...')`, sin función, apunta un test que falta (`□`). Es una lista de tareas que Vitest cuenta en cada ejecución.
- `it.skip` no ejecuta el test (`↓`), aunque falle: el de este bloque espera 99. Sirve un momento, mientras arreglas otra cosa. Si se queda en el código, ese test deja de proteger nada y nadie se acuerda de por qué.

Para ejecutar solo una parte, filtra por el nombre con `-t`:

```bash
pnpm test --reporter=verbose -t remove
```

```text
 ↓ tests/stock.test.js > Paso 1: preparar, actuar y comprobar > add suma unidades a las que ya había
 ...
 ✓ tests/stock.test.js > Paso 3: createStock > remove > quita unidades 1ms
 ✓ tests/stock.test.js > Paso 3: createStock > remove > un producto que llega a 0 desaparece 0ms
 ✓ tests/stock.test.js > Paso 3: createStock > remove > no quita más de las que hay 0ms
 ↓ tests/stock.test.js > Paso 4: shippingCost > 0.5 kg cuestan 3 €
 ...

 Test Files  1 passed (1)
      Tests  3 passed | 18 skipped (21)
   Start at  03:20:08
   Duration  103ms (import 50%, transform 25%, tests 13%, worker 12%)
```

Lo mismo se consigue desde el código: cambia `describe('remove', ...)` por `describe.only('remove', ...)` y ejecuta `pnpm test --reporter=verbose` sin `-t`. Solo se ejecutan esos 3 tests (`3 passed | 17 skipped | 1 todo`). `only` ayuda mientras trabajas en un test, pero si se queda en el código, esconde todos los demás sin avisar. Quítalo.

```text
✅ Lab completado.
```

---

## Comprobación

1. Quita el `beforeEach` del paso 3 y crea el almacén dentro de cada test. ¿Qué ganas y qué pierdes? ¿Cuándo prefieres cada forma?
2. En el paso 2, ¿por qué el segundo test pasaría si lo ejecutaras solo (`-t "vacío"`)? Compruébalo.
3. Añade al paso 5 las filas que faltan para probar los dos lados del límite de 5 kg con 4.99 kg. ¿Qué otros valores raros podría recibir `shippingCost`? Prueba `Infinity`.
4. Convierte el `it.todo` del paso 6 en un test de verdad. ¿Pasa? Si no pasa, ¿el error está en el test o en `add`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Matchers](../lab-02-matchers/README.md) | [Lab 04 — Cobertura](../lab-04-cobertura/README.md) → |

[↑ Semana 25](../../README.md)
