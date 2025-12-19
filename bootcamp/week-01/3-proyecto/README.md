# 🎨 Proyecto: Tarjeta de Presentación Interactiva

## 🎯 Objetivos del Proyecto

Crear una aplicación web interactiva que muestre una tarjeta de presentación personal, aplicando todos los conceptos aprendidos en la Semana 1:

- ✅ Variables modernas (`const` y `let`)
- ✅ Template literals para contenido dinámico
- ✅ Arrow functions para eventos y lógica
- ✅ Destructuring para manejo de datos

---

## 📋 Descripción

Desarrollarás una tarjeta de presentación digital que muestra información personal y profesional de forma atractiva e interactiva. Los usuarios podrán editar la información en tiempo real y ver estadísticas básicas.

---

## 🎨 Características

### Funcionalidades Requeridas

1. **Información Personal**
   - Nombre completo
   - Profesión/Título
   - Email y teléfono
   - Ubicación
   - Biografía breve

2. **Redes Sociales**
   - Enlaces a GitHub, LinkedIn, Twitter
   - Contador de seguidores/conexiones

3. **Habilidades**
   - Lista de skills técnicos
   - Nivel de experiencia (porcentaje o años)

4. **Interactividad**
   - Botón para editar información
   - Modo claro/oscuro
   - Copiar email al portapapeles
   - Mostrar/ocultar secciones

5. **Estadísticas**
   - Total de habilidades
   - Promedio de años de experiencia
   - Redes sociales activas

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
    └── script.js       # Solución completa (excluida de GitHub)
```

> **📌 Nota Pedagógica**: Las carpetas `solution/` están **excluidas del repositorio de GitHub** (`.gitignore`). Esto es intencional para fomentar el aprendizaje activo. Debes completar los ejercicios por ti mismo sin depender de soluciones pre-hechas. Las soluciones solo están disponibles localmente para tu instructor/mentor.

---

## 🚀 Instrucciones

### Paso 1: Revisar el HTML y CSS

El HTML y CSS ya están completos. Tu trabajo es completar el JavaScript.

### Paso 2: Completar los TODOs en script.js

Abre `starter/script.js` y completa todos los TODOs marcados.

### Paso 3: Aplicar Conceptos ES6+

Asegúrate de usar:
- `const` para valores que no cambian
- `let` para valores que sí cambian
- Template literals para strings
- Arrow functions para todas las funciones
- Destructuring para extraer datos

### Paso 4: Probar la Funcionalidad

Abre `index.html` en el navegador y verifica que todo funcione.

---

## 📝 TODOs a Completar

### 1. Datos de Usuario (Destructuring)
```javascript
// TODO: Extraer datos del objeto userData usando destructuring
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
- [ ] Muestra correctamente toda la información
- [ ] Los botones son interactivos
- [ ] Cambio de tema funciona
- [ ] Estadísticas se calculan correctamente
- [ ] Copiar email funciona

### Código ES6+ (30%)
- [ ] Usa `const` por defecto, `let` solo cuando necesario
- [ ] Template literals en lugar de concatenación
- [ ] Arrow functions en lugar de `function`
- [ ] Destructuring aplicado correctamente
- [ ] Sin uso de `var`

### Código Limpio (20%)
- [ ] Código bien indentado
- [ ] Nombres de variables descriptivos en inglés
- [ ] Comentarios explicativos en inglés
- [ ] Sin código duplicado
- [ ] Estructura lógica y organizada

### Creatividad (10%)
- [ ] Personalización de datos
- [ ] Mejoras visuales o funcionales
- [ ] Características adicionales

---

## 🎨 Bonus (Opcional)

Si terminas antes y quieres un desafío extra:

1. **Validación de Datos**
   - Validar email antes de copiar
   - Validar URLs de redes sociales

2. **Persistencia**
   - Guardar tema preferido en localStorage
   - Guardar cambios de información

3. **Animaciones**
   - Transiciones suaves al cambiar tema
   - Animación al copiar email

4. **Responsive**
   - Mejorar diseño mobile
   - Agregar breakpoints

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

- ✅ Click en "Copy Email"
- ✅ Click en "Toggle Theme"
- ✅ Click en "Show More" / "Show Less"
- ✅ Verificar estadísticas correctas

---

## 📚 Recursos de Ayuda

- [Teoría Week-01](../../1-teoria/)
- [Ejercicios Prácticos](../../2-practicas/)
- [MDN: JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

---

## 💡 Pistas

<details>
<summary>Pista 1: Destructuring de userData</summary>

```javascript
const {
  name,
  title,
  contact: { email, phone },
  skills
} = userData;
```
</details>

<details>
<summary>Pista 2: Template Literals para HTML</summary>

```javascript
const html = `
  <div class="card">
    <h2>${name}</h2>
    <p>${title}</p>
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
const average = skills.reduce((sum, skill) => sum + skill.years, 0) / skills.length;
```
</details>

---

## 🎯 Resultado Esperado

Al finalizar, deberías tener:

1. ✅ Tarjeta mostrando toda tu información
2. ✅ Botón funcional para copiar email
3. ✅ Toggle de tema claro/oscuro
4. ✅ Estadísticas calculadas dinámicamente
5. ✅ Código limpio usando ES6+

---

## 🚀 Entrega

### Formato

Crea una carpeta con tu apellido y nombre:

```
apellido-nombre-tarjeta/
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
# Tarjeta de Presentación - [Tu Nombre]

## 📋 Información
- **Nombre**: [Tu nombre completo]
- **Fecha**: [DD/MM/YYYY]
- **Proyecto**: Week 01 - Tarjeta de Presentación

## 🎯 Características Implementadas
- [ ] Información personal dinámica
- [ ] Copiar email
- [ ] Tema claro/oscuro
- [ ] Estadísticas
- [ ] [Otras características]

## 🛠️ Tecnologías Usadas
- HTML5
- CSS3
- JavaScript ES6+

## 🚀 Cómo Ejecutar
1. Abrir index.html en el navegador
2. [Otros pasos si aplicable]

## 📸 Screenshots
[Agregar capturas de pantalla]

## ✨ Características Extra
[Describe cualquier funcionalidad adicional que hayas agregado]
```

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo usar librerías externas?**
R: No, este proyecto debe usar solo JavaScript ES6+ puro.

**P: ¿Puedo cambiar el diseño CSS?**
R: Sí, puedes personalizar los estilos a tu gusto.

**P: ¿Debo usar mis datos reales?**
R: Puedes usar datos ficticios o reales, como prefieras.

**P: ¿Qué pasa si no sé hacer algo?**
R: Revisa la teoría, los ejercicios, y usa las pistas. Si aún tienes dudas, pregunta.

---

<p align="center">
  <strong>🎨 ¡Crea tu tarjeta de presentación profesional!</strong><br>
  <em>Aplica todo lo aprendido en un proyecto real</em>
</p>
