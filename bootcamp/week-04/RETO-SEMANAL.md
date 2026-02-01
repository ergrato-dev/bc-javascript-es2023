# 🎯 Reto Semanal - Week 04

## 📺 Video de la Semana

[![Video Week 04](https://img.shields.io/badge/YouTube-Video_Week_04-red?style=for-the-badge&logo=youtube)](https://youtube.com/@bc-channel-epti)

> **Importante**: Mira el video completo antes de realizar el reto. Contiene el **código de verificación** necesario para completar tu autoevaluación.

---

## 🧩 El Reto

### Contexto

Dominas destructuring avanzado, módulos ES6, import/export, y top-level await.

### Tu Misión

Crea una mini-aplicación modular con la siguiente estructura:

```
mi-app/
├── index.js          # Entry point con top-level await
├── config.js         # Exporta configuración
├── utils/
│   ├── formatter.js  # Named exports
│   └── validator.js  # Default + named exports
└── data/
    └── users.json    # Datos de prueba
```

**Requisitos:**

1. **config.js**: Export default de objeto de configuración
2. **formatter.js**: Named exports de funciones de formato
3. **validator.js**: Default export + named exports
4. **index.js**: Usa top-level await para cargar datos

```javascript
// index.js - ejemplo de lo esperado
import config from './config.js';
import { formatDate, formatCurrency } from './utils/formatter.js';
import validate, { isEmail } from './utils/validator.js';

// Top-level await
const users = await fetch('./data/users.json').then(r => r.json());

// Destructuring avanzado con renombre y defaults
const {
  api: { baseUrl, timeout = 5000 },
  features: { darkMode: isDark = false }
} = config;

console.log(`API: ${baseUrl}, Timeout: ${timeout}ms, Dark: ${isDark}`);
```

---

## ✅ Requisitos de Entrega

### Paso 1: Resuelve el reto
- Mínimo 3 módulos con diferentes tipos de export
- Usa top-level await (no async IIFE)
- Destructuring con renombre y valores default
- Re-exports si aplica

### Paso 2: Comenta en YouTube (REQUERIDO)

Deja un comentario en el video de esta semana con el siguiente formato:

```
✅ RETO WEEK-04 COMPLETADO

Mi estructura de módulos: [describe brevemente]

📦 ¿Cuándo usarías default export vs named exports?
[Tu criterio personal]
```

### Paso 3: Autoevaluación

Completa el [formulario de autoevaluación](https://forms.gle/PLACEHOLDER_WEEK04):

- Código de verificación del video
- **Link a tu comentario en YouTube**
- Link a tu repositorio/código

---

## 💡 Pregunta de Reflexión

> **¿Qué ventaja tiene top-level await sobre envolver todo en una async function?**

Incluye tu respuesta en el comentario de YouTube.

---

## 🏆 Criterios de Éxito

| Criterio | Puntos |
|----------|--------|
| Estructura modular correcta | 20 |
| Named + Default exports | 20 |
| Top-level await funcional | 20 |
| Destructuring avanzado | 20 |
| Comentario en YouTube completo | 20 |
| **Total** | **100** |

---

## 🔗 Recursos

- [Video de la semana](https://youtube.com/@bc-channel-epti)
- [MDN: Modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)
- [MDN: Top-level await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await)

---

_Reto Week 04 | Bootcamp JavaScript ES2023 | [bc-channel-epti](https://youtube.com/@bc-channel-epti)_
