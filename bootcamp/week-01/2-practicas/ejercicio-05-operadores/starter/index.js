/**
 * 📘 Ejercicio 05: Operadores Modernos
 *
 * Este es un ejercicio guiado. Descomenta el código
 * en cada sección para aprender los operadores modernos.
 *
 * Ejecuta con: node index.js
 */

// ============================================
// PASO 1: Optional Chaining Básico
// ============================================
console.log('--- Paso 1: Optional Chaining Básico ---');

// Datos de ejemplo
const user = {
  name: 'Ana',
  contact: {
    email: 'ana@email.com',
    // phone no existe
  },
  // address no existe
};

// Acceso seguro con ?.
// Descomenta las siguientes líneas:
// const email = user?.contact?.email;
// const phone = user?.contact?.phone;
// const street = user?.address?.street;
// console.log('Email:', email);
// console.log('Phone:', phone);
// console.log('Street:', street);

console.log('');

// ============================================
// PASO 2: Optional Chaining con Arrays/Funciones
// ============================================
console.log('--- Paso 2: Optional Chaining con Arrays/Funciones ---');

const users = [{ name: 'Ana', process: () => 'Procesado!' }, { name: 'Bob' }];

// Con arrays e índices
// Descomenta las siguientes líneas:
// const firstName = users?.[0]?.name;
// const tenthUser = users?.[9]?.name;
// console.log('Primer usuario:', firstName);
// console.log('Usuario inexistente:', tenthUser);

// Con funciones/métodos
// const result = users?.[0]?.process?.();
// console.log('Método ejecutado:', result);

console.log('');

// ============================================
// PASO 3: Nullish Coalescing vs OR
// ============================================
console.log('--- Paso 3: Nullish Coalescing vs OR ---');

// Valores que son "falsy" pero válidos
const zero = 0;
const emptyString = '';

// || considera TODOS los falsy (0, '', false, null, undefined)
// Descomenta las siguientes líneas:
// const withOr1 = zero || 'default';
// const withOr2 = emptyString || 'default';
// console.log(`Con || : 0 → ${withOr1}, '' → ${withOr2}`);

// ?? solo considera null y undefined
// const withNullish1 = zero ?? 'default';
// const withNullish2 = emptyString ?? 'default';
// console.log(`Con ?? : 0 → ${withNullish1}, '' → (${withNullish2 || 'vacío'})`);

console.log('');

// ============================================
// PASO 4: Combinando ?. y ??
// ============================================
console.log('--- Paso 4: Combinando ?. y ?? ---');

const config = {
  settings: {
    theme: 'dark',
    fontSize: 0, // 0 es un valor válido
    // language no existe
  },
};

// Patrón común: acceso seguro + valor por defecto
// Descomenta las siguientes líneas:
// const theme = config?.settings?.theme ?? 'light';
// const fontSize = config?.settings?.fontSize ?? 16;
// const language = config?.settings?.language ?? 'es';
// console.log('Theme:', theme);
// console.log('Font Size:', fontSize);
// console.log('Language:', language);

console.log('');

// ============================================
// PASO 5: Logical Assignment ??=
// ============================================
console.log('--- Paso 5: Logical Assignment ??= ---');

// ??= asigna SOLO si el valor es null o undefined
// Descomenta las siguientes líneas:
// const options = {};
// options.timeout ??= 3000;    // undefined → asigna
// options.retries ??= 3;       // undefined → asigna
// console.log('Options:', options);

// const options2 = { timeout: 0 };
// options2.timeout ??= 3000;   // 0 no es null/undefined → NO asigna
// console.log('Options2 (timeout era 0):', options2);

console.log('');

// ============================================
// PASO 6: Logical Assignment ||= y &&=
// ============================================
console.log('--- Paso 6: Logical Assignment ||= y &&= ---');

// ||= asigna si el valor es falsy
// Descomenta las siguientes líneas:
// let name = '';
// name ||= 'Anonymous';
// console.log('Name después de ||=:', name);

// &&= asigna si el valor es truthy
// let userObj = { name: 'Ana' };
// userObj &&= { ...userObj, active: true };
// console.log('User después de &&=:', userObj);

console.log('');

// ============================================
// PASO 7: Numeric Separators
// ============================================
console.log('--- Paso 7: Numeric Separators ---');

// Números grandes más legibles con _
// Descomenta las siguientes líneas:
// const billion = 1_000_000_000;
// const price = 1_299.99;
// const binary = 0b1010_0001;
// const hex = 0xFF_FF_FF;

// console.log('Billion:', billion);
// console.log('Price:', price);
// console.log('Binary:', binary);
// console.log('Hex:', hex);

console.log('');

// ============================================
// PASO 8: Caso Práctico - API Response
// ============================================
console.log('--- Paso 8: Caso Práctico - API Response ---');

// Simular respuesta de API con datos parciales
const apiResponse = {
  user: {
    id: 1,
    profile: {
      name: 'Carlos',
      followers: 0, // 0 es válido
      // bio no existe
      // avatar no existe
    },
  },
};

// Extraer datos de forma segura con defaults
// Descomenta las siguientes líneas:
// const userName = apiResponse?.user?.profile?.name ?? 'Usuario';
// const followers = apiResponse?.user?.profile?.followers ?? 0;
// const bio = apiResponse?.user?.profile?.bio ?? 'Sin biografía';
// const avatar = apiResponse?.user?.profile?.avatar ?? '/default-avatar.png';

// console.log('Nombre:', userName);
// console.log('Followers:', followers);
// console.log('Bio:', bio);
// console.log('Avatar:', avatar);

console.log('');
console.log('✅ Ejercicio completado');
