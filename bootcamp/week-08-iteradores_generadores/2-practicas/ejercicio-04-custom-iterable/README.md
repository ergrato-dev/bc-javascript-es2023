# Ejercicio 04: Iterables Personalizados

## 🎯 Objetivo

Crear clases y objetos que implementen el protocolo de iteración, haciéndolos compatibles con `for...of`, spread operator y más.

---

## 📖 Conceptos Clave

### Hacer una Clase Iterable

Para que una clase sea iterable, debe implementar `[Symbol.iterator]`:

```javascript
class MyCollection {
  constructor() {
    this.items = [];
  }

  // Usando generador (más simple)
  *[Symbol.iterator]() {
    yield* this.items;
  }
}

const col = new MyCollection();
for (const item of col) { /* ... */ }
```

### Beneficios de ser Iterable

- ✅ Compatible con `for...of`
- ✅ Compatible con spread `[...obj]`
- ✅ Compatible con destructuring
- ✅ Compatible con `Array.from()`
- ✅ Compatible con `Map`, `Set` constructors

---

## 🚀 Instrucciones

1. Abre `starter/index.js`
2. Lee cada sección y descomenta el código
3. Ejecuta con `node index.js`
4. Crea tus propias estructuras iterables

---

## 📝 Pasos del Ejercicio

### Paso 1: Objeto Iterable Simple

Convierte un objeto plano en iterable.

### Paso 2: Clase Range Iterable

Crea una clase que genere rangos de números.

### Paso 3: LinkedList Iterable

Implementa una lista enlazada que se pueda iterar.

### Paso 4: Múltiples Iteradores

Una clase con diferentes formas de iteración.

### Paso 5: Colección con Métodos Fluidos

Encadena operaciones como filter y map.

---

## ✅ Resultado Esperado

```
--- Paso 1: Objeto Iterable Simple ---
Countdown: 5, 4, 3, 2, 1
Spread: [ 5, 4, 3, 2, 1 ]

--- Paso 2: Clase Range ---
Range 1-5: [ 1, 2, 3, 4, 5 ]
Evens 0-10: [ 0, 2, 4, 6, 8, 10 ]
Destructuring: 1 2

--- Paso 3: LinkedList ---
Lista: 10 -> 20 -> 30
Array: [ 10, 20, 30 ]
Suma: 60

--- Paso 4: Múltiples Iteradores ---
Default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
Por filas: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
Diagonal: [ 1, 5, 9 ]

--- Paso 5: Colección Fluida ---
Adultos: Alice (30), Charlie (35)
Nombres: [ 'Alice', 'Charlie' ]
```

---

## 💡 Tips

- Usa `*[Symbol.iterator]()` para implementar con generador
- Puedes tener métodos adicionales que retornen otros iterables
- Cada llamada a `[Symbol.iterator]()` debe retornar un iterador nuevo
- El iterador mantiene su propio estado independiente

---

## 📚 Recursos

- [MDN: Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
- [JavaScript.info: Iterables](https://javascript.info/iterable)
