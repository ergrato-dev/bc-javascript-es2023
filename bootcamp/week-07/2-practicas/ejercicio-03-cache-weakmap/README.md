# Ejercicio 03 - Caché con WeakMap

## Objetivo
Implementar una caché asociada a objetos sin provocar fugas de memoria.

## Tareas
1. Crea `createObjectCache()` que retorne un objeto con métodos `get(obj)`, `set(obj, value)`, `has(obj)` y `clear()`.
2. La implementación interna debe usar WeakMap.
3. Añade soporte para inicialización perezosa: `getOrInit(obj, fn)` que devuelva valor en caché o ejecute `fn()` y lo guarde.

## Criterios de aceptación
- No expone directamente el WeakMap.
- `clear()` resetea el WeakMap (crear uno nuevo interno).
- `getOrInit` solo ejecuta `fn` una vez por objeto.

## Starter
- `starter/index.js` con firmas vacías.

## Solution
- `solution/index.js` con implementación de referencia.
