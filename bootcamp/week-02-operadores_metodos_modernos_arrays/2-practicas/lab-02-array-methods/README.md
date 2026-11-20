# Lab 02 — Buscar en arrays

## Objetivo

Buscar y comprobar datos en un array sin escribir bucles: `find` y `findIndex` devuelven el primer elemento (o su posición) que cumple una condición; `some` y `every` responden `true` o `false`; `includes` busca un valor exacto.

**Tiempo:** 40 min · **Teoría:** [04 - Métodos de array](../../1-teoria/04-array-methods.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) empieza con tres arrays de datos (`users`, `products` y `numbers`) que ya están activos, y sigue con 8 pasos. En cada uno, descomenta el bloque que hay debajo de `Descomenta las siguientes líneas:` (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-02-operadores_metodos_modernos_arrays/2-practicas/lab-02-array-methods
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

Todos los métodos de este lab reciben una función que se ejecuta con cada elemento y devuelve `true` o `false`: `user => user.name === 'Ana'`.

---

## Paso 1: `find`

Devuelve el **primer** elemento para el que la función devuelve `true`, y deja de buscar. Si ninguno cumple, devuelve `undefined`. Fíjate en `Primer adulto`: Carlos y Diana también son adultos, pero Ana va antes.

```text
--- Paso 1: find() ---
Usuario Ana: {
  id: 1,
  name: 'Ana',
  email: 'ana@example.com',
  age: 25,
  verified: true
}
Usuario por email: {
  id: 3,
  name: 'Carlos',
  email: 'carlos@example.com',
  age: 30,
  verified: true
}
Primer adulto: {
  id: 1,
  name: 'Ana',
  email: 'ana@example.com',
  age: 25,
  verified: true
}
No encontrado: undefined
```

## Paso 2: `findIndex`

Igual que `find`, pero devuelve la posición (empezando en 0) o `-1` si no hay ninguno. Con la posición puedes leer el elemento (`products[laptopIndex]`) o, más adelante, reemplazarlo.

```text
--- Paso 2: findIndex() ---
Índice de Bob: 1
Índice de Laptop: 0
Producto a actualizar: {
  id: 101,
  name: 'Laptop',
  price: 999,
  stock: 5,
  category: 'electronics'
}
Índice no encontrado: -1
```

## Paso 3: `some`

`true` si **al menos un** elemento cumple. `!user.verified` niega el valor: cumple el usuario con `verified: false`.

```text
--- Paso 3: some() ---
¿Hay menores?: true
¿Hay productos sin stock?: true
¿Hay productos > $500?: true
¿Hay no verificados?: true
```

## Paso 4: `every`

`true` solo si **todos** cumplen. Basta un elemento que no cumpla (Bob tiene 17 años) para que dé `false`.

```text
--- Paso 4: every() ---
¿Todos son adultos?: false
¿Todos verificados?: false
¿Todos con stock?: false
¿Todos electronics?: true
```

## Paso 5: `includes`

Busca un valor exacto en un array de textos o números. El segundo argumento indica desde qué posición buscar: `letters.includes('a', 2)` empieza en la `'c'` y encuentra la segunda `'a'`.

```text
--- Paso 5: includes() ---
¿Tiene banana?: true
¿Tiene mango?: false
¿Tiene 12?: true
¿Tiene 100?: false
¿Tiene "a" desde índice 2?: true
```

## Paso 6: combinar métodos

`checkUser` busca con `find` y devuelve `user && user.verified`: si no hay usuario, `&&` devuelve `undefined` sin leer `verified`. `isAvailable` hace lo mismo con un ternario.

```text
--- Paso 6: Combinando Métodos ---
¿ana@example.com verificado?: true
¿bob@example.com verificado?: false
¿Laptop disponible?: true
¿Mouse disponible?: false
```

Prueba: añade `console.log(checkUser('zoe@example.com'));`. Sale `undefined`, no `false`; con `user?.verified ?? false` (operadores de la semana 01) devolvería siempre un booleano.

## Paso 7: validar un formulario

`requiredFields` es la lista de campos obligatorios. `every` comprueba que todos tienen valor y `some` que alguno está vacío; las dos preguntas son opuestas, así que sus respuestas también. `formData[field]` lee la propiedad cuyo nombre está en la variable `field`.

```text
--- Paso 7: Validación de Formularios ---
¿Formulario completo?: true
¿Hay campos vacíos?: false
```

## Paso 8: búsqueda con varios criterios

`findProduct` recibe un objeto con los criterios que quieras. Cada criterio se cumple si no se pidió (`!criteria.name`) o si el producto lo cumple. El Mouse es barato, pero no tiene stock: por eso la última búsqueda devuelve `undefined`.

```text
--- Paso 8: Búsqueda Múltiple ---
Buscar barato: {
  id: 102,
  name: 'Mouse',
  price: 25,
  stock: 0,
  category: 'electronics'
}
Buscar "key" con stock: {
  id: 103,
  name: 'Keyboard',
  price: 75,
  stock: 10,
  category: 'electronics'
}
Buscar "mouse" con stock: undefined

🎉 ¡Excelente! Has completado el lab de Array Methods Básicos.
Revisa cada paso y experimenta modificando las condiciones.
```

---

## Comprobación

- [ ] Los 8 pasos descomentados y `node starter/index.js` termina sin errores.
- [ ] Sabes qué devuelven `find` y `findIndex` cuando no encuentran nada.
- [ ] Sabes explicar por qué `¿Hay campos vacíos?` y `¿Formulario completo?` siempre dan valores opuestos.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Spread y rest](../lab-01-spread-rest/README.md) | [Lab 03 — `map` y `filter`](../lab-03-map-filter/README.md) → |

[↑ Semana 02](../../README.md)
