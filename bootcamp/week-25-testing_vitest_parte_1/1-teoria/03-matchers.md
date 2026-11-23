# 🎯 Matchers

## 🎯 Objetivos

- Elegir entre `toBe`, `toEqual` y `toStrictEqual` según lo que se compara.
- Comparar decimales con `toBeCloseTo` y rangos con `toBeGreaterThan` y similares.
- Comprobar textos y arrays con `toContain`, `toContainEqual`, `toMatch` y `toHaveLength`.
- Comprobar que una función lanza un error con `toThrow`, y por qué necesita una función.
- Usar `not`, `toBeNull`, `toBeUndefined`, `toBeTypeOf`, `toMatchObject` y `toHaveProperty`.

Un **matcher** es el método que va detrás de `expect(valor)` y dice qué debe cumplir el valor. Vitest trae decenas. Esta teoría cubre los que usarás casi siempre. El fallo de cada uno está en el [lab 02](../2-practicas/lab-02-matchers/README.md).

---

## 📋 Contenido

### 1. toBe: el mismo valor

`toBe` compara con `Object.is`, que es casi lo mismo que `===`:

```js
expect(2 + 3).toBe(5);
expect('Lápiz'.toLowerCase()).toBe('lápiz');
expect(products[0]).toBe(products[0]); // el mismo objeto: pasa
expect({ a: 1 }).toBe({ a: 1 });       // dos objetos distintos: falla
```

Con números, textos y booleanos compara el valor. Con objetos y arrays pregunta si son **el mismo objeto** en memoria, no si tienen lo mismo dentro. Cuando falla con dos objetos iguales, Vitest avisa: `Received: serializes to the same string` («se escribe con el mismo texto»).

`Object.is` se diferencia de `===` en dos casos: `Object.is(NaN, NaN)` es `true` y `Object.is(0, -0)` es `false`. Por eso, `expect(NaN).toBe(NaN)` pasa, y un fallo con 0 se escribe `+0`.

### 2. toEqual y toStrictEqual: lo mismo dentro

```js
expect(createProduct('Goma', 0.8)).toEqual({ name: 'Goma', price: 0.8, tags: [] });
expect(sortBy(items, 'n')).toEqual([{ n: 1 }, { n: 2 }]);
```

`toEqual` recorre los dos valores por dentro y compara cada propiedad y cada elemento, a cualquier profundidad. Es el matcher para objetos y arrays.

`toStrictEqual` hace lo mismo y además es estricto en tres cosas que `toEqual` pasa por alto:

| Caso | `toEqual` | `toStrictEqual` |
|---|---|---|
| `{ a: 1, b: undefined }` frente a `{ a: 1 }` | Iguales | Distintos |
| `[1, , 3]` (con hueco) frente a `[1, undefined, 3]` | Iguales | Distintos |
| Una instancia de una clase frente a un objeto literal con lo mismo | Iguales | Distintos |

Usa `toEqual` por defecto, y `toStrictEqual` cuando esas diferencias importan. Por ejemplo, si el código recorre las claves con `Object.keys`, una propiedad `undefined` es una clave más.

### 3. Números

```js
expect(sum([0.1, 0.2])).toBeCloseTo(0.3);    // 0.30000000000000004 pasa
expect(summary.average).toBeCloseTo(3.757, 3); // 3 decimales
expect(total).toBeGreaterThan(0);
expect(total).toBeLessThanOrEqual(100);
```

Los números con decimales no siempre son exactos: `0.1 + 0.2` da `0.30000000000000004`. Con `toBe`, ese test falla aunque el código esté bien. `toBeCloseTo(esperado, decimales)` acepta una diferencia menor que media unidad del último decimal: con los 2 decimales por defecto, menos de 0,005.

`toBeGreaterThan`, `toBeGreaterThanOrEqual`, `toBeLessThan` y `toBeLessThanOrEqual` comprueban un rango cuando el valor exacto no importa o no se conoce.

### 4. Textos y arrays

```js
expect(describeProduct(p)).toContain('Cuaderno');            // trozo de un texto
expect(describeProduct(p)).toMatch(/^Cuaderno: \d+\.\d{2} €$/); // un patrón
expect(products[1].tags).toContain('papel');                 // un elemento de un array, con ===
expect(products).toContainEqual({ name: 'Regla', price: 2, tags: [] }); // un elemento, como toEqual
expect(products).toHaveLength(3);
```

