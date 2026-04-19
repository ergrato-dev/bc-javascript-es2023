# 🤖 Instrucciones para GitHub Copilot

## 📋 Contexto del Bootcamp

Este es un **Bootcamp de JavaScript Moderno (ES2023)** estructurado para llevar a estudiantes de cero a héroe en desarrollo JavaScript moderno.

### 📊 Datos del Bootcamp

- **Duración**: 28 semanas (~7 meses)
- **Dedicación semanal**: 8 horas
- **Total de horas**: ~224 horas
- **Nivel de salida**: Desarrollador JavaScript Junior
- **Enfoque**: JavaScript moderno (ES2023) sin historia pre-ES2023
- **Stack**: JavaScript puro, sin frameworks (React/Vue/Angular van en otro bootcamp)

---

## 🎯 Objetivos de Aprendizaje

Al finalizar el bootcamp, los estudiantes serán capaces de:

- ✅ Dominar las características modernas de JavaScript (ES2023)
- ✅ Trabajar con programación asincrónica (Promises, async/await)
- ✅ Manipular el DOM y gestionar eventos de manera efectiva
- ✅ Consumir y trabajar con APIs REST usando Fetch API
- ✅ Aplicar programación funcional y patrones modernos
- ✅ Escribir tests automatizados con Jest
- ✅ Implementar clean code y mejores prácticas
- ✅ Construir aplicaciones completas y complejas con JavaScript puro

---

## 📚 Estructura del Bootcamp

### Distribución por Etapas

#### **Fundamentos Modernos (Semanas 1-12)** - 96 horas

- ES2023 desde el inicio (let/const, arrow functions, destructuring)
- Template literals, spread operator, rest parameters
- Módulos ES (import/export, dynamic imports)
- Arrays modernos (map, filter, reduce, at(), findLast(), toSorted(), toReversed(), with())
- Optional chaining `?.`, nullish coalescing `??`, logical assignment (`??=`, `||=`, `&&=`)
- Clases modernas con campos privados `#` y static blocks
- Numeric separators (`1_000_000`), BigInt

#### **Intermedio (Semanas 13-24)** - 96 horas

- Programación asincrónica (Promises, async/await, top-level await)
- Promise.all(), Promise.race(), Promise.allSettled(), Promise.any()
- Fetch API y trabajo con APIs REST
- Manejo avanzado de errores (Error cause, custom errors)
- DOM moderno y eventos
- LocalStorage, SessionStorage e IndexedDB
- Programación funcional (composición, inmutabilidad)

#### **Avanzado (Semanas 25-28)** - 32 horas

- Testing con Jest
- Patrones de diseño en JavaScript
- Clean code y mejores prácticas
- Debugging avanzado
- Proyectos completos y complejos

---

## 🗂️ Estructura de Carpetas

Cada semana sigue esta estructura estándar:

```
bootcamp/week-XX/
├── README.md                 # Descripción y objetivos de la semana
├── rubrica-evaluacion.md     # Criterios de evaluación detallados
├── 0-assets/                 # Imágenes, diagramas y recursos visuales
├── 1-teoria/                 # Material teórico (archivos .md)
├── 2-practicas/              # Ejercicios guiados paso a paso
├── 3-proyecto/               # Proyecto semanal integrador
├── 4-recursos/               # Recursos adicionales
│   ├── ebooks-free/          # Libros electrónicos gratuitos
│   ├── videografia/          # Videos y tutoriales recomendados
│   └── webgrafia/            # Enlaces y documentación
└── 5-glosario/               # Términos clave de la semana (A-Z)
    └── README.md
```

### 📁 Carpetas Raíz

- **`assets/`**: Recursos visuales globales (logos, headers, etc.)
- **`docs/`**: Documentación general que aplica a todo el bootcamp
- **`scripts/`**: Scripts de automatización y utilidades
- **`bootcamp/`**: Contenido semanal del bootcamp

---

## 🎓 Componentes de Cada Semana

### 1. **Teoría** (1-teoria/)

