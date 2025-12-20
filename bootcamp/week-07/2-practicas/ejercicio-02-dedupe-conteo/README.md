# Ejercicio 02 - Deduplicación y Conteo con Map

## Objetivo
Deduplicar y contar ocurrencias usando Map para claves flexibles.

## Tareas
1. Implementa `countOccurrences(items)` que devuelva un Map donde la clave es el item y el valor es el conteo.
2. Implementa `topNCounts(map, n)` que retorne un array de pares `[item, count]` ordenado por count desc, limitado a `n`.
3. Implementa `mergeCounts(mapA, mapB)` que sume conteos de dos Maps (sin mutar los originales).

## Criterios de aceptación
- Usa Map (no objetos planos) para permitir claves no-string.
- No muta los mapas de entrada en `mergeCounts`.
- Orden en `topNCounts` estable para empates (mantén orden de inserción original entre empatados).

## Starter
- `starter/index.js` con firmas vacías.

## Solution
- `solution/index.js` con implementación de referencia.
