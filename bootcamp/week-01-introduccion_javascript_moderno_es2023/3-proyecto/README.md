# 🏛️ Proyecto Semanal: Ficha de Información Interactiva

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la Semana 1. Debe demostrar tu dominio de todos los conceptos aprendidos.

## 🎯 Objetivos del Proyecto

Crear una aplicación web interactiva que muestre una ficha de información de tu dominio asignado, aplicando todos los conceptos aprendidos en la Semana 1:

- ✅ Variables modernas (`const` y `let`)
- ✅ Template literals para contenido dinámico
- ✅ Arrow functions para eventos y lógica
- ✅ Destructuring para manejo de datos

---

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio al inicio del trimestre]

> **IMPORTANTE**: Cada aprendiz tiene un dominio único asignado por el instructor. NO copies la implementación de otro compañero. Tu código debe reflejar tu dominio específico.

---

## 💡 Estructura de Datos Esperada

Independientemente de tu dominio, tu ficha debe incluir:

### Datos Requeridos

| Tipo | Descripción | Ejemplo (Planetario - NO asignable) |
|------|-------------|-------------------------------------|
| **Información básica** | Nombre, descripción, identificador | nombre: "Sistema Solar Interactivo", código: "EXH-001" |
| **Propiedades específicas** | Datos propios del dominio | ubicación, capacidad, estado |
| **Array de elementos** | Lista de items relacionados con nivel/valor | características, servicios, componentes |
| **Estadísticas** | Contadores y métricas numéricas | visitantes, rating, duración |

### Ejemplo de Estructura (Planetario)

```javascript
const exhibitData = {
  name: 'Sistema Solar Interactivo',
  description: 'Exhibición inmersiva del sistema solar',
  code: 'EXH-001',
  location: { room: 'Sala Principal', floor: 2 },
  features: [
    { name: 'Proyección 360°', level: 95 },
    { name: 'Audio envolvente', level: 88 }
  ],
  stats: { visitors: 15000, rating: 4.8, duration: 45 }
};
```

> **Nota**: El ejemplo usa "Planetario" porque NO es un dominio asignable. Adapta esta estructura a tu dominio asignado.

---

## 🎨 Características Requeridas

### Funcionalidades Obligatorias

1. **Información Principal de tu Dominio**
   - Datos básicos de la entidad (nombre, identificador, etc.)
   - Descripción o detalles relevantes
   - Propiedades específicas del dominio

2. **Lista de Elementos Relacionados**
   - Array de elementos (ej: habilidades, características, servicios)
   - Nivel o porcentaje cuando aplique
   - Categorías o tipos

3. **Estadísticas**
   - Contadores relevantes al dominio
   - Cálculos usando métodos de array

4. **Interactividad**
   - Botón para cambiar tema (claro/oscuro)
   - Botón para copiar información al portapapeles
   - Botón para mostrar/ocultar sección

5. **Notificaciones**
   - Toast/mensaje de confirmación para acciones

---

## 📁 Estructura de Archivos

```
3-proyecto/
├── README.md           # Este archivo con instrucciones
├── index.html          # Estructura HTML (completa)
├── styles.css          # Estilos CSS (completo)
├── starter/
│   └── script.js       # Archivo inicial con TODOs
└── solution/
    └── script.js       # Solución de referencia
```

> **📌 Nota Pedagógica**: La carpeta `solution/` está **excluida del repositorio de GitHub** (`.gitignore`). Debes completar los ejercicios por ti mismo.

---

## 🚀 Instrucciones

### Paso 1: Identificar tu Dominio

Revisa con tu instructor cuál es tu dominio asignado para el trimestre.

### Paso 2: Planificar tu Estructura de Datos

Basándote en tu dominio, define:
- ¿Qué entidad principal representarás?
- ¿Qué propiedades tiene esa entidad?
- ¿Qué elementos relacionados tiene (array)?
- ¿Qué estadísticas son relevantes?

### Paso 3: Completar los TODOs en script.js

Abre `starter/script.js` y completa todos los TODOs marcados, adaptándolos a tu dominio.

### Paso 4: Aplicar Conceptos ES2023

Asegúrate de usar:
- `const` para valores que no cambian
- `let` para valores que sí cambian
- Template literals para strings
- Arrow functions para todas las funciones
- Destructuring para extraer datos

### Paso 5: Probar la Funcionalidad

Abre `index.html` en el navegador y verifica que todo funcione.

---

## 📝 TODOs a Completar

### 1. Datos de tu Dominio (Destructuring)
```javascript
// TODO: Crear objeto con datos de tu dominio
// TODO: Extraer datos usando destructuring
```

### 2. Renderizar Información (Template Literals)
```javascript
// TODO: Crear HTML dinámico con template literals
```

### 3. Event Listeners (Arrow Functions)
```javascript
// TODO: Agregar event listeners con arrow functions
```

### 4. Calcular Estadísticas (Array Methods + Arrows)
```javascript
// TODO: Calcular estadísticas usando map, reduce, filter
```

### 5. Toggle Theme (Variables + Funciones)
```javascript
// TODO: Implementar cambio de tema claro/oscuro
```

---

## ✅ Criterios de Evaluación

### Funcionalidad (40%)
- [ ] Muestra correctamente toda la información del dominio
- [ ] Los botones son interactivos
- [ ] Cambio de tema funciona
- [ ] Estadísticas se calculan correctamente
- [ ] Copiar información funciona