- `toContain` busca con `===`, como `includes`. Con un objeto, falla igual que `toBe`: usa `toContainEqual`.
- `toMatch` acepta una expresión regular ([semana 06](../../week-06-strings_regexp_modernos/README.md)) o un texto que debe aparecer dentro.
- `toHaveLength` mira el `length`: sirve para arrays y textos.

### 5. Errores

```js
expect(() => parsePrice('-3')).toThrow();                         // lanza algo
expect(() => parsePrice('-3')).toThrow(RangeError);               // de esta clase
expect(() => parsePrice('-3')).toThrow('Precio no válido');       // con este trozo de mensaje
expect(() => parsePrice('-3')).toThrow(/^Precio no válido: -3$/); // con un mensaje que cumple el patrón
```

`expect` recibe una **función** que llama a la que se prueba, no el resultado de llamarla. `toThrow` ejecuta esa función dentro de un `try` y mira qué se lanzó. Si escribes `expect(parsePrice('-3')).toThrow()`, `parsePrice` se ejecuta antes que `expect`, el error rompe el test, y `toThrow` no llega a ejecutarse.

Comprueba también **qué** error se lanza, no solo que se lanza algo. Un `TypeError` por una errata también es «algo».

### 6. not, null, undefined, tipos y partes

```js
expect(products[0].tags).not.toContain('papel');   // not da la vuelta a cualquier matcher
expect(() => parsePrice('2')).not.toThrow();

expect(findProduct(products, 'Goma')).toBeUndefined(); // find devuelve undefined
expect(summarize([], 'n').min).toBeNull();
expect(value).toBeDefined();                           // cualquier cosa menos undefined

expect(data.year).toBeTypeOf('number');                // el typeof
expect(products[1]).toMatchObject({ name: 'Cuaderno' }); // solo estas propiedades
expect(products[1]).toHaveProperty('tags.0', 'papel');   // un camino dentro del objeto
```

- `toBeNull` solo acepta `null`, y `toBeUndefined` solo `undefined`. `toBeFalsy` y `toBeTruthy` aceptan cualquier valor falso o verdadero, y por eso dicen menos: un `0` o un `''` también pasan.
- `toMatchObject` comprueba solo las propiedades que le pasas e ignora las demás. Viene bien cuando un objeto tiene campos que no importan en ese test.

### 7. Resumen

| Quieres comprobar | Matcher |
|---|---|
| Un número, texto o booleano exacto | `toBe` |
| Un objeto o un array por su contenido | `toEqual` (o `toStrictEqual`) |
| Una parte de un objeto | `toMatchObject`, `toHaveProperty` |
| Un decimal | `toBeCloseTo` |
| Un rango | `toBeGreaterThan`, `toBeLessThanOrEqual`... |
| Un texto que contiene o cumple algo | `toContain`, `toMatch` |
| Un elemento en un array | `toContain` (valores), `toContainEqual` (objetos) |
| Un tamaño | `toHaveLength` |
| Un error | `toThrow` con una función |
| `null`, `undefined`, un tipo | `toBeNull`, `toBeUndefined`, `toBeTypeOf` |
| Lo contrario de cualquiera | `.not.` delante |

Elige el matcher más concreto que puedas. `expect(x === 5).toBe(true)` funciona, pero cuando falla solo dice `expected false to be true`. `expect(x).toBe(5)` dice qué valor salió.

---

## 🧪 Pruébalo

El [lab 02](../2-practicas/lab-02-matchers/README.md) tiene un paso por apartado de esta teoría, y en cada uno un test que falla por usar el matcher equivocado.

## ✅ Checklist de aprendizaje

- [ ] Explico por qué `toBe` falla con dos objetos iguales y uso `toEqual` en su lugar.
- [ ] Sé qué diferencias ve `toStrictEqual` y `toEqual` no.
- [ ] Comparo decimales con `toBeCloseTo`.
- [ ] Uso `toContain`, `toContainEqual`, `toMatch` y `toHaveLength` con textos y arrays.
- [ ] Compruebo errores con `expect(() => ...).toThrow(Clase)` y explico por qué hace falta la flecha.
- [ ] Uso `not`, `toBeNull`, `toBeUndefined`, `toBeTypeOf`, `toMatchObject` y `toHaveProperty`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — ⚡ Vitest](02-vitest.md) | [Teoría — 🗂️ Organizar los tests](04-organizar-tests.md) → |

[↑ Semana 25](../README.md)
