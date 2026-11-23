# ⏸️ La Palabra Clave await

## 🎯 Objetivos

Al finalizar este tema, serás capaz de:

- Usar `await` para pausar la ejecución hasta que una Promise se resuelva
- Entender el flujo de ejecución con await
- Aplicar await correctamente en diferentes contextos
- Evitar errores comunes con await

---

## 📋 Contenido

### 1. ¿Qué hace await?

`await` **pausa la ejecución** de una función async hasta que la Promise se resuelva, y luego **retorna el valor resuelto**.

```javascript
async function example() {
  console.log('1. Antes de await');

  // await pausa aquí hasta que la Promise se resuelva
  const result = await someAsyncOperation();

  console.log('2. Después de await:', result);
  return result;
}
```

**Importante**: `await` solo puede usarse dentro de:
- Funciones declaradas con `async`
- El nivel superior de módulos ES (top-level await)

---

### 2. await "desenvuelve" Promises

`await` extrae el valor de una Promise resuelta:

```javascript
// ============================================
// Sin await - trabajamos con la Promise
// ============================================
async function withoutAwait() {
  const promise = fetch('/api/data');
  console.log(promise); // Promise {<pending>}

  // Necesitamos .then() para obtener el valor
  promise.then(response => console.log(response));
}

// ============================================
// Con await - trabajamos con el valor directamente
// ============================================
async function withAwait() {
  const response = await fetch('/api/data');
  console.log(response); // Response { ok: true, status: 200, ... }

  // Podemos usar el valor inmediatamente
  const data = await response.json();
  console.log(data); // { users: [...] }
}
```

---

### 3. Flujo de ejecución detallado

Veamos paso a paso qué sucede:

```javascript
// Simulación de operación asíncrona
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function demonstrateFlow() {
  console.log('A: Inicio de función');

  await delay(1000);
  console.log('B: Después de 1 segundo');

  await delay(1000);
  console.log('C: Después de 2 segundos');

  return 'Completado';
}

console.log('1: Antes de llamar');
demonstrateFlow().then(result => console.log('4:', result));
console.log('2: Después de llamar');

// Salida:
// 1: Antes de llamar
// A: Inicio de función
// 2: Después de llamar    <-- ¡No espera!
// B: Después de 1 segundo
// C: Después de 2 segundos
// 4: Completado
```

**Explicación del flujo**:
1. Se ejecuta "1: Antes de llamar"
2. Se llama a `demonstrateFlow()`, entra y ejecuta "A: Inicio"
3. Encuentra `await` → la función se pausa, pero el código exterior continúa
4. Se ejecuta "2: Después de llamar"
5. Después de 1 segundo, la función resume con "B"
6. Después de otro segundo, "C" y finalmente "4: Completado"

---

### 4. await con diferentes valores

`await` puede usarse con cualquier valor, no solo Promises:

```javascript
async function awaitDifferentValues() {
  // ============================================
  // 1. Con una Promise - espera a que se resuelva
  // ============================================
  const promiseResult = await Promise.resolve('Desde Promise');
  console.log(promiseResult); // 'Desde Promise'

  // ============================================
  // 2. Con un valor no-Promise - retorna inmediatamente
  // ============================================
  const numberResult = await 42;
  console.log(numberResult); // 42 (envuelto y desenvuelto automáticamente)

  const stringResult = await 'Hola';
  console.log(stringResult); // 'Hola'

  // ============================================
  // 3. Con un thenable (objeto con método .then)
  // ============================================
  const thenable = {
    then(resolve) {
      resolve('Desde thenable');
    }
  };
  const thenableResult = await thenable;
  console.log(thenableResult); // 'Desde thenable'
}
```

---

### 5. Encadenando operaciones con await

A diferencia de `.then()` que anida, `await` permite escribir código lineal:

