# Ejercicio 04 - Registros Ordenados con Map + Set

## Objetivo
Gestionar registros manteniendo orden de inserción y unicidad de atributos auxiliares.

## Tareas
1. Implementa `createRegistry()` que retorne un objeto con métodos: `add(record)`, `remove(id)`, `get(id)`, `list()`, `tagsOf(id)`.
2. Usa un Map interno para `id -> record` (record incluye `id`, `name`, `tags` array).
3. Usa un Set global de tags para saber qué tags existen en el registro.
4. `list()` debe devolver un array en orden de inserción (valores del Map).
5. `tagsOf(id)` devuelve un Set con las tags únicas del registro (derivado del array de tags).

## Criterios de aceptación
- `add` no inserta duplicados de id; si existe, actualiza el registro manteniendo el orden original.
- `remove` elimina del Map y actualiza el Set global de tags.
- No muta los arrays de entrada; crea copias internas cuando corresponda.

## Starter
- `starter/index.js` con esqueletos.

## Solution
- `solution/index.js` con implementación de referencia.
