# Lab 02 — La cadena de calidad

## Objetivo

Probar un cliente de API como el del proyecto con las tres herramientas del final del bootcamp juntas: tests unitarios con un `fetch` falso y uno de integración contra un servidor de verdad (semanas 25 y 26), un mínimo de cobertura que el script hace cumplir, y ESLint y Prettier (semana 27). Al final, un solo comando, `pnpm check`, dice si todo está bien.

**Tiempo:** 1 h · **Teoría:** [01 - Repaso de las semanas 25 a 27](../../1-teoria/01-repaso-semanas-25-27.md)

## Cómo trabajar

En la carpeta `starter`:

- [`src/notes.js`](starter/src/notes.js): `createNotesApi({ baseUrl, fetchFn })`, un cliente con `list()` y `add(text)` que recibe el `fetch` por parámetro. Tiene dos problemas que encuentra ESLint y uno de formato.
- [`src/server.js`](starter/src/server.js): una API de notas en memoria para el test de integración.
- [`tests/notes.test.js`](starter/tests/notes.test.js): un test escrito y tres bloques comentados, uno por paso.
- [`vitest.config.js`](starter/vitest.config.js): mide la cobertura de `src/notes.js` y pide un 90 % en las cuatro medidas.
- [`eslint.config.js`](starter/eslint.config.js), [`.prettierrc.json`](starter/.prettierrc.json) y el `package.json` con sus scripts: `test`, `coverage`, `lint`, `format` y `check`.

Los pasos 2 a 4 descomentan un bloque de `tests/notes.test.js`: quita las `//` de las líneas que siguen a «Paso N. Descomenta». Los pasos 5 y 6 cambian `src/notes.js`. Ejecuta cada comando desde la carpeta `starter`.

Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0, Vitest 5.1.0, ESLint 10.14.0 y Prettier 3.10.0. Cambian `Start at`, `Duration` y la ruta de `RUN`, que aquí se acorta a `.../starter`.

---

## Paso 1: Instalar y ejecutar el primer test

```bash
cd bootcamp/week-28-proyecto_final/2-practicas/lab-02-cadena-de-calidad/starter
pnpm install
```

```text
+ @vitest/coverage-v8 5.1.0
+ eslint 10.14.0
+ prettier 3.10.0
+ vitest 5.1.0
```

Son las cuatro herramientas del proyecto, en `devDependencies` y con versión exacta. Ejecuta los tests:

```bash
pnpm test
```

```text
$ vitest run

 RUN  v5.1.0 .../starter


 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  04:48:10
   Duration  161ms (import 44%, transform 42%, tests 9%, worker 5%)
```

El test de `list` no hace ninguna petición de verdad. `fakeFetch(200, [...])` es un `vi.fn` que devuelve un `Response` con ese cuerpo, y el test comprueba dos cosas: lo que devuelve `list()` y **con qué se llamó** a `fetchFn` (`toHaveBeenCalledWith`). Funciona porque `createNotesApi` recibe el `fetch` como parámetro en lugar de usar el global: es la inyección de dependencias de la [semana 27](../../../week-27-patrones_clean_code/1-teoria/04-solid.md).

## Paso 2: Lo que se envía

Descomenta el bloque del paso 2 y ejecuta otra vez `pnpm test`:

```text
 Test Files  1 passed (1)
      Tests  2 passed (2)
```

El test de `add` comprueba el método, la cabecera y el cuerpo exactos. Si `add` olvidara la cabecera `Content-Type`, este test fallaría aunque el `fetch` falso responda bien; el servidor real, en cambio, podría rechazar la petición.

## Paso 3: Un servidor de verdad

Un `fetch` falso responde lo que tú decides. Para saber si el cliente y el servidor se entienden, hace falta al menos un test contra el servidor. Descomenta el bloque del paso 3: arranca `startNotesServer()` en un puerto libre en `beforeAll`, lo para en `afterAll` y usa el `fetch` de Node, como en la [semana 26](../../../week-26-testing_vitest_parte_2/1-teoria/03-tests-de-integracion.md).

```text
 Test Files  1 passed (1)
      Tests  3 passed (3)
```

El servidor recorta los espacios (`'  Comprar pan '` → `'Comprar pan'`) y pone los `id`. Un `fetch` falso nunca te habría enseñado eso.

## Paso 4: La cobertura que falta

```bash
pnpm coverage
```

