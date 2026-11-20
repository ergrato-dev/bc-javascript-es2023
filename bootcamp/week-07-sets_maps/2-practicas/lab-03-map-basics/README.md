# Lab 03 — Map básico

## Objetivo

Crear un `Map`, leer y escribir pares clave-valor con `set`, `get`, `has` y `delete`, recorrerlo con `keys`, `values` y `entries`, usar objetos, funciones y números como claves, convertirlo en objeto o array y al revés, y montar una caché sencilla.

**Tiempo:** 50 min · **Teoría:** [03 - Introducción a Map](../../1-teoria/03-map-basics.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-07-sets_maps/2-practicas/lab-03-map-basics
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: crear un Map

`new Map()` crea un Map vacío. Para darle valores iniciales se le pasa un array de pares `[clave, valor]`. Node muestra cada par como `clave => valor`.

```text
--- Paso 1: Creación de Map ---
Map vacío: Map(0) {}
Map con valores: Map(2) { 'name' => 'Alice', 'age' => 30 }
Tamaño: 2
```

## Paso 2: `set`, `get`, `has` y `delete`

`set(clave, valor)` añade el par o, si la clave ya existe, cambia su valor. `get` devuelve el valor (o `undefined` si la clave no está), `has` dice si la clave existe y `delete` borra el par.

```text
--- Paso 2: Métodos Básicos ---
Después de set: Map(3) { 'color' => 'blue', 'size' => 'large', 'price' => 99.99 }
get('color'): blue
has('size'): true
has('weight'): false
Después de delete: Map(2) { 'color' => 'blue', 'price' => 99.99 }
```

## Paso 3: recorrer

`keys()`, `values()` y `entries()` devuelven iteradores (como `matchAll` en la semana 06): con spread se convierten en array. `for...of` sobre `entries()` da un par por vuelta, que el destructuring `[key, value]` separa. Un Map recuerda el orden de inserción.

```text
--- Paso 3: Iteración ---
Claves: name, age, city
Valores: Bob, 25, New York
Entradas:
  name => Bob
  age => 25
  city => New York
```

## Paso 4: claves de cualquier tipo

En un objeto normal, las claves siempre acaban siendo strings. En un Map, la clave puede ser un objeto, una función o un número, y se guarda tal cual. Igual que en un Set, las claves objeto se comparan por referencia: `flexibleMap.get({ id: 1 })` devolvería `undefined`.

```text
--- Paso 4: Claves de Cualquier Tipo ---
Valor con clave objeto: datos del usuario
Valor con clave función: resultado del callback
Valor con clave número: cuarenta y dos
```

## Paso 5: conversiones

`Object.fromEntries(map)` convierte un Map en objeto (sirve, por ejemplo, para pasarlo a `JSON.stringify`). `new Map(Object.entries(obj))` hace el camino contrario, y `[...map]` da el array de pares.

```text
--- Paso 5: Conversiones ---
Map original: Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
Map → Object: { a: 1, b: 2, c: 3 }
Object → Map: Map(2) { 'x' => 10, 'y' => 20 }
Map → Array: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```

## Paso 6: una caché

`getUser` busca primero en el Map. Si el `id` está (un acierto, *hit*), devuelve lo guardado; si no (un fallo, *miss*), crea el usuario, lo guarda y lo devuelve. La segunda llamada con el mismo `id` ya no crea nada.

```text
--- Paso 6: Caché de Datos ---
Primera llamada (computing):
  getUser(1): { id: 1, name: 'User 1' }
Segunda llamada (cached):
  getUser(1): { id: 1, name: 'User 1' }
Estadísticas: { hits: 1, misses: 1 }

✅ Lab completado.
```

---

## Comprobación

1. En el paso 2, ¿qué imprime `productMap.set('color', 'red').get('color')`? ¿Cuántos pares tiene el Map después?
2. En el paso 4, ¿qué devuelve `flexibleMap.get('42')`? ¿Por qué?
3. En el paso 6, llama a `getUser(2)` y luego a `getUser(1)`. ¿Qué estadísticas salen?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Operaciones con Set](../lab-02-set-operations/README.md) | [Lab 04 — WeakMap, WeakSet y caché](../lab-04-weakmap-cache/README.md) → |

[↑ Semana 07](../../README.md)