```javascript
// ============================================
// Cadena de operaciones dependientes
// ============================================
async function processUserOrder(userId) {
  // Paso 1: Obtener usuario
  const user = await fetchUser(userId);
  console.log('Usuario:', user.name);

  // Paso 2: Obtener carrito del usuario
  const cart = await fetchCart(user.cartId);
  console.log('Items en carrito:', cart.items.length);

  // Paso 3: Calcular total
  const total = await calculateTotal(cart.items);
  console.log('Total:', total);

  // Paso 4: Procesar pago
  const payment = await processPayment(user.paymentMethod, total);
  console.log('Pago:', payment.status);

  // Paso 5: Crear orden
  const order = await createOrder({
    userId: user.id,
    items: cart.items,
    total,
    paymentId: payment.id
  });

  return order;
}

// Uso
processUserOrder(123)
  .then(order => console.log('Orden creada:', order.id))
  .catch(error => console.error('Error:', error.message));
```

---

### 6. await en expresiones

`await` puede usarse en cualquier expresión:

```javascript
async function awaitInExpressions() {
  // ============================================
  // En asignación destructurada
  // ============================================
  const { data, status } = await fetchAPI('/endpoint');

  // ============================================
  // En template literals
  // ============================================
  const message = `Usuario: ${await fetchUserName()}`;

  // ============================================
  // En argumentos de función
  // ============================================
  console.log(await fetchData());

  // ============================================
  // En operaciones aritméticas
  // ============================================
  const total = (await getPrice()) * (await getQuantity());

  // ============================================
  // En condicionales
  // ============================================
  if (await checkPermission()) {
    await performAction();
  }

  // ============================================
  // En operador ternario
  // ============================================
  const result = (await isAvailable()) ? 'Disponible' : 'No disponible';
}
```

---

### 7. Errores comunes con await

```javascript
// ============================================
// ❌ ERROR 1: await fuera de función async
// ============================================
// const data = await fetch('/api');  // SyntaxError!

// ✅ Solución: envolver en función async
const getData = async () => {
  const data = await fetch('/api');
  return data;
};

// ============================================
// ❌ ERROR 2: Olvidar await
// ============================================
async function forgetAwait() {
  const response = fetch('/api/users'); // ¡Falta await!
  console.log(response); // Promise {<pending>} - no el resultado

  // Esto fallará porque response es una Promise, no un Response
  // const data = response.json(); // TypeError!
}

// ✅ Solución: siempre usar await
async function correctAwait() {
  const response = await fetch('/api/users');
  const data = await response.json();
  return data;
}

// ============================================
// ❌ ERROR 3: await en callbacks normales
// ============================================
async function awaitInCallback() {
  const ids = [1, 2, 3];

  // ❌ El callback de forEach NO es async
  ids.forEach(id => {
    // const user = await fetchUser(id); // SyntaxError!
  });
}

// ✅ Solución: usar for...of o map con Promise.all
async function correctCallbackUsage() {
  const ids = [1, 2, 3];

  // Opción 1: for...of (secuencial)
  for (const id of ids) {
    const user = await fetchUser(id);
    console.log(user);
  }

  // Opción 2: map + Promise.all (paralelo)
  const users = await Promise.all(
    ids.map(id => fetchUser(id))
  );
}
```

---

### 8. Top-level await (ES2022)

En módulos ES, puedes usar `await` en el nivel superior:

```javascript
// config.mjs (módulo ES)
// ============================================
// Top-level await - sin necesidad de función async
// ============================================

// Cargar configuración al importar el módulo
const response = await fetch('/api/config');
export const config = await response.json();

console.log('Configuración cargada:', config.appName);

// ============================================
// Uso en otro módulo
// ============================================
// app.mjs
import { config } from './config.mjs';
// El import espera a que config.mjs termine de cargar

console.log('Usando config:', config.apiUrl);
```

**Requisitos para top-level await**:
- El archivo debe ser un módulo ES (`.mjs` o `type="module"` en package.json/HTML)
- Node.js 14.8+ o navegadores modernos

---

## ✅ Checklist de Verificación

- [ ] Puedo usar await para obtener valores de Promises
- [ ] Entiendo el flujo de ejecución con await
- [ ] Sé dónde puedo y no puedo usar await
- [ ] Puedo identificar errores comunes con await
- [ ] Conozco top-level await y sus requisitos

---

## 📚 Recursos Adicionales

- [MDN: await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/await)
- [V8: Top-level await](https://v8.dev/features/top-level-await)

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🚀 Funciones Async](01-async-functions.md) | [Teoría — 🛡️ Manejo de Errores en Async/Await](03-error-handling.md) → |

[↑ Semana 14](../README.md)
