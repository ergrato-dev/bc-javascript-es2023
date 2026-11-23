# 📖 Glosario - Semana 14: Async/Await

## A

### `async`
Palabra clave que se coloca antes de una función para indicar que siempre retornará una Promise. Permite usar `await` dentro de la función.

```javascript
// La función siempre retorna una Promise
async function fetchData() {
  return 'datos';
}

// Equivalente a:
function fetchData() {
  return Promise.resolve('datos');
}
```

### `await`
Operador que pausa la ejecución de una función async hasta que una Promise se resuelva. Solo puede usarse dentro de funciones async (o en top-level de módulos ES).

```javascript
async function loadUser() {
  const user = await fetchUser(); // Espera a que se resuelva
  console.log(user);
}
```

### Async Iterator
Objeto que implementa el protocolo de iteración asíncrona (`Symbol.asyncIterator`). Permite usar `for await...of`.

```javascript
const asyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield await fetchItem(1);
    yield await fetchItem(2);
  }
};
```

---

### `Array.fromAsync()`
Método estático (ES2024) que recorre un iterable asíncrono y devuelve una Promise del array con todos sus valores. Acepta una función que transforma cada valor, como `Array.from`.

```javascript
const pages = await Array.fromAsync(readPages()); // [[...], [...]]
```

---

## B

### Blocking
Comportamiento donde el código espera a que una operación termine antes de continuar. `await` parece "bloquear" pero solo pausa la función async, no el hilo principal.

---

## C

### Concurrency (Concurrencia)
Capacidad de ejecutar múltiples tareas que pueden superponerse en el tiempo. JavaScript logra concurrencia con el Event Loop sin usar múltiples hilos.

---

## E

### Event Loop
Mecanismo que permite a JavaScript ejecutar código asíncrono. Las funciones async interactúan con el Event Loop cuando usan `await`.

---

## F

### `for await...of`
Sintaxis para iterar sobre iterables asíncronos. Espera cada valor antes de continuar a la siguiente iteración.

```javascript
async function processAll(asyncIterable) {
  for await (const item of asyncIterable) {
    console.log(item);
  }
}
```

---

## M

### Microtask Queue
Cola donde se programan los callbacks de Promises. Tiene mayor prioridad que la Task Queue. Las funciones async reanudadas se colocan aquí.

---

## P

### Parallel Execution (Ejecución Paralela)
Iniciar múltiples operaciones asíncronas al mismo tiempo sin esperar a que cada una termine.

```javascript
// ✅ Paralelo - las operaciones inician juntas
const [user, posts] = await Promise.all([
  fetchUser(),
  fetchPosts()
]);

// ❌ Secuencial - una espera a la otra
const user = await fetchUser();
const posts = await fetchPosts();
```

---

## S

### Sequential Execution (Ejecución Secuencial)
Ejecutar operaciones una después de otra, esperando que cada una termine antes de iniciar la siguiente.

---

## T

### Top-level await (ES2022)
Capacidad de usar `await` en el nivel superior de un módulo ES, fuera de una función async.

```javascript
// En un módulo ES (.mjs o type="module")
const config = await fetch('/config.json').then(r => r.json());
export { config };
```

### Try/Catch
Estructura para manejar errores en código async/await. Captura tanto errores síncronos como Promises rechazadas.

```javascript
async function safeOperation() {
  try {
    const result = await riskyOperation();
    return result;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}
```

---

## U

### Unwrapping
El proceso automático que `await` realiza al extraer el valor de una Promise resuelta.

```javascript
const promise = Promise.resolve(42);
const value = await promise; // value = 42 (unwrapped)
```

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | [📡 Semana 15: Fetch API](../../week-15-fetch_api/README.md) → |

[↑ Semana 14](../README.md)
