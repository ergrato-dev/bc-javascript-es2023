// PRÁCTICA 02: Bubbling y Capturing (SOLUCIÓN)

console.log('--- Paso 1: Capturing ---');
const logCapture = () => console.log('Parent capture');
logCapture();

console.log('');
console.log('--- Paso 2: Target ---');
const logTarget = () => console.log('Target click');
logTarget();

console.log('');
console.log('--- Paso 3: Bubbling ---');
const logBubble = () => console.log('Parent bubble');
logBubble();

console.log('');
console.log('=== Fin ===');
