/*
 * Ejercicio 02: Template Literals - SOLUCIÓN
 * Objetivo: Dominar interpolación y strings modernos
 */

console.log('=== Ejercicio 02: Template Literals - SOLUCIÓN ===\n');

// ============================================
// PARTE 1: Conversión de Concatenación
// ============================================
console.log('--- Parte 1: Conversión de Concatenación ---');

const firstName = 'Ana';
const lastName = 'García';
const age = 25;
const city = 'Madrid';

// ✅ SOLUCIÓN: Template literals con interpolación
const greeting = `Hello, my name is ${firstName} ${lastName}`;
const info = `I am ${age} years old and I live in ${city}`;

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

// ✅ SOLUCIÓN: Operación matemática dentro del template
const total = `€${price * quantity * (1 + taxRate)}`;

// ✅ SOLUCIÓN: Operador ternario
const itemText = `${quantity} ${quantity > 1 ? 'items' : 'item'}`;

// ✅ SOLUCIÓN: Método de string
const upperName = `${firstName.toUpperCase()}`;

console.log('Total:', total); // €363
console.log('Item text:', itemText); // 3 items
console.log('Upper name:', upperName); // ANA
console.log('');

// ============================================
// PARTE 3: Strings Multilínea
// ============================================
console.log('--- Parte 3: Strings Multilínea ---');

// ✅ SOLUCIÓN: Mensaje multilínea
const welcomeMessage = `
╔════════════════════════════════╗
║   WELCOME TO OUR PLATFORM      ║
╠════════════════════════════════╣
║                                ║
║   User: ${firstName} ${lastName}        ║
║                                ║
║   Thank you for joining us!    ║
║   We're excited to have you.   ║
║                                ║
║   Date: ${new Date().toLocaleDateString()}           ║
║                                ║
╚════════════════════════════════╝
`;

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
  isActive: true,
};

// ✅ SOLUCIÓN: HTML con template literal
const userCard = `
<div class="user-card">
  <h3>${user.name}</h3>
  <p class="email">${user.email}</p>
  <p class="role">Role: ${user.role}</p>
  <span class="badge ${user.isActive ? 'active' : 'inactive'}">
    ${user.isActive ? '✓ Active' : '✗ Inactive'}
  </span>
</div>
`;

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

// ✅ SOLUCIÓN: URL con interpolación
const apiUrl = `${apiBase}/${version}/${endpoint}/${userId}`;

// ✅ SOLUCIÓN: URL con query parameters
const searchTerm = 'javascript';
const page = 1;
const limit = 10;
const searchUrl = `${apiBase}/${version}/search?q=${searchTerm}&page=${page}&limit=${limit}`;

console.log('API URL:', apiUrl);
// https://api.example.com/v2/users/123

console.log('Search URL:', searchUrl);
// https://api.example.com/v2/search?q=javascript&page=1&limit=10

console.log('');

// ============================================
// PARTE 6: Desafío - Tabla de Datos
// ============================================
console.log('--- Parte 6: Desafío - Tabla de Datos ---');

const products = [
  { name: 'Laptop', price: 999, stock: 5 },
  { name: 'Mouse', price: 25, stock: 50 },
  { name: 'Keyboard', price: 75, stock: 30 },
];

// ✅ SOLUCIÓN: Tabla HTML completa
const productTable = `
<table class="products">
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Stock</th>
      <th>Total Value</th>
    </tr>
  </thead>
  <tbody>
    ${products
      .map(
        product => `
    <tr>
      <td>${product.name}</td>
      <td>€${product.price}</td>
      <td>${product.stock} units</td>
      <td>€${product.price * product.stock}</td>
    </tr>
    `
      )
      .join('')}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3"><strong>Total Products:</strong></td>
      <td><strong>${products.length}</strong></td>
    </tr>
  </tfoot>
</table>
`;

console.log(productTable);
console.log('');

// ============================================
// EJEMPLOS ADICIONALES
// ============================================
console.log('--- Ejemplos Adicionales ---');

// ✅ Template con condicionales
const score = 85;
const grade = `Your score: ${score} - ${
  score >= 90
    ? 'Excellent!'
    : score >= 70
    ? 'Good job!'
    : score >= 50
    ? 'You passed'
    : 'Keep trying'
}`;
console.log(grade);

// ✅ Template con funciones
const formatCurrency = amount => `€${amount.toFixed(2)}`;
const formatDate = date => date.toLocaleDateString('es-ES');

const invoice = `
Invoice Details:
- Amount: ${formatCurrency(1234.5)}
- Date: ${formatDate(new Date())}
- Status: Paid
`;
console.log(invoice);

// ✅ Template con expresiones complejas
const items = [10, 20, 30, 40, 50];
const summary = `
Items: ${items.join(', ')}
Count: ${items.length}
Sum: ${items.reduce((a, b) => a + b, 0)}
Average: ${items.reduce((a, b) => a + b, 0) / items.length}
`;
console.log(summary);

console.log('');
console.log('=== Ejercicio Completado ===');

// ============================================
// PUNTOS CLAVE APRENDIDOS
// ============================================
/*
 * ✅ Template Literals:
 *    - Usar backticks ` ` en lugar de comillas
 *    - Interpolación con ${expression}
 *    - Strings multilínea sin \n
 *
 * ✅ Interpolación:
 *    - Variables: ${name}
 *    - Expresiones: ${price * quantity}
 *    - Funciones: ${formatCurrency(100)}
 *    - Ternarios: ${isActive ? 'Yes' : 'No'}
 *
 * ✅ HTML Dinámico:
 *    - Generar HTML con templates
 *    - Usar map() para listas
 *    - Condicionales inline
 *
 * ✅ Mejores Prácticas:
 *    - Siempre usar template literals en lugar de concatenación
 *    - Código más legible y mantenible
 *    - Menos propenso a errores
 */
