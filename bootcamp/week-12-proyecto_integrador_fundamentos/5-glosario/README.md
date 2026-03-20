# 📖 Glosario - Semana 12

## 🎯 Proyecto Integrador - Fundamentos

Términos clave relacionados con arquitectura de aplicaciones, patrones de diseño y desarrollo de proyectos.

---

## A

### **Arquitectura**
Estructura organizacional de una aplicación que define cómo se organizan y comunican sus componentes.

```
app/
├── models/      # Datos y lógica de negocio
├── services/    # Operaciones y reglas
└── ui/          # Interfaz de usuario
```

### **API (Application Programming Interface)**
Interfaz que define cómo interactuar con un componente o servicio.

```javascript
// API pública de CartService
CartService.addItem(product);
CartService.removeItem(productId);
CartService.getState();
```

---

## C

### **Clean Code**
Código que es fácil de leer, entender y mantener. Sigue principios como nombres descriptivos, funciones pequeñas y DRY.

```javascript
// ✅ Clean
const calculateTotalPrice = items =>
  items.reduce((sum, item) => sum + item.subtotal, 0);

// ❌ No clean
const calc = arr => arr.reduce((s, i) => s + i.p * i.q, 0);
```

### **Controller**
Componente que coordina la comunicación entre diferentes partes de la aplicación.

```javascript
// app.js actúa como controller
class App {
  init() {
    ProductList.init();
    CartView.init();
    AuthView.init();
  }
}
```

---

## D

### **DRY (Don't Repeat Yourself)**
Principio que promueve evitar duplicación de código extrayendo lógica común.

```javascript
// ✅ DRY - función reutilizable
const formatPrice = price => `$${price.toLocaleString()}`;

// Usar en múltiples lugares
product.formattedPrice = formatPrice(product.price);
cart.formattedTotal = formatPrice(cart.total);
```

---

## E

### **Encapsulación**
Ocultar los detalles internos de un objeto, exponiendo solo una interfaz pública.

```javascript
class User {
  #password; // Campo privado encapsulado

  get isValidPassword() {
    return this.#password.length >= 6;
  }
}
```

### **Entry Point**
Archivo principal que inicia la ejecución de la aplicación.

```javascript
// main.js - Entry point
import { app } from './app.js';
app.init();
```

---

## G

### **Getter**
Método especial que permite acceder a un valor computado como si fuera una propiedad.

```javascript
class Cart {
  get total() {
    return this.items.reduce((sum, item) => sum + item.subtotal, 0);
  }
}

// Uso: cart.total (sin paréntesis)
```

---

## I

### **Integración**
Proceso de combinar múltiples componentes para que trabajen juntos como un sistema.

---

## L

### **Layer (Capa)**
Nivel de abstracción en una arquitectura de software. Ejemplo: Models, Services, UI.

### **Listener**
Función que se ejecuta cuando ocurre un evento específico.

```javascript
button.addEventListener('click', handleClick);
CartService.subscribe(state => updateUI(state));
```

---

## M

### **Model**
Clase que representa una entidad del dominio y sus datos.

```javascript
class Product {
  #id;
  #name;
  #price;

  get formattedPrice() { /* ... */ }
  toJSON() { /* ... */ }
}
```

### **Module**
Archivo JavaScript que exporta funcionalidad para ser usada en otros archivos.

```javascript
// product.js
export class Product { /* ... */ }

// app.js
import { Product } from './models/Product.js';
```

---

## O

### **Observer Pattern**
Patrón donde un objeto (subject) notifica a múltiples objetos (observers) cuando cambia su estado.

```javascript
class CartService {
  #listeners = new Set();

  subscribe(callback) {
    this.#listeners.add(callback);
    return () => this.#listeners.delete(callback);
  }

  #notifyListeners() {
    this.#listeners.forEach(cb => cb(this.getState()));
  }
}
```

---

## P

### **Persistencia**
Almacenamiento de datos que sobrevive al cierre de la aplicación.

```javascript
// Guardar en localStorage
localStorage.setItem('cart', JSON.stringify(cartData));

// Recuperar
const cartData = JSON.parse(localStorage.getItem('cart'));
```

### **Private Field**
Campo de clase accesible solo dentro de la propia clase, declarado con `#`.

```javascript
class User {
  #email; // Privado - solo accesible dentro de User
}
```

---

## R

### **Refactoring**
Proceso de reestructurar código existente sin cambiar su comportamiento externo.

### **Render**
Proceso de generar y mostrar la interfaz de usuario.

```javascript
render() {
  this.container.innerHTML = this.items
    .map(item => this.renderItem(item))
    .join('');
}
```

---

## S

### **Separation of Concerns**
Principio de diseño que separa una aplicación en secciones distintas, cada una responsable de una funcionalidad específica.

### **Service**
Clase que encapsula lógica de negocio y operaciones.

```javascript
class ProductService {
  getAll() { /* ... */ }
  getById(id) { /* ... */ }
  filter(criteria) { /* ... */ }
}
```

### **Singleton**
Patrón que garantiza una única instancia de una clase en toda la aplicación.

```javascript
class StorageService { /* ... */ }
export const storageService = new StorageService(); // Única instancia
```

### **State**
Datos que representan el estado actual de la aplicación o componente.

```javascript
getState() {
  return {
    items: this.#cart.items,
    total: this.#cart.total,
    isEmpty: this.#cart.isEmpty
  };
}
```

---

## T

### **Template Literal**
String que permite interpolación de expresiones y múltiples líneas.

```javascript
const html = `
  <div class="product">
    <h2>${product.name}</h2>
    <span>${product.formattedPrice}</span>
  </div>
`;
```

### **toJSON()**
Método que convierte un objeto a formato serializable para JSON.

```javascript
toJSON() {
  return {
    id: this.#id,
    name: this.#name,
    price: this.#price
  };
}
```

---

## U

### **UI (User Interface)**
Capa de la aplicación responsable de mostrar información y capturar interacciones del usuario.

### **Unsubscribe**
Función que cancela una suscripción a cambios.

```javascript
const unsubscribe = CartService.subscribe(callback);
// Más tarde...
unsubscribe(); // Deja de recibir notificaciones
```

---

## V

### **Validation**
Proceso de verificar que los datos cumplen con requisitos específicos.

```javascript
static isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

### **View**
Componente responsable de renderizar la interfaz de usuario.

```javascript
class CartView {
  render() { /* Actualiza el DOM */ }
  open() { /* Muestra el sidebar */ }
  close() { /* Oculta el sidebar */ }
}
```

---

## 🔗 Navegación

| ⬅️ Recursos | 🏠 Semana |
|:------------|:---------:|
| [4-recursos](../4-recursos/) | [README](../README.md) |
