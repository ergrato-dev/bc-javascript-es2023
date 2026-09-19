/**
 * 📘 Ejercicio 03: Módulos ES
 *
 * Este es un ejercicio guiado conceptual sobre módulos ES (import/export).
 * Como Node.js requiere configuración especial para ES modules,
 * este ejercicio explica los conceptos con código comentado.
 *
 * En el proyecto real del navegador, usarás estos patrones.
 *
 * Ejecuta: node index.js
 */

// ============================================
// PASO 1: Export Named
// ============================================
console.log('--- Paso 1: Export Named ---');

// En un archivo utils.js tendrías:
// ----------------------------------
// export const formatPrice = price => `$${price.toFixed(2)}`;
// export const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// export const APP_NAME = 'Mi App';
//
// Y en otro archivo importarías:
// ----------------------------------
// import { formatPrice, validateEmail, APP_NAME } from './utils.js';
//
// También puedes renombrar al importar:
// import { formatPrice as formatCurrency } from './utils.js';

// Simulación para este ejercicio:
const formatPrice = price => `$${price.toFixed(2)}`;
const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const APP_NAME = 'Mi App';

console.log('Importando con destructuring:');
console.log(`formatPrice(99.99) = ${formatPrice(99.99)}`);
console.log(
  `validateEmail('test@mail.com') = ${validateEmail('test@mail.com')}`
);
console.log(`APP_NAME = ${APP_NAME}`);

console.log('');

// ============================================
// PASO 2: Export Default
// ============================================
console.log('--- Paso 2: Export Default ---');

// Cada archivo puede tener UN export default
// ----------------------------------
// ProductService.js:
// class ProductService { ... }
// export default ProductService;
//
// También puedes combinar default y named:
// export default ProductService;
// export const PRODUCTS_PER_PAGE = 10;
//
// Al importar:
// import ProductService from './ProductService.js';
// import ProductService, { PRODUCTS_PER_PAGE } from './ProductService.js';

console.log('Export default vs named:');
console.log('ProductService es el export default');
console.log('Los demás son named exports');

console.log('');

// ============================================
// PASO 3: Re-exportación con index.js
// ============================================
console.log('--- Paso 3: Re-exportación ---');

// Estructura de carpeta models/:
// ----------------------------------
// models/
// ├── Product.js    → export class Product { }
// ├── User.js       → export class User { }
// ├── Cart.js       → export class Cart { }
// └── index.js      → Re-exporta todo
//
// models/index.js:
// ----------------------------------
// export { Product } from './Product.js';
// export { User } from './User.js';
// export { Cart } from './Cart.js';
//
// Ahora puedes importar así:
// ----------------------------------
// import { Product, User, Cart } from './models/index.js';
// // O más corto (index.js es implícito):
// import { Product, User, Cart } from './models';

console.log('Importar desde index.js:');
console.log("import { Product, User, Cart } from './models'");
console.log('Todos los modelos disponibles desde un punto');

console.log('');

// ============================================
// PASO 4: Arquitectura de Carpetas
// ============================================
console.log('--- Paso 4: Arquitectura ---');

// Estructura típica de un proyecto:
// ----------------------------------
// js/
// ├── config.js           → Configuración global
// ├── main.js             → Entry point
// ├── app.js              → Controlador principal
// ├── models/
// │   ├── index.js        → Re-exporta modelos
// │   ├── Product.js
// │   ├── User.js
// │   └── Cart.js
// ├── services/
// │   ├── index.js        → Re-exporta services
// │   ├── ProductService.js
// │   ├── CartService.js
// │   └── AuthService.js
// └── ui/
//     ├── index.js        → Re-exporta UI
//     ├── ProductList.js
//     ├── CartView.js
//     └── AuthView.js

console.log('Estructura del proyecto:');
console.log('js/');
console.log('├── models/     → Clases de datos');
console.log('├── services/   → Lógica de negocio');
console.log('├── ui/         → Componentes visuales');
console.log('├── config.js   → Configuración');
console.log('└── main.js     → Entry point');

console.log('');

// ============================================
// PASO 5: Imports en el Proyecto E-commerce
// ============================================
console.log('--- Paso 5: Imports del Proyecto ---');

// Ejemplo de cómo se verían los imports en app.js:
// ----------------------------------
// import { APP_CONFIG, INITIAL_PRODUCTS } from './config.js';
// import { Product, Cart } from './models/index.js';
// import { productService, cartService, authService } from './services/index.js';
// import { ProductList, CartView, AuthView, Notifications } from './ui/index.js';
//
// Cada capa solo importa de la capa inferior:
// - UI importa de Services y Models
// - Services importa de Models
// - Models no importa de nadie (son independientes)

console.log('Flujo de dependencias:');
console.log('UI → Services → Models');
console.log('');
console.log('Ejemplo en app.js:');
console.log("import { productService } from './services/index.js';");
console.log("import { ProductList } from './ui/index.js';");

console.log('');

// ============================================
// PASO 6: type="module" en HTML
// ============================================
console.log('--- Paso 6: Módulos en el Navegador ---');

// Para usar ES modules en el navegador:
// ----------------------------------
// <script type="module" src="js/main.js"></script>
//
// Características importantes:
// - Carga diferida (como defer)
// - Scope aislado por módulo
// - Strict mode automático
// - CORS requerido (no funciona con file://)
//
// Por eso necesitas un servidor local:
// - Live Server en VS Code
// - python -m http.server
// - npx serve

console.log('En index.html:');
console.log('<script type="module" src="js/main.js"></script>');
console.log('');
console.log('Requiere servidor local (Live Server)');
console.log('No funciona abriendo el HTML directamente');

console.log('');
console.log('✅ ¡Ejercicio completado!');
