# Ejercicio 01 - Normalización de Texto

## Objetivo
Limpia y normaliza cadenas:
- Trim y colapsar espacios múltiples en uno
- Convertir a minúsculas
- Normalizar tildes (NFC) y eliminar diacríticos opcionalmente
- Remover puntuación configurable

## Tareas
1. Implementa `normalizeText(input, { removeDiacritics, removePunctuation })`.
2. Colapsa espacios internos (`/\s+/g` → ' ').
3. Aplica `normalize('NFC')`; si `removeDiacritics` true, elimina acentos (`/\p{M}/gu`).
4. Si `removePunctuation` true, elimina `[.,;:!?]` y caracteres configurables.

## Criterios de aceptación
- No rompe emoji ni caracteres no latinos.
- Conserva letras; solo elimina según flags.
- Devuelve string limpio y trimmeado.

## Starter
- `starter/index.js` con firmas vacías.

## Solution
- `solution/index.js` con implementación de referencia.
