# 📅 Week 11: Manejo de Errores Moderno

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Dominar `try...catch...finally` para control de flujo de errores
- ✅ Usar **optional catch binding** (ES2019) cuando no necesitas el error
- ✅ Crear clases de error personalizadas extendiendo `Error`
- ✅ Aplicar **Error cause** (ES2022) para encadenar errores
- ✅ Implementar patrones de error boundaries para aislar fallos
- ✅ Manejar errores en código asíncrono (Promises, async/await)
- ✅ Aplicar mejores prácticas de manejo de errores en producción

---

## 📚 Requisitos Previos

- ✅ Week 10: Proxies y Reflect
- ✅ Conocimiento de clases y herencia ES2023
- ✅ Comprensión básica de programación asíncrona

---

## 🗂️ Estructura de la Semana

```
week-11-manejo_errores_moderno/
├── README.md                          # Este archivo
├── rubrica-evaluacion.md              # Criterios de evaluación
├── 0-assets/                          # Diagramas y recursos visuales
├── 1-teoria/                          # Material teórico
│   ├── 01-try-catch-finally.md        # Estructura básica de manejo de errores
│   ├── 02-errores-personalizados.md   # Clases de error custom
│   ├── 03-error-boundaries.md         # Patrones de aislamiento
│   ├── 04-errores-asincronos.md       # Errores en Promises y async/await
│   └── 05-mejores-practicas.md        # Best practices en producción
├── 2-practicas/                       # Ejercicios guiados
│   ├── ejercicio-01-try-catch/        # Práctica con try...catch...finally
│   ├── ejercicio-02-custom-errors/    # Crear errores personalizados
│   ├── ejercicio-03-async-errors/     # Errores asíncronos
│   └── ejercicio-04-error-patterns/   # Patrones de manejo de errores
├── 3-proyecto/                        # Proyecto integrador
│   └── sistema-robusto/               # Sistema con manejo de errores completo
├── 4-recursos/                        # Material complementario
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                        # Términos clave
```

---

## 📝 Contenido

### 1️⃣ Teoría (2.5 horas)

| Archivo | Tema | Duración |
|---------|------|----------|
| [01-try-catch-finally.md](1-teoria/01-try-catch-finally.md) | Estructura try...catch...finally + **Optional catch binding (ES2019)** + **Error cause (ES2022)** | 30 min |
| [02-errores-personalizados.md](1-teoria/02-errores-personalizados.md) | Clases de error custom | 30 min |
| [03-error-boundaries.md](1-teoria/03-error-boundaries.md) | Patrones de aislamiento | 30 min |
| [04-errores-asincronos.md](1-teoria/04-errores-asincronos.md) | Errores en código async | 30 min |
| [05-mejores-practicas.md](1-teoria/05-mejores-practicas.md) | Best practices | 30 min |

### 2️⃣ Prácticas (3 horas)

| Ejercicio | Tema | Duración |
|-----------|------|----------|
| [ejercicio-01-try-catch](2-practicas/ejercicio-01-try-catch/) | Manejo básico de errores | 45 min |
| [ejercicio-02-custom-errors](2-practicas/ejercicio-02-custom-errors/) | Errores personalizados | 45 min |
| [ejercicio-03-async-errors](2-practicas/ejercicio-03-async-errors/) | Errores asíncronos | 45 min |
| [ejercicio-04-error-patterns](2-practicas/ejercicio-04-error-patterns/) | Patrones avanzados | 45 min |

### 3️⃣ Proyecto (2 horas)

**Sistema Robusto** - Aplicación completa con manejo de errores integral:
- Clases de error personalizadas por dominio
- Validación con errores descriptivos
- Manejo de errores de red y async
- Logging y recuperación de fallos
- UI que muestra errores amigables

📁 [Ver proyecto](3-proyecto/sistema-robusto/)

### 4️⃣ Recursos (0.5 horas)

- 📖 [E-books gratuitos](4-recursos/ebooks-free/)
- 🎥 [Videografía](4-recursos/videografia/)
- 🌐 [Webgrafía](4-recursos/webgrafia/)

---

## ⏱️ Distribución del Tiempo

```
Total: 8 horas

┌─────────────────────────────────────────────────────────┐
│ Teoría        ████████████░░░░░░░░░░░░░░░░  2.5h (31%) │
│ Prácticas     ████████████████░░░░░░░░░░░░  3.0h (38%) │
│ Proyecto      ████████░░░░░░░░░░░░░░░░░░░░  2.0h (25%) │
│ Recursos      ██░░░░░░░░░░░░░░░░░░░░░░░░░░  0.5h (6%)  │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Conceptos Clave

### try...catch...finally

```javascript
try {
  // Code that may throw
  const data = JSON.parse(userInput);
} catch (error) {
  // Handle the error
  console.error('Invalid JSON:', error.message);
} finally {
  // Always runs
  cleanupResources();
}
```

### Errores Personalizados

```javascript
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

throw new ValidationError('email', 'Invalid email format');
```

### Manejo de Errores Async

```javascript
// Con async/await
const fetchData = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new HttpError(response.status, response.statusText);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof HttpError) {
      handleHttpError(error);
    } else {
      handleNetworkError(error);
    }
  }
};
```

### Error Boundary Pattern

```javascript
const safeExecute = (fn, fallback) => {
  try {
    return fn();
  } catch (error) {
    logError(error);
    return fallback;
  }
};

const result = safeExecute(
  () => riskyOperation(),
  defaultValue
);
```

---

## 📌 Entregables

### 📦 Proyecto (100%)

El **único entregable** para esta semana es el proyecto:

- [ ] **Proyecto "Sistema Robusto" funcional**
- [ ] Jerarquía de errores personalizados implementada
- [ ] Manejo completo de errores de red
- [ ] UI con mensajes de error amigables
- [ ] Logging de errores para debugging
- [ ] Patrones de error boundaries aplicados

> **Nota**: Los ejercicios prácticos son materiales de aprendizaje. No se entregan de forma separada.

### Checklist de verificación
- [ ] try...catch...finally dominado
- [ ] Errores personalizados creados
- [ ] Errores async manejados correctamente
- [ ] Patrones de error boundaries aplicados
- [ ] Mejores prácticas implementadas

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Inicio | Siguiente ➡️ |
|:------------|:---------:|-------------:|
| [Week 10: Proxies y Reflect](../week-10-proxies_reflect/README.md) | [Bootcamp](../README.md) | [Week 12: Proyecto Integrador](../week-12-proyecto_integrador_fundamentos/README.md) |

---

## 💡 Tips para esta Semana

> **Tip 1**: No uses try...catch para control de flujo normal. Los errores son para situaciones excepcionales.

> **Tip 2**: Siempre incluye información útil en tus errores personalizados (códigos, campos afectados, contexto).

> **Tip 3**: En código async, decide entre `.catch()` y try...catch según el contexto - ambos son válidos.

> **Tip 4**: Nunca silencies errores con catch vacío. Al menos regístralos para debugging.

---

## 🌟 Resultado Esperado

Al completar esta semana podrás:

1. **Manejar errores** de forma estructurada y predecible
2. **Crear errores** que comuniquen claramente qué salió mal
3. **Aislar fallos** para que no colapsen toda la aplicación
4. **Depurar** problemas gracias a errores informativos
5. **Escribir código** más robusto y mantenible

---

*Semana 11 de 28 | Etapa 1: Fundamentos Modernos | Última semana antes del proyecto integrador*
