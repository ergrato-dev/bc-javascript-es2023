# 🛡️ Ejercicio 01: try...catch...finally

## 🎯 Objetivo

Dominar la estructura `try...catch...finally` para el manejo de errores en JavaScript.

---

## 📋 Temas Cubiertos

- Estructura básica try...catch
- El bloque finally
- Tipos de errores nativos
- Lanzar errores con throw
- Re-throw de errores
- Manejo selectivo con instanceof

---

## 🚀 Instrucciones

### Paso 1: Catch Básico

El bloque `catch` captura cualquier error que ocurra en `try`:

```javascript
try {
  JSON.parse('invalid json');
} catch (error) {
  console.log('Error caught:', error.message);
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Propiedades del Error

Todo error tiene `name`, `message` y `stack`:

```javascript
try {
  throw new Error('Test error');
} catch (error) {
  console.log(error.name);    // "Error"
  console.log(error.message); // "Test error"
  console.log(error.stack);   // Full stack trace
}
```

**Descomenta** la sección del Paso 2.

---

### Paso 3: El Bloque finally

`finally` **SIEMPRE** se ejecuta, haya error o no:

```javascript
try {
  // code
} catch (error) {
  // handle error
} finally {
  // always runs - cleanup here
}
```

**Descomenta** la sección del Paso 3.

---

### Paso 4: Tipos de Error Nativos

JavaScript tiene varios tipos de error built-in:

- `SyntaxError` - JSON inválido, sintaxis incorrecta
- `TypeError` - Operación en tipo incorrecto
- `ReferenceError` - Variable no definida
- `RangeError` - Valor fuera de rango

**Descomenta** la sección del Paso 4.

---

### Paso 5: Lanzar Errores (throw)

Usa `throw` para lanzar tus propios errores:

```javascript
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
};
```

**Descomenta** la sección del Paso 5.

---

### Paso 6: Identificar Tipos con instanceof

Usa `instanceof` para manejar diferentes tipos de error:

```javascript
try {
  // operation
} catch (error) {
  if (error instanceof TypeError) {
    // handle type error
  } else if (error instanceof RangeError) {
    // handle range error
  }
}
```

**Descomenta** la sección del Paso 6.

---

### Paso 7: Re-throw de Errores

A veces necesitas capturar, procesar, y re-lanzar un error:

```javascript
try {
  riskyOperation();
} catch (error) {
  console.log('Logging error...');
  throw error; // Re-throw after logging
}
```

**Descomenta** la sección del Paso 7.

---

## ▶️ Ejecutar

```bash
cd bootcamp/week-11/2-practicas/ejercicio-01-try-catch/starter
node index.js
```

---

## ✅ Checklist

- [ ] Paso 1: Catch básico funciona
- [ ] Paso 2: Propiedades del error mostradas
- [ ] Paso 3: finally se ejecuta siempre
- [ ] Paso 4: Tipos de error identificados
- [ ] Paso 5: throw lanza errores correctamente
- [ ] Paso 6: instanceof distingue tipos
- [ ] Paso 7: Re-throw propaga errores

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Prácticas | Siguiente ➡️ |
|:------------|:------------:|-------------:|
| [README](../README.md) | [Índice](../README.md) | [Ejercicio 02](../ejercicio-02-custom-errors/) |