```text
$ vitest run --coverage

 RUN  v5.1.0 .../starter
      Coverage enabled with v8


 Test Files  1 passed (1)
      Tests  3 passed (3)
   Start at  04:48:34
   Duration  217ms (tests 43%, import 30%, worker 17%, transform 10%)

 % Coverage report from v8
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |   71.42 |       50 |      80 |   76.92 |                   
 notes.js |   71.42 |       50 |      80 |   76.92 | 6-8               
----------|---------|----------|---------|---------|-------------------

=============================== Coverage summary ===============================
Statements   : 71.42% ( 10/14 )
Branches     : 50% ( 1/2 )
Functions    : 80% ( 4/5 )
Lines        : 76.92% ( 10/13 )
================================================================================
ERROR: Coverage for lines (76.92%) does not meet global threshold (90%)
ERROR: Coverage for functions (80%) does not meet global threshold (90%)
ERROR: Coverage for statements (71.42%) does not meet global threshold (90%)
ERROR: Coverage for branches (50%) does not meet global threshold (90%)
[ELIFECYCLE] Command failed with exit code 1.
```

Los tres tests pasan, pero el comando falla: `thresholds` en `vitest.config.js` pide un 90 %. Las líneas 6 a 8 son el constructor de `NotesError`, y la rama que falta es el `throw`: ningún test pide algo que salga mal. Es lo que suele quedarse sin probar, y lo primero que falla en producción.

Descomenta el bloque del paso 4 y ejecuta otra vez `pnpm coverage`:

```text
      Tests  4 passed (4)

 % Coverage report from v8
No files with missing coverage.
1 file fully covered.

=============================== Coverage summary ===============================
Statements   : 100% ( 14/14 )
Branches     : 100% ( 2/2 )
Functions    : 100% ( 5/5 )
Lines        : 100% ( 13/13 )
================================================================================
```

## Paso 5: Lo que encuentra ESLint

```bash
pnpm lint
```

```text
$ eslint src tests

.../starter/src/notes.js
  14:11  error  'started' is assigned a value but never used  no-unused-vars
  17:28  error  No magic number: 400                          no-magic-numbers

✖ 2 problems (2 errors, 0 warnings)

[ELIFECYCLE] Command failed with exit code 1.
```

Los tests pasan con los dos problemas, pero los dos estorban al leer el código:

- `started` es un resto de una prueba anterior: borra la línea `const started = Date.now();`.
- `400` es un número mágico. En lugar de darle nombre, usa lo que ya trae `Response`: `response.ok` es `true` con los códigos 200 a 299. Cambia la condición por `if (!response.ok)`.

Ejecuta `pnpm lint` otra vez: solo sale la línea `$ eslint src tests`, sin ningún error. Ejecuta también `pnpm coverage`: el cambio no rompe ningún test y la cobertura sigue al 100 %.

## Paso 6: Todo junto

`pnpm check` ejecuta ESLint, después Prettier en modo comprobación y al final los tests con cobertura. Con `&&`, se para en el primero que falla:

```bash
pnpm check
```

```text
$ eslint src tests && prettier --check src tests && vitest run --coverage
Checking formatting...
[warn] src/notes.js
[warn] Code style issues found in the above file. Run Prettier with --write to fix.
[ELIFECYCLE] Command failed with exit code 1.
```

ESLint pasa, pero `src/notes.js` tiene dos líneas de más de 100 caracteres. No las partas a mano:

```bash
pnpm format
```

```text
$ prettier --write src tests
src/notes.js 37ms
src/server.js 13ms (unchanged)
tests/notes.test.js 14ms (unchanged)
```

Y otra vez `pnpm check`:

```text
$ eslint src tests && prettier --check src tests && vitest run --coverage
Checking formatting...
All matched files use Prettier code style!

 RUN  v5.1.0 .../starter
      Coverage enabled with v8


 Test Files  1 passed (1)
      Tests  4 passed (4)
   Start at  04:48:46
   Duration  272ms (tests 36%, import 28%, transform 20%, worker 16%)

 % Coverage report from v8
No files with missing coverage.
1 file fully covered.

=============================== Coverage summary ===============================
Statements   : 100% ( 14/14 )
Branches     : 100% ( 2/2 )
Functions    : 100% ( 5/5 )
Lines        : 100% ( 12/12 )
================================================================================
```

El comando termina sin error. Ahora `Lines` dice 12 y no 13: la línea de `started` ya no existe. Este es el comando que ejecutas en el proyecto antes de dar por terminado cada paso.

---

## Comprobación

1. El test de integración del paso 3 encontró algo que los tests con el `fetch` falso no podían ver. ¿Qué fue? ¿Por qué no basta con tests de integración, si encuentran más?
2. En el paso 4, ¿qué medida estaba más baja y por qué? Escribe un test que cubra todo `notes.js` pero no compruebe nada (sin `expect`). ¿Lo detecta la cobertura?
3. ¿Por qué `pnpm check` ejecuta ESLint y Prettier antes que los tests, y no al revés?
4. En el paso 5, ¿por qué `!response.ok` es mejor que `const HTTP_ERROR = 400`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — El almacén y la vista](../lab-01-almacen-y-vista/README.md) | [Proyecto — Proyecto final — Catálogo completo](../../3-proyecto/README.md) → |

[↑ Semana 28](../../README.md)
