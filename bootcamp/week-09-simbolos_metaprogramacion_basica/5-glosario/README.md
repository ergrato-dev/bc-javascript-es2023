# 📖 Glosario - Semana 09

## Símbolos y Metaprogramación Básica

Términos clave de esta semana ordenados alfabéticamente.

---

## D

### Description (Symbol)

Cadena opcional que describe un símbolo. Se usa para debugging.

```javascript
const sym = Symbol('myDescription');
console.log(sym.description); // 'myDescription'
```

---

## E

### Enumerable

Propiedad que determina si una clave aparece en `for...in` y `Object.keys()`. Las propiedades con claves Symbol son **no enumerables** por defecto en estos contextos.

```javascript
const sym = Symbol('key');
const obj = { [sym]: 'value', name: 'test' };

Object.keys(obj);        // ['name'] - sin símbolos
for (const k in obj) {}  // Solo 'name'
```

---

## G

### Global Symbol Registry

Registro compartido donde `Symbol.for()` almacena símbolos accesibles globalmente por su clave string.

```javascript
// Acceder al registro global
const sym1 = Symbol.for('app.id');
const sym2 = Symbol.for('app.id');
console.log(sym1 === sym2); // true
```

---

## I

### Introspection

Capacidad de examinar la estructura de un objeto en tiempo de ejecución. `Object.getOwnPropertySymbols()` permite introspección de claves simbólicas.

```javascript
const _private = Symbol('private');
const obj = { [_private]: 'secret' };

// Introspección
Object.getOwnPropertySymbols(obj); // [Symbol(private)]
```

---

## M

### Metaprogramming

Técnica donde el código puede examinar o modificar su propia estructura y comportamiento. Los Well-known Symbols son una herramienta de metaprogramación.

```javascript
// Modificar comportamiento de instanceof
class MyClass {
  static [Symbol.hasInstance](obj) {
    return typeof obj === 'number';
  }
}

console.log(42 instanceof MyClass); // true
```

---

## P

### Primitive Type

Tipo de dato básico en JavaScript. Symbol es el **7° tipo primitivo**, añadido en ES2023 (2015).

```javascript
// Los 7 tipos primitivos
typeof undefined;  // 'undefined'
typeof null;       // 'object' (bug histórico)
typeof true;       // 'boolean'
typeof 42;         // 'number'
typeof 42n;        // 'bigint'
typeof 'hello';    // 'string'
typeof Symbol();   // 'symbol'
```

---

### Property Key

Identificador de una propiedad de objeto. Puede ser string o symbol.

```javascript
const sym = Symbol('key');
const obj = {
  stringKey: 'value1',    // Clave string
  [sym]: 'value2'         // Clave symbol
};
```

---

## R

### Reflect.ownKeys()

Método que retorna **todas** las claves propias de un objeto (strings + symbols).

```javascript
const sym = Symbol('s');
const obj = { a: 1, [sym]: 2 };

Reflect.ownKeys(obj); // ['a', Symbol(s)]
```

---

## S

### Symbol

Tipo primitivo que representa un identificador único e inmutable. Cada llamada a `Symbol()` crea un valor distinto.

```javascript
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false - siempre únicos
```

---

### Symbol.for()

Método que busca o crea un símbolo en el registro global.

```javascript
// Crear/obtener símbolo global
const sym = Symbol.for('shared.key');

// Obtener la clave de un símbolo global
Symbol.keyFor(sym); // 'shared.key'
```

---

### Symbol.hasInstance

Well-known symbol que personaliza el comportamiento del operador `instanceof`.

```javascript
class Validator {
  static [Symbol.hasInstance](value) {
    return typeof value === 'string' && value.length > 0;
  }
}

'hello' instanceof Validator; // true
'' instanceof Validator;      // false
```

---

### Symbol.iterator

Well-known symbol que define el método iterador por defecto de un objeto.

```javascript
const range = {
  start: 1,
  end: 3,
  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i++) {
      yield i;
    }
  }
};

[...range]; // [1, 2, 3]
```

---

### Symbol.keyFor()

Método que retorna la clave string de un símbolo del registro global.

```javascript
const globalSym = Symbol.for('app.id');
const localSym = Symbol('local');

Symbol.keyFor(globalSym); // 'app.id'
Symbol.keyFor(localSym);  // undefined
```

---

### Symbol.toPrimitive

Well-known symbol que define cómo un objeto se convierte a valor primitivo.

```javascript
const money = {
  amount: 100,
  currency: 'USD',
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.amount;
    if (hint === 'string') return `${this.currency} ${this.amount}`;
    return this.amount;
  }
};

+money;        // 100
`${money}`;    // 'USD 100'
```

---

### Symbol.toStringTag

Well-known symbol que personaliza el resultado de `Object.prototype.toString()`.

```javascript
class MyClass {
  get [Symbol.toStringTag]() {
    return 'MyClass';
  }
}

Object.prototype.toString.call(new MyClass());
// '[object MyClass]'
```

---

## U

### Unique Identifier

Identificador que garantiza no colisionar con otros. Los Symbols son únicos por diseño.

```javascript
// Cada Symbol es único
Symbol('id') === Symbol('id'); // false

// Útil para evitar colisiones
const _internal = Symbol('internal');
obj[_internal] = 'safe from name collision';
```

---

## W

### Well-known Symbol

Símbolos predefinidos en JavaScript que permiten personalizar comportamientos del lenguaje.

| Symbol | Propósito |
|--------|-----------|
| `Symbol.iterator` | Hacer objeto iterable |
| `Symbol.toStringTag` | Personalizar toString |
| `Symbol.toPrimitive` | Personalizar conversión |
| `Symbol.hasInstance` | Personalizar instanceof |
| `Symbol.asyncIterator` | Iteración asíncrona |

---

## 📚 Referencias Rápidas

```javascript
// Crear símbolos
Symbol('desc')           // Local, único
Symbol.for('key')        // Global, compartido

// Obtener símbolos de objeto
Object.getOwnPropertySymbols(obj)  // Solo símbolos
Reflect.ownKeys(obj)               // Todo

// Well-known symbols comunes
Symbol.iterator          // for...of, spread
Symbol.toStringTag       // [object X]
Symbol.toPrimitive       // +obj, `${obj}`
Symbol.hasInstance       // instanceof
```

---

_Week 09 | Bootcamp JavaScript ES2023_
