# Ejercicio 02 - Extracción con RegExp

## Objetivo
Extraer patrones comunes desde texto:
- Emails
- URLs
- Tokens @menciones y #hashtags

## Tareas
1. Implementa `extractEmails(text)`, `extractUrls(text)`, `extractTags(text)`.
2. Usa RegExp con flags adecuados (`gi`, `g`).
3. Devuelve arrays sin duplicados (usa Set).

## Criterios de aceptación
- Emails: formato simple usuario@dominio.tld (no validación RFC completa).
- URLs: http/https con dominio y ruta opcional.
- Tags: `@usuario` y `#hashtag` alfanuméricos con guiones bajos.

## Starter
- `starter/index.js` con firmas vacías.

## Solution
- `solution/index.js` con implementación de referencia.