- Archivos markdown con explicaciones conceptuales
- Ejemplos de código con comentarios claros
- Diagramas y visualizaciones cuando sea necesario
- Referencias a documentación oficial

### 2. **Prácticas** (2-practicas/)

- Ejercicios guiados paso a paso
- Incremento progresivo de dificultad
- Soluciones comentadas
- Casos de uso del mundo real

#### 📋 Formato de Ejercicios (Referencia: week-05)

Los ejercicios son **tutoriales guiados**, NO tareas con TODOs. El estudiante aprende descomentando código:

**README.md del ejercicio:**

```markdown
### Paso 1: Nombre del Concepto

Explicación del concepto con ejemplo:

\`\`\`javascript
// Ejemplo explicativo
const result = data.method(x => x.transform);
\`\`\`

**Abre `starter/index.js`** y descomenta la sección correspondiente.
```

**starter/index.js:**

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

**solution/index.js:**

```javascript
// ============================================
// PASO 1: Nombre del Concepto
// ============================================
console.log('--- Paso 1: Nombre del Concepto ---');

const result = data.method(x => x.transform);
console.log('Resultado:', result);
```

#### ❌ NO usar este formato en ejercicios:

```javascript
// ❌ INCORRECTO - Este formato es para PROYECTOS, no ejercicios
const result = null; // TODO: Implementar
```

#### ✅ Usar este formato en ejercicios:

```javascript
// ✅ CORRECTO - Código comentado para descomentar
// Descomenta las siguientes líneas:
// const result = data.method(x => x.transform);
// console.log('Resultado:', result);
```

### 3. **Proyecto** (3-proyecto/)

- Proyecto integrador que consolida lo aprendido
- README.md con instrucciones claras
- Código inicial o plantillas cuando sea apropiado
- Criterios de evaluación específicos
- **Política de Dominios Únicos**: Cada aprendiz trabaja sobre un dominio diferente
- **Único entregable obligatorio** de cada semana

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

- Los ejemplos en los proyectos NO deben usar dominios de la lista anterior
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

### 4. **Recursos** (4-recursos/)

- **ebooks-free/**: Libros gratuitos relevantes
- **videografia/**: Videos tutoriales complementarios
- **webgrafia/**: Enlaces a documentación y artículos

### 5. **Glosario** (5-glosario/)

- Términos técnicos ordenados alfabéticamente
- Definiciones claras y concisas
- Ejemplos de código cuando aplique

---

## 📝 Convenciones de Código

### Estilo JavaScript Moderno

```javascript
// ✅ BIEN - usar const por defecto
const API_URL = 'https://api.example.com';
const users = [];

// ✅ BIEN - usar let solo si necesitas reasignar
let counter = 0;

// ❌ MAL - no usar var
var oldSchool = 'evitar';

// ✅ BIEN - arrow functions para funciones cortas
const double = x => x * 2;
const greet = name => `Hola, ${name}!`;

// ✅ BIEN - destructuring
const { name, age } = user;
const [first, second] = array;

// ✅ BIEN - spread operator
const newArray = [...oldArray, newItem];
const newObject = { ...oldObject, newProp: 'value' };

// ✅ BIEN - template literals
const message = `Usuario: ${name}, Edad: ${age}`;

// ✅ BIEN - optional chaining
const street = user?.address?.street;

// ✅ BIEN - nullish coalescing
const value = config.timeout ?? 3000;

// ✅ BIEN - logical assignment operators (ES2021)
config.timeout ??= 3000;
user.name ||= 'Anonymous';

// ✅ BIEN - numeric separators (ES2021)
const billion = 1_000_000_000;

// ✅ BIEN - array.at() para índices negativos (ES2022)
const lastItem = array.at(-1);

// ✅ BIEN - Object.hasOwn() en lugar de hasOwnProperty (ES2022)
if (Object.hasOwn(obj, 'prop')) { /* ... */ }

// ✅ BIEN - Error cause (ES2022)
throw new Error('Failed to fetch', { cause: originalError });

