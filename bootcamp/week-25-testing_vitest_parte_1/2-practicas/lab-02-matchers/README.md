# Lab 02 — Matchers

## Objetivo

Elegir el matcher que compara lo que quieres: `toBe` o `toEqual`, `toEqual` o `toStrictEqual`, decimales con `toBeCloseTo`, textos y arrays, errores con `toThrow`, `not` y partes de un objeto. Y leer el mensaje de cada uno cuando falla.

**Tiempo:** 55 min · **Teoría:** [03 - Matchers](../../1-teoria/03-matchers.md)

## Cómo trabajar

[`starter/src/catalog.js`](starter/src/catalog.js) tiene funciones de un catálogo de productos que funcionan bien. [`starter/tests/matchers.test.js`](starter/tests/matchers.test.js) tiene un bloque por paso. En cada bloque hay un test marcado con ❌ que **falla a propósito**, porque usa un matcher que no compara lo que el test quiere comprobar. Descomenta el bloque, ejecuta los tests, lee el fallo y arréglalo como dice el paso. Hazlo antes de pasar al siguiente: así cada ejecución solo enseña el fallo nuevo.

Una sola vez, instala las dependencias:

```bash
cd bootcamp/week-25-testing_vitest_parte_1/2-practicas/lab-02-matchers/starter
pnpm install
```

```text
devDependencies:
+ vitest 5.1.0

Done in 148ms using pnpm v12.20.0
```

Y en cada paso:

```bash
pnpm test
```

Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0 y Vitest 5.1.0. Aquí se muestra solo el bloque del fallo. Debajo de cada fallo, Vitest escribe además el resumen (`Test Files`, `Tests`, `Start at`, `Duration`), que ya conoces del [lab 01](../lab-01-primer-test/README.md).

---

## Paso 1: toBe y toEqual

```text
 ❯ tests/matchers.test.js (3 tests | 1 failed) 9ms
   ❯ Paso 1: toBe y toEqual (3)
     × ❌ toBe con dos objetos iguales 6ms

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/matchers.test.js > Paso 1: toBe y toEqual > ❌ toBe con dos objetos iguales
AssertionError: expected { name: 'Goma', price: 0.8, tags: [] } to be { name: 'Goma', price: 0.8, tags: [] } // Object.is equality

If it should pass with deep equality, replace "toBe" with "toStrictEqual"

Expected: { name: 'Goma', price: 0.8, tags: [] }
Received: serializes to the same string


Compared values have no visual difference.

 ❯ tests/matchers.test.js:19:40
```

Los dos objetos se escriben igual (`serializes to the same string`, «se escriben con el mismo texto») y aun así `toBe` falla. `toBe` compara con `Object.is`: con números y textos compara el valor, pero con objetos pregunta si son **el mismo objeto**. Por eso pasa el segundo test, que compara un producto consigo mismo. `createProduct` crea un objeto nuevo, distinto del literal del test.

Para comparar el contenido, cambia `toBe({ name: 'Goma'...` por `toEqual({ name: 'Goma'...`. Vitest sugiere `toStrictEqual`; la diferencia entre los dos está en el paso siguiente.

## Paso 2: toEqual y toStrictEqual

```text
 FAIL  tests/matchers.test.js > Paso 2: toEqual y toStrictEqual > ❌ toStrictEqual sí las mira
AssertionError: expected { name: 'Lápiz', price: 1.2, …(1) } to strictly equal { name: 'Lápiz', price: 1.2 }

- Expected
+ Received

  {
    "name": "Lápiz",
+   "note": undefined,
    "price": 1.2,
  }

 ❯ tests/matchers.test.js:29:32
```

`toRow` siempre pone la propiedad `note`, aunque valga `undefined`. `toEqual` la pasa por alto (el primer test pasa) y `toStrictEqual` no: para él, un objeto con `note: undefined` y otro sin `note` son distintos. La diferencia marca con `+` la propiedad que sobra en lo recibido.

