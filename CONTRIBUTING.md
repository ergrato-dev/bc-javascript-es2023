# Guía de Contribución

¡Gracias por tu interés en contribuir al Bootcamp JavaScript ES2023! 🎉

Este documento proporciona las directrices para contribuir al proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Configuración del entorno](#configuración-del-entorno)
- [Flujo de trabajo](#flujo-de-trabajo)
- [Guías de estilo](#guías-de-estilo)
- [Commits](#commits)
- [¿Preguntas?](#preguntas)

---

## Código de Conducta

Este proyecto se adhiere al [Código de Conducta](CODE_OF_CONDUCT.md). Al participar, se espera que mantengas este código. Por favor, reporta comportamientos inaceptables a [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com).

---

## ¿Cómo puedo contribuir?

### 🐛 Reportar Bugs

Antes de crear un reporte de bug, por favor:

1. **Verifica** si ya existe un issue similar
2. **Usa** la plantilla de issue para bugs
3. **Incluye** toda la información solicitada

**Información necesaria:**
- Descripción clara del problema
- Pasos para reproducirlo
- Comportamiento esperado vs real
- Screenshots (si aplica)
- Entorno (navegador, versión de Node, etc.)

### ✨ Sugerir Mejoras

Para sugerir nuevas características o mejoras:

1. **Abre un issue** describiendo tu propuesta
2. **Explica** por qué sería útil para el bootcamp
3. **Proporciona** ejemplos de uso cuando sea posible

### 📝 Mejorar Documentación

La documentación es crucial para un proyecto educativo:

- Corregir errores tipográficos
- Clarificar explicaciones confusas
- Agregar ejemplos adicionales
- Traducir contenido
- Mejorar diagramas y visualizaciones

### 💻 Contribuir Código

#### Áreas de contribución:

1. **Ejercicios prácticos**
   - Nuevos ejercicios para las prácticas semanales
   - Soluciones alternativas comentadas
   - Casos de prueba adicionales

2. **Proyectos**
   - Nuevos proyectos integradores
   - Mejoras a proyectos existentes
   - Código inicial (starter code)

3. **Recursos**
   - eBooks gratuitos
   - Videos tutoriales
   - Enlaces a documentación

4. **Herramientas**
   - Scripts de automatización
   - Utilidades para estudiantes
   - Configuraciones útiles

---

## Configuración del entorno

### 1. Fork y Clone

```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/TU-USUARIO/bc-javascript-es2023.git
cd bc-javascript-es2023

# Agrega el repositorio original como upstream
git remote add upstream https://github.com/epti-dev/bc-javascript-es2023.git
```

### 2. Instalar Dependencias

```bash
# Usar pnpm (recomendado)
pnpm install

# O yarn
yarn install

# ❌ NO usar npm
```

### 3. Configurar VS Code

Las extensiones recomendadas se instalarán automáticamente al abrir el proyecto.

---

## Flujo de trabajo

### 1. Sincronizar con upstream

```bash
git checkout main
git fetch upstream
git merge upstream/main
```

### 2. Crear una rama

```bash
# Usar nomenclatura descriptiva
git checkout -b feature/nueva-practica-arrays
git checkout -b fix/corregir-typo-semana-05
git checkout -b docs/mejorar-readme-semana-10
```

### 3. Hacer cambios

- Escribe código limpio y bien documentado
- Sigue las guías de estilo del proyecto
- Agrega comentarios educativos
- Prueba tu código

### 4. Commit

```bash
# Usar Conventional Commits
git add .
git commit -m "feat(week-03): add array methods practice"
```

### 5. Push y Pull Request

```bash
git push origin feature/nueva-practica-arrays
```

Luego abre un Pull Request en GitHub con:
- Descripción clara de los cambios
- Referencias a issues relacionados
- Screenshots (si aplica)

---

## Guías de estilo

### JavaScript

**✅ Hacer:**

```javascript
// const/let, nunca var
const users = [];
let counter = 0;

// Arrow functions
const double = x => x * 2;

// Template literals
const message = `Hola, ${name}!`;

// Destructuring
const { name, age } = user;

// Spread operator
const newArray = [...oldArray, newItem];

// Optional chaining
const street = user?.address?.street;
```

**❌ Evitar:**

```javascript
// var
var oldStyle = 'no';

// function keyword para funciones cortas
function double(x) {
  return x * 2;
}

// Concatenación de strings
var message = 'Hola, ' + name + '!';

// Acceso sin optional chaining
const street = user && user.address && user.address.street;
```

### Markdown

- Usar headers jerárquicos (#, ##, ###)
- Incluir emojis para mejorar legibilidad (con moderación)
- Code blocks con lenguaje especificado
- Enlaces descriptivos
- Listas con viñetas o numeración consistente

### Nomenclatura

| Tipo                | Convención       | Ejemplo           |
| ------------------- | ---------------- | ----------------- |
| Variables/Funciones | camelCase        | `getUserData()`   |
| Constantes          | UPPER_SNAKE_CASE | `API_URL`         |
| Clases              | PascalCase       | `UserService`     |
| Archivos            | kebab-case       | `user-service.js` |
| Carpetas            | kebab-case       | `2-practicas/`    |

### Comentarios

```javascript
// ❌ Comentarios obvios
let x = 5; // asigna 5 a x

// ✅ Comentarios educativos
// Usamos Map para búsquedas O(1) en lugar de Array.find() que es O(n)
const userMap = new Map(users.map(u => [u.id, u]));
```

---

## Commits

### Conventional Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/) para mensajes de commit claros:

```
<tipo>(<alcance>): <descripción>

[cuerpo opcional]

[footer opcional]
```

#### Tipos:

- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Solo documentación
- `style`: Formateo, punto y coma faltantes, etc.
- `refactor`: Refactorización de código
- `test`: Agregar tests
- `chore`: Mantenimiento

#### Ejemplos:

```bash
feat(week-05): add async/await exercises
fix(week-03): correct typo in array methods theory
docs(readme): update installation instructions
style(week-08): format code with prettier
refactor(week-12): simplify DOM manipulation examples
test(week-15): add unit tests for fetch examples
chore: update dependencies
```

### Alcance

El alcance debe indicar la semana o área afectada:

- `week-01`, `week-02`, etc. para semanas específicas
- `docs` para documentación general
- `scripts` para herramientas
- `config` para configuraciones

---

## Proceso de revisión

### Pull Requests

Tu PR será revisado por los mantenedores. Esperamos:

1. **Código funcional**: Sin errores
2. **Tests**: Si aplica
3. **Documentación**: Actualizada
4. **Estilo**: Siguiendo las guías
5. **Commits**: Con mensajes claros

### Feedback

- Sé receptivo a comentarios
- Haz cambios solicitados
- Participa en la discusión

---

## ¿Preguntas?

Si tienes dudas:

- 💬 [GitHub Discussions](https://github.com/epti-dev/bc-javascript-es2023/discussions)
- 🐛 [GitHub Issues](https://github.com/epti-dev/bc-javascript-es2023/issues)
- 📧 Email: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

---

## Reconocimiento

Todos los contribuidores serán reconocidos en:

- README principal
- Página de agradecimientos
- Release notes

¡Gracias por contribuir! 🎉

---

*Última actualización: Diciembre 2025*
