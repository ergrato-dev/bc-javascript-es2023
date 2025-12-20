# Ejercicio 04 - Buscador con Resaltado

## Objetivo
Construir un buscador que resalte coincidencias en texto usando RegExp.

## Tareas
1. Implementa `highlight(text, pattern, flags = 'gi')` que envuelva coincidencias en `<mark>`.
2. Maneja errores cuando el patrón es inválido (retorna texto original o mensaje).
3. Soporta grupos y uso de `matchAll` para índices.
4. Añade opción `escapeInput` para escapar patrones proporcionados por usuario.

## Criterios de aceptación
- Devuelve string con `<mark>coincidencia</mark>` para cada match.
- No rompe texto original; conserva partes no coincidentes.
- Si patrón inválido, se captura error y se devuelve sin cambios.

## Starter
- `starter/index.js` con firmas vacías.

## Solution
- `solution/index.js` con implementación de referencia.
