# 🎯 Reto Semanal - Week 11

## 📺 Video de la Semana

[![Video Week 11](https://img.shields.io/badge/YouTube-Video_Week_11-red?style=for-the-badge&logo=youtube)](https://youtube.com/@bc-channel-epti)

> **Importante**: Mira el video completo antes de realizar el reto. Contiene el **código de verificación** necesario para completar tu autoevaluación.

---

## 🧩 El Reto

### Contexto

Dominas try/catch/finally, errores personalizados, **optional catch binding (ES2019)**, y **Error cause (ES2022)**.

### Tu Misión

Crea un **sistema de manejo de errores en capas** para una app:

```javascript
// 1. Jerarquía de errores personalizados
class AppError extends Error {
  constructor(message, options = {}) {
    super(message, { cause: options.cause }); // ES2022
    this.code = options.code ?? 'UNKNOWN';
    this.statusCode = options.statusCode ?? 500;
  }
}

class ValidationError extends AppError { }
class NetworkError extends AppError { }
class DatabaseError extends AppError { }

// 2. Función que encadena errores con cause
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    throw new NetworkError('Failed to fetch user', {
      code: 'NETWORK_ERROR',
      statusCode: 503,
      cause: error  // ES2022: encadena el error original
    });
  }
};

// 3. Handler global que muestra cadena de errores
const handleError = (error) => {
  console.log('Error:', error.message);

  // Recorre la cadena de cause
  let current = error.cause;
  let depth = 1;
  while (current) {
    console.log(`  ${'└'.repeat(depth)} Caused by: ${current.message}`);
    current = current.cause;
    depth++;
  }
};

// 4. Función que usa optional catch binding (ES2019)
const safeJSONParse = (str) => {
  try {
    return { data: JSON.parse(str), error: null };
  } catch {  // ES2019: sin parámetro
    return { data: null, error: 'Invalid JSON' };
  }
};
```

---

## ✅ Requisitos de Entrega

### Paso 1: Resuelve el reto
- Crea jerarquía de errores (mínimo 3 clases)
- Usa **Error cause (ES2022)** para encadenar errores
- Usa **optional catch binding (ES2019)** en al menos un lugar
- Implementa función que muestre toda la cadena de cause

### Paso 2: Comenta en YouTube (REQUERIDO)

Deja un comentario en el video de esta semana con el siguiente formato:

```
✅ RETO WEEK-11 COMPLETADO

Usé Error cause para: [tu caso]
Usé optional catch binding cuando: [tu caso]

🔗 ¿Por qué es importante preservar el error original con cause?
[Tu reflexión]
```

### Paso 3: Autoevaluación

Completa el [formulario de autoevaluación](https://forms.gle/PLACEHOLDER_WEEK11):

- Código de verificación del video
- **Link a tu comentario en YouTube**
- Link a tu código

---

## 💡 Pregunta de Reflexión

> **¿Cómo mejoraría el debugging en producción tener la cadena completa de errores con cause?**

Incluye tu respuesta en el comentario de YouTube.

---

## 🏆 Criterios de Éxito

| Criterio | Puntos |
|----------|--------|
| Jerarquía de errores (3+ clases) | 20 |
| Usa Error cause correctamente | 25 |
| Usa optional catch binding | 15 |
| Función que recorre cadena cause | 20 |
| Comentario en YouTube completo | 20 |
| **Total** | **100** |

---

## 🔗 Recursos

- [Video de la semana](https://youtube.com/@bc-channel-epti)
- [MDN: Error cause](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
- [MDN: Optional catch binding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_exception_identifier)

---

_Reto Week 11 | Bootcamp JavaScript ES2023 | [bc-channel-epti](https://youtube.com/@bc-channel-epti)_
