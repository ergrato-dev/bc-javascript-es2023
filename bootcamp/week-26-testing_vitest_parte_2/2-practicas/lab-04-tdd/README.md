# Lab 04 — TDD

## Objetivo

Escribir una función con TDD: primero un test que falla (rojo), después el código justo para que pase (verde) y, con los tests en verde, mejorar el código (refactorizar). Siete ciclos para `formatDuration`, que escribe una duración en segundos como `'1 h 2 min 5 s'`. Los cinco primeros, guiados; los dos últimos, tuyos.

**Tiempo:** 55 min · **Teoría:** [04 - TDD](../../1-teoria/04-tdd.md)

## Cómo trabajar

[`starter/src/duration.js`](starter/src/duration.js) tiene `formatDuration` vacía. [`starter/tests/duration.test.js`](starter/tests/duration.test.js) tiene un bloque por ciclo. En cada ciclo:

1. **Rojo:** descomenta el bloque del ciclo y ejecuta. El test nuevo falla. Lee por qué.
2. **Verde:** cambia `formatDuration` por el código del ciclo, el mínimo para que pase, y ejecuta. Todos en verde.
3. **Refactorizar**, cuando el código lo pida, sin cambiar los tests y ejecutando después.

Una sola vez, instala las dependencias:

```bash
cd bootcamp/week-26-testing_vitest_parte_2/2-practicas/lab-04-tdd/starter
pnpm install
```

Y en cada paso:

```bash
pnpm test --reporter=verbose
```

Si prefieres no escribir el comando cada vez, `pnpm vitest` sin `run` se queda vigilando: vuelve a ejecutar los tests cada vez que guardas un archivo. Sales con `q`. Es la forma habitual de trabajar con TDD.

Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0 y Vitest 5.1.0. Se muestran las líneas de los tests nuevos de cada ciclo y la primera línea de cada fallo.

---

## Ciclo 1: El caso más simple

**Rojo.** Descomenta el ciclo 1:

```text
 × tests/duration.test.js > Ciclo 1 > 0 segundos son 0 s 4ms
   → expected undefined to be '0 s' // Object.is equality
```

El test falla por la razón esperada: la función no devuelve nada. Un test que falla por otra razón (un error de sintaxis, un `import` mal escrito) no cuenta como rojo: arréglalo antes de seguir.

**Verde.** El código mínimo:

```js
export const formatDuration = (seconds) => {
  return '0 s';
};
```

```text
 ✓ tests/duration.test.js > Ciclo 1 > 0 segundos son 0 s 1ms

 Test Files  1 passed (1)
      Tests  1 passed (1)
```

Devolver `'0 s'` siempre parece trampa, y lo es a propósito: con un solo test, nada pide más. El siguiente test obligará a generalizar.

## Ciclo 2: Otro número de segundos

**Rojo:**

```text
 × tests/duration.test.js > Ciclo 2 > 45 segundos son 45 s 4ms
   → expected '0 s' to be '45 s' // Object.is equality
```

**Verde:**

```js
export const formatDuration = (seconds) => {
  return `${seconds} s`;
};
```

```text
 ✓ tests/duration.test.js > Ciclo 1 > 0 segundos son 0 s 1ms
 ✓ tests/duration.test.js > Ciclo 2 > 45 segundos son 45 s 0ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
```

Dos ejemplos distintos obligaron a usar `seconds`. Es la **triangulación**: cada test nuevo descarta una solución falsa.

## Ciclo 3: Los minutos

**Rojo:**

```text
 × tests/duration.test.js > Ciclo 3 > 90 segundos son 1 min 30 s 4ms
   → expected '90 s' to be '1 min 30 s' // Object.is equality
 × tests/duration.test.js > Ciclo 3 > 60 segundos son 1 min, sin 0 s 1ms
   → expected '60 s' to be '1 min' // Object.is equality
```

El segundo test es una decisión: un minuto justo se escribe `'1 min'`, no `'1 min 0 s'`. Escribirla como test la deja apuntada para siempre.

**Verde:**

```js
export const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  if (minutes === 0) return `${rest} s`;
  if (rest === 0) return `${minutes} min`;
  return `${minutes} min ${rest} s`;
};
```

```text
 ✓ tests/duration.test.js > Ciclo 3 > 90 segundos son 1 min 30 s 0ms
 ✓ tests/duration.test.js > Ciclo 3 > 60 segundos son 1 min, sin 0 s 0ms

 Test Files  1 passed (1)
      Tests  4 passed (4)
```

## Ciclo 4: Las horas

**Rojo:**

```text
 × tests/duration.test.js > Ciclo 4 > 3600 segundos son 1 h 5ms
   → expected '60 min' to be '1 h' // Object.is equality
 × tests/duration.test.js > Ciclo 4 > 3725 segundos son 1 h 2 min 5 s 1ms
   → expected '62 min 5 s' to be '1 h 2 min 5 s' // Object.is equality
 × tests/duration.test.js > Ciclo 4 > 3605 segundos son 1 h 5 s, sin 0 min 1ms
   → expected '60 min 5 s' to be '1 h 5 s' // Object.is equality
```

Con tres unidades, los `if` del ciclo 3 ya no escalan: harían falta todas las combinaciones. Mejor ir juntando las partes que no son 0:

**Verde:**

```js
export const formatDuration = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const rest = seconds % 60;
  const parts = [];
  if (hours > 0) parts.push(`${hours} h`);
  if (minutes > 0) parts.push(`${minutes} min`);
  if (rest > 0 || parts.length === 0) parts.push(`${rest} s`);
  return parts.join(' ');
};
```

