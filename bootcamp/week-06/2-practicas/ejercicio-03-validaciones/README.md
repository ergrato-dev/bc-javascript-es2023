# Ejercicio 03 - Validaciones con RegExp

## Objetivo
Validar entradas comunes usando RegExp y mensajes claros.

## Tareas
1. Implementa validadores:
   - `isStrongPassword(value)`
   - `isPhone(value)` (formato simple internacional + opcional)
   - `isSlug(value)` (kebab-case)
2. Devuelve boolean y mensaje opcional (`{ ok: boolean, message: string }`).
3. Cubre casos mínimos y máximos razonables.

## Criterios de aceptación
- Password: min 8 chars, mayúscula, minúscula, dígito, símbolo.
- Phone: `+` opcional, 8-15 dígitos, espacios/guiones permitidos.
- Slug: `^[a-z0-9]+(?:-[a-z0-9]+)*$`.

## Starter
- `starter/index.js` con firmas vacías.

## Solution
- `solution/index.js` con implementación de referencia.