### Código ES2023 (30%)
- [ ] Usa `const` por defecto, `let` solo cuando necesario
- [ ] Template literals en lugar de concatenación
- [ ] Arrow functions en lugar de `function`
- [ ] Destructuring aplicado correctamente
- [ ] Sin uso de `var`

### Código Limpio (20%)
- [ ] Código bien indentado
- [ ] Nombres de variables descriptivos en inglés
- [ ] Comentarios explicativos en español
- [ ] Sin código duplicado
- [ ] Estructura lógica y organizada

### Adaptación al Dominio (10%)
- [ ] Datos coherentes con el dominio asignado
- [ ] Propiedades específicas del dominio
- [ ] Implementación original (no copiada)

**Calificación Total**: 100%
**Mínimo para Aprobar**: 70%

---

## 🎨 Bonus (Opcional)

Si terminas antes y quieres un desafío extra:

1. **Validación de Datos**
   - Validar información antes de copiar

2. **Persistencia**
   - Guardar tema preferido en localStorage

3. **Animaciones**
   - Transiciones suaves al cambiar tema

4. **Responsive**
   - Mejorar diseño mobile

---

## 🧪 Cómo Probar

### 1. Abrir en Navegador

```bash
# Opción 1: Doble click en index.html

# Opción 2: Con Live Server (VS Code extension)
# Click derecho en index.html → Open with Live Server

# Opción 3: Python simple server
python -m http.server 8000
# Abrir http://localhost:8000
```

### 2. Verificar Consola

Abre las DevTools (F12) y verifica que no haya errores.

### 3. Probar Funcionalidades

- ✅ Click en "Copiar Información"
- ✅ Click en cambio de tema
- ✅ Click en "Mostrar más" / "Mostrar menos"
- ✅ Verificar estadísticas correctas

---

## 📚 Recursos de Ayuda

- [Teoría Week-01](../1-teoria/)
- [Ejercicios Prácticos](../2-practicas/)
- [MDN: JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

---

## 💡 Pistas

<details>
<summary>Pista 1: Destructuring de objeto</summary>

```javascript
const {
  name,
  description,
  details: { property1, property2 },
  items
} = entityData;
```
</details>

<details>
<summary>Pista 2: Template Literals para HTML</summary>

```javascript
const html = `
  <div class="card">
    <h2>${name}</h2>
    <p>${description}</p>
  </div>
`;
```
</details>

<details>
<summary>Pista 3: Arrow Functions para Events</summary>

```javascript
button.addEventListener('click', () => {
  // Tu código aquí
});
```
</details>

<details>
<summary>Pista 4: Calcular Promedio</summary>

```javascript
const average = items.reduce((sum, item) => sum + item.value, 0) / items.length;
```
</details>

---

## 🎯 Resultado Esperado

Al finalizar, deberías tener:

1. ✅ Ficha mostrando información de tu dominio
2. ✅ Botón funcional para copiar información
3. ✅ Toggle de tema claro/oscuro
4. ✅ Estadísticas calculadas dinámicamente
5. ✅ Código limpio usando ES2023

---

## 🚀 Entrega

> **Este es el único entregable para aprobar la Semana 1**

### Formato

Crea una carpeta con tu apellido y nombre:

```
apellido-nombre-proyecto/
├── index.html
├── styles.css
├── script.js
├── README.md (con tu información)
└── screenshots/
    ├── light-theme.png
    └── dark-theme.png
```

### README de Entrega

```markdown
# Ficha de [Tu Dominio] - [Tu Nombre]

## 📋 Información
- **Nombre**: [Tu nombre completo]
- **Fecha**: [DD/MM/YYYY]
- **Dominio Asignado**: [Tu dominio]
- **Entidad Principal**: [Qué representa tu ficha]

## 🎯 Descripción
[Breve descripción de lo que muestra tu ficha]

## 📚 Conceptos ES2023 Aplicados
- [ ] Variables con let/const
- [ ] Template literals
- [ ] Arrow functions
- [ ] Destructuring
- [ ] Optional chaining (?.)
- [ ] Nullish coalescing (??)

## 🚀 Cómo Ejecutar
1. Abrir index.html en el navegador

## 📸 Screenshots
[Agregar capturas de pantalla]

## 🎯 Autoevaluación
- Funcionalidad: [X]%
- Código ES2023: [X]%
- Código Limpio: [X]%
- Adaptación al Dominio: [X]%
- **Total Estimado**: [X]%
```

### Plazos de Entrega

- **Entrega**: Viernes de la semana correspondiente
- **Retroalimentación**: Dentro de 3 días hábiles
- **Reentrega** (si aplica): Dentro de 5 días de recibir feedback

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo usar librerías externas?**
R: No, este proyecto debe usar solo JavaScript ES2023 puro.

**P: ¿Puedo cambiar el diseño CSS?**
R: Sí, puedes personalizar los estilos a tu gusto.

**P: ¿Qué pasa si mi dominio no está en la lista de ejemplos?**
R: Pregunta a tu instructor. Él puede asignar dominios adicionales.

**P: ¿Puedo ver la solución de otro compañero?**
R: No. Cada dominio es único, tu implementación debe ser original.

---

<p align="center">
  <strong>🏛️ ¡Crea tu ficha de información profesional!</strong><br>
  <em>Aplica todo lo aprendido en un proyecto real adaptado a tu dominio</em>
</p>
