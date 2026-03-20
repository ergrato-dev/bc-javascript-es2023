# Ejercicio 01: Iteradores Básicos

## 🎯 Objetivo

Comprender el protocolo de iteración implementando iteradores manualmente y explorando iterables nativos de JavaScript.

---

## 📖 Conceptos Clave

### El Protocolo de Iteración

JavaScript define un protocolo estándar para que los objetos sean iterables:

1. **Iterable**: Objeto que implementa `[Symbol.iterator]()`
2. **Iterador**: Objeto que implementa `next()`
3. **Resultado**: `{ value: any, done: boolean }`

```javascript
// Un array es iterable
const arr = [1, 2, 3];

// Obtener su iterador
const iterator = arr[Symbol.iterator]();

// Llamar next() para obtener valores
iterator.next(); // { value: 1, done: false }
iterator.next(); // { value: 2, done: false }
iterator.next(); // { value: 3, done: false }
iterator.next(); // { value: undefined, done: true }
```

---

## 🚀 Instrucciones

1. Abre `starter/index.js`
2. Lee cada sección y descomenta el código
3. Ejecuta con `node index.js`
4. Observa los resultados en la consola

---

## 📝 Pasos del Ejercicio

### Paso 1: Iterador de Array

Explora cómo funciona el iterador nativo de un array.

### Paso 2: Iterador de String

Los strings también son iterables, carácter por carácter.

### Paso 3: Iterador de Map

Map itera sobre pares [key, value].

### Paso 4: Iterador de Set

Set itera sobre valores únicos.

### Paso 5: Crear Iterador Manual

Implementa tu propio objeto iterable desde cero.

### Paso 6: Rango Iterable

Crea un objeto que genere un rango de números.

---

## ✅ Resultado Esperado

Al descomentar todo el código, deberías ver:

```
--- Paso 1: Iterador de Array ---
Primer next(): { value: 10, done: false }
Segundo next(): { value: 20, done: false }
Tercer next(): { value: 30, done: false }
Cuarto next(): { value: undefined, done: true }

--- Paso 2: Iterador de String ---
Char: H
Char: o
Char: l
Char: a

--- Paso 3: Iterador de Map ---
Tipo de entrada: object
user1 → Alice
user2 → Bob
user3 → Charlie

--- Paso 4: Iterador de Set ---
Color único: red
Color único: green
Color único: blue

--- Paso 5: Iterador Manual ---
Countdown: 3
Countdown: 2
Countdown: 1
Spread: [ 3, 2, 1 ]

--- Paso 6: Rango Iterable ---
Rango 1-5: [ 1, 2, 3, 4, 5 ]
Pares 0-10: [ 0, 2, 4, 6, 8, 10 ]
```

---

## 💡 Tips

- El método `next()` siempre retorna un objeto con `value` y `done`
- `done: true` indica que no hay más valores
- `Symbol.iterator` es una clave especial que hace al objeto iterable

---

## 📚 Recursos

- [MDN: Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
