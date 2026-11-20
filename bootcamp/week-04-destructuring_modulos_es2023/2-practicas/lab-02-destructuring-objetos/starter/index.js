/**
 * 📘 Lab 02: Destructuring de Objetos
 *
 * Este es un lab guiado. Descomenta el código en cada paso
 * para aprender destructuring de objetos progresivamente.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// DATOS DE PRUEBA (no modificar)
// ============================================

const user = {
  id: 1,
  username: 'john_doe',
  email: 'john@example.com',
  age: 28,
  country: 'Spain',
};

const product = {
  product_id: 'SKU-001',
  product_name: 'Laptop Pro',
  product_price: 1299.99,
  in_stock: true,
};

const employee = {
  name: 'María García',
  position: 'Developer',
  department: {
    name: 'Engineering',
    floor: 3,
    manager: {
      name: 'Carlos López',
      email: 'carlos@company.com',
    },
  },
  skills: ['JavaScript', 'Python', 'SQL'],
};

const apiResponse = {
  data: { users: [{ id: 1, name: 'Ana' }] },
  status: 200,
  message: 'Success',
};

// ============================================
// PASO 1: Extracción Básica
// ============================================
console.log('--- Paso 1: Extracción Básica ---');

// Extraemos propiedades del objeto user por nombre
// La sintaxis { prop1, prop2 } = obj crea variables con esos nombres
// Descomenta las siguientes líneas:

// const { username, email, age } = user;
// console.log('Username:', username);
// console.log('Email:', email);
// console.log('Age:', age);

console.log('');

// ============================================
// PASO 2: Alias (Renombrar)
// ============================================
console.log('--- Paso 2: Alias (Renombrar) ---');

// Podemos renombrar propiedades con la sintaxis { old: new }
// Útil para convertir snake_case a camelCase
// Descomenta las siguientes líneas:

// const { product_id: productId, product_name: productName, product_price: productPrice } = product;
// console.log('Product ID:', productId);
// console.log('Product Name:', productName);
// console.log('Product Price:', productPrice);

console.log('');

// ============================================
// PASO 3: Valores por Defecto
// ============================================
console.log('--- Paso 3: Valores por Defecto ---');

// Asignamos defaults para propiedades que podrían no existir
// Sintaxis: { prop = defaultValue }
// Descomenta las siguientes líneas:

// const config = { theme: 'dark' }; // language no existe
// const { theme, language = 'en' } = config;
// console.log('Theme:', theme);
// console.log('Language:', language);

console.log('');

// ============================================
// PASO 4: Alias + Default Combinados
// ============================================
console.log('--- Paso 4: Alias + Default Combinados ---');

// Combinamos renombrado con valor por defecto
// Sintaxis: { old: new = default }
// Descomenta las siguientes líneas:

// const settings = { api_url: 'https://api.example.com' };
// const {
//   api_url: apiUrl = 'http://localhost',
//   max_retries: maxRetries = 3,
//   timeout: requestTimeout = 5000
// } = settings;
// console.log('API URL:', apiUrl);
// console.log('Max Retries:', maxRetries);
// console.log('Timeout:', requestTimeout);

console.log('');

// ============================================
// PASO 5: Destructuring Anidado
// ============================================
console.log('--- Paso 5: Destructuring Anidado ---');

// Extraemos valores de objetos dentro de objetos
// Navegamos la estructura con más llaves {}
// Descomenta las siguientes líneas:

// const {
//   name: employeeName,
//   department: {
//     name: deptName,
//     manager: { email: managerEmail }
//   }
// } = employee;
// console.log('Employee:', employeeName);
// console.log('Department:', deptName);
// console.log('Manager Email:', managerEmail);

console.log('');

// ============================================
// PASO 6: Rest en Objetos
// ============================================
console.log('--- Paso 6: Rest en Objetos ---');

// Separamos propiedades específicas del resto
// Sintaxis: { prop1, ...rest }
// Descomenta las siguientes líneas:

// const { id, ...userInfo } = user;
// console.log('ID:', id);
// console.log('User Info:', userInfo);

console.log('');

// ============================================
// PASO 7: En Parámetros de Función
// ============================================
console.log('--- Paso 7: En Parámetros de Función ---');

// Destructuring directamente en los parámetros
// Permite definir defaults en la firma
// Descomenta las siguientes líneas:

// const createUser = ({ name, email, role = 'user', active = true }) => ({
//   name,
//   email,
//   role,
//   active,
//   createdAt: new Date().toISOString()
// });
// const newUser = createUser({ name: 'Ana', email: 'ana@mail.com' });
// console.log('New User:', newUser);

console.log('');

// ============================================
// PASO 8: Destructuring Complejo
// ============================================
console.log('--- Paso 8: Destructuring Complejo ---');

// Combinamos arrays y objetos anidados
// Extraemos el primer usuario del array dentro de data
// Descomenta las siguientes líneas:

// const {
//   data: { users: [firstUser] },
//   status,
//   message: responseMessage
// } = apiResponse;
// console.log('First User:', firstUser);
// console.log('Status:', status);
// console.log('Response Message:', responseMessage);

console.log('');

// ============================================
// PASO 9: Destructuring en Loops
// ============================================
console.log('--- Paso 9: Destructuring en Loops ---');

// Destructuring es muy útil en iteraciones
// Extraemos propiedades de cada objeto del array
// Descomenta las siguientes líneas:

// const products = [
//   { id: 1, name: 'Laptop', price: 999 },
//   { id: 2, name: 'Phone', price: 699 },
//   { id: 3, name: 'Tablet', price: 499 }
// ];
// for (const { id, name, price } of products) {
//   console.log(`${id}: ${name} - $${price}`);
// }

console.log('');

// ============================================
// PASO 10: Caso Práctico - Evento de Click
// ============================================
console.log('--- Paso 10: Caso Práctico ---');

// Procesamos un objeto evento complejo
// Extraemos solo lo que necesitamos
// Descomenta las siguientes líneas:

// const processClick = ({ target, clientX, clientY, shiftKey = false }) => ({
//   x: clientX,
//   y: clientY,
//   element: target,
//   withShift: shiftKey
// });
//
// const mockEvent = {
//   target: { id: 'btn-submit', tagName: 'BUTTON' },
//   clientX: 150,
//   clientY: 300,
//   type: 'click'
// };
//
// console.log('Click Info:', processClick(mockEvent));

console.log('');

// ============================================
// ✅ EJERCICIO COMPLETADO
// ============================================
console.log('🎉 ¡Excelente! Has completado el lab de destructuring de objetos.');
console.log('Revisa cada paso y experimenta modificando los valores.');
