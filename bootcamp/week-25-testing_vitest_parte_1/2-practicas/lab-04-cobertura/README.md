# Lab 04 — Cobertura

## Objetivo

Medir qué parte del código ejecutan los tests: leer el informe de cobertura en la terminal y en el navegador, incluir los archivos que ningún test importa, cubrir las ramas que faltan, fijar umbrales y comprobar que un 100 % de cobertura no garantiza que los tests comprueben algo.

**Tiempo:** 55 min · **Teoría:** [05 - Cobertura](../../1-teoria/05-cobertura.md)

## Cómo trabajar

[`starter/src/grades.js`](starter/src/grades.js) convierte notas de 0 a 10 en calificaciones y calcula medias. [`starter/src/report.js`](starter/src/report.js) escribe un informe con ellas. [`starter/tests/grades.test.js`](starter/tests/grades.test.js) ya trae dos tests y un bloque para descomentar en el paso 4. En los pasos 3, 5 y 6 creas o cambias archivos con el contenido que se indica.

El `package.json` trae, además de `vitest`, `@vitest/coverage-v8` en la misma versión: es lo que mide la cobertura. Y un script `coverage`, que ejecuta `vitest run --coverage`. Una sola vez, instala las dependencias:

```bash
cd bootcamp/week-25-testing_vitest_parte_1/2-practicas/lab-04-cobertura/starter
pnpm install
```

Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0 y Vitest 5.1.0. Se muestran desde la línea `Tests`, sin `Start at` ni `Duration`. La cabecera de la tabla (`% Coverage report from v8`) sale en color en tu terminal.

---

## Paso 1: El primer informe

```bash
pnpm coverage
```

```text
      Tests  2 passed (2)

 % Coverage report from v8
-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------|---------|----------|---------|---------|-------------------
All files  |   53.84 |    46.15 |     100 |   57.14 |
 grades.js |   53.84 |    46.15 |     100 |   57.14 | 7-9
-----------|---------|----------|---------|---------|-------------------

=============================== Coverage summary ===============================
Statements   : 53.84% ( 7/13 )
Branches     : 46.15% ( 6/13 )
Functions    : 100% ( 3/3 )
Lines        : 57.14% ( 4/7 )
================================================================================
```

