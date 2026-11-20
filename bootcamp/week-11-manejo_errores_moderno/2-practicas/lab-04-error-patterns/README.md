# Lab 04 — Patrones de manejo de errores

## Objetivo

Aplicar los patrones que usan las aplicaciones reales para convivir con errores: ejecutar con un valor de respaldo, reintentar, esperar cada vez más entre reintentos, probar varias fuentes, procesar una lista sin que un elemento estropee el resto y devolver objetos `Result` en lugar de lanzar.

**Tiempo:** 50 min · **Teoría:** [03 - Error boundaries](../../1-teoria/03-error-boundaries.md) y [05 - Mejores prácticas](../../1-teoria/05-mejores-practicas.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-11-manejo_errores_moderno/2-practicas/lab-04-error-patterns
node starter/index.js
```

Como en el [lab 03](../lab-03-async-errors/README.md), los pasos asíncronos usan `await` fuera de una función y Node trata el archivo como módulo. Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: ejecutar con respaldo (síncrono)

`safeExecute(fn, fallback)` llama a `fn` dentro de un `try`. Si lanza, registra el error y devuelve `fallback`. Quien la usa siempre recibe un valor y no necesita su propio `try...catch`.

```text
--- Paso 1: Safe Execute Pattern (Sync) ---
Valid JSON result: { name: 'John', age: 30 }
  ⚠️ Caught: Unexpected token 'o', "not valid json" is not valid JSON
Invalid JSON result: { name: 'Guest' }
  ⚠️ Caught: Cannot read properties of null (reading 'value')
Risky calc result: 0
```

## Paso 2: ejecutar con respaldo (asíncrono)

La misma idea con `async`/`await`: `safeExecuteAsync` espera a la promesa y, si se rechaza, devuelve el respaldo.

```text
--- Paso 2: Safe Execute Async ---
Success case: { id: 1, name: 'John' }
  ⚠️ Async caught: User not found
Failure case: { id: 0, name: 'Guest' }
```

## Paso 3: reintentar

`retry(fn, maxAttempts)` repite la llamada en un bucle `for` hasta que sale bien o se agotan los intentos; entonces lanza el último error. `flakyOperation` falla las dos primeras veces, como un servicio que tarda en arrancar.

```text
--- Paso 3: Retry Pattern ---
  Attempt 1/5...
  ❌ Attempt 1 failed: Temporary failure
  Attempt 2/5...
  ❌ Attempt 2 failed: Temporary failure
  Attempt 3/5...
✅ Final result: Success on attempt 3
```

## Paso 4: reintentar con espera exponencial

`retryWithBackoff` espera entre intentos un tiempo que se duplica cada vez (`baseDelay * Math.pow(2, attempt - 1)`: 100 ms, 200 ms...). Así no satura un servicio que ya tiene problemas. `alwaysFails` falla siempre, así que al final se propaga el error.

```text
--- Paso 4: Retry con Exponential Backoff ---
Testing exponential backoff:
  Attempt 1...
  ❌ Failed: Service unavailable
  ⏳ Waiting 100ms before retry...
  Attempt 2...
  ❌ Failed: Service unavailable
  ⏳ Waiting 200ms before retry...
  Attempt 3...
  ❌ Failed: Service unavailable
❌ Final failure after backoff: Service unavailable
```

## Paso 5: cadena de respaldos

`withFallbackChain(...fns)` prueba cada fuente en orden (API, caché, valores por defecto) y devuelve la primera que funciona. Solo falla si fallan todas.

```text
--- Paso 5: Fallback Chain ---
Testing fallback chain:
  Trying source 1...
  ❌ Source 1 failed: API unavailable
  Trying source 2...
  ❌ Source 2 failed: Cache miss
  Trying source 3...
✅ Got data from: default
```

## Paso 6: un error por elemento

`safeMap` aplica la función a cada elemento dentro de su propio `try...catch` y devuelve `{ success, value }` o `{ success, error }`. Dos JSON inválidos no impiden procesar los tres válidos: es la idea de una *error boundary*, un límite que contiene el fallo.

```text
--- Paso 6: Error Boundary para Arrays ---
Processing JSON strings:

✅ Successes:
  [0]: { name: 'Alice' }
  [2]: { name: 'Bob' }
  [4]: { name: 'Charlie' }

❌ Failures:
  [1]: "not json" - Unexpected token 'o', "not json" is not valid JSON
  [3]: "{ invalid }" - Expected property name or '}' in JSON at position 2 (line 1 column 3)

Summary: 3 ok, 2 failed
```

## Paso 7: el patrón Result

En lugar de lanzar, `parseJSON` y `divideResult` devuelven `{ ok: true, value }` o `{ ok: false, error }`. El error pasa a ser un valor normal: `mapResult` transforma solo los resultados correctos y `handleResult` obliga a tratar los dos casos.

```text
--- Paso 7: Result Pattern ---
Testing Result pattern:
Valid JSON: { ok: true, value: { valid: true } }
Invalid JSON: {
  ok: false,
  error: `Unexpected token 'i', "invalid" is not valid JSON`
}

Extracted name: { ok: true, value: 'JOHN' }
Division result: Error: Division by zero

✅ Lab completado.
```

---

## Comprobación

1. En el paso 3, cambia `retry(flakyOperation, 5)` por `retry(flakyOperation, 2)`. La salida del paso pasa a ser:

   ```text
   --- Paso 3: Retry Pattern ---
     Attempt 1/2...
     ❌ Attempt 1 failed: Temporary failure
     Attempt 2/2...
     ❌ Attempt 2 failed: Temporary failure
   ❌ All retries failed: Temporary failure
   ```

   ¿Qué error lanza `retry` al rendirse: el primero o el último?
2. En el paso 4, ¿cuánto esperaría el quinto reintento con `baseDelay = 100`? ¿Por qué no conviene reintentar al instante?
3. En el paso 7, ¿qué ventaja tiene devolver `{ ok: false, error }` frente a lanzar? ¿Y qué inconveniente?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Errores asíncronos](../lab-03-async-errors/README.md) | [Proyecto — Importador de fichas](../../3-proyecto/README.md) → |

[↑ Semana 11](../../README.md)
