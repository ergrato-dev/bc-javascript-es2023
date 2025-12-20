# 🔹 Flat y FlatMap: Aplanamiento de Arrays

## 🎯 Objetivos

En esta lección aprenderás a:
- ✅ Usar `flat()` para aplanar arrays anidados
- ✅ Entender el parámetro de profundidad
- ✅ Dominar `flatMap()` como combinación de map + flat
- ✅ Eliminar valores vacíos y null/undefined
- ✅ Reconocer casos de uso prácticos

![flat() vs flatMap()](../0-assets/01-flat-vs-flatmap.svg)

## 📋 Contenido

### 1. Método `flat()`

#### ¿Qué es flat()?

El método `flat()` devuelve un nuevo array con todos los elementos de sub-arrays concatenados recursivamente hasta la profundidad especificada.

**Sintaxis:**
```javascript
const flatArray = array.flat(depth);
```

**Parámetros:**
- `depth` (opcional): Nivel de profundidad a aplanar (por defecto: 1)

**Retorna:** Un nuevo array aplanado

#### Ejemplo Básico

```javascript
// Array anidado de una sola profundidad
const nested1D = [1, 2, [3, 4], 5];
const flat1D = nested1D.flat();
console.log(flat1D);
// [1, 2, 3, 4, 5]

// Array anidado con múltiples niveles
const nested2D = [1, [2, [3, 4]], 5];
const flat1 = nested2D.flat();      // depth = 1 (por defecto)
console.log(flat1);
// [1, 2, [3, 4], 5]

const flat2 = nested2D.flat(2);     // depth = 2
console.log(flat2);
// [1, 2, 3, 4, 5]

const flatAll = nested2D.flat(Infinity); // Aplanar todo
console.log(flatAll);
// [1, 2, 3, 4, 5]
```

#### Profundidad de Aplanamiento

La profundidad es **crucial** para controlar cuántos niveles aplanar:

```javascript
const deeplyNested = [1, [2, [3, [4, [5]]]]];

console.log(deeplyNested.flat(1));  // [1, 2, [3, [4, [5]]]]
console.log(deeplyNested.flat(2));  // [1, 2, 3, [4, [5]]]
console.log(deeplyNested.flat(3));  // [1, 2, 3, 4, [5]]
console.log(deeplyNested.flat(4));  // [1, 2, 3, 4, 5]
console.log(deeplyNested.flat());   // [1, 2, [3, [4, [5]]]] (depth = 1 por defecto)
```

#### Manejo de Valores Vacíos

`flat()` **elimina automáticamente** los slots vacíos en arrays:

```javascript
// Array con slots vacíos
const arrayWithHoles = [1, 2, , 4, 5];
console.log(arrayWithHoles.flat());
// [1, 2, 4, 5] - ¡El slot vacío se elimina!

// Esto es diferente a undefined/null
const arrayWithNull = [1, 2, null, undefined, 4];
console.log(arrayWithNull.flat());
// [1, 2, null, undefined, 4] - null y undefined se mantienen
```

### 2. Método `flatMap()`

#### ¿Qué es flatMap()?

`flatMap()` es equivalente a hacer `map()` seguido de `flat(1)`. Es útil cuando quieres transformar elementos y luego aplanar el resultado.

**Sintaxis:**
```javascript
const result = array.flatMap(callback);
```

**Parámetros:**
- `callback`: Función que retorna un array o valor individual
- Recibe `(element, index, array)`

**Retorna:** Nuevo array transformado y aplanado

#### Ejemplo Básico

```javascript
// Sin flatMap - usando map + flat
const numbers = [1, 2, 3];
const doubled1 = numbers.map(n => [n, n * 2]);
console.log(doubled1);
// [[1, 2], [2, 4], [3, 6]]

const doubled2 = doubled1.flat();
console.log(doubled2);
// [1, 2, 2, 4, 3, 6]

// Con flatMap - más elegante
const doubled3 = numbers.flatMap(n => [n, n * 2]);
console.log(doubled3);
// [1, 2, 2, 4, 3, 6] - ¡Mismo resultado en una línea!
```

#### Casos de Uso Comunes

**Ejemplo 1: Duplicar cada elemento**
```javascript
const items = ['a', 'b', 'c'];
const duplicated = items.flatMap(item => [item, item]);
console.log(duplicated);
// ['a', 'a', 'b', 'b', 'c', 'c']
```

**Ejemplo 2: Generar rangos**
```javascript
const ranges = [1, 2, 3];
const expanded = ranges.flatMap(n => {
  // Retorna un array con números desde 0 hasta n
  return Array.from({ length: n }, (_, i) => i + 1);
});
console.log(expanded);
// [1, 1, 2, 1, 2, 3]
```

**Ejemplo 3: Filtrado durante transformación**
```javascript
const data = ['hello', 'world', 'test'];
const withLengths = data.flatMap(word => {
  // Solo incluir si la longitud es > 4
  return word.length > 4 ? [word, word.length] : [];
});
console.log(withLengths);
// ['hello', 5, 'world', 5]
```

#### Diferencia: map vs flatMap

