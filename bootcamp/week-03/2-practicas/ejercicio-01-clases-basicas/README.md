# 🏋️ Ejercicio 01: Clases Básicas

## 🎯 Objetivo

Aprender a crear clases ES6 con constructores, propiedades y métodos de instancia.

---

## 📋 Descripción

Crearás un sistema de gestión de productos para una tienda online, implementando clases básicas con constructores y métodos.

---

## 🚀 Instrucciones

### Parte 1: Clase Product

Crea una clase `Product` con:

1. **Constructor** que reciba:
   - `name` (string)
   - `price` (number)
   - `category` (string)
   - `stock` (number, default: 0)

2. **Propiedades automáticas**:
   - `id`: UUID generado automáticamente
   - `createdAt`: fecha de creación

3. **Métodos**:
   - `getInfo()`: retorna string con información del producto
   - `isAvailable()`: retorna true si stock > 0
   - `updateStock(quantity)`: modifica el stock (puede ser positivo o negativo)
   - `applyDiscount(percentage)`: reduce el precio según el porcentaje

### Parte 2: Clase ShoppingCart

Crea una clase `ShoppingCart` con:

1. **Constructor** sin parámetros que inicialice:
   - `items`: array vacío
   - `createdAt`: fecha de creación

2. **Métodos**:
   - `addItem(product, quantity)`: añade producto al carrito
   - `removeItem(productId)`: elimina producto del carrito
   - `getTotal()`: calcula el total del carrito
   - `getItemCount()`: retorna cantidad total de items
   - `clear()`: vacía el carrito
   - `getSummary()`: retorna resumen formateado

### Parte 3: Clase Customer

Crea una clase `Customer` con:

1. **Constructor** que reciba:
   - `name` (string)
   - `email` (string)

2. **Propiedades automáticas**:
   - `id`: UUID generado
   - `registeredAt`: fecha de registro
   - `cart`: nueva instancia de ShoppingCart

3. **Métodos**:
   - `addToCart(product, quantity)`: añade al carrito del cliente
   - `checkout()`: procesa la compra y vacía el carrito
   - `getProfile()`: retorna información del cliente

---

## 📝 Código Starter

```javascript
// ============================================
// EJERCICIO 01: Clases Básicas
// ============================================

// TODO: Implementa la clase Product
class Product {
  constructor(name, price, category, stock = 0) {
    // Tu código aquí
  }

  getInfo() {
    // Tu código aquí
  }

  isAvailable() {
    // Tu código aquí
  }

  updateStock(quantity) {
    // Tu código aquí
  }

  applyDiscount(percentage) {
    // Tu código aquí
  }
}

// TODO: Implementa la clase ShoppingCart
class ShoppingCart {
  constructor() {
    // Tu código aquí
  }

  addItem(product, quantity = 1) {
    // Tu código aquí
  }

  removeItem(productId) {
    // Tu código aquí
  }

  getTotal() {
    // Tu código aquí
  }

  getItemCount() {
    // Tu código aquí
  }

  clear() {
    // Tu código aquí
  }

  getSummary() {
    // Tu código aquí
  }
}

// TODO: Implementa la clase Customer
class Customer {
  constructor(name, email) {
    // Tu código aquí
  }

  addToCart(product, quantity = 1) {
    // Tu código aquí
  }

  checkout() {
    // Tu código aquí
  }

  getProfile() {
    // Tu código aquí
  }
}

// ============================================
// PRUEBAS
// ============================================

// Crear productos
const laptop = new Product('MacBook Pro', 1999, 'Electronics', 10);
const mouse = new Product('Magic Mouse', 99, 'Electronics', 50);
const book = new Product('JavaScript Guide', 45, 'Books', 100);

console.log('=== Productos ===');
console.log(laptop.getInfo());
console.log(`¿Disponible? ${laptop.isAvailable()}`);

// Aplicar descuento
laptop.applyDiscount(10);
console.log(`Precio con descuento: $${laptop.price}`);

// Crear cliente
const customer = new Customer('Ana García', 'ana@email.com');
console.log('\n=== Cliente ===');
console.log(customer.getProfile());

// Añadir al carrito
customer.addToCart(laptop, 1);
customer.addToCart(mouse, 2);
customer.addToCart(book, 3);

console.log('\n=== Carrito ===');
console.log(customer.cart.getSummary());
console.log(`Total: $${customer.cart.getTotal()}`);
console.log(`Items: ${customer.cart.getItemCount()}`);

// Checkout
console.log('\n=== Checkout ===');
const order = customer.checkout();
console.log(order);
console.log(`Carrito después del checkout: ${customer.cart.getItemCount()} items`);
```

---

## ✅ Resultado Esperado

```
=== Productos ===
MacBook Pro - $1999 (Electronics) - Stock: 10
¿Disponible? true
Precio con descuento: $1799.1

=== Cliente ===
{ id: 'xxx-xxx', name: 'Ana García', email: 'ana@email.com', registeredAt: '...' }

=== Carrito ===
Shopping Cart Summary:
- MacBook Pro x1 = $1799.1
- Magic Mouse x2 = $198
- JavaScript Guide x3 = $135
Total: $2132.1

Total: $2132.1
Items: 6

=== Checkout ===
{ orderId: 'xxx', items: 3, total: 2132.1, date: '...' }
Carrito después del checkout: 0 items
```

---

## 🎯 Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Clase Product completa | 30 |
| Clase ShoppingCart completa | 35 |
| Clase Customer completa | 25 |
| Código limpio y documentado | 10 |
| **Total** | **100** |

---

## 💡 Pistas

1. Usa `crypto.randomUUID()` para generar IDs únicos
2. Para `updateStock`, considera validar que no quede negativo
3. En `addItem`, verifica si el producto ya existe para actualizar cantidad
4. El método `checkout` debe retornar un objeto con información de la orden

---

## 🔗 Recursos

- [MDN: Classes](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
