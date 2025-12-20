# 📦 Array.from() y Array.of(): Creación y Conversión de Arrays

## 🎯 Objetivos

En esta lección aprenderás a:
- ✅ Usar `Array.from()` para convertir array-like objects
- ✅ Entender qué son objects "array-like"
- ✅ Dominar `Array.of()` para crear arrays de valores específicos
- ✅ Aplicar mapeo durante la conversión
- ✅ Trabajar con NodeList y argumentos de funciones

## 📋 Contenido

### 1. ¿Qué es un Array-Like Object?

Un **array-like object** es cualquier objeto que tiene:
- Una propiedad `length` con un número entero
- Propiedades indexadas de 0 hasta length - 1

**Ejemplos de array-like objects:**

```javascript
// NodeList (resultado de querySelectorAll)
const divs = document.querySelectorAll('div');
console.log(divs.length);  // Tiene length
console.log(divs[0]);       // Acceso indexado
console.log(Array.isArray(divs)); // false - NO es un array

// arguments (en funciones tradicionales)
function testFunction() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(Array.isArray(arguments)); // false
}

// Objeto personalizado
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
console.log(arrayLike.length); // 3
console.log(arrayLike[1]); // 'b'
console.log(Array.isArray(arrayLike)); // false

// String (también es array-like)
const str = 'hello';
console.log(str.length); // 5
console.log(str[0]); // 'h'
```

### 2. Método `Array.from()`

#### ¿Qué es Array.from()?

`Array.from()` crea un nuevo array a partir de un objeto iterable o array-like.

**Sintaxis:**
```javascript
Array.from(arrayLike, mapFunction, thisArg)
```

**Parámetros:**
- `arrayLike`: Objeto iterable o array-like a convertir (requerido)
- `mapFunction`: Función para mapear cada elemento (opcional)
- `thisArg`: Valor de `this` para mapFunction (opcional)

**Retorna:** Nuevo array

#### Conversión Básica

```javascript
// Convertir NodeList a Array
const elements = document.querySelectorAll('p');
const elementsArray = Array.from(elements);
console.log(Array.isArray(elementsArray)); // true

// Ahora podemos usar métodos de array
elementsArray.forEach(el => console.log(el.textContent));

// Convertir string a array de caracteres
const str = 'hello';
const chars = Array.from(str);
console.log(chars);
// ['h', 'e', 'l', 'l', 'o']

// Convertir array-like personalizado
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const array = Array.from(arrayLike);
console.log(array);
// ['a', 'b', 'c']
```

#### Array.from() con Función de Mapeo

Puedes pasar una función para transformar elementos durante la conversión:

```javascript
// Convertir y doblar números
const numbers = [1, 2, 3, 4];
const doubled = Array.from(numbers, n => n * 2);
console.log(doubled);
// [2, 4, 6, 8]

// Convertir strings a mayúsculas
const words = ['hello', 'world'];
const uppercase = Array.from(words, w => w.toUpperCase());
console.log(uppercase);
// ['HELLO', 'WORLD']

// Usar índice en la función de mapeo
const result = Array.from('abc', (char, index) => {
  return `${char}-${index}`;
});
console.log(result);
// ['a-0', 'b-1', 'c-2']
```

#### Casos de Uso: NodeList

```javascript
// Seleccionar elementos del DOM
const paragraphs = document.querySelectorAll('p');

// Convertir a array y procesar
Array.from(paragraphs)
  .filter(p => p.textContent.includes('importante'))
  .forEach(p => p.classList.add('highlight'));

// Extraer atributos de elementos
const links = document.querySelectorAll('a');
const urls = Array.from(links, link => link.href);
console.log(urls);
// ['http://example.com', 'http://google.com', ...]
```

#### Casos de Uso: Arguments en Funciones

```javascript
// Función que recibe argumentos variables
function sumNumbers() {
  // arguments es array-like, NO es un array
  const nums = Array.from(arguments);
  return nums.reduce((sum, n) => sum + n, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5));
// 15

// Con manipulación durante conversión
function processArgs() {
  const processed = Array.from(arguments, arg => {
    return typeof arg === 'string' ? arg.toUpperCase() : arg;
  });
  return processed;
}

console.log(processArgs('hello', 42, 'world'));
// ['HELLO', 42, 'WORLD']
```

**Nota**: Con arrow functions, puedes usar el spread operator en lugar de Array.from():
```javascript
const sumWithSpread = (...args) => {
  return args.reduce((sum, n) => sum + n, 0);
};
console.log(sumWithSpread(1, 2, 3, 4, 5));
// 15
```

#### Crear Ranges y Secuencias

`Array.from()` es perfecto para crear secuencias:

```javascript
// Crear array de números del 0 al 9
const range = Array.from({ length: 10 }, (_, i) => i);
console.log(range);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Crear array de números del 1 al 5
const oneToFive = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(oneToFive);
// [1, 2, 3, 4, 5]

// Crear array de letras
const letters = Array.from({ length: 26 }, (_, i) => {
  return String.fromCharCode(65 + i); // A-Z
});
console.log(letters);
// ['A', 'B', 'C', ..., 'Z']

// Tabla de multiplicar
const multiplyTable = (num) => {
  return Array.from({ length: 10 }, (_, i) => {
    return `${num} × ${i + 1} = ${num * (i + 1)}`;
  });
};
console.log(multiplyTable(5));
// ['5 × 1 = 5', '5 × 2 = 10', ..., '5 × 10 = 50']
```

