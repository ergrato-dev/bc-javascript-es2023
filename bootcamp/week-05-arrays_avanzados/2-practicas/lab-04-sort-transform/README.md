# Lab 04 — Ordenar y transformar

## Objetivo

Ordenar números, textos y objetos con una función de comparación (también por varios criterios, con valores vacíos y con un orden propio), y convertir un array en un objeto agrupado o indexado con `reduce`.

**Tiempo:** 45 min · **Teoría:** [04 - Transformaciones de datos](../../1-teoria/04-transformaciones-datos.md) y [05 - Sort personalizado](../../1-teoria/05-sort-personalizado.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 10 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-05-arrays_avanzados/2-practicas/lab-04-sort-transform
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

Todos los pasos ordenan una copia (`[...array].sort(...)`), porque `sort` cambia el array sobre el que se llama. `toSorted`, de la [teoría 05](../../1-teoria/05-sort-personalizado.md), hace lo mismo sin copia previa.

## Paso 1: el orden por defecto

Sin función, `sort` convierte cada elemento en texto y los compara letra a letra: `'10'` va antes que `'2'` porque `'1'` va antes que `'2'`. Para números siempre hace falta una función de comparación.

```text
--- Paso 1: Problema de sort() ---
sort() por defecto: [ 1, 10, 2, 25, 30, 5 ]
```

## Paso 2: números

La función recibe dos elementos y devuelve un número: negativo si `a` va antes, positivo si va después, `0` si da igual. `a - b` cumple eso de menor a mayor; `b - a`, de mayor a menor. Node imprime los arrays largos de números en columnas.

```text
--- Paso 2: Ordenamiento numérico ---
Ascendente: [
   1,  2,  5,   8,
  10, 25, 30, 100
]
Descendente: [
  100, 30, 25, 10,
    8,  5,  2,  1
]
```

## Paso 3: textos sin distinguir mayúsculas

`localeCompare` compara textos según el idioma (la «á» va junto a la «a», no después de la «z») y devuelve negativo, positivo o `0`, justo lo que espera `sort`. Pasar los dos a minúsculas antes evita que las mayúsculas cambien el orden.

```text
--- Paso 3: Strings case-insensitive ---
Nombres ordenados: [ 'ana', 'Carlos', 'LUIS', 'María', 'pedro' ]
```

## Paso 4: objetos por una propiedad

La función compara una propiedad de cada objeto: `a.price - b.price` para números y `a.name.localeCompare(b.name)` para textos. El `map` final solo prepara un texto corto para imprimir.

```text
--- Paso 4: Objetos por propiedad ---
Por precio: [ 'Watch: $200', 'Tablet: $300', 'Phone: $500', 'Laptop: $1000' ]
Por rating: [ 'Watch: 4.9', 'Phone: 4.8', 'Laptop: 4.5', 'Tablet: 4.2' ]
Por nombre: [ 'Laptop', 'Phone', 'Tablet', 'Watch' ]
```

## Paso 5: varios criterios

Primero por departamento; si empatan (`deptCompare === 0`), por salario de mayor a menor. Ana y María empatan en los dos criterios: `sort` es estable, así que mantienen el orden que tenían en el array.

```text
--- Paso 5: Multi-criterio ---
Por dept + salario:
  HR - Luis: $4000
  HR - Carlos: $4000
  IT - Ana: $5000
  IT - María: $5000
  IT - Pedro: $4500
```

## Paso 6: valores vacíos al final

`a.score == null` es `true` para `null` y para `undefined` (con `==`, y solo en este caso, los dos valen lo mismo). Devolver `1` manda `a` al final y `-1` manda `b` al final. Al imprimir, `?? 'N/A'` sustituye el valor vacío.

```text
--- Paso 6: Manejar nulls ---
Con nulls al final:
  María: 92
  Ana: 85
  Pedro: 78
  Luis: N/A
  Carlos: N/A
```

## Paso 7: orden natural

Comparados como texto, `'file10.txt'` va antes que `'file2.txt'`. La opción `{ numeric: true }` de `localeCompare` compara los números que hay dentro del texto como números. El `undefined` del segundo argumento significa «el idioma del sistema».

```text
--- Paso 7: Ordenamiento natural ---
Orden natural: [ 'file1.txt', 'file2.txt', 'file3.txt', 'file10.txt', 'file20.txt' ]
```

## Paso 8: un orden propio

`priorityOrder` asigna un número a cada prioridad y la función compara esos números. Para cambiar el orden basta con cambiar el objeto.

```text
--- Paso 8: Prioridad personalizada ---
Por prioridad:
  [critical] Hotfix
  [high] Bug fix
  [medium] Feature
  [low] Refactor
  [low] Docs
```

## Paso 9: agrupar

`reduce` empieza con `{}` y en cada venta añade la venta a la lista de su región, creando la lista la primera vez (`groups[key] || []`). El resultado es un objeto con una clave por región.

```text
--- Paso 9: Agrupar datos ---
Agrupado por región: {
  North: [
    { product: 'A', region: 'North', amount: 100 },
    { product: 'B', region: 'North', amount: 180 }
  ],
  South: [
    { product: 'B', region: 'South', amount: 200 },
    { product: 'A', region: 'South', amount: 150 }
  ]
}
```

## Paso 10: indexar por id

El mismo patrón, pero guardando cada usuario en la clave de su `id`. Después se encuentra un usuario por su id con `usersById[2]`, sin recorrer el array. Las claves de un objeto siempre son texto: Node las muestra como `'1'`, `'2'`, `'3'`.

```text
--- Paso 10: Indexar por ID ---
Indexado por ID: {
  '1': { id: 1, name: 'Ana', email: 'ana@mail.com' },
  '2': { id: 2, name: 'Luis', email: 'luis@mail.com' },
  '3': { id: 3, name: 'María', email: 'maria@mail.com' }
}
Acceso directo: Luis

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, imprime `numbersDefault` después del `sort`. ¿Ha cambiado? ¿Y si quitas el spread?
2. En el paso 5, ¿qué cambia si la función devuelve `a.salary - b.salary` en lugar de `b.salary - a.salary`?
3. En el paso 8, añade una tarea con `priority: 'urgent'`, que no está en `priorityOrder`. ¿Dónde queda y por qué? (Pista: ¿cuánto vale `undefined - 1`?)

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Encadenar métodos](../lab-03-chaining/README.md) | [Lab 05 — `findLast()` y `findLastIndex()`](../lab-05-findlast/README.md) → |

[↑ Semana 05](../../README.md)
