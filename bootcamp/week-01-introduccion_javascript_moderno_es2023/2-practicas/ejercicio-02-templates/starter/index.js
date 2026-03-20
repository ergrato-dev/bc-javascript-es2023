/**
 * 📘 Ejercicio 02: Template Literals
 *
 * Este es un ejercicio guiado. Descomenta el código en cada paso
 * para dominar los template literals de JavaScript moderno.
 *
 * Ejecuta: node index.js
 */

// ============================================
// PASO 1: Sintaxis Básica - Backticks
// ============================================
console.log('--- Paso 1: Sintaxis Básica ---');

// Template literals usan backticks (`) en lugar de comillas
// Descomenta las siguientes líneas:

// const simple = `Hola mundo`;
// console.log('Template simple:', simple);
//
// // Puedes incluir comillas sin escapar
// const withQuotes = `Ella dijo "Hola" y él respondió 'Adiós'`;
// console.log('Con comillas:', withQuotes);

console.log('');

// ============================================
// PASO 2: Interpolación de Variables
// ============================================
console.log('--- Paso 2: Interpolación ---');

// Usa ${variable} para insertar valores
// Descomenta las siguientes líneas:

// const name = 'Ana';
// const age = 25;
// const city = 'Madrid';
//
// // Forma antigua (concatenación)
// const oldWay = 'Hola, soy ' + name + ' y tengo ' + age + ' años.';
// console.log('Concatenación:', oldWay);
//
// // Forma moderna (template literal)
// const newWay = `Hola, soy ${name} y tengo ${age} años.`;
// console.log('Template literal:', newWay);
//
// const profile = `Nombre: ${name}, Edad: ${age}, Ciudad: ${city}`;
// console.log('Perfil:', profile);

console.log('');

// ============================================
// PASO 3: Expresiones en Templates
// ============================================
console.log('--- Paso 3: Expresiones ---');

// Puedes poner cualquier expresión JavaScript dentro de ${}
// Descomenta las siguientes líneas:

// const price = 100;
// const quantity = 3;
// const taxRate = 0.21;
//
// // Operaciones matemáticas
// const subtotal = `Subtotal: $${price * quantity}`;
// console.log(subtotal);
//
// const total = `Total con IVA: $${(price * quantity * (1 + taxRate)).toFixed(2)}`;
// console.log(total);
//
// // Operador ternario
// const items = quantity > 1 ? 'items' : 'item';
// const cartInfo = `Tienes ${quantity} ${items} en el carrito`;
// console.log(cartInfo);
//
// // Métodos de string
// const shout = `¡${name.toUpperCase()}!`;
// console.log(shout);

console.log('');

// ============================================
// PASO 4: Strings Multilínea
// ============================================
console.log('--- Paso 4: Strings Multilínea ---');

// Template literals respetan saltos de línea
// Descomenta las siguientes líneas:

// const poem = `Roses are red,
// Violets are blue,
// JavaScript is awesome,
// And so are you!`;
// console.log(poem);
//
// console.log('---');
//
// const userName = 'Carlos';
// const welcomeMessage = `
// ================================
// ¡Bienvenido, ${userName}!
// ================================
// Fecha: ${new Date().toLocaleDateString()}
// Hora: ${new Date().toLocaleTimeString()}
// `;
// console.log(welcomeMessage);

console.log('');

// ============================================
// PASO 5: HTML Dinámico
// ============================================
console.log('--- Paso 5: HTML Dinámico ---');

// Template literals son perfectos para generar HTML
// Descomenta las siguientes líneas:

// const user = {
//   name: 'María López',
//   email: 'maria@example.com',
//   role: 'Developer',
//   active: true
// };
//
// const userCard = `
// <div class="user-card">
//   <h3>${user.name}</h3>
//   <p>Email: ${user.email}</p>
//   <p>Role: ${user.role}</p>
//   <span class="${user.active ? 'active' : 'inactive'}">
//     ${user.active ? '✅ Activo' : '❌ Inactivo'}
//   </span>
// </div>
// `;
// console.log('HTML generado:', userCard);

console.log('');

// ============================================
// PASO 6: URLs Dinámicas
// ============================================
console.log('--- Paso 6: URLs Dinámicas ---');

// Construir URLs es mucho más limpio con templates
// Descomenta las siguientes líneas:

// const apiBase = 'https://api.example.com';
// const version = 'v2';
// const endpoint = 'users';
// const userId = 42;
// const params = { include: 'profile', format: 'json' };
//
// // URL simple
// const simpleUrl = `${apiBase}/${version}/${endpoint}`;
// console.log('URL base:', simpleUrl);
//
// // URL con ID
// const userUrl = `${apiBase}/${version}/${endpoint}/${userId}`;
// console.log('URL de usuario:', userUrl);
//
// // URL con query params
// const fullUrl = `${userUrl}?include=${params.include}&format=${params.format}`;
// console.log('URL completa:', fullUrl);

console.log('');

// ============================================
// PASO 7: Escapar Backticks
// ============================================
console.log('--- Paso 7: Escapar Caracteres ---');

// Si necesitas un backtick literal, usa \`
// Descomenta las siguientes líneas:

// const codeExample = `Para crear un template literal, usa \`backticks\``;
// console.log(codeExample);
//
// const dollarSign = `El precio es \${precio} (sin interpolar)`;
// console.log(dollarSign);
//
// // Template dentro de template
// const nested = `Código: \`const x = ${2 + 2}\``;
// console.log(nested);

console.log('');

// ============================================
// PASO 8: Caso Práctico - Mensajes
// ============================================
console.log('--- Paso 8: Caso Práctico ---');

// Generar mensajes dinámicos para una app
// Descomenta las siguientes líneas:

// const notifications = [
//   { type: 'success', message: 'Guardado correctamente' },
//   { type: 'error', message: 'Error de conexión' },
//   { type: 'warning', message: 'Sesión por expirar' }
// ];
//
// const icons = { success: '✅', error: '❌', warning: '⚠️' };
//
// notifications.forEach(notification => {
//   const icon = icons[notification.type];
//   const formatted = `${icon} [${notification.type.toUpperCase()}] ${notification.message}`;
//   console.log(formatted);
// });
//
// // Generar lista HTML
// const listItems = notifications
//   .map(n => `<li class="${n.type}">${icons[n.type]} ${n.message}</li>`)
//   .join('\n');
// console.log('\nLista HTML:');
// console.log(`<ul>\n${listItems}\n</ul>`);

console.log('');

// ============================================
// ✅ EJERCICIO COMPLETADO
// ============================================
console.log('🎉 ¡Excelente! Has dominado los template literals.');
console.log('Úsalos siempre en lugar de concatenación con +.');
