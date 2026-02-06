# 📖 Glosario - Semana 15: Fetch API

Términos clave de esta semana ordenados alfabéticamente.

---

## A

### AbortController
Interfaz que permite cancelar peticiones fetch en curso. Se crea con `new AbortController()` y se pasa `controller.signal` a la opción `signal` de fetch.

```javascript
const controller = new AbortController();
fetch(url, { signal: controller.signal });
controller.abort(); // Cancela la petición
```

### API (Application Programming Interface)
Conjunto de reglas y protocolos que permite la comunicación entre aplicaciones. Una API REST expone endpoints HTTP para operaciones CRUD.

## B

### Body
Contenido de una petición o respuesta HTTP. En fetch, se envía como string (generalmente JSON) en la propiedad `body` de las opciones.

```javascript
fetch(url, { body: JSON.stringify(data) });
```

## C

### CORS (Cross-Origin Resource Sharing)
Mecanismo de seguridad del navegador que controla qué dominios pueden acceder a recursos de otro dominio. Configurado mediante headers HTTP.

### Content-Type
Header HTTP que indica el formato de los datos enviados. Para JSON: `'application/json'`.

### CRUD
Acrónimo de Create, Read, Update, Delete — las cuatro operaciones básicas sobre datos, mapeadas a POST, GET, PUT/PATCH, DELETE.

## D

### DELETE
Método HTTP para eliminar un recurso del servidor.

```javascript
fetch('/api/items/1', { method: 'DELETE' });
```

## E

### Endpoint
URL específica de una API que realiza una operación determinada. Ejemplo: `GET /api/users` para obtener usuarios.

## F

### Fetch API
Interfaz moderna de JavaScript para realizar peticiones HTTP. Reemplaza a XMLHttpRequest con una API basada en Promises.

```javascript
const response = await fetch('https://api.example.com/data');
const data = await response.json();
```

## G

### GET
Método HTTP para obtener/leer datos del servidor. Es el método por defecto de fetch.

## H

### Headers
Metadatos enviados junto con peticiones y respuestas HTTP. Incluyen Content-Type, Authorization, Accept, entre otros.

```javascript
const headers = new Headers();
headers.set('Authorization', 'Bearer token123');
```

### HTTP Status Codes
Códigos numéricos que indican el resultado de una petición:
- **2xx**: Éxito (200 OK, 201 Created)
- **4xx**: Error del cliente (400 Bad Request, 401 Unauthorized, 404 Not Found)
- **5xx**: Error del servidor (500 Internal Server Error)

## J

### JSON (JavaScript Object Notation)
Formato de texto para intercambiar datos. Es el formato estándar en APIs REST modernas.

### JSONPlaceholder
API REST gratuita de pruebas que simula un backend con posts, comments, users y otros recursos.

## M

### Method
Propiedad de las opciones de fetch que define el verbo HTTP: GET, POST, PUT, PATCH, DELETE.

## N

### Network Error
Error que ocurre cuando no se puede establecer conexión con el servidor (sin internet, DNS fallido, CORS). Es el único caso en que fetch rechaza la Promise.

## O

### Options (Fetch Options)
Objeto de configuración pasado como segundo argumento a fetch. Incluye: method, headers, body, signal, mode, credentials, cache.

```javascript
fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

## P

### PATCH
Método HTTP para actualizar parcialmente un recurso. Solo envía los campos que cambian.

### POST
Método HTTP para crear un nuevo recurso en el servidor.

```javascript
fetch('/api/items', {
  method: 'POST',
  body: JSON.stringify({ name: 'Nuevo' })
});
```

### PUT
Método HTTP para reemplazar completamente un recurso existente. Envía todas las propiedades.

## Q

### Query Parameters
Parámetros pasados en la URL después de `?`. Se pueden construir con `URLSearchParams`.

```javascript
const params = new URLSearchParams({ page: 1, limit: 10 });
fetch(`/api/items?${params}`);
```

## R

### Request
Objeto que representa una petición HTTP. Se puede crear con `new Request(url, options)`.

### Response
Objeto devuelto por fetch que contiene la respuesta del servidor. Propiedades clave: `status`, `ok`, `headers`.

### response.json()
Método asíncrono del objeto Response que lee el body y lo parsea como JSON.

### response.ok
Propiedad booleana de Response que es `true` si el status está entre 200-299.

### REST (Representational State Transfer)
Arquitectura de APIs que usa URLs como recursos y métodos HTTP como operaciones.

### Retry Pattern
Patrón que reintenta automáticamente peticiones fallidas con backoff exponencial (esperas crecientes entre intentos).

## S

### Signal
Propiedad de AbortController que se pasa a fetch para permitir la cancelación de la petición.

### Status Code
→ Ver **HTTP Status Codes**

## T

### Timeout
Tiempo máximo de espera para una petición. Se implementa con AbortController y setTimeout.

```javascript
const controller = new AbortController();
setTimeout(() => controller.abort(), 5000);
```

## U

### URLSearchParams
API para construir y manipular query strings de forma segura.

```javascript
const params = new URLSearchParams();
params.append('q', 'búsqueda');
params.append('page', '1');
// Resultado: "q=b%C3%BAsqueda&page=1"
```
