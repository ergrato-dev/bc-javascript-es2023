# Lab 04 — `matchAll()` y búsqueda avanzada

## Objetivo

Recorrer todas las coincidencias de una expresión regular con `matchAll()` sin perder sus grupos, nombrar los grupos con `(?<nombre>...)`, convertir texto suelto (logs, Markdown, contactos, plantillas) en objetos, y obtener la posición de cada grupo con el flag `d` (ES2022).

**Tiempo:** 55 min · **Teoría:** [05 - matchAll y búsqueda](../../1-teoria/05-matchall-search.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 10 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-06-strings_regexp_modernos/2-practicas/lab-04-matchall-search
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título. Los datos del principio del archivo (`logData`, `markdown`, `contacts`) son template literals de varias líneas: empiezan y terminan con un salto de línea.

---

## Paso 1: el problema de `match()` con `g`

Con el flag `g`, `match` devuelve solo los textos completos. Los grupos `(\w+)` y `(\d+)` se pierden: no hay forma de sacar el nombre y la edad por separado.

```text
--- Paso 1: Problema con match() ---
match() con /g: [ 'John: 25', 'Jane: 30', 'Bob: 28' ]
```

## Paso 2: `matchAll()`

`matchAll` devuelve un iterador: un objeto que se recorre con `for...of` y da una coincidencia por vuelta, cada una con sus grupos, igual que `match` sin `g`. Exige el flag `g`; sin él lanza un `TypeError`.

```text
--- Paso 2: matchAll() Básico ---
Full: John: 25
Name: John
Age: 25
---
Full: Jane: 30
Name: Jane
Age: 30
---
Full: Bob: 28
Name: Bob
Age: 28
---
```

## Paso 3: pasar a array

Un iterador no tiene `map` ni `length`. Con spread (`[...iterador]`) o `Array.from(iterador, fn)` de la semana 05 lo conviertes en array. Un iterador solo se recorre una vez: por eso `Array.from` vuelve a llamar a `matchAll`. El flag `i` acepta `#FF0000` además de `#ff0000`.

```text
--- Paso 3: Convertir a Array ---
Total matches: 3
Colores: [ 'ff0000', '00ff00', '0000ff' ]
Con #: [ '#ff0000', '#00ff00', '#0000ff' ]
```

## Paso 4: grupos con nombre

`(?<year>\d{4})` es un grupo que además tiene nombre: su valor está en `m.groups.year`. El código se lee sin contar paréntesis.

```text
--- Paso 4: Grupos Nombrados ---
Fechas: [
  { year: '2024', month: '01', day: '15', formatted: '15/01/2024' },
  { year: '2024', month: '02', day: '20', formatted: '20/02/2024' },
  { year: '2024', month: '03', day: '25', formatted: '25/03/2024' }
]
```

## Paso 5: leer un log

Cuatro grupos con nombre convierten cada línea del log en un objeto. `(?<message>.+)` llega hasta el final de la línea porque `.` no incluye el salto de línea. Una vez en array, filtrar por nivel es un `filter` normal.

```text
--- Paso 5: Parsear Logs ---
Log entries: [
  {
    date: '2024-01-15',
    time: '10:30:00',
    level: 'INFO',
    message: 'Server started on port 3000'
  },
  {
    date: '2024-01-15',
    time: '10:30:05',
    level: 'ERROR',
    message: 'Database connection failed'
  },
  {
    date: '2024-01-15',
    time: '10:30:10',
    level: 'WARN',
    message: 'High memory usage: 85%'
  },
  {
    date: '2024-01-15',
    time: '10:30:15',
    level: 'INFO',
    message: 'User login: john@example.com'
  }
]
Errores: [
  {
    date: '2024-01-15',
    time: '10:30:05',
    level: 'ERROR',
    message: 'Database connection failed'
  }
]
```

## Paso 6: enlaces de Markdown

Un enlace de Markdown lleva el texto entre corchetes y la dirección entre paréntesis: `[Google](https://google.com)`. `[^\]]+` es «uno o más caracteres que no sean `]`»: así el grupo `text` se para en el primer corchete de cierre. En `replace`, `$<url>` y `$<text>` insertan los grupos con nombre. Las líneas en blanco de la salida son los saltos de línea del principio y el final de `markdown`.

```text
--- Paso 6: Links de Markdown ---
Links encontrados: [
  { text: 'Google', url: 'https://google.com' },
  { text: 'GitHub', url: 'https://github.com' },
  { text: 'MDN', url: 'https://developer.mozilla.org' }
]
HTML: 
Visit <a href="https://google.com">Google</a> for search.
Check <a href="https://github.com">GitHub</a> for code.
Read <a href="https://developer.mozilla.org">MDN</a> for docs.

```

## Paso 7: contactos

`[\w\s]+` para el nombre también coge el salto de línea anterior, porque `\s` lo incluye: por eso el `map` lo quita con `trim()`.

```text
--- Paso 7: Extraer Contactos ---
Contactos: [
  {
    name: 'John Smith',
    email: 'john@email.com',
    phone: '+1-555-123-4567'
  },
  {
    name: 'Jane Doe',
    email: 'jane.doe@company.org',
    phone: '+44-20-7946-0958'
  },
  {
    name: 'Bob Wilson',
    email: 'bob_wilson@test.net',
    phone: '+34-612-345-678'
  }
]
Emails: [ 'john@email.com', 'jane.doe@company.org', 'bob_wilson@test.net' ]
```

## Paso 8: posiciones

Cada coincidencia trae `m.index`, la posición donde empieza; el final es `index + longitud`. Para marcar las palabras, el código las recorre **desde la última** con `toReversed()` (ES2023, no modifica `wordsWithPos`): si empezara por la primera, cada `[` y `]` añadido movería las posiciones de las siguientes.

```text
--- Paso 8: Índices de Posición ---
Palabras con posición: [
  { word: 'quick', start: 4, end: 9 },
  { word: 'brown', start: 10, end: 15 },
  { word: 'jumps', start: 20, end: 25 },
  { word: 'over', start: 26, end: 30 },
  { word: 'lazy', start: 35, end: 39 }
]
Resaltado: The [quick] [brown] fox [jumps] [over] the [lazy] dog
```

## Paso 9: un motor de plantillas

`\{\{(\w+)\}\}` encuentra cada `{{variable}}` (las llaves se escapan porque `{}` es un cuantificador). `matchAll` lista las variables y `replace` con una función las sustituye: la función recibe la coincidencia entera y el grupo 1, y devuelve el texto que va en su lugar. Si `data` no tiene esa clave, `?? match` deja la variable como estaba.

```text
--- Paso 9: Template Engine ---
Variables en template: [ 'name', 'orderId', 'status', 'total' ]
Renderizado: 
Hola Ana,
Tu pedido #12345 ha sido enviado.
Total: 99.99€

```

## Paso 10: el flag `d`

`m.index` solo dice dónde empieza la coincidencia entera. Con el flag `d` (ES2022), la coincidencia trae además `indices`: un par `[inicio, fin]` para la coincidencia (`indices[0]`) y para cada grupo (`indices.groups.nombre`). `fin` es la posición siguiente al último carácter, la misma convención de `slice`, así que `entry.slice(start, end)` devuelve el texto del grupo. `hasIndices` dice si una RegExp tiene el flag.

```text
--- Paso 10: Flag /d ---
hasIndices: true
Coincidencia: [ 0, 33 ]
level: [ 0, 5 ]
message: [ 7, 33 ]
Texto del grupo: Database connection failed

✅ Lab completado.
```

---

## Comprobación

1. En el paso 2, quita la `g` de `personRegex`. ¿Qué error sale?
2. En el paso 9, añade `{{city}}` a la plantilla sin añadirlo a `data`. ¿Qué queda en el texto renderizado?
3. En el paso 10, ¿qué imprime `found.indices.groups.level` si la entrada es `'  WARN: Disk almost full'`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Fundamentos de RegExp](../lab-03-regexp-basics/README.md) | [Proyecto — Registro de fichas](../../3-proyecto/README.md) → |

[↑ Semana 06](../../README.md)
