# 🎯 Reto Semanal - Week 03

## 📺 Video de la Semana

[![Video Week 03](https://img.shields.io/badge/YouTube-Video_Week_03-red?style=for-the-badge&logo=youtube)](https://youtube.com/@bc-channel-epti)

> **Importante**: Mira el video completo antes de realizar el reto. Contiene el **código de verificación** necesario para completar tu autoevaluación.

---

## 🧩 El Reto

### Contexto

Has aprendido clases con campos privados (`#`), static blocks, herencia y el patrón Singleton.

### Tu Misión

Crea un sistema de gestión de configuración usando:

1. **Campos privados** (`#`) para datos sensibles
2. **Static block** para inicialización
3. **Getters** para acceso controlado
4. **Patrón Singleton** para instancia única

```javascript
class ConfigManager {
  // Usa static block para cargar config inicial
  // Usa campos privados para #settings
  // Implementa getInstance() para Singleton
  // Implementa get() y set() con validación
}

// Uso esperado
const config = ConfigManager.getInstance();
config.set('theme', 'dark');
config.set('language', 'es');

console.log(config.get('theme')); // 'dark'
console.log(config.getAll()); // { theme: 'dark', language: 'es', ...defaults }

// Singleton verification
const config2 = ConfigManager.getInstance();
console.log(config === config2); // true
```

---

## ✅ Requisitos de Entrega

### Paso 1: Resuelve el reto
- Implementa campos privados con `#`
- Usa un static block para inicializar valores por defecto
- El patrón Singleton debe funcionar correctamente
- Añade validación en `set()` para claves permitidas

### Paso 2: Comenta en YouTube (REQUERIDO)

Deja un comentario en el video de esta semana con el siguiente formato:

```
✅ RETO WEEK-03 COMPLETADO

Usé static block para: [explica tu uso]

🔐 ¿Por qué los campos privados (#) son mejores que la convención _underscore?
[Tu respuesta]
```

### Paso 3: Autoevaluación

Completa el [formulario de autoevaluación](https://forms.gle/PLACEHOLDER_WEEK03):

- Código de verificación del video
- **Link a tu comentario en YouTube**
- Link a tu código

---

## 💡 Pregunta de Reflexión

> **¿En qué situaciones reales usarías un static block en lugar de un constructor?**

Incluye tu respuesta en el comentario de YouTube.

---

## 🏆 Criterios de Éxito

| Criterio | Puntos |
|----------|--------|
| Campos privados (#) implementados | 25 |
| Static block funcional | 20 |
| Patrón Singleton correcto | 20 |
| Getters/validación | 15 |
| Comentario en YouTube completo | 20 |
| **Total** | **100** |

---

## 🔗 Recursos

- [Video de la semana](https://youtube.com/@bc-channel-epti)
- [MDN: Private class fields](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [MDN: Static initialization blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

---

_Reto Week 03 | Bootcamp JavaScript ES2023 | [bc-channel-epti](https://youtube.com/@bc-channel-epti)_
