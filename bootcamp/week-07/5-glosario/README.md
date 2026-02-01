# 📖 Glosario - Semana 07

## Sets y Maps

Términos técnicos ordenados alfabéticamente.

---

### A

#### `add()` (Set)
Método que agrega un elemento a un Set. Retorna el Set para permitir encadenamiento. Si el elemento ya existe, no se agrega de nuevo.
```javascript
const set = new Set();
set.add(1).add(2).add(1); // Set(2) {1, 2}
```

#### Asociativo (Array Asociativo)
Estructura de datos que almacena pares clave-valor. En JavaScript, Map es la implementación moderna de array asociativo.

---

### B

#### Bidireccional (Map)
Patrón donde se puede buscar por clave o por valor. Requiere mantener dos Maps sincronizados.
```javascript
class BiMap {
  #keyToValue = new Map();
  #valueToKey = new Map();
}
```

---

### C

#### `clear()`
Método que elimina todos los elementos de un Set o Map.
```javascript
const map = new Map([['a', 1]]);
map.clear(); // Map(0) {}
```

#### Colección (Collection)
Estructura de datos que almacena múltiples valores. Set, Map, Array y Object son colecciones en JavaScript.

#### Colisión de Hash
Situación donde diferentes claves producen el mismo valor hash. Map maneja colisiones internamente de forma eficiente.

---

### D

#### `delete()`
Método que elimina un elemento de Set o Map. Retorna `true` si el elemento existía.
```javascript
const set = new Set([1, 2, 3]);
set.delete(2); // true
set.delete(5); // false (no existía)
```

#### Diferencia (Set Difference)
Operación que retorna elementos en A que no están en B.
```javascript
const diff = new Set([...a].filter(x => !b.has(x)));
```

#### Diferencia Simétrica
Operación que retorna elementos en A o B pero no en ambos.
```javascript
const symDiff = new Set([
  ...[...a].filter(x => !b.has(x)),
  ...[...b].filter(x => !a.has(x))
]);
```

#### Disjuntos (Conjuntos)
Dos conjuntos que no tienen elementos en común.
```javascript
const areDisjoint = [...a].every(x => !b.has(x));
```

---

### E

#### `entries()`
Método que retorna un iterador de pares `[clave, valor]` para Map, o `[valor, valor]` para Set.
```javascript
const map = new Map([['a', 1]]);
[...map.entries()]; // [['a', 1]]
```

---

### F

#### `forEach()`
Método para iterar sobre cada elemento de Set o Map.
```javascript
map.forEach((value, key) => console.log(key, value));
set.forEach(value => console.log(value));
```

---

### G

#### Garbage Collection
Proceso automático de liberación de memoria de objetos no referenciados. WeakMap y WeakSet permiten que sus claves/valores sean recolectados.

#### `get()`
Método de Map que retorna el valor asociado a una clave, o `undefined` si no existe.
```javascript
const map = new Map([['name', 'Alice']]);
map.get('name'); // 'Alice'
map.get('age');  // undefined
```

---

### H

#### `has()`
Método que verifica si un elemento existe en Set o Map. Retorna booleano.
```javascript
const set = new Set([1, 2]);
set.has(1); // true
set.has(5); // false
```

#### Hash Table
Estructura de datos que usa función hash para mapear claves a valores. Map es implementado internamente como hash table.

---

### I

#### Intersección
Operación que retorna elementos presentes en ambos conjuntos.
```javascript
const intersection = new Set([...a].filter(x => b.has(x)));
```

#### Iterable
Objeto que implementa el protocolo de iteración. Set y Map son iterables.
```javascript
for (const item of set) { }
for (const [key, value] of map) { }
```

---

### K

#### `keys()`
Método que retorna un iterador de las claves de un Map o los valores de un Set.
```javascript
const map = new Map([['a', 1], ['b', 2]]);
[...map.keys()]; // ['a', 'b']
```

---

### L

#### LRU Cache
Least Recently Used Cache. Estructura que elimina elementos menos usados cuando alcanza capacidad máxima. Map mantiene orden de inserción, facilitando su implementación.

