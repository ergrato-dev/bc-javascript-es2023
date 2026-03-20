# 🛡️ Manejo de Errores en Fetch

## 🎯 Objetivos

Al finalizar este tema, serás capaz de:

- Distinguir entre errores de red y errores HTTP
- Implementar manejo robusto de errores con fetch
- Crear wrappers reutilizables para fetch con error handling
- Implementar patrones de retry y fallback

---

## 📋 Contenido

### 1. Tipos de errores en Fetch

Es crucial entender que **fetch solo rechaza por errores de red**, no por errores HTTP:

```javascript
// ============================================
// ⚠️ Comportamiento de fetch con errores
// ============================================

// ERROR DE RED - fetch RECHAZA la promise
// - Sin conexión a internet
// - DNS no resuelve
// - Servidor no responde
// - CORS bloqueado
try {
  const response = await fetch('https://servidor-inexistente.xyz');
} catch (error) {
  console.log('Error de red:', error.message);
  // TypeError: Failed to fetch
}

// ERROR HTTP - fetch RESUELVE la promise
// - 404 Not Found
// - 500 Internal Server Error
// - 401 Unauthorized
const response = await fetch('/api/not-found');
console.log(response.ok);     // false
console.log(response.status); // 404
// ⚠️ NO lanza error automáticamente!
```

---

## 📊 Diagrama: Flujo de Errores en Fetch

![Error Flow](../0-assets/03-fetch-error-flow.svg)

---

### 2. Verificando response.ok

Siempre debes verificar `response.ok` antes de procesar:

```javascript
// ============================================
// Patrón básico de verificación
// ============================================

async function fetchData(url) {
  const response = await fetch(url);

  // Verificar si la respuesta fue exitosa (status 200-299)
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

// Uso con try/catch
try {
  const data = await fetchData('/api/users');
  console.log('Datos:', data);
} catch (error) {
  console.error('Error:', error.message);
}
```

```javascript
// ============================================
// Manejo granular por código de estado
// ============================================

async function fetchWithStatusHandling(url) {
  const response = await fetch(url);

  switch (response.status) {
    case 200:
    case 201:
      return response.json();

    case 204:
      return null; // No content

    case 400:
      throw new Error('Petición inválida');

    case 401:
      throw new Error('No autenticado - inicia sesión');

    case 403:
      throw new Error('Sin permisos para esta acción');

    case 404:
      throw new Error('Recurso no encontrado');

    case 422:
      const errors = await response.json();
      throw new Error(`Validación fallida: ${JSON.stringify(errors)}`);

    case 429:
      throw new Error('Demasiadas peticiones - intenta más tarde');

    case 500:
    case 502:
    case 503:
      throw new Error('Error del servidor - intenta más tarde');

    default:
      throw new Error(`Error HTTP: ${response.status}`);
  }
}
```

---

### 3. Errores personalizados para Fetch

```javascript
// ============================================
// Clases de error personalizadas
// ============================================

class FetchError extends Error {
  constructor(message, response) {
    super(message);
    this.name = 'FetchError';
    this.response = response;
    this.status = response?.status;
    this.statusText = response?.statusText;
  }
}

class NetworkError extends FetchError {
  constructor(originalError) {
    super('Error de conexión - verifica tu internet');
    this.name = 'NetworkError';
    this.originalError = originalError;
  }
}

class HttpError extends FetchError {
  constructor(response, body = null) {
    super(`HTTP ${response.status}: ${response.statusText}`);
    this.name = 'HttpError';
    this.response = response;
    this.body = body;
  }
}

class ValidationError extends HttpError {
  constructor(response, errors) {
    super(response);
    this.name = 'ValidationError';
    this.errors = errors;
  }
}
```

```javascript
// ============================================
// Uso de errores personalizados
// ============================================

async function safeFetch(url, options = {}) {
  let response;

  try {
    response = await fetch(url, options);
  } catch (error) {
    // Error de red (sin conexión, DNS, etc.)
    throw new NetworkError(error);
  }

  if (!response.ok) {
    const body = await response.json().catch(() => null);

    if (response.status === 422 && body?.errors) {
      throw new ValidationError(response, body.errors);
    }

    throw new HttpError(response, body);
  }

  return response;
}

// Uso
try {
  const response = await safeFetch('/api/users');
  const data = await response.json();
} catch (error) {
  if (error instanceof NetworkError) {
    showOfflineMessage();
  } else if (error instanceof ValidationError) {
    showValidationErrors(error.errors);
  } else if (error instanceof HttpError) {
    if (error.status === 401) {
      redirectToLogin();
    } else {
      showErrorMessage(error.message);
    }
  }
}
```

---

### 4. Wrapper reutilizable para Fetch

