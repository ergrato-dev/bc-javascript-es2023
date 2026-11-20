# Lab 03 — Well-known symbols

## Objetivo

Cambiar cómo JavaScript trata a tus objetos con los símbolos que el propio lenguaje consulta: `Symbol.toStringTag`, `Symbol.toPrimitive`, `Symbol.iterator` y `Symbol.hasInstance`.

**Tiempo:** 55 min · **Teoría:** [03 - Well-known symbols](../../1-teoria/03-well-known-symbols.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-09-simbolos_metaprogramacion_basica/2-practicas/lab-03-well-known
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: `Symbol.toStringTag`

`Object.prototype.toString.call(x)` devuelve `[object Tipo]`. Para un objeto normal el tipo es `Object`; si el objeto tiene la clave `Symbol.toStringTag`, JavaScript usa su valor. En una clase se define con un getter (`get [Symbol.toStringTag]()`).

```text
--- Paso 1: Symbol.toStringTag ---
Default: [object Object]
Con toStringTag: [object Database]
En clase: [object HTTPClient]
```

## Paso 2: `Symbol.toPrimitive`

Cuando JavaScript necesita un número o un texto a partir de un objeto, llama a su método con clave `Symbol.toPrimitive` y le pasa un argumento, `hint`, que dice qué se espera: `'number'` con `+money` o `money * 2`, `'string'` en un template literal o con `String()`, y `'default'` con `+` entre dos valores (`money + 0`).

```text
--- Paso 2: Symbol.toPrimitive ---
Como número: 150
Multiplicación: 300
Como string: USD 150.00
String(): USD 150.00
Default: 150
```

## Paso 3: `Symbol.iterator`

Repaso de la semana 08: un objeto con el método `[Symbol.iterator]` funciona con `for...of`, spread y destructuring.

```text
--- Paso 3: Symbol.iterator ---
for...of: 1, 2, 3, 4, 5
spread: [ 1, 2, 3, 4, 5 ]
destructuring: a=1, b=2
```

## Paso 4: `Symbol.hasInstance`

`x instanceof Clase` llama al método `Symbol.hasInstance` de `Clase` con `x` como argumento. Aquí `Numeric` responde `true` para cualquier número que no sea `NaN`, aunque no se haya creado con `new Numeric`.

```text
--- Paso 4: Symbol.hasInstance ---
42 instanceof Numeric: true
'42' instanceof Numeric: false
NaN instanceof Numeric: false
3.14 instanceof Numeric: true
```

## Paso 5: una clase `Money`

La misma clase reúne tres símbolos: `toStringTag` para el tipo, `toPrimitive` para las conversiones (el texto lo da `Intl.NumberFormat`, que formatea importes) y un generador `*[Symbol.iterator]` que entrega un `0.01` por cada céntimo: `[...price].length` cuenta 525.

```text
--- Paso 5: Clase Money Completa ---
Tipo: [object Money]
Como string: €5.25
Como número: 5.25
Doble: 10.5
Centavos (count): 525
```

## Paso 6: una clase `Temperature`

`toStringTag` da el tipo y `toPrimitive` devuelve el texto `25°C` cuando se espera un string y el número en los demás casos. `temp + 10` usa el hint `'default'`: suma 35.

```text
--- Paso 6: Clase Temperature ---
Tipo: [object Temperature]
String: La temperatura es 25°C
Número: 35

✅ Lab completado.
```

---

## Comprobación

1. En el paso 2, ¿qué imprime `` `${money}` `` si quitas el caso `'string'` del `switch`?
2. En el paso 4, ¿qué da `Infinity instanceof Numeric`?
3. En el paso 6, ¿qué imprime `'Temp: ' + temp`? ¿Qué hint recibe `toPrimitive`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — `Symbol.for` y el registro global](../lab-02-symbol-registry/README.md) | [Lab 04 — Ocultar propiedades con símbolos](../lab-04-private-props/README.md) → |

[↑ Semana 09](../../README.md)