¿Cuál conviene? Si la tabla que pinta las filas recorre las claves con `Object.keys`, la `note` sin valor importa, y el test debe decirlo. Añádela a lo esperado: `toStrictEqual({ name: 'Lápiz', price: 1.2, note: undefined })`.

El tercer test usa `toEqual` con arrays: compara elemento a elemento, y comprueba de paso que `withTag` no ha cambiado el producto original.

## Paso 3: Números

```text
 FAIL  tests/matchers.test.js > Paso 3: números > ❌ suma decimales con toBe
AssertionError: expected 0.30000000000000004 to be 0.3 // Object.is equality

- Expected
+ Received

- 0.3
+ 0.30000000000000004

 ❯ tests/matchers.test.js:45:29
```

0,1 + 0,2 no da exactamente 0,3 en JavaScript (ni en casi ningún lenguaje): los números se guardan en binario, y 0,1 y 0,2 no tienen una representación exacta en binario, igual que 1/3 no la tiene en decimal. El error de la suma está en el decimal 17. Cambia `toBe(0.3)` por `toBeCloseTo(0.3)`, que acepta una diferencia menor que 0,005 (2 decimales, si no le pasas otro número).

El primer test usa `toBeGreaterThan` y `toBeLessThanOrEqual` para comprobar un rango en lugar de un valor exacto.

## Paso 4: Textos y arrays

```text
 FAIL  tests/matchers.test.js > Paso 4: textos y arrays > ❌ un array contiene un objeto
AssertionError: expected [ { name: 'Lápiz', …(2) }, …(2) ] to include { name: 'Regla', price: 2, tags: [] }
 ❯ tests/matchers.test.js:60:22
```

- `toContain` busca un trozo en un texto o un elemento en un array, comparando con `===`, como `includes`. Con un objeto le pasa lo mismo que a `toBe`: el literal del test no es ninguno de los objetos del array.
- Cambia `toContain({ name: 'Regla'...` por `toContainEqual({ name: 'Regla'...`, que compara cada elemento como `toEqual`.
- El primer test usa `toMatch` con una expresión regular: el texto empieza por `Cuaderno: `, sigue con cifras, un punto, dos cifras y termina en ` €`. Sirve cuando el valor exacto no importa, pero la forma sí.
- `toHaveLength` comprueba el `length` de un array o un texto.

## Paso 5: Errores

```text
 FAIL  tests/matchers.test.js > Paso 5: errores > ❌ parsePrice rechaza un precio negativo
RangeError: Precio no válido: -3
 ❯ parsePrice src/catalog.js:17:51
     15| export const parsePrice = (text) => {
     16|   const value = Number(String(text).replace(',', '.'));
     17|   if (!Number.isFinite(value) || value < 0) throw new RangeError(`Prec…
       |                                                   ^
     18|   return value;
     19| };
 ❯ tests/matchers.test.js:70:12
```

`parsePrice` hace lo correcto y lanza el error. El test falla igualmente, y no con un `AssertionError`, sino con el propio `RangeError`. `expect(parsePrice('-3'))` llama a `parsePrice` **antes** de que `expect` exista, y el error rompe el test sin que `toThrow` llegue a ejecutarse.

`toThrow` necesita una función que llamar él mismo, dentro de un `try`. Cambia la línea por `expect(() => parsePrice('-3')).toThrow()`. El tercer test enseña las dos formas de concretar qué error se espera: su clase (`toThrow(RangeError)`) y un trozo de su mensaje (`toThrow('Precio no válido: gratis')`).

## Paso 6: not, undefined, tipos y partes de un objeto

```text
 FAIL  tests/matchers.test.js > Paso 6: not, undefined, tipos y partes > ❌ findProduct sin resultado
AssertionError: expected undefined to be null

- Expected:
null

+ Received:
undefined

 ❯ tests/matchers.test.js:85:43