```javascript
// ============================================
// API Client reutilizable
// ============================================

const createApiClient = (baseUrl, defaultOptions = {}) => {
  const request = async (endpoint, options = {}) => {
    const url = `${baseUrl}${endpoint}`;

    const config = {
      ...defaultOptions,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...defaultOptions.headers,
        ...options.headers
      }
    };

    // Si hay body y es objeto, serializar
    if (config.body && typeof config.body === 'object') {
      config.body = JSON.stringify(config.body);
    }

    let response;

    try {
      response = await fetch(url, config);
    } catch (error) {
      throw new NetworkError(error);
    }

    // Verificar respuesta HTTP
    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      throw new HttpError(response, body);
    }

    // Manejar respuestas vacías
    const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      return response.json();
    }

    return response.text();
  };

  // Métodos de conveniencia
  return {
    get: (endpoint, options) => request(endpoint, { ...options, method: 'GET' }),
    post: (endpoint, body, options) => request(endpoint, { ...options, method: 'POST', body }),
    put: (endpoint, body, options) => request(endpoint, { ...options, method: 'PUT', body }),
    patch: (endpoint, body, options) => request(endpoint, { ...options, method: 'PATCH', body }),
    delete: (endpoint, options) => request(endpoint, { ...options, method: 'DELETE' })
  };
};

// Uso
const api = createApiClient('https://api.example.com', {
  headers: {
    'Authorization': `Bearer ${getToken()}`
  }
});

try {
  const users = await api.get('/users');
  const newUser = await api.post('/users', { name: 'John', email: 'john@email.com' });
  await api.delete('/users/123');
} catch (error) {
  handleError(error);
}
```

---

### 5. Patrón Retry

```javascript
// ============================================
// Fetch con reintentos automáticos
// ============================================

const fetchWithRetry = async (url, options = {}, maxRetries = 3) => {
  const retryableStatuses = [408, 429, 500, 502, 503, 504];
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);

      // Si es error retryable, lanzar para reintentar
      if (!response.ok && retryableStatuses.includes(response.status)) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response;

    } catch (error) {
      lastError = error;
      console.warn(`Intento ${attempt}/${maxRetries} falló:`, error.message);

      if (attempt < maxRetries) {
        // Espera exponencial: 1s, 2s, 4s...
        const delay = Math.pow(2, attempt - 1) * 1000;
        console.log(`Reintentando en ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  throw new Error(`Falló después de ${maxRetries} intentos: ${lastError.message}`);
};

// Uso
try {
  const response = await fetchWithRetry('/api/unstable-endpoint');
  const data = await response.json();
} catch (error) {
  console.error('Todos los reintentos fallaron:', error.message);
}
```

```javascript
// ============================================
// Retry con AbortController (con timeout)
// ============================================

const fetchWithRetryAndTimeout = async (url, options = {}, config = {}) => {
  const { maxRetries = 3, timeout = 10000 } = config;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response;

    } catch (error) {
      clearTimeout(timeoutId);

      if (error.name === 'AbortError') {
        console.warn(`Intento ${attempt}: Timeout después de ${timeout}ms`);
      } else {
        console.warn(`Intento ${attempt}: ${error.message}`);
      }

      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt - 1) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }
};
```

---

### 6. Manejo centralizado de errores

```javascript
// ============================================
// Handler centralizado de errores
// ============================================

const errorHandler = {
  handle(error) {
    // Error de red
    if (error instanceof NetworkError || error.name === 'TypeError') {
      this.showNotification('Sin conexión a internet', 'error');
      return;
    }

    // Error de autenticación
    if (error.status === 401) {
      this.showNotification('Sesión expirada', 'warning');
      this.redirectToLogin();
      return;
    }

    // Error de permisos
    if (error.status === 403) {
      this.showNotification('No tienes permisos para esta acción', 'error');
      return;
    }

    // Error de validación
    if (error.status === 422 || error instanceof ValidationError) {
      this.showValidationErrors(error.errors || error.body?.errors);
      return;
    }

    // Rate limiting
    if (error.status === 429) {
      this.showNotification('Demasiadas peticiones. Espera un momento.', 'warning');
      return;
    }

    // Error del servidor
    if (error.status >= 500) {
      this.showNotification('Error del servidor. Intenta más tarde.', 'error');
      this.logError(error); // Enviar a servicio de monitoreo
      return;
    }

    // Error genérico
    this.showNotification('Algo salió mal', 'error');
    console.error('Error no manejado:', error);
  },

  showNotification(message, type) {
    // Implementar según tu UI
    console.log(`[${type.toUpperCase()}] ${message}`);
  },

  showValidationErrors(errors) {
    // Implementar según tu UI
    console.log('Errores de validación:', errors);
  },

  redirectToLogin() {
    // window.location.href = '/login';
    console.log('Redirigiendo a login...');
  },

  logError(error) {
    // Enviar a Sentry, LogRocket, etc.
    console.error('Error loggeado:', error);
  }
};

// Uso
try {
  const data = await api.get('/protected-resource');
} catch (error) {
  errorHandler.handle(error);
}
```

---

## ✅ Checklist de Aprendizaje

- [ ] Entiendo que fetch solo rechaza por errores de red
- [ ] Siempre verifico response.ok antes de procesar
- [ ] Puedo crear clases de error personalizadas
- [ ] Sé implementar un API client reutilizable
- [ ] Puedo implementar retry con backoff exponencial
- [ ] Comprendo cómo manejar errores de forma centralizada

---

## 🔗 Recursos

- [MDN: Fetch - Checking that the fetch was successful](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful)
- [JavaScript.info: Fetch error handling](https://javascript.info/fetch#error-handling)

---

## 🔗 Navegación

[⬅️ Headers y Configuración](03-headers-config.md) | [Volver a Semana 15 ➡️](../README.md)
