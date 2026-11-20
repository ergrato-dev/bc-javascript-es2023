# 📖 Glosario - Semana 11

## Manejo de Errores Moderno

Términos clave de la semana ordenados alfabéticamente.

---

## A

### AppError
Clase base personalizada para errores de aplicación. Extiende `Error` y añade propiedades como `code`, `timestamp` y métodos como `toJSON()`.

```javascript
class AppError extends Error {
  constructor(message, code = 'APP_ERROR') {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.timestamp = new Date().toISOString();
  }
}
```

### Assertion
Verificación de que una condición es verdadera. Si falla, lanza un error. Útil para debugging y validación de invariantes.

```javascript
const assert = (condition, message) => {
  if (!condition) throw new Error(`Assertion failed: ${message}`);
};
```

---

## B

### Backoff (Exponential)
Estrategia de retry donde el tiempo de espera entre intentos aumenta exponencialmente (ej: 500ms, 1000ms, 2000ms).

```javascript
const delay = BASE_DELAY * Math.pow(2, attempt - 1);
```

### Boundary (Error)
Límite que aísla una sección de código para evitar que sus errores afecten al resto de la aplicación.

---

## C

### Catch
Bloque que captura y maneja excepciones lanzadas en el bloque `try`.

```javascript
try {
  riskyOperation();
} catch (error) {
  handleError(error);
}
```

### Custom Error
Error personalizado que extiende la clase `Error` para añadir información específica del dominio.

---

## D

### Defensive Programming
Estilo de programación que anticipa y maneja posibles errores antes de que ocurran.

```javascript
const getName = user => user?.name ?? 'Unknown';
```

---

## E

### Error
Objeto nativo de JavaScript que representa un error en tiempo de ejecución.

```javascript
const error = new Error('Something went wrong');
console.log(error.name);    // "Error"
console.log(error.message); // "Something went wrong"
console.log(error.stack);   // Stack trace
```

### Error Cause (ES2022)
Propiedad `cause` introducida en ES2022 que permite encadenar errores, preservando el error original al crear uno nuevo.

```javascript
try {
  JSON.parse(invalidData);
} catch (originalError) {
  throw new Error('Failed to parse config', { cause: originalError });
}

// Acceder a la cadena de errores
error.cause;         // Error original
error.cause?.message; // Mensaje del error original
```

### Error Code
Identificador único para categorizar errores (ej: `VALIDATION_ERROR`, `NETWORK_ERROR`).

### Error Propagation
Proceso por el cual un error "sube" por la cadena de llamadas hasta encontrar un manejador.

---

## F

### Fail Fast
Principio que dice que es mejor fallar inmediatamente cuando se detecta un problema que continuar en un estado inválido.

```javascript
const divide = (a, b) => {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
};
```

### Fallback
Valor o comportamiento alternativo cuando la operación principal falla.

```javascript
const data = fetchFromAPI() ?? loadFromCache() ?? defaultValue;
```

### Finally
Bloque que se ejecuta siempre después de try/catch, independientemente de si hubo error.

```javascript
try {
  openResource();
} finally {
  closeResource(); // Siempre se ejecuta
}
```

---

## G

### Graceful Degradation
Técnica donde la aplicación continúa funcionando con funcionalidad reducida cuando ocurre un error.

---

## I

### instanceof
Operador que verifica si un objeto es instancia de una clase específica. Útil para identificar tipos de error.

```javascript
if (error instanceof ValidationError) {
  showFieldError(error.field);
}
```

### isRetryable
Propiedad que indica si un error puede ser reintentado (ej: errores de red temporales).

---

## L

### Logging
Registro de eventos, errores e información para debugging y monitoreo.

```javascript
console.error('[ERROR]', error.message, error.stack);
```

---

## N

### NetworkError
Error que ocurre durante operaciones de red (fetch, WebSocket, etc.).

### Nullish Coalescing (??)
Operador que retorna el valor derecho solo si el izquierdo es `null` o `undefined`.

```javascript
const timeout = config.timeout ?? 3000;
```

---

## O

### Optional Catch Binding (ES2019)
Característica ES2019 que permite omitir el parámetro de error en el bloque `catch` cuando no se necesita.

```javascript
// Antes de ES2019 - parámetro obligatorio
try { JSON.parse(data); } catch (error) { return null; }

// ES2019+ - sin parámetro
try { JSON.parse(data); } catch { return null; }
```

### Optional Chaining (?.)
Operador que accede a propiedades de forma segura, retornando `undefined` si el objeto es nullish.

```javascript
const street = user?.address?.street;
```

---

## P

### Promise Rejection
Estado de una Promise cuando falla. Se maneja con `.catch()` o `try/catch` con async/await.

```javascript
promise
  .then(result => process(result))
  .catch(error => handleError(error));
```

---

## R

### RangeError
Error nativo que ocurre cuando un valor está fuera del rango permitido.

### ReferenceError
Error nativo que ocurre al acceder a una variable que no existe.

### Re-throw
Técnica de capturar un error, procesarlo, y lanzarlo de nuevo.

```javascript
catch (error) {
  logError(error);
  throw error; // Re-throw
}
```

### Result Pattern
Patrón que retorna un objeto con estado de éxito/error en lugar de lanzar excepciones.

```javascript
const result = { ok: true, value: data };
const error = { ok: false, error: 'Failed' };
```

### Retry
Estrategia de reintentar una operación fallida un número limitado de veces.

---

## S

### SafeExecute
Función wrapper que ejecuta código potencialmente peligroso y maneja sus errores.

```javascript
const safeExecute = fn => {
  try {
    return { ok: true, value: fn() };
  } catch (error) {
    return { ok: false, error };
  }
};
```

### Stack Trace
Registro de la cadena de llamadas que llevó al error. Útil para debugging.

### SyntaxError
Error nativo que ocurre cuando el código tiene sintaxis inválida.

---

## T

### Throw
Sentencia que lanza una excepción.

```javascript
throw new Error('Something went wrong');
throw new ValidationError('email', 'Invalid format');
```

### Timeout
Error que ocurre cuando una operación tarda más del tiempo permitido.

```javascript
const withTimeout = (promise, ms) => Promise.race([
  promise,
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), ms)
  )
]);
```

### Try
Bloque que contiene código que puede lanzar excepciones.

### TypeError
Error nativo que ocurre al usar un valor de tipo incorrecto.

```javascript
null.toString(); // TypeError: Cannot read property 'toString' of null
```

---

## U

### Unhandled Rejection
Promise rechazada sin un manejador `.catch()`. Puede causar problemas en producción.

### User Message
Mensaje de error amigable para mostrar al usuario (vs. mensajes técnicos para logs).

```javascript
toUserMessage() {
  return `El campo "${this.field}" es inválido`;
}
```

---

## V

### ValidationError
Error personalizado para fallos de validación de datos.

```javascript
class ValidationError extends AppError {
  constructor(field, message, value) {
    super(message, 'VALIDATION_ERROR');
    this.field = field;
    this.value = value;
  }
}
```

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | [📅 Semana 12: Proyecto Integrador - Fundamentos](../../week-12-proyecto_integrador_fundamentos/README.md) → |

[↑ Semana 11](../README.md)
