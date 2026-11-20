# 📖 Glosario - Semana 06

## Strings y RegExp Modernos

Términos clave ordenados alfabéticamente.

---

## A

### Alternation (Alternancia)
Operador `|` en regex que permite coincidir con una de varias opciones.
```javascript
const regex = /gato|perro|pájaro/;
regex.test('gato');  // true
```

### Anchor (Ancla)
Metacaracteres que coinciden con posiciones, no caracteres. `^` inicio, `$` final.
```javascript
/^Hola/.test('Hola mundo');  // true - empieza con "Hola"
/mundo$/.test('Hola mundo'); // true - termina con "mundo"
```

### at()
Método ES2022 que devuelve el carácter en un índice, soporta índices negativos.
```javascript
'JavaScript'.at(-1);  // 't'
'JavaScript'.at(0);   // 'J'
```

---

## B

### Backreference (Retrorreferencia)
Referencia a un grupo de captura previo usando `\1`, `\2`, etc.
```javascript
// Detectar palabras repetidas
const regex = /\b(\w+)\s+\1\b/;
regex.test('el el');  // true
```

### Boundary (Límite de palabra)
`\b` coincide con la posición entre un carácter de palabra y uno que no lo es.
```javascript
/\bcat\b/.test('category');  // false
/\bcat\b/.test('the cat');   // true
```

---

## C

### Capture Group (Grupo de Captura)
Paréntesis `()` que capturan parte del match para uso posterior.
```javascript
const match = 'Juan:30'.match(/(\w+):(\d+)/);
// match[1] = 'Juan', match[2] = '30'
```

### Character Class (Clase de Caracteres)
Conjunto de caracteres entre `[]` que coincide con cualquiera de ellos.
```javascript
/[aeiou]/.test('hola');  // true - contiene vocal
/[0-9]/.test('abc123');  // true - contiene dígito
```

### Code Point
Valor numérico único asignado a cada carácter en Unicode.
```javascript
'😀'.codePointAt(0);  // 128512
String.fromCodePoint(128512);  // '😀'
```

---

## D

### Destructuring (en contexto de matchAll)
Extraer valores del iterador de matchAll.
```javascript
const [...matches] = 'a1 b2'.matchAll(/(\w)(\d)/g);
```

---

## E

### Escape Sequence (Secuencia de Escape)
Caracteres especiales precedidos por `\`: `\n`, `\t`, `\d`, etc.
```javascript
/\d+/.test('123');  // \d = dígito
/\s/.test(' ');     // \s = espacio
```

### exec()
Método de RegExp que ejecuta búsqueda y retorna array con match y grupos.
```javascript
const regex = /(\d+)/;
regex.exec('abc123');  // ['123', '123', index: 3]
```

---

## F

### Flag (Bandera)
Modificadores que cambian el comportamiento del regex: `g`, `i`, `m`, `s`, `u`, `y`, `d`.
```javascript
/abc/i   // i = case insensitive
/abc/g   // g = global (todas las coincidencias)
/abc/m   // m = multiline
/abc/d   // d = hasIndices (ES2022)
```

---

## G

### Global Flag
`/g` que permite encontrar todas las coincidencias, no solo la primera.
```javascript
'a1 a2 a3'.match(/a\d/g);  // ['a1', 'a2', 'a3']
```

### Greedy (Codicioso)
Comportamiento por defecto: cuantificadores toman lo máximo posible.
```javascript
'<div>text</div>'.match(/<.*>/);  // '<div>text</div>'
```

---

## H

### hasIndices Flag (ES2022)
Flag `/d` que añade la propiedad `indices` al resultado del match, con las posiciones de inicio y fin de cada grupo de captura.
```javascript
const match = 'Hello John'.match(/Hello (\w+)/d);
console.log(match.indices);  // [[0, 10], [6, 10]]
// indices[0] = match completo
// indices[1] = grupo 1 ('John')
```

---

## I

### includes()
Método que verifica si un string contiene otro, retorna boolean.
```javascript
'JavaScript'.includes('Script');  // true
```

### Interpolation (Interpolación)
Insertar expresiones en template literals usando `${}`.
```javascript
const name = 'Ana';
`Hola, ${name}!`;  // 'Hola, Ana!'
```

---

## L

### Lazy (Perezoso)
Cuantificador con `?` que toma lo mínimo posible.
```javascript
'<div>text</div>'.match(/<.*?>/);  // '<div>'
```

### Lookahead
Aserción que verifica lo que sigue sin incluirlo en el match.
```javascript
// Positivo: seguido de...
/\d+(?=€)/.exec('100€');  // ['100']

// Negativo: NO seguido de...
/\d+(?!€)/.exec('100$');  // ['100']
```

### Lookbehind
Aserción que verifica lo que precede sin incluirlo en el match.
```javascript
// Positivo: precedido por...
/(?<=\$)\d+/.exec('$100');  // ['100']

