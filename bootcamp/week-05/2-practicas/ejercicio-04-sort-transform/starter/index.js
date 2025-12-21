/**
 * Ejercicio 04: Sort y Transformaciones
 *
 * Practica ordenamiento personalizado y transformaciones
 */

// ============================================
// TAREA 1: Ordenamiento Numérico
// ============================================

const numbers = [10, 2, 30, 1, 25, 5, 100, 8];

// TODO: Ordenar ascendente
const ascending = null; // Implementar

// TODO: Ordenar descendente
const descending = null; // Implementar

console.log('Tarea 1 - Asc:', ascending);
console.log('Tarea 1 - Desc:', descending);

// ============================================
// TAREA 2: Ordenamiento Alfabético
// ============================================

const names = ['María', 'ana', 'Carlos', 'LUIS', 'pedro'];

// TODO: Ordenar alfabéticamente (case-insensitive)
const sortedNames = null; // Implementar

console.log('Tarea 2:', sortedNames);
// Esperado: ['ana', 'Carlos', 'LUIS', 'María', 'pedro']

// ============================================
// TAREA 3: Ordenar Objetos por Propiedad
// ============================================

const products = [
  { name: 'Laptop', price: 1000, rating: 4.5 },
  { name: 'Phone', price: 500, rating: 4.8 },
  { name: 'Tablet', price: 300, rating: 4.2 },
  { name: 'Watch', price: 200, rating: 4.9 },
];

// TODO: Por precio ascendente
const byPriceAsc = null; // Implementar

// TODO: Por rating descendente
const byRatingDesc = null; // Implementar

// TODO: Por nombre alfabético
const byName = null; // Implementar

console.log('Tarea 3 - Por precio:', byPriceAsc);
console.log('Tarea 3 - Por rating:', byRatingDesc);
console.log('Tarea 3 - Por nombre:', byName);

// ============================================
// TAREA 4: Ordenamiento Multi-criterio
// ============================================

const employees = [
  { name: 'Ana', dept: 'IT', salary: 5000 },
  { name: 'Luis', dept: 'HR', salary: 4000 },
  { name: 'María', dept: 'IT', salary: 5000 },
  { name: 'Carlos', dept: 'HR', salary: 4000 },
  { name: 'Pedro', dept: 'IT', salary: 4500 },
];

// TODO: Por departamento (asc), luego por salario (desc)
const byDeptAndSalary = null; // Implementar

console.log('Tarea 4:', byDeptAndSalary);

// ============================================
// TAREA 5: Manejar Null/Undefined
// ============================================

const scores = [
  { name: 'Ana', score: 85 },
  { name: 'Luis', score: null },
  { name: 'María', score: 92 },
  { name: 'Carlos', score: undefined },
  { name: 'Pedro', score: 78 },
];

// TODO: Ordenar por score desc, nulls al final
const sortedScores = null; // Implementar

console.log('Tarea 5:', sortedScores);

// ============================================
// TAREA 6: Ordenamiento Natural de Strings
// ============================================

const files = [
  'file10.txt',
  'file2.txt',
  'file1.txt',
  'file20.txt',
  'file3.txt',
];

// TODO: Ordenar naturalmente
const naturalSorted = null; // Implementar

console.log('Tarea 6:', naturalSorted);
// Esperado: ['file1.txt', 'file2.txt', 'file3.txt', 'file10.txt', 'file20.txt']

// ============================================
// TAREA 7: Ordenar por Prioridad Personalizada
// ============================================

const tasks = [
  { title: 'Bug fix', priority: 'high' },
  { title: 'Feature', priority: 'medium' },
  { title: 'Refactor', priority: 'low' },
  { title: 'Hotfix', priority: 'critical' },
  { title: 'Docs', priority: 'low' },
];

// TODO: critical > high > medium > low
const byPriority = null; // Implementar

console.log('Tarea 7:', byPriority);

// ============================================
// TAREA 8: Agrupar Datos (groupBy)
// ============================================

const sales = [
  { product: 'A', region: 'North', amount: 100 },
  { product: 'B', region: 'South', amount: 200 },
  { product: 'A', region: 'South', amount: 150 },
  { product: 'B', region: 'North', amount: 180 },
];

// TODO: Agrupar por región
const byRegion = null; // Implementar

console.log('Tarea 8:', byRegion);

// ============================================
// TAREA 9: Normalizar Datos
// ============================================

const users = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Luis' },
  { id: 3, name: 'María' },
];

// TODO: Indexar por id
const usersById = null; // Implementar

console.log('Tarea 9:', usersById);

// ============================================
// TAREA 10: Pipeline Completo
// ============================================

const rawData = [
  { name: 'ana garcia', age: 25, status: 'A', score: 85 },
  { name: 'luis martinez', age: 30, status: 'I', score: 92 },
  { name: 'maria lopez', age: 28, status: 'A', score: 78 },
  { name: 'carlos ruiz', age: 35, status: 'A', score: 95 },
];

// TODO: Pipeline completo
const topActiveUsers = null; // Implementar

console.log('Tarea 10:', topActiveUsers);
