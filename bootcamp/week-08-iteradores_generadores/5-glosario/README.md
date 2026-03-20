# 📖 Glosario - Week 08: Iteradores y Generadores

## Términos Clave (A-Z)

---

### D

#### **done**
Propiedad booleana del objeto resultado de `next()`. Indica si la iteración ha terminado (`true`) o hay más valores (`false`).
```javascript
iterator.next(); // { value: 1, done: false }
iterator.next(); // { value: undefined, done: true }
```

#### **Delegación**
Proceso de transferir la iteración a otro iterable usando `yield*`. Permite componer generadores.
```javascript
function* outer() {
  yield* [1, 2, 3]; // Delega al array
}
```

---

### F

#### **for...in**
Loop que itera sobre las **claves enumerables** de un objeto. No recomendado para arrays.
```javascript
for (const key in { a: 1, b: 2 }) {
  console.log(key); // 'a', 'b'
}
```

#### **for...of**
Loop que itera sobre los **valores** de un iterable (arrays, strings, Map, Set, etc.).
```javascript
for (const value of [1, 2, 3]) {
  console.log(value); // 1, 2, 3
}
```

#### **function***
Sintaxis para declarar una función generadora. El asterisco indica que es un generador.
```javascript
function* myGenerator() {
  yield 1;
  yield 2;
}
```

---

### G

#### **Generator (Generador)**
Función especial que puede pausar y reanudar su ejecución. Retorna un objeto iterador cuando se invoca.
```javascript
function* gen() {
  yield 'a';
  yield 'b';
}
const g = gen(); // Generator object
```

#### **Generator Object**
Objeto retornado al llamar una función generadora. Implementa tanto el protocolo iterable como el iterador.
```javascript
const gen = myGenerator();
gen.next();  // Método del iterador
[...gen];    // Es iterable
```

---

### I

#### **Iterable**
Objeto que implementa el método `[Symbol.iterator]()`, permitiendo ser iterado con `for...of`, spread, etc.
```javascript
const iterable = {
  [Symbol.iterator]() {
    return iterator;
  }
};
```

#### **Iterable Protocol**
Protocolo que define cómo un objeto puede ser iterado. Requiere implementar `[Symbol.iterator]()`.

#### **Iterator (Iterador)**
Objeto que implementa el método `next()`, el cual retorna objetos con propiedades `value` y `done`.
```javascript
const iterator = {
  next() {
    return { value: 1, done: false };
  }
};
```

#### **Iterator Protocol**
Protocolo que define la interfaz de un iterador: debe tener un método `next()` que retorne `{ value, done }`.

---

### L

#### **Lazy Evaluation**
Estrategia de evaluación donde los valores se calculan solo cuando se necesitan. Los generadores implementan lazy evaluation.
```javascript
function* infinite() {
  let n = 0;
  while (true) yield n++; // No consume memoria infinita
}
```

---

### N

#### **next()**
Método del iterador que avanza la iteración y retorna el siguiente valor. Puede recibir un argumento que se pasa al generador.
```javascript
const gen = myGenerator();
gen.next();       // Avanza
gen.next('value'); // Pasa valor al generador
```

---

### R

#### **return()**
Método del generador que termina la iteración y retorna un valor específico.
```javascript
const gen = myGenerator();
gen.return('done'); // { value: 'done', done: true }
```

---

### S

#### **Symbol.iterator**
Símbolo bien conocido (well-known symbol) que define el método iterador de un objeto.
```javascript
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();
```

#### **Spread Operator con Iterables**
El operador spread (`...`) funciona con cualquier iterable, expandiendo sus valores.
```javascript
const set = new Set([1, 2, 3]);
const arr = [...set]; // [1, 2, 3]
```

---

### T

#### **throw()**
Método del generador que lanza un error dentro del generador, permitiendo manejo de errores.
```javascript
function* gen() {
  try {
    yield 1;
  } catch (e) {
    console.log('Error:', e);
  }
}
gen.throw(new Error('test'));
```

---

### V

#### **value**
Propiedad del objeto resultado de `next()` que contiene el valor actual de la iteración.
```javascript
iterator.next(); // { value: 42, done: false }
```

---

### Y

#### **yield**
Palabra clave que pausa un generador y produce un valor. La ejecución se reanuda en la siguiente llamada a `next()`.
```javascript
function* gen() {
  yield 1; // Pausa aquí
  yield 2; // Pausa aquí
}
```

#### **yield***
Operador que delega la iteración a otro iterable o generador, produciendo todos sus valores.
```javascript
function* gen() {
  yield* [1, 2, 3];  // Produce 1, 2, 3
  yield* otherGen(); // Delega a otro generador
}
```

---

## 📊 Tabla Resumen

| Término | Categoría | Descripción Breve |
|---------|-----------|-------------------|
| done | Iterator Protocol | Indica fin de iteración |
| for...in | Loop | Itera claves de objetos |
| for...of | Loop | Itera valores de iterables |
| function* | Sintaxis | Declara generador |
| Generator | Concepto | Función pausable |
| Iterable | Protocolo | Objeto con Symbol.iterator |
| Iterator | Protocolo | Objeto con next() |
| Lazy Evaluation | Concepto | Evaluación bajo demanda |
| next() | Método | Avanza iteración |
| Symbol.iterator | Símbolo | Define iterador |
| value | Iterator Protocol | Valor actual |
| yield | Keyword | Pausa generador |
| yield* | Operador | Delega iteración |

---

*Glosario Week 08 | Bootcamp JavaScript ES2023*
