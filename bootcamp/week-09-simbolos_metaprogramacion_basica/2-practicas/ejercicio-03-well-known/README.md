# Ejercicio 03: Well-known Symbols

## 🎯 Objetivo

Aprender a usar los Well-known Symbols para personalizar el comportamiento de objetos.

---

## 📖 Conceptos Clave

### Symbol.toStringTag

Personaliza lo que muestra `Object.prototype.toString.call()`:

```javascript
const obj = {
  [Symbol.toStringTag]: 'MiTipo'
};

Object.prototype.toString.call(obj); // '[object MiTipo]'
```

### Symbol.toPrimitive

Controla cómo se convierte a primitivo:

```javascript
const money = {
  amount: 100,
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.amount;
    if (hint === 'string') return `$${this.amount}`;
    return this.amount; // default
  }
};

+money;        // 100 (hint: 'number')
`${money}`;    // '$100' (hint: 'string')
money + '';    // '100' (hint: 'default')
```

### Symbol.iterator

Hace un objeto iterable (visto en week-08):

```javascript
const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
};

[...range]; // [1, 2, 3]
```

### Symbol.hasInstance

Personaliza `instanceof`:

```javascript
class Validator {
  static [Symbol.hasInstance](value) {
    return typeof value === 'number' && !isNaN(value);
  }
}

42 instanceof Validator;    // true
NaN instanceof Validator;   // false
```

---

## 📝 Instrucciones

1. Abre `starter/index.js`
2. Lee cada sección y descomenta el código paso a paso
3. Ejecuta con `node index.js` después de cada paso
4. Experimenta modificando los valores

---

## ✅ Resultado Esperado

```
--- Paso 1: Symbol.toStringTag ---
Default: [object Object]
Con toStringTag: [object Database]
En clase: [object HTTPClient]

--- Paso 2: Symbol.toPrimitive ---
Como número: 150
Como string: USD 150.00
Default: 150

--- Paso 3: Symbol.iterator ---
for...of: 1, 2, 3, 4, 5
spread: [1, 2, 3, 4, 5]
destructuring: a=1, b=2

--- Paso 4: Symbol.hasInstance ---
42 instanceof Numeric: true
'42' instanceof Numeric: false
```

---

## 🔗 Recursos

- [Teoría: Well-known Symbols](../../1-teoria/03-well-known-symbols.md)
- [MDN: Well-known Symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols)