---

### M

#### Map
Colección de pares clave-valor donde las claves pueden ser de cualquier tipo.
```javascript
const map = new Map();
map.set({}, 'objeto como clave');
map.set(42, 'número como clave');
```

#### Memoization
Técnica de optimización que cachea resultados de funciones. Map es ideal para implementarla.
```javascript
const cache = new Map();
const memoized = x => cache.get(x) ?? cache.set(x, compute(x)).get(x);
```

---

### O

#### `Object.fromEntries()`
Método estático que crea un objeto a partir de un iterable de pares clave-valor.
```javascript
const obj = Object.fromEntries(map); // Map → Object
```

#### `Object.entries()`
Método estático que retorna array de pares `[clave, valor]` de un objeto.
```javascript
const map = new Map(Object.entries(obj)); // Object → Map
```

---

### R

#### Referencia Débil (Weak Reference)
Referencia que no impide la recolección de basura del objeto referenciado. WeakMap y WeakSet usan referencias débiles.

---

### S

#### Set
Colección de valores únicos de cualquier tipo.
```javascript
const set = new Set([1, 2, 2, 3]); // Set(3) {1, 2, 3}
```

#### `set()`
Método de Map que agrega o actualiza un par clave-valor. Retorna el Map.
```javascript
const map = new Map();
map.set('key', 'value').set('key2', 'value2');
```

#### `size`
Propiedad que retorna el número de elementos en Set o Map.
```javascript
const set = new Set([1, 2, 3]);
set.size; // 3
```

#### Subconjunto (Subset)
Conjunto A es subconjunto de B si todos los elementos de A están en B.
```javascript
const isSubset = [...a].every(x => b.has(x));
```

#### Superconjunto (Superset)
Conjunto A es superconjunto de B si A contiene todos los elementos de B.
```javascript
const isSuperset = [...b].every(x => a.has(x));
```

---

### T

#### TTL (Time To Live)
Tiempo de vida de un elemento en caché. Se puede implementar con Map almacenando timestamp de expiración.

---

### U

#### Unicidad
Propiedad de Set donde cada valor aparece exactamente una vez.
```javascript
const unique = [...new Set(arrayWithDuplicates)];
```

#### Unión
Operación que combina elementos de dos conjuntos sin duplicados.
```javascript
const union = new Set([...a, ...b]);
```

---

### V

#### `values()`
Método que retorna un iterador de los valores de Map o Set.
```javascript
const map = new Map([['a', 1], ['b', 2]]);
[...map.values()]; // [1, 2]
```

---

### W

#### WeakMap
Map con referencias débiles a las claves. Las claves deben ser objetos o Symbols (ES2023). No es iterable.
```javascript
const weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'data');

// ES2023: Symbols como claves
const sym = Symbol('key');
weakMap.set(sym, 'symbol data');

obj = null; // Ahora puede ser recolectado
```

#### WeakMap con Symbols (ES2023)
Desde ES2023, los Symbols no globales pueden usarse como claves en WeakMap.
```javascript
const weakMap = new WeakMap();

// ✅ Symbols locales permitidos
weakMap.set(Symbol('local'), 'value');
weakMap.set(Symbol.iterator, 'well-known');

// ❌ Symbols globales NO permitidos
// weakMap.set(Symbol.for('global'), 'value'); // TypeError
```

#### WeakSet
Set con referencias débiles a sus valores (que deben ser objetos). No es iterable.
```javascript
const visited = new WeakSet();
visited.add(node);
if (visited.has(node)) { /* ya visitado */ }
```

---

## 📚 Referencias

- [MDN: Set](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN: Map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN: WeakMap](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [MDN: WeakSet](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
- [JavaScript.info: Map and Set](https://javascript.info/map-set)
- [TC39: Symbols as WeakMap Keys](https://github.com/tc39/proposal-symbols-as-weakmap-keys)

---

[⬅️ Volver a Semana 07](../README.md)
