# Ejercicio 04: Propiedades Privadas con Symbols

## 🎯 Objetivo

Usar símbolos para crear propiedades "ocultas" y entender sus limitaciones.

---

## 📖 Conceptos Clave

### Propiedades Ocultas de Enumeraciones

```javascript
const _secret = Symbol('secret');

const obj = {
  public: 'visible',
  [_secret]: 'oculto'
};

Object.keys(obj);       // ['public']
JSON.stringify(obj);    // '{"public":"visible"}'
```

### Acceder a Propiedades Simbólicas

```javascript
// Object.getOwnPropertySymbols()
const symbols = Object.getOwnPropertySymbols(obj);
console.log(obj[symbols[0]]); // 'oculto'

// Reflect.ownKeys() - obtiene TODO
Reflect.ownKeys(obj); // ['public', Symbol(secret)]
```

### No es Privacidad Real

```javascript
// ⚠️ Los símbolos NO son verdaderamente privados
// Solo están ocultos de enumeraciones normales
// Cualquiera puede acceder con getOwnPropertySymbols
```

### Patrón de Módulo

```javascript
// Los símbolos son útiles en el scope de un módulo
const _data = Symbol('data');

export class MyClass {
  constructor() {
    this[_data] = 'interno';
  }
}
// _data no es accesible fuera del módulo
```

---

## 📝 Instrucciones

1. Abre `starter/index.js`
2. Lee cada sección y descomenta el código paso a paso
3. Ejecuta con `node index.js` después de cada paso
4. Comprende qué está oculto y qué no

---

## ✅ Resultado Esperado

```
--- Paso 1: Ocultar Propiedades ---
Object.keys: [ 'name', 'email' ]
JSON.stringify: {"name":"Alice","email":"alice@test.com"}
El password está oculto de las enumeraciones normales

--- Paso 2: Pero NO es Privado ---
Símbolos encontrados: [ Symbol(password) ]
Password accedido: secret123
⚠️ Los símbolos se pueden descubrir

--- Paso 3: Patrón de Módulo ---
Balance: 150
Object.keys: [ 'deposit', 'withdraw', 'getBalance' ]
El balance interno está oculto

--- Paso 4: Comparativa ---
| Método      | Oculto | Privado |
| underscore  | ❌     | ❌      |
| Symbol      | ✅     | ❌      |
| #private    | ✅     | ✅      |
```

---

## 🔗 Recursos

- [Teoría: Símbolos como Claves Privadas](../../1-teoria/04-symbols-as-keys.md)
- [Teoría: Object.getOwnPropertySymbols](../../1-teoria/05-get-own-property-symbols.md)
