# Proyecto — Tests del catálogo

## Objetivo

Escribir los tests de siete funciones de utilidad de un catálogo: `normalize`, `formatNumber`, `paginate`, `search`, `sortBy`, `validate` y `summarize`. Las funciones ya están escritas y funcionan; **tu trabajo son los tests**. Los datos de prueba salen de tu catálogo, el del dominio que te asigna el instructor.

**Tiempo:** 2 h

Al terminar, tus tests:

- Pasan todos.
- Cubren el 100 % de `src/logic.js`.
- Detectan los siete errores que las comprobaciones meten a propósito en `src/logic.js`, uno por función ([teoría 05](../1-teoria/05-cobertura.md#5-lo-que-la-cobertura-no-mide)).

## Qué hay en el starter

```text
starter/
├── package.json        # vitest y @vitest/coverage-v8 5.1.0; scripts test y coverage
├── pnpm-lock.yaml
├── vitest.config.js    # cobertura de src/, en la terminal y en HTML
├── src/
│   ├── data.js         # FIELDS y SEED del ejemplo Planetario: lo cambias por tu dominio
│   └── logic.js        # las siete funciones, terminadas: no se cambia
└── tests/
    └── logic.test.js   # 29 casos con it.todo: los conviertes en tests
```

Cada función de `logic.js` tiene encima un comentario que dice qué hace, qué devuelve en los casos raros y un ejemplo con su resultado real. **Esos comentarios son la especificación**: los tests comprueban que el código cumple lo que promete. `logic.js` no se toca. Si un test tuyo falla, el error está en el test.

---

## Paso 1: Preparar el proyecto

Copia el starter a una carpeta tuya fuera del repositorio, instala y ejecuta los tests:

```bash
cp -r bootcamp/week-25-testing_vitest_parte_1/3-proyecto/starter ~/js-proyecto-semana-25
cd ~/js-proyecto-semana-25
pnpm install
pnpm test
```

```text
 Test Files  1 skipped (1)
      Tests  29 todo (29)
```

Los 29 casos son `it.todo`: Vitest los cuenta, pero no ejecuta nada. Lee `src/logic.js` entero antes de seguir.

## Paso 2: Tu catálogo en data.js

Cambia `FIELDS` y `SEED` de `src/data.js` por los de tu dominio, con las reglas de su comentario:

- De 3 a 8 campos. El primero, de tipo `text` y obligatorio. Al menos uno de tipo `number`, para `summarize` y `sortBy`.
- Reglas con sentido: `minLength` en los textos que lo necesiten y `min`/`max` reales en los números (un año entre 1000 y 2026, una nota de 0 a 10).
- De 8 a 30 fichas reales que cumplan esas reglas, sin repetir el primer campo.

Tus tests usarán estas fichas como datos de prueba. Elige valores que te sirvan: dos fichas que compartan una palabra, una con tildes o mayúsculas, números con decimales.

## Paso 3: El primer test, el de data.js

Empieza por el último `describe`. Cambia su `it.todo` por un `it.each` que compruebe cada ficha con `validate`:

```js
describe('data.js', () => {
  // validate recibe textos, como los de un formulario.
  const asText = (item) => Object.fromEntries(Object.entries(item).map(([key, value]) => [key, String(value)]));

  it.each(SEED)('$name cumple las reglas de FIELDS', (item) => {
    expect(validate(asText(item), FIELDS).errors).toEqual({});
  });
});
```

En `$name`, cambia `name` por el nombre de tu primer campo. Con los datos del Planetario:

```bash
pnpm test --reporter=verbose
```

```text
 ✓ tests/logic.test.js > data.js > Sirio cumple las reglas de FIELDS 1ms
 ✓ tests/logic.test.js > data.js > Vega cumple las reglas de FIELDS 0ms
 ...
 Test Files  1 passed (1)
      Tests  10 passed | 28 todo (38)
```

Un test por ficha. Si una ficha de tu catálogo no cumple sus reglas, su nombre aparece con `×` y el fallo dice qué campo. Mueve `asText` arriba del todo del archivo: también te hará falta en el paso 9.

En los pasos 4 a 10 cambias cada `it.todo` de una función por un `it` con su `expect`. **No cambies los nombres de los casos**: las comprobaciones los buscan tal cual. Puedes añadir más casos y varios `expect` en cada uno. Después de cada paso, ejecuta `pnpm test`.

## Paso 4: normalize

Prueba con textos de tu catálogo y con textos raros: tildes en mayúsculas (`'ÓRBITA'`), la `ñ` y la `ü`, espacios a los lados, varios espacios o un salto de línea entre palabras, `null` y `undefined`. `toBe` basta: devuelve un texto.

Las comprobaciones cambian `.toLowerCase()` por `.toString()` en `logic.js`. Con ese cambio, algún test tuyo debe fallar.

## Paso 5: formatNumber

`Intl.NumberFormat('es-ES')` tiene una sorpresa: **un número de 4 cifras no lleva punto de miles** (`1234` → `'1234'`), y uno de 5 sí (`12345` → `'12.345'`). Pruébalos los dos, y también un negativo, un número que se redondee a 2 decimales y otro con un solo decimal. Para el `'—'`, prueba `NaN`, `Infinity`, un texto con cifras y `null`.

Mutante: `maximumFractionDigits: 0`, que deja de escribir decimales.

## Paso 6: paginate

Usa un array pequeño escrito en el test (cinco letras, por ejemplo) y tu `SEED`. Comprueba el objeto entero con `toEqual` al menos una vez, y piezas sueltas (`.items`, `.page`, `.pages`) en el resto. Casos:

- Una página del medio.
- La última, con menos elementos.
- Una página 0, negativa y mayor que el total.
- Una lista vacía.
- Los dos errores: `perPage` 0 y `perPage` decimal, con `toThrow(RangeError)` y con el mensaje. Recuerda la flecha ([teoría 03](../1-teoria/03-matchers.md#5-errores)).

Mutante: `Math.ceil` por `Math.floor` al calcular `pages`. Solo lo detecta un caso en el que la última página no esté llena.

## Paso 7: search

Busca en tu `SEED` con `FIELDS`. Para comparar resultados, quédate con los nombres: `search(...).map((item) => item.name)` y `toEqual` con el array esperado. Casos:

- Una palabra en mayúsculas y sin tildes que encuentre fichas que sí las tienen.
- **Dos palabras** que estén en campos distintos de una misma ficha, y que por separado aparezcan en otras fichas.
- Una búsqueda de solo espacios.
- Una palabra que no aparezca en ninguna ficha.

Mutante: `words.every` por `words.some`, que se conforma con una palabra. Si tus dos palabras solo aparecen juntas en una ficha y en ninguna otra por separado, el mutante sobrevive.

## Paso 8: sortBy

Para números, usa tu campo `number`. Para textos, escribe en el test un array pequeño que ponga a prueba el orden español: mayúsculas y minúsculas, una palabra con tilde al principio (`Óleo`) y la `ñ` (`nube` antes que `ñu`). Para las fichas sin valor, mezcla objetos sin la propiedad y con `null`, y prueba los dos sentidos.

El caso «no modifica el array que recibe» se comprueba así: guarda el array, llama a `sortBy` y comprueba con `toEqual` que el **original** sigue igual.

Mutante: `items.toSorted(` por `items.sort(`, que ordena el original.

## Paso 9: validate

`validate` recibe textos, como un formulario: usa `asText` (paso 3) para pasarle una ficha de `SEED`. Casos:

- Una ficha de `SEED`: sin errores, y `data` igual a la ficha.
- Un formulario vacío o con espacios: un `'Obligatorio'` por campo obligatorio, y ninguno más.
- Textos con espacios a los lados y un número como texto: `data` los limpia y convierte. Comprueba el tipo con `toBeTypeOf('number')`.
- **Los límites:** el valor justo en `min` y justo en `max` no dan error; uno por debajo y uno por encima, sí. Y un texto más corto que `minLength`, y un número que no es número.
- El `TypeError` si `fields` no es un array.

Para cubrir todas las ramas, añade un caso con unos `fields` escritos en el test: un campo `number` sin `min` ni `max` y uno `text` sin `minLength`.

Mutante: `value < min` por `value <= min`, que rechaza el mínimo. Solo lo detecta un test con el valor exacto del mínimo.

## Paso 10: summarize

Con tu campo `number` y tu `SEED`, comprueba `count`, `min` y `max` con `toMatchObject` o `toEqual`, y la media con **`toBeCloseTo`**: la del Planetario es `3.7569999999999992`. Después, un array escrito en el test con fichas sin el campo, con un texto con cifras y con `NaN`: no cuentan. Y el caso sin ninguna ficha con número.

Mutante: dividir la media entre todas las fichas (`items.length`) en lugar de entre las que tienen número. Solo lo detecta un caso con fichas sin número.

## Paso 11: Cobertura

```bash
pnpm coverage
```

Si falta algo, la tabla dice qué líneas de `logic.js` no se ejecutan; abre `coverage/index.html` para ver las ramas. Cuando todo esté cubierto:

```text
 % Coverage report from v8
No files with missing coverage.
2 files fully covered.

=============================== Coverage summary ===============================
Statements   : 100% ( 67/67 )
Branches     : 100% ( 53/53 )
Functions    : 100% ( 14/14 )
Lines        : 100% ( 50/50 )
================================================================================
```

Las comprobaciones exigen el 100 % de `src/logic.js` en las cuatro medidas. Cada rama sin cubrir es un caso que te falta: busca qué dato la recorre.

## Paso 12: Repaso final

1. Que no quede ningún `it.todo`, ni ningún `.only` o `.skip`.
2. Que cada test que añadiste tenga al menos un `expect`.
3. Rompe tú mismo `logic.js` en una copia: cambia un `<` por `<=` o un `1` por un `0` en cualquier función. ¿Falla algún test? Deshaz el cambio.
4. Desde la raíz del repositorio del bootcamp:

   ```bash
   PROYECTO=~/js-proyecto-semana-25 ./scripts/verificar-semana.sh 25
   ```

---

## ✅ Requisitos verificables

`PROYECTO=~/js-proyecto-semana-25 ./scripts/verificar-semana.sh 25` comprueba (con `pnpm install` hecho):

1. `src/` y `tests/` son módulos ES válidos.
2. `package.json` es un módulo ES con `vitest` y `@vitest/coverage-v8` 5.x en la misma versión exacta, el script `test` ejecuta `vitest run` y hay `pnpm-lock.yaml`.
3. `src/logic.js` es el del starter, sin cambios.
4. `tests/` no tiene ningún `it.todo` ni `TODO`.
5. `tests/` no tiene `.only` ni `.skip`, que esconden tests.
6. `data.js` exporta de 3 a 8 `FIELDS` (`name` camelCase sin repetir, `label`, `type` text o number, el primero text y obligatorio, al menos uno number) y de 8 a 30 `SEED` que cumplen `validate`, con el primer campo sin repetir.
7. `FIELDS` y `SEED` son de tu dominio, no los del ejemplo Planetario.
8. `pnpm test` pasa.
9. Cada caso del starter es un test que pasa, con su `describe` y su título (28 casos), y el `describe` `data.js` tiene al menos un test que pasa.
10. Los tests cubren el 100 % de `src/logic.js`: líneas, ramas, funciones y sentencias.
11. Tus tests fallan si `normalize` deja de pasar a minúsculas.
12. Tus tests fallan si `formatNumber` deja de escribir decimales.
13. Tus tests fallan si `paginate` cuenta una página de menos cuando la última no está llena.
14. Tus tests fallan si `search` se conforma con una sola de las palabras.
15. Tus tests fallan si `sortBy` ordena el array que recibe en lugar de una copia.
16. Tus tests fallan si `validate` rechaza un número igual al mínimo.
17. Tus tests fallan si `summarize` divide la media entre todas las fichas, también las que no tienen número.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Cobertura](../2-practicas/lab-04-cobertura/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 25](../README.md)
