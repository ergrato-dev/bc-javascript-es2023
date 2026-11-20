# Lab 01 — Clases básicas

## Objetivo

Declarar una clase con `class`, darle un `constructor` y métodos, crear objetos con `new` y combinar varias clases: un carrito que guarda productos y un cliente que tiene un carrito.

**Tiempo:** 45 min · **Teoría:** [01 - Clases básicas](../../1-teoria/01-clases-basicas.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-03-clases_programacion_orientada_objetos/2-practicas/lab-01-clases-basicas
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

Cada paso va entre llaves `{ }`, que ya están sin comentar. Un bloque crea su propio ámbito: lo que declares dentro (`class`, `const`) solo existe ahí. Por eso cada paso puede volver a declarar la misma clase con más métodos sin que Node diga `Identifier 'Product' has already been declared`.

---

## Paso 1: la clase y el constructor

`class Product { ... }` define un molde. `new Product('MacBook Pro', 1999, 'Electronics')` crea un objeto y llama al `constructor` con esos argumentos; dentro, `this` es el objeto nuevo, y `this.name = name` le crea la propiedad. `stock` no llega como argumento: empieza siempre en 0. Al imprimir el objeto, Node pone delante el nombre de la clase.

```text
--- Paso 1: Clase Básica ---
Producto: Product {
  name: 'MacBook Pro',
  price: 1999,
  category: 'Electronics',
  stock: 0
}
Nombre: MacBook Pro
Precio: 1999
```

## Paso 2: métodos de instancia

Los métodos se escriben dentro de la clase sin `function` ni `=>`. Todos los productos los comparten, y `this` es el producto sobre el que los llamas: en `phone.isAvailable()`, `this` es `phone`. `updateStock` cambia el estado del objeto, así que `isAvailable()` pasa de `false` a `true`.

```text
--- Paso 2: Métodos de Instancia ---
Info: iPhone 15 - $999 (Electronics)
Disponible: false
Después de agregar stock: true
Stock actual: 10
```

## Paso 3: encadenar métodos

Si un método termina con `return this`, devuelve el mismo objeto y puedes llamar a otro método detrás: `tablet.updateStock(5).applyDiscount(10)`. `applyDiscount` lanza un `Error` (`throw new Error(...)`) si el porcentaje no está entre 0 y 100, en lugar de dejar un precio absurdo.

```text
--- Paso 3: Métodos que Modifican Estado ---
Tablet con descuento: iPad Pro - $989.1 (Electronics)
Stock: 5
```

## Paso 4: una clase que usa otra (composición)

`ShoppingCart` guarda en `this.items` objetos `{ product, quantity }`, donde `product` es un `Product`. `addItem` busca con `find` si el producto ya está y suma la cantidad, o lo añade con `push`. `getTotal` y `getItemCount` resumen el array con `reduce`, como en la semana 02.

```text
--- Paso 4: Clase ShoppingCart ---
Items en carrito: 3
Total: 1057
```

## Paso 5: métodos que resumen

`getSummary` arma una línea por producto con `map`, añade el total y une todo con `join('\n')`, que pone un salto de línea entre cada línea. Fíjate en que un método puede llamar a otro del mismo objeto con `this.getTotal()`.

```text
--- Paso 5: Métodos de Resumen ---
Keyboard x1 = $79
Monitor x2 = $598
Webcam x1 = $89
---
TOTAL: $766
```

## Paso 6: tres clases juntas

Cada `Customer` crea su propio `ShoppingCart` en el constructor. `checkout()` crea un pedido con los productos del carrito, lo guarda en el historial y vacía el carrito: por eso `cartItems` pasa de 2 a 0 y `totalOrders` de 0 a 1. Node abrevia los productos anidados como `[Product]`.

```text
--- Paso 6: Clase Customer ---
Perfil antes de checkout: {
  name: 'María López',
  email: 'maria@email.com',
  cartItems: 2,
  totalOrders: 0
}
Orden creada: {
  id: 1795143147903,
  items: [
    { product: [Product], quantity: 1 },
    { product: [Product], quantity: 2 }
  ],
  total: 1397,
  date: '2026-11-20T02:52:27.903Z'
}
Perfil después: {
  name: 'María López',
  email: 'maria@email.com',
  cartItems: 0,
  totalOrders: 1
}

🎉 ¡Excelente! Has completado el lab de clases básicas.
Revisa cada paso y experimenta modificando los valores.
```

`id` y `date` salen de `Date.now()` y `new Date()`: en tu salida serán la fecha y la hora en que lo ejecutes.

---

## Comprobación

1. Quita el `return this` de `updateStock` en el paso 3 y ejecuta. ¿Qué error sale y por qué?
2. En el paso 4, añade otra vez `p1` al carrito con `cart.addItem(p1)`. ¿Cuántos items hay ahora y por qué no aparece un tercer elemento en `items`?
3. Llama a `tablet.applyDiscount(150)` en el paso 3. ¿Qué pasa con el resto del programa?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Métodos estáticos](../lab-02-metodos-estaticos/README.md) → |

[↑ Semana 03](../../README.md)