// ✅ BIEN - métodos inmutables de array (ES2023)
const sorted = array.toSorted((a, b) => a - b);
const reversed = array.toReversed();
const modified = array.with(2, 'newValue');

// ✅ BIEN - findLast y findLastIndex (ES2023)
const lastEven = numbers.findLast(n => n % 2 === 0);
```

### Nomenclatura

- **Variables y funciones**: camelCase
- **Constantes globales**: UPPER_SNAKE_CASE
- **Clases**: PascalCase
- **Archivos**: kebab-case.js

---

## 🧪 Testing

El bootcamp enseña testing con **Jest** en las semanas avanzadas.

### Estructura de Tests

```javascript
// user.test.js
describe('User Module', () => {
  test('should create a new user', () => {
    const user = createUser('John', 'john@example.com');
    expect(user.name).toBe('John');
    expect(user.email).toBe('john@example.com');
  });
});
```

---

## 📖 Documentación

### README.md de Semana

Debe incluir:

1. **Título y descripción**
2. **🎯 Objetivos de aprendizaje**
3. **📚 Requisitos previos**
4. **🗂️ Estructura de la semana**
5. **📝 Contenidos** (con enlaces a teoría/prácticas)
6. **⏱️ Distribución del tiempo** (8 horas)
7. **📌 Entregables**
8. **🔗 Navegación** (anterior/siguiente semana)

### Archivos de Teoría

```markdown
# Título del Tema

## 🎯 Objetivos

- Objetivo 1
- Objetivo 2

## 📋 Contenido

### 1. Introducción

### 2. Conceptos Clave

### 3. Ejemplos Prácticos

### 4. Ejercicios

## 📚 Recursos Adicionales

## ✅ Checklist de Verificación
```

---

## 🎨 Recursos Visuales y Estándares de Diseño

### Formato de Assets

- ✅ **Preferir SVG** para todos los diagramas, iconos y gráficos
- ❌ **NO usar ASCII art** para diagramas o visualizaciones
- ✅ Usar PNG/JPG solo para screenshots o fotografías
- ✅ Optimizar imágenes antes de incluirlas

### Tema Visual

- 🌙 **Tema dark** para todos los assets visuales
- ❌ **Sin degradés** (gradients) en diseños
- ✅ Colores sólidos y contrastes claros
- ✅ Paleta consistente basada en amarillo JavaScript (#F0DB4F)

### Tipografía

- ✅ **Fuentes sans-serif** exclusivamente
- ✅ Recomendadas: Inter, Roboto, Open Sans, System UI
- ❌ **NO usar fuentes serif** (Times, Georgia, etc.)
- ✅ Mantener jerarquía visual clara

### Otros

- ✅ Incluir screenshots con anotaciones claras
- ✅ Mantener consistencia visual entre semanas
- ✅ Usar emojis para mejorar legibilidad (con moderación)

---

## 🌐 Idioma y Nomenclatura

### ⚠️ REGLA CRÍTICA: Inglés Técnico + Español Educativo

**NOMENCLATURA TÉCNICA: SIEMPRE EN INGLÉS**

- ✅ Variables, constantes, funciones
- ✅ Clases y constructores
- ✅ Nombres de archivos (.js, .css)
- ✅ Propiedades de objetos
- ✅ Clases CSS y IDs

**COMENTARIOS Y DOCUMENTACIÓN: SIEMPRE EN ESPAÑOL**

- ✅ Comentarios de código (`// comentario`)
- ✅ Comentarios JSDoc (`/** @param */`)
- ✅ READMEs y documentación
- ✅ Mensajes de error y validación
- ✅ Textos de interfaz (UI)
- ✅ Explicaciones educativas

### Ejemplos Correctos

```javascript
// ✅ CORRECTO - Nomenclatura en inglés, comentarios en español
const getUserData = async userId => {
  // Obtener datos del usuario desde la API
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
};

// ❌ INCORRECTO - Nomenclatura en español
const obtenerDatosUsuario = async idUsuario => {
  // Fetch user data from API  <-- comentario en inglés también está mal
  const respuesta = await fetch(`/api/usuarios/${idUsuario}`);
  return respuesta.json();
};
```

