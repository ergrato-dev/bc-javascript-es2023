# Lab 01 — Set básico

## Objetivo

Crear un `Set`, añadir, consultar y borrar valores con `add`, `has`, `delete` y `clear`, recorrerlo con `for...of` y `forEach`, quitar duplicados de un array y ver por qué dos objetos con el mismo contenido no cuentan como repetidos.

**Tiempo:** 45 min · **Teoría:** [01 - Introducción a Set](../../1-teoria/01-set-basics.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-07-sets_maps/2-practicas/lab-01-set-basics
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: crear un Set

`new Set()` crea un conjunto vacío. Si le pasas un array, guarda cada valor una sola vez: los `3` y `4` repetidos desaparecen. `size` es el número de elementos (en un array sería `length`).

```text
--- Paso 1: Creación de Set ---
Set vacío: Set(0) {}
Set con valores: Set(4) { 1, 2, 3, 4 }
Tamaño: 4
```

## Paso 2: añadir con `add()`

`add` añade un valor y devuelve el propio Set, así que se puede encadenar: `fruits.add('kiwi').add('uva')`. Añadir un valor que ya está no hace nada y no da error.

```text
--- Paso 2: Agregar Elementos ---
Después de agregar frutas: Set(3) { 'manzana', 'banana', 'naranja' }
Agregar duplicado 'manzana': Set(3) { 'manzana', 'banana', 'naranja' }
```

## Paso 3: consultar y borrar

`has` responde `true` o `false`. `delete` borra un valor y devuelve `true` si estaba. `clear` vacía el Set entero; el paso lo hace sobre `basket`, una copia creada con `new Set(fruits)`, para que `fruits` siga disponible en los pasos siguientes.

```text
--- Paso 3: Verificar y Eliminar ---
¿Tiene 'banana'? true
¿Tiene 'uva'? false
Eliminar 'banana': true
Después de eliminar: Set(2) { 'manzana', 'naranja' }
Después de clear: Set(0) {} | fruits sigue igual: 2
```

## Paso 4: recorrer

Un Set recuerda el orden en que entraron los valores, y `for...of` y `forEach` lo recorren en ese orden.

```text
--- Paso 4: Iteración ---
Colores en el Set:
- rojo
- verde
- azul
Usando forEach:
Color: rojo
Color: verde
Color: azul
```

## Paso 5: quitar duplicados de un array

`[...new Set(array)]` es la forma corta de quitar repetidos: el Set descarta los duplicados y el spread lo vuelve a convertir en array. Se conserva la primera aparición de cada valor. Node reparte en varias líneas los arrays de más de seis números.

```text
--- Paso 5: Eliminar Duplicados ---
Array original: [
  1, 2, 2, 3, 3,
  3, 4, 4, 4, 4
]
Array sin duplicados: [ 1, 2, 3, 4 ]
Emails únicos: [ 'alice@test.com', 'bob@test.com', 'charlie@test.com' ]
```

## Paso 6: objetos dentro de un Set

Un Set compara los objetos por referencia (si son el mismo objeto en memoria), no por su contenido. `user3` tiene los mismos datos que `user1`, pero es otro objeto: entra. Por la misma razón, `has({ id: 1, name: 'Alice' })` crea un objeto nuevo y responde `false`.

```text
--- Paso 6: Sets con Objetos ---
Set de usuarios: Set(3) {
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' }
}
¿Tiene user1? true
¿Tiene objeto igual a user1? false

✅ Lab completado.
```

---

## Comprobación

1. En el paso 3, ¿qué imprime `fruits.delete('uva')`? ¿Y `fruits.size` justo después?
2. ¿Qué devuelve `[...new Set('banana')]`? ¿Por qué funciona con un string?
3. En el paso 6, ¿cómo quitarías los usuarios repetidos por `id`? Pista: guarda los `id` en un Set.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Operaciones con Set](../lab-02-set-operations/README.md) → |

[↑ Semana 07](../../README.md)
