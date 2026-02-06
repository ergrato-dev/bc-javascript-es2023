# 📋 Guía de Desarrollo de Contenidos Semanales

## 🎯 Objetivo

Este documento establece el orden y metodología para desarrollar contenidos de cada semana del bootcamp, asegurando consistencia y calidad en todos los materiales educativos.

---

## 📝 Orden de Desarrollo

El desarrollo de contenidos para cada semana **DEBE** seguir este orden estricto:

### 1️⃣ README de la Semana

**Archivo**: `bootcamp/week-XX/README.md`

**Contenido requerido**:
- Título y descripción general
- 🎯 Objetivos de aprendizaje
- 📚 Requisitos previos
- 🗂️ Estructura de la semana
- 📝 Contenidos (con enlaces a teoría/prácticas)
- ⏱️ Distribución del tiempo (8 horas)
- 📌 Entregables
- 🔗 Navegación (anterior/siguiente semana)

**Propósito**: Establecer la visión general y alcance de la semana antes de desarrollar contenidos específicos.

---

### 2️⃣ Rúbrica de Evaluación

**Archivo**: `bootcamp/week-XX/rubrica-evaluacion.md`

**Contenido requerido**:
- Criterios de evaluación por tipo de evidencia:
  - 🧠 Conocimiento (30%)
  - 💪 Desempeño (40%)
  - 📦 Producto (30%)
- Niveles de logro (Excelente, Bueno, Suficiente, Insuficiente)
- Criterios específicos y medibles
- Mínimo 70% en cada tipo de evidencia para aprobar

**Propósito**: Definir qué se espera del estudiante antes de crear el contenido, asegurando alineación entre objetivos y evaluación.

---

### 3️⃣ Teoría

**Carpeta**: `bootcamp/week-XX/1-teoria/`

**Archivos**: `01-tema.md`, `02-tema.md`, etc.

**Estructura de cada archivo**:
```markdown
# Título del Tema

## 🎯 Objetivos
## 📋 Contenido
## 📚 Recursos Adicionales
## ✅ Checklist de Verificación
```

**Consideraciones**:
- Nomenclatura técnica en **inglés**
- Documentación explicativa en **español**
- Ejemplos de código progresivos
- Conceptos construidos sobre conocimientos previos
- Sin mencionar características pre-ES2023 (salvo comparación)

**Propósito**: Desarrollar el contenido conceptual antes de crear ejercicios prácticos.

---

### 4️⃣ Assets (y vincularlos a teoría)

**Carpeta**: `bootcamp/week-XX/0-assets/`

**Archivos**:
- SVG diagrams (`01-nombre.svg`, `02-nombre.svg`, etc.)
- `README.md` describiendo cada asset

**Proceso**:
1. **Crear assets** siguiendo el estilo establecido:
   - Formato: **SVG**
   - Tema: **Dark** (`#0f172a`)
   - Sin degradés (colores sólidos)
   - Tipografía sans-serif
   - Nomenclatura técnica en inglés, etiquetas en español

2. **Vincular en archivos de teoría**:
   ```markdown
   ## 📋 Contenido

   ![Nombre Descriptivo](../0-assets/01-diagram.svg)

   ---

   ### 1. Sección del Contenido
   ```

**Referencia**: Ver `bootcamp/week-11/0-assets/` y `bootcamp/week-13/0-assets/` como ejemplos.

**Propósito**: Enriquecer el contenido teórico con visualizaciones que faciliten el aprendizaje.

---

### 5️⃣ Práctica Guiada

**Carpeta**: `bootcamp/week-XX/2-practicas/`

**Estructura**:
```
ejercicio-XX-nombre/
├── README.md          # Tutorial paso a paso
├── starter/
│   └── index.js      # Código comentado para descomentar
└── solution/
    └── index.js      # Solución completa
```

**Formato de ejercicios** (⚠️ IMPORTANTE):

#### ✅ CORRECTO - Tutorial guiado:

**README.md**:
```markdown
### Paso 1: Concepto

Explicación del concepto con ejemplo...

**Abre `starter/index.js`** y descomenta la sección correspondiente.
```

**starter/index.js**:
```javascript
// ============================================
// PASO 1: Nombre del Concepto
// ============================================
console.log('--- Paso 1: Nombre del Concepto ---');

// Explicación breve del concepto
// Descomenta las siguientes líneas:
// const result = data.method(x => x.transform);
// console.log('Resultado:', result);

console.log('');
```

#### ❌ INCORRECTO - No usar TODOs en ejercicios:
```javascript
// ❌ Este formato es SOLO para PROYECTOS
const result = null; // TODO: Implementar
```

**Propósito**: Crear ejercicios prácticos que refuercen la teoría mediante descubrimiento guiado.

---

### 6️⃣ Proyecto (ÚNICO ENTREGABLE OBLIGATORIO)

