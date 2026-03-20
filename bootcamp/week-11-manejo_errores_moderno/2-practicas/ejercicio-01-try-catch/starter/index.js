/**
 * 🛡️ Ejercicio 01: try...catch...finally
 * =====================================
 * Aprende a manejar errores con la estructura try...catch...finally.
 *
 * Instrucciones:
 * 1. Lee cada sección
 * 2. Descomenta el código indicado
 * 3. Ejecuta: node index.js
 * 4. Observa el resultado
 */

console.log('='.repeat(60));
console.log('🛡️ Ejercicio 01: try...catch...finally');
console.log('='.repeat(60));

// ============================================
// PASO 1: Catch Básico
// ============================================
console.log('\n--- Paso 1: Catch Básico ---');

// El bloque catch captura errores que ocurren en try
// Descomenta las siguientes líneas:

// try {
//   // JSON.parse lanza SyntaxError si el JSON es inválido
//   const data = JSON.parse('{ invalid json }');
//   console.log('Parsed:', data);
// } catch (error) {
//   console.log('❌ Error caught!');
//   console.log('Message:', error.message);
// }
//
// console.log('✅ Program continues after catch');

console.log('');

// ============================================
// PASO 2: Propiedades del Error
// ============================================
console.log('\n--- Paso 2: Propiedades del Error ---');

// Todo Error tiene: name, message, stack
// Descomenta las siguientes líneas:

// try {
//   throw new Error('This is a test error');
// } catch (error) {
//   console.log('Name:', error.name);
//   console.log('Message:', error.message);
//   console.log('Stack (first 200 chars):');
//   console.log(error.stack.slice(0, 200) + '...');
// }

console.log('');

// ============================================
// PASO 3: El Bloque finally
// ============================================
console.log('\n--- Paso 3: El Bloque finally ---');

// finally SIEMPRE se ejecuta, haya error o no
// Descomenta las siguientes líneas:

// // Caso 1: Sin error
// console.log('Caso 1: Sin error');
// try {
//   console.log('  1. Trying...');
//   const result = 10 + 5;
//   console.log('  2. Success:', result);
// } catch (error) {
//   console.log('  3. Error caught');
// } finally {
//   console.log('  4. Finally runs! (cleanup here)');
// }
//
// // Caso 2: Con error
// console.log('\nCaso 2: Con error');
// try {
//   console.log('  1. Trying...');
//   JSON.parse('bad');
//   console.log('  2. This never runs');
// } catch (error) {
//   console.log('  3. Error caught:', error.message);
// } finally {
//   console.log('  4. Finally STILL runs!');
// }

console.log('');

// ============================================
// PASO 4: Tipos de Error Nativos
// ============================================
console.log('\n--- Paso 4: Tipos de Error Nativos ---');

// JavaScript tiene varios tipos de error built-in
// Descomenta las siguientes líneas:

// // SyntaxError - JSON inválido
// const testSyntaxError = () => {
//   try {
//     JSON.parse('not valid json');
//   } catch (error) {
//     console.log('SyntaxError:', error.name, '-', error.message.slice(0, 50));
//   }
// };
//
// // TypeError - Operación en null/undefined
// const testTypeError = () => {
//   try {
//     const obj = null;
//     obj.toString();
//   } catch (error) {
//     console.log('TypeError:', error.name, '-', error.message);
//   }
// };
//
// // RangeError - Valor fuera de rango
// const testRangeError = () => {
//   try {
//     const arr = new Array(-1); // Negative array length
//   } catch (error) {
//     console.log('RangeError:', error.name, '-', error.message);
//   }
// };
//
// testSyntaxError();
// testTypeError();
// testRangeError();

console.log('');

// ============================================
// PASO 5: Lanzar Errores (throw)
// ============================================
console.log('\n--- Paso 5: Lanzar Errores (throw) ---');

// Usa throw para lanzar tus propios errores
// Descomenta las siguientes líneas:

// const divide = (a, b) => {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new TypeError('Both arguments must be numbers');
//   }
//   if (b === 0) {
//     throw new RangeError('Cannot divide by zero');
//   }
//   return a / b;
// };
//
// // Test valid division
// try {
//   console.log('10 / 2 =', divide(10, 2));
// } catch (error) {
//   console.log('Error:', error.message);
// }
//
// // Test division by zero
// try {
//   console.log('10 / 0 =', divide(10, 0));
// } catch (error) {
//   console.log('Error:', error.message);
// }
//
// // Test invalid type
// try {
//   console.log('"a" / 2 =', divide('a', 2));
// } catch (error) {
//   console.log('Error:', error.message);
// }

console.log('');

// ============================================
// PASO 6: Identificar Tipos con instanceof
// ============================================
console.log('\n--- Paso 6: Identificar Tipos con instanceof ---');

// Usa instanceof para manejar diferentes tipos de error
// Descomenta las siguientes líneas:

// const handleError = error => {
//   if (error instanceof SyntaxError) {
//     return '📝 Syntax error - check your JSON format';
//   } else if (error instanceof TypeError) {
//     return '🔧 Type error - check variable types';
//   } else if (error instanceof RangeError) {
//     return '📊 Range error - value out of bounds';
//   } else {
//     return '❓ Unknown error - ' + error.message;
//   }
// };
//
// // Test different errors
// const errors = [
//   new SyntaxError('Unexpected token'),
//   new TypeError('Cannot read property'),
//   new RangeError('Invalid array length'),
//   new Error('Generic error')
// ];
//
// errors.forEach(error => {
//   console.log(`${error.name}: ${handleError(error)}`);
// });

console.log('');

// ============================================
// PASO 7: Re-throw de Errores
// ============================================
console.log('\n--- Paso 7: Re-throw de Errores ---');

// A veces capturas un error, haces algo, y lo vuelves a lanzar
// Descomenta las siguientes líneas:

// const processData = jsonString => {
//   try {
//     return JSON.parse(jsonString);
//   } catch (error) {
//     // Log the error for debugging
//     console.log('⚠️ Logging error:', error.message);
//
//     // Re-throw with more context
//     throw new Error(`Failed to parse data: ${error.message}`);
//   }
// };
//
// // Outer try-catch catches the re-thrown error
// try {
//   const data = processData('{ bad json }');
// } catch (error) {
//   console.log('❌ Final handler:', error.message);
// }
//
// console.log('✅ Program continues');

console.log('');

// ============================================
// 🎯 DESAFÍO EXTRA
// ============================================
console.log('\n--- 🎯 Desafío Extra ---');

// Crea una función safeParseJSON que:
// 1. Intente parsear JSON
// 2. Si falla, retorne un valor por defecto
// 3. Siempre loguee "Parse attempt complete" al final
// Descomenta y completa:

// const safeParseJSON = (jsonString, defaultValue = null) => {
//   // Tu código aquí
//   // Usa try...catch...finally
// };
//
// console.log('Valid:', safeParseJSON('{"name": "John"}'));
// console.log('Invalid:', safeParseJSON('bad json', { error: true }));

console.log('');
console.log('='.repeat(60));
console.log('✅ Ejercicio 01 completado');
console.log('='.repeat(60));
