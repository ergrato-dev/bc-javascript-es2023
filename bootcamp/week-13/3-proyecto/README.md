# 🌐 Proyecto Semana 13: Simulador de Operaciones Asíncronas

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

## 🏛️ Política de Dominios Únicos

**Tu dominio fue asignado por el instructor al inicio del trimestre.** Este proyecto debe implementarse simulando operaciones asíncronas propias de tu dominio usando Promises.

### Ejemplos de Adaptación

| Dominio | Operaciones a simular | Estados |
|---------|----------------------|---------|
| **Planetario 🔭** | Consulta de catálogo, reserva de telescopio, cálculo de órbita | Disponible/Ocupado/Mantenimiento |
| **Acuario 🐠** | Consulta de especies, programar alimentación, monitoreo de tanque | Normal/Alerta/Crítico |
| **Museo 🏛️** | Consulta de obras, reserva de visita, préstamo de pieza | Disponible/Prestado/Restauración |

---

## 🎯 Objetivo

Construir un simulador de operaciones asíncronas que utilice Promises para manejar estados y errores propios de tu dominio.

---

## 📋 Descripción

Crearás una aplicación que simula el comportamiento de operaciones asíncronas usando Promises. La aplicación incluirá:

- Simulación realista de latencia de operaciones
- Estados específicos del dominio
- Manejo de timeouts
- Múltiples operaciones en paralelo
- UI interactiva con feedback visual

---

## 📁 Estructura del Proyecto

```
3-proyecto/
├── README.md           # Este archivo
├── index.html          # HTML principal
├── styles.css          # Estilos
├── starter/            # Tu código aquí
│   └── js/
│       ├── operations.js   # Simulador de operaciones
│       ├── ui.js           # Manejo de UI
│       └── app.js          # Inicialización
└── solution/           # Solución completa
    └── js/
        └── ...
```

---

## 💡 Adaptación por Dominio

### Ejemplo: Planetario 🔭

```javascript
// Operaciones asíncronas específicas del dominio
const astronomyOperations = {
  // Consultar catálogo de cuerpos celestes
  queryCatalog: (constellation) => {
    return new Promise((resolve, reject) => {
      const latency = Math.random() * 2000 + 500;

      setTimeout(() => {
        if (Math.random() > 0.1) {
          resolve({
            status: 'SUCCESS',
            data: { constellation, bodies: 47, lastUpdate: new Date() }
          });
        } else {
          reject(new Error('Catálogo no disponible'));
        }
      }, latency);
    });
  },

  // Reservar sesión de observación
  reserveTelescope: (telescopeId, date) => {
    return new Promise((resolve, reject) => {
      const latency = Math.random() * 1500 + 1000;

      setTimeout(() => {
        const status = ['CONFIRMED', 'PENDING', 'UNAVAILABLE'][Math.floor(Math.random() * 3)];
        resolve({ telescopeId, date, status });
      }, latency);
    });
  },

  // Calcular posición de un cuerpo celeste
  calculatePosition: (bodyId, date) => {
    return new Promise((resolve) => {
      // Simulación de cálculo computacionalmente intensivo
      const latency = Math.random() * 3000 + 2000;

      setTimeout(() => {
        resolve({
          bodyId,
          rightAscension: (Math.random() * 24).toFixed(4),
          declination: (Math.random() * 180 - 90).toFixed(4),
          calculatedAt: new Date()
        });
      }, latency);
    });
  }
};

// Múltiples cálculos en paralelo
const calculateMultiplePositions = async (bodyIds) => {
  const results = await Promise.all(
    bodyIds.map(id => astronomyOperations.calculatePosition(id, new Date()))
  );
  return results;
};

// Con timeout usando Promise.race
const queryWithTimeout = (operation, timeout = 5000) => {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Operación excedió tiempo límite')), timeout);
  });

  return Promise.race([operation, timeoutPromise]);
};
```

### Tu Dominio

Adapta las operaciones para tu dominio:
- Define 3-4 operaciones asíncronas relevantes
- Implementa diferentes latencias según complejidad
- Define estados de éxito/error propios del dominio
- Usa `Promise.all()` para operaciones en paralelo
- Implementa timeout con `Promise.race()`

---

## 🎨 Funcionalidades

### Requeridas (Core)

- [x] Simular 3-4 operaciones del dominio
- [x] Sistema de latencia aleatoria (500ms - 3000ms)
- [x] Estados específicos del dominio (success, pending, error)
- [x] Timeout configurable (default: 5000ms)
- [x] Promise.all() para múltiples operaciones
- [x] UI con botones y área de resultados
- [x] Feedback visual (loading, success, error)

### Opcionales (Bonus)

- [ ] Promise.race() para comparar operaciones
- [ ] Promise.allSettled() para batch de operaciones
- [ ] Retry logic (reintentar en caso de error)
- [ ] Historial de operaciones
- [ ] Estadísticas (success rate, avg time)

---

## 🚀 Instrucciones

### Paso 1: Estructura HTML

Abre `index.html` y adapta la estructura para tu dominio:
- Botones para cada tipo de operación
- Área de resultados
- Panel de múltiples operaciones

### Paso 2: Implementar el Simulador

Abre `starter/js/operations.js` y completa los TODOs:

1. **Operaciones del dominio**: Crea Promises que simulen operaciones reales
2. **Función `handleTimeout()`**: Implementa timeout con `Promise.race()`
3. **Función `batchOperations()`**: Usa `Promise.all()` para múltiples operaciones

### Paso 3: Implementar la UI

Abre `starter/js/ui.js` y completa los TODOs:

1. **Mostrar loading**: Spinner mientras la operación está pendiente
2. **Mostrar resultado**: Success/error con colores del dominio
3. **Limpiar resultados**: Botón para limpiar el área

### Paso 4: Conectar Todo

Abre `starter/js/app.js` y completa los TODOs:

1. **Event listeners**: Conectar botones con operaciones
2. **Múltiples operaciones**: Usar `Promise.all()` para batch
3. **Manejo de errores**: Catch global para errores

---

## 💡 Conceptos Aplicados

| Concepto | Uso en el proyecto |
|----------|-------------------|
| `new Promise()` | Simular latencia de operaciones |
| `.then() / .catch()` | Manejar resultados y errores |
| `Promise.all()` | Ejecutar múltiples operaciones en paralelo |
| `Promise.race()` | Implementar timeout |
| `Promise.allSettled()` | Bonus: batch con resultados mixtos |

---

## ✅ Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Operaciones asíncronas del dominio | 25 |
| Manejo de estados y errores | 20 |
| Promise.all() para batch | 20 |
| UI con feedback visual | 20 |
| Timeout con Promise.race() | 15 |
| **Total** | **100** |

---

## 📚 Recursos

- [MDN: Promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN: Promise.all()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [MDN: Promise.race()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
- [JavaScript.info: Promises](https://javascript.info/promise-basics)

---

[⬅️ Volver a Prácticas](../2-practicas/) | [Volver a Semana 13](../README.md)