```text
 ✓ tests/duration.test.js > Ciclo 4 > 3600 segundos son 1 h 0ms
 ✓ tests/duration.test.js > Ciclo 4 > 3725 segundos son 1 h 2 min 5 s 0ms
 ✓ tests/duration.test.js > Ciclo 4 > 3605 segundos son 1 h 5 s, sin 0 min 0ms

 Test Files  1 passed (1)
      Tests  7 passed (7)
```

`parts.length === 0` cubre el 0 del ciclo 1: si no hay ninguna otra parte, se escribe `0 s`. Los 7 tests, también los de los ciclos anteriores, siguen en verde.

## Ciclo 5: Refactorizar

No hay test nuevo. El código funciona, pero repite el mismo patrón tres veces (dividir, quedarse con el resto, añadir la parte), con los tamaños de las unidades escritos a mano. Cámbialo por una tabla de unidades y un bucle:

```js
// Cada unidad con los segundos que tiene, de la mayor a la menor.
const UNITS = [
  ['h', 3600],
  ['min', 60],
  ['s', 1],
];

export const formatDuration = (seconds) => {
  if (seconds === 0) return '0 s';
  let rest = seconds;
  const parts = [];
  for (const [unit, size] of UNITS) {
    const amount = Math.floor(rest / size);
    rest -= amount * size;
    if (amount > 0) parts.push(`${amount} ${unit}`);
  }
  return parts.join(' ');
};
```

```text
 ✓ tests/duration.test.js > Ciclo 1 > 0 segundos son 0 s 2ms
 ...
 ✓ tests/duration.test.js > Ciclo 4 > 3605 segundos son 1 h 5 s, sin 0 min 0ms

 Test Files  1 passed (1)
      Tests  7 passed (7)
```

Has cambiado la función entera y sabes en un segundo que sigue haciendo lo mismo: los tests son la red. Esa es la razón de refactorizar solo en verde. Si un test fallara aquí, el cambio no sería un refactor, sino un error: deshazlo.

## Ciclo 6: Los días (lo resuelves tú)

**Rojo.** Descomenta el ciclo 6:

```text
 × tests/duration.test.js > Ciclo 6 > 86400 segundos son 1 d 4ms
   → expected '24 h' to be '1 d' // Object.is equality
 × tests/duration.test.js > Ciclo 6 > 90061 segundos son 1 d 1 h 1 min 1 s 1ms
   → expected '25 h 1 min 1 s' to be '1 d 1 h 1 min 1 s' // Object.is equality
```

**Verde.** Escribe tú el cambio. Pista: con el refactor del ciclo 5 es una sola línea. Cuando esté:

```text
 ✓ tests/duration.test.js > Ciclo 6 > 86400 segundos son 1 d 0ms
 ✓ tests/duration.test.js > Ciclo 6 > 90061 segundos son 1 d 1 h 1 min 1 s 0ms

 Test Files  1 passed (1)
      Tests  9 passed (9)
```

## Ciclo 7: Lo que no es una duración (lo resuelves tú)

**Rojo.** Descomenta el ciclo 7:

```text
 × tests/duration.test.js > Ciclo 7 > rechaza -1 3ms
   → expected function to throw an error, but it didn't
 × tests/duration.test.js > Ciclo 7 > rechaza 1.5 0ms
   → expected function to throw an error, but it didn't
 × tests/duration.test.js > Ciclo 7 > rechaza NaN 0ms
   → expected function to throw an error, but it didn't
 × tests/duration.test.js > Ciclo 7 > rechaza Infinity 0ms
   → expected function to throw an error, but it didn't
 × tests/duration.test.js > Ciclo 7 > rechaza '60' 0ms
   → expected function to throw an error, but it didn't
```

**Verde.** Haz que `formatDuration` lance un `RangeError` con todo lo que no sea un número entero de 0 o más. Pista: una línea al principio, con `Number.isInteger`. Cuando esté:

```text
 ✓ tests/duration.test.js > Ciclo 7 > rechaza -1 0ms
 ✓ tests/duration.test.js > Ciclo 7 > rechaza 1.5 0ms
 ✓ tests/duration.test.js > Ciclo 7 > rechaza NaN 0ms
 ✓ tests/duration.test.js > Ciclo 7 > rechaza Infinity 0ms
 ✓ tests/duration.test.js > Ciclo 7 > rechaza '60' 0ms

 Test Files  1 passed (1)
      Tests  14 passed (14)
```

```text
✅ Lab completado.
```

---

## Comprobación

1. En el ciclo 1, ¿por qué es mejor devolver `'0 s'` fijo que escribir ya la función entera? ¿Qué test habría quedado sin escribir?
2. Antes del ciclo 7, ¿qué devolvía `formatDuration(-1)`? Compruébalo con un test. ¿Habrías encontrado ese caso escribiendo el código primero?
3. Haz un refactor de los tests: junta los casos de los ciclos 1 a 6 en un solo `it.each` con una tabla `{ seconds, text }`. ¿Siguen pasando 14 tests?
4. Añade con TDD un segundo parámetro opcional, `{ short: true }`, que escriba `'1:02:05'` en lugar de `'1 h 2 min 5 s'`. Escribe primero los tests.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Tests de integración](../lab-03-tests-de-integracion/README.md) | [Proyecto — Proyecto — Tests del cliente asíncrono](../../3-proyecto/README.md) → |

[↑ Semana 26](../../README.md)
