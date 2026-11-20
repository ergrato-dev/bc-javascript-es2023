/**
 * 📘 Lab 03: Chaining Avanzado
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

console.log('=== Lab 03: Chaining Avanzado ===\n');

// ============================================
// PASO 1: Chaining Básico
// ============================================
console.log('--- Paso 1: Chaining básico ---');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Cada método retorna un array → podemos encadenar
// Descomenta las siguientes líneas:
// const basicChain = numbers
//   .filter(n => n > 3)      // Solo mayores que 3
//   .map(n => n * 2)         // Duplicar cada uno
//   .slice(0, 3);            // Tomar primeros 3

// console.log('Básico:', basicChain);
// Esperado: [8, 10, 12]

console.log('');

// ============================================
// PASO 2: Pipeline de Datos
// ============================================
console.log('--- Paso 2: Pipeline de usuarios ---');

const users = [
  { name: 'Ana', age: 25, active: true, score: 85 },
  { name: 'Luis', age: 17, active: true, score: 92 },
  { name: 'María', age: 30, active: false, score: 78 },
  { name: 'Carlos', age: 22, active: true, score: 95 },
  { name: 'Pedro', age: 19, active: true, score: 70 },
];

// Pipeline: activos → mayores de edad → nombres en mayúsculas
// Descomenta las siguientes líneas:
// const activeAdults = users
//   .filter(u => u.active)
//   .filter(u => u.age >= 18)
//   .map(u => u.name.toUpperCase());

// console.log('Adultos activos:', activeAdults);
// Esperado: ['ANA', 'CARLOS', 'PEDRO']

console.log('');

// ============================================
// PASO 3: Top N Elementos
// ============================================
console.log('--- Paso 3: Top N productos ---');

const products = [
  { name: 'Laptop', price: 1000, rating: 4.5 },
  { name: 'Mouse', price: 25, rating: 4.8 },
  { name: 'Keyboard', price: 75, rating: 4.2 },
  { name: 'Monitor', price: 300, rating: 4.9 },
  { name: 'Webcam', price: 50, rating: 3.8 },
];

// Top 3 más caros (usando spread para no mutar)
// Descomenta las siguientes líneas:
// const top3Expensive = [...products]
//   .sort((a, b) => b.price - a.price)
//   .slice(0, 3)
//   .map(p => `${p.name}: $${p.price}`);

// console.log('Top 3 caros:', top3Expensive);
// Esperado: ['Laptop: $1000', 'Monitor: $300', 'Keyboard: $75']

console.log('');

// ============================================
// PASO 4: Agregación con reduce()
// ============================================
console.log('--- Paso 4: Calcular total ---');

const orders = [
  { product: 'Laptop', price: 1000, qty: 2 },
  { product: 'Mouse', price: 25, qty: 5 },
  { product: 'Keyboard', price: 75, qty: 1 },
];

// Total de órdenes con cantidad > 1
// Descomenta las siguientes líneas:
// const total = orders
//   .filter(o => o.qty > 1)
//   .map(o => o.price * o.qty)
//   .reduce((sum, subtotal) => sum + subtotal, 0);

// console.log('Total (qty > 1):', total);
// Esperado: 2125 (1000*2 + 25*5)

console.log('');

// ============================================
// PASO 5: Extraer Funciones
// ============================================
console.log('--- Paso 5: Funciones extraídas ---');

// Funciones con nombres descriptivos
const isActive = user => user.active;
const isAdult = user => user.age >= 18;
const getName = user => user.name;
const byScoreDesc = (a, b) => b.score - a.score;

// El código se lee como prosa
// Descomenta las siguientes líneas:
// const topActiveAdults = users
//   .filter(isActive)
//   .filter(isAdult)
//   .sort(byScoreDesc)
//   .map(getName);

// console.log('Con funciones extraídas:', topActiveAdults);
// Esperado: ['Carlos', 'Ana', 'Pedro']

console.log('');

// ============================================
// PASO 6: Chaining con flatMap()
// ============================================
console.log('--- Paso 6: flatMap en cadena ---');

const departments = [
  { name: 'IT', employees: ['Ana', 'Luis', 'Carlos'] },
  { name: 'HR', employees: ['María'] },
  { name: 'Sales', employees: ['Pedro', 'Laura'] },
];

// Departamentos con más de 1 empleado → todos los nombres
// Descomenta las siguientes líneas:
// const fromLargeDepts = departments
//   .filter(d => d.employees.length > 1)
//   .flatMap(d => d.employees)
//   .map(name => name.toUpperCase());

// console.log('De dptos grandes:', fromLargeDepts);
// Esperado: ['ANA', 'LUIS', 'CARLOS', 'PEDRO', 'LAURA']

console.log('');

// ============================================
// PASO 7: Buscar y Validar
// ============================================
console.log('--- Paso 7: Búsqueda en cadena ---');

const inventory = [
  { id: 1, name: 'Laptop Pro', inStock: true, qty: 5 },
  { id: 2, name: 'Phone Basic', inStock: false, qty: 0 },
  { id: 3, name: 'Tablet Mini', inStock: true, qty: 3 },
];

// ¿Hay algún producto disponible que contenga "Pro"?
// Descomenta las siguientes líneas:
// const hasProAvailable = inventory
//   .filter(p => p.inStock)
//   .filter(p => p.qty > 0)
//   .some(p => p.name.includes('Pro'));

// console.log('¿Hay Pro disponible?:', hasProAvailable);
// Esperado: true

console.log('');

// ============================================
// PASO 8: Transformación Compleja
// ============================================
console.log('--- Paso 8: Transformación compleja ---');

const rawData = [
  { name: 'ana garcia', score: 85, status: 'active' },
  { name: 'luis martinez', score: 92, status: 'inactive' },
  { name: 'maria lopez', score: 78, status: 'active' },
  { name: 'carlos ruiz', score: 95, status: 'active' },
];

// Función para capitalizar
const capitalize = str =>
  str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

// Pipeline completo
// Descomenta las siguientes líneas:
// const processed = rawData
//   .filter(d => d.status === 'active')
//   .map(d => ({
//     ...d,
//     name: capitalize(d.name),
//     grade: d.score >= 90 ? 'A' : d.score >= 80 ? 'B' : 'C'
//   }))
//   .sort((a, b) => b.score - a.score);

// console.log('Procesados:', processed);

console.log('');

// ============================================
// PASO 9: Estadísticas en una Cadena
// ============================================
console.log('--- Paso 9: Estadísticas ---');

const scores = [85, 92, 78, 95, 88, 72, 90];

// Calcular estadísticas en una pasada
// Descomenta las siguientes líneas:
// const stats = [...scores]
//   .sort((a, b) => a - b)
//   .reduce(
//     (acc, score, i, arr) => ({
//       min: i === 0 ? score : acc.min,
//       max: score,
//       sum: acc.sum + score,
//       count: i + 1,
//       avg: Math.round((acc.sum + score) / (i + 1) * 10) / 10
//     }),
//     { sum: 0 }
//   );

// console.log('Estadísticas:', stats);

console.log('');

// ============================================
// PASO 10: Pipeline Reutilizable
// ============================================
console.log('--- Paso 10: Pipeline reutilizable ---');

// Función que retorna un pipeline configurado
const createTopPerformers =
  (limit = 3) =>
  users =>
    users
      .filter(u => u.active)
      .filter(u => u.age >= 18)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(u => ({ name: u.name, score: u.score }));

// Crear pipelines específicos
// Descomenta las siguientes líneas:
// const getTop2 = createTopPerformers(2);
// const getTop3 = createTopPerformers(3);

// console.log('Top 2:', getTop2(users));
// console.log('Top 3:', getTop3(users));

console.log('');
console.log('✅ Lab completado.');
