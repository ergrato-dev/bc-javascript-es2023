# Lab 01 — try...catch...finally

## Objetivo

Capturar errores con `try...catch`, ejecutar limpieza con `finally`, reconocer los errores nativos (`SyntaxError`, `TypeError`, `RangeError`), lanzar los tuyos con `throw`, distinguirlos con `instanceof` y relanzarlos con contexto gracias a `cause`.

**Tiempo:** 50 min · **Teoría:** [01 - try...catch...finally](../../1-teoria/01-try-catch-finally.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-11-manejo_errores_moderno/2-practicas/lab-01-try-catch
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: catch básico

`JSON.parse` lanza un `SyntaxError` si el texto no es JSON válido. El `catch` lo recibe en `error` y el programa sigue después del bloque en lugar de detenerse.

```text
--- Paso 1: Catch Básico ---
❌ Error caught!
Message: Expected property name or '}' in JSON at position 2 (line 1 column 3)
✅ Program continues after catch
```

## Paso 2: propiedades del error

Todo error tiene `name` (el tipo), `message` (el texto que pasaste al crearlo) y `stack` (el recorrido de llamadas). La primera línea de `stack` repite `name: message`; las siguientes empiezan por `at` y dicen en qué archivo y línea se creó el error. Esas rutas cambian en cada equipo, por eso el paso solo comprueba que la segunda línea empieza por `at`.

```text
--- Paso 2: Propiedades del Error ---
Name: Error
Message: This is a test error
Stack, línea 1: Error: This is a test error
Stack, línea 2 empieza por "at": true
```

## Paso 3: el bloque `finally`

`finally` se ejecuta siempre: tras el `try` si no hubo error, y tras el `catch` si lo hubo. En el caso 2, la línea `2.` no llega a imprimirse porque `JSON.parse` lanza antes.

```text
--- Paso 3: El Bloque finally ---
Caso 1: Sin error
  1. Trying...
  2. Success: 15
  4. Finally runs! (cleanup here)

Caso 2: Con error
  1. Trying...
  3. Error caught: Unexpected token 'b', "bad" is not valid JSON
  4. Finally STILL runs!
```

## Paso 4: tipos de error nativos

Cada operación inválida lanza su propio tipo: JSON mal escrito da `SyntaxError`, llamar a un método de `null` da `TypeError` y crear un array de longitud negativa da `RangeError`. El mensaje del `SyntaxError` se recorta a 50 caracteres con `slice`.

```text
--- Paso 4: Tipos de Error Nativos ---
SyntaxError: SyntaxError - Unexpected token 'o', "not valid json" is not vali
TypeError: TypeError - Cannot read properties of null (reading 'toString')
RangeError: RangeError - Invalid array length
```

## Paso 5: lanzar errores con `throw`

`divide` comprueba sus argumentos y lanza `TypeError` o `RangeError` con un mensaje propio. Quien la llama decide qué hacer con el error en su `catch`.

```text
--- Paso 5: Lanzar Errores (throw) ---
10 / 2 = 5
Error: Cannot divide by zero
Error: Both arguments must be numbers
```

## Paso 6: identificar el tipo con `instanceof`

`error instanceof SyntaxError` es `true` si el error se creó con esa clase (o una que herede de ella). Con una cadena de `if` eliges un mensaje para cada tipo y uno genérico para el resto.

```text
--- Paso 6: Identificar Tipos con instanceof ---
SyntaxError: 📝 Syntax error - check your JSON format
TypeError: 🔧 Type error - check variable types
RangeError: 📊 Range error - value out of bounds
Error: ❓ Unknown error - Generic error
```

## Paso 7: relanzar con `cause`

`processData` captura el error, lo registra y lanza uno nuevo con un mensaje que explica qué intentaba hacer. La opción `{ cause: error }` (ES2022) guarda el error original dentro del nuevo, así quien lo captura fuera conoce las dos cosas: qué falló y por qué.

```text
--- Paso 7: Re-throw de Errores ---
⚠️ Logging error: Expected property name or '}' in JSON at position 2 (line 1 column 3)
❌ Final handler: Failed to parse data
   Cause: SyntaxError - Expected property name or '}' in JSON at position 2 (line 1 column 3)
✅ Program continues

✅ Lab completado.
```

---

## Comprobación

1. Escribe al final del archivo `safeParseJSON(jsonString, defaultValue = null)`: devuelve el JSON parseado o, si falla, `defaultValue`, y en un `finally` imprime `Parse attempt complete`. Con estas dos llamadas:

   ```js
   console.log('Valid:', safeParseJSON('{"name": "John"}'));
   console.log('Invalid:', safeParseJSON('bad json', { error: true }));
   ```

   la salida debe ser:

   ```text
   Parse attempt complete
   Valid: { name: 'John' }
   Parse attempt complete
   Invalid: { error: true }
   ```

   ¿Por qué `Parse attempt complete` sale antes que `Valid:`?
2. En el paso 7, quita `{ cause: error }` y ejecuta. ¿Qué error aparece y por qué el programa ya no llega a `✅ Program continues`?
3. En el paso 6, ¿qué imprimiría un `new URIError('Bad URI')`? ¿Y si añades `if (error instanceof Error)` como **primera** condición?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Errores personalizados](../lab-02-custom-errors/README.md) → |

[↑ Semana 11](../../README.md)
