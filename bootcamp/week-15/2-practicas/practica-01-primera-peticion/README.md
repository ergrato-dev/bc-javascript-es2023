# 🌐 Práctica 01: Tu Primera Petición Fetch

## 🎯 Objetivos

- Realizar tu primera petición HTTP con fetch
- Entender el flujo de fetch → response → data
- Trabajar con datos JSON de una API pública
- Usar URLSearchParams para query parameters

## 📋 Descripción

En esta práctica harás peticiones GET a JSONPlaceholder, una API pública de pruebas, para obtener usuarios, posts y comentarios.

## ⏱️ Duración

40 minutos

## 📚 Conceptos Clave

### Petición GET básica

```javascript
const response = await fetch('https://jsonplaceholder.typicode.com/users');
const users = await response.json();
```

### Con parámetros de búsqueda

```javascript
const params = new URLSearchParams({ _limit: 5 });
const url = `https://api.example.com/items?${params}`;
```

## 📝 Pasos

### Paso 1: Fetch básico

Hacer una petición simple y obtener un usuario.

### Paso 2: Obtener lista

Obtener múltiples recursos de la API.

### Paso 3: URL con parámetros

Agregar query parameters usando URLSearchParams.

### Paso 4: Fetch múltiple

Combinar datos de diferentes endpoints.

### Paso 5: Función reutilizable

Crear una función fetch genérica y reutilizable.

## 🚀 Instrucciones

1. Abre `starter/index.js`
2. Lee cada paso y su explicación
3. Descomenta el código de cada sección
4. Ejecuta con `node starter/index.js`
5. Observa los resultados en consola
6. Compara con `solution/index.js`

## ✅ Verificación

Al completar todos los pasos deberías ver:

- Datos de un usuario específico
- Lista de posts limitada
- Comentarios filtrados por postId
- Datos combinados de usuario + posts

## 🔗 Recursos

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [MDN: Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
