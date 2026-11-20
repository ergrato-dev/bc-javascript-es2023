# Lab 03 — Errores asíncronos

## Objetivo

Capturar los rechazos de una promesa con `.catch()` y con `try...catch` + `await`, ver cómo se propaga un error por una cadena de `.then()`, comparar `Promise.all()` con `Promise.allSettled()`, poner un tiempo límite con `Promise.race()` y limpiar con `finally`.

**Tiempo:** 55 min · **Teoría:** [04 - Errores asíncronos](../../1-teoria/04-errores-asincronos.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) empieza con dos funciones auxiliares que ya están activas: `delay(ms)` espera `ms` milisegundos y `simulateFetch(shouldFail, delayMs)` imita una petición de red que, pasado ese tiempo, se resuelve con `{ data: 'Success!' }` o se rechaza con `Error('Network request failed')`.

Tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-11-manejo_errores_moderno/2-practicas/lab-03-async-errors
node starter/index.js
```

Los pasos usan `await` fuera de una función (*top-level await*) para que se ejecuten uno detrás de otro. Node solo lo permite en módulos ES: al ver ese `await`, trata el archivo como módulo sin que tengas que cambiar nada. Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: `.catch()` en una promesa

`simulateFetch(true)` se rechaza a los 100 ms. El `.then()` no se ejecuta; el rechazo salta al `.catch()`. `await delay(200)` espera a que todo eso ocurra antes de seguir.

```text
--- Paso 1: .catch() en Promises ---
❌ Caught with .catch(): Network request failed
✅ Program continues after error
```

## Paso 2: propagación en una cadena

Un `throw` dentro de un `.then()` rechaza la promesa que devuelve ese `.then()`. Los `.then()` siguientes se saltan y el error llega al primer `.catch()` de la cadena.

```text
--- Paso 2: Propagación en Cadena ---
Starting chain...
Step 1: Got data
❌ Caught at end: Error in step 2!
Chain complete
```

## Paso 3: `try...catch` con `async`/`await`

`await` sobre una promesa rechazada **lanza** el error, así que lo capturas con el mismo `try...catch` de siempre. Es la forma más legible de manejar errores asíncronos.

```text
--- Paso 3: try...catch con async/await ---
Fetching with async/await...
First fetch: Success!
❌ Caught in try/catch: Network request failed
Function continues after catch
```

## Paso 4: `Promise.all()` falla al primer error

`Promise.all()` se rechaza en cuanto una de las promesas falla, y pierdes los resultados de las que sí se resolvieron.

```text
--- Paso 4: Promise.all() - Fail Fast ---
Testing Promise.all()...
❌ Promise.all failed: Network request failed
⚠️ ALL results are lost, even successful ones!
```

## Paso 5: `Promise.allSettled()` espera a todas

`Promise.allSettled()` nunca se rechaza: devuelve un objeto por promesa con `status` (`'fulfilled'` o `'rejected'`) y `value` o `reason`. Así procesas lo que salió bien y registras lo que falló.

```text
--- Paso 5: Promise.allSettled() ---
Testing Promise.allSettled()...

All results:
  ✅ Promise 1: Result 1
  ❌ Promise 2: Network request failed
  ✅ Promise 3: Result 3

Summary: 2 succeeded, 1 failed
```

## Paso 6: tiempo límite con `Promise.race()`

`withTimeout` hace competir la operación con una promesa que se rechaza pasados `ms` milisegundos. `Promise.race()` se queda con la primera que termine: si la operación tarda más que el límite, gana el rechazo.

```text
--- Paso 6: Timeout con Promise.race() ---
Test 1: Fast operation with 500ms timeout
  ✅ Success: Success!

Test 2: Slow operation with 50ms timeout
  ❌ Failed: Timeout after 50ms
```

## Paso 7: `finally` para limpiar

`finally` se ejecuta tanto si la petición sale bien como si falla: es el sitio para quitar un indicador de carga. El `catch` de `fetchWithCleanup` registra el error y lo relanza con `throw error` para que quien la llama también se entere.

```text
--- Paso 7: finally() para Cleanup ---
Case 1: Success
🔄 Loading started...
✅ Data received: Success!
🏁 Loading finished (finally block)

Case 2: Failure
🔄 Loading started...
❌ Error: Network request failed
🏁 Loading finished (finally block)

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, borra el `.catch(...)` y ejecuta. El programa termina con un error y no llega a imprimir `✅ Program continues after error`:

   ```text
   Error: Network request failed
       at Timeout._onTimeout (...)
   ```

   ¿Por qué un rechazo sin manejar detiene Node?
2. Escribe al final del archivo `fetchMultipleUsers(userIds)` con `Promise.allSettled()`. Usa este simulador, que falla con los múltiplos de 3:

   ```js
   const simulateUserFetch = async (userId) => {
     await delay(50);
     if (userId % 3 === 0) {
       throw new Error(`User ${userId} not found`);
     }
     return { id: userId, name: `User ${userId}` };
   };

   const result = await fetchMultipleUsers([1, 2, 3, 4, 5, 6]);
   console.log('Users found:', result.users);
   console.log('Errors:', result.errors);
   ```

   La salida debe ser:

   ```text
   Users found: [
     { id: 1, name: 'User 1' },
     { id: 2, name: 'User 2' },
     { id: 4, name: 'User 4' },
     { id: 5, name: 'User 5' }
   ]
   Errors: [ 'User 3 not found', 'User 6 not found' ]
   ```

3. En el paso 6, ¿qué pasa con la operación lenta cuando gana el timeout? ¿Se cancela?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Errores personalizados](../lab-02-custom-errors/README.md) | [Lab 04 — Patrones de manejo de errores](../lab-04-error-patterns/README.md) → |

[↑ Semana 11](../../README.md)
