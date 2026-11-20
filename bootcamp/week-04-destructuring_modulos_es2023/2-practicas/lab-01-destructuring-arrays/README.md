# Lab 01 — Destructuring de arrays

## Objetivo

Sacar los elementos de un array a variables por su posición, con huecos, rest y valores por defecto, y usar el mismo patrón en parámetros y en lo que devuelve una función.

**Tiempo:** 45 min · **Teoría:** [01 - Destructuring de arrays](../../1-teoria/01-destructuring-arrays.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 10 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-04-destructuring_modulos_es2023/2-practicas/lab-01-destructuring-arrays
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: extraer por posición

`const [first, second, third] = colors;` crea tres variables con los tres primeros elementos. Los corchetes a la izquierda del `=` no crean un array: dicen «el primero a `first`, el segundo a `second`...». Los elementos que sobran se ignoran.

```text
--- Paso 1: Extracción Básica ---
Primeros 3 colores: red green blue
```

## Paso 2: saltar elementos

Una coma sin nombre deja un hueco: `[firstNum, , thirdNum]` se salta el segundo elemento.

```text
--- Paso 2: Skip de Elementos ---
Primer y tercer número: 10 30
```

## Paso 3: rest

`...otherColors` recoge en un array nuevo todos los elementos que quedan. Es el mismo `...` de rest de la semana 02, y siempre va el último.

```text
--- Paso 3: Rest Pattern ---
Color primario: red
Otros colores: [ 'green', 'blue', 'yellow', 'purple' ]
```

## Paso 4: valores por defecto

`shortArray` solo tiene un elemento. Las posiciones que no existen valen `undefined`, y `= 'N/A'` da un valor para ese caso.

```text
--- Paso 4: Valores por Defecto ---
Items con defaults: only one N/A N/A
```

## Paso 5: intercambiar variables

`[x, y] = [y, x]` crea un array con los dos valores y lo desestructura al revés. Sin una variable temporal. Aquí no hay `const`: `x` e `y` ya existen (con `let`) y solo se reasignan.

```text
--- Paso 5: Swap de Variables ---
Después del swap: world hello
```

## Paso 6: arrays anidados

`coordinates` es un array de pares `[x, y]`. El patrón puede tener la misma forma: `[, [pointX, pointY]]` se salta el primer par y abre el segundo.

```text
--- Paso 6: Destructuring Anidado ---
Segundo punto - X: 10 Y: 20
```

## Paso 7: en los parámetros

`([a, b, c]) => a + b + c` desestructura el array que recibe la función. Quien llama pasa un solo argumento, el array.

```text
--- Paso 7: En Parámetros de Función ---
Suma de [5, 10, 15]: 30
```

## Paso 8: lo que devuelve una función

`getMinMax` devuelve `[min, max]`. Devolver un array y desestructurarlo al recibirlo es la forma habitual de devolver dos valores.

```text
--- Paso 8: Retorno de Funciones ---
Min: 10 Max: 50
```

## Paso 9: arrays y objetos mezclados

`mixed` tiene un objeto en la cuarta posición. `{ name: version }` lo abre dentro del mismo patrón y renombra `name` a `version`; los objetos se ven a fondo en el [lab 02](../lab-02-destructuring-objetos/README.md).

```text
--- Paso 9: Combinación Avanzada ---
Lenguaje: JavaScript
Año: 2024
Versión: ES6
```

## Paso 10: caso práctico

`calculateDistance` recibe dos puntos y los abre en el parámetro: `[[x1, y1], [x2, y2]]`. Con `(0, 0)` y `(3, 4)` la distancia es 5.

```text
--- Paso 10: Caso Práctico ---
Distancia entre puntos: 5

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, cambia el patrón a `const [first, second, third, fourth, fifth, sixth] = colors;` e imprime `sixth`. ¿Qué vale y por qué no da error?
2. En el paso 3, mueve el rest al principio: `const [...otherColors, primary] = colors;`. ¿Qué error sale?
3. En el paso 4, ¿qué imprimiría `item2` si `shortArray` fuera `['only one', null]`? Pruébalo: ¿se usa el valor por defecto?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Destructuring de objetos](../lab-02-destructuring-objetos/README.md) → |

[↑ Semana 04](../../README.md)
