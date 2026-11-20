# Lab 02 — Operaciones con Set

## Objetivo

Escribir a mano la unión, la intersección, la diferencia y la diferencia simétrica de dos Sets, comprobar subconjuntos y conjuntos disjuntos, agruparlo todo en una clase y compararlo con los métodos nativos que trae `Set` desde ES2025.

**Tiempo:** 55 min · **Teoría:** [02 - Operaciones con Set](../../1-teoria/02-set-operations.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-07-sets_maps/2-practicas/lab-02-set-operations
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título. Cada paso usa los Sets de los anteriores: descomenta en orden.

---

## Paso 1: unión

La unión (A ∪ B) tiene todo lo que está en A, en B o en los dos. Basta con meter los dos Sets en un array con spread y crear un Set nuevo: los repetidos (`3` y `4`) se quedan una vez.

```text
--- Paso 1: Unión de Sets ---
Set A: Set(4) { 1, 2, 3, 4 }
Set B: Set(4) { 3, 4, 5, 6 }
Unión (A ∪ B): Set(6) { 1, 2, 3, 4, 5, 6 }
```

## Paso 2: intersección

La intersección (A ∩ B) es lo que está en los dos. Un Set no tiene `filter`, así que se pasa a array (`[...setA]`), se filtra con `setB.has(x)` y se vuelve a crear el Set.

```text
--- Paso 2: Intersección ---
Intersección (A ∩ B): Set(2) { 3, 4 }
```

## Paso 3: diferencia

La diferencia A - B es lo que está en A y no en B: el mismo `filter` con `!`. El orden importa: A - B y B - A dan resultados distintos.

```text
--- Paso 3: Diferencia ---
Diferencia (A - B): Set(2) { 1, 2 }
Diferencia (B - A): Set(2) { 5, 6 }
```

## Paso 4: diferencia simétrica

La diferencia simétrica (A △ B) es lo que está en uno solo de los dos: la unión de A - B y B - A.

```text
--- Paso 4: Diferencia Simétrica ---
Diferencia Simétrica (A △ B): Set(4) { 1, 2, 5, 6 }
```

## Paso 5: subconjuntos y disjuntos

X es subconjunto de Y si todos los elementos de X están en Y: `every` con `setY.has`. «Y es superconjunto de X» es la misma pregunta vista desde Y, por eso el código es igual. Dos Sets son disjuntos si no comparten ningún elemento.

```text
--- Paso 5: Subconjunto y Superconjunto ---
Set X: Set(2) { 1, 2 }
Set Y: Set(4) { 1, 2, 3, 4 }
¿X es subconjunto de Y? true
¿Y es superconjunto de X? true
¿X y Z son disjuntos? true
```

## Paso 6: una clase con métodos estáticos

`SetOps` reúne las operaciones como métodos `static` (se llaman sobre la clase, `SetOps.union(a, b)`, sin crear instancias; lo viste en la semana 03). La unión de los dos equipos es toda la gente; la intersección, quien trabaja en los dos.

```text
--- Paso 6: Clase SetOps ---
Frontend: Set(3) { 'Alice', 'Bob', 'Charlie' }
Backend: Set(3) { 'Bob', 'David', 'Eve' }
Todos (unión): Set(5) { 'Alice', 'Bob', 'Charlie', 'David', 'Eve' }
Saben ambos (intersección): Set(1) { 'Bob' }
Solo frontend: Set(2) { 'Alice', 'Charlie' }
Solo backend: Set(2) { 'David', 'Eve' }
```

## Paso 7: los métodos nativos

Desde ES2025 (Node 22 o superior y los navegadores actuales), `Set` trae todas estas operaciones de serie. Dan los mismos resultados que tus versiones a mano y, como ellas, devuelven un Set nuevo sin tocar el original. Las versiones a mano siguen siendo útiles para entender qué hacen y para entornos antiguos.

```text
--- Paso 7: Métodos nativos (ES2025) ---
union: Set(6) { 1, 2, 3, 4, 5, 6 }
intersection: Set(2) { 3, 4 }
difference: Set(2) { 1, 2 }
symmetricDifference: Set(4) { 1, 2, 5, 6 }
isSubsetOf: true
isSupersetOf: true
isDisjointFrom: true
setA sigue igual: Set(4) { 1, 2, 3, 4 }

✅ Lab completado.
```

---

## Comprobación

1. ¿Qué devuelve `setA.intersection(setZ)`? ¿Y `setX.isSubsetOf(setX)`?
2. En el paso 6, ¿qué operación da la gente que trabaja en un solo equipo? Escríbela con `SetOps` y con el método nativo.
3. ¿Por qué el paso 2 necesita `[...setA]` antes de `filter`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Set básico](../lab-01-set-basics/README.md) | [Lab 03 — Map básico](../lab-03-map-basics/README.md) → |

[↑ Semana 07](../../README.md)
