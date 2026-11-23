# Lab 01 — Tu primer test

## Objetivo

Probar un módulo de tres formas: mirando lo que escribe, con `node:assert` y con Vitest. Por el camino creas un `package.json`, instalas Vitest con una versión exacta, lees un test que falla y encuentras un error con un test.

**Tiempo:** 50 min · **Teoría:** [01 - Por qué escribir tests](../../1-teoria/01-por-que-tests.md) y [02 - Vitest](../../1-teoria/02-vitest.md)

## Cómo trabajar

[`starter/src/cart.js`](starter/src/cart.js) es un carrito de la compra con tres funciones: `lineTotal` multiplica el precio de una línea por su cantidad, `cartTotal` suma las líneas y `applyDiscount` aplica un descuento. Lo pruebas con dos archivos:

- [`starter/check.js`](starter/check.js), pasos 1 y 2, que se ejecuta con Node.
- [`starter/tests/cart.test.js`](starter/tests/cart.test.js), pasos 4 a 6, que ejecuta Vitest.

En cada paso, descomenta el bloque del paso (`Ctrl+/` o `Cmd+/`) y ejecuta el comando que se indica. Todos los comandos se ejecutan dentro de `starter/`:

```bash
cd bootcamp/week-25-testing_vitest_parte_1/2-practicas/lab-01-primer-test/starter
```

Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0 y Vitest 5.1.0. Dos líneas de Vitest cambian en cada ejecución: `Start at` (la hora) y `Duration` (lo que tardó). La línea `RUN` muestra la carpeta del proyecto en tu equipo; aquí aparece acortada con `…`.

---

## Paso 1: Mirar el resultado

```bash
node check.js
```

```text
--- Paso 1: Mirar el resultado ---
  lineTotal de la primera línea: 25 (esperado: 25)
  cartTotal: 28 (esperado: 28)
  cartTotal de un carrito vacío: 0 (esperado: 0)
```

Funciona, pero eres tú quien compara cada número con lo esperado. Con tres valores se puede; con cien, tras cada cambio, se te escaparía alguno.

## Paso 2: Que lo compruebe el programa

```bash
node check.js
```

```text
--- Paso 1: Mirar el resultado ---
  lineTotal de la primera línea: 25 (esperado: 25)
  cartTotal: 28 (esperado: 28)
  cartTotal de un carrito vacío: 0 (esperado: 0)
--- Paso 2: node:assert ---
  3 comprobaciones correctas
node:internal/modules/run_main:107
    triggerUncaughtException(
    ^

AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

90 !== 80

    at file:///…/lab-01-primer-test/starter/check.js:22:8
    ...
  code: 'ERR_ASSERTION',
  actual: 90,
  expected: 80,
  operator: 'strictEqual',
  diff: 'simple'
}

Node.js v24.19.0
```

- `assert.equal(actual, esperado)` no escribe nada si los dos valores son iguales y lanza un `AssertionError` si no lo son. Ahora es el programa quien compara.
- La cuarta comprobación está mal a propósito: el 10 % de 100 deja 90, no 80. El error dice qué valor salió (`actual: 90`), cuál se esperaba (`expected: 80`) y en qué línea (`check.js:22`).
- La última línea del paso no se escribe: **la primera comprobación que falla detiene el programa**, y no sabes si las siguientes habrían pasado. Además, `node check.js` termina con código 1 (error), y no hay ningún resumen de cuántas pasaron.

Cambia `80` por `90` y vuelve a ejecutar: ahora salen las dos líneas del paso 2. Para lo que falta (seguir tras un fallo, un resumen, ver las diferencias) existe Vitest.

## Paso 3: Instalar Vitest