```javascript
const numbers = [1, 2, 3];

// map: retorna array de arrays
const mapped = numbers.map(n => [n * 2, n * 3]);
console.log(mapped);
// [[2, 3], [4, 6], [6, 9]]

// flatMap: retorna array plano
const flatMapped = numbers.flatMap(n => [n * 2, n * 3]);
console.log(flatMapped);
// [2, 3, 4, 6, 6, 9]
```

### 3. Casos de Uso Prácticos

#### Procesar Arrays de Arrays

```javascript
// Datos de múltiples usuarios con sus órdenes
const usersOrders = [
  { name: 'Ana', orders: [100, 200, 150] },
  { name: 'Bob', orders: [300, 50] },
  { name: 'Carlos', orders: [120] }
];

// Obtener todas las órdenes en un solo array
const allOrders = usersOrders.flatMap(user => user.orders);
console.log(allOrders);
// [100, 200, 150, 300, 50, 120]
```

#### Expandir Resultados Condicionales

```javascript
// Búsqueda que puede retornar 0, 1 o más resultados
const searchResults = ['apple', 'apricot', 'banana'];
const expanded = searchResults.flatMap(fruit => {
  if (fruit.startsWith('a')) {
    // Para frutas que inician con 'a', retorna múltiples variantes
    return [fruit, fruit.toUpperCase()];
  }
  return [];  // Para otras, no incluir
});
console.log(expanded);
// ['apple', 'APPLE', 'apricot', 'APRICOT']
```

#### Procesamiento de Datos de APIs

```javascript
// Respuesta de API con arrays anidados
const apiResponse = {
  results: [
    {
      category: 'electronics',
      items: [
        { id: 1, name: 'Laptop' },
        { id: 2, name: 'Phone' }
      ]
    },
    {
      category: 'books',
      items: [
        { id: 3, name: 'Novel' }
      ]
    }
  ]
};

// Extraer todos los items en un solo array
const allItems = apiResponse.results.flatMap(cat => cat.items);
console.log(allItems);
// [
//   { id: 1, name: 'Laptop' },
//   { id: 2, name: 'Phone' },
//   { id: 3, name: 'Novel' }
// ]
```

### 4. Comparación: flat() vs flatMap()

| Característica  | flat()                  | flatMap()             |
| --------------- | ----------------------- | --------------------- |
| **Propósito**   | Aplanar arrays          | Transformar + aplanar |
| **Entrada**     | Array anidado           | Array cualquiera      |
| **Parámetro**   | depth (profundidad)     | Función callback      |
| **Profundidad** | Configurable            | Siempre 1             |
| **Rendimiento** | Mejor para solo aplanar | Mejor que map + flat  |

```javascript
// Eligiendo entre flat() y flatMap()

// Usa flat() cuando solo necesitas aplanar
const nested = [[1, 2], [3, 4]];
const result1 = nested.flat();

// Usa flatMap() cuando quieres transformar Y aplanar
const numbers = [1, 2, 3];
const result2 = numbers.flatMap(n => [n, n * 2]);
```

### 5. Casos Edge y Consideraciones

#### Valores undefined y null

```javascript
const mixed = [1, undefined, [2, null, 3]];
console.log(mixed.flat());
// [1, undefined, 2, null, 3]
// undefined y null se mantienen, solo se aplana la estructura
```

#### Performance: Profundidad vs Infinity

```javascript
const array = [[[[1, 2, 3]]]];

// ❌ MALO: Profundidad indefinida (puede ser más lento)
const result1 = array.flat(Infinity);

// ✅ MEJOR: Usar profundidad específica si la conoces
const result2 = array.flat(3);
```

#### flatMap() no aceptaparámetro de profundidad

```javascript
const numbers = [1, [2, 3]];

// ❌ Esto NO funciona como esperas
// flatMap siempre aplana un nivel
const result = numbers.flatMap(n => n);
console.log(result);
// [1, 2, 3] - funciona porque cada elemento devuelve lo que es

// Si necesitas profundidad múltiple, usa map + flat
const result2 = numbers.map(n => n).flat(2);
```

## ✅ Checklist de Verificación

Antes de continuar, asegúrate de entender:

- [ ] Diferencia entre `flat()` y `flatMap()`
- [ ] Cómo funciona el parámetro `depth` en `flat()`
- [ ] Cuándo usar `flat(Infinity)` vs profundidad específica
- [ ] Cómo `flatMap()` combina transformación + aplanamiento
- [ ] Casos de uso prácticos en manipulación de datos
- [ ] Cómo manejar valores undefined/null
- [ ] Performance considerations

## 🔗 Recursos Adicionales

- [MDN: Array.prototype.flat()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [MDN: Array.prototype.flatMap()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
- [JavaScript.info - Arrays](https://javascript.info/array-methods)

## 💡 Tips y Trucos

1. **Aplanar arrays con agujeros**
   ```javascript
   const withHoles = [1, , 3, , 5];
   const clean = withHoles.flat(); // Elimina los agujeros
   ```

2. **Convertir array-like a array con flat**
   ```javascript
   // Si un array-like tiene arrays anidados
   const result = Array.from(arrayLike).flat();
   ```

3. **flatMap para eliminar elementos**
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   // Filtrar pares devolviendo array vacío
   const odds = numbers.flatMap(n => n % 2 === 0 ? [] : [n]);
   // [1, 3, 5]
   ```

---

**Próximo tema**: [Array.from() y Array.of()](02-array-from-of.md)
