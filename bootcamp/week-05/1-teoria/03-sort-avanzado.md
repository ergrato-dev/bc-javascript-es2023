# 🔽 Sort Avanzado: Ordenamiento Personalizado

## 🎯 Objetivos

En esta lección aprenderás a:
- ✅ Dominar la función comparadora de `sort()`
- ✅ Diferenciar ordenamiento numérico y lexicográfico
- ✅ Ordenar objetos complejos
- ✅ Implementar ordenamiento con múltiples criterios
- ✅ Entender la mutabilidad de `sort()`

![Comparador en sort()](../0-assets/03-sort-comparator.svg)

## 📋 Contenido

### 1. Fundamentos de sort()

#### ¿Qué es sort()?

El método `sort()` ordena los elementos de un array **in-place** (modifica el array original) según una función comparadora.

**Sintaxis:**
```javascript
array.sort(compareFn)
```

**Parámetros:**
- `compareFn` (opcional): Función que define el orden

**Retorna:** El array ordenado (el mismo objeto array, no una copia)

#### Comportamiento por Defecto

Sin función comparadora, `sort()` convierte elementos a strings y ordena lexicográficamente:

```javascript
// Ordenamiento lexicográfico (por defecto)
const numbers = [10, 5, 40, 25, 1000, 1];
console.log(numbers.sort());
// [1, 10, 25, 40, 5, 1000]
// ¡¡Incorrecto para números!! (ordena como strings: "1", "10", "25", etc.)

const words = ['banana', 'apple', 'cherry'];
console.log(words.sort());
// ['apple', 'banana', 'cherry']
// Esto funciona correctamente para strings
```

### 2. Función Comparadora

#### Estructura de la Función Comparadora

```javascript
const compareFn = (a, b) => {
  if (a < b) return -1;  // a va antes que b
  if (a > b) return 1;   // a va después que b
  if (a === b) return 0; // son iguales
};
```

**Regla simple:**
- Retorna **negativo** (`< 0`) → `a` va antes que `b`
- Retorna **positivo** (`> 0`) → `a` va después que `b`
- Retorna **cero** (`= 0`) → mantiene el orden relativo

#### Ordenamiento Numérico Correcto

```javascript
// ❌ INCORRECTO - Lexicográfico
const numbers = [10, 5, 40, 25, 1000, 1];
console.log(numbers.sort());
// [1, 10, 25, 40, 5, 1000]

// ✅ CORRECTO - Numérico ascendente
const numbers = [10, 5, 40, 25, 1000, 1];
console.log(numbers.sort((a, b) => a - b));
// [1, 5, 10, 25, 40, 1000]

// ✅ CORRECTO - Numérico descendente
const numbers = [10, 5, 40, 25, 1000, 1];
console.log(numbers.sort((a, b) => b - a));
// [1000, 40, 25, 10, 5, 1]
```

#### Comparación Lexicográfica Controlada

```javascript
// Ordenar strings en mayúsculas
const words = ['banana', 'Apple', 'cherry'];
console.log(words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())));
// ['Apple', 'banana', 'cherry']

// Usar localeCompare para ordenamiento localizado
const names = ['José', 'Ana', 'Álex'];
console.log(names.sort((a, b) => a.localeCompare(b)));
// ['Álex', 'Ana', 'José'] - Maneja acentos correctamente
```

### 3. Ordenamiento de Objetos

#### Ordenar por Propiedad Numérica

```javascript
const users = [
  { name: 'Ana', age: 28 },
  { name: 'Bob', age: 25 },
  { name: 'Carlos', age: 32 }
];

// Ordenar por edad ascendente
users.sort((a, b) => a.age - b.age);
console.log(users);
// [
//   { name: 'Bob', age: 25 },
//   { name: 'Ana', age: 28 },
//   { name: 'Carlos', age: 32 }
// ]

// Ordenar por edad descendente
users.sort((a, b) => b.age - a.age);
```

#### Ordenar por Propiedad String

```javascript
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 }
];

// Ordenar alfabéticamente por nombre
products.sort((a, b) => a.name.localeCompare(b.name));
console.log(products);
// [
//   { name: 'Keyboard', price: 75 },
//   { name: 'Laptop', price: 999 },
//   { name: 'Mouse', price: 25 }
// ]
```

#### Ordenar por Propiedad Date

```javascript
const events = [
  { title: 'Evento A', date: new Date('2025-03-15') },
  { title: 'Evento B', date: new Date('2025-03-10') },
  { title: 'Evento C', date: new Date('2025-03-20') }
];

// Ordenar por fecha ascendente
events.sort((a, b) => a.date - b.date);

// Ordenar por fecha descendente (más recientes primero)
events.sort((a, b) => b.date - a.date);
```

### 4. Ordenamiento con Múltiples Criterios

#### Criterio Primario y Secundario

```javascript
const students = [
  { name: 'Ana', grade: 'A', score: 95 },
  { name: 'Bob', grade: 'B', score: 85 },
  { name: 'Carlos', grade: 'A', score: 92 },
  { name: 'Diana', grade: 'B', score: 88 }
];

// Ordenar primero por grado, luego por score
students.sort((a, b) => {
  // Comparar primero por grado
  if (a.grade !== b.grade) {
    return a.grade.localeCompare(b.grade);
  }
  // Si grades son iguales, comparar por score
  return b.score - a.score;
});

console.log(students);
// Primero los 'A' ordenados por score descendente
// Luego los 'B' ordenados por score descendente
```

