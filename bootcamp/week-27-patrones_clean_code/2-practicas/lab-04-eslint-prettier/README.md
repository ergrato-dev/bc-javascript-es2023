# Lab 04 — ESLint y Prettier

## Objetivo

Instalar ESLint y Prettier con pnpm en un proyecto, leer lo que encuentra ESLint, arreglar a mano los errores de verdad, dejar que `--fix` arregle lo automático, refactorizar lo que incumple los límites de clean code, dar formato con Prettier y juntarlo todo en un script.

**Tiempo:** 55 min · **Teoría:** [05 - Code smells, refactorizar y herramientas](../../1-teoria/05-refactorizar-y-herramientas.md)

## Cómo trabajar

[`starter/src/products.js`](starter/src/products.js) tiene cinco funciones de una tienda, y [`starter/index.js`](starter/index.js) las usa. En la carpeta `starter` también están la configuración de ESLint ([`eslint.config.js`](starter/eslint.config.js)), la de Prettier ([`.prettierrc.json`](starter/.prettierrc.json) y [`.prettierignore`](starter/.prettierignore)) y el `package.json` con sus scripts. Léelos antes de empezar: cada regla tiene un comentario que dice qué hace.

En este lab no se descomenta nada: cambias `src/products.js` y ejecutas el comando de cada paso desde la carpeta `starter`. Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0, ESLint 10.14.0 y Prettier 3.10.0. Las rutas absolutas de las salidas se han acortado a `.../starter`.

---

## Paso 1: Instalar y ejecutar

```bash
cd bootcamp/week-27-patrones_clean_code/2-practicas/lab-04-eslint-prettier/starter
pnpm install
```

```text
+ eslint 10.14.0
+ prettier 3.10.0
```

Las dos están en `devDependencies` con versión exacta, como Vitest: son herramientas del desarrollo, no partes del programa. Si las añadieras tú a un proyecto, sería con `pnpm add --save-dev --save-exact eslint@10.14.0 prettier@3.10.0`.

Ejecuta el programa:

```bash
pnpm start
```

```text
{ escritura: 2, papel: 1 }
Goma · 0.97 € · quedan pocas
file:///.../starter/src/products.js:22
    totl += product.stock;
    ^

ReferenceError: totl is not defined
    at totalStock (file:///.../starter/src/products.js:22:5)
```

Las dos primeras funciones van bien; la tercera tiene una errata. JavaScript solo la descubre al ejecutar esa línea. Si `totalStock` se llamara solo en un caso raro, el error podría llegar a producción.

## Paso 2: Lo que encuentra ESLint

```bash
pnpm lint
```

```text
.../starter/src/products.js
   2:1   error  Unexpected var, use let or const instead                            no-var
   3:7   error  'DEBUG' is assigned a value but never used                          no-unused-vars
   6:7   error  'result' is never reassigned. Use 'const' instead                   prefer-const
  11:7   error  'counts' is never reassigned. Use 'const' instead                   prefer-const
  13:34  error  Expected '===' and instead saw '=='                                 eqeqeq
  20:7   error  'total' is never reassigned. Use 'const' instead                    prefer-const
  22:5   error  'totl' is not defined                                               no-undef
  30:7   error  Blocks are nested too deeply (3). Maximum allowed is 2              max-depth
  43:8   error  Function 'label' has too many parameters (4). Maximum allowed is 3  max-params

✖ 9 problems (9 errors, 0 warnings)
  4 errors and 0 warnings potentially fixable with the `--fix` option.
```

ESLint ha leído el código **sin ejecutarlo** y ha encontrado la errata de la línea 22 (`no-undef`). Cada línea dice dónde está el problema (`línea:columna`), qué pasa y qué regla lo detecta.

Arregla a mano los tres que son errores de verdad o código que sobra:

1. Línea 3: borra `const DEBUG = true;`, que nadie usa.
2. Línea 13: cambia `== undefined` por `=== undefined`. Con `==`, `null` también contaría como `undefined`; aquí da igual, pero `===` no tiene sorpresas.
3. Línea 22: cambia `totl` por `total`.

```bash
pnpm lint
```

```text
   2:1  error  Unexpected var, use let or const instead                            no-var
   5:7  error  'result' is never reassigned. Use 'const' instead                   prefer-const
  10:7  error  'counts' is never reassigned. Use 'const' instead                   prefer-const
  29:7  error  Blocks are nested too deeply (3). Maximum allowed is 2              max-depth
  42:8  error  Function 'label' has too many parameters (4). Maximum allowed is 3  max-params

✖ 5 problems (5 errors, 0 warnings)
  3 errors and 0 warnings potentially fixable with the `--fix` option.
```

El aviso de `'total' is never reassigned` también ha desaparecido: era otro síntoma de la errata, porque `total` nunca se sumaba. Y `pnpm start` ya funciona:

```text
{ escritura: 2, papel: 1 }
Goma · 0.97 € · quedan pocas
Unidades: 43
```

## Paso 3: Lo que ESLint arregla solo

```bash
pnpm lint --fix
```

```text
$ eslint . --fix

  29:7  error  Blocks are nested too deeply (3). Maximum allowed is 2              max-depth
  42:8  error  Function 'label' has too many parameters (4). Maximum allowed is 3  max-params

✖ 2 problems (2 errors, 0 warnings)
```

`pnpm lint --fix` pasa `--fix` al final del script, y ESLint reescribe lo que tiene un arreglo seguro: `var TAX` y los dos `let` que no se reasignan pasan a `const`. Mira el principio de `src/products.js`:

