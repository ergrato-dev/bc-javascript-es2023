# 📦 Ejercicio 01: Variables Modernas (const y let)

> **📝 Este ejercicio NO se entrega**. Es material de práctica para prepararte para el [Proyecto Final](../../3-proyecto/README.md), que es el único entregable obligatorio.

## 🎯 Objetivo

Dominar el uso de `const` y `let`, entender block scope y aplicar las mejores prácticas de declaración de variables en JavaScript moderno.

## 📋 Descripción

Este ejercicio guiado te enseña a:

- Usar `const` para variables que no cambian
- Usar `let` cuando necesitas reasignar valores
- Entender block scope (ámbito de bloque)
- Modificar objetos y arrays declarados con `const`
- Evitar la Temporal Dead Zone (TDZ)

## 🚀 Instrucciones

### 1. Abre el archivo

Navega a `starter/index.js`

### 2. Ejecuta el archivo

```bash
node starter/index.js
```

### 3. Sigue los pasos

Descomenta el código en cada sección (PASO 1-8) y observa los resultados.

## 📚 Conceptos Cubiertos

| Paso | Concepto | Descripción |
|------|----------|-------------|
| 1 | const Básico | Variables que no se reasignan |
| 2 | let Básico | Variables que pueden cambiar |
| 3 | const con Objetos | Modificar propiedades de objetos |
| 4 | const con Arrays | Modificar contenido de arrays |
| 5 | Block Scope | Ámbito de bloque con {} |
| 6 | let en Loops | Variables de iteración |
| 7 | TDZ | Temporal Dead Zone |
| 8 | Caso Práctico | Configuración de aplicación |

## 💡 Regla de Oro

```javascript
// ✅ BIEN - const por defecto
const name = 'Ana';
const config = { debug: true };
const items = [1, 2, 3];

// ✅ BIEN - let solo cuando necesitas reasignar
let counter = 0;
counter++;

let status = 'pending';
status = 'completed';

// ❌ MAL - nunca uses var
var oldWay = 'evitar';
```

## ✅ Checklist de Aprendizaje

- [ ] Entiendo la diferencia entre const y let
- [ ] Sé que const no impide modificar objetos/arrays
- [ ] Comprendo qué es block scope
- [ ] Sé por qué no usar var
- [ ] Puedo identificar cuándo usar let vs const

## 🔗 Recursos

- [MDN - const](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const)
- [MDN - let](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let)
- [MDN - Block scope](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/block)

---

[Siguiente Ejercicio](../ejercicio-02-templates/README.md) ➡️
