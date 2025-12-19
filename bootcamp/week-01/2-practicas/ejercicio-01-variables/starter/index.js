/*
 * Ejercicio 01: Variables Modernas
 * Objetivo: Dominar const y let, comprender block scope
 */

console.log('=== Ejercicio 01: Variables Modernas ===\n');

// ============================================
// PARTE 1: Conversión de var a const/let
// ============================================
console.log('--- Parte 1: Conversión de var a const/let ---');

// TODO: Convertir estas variables de var a const/let
// Decide cuáles deben ser const y cuáles let

var appName = 'MyApp';
var version = '1.0.0';
var maxUsers = 100;

var counter = 0;
counter = counter + 1;
counter = counter + 1;

var user = {
  name: 'Ana',
  age: 25,
};
user.age = 26;

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

// TODO: Declarar variable global
// const globalMessage = '...';

if (true) {
  // TODO: Declarar variable de bloque
  // const blockMessage = '...';
  // TODO: Mostrar ambas variables
  // console.log(globalMessage);
  // console.log(blockMessage);
}

// TODO: Intentar acceder a blockMessage aquí
// ¿Qué pasa? ¿Por qué?
// console.log(blockMessage);  // Descomenta esta línea

console.log('');

// ============================================
// PARTE 3: Contador
// ============================================
console.log('--- Parte 3: Contador ---');

// TODO: Declarar contador con let (inicia en 0)

// TODO: Incrementar 5 veces usando un loop

// TODO: Mostrar resultado final
console.log('Final counter value:' /* tu variable aquí */);
console.log('');

// ============================================
// PARTE 4: Configuración
// ============================================
console.log('--- Parte 4: Configuración ---');

// TODO: Crear objeto config con const
// Incluir: apiUrl, timeout, maxRetries

// TODO: Modificar timeout a 3000

// TODO: Agregar nueva propiedad debug: true

// TODO: Mostrar config completo
console.log('Config:' /* tu variable aquí */);

// TODO: Intentar reasignar el objeto completo
// ¿Qué error obtienes?
// config = {};  // Descomenta esta línea

console.log('');

// ============================================
// PARTE 5: Loop con let
// ============================================
console.log('--- Parte 5: Loop con let ---');

// TODO: Crear loop que muestre números del 1 al 5
// Usa let para la variable del loop
// Comenta por qué NO puedes usar const aquí

console.log('');

// ============================================
// PARTE 6: Desafío Extra
// ============================================
console.log('--- Parte 6: Desafío Extra ---');

// TODO: Crea un array de números con const
// Luego agrega 3 números más con push()
// ¿Por qué funciona si usaste const?

// TODO: Crea un objeto persona con const
// Modifica sus propiedades
// Intenta reasignar el objeto completo

console.log('');
console.log('=== Ejercicio Completado ===');
