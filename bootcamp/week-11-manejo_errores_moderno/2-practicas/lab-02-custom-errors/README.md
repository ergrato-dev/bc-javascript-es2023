# Lab 02 — Errores personalizados

## Objetivo

Crear clases de error que heredan de `Error`, añadirles datos útiles (campo, código, valor), organizarlas en una jerarquía, serializarlas con `toJSON()`, separar el mensaje técnico del mensaje para el usuario y crearlas con métodos estáticos.

**Tiempo:** 55 min · **Teoría:** [02 - Errores personalizados](../../1-teoria/02-errores-personalizados.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-11-manejo_errores_moderno/2-practicas/lab-02-custom-errors
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: error personalizado básico

`class ValidationError extends Error` crea un tipo de error nuevo. El constructor llama a `super(message)` para que `Error` guarde el mensaje y el `stack`, y cambia `this.name`, que si no seguiría siendo `'Error'`. Un `ValidationError` es a la vez `instanceof ValidationError` e `instanceof Error`.

```text
--- Paso 1: Error Personalizado Básico ---
Name: ValidationError
Message: Email is required
Is ValidationError? true
Is Error? true
```

## Paso 2: propiedades extra

`FieldValidationError` guarda qué campo falló, el valor recibido y cuándo (`new Date().toISOString()`). Con esos datos, quien captura el error puede marcar el campo correcto en un formulario. La fecha de tu ejecución será otra.

```text
--- Paso 2: Añadir Propiedades ---
Field: email
Message: Must contain @
Invalid value: invalid-email
When: 2026-11-20T20:19:41.680Z
```

## Paso 3: códigos de error

Un `code` como `'NOT_FOUND'` es más fiable que comparar textos de `message`, que pueden cambiar. `ErrorCodes` reúne los códigos en un objeto y `handleError` elige la respuesta con un `switch` sobre `error.code`.

```text
--- Paso 3: Error con Código ---
[VALIDATION_ERROR] ⚠️ Please check your input
[NOT_FOUND] 🔍 Resource not found
[UNAUTHORIZED] 🔒 Please log in
```

## Paso 4: jerarquía de errores

`BaseAppError` guarda el código; `InputValidationError`, `HttpRequestError` y `DatabaseError` heredan de ella y le pasan el suyo con `super(message, code)`. Un solo `catch` con `instanceof BaseAppError` atrapa los tres, y cada uno conserva sus datos propios (`field`, `status`, `operation`).

```text
--- Paso 4: Jerarquía de Errores ---

InputValidationError:
  Is BaseAppError? true
  Is Error? true
  Code: VALIDATION_ERROR

HttpRequestError:
  Is BaseAppError? true
  Is Error? true
  Code: HTTP_ERROR

DatabaseError:
  Is BaseAppError? true
  Is Error? true
  Code: DB_ERROR
```

## Paso 5: `toJSON()`

`message` y `stack` no son propiedades enumerables, así que `JSON.stringify` de un `Error` normal da `{}`. Si la clase define `toJSON()`, `JSON.stringify` la llama automáticamente y serializa lo que devuelve: útil para registrar errores o enviarlos a un servidor. El `timestamp` (`Date.now()`) será otro en tu ejecución.

```text
--- Paso 5: Método toJSON() ---
Plain Error as JSON: {}
SerializableError as JSON:
{
  "name": "SerializableError",
  "code": "OP_FAILED",
  "message": "Operation failed",
  "timestamp": 1795205981681
}
```

## Paso 6: mensaje para el usuario

`UserFriendlyError` guarda el mensaje técnico en `message` y traduce el `status` HTTP a un texto que el usuario entiende con `toUserMessage()`. El técnico (`toDebugMessage()`) es para quien desarrolla: nunca se enseña en la página.

```text
--- Paso 6: Mensaje para Usuario ---
For developer: [401] JWT token expired at 1703270400
For user: 🔒 Please log in to continue

For developer: [404] User with id=abc123 not found in users table
For user: 🔍 We couldn't find what you're looking for

For developer: [500] ECONNREFUSED postgres://localhost:5432
For user: 🔧 Our servers are having issues. Try again later
```

## Paso 7: métodos de fábrica

Los métodos `static` (`ApiError.validation(...)`, `ApiError.notFound(...)`) crean errores ya configurados: quien los usa no tiene que recordar el código ni el formato del mensaje.

```text
--- Paso 7: Factory Methods ---
Using factory methods:
[VALIDATION] Invalid email format { field: 'email' }
[NOT_FOUND] User not found { resource: 'User', id: 12345 }
[UNAUTHORIZED] Token expired {}
[SERVER_ERROR] Internal server error { operation: 'database query' }

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, comenta la línea `this.name = 'ValidationError';`. ¿Qué imprime `Name:`? ¿Sigue siendo `true` el `instanceof ValidationError`?
2. Escribe al final del archivo una clase `CartError` (base) y una `OutOfStockError` que herede de ella, reciba un `productId`, lo guarde y construya el mensaje. Con este código:

   ```js
   try {
     throw new OutOfStockError('SKU-12345');
   } catch (error) {
     console.log(error.name, '|', error.message, '|', error.productId, '|', error instanceof CartError);
   }
   ```

   la salida debe ser:

   ```text
   OutOfStockError | Product SKU-12345 is out of stock | SKU-12345 | true
   ```

3. En el paso 3, ¿por qué es mejor comparar `error.code` que `error.message`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — try...catch...finally](../lab-01-try-catch/README.md) | [Lab 03 — Errores asíncronos](../lab-03-async-errors/README.md) → |

[↑ Semana 11](../../README.md)
