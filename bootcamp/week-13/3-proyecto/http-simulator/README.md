# 🌐 Proyecto: HTTP Simulator

## 🎯 Objetivo

Construir un simulador de peticiones HTTP que utilice Promises para manejar operaciones asíncronas, estados y errores.

---

## 📋 Descripción

Crearás una aplicación que simula el comportamiento de peticiones HTTP (GET, POST, PUT, DELETE) usando Promises. La aplicación incluirá:

- Simulación realista de latencia de red
- Estados HTTP (200, 404, 500, etc.)
- Manejo de timeouts
- Múltiples requests en paralelo
- UI interactiva con feedback visual

---

## 🎨 Funcionalidades

### Requeridas (Core)

- [x] Simular peticiones GET, POST, PUT, DELETE
- [x] Sistema de latencia aleatoria (500ms - 3000ms)
- [x] Estados HTTP: 200 (success), 404 (not found), 500 (error)
- [x] Timeout configurable (default: 5000ms)
- [x] Promise.all() para múltiples requests
- [x] UI con botones y área de resultados
- [x] Feedback visual (loading, success, error)

### Opcionales (Bonus)

- [ ] Promise.race() para comparar endpoints
- [ ] Promise.allSettled() para batch requests
- [ ] Retry logic (reintentar en caso de error)
- [ ] Historial de requests
- [ ] Estadísticas (success rate, avg time)

---

## 📁 Estructura de Archivos

```
http-simulator/
├── README.md           # Este archivo
├── index.html          # HTML principal
├── styles.css          # Estilos
├── starter/            # Tu código aquí
│   └── js/
│       ├── http.js     # Simulador HTTP
│       ├── ui.js       # Manejo de UI
│       └── app.js      # Inicialización
└── solution/           # Solución completa
    └── js/
        ├── http.js
        ├── ui.js
        └── app.js
```

---

## 🚀 Instrucciones

### Paso 1: Estructura HTML

Abre `index.html` y revisa la estructura. Ya está creada con:
- Botones para cada tipo de request
- Área de resultados
- Panel de múltiples requests

### Paso 2: Implementar el Simulador HTTP

Abre `starter/js/http.js` y completa los TODOs:

1. **Función `simulateRequest()`**: Crea una Promise que simule una petición HTTP
2. **Función `handleTimeout()`**: Implementa timeout con `Promise.race()`
3. **Funciones HTTP**: GET, POST, PUT, DELETE usando `simulateRequest()`

### Paso 3: Implementar la UI

Abre `starter/js/ui.js` y completa los TODOs:

1. **Mostrar loading**: Spinner mientras la request está pendiente
2. **Mostrar resultado**: Success/error con colores
3. **Limpiar resultados**: Botón para limpiar el área

### Paso 4: Conectar Todo

Abre `starter/js/app.js` y completa los TODOs:

1. **Event listeners**: Conectar botones con funciones
2. **Múltiples requests**: Usar `Promise.all()` para batch
3. **Manejo de errores**: Catch global para errores

---

## 💡 Conceptos Aplicados

- ✅ Crear Promises con `new Promise(resolve, reject)`
- ✅ Simular asincronía con `setTimeout()`
- ✅ Manejo de errores con `.catch()`
- ✅ `Promise.race()` para timeouts
- ✅ `Promise.all()` para múltiples requests
- ✅ Estados HTTP y códigos de error
- ✅ UI reactiva con feedback visual

---

## 🧪 Casos de Prueba

### Test 1: GET Request Exitoso
```javascript
// Click en "GET Request"
// Esperado: Status 200, muestra datos del usuario
```

### Test 2: POST Request con Error
```javascript
// Click en "POST Request"
// 30% probabilidad de error 500
```

### Test 3: Múltiples Requests
```javascript
// Click en "Run All Requests"
// Esperado: 3 requests en paralelo, muestra todos los resultados
```

### Test 4: Timeout
```javascript
// Simular request que tarda > 5 segundos
// Esperado: Error de timeout
```

---

## 📝 Entregables

1. **Código funcional** en `starter/js/`
2. **Todas las funciones core** implementadas
3. **Manejo de errores** robusto
4. **UI reactiva** con estados visuales
5. **(Opcional)** Funcionalidades bonus

---

## ⏱️ Tiempo Estimado

- **Lectura y comprensión**: 15 min
- **Implementación HTTP**: 45 min
- **Implementación UI**: 30 min
- **Testing y debugging**: 30 min
- **TOTAL**: ~2 horas

---

## 🎓 Criterios de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Simulador HTTP** | 40% | Funciones GET, POST, PUT, DELETE funcionan |
| **Promises** | 30% | Uso correcto de Promises, .then(), .catch() |
| **UI Interactiva** | 20% | Feedback visual, estados, manejo de eventos |
| **Código Limpio** | 10% | Nomenclatura, comentarios, estructura |
| **Bonus** | +10% | Funcionalidades opcionales |

---

## 💡 Pistas

<details>
<summary>Pista 1: Simular Latencia</summary>

```javascript
const simulateLatency = () => {
  const min = 500;
  const max = 3000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
```
</details>

<details>
<summary>Pista 2: Timeout con Promise.race()</summary>

```javascript
const timeout = ms => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Timeout después de ${ms}ms`));
    }, ms);
  });
};

Promise.race([fetchData(), timeout(5000)])
  .then(result => console.log(result))
  .catch(error => console.error(error));
```
</details>

<details>
<summary>Pista 3: Estados HTTP</summary>

```javascript
const HTTP_STATUS = {
  OK: 200,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};

const getRandomStatus = () => {
  const random = Math.random();
  if (random > 0.9) return HTTP_STATUS.SERVER_ERROR;
  if (random > 0.8) return HTTP_STATUS.NOT_FOUND;
  return HTTP_STATUS.OK;
};
```
</details>

---

## 🔗 Recursos

- [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

**¡Buena suerte! 🚀**
