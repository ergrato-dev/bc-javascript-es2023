/**
 * 📘 Ejercicio 02: Array Methods Básicos
 * Completa las funciones usando find, findIndex, some, every
 */

// Datos de prueba
const users = [
  { id: 1, name: 'Ana', email: 'ana@example.com', age: 25, verified: true },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 17, verified: false },
  { id: 3, name: 'Carlos', email: 'carlos@example.com', age: 30, verified: true },
  { id: 4, name: 'Diana', email: 'diana@example.com', age: 22, verified: true }
];

const products = [
  { id: 101, name: 'Laptop', price: 999, stock: 5, category: 'electronics' },
  { id: 102, name: 'Mouse', price: 25, stock: 0, category: 'electronics' },
  { id: 103, name: 'Keyboard', price: 75, stock: 10, category: 'electronics' },
  { id: 104, name: 'Monitor', price: 300, stock: 3, category: 'electronics' }
];

// ============================================
// PARTE 1: FIND Y FINDINDEX
// ============================================

/**
 * TODO: Encuentra un usuario por email
 * @param {object[]} users - Array de usuarios
 * @param {string} email - Email a buscar
 * @returns {object|undefined} - Usuario encontrado o undefined
 */
const findUserByEmail = (users, email) => {
  // TODO: Usa find() para buscar el usuario
};

/**
 * TODO: Obtén el índice de un producto por ID
 * @param {object[]} products - Array de productos
 * @param {number} productId - ID del producto
 * @returns {number} - Índice del producto o -1
 */
const getProductIndex = (products, productId) => {
  // TODO: Usa findIndex() para encontrar el índice
};

/**
 * TODO: Encuentra el primer número mayor que el valor dado
 * @param {number[]} numbers - Array de números
 * @param {number} threshold - Valor umbral
 * @returns {number|undefined} - Primer número mayor o undefined
 */
const findFirstGreaterThan = (numbers, threshold) => {
  // TODO: Usa find() con condición >
};

/**
 * TODO: Busca un usuario por ID y retorna solo su nombre
 * @param {object[]} users - Array de usuarios
 * @param {number} userId - ID del usuario
 * @returns {string|null} - Nombre del usuario o null
 */
const getUserName = (users, userId) => {
  // TODO: Usa find() y luego extrae el name, o retorna null
};

// ============================================
// PARTE 2: SOME Y EVERY
// ============================================

/**
 * TODO: Verifica si hay productos fuera de stock
 * @param {object[]} products - Array de productos
 * @returns {boolean} - true si algún producto tiene stock 0
 */
const hasOutOfStock = (products) => {
  // TODO: Usa some() para verificar si stock === 0
};

/**
 * TODO: Comprueba si todos los usuarios son adultos (>= 18)
 * @param {object[]} users - Array de usuarios
 * @returns {boolean} - true si todos son adultos
 */
const areAllAdults = (users) => {
  // TODO: Usa every() para verificar age >= 18
};

/**
 * TODO: Verifica si todos los usuarios están verificados
 * @param {object[]} users - Array de usuarios
 * @returns {boolean} - true si todos están verificados
 */
const areAllVerified = (users) => {
  // TODO: Usa every() para verificar verified === true
};

/**
 * TODO: Verifica si al menos un producto está disponible (stock > 0)
 * @param {object[]} products - Array de productos
 * @returns {boolean} - true si hay stock disponible
 */
const hasAvailableProducts = (products) => {
  // TODO: Usa some() para verificar stock > 0
};

/**
 * TODO: Comprueba si hay productos caros (price > 500)
 * @param {object[]} products - Array de productos
 * @returns {boolean} - true si hay productos > 500
 */
const hasExpensiveProducts = (products) => {
  // TODO: Usa some() con condición price > 500
};

// ============================================
// PARTE 3: COMBINACIÓN DE MÉTODOS
// ============================================

/**
 * TODO: Actualiza el stock de un producto
 * @param {object[]} products - Array de productos
 * @param {number} productId - ID del producto
 * @param {number} newStock - Nuevo stock
 * @returns {object[]} - Nuevo array con producto actualizado
 */
const updateProductStock = (products, productId, newStock) => {
  // TODO: Usa findIndex para encontrar, luego crea nuevo array con spread
  // [...products.slice(0, index), {...product, stock: newStock}, ...products.slice(index + 1)]
};

/**
 * TODO: Obtén todos los emails de usuarios verificados
 * @param {object[]} users - Array de usuarios
 * @returns {string[]} - Array de emails
 */
const getVerifiedEmails = (users) => {
  // TODO: Combina filter() y map()
  // Filtra por verified === true, luego mapea a email
};

/**
 * TODO: Verifica si un producto existe y tiene stock
 * @param {object[]} products - Array de productos
 * @param {number} productId - ID del producto
 * @returns {boolean} - true si existe y tiene stock > 0
 */
const isProductAvailable = (products, productId) => {
  // TODO: Usa find() y verifica que existe Y tiene stock > 0
};

/**
 * TODO: Obtén el nombre del producto más caro
 * @param {object[]} products - Array de productos
 * @returns {string} - Nombre del producto más caro
 */
const getMostExpensiveProduct = (products) => {
  // TODO: Usa reduce para encontrar el de mayor precio
  // Luego retorna su nombre
};

// ============================================
// PRUEBAS - NO MODIFICAR
// ============================================

console.log('=== PARTE 1: FIND Y FINDINDEX ===\n');

console.log('Find user by email (ana@example.com):', findUserByEmail(users, 'ana@example.com'));
// Expected: { id: 1, name: 'Ana', ... }

console.log('Find user by email (notfound@example.com):', findUserByEmail(users, 'notfound@example.com'));
// Expected: undefined

console.log('Get product index (ID 102):', getProductIndex(products, 102));
// Expected: 1

console.log('Get product index (ID 999):', getProductIndex(products, 999));
// Expected: -1

console.log('First number > 50 in [10, 30, 60, 80]:', findFirstGreaterThan([10, 30, 60, 80], 50));
// Expected: 60

console.log('Get user name (ID 3):', getUserName(users, 3));
// Expected: 'Carlos'

console.log('Get user name (ID 999):', getUserName(users, 999));
// Expected: null

console.log('\n=== PARTE 2: SOME Y EVERY ===\n');

console.log('Has out of stock products?', hasOutOfStock(products));
// Expected: true (Mouse tiene stock 0)

console.log('Are all users adults?', areAllAdults(users));
// Expected: false (Bob tiene 17)

console.log('Are all users verified?', areAllVerified(users));
// Expected: false (Bob no está verificado)

console.log('Has available products?', hasAvailableProducts(products));
// Expected: true

console.log('Has expensive products (>500)?', hasExpensiveProducts(products));
// Expected: true (Laptop 999)

console.log('\n=== PARTE 3: COMBINACIÓN ===\n');

console.log('Update Mouse stock to 15:', updateProductStock(products, 102, 15));
// Expected: Array con Mouse.stock = 15

console.log('Verified emails:', getVerifiedEmails(users));
// Expected: ['ana@example.com', 'carlos@example.com', 'diana@example.com']

console.log('Is product 101 available?', isProductAvailable(products, 101));
// Expected: true (Laptop, stock 5)

console.log('Is product 102 available?', isProductAvailable(products, 102));
// Expected: false (Mouse, stock 0)

console.log('Most expensive product:', getMostExpensiveProduct(products));
// Expected: 'Laptop'
