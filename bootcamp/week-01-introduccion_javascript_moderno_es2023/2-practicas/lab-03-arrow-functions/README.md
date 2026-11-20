# Lab 03 — Arrow functions

## Objetivo

Escribir funciones con la sintaxis de flecha (`=>`), distinguir el retorno implícito del explícito y usarlas como argumento de `map`, `filter`, `find`, `some`, `reduce`, `forEach` y `setTimeout`.

**Tiempo:** 45 min · **Teoría:** [04 - Arrow functions](../../1-teoria/04-arrow-functions.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 8 pasos. En cada uno, descomenta el bloque que hay debajo de `Descomenta las siguientes líneas:` (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-01-introduccion_javascript_moderno_es2023/2-practicas/lab-03-arrow-functions
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: sintaxis básica

`const square = x => x * x;` es una función que recibe `x` y devuelve `x * x`. Con un solo parámetro los paréntesis son opcionales; sin parámetros son obligatorios: `() => 'Hello World'`.

```text
--- Paso 1: Sintaxis Básica ---
Cuadrado de 5: 25
Hola, Ana!
Hello World
```

## Paso 2: varios parámetros

Con dos o más parámetros, los paréntesis son obligatorios: `(a, b) => a + b`. El operador `**` eleva a una potencia.

```text
--- Paso 2: Múltiples Parámetros ---
Suma: 7
Multiplicación: 30
Nombre completo: Ana García
2 elevado a 8: 256
```

## Paso 3: tipos de retorno

- **Implícito:** sin llaves, la expresión después de `=>` es lo que se devuelve.
- **Explícito:** con llaves `{ }` puedes escribir varias líneas, pero tienes que poner `return`.
- **Objeto:** para devolver un objeto sin `return`, envuélvelo en paréntesis: `({ name, age })`. Sin ellos, JavaScript lee las llaves como el cuerpo de la función.

```text
--- Paso 3: Tipos de Retorno ---
Doble de 5: 10
Triple de 5: 15
Usuario: { name: 'Carlos', age: 30 }
```

## Paso 4: con métodos de array

Los arrays tienen métodos que reciben una función y la aplican a cada elemento:

| Método | Devuelve |
|---|---|
| `map(fn)` | Un array nuevo con el resultado de `fn` para cada elemento |
| `filter(fn)` | Un array nuevo con los elementos para los que `fn` devuelve `true` |
| `find(fn)` | El primer elemento para el que `fn` devuelve `true` |
| `some(fn)` | `true` si al menos un elemento cumple `fn` |

```text
--- Paso 4: Con Métodos de Array ---
Duplicados: [ 2, 4, 6, 8, 10 ]
Pares: [ 2, 4 ]
Primer par: 2
¿Tiene pares?: true
```

## Paso 5: encadenar métodos

Como `filter` y `map` devuelven arrays, puedes encadenarlos. `reduce((sum, n) => sum + n, 0)` recorre el array acumulando un valor: empieza en `0` y en cada vuelta suma el elemento.

```text
--- Paso 5: Encadenar Métodos ---
Pares duplicados: [ 4, 8, 12, 16, 20 ]
Cuadrados de impares: [ 1, 9, 25, 49, 81 ]
Suma primeros 5: 15
```

## Paso 6: transformar objetos

Los mismos métodos sobre un array de objetos: extraer una propiedad, filtrar por dos condiciones y crear objetos nuevos con otra forma.

```text
--- Paso 6: Transformar Objetos ---
Nombres: [ 'Ana', 'Bob', 'Carlos', 'Diana' ]
Adultos activos: [
  { name: 'Ana', age: 25, active: true },
  { name: 'Carlos', age: 30, active: true },
  { name: 'Diana', age: 22, active: true }
]
Resúmenes: [
  { displayName: 'ANA', status: 'Activo' },
  { displayName: 'BOB', status: 'Inactivo' },
  { displayName: 'CARLOS', status: 'Activo' },
  { displayName: 'DIANA', status: 'Activo' }
]
```

## Paso 7: callbacks

Un *callback* es una función que pasas a otra para que la llame después. `setTimeout(fn, 1000)` llama a `fn` pasado un segundo; `forEach` la llama una vez por elemento con el elemento y su posición.

```text
--- Paso 7: Callbacks ---
Esperando 1 segundo...
1. 🍎
2. 🍌
3. 🍊
```

El mensaje del `setTimeout` no sale aquí: Node sigue ejecutando el resto del archivo y lo imprime un segundo después, al final de toda la salida:

```text
¡1 segundo después!
```

## Paso 8: caso práctico

Una lista de productos: los disponibles en una línea, el valor del stock disponible y el producto disponible más caro. El último `reduce` no lleva valor inicial: compara cada producto con el mayor encontrado hasta ese momento.

```text
--- Paso 8: Caso Práctico ---
Disponibles: Laptop: $999 | Mouse: $25 | Keyboard: $75
Total en stock: $1099
Más caro disponible: Laptop

🎉 ¡Excelente! Has dominado las arrow functions.
Úsalas especialmente con map, filter y reduce.
¡1 segundo después!
```

---

## Comprobación

- [ ] Los 8 pasos descomentados y `node starter/index.js` termina sin errores.
- [ ] Sabes cuándo una arrow function necesita `return` y cuándo paréntesis alrededor del objeto.
- [ ] Sabes explicar por qué `¡1 segundo después!` sale al final.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Template literals](../lab-02-template-literals/README.md) | [Lab 04 — Destructuring](../lab-04-destructuring/README.md) → |

[↑ Semana 01](../../README.md)
