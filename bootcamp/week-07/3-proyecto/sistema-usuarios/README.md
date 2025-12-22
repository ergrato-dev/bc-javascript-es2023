# 🎯 Proyecto Semana 07: Sistema de Gestión de Usuarios Únicos

## 📋 Descripción

Construirás un **Sistema de Gestión de Usuarios** que utiliza Sets y Maps para manejar usuarios únicos, roles, permisos y sesiones activas. El sistema incluye funcionalidades de caché con WeakMap y tracking de objetos con WeakSet.

## 🎯 Objetivos del Proyecto

- Aplicar Set para garantizar unicidad de usuarios y emails
- Usar Map para almacenar datos estructurados de usuarios
- Implementar WeakMap para datos privados y caché
- Usar WeakSet para tracking de sesiones activas
- Crear operaciones de conjuntos para gestión de roles

## 📁 Estructura del Proyecto

```
sistema-usuarios/
├── index.html      # Interfaz del sistema
├── styles.css      # Estilos
├── starter/
│   └── script.js   # Tu código (completa los TODOs)
└── solution/
    └── script.js   # Solución de referencia
```

## ✨ Funcionalidades a Implementar

### 1. Gestión de Usuarios (Map + Set)
- Registro de usuarios con emails únicos
- Almacenamiento de datos en Map
- Validación de duplicados con Set

### 2. Sistema de Roles (Set Operations)
- Roles predefinidos: admin, editor, viewer
- Asignar múltiples roles a usuarios
- Operaciones: usuarios con rol X, usuarios con ambos roles, etc.

### 3. Sesiones Activas (WeakSet)
- Tracking de usuarios conectados
- Login/logout sin memory leaks
- Verificación de sesión activa

### 4. Caché de Datos (WeakMap)
- Cachear resultados de consultas
- Datos privados de usuarios
- Limpieza automática

## 📝 Instrucciones

1. **Abre `starter/script.js`**
2. **Completa cada función** marcada con `// TODO:`
3. **Prueba en el navegador** abriendo `index.html`
4. **Verifica** que todas las funcionalidades funcionen correctamente

## 🧪 Funcionalidades de Prueba

La interfaz incluye:
- Formulario de registro de usuarios
- Panel de gestión de roles
- Indicador de sesiones activas
- Consola de operaciones de conjuntos

## ✅ Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Registro de usuarios únicos | 20 |
| Gestión de roles con Set | 20 |
| Operaciones de conjuntos | 20 |
| Sistema de sesiones con WeakSet | 20 |
| Caché con WeakMap | 20 |
| **Total** | **100** |

## 🚀 Cómo Ejecutar

1. Abre `index.html` en tu navegador
2. Usa la interfaz para probar las funcionalidades
3. Abre la consola del navegador (F12) para ver logs

## 💡 Pistas

- Usa `Set` para emails únicos y roles
- Usa `Map` para almacenar usuarios por ID
- Usa `WeakMap` para datos privados (contraseñas hasheadas)
- Usa `WeakSet` para tracking de sesiones activas
- Implementa operaciones de conjuntos como métodos estáticos

## 📚 Recursos

- [MDN: Set](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN: Map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN: WeakMap](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [MDN: WeakSet](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

---

[⬅️ Volver a Prácticas](../2-practicas/) | [Volver a Semana 07](../README.md)
