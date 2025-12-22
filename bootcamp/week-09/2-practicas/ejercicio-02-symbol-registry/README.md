# Ejercicio 02: Symbol.for y Registro Global

## 🎯 Objetivo

Comprender la diferencia entre Symbol() y Symbol.for(), y cuándo usar cada uno.

---

## 📖 Conceptos Clave

### Symbol() vs Symbol.for()

```javascript
// Symbol() - siempre crea uno nuevo
Symbol('key') === Symbol('key'); // false

// Symbol.for() - reutiliza del registro global
Symbol.for('key') === Symbol.for('key'); // true
```

### El Registro Global

```javascript
// Primera llamada: crea y registra
const sym1 = Symbol.for('app.config');

// Segunda llamada: recupera el existente
const sym2 = Symbol.for('app.config');

console.log(sym1 === sym2); // true
```

### Symbol.keyFor()

```javascript
// Obtener la clave de un símbolo registrado
const registered = Symbol.for('my.key');
console.log(Symbol.keyFor(registered)); // 'my.key'

// Símbolos locales NO tienen clave
const local = Symbol('local');
console.log(Symbol.keyFor(local)); // undefined
```

### Namespacing

```javascript
// ✅ Buena práctica: usar namespace
const CONFIG = Symbol.for('myapp.config');
const CACHE = Symbol.for('myapp.cache');

// ❌ Evitar: claves genéricas
const ID = Symbol.for('id'); // Puede colisionar
```

---

## 📝 Instrucciones

1. Abre `starter/index.js`
2. Lee cada sección y descomenta el código paso a paso
3. Ejecuta con `node index.js` después de cada paso
4. Observa las diferencias entre Symbol() y Symbol.for()

---

## ✅ Resultado Esperado

```
--- Paso 1: Symbol() siempre crea nuevos ---
local1 === local2: false
Cada Symbol() es único

--- Paso 2: Symbol.for() reutiliza ---
global1 === global2: true
Symbol.for() retorna el mismo símbolo para la misma clave

--- Paso 3: Symbol.keyFor() ---
Clave de registered: app.shared
Clave de local: undefined
Solo símbolos de Symbol.for() tienen clave

--- Paso 4: Compartir entre módulos ---
En módulo A: Symbol(module.shared)
En módulo B: Symbol(module.shared)
¿Son iguales? true

--- Paso 5: Namespacing ---
Símbolo config: Symbol(myapp.config)
Símbolo database: Symbol(myapp.database)
```

---

## 🔗 Recursos

- [Teoría: Symbol.for y Registro Global](../../1-teoria/02-symbol-for-registry.md)
- [MDN: Symbol.for()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for)
