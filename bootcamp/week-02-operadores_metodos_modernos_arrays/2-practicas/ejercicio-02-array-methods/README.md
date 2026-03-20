# 📘 Ejercicio 02: Array Methods Básicos

## 🎯 Objetivos

- Dominar `find()` y `findIndex()` para búsquedas
- Usar `some()` y `every()` para validaciones
- Aplicar `includes()` en arrays de primitivos
- Combinar métodos para lógica compleja

---

## 📋 Descripción

Este es un **ejercicio guiado paso a paso**. Aprenderás métodos de búsqueda y validación de arrays descomentando código.

---

## 📝 Práctica Guiada

### Paso 1: find() - Encontrar un Elemento

Retorna el PRIMER elemento que cumple la condición:

```javascript
const user = users.find(u => u.name === 'Ana');
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: findIndex() - Encontrar Posición

Retorna el ÍNDICE del primer elemento que cumple:

```javascript
const index = users.findIndex(u => u.id === 5);
```

---

### Paso 3: some() - ¿Alguno Cumple?

Retorna `true` si AL MENOS UN elemento cumple:

```javascript
const hasMinors = users.some(u => u.age < 18);
```

---

### Paso 4: every() - ¿Todos Cumplen?

Retorna `true` si TODOS los elementos cumplen:

```javascript
const allAdults = users.every(u => u.age >= 18);
```

---

### Paso 5: includes() - Arrays Simples

Busca un valor exacto en arrays de primitivos:

```javascript
const hasBanana = fruits.includes('banana');
```

---

### Paso 6: Combinando Métodos

Combinar `find` con validaciones adicionales.

---

### Paso 7: Validación de Formularios

Caso práctico usando `every()` y `some()`.

---

### Paso 8: Búsqueda con Múltiples Criterios

Búsqueda flexible combinando condiciones.

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

- [ ] Paso 1: find() descomentado
- [ ] Paso 2: findIndex() descomentado
- [ ] Paso 3: some() descomentado
- [ ] Paso 4: every() descomentado
- [ ] Paso 5: includes() descomentado
- [ ] Paso 6: Combinando métodos descomentado
- [ ] Paso 7: Validación de formularios descomentado
- [ ] Paso 8: Búsqueda múltiple descomentado

---

## 🔗 Recursos

- [Teoría: Array Methods](../../1-teoria/04-array-methods.md)
- [MDN: Array.find()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN: Array.some()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
