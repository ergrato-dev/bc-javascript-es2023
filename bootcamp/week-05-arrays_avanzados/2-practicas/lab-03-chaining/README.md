# Lab 03 — Encadenar métodos

## Objetivo

Encadenar `filter`, `map`, `sort`, `slice`, `flatMap`, `some` y `reduce` en una sola expresión que se lee de arriba abajo, sacar las funciones con nombre propio y convertir una cadena en una función reutilizable.

**Tiempo:** 45 min · **Teoría:** [03 - Chaining avanzado](../../1-teoria/03-chaining-avanzado.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 10 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-05-arrays_avanzados/2-practicas/lab-03-chaining
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: una cadena básica

Cada método devuelve un array nuevo, así que se puede llamar al siguiente sobre él: `filter` deja `4..10`, `map` los duplica y `slice(0, 3)` se queda con los tres primeros. Un método por línea, con el punto al principio, se lee como una lista de pasos.

```text
--- Paso 1: Chaining básico ---
Básico: [ 8, 10, 12 ]
```

## Paso 2: dos filtros y un `map`

Primero los activos, después los mayores de edad, y de lo que queda solo el nombre en mayúsculas. Luis es activo pero tiene 17 años; María es mayor pero no está activa.

```text
--- Paso 2: Pipeline de usuarios ---
Adultos activos: [ 'ANA', 'CARLOS', 'PEDRO' ]
```

## Paso 3: los N primeros

`sort` ordena el array **sobre el que se llama**, no una copia. `[...products]` crea una copia primero para no desordenar `products`. `b.price - a.price` ordena de mayor a menor; el [lab 04](../lab-04-sort-transform/README.md) explica la función de comparación.

```text
--- Paso 3: Top N productos ---
Top 3 caros: [ 'Laptop: $1000', 'Monitor: $300', 'Keyboard: $75' ]
```

## Paso 4: terminar en un valor

`reduce` cierra la cadena: suma los subtotales de los pedidos con más de una unidad. Laptop da 2000 y Mouse 125; Keyboard se queda fuera por el filtro.

```text
--- Paso 4: Calcular total ---
Total (qty > 1): 2125
```

## Paso 5: funciones con nombre

`isActive`, `isAdult`, `getName` y `byScoreDesc` son las mismas arrow functions de antes, guardadas en constantes. La cadena queda casi en lenguaje natural: `.filter(isActive).filter(isAdult).sort(byScoreDesc).map(getName)`. Aquí `sort` no necesita copia: lo ordena el array nuevo que devuelve `filter`.

```text
--- Paso 5: Funciones extraídas ---
Con funciones extraídas: [ 'Carlos', 'Ana', 'Pedro' ]
```

## Paso 6: `flatMap` en medio

`flatMap` también encaja en la cadena: de los departamentos con más de un empleado, saca la lista plana de empleados ([lab 01](../lab-01-flat-flatmap/README.md)).

```text
--- Paso 6: flatMap en cadena ---
De dptos grandes: [ 'ANA', 'LUIS', 'CARLOS', 'PEDRO', 'LAURA' ]
```

## Paso 7: terminar en un booleano

`some` cierra la cadena con un `true` o `false`: ¿hay algún producto en stock, con unidades y con «Pro» en el nombre?

```text
--- Paso 7: Búsqueda en cadena ---
¿Hay Pro disponible?: true
```

## Paso 8: limpiar datos

`capitalize` es otra cadena, sobre texto: separa por espacios, pone en mayúscula la primera letra de cada palabra y vuelve a unir. Después la cadena principal filtra los activos, copia cada uno con spread cambiando `name` y añadiendo `grade`, y ordena por nota. El ternario doble (`score >= 90 ? 'A' : score >= 80 ? 'B' : 'C'`) se lee de izquierda a derecha.

```text
--- Paso 8: Transformación compleja ---
Procesados: [
  { name: 'Carlos Ruiz', score: 95, status: 'active', grade: 'A' },
  { name: 'Ana Garcia', score: 85, status: 'active', grade: 'B' },
  { name: 'Maria Lopez', score: 78, status: 'active', grade: 'C' }
]
```

## Paso 9: varias estadísticas en un `reduce`

Las notas se ordenan de menor a mayor, y en cada vuelta el acumulador es un objeto nuevo: `min` es la primera nota (la del índice 0), `max` la de la vuelta actual (al acabar, la última y mayor), `sum` va sumando y `avg` se redondea a un decimal multiplicando por 10, redondeando y dividiendo.

```text
--- Paso 9: Estadísticas ---
Estadísticas: { min: 72, max: 95, sum: 600, count: 7, avg: 85.7 }
```

## Paso 10: una cadena reutilizable

`createTopPerformers(limit)` devuelve una función que recibe `users` y aplica la cadena con ese límite. `getTop2` y `getTop3` son dos funciones distintas creadas con la misma receta.

```text
--- Paso 10: Pipeline reutilizable ---
Top 2: [ { name: 'Carlos', score: 95 }, { name: 'Ana', score: 85 } ]
Top 3: [
  { name: 'Carlos', score: 95 },
  { name: 'Ana', score: 85 },
  { name: 'Pedro', score: 70 }
]

✅ Lab completado.
```

---

## Comprobación

1. En el paso 3, quita el spread (`products.sort(...)`) e imprime `products` después. ¿Qué ha cambiado?
2. En el paso 2, cambia el orden: primero el `map` y después los dos `filter`. ¿Qué devuelve y por qué no da error?
3. En el paso 10, crea `getTop1` e imprime `getTop1(users)`. ¿Qué devuelve?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — `Array.from()` y `Array.of()`](../lab-02-array-from-of/README.md) | [Lab 04 — Ordenar y transformar](../lab-04-sort-transform/README.md) → |

[↑ Semana 05](../../README.md)