1. Crea el `package.json`:

   ```bash
   pnpm init
   ```

   pnpm escribe el archivo y lo enseña. Entre otras cosas trae `"type": "module"`, que hace que Node lea los `.js` como módulos ES, y `packageManager`, la versión de pnpm de este proyecto ([teoría 02](../../1-teoria/02-vitest.md#1-el-packagejson)).

2. Abre `package.json` y cambia dos cosas:
   - La versión de pnpm, en `packageManager` y en `devEngines.packageManager.version`, por la del curso: `12.20.0`. `pnpm init` escribe la más reciente que conoce, que cambia según el día.
   - El script `test`, por `"vitest run"`.

3. Instala Vitest como dependencia de desarrollo con una versión exacta:

   ```bash
   pnpm add -D --save-exact vitest@5.1.0
   ```

   ```text
   Packages: +35
   +++++++++++++++++++++++++++++++++++
   Progress: resolved 35, reused 41, downloaded 0, added 35, done

   devDependencies:
   + vitest 5.1.0

   Done in 309ms using pnpm v12.20.0
   ```

   La primera vez verás también las líneas de descarga, y los números de `reused` y `downloaded` dependen de lo que ya tengas en tu equipo. Lo que debe coincidir es `+ vitest 5.1.0` y `using pnpm v12.20.0`.

4. Comprueba el final del `package.json`:

   ```json
     "packageManager": "pnpm@12.20.0",
     "type": "module",
     "devDependencies": {
       "vitest": "5.1.0"
     }
   }
   ```

   `"5.1.0"`, sin `^` delante: con `--save-exact`, quien instale el proyecto tendrá esta versión y ninguna otra. Han aparecido `node_modules/`, donde está Vitest, y `pnpm-lock.yaml`, que fija también las versiones de sus dependencias.

5. Ejecuta los tests, aunque todavía no haya ninguno:

   ```bash
   pnpm test
   ```

   ```text
   $ vitest run

    RUN  v5.1.0 …/lab-01-primer-test/starter

    ❯ tests/cart.test.js (0 test)

   ⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯

    FAIL  tests/cart.test.js [ tests/cart.test.js ]
   Error: No test suite found in file …/lab-01-primer-test/starter/tests/cart.test.js
   ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


    Test Files  1 failed (1)
         Tests  no tests
      Start at  03:16:07
      Duration  138ms (transform 64%, import 26%, worker 10%)

   [ELIFECYCLE] Test failed. See above for more details.
   ```

   Vitest ha encontrado `tests/cart.test.js` él solo, porque termina en `.test.js`. Como todo está comentado, no hay ningún test, y eso cuenta como fallo.

## Paso 4: El primer test

```bash
pnpm test
```

```text
$ vitest run

 RUN  v5.1.0 …/lab-01-primer-test/starter


 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  03:16:16
   Duration  128ms (transform 53%, import 29%, worker 10%, tests 8%, environment 1%)
```

Los dos tests pasan. Cuando todo va bien, Vitest solo da el resumen. Para ver cada test por su nombre, añade el reporter `verbose`. Lo que va después de `pnpm test` se le pasa a `vitest run`:

```bash
pnpm test --reporter=verbose
```

```text
$ vitest run --reporter=verbose

 RUN  v5.1.0 …/lab-01-primer-test/starter

 ✓ tests/cart.test.js > cartTotal > suma el importe de todas las líneas 1ms
 ✓ tests/cart.test.js > cartTotal > un carrito vacío vale 0 0ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  03:16:27
   Duration  112ms (import 44%, transform 26%, worker 16%, tests 13%)
```

Cada línea es archivo `>` `describe` `>` `it`. Así se lee el bloque que has descomentado: `describe('cartTotal', ...)` agrupa los tests de una función, cada `it('...', () => { ... })` es un test con su nombre, y `expect(valor).toBe(esperado)` es la comprobación.

## Paso 5: Un test que falla

```bash
pnpm test
```

```text
 ❯ tests/cart.test.js (3 tests | 1 failed) 7ms
   ❯ lineTotal (1)
     × multiplica el precio por la cantidad 4ms

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/cart.test.js > lineTotal > multiplica el precio por la cantidad
AssertionError: expected 25 to be 24 // Object.is equality

- Expected
+ Received

- 24
+ 25

 ❯ tests/cart.test.js:23:33
     21| describe('lineTotal', () => {
     22|   it('multiplica el precio por la cantidad', () => {
     23|     expect(lineTotal(lines[0])).toBe(24);
       |                                 ^
     24|   });
     25| });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed (1)
      Tests  1 failed | 2 passed (3)
   Start at  03:16:16
   Duration  140ms (transform 46%, import 27%, tests 18%, worker 9%)

[ELIFECYCLE] Test failed. See above for more details.
```

Lee el fallo de arriba abajo:

1. **Qué test:** `lineTotal > multiplica el precio por la cantidad`, marcado con `×`. Los otros dos siguen pasando (`2 passed`): un fallo no detiene los demás tests.
2. **Qué pasó:** `expected 25 to be 24`. La función devolvió 25 y el test esperaba 24. `// Object.is equality` dice cómo compara `toBe` ([teoría 03](../../1-teoria/03-matchers.md#1-tobe-el-mismo-valor)).
3. **La diferencia:** en rojo con `-` lo esperado (`Expected`), en verde con `+` lo recibido (`Received`).
4. **Dónde:** `tests/cart.test.js:23:33`, con el código alrededor y una flecha en el `toBe`.

12,5 por 2 son 25: el código está bien y **el error está en el test**. Pasa a menudo. Ante un test que falla, piensa primero cuál de los dos tiene razón. Cambia `24` por `25` y vuelve a ejecutar: 3 tests pasan.

## Paso 6: Un test que encuentra un error

```bash
pnpm test
```

```text
 ❯ tests/cart.test.js (5 tests | 1 failed) 7ms
   ❯ applyDiscount (2)
     × nunca deja el total por debajo de 0 4ms

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/cart.test.js > applyDiscount > nunca deja el total por debajo de 0
AssertionError: expected -10 to be +0 // Object.is equality

- Expected
+ Received

- 0
+ -10

 ❯ tests/cart.test.js:33:36
     31|   });
     32|   it('nunca deja el total por debajo de 0', () => {
     33|     expect(applyDiscount(50, 120)).toBe(0);
```

Ahora quien se equivoca es el código. El comentario de `applyDiscount` promete que el total nunca queda por debajo de 0, y con un descuento del 120 % da −10. El `+0` del mensaje es el 0 normal: `Object.is` distingue `0` de `-0` y Vitest escribe el signo para que no los confundas.

Arregla `src/cart.js` para que cumpla lo que promete:

```js
export const applyDiscount = (total, percent) => Math.max(0, total - (total * percent) / 100);
```

`Math.max(0, x)` devuelve `x`, o 0 si `x` es negativo. Vuelve a ejecutar con `pnpm test --reporter=verbose`:

```text
 ✓ tests/cart.test.js > cartTotal > suma el importe de todas las líneas 1ms
 ✓ tests/cart.test.js > cartTotal > un carrito vacío vale 0 0ms
 ✓ tests/cart.test.js > lineTotal > multiplica el precio por la cantidad 0ms
 ✓ tests/cart.test.js > applyDiscount > aplica el tanto por ciento 0ms
 ✓ tests/cart.test.js > applyDiscount > nunca deja el total por debajo de 0 0ms

 Test Files  1 passed (1)
      Tests  5 passed (5)
   Start at  03:16:28
   Duration  124ms (transform 52%, import 31%, worker 9%, tests 8%)

✅ Lab completado.
```

Desde ahora, si alguien vuelve a romper `applyDiscount`, este test lo dirá en cuanto se ejecute.

Para terminar, prueba el **modo watch**. Ejecuta `pnpm vitest`, sin `run`: Vitest pasa los tests y se queda esperando. Cambia el `25` del paso 5 por `26` y guarda. Los tests se vuelven a ejecutar solos y el de `lineTotal` falla. Deja el `25`, guarda otra vez y pulsa `q` para salir.

---

## Comprobación

1. En el paso 2, ¿qué ventajas tiene `node:assert` frente a mirar lo que escribe `console.log`? ¿Qué le falta comparado con Vitest?
2. ¿Por qué `vitest` va en `devDependencies` y con `--save-exact`? ¿Qué pasaría en otro equipo si el `package.json` dijera `"^5.1.0"`?
3. En el paso 5 el error estaba en el test y en el paso 6 en el código. ¿Cómo decidiste en cada caso cuál de los dos tenía razón?
4. Añade a `describe('cartTotal')` un test para un carrito con una sola línea de cantidad 0. ¿Qué esperas que devuelva? Ejecútalo.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Matchers](../lab-02-matchers/README.md) → |

[↑ Semana 25](../../README.md)
