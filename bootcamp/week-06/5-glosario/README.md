# Glosario - Week 06 (Strings y RegExp)

## A
**Ancla**: Marca inicio `^` o fin `$` de línea/texto. Con flag `m`, aplica por línea.

**Alternancia**: Opción entre patrones usando `|`.

## B
**Backreference**: Reutiliza un grupo capturado. `/ (\w+) \1 /` coincide palabras repetidas.

**Boundary (\b)**: Límite de palabra basado en `\w`; `\B` es el inverso.

## C
**Catastrophic backtracking**: Crecimiento explosivo de intentos por cuantificadores ambiguos como `(.+)+`. Evitar con patrones acotados.

**Cuantificador**: Controla repeticiones: `?`, `*`, `+`, `{n}`, `{n,m}`. Versión lazy con `?` extra (`*?`).

## E
**Escape de caracteres**: Anteponer `\` a metacaracteres (`. + * ? | ( ) [ ] { } ^ $`).

## F
**Flag**: Modifica el comportamiento de RegExp: `g, i, m, s, u, y`.

## G
**Grupo de captura**: `( ... )` almacena coincidencia para reuso o reemplazo (`$1`).

**Grupo no captura**: `(?: ... )` agrupa sin guardar resultado.

**Grupo nombrado**: `(?<name> ... )` accedido como `$<name>` o `\k<name>`.

## I
**Interpolación**: Insertar valores en template literals: `` `Hola ${name}` ``.

## L
**Lazy vs Greedy**: Greedy consume lo máximo; lazy (`*?`, `+?`) consume lo mínimo necesario.

**Lookahead**: Valida lo que sigue sin consumir: `(?=patron)`, `(?!patron)`.

**Lookbehind**: Valida lo previo sin consumir: `(?<=patron)`, `(?<!patron)`.

## N
**Normalización (NFC/NFD)**: Forma canónica de Unicode. `"á".normalize('NFD')` separa base + acento.

## P
**PadStart/PadEnd**: Relleno a la izquierda/derecha hasta longitud fija. `'7'.padStart(3,'0') // "007"`.

## R
**RegExp**: Objeto para patrones de búsqueda. Literal `/foo/g` o constructor `new RegExp('foo','g')`.

**Replace / ReplaceAll**: Sustituye coincidencias; replaceAll exige flag `g` si se usa RegExp.

## S
**Split**: Divide string por separador string o RegExp, retorna array.

**String literal**: Cadena entre comillas simples/dobles. No admite interpolación.

**Template literal**: Cadena entre backticks con interpolación y multilínea.

## T
**Trim / TrimStart / TrimEnd**: Elimina espacios en ambos extremos o uno solo.

**UTF-16**: Codificación interna en JS; algunos caracteres ocupan 2 code units (emoji).

**Unicode**: Conjunto de caracteres universal. Flag `u` habilita soporte completo en RegExp.
