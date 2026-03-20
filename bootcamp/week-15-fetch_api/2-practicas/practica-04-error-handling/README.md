# Práctica 04: Manejo de Errores con Fetch

## 🎯 Objetivo

Implementar patrones robustos de manejo de errores al trabajar con Fetch API, distinguiendo entre errores de red y errores HTTP, implementando reintentos automáticos y centralizando el manejo de errores.

## ⏱️ Duración Estimada

45 minutos

## 📋 Requisitos Previos

- Fetch API básico (práctica 01)
- Métodos HTTP (práctica 02)
- async/await y try-catch

## 🔧 Instrucciones

1. Abre el archivo `starter/index.js`
2. Lee cada paso y descomenta el código correspondiente
3. Ejecuta con `node starter/index.js` después de cada paso
4. Compara con `solution/index.js` si tienes dudas

## 📝 Contenido

### Paso 1: Error de Red vs Error HTTP

Fetch solo rechaza la promesa en errores de red. Los errores HTTP (4xx, 5xx) requieren verificación manual:

```javascript
// Error de red → Promise rechazada
// Error HTTP (404, 500) → Promise resuelta, verificar response.ok
```

### Paso 2: Verificación con response.ok

Patrón fundamental para verificar si la respuesta fue exitosa (status 200-299):

```javascript
if (!response.ok) {
  throw new Error(`HTTP ${response.status}`);
}
```

### Paso 3: Errores Personalizados

Crear clases de error específicas para diferentes situaciones:

```javascript
class HttpError extends Error {
  constructor(response) {
    super(`HTTP ${response.status}`);
    this.status = response.status;
  }
}
```

### Paso 4: Reintentos Automáticos

Implementar lógica de reintento con backoff exponencial para errores transitorios:

```javascript
// Reintentar hasta 3 veces
// Esperar 1s, 2s, 4s entre reintentos
```

### Paso 5: Manejador Centralizado

Crear un wrapper que maneje todos los errores de forma consistente:

```javascript
const safeFetch = async (url, options) => {
  // Timeout, reintentos, errores personalizados
};
```

## ✅ Criterios de Éxito

- [ ] Distingues errores de red de errores HTTP
- [ ] Usas `response.ok` correctamente
- [ ] Creas errores personalizados con contexto útil
- [ ] Implementas reintentos con backoff
- [ ] Tienes un manejador centralizado reutilizable

## 🔗 Recursos

- [Handling Failed HTTP Responses](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful)
- [Error Handling Best Practices](https://javascript.info/error-handling)
