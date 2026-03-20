# 🎯 Práctica 01: Sintaxis Básica de Async/Await

## 📋 Descripción

En esta práctica aprenderás la sintaxis básica de funciones `async` y el operador `await`. Convertirás código basado en Promises a la sintaxis más legible de async/await.

---

## 🎯 Objetivos

- Declarar funciones async con diferentes sintaxis
- Usar await para obtener valores de Promises
- Entender que async siempre retorna una Promise

---

## ⏱️ Duración

45 minutos

---

## 📝 Instrucciones

### Paso 1: Función Async Básica

Una función `async` siempre retorna una Promise, incluso si retornas un valor simple.

```javascript
// El valor retornado se envuelve en Promise.resolve()
async function sayHello() {
  return 'Hola mundo';
}

// sayHello() retorna Promise {<fulfilled>: 'Hola mundo'}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Diferentes Sintaxis de Async

Hay varias formas de declarar funciones async:

```javascript
// Function declaration
async function getData() { }

// Function expression
const getData = async function() { };

// Arrow function
const getData = async () => { };

// Método de objeto
const obj = {
  async getData() { }
};
```

**Descomenta** la sección del Paso 2 en `starter/index.js`.

---

### Paso 3: Usando Await

`await` pausa la ejecución hasta que la Promise se resuelva:

```javascript
async function example() {
  // await "desenvuelve" la Promise
  const result = await Promise.resolve('valor');
  console.log(result); // 'valor', no Promise
}
```

**Descomenta** la sección del Paso 3.

---

### Paso 4: Convertir Promises a Async/Await

Transforma código con `.then()` a async/await:

```javascript
// ANTES: con .then()
function fetchData() {
  return fetch('/api/data')
    .then(response => response.json())
    .then(data => data.items);
}

// DESPUÉS: con async/await
async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data.items;
}
```

**Descomenta** la sección del Paso 4.

---

### Paso 5: Flujo de Ejecución

Entiende cómo fluye el código con await:

```javascript
console.log('1');
await someOperation();  // Pausa aquí
console.log('2');       // Continúa después
```

**Descomenta** la sección del Paso 5.

---

## 🧪 Verificación

Al ejecutar el código completo deberías ver:

```
--- Paso 1: Función Async Básica ---
Retorno de sayHello: Promise
Valor resuelto: Hola mundo

--- Paso 2: Diferentes Sintaxis ---
Declaration: function async
Expression: function async
Arrow: arrow async
Method: method async

--- Paso 3: Usando Await ---
Valor con await: 42
Usuario: { id: 1, name: 'Usuario' }

--- Paso 4: Conversión de Promises ---
Items: ["item1", "item2", "item3"]

--- Paso 5: Flujo de Ejecución ---
1. Antes de async
2. Inicio de función async
3. Después de llamar (no espera)
4. Después de await
5. Promise resuelta
```

---

## 📚 Recursos

- [MDN: async function](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)

---

[⬅️ Volver a Semana 14](../../README.md) | [Siguiente: Error Handling ➡️](../practica-02-error-handling/)