**Carpeta**: `bootcamp/week-XX/3-proyecto/`

> **🎯 ÚNICO ENTREGABLE**: El proyecto es el **único entregable obligatorio** de cada semana. Las prácticas y teoría son materiales de estudio que preparan para este proyecto.

**Estructura**:
```
3-proyecto/
├── README.md          # Instrucciones genéricas del proyecto
├── index.html         # Estructura HTML (si aplica)
├── styles.css         # Estilos CSS (si aplica)
├── starter/
│   └── script.js      # Con TODOs para implementar
└── solution/
    └── script.js      # Solución completa (excluida de GitHub)
```

#### 🏛️ Política de Dominios Únicos (Anticopia)

**Cada aprendiz recibe un dominio único asignado por el instructor al inicio del trimestre:**

- 📖 Biblioteca
- 💊 Farmacia
- 🏋️ Gimnasio
- 🏫 Escuela
- 🏬 Tienda de mascotas
- 🏪 Restaurante
- 🏭 Banco
- 🚕 Agencia de taxis
- 🏥 Hospital
- 🎥 Cine
- 🏞️ Hotel
- ✈️ Agencia de viajes
- 🏎️ Concesionario de autos
- 👗 Tienda de ropa
- 🛠️ Taller mecánico
- Y otros dominios únicos según cantidad de aprendices

**Objetivo**:

- Prevenir copia entre estudiantes
- Fomentar implementaciones originales
- Aplicar conceptos generales a contextos específicos
- Desarrollar capacidad de abstracción y adaptación

**El instructor debe:**

1. Asignar un dominio único a cada aprendiz al inicio del bootcamp
2. Mantener un registro de dominios asignados
3. No repetir dominios en el mismo grupo
4. Validar que las implementaciones sean coherentes con el dominio

**⚠️ IMPORTANTE para desarrollo de contenidos:**

- Los ejemplos en los proyectos **NO deben usar dominios de la lista anterior**
- Usar ejemplos genéricos o dominios diferentes (ej: Museo, Planetario, Acuario)
- Esto evita "regalar" soluciones a aprendices con esos dominios asignados

#### 📋 Formato de Proyecto (con TODOs)

A diferencia de los ejercicios, el proyecto SÍ usa TODOs para que el estudiante implemente desde cero.

**Las instrucciones de los proyectos deben ser genéricas y adaptables a cualquier dominio.**

**Ejemplo - starter/script.js:**
```javascript
// ============================================
// COMPONENTE: ItemCard
// Muestra información de un elemento del dominio
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este componente a tu dominio asignado.
// Ejemplos:
// - Biblioteca: BookCard (libro)
// - Farmacia: MedicineCard (medicamento)
// - Gimnasio: MemberCard (miembro)
// - Restaurante: DishCard (platillo)

/**
 * Objeto que representa un elemento del dominio
 * @typedef {Object} Item
 * @property {number} id - Identificador único
 * @property {string} name - Nombre del elemento
 * @property {string} description - Descripción del elemento
 */

// TODO: Agregar propiedades específicas de tu dominio
// Ejemplo (Biblioteca): author, isbn, available
// Ejemplo (Farmacia): price, stock, laboratory

const itemData = {
  // TODO: Definir las propiedades de tu elemento
};

/**
 * Renderiza la información de un elemento del dominio
 * @param {Item} item - Datos del elemento
 * @returns {string} HTML del elemento
 */
const renderItem = item => {
  // TODO: Implementar usando template literals
  // 1. Mostrar información relevante del elemento
  // 2. Aplicar destructuring para extraer propiedades
  // 3. Retornar HTML generado con template literals
  return '';
};
```

**El README.md del proyecto debe incluir:**
```markdown
## 🏛️ Proyecto Semanal: [Título Genérico]

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

### 🎯 Objetivo

Implementar [concepto aprendido] aplicado a tu dominio asignado.

### 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio al inicio del trimestre]

### ✅ Requisitos Funcionales (Adaptables a tu dominio)

1. Crear estructura de datos para tu dominio
2. Implementar funciones de renderizado
3. Agregar interactividad básica
4. etc.

### 💡 Ejemplos de Adaptación por Dominio

- **Biblioteca**: Gestionar libros, autores, préstamos
- **Farmacia**: Gestionar medicamentos, ventas, inventario
- **Gimnasio**: Gestionar miembros, rutinas, asistencias
- **Restaurante**: Gestionar platillos, mesas, pedidos

### 🛠️ Entregables

1. Código funcional adaptado a tu dominio
2. Documentación README con descripción de tu dominio
3. Screenshots de la aplicación funcionando
```

El estudiante debe:

1. Leer las instrucciones en README.md
2. Adaptar los conceptos genéricos a su dominio específico
3. Completar cada TODO con implementación contextualizada
4. Usar lo aprendido en teoría y prácticas guiadas

