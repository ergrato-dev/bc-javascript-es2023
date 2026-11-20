# Lab 01 — Métodos modernos de strings

## Objetivo

Buscar, rellenar, limpiar, repetir, leer y reemplazar texto con los métodos modernos de `String`: `includes`, `startsWith`, `endsWith`, `padStart`, `padEnd`, `trim`, `trimStart`, `trimEnd`, `repeat`, `at` y `replaceAll`.

**Tiempo:** 50 min · **Teoría:** [01 - Métodos de strings](../../1-teoria/01-string-methods.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 8 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-06-strings_regexp_modernos/2-practicas/lab-01-string-methods
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

Ningún método de este lab modifica el texto original: los strings en JavaScript no se pueden cambiar, así que cada método devuelve un string nuevo.

---

## Paso 1: `includes()`

`includes` responde `true` o `false` según si el texto contiene otro. Distingue mayúsculas de minúsculas: para ignorarlas, pasa los dos a minúsculas con `toLowerCase()`. El segundo argumento es la posición desde la que empieza a buscar: desde la 5, «Java» ya no aparece.

```text
--- Paso 1: includes() ---
¿Contiene "Script"?: true
¿Contiene "Python"?: false
¿Contiene "javascript"?: false
¿Contiene "javascript" (ignorando caso)?: true
¿"Java" desde posición 0?: true
¿"Java" desde posición 5?: false
```

## Paso 2: `startsWith()` y `endsWith()`

Comprueban el principio y el final del texto. `isImage` pasa el nombre a minúsculas y pregunta con `some` si termina en alguna de las extensiones: por eso `photo.JPG` cuenta como imagen.

```text
--- Paso 2: startsWith / endsWith ---
¿URL empieza con https?: true
¿URL empieza con http?: false
¿Archivo termina en .pdf?: true
¿Archivo termina en .txt?: false
photo.JPG es imagen?: true
doc.pdf es imagen?: false
```

## Paso 3: `padStart()` y `padEnd()`

Rellenan el texto hasta una longitud, por delante o por detrás, con el carácter que indiques. Solo existen en strings: `formatTime` convierte cada número con `String(n)` antes de rellenarlo.

```text
--- Paso 3: padStart / padEnd ---
Pad con 0: 007
Hora formateada: 09:05:03
Nombre padded: Ana.......
ID formateado: ID-000042
```

## Paso 4: `trim()`, `trimStart()` y `trimEnd()`

Quitan los espacios de los dos lados, solo del principio o solo del final. Las comillas del `console.log` dejan ver dónde quedan. `cleanInput` es lo que harás con cualquier dato que escriba una persona: quitar espacios y pasar a minúsculas.

```text
--- Paso 4: trim ---
Email original: "  USER@Example.COM  "
trim(): "USER@Example.COM"
trimStart(): "USER@Example.COM  "
trimEnd(): "  USER@Example.COM"
Email limpio: user@example.com
```

## Paso 5: `repeat()`

Repite el texto `n` veces. `showRating` junta estrellas llenas y vacías hasta `max`.

```text
--- Paso 5: repeat() ---
Estrellas: ⭐⭐⭐⭐⭐
Separador: ------------------------------
Rating 3: ★★★☆☆
Rating 5: ★★★★★
Rating 1: ★☆☆☆☆
```

## Paso 6: `at()`

Lee el carácter de una posición. Con un índice negativo cuenta desde el final: `at(-1)` es el último, igual que `word[word.length - 1]` pero más corto.

```text
--- Paso 6: at() ---
Primer carácter: J
Quinto carácter: S
Último carácter: t
Penúltimo: p
Último (antiguo): t
Último (moderno): t
```

## Paso 7: `replaceAll()`

`replace` con un texto cambia solo la primera aparición; `replaceAll`, todas. `escapeHtml` cambia los caracteres especiales de HTML por sus entidades, para que un texto con `<script>` se muestre en lugar de ejecutarse. `&` va primero: si fuera al final, convertiría también los `&` de `&lt;`.

```text
--- Paso 7: replaceAll() ---
replace(): XXX bar foo baz foo
replaceAll(): XXX bar XXX baz XXX
HTML escapado: &lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;
```

## Paso 8: combinar métodos

Tres funciones que encadenan métodos de string y de array. Fíjate en la primera línea: entre `hello` y `world` quedan **dos** espacios. El texto tenía tres, y `replaceAll('  ', ' ')` cambia cada pareja de espacios por uno: junta los dos primeros y deja el tercero.

```text
--- Paso 8: Caso Práctico ---
Input procesado: hello  world
Números formateados: 0001, 0042, 0007, 0123
¿URL segura?: true
¿http es segura?: false

✅ Lab completado.
```

---

## Comprobación

1. En el paso 3, ¿qué devuelve `'12345'.padStart(3, '0')`? ¿Por qué no recorta el texto?
2. En el paso 8, `processUserInput('  HELLO   WORLD  ')` deja dos espacios en medio. ¿Qué método del [lab 03](../lab-03-regexp-basics/README.md) lo resuelve con un solo `replace`?
3. En el paso 7, cambia el orden de `escapeHtml` y pon `&` al final. ¿Qué sale y por qué?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Tagged templates](../lab-02-template-tags/README.md) → |

[↑ Semana 06](../../README.md)
