# 📘 Ejercicio 01: Destructuring de Arrays

## 🎯 Objetivos

- Comprender la sintaxis de destructuring de arrays
- Practicar extracción de elementos por posición
- Dominar rest pattern, skip y valores por defecto
- Aplicar destructuring en funciones

---

## 📋 Descripción

Este es un **ejercicio guiado paso a paso**. Aprenderás destructuring de arrays descomentando código y observando los resultados.

---

## 📝 Práctica Guiada

### Paso 1: Extracción Básica

Extraer elementos de un array asignándolos a variables:

```javascript
const [first, second, third] = colors;
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Skip de Elementos

Omitir elementos usando comas vacías:

```javascript
const [first, , third] = numbers; // Salta el segundo
```

---

### Paso 3: Rest Pattern

Capturar "el resto" de elementos con `...`:

```javascript
const [primary, ...others] = colors;
```

---

### Paso 4: Valores por Defecto

Asignar defaults para elementos que no existen:

```javascript
const [a, b = 'default'] = shortArray;
```

---

### Paso 5: Swap de Variables

Intercambiar valores sin variable temporal:

```javascript
[x, y] = [y, x];
```

---

### Paso 6: Destructuring Anidado

Extraer de arrays dentro de arrays:

```javascript
const [, [x, y]] = coordinates;
```

---

### Paso 7: En Parámetros de Función

Destructuring directamente en los parámetros:

```javascript
const sum = ([a, b, c]) => a + b + c;
```

---

### Paso 8: Retorno de Funciones

Capturar múltiples valores retornados:

```javascript
const [min, max] = getMinMax(numbers);
```

---

### Paso 9: Combinación Avanzada

Combinar skip, rest y destructuring de objetos:

```javascript
const [name, year, , { prop }] = mixed;
```

---

### Paso 10: Caso Práctico

Aplicar destructuring en un cálculo de distancia entre puntos.

---

## ▶️ Ejecución

```bash
cd starter
node index.js
```

---

## ⏱️ Tiempo Estimado

30-40 minutos

---

## ✅ Checklist

- [ ] Paso 1: Extracción básica descomentado
- [ ] Paso 2: Skip de elementos descomentado
- [ ] Paso 3: Rest pattern descomentado
- [ ] Paso 4: Valores por defecto descomentado
- [ ] Paso 5: Swap descomentado
- [ ] Paso 6: Anidado descomentado
- [ ] Paso 7: Parámetros de función descomentado
- [ ] Paso 8: Retorno de funciones descomentado
- [ ] Paso 9: Combinación avanzada descomentado
- [ ] Paso 10: Caso práctico descomentado

---

## 🔗 Recursos

- [Teoría: Destructuring Avanzado](../../1-teoria/01-destructuring-arrays.md)
- [MDN: Destructuring](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
