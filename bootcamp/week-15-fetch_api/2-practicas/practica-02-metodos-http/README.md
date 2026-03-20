# 📤 Práctica 02: Métodos HTTP

## 🎯 Objetivos

- Usar diferentes métodos HTTP: GET, POST, PUT, PATCH, DELETE
- Enviar datos en el body de las peticiones
- Configurar Content-Type correctamente
- Entender las respuestas de cada método

## 📋 Descripción

En esta práctica trabajarás con todos los métodos HTTP usando JSONPlaceholder para simular operaciones CRUD (Create, Read, Update, Delete).

## ⏱️ Duración

45 minutos

## 📚 Conceptos Clave

### POST - Crear recursos

```javascript
const response = await fetch('/api/items', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Nuevo Item' })
});
```

### PUT vs PATCH

- **PUT**: Reemplaza todo el recurso
- **PATCH**: Actualiza parcialmente

### DELETE

```javascript
await fetch('/api/items/1', { method: 'DELETE' });
```

## 📝 Pasos

### Paso 1: POST - Crear recurso

Enviar datos para crear un nuevo recurso.

### Paso 2: PUT - Reemplazar recurso

Actualizar completamente un recurso existente.

### Paso 3: PATCH - Actualización parcial

Actualizar solo algunos campos de un recurso.

### Paso 4: DELETE - Eliminar recurso

Eliminar un recurso del servidor.

### Paso 5: CRUD completo

Implementar todas las operaciones en funciones reutilizables.

## 🚀 Instrucciones

1. Abre `starter/index.js`
2. Lee cada paso y su explicación
3. Descomenta el código de cada sección
4. Ejecuta con `node starter/index.js`
5. Observa los resultados
6. Compara con `solution/index.js`

## ✅ Verificación

Al completar deberías ver:

- Recurso creado con ID asignado
- Recurso actualizado completamente
- Recurso actualizado parcialmente
- Confirmación de eliminación

## 🔗 Recursos

- [MDN: HTTP methods](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
- [JSONPlaceholder Guide](https://jsonplaceholder.typicode.com/guide/)
