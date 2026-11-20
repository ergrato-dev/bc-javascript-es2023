# Lab 02 — `for...of` y `for...in`

## Objetivo

Distinguir los dos bucles: `for...of` recorre los **valores** de un iterable (array, string, `Map`, `Set`) y `for...in` recorre las **claves** de un objeto. Ver por qué `for...in` no conviene con arrays, y recorrer objetos con `Object.entries()`, `Object.keys()` y `Object.values()`.

**Tiempo:** 45 min · **Teoría:** [02 - for...of frente a for...in](../../1-teoria/02-for-of-vs-for-in.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 8 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-08-iteradores_generadores/2-practicas/lab-02-for-loops
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: `for...of` con arrays

`for...of` da cada valor del array. Si además necesitas la posición, `entries()` devuelve pares `[índice, valor]` que separas con destructuring.

```text
--- Paso 1: for...of con Arrays ---
Fruta: apple
Fruta: banana
Fruta: cherry
Con índice: 0 → apple
Con índice: 1 → banana
Con índice: 2 → cherry
```

## Paso 2: `for...in` con arrays

`for...in` da las claves, y en un array las claves son los índices **como strings** (`'0'`, no `0`). Además recorre cualquier otra propiedad que le añadas al array, como `customProp`. Por eso con arrays se usa `for...of`.

```text
--- Paso 2: for...in con Arrays (problemas) ---
Índice (tipo string): 0 (string)
Índice (tipo string): 1 (string)
Índice (tipo string): 2 (string)
⚠️ Propiedad extra: customProp
```

## Paso 3: `for...of` con strings

Un string se recorre carácter a carácter. Con emojis hay que tener cuidado: `for...of` recorre **puntos de código** (code points), los números con los que Unicode identifica cada símbolo. `👨‍💻` son tres: 👨, un carácter invisible que los une (zero width joiner) y 💻. `length` cuenta otra cosa todavía, unidades UTF-16, y da 5.

```text
--- Paso 3: for...of con Strings ---
Letra: J
Letra: a
Letra: v
Letra: a
Emoji chars: 👨
Emoji chars: ‍
Emoji chars: 💻
Partes: 3 | length: 5
```

## Paso 4: `for...in` con objetos

Con un objeto normal, `for...in` da cada nombre de propiedad, y `user[key]` lee su valor.

```text
--- Paso 4: for...in con Objetos ---
Propiedad: name = Alice
Propiedad: age = 25
Propiedad: city = NYC
```

## Paso 5: `Map` y `Set`

`Map` y `Set` (semana 07) son iterables, así que van con `for...of`. `for...in` no da nada con ellos: sus datos no son propiedades del objeto.

```text
--- Paso 5: for...of con Map y Set ---
Map entry: name → JavaScript
Map entry: year → 1995
Set value: ES6
Set value: ES7
Set value: ES8
```

## Paso 6: objetos con `Object.entries()`

Un objeto normal no es iterable: `for (const x of config)` lanza un `TypeError`. `Object.entries(config)` lo convierte en un array de pares `[clave, valor]`, que sí se recorre con `for...of`.

```text
--- Paso 6: Object.entries() con for...of ---
Config: theme = dark
Config: language = es
Config: debug = false
```

## Paso 7: el mismo array con los dos bucles

Con los mismos datos, `for...of` da `x`, `y`, `z` y `for...in` da `0`, `1`, `2`.

```text
--- Paso 7: Comparación Directa ---
for...of (valores):
  x
  y
  z
for...in (claves):
  0
  1
  2
```

## Paso 8: contar y filtrar sin bucle

Muchas veces no hace falta bucle: `Object.keys()` devuelve el array de claves (su `length` es el número de propiedades) y `Object.values()` el de valores, que se filtra con `filter` y `typeof`.

```text
--- Paso 8: Contar y filtrar sin bucle ---
Total propiedades: 5
Valores numéricos: [ 999, 50, 4.5 ]

✅ Lab completado.
```

---

## Comprobación

1. En el paso 6, cambia `Object.entries(config)` por `config`. ¿Qué error sale?
2. En el paso 2, ¿qué imprime `typeof` si recorres `numbers.keys()` con `for...of` en lugar de `for...in`?
3. En el paso 8, añade a `product` la propiedad `discount: null`. ¿Cambia `propCount`? ¿Y `numericValues`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Iteradores](../lab-01-iterators/README.md) | [Lab 03 — Generadores y `yield`](../lab-03-generators/README.md) → |

[↑ Semana 08](../../README.md)
