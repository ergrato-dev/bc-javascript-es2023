# 🎨 Assets Visuales - Semana 01

Diagramas y recursos visuales para complementar el material teórico de la primera semana.

---

## 📋 Lista de Assets

### 01. Evolución de JavaScript
**Archivo**: `01-evolucion-javascript.svg`
**Usado en**: [01-introduccion-es6.md](../1-teoria/01-introduccion-es6.md)
**Descripción**: Línea de tiempo mostrando la evolución de ECMAScript desde ES5 (2009) hasta ES2024+, destacando ES6/ES2015 como el punto de inflexión más importante.

**Conceptos visualizados**:
- Timeline de versiones de ECMAScript
- Características clave de ES2023
- Diferencia entre JavaScript legacy y moderno

---

### 02. Comparación Block Scope
**Archivo**: `02-block-scope-comparison.svg`
**Usado en**: [02-let-const.md](../1-teoria/02-let-const.md)
**Descripción**: Comparación visual entre el comportamiento de `var` (function scope) vs `let`/`const` (block scope).

**Conceptos visualizados**:
- Function scope vs Block scope
- Problemas de `var`
- Ventajas de `let` y `const`
- Respeto de bloques `{}`

---

### 03. Template Literals vs Concatenación
**Archivo**: `03-template-literals-comparison.svg`
**Usado en**: [03-template-literals.md](../1-teoria/03-template-literals.md)
**Descripción**: Comparación entre concatenación tradicional con `+` y template literals modernos con backticks.

**Conceptos visualizados**:
- Sintaxis antigua vs moderna
- Interpolación con `${}`
- Problemas de concatenación
- Ventajas de template literals

---

### 04. Arrow Functions - Sintaxis
**Archivo**: `04-arrow-functions-syntax.svg`
**Usado en**: [04-arrow-functions.md](../1-teoria/04-arrow-functions.md)
**Descripción**: Demostración visual de las diferentes variaciones de sintaxis de arrow functions.

**Conceptos visualizados**:
- Comparación función tradicional vs arrow function
- Variaciones de sintaxis (sin parámetros, uno, múltiples)
- Return implícito vs explícito
- Beneficios de sintaxis concisa

---

### 05. Destructuring Visual
**Archivo**: `05-destructuring-visual.svg`
**Usado en**: [05-destructuring-basico.md](../1-teoria/05-destructuring-basico.md)
**Descripción**: Representación visual de cómo funciona el destructuring en objetos y arrays.

**Conceptos visualizados**:
- Destructuring de objetos
- Destructuring de arrays
- Extracción de valores
- Características avanzadas (defaults, renombrar, rest pattern)

---

## 🎨 Estándares de Diseño

Todos los assets SVG siguen estos estándares:

### Colores
- **Background**: `#1a202c` (dark theme)
- **Texto principal**: `#e2e8f0` (gris claro)
- **Texto secundario**: `#a0aec0` (gris medio)
- **Accent JavaScript**: `#f0db4f` (amarillo JavaScript)
- **Success/Modern**: `#48bb78` (verde)
- **Error/Legacy**: `#ef4444` (rojo)
- **Info**: `#4299e1` (azul)

### Tipografía
- **Fuente principal**: `system-ui, sans-serif`
- **Fuente código**: `Courier, monospace`
- **Sin degradados**: Colores sólidos únicamente

### Dimensiones
- **Viewbox estándar**: 800x400 a 800x600 (según complejidad)
- **Formato**: SVG optimizado
- **Responsive**: Escalable sin pérdida de calidad

---

## 💡 Uso en Markdown

Para incluir un asset en un archivo de teoría:

```markdown
![Descripción del diagrama](../0-assets/XX-nombre-archivo.svg)
```

**Ejemplo**:
```markdown
![Evolución de JavaScript](../0-assets/01-evolucion-javascript.svg)
```

---

## 📝 Convenciones de Nomenclatura

```
XX-descripcion-clara.svg
│  └── Descripción en kebab-case
└── Número secuencial (01, 02, 03...)
```

**Reglas**:
- Numerar en orden lógico de aprendizaje
- Usar kebab-case para nombres
- Nombres descriptivos y claros
- Prefijo numérico para orden

---

## 🔧 Creación de Nuevos Assets

Al crear nuevos diagramas SVG:

1. **Seguir estándares de diseño** (colores, tipografía)
2. **Numerar secuencialmente** según orden de aparición
3. **Optimizar SVG** (eliminar código innecesario)
4. **Probar visualización** en diferentes tamaños
5. **Vincular en teoría** con markdown
6. **Actualizar este README** con descripción

---

## 🔗 Referencias

- **Herramientas recomendadas**:
  - [Excalidraw](https://excalidraw.com/) - Diagramas rápidos
  - [Figma](https://figma.com/) - Diseño profesional
  - [draw.io](https://draw.io/) - Diagramas técnicos
  - [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimización SVG

- **Inspiración**:
  - [MDN Web Docs](https://developer.mozilla.org/) - Diagramas técnicos
  - [JavaScript.info](https://javascript.info/) - Visualizaciones educativas

---

## ✅ Checklist para Nuevos Assets

- [ ] SVG optimizado (sin elementos innecesarios)
- [ ] Colores según estándares del bootcamp
- [ ] Tipografía sans-serif
- [ ] Tema dark aplicado
- [ ] Dimensiones apropiadas (800px ancho aprox.)
- [ ] Numeración secuencial correcta
- [ ] Vinculado en archivo de teoría correspondiente
- [ ] Descripción agregada a este README
- [ ] Probado en diferentes dispositivos

---

_Última actualización: Diciembre 2024_