### Razón de Esta Convención

1. **Estándar de la industria**: El código profesional se escribe en inglés
2. **Colaboración internacional**: Facilita trabajo con equipos globales
3. **Librerías y frameworks**: JavaScript, React, etc. están en inglés
4. **Búsquedas y documentación**: Stack Overflow, GitHub, docs oficiales
5. **Educación bilingüe**: Aprender sintaxis en inglés + conceptos en español
6. **Preparación laboral**: 99% de empresas requieren código en inglés

### Ejemplos Adicionales

```javascript
// ✅ CORRECTO - código en inglés, explicación en español
const calculateDiscount = (price, percentage) => {
  // En JavaScript, los porcentajes se manejan como decimales
  // Por ejemplo: 20% = 0.20
  return price * (1 - percentage / 100);
};
```

---

## 🔐 Mejores Prácticas

### Código Limpio

- Nombres descriptivos y significativos
- Funciones pequeñas con una sola responsabilidad
- Comentarios solo cuando sea necesario explicar el "por qué"
- Evitar anidamiento profundo
- Usar early returns

### Seguridad

- Validar TODOS los inputs del usuario
- Sanitizar datos antes de mostrarlos en el DOM
- No exponer información sensible en errores
- Usar HTTPS para APIs en producción

### Rendimiento

- Evitar manipulación excesiva del DOM
- Usar event delegation cuando sea apropiado
- Lazy loading de recursos pesados
- Debounce/throttle en eventos frecuentes

---

## 📊 Evaluación

Cada semana incluye **tres tipos de evidencias**:

1. **Conocimiento 🧠** (30%): Evaluaciones teóricas, cuestionarios
2. **Desempeño 💪** (40%): Ejercicios prácticos en clase
3. **Producto 📦** (30%): Proyecto entregable funcional

### Criterios de Aprobación

- Mínimo **70%** en cada tipo de evidencia
- Entrega puntual de proyectos
- Código funcional y bien documentado
- **Implementación coherente con el dominio asignado**
- **Originalidad**: Sin copia de implementaciones de otros aprendices

---

## 🚀 Metodología de Aprendizaje

### Estrategias Didácticas

- **Aprendizaje Basado en Proyectos (ABP)**: Proyectos semanales integradores
- **Dominios Únicos**: Cada aprendiz aplica conceptos a su dominio asignado
- **Práctica Deliberada**: Ejercicios incrementales
- **Coding Challenges**: Problemas del mundo real
- **Code Review**: Revisión de código entre estudiantes
- **Live Coding**: Sesiones en vivo de programación

### Distribución del Tiempo (8h/semana)

- **Teoría**: 2-2.5 horas
- **Prácticas**: 3-3.5 horas
- **Proyecto**: 2-2.5 horas

---

## 🤖 Instrucciones para Copilot

Cuando trabajes en este proyecto:

### Límites de Respuesta

1. **Divide respuestas largas**

   - ❌ **NUNCA generar respuestas que superen los límites de tokens**
   - ✅ **SIEMPRE dividir contenido extenso en múltiples entregas**
   - ✅ Crear contenido por secciones, esperar confirmación del usuario
   - ✅ Priorizar calidad sobre cantidad en cada entrega
   - Razón: Evitar pérdida de contenido y garantizar completitud

2. **Estrategia de División**
   - Para semanas completas: dividir por carpetas (teoria → practicas → proyecto)
   - Para archivos grandes: dividir por secciones lógicas
   - Siempre indicar claramente qué parte se entrega y qué falta
   - Esperar confirmación del usuario antes de continuar

### Generación de Código

1. **Usa siempre sintaxis ES2023**

   - const/let (nunca var)
   - Arrow functions
   - Template literals
   - Destructuring
   - Spread operator
   - Módulos ES2023

