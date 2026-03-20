# Ejercicio 03: Map Básico

## 🎯 Objetivo

Dominar la creación y manipulación de Maps para almacenar pares clave-valor con claves de cualquier tipo.

## 📋 Conceptos Cubiertos

- Creación de Map con `new Map()`
- Métodos: `set()`, `get()`, `has()`, `delete()`, `clear()`
- Propiedad `size`
- Iteración: `keys()`, `values()`, `entries()`, `forEach()`
- Claves de cualquier tipo (objetos, funciones, etc.)
- Conversiones: Map ↔ Object ↔ Array

## 📝 Instrucciones

### Paso 1: Creación de Map

Un Map es una colección de pares clave-valor donde las claves pueden ser de cualquier tipo:

```javascript
const map = new Map();
const mapWithValues = new Map([['key1', 'value1'], ['key2', 'value2']]);
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

### Paso 2: Métodos Básicos (set, get, has, delete)

- `set(key, value)` agrega o actualiza un par clave-valor
- `get(key)` obtiene el valor asociado a una clave
- `has(key)` verifica si una clave existe
- `delete(key)` elimina un par clave-valor

**Descomenta** la sección del Paso 2.

### Paso 3: Iteración sobre Map

Los Maps son iterables y mantienen el orden de inserción:

```javascript
for (const [key, value] of map) { }
map.forEach((value, key) => { });
```

**Descomenta** la sección del Paso 3.

### Paso 4: Claves de Cualquier Tipo

A diferencia de los objetos, Map permite claves de cualquier tipo:

```javascript
map.set({}, 'object key');
map.set(() => {}, 'function key');
map.set(42, 'number key');
```

**Descomenta** la sección del Paso 4.

### Paso 5: Conversiones

Convierte entre Map, Object y Array fácilmente:

```javascript
const obj = Object.fromEntries(map);
const map = new Map(Object.entries(obj));
```

**Descomenta** la sección del Paso 5.

### Paso 6: Caso Práctico - Caché de Datos

Implementa un sistema de caché usando Map:

**Descomenta** la sección del Paso 6.

## ✅ Resultado Esperado

```
--- Paso 1: Creación de Map ---
Map vacío: Map(0) {}
Map con valores: Map(2) { 'name' => 'Alice', 'age' => 30 }
Tamaño: 2

--- Paso 2: Métodos Básicos ---
Después de set: Map(3) { 'color' => 'blue', 'size' => 'large', 'price' => 99.99 }
get('color'): blue
has('size'): true
has('weight'): false
Después de delete: Map(2) { 'color' => 'blue', 'price' => 99.99 }

--- Paso 3: Iteración ---
Claves: name, age, city
Valores: Bob, 25, New York
Entradas:
  name => Bob
  age => 25
  city => New York

--- Paso 4: Claves de Cualquier Tipo ---
Valor con clave objeto: datos del usuario
Valor con clave función: resultado del callback
Valor con clave número: cuarenta y dos

--- Paso 5: Conversiones ---
Map original: Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
Map → Object: { a: 1, b: 2, c: 3 }
Object → Map: Map(2) { 'x' => 10, 'y' => 20 }
Map → Array: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

--- Paso 6: Caché de Datos ---
Primera llamada (computing):
  getUser(1): { id: 1, name: 'User 1' }
Segunda llamada (cached):
  getUser(1): { id: 1, name: 'User 1' }
Estadísticas: { hits: 1, misses: 1 }
```

## 🚀 Ejecución

```bash
cd starter
node index.js
```

## 📚 Recursos

- [MDN: Map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map)