```js
const TAX = 0.21

export function priceWithTax(price) {
  const result = price + price*TAX;
  return Math.round(result * 100) / 100
}
```

Las dos que quedan no tienen arreglo automático: piden cambiar el diseño de una función.

## Paso 4: Los límites de clean code

`stockStatus` anida tres `if` y `label` recibe cuatro parámetros, tres de ellos booleanos. Cambia las dos funciones por:

```js
export function stockStatus(product) {
  if (!product.active) return "retirado";
  if (product.stock <= 0) return "agotado";
  if (product.stock < 5) return "quedan pocas";
  return "disponible";
}

export function label(product, { withPrice, withStock, uppercase } = {}) {
  let text = product.name;
  if (withPrice) text = text + ' · ' + priceWithTax(product.price) + ' €';
  if (withStock) text = text + ' · ' + stockStatus(product);
  if (uppercase) text = text.toUpperCase();
  return text;
}
```

```bash
pnpm lint
```

```text
  33:8  error  Function 'label' has a complexity of 5. Maximum allowed is 4  complexity
```

- `stockStatus` ya pasa: con **cláusulas de guarda**, cada caso sale en su línea y no queda nada anidado. Hace lo mismo que antes, también con unidades negativas (`<= 0`).
- `label` recibe ahora un objeto de opciones, pero salta otra regla. `complexity` cuenta los caminos posibles de una función: uno de base, uno por cada `if` y uno por el valor por defecto `= {}`. Son 5, y el límite es 4.

`uppercase` no hace falta como opción: quien quiera mayúsculas puede escribir `label(product).toUpperCase()`. Quítala, y de paso junta las partes con `join`:

```js
export function label(product, { withPrice, withStock } = {}) {
  const parts = [product.name];
  if (withPrice) parts.push(priceWithTax(product.price) + ' €');
  if (withStock) parts.push(stockStatus(product));
  return parts.join(' · ');
}
```

La llamada de `index.js` también cambia. Cambia `label(products[1], true, true, false)` por:

```js
console.log(label(products[1], { withPrice: true, withStock: true }));
```

```bash
pnpm lint && pnpm start
```

```text
$ eslint .
$ node index.js
{ escritura: 2, papel: 1 }
Goma · 0.97 € · quedan pocas
Unidades: 43
```

ESLint no dice nada: cero problemas. El programa escribe lo mismo que en el paso 2.

## Paso 5: Prettier

Mira `src/products.js`: hay líneas sin `;`, comillas simples y dobles mezcladas, y `price*TAX` sin espacios. ESLint no se queja de nada de eso: es formato, el trabajo de Prettier.

```bash
pnpm format:check
```

```text
$ prettier --check .
Checking formatting...
[warn] src/products.js
[warn] Code style issues found in the above file. Run Prettier with --write to fix.
```

`--check` solo comprueba. `pnpm format` reescribe:

```bash
pnpm format
```

```text
$ prettier --write .
.prettierrc.json 15ms (unchanged)
eslint.config.js 13ms (unchanged)
index.js 7ms (unchanged)
package.json 2ms (unchanged)
src/products.js 10ms
```

Lo que ha cambiado en `src/products.js`:

```text
< const TAX = 0.21
> const TAX = 0.21;
<   const result = price + price*TAX;
<   return Math.round(result * 100) / 100
>   const result = price + price * TAX;
>   return Math.round(result * 100) / 100;
<   if (!product.active) return "retirado";
>   if (!product.active) return 'retirado';
```

(Y lo mismo en las otras tres líneas de `stockStatus`.) Prettier no ha tocado lo que el código hace, solo cómo se ve.

- `.prettierrc.json` pide comillas simples (`singleQuote`) y líneas de 100 caracteres como mucho (`printWidth`). Todo lo demás, Prettier lo decide.
- `pnpm-lock.yaml` no aparece en la lista porque está en `.prettierignore`: lo escribe pnpm, y si Prettier lo reformatea, el siguiente `pnpm install` lo vuelve a escribir a su manera.

## Paso 6: Todo junto

El `package.json` tiene un script que ejecuta los dos:

```json
"check": "eslint . && prettier --check ."
```

```bash
pnpm check
```

```text
$ eslint . && prettier --check .
Checking formatting...
All matched files use Prettier code style!
```

`&&` ejecuta Prettier solo si ESLint termina sin errores, y `pnpm check` falla si falla cualquiera de los dos. Es el comando que se ejecuta antes de cada commit o en la integración continua, para que el código con problemas no llegue al repositorio.

```text
✅ Lab completado.
```

---

## Comprobación

1. Escribe `if (product.stock = 0)` (un solo `=`) en `stockStatus` y ejecuta `pnpm lint`. ¿Lo detecta alguna regla de la configuración? Busca en la documentación de ESLint la regla `no-cond-assign` y añádela.
2. Baja `complexity` a 3 en `eslint.config.js`. ¿Qué funciones fallan? ¿Las cambiarías o subirías el límite? ¿Por qué?
3. Cambia `printWidth` a 60 y ejecuta `pnpm format`. ¿Qué líneas cambian? Deja el valor como estaba y vuelve a formatear.
4. Instala en tu editor las extensiones de ESLint y de Prettier y activa «formatear al guardar». Escribe una función con `var` y comillas dobles y guarda. ¿Qué pasa?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Refactorizar con tests](../lab-03-refactorizar-con-tests/README.md) | [Proyecto — Proyecto — Refactorización de código legacy](../../3-proyecto/README.md) → |

[↑ Semana 27](../../README.md)
