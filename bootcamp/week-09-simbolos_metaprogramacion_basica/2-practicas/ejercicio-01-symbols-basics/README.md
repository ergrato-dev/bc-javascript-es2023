# Ejercicio 01: Creación y Uso de Symbols

## 🎯 Objetivo

Aprender a crear símbolos, entender su unicidad y usarlos como claves de objetos.

---

## 📖 Conceptos Clave

### Crear Símbolos

```javascript
// Sin descripción (no recomendado)
const sym1 = Symbol();

// Con descripción (recomendado)
const sym2 = Symbol('mi-identificador');

// La descripción es solo para debugging
console.log(sym2.description); // 'mi-identificador'
```

### Unicidad Garantizada

```javascript
const a = Symbol('id');
const b = Symbol('id');

console.log(a === b); // false - SIEMPRE son diferentes
```

### Como Claves de Objeto

```javascript
const ID = Symbol('id');

const obj = {
  name: 'Test',
  [ID]: 12345  // Sintaxis de propiedad computada
};

// Acceder
console.log(obj[ID]); // 12345
console.log(obj.ID);  // undefined (busca string 'ID')
```

### Ocultos de Enumeraciones

```javascript
const _secret = Symbol('secret');
const obj = { public: 1, [_secret]: 2 };

Object.keys(obj);           // ['public']
Object.values(obj);         // [1]
JSON.stringify(obj);        // '{"public":1}'

// Pero accesibles con:
Object.getOwnPropertySymbols(obj); // [Symbol(secret)]
```

---

## 📝 Instrucciones

1. Abre `starter/index.js`
2. Lee cada sección y descomenta el código paso a paso
3. Ejecuta con `node index.js` después de cada paso
4. Observa los resultados y comprende cada concepto

---

## ✅ Resultado Esperado

Al completar el ejercicio deberías ver output similar a:

```
--- Paso 1: Crear Símbolos ---
Símbolo creado: Symbol(user-id)
Descripción: user-id
Tipo: symbol

--- Paso 2: Unicidad ---
sym1 === sym2: false
Aunque tienen la misma descripción, son únicos

--- Paso 3: Como Claves de Objeto ---
Nombre: Alice
ID (con símbolo): 12345
ID (con punto): undefined

--- Paso 4: Ocultos de Enumeraciones ---
Object.keys: [ 'name', 'email' ]
Object.values: [ 'Alice', 'alice@test.com' ]
JSON: {"name":"Alice","email":"alice@test.com"}
for...in: name, email

--- Paso 5: Acceder a Símbolos ---
Símbolos del objeto: [ Symbol(id), Symbol(createdAt) ]
Todas las claves: [ 'name', 'email', Symbol(id), Symbol(createdAt) ]
```

---

## 🔗 Recursos

- [Teoría: Introducción a Symbols](../../1-teoria/01-symbols-intro.md)
- [MDN: Symbol](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
