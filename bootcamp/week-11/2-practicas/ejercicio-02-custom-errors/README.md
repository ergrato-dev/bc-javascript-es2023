# 🎨 Ejercicio 02: Errores Personalizados

## 🎯 Objetivo

Aprender a crear clases de error personalizadas que comuniquen claramente qué salió mal.

---

## 📋 Temas Cubiertos

- Extender la clase Error
- Añadir propiedades útiles
- Crear jerarquías de errores
- Métodos helper (toJSON, toUserMessage)
- Factory methods estáticos

---

## 🚀 Instrucciones

### Paso 1: Error Personalizado Básico

Crea una clase que extiende `Error`:

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Añadir Propiedades

Los errores personalizados pueden tener propiedades adicionales:

```javascript
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;  // Extra property
  }
}
```

**Descomenta** la sección del Paso 2.

---

### Paso 3: Error con Código

Añadir códigos de error facilita el manejo programático:

```javascript
class AppError extends Error {
  constructor(code, message) {
    super(message);
    this.name = 'AppError';
    this.code = code;
  }
}

throw new AppError('INVALID_INPUT', 'Email format is invalid');
```

**Descomenta** la sección del Paso 3.

---

### Paso 4: Jerarquía de Errores

Crea errores específicos que heredan de una base:

```javascript
class AppError extends Error { /* base */ }
class ValidationError extends AppError { /* specific */ }
class NetworkError extends AppError { /* specific */ }
```

**Descomenta** la sección del Paso 4.

---

### Paso 5: Método toJSON()

Útil para logging y envío a APIs:

```javascript
class AppError extends Error {
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
}
```

**Descomenta** la sección del Paso 5.

---

### Paso 6: Mensaje para Usuario

Separar mensaje técnico del mensaje amigable:

```javascript
class HttpError extends Error {
  toUserMessage() {
    if (this.status === 404) return 'Item not found';
    if (this.status === 500) return 'Server error, try later';
    return 'Something went wrong';
  }
}
```

**Descomenta** la sección del Paso 6.

---

### Paso 7: Factory Methods

Métodos estáticos para crear errores comunes:

```javascript
class AppError extends Error {
  static validation(field, message) {
    return new AppError('VALIDATION', `${field}: ${message}`);
  }

  static notFound(resource) {
    return new AppError('NOT_FOUND', `${resource} not found`);
  }
}
```

**Descomenta** la sección del Paso 7.

---

## ▶️ Ejecutar

```bash
cd bootcamp/week-11/2-practicas/ejercicio-02-custom-errors/starter
node index.js
```

---

## ✅ Checklist

- [ ] Paso 1: Error básico creado
- [ ] Paso 2: Propiedades extra añadidas
- [ ] Paso 3: Código de error implementado
- [ ] Paso 4: Jerarquía funciona con instanceof
- [ ] Paso 5: toJSON() serializa correctamente
- [ ] Paso 6: Mensajes de usuario separados
- [ ] Paso 7: Factory methods funcionan

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Prácticas | Siguiente ➡️ |
|:------------|:------------:|-------------:|
| [Ejercicio 01](../ejercicio-01-try-catch/) | [Índice](../README.md) | [Ejercicio 03](../ejercicio-03-async-errors/) |
