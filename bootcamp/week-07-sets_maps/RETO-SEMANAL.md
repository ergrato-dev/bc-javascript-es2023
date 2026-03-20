# 🎯 Reto Semanal - Week 07

## 📺 Video de la Semana

[![Video Week 07](https://img.shields.io/badge/YouTube-Video_Week_07-red?style=for-the-badge&logo=youtube)](https://youtube.com/@bc-channel-epti)

> **Importante**: Mira el video completo antes de realizar el reto. Contiene el **código de verificación** necesario para completar tu autoevaluación.

---

## 🧩 El Reto

### Contexto

Dominas Set, Map, WeakSet, WeakMap, y la novedad ES2023: **Symbols como claves de WeakMap**.

### Tu Misión

Crea un **sistema de caché con metadatos privados**:

1. Usa **Map** para el caché principal
2. Usa **WeakMap** con **Symbol** como clave para metadatos privados (ES2023)
3. Usa **Set** para trackear claves únicas accedidas

```javascript
class SmartCache {
  #cache = new Map();
  #metadata = new WeakMap();
  #accessedKeys = new Set();

  // Símbolo privado para metadatos (ES2023: Symbol as WeakMap key)
  static #metaKey = Symbol('cache-meta');

  set(key, value, ttl = 60000) {
    // Almacena valor y metadatos (createdAt, ttl, accessCount)
  }

  get(key) {
    // Retorna valor si existe y no expiró
    // Incrementa accessCount en metadatos
    // Añade key a #accessedKeys
  }

  getStats() {
    // Retorna: totalItems, accessedKeys, hitRate
  }
}

// Uso esperado
const cache = new SmartCache();
cache.set('user:1', { name: 'Ana' }, 30000);
cache.get('user:1'); // { name: 'Ana' }
cache.getStats(); // { totalItems: 1, accessedKeys: 1, ... }
```

---

## ✅ Requisitos de Entrega

### Paso 1: Resuelve el reto
- Usa Map, WeakMap, y Set correctamente
- Implementa expiración por TTL
- **Usa Symbol como clave de WeakMap** (ES2023)

### Paso 2: Comenta en YouTube (REQUERIDO)

Deja un comentario en el video de esta semana con el siguiente formato:

```
✅ RETO WEEK-07 COMPLETADO

Usé WeakMap con Symbol para: [tu uso]

🗝️ ¿Por qué ES2023 permitió Symbols como claves de WeakMap?
[Tu entendimiento]
```

### Paso 3: Autoevaluación

Completa el [formulario de autoevaluación](https://forms.gle/PLACEHOLDER_WEEK07):

- Código de verificación del video
- **Link a tu comentario en YouTube**
- Link a tu código

---

## 💡 Pregunta de Reflexión

> **¿Qué problema resuelve usar Symbol como clave de WeakMap que no se podía antes?**

Incluye tu respuesta en el comentario de YouTube.

---

## 🏆 Criterios de Éxito

| Criterio | Puntos |
|----------|--------|
| Map para caché principal | 20 |
| WeakMap con Symbol (ES2023) | 25 |
| Set para tracking | 15 |
| TTL/expiración funcional | 20 |
| Comentario en YouTube completo | 20 |
| **Total** | **100** |

---

## 🔗 Recursos

- [Video de la semana](https://youtube.com/@bc-channel-epti)
- [MDN: WeakMap](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [ES2023: Symbols as WeakMap keys](https://github.com/tc39/proposal-symbols-as-weakmap-keys)

---

_Reto Week 07 | Bootcamp JavaScript ES2023 | [bc-channel-epti](https://youtube.com/@bc-channel-epti)_