#### Usar Objeto de Configuración

```javascript
// Función helper para ordenamiento flexible
const sortBy = (array, sortConfig) => {
  return array.sort((a, b) => {
    for (const { property, direction = 'asc' } of sortConfig) {
      const multiplier = direction === 'asc' ? 1 : -1;

      if (a[property] < b[property]) return -1 * multiplier;
      if (a[property] > b[property]) return 1 * multiplier;
    }
    return 0;
  });
};

// Uso
const users = [
  { name: 'Ana', department: 'IT', salary: 5000 },
  { name: 'Bob', department: 'HR', salary: 4000 },
  { name: 'Carlos', department: 'IT', salary: 4500 }
];

const sorted = sortBy(users, [
  { property: 'department', direction: 'asc' },
  { property: 'salary', direction: 'desc' }
]);
```

### 5. Casos Edge y Consideraciones

#### ⚠️ IMPORTANTE: sort() Muta el Array Original

```javascript
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);

console.log(numbers);  // [1, 1, 3, 4, 5] ¡¡MODIFICADO!!
console.log(sorted === numbers); // true - Es el MISMO objeto

// Si necesitas array original, haz una copia
const original = [3, 1, 4, 1, 5];
const sorted = [...original].sort((a, b) => a - b);
console.log(original); // [3, 1, 4, 1, 5] - Sin cambios
```

#### Ordenamiento Estable

JavaScript moderno garantiza que `sort()` es **estable** (mantiene el orden relativo de elementos iguales):

```javascript
const data = [
  { name: 'Ana', age: 30, id: 1 },
  { name: 'Bob', age: 30, id: 2 },
  { name: 'Carlos', age: 30, id: 3 }
];

// Si la comparadora retorna 0 (iguales), el orden original se mantiene
data.sort((a, b) => a.age - b.age);
// El orden por id se mantiene entre elementos con mismo age
```

#### Manejo de undefined y null

```javascript
// null y undefined se comportan especialmente
const values = [3, null, 1, undefined, 2];
const sorted = values.sort((a, b) => {
  if (a == null) return 1;  // Mover null/undefined al final
  if (b == null) return -1;
  return a - b;
});
console.log(sorted);
// [1, 2, 3, null, undefined]
```

### 6. Patrones Comunes

#### Invertir Array

```javascript
const numbers = [1, 2, 3, 4, 5];

// ❌ No es la mejor forma
numbers.sort((a, b) => b - a);

// ✅ Mejor forma
numbers.reverse();
```

#### Ordenar Ignorando Mayúsculas/Minúsculas

```javascript
const words = ['Zebra', 'apple', 'Banana'];
words.sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
);
console.log(words);
// ['apple', 'Banana', 'Zebra']
```

#### Ordenar por Longitud de String

```javascript
const words = ['a', 'elephant', 'cat', 'dog'];
words.sort((a, b) => a.length - b.length);
console.log(words);
// ['a', 'cat', 'dog', 'elephant']
```

#### Ordenar por Valor Computado

```javascript
const products = [
  { name: 'Item A', price: 100, tax: 0.10 },
  { name: 'Item B', price: 50, tax: 0.20 },
  { name: 'Item C', price: 80, tax: 0.15 }
];

// Ordenar por precio final (price + tax)
products.sort((a, b) => {
  const priceA = a.price * (1 + a.tax);
  const priceB = b.price * (1 + b.tax);
  return priceA - priceB;
});
```

### 7. Alternativas a sort() Mutante

Cuando no quieres mutar el original:

```javascript
const original = [3, 1, 4];

// Opción 1: Spread operator
const sorted1 = [...original].sort((a, b) => a - b);

// Opción 2: Array.from()
const sorted2 = Array.from(original).sort((a, b) => a - b);

// Opción 3: slice()
const sorted3 = original.slice().sort((a, b) => a - b);

console.log(original); // [3, 1, 4] - Sin cambios
```

## ✅ Checklist de Verificación

Antes de continuar, asegúrate de:

- [ ] Entender que `sort()` muta el array original
- [ ] Usar `a - b` para números (ascendente)
- [ ] Usar `b - a` para números (descendente)
- [ ] Ordenar strings con `localeCompare()`
- [ ] Ordenar objetos por propiedad
- [ ] Implementar ordenamiento multi-criterio
- [ ] Manejar casos edge (null, undefined)
- [ ] Crear copias antes de sort si necesitas el original

## 🔗 Recursos Adicionales

- [MDN: Array.prototype.sort()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [MDN: String.prototype.localeCompare()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
- [JavaScript.info: Sorting](https://javascript.info/array-methods#sort)

## 💡 Tips y Trucos

1. **Recordar la regla**: `a - b` para ascendente, `b - a` para descendente
   ```javascript
   // Mnemotécnica: "pequeño - grande = negativo = va primero"
   [5, 2, 8].sort((a, b) => a - b); // [2, 5, 8]
   ```

2. **Debugging comparadores**
   ```javascript
   const debug = (a, b) => {
     const result = a - b;
     console.log(`Comparando ${a} y ${b}: ${result}`);
     return result;
   };
   [3, 1, 2].sort(debug);
   ```

3. **Usar tipo específico de comparación**
   ```javascript
   // Números: a - b
   // Strings: a.localeCompare(b)
   // Dates: a - b (se convierten a timestamps)
   // Custom: implementar lógica específica
   ```

---

**Próximo tema**: [Chaining Complejo](04-chaining-complejo.md)
