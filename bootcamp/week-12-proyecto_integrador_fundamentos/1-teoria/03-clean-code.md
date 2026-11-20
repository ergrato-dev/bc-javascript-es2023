# ✨ Clean Code y Refactoring

## 🎯 Objetivo

Repasar los principios de código limpio que se aplican al proyecto integrador. No son reglas de JavaScript sino costumbres que hacen el código más fácil de leer y de cambiar.

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

### Orden dentro de un archivo

El mismo orden en todos los archivos ayuda a encontrar las cosas. Así está `src/logic.js` del proyecto:

```javascript
// 1. Imports (logic.js no necesita ninguno; main.js empieza por ellos)

// 2. Errores propios
export class ValidationError extends Error { ... }

// 3. Funciones auxiliares que usa la clase
export const validatePiece = (data, rooms) => { ... };

// 4. La clase principal
export class Collection {
  // Campos privados primero
  #pieces = new Map();

  // Constructor y getters
  constructor(prefix, rooms) { ... }
  get size() { ... }

  // Métodos públicos
  add(data) { ... }

  // Métodos privados
  #notify() { ... }
}

// 5. Funciones que calculan sin guardar
export const search = (pieces, filters) => { ... };
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

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — Arquitectura del proyecto](02-arquitectura-aplicacion.md) | [Índice de labs](../2-practicas/README.md) → |

[↑ Semana 12](../README.md)
