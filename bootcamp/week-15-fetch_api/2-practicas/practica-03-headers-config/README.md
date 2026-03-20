# ⚙️ Práctica 03: Headers y Configuración

## 🎯 Objetivos

- Configurar headers de petición correctamente
- Usar el constructor Headers
- Implementar autenticación con Bearer tokens
- Configurar opciones de credentials y cache
- Usar AbortController para cancelar peticiones

## 📋 Descripción

En esta práctica aprenderás a configurar fetch con headers personalizados, autenticación y opciones avanzadas.

## ⏱️ Duración

45 minutos

## 📚 Conceptos Clave

### Headers con objeto

```javascript
const response = await fetch(url, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  }
});
```

### Constructor Headers

```javascript
const headers = new Headers();
headers.set('Accept', 'application/json');
```

### AbortController

```javascript
const controller = new AbortController();
fetch(url, { signal: controller.signal });
controller.abort(); // Cancela la petición
```

## 📝 Pasos

### Paso 1: Headers básicos

Configurar Accept y Content-Type.

### Paso 2: Constructor Headers

Crear y manipular headers dinámicamente.

### Paso 3: Autenticación

Implementar Bearer token y API Key.

### Paso 4: AbortController

Cancelar peticiones con timeout.

### Paso 5: Wrapper completo

Crear un cliente API con configuración por defecto.

## 🚀 Instrucciones

1. Abre `starter/index.js`
2. Lee cada paso y su explicación
3. Descomenta el código de cada sección
4. Ejecuta con `node starter/index.js`
5. Observa los resultados
6. Compara con `solution/index.js`

## ✅ Verificación

Al completar deberías ver:

- Headers configurados correctamente
- Respuestas con autenticación
- Peticiones canceladas por timeout
- API client funcional

## 🔗 Recursos

- [MDN: Headers](https://developer.mozilla.org/es/docs/Web/API/Headers)
- [MDN: AbortController](https://developer.mozilla.org/es/docs/Web/API/AbortController)
