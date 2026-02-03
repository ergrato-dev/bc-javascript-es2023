# 🎯 Reto Semanal - Week 13

## 🚀 Simulador de Peticiones HTTP Avanzado

### 📋 Descripción del Reto

Extiende el HTTP Simulator creado en el proyecto principal con funcionalidades avanzadas que demuestren dominio completo de Promises, manejo de errores y patrones asíncronos.

**Duración estimada**: 2-3 horas
**Nivel**: Intermedio-Avanzado
**Requisitos previos**: Proyecto HTTP Simulator completado

---

## 🎓 Objetivos de Aprendizaje

Al completar este reto, serás capaz de:

- ✅ Implementar reintentos automáticos con backoff exponencial
- ✅ Crear un sistema de caché para respuestas HTTP
- ✅ Implementar cancelación de solicitudes
- ✅ Gestionar prioridades de requests
- ✅ Construir un sistema de rate limiting
- ✅ Aplicar patrones avanzados de manejo de errores

---

## 📝 Funcionalidades a Implementar

### 1. Sistema de Reintentos (Retry Logic) ⭐⭐

Implementa una función que reintente automáticamente solicitudes fallidas.

**Especificaciones:**
- Máximo 3 reintentos por defecto (configurable)
- Backoff exponencial: espera 1s, 2s, 4s entre reintentos
- Solo reintentar en errores 5xx (errores de servidor)
- No reintentar en errores 4xx (errores de cliente)

**Ejemplo de uso:**

```javascript
const requestWithRetry = async (url, options = {}) => {
  const { maxRetries = 3, initialDelay = 1000 } = options;

  // TODO: Implementar lógica de reintentos
};

// Uso
requestWithRetry('/api/unreliable-endpoint')
  .then(response => console.log('Success after retries:', response))
  .catch(error => console.error('Failed after all retries:', error));
```

**Puntos a evaluar:**
- ✅ Reintentos funcionan correctamente (3 puntos)
- ✅ Backoff exponencial implementado (2 puntos)
- ✅ Diferencia entre errores 4xx y 5xx (2 puntos)
- ✅ Logging claro de intentos (1 punto)

---

### 2. Sistema de Caché ⭐⭐⭐

Implementa un sistema de caché que almacene respuestas exitosas.

**Especificaciones:**
- Caché basada en URL + método HTTP
- TTL (Time To Live) de 30 segundos por defecto
- Invalidar caché automáticamente después del TTL
- Mostrar en UI si la respuesta viene del caché

**Ejemplo de estructura:**

```javascript
const cache = new Map();

const cacheKey = (method, url) => `${method}:${url}`;

const getCachedResponse = (method, url) => {
  const key = cacheKey(method, url);
  const cached = cache.get(key);

  if (!cached) return null;

  // TODO: Verificar si el caché ha expirado
  // TODO: Retornar respuesta cacheada o null
};

const setCachedResponse = (method, url, response, ttl = 30000) => {
  // TODO: Guardar respuesta en caché con timestamp
};
```

**Puntos a evaluar:**
- ✅ Caché funcional con TTL (4 puntos)
- ✅ Invalidación automática (2 puntos)
- ✅ Indicador visual en UI (2 puntos)
- ✅ Gestión eficiente de memoria (2 puntos)

---

### 3. Cancelación de Solicitudes ⭐⭐⭐

Permite cancelar solicitudes en progreso usando AbortController.

**Especificaciones:**
- Botón "Cancelar" para cada solicitud en progreso
- Usar AbortController API
- Mostrar mensaje claro cuando se cancela
- Actualizar estadísticas correctamente

**Ejemplo de implementación:**

```javascript
const abortControllers = new Map();

const cancelableRequest = (method, url, requestId) => {
  const controller = new AbortController();
  abortControllers.set(requestId, controller);

  return simulateRequest(method, url, { signal: controller.signal })
    .then(response => {
      abortControllers.delete(requestId);
      return response;
    })
    .catch(error => {
      if (error.name === 'AbortError') {
        console.log('Request cancelled');
      }
      abortControllers.delete(requestId);
      throw error;
    });
};

const cancelRequest = requestId => {
  const controller = abortControllers.get(requestId);
  if (controller) {
    controller.abort();
  }
};
```

**Puntos a evaluar:**
- ✅ Cancelación funcional (4 puntos)
- ✅ UI con botón cancelar (2 puntos)
- ✅ Manejo correcto de AbortError (2 puntos)
- ✅ Limpieza de recursos (2 puntos)

---

### 4. Sistema de Prioridades ⭐⭐

Implementa un sistema donde las solicitudes puedan tener prioridades.

**Especificaciones:**
- Tres niveles: HIGH, NORMAL, LOW
- Las solicitudes HIGH se ejecutan primero
- Máximo 3 solicitudes concurrentes
- Cola de espera para solicitudes pendientes

**Ejemplo de estructura:**

```javascript
const priorityQueue = {
  high: [],
  normal: [],
  low: []
};

let activeRequests = 0;
const MAX_CONCURRENT = 3;

const executeWithPriority = (request, priority = 'normal') => {
  // TODO: Agregar a cola según prioridad
  // TODO: Ejecutar si hay espacio disponible
  // TODO: Procesar cola cuando se complete una solicitud
};
```

**Puntos a evaluar:**
- ✅ Sistema de prioridades funcional (4 puntos)
- ✅ Control de concurrencia (3 puntos)
- ✅ Cola de espera (2 puntos)
- ✅ Indicadores visuales de prioridad (1 punto)

