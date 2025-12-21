/**
 * Ejercicio 03: Chaining Complejo
 *
 * Practica el encadenamiento de métodos de array
 */

// ============================================
// TAREA 1: Pipeline Básico
// ============================================

const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Tablet', price: 300, inStock: true },
  { name: 'Watch', price: 200, inStock: true },
  { name: 'Headphones', price: 150, inStock: false },
];

// TODO: Productos en stock, ordenados por precio desc, solo nombres
const availableProducts = null; // Implementar

console.log('Tarea 1:', availableProducts);
// Esperado: ['Laptop', 'Tablet', 'Watch']

// ============================================
// TAREA 2: Top N con Transformación
// ============================================

const users = [
  { name: 'Ana', score: 85, active: true },
  { name: 'Luis', score: 92, active: true },
  { name: 'María', score: 78, active: false },
  { name: 'Carlos', score: 95, active: true },
  { name: 'Pedro', score: 88, active: true },
];

// TODO: Top 3 usuarios activos por score
const top3 = null; // Implementar

console.log('Tarea 2:', top3);
// Esperado: ['Carlos: 95 pts', 'Luis: 92 pts', 'Pedro: 88 pts']

// ============================================
// TAREA 3: Filtrado Múltiple Optimizado
// ============================================

const employees = [
  { name: 'Ana', dept: 'IT', salary: 5000, years: 3 },
  { name: 'Luis', dept: 'HR', salary: 4000, years: 5 },
  { name: 'María', dept: 'IT', salary: 5500, years: 7 },
  { name: 'Carlos', dept: 'IT', salary: 4500, years: 2 },
  { name: 'Pedro', dept: 'HR', salary: 4200, years: 4 },
];

// TODO: IT, >2 años, salario >4500, ordenados por salario desc
const seniorITHighPaid = null; // Implementar

console.log('Tarea 3:', seniorITHighPaid);
// Esperado: [{ name: 'María', ... }, { name: 'Ana', ... }]

// ============================================
// TAREA 4: Extracción de Funciones
// ============================================

const orders = [
  { id: 1, total: 150, status: 'completed', date: '2024-01-15' },
  { id: 2, total: 200, status: 'pending', date: '2024-01-16' },
  { id: 3, total: 75, status: 'completed', date: '2024-01-14' },
  { id: 4, total: 300, status: 'completed', date: '2024-01-17' },
  { id: 5, total: 50, status: 'cancelled', date: '2024-01-13' },
];

// TODO: Definir funciones separadas
const isCompleted = null; // order => boolean
const hasMinTotal = null; // minTotal => order => boolean
const toOrderSummary = null; // order => { id, total }
const byTotalDesc = null; // (a, b) => number

// TODO: Usar las funciones en un chain
const completedHighValue = null; // Implementar

console.log('Tarea 4:', completedHighValue);
// Esperado: [{ id: 4, total: 300 }, { id: 1, total: 150 }]

// ============================================
// TAREA 5: Agregación con Chaining
// ============================================

const transactions = [
  { type: 'income', category: 'salary', amount: 3000 },
  { type: 'expense', category: 'rent', amount: 1000 },
  { type: 'income', category: 'freelance', amount: 500 },
  { type: 'expense', category: 'food', amount: 300 },
  { type: 'expense', category: 'transport', amount: 150 },
];

// TODO: Total de gastos
const totalExpenses = null; // Implementar

console.log('Tarea 5:', totalExpenses);
// Esperado: 1450

// ============================================
// TAREA 6: Chain con flatMap
// ============================================

const departments = [
  { name: 'IT', employees: ['Ana', 'Luis', 'María'] },
  { name: 'HR', employees: ['Carlos', 'Pedro'] },
  { name: 'Sales', employees: ['Laura', 'Jorge', 'Sofia', 'Miguel'] },
];

// TODO: Empleados de deptos con >2 personas, ordenados
const employeesFromLargeDepts = null; // Implementar

console.log('Tarea 6:', employeesFromLargeDepts);
// Esperado: ['Ana', 'Jorge', 'Laura', 'Luis', 'María', 'Miguel', 'Sofia']

// ============================================
// TAREA 7: Procesamiento de Strings
// ============================================

const comments = [
  '  Great product!  ',
  'not bad',
  '   AMAZING SERVICE   ',
  'Could be better',
  '  love it!  ',
];

// TODO: Limpiar, capitalizar, filtrar >10 chars, ordenar
const processedComments = null; // Implementar

console.log('Tarea 7:', processedComments);
// Esperado: ['Amazing service', 'Could be better', 'Great product!']

// ============================================
// TAREA 8: Pipeline Condicional
// ============================================

const items = [
  { name: 'A', price: 100, featured: true },
  { name: 'B', price: 50, featured: false },
  { name: 'C', price: 75, featured: true },
  { name: 'D', price: 200, featured: false },
];

// TODO: Función con opciones de filtrado
const filterItems = (items, options = {}) => {
  // Implementar
  return null;
};

console.log(
  'Tarea 8:',
  filterItems(items, {
    onlyFeatured: true,
    minPrice: 50,
    sortBy: 'price',
  })
);
