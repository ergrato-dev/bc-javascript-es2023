/**
 * 📘 Ejercicio 03: Map & Filter Avanzado
 * Practica transformaciones y filtros complejos
 */

// Datos de prueba
const users = [
  {
    id: 1,
    firstName: 'Ana',
    lastName: 'García',
    age: 25,
    active: true,
    role: 'admin',
  },
  {
    id: 2,
    firstName: 'Bob',
    lastName: 'Smith',
    age: 17,
    active: false,
    role: 'user',
  },
  {
    id: 3,
    firstName: 'Carlos',
    lastName: 'López',
    age: 30,
    active: true,
    role: 'user',
  },
  {
    id: 4,
    firstName: 'Diana',
    lastName: 'Martínez',
    age: 22,
    active: true,
    role: 'moderator',
  },
];

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 999,
    category: 'electronics',
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Mouse',
    price: 25,
    category: 'electronics',
    inStock: false,
    rating: 4.2,
  },
  {
    id: 3,
    name: 'Desk',
    price: 200,
    category: 'furniture',
    inStock: true,
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Chair',
    price: 150,
    category: 'furniture',
    inStock: true,
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Monitor',
    price: 300,
    category: 'electronics',
    inStock: true,
    rating: 4.7,
  },
];

const apiUsers = [
  {
    user_id: 1,
    first_name: 'Ana',
    last_name: 'García',
    email_address: 'ana@example.com',
    is_verified: true,
  },
  {
    user_id: 2,
    first_name: 'Bob',
    last_name: 'Smith',
    email_address: 'bob@example.com',
    is_verified: false,
  },
  {
    user_id: 3,
    first_name: 'Carlos',
    last_name: 'López',
    email_address: 'carlos@example.com',
    is_verified: true,
  },
];

// ============================================
// PARTE 1: TRANSFORMACIONES CON MAP
// ============================================

/**
 * TODO: Extrae solo los nombres completos de usuarios
 * @param {object[]} users - Array de usuarios
 * @returns {string[]} - Array de nombres completos
 */
const getFullNames = users => {
  // TODO: Usa map para crear array de "firstName lastName"
};

/**
 * TODO: Transforma datos de API a formato UI
 * @param {object[]} apiUsers - Usuarios en formato API
 * @returns {object[]} - Usuarios en formato UI
 */
const transformApiUsers = apiUsers => {
  // TODO: Mapea cada usuario a:
  // { id, fullName, email, verified }
};

/**
 * TODO: Añade propiedad discountPrice (10% descuento)
 * @param {object[]} products - Array de productos
 * @returns {object[]} - Productos con discountPrice
 */
const addDiscountPrice = products => {
  // TODO: Usa map y spread para añadir discountPrice
  // discountPrice = price * 0.9
};

/**
 * TODO: Crea objetos simplificados solo con id y nombre
 * @param {object[]} products - Array de productos
 * @returns {object[]} - Array de { id, name }
 */
const simplifyProducts = products => {
  // TODO: Mapea a { id, name }
};

/**
 * TODO: Añade initials a cada usuario (primeras letras)
 * @param {object[]} users - Array de usuarios
 * @returns {object[]} - Usuarios con initials
 */
const addInitials = users => {
  // TODO: Añade propiedad initials: "A.G." (firstName[0] + lastName[0])
};

// ============================================
// PARTE 2: FILTROS CON FILTER
// ============================================

/**
 * TODO: Filtra productos por categoría y disponibilidad
 * @param {object[]} products - Array de productos
 * @param {string} category - Categoría a filtrar
 * @returns {object[]} - Productos filtrados
 */
const getAvailableByCategory = (products, category) => {
  // TODO: Filtra por category === category AND inStock === true
};

/**
 * TODO: Filtra usuarios activos y adultos
 * @param {object[]} users - Array de usuarios
 * @returns {object[]} - Usuarios activos >= 18
 */
const getActiveAdults = users => {
  // TODO: Filtra por active === true AND age >= 18
};

/**
 * TODO: Filtra productos por rango de precio
 * @param {object[]} products - Array de productos
 * @param {number} min - Precio mínimo
 * @param {number} max - Precio máximo
 * @returns {object[]} - Productos en el rango
 */
const getProductsByPriceRange = (products, min, max) => {
  // TODO: Filtra por price >= min AND price <= max
};

/**
 * TODO: Busca productos por texto en nombre (case insensitive)
 * @param {object[]} products - Array de productos
 * @param {string} searchTerm - Texto a buscar
 * @returns {object[]} - Productos que coinciden
 */
