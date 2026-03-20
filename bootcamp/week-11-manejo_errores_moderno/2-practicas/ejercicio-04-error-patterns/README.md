# 🏗️ Ejercicio 04: Patrones de Manejo de Errores

## 🎯 Objetivo

Implementar patrones avanzados para crear código robusto y resiliente.

---

## 📋 Temas Cubiertos

- Safe execute pattern
- Error boundaries
- Retry con exponential backoff
- Fallback chain
- Circuit breaker (simplificado)
- Result pattern (Success/Failure)

---

## 🚀 Instrucciones

### Paso 1: Safe Execute Pattern

Envuelve operaciones riesgosas con un fallback:

```javascript
const safeExecute = (fn, fallback) => {
  try {
    return fn();
  } catch {
    return fallback;
  }
};
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Safe Execute Async

Versión asíncrona del patrón:

```javascript
const safeExecuteAsync = async (fn, fallback) => {
  try {
    return await fn();
  } catch {
    return fallback;
  }
};
```

**Descomenta** la sección del Paso 2.

---

### Paso 3: Retry Pattern

Reintenta operaciones que pueden fallar temporalmente:

```javascript
const retry = async (fn, attempts = 3) => {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === attempts - 1) throw error;
    }
  }
};
```

**Descomenta** la sección del Paso 3.

---

### Paso 4: Retry con Exponential Backoff

Espera progresivamente más entre reintentos:

```javascript
// Wait 1s, then 2s, then 4s...
const delay = 1000 * Math.pow(2, attempt);
```

**Descomenta** la sección del Paso 4.

---

### Paso 5: Fallback Chain

Intenta múltiples fuentes hasta que una funcione:

```javascript
const withFallback = async (...fns) => {
  for (const fn of fns) {
    try {
      return await fn();
    } catch { continue; }
  }
  throw new Error('All fallbacks failed');
};
```

**Descomenta** la sección del Paso 5.

---

### Paso 6: Error Boundary para Arrays

Procesa items individualmente sin que uno falle todo:

```javascript
const safeMap = (array, fn) => {
  return array.map(item => {
    try { return { success: true, value: fn(item) }; }
    catch (error) { return { success: false, error }; }
  });
};
```

**Descomenta** la sección del Paso 6.

---

### Paso 7: Result Pattern

Retorna objetos que indican éxito o fallo explícitamente:

```javascript
const Result = {
  ok: value => ({ ok: true, value }),
  err: error => ({ ok: false, error })
};
```

**Descomenta** la sección del Paso 7.

---

## ▶️ Ejecutar

```bash
cd bootcamp/week-11-manejo_errores_moderno/2-practicas/ejercicio-04-error-patterns/starter
node index.js
```

---

## ✅ Checklist

- [ ] Paso 1: Safe execute sync funciona
- [ ] Paso 2: Safe execute async funciona
- [ ] Paso 3: Retry básico implementado
- [ ] Paso 4: Exponential backoff añadido
- [ ] Paso 5: Fallback chain funciona
- [ ] Paso 6: Array processing robusto
- [ ] Paso 7: Result pattern aplicado

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Prácticas | Siguiente ➡️ |
|:------------|:------------:|-------------:|
| [Ejercicio 03](../ejercicio-03-async-errors/) | [Índice](../README.md) | [Proyecto](../../3-proyecto/) |
