# 🛡️ Proyecto Semana 10: Sistema de Validación Reactivo

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

## 🏛️ Política de Dominios Únicos

**Tu dominio fue asignado por el instructor al inicio del trimestre.** Este proyecto debe implementarse usando formularios de registro/edición de entidades de tu dominio.

### Ejemplos de Adaptación

| Dominio | Formulario | Campos a validar |
|---------|-----------|------------------|
| **Planetario 🔭** | Registro de observación | fecha, coordenadas, magnitud, constelación |
| **Acuario 🐠** | Registro de especie | nombre científico, pH, temperatura, hábitat |
| **Museo 🏛️** | Catálogo de obra | título, autor, año, técnica, dimensiones |

---

## 📋 Descripción

Construye un **sistema de validación de formularios reactivo** usando Proxies y Reflect. El sistema validará datos en tiempo real, mostrará errores inmediatamente y notificará cambios automáticamente.

---

## 🎯 Objetivos

- Implementar validación automática con Proxies
- Crear un sistema de suscripción (patrón Observer)
- Manejar errores de forma elegante
- Conectar el sistema reactivo con el DOM
- Usar Reflect correctamente en los traps

---

## 📁 Estructura

```
3-proyecto/
├── index.html      # Estructura del formulario
├── styles.css      # Estilos con estados válido/inválido
├── starter/
│   └── script.js   # Tu código (completar TODOs)
└── solution/
    └── script.js   # Solución de referencia
```

---

## 💡 Adaptación por Dominio

### Ejemplo: Planetario 🔭

```javascript
// Schema de validación para observación astronómica
const observationSchema = {
  targetName: validators.string(2, 100),
  date: validators.date(),
  rightAscension: validators.range(0, 24),    // Horas
  declination: validators.range(-90, 90),      // Grados
  magnitude: validators.range(-30, 30),
  constellation: validators.enum(CONSTELLATIONS),
  notes: validators.string(0, 500)
};

const observationForm = createReactiveForm(observationSchema);
```

### Tu Dominio

Adapta el formulario reactivo para tu dominio:
- Define un schema con 5-7 campos relevantes
- Incluye diferentes tipos de validación (string, number, date, enum)
- Implementa reglas de negocio específicas del dominio

---

## 🔧 Funcionalidades a Implementar

### 1. Fábrica de Validadores

```javascript
const validators = {
  string: (min, max) => (value, prop) => { /* ... */ },
  number: (min, max) => (value, prop) => { /* ... */ },
  date: () => (value, prop) => { /* ... */ },
  enum: (options) => (value, prop) => { /* ... */ },
  // TODO: Agrega validadores específicos de tu dominio
};
```

### 2. Crear Formulario Reactivo

```javascript
const createReactiveForm = (schema) => {
  // Proxy que valida en set
  // Almacena errores
  // Notifica cambios
};
```

### 3. Métodos del Formulario

- `form.subscribe(fn)` - Suscribirse a cambios
- `form.onError(fn)` - Suscribirse a errores
- `form.isValid()` - Verificar si todo es válido
- `form.getErrors()` - Obtener todos los errores
- `form.getData()` - Obtener datos actuales

### 4. Conexión con DOM

```javascript
const connectToDOM = (form, config) => {
  // Escuchar inputs
  // Actualizar UI según estado
  // Mostrar/ocultar errores
};
```

---

## 📝 Instrucciones

### Paso 1: Abre los archivos

1. Abre `index.html` en tu navegador
2. Abre `starter/script.js` en tu editor

### Paso 2: Implementa los validadores

Completa la fábrica de validadores:

```javascript
// TODO: Implementar validators.string
// TODO: Implementar validators.number
// TODO: Implementar validators.email
// TODO: Implementar validators.password
```

### Paso 3: Crea el formulario reactivo

Implementa `createReactiveForm`:

```javascript
// TODO: Crear Proxy con handler
// TODO: Implementar trap set con validación
// TODO: Implementar sistema de errores
// TODO: Implementar notificaciones
```

### Paso 4: Conecta con el DOM

Implementa `connectToDOM`:

```javascript
// TODO: Escuchar eventos input
// TODO: Actualizar clases CSS según validez
// TODO: Mostrar mensajes de error
// TODO: Controlar estado del botón submit
```

### Paso 5: Prueba

1. Escribe en los campos y observa la validación
2. Los errores deben aparecer inmediatamente
3. El botón solo se habilita cuando todo es válido
4. El resumen muestra los datos al enviar

---

## ✅ Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Validadores funcionan correctamente | 20 |
| Proxy intercepta y valida en set | 25 |
| Sistema de errores funciona | 15 |
| Suscripciones notifican cambios | 15 |
| Conexión DOM actualiza UI | 15 |
| Código limpio y bien organizado | 10 |
| **Total** | **100** |

---

## 🚀 Ejecutar

```bash
# Opción 1: Abrir directamente
open bootcamp/week-10/3-proyecto/sistema-validacion/index.html

# Opción 2: Servidor local
cd bootcamp/week-10/3-proyecto/sistema-validacion
npx serve .
```

---

## 💡 Pistas

### Pista 1: Estructura del Handler

```javascript
const handler = {
  set(target, prop, value, receiver) {
    // 1. Obtener validador del schema
    // 2. Ejecutar validación
    // 3. Guardar/eliminar error según resultado
    // 4. Notificar listeners
    // 5. Usar Reflect.set
  }
};
```

### Pista 2: Validación de Email

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

### Pista 3: Actualizar UI

```javascript
input.classList.toggle('valid', isValid);
input.classList.toggle('invalid', !isValid);
```

---

## 📚 Recursos

- [MDN: Proxy](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [MDN: Reflect](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
- [UX en Validación de Formularios (Smashing Magazine)](https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/)

---

## 🔗 Navegación

| Anterior | Siguiente |
|----------|-----------|
| [← Prácticas](../2-practicas/) | [Recursos →](../4-recursos/) |

---

_Week 10 | Bootcamp JavaScript ES2023_
