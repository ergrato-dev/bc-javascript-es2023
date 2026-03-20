# 📘 Ejercicio 04: Imports Avanzados

## 🎯 Objetivos

- Dominar dynamic imports con `import()`
- Implementar lazy loading de módulos
- Crear un sistema de cache de módulos
- Practicar preloading para mejor UX

---

## 📋 Descripción

Este es un **ejercicio guiado paso a paso** que simula una aplicación con carga bajo demanda. Los módulos se cargan solo cuando el usuario los necesita.

---

## 🗂️ Estructura del Ejercicio

```
starter/
├── index.html           # Interfaz (no modificar)
├── app.js               # Aplicación principal - Pasos 1-6
├── loader.js            # Module Registry - Pasos 1-6
└── features/
    ├── calculator.js    # Feature: Calculadora (completo)
    ├── converter.js     # Feature: Conversor (completo)
    └── formatter.js     # Feature: Formateador (completo)
```

**Nota:** Los archivos en `features/` ya están completos. Solo necesitas descomentar código en `app.js` y `loader.js`.

---

## 📝 Práctica Guiada

### Parte A: loader.js (Module Registry)

**Abre `starter/loader.js`** y descomenta los pasos:

#### Paso 1: Clase ModuleLoader
La clase con `cache` y `loading` Maps.

#### Paso 2: Método load(name, path)
Carga módulos con cache inteligente.

```javascript
async load(name, path) {
  if (this.cache.has(name)) return this.cache.get(name);
  // ...
}
```

#### Paso 3: Método isLoaded(name)
Verifica si un módulo está en cache.

#### Paso 4: Método getLoadedModules()
Lista los módulos cargados.

#### Paso 5: Métodos clear() y clearAll()
Limpian el cache.

#### Paso 6: Exportar Singleton
Exporta una única instancia.

---

### Parte B: app.js (Aplicación)

**Abre `starter/app.js`** y descomenta los pasos:

#### Paso 1: Importar el Module Loader
```javascript
import moduleLoader from './loader.js';
```

#### Paso 2: Dynamic Import Básico
Carga calculator.js cuando se hace click.

#### Paso 3: Dynamic Import con Destructuring
Extrae funciones específicas del módulo.

#### Paso 4: Carga con Module Loader
Usa el moduleLoader con cache.

#### Paso 5: Preloading en Hover
Precarga módulos al pasar el mouse.

#### Paso 6: Mostrar y Limpiar Registry
Interactúa con el cache de módulos.

---

## ▶️ Ejecución

Necesitas un servidor local (módulos ES2023 requieren HTTP):

```bash
# Opción 1: Python
cd starter
python -m http.server 8000

# Opción 2: Node
npx serve starter

# Opción 3: VS Code Live Server
# Click derecho en index.html → Open with Live Server
```

Abre `http://localhost:8000` y observa la consola mientras usas los botones.

---

## ⏱️ Tiempo Estimado

45-50 minutos

---

## ✅ Checklist

- [ ] loader.js - Clase ModuleLoader descomentada
- [ ] loader.js - Todos los métodos descomentados
- [ ] loader.js - Export singleton descomentado
- [ ] app.js - Import del loader descomentado
- [ ] app.js - Dynamic import básico funciona
- [ ] app.js - Destructuring funciona
- [ ] app.js - Module loader con cache funciona
- [ ] app.js - Preloading en hover funciona
- [ ] app.js - Registry muestra módulos cargados

---

## 🔍 Observaciones

1. **Abre la consola del navegador** para ver los logs de carga
2. **Haz click múltiples veces** en el mismo botón y observa que la segunda vez dice "desde cache"
3. **Usa "Show Registry"** para ver qué módulos están cargados
4. **Hover sobre las cards** antes de hacer click y observa el preloading

---

## 🔗 Recursos

- [Teoría: Dynamic Imports](../../1-teoria/05-dynamic-imports.md)
- [MDN: import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
- [JavaScript.info: Dynamic imports](https://javascript.info/modules-dynamic-imports)
