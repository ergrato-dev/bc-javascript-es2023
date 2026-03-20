# 🔗 Práctica 01: Callbacks y Event Loop

## 🎯 Objetivo

Comprender cómo funcionan los callbacks en JavaScript y visualizar el Event Loop en acción.

---

## 📚 Conceptos a Practicar

- Callbacks síncronos vs asíncronos
- Event Loop y orden de ejecución
- setTimeout y callbacks
- Callback hell (para entender el problema)

---

## 🚀 Instrucciones

Abre el archivo `starter/index.js` y sigue los pasos descomentando el código sección por sección. Ejecuta el archivo después de cada paso para ver los resultados.

### Ejecutar el código

```bash
node starter/index.js
```

---

## 📝 Pasos

### Paso 1: Callbacks Síncronos

Los callbacks síncronos se ejecutan inmediatamente.

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2));
```

**Ejecuta y observa**: Los números se duplican y muestran inmediatamente.

---

### Paso 2: Callbacks Asíncronos con setTimeout

Los callbacks asíncronos se ejecutan después, permitiendo que el código continúe.

**Descomenta la sección del Paso 2** en `starter/index.js`.

```javascript
console.log('Inicio');
setTimeout(() => console.log('Dentro del timeout'), 0);
console.log('Fin');
```

**Pregunta**: ¿Por qué "Fin" aparece antes que "Dentro del timeout" si el timeout es de 0ms?

**Respuesta**: Por el Event Loop. El callback de setTimeout va a la Callback Queue y solo se ejecuta cuando el Call Stack está vacío.

---

### Paso 3: Event Loop en Acción

Visualiza el orden de ejecución del Event Loop.

**Descomenta la sección del Paso 3**.

```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
```

**Orden esperado**: 1, 4, 3, 2

**Explicación**:
- `1` y `4`: Call Stack (síncrono)
- `3`: Microtask Queue (Promises tienen prioridad)
- `2`: Callback Queue (setTimeout)

---

### Paso 4: Múltiples Callbacks Asíncronos

Observa cómo múltiples callbacks se ejecutan en orden.

**Descomenta la sección del Paso 4**.

```javascript
setTimeout(() => console.log('Timeout 1 (1000ms)'), 1000);
setTimeout(() => console.log('Timeout 2 (500ms)'), 500);
setTimeout(() => console.log('Timeout 3 (0ms)'), 0);
console.log('Código síncrono');
```

**Orden esperado**:
1. Código síncrono
2. Timeout 3 (0ms)
3. Timeout 2 (500ms)
4. Timeout 1 (1000ms)

---

### Paso 5: Callback Hell (El Problema)

Experimenta el "Callback Hell" con callbacks anidados.

**Descomenta la sección del Paso 5**.

```javascript
setTimeout(() => {
  console.log('Nivel 1');
  setTimeout(() => {
    console.log('Nivel 2');
    setTimeout(() => {
      console.log('Nivel 3');
      setTimeout(() => {
        console.log('Nivel 4 - Esto es Callback Hell! 😱');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

**Observa**: El código crece horizontalmente y es difícil de leer.

---

### Paso 6: Error Handling con Callbacks

Practica el patrón "error-first callback".

**Descomenta la sección del Paso 6**.

```javascript
const divideNumbers = (a, b, callback) => {
  if (b === 0) {
    callback(new Error('División por cero'), null);
  } else {
    callback(null, a / b);
  }
};

divideNumbers(10, 2, (error, result) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }
  console.log('Resultado:', result);
});

divideNumbers(10, 0, (error, result) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }
  console.log('Resultado:', result);
});
```

---

## ✅ Checklist

- [ ] Entiendo la diferencia entre callbacks síncronos y asíncronos
- [ ] Comprendo por qué setTimeout(fn, 0) no se ejecuta inmediatamente
- [ ] Sé que las Promises (Microtasks) tienen prioridad sobre setTimeout
- [ ] Reconozco el problema del Callback Hell
- [ ] Entiendo el patrón error-first callback

---

## 🔗 Recursos

- [Loupe - Event Loop Visualizer](http://latentflip.com/loupe/)
- [MDN: Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

---

**Siguiente práctica**: [Práctica 02 - Promises Básicas](../practica-02-promises-basicas/)
