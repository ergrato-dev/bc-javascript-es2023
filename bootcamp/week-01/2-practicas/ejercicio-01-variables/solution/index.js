/*
 * Ejercicio 01: Variables Modernas - SOLUCIÓN
 * Objetivo: Dominar const y let, comprender block scope
 */

console.log('=== Ejercicio 01: Variables Modernas - SOLUCIÓN ===\n');

// ============================================
// PARTE 1: Conversión de var a const/let
// ============================================
console.log('--- Parte 1: Conversión de var a const/let ---');

// ✅ SOLUCIÓN: Usar const para valores que no se reasignan
const appName = 'MyApp';
const version = '1.0.0';
const maxUsers = 100;

// ✅ SOLUCIÓN: Usar let para valores que sí se reasignan
let counter = 0;
counter = counter + 1;
counter = counter + 1;

// ✅ SOLUCIÓN: const para objetos (el contenido puede cambiar)
const user = {
  name: 'Ana',
  age: 25,
};
user.age = 26; // Modificar propiedad es OK con const

console.log('App Name:', appName);
console.log('Version:', version);
console.log('Max Users:', maxUsers);
console.log('Counter:', counter);
console.log('User:', user);
console.log('');

// ============================================
// PARTE 2: Block Scope
// ============================================
console.log('--- Parte 2: Block Scope ---');

// ✅ SOLUCIÓN: Variable global
const globalMessage = 'I am global';

if (true) {
  // ✅ SOLUCIÓN: Variable de bloque
  const blockMessage = 'I only exist in this block';

  console.log('Inside block - Global:', globalMessage); // ✅ Accesible
  console.log('Inside block - Block:', blockMessage); // ✅ Accesible
}

console.log('Outside block - Global:', globalMessage); // ✅ Accesible
// console.log('Outside block - Block:', blockMessage); // ❌ ReferenceError
// blockMessage solo existe dentro del bloque if

console.log('');

// ============================================
// PARTE 3: Contador
// ============================================
console.log('--- Parte 3: Contador ---');

// ✅ SOLUCIÓN: Usar let porque el valor cambiará
let myCounter = 0;

// Incrementar 5 veces
for (let i = 0; i < 5; i++) {
  myCounter++;
}

console.log('Final counter value:', myCounter); // 5
console.log('');

// ============================================
// PARTE 4: Configuración
// ============================================
console.log('--- Parte 4: Configuración ---');

// ✅ SOLUCIÓN: const para el objeto
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  maxRetries: 3,
};

// ✅ Modificar propiedades es OK
config.timeout = 3000;

// ✅ Agregar nuevas propiedades es OK
config.debug = true;

console.log('Config:', config);
// {
//   apiUrl: 'https://api.example.com',
//   timeout: 3000,
//   maxRetries: 3,
//   debug: true
// }

// ❌ Reasignar el objeto completo da error
// config = {};  // TypeError: Assignment to constant variable

console.log('');

// ============================================
// PARTE 5: Loop con let
// ============================================
console.log('--- Parte 5: Loop con let ---');

// ✅ SOLUCIÓN: Usar let porque i cambia en cada iteración
for (let i = 1; i <= 5; i++) {
  console.log('Number:', i);
}

// Explicación:
// - Usamos let porque i se reasigna en cada iteración (i++)
// - No podemos usar const porque daría error al intentar reasignar
// - let crea una nueva variable i en cada iteración del loop

console.log('');

// ============================================
// PARTE 6: Desafío Extra
// ============================================
console.log('--- Parte 6: Desafío Extra ---');

// ✅ SOLUCIÓN: const con array
const numbers = [1, 2, 3];
numbers.push(4);
numbers.push(5);
numbers.push(6);

console.log('Numbers:', numbers); // [1, 2, 3, 4, 5, 6]

// Explicación:
// const evita reasignar la REFERENCIA del array, pero permite modificar su CONTENIDO
// numbers = []; ❌ Error (reasignación)
// numbers.push(7); ✅ OK (modificación de contenido)

// ✅ SOLUCIÓN: const con objeto
const person = {
  name: 'Carlos',
  age: 30,
};

// Modificar propiedades es OK
person.age = 31;
person.city = 'Madrid';
person.hobbies = ['reading', 'coding'];

console.log('Person:', person);
// {
//   name: 'Carlos',
//   age: 31,
//   city: 'Madrid',
//   hobbies: ['reading', 'coding']
// }

// Intentar reasignar da error
// person = {};  // ❌ TypeError: Assignment to constant variable

console.log('');

// ============================================
// RESUMEN DE REGLAS
// ============================================
console.log('--- Resumen de Reglas ---');
console.log('1. Usa const por defecto');
console.log('2. Usa let solo cuando necesites reasignar');
console.log('3. Nunca uses var');
console.log(
  '4. const con objetos/arrays: contenido modificable, referencia inmutable'
);
console.log('5. let en loops cuando la variable cambia');
console.log('');

console.log('=== Ejercicio Completado ===');

// ============================================
// PUNTOS CLAVE APRENDIDOS
// ============================================
/*
 * ✅ const vs let:
 *    - const: No se puede reasignar (usa por defecto)
 *    - let: Sí se puede reasignar (usa solo cuando necesario)
 *
 * ✅ Block Scope:
 *    - Variables declaradas con let/const solo existen en su bloque {}
 *    - No se escapan del bloque como var
 *
 * ✅ const con objetos/arrays:
 *    - La referencia es constante (no puedes reasignar)
 *    - El contenido es mutable (puedes modificar propiedades)
 *
 * ✅ Mejores prácticas:
 *    - const por defecto
 *    - let cuando necesites reasignar
 *    - var nunca
 */
