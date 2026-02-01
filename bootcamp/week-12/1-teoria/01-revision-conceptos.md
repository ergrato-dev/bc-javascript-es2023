# 📚 Revisión de Conceptos ES2023

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

## 📋 Características ES2019-ES2023 Específicas

### Métodos de Array Modernos (ES2022-ES2023)

```javascript
// at() - índices negativos (ES2022)
const lastProduct = products.at(-1);
const secondToLast = products.at(-2);

// findLast() y findLastIndex() (ES2023)
const lastExpensive = products.findLast(p => p.price > 100);
const lastExpensiveIndex = products.findLastIndex(p => p.price > 100);

// toSorted(), toReversed(), with() - inmutables (ES2023)
const sorted = products.toSorted((a, b) => a.price - b.price);
const reversed = products.toReversed();
const updated = products.with(0, newProduct);
```

### Object.hasOwn() (ES2022)

```javascript
// Mejor que hasOwnProperty
if (Object.hasOwn(product, 'discount')) {
  applyDiscount(product);
}

// Funciona con objetos sin prototipo
const config = Object.create(null);
config.theme = 'dark';
Object.hasOwn(config, 'theme'); // true
```

### Static Blocks en Clases (ES2022)

```javascript
class ProductService {
  static #instance;
  static #config;

  // Static initialization block
  static {
    this.#config = loadConfig();
    console.log('ProductService initialized');
  }

  static getInstance() {
    this.#instance ??= new ProductService();
    return this.#instance;
  }
}
```

### Error Cause (ES2022)

```javascript
// Encadenar errores preservando el original
const fetchProducts = async () => {
  try {
    const response = await fetch('/api/products');
    return await response.json();
  } catch (error) {
    throw new Error('Failed to load products', { cause: error });
  }
};

// Acceder a la cadena de errores
try {
  await fetchProducts();
} catch (error) {
  console.log(error.message);       // "Failed to load products"
  console.log(error.cause?.message); // Error original de red/JSON
}
```

### Optional Catch Binding (ES2019)

```javascript
// Cuando no necesitas el error
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch {  // Sin parámetro
    return false;
  }
};
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

### Fundamentos
- [ ] Crear clases con campos privados (`#`)
- [ ] Usar herencia cuando es apropiado
- [ ] Exportar/importar módulos ES6
- [ ] Manipular arrays con map/filter/reduce

### Estructuras de Datos
- [ ] Usar Set para valores únicos
- [ ] Usar Map para key-value pairs
- [ ] Aplicar optional chaining (`?.`) y nullish coalescing (`??`)

### ES2022-ES2023
- [ ] Usar `at(-1)` para acceso a índices negativos
- [ ] Usar `findLast()` para buscar desde el final
- [ ] Usar `Object.hasOwn()` en lugar de `hasOwnProperty`
- [ ] Implementar static blocks en clases cuando sea apropiado

### Robustez
- [ ] Implementar validación con errores personalizados
- [ ] Usar Error cause para encadenar errores
- [ ] Aplicar optional catch binding cuando no necesites el error

---

## 🔗 Navegación

| 🏠 Semana | ➡️ Siguiente |
|:---------:|-------------:|
| [README](../README.md) | [Arquitectura](./02-arquitectura-aplicacion.md) |
