/**
 * 📘 Lab 02: Métodos Estáticos
 *
 * Este es un lab guiado. Descomenta el código en cada paso
 * para aprender métodos estáticos en clases ES2023.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Métodos Estáticos Básicos
// ============================================
console.log('--- Paso 1: Métodos Estáticos Básicos ---');

// Los métodos estáticos se llaman en la clase, no en instancias
// Se definen con la palabra clave static
// Descomenta las siguientes líneas:

// class MathUtils {
//   static add(a, b) {
//     return a + b;
//   }
//
//   static multiply(a, b) {
//     return a * b;
//   }
//
//   static isEven(n) {
//     return n % 2 === 0;
//   }
// }
//
// // Se llaman directamente en la clase
// console.log('5 + 3 =', MathUtils.add(5, 3));
// console.log('4 × 7 =', MathUtils.multiply(4, 7));
// console.log('10 es par:', MathUtils.isEven(10));
// console.log('7 es par:', MathUtils.isEven(7));

console.log('');

// ============================================
// PASO 2: Clase Validator
// ============================================
console.log('--- Paso 2: Clase Validator ---');

// Una clase de utilidad con validaciones comunes
// Descomenta las siguientes líneas:

// class Validator {
//   static isEmail(value) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(value);
//   }
//
//   static isURL(value) {
//     try {
//       new URL(value);
//       return true;
//     } catch {
//       return false;
//     }
//   }
//
//   static isStrongPassword(value) {
//     // Mínimo 8 caracteres, mayúscula, minúscula, número
//     const hasLength = value.length >= 8;
//     const hasUpper = /[A-Z]/.test(value);
//     const hasLower = /[a-z]/.test(value);
//     const hasNumber = /[0-9]/.test(value);
//     return hasLength && hasUpper && hasLower && hasNumber;
//   }
//
//   static isEmpty(value) {
//     if (value === null || value === undefined) return true;
//     if (typeof value === 'string') return value.trim() === '';
//     if (Array.isArray(value)) return value.length === 0;
//     if (typeof value === 'object') return Object.keys(value).length === 0;
//     return false;
//   }
// }
//
// console.log('Email válido:', Validator.isEmail('test@example.com'));
// console.log('Email inválido:', Validator.isEmail('not-an-email'));
// console.log('URL válida:', Validator.isURL('https://google.com'));
// console.log('Password fuerte:', Validator.isStrongPassword('MyPass123'));
// console.log('Password débil:', Validator.isStrongPassword('weak'));
// console.log('String vacío:', Validator.isEmpty(''));
// console.log('Array vacío:', Validator.isEmpty([]));

console.log('');

// ============================================
// PASO 3: Propiedades Estáticas Privadas
// ============================================
console.log('--- Paso 3: Propiedades Estáticas Privadas ---');

// Las propiedades estáticas privadas usan #
// Solo accesibles dentro de la clase
// Descomenta las siguientes líneas:

// class IdGenerator {
//   static #counter = 0;
//
//   static sequential() {
//     IdGenerator.#counter++;
//     return `ID-${String(IdGenerator.#counter).padStart(5, '0')}`;
//   }
//
//   static uuid() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
//       const r = Math.random() * 16 | 0;
//       const v = c === 'x' ? r : (r & 0x3 | 0x8);
//       return v.toString(16);
//     });
//   }
//
//   static reset() {
//     IdGenerator.#counter = 0;
//   }
//
//   static getCount() {
//     return IdGenerator.#counter;
//   }
// }
//
// console.log('ID 1:', IdGenerator.sequential());
// console.log('ID 2:', IdGenerator.sequential());
// console.log('ID 3:', IdGenerator.sequential());
// console.log('UUID:', IdGenerator.uuid());
// console.log('Contador:', IdGenerator.getCount());
// IdGenerator.reset();
// console.log('Después de reset:', IdGenerator.sequential());

console.log('');

// ============================================
// PASO 4: Clase DateUtils
// ============================================
console.log('--- Paso 4: Clase DateUtils ---');

// Utilidades para manejo de fechas
// Descomenta las siguientes líneas:

// class DateUtils {
//   static format(date, pattern = 'YYYY-MM-DD') {
//     const d = new Date(date);
//     const year = d.getFullYear();
//     const month = String(d.getMonth() + 1).padStart(2, '0');
//     const day = String(d.getDate()).padStart(2, '0');
//
//     return pattern
//       .replace('YYYY', year)
//       .replace('MM', month)
//       .replace('DD', day);
//   }
//
//   static isToday(date) {
//     const today = new Date();
//     const d = new Date(date);
//     return d.toDateString() === today.toDateString();
//   }
//
//   static isPast(date) {
//     return new Date(date) < new Date();
//   }
//
//   static isFuture(date) {
//     return new Date(date) > new Date();
//   }
//
//   static daysBetween(date1, date2) {
//     const d1 = new Date(date1);
//     const d2 = new Date(date2);
//     const diffTime = Math.abs(d2 - d1);
//     return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//   }
//
//   static addDays(date, days) {
//     const result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result;
//   }
// }
//
// const today = new Date();
// const nextWeek = DateUtils.addDays(today, 7);
// const lastMonth = DateUtils.addDays(today, -30);
//
// console.log('Hoy formateado:', DateUtils.format(today));
// console.log('Hoy formato largo:', DateUtils.format(today, 'DD/MM/YYYY'));
// console.log('¿Es hoy?:', DateUtils.isToday(today));
// console.log('Próxima semana:', DateUtils.format(nextWeek));
// console.log('¿Es futuro?:', DateUtils.isFuture(nextWeek));
// console.log('Días entre fechas:', DateUtils.daysBetween(today, nextWeek));

console.log('');

// ============================================
// PASO 5: Contador por Categoría
// ============================================
console.log('--- Paso 5: Contador por Categoría ---');

// Map estático para múltiples contadores
// Descomenta las siguientes líneas:

// class CategoryCounter {
//   static #counters = new Map();
//
//   static next(category = 'default') {
//     const current = CategoryCounter.#counters.get(category) || 0;
//     const next = current + 1;
//     CategoryCounter.#counters.set(category, next);
//     return `${category.toUpperCase()}-${String(next).padStart(4, '0')}`;
//   }
//
//   static getCount(category) {
//     return CategoryCounter.#counters.get(category) || 0;
//   }
//
//   static reset(category = null) {
//     if (category) {
//       CategoryCounter.#counters.delete(category);
//     } else {
//       CategoryCounter.#counters.clear();
//     }
//   }
//
//   static getAll() {
//     return Object.fromEntries(CategoryCounter.#counters);
//   }
// }
//
// console.log(CategoryCounter.next('user'));
// console.log(CategoryCounter.next('user'));
// console.log(CategoryCounter.next('order'));
// console.log(CategoryCounter.next('order'));
// console.log(CategoryCounter.next('product'));
// console.log('Todos los contadores:', CategoryCounter.getAll());

console.log('');

// ============================================
// PASO 6: Factory Pattern con Estáticos
// ============================================
console.log('--- Paso 6: Factory Pattern ---');

// Métodos estáticos como factories para crear instancias
// Descomenta las siguientes líneas:

// class User {
//   constructor(name, email, role, createdAt) {
//     this.name = name;
//     this.email = email;
//     this.role = role;
//     this.createdAt = createdAt;
//   }
//
//   // Factory methods
//   static createAdmin(name, email) {
//     return new User(name, email, 'admin', new Date());
//   }
//
//   static createGuest() {
//     return new User('Guest', 'guest@temp.com', 'guest', new Date());
//   }
//
//   static fromJSON(json) {
//     const data = typeof json === 'string' ? JSON.parse(json) : json;
//     return new User(data.name, data.email, data.role, new Date(data.createdAt));
//   }
//
//   getInfo() {
//     return `${this.name} (${this.role}) - ${this.email}`;
//   }
// }
//
// const admin = User.createAdmin('María', 'maria@admin.com');
// const guest = User.createGuest();
// const fromData = User.fromJSON({ name: 'Carlos', email: 'carlos@mail.com', role: 'user' });
//
// console.log('Admin:', admin.getInfo());
// console.log('Guest:', guest.getInfo());
// console.log('From JSON:', fromData.getInfo());

console.log('');

// ============================================
// ✅ EJERCICIO COMPLETADO
// ============================================
console.log('🎉 ¡Excelente! Has completado el lab de métodos estáticos.');
console.log('Revisa cada paso y experimenta modificando los valores.');
