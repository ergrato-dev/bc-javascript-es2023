# Ejercicio 03: Módulos ES6

## 🎯 Objetivo

Practicar la organización de código en módulos usando import/export - la base de una arquitectura escalable.

---

## 📋 Conceptos a Practicar

- `export` named y default
- `import` con destructuring
- Re-exportación con index.js
- Organización en carpetas

---

## 🏋️ Instrucciones

1. Abre `starter/index.js`
2. Lee cada sección y descomenta el código
3. **Nota**: Este ejercicio es conceptual (simulado con comentarios)
4. En el proyecto real usarás módulos con el navegador

---

## 📚 Pasos del Ejercicio

### Paso 1: Export Named
- Exportar múltiples elementos de un archivo
- Importar con llaves `{ }`

### Paso 2: Export Default
- Un export principal por archivo
- Importar sin llaves

### Paso 3: Re-exportación
- Crear archivos index.js como punto de entrada
- Agrupar exports de una carpeta

### Paso 4: Arquitectura de Carpetas
- Estructura models/, services/, ui/
- Imports organizados

---

## ✅ Resultado Esperado

```
--- Paso 1: Export Named ---
Importando con destructuring:
formatPrice(99.99) = $99.99
validateEmail('test@mail.com') = true
APP_NAME = Mi App

--- Paso 2: Export Default ---
Export default vs named:
ProductService es el export default
Los demás son named exports

--- Paso 3: Re-exportación ---
Importar desde index.js:
import { Product, User, Cart } from './models'
Todos los modelos disponibles desde un punto

--- Paso 4: Arquitectura ---
Estructura del proyecto:
js/
├── models/     → Clases de datos
├── services/   → Lógica de negocio
├── ui/         → Componentes visuales
├── config.js   → Configuración
└── main.js     → Entry point

✅ ¡Ejercicio completado!
```

---

## 🔗 Navegación

| ⬅️ Anterior | Lista | Siguiente ➡️ |
|:------------|:-----:|-------------:|
| [Ejercicio 02](../ejercicio-02-observer/README.md) | [Ejercicios](../README.md) | [Ejercicio 04](../ejercicio-04-map/README.md) |
