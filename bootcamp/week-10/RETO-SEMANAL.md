# 🎯 Reto Semanal - Week 10

## 📺 Video de la Semana

[![Video Week 10](https://img.shields.io/badge/YouTube-Video_Week_10-red?style=for-the-badge&logo=youtube)](https://youtube.com/@bc-channel-epti)

> **Importante**: Mira el video completo antes de realizar el reto. Contiene el **código de verificación** necesario para completar tu autoevaluación.

---

## 🧩 El Reto

### Contexto

Dominas Proxy, traps (get, set, has, deleteProperty), Reflect API, y validación reactiva.

### Tu Misión

Crea un **sistema de formulario reactivo** con validación automática:

```javascript
const createReactiveForm = (schema) => {
  const errors = {};
  const values = {};

  return new Proxy(values, {
    set(target, prop, value) {
      // 1. Valida según schema
      // 2. Actualiza errors si falla
      // 3. Usa Reflect.set()
      // 4. Dispara callback onChange
    },

    get(target, prop) {
      // Props especiales: $errors, $isValid, $values
      // Usa Reflect.get() para props normales
    },

    has(target, prop) {
      // Permite verificar si un campo existe
    },

    deleteProperty(target, prop) {
      // Permite "limpiar" un campo
    }
  });
};

// Schema de validación
const schema = {
  email: {
    required: true,
    pattern: /^[\w.-]+@[\w.-]+\.\w+$/,
    message: 'Email inválido'
  },
  age: {
    required: true,
    min: 18,
    max: 120,
    message: 'Edad debe ser entre 18 y 120'
  },
  name: {
    required: true,
    minLength: 2
  }
};

// Uso esperado
const form = createReactiveForm(schema);

form.email = 'test@example.com'; // ✓ Válido
form.email = 'invalid';          // ✗ Inválido

console.log(form.$errors);  // { email: 'Email inválido' }
console.log(form.$isValid); // false
console.log(form.$values);  // { email: 'invalid' }

delete form.email;          // Limpia el campo
console.log('email' in form); // false
```

---

## ✅ Requisitos de Entrega

### Paso 1: Resuelve el reto
- Implementa traps: get, set, has, deleteProperty
- Usa Reflect API en cada trap
- Validación reactiva que actualiza errors automáticamente
- Props especiales $errors, $isValid, $values

### Paso 2: Comenta en YouTube (REQUERIDO)

Deja un comentario en el video de esta semana con el siguiente formato:

```
✅ RETO WEEK-10 COMPLETADO

Implementé estos traps: [lista]

🪤 ¿Por qué es importante usar Reflect junto con Proxy?
[Tu explicación]
```

### Paso 3: Autoevaluación

Completa el [formulario de autoevaluación](https://forms.gle/PLACEHOLDER_WEEK10):

- Código de verificación del video
- **Link a tu comentario en YouTube**
- Link a tu código

---

## 💡 Pregunta de Reflexión

> **¿Cómo usarías Proxy para crear un sistema de "undo/redo"?**

Incluye tu respuesta en el comentario de YouTube.

---

## 🏆 Criterios de Éxito

| Criterio | Puntos |
|----------|--------|
| Trap get funcional | 15 |
| Trap set con validación | 25 |
| Trap has implementado | 10 |
| Trap deleteProperty | 10 |
| Usa Reflect API | 15 |
| Props especiales ($errors, etc) | 5 |
| Comentario en YouTube completo | 20 |
| **Total** | **100** |

---

## 🔗 Recursos

- [Video de la semana](https://youtube.com/@bc-channel-epti)
- [MDN: Proxy](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [MDN: Reflect](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

---

_Reto Week 10 | Bootcamp JavaScript ES2023 | [bc-channel-epti](https://youtube.com/@bc-channel-epti)_