const searchProducts = (products, searchTerm) => {
  // TODO: Filtra por name.toLowerCase().includes(searchTerm.toLowerCase())
};

/**
 * TODO: Remueve valores falsy de un array
 * @param {any[]} array - Array con posibles valores falsy
 * @returns {any[]} - Array sin falsy
 */
const removeFalsy = array => {
  // TODO: Usa filter(Boolean)
};

// ============================================
// PARTE 3: ENCADENAMIENTO MAP + FILTER
// ============================================

/**
 * TODO: Obtén nombres de usuarios activos
 * @param {object[]} users - Array de usuarios
 * @returns {string[]} - Nombres completos de usuarios activos
 */
const getActiveUserNames = users => {
  // TODO: Filtra por active, luego mapea a fullName
};

/**
 * TODO: Productos electrónicos disponibles con descuento
 * @param {object[]} products - Array de productos
 * @returns {object[]} - Productos procesados
 */
const getElectronicsWithDiscount = products => {
  // TODO:
  // 1. Filtra por category === 'electronics' AND inStock === true
  // 2. Mapea añadiendo discountPrice (price * 0.9)
};

/**
 * TODO: IDs de productos caros (> 100) disponibles
 * @param {object[]} products - Array de productos
 * @returns {number[]} - Array de IDs
 */
const getExpensiveProductIds = products => {
  // TODO:
  // 1. Filtra por price > 100 AND inStock === true
  // 2. Mapea a solo id
};

/**
 * TODO: Emails de usuarios verificados de la API
 * @param {object[]} apiUsers - Usuarios de API
 * @returns {string[]} - Array de emails
 */
const getVerifiedEmails = apiUsers => {
  // TODO:
  // 1. Filtra por is_verified === true
  // 2. Mapea a email_address
};

/**
 * TODO: Reporte de productos premium (rating > 4.5)
 * @param {object[]} products - Array de productos
 * @returns {object[]} - Objetos { name, price, rating }
 */
const getPremiumProductsReport = products => {
  // TODO:
  // 1. Filtra por rating > 4.5
  // 2. Mapea a { name, price, rating }
};

// ============================================
// PRUEBAS - NO MODIFICAR
// ============================================

console.log('=== PARTE 1: TRANSFORMACIONES CON MAP ===\n');

console.log('Full names:', getFullNames(users));
// Expected: ['Ana García', 'Bob Smith', 'Carlos López', 'Diana Martínez']

console.log('Transformed API users:', transformApiUsers(apiUsers));
// Expected: [{ id: 1, fullName: 'Ana García', email: '...', verified: true }, ...]

console.log('Products with discount:', addDiscountPrice(products));
// Expected: [..., { ..., price: 999, discountPrice: 899.1 }, ...]

console.log('Simplified products:', simplifyProducts(products));
// Expected: [{ id: 1, name: 'Laptop' }, ...]

console.log('Users with initials:', addInitials(users));
// Expected: [{ ..., initials: 'A.G.' }, ...]

console.log('\n=== PARTE 2: FILTROS CON FILTER ===\n');

console.log(
  'Available electronics:',
  getAvailableByCategory(products, 'electronics')
);
// Expected: [Laptop, Monitor] (Mouse no porque inStock: false)

console.log('Active adults:', getActiveAdults(users));
// Expected: [Ana, Carlos, Diana] (Bob no porque age: 17)

console.log('Products $100-$500:', getProductsByPriceRange(products, 100, 500));
// Expected: [Desk, Chair, Monitor]

console.log('Search "mon":', searchProducts(products, 'mon'));
// Expected: [Monitor]

console.log(
  'Remove falsy [0, 1, false, 2, "", 3]:',
  removeFalsy([0, 1, false, 2, '', 3])
);
// Expected: [1, 2, 3]

console.log('\n=== PARTE 3: ENCADENAMIENTO ===\n');

console.log('Active user names:', getActiveUserNames(users));
// Expected: ['Ana García', 'Carlos López', 'Diana Martínez']

console.log('Electronics with discount:', getElectronicsWithDiscount(products));
// Expected: [Laptop, Monitor] con discountPrice

console.log('Expensive product IDs:', getExpensiveProductIds(products));
// Expected: [1, 3, 4, 5] (todos > 100 y disponibles)

console.log('Verified emails:', getVerifiedEmails(apiUsers));
// Expected: ['ana@example.com', 'carlos@example.com']

console.log('Premium products report:', getPremiumProductsReport(products));
// Expected: [{ name: 'Desk', price: 200, rating: 4.8 }, { name: 'Chair', ... }, { name: 'Monitor', ... }]
