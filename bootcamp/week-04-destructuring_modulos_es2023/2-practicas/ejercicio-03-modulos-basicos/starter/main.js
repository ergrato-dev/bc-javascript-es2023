/**
 * 📘 Ejercicio 03: Módulos Básicos
 *
 * Archivo: main.js (Punto de entrada)
 *
 * Este es un ejercicio guiado. Descomenta el código para
 * aprender a importar desde otros módulos.
 */

// ============================================
// PASO 1: Importar desde el Barrel (math)
// ============================================

// Importamos funciones matemáticas del barrel utils/index.js
// Descomenta la siguiente línea:

// import { sum, multiply, PI } from './utils/index.js';

// ============================================
// PASO 2: Importar desde el Barrel (strings)
// ============================================

// También podemos importar las funciones de strings
// Descomenta la siguiente línea:

// import { capitalize, truncate } from './utils/index.js';

// ============================================
// PASO 3: Importar Default Export
// ============================================

// Los default exports se importan SIN llaves
// Descomenta la siguiente línea:

// import config from './config.js';

// ============================================
// Funciones de prueba
// ============================================

const testMath = () => {
  const output = document.getElementById('math-output');
  try {
    // Estas líneas funcionarán cuando descomentes los imports
    const results = [
      `PI = ${PI}`,
      `sum(5, 3) = ${sum(5, 3)}`,
      `multiply(4, 7) = ${multiply(4, 7)}`,
    ];
    output.innerHTML = results.join('<br>');
    output.className = 'output success';
  } catch (error) {
    output.innerHTML = `Error: ${error.message}<br>¿Descomentaste los imports?`;
    output.className = 'output error';
  }
};

const testStrings = () => {
  const output = document.getElementById('string-output');
  try {
    // Estas líneas funcionarán cuando descomentes los imports
    const results = [
      `capitalize("hello") = "${capitalize('hello')}"`,
      `truncate("hello world", 5) = "${truncate('hello world', 5)}"`,
    ];
    output.innerHTML = results.join('<br>');
    output.className = 'output success';
  } catch (error) {
    output.innerHTML = `Error: ${error.message}<br>¿Descomentaste los imports?`;
    output.className = 'output error';
  }
};

const testConfig = () => {
  const output = document.getElementById('config-output');
  try {
    // Estas líneas funcionarán cuando descomentes el import
    const results = [
      `App: ${config.appName}`,
      `Version: ${config.version}`,
      `API URL: ${config.api.url}`,
    ];
    output.innerHTML = results.join('<br>');
    output.className = 'output success';
  } catch (error) {
    output.innerHTML = `Error: ${error.message}<br>¿Descomentaste el import de config?`;
    output.className = 'output error';
  }
};

const runAllTests = () => {
  testMath();
  testStrings();
  testConfig();

  const output = document.getElementById('full-output');
  output.innerHTML =
    '✅ Todos los tests ejecutados. Revisa cada sección arriba.';
  output.className = 'output success';
};

// Exponer funciones globalmente para los botones
window.testMath = testMath;
window.testStrings = testStrings;
window.testConfig = testConfig;
window.runAllTests = runAllTests;

console.log('🚀 main.js cargado. Descomenta los imports para que funcione.');
