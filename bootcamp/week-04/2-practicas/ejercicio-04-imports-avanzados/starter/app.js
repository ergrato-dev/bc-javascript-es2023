/**
 * 📘 Ejercicio 04: Imports Avanzados
 *
 * Archivo: app.js - Aplicación principal
 *
 * Este es un ejercicio guiado. Descomenta el código en cada paso
 * para aprender dynamic imports y carga de módulos bajo demanda.
 */

// ============================================
// PASO 1: Importar el Module Loader
// ============================================

// Importamos nuestro loader personalizado
// Descomenta la siguiente línea:

// import moduleLoader from './loader.js';

// Referencias al DOM (no modificar)
const calcBtn = document.getElementById('calc-btn');
const convBtn = document.getElementById('conv-btn');
const fmtBtn = document.getElementById('fmt-btn');
const showRegistryBtn = document.getElementById('show-registry');
const clearRegistryBtn = document.getElementById('clear-registry');

// ============================================
// PASO 2: Dynamic Import Básico
// ============================================
console.log('--- Paso 2: Dynamic Import Básico ---');

// import() retorna una Promise con el módulo
// Se ejecuta solo cuando se necesita (lazy loading)
// Descomenta el contenido del try/catch:

calcBtn.addEventListener('click', async () => {
  const output = document.getElementById('calc-output');
  const status = document.getElementById('calc-status');

  status.textContent = 'Estado: Cargando...';
  status.className = 'status loading';

  try {
    // Dynamic import - carga el módulo solo cuando se hace click
    // const calculator = await import('./features/calculator.js');
    //
    // const results = [
    //   `5 + 3 = ${calculator.add(5, 3)}`,
    //   `10 - 4 = ${calculator.subtract(10, 4)}`,
    //   `6 × 7 = ${calculator.multiply(6, 7)}`,
    //   `15 ÷ 3 = ${calculator.divide(15, 3)}`
    // ];
    //
    // output.innerHTML = results.join('<br>');

    output.innerHTML = 'Descomenta el código en app.js (Paso 2)';
    status.textContent = 'Estado: Esperando';
    status.className = 'status';
  } catch (error) {
    output.innerHTML = `Error: ${error.message}`;
    status.textContent = 'Estado: Error ✗';
    status.className = 'status error';
  }
});

// ============================================
// PASO 3: Dynamic Import con Destructuring
// ============================================
console.log('--- Paso 3: Dynamic Import con Destructuring ---');

// Podemos extraer funciones específicas al importar
// Descomenta el contenido del try/catch:

convBtn.addEventListener('click', async () => {
  const output = document.getElementById('conv-output');
  const status = document.getElementById('conv-status');

  status.textContent = 'Estado: Cargando...';
  status.className = 'status loading';

  try {
    // Destructuring del módulo importado
    // const { celsiusToFahrenheit, kmToMiles, kgToLbs } = await import('./features/converter.js');
    //
    // const results = [
    //   `25°C = ${celsiusToFahrenheit(25).toFixed(1)}°F`,
    //   `100 km = ${kmToMiles(100).toFixed(2)} miles`,
    //   `70 kg = ${kgToLbs(70).toFixed(2)} lbs`
    // ];
    //
    // output.innerHTML = results.join('<br>');
    // status.textContent = 'Estado: Cargado ✓';
    // status.className = 'status loaded';

    output.innerHTML = 'Descomenta el código en app.js (Paso 3)';
    status.textContent = 'Estado: Esperando';
    status.className = 'status';
  } catch (error) {
    output.innerHTML = `Error: ${error.message}`;
    status.textContent = 'Estado: Error ✗';
    status.className = 'status error';
  }
});

// ============================================
// PASO 4: Carga con Module Loader (Cache)
// ============================================
console.log('--- Paso 4: Carga con Module Loader ---');

// Usamos nuestro moduleLoader para cachear módulos
// Descomenta el contenido del try/catch:

fmtBtn.addEventListener('click', async () => {
  const output = document.getElementById('fmt-output');
  const status = document.getElementById('fmt-status');

  status.textContent = 'Estado: Cargando...';
  status.className = 'status loading';

  try {
    // Usando el loader con cache
    // const formatter = await moduleLoader.load('formatter', './features/formatter.js');
    //
    // const results = [
    //   `Moneda: ${formatter.formatCurrency(1234.56)}`,
    //   `Fecha: ${formatter.formatDate(new Date())}`,
    //   `Número: ${formatter.formatNumber(Math.PI, 4)}`
    // ];
    //
    // output.innerHTML = results.join('<br>');
    // status.textContent = `Estado: ${moduleLoader.isLoaded('formatter') ? 'Desde cache ✓' : 'Cargado ✓'}`;
    // status.className = 'status loaded';

    output.innerHTML = 'Descomenta el código en app.js (Paso 4)';
    status.textContent = 'Estado: Esperando';
    status.className = 'status';
  } catch (error) {
    output.innerHTML = `Error: ${error.message}`;
    status.textContent = 'Estado: Error ✗';
    status.className = 'status error';
  }
});

// ============================================
// PASO 5: Preloading en Hover
// ============================================
console.log('--- Paso 5: Preloading en Hover ---');

// Precargamos módulos cuando el usuario hace hover
// Esto mejora la UX al anticipar la carga
// Descomenta los event listeners:

// const preloadCalculator = () => {
//   moduleLoader.load('calculator', './features/calculator.js');
// };
// calcBtn.parentElement.addEventListener('mouseenter', preloadCalculator);
//
// const preloadConverter = () => {
//   moduleLoader.load('converter', './features/converter.js');
// };
// convBtn.parentElement.addEventListener('mouseenter', preloadConverter);

// ============================================
// PASO 6: Mostrar y Limpiar Registry
// ============================================
console.log('--- Paso 6: Module Registry ---');

// Mostramos qué módulos están cargados
// Descomenta los event listeners:

// showRegistryBtn.addEventListener('click', () => {
//   const output = document.getElementById('registry-output');
//   const loaded = moduleLoader.getLoadedModules();
//
//   if (loaded.length === 0) {
//     output.innerHTML = 'No hay módulos cargados';
//   } else {
//     output.innerHTML = `<strong>Módulos en cache:</strong><br>${loaded.join('<br>')}`;
//   }
//   output.className = 'output';
// });
//
// clearRegistryBtn.addEventListener('click', () => {
//   moduleLoader.clearAll();
//   const output = document.getElementById('registry-output');
//   output.innerHTML = 'Cache limpiado ✓';
//   output.className = 'output success';
// });

console.log('🚀 app.js cargado. Descomenta el código paso a paso.');
