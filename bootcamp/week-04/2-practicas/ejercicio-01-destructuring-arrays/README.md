# 🏋️ Ejercicio 01: Destructuring de Arrays

## 🎯 Objetivo

Practicar la extracción de valores de arrays usando destructuring ES6+.

---

## 📋 Instrucciones

Completa los ejercicios en `starter/index.js`. Cada ejercicio tiene instrucciones específicas y tests que verifican tu solución.

---

## 🧪 Ejercicios

### Ejercicio 1.1: Extracción Básica
Extrae los primeros tres elementos del array en variables separadas.

### Ejercicio 1.2: Skip de Elementos
Extrae solo el primer y tercer elemento, omitiendo el segundo.

### Ejercicio 1.3: Rest Pattern
Separa el primer elemento del resto del array.

### Ejercicio 1.4: Valores por Defecto
Extrae elementos con valores por defecto para posiciones que no existen.

### Ejercicio 1.5: Swap de Variables
Intercambia los valores de dos variables usando destructuring.

### Ejercicio 1.6: Destructuring Anidado
Extrae valores de arrays dentro de arrays.

### Ejercicio 1.7: En Parámetros de Función
Crea una función que reciba un array y use destructuring en sus parámetros.

### Ejercicio 1.8: Retorno de Funciones
Usa destructuring para capturar múltiples valores retornados.

---

## ⏱️ Tiempo Estimado

40 minutos

---

## 🎯 Criterios de Éxito

- [ ] Todos los ejercicios completados
- [ ] Código ejecuta sin errores
- [ ] Uso correcto de sintaxis de destructuring
- [ ] No usar índices directos (array[0]) donde se pide destructuring

---

## 💡 Pistas

1. Usa comas para saltar elementos: `const [a, , c] = arr`
2. Rest siempre va al final: `const [first, ...rest] = arr`
3. Defaults se aplican con `=`: `const [a = 'default'] = arr`

---

## 🔗 Recursos

- [Teoría: Destructuring Arrays](../../1-teoria/01-destructuring-arrays.md)
- [MDN: Destructuring](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
