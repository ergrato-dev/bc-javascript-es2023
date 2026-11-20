# Lab 03 — `map` y `filter`

## Objetivo

Transformar arrays con `map` (un resultado por cada elemento) y quedarte con una parte con `filter` (solo los elementos que cumplen una condición), encadenarlos y quitar duplicados.

**Tiempo:** 45 min · **Teoría:** [04 - Métodos de array](../../1-teoria/04-array-methods.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) empieza con tres arrays de datos (`users`, `products` y `numbers`) que ya están activos, y sigue con 8 pasos. En cada uno, descomenta el bloque que hay debajo de `Descomenta las siguientes líneas:` (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-02-operadores_metodos_modernos_arrays/2-practicas/lab-03-map-filter
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título. Cuando un array no cabe en una línea, Node lo reparte en varias; es solo la forma de mostrarlo.

---

## Paso 1: `map` básico

`map` llama a la función con cada elemento y guarda lo que devuelve en un array nuevo del mismo tamaño. `numbers` no cambia. Con objetos, `user => user.name` extrae una sola propiedad.

```text
--- Paso 1: map() Básico ---
Original: [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
Duplicados: [
   2,  4,  6,  8, 10,
  12, 14, 16, 18, 20
]
Cuadrados: [
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]
Solo nombres: [
  'Ana García',
  'Bob Smith',
  'Carlos López',
  'Diana Ruiz',
  'Eva Torres'
]
Solo emails: [
  'ana@example.com',
  'bob@example.com',
  'carlos@example.com',
  'diana@example.com',
  'eva@example.com'
]
```

## Paso 2: `map` con objetos

Para devolver un objeto desde una arrow function con retorno implícito, va entre paréntesis: `user => ({ ... })`. En `productsWithTax`, `...p` copia el producto entero y añade dos propiedades calculadas. `toFixed(2)` deja dos decimales, pero devuelve un **texto**: fíjate en las comillas de `'1208.79'`.

```text
--- Paso 2: map() con Objetos ---
User cards: [
  { id: 1, displayName: 'ANA GARCÍA', isAdult: true },
  { id: 2, displayName: 'BOB SMITH', isAdult: false },
  { id: 3, displayName: 'CARLOS LÓPEZ', isAdult: true },
  { id: 4, displayName: 'DIANA RUIZ', isAdult: true },
  { id: 5, displayName: 'EVA TORRES', isAdult: false }
]
Con impuestos: [
  {
    id: 101,
    name: 'Laptop',
    price: 999,
    stock: 5,
    category: 'electronics',
    priceWithTax: '1208.79',
    available: true
  },
  {
    id: 102,
    name: 'Mouse',
    price: 25,
    stock: 0,
    category: 'electronics',
    priceWithTax: '30.25',
    available: false
  },
  {
    id: 103,
    name: 'Desk',
    price: 200,
    stock: 3,
    category: 'furniture',
    priceWithTax: '242.00',
    available: true
  },
  {
    id: 104,
    name: 'Chair',
    price: 150,
    stock: 8,
    category: 'furniture',
    priceWithTax: '181.50',
    available: true
  },
  {
    id: 105,
    name: 'Monitor',
    price: 300,
    stock: 0,
    category: 'electronics',
    priceWithTax: '363.00',
    available: false
  }
]
```

## Paso 3: `filter` básico

`filter` devuelve un array nuevo con los elementos para los que la función devuelve `true`. `n % 2 === 0` comprueba si el resto de dividir entre 2 es 0, es decir, si el número es par. `adults.map(u => u.name)` solo sirve para mostrar los nombres en lugar de los objetos enteros.

```text
--- Paso 3: filter() Básico ---
Pares: [ 2, 4, 6, 8, 10 ]
Mayores que 5: [ 6, 7, 8, 9, 10 ]
Adultos: [ 'Ana García', 'Carlos López', 'Diana Ruiz' ]
Activos: [ 'Ana García', 'Carlos López', 'Diana Ruiz' ]
```

## Paso 4: varias condiciones

Las condiciones se combinan con `&&` (las dos) y `||` (alguna). Con estos datos, los adultos y los activos son las mismas tres personas, así que `Adultos activos` coincide con el paso 3.

```text
--- Paso 4: filter() Avanzado ---
Adultos activos: [ 'Ana García', 'Carlos López', 'Diana Ruiz' ]
Disponibles: [ 'Laptop', 'Desk', 'Chair' ]
Electrónicos disponibles: [ 'Laptop' ]
```

## Paso 5: encadenar

Como `filter` y `map` devuelven arrays, puedes llamar a otro método sobre el resultado. El orden importa: en `expensiveProducts` primero se calcula el precio con IVA y después se filtra por ese precio.

```text
--- Paso 5: Encadenar map() + filter() ---
Nombres de adultos: [ 'Ana García', 'Carlos López', 'Diana Ruiz' ]
Productos caros (con IVA): [
  { name: 'Laptop', finalPrice: 1208.79 },
  { name: 'Desk', finalPrice: 242 },
  { name: 'Monitor', finalPrice: 363 }
]
Emails de adultos activos: [ 'ana@example.com', 'carlos@example.com', 'diana@example.com' ]
```

## Paso 6: el índice

La función de `map` recibe también la posición como segundo parámetro. `String(i + 1).padStart(3, '0')` convierte el número en texto y lo rellena con ceros por la izquierda hasta 3 caracteres: `1` pasa a `'001'`.

```text
--- Paso 6: map() con Índice ---
Con posición: [
  { position: 1, name: 'Ana García' },
  { position: 2, name: 'Bob Smith' },
  { position: 3, name: 'Carlos López' },
  { position: 4, name: 'Diana Ruiz' },
  { position: 5, name: 'Eva Torres' }
]
Con nuevos IDs: [ 'PROD-001', 'PROD-002', 'PROD-003', 'PROD-004', 'PROD-005' ]
```

## Paso 7: preparar datos para la página

`productList` filtra los productos con stock y los convierte en lo que mostraría una página. `badge` lleva un texto solo si quedan menos de 5. Después, cada producto se convierte en un `<li>` y `join('\n')` une todos en un texto con un salto de línea entre cada uno. El espacio antes del primer `<li>` lo pone `console.log`, que separa sus dos argumentos con un espacio.

```text
--- Paso 7: Caso Práctico ---
Lista para UI: [
  { id: 101, display: 'Laptop - $999', badge: null },
  { id: 103, display: 'Desk - $200', badge: '¡Últimas unidades!' },
  { id: 104, display: 'Chair - $150', badge: null }
]
HTML generado:
 <li>Laptop - $999</li>
<li>Desk - $200 <span>¡Últimas unidades!</span></li>
<li>Chair - $150</li>
```

## Paso 8: quitar duplicados

`filter` recibe también el array completo como tercer parámetro. `array.indexOf(num)` devuelve la **primera** posición de ese valor: si no coincide con la actual, es un repetido y se descarta. La forma corta es `[...new Set(array)]`: un `Set` solo guarda valores únicos y spread lo vuelve a convertir en array.

```text
--- Paso 8: Filtrar Duplicados ---
Con duplicados: [
  1, 2, 2, 3,
  4, 4, 4, 5
]
Sin duplicados: [ 1, 2, 3, 4, 5 ]
Con Set: [ 1, 2, 3, 4, 5 ]
Categorías: [ 'electronics', 'furniture' ]

🎉 ¡Excelente! Has completado el lab de map() y filter().
Revisa cada paso y experimenta creando tus propias transformaciones.
```

---

## Comprobación

- [ ] Los 8 pasos descomentados y `node starter/index.js` termina sin errores.
- [ ] Sabes por qué el objeto que devuelve `map` en el paso 2 va entre paréntesis.
- [ ] Sabes explicar qué cambiaría en el paso 5 si `filter` fuera antes que `map` en `expensiveProducts`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Buscar en arrays](../lab-02-array-methods/README.md) | [Lab 04 — `reduce`](../lab-04-reduce/README.md) → |

[↑ Semana 02](../../README.md)
