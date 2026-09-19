# 📘 Ejercicio 02: Destructuring de Objetos

## 🎯 Objetivos

- Dominar la extracción de propiedades de objetos
- Practicar renombrado con alias
- Usar valores por defecto
- Aplicar destructuring anidado y en funciones

---

## 📋 Descripción

Este es un **ejercicio guiado paso a paso**. Aprenderás destructuring de objetos descomentando código y observando los resultados.

---

## 📝 Práctica Guiada

### Paso 1: Extracción Básica

Extraer propiedades de un objeto por nombre:

```javascript
const { username, email, age } = user;
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Alias (Renombrar)

Renombrar propiedades al extraerlas:

```javascript
const { product_id: productId } = product;
```

---

### Paso 3: Valores por Defecto

Asignar defaults para propiedades que no existen:

```javascript
const { theme, language = 'en' } = config;
```

---

### Paso 4: Alias + Default Combinados

Combinar renombrado con valor por defecto:

```javascript
const { api_url: apiUrl = 'http://localhost' } = settings;
```

---

### Paso 5: Destructuring Anidado

Extraer valores de objetos dentro de objetos:

```javascript
const { department: { name: deptName } } = employee;
```

---

### Paso 6: Rest en Objetos

Separar propiedades específicas del resto:

```javascript
const { id, ...userInfo } = user;
```

---

### Paso 7: En Parámetros de Función

Destructuring directamente en los parámetros:

```javascript
const createUser = ({ name, email, role = 'user' }) => ({ ... });
```

---

### Paso 8: Destructuring Complejo

Combinar arrays y objetos anidados:

```javascript
const { data: { users: [firstUser] } } = apiResponse;
```

---

### Paso 9: Destructuring en Loops

Extraer propiedades en iteraciones:

```javascript
for (const { id, name } of products) { ... }
```

---

### Paso 10: Caso Práctico

Procesar un objeto evento complejo extrayendo solo lo necesario.

---

## ▶️ Ejecución

```bash
cd starter
node index.js
```

---

## ⏱️ Tiempo Estimado

40-50 minutos

---

## ✅ Checklist

- [ ] Paso 1: Extracción básica descomentado
- [ ] Paso 2: Alias descomentado
- [ ] Paso 3: Valores por defecto descomentado
- [ ] Paso 4: Alias + default descomentado
- [ ] Paso 5: Anidado descomentado
- [ ] Paso 6: Rest descomentado
- [ ] Paso 7: Parámetros de función descomentado
- [ ] Paso 8: Complejo descomentado
- [ ] Paso 9: Loops descomentado
- [ ] Paso 10: Caso práctico descomentado

---

## 🔗 Recursos

- [Teoría: Destructuring Avanzado](../../1-teoria/02-destructuring-objetos.md)
- [MDN: Object Destructuring](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
