# Ejercicio 01 - Unicidad con Set

## Objetivo
Garantizar unicidad de IDs, tags y features usando Set, manteniendo orden de aparición.

## Tareas
1. Implementa `uniqueIds(ids)` que devuelva un array sin duplicados, preservando orden.
2. Implementa `mergeFeatures(primary, secondary)` que devuelva un Set con la unión en orden (primero primary, luego secondary solo si no existen).
3. Implementa `hasAll(required, available)` que verifique si todos los elementos de `required` están en el Set `available`.

## Criterios de aceptación
- Usa Set en todas las funciones (sin filtros manuales redundantes).
- Orden estable: el primer encuentro se mantiene.
- Funciona con strings, numbers y mezcla de ambos.

## Starter
- `starter/index.js` con firmas vacías.

## Solution
- `solution/index.js` con implementación de referencia.