**Propósito**: Integrar todos los conocimientos de la semana en un proyecto funcional adaptado al dominio personal.

---

### 7️⃣ Recursos (completos)

**Carpeta**: `bootcamp/week-XX/4-recursos/`

**Subcarpetas**:
- `ebooks-free/` - Libros gratuitos relevantes
- `videografia/` - Videos tutoriales (con enlaces)
- `webgrafia/` - Documentación y artículos

**Archivo**: `README.md` con índice de recursos

**Contenido de webgrafia/README.md**:
```markdown
# 🔗 Webgrafía

## Documentación Oficial
- [MDN - Tema](url) - Descripción
- [JavaScript.info - Tema](url) - Descripción

## Artículos Recomendados
- [Título del artículo](url) - Autor - Descripción

## Tutoriales Interactivos
- [Plataforma - Curso](url) - Descripción
```

**Propósito**: Proporcionar recursos complementarios de calidad para profundizar en los temas.

---

### 8️⃣ Glosario

**Carpeta**: `bootcamp/week-XX/5-glosario/`

**Archivo**: `README.md`

**Formato**:
```markdown
# 📖 Glosario - Semana XX

Términos técnicos clave de esta semana, ordenados alfabéticamente.

---

## A

### Arrow Function
**Definición**: Sintaxis concisa para escribir funciones en JavaScript ES6+.

**Ejemplo**:
\`\`\`javascript
const suma = (a, b) => a + b;
\`\`\`

**Ver también**: Function Expression, Function Declaration

---

## B

### Callback
...
```

**Propósito**: Consolidar la terminología clave de la semana en un formato de referencia rápida.

---

## 🔍 Identificación de Patrones

**⚠️ SIEMPRE revisar semanas anteriores** para identificar:

### Patrones de Estructura
- Layout de archivos README
- Formato de títulos y secciones
- Estructura de ejercicios

### Patrones de Contenido
- Progresión de dificultad
- Estilo de ejemplos de código
- Nivel de detalle en explicaciones

### Patrones Visuales
- Paleta de colores en assets
- Estilos de diagramas SVG
- Tipografía y diseño

### Semanas de Referencia Clave
- **Week-01 a Week-05**: Fundamentos y estructura base
- **Week-11**: Assets SVG con manejo de errores
- **Week-13**: Assets SVG con programación asincrónica

---

## ✅ Checklist de Verificación Final

Antes de considerar una semana completa:

- [ ] README.md con estructura completa
- [ ] Rúbrica de evaluación con 3 tipos de evidencia
- [ ] Todos los archivos de teoría creados y revisados
- [ ] Assets SVG creados y vinculados en teoría
- [ ] README.md de assets con descripción completa
- [ ] Ejercicios prácticos con formato de tutorial guiado
- [ ] Recursos completos (ebooks, videos, webgrafía)
- [ ] Glosario con términos clave ordenados A-Z
- [ ] Nomenclatura técnica en inglés, documentación en español
- [ ] Código funcional y probado
- [ ] Consistencia con semanas anteriores
- [ ] Navegación entre semanas actualizada

---

## 🎨 Estándares de Calidad

### Código
- ✅ Sintaxis ES2023
- ✅ Nombres descriptivos
- ✅ Comentarios en español para explicaciones educativas
- ✅ Ejemplos progresivos (simple → complejo)

### Documentación
- ✅ Markdown bien formateado
- ✅ Enlaces funcionales
- ✅ Emojis para mejorar legibilidad (con moderación)
- ✅ Español claro y directo

### Assets Visuales
- ✅ SVG (no ASCII art)
- ✅ Tema dark sin degradés
- ✅ Tipografía sans-serif
- ✅ Paleta de colores consistente
- ✅ Optimizados antes de incluir

---

## 📌 Notas Importantes

### Diferencia entre Ejercicios y Proyectos

| Aspecto | Ejercicios (2-practicas/) | Proyectos (3-proyecto/) |
|---------|---------------------------|-------------------------|
| **Formato** | Código comentado para descomentar | TODOs para implementar |
| **Propósito** | Aprendizaje guiado paso a paso | Aplicación integral |
| **Dificultad** | Incremental por paso | Integración completa |
| **Estructura** | Tutorial con README detallado | Instrucciones generales |

### Gestores de Paquetes

- ❌ **NUNCA usar `npm`**
- ✅ **SOLO usar `pnpm` o `yarn`**

### Base de Datos

- ✅ **USAR SQLite** cuando se requiera BD relacional
- Facilidad de configuración
- Sin servidor
- Perfecto para aprendizaje

---

## 🔗 Referencias

- [Instrucciones para GitHub Copilot](/.github/copilot-instructions.md)
- [Plan de Estudios](_docs/plan-estudios.md)
- [README Principal](../README.md)

---

_Última actualización: Febrero 2026_
_Versión: 1.0_
