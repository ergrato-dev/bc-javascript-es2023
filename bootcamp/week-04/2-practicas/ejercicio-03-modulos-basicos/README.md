# 📘 Ejercicio 03: Módulos Básicos

## 🎯 Objetivos

- Comprender la sintaxis de import/export ES6
- Practicar named exports y default exports
- Aprender el patrón barrel export
- Organizar código en múltiples archivos

---

## 📋 Descripción

Este es un **ejercicio guiado paso a paso** con múltiples archivos. Aprenderás módulos ES6 descomentando código progresivamente.

---

## 🗂️ Estructura del Ejercicio

```
starter/
├── index.html       # Punto de entrada HTML (no modificar)
├── main.js          # Módulo principal - Paso 6
├── config.js        # Default export - Paso 5
└── utils/
    ├── math.js      # Named exports - Pasos 1-2
    ├── strings.js   # Named exports - Pasos 3-4
    └── index.js     # Barrel export - Paso 5
```

---

## 📝 Práctica Guiada

### Pasos 1-2: Named Exports (math.js)

**Abre `starter/utils/math.js`** y descomenta:

1. La constante `PI`
2. Las funciones `sum`, `multiply`, `divide`, `power`

```javascript
export const PI = 3.14159;
export const sum = (a, b) => a + b;
```

---

### Pasos 3-4: Named Exports (strings.js)

**Abre `starter/utils/strings.js`** y descomenta:

1. `capitalize` - primera letra mayúscula
2. `reverse` - invierte string
3. `truncate` - corta string con "..."
4. `slugify` - convierte a slug

---

### Paso 5: Barrel Export (utils/index.js)

**Abre `starter/utils/index.js`** y descomenta las re-exportaciones:

```javascript
export * from './math.js';
export * from './strings.js';
```

---

### Paso 6: Default Export (config.js)

**Abre `starter/config.js`** y descomenta el objeto de configuración:

```javascript
export default config;
```

---

### Paso 7: Importar Todo (main.js)

**Abre `starter/main.js`** y descomenta los imports:

```javascript
import { sum, multiply, PI } from './utils/index.js';
import config from './config.js';
```

---

## ▶️ Ejecución

Necesitas un servidor local porque los módulos ES6 requieren HTTP:

```bash
# Opción 1: Python
cd starter
python -m http.server 8000

# Opción 2: Node
npx serve starter

# Opción 3: VS Code Live Server
# Click derecho en index.html → Open with Live Server
```

Abre `http://localhost:8000` y usa los botones para probar.

---

## ⏱️ Tiempo Estimado

45-50 minutos

---

## ✅ Checklist

- [ ] utils/math.js - todas las funciones descomentadas
- [ ] utils/strings.js - todas las funciones descomentadas
- [ ] utils/index.js - re-exportaciones descomentadas
- [ ] config.js - default export descomentado
- [ ] main.js - imports descomentados
- [ ] Los 3 tests funcionan en el navegador

---

## 🔗 Recursos

- [Teoría: Módulos ES6](../../1-teoria/03-modulos-es6.md)
- [Teoría: Named vs Default](../../1-teoria/04-named-default-exports.md)
- [MDN: import](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
- [MDN: export](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
