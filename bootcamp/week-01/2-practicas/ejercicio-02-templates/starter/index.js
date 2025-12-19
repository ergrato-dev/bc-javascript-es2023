/*
 * Ejercicio 02: Template Literals
 * Objetivo: Dominar interpolación y strings modernos
 */

console.log('=== Ejercicio 02: Template Literals ===\n');

// ============================================
// PARTE 1: Conversión de Concatenación
// ============================================
console.log('--- Parte 1: Conversión de Concatenación ---');

const firstName = 'Ana';
const lastName = 'García';
const age = 25;
const city = 'Madrid';

// TODO: Convertir a template literals (eliminar +)
const greeting = 'Hello, my name is ' + firstName + ' ' + lastName;
const info = 'I am ' + age + ' years old and I live in ' + city;

console.log(greeting);
console.log(info);
console.log('');

// ============================================
// PARTE 2: Expresiones en Templates
// ============================================
console.log('--- Parte 2: Expresiones en Templates ---');

const price = 100;
const quantity = 3;
const taxRate = 0.21;

// TODO: Crear template con operación matemática
// Calcular: (price * quantity) * (1 + taxRate)
const total = /* tu código aquí */;

// TODO: Crear template con ternario
// Si quantity > 1, mostrar "items", sino "item"
const itemText = /* tu código aquí */;

// TODO: Crear template con método de string
// Convertir firstName a mayúsculas
const upperName = /* tu código aquí */;

console.log('Total:', total);
console.log('Item text:', itemText);
console.log('Upper name:', upperName);
console.log('');

// ============================================
// PARTE 3: Strings Multilínea
// ============================================
console.log('--- Parte 3: Strings Multilínea ---');

// TODO: Crear mensaje de bienvenida multilínea
// Debe incluir:
// - Título
// - Nombre del usuario
// - Mensaje personalizado
// - Fecha actual
const welcomeMessage = /* tu código aquí */;

console.log(welcomeMessage);
console.log('');

// ============================================
// PARTE 4: HTML Dinámico
// ============================================
console.log('--- Parte 4: HTML Dinámico ---');

const user = {
  name: 'Carlos López',
  email: 'carlos@example.com',
  role: 'Developer',
  isActive: true
};

// TODO: Crear tarjeta HTML con template literal
// Estructura:
// <div class="user-card">
//   <h3>Nombre</h3>
//   <p>Email</p>
//   <p>Role</p>
//   <span>Status</span>
// </div>
const userCard = /* tu código aquí */;

console.log(userCard);
console.log('');

// ============================================
// PARTE 5: URLs Dinámicas
// ============================================
console.log('--- Parte 5: URLs Dinámicas ---');

const apiBase = 'https://api.example.com';
const version = 'v2';
const endpoint = 'users';
const userId = 123;

// TODO: Crear URL completa
const apiUrl = /* tu código aquí */;

// TODO: Crear URL con query parameters
const searchTerm = 'javascript';
const page = 1;
const limit = 10;
const searchUrl = /* tu código aquí */;

console.log('API URL:', apiUrl);
console.log('Search URL:', searchUrl);
console.log('');

// ============================================
// PARTE 6: Desafío - Tabla de Datos
// ============================================
console.log('--- Parte 6: Desafío - Tabla de Datos ---');

const products = [
  { name: 'Laptop', price: 999, stock: 5 },
  { name: 'Mouse', price: 25, stock: 50 },
  { name: 'Keyboard', price: 75, stock: 30 }
];

// TODO: Generar tabla HTML con los productos
// Usar map() para crear las filas
const productTable = /* tu código aquí */;

console.log(productTable);
console.log('');

console.log('=== Ejercicio Completado ===');
