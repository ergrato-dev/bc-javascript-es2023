# 📚 Revisión de Conceptos ES6+

## 🎯 Objetivo

Repasar rápidamente todos los conceptos de las semanas 1-11 antes de aplicarlos en el proyecto integrador.

---

## 📋 Semanas 1-4: Fundamentos Base

### Week 01: Variables y Sintaxis Moderna

```javascript
// const y let (nunca var)
const API_URL = 'https://api.example.com';
let counter = 0;

// Arrow functions
const double = x => x * 2;
const greet = (name, age) => `Hola ${name}, tienes ${age} años`;

// Optional chaining y nullish coalescing
const city = user?.address?.city ?? 'No especificada';
```

### Week 02: Operadores y Array Methods

```javascript
// Spread operator
const allProducts = [...featured, ...regular];
const newUser = { ...user, updatedAt: new Date() };

// Rest parameters
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

// Array methods
const active = users.filter(u => u.active);
const names = users.map(u => u.name);
const total = prices.reduce((sum, p) => sum + p, 0);
```

### Week 03: Clases y POO

```javascript
class Product {
  #id;  // Campo privado

  constructor(name, price) {
    this.#id = crypto.randomUUID();
    this.name = name;
    this.price = price;
  }

  get id() { return this.#id; }

  static create(data) {
    return new Product(data.name, data.price);
  }
}

class DigitalProduct extends Product {
  constructor(name, price, downloadUrl) {
    super(name, price);
    this.downloadUrl = downloadUrl;
  }
}
```

### Week 04: Destructuring y Módulos

```javascript
// Destructuring
const { name, price, category = 'General' } = product;
const [first, second, ...rest] = items;

// Módulos ES6
// models/Product.js
export class Product { ... }
export default Product;

// main.js
import Product, { Product as ProductClass } from './models/Product.js';
```

---

## 📋 Semanas 5-8: Estructuras de Datos

### Week 05: Arrays Avanzados

```javascript
// flatMap, flat
const allTags = products.flatMap(p => p.tags);
const nested = [[1, 2], [3, 4]].flat();

// Ordenamiento
products.sort((a, b) => a.price - b.price);

// Encadenamiento
const result = products
  .filter(p => p.active)
  .map(p => p.name)
  .sort();
```

### Week 06: Strings y RegExp

```javascript
// String methods
const hasKeyword = text.includes('javascript');
const isEmail = email.endsWith('@gmail.com');

// RegExp
const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
const isValid = emailRegex.test(email);
```

### Week 07: Sets y Maps

```javascript
// Set - valores únicos
const uniqueCategories = new Set(products.map(p => p.category));

// Map - cualquier tipo como clave
const cartItems = new Map();
cartItems.set(productId, { quantity: 2, product });
cartItems.get(productId);
cartItems.has(productId);
```

### Week 08: Iteradores y Generadores

```javascript
// Generador para paginación
function* paginate(items, pageSize) {
  for (let i = 0; i < items.length; i += pageSize) {
    yield items.slice(i, i + pageSize);
  }
}

// Uso
const pages = paginate(products, 10);
const page1 = pages.next().value;
const page2 = pages.next().value;
```

---

## 📋 Semanas 9-11: Metaprogramación y Robustez

### Week 09: Símbolos

```javascript
// Símbolo como clave "privada"
const SECRET = Symbol('secret');

class User {
  constructor(name) {
    this.name = name;
    this[SECRET] = generateToken();
  }

  getToken() {
    return this[SECRET];
  }
}
```

### Week 10: Proxies

```javascript
// Proxy para validación reactiva
const createReactiveCart = cart => new Proxy(cart, {
  set(target, prop, value) {
    if (prop === 'total' && value < 0) {
      throw new Error('Total no puede ser negativo');
    }
    target[prop] = value;
    updateUI(); // Reactividad
    return true;
  }
});
```

### Week 11: Manejo de Errores

```javascript
// Errores personalizados
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

// Uso con try/catch
try {
  validateProduct(data);
} catch (error) {
  if (error instanceof ValidationError) {
    showFieldError(error.field, error.message);
  } else {
    showGenericError();
  }
}
```

---

## 🎯 Aplicación en el Proyecto

| Concepto | Uso en E-commerce |
|----------|-------------------|
| Classes | Product, User, Cart, CartItem |
| Modules | Separación en models/, services/ |
| Array methods | Filtrar, buscar, ordenar productos |
| Sets/Maps | Categorías únicas, items del carrito |
| Proxies | Carrito reactivo |
| Errores | Validación de datos |

---

## ✅ Checklist de Preparación

Antes de empezar el proyecto, asegúrate de entender:

- [ ] Crear clases con campos privados
- [ ] Usar herencia cuando es apropiado
- [ ] Exportar/importar módulos
- [ ] Manipular arrays con map/filter/reduce
- [ ] Usar Set para valores únicos
- [ ] Usar Map para key-value pairs
- [ ] Implementar validación con errores personalizados
- [ ] Aplicar optional chaining y nullish coalescing

---

## 🔗 Navegación

| 🏠 Semana | ➡️ Siguiente |
|:---------:|-------------:|
| [README](../README.md) | [Arquitectura](./02-arquitectura-aplicacion.md) |
