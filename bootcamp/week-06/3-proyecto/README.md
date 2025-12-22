# 🎯 Proyecto Semana 06: Validador de Formularios

## 📋 Descripción

Construye un **validador de formularios completo** usando expresiones regulares y métodos modernos de strings. El proyecto incluye validación en tiempo real, mensajes de error personalizados y formateo automático de datos.

## 🎯 Objetivos de Aprendizaje

Al completar este proyecto serás capaz de:

- ✅ Crear patrones RegExp para validación de datos comunes
- ✅ Implementar validación en tiempo real con eventos
- ✅ Usar grupos de captura para extraer y formatear datos
- ✅ Aplicar template literals para mensajes dinámicos
- ✅ Sanitizar inputs para prevenir XSS

## 🚀 Funcionalidades

### Validaciones Requeridas

| Campo | Reglas de Validación |
|-------|---------------------|
| **Nombre** | 2-50 caracteres, solo letras y espacios |
| **Email** | Formato válido de correo electrónico |
| **Teléfono** | Formato: +XX XXX XXX XXX o similar |
| **Contraseña** | Mín 8 chars, mayúscula, minúscula, número, especial |
| **Confirmar** | Debe coincidir con contraseña |
| **Fecha Nacimiento** | Formato DD/MM/YYYY, edad 18-120 años |
| **Código Postal** | 5 dígitos |
| **URL** | Formato válido http/https |

### Características Adicionales

- 🔴 Indicador visual de campo inválido
- 🟢 Indicador visual de campo válido
- 💬 Mensajes de error específicos
- 📊 Barra de fortaleza de contraseña
- 🔄 Formateo automático (teléfono, fecha)
- 🛡️ Sanitización de inputs

## 📁 Estructura del Proyecto

```
3-proyecto/
├── README.md
├── index.html
├── styles.css
├── starter/
│   └── script.js      # Tu implementación
└── solution/
    └── script.js      # Solución de referencia
```

## 🛠️ Instrucciones

### 1. Abre el proyecto

Abre `index.html` en tu navegador y `starter/script.js` en tu editor.

### 2. Implementa las funciones

El archivo `starter/script.js` contiene:

```javascript
// Patrones RegExp a definir
const patterns = {
  name: null,      // TODO: Implementar
  email: null,     // TODO: Implementar
  phone: null,     // TODO: Implementar
  password: null,  // TODO: Implementar
  date: null,      // TODO: Implementar
  postal: null,    // TODO: Implementar
  url: null        // TODO: Implementar
};

// Funciones de validación
const validators = {
  validateName(value) { /* TODO */ },
  validateEmail(value) { /* TODO */ },
  validatePhone(value) { /* TODO */ },
  validatePassword(value) { /* TODO */ },
  validateDate(value) { /* TODO */ },
  validatePostal(value) { /* TODO */ },
  validateUrl(value) { /* TODO */ }
};
```

### 3. Sigue el orden recomendado

1. **Patrones básicos** - name, postal
2. **Email y URL** - Formatos estándar
3. **Teléfono** - Con formateo automático
4. **Contraseña** - Con medidor de fortaleza
5. **Fecha** - Con validación de edad
6. **Integración** - Conectar todo con el DOM

## 📝 Requisitos Técnicos

### Patrones RegExp Sugeridos

```javascript
// Ejemplo de estructura (NO copiar directamente)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Con grupos nombrados para extraer partes
const datePattern = /^(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})$/;
```

### Validación con Feedback

```javascript
// Cada validador debe retornar un objeto
function validateField(value) {
  return {
    isValid: true,           // boolean
    message: 'Campo válido', // string
    formatted: value         // valor formateado (opcional)
  };
}
```

### Sanitización

```javascript
// Implementar función para sanitizar
function sanitizeInput(input) {
  // Escapar caracteres HTML peligrosos
  // < > & " '
}
```

## ✅ Criterios de Evaluación

### Funcionalidad (40%)

- [ ] Todos los campos se validan correctamente
- [ ] Mensajes de error específicos y útiles
- [ ] Validación en tiempo real (mientras escribe)
- [ ] Formateo automático funciona

### Código (30%)

- [ ] RegExp correctas y eficientes
- [ ] Uso de métodos modernos de strings
- [ ] Código limpio y bien organizado
- [ ] Sin código repetido (DRY)

### UX (20%)

- [ ] Feedback visual claro
- [ ] Medidor de fortaleza de contraseña
- [ ] No permite envío si hay errores
- [ ] Experiencia fluida

### Extras (10%)

- [ ] Sanitización implementada
- [ ] Accesibilidad (aria-labels)
- [ ] Comentarios explicativos
- [ ] Manejo de edge cases

## 💡 Tips

### RegExp para Email

```javascript
// Básico pero funcional
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// Con grupos para extraer partes
/^(?<user>[a-zA-Z0-9._%+-]+)@(?<domain>[a-zA-Z0-9.-]+)\.(?<tld>[a-zA-Z]{2,})$/
```

### Medidor de Fortaleza

```javascript
function getPasswordStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  return score; // 0-6
}
```

### Formateo de Teléfono

```javascript
function formatPhone(value) {
  // Eliminar todo excepto dígitos y +
  const cleaned = value.replace(/[^\d+]/g, '');

  // Aplicar formato con grupos
  // ...
}
```

## 🔗 Recursos

- [MDN - Regular Expressions](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
- [regex101.com](https://regex101.com/) - Tester de RegExp
- [HTML5 Pattern Attribute](https://developer.mozilla.org/es/docs/Web/HTML/Attributes/pattern)

## ⏱️ Tiempo Estimado

- **Básico**: 2-3 horas
- **Completo**: 4-5 horas

---

⬅️ [Volver a Prácticas](../2-practicas/ejercicio-04-matchall-search/README.md) | [Recursos](../4-recursos/README.md) ➡️
