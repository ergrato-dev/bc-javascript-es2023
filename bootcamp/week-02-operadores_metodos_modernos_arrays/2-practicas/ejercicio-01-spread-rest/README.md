# 📘 Ejercicio 01: Spread & Rest Operators

## 🎯 Objetivos

- Dominar el operador spread (`...`) con arrays y objetos
- Usar rest parameters en funciones
- Aplicar rest en destructuring
- Combinar spread y rest en casos prácticos

---

## 📋 Descripción

Este es un **ejercicio guiado paso a paso**. Aprenderás spread y rest operators descomentando código y observando los resultados.

---

## 📝 Práctica Guiada

### Paso 1: Spread - Combinar Arrays

El operador spread expande un array en elementos individuales:

```javascript
const combined = [...array1, ...array2];
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Spread - Clonar Arrays

Crear copias sin mutar el original:

```javascript
const copy = [...original];
const max = Math.max(...numbers);
```

---

### Paso 3: Spread con Objetos

Combinar objetos (las propiedades posteriores sobreescriben):

```javascript
const merged = { ...defaults, ...custom };
```

---

### Paso 4: Spread Anidado

Copiar objetos con propiedades anidadas correctamente.

---

### Paso 5: Rest en Parámetros de Función

Recoger múltiples argumentos en un array:

```javascript
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
```

---

### Paso 6: Rest en Destructuring

Capturar "el resto" de elementos:

```javascript
const [first, ...rest] = array;
const { id, ...others } = object;
```

---

### Paso 7: Insertar en Posición

Combinar slice con spread para insertar sin mutar.

---

### Paso 8: Caso Práctico

Función de merge de configuraciones con defaults.

---

## ▶️ Ejecución

```bash
cd starter
node index.js
```

---

## ⏱️ Tiempo Estimado

35-45 minutos

---

## ✅ Checklist

- [ ] Paso 1: Combinar arrays descomentado
- [ ] Paso 2: Clonar arrays descomentado
- [ ] Paso 3: Spread con objetos descomentado
- [ ] Paso 4: Spread anidado descomentado
- [ ] Paso 5: Rest en parámetros descomentado
- [ ] Paso 6: Rest en destructuring descomentado
- [ ] Paso 7: Insertar en posición descomentado
- [ ] Paso 8: Caso práctico descomentado

---

## 🔗 Recursos

- [Teoría: Spread Operator](../../1-teoria/01-spread-operator.md)
- [Teoría: Rest Parameters](../../1-teoria/02-rest-parameters.md)
- [MDN: Spread syntax](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
