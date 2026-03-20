# 📦 Objetos Request y Response

## 🎯 Objetivos

Al finalizar este tema, serás capaz de:

- Comprender la estructura del objeto Response
- Conocer las propiedades y métodos de Response
- Crear objetos Request personalizados
- Manipular respuestas de forma avanzada

---

## 📋 Contenido

### 1. El objeto Response

Cuando hacemos `fetch()`, obtenemos un objeto `Response` que contiene toda la información de la respuesta HTTP.

```javascript
// ============================================
// Propiedades del objeto Response
// ============================================

const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

// Propiedades de estado HTTP
console.log(response.status);      // 200 - Código de estado HTTP
console.log(response.statusText);  // "OK" - Texto del estado
console.log(response.ok);          // true - true si status 200-299

// Información de la respuesta
console.log(response.url);         // URL final (después de redirects)
console.log(response.redirected);  // true si hubo redirect
console.log(response.type);        // "basic", "cors", "opaque", etc.

// Headers de la respuesta
console.log(response.headers);     // Objeto Headers

// Body de la respuesta (stream)
console.log(response.body);        // ReadableStream
console.log(response.bodyUsed);    // false (hasta que leamos el body)
```

---

### 2. Propiedades de Response en detalle

```javascript
// ============================================
// response.status - Códigos HTTP comunes
// ============================================

// Códigos de éxito (2xx)
// 200 - OK: Petición exitosa
// 201 - Created: Recurso creado
// 204 - No Content: Éxito sin body

// Códigos de redirección (3xx)
// 301 - Moved Permanently
// 302 - Found (redirect temporal)
// 304 - Not Modified (usar caché)

// Códigos de error cliente (4xx)
// 400 - Bad Request: Petición mal formada
// 401 - Unauthorized: Sin autenticación
// 403 - Forbidden: Sin permisos
// 404 - Not Found: Recurso no existe
// 422 - Unprocessable Entity: Validación fallida

// Códigos de error servidor (5xx)
// 500 - Internal Server Error
// 502 - Bad Gateway
// 503 - Service Unavailable
```

```javascript
// ============================================
// response.ok - Atajo para verificar éxito
// ============================================

const response = await fetch('/api/data');

// response.ok es true si status está entre 200-299
if (response.ok) {
  const data = await response.json();
  console.log('Datos recibidos:', data);
} else {
  console.error(`Error HTTP: ${response.status}`);
}

// response.ok es equivalente a:
// response.status >= 200 && response.status < 300
```

---

### 3. Trabajando con Headers

```javascript
// ============================================
// Leer headers de la respuesta
// ============================================

const response = await fetch('https://api.github.com/users/octocat');

// Obtener un header específico
const contentType = response.headers.get('content-type');
console.log(contentType); // "application/json; charset=utf-8"

// Verificar si existe un header
const hasCache = response.headers.has('cache-control');
console.log(hasCache); // true o false

// Iterar sobre todos los headers
for (const [name, value] of response.headers) {
  console.log(`${name}: ${value}`);
}
// content-type: application/json; charset=utf-8
// x-ratelimit-limit: 60
// x-ratelimit-remaining: 59
// ...

// Convertir a objeto (útil para debugging)
const headersObj = Object.fromEntries(response.headers);
console.log(headersObj);
```

```javascript
// ============================================
// Headers útiles en respuestas de API
// ============================================

const response = await fetch('/api/items');

// Paginación
const totalItems = response.headers.get('x-total-count');
const totalPages = response.headers.get('x-total-pages');
const currentPage = response.headers.get('x-current-page');

// Rate limiting
const rateLimit = response.headers.get('x-ratelimit-limit');
const remaining = response.headers.get('x-ratelimit-remaining');
const resetTime = response.headers.get('x-ratelimit-reset');

// Caché
const cacheControl = response.headers.get('cache-control');
const etag = response.headers.get('etag');
const lastModified = response.headers.get('last-modified');
```

---

### 4. El objeto Request

Puedes crear un objeto `Request` para tener más control sobre la petición:

```javascript
// ============================================
// Crear un objeto Request
// ============================================

// Opción 1: fetch() acepta un string (crea Request internamente)
const response1 = await fetch('https://api.example.com/data');

// Opción 2: Crear Request explícitamente
const request = new Request('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
});

const response2 = await fetch(request);
```

