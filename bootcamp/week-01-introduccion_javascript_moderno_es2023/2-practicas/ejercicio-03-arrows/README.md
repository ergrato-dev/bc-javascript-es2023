# ➡️ Ejercicio 03: Arrow Functions
> **📝 Este ejercicio NO se entrega**. Es material de práctica para prepararte para el [Proyecto Final](../../3-proyecto/README.md), que es el único entregable obligatorio.
## 🎯 Objetivo

Dominar la sintaxis de arrow functions y su uso con métodos de array como `map`, `filter`, `find` y `reduce`.

## 📋 Descripción

Este ejercicio guiado te enseña a:

- Escribir arrow functions con sintaxis concisa
- Usar retorno implícito y explícito
- Aplicar arrow functions con métodos de array
- Encadenar transformaciones
- Procesar arrays de objetos

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
| 1 | Sintaxis Básica | Un parámetro, sin parámetros |
| 2 | Múltiples Parámetros | Paréntesis obligatorios |
| 3 | Tipos de Retorno | Implícito vs explícito |
| 4 | Con Arrays | map, filter, find, some |
| 5 | Encadenar | Múltiples operaciones |
| 6 | Objetos | Transformar arrays de objetos |
| 7 | Callbacks | setTimeout, forEach |
| 8 | Caso Práctico | Procesamiento de datos |

## 💡 Referencia Rápida

```javascript
// Sin parámetros
const fn = () => 'resultado';

// Un parámetro (paréntesis opcionales)
const fn = x => x * 2;
const fn = (x) => x * 2;

// Múltiples parámetros
const fn = (a, b) => a + b;

// Retorno de objeto (paréntesis obligatorios)
const fn = () => ({ key: 'value' });

// Cuerpo con múltiples líneas
const fn = (x) => {
  const result = x * 2;
  return result;
};
```

## ✅ Checklist de Aprendizaje

- [ ] Sé cuándo los paréntesis son opcionales vs obligatorios
- [ ] Entiendo la diferencia entre retorno implícito y explícito
- [ ] Puedo usar arrow functions con map y filter
- [ ] Puedo encadenar múltiples métodos de array
- [ ] Sé retornar objetos con paréntesis

## 🔗 Recursos

- [MDN - Arrow functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [JavaScript.info - Arrow functions](https://javascript.info/arrow-functions-basics)

---

⬅️ [Ejercicio Anterior](../ejercicio-02-templates/README.md) | [Siguiente Ejercicio](../ejercicio-04-destructuring/README.md) ➡️
