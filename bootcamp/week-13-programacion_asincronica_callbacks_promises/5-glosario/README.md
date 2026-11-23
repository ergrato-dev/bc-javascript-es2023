# 📖 Glosario - Semana 13: Programación Asincrónica

> Términos clave ordenados alfabéticamente

---

## A

### **API (Application Programming Interface)**
Conjunto de reglas y protocolos que permite que diferentes aplicaciones se comuniquen entre sí. En JavaScript, usamos APIs para obtener datos de servidores.

### **Asincronía**
Capacidad de ejecutar operaciones sin bloquear el flujo principal del programa. Permite que JavaScript maneje tareas que toman tiempo (como solicitudes HTTP) sin congelar la interfaz.

```javascript
// Código asíncrono - no bloquea
setTimeout(() => console.log('Después'), 1000);
console.log('Antes'); // Se ejecuta primero
```

---

## C

### **Callback**
Función que se pasa como argumento a otra función para ser ejecutada después de que una operación asincrónica se complete.

```javascript
const processData = (data, callback) => {
  // Procesar data...
  callback(result);
};
```

### **Callback Hell**
Patrón problemático que ocurre cuando se anidan múltiples callbacks, haciendo el código difícil de leer y mantener.

```javascript
// ❌ Callback Hell
getData(param1, (data1) => {
  processData(data1, (data2) => {
    saveData(data2, (data3) => {
      // Código difícil de mantener
    });
  });
});
```

### **Call Stack (Pila de llamadas)**
Estructura de datos que registra las funciones que se están ejecutando. JavaScript ejecuta las funciones en orden LIFO (Last In, First Out).

### **Catch**
Método de Promise que captura errores ocurridos en la cadena de Promises.

```javascript
promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

---

## E

### **Event Loop (Bucle de eventos)**
Mecanismo que permite a JavaScript ser asíncrono a pesar de tener un solo hilo de ejecución. Coordina la ejecución entre el Call Stack, Callback Queue y Microtask Queue.

### **Error-first Callback**
Convención de callbacks donde el primer parámetro es siempre un error (null si no hay error).

```javascript
fs.readFile('file.txt', (error, data) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('Data:', data);
});
```

---

## F

### **Fulfilled (Cumplida)**
Estado de una Promise que se ha resuelto exitosamente con un valor.

```javascript
const promise = Promise.resolve('success');
// Estado: fulfilled, valor: 'success'
```

---

## M

### **Macrotask (Macro-tarea)**
Tarea de la Callback Queue, como `setTimeout`, `setInterval`, eventos del DOM. Se ejecutan después de las microtasks.

### **Microtask (Micro-tarea)**
Tarea de alta prioridad como Promises y `queueMicrotask()`. Se ejecutan antes que las macrotasks.

```javascript
console.log('1');
Promise.resolve().then(() => console.log('2')); // Microtask
setTimeout(() => console.log('3'), 0); // Macrotask
console.log('4');
// Output: 1, 4, 2, 3
```

---

## P

### **Pending (Pendiente)**
Estado inicial de una Promise que aún no se ha resuelto ni rechazado.

### **Promise**
Objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante.

```javascript
const promise = new Promise((resolve, reject) => {
  // Operación asíncrona
  if (success) resolve(value);
  else reject(error);
});
```

### **Promise.all()**
Método que ejecuta múltiples Promises en paralelo y se resuelve cuando TODAS se completan exitosamente. Si una falla, toda la operación falla.

```javascript
Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results));
```

### **Promise.allSettled()**
Similar a `Promise.all()`, pero espera a que todas las Promises se completen (exitosas o fallidas) y retorna un array con el estado de cada una.

```javascript
Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Success:', result.value);
      } else {
        console.log('Error:', result.reason);
      }
    });
  });
```

### **Promise.any()**
Retorna la primera Promise que se resuelve exitosamente. Si todas fallan, retorna un AggregateError.

```javascript
Promise.any([promise1, promise2, promise3])
  .then(first => console.log('First success:', first));
```

### **Promise.race()**
Retorna la primera Promise en completarse, ya sea exitosa o fallida.

```javascript
Promise.race([promise1, promise2, promise3])
  .then(first => console.log('First to finish:', first));
```

### **Promise Chaining (Encadenamiento de Promises)**
Técnica de encadenar múltiples operaciones asíncronas usando `.then()`.

```javascript
fetch('/api/user')
  .then(response => response.json())
  .then(user => fetch(`/api/posts/${user.id}`))
  .then(response => response.json())
  .then(posts => console.log(posts));
```

---

## R

### **Race Condition (Condición de carrera)**
Situación donde el resultado depende del orden impredecible de eventos asíncronos.

### **Rejected (Rechazada)**
Estado de una Promise que falló con un error.

```javascript
const promise = Promise.reject(new Error('Failed'));
// Estado: rejected, razón: Error('Failed')
```

### **Reject**
Función en el constructor de Promise que se llama para marcar la Promise como fallida.

```javascript
new Promise((resolve, reject) => {
  if (error) reject(new Error('Something went wrong'));
});
```

### **Resolve**
Función en el constructor de Promise que se llama para marcar la Promise como exitosa.

```javascript
new Promise((resolve, reject) => {
  if (success) resolve(data);
});
```

---

## S

### **Settled (Resuelta)**
Estado de una Promise que ya no está pendiente (puede estar fulfilled o rejected).

### **Sincronía**
Código que se ejecuta de manera secuencial, bloqueando la ejecución hasta completarse.

```javascript
// Código síncrono - bloquea
console.log('1');
console.log('2');
console.log('3');
// Output: 1, 2, 3 (siempre en orden)
```

---

## T

### **Task Queue (Cola de tareas)**
Ver Callback Queue.

### **Then**
Método de Promise que se ejecuta cuando la Promise se resuelve exitosamente.

```javascript
promise.then(value => {
  console.log('Success:', value);
});
```

### **Thenable**
Objeto que tiene un método `.then()`. Las Promises son thenables, pero no todos los thenables son Promises.

### **Timeout**
Tiempo máximo de espera para una operación. Útil para evitar que solicitudes tarden indefinidamente.

```javascript
const timeout = ms => new Promise((_, reject) =>
  setTimeout(() => reject(new Error('Timeout')), ms)
);
```

---

## W

### **Web API**
APIs proporcionadas por el navegador (como `fetch`, `setTimeout`, `XMLHttpRequest`) que permiten operaciones asíncronas.

---

## 📚 Referencias

- [MDN - Promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - Event Loop](https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop)
- [JavaScript.info - Promises](https://javascript.info/promise-basics)

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | [📘 Semana 14: Async/Await](../../week-14-async_await/README.md) → |

[↑ Semana 13](../README.md)