Las cuatro columnas cuentan qué se ejecutó al menos una vez durante los tests ([teoría 05](../../1-teoria/05-cobertura.md#2-las-cuatro-medidas)):

- **Stmts** (sentencias): cada instrucción, como un `return` o un `throw`.
- **Branch** (ramas): cada camino de un `if`, un `? :`, un `||`...
- **Funcs**: las funciones, incluida la flecha que recibe `reduce`.
- **Lines**: las líneas con código.

Las líneas 7 a 9 (`Notable`, `Aprobado`, `Suspenso`) no se ejecutan nunca: el único test de `toGrade` usa un 9,5. Las funciones salen al 100 % porque basta con llamar a cada una una vez. Las ramas, en cambio, se quedan en 6 de 13: el `throw`, las calificaciones y la media vacía no se recorren nunca.

## Paso 2: El informe en el navegador

`pnpm coverage` ha creado la carpeta `coverage/`. Abre `coverage/index.html` en el navegador con doble clic y entra en `grades.js`:

- Las líneas en **rojo** no se ejecutaron.
- Una **I** o una **E** amarillas al lado de un `if` marcan la rama que nunca se tomó: la del `if` o la del `else`.
- El número de la izquierda de cada línea (`1x`, `2x`) dice cuántas veces se ejecutó.

Busca la rama de `average` que falta: es el `null` de cuando no hay notas. La carpeta `coverage/` se vuelve a escribir en cada `pnpm coverage` y no se sube a git (ya está en el `.gitignore` del repo).

## Paso 3: Los archivos que ningún test importa

El informe del paso 1 no dice nada de `report.js`. No es que esté cubierto: es que, por defecto, Vitest solo mide los archivos que algún test importa. Crea `vitest.config.js` junto al `package.json`:

```js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**/*.js'],
    },
  },
});
```

`include` dice qué archivos cuentan para la cobertura, los importe algún test o no. Vuelve a ejecutar `pnpm coverage`:

```text
-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------|---------|----------|---------|---------|-------------------
All files  |   43.75 |    46.15 |      60 |      50 |
 grades.js |   53.84 |    46.15 |     100 |   57.14 | 7-9
 report.js |       0 |      100 |       0 |       0 | 4
-----------|---------|----------|---------|---------|-------------------
```

`report.js` aparece con un 0 %. Sin `include`, un archivo sin ningún test no baja la cobertura total: justo el que más la necesita.

## Paso 4: Cubrir las ramas

Descomenta el bloque del paso 4 en `tests/grades.test.js` y ejecuta `pnpm coverage`:

```text
      Tests  9 passed (9)

 % Coverage report from v8
-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------|---------|----------|---------|---------|-------------------
All files  |   81.25 |      100 |      60 |    87.5 |
 report.js |       0 |      100 |       0 |       0 | 4
-----------|---------|----------|---------|---------|-------------------
```

Los tests nuevos recorren las tres calificaciones que faltaban, los tres motivos del `throw` (menor que 0, mayor que 10 y un texto) y la media sin notas. `grades.js` ha desaparecido de la tabla: la tabla solo enseña los archivos a los que les falta algo. El 100 % de ramas del total es de `grades.js`, porque `report.js` no tiene ninguna rama.

## Paso 5: Umbrales

Un umbral convierte la cobertura en una condición: si no se llega, `pnpm coverage` falla. Añade `thresholds` a `vitest.config.js`:

```js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**/*.js'],
      thresholds: {
        lines: 90,
        branches: 90,
        functions: 90,
        statements: 90,
      },
    },
  },
});
```

```bash
pnpm coverage
```

```text
...
Lines        : 87.5% ( 7/8 )
================================================================================
ERROR: Coverage for lines (87.5%) does not meet global threshold (90%)
ERROR: Coverage for functions (60%) does not meet global threshold (90%)
ERROR: Coverage for statements (81.25%) does not meet global threshold (90%)
[ELIFECYCLE] Command failed with exit code 1.
```

Los 9 tests pasan, pero el comando termina con error porque `report.js` deja tres medidas por debajo del 90 %. Así, quien añada código sin tests se entera en cuanto ejecuta la cobertura, y no meses después. Las ramas no salen en la lista porque están al 100 %.

## Paso 6: Cobertura sin comprobaciones

Crea `tests/report.test.js` con un test que llama a `formatReport` y no comprueba nada:

```js
import { it } from 'vitest';
import { formatReport } from '../src/report.js';

it('formatReport', () => {
  formatReport([5, 9]);
});
```

```bash
pnpm coverage
```

```text
      Tests  10 passed (10)

 % Coverage report from v8
No files with missing coverage.
2 files fully covered.

=============================== Coverage summary ===============================
Statements   : 100% ( 16/16 )
Branches     : 100% ( 13/13 )
Functions    : 100% ( 5/5 )
Lines        : 100% ( 8/8 )
================================================================================
```

100 % en todo y los umbrales se cumplen. Ahora rompe el código a propósito, con dos cambios:

- En `src/grades.js`, cambia `score >= 9` por `score > 9`: un 9 deja de ser sobresaliente.
- En `src/report.js`, cambia `.join('\n')` por `.join(', ')`.

Ejecuta `pnpm test`:

```text
      Tests  10 passed (10)
```

Todo sigue pasando con dos errores dentro. La cobertura dice qué código **se ejecutó**, no qué código **se comprobó**:

- El test de `formatReport` no tiene ningún `expect`.
- Ningún test usa un 9 justo: el 9,5 da lo mismo con `>=` que con `>`.

Escribe los dos tests que faltan. En `tests/report.test.js`, el test con su comprobación (y `expect` en el `import`):

```js
import { it, expect } from 'vitest';
import { formatReport } from '../src/report.js';

it('formatReport escribe una línea por nota', () => {
  expect(formatReport([5, 9])).toBe('5: Aprobado\n9: Sobresaliente');
});
```

Y en `describe('toGrade')` de `tests/grades.test.js`, el límite:

```js
  it('una nota de 9 es sobresaliente', () => {
    expect(toGrade(9)).toBe('Sobresaliente');
  });
```

Con el código todavía roto, `pnpm test` encuentra los dos errores:

```text
AssertionError: expected 'Notable' to be 'Sobresaliente' // Object.is equality
AssertionError: expected '5: Aprobado, 9: Notable' to be '5: Aprobado\n9: Sobresaliente' // Object.is equality
      Tests  2 failed | 9 passed (11)
```

Deshaz los dos cambios de `src/` y vuelve a ejecutar `pnpm coverage`: 11 tests pasan y los dos archivos quedan cubiertos al 100 %. Esto que acabas de hacer, romper el código a propósito para ver si algún test lo detecta, es lo que hacen las comprobaciones del [proyecto](../../3-proyecto/README.md).

```text
✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, `Functions` estaba al 100 % y `Branch` al 46 %. ¿Cómo puede ser? ¿Cuál de las dos medidas dice más sobre los tests?
2. ¿Qué pasaría en el paso 5 si quitaras `include` de `vitest.config.js`? Pruébalo.
3. En el paso 4 los tests prueban 8, 6 y 2. ¿Qué cambios en `toGrade` sobrevivirían a esos tests con un 100 % de cobertura? Escribe uno y compruébalo.
4. ¿Por qué un umbral del 100 % no basta para que un proyecto tenga buenos tests? ¿Qué más pedirías?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Organizar los tests](../lab-03-organizar-tests/README.md) | [Proyecto — Proyecto — Tests del catálogo](../../3-proyecto/README.md) → |

[↑ Semana 25](../../README.md)