```

`find` devuelve `undefined` cuando no encuentra nada, no `null`. `toBeNull` solo acepta `null`. Cambia `toBeNull()` por `toBeUndefined()`. Si te diera igual cuál de los dos, también vale `expect(...).toBeFalsy()`, pero dice menos.

Los otros dos tests de este paso:

- `.not` va delante de cualquier matcher y le da la vuelta: `not.toContain`, `not.toThrow`.
- `toBeTypeOf('number')` comprueba el `typeof`.
- `toMatchObject` comprueba solo las propiedades que le pasas e ignora el resto. Aquí no mira `price`.
- `toHaveProperty('tags.0', 'papel')` sigue un camino dentro del objeto.

Con los seis arreglos, ejecuta `pnpm test --reporter=verbose`:

```text
 ✓ tests/matchers.test.js > Paso 1: toBe y toEqual > toBe compara números y textos 1ms
 ✓ tests/matchers.test.js > Paso 1: toBe y toEqual > toBe con el mismo objeto 0ms
 ✓ tests/matchers.test.js > Paso 1: toBe y toEqual > ❌ toBe con dos objetos iguales 0ms
 ✓ tests/matchers.test.js > Paso 2: toEqual y toStrictEqual > toEqual no mira las propiedades sin valor 0ms
 ✓ tests/matchers.test.js > Paso 2: toEqual y toStrictEqual > ❌ toStrictEqual sí las mira 0ms
 ✓ tests/matchers.test.js > Paso 2: toEqual y toStrictEqual > withTag no cambia el producto original 0ms
 ✓ tests/matchers.test.js > Paso 3: números > compara mayor y menor 0ms
 ✓ tests/matchers.test.js > Paso 3: números > ❌ suma decimales con toBe 0ms
 ✓ tests/matchers.test.js > Paso 4: textos y arrays > un texto contiene o cumple un patrón 0ms
 ✓ tests/matchers.test.js > Paso 4: textos y arrays > un array tiene una longitud y contiene un valor 1ms
 ✓ tests/matchers.test.js > Paso 4: textos y arrays > ❌ un array contiene un objeto 0ms
 ✓ tests/matchers.test.js > Paso 5: errores > parsePrice acepta la coma decimal 0ms
 ✓ tests/matchers.test.js > Paso 5: errores > ❌ parsePrice rechaza un precio negativo 0ms
 ✓ tests/matchers.test.js > Paso 5: errores > el error es un RangeError con un mensaje 0ms
 ✓ tests/matchers.test.js > Paso 6: not, undefined, tipos y partes > not da la vuelta a cualquier matcher 0ms
 ✓ tests/matchers.test.js > Paso 6: not, undefined, tipos y partes > ❌ findProduct sin resultado 0ms
 ✓ tests/matchers.test.js > Paso 6: not, undefined, tipos y partes > tipos y partes de un objeto 2ms

 Test Files  1 passed (1)
      Tests  17 passed (17)
   Start at  03:18:09
   Duration  145ms (transform 51%, import 22%, tests 19%, worker 7%)

✅ Lab completado.
```

Los nombres con ❌ ya no mienten: puedes quitarles la marca.

---

## Comprobación

1. ¿Por qué `toBe` pasa con `products[0].price` y falla con dos objetos iguales? ¿Qué compara exactamente?
2. Escribe un test que pase con `toEqual` y falle con `toStrictEqual` sin usar `undefined`. Pista: un array con un hueco, `[1, , 3]`, frente a `[1, undefined, 3]`.
3. En el paso 5, ¿qué pasaría con `expect(() => parsePrice('3')).toThrow()`? ¿Y por qué `expect(parsePrice('-3')).toThrow()` no puede funcionar nunca, lance o no lance?
4. Cambia el `toMatchObject` del paso 6 por `toEqual` con el mismo objeto. ¿Qué dice el fallo? ¿Cuándo prefieres cada uno?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Tu primer test](../lab-01-primer-test/README.md) | [Lab 03 — Organizar los tests](../lab-03-organizar-tests/README.md) → |

[↑ Semana 25](../../README.md)
