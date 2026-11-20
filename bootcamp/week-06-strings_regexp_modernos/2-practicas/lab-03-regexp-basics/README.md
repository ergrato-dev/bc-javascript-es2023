# Lab 03 — Fundamentos de RegExp

## Objetivo

Crear expresiones regulares, entender sus flags, clases de caracteres, cuantificadores, anclas, conjuntos, alternancias y grupos, y usarlas con `test`, `match`, `search`, `replace` y `split` para validar texto.

**Tiempo:** 55 min · **Teoría:** [03 - Fundamentos de RegExp](../../1-teoria/03-regexp-fundamentos.md) y [04 - Patrones comunes](../../1-teoria/04-regexp-patterns.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 9 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-06-strings_regexp_modernos/2-practicas/lab-03-regexp-basics
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título. Para probar tus propios patrones, [regex101.com](https://regex101.com) (elige el sabor **ECMAScript**) explica cada parte mientras escribes.

---

## Paso 1: crear una expresión regular

Una expresión regular (RegExp) es un patrón de texto. Se escribe entre barras (`/hello/`) o con `new RegExp('hello')`, útil cuando el patrón sale de una variable. `test` devuelve `true` si el patrón aparece en algún sitio del texto. Por defecto distingue mayúsculas.

```text
--- Paso 1: Crear RegExp ---
/hello/ en "hello world": true
/hello/ en "hi there": false
/hello/ en "HELLO": false
```

## Paso 2: flags

Las letras detrás de la última barra cambian cómo busca: `i` ignora mayúsculas y `g` busca todas las coincidencias. Sin `g`, `match` devuelve la primera coincidencia como un array con datos extra: `index` (la posición), `input` (el texto) y `groups` (paso 4 del [lab 04](../lab-04-matchall-search/README.md)). Con `g`, devuelve solo los textos encontrados.

```text
--- Paso 2: Flags ---
Sin flags: [ 'hello', index: 6, input: 'Hello hello HELLO', groups: undefined ]
Con i: [ 'Hello', index: 0, input: 'Hello hello HELLO', groups: undefined ]
Con g: [ 'hello' ]
Con gi: [ 'Hello', 'hello', 'HELLO' ]
```

## Paso 3: clases de caracteres

`\d` es un dígito, `\w` una letra sin tilde, un dígito o `_`, y `\s` un espacio, tabulador o salto de línea. En mayúscula significan lo contrario: `\D` es cualquier cosa que no sea dígito. El `+` (paso 4) junta los seguidos. Dentro de un string de `console.log` la barra se escribe doble (`'\\d'`) para que se imprima una.

```text
--- Paso 3: Clases de Caracteres ---
Dígitos (\d): [ '123', '456' ]
Palabras (\w+): [ 'ABC', '123', 'def_456' ]
Espacios (\s+): [ ' ', ' ' ]
No dígitos (\D+): [ 'ABC ', ' def_' ]
```

## Paso 4: cuantificadores

Dicen cuántas veces se repite lo anterior: `*` cero o más, `+` una o más, `?` cero o una, `{3}` exactamente tres y `{2,4}` entre dos y cuatro. Cogen todo lo que pueden: `\d{2,4}` en `'123456'` se queda con cuatro. `a*` coincide incluso con un texto vacío, porque cero veces también vale; `a+` en `'bbb'` no encuentra nada y `match` devuelve `null`.

```text
--- Paso 4: Cuantificadores ---
a*: [ 'aaa', index: 0, input: 'aaa', groups: undefined ]
a* en "": [ '', index: 0, input: '', groups: undefined ]
a+: [ 'aaa', index: 0, input: 'aaa', groups: undefined ]
a+ en "bbb": null
colou?r: [ 'color', index: 0, input: 'color', groups: undefined ]
colou?r: [ 'colour', index: 0, input: 'colour', groups: undefined ]
\d{3}: [ '123', index: 0, input: '12345', groups: undefined ]
\d{2,4}: [ '1234', index: 0, input: '123456', groups: undefined ]
```

## Paso 5: anclas

No coinciden con caracteres, sino con posiciones: `^` el inicio del texto, `$` el final y `\b` el borde de una palabra. `/^...$/` obliga a que el patrón ocupe el texto entero: es lo que usarás para validar.

```text
--- Paso 5: Anclas ---
^hello: true
^hello: false
world$: true
world$: false
\bcat\b en "cat": true
\bcat\b en "category": false
\bcat\b en "the cat sat": true
```

## Paso 6: conjuntos y rangos

`[aeiou]` es uno cualquiera de esos caracteres y `[a-z]` cualquiera del rango. Con `^` al principio del corchete, `[^0-9]`, es cualquiera que **no** esté.

```text
--- Paso 6: Conjuntos ---
[aeiou]: [ 'e', 'o' ]
[a-z]: [ 'e', 'l', 'l', 'o' ]
[A-Z]: [ 'H' ]
[0-9]: [ '1', '2', '3' ]
[a-zA-Z]: [ 'H', 'e', 'l', 'l', 'o' ]
[^0-9]: [ 'a', 'b', 'c' ]
```

## Paso 7: alternancia y grupos

`|` significa «o». Los paréntesis forman un grupo: limitan la alternancia (`\.(jpg|png|gif)$`) y además guardan lo que encontraron, que `match` devuelve en `match[1]`, `match[2]`, etc. El `\.` es un punto de verdad; sin barra, `.` es cualquier carácter.

```text
--- Paso 7: Alternancia ---
cat|dog|bird en "I have a cat": true
cat|dog|bird en "I have a fish": false
Match completo: John: 25
Grupo 1: John
Grupo 2: 25
image.PNG: true
doc.pdf: false
```

## Paso 8: los métodos que aceptan una RegExp

`test` responde sí o no, `match` devuelve lo encontrado, `search` la posición de la primera coincidencia (o `-1`), `replace` sustituye (`$1` es el grupo 1) y `split` corta el texto donde coincide. El `''` final de `split` es lo que queda después del último `3`. El `$` se escapa como `\$` porque solo, es el ancla del final.

```text
--- Paso 8: Métodos ---
test(): true
match(): [ '$100', '$200' ]
search(): 13
replace(): The price is €100 and €200
split(): [ 'a', 'b', 'c', '' ]
```

## Paso 9: validar

Tres patrones anclados con `^` y `$`. El del email pide texto, `@`, dominio, punto y al menos dos letras; el del teléfono, tres grupos de tres dígitos con un guion o espacio opcional (`[-\s]?`) entre ellos; el de la URL, `http` con una `s` opcional y `://`. Son patrones sencillos para aprender: los de verdad son más estrictos, y el [proyecto](../../3-proyecto/README.md) los construye por partes.

```text
--- Paso 9: Validaciones ---
Email válido: true
Email inválido: false
Teléfono 612345678: true
Teléfono 612-345-678: true
URL https: true
URL sin protocolo: false

✅ Lab completado.
```

---

## Comprobación

1. En el paso 9, prueba `phoneRegex.test('612345678999')`. ¿Qué devuelve? Quita `^` y `$` y vuelve a probar. ¿Por qué cambia?
2. En el paso 3, ¿qué devuelve `'año 2024'.match(/\w+/g)`? ¿Qué le pasa a la `ñ`?
3. En el paso 8, escribe el `replace` que cambia `'2024-01-15'` en `'15/01/2024'` con tres grupos.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Tagged templates](../lab-02-template-tags/README.md) | [Lab 04 — `matchAll()` y búsqueda avanzada](../lab-04-matchall-search/README.md) → |

[↑ Semana 06](../../README.md)