---

### 5. Rate Limiting ⭐⭐⭐

Implementa limitación de tasa para evitar sobrecarga del servidor.

**Especificaciones:**
- Máximo 5 requests por segundo
- Rechazar requests que excedan el límite
- Mostrar contador de requests disponibles
- Reset automático cada segundo

**Ejemplo de implementación:**

```javascript
const rateLimiter = {
  maxRequests: 5,
  currentRequests: 0,
  resetTime: Date.now() + 1000,

  canMakeRequest() {
    // TODO: Verificar si se puede hacer request
    // TODO: Reset automático si pasó 1 segundo
  },

  recordRequest() {
    // TODO: Incrementar contador
  }
};
```

**Puntos a evaluar:**
- ✅ Rate limiting funcional (4 puntos)
- ✅ Reset automático (2 puntos)
- ✅ UI con contador (2 puntos)
- ✅ Manejo de requests rechazados (2 puntos)

---

## 🎨 Mejoras Opcionales de UI

### Estadísticas Avanzadas (⭐)

Agrega gráficos o visualizaciones para:
- Latencia promedio por método HTTP
- Tasa de éxito/error por hora
- Timeline de requests
- Distribución de status codes

### Modo Oscuro/Claro (⭐)

Implementa un toggle para cambiar entre temas.

### Exportar Resultados (⭐)

Permite exportar resultados a JSON o CSV.

---

## 📊 Rúbrica de Evaluación

| Funcionalidad | Puntos Máximos | Dificultad |
|---------------|----------------|------------|
| 1. Reintentos | 8 | ⭐⭐ |
| 2. Caché | 10 | ⭐⭐⭐ |
| 3. Cancelación | 10 | ⭐⭐⭐ |
| 4. Prioridades | 10 | ⭐⭐ |
| 5. Rate Limiting | 10 | ⭐⭐⭐ |
| **Subtotal Funcionalidades** | **48** | |
| Calidad del código | 7 | |
| UI/UX | 5 | |
| **TOTAL** | **60** | |

### Escala de Evaluación

| Puntos | Nivel |
|--------|-------|
| 50-60 | **Sobresaliente** - Dominio excepcional |
| 40-49 | **Excelente** - Implementación muy sólida |
| 30-39 | **Muy Bueno** - Buen manejo de conceptos |
| 20-29 | **Satisfactorio** - Comprensión básica |
| <20 | **Necesita mejorar** |

---

## 💡 Pistas y Consejos

### Para Reintentos
```javascript
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const exponentialBackoff = attempt => {
  return Math.pow(2, attempt) * 1000; // 1s, 2s, 4s, 8s...
};
```

### Para Caché
```javascript
const isExpired = (timestamp, ttl) => {
  return Date.now() - timestamp > ttl;
};
```

### Para Cancelación
```javascript
// Generar ID único para cada request
const generateRequestId = () => `req_${Date.now()}_${Math.random()}`;
```

### Para Prioridades
```javascript
const processQueue = async () => {
  if (activeRequests >= MAX_CONCURRENT) return;

  // Buscar next request: high > normal > low
  const next = priorityQueue.high[0]
    || priorityQueue.normal[0]
    || priorityQueue.low[0];

  if (next) {
    // Ejecutar y remover de cola
  }
};
```

---

## 📦 Entregables

1. **Código fuente completo**
   - Archivos JavaScript con implementaciones
   - HTML/CSS actualizados con nuevas funcionalidades

2. **README.md detallado**
   - Funcionalidades implementadas
   - Instrucciones de uso
   - Screenshots de la aplicación

3. **Video demo (opcional)**
   - Muestra todas las funcionalidades
   - Duración: 2-3 minutos

---

## 🚀 Bonus Points

- **+5 puntos**: Tests automatizados con Jest
- **+3 puntos**: Documentación JSDoc completa
- **+2 puntos**: Deploy en GitHub Pages
- **+2 puntos**: Modo offline con Service Workers

---

## 📚 Recursos Recomendados

- **AbortController**: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
- **Exponential Backoff**: https://cloud.google.com/iot/docs/how-tos/exponential-backoff
- **Rate Limiting Patterns**: https://www.keycdn.com/support/rate-limiting
- **Promise Patterns**: https://www.patterns.dev/posts/promise-patterns/

---

## 🎯 Criterios de Éxito

Para considerar el reto completado exitosamente:

- [ ] Al menos 3 de las 5 funcionalidades principales implementadas
- [ ] Código limpio y bien documentado
- [ ] UI actualizada mostrando las nuevas funcionalidades
- [ ] Sin errores de consola
- [ ] README con instrucciones claras
- [ ] Mínimo 30/60 puntos obtenidos

---

## 🏆 Desafío Extra: Real-Time Monitoring

Implementa un dashboard en tiempo real que muestre:

- Gráfico de latencia en tiempo real
- Mapa de calor de status codes
- Timeline interactivo de requests
- Alertas cuando falla un request

**Tecnologías sugeridas**: Chart.js o similar

---

## 📅 Información de Entrega

**Este reto es OPCIONAL** pero altamente recomendado para:
- Estudiantes que quieren destacar
- Preparación para proyectos reales
- Profundizar en Promises y patrones asíncronos

**Tiempo recomendado**: 2-3 horas
**Dificultad**: Intermedio-Avanzado
**Valor**: Puntos extra en la evaluación final

---

¡Buena suerte! 🚀

_Última actualización: Diciembre 2024_
