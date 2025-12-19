# 📘 Ejercicio 01: Spread & Rest Operators

## 🎯 Objetivos

- Practicar el uso de spread operator en arrays y objetos
- Dominar rest parameters en funciones
- Aplicar rest en destructuring
- Distinguir cuándo usar spread vs rest

---

## 📋 Descripción

Este ejercicio te ayudará a dominar los operadores spread (`...`) y rest (`...`) en diferentes contextos. Aunque usan la misma sintaxis, su propósito es opuesto: spread **expande** elementos, rest los **agrupa**.

---

## 🔧 Tareas

### Parte 1: Spread con Arrays

1. Combina dos arrays de frutas sin mutar los originales
2. Crea una función que encuentre el mayor número usando `Math.max` y spread
3. Inserta elementos en medio de un array sin mutarlo

### Parte 2: Spread con Objetos

1. Combina configuraciones por defecto con personalizadas
2. Actualiza propiedades de un producto sin mutar el original
3. Crea una función que "sanitice" objetos removiendo propiedades sensibles

### Parte 3: Rest Parameters

1. Crea una función que sume cualquier cantidad de números
2. Implementa un logger que acepte un nivel y mensajes variables
3. Construye una función que combine el primer elemento con el resto

### Parte 4: Rest en Destructuring

1. Extrae los primeros elementos de un array y agrupa el resto
2. Separa propiedades principales de un objeto del resto
3. Implementa una función que remuela múltiples propiedades de un objeto

---

## 📝 Instrucciones

1. Abre `starter/index.js`
2. Completa cada función siguiendo los comentarios `// TODO:`
3. Ejecuta las pruebas para verificar tu solución
4. Compara con `solution/index.js` si necesitas ayuda

---

## ✅ Criterios de Evaluación

- ✅ Usar spread para copiar y combinar arrays/objetos
- ✅ Aplicar rest parameters correctamente
- ✅ No mutar arrays u objetos originales
- ✅ Usar const/let (nunca var)
- ✅ Código limpio y bien comentado

---

## 🚀 Cómo Ejecutar

```bash
# Navega al directorio del ejercicio
cd bootcamp/week-02/2-practicas/ejercicio-01-spread-rest

# Ejecuta el archivo starter
node starter/index.js

# Opción: Ejecuta la solución para ver el resultado esperado
node solution/index.js
```

---

## 💡 Pistas

- **Spread en arrays**: `[...arr1, ...arr2]`
- **Spread en objetos**: `{ ...obj1, ...obj2 }`
- **Rest en funciones**: `function(...args) {}`
- **Rest en destructuring**: `const [first, ...rest] = array`
- **Inmutabilidad**: Siempre crea nuevos arrays/objetos

---

## 🎓 Conceptos Clave

- Spread expande, Rest agrupa
- Spread NO es profundo (shallow copy)
- Rest debe ser el último parámetro
- Ambos crean nuevas referencias

---

_Ejercicio 01 - Semana 02 - JavaScript Moderno Bootcamp_
