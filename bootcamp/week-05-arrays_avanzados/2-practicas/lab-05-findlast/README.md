# Lab 05 — `findLast()` y `findLastIndex()`

## Objetivo

Buscar desde el final de un array con `findLast()` y `findLastIndex()` (ES2023): el último registro de un historial, la última versión estable, el último pedido de un cliente. Y combinar el índice encontrado con `with()` y `toSpliced()` para cambiar o quitar ese elemento sin modificar el array.

**Tiempo:** 40 min · **Teoría:** [06 - findLast y findLastIndex](../../1-teoria/06-findLast-findLastIndex.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-05-arrays_avanzados/2-practicas/lab-05-findlast
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

Los datos de todos los pasos (`numbers`, `activityLog`, `versions`, `orders` y `notifications`) están al principio del archivo, sin comentar.

## Paso 1: `findLast()`

`findLast` recorre el array desde el final y devuelve el primer elemento que cumple la condición, es decir, el último del array. Si ninguno la cumple, devuelve `undefined`, igual que `find`. Node imprime los arrays largos de números en columnas.

```text
--- Paso 1: findLast() Básico ---
Números: [
   5, 12,  8, 130,
  44,  8, 22
]
Último mayor que 10: 22
Último par: 22
Último menor que 5: undefined
```

## Paso 2: `find()` frente a `findLast()`

Cuando buscas un valor exacto (`n === 8`), los dos devuelven `8` aunque encuentren elementos distintos. Con una condición más amplia (`n > 3`) la diferencia se ve: `find` da el primero que la cumple y `findLast` el último.

```text
--- Paso 2: findLast() vs find() ---
Array: [
  1, 2, 8, 4,
  5, 8, 7
]
find(n => n === 8): 8 (primer 8)
findLast(n => n === 8): 8 (último 8)
find(n => n > 3): 8 (primer > 3)
findLast(n => n > 3): 7 (último > 3)
```

## Paso 3: `findLastIndex()`

Devuelve la **posición** del último elemento que cumple la condición, o `-1` si no hay ninguno. Con la posición puedes leer el elemento (`numbers[5]`) o cambiarlo, como en el paso 7.

```text
--- Paso 3: findLastIndex() Básico ---
Números: [
   5, 12,  8, 130,
  44,  8, 22
]
findLastIndex(n => n === 8): 5
findIndex(n => n === 8): 2
findLastIndex(n => n > 200): -1

Comparación:
  findIndex(n => n === 8): 2 → numbers[2] = 8
  findLastIndex(n => n === 8): 5 → numbers[5] = 8
```

## Paso 4: un historial

Los registros están en orden de llegada, así que «el último login» es el último del array que cumple `action === 'login'`. Antes de ES2023 había que invertir una copia del array o recorrerlo hacia atrás con un `for`.

```text
--- Paso 4: Historial de Actividad ---
Log de actividad:
  [0] login - alice @ 08:00:00
  [1] view_page - alice @ 08:05:00
  [2] edit - alice @ 08:10:00
  [3] login - bob @ 08:12:00
  [4] save - alice @ 08:15:00
  [5] view_page - bob @ 08:20:00
  [6] logout - alice @ 08:30:00

Último login: { action: 'login', user: 'bob', timestamp: '2024-01-15T08:12:00' }
Última actividad de Alice: { action: 'logout', user: 'alice', timestamp: '2024-01-15T08:30:00' }
Índice de última edición: 2
```

## Paso 5: versiones

La última estable y la última pre-release, cada una con un `findLast`. `latestStable?.version` usa encadenamiento opcional por si `findLast` devuelve `undefined`. Con el índice de la última estable se calcula cuántas versiones hay después: `versions.length - 1 - lastStableIndex`.

```text
--- Paso 5: Sistema de Versiones ---
Versiones disponibles:
  [0] 1.0.0 - ✅ stable (2023-01-01)
  [1] 1.1.0 - ✅ stable (2023-03-15)
  [2] 1.2.0-beta - 🧪 pre-release (2023-05-01)
  [3] 2.0.0 - ✅ stable (2023-06-01)
  [4] 2.1.0-alpha - 🧪 pre-release (2023-07-15)
  [5] 2.1.0-beta - 🧪 pre-release (2023-08-01)

Última versión estable: 2.0.0
Última pre-release: 2.1.0-beta
Pre-releases después de la última estable: 2
```

## Paso 6: pedidos

La condición puede combinar varias propiedades con `&&`. Antes de usar el índice de `findLastIndex`, el código comprueba que no es `-1`: `orders[-1]` sería `undefined`.

```text
--- Paso 6: Procesamiento de Pedidos ---
Pedidos:
  [0] #1 - Alice - delivered - $99.99
  [1] #2 - Bob - pending - $149.99
  [2] #3 - Alice - shipped - $79.99
  [3] #4 - Alice - delivered - $199.99
  [4] #5 - Carol - pending - $59.99
  [5] #6 - Bob - delivered - $299.99

Último pedido entregado de Alice: { id: 4, status: 'delivered', customer: 'Alice', total: 199.99 }
Último pedido pendiente: { id: 5, status: 'pending', customer: 'Carol', total: 59.99 }
Índice del último pedido > $100: 5
  Pedido: { id: 6, status: 'delivered', customer: 'Bob', total: 299.99 }
```

## Paso 7: con `with()` y `toSpliced()`

`findLastIndex` da la posición de la última notificación sin leer. `notifications.with(index, nuevo)` devuelve una copia del array con ese elemento cambiado, y `toSpliced(index, 1)` una copia sin él. Los dos son de ES2023 y no modifican `notifications`: al final, la original sigue sin leer y con 5 elementos.

```text
--- Paso 7: Combinando con Otros Métodos ES2023 ---
Notificaciones originales:
  [0] ✓ Welcome to our app!
  [1] ○ You have a new follower
  [2] ○ Your post was liked
  [3] ✓ Weekly digest available
  [4] ○ New comment on your post

Índice de última no leída: 4

Después de marcar como leída (con with):
  [0] ✓ Welcome to our app!
  [1] ○ You have a new follower
  [2] ○ Your post was liked
  [3] ✓ Weekly digest available
  [4] ✓ New comment on your post

Original sin modificar: ○ no leída

Después de eliminar última no leída (con toSpliced):
  Original tiene 5 elementos
  Nueva lista tiene 4 elementos

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, ¿qué devuelven `numbers.findLast(n => n > 100)` y `numbers.findLastIndex(n => n > 100)`? ¿Por qué coinciden con `find` y `findIndex`?
2. En el paso 4, busca el último registro de Bob. ¿Qué acción es y en qué índice está?
3. En el paso 7, añade justo después del `with` la línea `notifications[lastUnreadIndex] = { ...notifications[lastUnreadIndex], read: true };`. ¿Qué imprime ahora «Original sin modificar» y por qué?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Ordenar y transformar](../lab-04-sort-transform/README.md) | [Proyecto — Explorador de colección](../../3-proyecto/README.md) → |

[↑ Semana 05](../../README.md)
