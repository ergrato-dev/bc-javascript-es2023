# 📝 Ejercicio 02: Template Literals

> **📝 Este ejercicio NO se entrega**. Es material de práctica para prepararte para el [Proyecto Final](../../3-proyecto/README.md), que es el único entregable obligatorio.

## 🎯 Objetivo

Dominar los template literals para crear strings dinámicos, multilínea y con interpolación de variables y expresiones.

## 📋 Descripción

Este ejercicio guiado te enseña a:

- Usar backticks (`) para template literals
- Interpolar variables con `${variable}`
- Incluir expresiones JavaScript en strings
- Crear strings multilínea
- Generar HTML dinámico
- Construir URLs de forma limpia

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
| 1 | Sintaxis Básica | Uso de backticks |
| 2 | Interpolación | Insertar variables con ${} |
| 3 | Expresiones | Operaciones y ternarios |
| 4 | Multilínea | Strings con saltos de línea |
| 5 | HTML Dinámico | Generar markup |
| 6 | URLs | Construir endpoints |
| 7 | Escapar | Backticks literales |
| 8 | Caso Práctico | Sistema de notificaciones |

## 💡 Comparación Rápida

```javascript
// ❌ ANTES - Concatenación fea
const msg = 'Hola ' + name + ', tienes ' + count + ' mensajes.';

// ✅ AHORA - Template literal limpio
const msg = `Hola ${name}, tienes ${count} mensajes.`;
```

## ✅ Checklist de Aprendizaje

- [ ] Uso backticks (`) en lugar de comillas para strings dinámicos
- [ ] Puedo interpolar variables con ${variable}
- [ ] Puedo incluir expresiones como ${a + b}
- [ ] Sé crear strings multilínea
- [ ] Puedo generar HTML dinámico limpiamente

## 🔗 Recursos

- [MDN - Template literals](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)

---

⬅️ [Ejercicio Anterior](../ejercicio-01-variables/README.md) | [Siguiente Ejercicio](../ejercicio-03-arrows/README.md) ➡️
