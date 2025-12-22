/**
 * 📘 Ejercicio 04: Destructuring
 *
 * Este es un ejercicio guiado. Descomenta el código en cada paso
 * para dominar el destructuring de objetos y arrays.
 *
 * Ejecuta: node index.js
 */

// ============================================
// DATOS DE PRUEBA (no modificar)
// ============================================

const user = {
  firstName: 'Ana',
  lastName: 'García',
  age: 25,
  email: 'ana@example.com',
  city: 'Madrid',
};

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// ============================================
// PASO 1: Destructuring de Objetos
// ============================================
console.log('--- Paso 1: Objetos Básico ---');

// Extraer propiedades de un objeto en variables individuales
// Descomenta las siguientes líneas:

// const { firstName, lastName, email } = user;
// console.log('Nombre:', firstName);
// console.log('Apellido:', lastName);
// console.log('Email:', email);
//
// // Comparación con forma antigua:
// // const firstName = user.firstName;
// // const lastName = user.lastName;

console.log('');

// ============================================
// PASO 2: Destructuring de Arrays
// ============================================
console.log('--- Paso 2: Arrays Básico ---');

// Extraer elementos por posición
// Descomenta las siguientes líneas:

// const [first, second, third] = colors;
// console.log('Primer color:', first);
// console.log('Segundo color:', second);
// console.log('Tercer color:', third);
//
// // Saltar elementos con comas
// const [primary, , tertiary] = colors;
// console.log('Primario:', primary);
// console.log('Terciario:', tertiary);

console.log('');

// ============================================
// PASO 3: Valores por Defecto
// ============================================
console.log('--- Paso 3: Valores por Defecto ---');

// Asignar valores si la propiedad no existe
// Descomenta las siguientes líneas:

// const partialUser = { name: 'Carlos' };
//
// // Sin default: undefined
// const { name, country } = partialUser;
// console.log('Name:', name);
// console.log('Country:', country); // undefined
//
// // Con default
// const { name: userName, country: userCountry = 'Spain' } = partialUser;
// console.log('User Country:', userCountry); // 'Spain'
//
// // En arrays
// const shortArray = [1, 2];
// const [a, b, c = 0] = shortArray;
// console.log('a, b, c:', a, b, c); // 1, 2, 0

console.log('');

// ============================================
// PASO 4: Renombrar Variables
// ============================================
console.log('--- Paso 4: Renombrar Variables ---');

// Usar nombre diferente al de la propiedad
// Descomenta las siguientes líneas:

// const product = { name: 'Laptop', price: 999 };
// const category = { name: 'Electronics', code: 'ELEC' };
//
// // Renombrar para evitar conflicto
// const { name: productName, price } = product;
// const { name: categoryName, code } = category;
//
// console.log('Producto:', productName);
// console.log('Categoría:', categoryName);
//
// // Renombrar con default
// const { stock: productStock = 0 } = product;
// console.log('Stock:', productStock);

console.log('');

// ============================================
// PASO 5: Destructuring Anidado
// ============================================
console.log('--- Paso 5: Objetos Anidados ---');

// Extraer de objetos dentro de objetos
// Descomenta las siguientes líneas:

// const employee = {
//   name: 'María',
//   position: 'Developer',
//   address: {
//     street: 'Calle Mayor 10',
//     city: 'Barcelona',
//     zipCode: '08001'
//   },
//   skills: ['JavaScript', 'React', 'Node.js']
// };
//
// // Extraer propiedades anidadas
// const { name, address: { city, zipCode } } = employee;
// console.log('Nombre:', name);
// console.log('Ciudad:', city);
// console.log('CP:', zipCode);
//
// // Extraer elemento de array anidado
// const { skills: [firstSkill] } = employee;
// console.log('Primera skill:', firstSkill);

console.log('');

// ============================================
// PASO 6: Rest en Destructuring
// ============================================
console.log('--- Paso 6: Rest (...) ---');

// Capturar el "resto" de propiedades/elementos
// Descomenta las siguientes líneas:

// // En objetos
// const { firstName: fName, ...restOfUser } = user;
// console.log('Nombre:', fName);
// console.log('Resto:', restOfUser);
//
// // En arrays
// const [firstColor, secondColor, ...otherColors] = colors;
// console.log('Primeros:', firstColor, secondColor);
// console.log('Otros:', otherColors);

console.log('');

// ============================================
// PASO 7: Destructuring en Parámetros
// ============================================
console.log('--- Paso 7: En Funciones ---');

// Destructuring directamente en parámetros
// Descomenta las siguientes líneas:

// // Función con destructuring de objeto
// const printUser = ({ firstName, lastName, age }) => {
//   console.log(`${firstName} ${lastName}, ${age} años`);
// };
// printUser(user);
//
// // Con defaults
// const createConfig = ({ timeout = 3000, debug = false } = {}) => {
//   console.log(`Timeout: ${timeout}, Debug: ${debug}`);
// };
// createConfig({ timeout: 5000 });
// createConfig(); // Usa defaults
//
// // En arrays (parámetros de callback)
// const points = [[0, 0], [10, 20], [30, 40]];
// points.forEach(([x, y]) => {
//   console.log(`Punto: (${x}, ${y})`);
// });

console.log('');

// ============================================
// PASO 8: Swap de Variables
// ============================================
console.log('--- Paso 8: Swap de Variables ---');

// Intercambiar valores sin variable temporal
// Descomenta las siguientes líneas:

// let x = 1;
// let y = 2;
// console.log('Antes - x:', x, 'y:', y);
//
// // Swap con destructuring
// [x, y] = [y, x];
// console.log('Después - x:', x, 'y:', y);
//
// // Swap múltiple
// let a = 1, b = 2, c = 3;
// [a, b, c] = [c, a, b];
// console.log('Rotación - a:', a, 'b:', b, 'c:', c);

console.log('');

// ============================================
// PASO 9: Caso Práctico - API Response
// ============================================
console.log('--- Paso 9: Caso Práctico ---');

// Procesar respuesta de API con destructuring
// Descomenta las siguientes líneas:

// const apiResponse = {
//   status: 200,
//   data: {
//     users: [
//       { id: 1, name: 'Ana', email: 'ana@example.com' },
//       { id: 2, name: 'Bob', email: 'bob@example.com' }
//     ],
//     pagination: {
//       page: 1,
//       totalPages: 5,
//       hasMore: true
//     }
//   },
//   timestamp: '2024-01-15T10:30:00Z'
// };
//
// // Extraer datos relevantes
// const {
//   status,
//   data: {
//     users,
//     pagination: { page, totalPages }
//   }
// } = apiResponse;
//
// console.log('Status:', status);
// console.log('Página:', page, 'de', totalPages);
// console.log('Usuarios:', users.length);
//
// // Procesar usuarios con destructuring en map
// const emails = users.map(({ email }) => email);
// console.log('Emails:', emails);

console.log('');

// ============================================
// ✅ EJERCICIO COMPLETADO
// ============================================
console.log('🎉 ¡Excelente! Has dominado el destructuring.');
console.log('Úsalo para escribir código más limpio y legible.');
