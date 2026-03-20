# 🛡️ Práctica 02: Manejo de Errores en Async/Await

## 📋 Descripción

En esta práctica aprenderás a manejar errores en código asíncrono usando `try/catch/finally`. Implementarás patrones de manejo de errores robustos.

---

## 🎯 Objetivos

- Usar try/catch para capturar errores en async/await
- Implementar finally para limpieza
- Crear errores personalizados
- Re-lanzar errores con contexto

---

## ⏱️ Duración

45 minutos

---

## 📝 Instrucciones

### Paso 1: Try/Catch Básico

`try/catch` funciona naturalmente con async/await:

```javascript
async function safeFetch(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Usando Finally

`finally` se ejecuta siempre, haya error o no:

```javascript
async function withCleanup() {
  try {
    showLoading();
    const data = await fetchData();
    return data;
  } catch (error) {
    showError(error);
  } finally {
    hideLoading(); // Siempre se ejecuta
  }
}
```

**Descomenta** la sección del Paso 2.

---

### Paso 3: Errores Personalizados

Crea clases de error para diferentes situaciones:

```javascript
class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}
```

**Descomenta** la sección del Paso 3.

---

### Paso 4: Error Cause (ES2022)

Preserva el error original como causa:

```javascript
try {
  await riskyOperation();
} catch (originalError) {
  throw new Error('Operación falló', { cause: originalError });
}
```

**Descomenta** la sección del Paso 4.

---

### Paso 5: Manejo Granular

Usa múltiples bloques try/catch para control fino:

```javascript
async function process() {
  let user;
  try {
    user = await fetchUser();
  } catch (e) {
    // Manejar error de usuario específicamente
  }

  try {
    await saveData(user);
  } catch (e) {
    // Manejar error de guardado específicamente
  }
}
```

**Descomenta** la sección del Paso 5.

---

## 🧪 Verificación

Al ejecutar el código completo deberías ver:

```
--- Paso 1: Try/Catch Básico ---
Datos recibidos: { id: 1, data: 'test' }
Error capturado: Simulando error de red
Resultado con error: null

--- Paso 2: Usando Finally ---
Mostrando loading...
Ocultando loading (finally)
Datos: { success: true }

--- Paso 3: Errores Personalizados ---
Error de red - Código: 404
Error de validación - Campo: email

--- Paso 4: Error Cause ---
Error: Fallo en operación compleja
Causa original: Error interno simulado

--- Paso 5: Manejo Granular ---
Usuario obtenido: Admin
Productos obtenidos: [] (usando fallback)
```

---

## 📚 Recursos

- [MDN: try...catch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch)

---

[⬅️ Anterior: Async Básico](../practica-01-async-basico/) | [Siguiente: Parallel vs Sequential ➡️](../practica-03-parallel-vs-sequential/)
