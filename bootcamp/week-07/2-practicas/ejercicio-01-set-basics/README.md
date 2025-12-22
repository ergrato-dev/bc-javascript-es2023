# Ejercicio 01: Set Básico

## 🎯 Objetivo

Dominar la creación y manipulación de Sets para gestionar colecciones de valores únicos.

## 📋 Conceptos Cubiertos

- Creación de Set con `new Set()`
- Métodos: `add()`, `has()`, `delete()`, `clear()`
- Propiedad `size`
- Iteración con `for...of` y `forEach()`
- Eliminar duplicados de arrays
- Sets con objetos

## 📝 Instrucciones

### Paso 1: Creación de Set

Un Set es una colección de valores únicos. Puedes crearlo vacío o con valores iniciales:

```javascript
const empty = new Set();
const numbers = new Set([1, 2, 3, 3, 4]); // Duplicados ignorados
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

### Paso 2: Agregar Elementos con add()

El método `add()` agrega elementos al Set. Retorna el Set para encadenar:

```javascript
set.add('value').add('another');
```

**Descomenta** la sección del Paso 2 en `starter/index.js`.

### Paso 3: Verificar y Eliminar

- `has(value)` retorna `true` si el valor existe
- `delete(value)` elimina el valor y retorna `true` si existía
- `size` retorna el número de elementos

**Descomenta** la sección del Paso 3.

### Paso 4: Iteración

Los Sets son iterables. Puedes usar `for...of` o `forEach()`:

```javascript
for (const value of set) {
  console.log(value);
}
```

**Descomenta** la sección del Paso 4.

### Paso 5: Eliminar Duplicados de Arrays

Una técnica común es usar Set para eliminar duplicados:

```javascript
const unique = [...new Set(array)];
```

**Descomenta** la sección del Paso 5.

### Paso 6: Sets con Objetos

Los objetos en Set se comparan por referencia, no por contenido:

```javascript
const set = new Set();
set.add({ id: 1 });
set.add({ id: 1 }); // Son objetos diferentes, ambos se agregan
```

**Descomenta** la sección del Paso 6.

## ✅ Resultado Esperado

Al descomentar todo el código, deberías ver:

```
--- Paso 1: Creación de Set ---
Set vacío: Set(0) {}
Set con valores: Set(4) { 1, 2, 3, 4 }
Tamaño: 4

--- Paso 2: Agregar Elementos ---
Después de agregar frutas: Set(3) { 'manzana', 'banana', 'naranja' }
Agregar duplicado 'manzana': Set(3) { 'manzana', 'banana', 'naranja' }

--- Paso 3: Verificar y Eliminar ---
¿Tiene 'banana'? true
¿Tiene 'uva'? false
Eliminar 'banana': true
Después de eliminar: Set(2) { 'manzana', 'naranja' }

--- Paso 4: Iteración ---
Colores en el Set:
- rojo
- verde
- azul
Usando forEach:
Color: rojo
Color: verde
Color: azul

--- Paso 5: Eliminar Duplicados ---
Array original: [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4 ]
Array sin duplicados: [ 1, 2, 3, 4 ]
Emails únicos: [ 'alice@test.com', 'bob@test.com', 'charlie@test.com' ]

--- Paso 6: Sets con Objetos ---
Set de usuarios: Set(3) { { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 1, name: 'Alice' } }
¿Tiene user1? true
¿Tiene objeto igual a user1? false
```

## 🚀 Ejecución

```bash
cd starter
node index.js
```

## 📚 Recursos

- [MDN: Set](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set)
