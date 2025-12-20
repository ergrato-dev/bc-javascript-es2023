# 📚 Glosario - Week 05: Arrays Avanzados

## A

**Array-like Object (Objeto Similar a Array)**
Objeto que no es un Array pero tiene propiedades numéricas indexadas y una propiedad `length`. Ejemplos: `NodeList`, `HTMLCollection`, argumentos de función. Se convierte a Array con `Array.from()`.

```javascript
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
const arr = Array.from(arrayLike); // ['a', 'b']
```

**Acumulador (Accumulator)**
Variable que acumula un resultado a través de iteraciones. Se usa principalmente en `reduce()` para construir un valor final a partir de múltiples elementos.

```javascript
const sum = [1, 2, 3].reduce((acc, n) => acc + n, 0); // 6
```

## C

**Chaining (Encadenamiento)**
Técnica de llamar múltiples métodos consecutivamente donde cada método retorna un valor que puede ser procesado por el siguiente método.

```javascript
data
  .filter(item => item.active)
  .map(item => item.name)
  .sort()
  .slice(0, 5)
```

**Comparador (Comparator)**
Función usada en `sort()` que retorna un número indicando el orden: negativo (a < b), cero (a == b), positivo (a > b).

```javascript
const compare = (a, b) => a - b; // Orden ascendente numérico
array.sort(compare);
```

**Composición Funcional (Function Composition)**
Técnica de combinar múltiples funciones simples en una función más compleja, donde la salida de una es entrada de la siguiente.

```javascript
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const transform = pipe(filter, map, sort);
```

## D

**Destructuring (Desestructuración)**
Sintaxis que permite extraer valores de arrays u objetos asignándolos a variables individuales.

```javascript
const [first, second] = [1, 2]; // first = 1, second = 2
const { name, age } = { name: 'Juan', age: 25 };
```

## F

**Flat**
Método que aplana un array anidado hasta una profundidad especificada, retornando un nuevo array.

```javascript
[1, [2, [3, 4]]].flat(2); // [1, 2, 3, 4]
```

**FlatMap**
Combinación de `map()` y `flat(1)`. Mapea cada elemento y luego aplana un nivel de anidación.

```javascript
[1, 2, 3].flatMap(n => [n, n * 2]); // [1, 2, 2, 4, 3, 6]
```

**Filter**
Método que retorna un nuevo array con elementos que cumplen una condición.

```javascript
[1, 2, 3, 4].filter(n => n > 2); // [3, 4]
```

**Find**
Método que retorna el primer elemento que cumple una condición, o `undefined` si ninguno la cumple.

```javascript
[1, 2, 3, 4].find(n => n > 2); // 3
```

**FindIndex**
Método que retorna el índice del primer elemento que cumple una condición, o -1 si ninguno la cumple.

```javascript
[1, 2, 3, 4].findIndex(n => n > 2); // 2
```

**ForEach**
Método que itera sobre cada elemento sin retornar un nuevo array (principalmente para efectos secundarios).

```javascript
[1, 2, 3].forEach(n => console.log(n));
```

## G

**Grouping (Agrupación)**
Técnica de organizar elementos en un objeto o Map según una propiedad común, generalmente usando `reduce()`.

```javascript
const groups = data.reduce((acc, item) => {
  acc[item.category] = [...(acc[item.category] || []), item];
  return acc;
}, {});
```

## I

**Immutability (Inmutabilidad)**
Característica de no modificar datos originales, retornando nuevos datos transformados. Arrays originales se preservan.

```javascript
const original = [1, 2, 3];
const modified = original.map(n => n * 2); // Nuevo array
```

**Includes**
Método que verifica si un array contiene un valor específico, retornando true o false.

```javascript
[1, 2, 3].includes(2); // true
```

## M

**Map**
Método que transforma cada elemento de un array usando una función, retornando un nuevo array.

```javascript
[1, 2, 3].map(n => n * 2); // [2, 4, 6]
```

**Method Chaining**
Ver "Chaining"

## N

**Nullish Coalescing (??)**
Operador que retorna el valor derecho si el izquierdo es `null` o `undefined`.

```javascript
const value = config.timeout ?? 3000;
```

## O

**Optional Chaining (?.)**
Operador que permite acceder a propiedades anidadas sin verificar cada nivel, retornando `undefined` si alguno es nulo.

```javascript
const street = user?.address?.street;
```

## P

**Predicate (Predicado)**
Función que retorna true o false, usada principalmente en `filter()` y `find()`.

```javascript
const isEven = n => n % 2 === 0;
[1, 2, 3, 4].filter(isEven); // [2, 4]
```

**Pipeline**
Cadena de transformaciones donde datos fluyen de una función a otra. Ver "Chaining" y "Composición Funcional".

**Pipe**
Función que aplica una serie de funciones en secuencia a un valor inicial.

```javascript
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
```

## R

**Reduce**
Método que acumula un valor ejecutando una función sobre cada elemento, retornando un valor final.

```javascript
[1, 2, 3, 4].reduce((sum, n) => sum + n, 0); // 10
```

**Rest Parameters (...)**
Sintaxis que permite capturar múltiples argumentos en una función como un array.

```javascript
const sum = (...numbers) => numbers.reduce((a, b) => a + b);
```

## S

**Some**
Método que retorna true si al menos un elemento cumple una condición.

```javascript
[1, 2, 3].some(n => n > 2); // true
```

**Sort**
Método que ordena elementos del array in-place según una función comparadora.

```javascript
[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]
```

**Spread Operator (...)**
Operador que expande elementos de un array u objeto.

```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3]; // [1, 2, 3]
```

## T

**Template Literals (Template Strings)**
Strings entre backticks (`) que permiten interpolación y strings multilinea.

```javascript
const name = 'Juan';
const msg = `Hola, ${name}!`;
```

**Transform (Transformación)**
Proceso de convertir datos de un formato a otro, típicamente usando `map()`.

**Ternary Operator**
Operador condicional de tres partes: `condición ? valorSiTrue : valorSiFalse`.

```javascript
const status = age >= 18 ? 'adulto' : 'menor';
```

## U

**Unique (Único)**
Eliminar duplicados de un array, típicamente usando `Set` o `filter()`.

```javascript
const unique = [...new Set(array)];
```

## V

**Validation (Validación)**
Proceso de verificar que datos cumplan criterios específicos, usando métodos como `every()`, `some()`, o `filter()`.

```javascript
const isValid = users.every(u => u.age >= 18);
```

---

## 🔗 Referencias Adicionales

- [MDN Web Docs - Array Methods](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript Info - Arrays](https://javascript.info/array-methods)
- [ECMAScript Specification](https://tc39.es/ecma262/)

