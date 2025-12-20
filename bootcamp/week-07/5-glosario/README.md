# Glosario - Week 07 (Sets y Maps)

## C
**Clear**: Método que elimina todos los elementos de un Set o Map. `mySet.clear()`.

**Clave (Key)**: Identificador único en un Map que puede ser de cualquier tipo (objeto, función, primitivo).

**Colección (Collection)**: Estructura de datos que agrupa elementos. Set y Map son colecciones iterables en ES6+.

## D
**Delete**: Método para eliminar un elemento específico de Set o Map. Retorna boolean indicando si existía.

## E
**Entries**: Método que retorna un iterador de pares `[key, value]`. En Set, ambos valores son idénticos `[value, value]`.

## F
**forEach**: Método para iterar sobre Set/Map ejecutando una función por cada elemento.

## G
**Garbage Collection (GC)**: Proceso automático que libera memoria de objetos no referenciados. WeakMap/WeakSet permiten GC de claves.

**Get**: Método de Map que recupera el valor asociado a una clave. Retorna `undefined` si no existe.

## H
**Has**: Método que verifica si un elemento (Set) o clave (Map) existe. Retorna boolean.

**Hash Table**: Estructura interna usada por Map y Set para lookups O(1) promedio.

## I
**Iterable**: Objeto que implementa el protocolo de iteración. Set y Map son iterables; WeakSet/WeakMap no.

## K
**Keys**: Método de Map que retorna un iterador de claves. En Set, equivale a `values()`.

## M
**Map**: Colección de pares clave-valor con claves de cualquier tipo y orden de inserción preservado.

**Memory Leak**: Retención no intencionada de referencias que impiden GC. WeakMap/WeakSet mitigan esto.

## O
**Orden de inserción**: Propiedad de Set/Map que garantiza iteración en el orden en que se agregaron elementos.

## R
**Referencias débiles (Weak references)**: Referencias que no impiden GC del objeto. Usadas por WeakMap/WeakSet.

## S
**SameValueZero**: Algoritmo de igualdad usado por Set/Map; similar a `===` pero considera `NaN === NaN`.

**Set**: Colección de valores únicos en orden de inserción.

**Size**: Propiedad que indica el número de elementos en Set o entradas en Map.

## U
**Unicidad**: Propiedad de Set donde cada valor aparece solo una vez, comparado por SameValueZero.

## V
**Values**: Método que retorna un iterador de valores. En Map devuelve solo los valores; en Set es idéntico a `keys()`.

## W
**WeakMap**: Map con claves objeto y referencias débiles, permitiendo GC de claves no referenciadas externamente. No iterable.

**WeakSet**: Set con objetos y referencias débiles, permitiendo GC. No iterable, sin `size`.

## Operaciones adicionales

**Add (Set)**: Método para agregar un elemento único al Set. Retorna el Set (chainable).

**Set (Map)**: Método para agregar/actualizar una entrada clave-valor. Retorna el Map (chainable).

**Lookup O(1)**: Operación de búsqueda con complejidad constante promedio en Map/Set.

**Deduplicación**: Eliminación de duplicados. Patrón común: `[...new Set(array)]`.