// Negativo: NO precedido por...
/(?<!\$)\d+/.exec('€100');  // ['100']
```

---

## M

### match()
Método de String que busca coincidencias con un regex.
```javascript
'abc123'.match(/\d+/);   // ['123']
'abc123'.match(/\d+/g);  // ['1', '2', '3'] con /g pierde grupos
```

### matchAll()
Método ES2020 que retorna iterador con TODAS las coincidencias incluyendo grupos.
```javascript
const matches = [...'a1 b2'.matchAll(/(\w)(\d)/g)];
// Cada match incluye grupos de captura
```

### Multiline Flag
`/m` que hace que `^` y `$` coincidan con inicio/fin de cada línea.
```javascript
/^abc/m.test('xyz\nabc');  // true
```

---

## N

### Named Capture Group (Grupo Nombrado)
Grupo con nombre usando `(?<name>...)` para acceso por nombre.
```javascript
const regex = /(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})/;
const match = '25/12/2024'.match(regex);
match.groups.day;   // '25'
match.groups.year;  // '2024'
```

### Non-Capturing Group
Grupo `(?:...)` que agrupa sin capturar.
```javascript
/(?:ab)+/.test('ababab');  // true, pero no captura
```

---

## P

### padStart() / padEnd()
Métodos que rellenan un string hasta alcanzar cierta longitud.
```javascript
'5'.padStart(3, '0');   // '005'
'Hi'.padEnd(5, '.');    // 'Hi...'
```

### Pattern (Patrón)
Expresión regular que define qué buscar.
```javascript
const pattern = /[A-Z][a-z]+/;  // Palabra capitalizada
```

---

## Q

### Quantifier (Cuantificador)
Especifica cuántas veces debe coincidir un elemento: `*`, `+`, `?`, `{n}`, `{n,m}`.
```javascript
/a*/   // 0 o más 'a'
/a+/   // 1 o más 'a'
/a?/   // 0 o 1 'a'
/a{3}/ // exactamente 3 'a'
/a{2,4}/ // entre 2 y 4 'a'
```

---

## R

### Raw String
Template tag `String.raw` que no procesa secuencias de escape.
```javascript
String.raw`Línea1\nLínea2`;  // 'Línea1\\nLínea2'
```

### repeat()
Método que repite un string n veces.
```javascript
'ab'.repeat(3);  // 'ababab'
```

### replace() / replaceAll()
Métodos para reemplazar texto. `replaceAll` reemplaza todas las ocurrencias.
```javascript
'aaa'.replace('a', 'b');     // 'baa'
'aaa'.replaceAll('a', 'b');  // 'bbb'
```

---

## S

### search()
Método que retorna el índice de la primera coincidencia.
```javascript
'abc123'.search(/\d/);  // 3
```

### split()
Método que divide string usando separador (puede ser regex).
```javascript
'a,b;c'.split(/[,;]/);  // ['a', 'b', 'c']
```

### startsWith() / endsWith()
Métodos que verifican si string empieza/termina con otro.
```javascript
'JavaScript'.startsWith('Java');  // true
'JavaScript'.endsWith('Script');  // true
```

### Sticky Flag
`/y` que requiere coincidencia exactamente en `lastIndex`.
```javascript
const regex = /\d+/y;
regex.lastIndex = 3;
regex.exec('abc123');  // ['123']
```

---

## T

### Tagged Template
Función que procesa un template literal.
```javascript
const tag = (strings, ...values) => {
  return strings.reduce((acc, str, i) =>
    acc + str + (values[i] || ''), '');
};
tag`Hola ${name}!`;
```

### Template Literal
String con backticks que permite interpolación y multilínea.
```javascript
const multi = `Línea 1
Línea 2`;

const interp = `Resultado: ${2 + 2}`;
```

### test()
Método de RegExp que retorna boolean indicando si hay match.
```javascript
/\d+/.test('abc123');  // true
/\d+/.test('abc');     // false
```

### trim() / trimStart() / trimEnd()
Métodos que eliminan espacios en blanco.
```javascript
'  hola  '.trim();       // 'hola'
'  hola  '.trimStart();  // 'hola  '
'  hola  '.trimEnd();    // '  hola'
```

---

## U

### Unicode Flag
`/u` que habilita soporte completo de Unicode.
```javascript
/\u{1F600}/u.test('😀');  // true
```

### Unicode Property Escape
`\p{Property}` para coincidir categorías Unicode (requiere `/u`).
```javascript
/\p{Emoji}/u.test('😀');      // true
/\p{Script=Latin}/u.test('a'); // true
```

---

## W

### Word Boundary
`\b` coincide entre `\w` y `\W` (o inicio/fin de string).
```javascript
/\bword\b/.test('a word here');  // true
/\bword\b/.test('keyword');      // false
```

---

## Símbolos y Metacaracteres

| Símbolo | Significado |
|---------|-------------|
| `.` | Cualquier carácter (excepto newline) |
| `^` | Inicio de string/línea |
| `$` | Fin de string/línea |
| `*` | 0 o más |
| `+` | 1 o más |
| `?` | 0 o 1 / Lazy |
| `\|` | Alternancia (OR) |
| `[]` | Clase de caracteres |
| `()` | Grupo de captura |
| `{}` | Cuantificador específico |
| `\d` | Dígito [0-9] |
| `\w` | Palabra [a-zA-Z0-9_] |
| `\s` | Espacio en blanco |
| `\b` | Límite de palabra |

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | [📚 Semana 07: Sets y Maps](../../week-07-sets_maps/README.md) → |

[↑ Semana 06](../README.md)
