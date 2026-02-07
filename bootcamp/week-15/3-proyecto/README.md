# 🌐 Proyecto Semanal: Explorador de API REST

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

## 🎯 Objetivo

Crear un **Explorador de API REST** que demuestre dominio de:

- Fetch API con todos los métodos HTTP (GET, POST, PUT, DELETE)
- Configuración de headers y opciones
- Manejo robusto de errores (red, HTTP, timeout)
- AbortController para cancelar peticiones
- Interfaz visual con retroalimentación al usuario

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio al inicio del trimestre]

Adaptarás este explorador de API a las entidades de tu dominio específico.

## 🎬 Descripción del Proyecto

Construirás un **CRUD visual conectado a una API REST** que:

1. Lista registros obtenidos de una API pública
2. Permite crear nuevos registros con formularios
3. Permite editar registros existentes
4. Permite eliminar registros con confirmación
5. Muestra estados de carga, éxito y error
6. Permite cancelar peticiones en curso

> **📡 API Pública**: Usaremos [JSONPlaceholder](https://jsonplaceholder.typicode.com) como API de prueba. Las operaciones POST/PUT/DELETE son simuladas (la API responde correctamente pero no persiste los datos).

## 💡 Ejemplo de Adaptación: Planetario 🔭

Para ilustrar el proyecto, usamos el dominio "Planetario":

### Entidades

| Entidad | Endpoint API | Operaciones |
|---------|-------------|-------------|
| Eventos astronómicos | `/posts` | CRUD completo |
| Comentarios de visitantes | `/comments` | Lectura + Creación |
| Guías del planetario | `/users` | Solo lectura |

### Interfaz del Planetario

```
┌──────────────────────────────────────────────────────┐
│  🔭 Explorador del Planetario                        │
├──────────────────────────────────────────────────────┤
│                                                      │
│  [📋 Eventos]  [💬 Comentarios]  [👤 Guías]          │
│                                                      │
│  ┌─ Eventos Astronómicos ────────────────────────┐   │
│  │                                               │   │
│  │  [➕ Nuevo Evento]        🔍 Buscar: [____]   │   │
│  │                                               │   │
│  │  ┌───────────────────────────────────────┐    │   │
│  │  │ 🌑 Eclipse Lunar Total               │    │   │
│  │  │ Fecha: 2024-03-25 | Duración: 3.5h   │    │   │
│  │  │ Guía: María García                    │    │   │
│  │  │ [✏️ Editar] [🗑️ Eliminar]              │    │   │
│  │  └───────────────────────────────────────┘    │   │
│  │                                               │   │
│  │  ┌───────────────────────────────────────┐    │   │
│  │  │ ☄️ Lluvia de Perseidas                │    │   │
│  │  │ Fecha: 2024-08-12 | Duración: 5h     │    │   │
│  │  │ Guía: Carlos López                    │    │   │
│  │  │ [✏️ Editar] [🗑️ Eliminar]              │    │   │
│  │  └───────────────────────────────────────┘    │   │
│  │                                               │   │
│  │  📊 Mostrando 2 de 15  [◀ Prev] [Next ▶]    │   │
│  └───────────────────────────────────────────────┘   │
│                                                      │
│  ┌─ Estado ──────────────────────────────────────┐   │
│  │ ✅ Datos cargados (234ms) | 📡 Conectado     │   │
│  └───────────────────────────────────────────────┘   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

## 💡 Ejemplos de Adaptación por Dominio

### 📖 Biblioteca
- **Entidades**: Libros (`/posts`), Reseñas (`/comments`), Autores (`/users`)
- **Contexto**: Catálogo digital de biblioteca

### 💊 Farmacia
- **Entidades**: Medicamentos (`/posts`), Observaciones (`/comments`), Laboratorios (`/users`)
- **Contexto**: Inventario de farmacia

### 🏋️ Gimnasio
- **Entidades**: Rutinas (`/posts`), Comentarios (`/comments`), Entrenadores (`/users`)
- **Contexto**: Gestión de rutinas de gimnasio

### 🍽️ Restaurante
- **Entidades**: Platillos (`/posts`), Opiniones (`/comments`), Chefs (`/users`)
- **Contexto**: Menú digital de restaurante

### 🏥 Hospital
- **Entidades**: Citas (`/posts`), Notas médicas (`/comments`), Doctores (`/users`)
- **Contexto**: Sistema de gestión de citas

## ✅ Requisitos Funcionales

### RF1: Listar Registros (Obligatorio)
- [ ] Obtener registros de la API con `fetch` y método GET
- [ ] Mostrar indicador de carga mientras se obtienen
- [ ] Renderizar tarjetas/filas con los datos
- [ ] Implementar paginación con `_page` y `_limit`
- [ ] Manejar errores de red y HTTP

### RF2: Crear Registros (Obligatorio)
- [ ] Formulario para ingresar nuevos datos
- [ ] Enviar datos con `fetch` y método POST
- [ ] Configurar headers `Content-Type: application/json`
- [ ] Mostrar confirmación de creación exitosa
- [ ] Validar campos antes de enviar

### RF3: Editar Registros (Obligatorio)
- [ ] Prellenar formulario con datos existentes
- [ ] Enviar actualización con `fetch` y método PUT o PATCH
- [ ] Mostrar estado de actualización
- [ ] Actualizar la vista tras edición exitosa

### RF4: Eliminar Registros (Obligatorio)
- [ ] Pedir confirmación antes de eliminar
- [ ] Enviar eliminación con `fetch` y método DELETE
- [ ] Remover el elemento de la vista
- [ ] Manejar errores de eliminación

### RF5: Manejo de Errores (Obligatorio)
- [ ] Verificar `response.ok` en cada petición
- [ ] Mostrar mensajes de error descriptivos al usuario
- [ ] Implementar timeout con `AbortController`
- [ ] Permitir reintentar peticiones fallidas

### RF6: Feedback Visual (Obligatorio)
- [ ] Estados: idle, loading, success, error
- [ ] Deshabilitar botones durante peticiones
- [ ] Mostrar tiempo de respuesta de cada operación
- [ ] Animaciones suaves de transición

## 🎨 Requisitos de Interfaz

- Diseño limpio y responsivo
- Tema oscuro
- Indicadores visuales de estado (colores semánticos)
- Formularios con validación visual
- Botones con estados (normal, hover, disabled, loading)

## 🛠️ Estructura del Proyecto

```
3-proyecto/
├── README.md           # Este archivo
├── index.html          # Estructura HTML
├── styles.css          # Estilos
├── starter/
│   └── script.js       # Código con TODOs
└── solution/
    └── script.js       # Solución completa
```

## 📝 Criterios de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Operaciones CRUD | 30% | GET, POST, PUT/PATCH, DELETE funcionan correctamente |
| Fetch API | 25% | Uso correcto de fetch con headers, body y opciones |
| Manejo de Errores | 20% | Errores de red, HTTP y timeout manejados |
| Código Limpio | 15% | Código organizado, modular y comentado |
| UX/UI | 10% | Interfaz intuitiva con retroalimentación visual |

## 🚀 Instrucciones de Desarrollo

1. **Revisa** el código en `starter/script.js`
2. **Adapta** las constantes y textos a tu dominio
3. **Completa** cada TODO siguiendo las instrucciones
4. **Prueba** cada operación CRUD individualmente
5. **Verifica** el manejo de errores desconectando la red
6. **Refina** la interfaz y experiencia de usuario

## 📋 Entregables

1. Código funcional adaptado a tu dominio
2. Capturas de pantalla mostrando:
   - Listado de registros
   - Creación de un registro
   - Edición de un registro
   - Eliminación con confirmación
   - Estado de error
3. README actualizado describiendo tu implementación

## ⏱️ Tiempo Estimado

2-3 horas

## 🔗 Recursos de Apoyo

- [Teoría: Fetch Basics](../1-teoria/01-fetch-basics.md)
- [Teoría: Request y Response](../1-teoria/02-request-response.md)
- [Teoría: Headers y Configuración](../1-teoria/03-headers-config.md)
- [Teoría: Manejo de Errores](../1-teoria/04-error-handling.md)
- [Guía de JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/)
- [MDN: Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