2. **Gestión de Paquetes**

   - ❌ **NUNCA usar `npm`** para instalar paquetes
   - ✅ **SOLO usar `pnpm` o `yarn`** como gestores de paquetes
   - Razón: Mejor rendimiento, gestión de dependencias más eficiente
   - Comandos recomendados:

     ```bash
     # Instalar dependencias
     pnpm install
     # o
     yarn install

     # Agregar paquete
     pnpm add <paquete>
     # o
     yarn add <paquete>
     ```

3. **Base de Datos**

   - ✅ **USAR SQLite** cuando se necesite base de datos relacional
   - Razón: Facilidad de configuración, sin servidor, perfecto para aprendizaje
   - SQLite es ideal para:
     - Prototipos y proyectos educativos
     - Aplicaciones que no requieren concurrencia extrema
     - Desarrollo local sin configuración compleja
   - No requiere instalación de servidor de base de datos
   - Archivo único, fácil de compartir y versionar

4. **Comenta el código de manera educativa**

   - Explica conceptos para principiantes
   - Incluye referencias a documentación cuando sea útil
   - Usa comentarios que enseñen, no solo describan

5. **Proporciona ejemplos completos y funcionales**
   - Código que se pueda copiar y ejecutar
   - Incluye casos de uso realistas
   - Muestra tanto lo que se debe hacer como lo que se debe evitar

### Creación de Contenido

1. **Estructura clara y progresiva**

   - De lo simple a lo complejo
   - Conceptos construidos sobre conocimientos previos
   - Repetición espaciada de conceptos clave

2. **Ejemplos del mundo real**

   - Casos de uso prácticos y relevantes
   - Proyectos que los estudiantes puedan mostrar en portfolios
   - Problemas que encontrarán en el desarrollo real

3. **Enfoque moderno**
   - No mencionar características pre-ES2023 a menos que sea para comparar
   - Enfocarse en mejores prácticas actuales
   - Usar herramientas y patrones modernos

### Respuestas y Ayuda

1. **Explicaciones claras**

   - Lenguaje simple y directo
   - Evitar jerga innecesaria
   - Proporcionar analogías cuando sea útil

2. **Código comentado**

   - Explicar cada paso importante
   - Destacar conceptos clave
   - Señalar posibles errores comunes

3. **Recursos adicionales**
   - Referencias a MDN Web Docs
   - Enlaces a javascript.info
   - Artículos relevantes de calidad

---

## 📚 Referencias Oficiales

- **MDN Web Docs**: https://developer.mozilla.org/es/docs/Web/JavaScript
- **JavaScript.info**: https://javascript.info/
- **ECMAScript Spec**: https://tc39.es/ecma262/
- **Can I Use**: https://caniuse.com/
- **Jest Documentation**: https://jestjs.io/

---

## 🔗 Enlaces Importantes

- **Repositorio**: https://github.com/epti-dev/bc-javascript-es2023
- **Documentación general**: [\docs/README.md](docs/README.md)
- **Primera semana**: [bootcamp/week-01-introduccion_javascript_moderno_es2023/README.md](bootcamp/week-01-introduccion_javascript_moderno_es2023/README.md)

---

## ✅ Checklist para Nuevas Semanas

Cuando crees contenido para una nueva semana:

- [ ] Crear estructura de carpetas completa
- [ ] README.md con objetivos y estructura
- [ ] Material teórico en 1-teoria/
- [ ] Ejercicios prácticos en 2-practicas/
- [ ] Proyecto integrador en 3-proyecto/
- [ ] Recursos adicionales en 4-recursos/
- [ ] Glosario de términos en 5-glosario/
- [ ] Rúbrica de evaluación
- [ ] Verificar coherencia con semanas anteriores
- [ ] Revisar progresión de dificultad
- [ ] Probar código de ejemplos

---

## 💡 Notas Finales

- **Prioridad**: Claridad sobre brevedad
- **Enfoque**: Aprendizaje práctico sobre teoría abstracta
- **Objetivo**: Preparar desarrolladores listos para trabajar
- **Filosofía**: JavaScript moderno desde el día 1

---

_Última actualización: Diciembre 2025_
_Versión: 1.0_
