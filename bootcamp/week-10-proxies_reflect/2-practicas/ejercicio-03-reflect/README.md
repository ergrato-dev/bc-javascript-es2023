# 🪞 Ejercicio 03: API Reflect

## 🎯 Objetivo

Dominar la API Reflect, entender el parámetro `receiver` y aprender a usar Reflect correctamente dentro de traps.

---

## 📋 Conceptos Clave

### ¿Por qué Reflect?

1. **Consistencia**: Métodos unificados para operaciones de objetos
2. **Retornos claros**: Retorna `boolean` en lugar de lanzar errores
3. **Receiver correcto**: Mantiene el `this` apropiado en getters/setters
4. **Proxy companion**: Diseñado para usarse dentro de traps

### Métodos Principales

| Método | Equivalente | Retorna |
|--------|-------------|---------|
| `Reflect.get(o, k)` | `o[k]` | Valor |
| `Reflect.set(o, k, v)` | `o[k] = v` | `boolean` |
| `Reflect.has(o, k)` | `k in o` | `boolean` |
| `Reflect.deleteProperty(o, k)` | `delete o[k]` | `boolean` |
| `Reflect.ownKeys(o)` | `Object.keys(o)` + symbols | `Array` |

---

## 🔄 Pasos del Ejercicio

### Paso 1: Reflect.get vs Acceso Directo

Comparar `Reflect.get()` con el acceso directo a propiedades:

```javascript
Reflect.get(obj, 'prop'); // vs obj.prop
Reflect.get(obj, 'prop', receiver); // Con receiver
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Reflect.set y Retorno Boolean

`Reflect.set()` retorna `true`/`false` en lugar de lanzar errores:

```javascript
const success = Reflect.set(obj, 'prop', value);
if (!success) {
  console.log('Assignment failed');
}
```

**Descomenta** la sección del Paso 2.

---

### Paso 3: El Parámetro receiver

Entender cómo `receiver` mantiene el `this` correcto en getters:

```javascript
const parent = {
  get value() { return this.multiplier * 10; }
};
const child = { multiplier: 5 };
Reflect.get(parent, 'value', child); // this = child
```

**Descomenta** la sección del Paso 3.

---

### Paso 4: Reflect en Traps

Usar Reflect dentro de handlers de Proxy:

```javascript
const handler = {
  get(target, prop, receiver) {
    return Reflect.get(target, prop, receiver); // ✅ Correcto
  }
};
```

**Descomenta** la sección del Paso 4.

---

### Paso 5: Reflect.has y Reflect.deleteProperty

Operaciones `in` y `delete` con Reflect:

```javascript
Reflect.has(obj, 'prop');           // 'prop' in obj
Reflect.deleteProperty(obj, 'prop'); // delete obj.prop
```

**Descomenta** la sección del Paso 5.

---

### Paso 6: Reflect.ownKeys

Obtener todas las claves propias incluyendo symbols:

```javascript
const keys = Reflect.ownKeys(obj);
// Incluye strings Y symbols
```

**Descomenta** la sección del Paso 6.

---

### Paso 7: Proxy + Reflect Completo

Combinar Proxy y Reflect para un interceptor robusto:

```javascript
const handler = {
  get(target, prop, receiver) {
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`SET ${prop}`);
    return Reflect.set(target, prop, value, receiver);
  }
};
```

**Descomenta** la sección del Paso 7.

---

## ✅ Resultado Esperado

Al ejecutar el archivo completo, deberías ver:

```
--- Paso 1: Reflect.get vs Acceso Directo ---
Direct access: Alice
Reflect.get: Alice
Both are equal: true

--- Paso 2: Reflect.set Retorno Boolean ---
Set on normal object: true
Set on frozen object: false
Frozen value unchanged: 42

--- Paso 3: El Parámetro receiver ---
Sin receiver (this=parent): NaN
Con receiver (this=child): 50
Getter usa this.multiplier del receiver

--- Paso 4: Reflect en Traps ---
[Proxy GET] firstName
[Proxy GET] lastName
[Proxy GET] fullName
Full name: John Doe

--- Paso 5: has y deleteProperty ---
Has 'name': true
Has 'age': false
Delete 'temp': true
Object after delete: { name: 'Alice' }

--- Paso 6: Reflect.ownKeys ---
Object.keys: name, age
Reflect.ownKeys: name, age, Symbol(id)
Symbols included!

--- Paso 7: Proxy + Reflect Completo ---
[GET] name
[SET] score = 100
[HAS] name
[DELETE] score
Name: Alice
Has name: true
Final: { name: 'Alice' }
```

---

## 🚀 Ejecutar

```bash
node bootcamp/week-10-proxies_reflect/2-practicas/ejercicio-03-reflect/starter/index.js
```

---

## 📚 Recursos

- [MDN: Reflect](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
- [JavaScript.info: Proxy and Reflect](https://javascript.info/proxy#reflect)

---

_Week 10 | Bootcamp JavaScript ES2023_
