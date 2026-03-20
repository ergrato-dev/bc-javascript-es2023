# 📦 Ejercicio 04: Destructuring

> **📝 Este ejercicio NO se entrega**. Es material de práctica para prepararte para el [Proyecto Final](../../3-proyecto/README.md), que es el único entregable obligatorio.

## 🎯 Objetivo

Dominar el destructuring de objetos y arrays para extraer datos de forma concisa y elegante.

## 📋 Descripción

Este ejercicio guiado te enseña a:

- Extraer propiedades de objetos
- Extraer elementos de arrays
- Usar valores por defecto
- Renombrar variables
- Destructuring anidado
- Rest operator en destructuring
- Destructuring en parámetros de funciones

## 🚀 Instrucciones

### 1. Abre el archivo

Navega a `starter/index.js`

### 2. Ejecuta el archivo

```bash
node starter/index.js
```

### 3. Sigue los pasos

Descomenta el código en cada sección (PASO 1-9) y observa los resultados.

## 📚 Conceptos Cubiertos

| Paso | Concepto | Descripción |
|------|----------|-------------|
| 1 | Objetos Básico | Extraer propiedades |
| 2 | Arrays Básico | Extraer por posición |
| 3 | Valores por Defecto | Fallback para undefined |
| 4 | Renombrar | Usar nombres diferentes |
| 5 | Anidado | Objetos dentro de objetos |
| 6 | Rest (...) | Capturar el resto |
| 7 | En Funciones | Parámetros con destructuring |
| 8 | Swap | Intercambiar variables |
| 9 | Caso Práctico | Procesar API response |

## 💡 Referencia Rápida

```javascript
// Objetos
const { name, age } = user;
const { name: userName } = user;           // Renombrar
const { role = 'guest' } = user;           // Default
const { address: { city } } = user;        // Anidado

// Arrays
const [first, second] = array;
const [first, , third] = array;            // Saltar
const [head, ...tail] = array;             // Rest

// En funciones
const fn = ({ name, age }) => { };
const fn = ([x, y]) => { };
```

## ✅ Checklist de Aprendizaje

- [ ] Puedo extraer propiedades de objetos
- [ ] Puedo extraer elementos de arrays por posición
- [ ] Sé usar valores por defecto
- [ ] Puedo renombrar variables al destructurar
- [ ] Entiendo el destructuring anidado
- [ ] Puedo usar rest (...) para capturar el resto
- [ ] Uso destructuring en parámetros de funciones

## 🔗 Recursos

- [MDN - Destructuring assignment](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [JavaScript.info - Destructuring](https://javascript.info/destructuring-assignment)

---

⬅️ [Ejercicio Anterior](../ejercicio-03-arrows/README.md) | [Volver a Prácticas](../README.md) ➡️