### 3. Método `Array.of()`

#### ¿Qué es Array.of()?

`Array.of()` crea un nuevo array a partir de los argumentos pasados, independientemente de número o tipo.

**Sintaxis:**
```javascript
Array.of(element1, element2, ..., elementN)
```

**Parámetros:**
- `element1, element2, ...`: Elementos a incluir en el array

**Retorna:** Nuevo array con los elementos

#### El Problema que Resuelve

El constructor `Array()` tiene comportamiento confuso:

```javascript
// Comportamiento confuso del constructor Array()
const arr1 = new Array(3);
console.log(arr1);
// [empty × 3] - Crea array vacío de longitud 3
console.log(arr1.length);
// 3

const arr2 = new Array(1, 2, 3);
console.log(arr2);
// [1, 2, 3] - Funciona como esperado
```

**¡El problema**: Si pasas un solo número, crea un array vacío de esa longitud, no un array con ese número.

#### Array.of() Resuelve Esto

```javascript
// Array.of() siempre crea array con los elementos
const arr1 = Array.of(3);
console.log(arr1);
// [3] - Array con un elemento

const arr2 = Array.of(1, 2, 3);
console.log(arr2);
// [1, 2, 3] - Array con tres elementos

const arr3 = Array.of('single');
console.log(arr3);
// ['single']

const arr4 = Array.of();
console.log(arr4);
// [] - Array vacío (no acepta número como longitud)
```

#### Casos de Uso

```javascript
// Crear array de cualquier tipo de elemento
const mixed = Array.of(1, 'hello', true, null, { name: 'obj' });
console.log(mixed);
// [1, 'hello', true, null, { name: 'obj' }]

// Útil en contextos donde necesitas garantizar array
const makeArray = (value) => {
  // Array.of garantiza que siempre retorna un array
  return Array.of(value);
};

console.log(makeArray(5));    // [5]
console.log(makeArray('x'));  // ['x']

// Vs el constructor que sería confuso
const confusing = (value) => new Array(value);
console.log(confusing(5));    // [empty × 5] ¡Inesperado!
console.log(confusing('x'));  // ['x']
```

### 4. Comparación: Array.from() vs Array.of() vs Constructor

| Característica       | Array.from()        | Array.of()              | Constructor Array() |
| -------------------- | ------------------- | ----------------------- | ------------------- |
| **Entrada**          | Array-like/iterable | Argumentos individuales | Número o elementos  |
| **Parámetro número** | Crea range          | Crea array [número]     | Crea array vacío    |
| **Mapeo**            | Sí                  | No                      | No                  |
| **Predecible**       | Sí                  | Sí                      | ❌ No (confuso)      |
| **Caso de uso**      | Convertir objects   | Crear array seguro      | Evitar              |

```javascript
// Comparación práctica
const num = 3;

// Array() - CONFUSO
Array(num);              // [empty × 3] ❌

// Array.of() - CLARO
Array.of(num);           // [3] ✅

// Array.from() - PARA CONVERSIÓN
Array.from([num]);       // [3] ✅
```

### 5. Combinando Array.from() con Otras Técnicas

#### Array.from() + Spread Operator

```javascript
const nodeList = document.querySelectorAll('div');

// Estos son equivalentes:
const array1 = Array.from(nodeList);
const array2 = [...nodeList];

// Array.from() es más explícito y legible
// Spread operator es más compacto
```

#### Array.from() + flat()

```javascript
// Convertir array-like que contiene arrays, y aplanar
const nestedArrayLike = {
  0: [1, 2],
  1: [3, 4],
  2: [5, 6],
  length: 3
};

const flat = Array.from(nestedArrayLike).flat();
console.log(flat);
// [1, 2, 3, 4, 5, 6]
```

#### Array.from() + filter()

```javascript
// Convertir y filtrar en un paso
const numbers = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };

const even = Array.from(numbers)
  .filter(n => n % 2 === 0);
console.log(even);
// [2, 4]
```

## ✅ Checklist de Verificación

Antes de continuar, asegúrate de:

- [ ] Entender qué es un array-like object
- [ ] Diferenciar entre NodeList y Array
- [ ] Usar `Array.from()` para convertir objects
- [ ] Usar `Array.from()` con función de mapeo
- [ ] Crear ranges con `Array.from({ length: n })`
- [ ] Entender el problema del constructor `Array()`
- [ ] Usar `Array.of()` para crear arrays seguros
- [ ] Elegir entre `Array.from()` y spread operator

## 🔗 Recursos Adicionales

- [MDN: Array.from()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [MDN: Array.of()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
- [MDN: Array-like objects](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)

## 💡 Tips y Trucos

1. **Array.from() es mejor que bucles for para DOM**
   ```javascript
   // ❌ Antigua forma
   const elements = [];
   for (let i = 0; i < nodeList.length; i++) {
     elements.push(nodeList[i]);
   }

   // ✅ Moderna forma
   const elements = Array.from(nodeList);
   ```

2. **Duplicar array rápidamente**
   ```javascript
   const original = [1, 2, 3];
   const copy = Array.from(original);
   ```

3. **Crear array con valores iniciales**
   ```javascript
   // Array de 5 objetos vacíos
   const objects = Array.from({ length: 5 }, () => ({}));
   ```

---

**Próximo tema**: [Sort Avanzado](03-sort-avanzado.md)
