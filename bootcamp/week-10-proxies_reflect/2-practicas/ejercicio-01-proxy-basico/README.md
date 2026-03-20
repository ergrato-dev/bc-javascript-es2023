# 🎭 Ejercicio 01: Proxy Básico

## 🎯 Objetivo

Aprender a crear Proxies básicos, entender la relación target-handler-proxy y crear interceptores simples.

---

## 📋 Conceptos Clave

### ¿Qué es un Proxy?

Un Proxy envuelve un objeto (target) y permite interceptar operaciones sobre él mediante un handler con traps.

```javascript
const proxy = new Proxy(target, handler);
```

### Componentes

- **target**: El objeto original que queremos envolver
- **handler**: Objeto con métodos (traps) que interceptan operaciones
- **proxy**: El objeto resultante que usamos en lugar del target

---

## 🔄 Pasos del Ejercicio

### Paso 1: Proxy Transparente

Un Proxy con handler vacío actúa como el objeto original:

```javascript
const user = { name: 'Alice' };
const proxy = new Proxy(user, {});
console.log(proxy.name); // 'Alice'
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Interceptar Lectura (get)

El trap `get` intercepta cuando se lee una propiedad:

```javascript
const handler = {
  get(target, property) {
    console.log(`Reading: ${property}`);
    return target[property];
  }
};
```

**Descomenta** la sección del Paso 2.

---

### Paso 3: Interceptar Escritura (set)

El trap `set` intercepta cuando se asigna un valor:

```javascript
const handler = {
  set(target, property, value) {
    console.log(`Writing: ${property} = ${value}`);
    target[property] = value;
    return true; // Importante: indicar éxito
  }
};
```

**Descomenta** la sección del Paso 3.

---

### Paso 4: Valores por Defecto

Retornar un valor por defecto para propiedades inexistentes:

```javascript
get(target, property) {
  return property in target ? target[property] : 'default';
}
```

**Descomenta** la sección del Paso 4.

---

### Paso 5: Propiedades Computadas

Calcular valores al vuelo basados en otras propiedades:

```javascript
get(target, property) {
  if (property === 'fullName') {
    return `${target.firstName} ${target.lastName}`;
  }
  return target[property];
}
```

**Descomenta** la sección del Paso 5.

---

### Paso 6: Proxy Revocable

Crear un Proxy que se puede desactivar:

```javascript
const { proxy, revoke } = Proxy.revocable(target, handler);
// Usar proxy...
revoke(); // Desactivar - cualquier acceso lanzará error
```

**Descomenta** la sección del Paso 6.

---

### Paso 7: Proxy con Arrays

Los Proxies también funcionan con arrays:

```javascript
const arr = new Proxy([1, 2, 3], {
  get(target, prop) {
    const index = Number(prop);
    if (index < 0) {
      return target[target.length + index];
    }
    return target[prop];
  }
});
```

**Descomenta** la sección del Paso 7.

---

## ✅ Resultado Esperado

Al ejecutar el archivo completo, deberías ver:

```
--- Paso 1: Proxy Transparente ---
Proxy name: Alice
Target también cambió: 26

--- Paso 2: Interceptar Lectura ---
[GET] name
Alice
[GET] age
25

--- Paso 3: Interceptar Escritura ---
[SET] score = 100
[SET] score = 200
Score: 200

--- Paso 4: Valores por Defecto ---
Theme: dark
Language: es (default)
Timeout: 5000 (default)

--- Paso 5: Propiedades Computadas ---
First: John
Last: Doe
Full: John Doe
Area: 50

--- Paso 6: Proxy Revocable ---
Before revoke: secret123
Proxy revoked - access error caught!

--- Paso 7: Proxy con Arrays ---
First: 10
Last (arr[-1]): 50
Second to last (arr[-2]): 40
```

---

## 🚀 Ejecutar

```bash
node bootcamp/week-10-proxies_reflect/2-practicas/ejercicio-01-proxy-basico/starter/index.js
```

---

## 📚 Recursos

- [MDN: Proxy](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [JavaScript.info: Proxy](https://javascript.info/proxy)

---

_Week 10 | Bootcamp JavaScript ES2023_
