# ✨ Clean Code y Refactoring

## 🎯 Objetivo

Aplicar principios de código limpio en el proyecto integrador.

---

## 📋 Principios Fundamentales

### 1. Nombres Descriptivos

```javascript
// ❌ MAL
const d = new Date();
const arr = products.filter(x => x.p < 100);
const fn = () => { ... };

// ✅ BIEN
const createdAt = new Date();
const affordableProducts = products.filter(product => product.price < 100);
const calculateTotal = () => { ... };
```

### 2. Funciones Pequeñas

```javascript
// ❌ MAL - Función que hace demasiado
const processOrder = (order) => {
  // Validar order (10 líneas)
  // Calcular totales (15 líneas)
  // Aplicar descuentos (20 líneas)
  // Guardar en DB (10 líneas)
  // Enviar email (15 líneas)
};

// ✅ BIEN - Funciones con una responsabilidad
const processOrder = (order) => {
  validateOrder(order);
  const totals = calculateTotals(order);
  const finalPrice = applyDiscounts(totals, order.coupon);
  saveOrder({ ...order, finalPrice });
  notifyCustomer(order.customerId);
};

const validateOrder = (order) => { ... };
const calculateTotals = (order) => { ... };
const applyDiscounts = (totals, coupon) => { ... };
```

### 3. DRY (Don't Repeat Yourself)

```javascript
// ❌ MAL - Código duplicado
const showProductError = (message) => {
  const div = document.createElement('div');
  div.className = 'error';
  div.textContent = message;
  document.querySelector('#product-errors').appendChild(div);
};

const showCartError = (message) => {
  const div = document.createElement('div');
  div.className = 'error';
  div.textContent = message;
  document.querySelector('#cart-errors').appendChild(div);
};

// ✅ BIEN - Función reutilizable
const showError = (message, container = '#errors') => {
  const div = document.createElement('div');
  div.className = 'error';
  div.textContent = message;
  document.querySelector(container).appendChild(div);
};
```

### 4. Early Return

```javascript
// ❌ MAL - Anidamiento profundo
const processUser = (user) => {
  if (user) {
    if (user.active) {
      if (user.verified) {
        return doSomething(user);
      }
    }
  }
  return null;
};

// ✅ BIEN - Early return
const processUser = (user) => {
  if (!user) return null;
  if (!user.active) return null;
  if (!user.verified) return null;

  return doSomething(user);
};
```

---

## 🎨 Convenciones de Código

### Nomenclatura

| Tipo | Convención | Ejemplo |
|------|------------|---------|
| Variables | camelCase | `productList`, `isActive` |
| Constantes | UPPER_SNAKE_CASE | `MAX_ITEMS`, `API_URL` |
| Funciones | camelCase (verbo) | `getProducts`, `calculateTotal` |
| Clases | PascalCase | `Product`, `CartService` |
| Archivos | kebab-case o PascalCase | `product-list.js` o `ProductList.js` |
| Booleanos | is/has/can prefix | `isLoading`, `hasError`, `canEdit` |

### Estructura de Archivos

```javascript
// 1. Imports
import { Product } from '../models/Product.js';
import { storageService } from './StorageService.js';

// 2. Constantes
const STORAGE_KEY = 'products';
const DEFAULT_PAGE_SIZE = 10;

// 3. Clase/Función principal
export class ProductService {
  // Campos privados primero
  #products = [];

  // Constructor
  constructor() { ... }

  // Métodos públicos
  getAll() { ... }
  getById(id) { ... }

  // Métodos privados al final
  #loadFromStorage() { ... }
}

// 4. Instancia singleton (si aplica)
export const productService = new ProductService();
```

---

## 🔄 Refactoring Tips

### Extraer Constantes Mágicas

```javascript
// ❌ MAL
if (cart.items.length > 10) { ... }
setTimeout(callback, 3000);

// ✅ BIEN
const MAX_CART_ITEMS = 10;
const NOTIFICATION_DELAY = 3000;

if (cart.items.length > MAX_CART_ITEMS) { ... }
setTimeout(callback, NOTIFICATION_DELAY);
```

### Usar Destructuring

```javascript
// ❌ MAL
const name = product.name;
const price = product.price;
const category = product.category;

// ✅ BIEN
const { name, price, category } = product;
```

### Simplificar Condicionales

```javascript
// ❌ MAL
if (status === 'active' || status === 'pending' || status === 'review') {
  processItem();
}

// ✅ BIEN
const PROCESSABLE_STATUSES = ['active', 'pending', 'review'];
if (PROCESSABLE_STATUSES.includes(status)) {
  processItem();
}
```

---

## ✅ Checklist de Clean Code

Antes de entregar, verifica:

- [ ] No hay `var`, solo `const` y `let`
- [ ] Nombres descriptivos en inglés
- [ ] Funciones de máximo 20 líneas
- [ ] Sin código duplicado
- [ ] Sin console.log de debug
- [ ] Sin código comentado/muerto
- [ ] Indentación consistente (2 espacios)
- [ ] Imports organizados

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Semana |
|:------------|:---------:|
| [Arquitectura](./02-arquitectura-aplicacion.md) | [README](../README.md) |
