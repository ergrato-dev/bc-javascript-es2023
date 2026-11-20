# Lab 02 — Tagged templates

## Objetivo

Escribir funciones tag que reciben las partes de un template literal por separado, para transformar, formatear o escapar los valores antes de unirlos, y usar `String.raw` para texto sin secuencias de escape.

**Tiempo:** 50 min · **Teoría:** [02 - Template literals avanzados](../../1-teoria/02-template-literals-avanzados.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 9 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-06-strings_regexp_modernos/2-practicas/lab-02-template-tags
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: qué recibe una función tag

Un nombre de función pegado a un template literal (`` inspect`...` ``) llama a la función sin paréntesis. El primer argumento es el array de textos fijos y el resto (`...values`, con rest de la semana 02) los valores de cada `${}`. Siempre hay un texto más que valores: aquí el último es `''`, lo que queda después de `${age}`. La función decide qué devolver; esta devuelve `'resultado'`.

```text
--- Paso 1: Anatomía Básica ---
Strings: [ 'Nombre: ', ', Edad: ', '' ]
Values: [ 'Ana', 25 ]
Resultado: resultado
```

## Paso 2: volver a unir las partes

`identity` recorre los textos con `reduce` y detrás de cada uno pone el valor del mismo índice. En la última vuelta no hay valor (`values[i]` es `undefined`) y pone `''`. El resultado es el mismo texto que daría el template sin tag. Los pasos siguientes usan este esqueleto y solo cambian qué hacen con el valor.

```text
--- Paso 2: Reconstruir String ---
10 + 20 = 30
```

## Paso 3: transformar los valores

`upper` pasa a mayúsculas solo los valores que son texto; los textos fijos (`Nombre: `, `, Ciudad: `) quedan igual. `value ?? ''` cubre la última vuelta.

```text
--- Paso 3: Transformar Valores ---
Nombre: ANA GARCÍA, Ciudad: MADRID
```

## Paso 4: formatear números

`currency` da formato de moneda a los valores numéricos con `toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })`. En español, los números de cuatro cifras no llevan punto de miles: por eso sale `1234,50 €` y no `1.234,50 €`. A partir de cinco cifras sí lo llevan. El espacio antes de `€` es un espacio no separable (`\u00A0`), que impide que el símbolo quede solo en otra línea.

```text
--- Paso 4: Formato de Moneda ---
Precio: 1234,50 €, Descuento: 123,45 €
Total: 1111,05 €
```

## Paso 5: envolver los valores

`highlight` rodea cada valor con `**` (negrita en Markdown) y `htmlHighlight` con `<strong>`. En `$${laptopPrice}` el primer `$` es texto y el segundo abre la interpolación.

```text
--- Paso 5: Resaltar Valores ---
El producto **Laptop** cuesta $**999**
Bienvenido, <strong>Laptop</strong>!
```

## Paso 6: escapar HTML

`safeHtml` escapa solo los valores, nunca el HTML que escribiste tú: el `<div>` queda como etiqueta y el `<script>` del usuario, como texto. `escapeHtml` usa una expresión regular con `replace`; el [lab 03](../lab-03-regexp-basics/README.md) explica la sintaxis.

```text
--- Paso 6: Escapar HTML ---
HTML seguro: <div>Usuario: &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;</div>
```

## Paso 7: una fábrica de tags

`createTag` recibe la transformación y devuelve una función tag con el esqueleto del paso 2. Con ella, `upperTag`, `lowerTag` y `jsonTag` se crean en una línea cada uno.

```text
--- Paso 7: Tag Factory ---
Nombre: ANA GARCÍA
Nombre: ana garcía
Data: {"x":1,"y":2}
```

## Paso 8: `String.raw`

`String.raw` es una función tag que viene con JavaScript: deja las barras invertidas tal cual. Sin ella, `\n` es un salto de línea, y en la ruta de Windows `\U` se queda en `U` y `\n` vuelve a ser un salto de línea, así que la ruta sale rota. Con ella, la ruta y el patrón de la expresión regular se escriben como se leen.

```text
--- Paso 8: String.raw ---
Normal: Line1
Line2
Raw: Line1\nLine2
Path normal: C:Users
ame
Path raw: C:\Users\name
Pattern: \d+\.\d+
RegExp: /\d+\.\d+/
```

## Paso 9: un logger

`debug` añade la hora y convierte los objetos a JSON con sangría. Imprime el mensaje y además lo devuelve. La hora es la del momento en que ejecutas, en UTC: la tuya será otra.

```text
--- Paso 9: Debug Logger ---
[03:43:02] Usuario {
  "id": 1,
  "name": "Ana"
} realizó acción: login

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, cambia el template por `` inspect`${name}` ``. ¿Cuántos elementos tiene `strings` y cuáles son?
2. En el paso 4, cambia `price` a `12345.5`. ¿Cómo sale ahora?
3. En el paso 7, crea con `createTag` un tag `trimTag` que quite los espacios de los valores y pruébalo con `` trimTag`[${'  hola  '}]` ``. Debe imprimir `[hola]`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Métodos modernos de strings](../lab-01-string-methods/README.md) | [Lab 03 — Fundamentos de RegExp](../lab-03-regexp-basics/README.md) → |

[↑ Semana 06](../../README.md)