```javascript
// ============================================
// Propiedades del objeto Request
// ============================================

const request = new Request('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John' })
});

console.log(request.url);        // "https://api.example.com/users"
console.log(request.method);     // "POST"
console.log(request.headers);    // Headers object
console.log(request.body);       // ReadableStream
console.log(request.bodyUsed);   // false
console.log(request.credentials); // "same-origin" (por defecto)
console.log(request.mode);       // "cors" (por defecto)
```

---

### 5. Clonar Request y Response

Los objetos Request y Response solo pueden ser leídos **una vez**. Para reutilizarlos, debes clonarlos:

```javascript
// ============================================
// Clonar para reutilizar
// ============================================

// Clonar Request
const originalRequest = new Request('/api/data', { method: 'GET' });
const clonedRequest = originalRequest.clone();

// Ahora puedes usar ambos
await fetch(originalRequest);
await fetch(clonedRequest); // Reintento, por ejemplo

// Clonar Response
const response = await fetch('/api/data');
const clonedResponse = response.clone();

// Útil para leer el body de diferentes formas
const jsonData = await response.json();
const textData = await clonedResponse.text();
```

```javascript
// ============================================
// Caso de uso: Logging + Procesamiento
// ============================================

const fetchWithLogging = async (url, options) => {
  const response = await fetch(url, options);
  const clone = response.clone();

  // Log para debugging (no consume el original)
  const logData = await clone.text();
  console.log('Response body:', logData.slice(0, 200) + '...');

  // Retornar el original para procesamiento normal
  return response;
};

// Uso
const response = await fetchWithLogging('/api/users');
const users = await response.json(); // Aún funciona
```

---

### 6. Response type

El tipo de respuesta indica su origen y restricciones:

```javascript
// ============================================
// Tipos de Response
// ============================================

const response = await fetch('/api/data');

// response.type puede ser:

// "basic" - Mismo origen, acceso completo
// Puedes leer todos los headers y el body

// "cors" - Cross-origin con headers CORS apropiados
// Acceso según lo que permita el servidor

// "opaque" - Cross-origin sin CORS (mode: 'no-cors')
// No puedes leer headers ni body, status siempre 0

// "opaqueredirect" - Redirect opaco
// Similar a opaque

// Ejemplo con mode: 'no-cors'
const opaqueResponse = await fetch('https://another-site.com', {
  mode: 'no-cors'
});
console.log(opaqueResponse.type);   // "opaque"
console.log(opaqueResponse.status); // 0 (no accesible)
```

---

### 7. Crear Response manualmente

Útil para testing o Service Workers:

```javascript
// ============================================
// Crear Response manualmente
// ============================================

// Response con JSON
const jsonResponse = new Response(
  JSON.stringify({ message: 'Hello' }),
  {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  }
);

const data = await jsonResponse.json();
console.log(data); // { message: 'Hello' }

// Response de error
const errorResponse = new Response(
  JSON.stringify({ error: 'Not found' }),
  {
    status: 404,
    statusText: 'Not Found',
    headers: { 'Content-Type': 'application/json' }
  }
);

// Útil para mocking en tests
const mockFetch = async (url) => {
  if (url.includes('/users')) {
    return new Response(
      JSON.stringify([{ id: 1, name: 'Test User' }]),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
  return new Response(null, { status: 404 });
};
```

---

## 📊 Diagrama: Flujo Request → Response

![Request Response Flow](../0-assets/01-fetch-request-response.svg)

---

## ✅ Checklist de Aprendizaje

- [ ] Conozco las propiedades del objeto Response (status, ok, headers)
- [ ] Sé cómo leer headers de una respuesta
- [ ] Entiendo cuándo usar Response.clone()
- [ ] Puedo crear objetos Request personalizados
- [ ] Comprendo los diferentes tipos de Response

---

## 🔗 Recursos

- [MDN: Response](https://developer.mozilla.org/es/docs/Web/API/Response)
- [MDN: Request](https://developer.mozilla.org/es/docs/Web/API/Request)
- [MDN: Headers](https://developer.mozilla.org/es/docs/Web/API/Headers)

---

## 🔗 Navegación

[⬅️ Fetch Basics](01-fetch-basics.md) | [Siguiente: Headers y Configuración ➡️](03-headers-config.md)
