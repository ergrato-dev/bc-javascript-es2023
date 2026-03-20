# 🎯 Reto Semanal - Week 01

## 📺 Video de la Semana

[![Video Week 01](https://img.shields.io/badge/YouTube-Video_Week_01-red?style=for-the-badge&logo=youtube)](https://youtube.com/@bc-channel-epti)

> **Importante**: Mira el video completo antes de realizar el reto. Contiene el **código de verificación** necesario para completar tu autoevaluación.

---

## 🧩 El Reto

### Contexto

Has aprendido los fundamentos de JavaScript moderno: `let`/`const`, arrow functions, template literals, destructuring y operadores modernos (`?.`, `??`, `??=`).

### Tu Misión

Crea una función `presentarUsuario` que:

1. Reciba un objeto usuario (puede tener datos incompletos)
2. Use **destructuring** con valores por defecto
3. Use **optional chaining** para acceder a datos anidados
4. Use **nullish coalescing** para valores faltantes
5. Retorne un string usando **template literals**

```javascript
// Ejemplo de entrada
const usuario = {
  nombre: 'Ana',
  edad: 28,
  // ciudad puede no existir
  contacto: {
    email: 'ana@example.com'
    // telefono puede no existir
  }
};

// Tu función debe manejar datos incompletos sin errores
presentarUsuario(usuario);
// "Hola, soy Ana (28 años) de Ciudad no especificada.
//  Contacto: ana@example.com | Tel: No disponible"
```

---

## ✅ Requisitos de Entrega

> **Nota Importante**: Este reto es parte opcional del aprendizaje. El **único entregable obligatorio** para aprobar la semana es el [Proyecto de Tarjeta de Presentación](./3-proyecto/README.md).

### Paso 1: Resuelve el reto (Opcional)
- Implementa la función usando SOLO sintaxis ES2023
- No uses `var`, `function` keyword, ni concatenación con `+`
- Este reto te ayudará a prepararte mejor para el proyecto

### Paso 2: Comenta en YouTube (Opcional)

Si resolviste el reto, deja un comentario en el video de esta semana con el siguiente formato:

```
✅ RETO WEEK-01 COMPLETADO

Mi función usa: [lista las características ES2023 que usaste]

💡 Lo que más me gustó de la sintaxis moderna es: [tu opinión]
```

### Paso 3: Enfócate en el Proyecto (OBLIGATORIO)

El **único entregable obligatorio** es el proyecto:
- **Proyecto**: [Tarjeta de Presentación Interactiva](./3-proyecto/README.md)
- Debe demostrar dominio de todos los conceptos de la semana
- Calificación mínima para aprobar: 70%

---

## 💡 Pregunta de Reflexión

> **¿Qué problema resuelve el operador `??` que no resolvía `||`?**

Incluye tu respuesta en el comentario de YouTube para generar discusión.

---

## 🏆 Criterios de Éxito

| Criterio | Puntos |
|----------|--------|
| Usa destructuring con defaults | 20 |
| Usa optional chaining `?.` | 20 |
| Usa nullish coalescing `??` | 20 |
| Usa template literals | 20 |
| Comentario en YouTube completo | 20 |
| **Total** | **100** |

---

## 🔗 Recursos

- [Video de la semana](https://youtube.com/@bc-channel-epti)
- [Documentación del proyecto](./3-proyecto/README.md)
- [MDN: Optional Chaining](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [MDN: Nullish Coalescing](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

---

_Reto Week 01 | Bootcamp JavaScript ES2023 | [bc-channel-epti](https://youtube.com/@bc-channel-epti)_
