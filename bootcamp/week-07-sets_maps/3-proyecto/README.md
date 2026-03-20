# 🎯 Proyecto Semana 07: Sistema de Gestión con Sets y Maps

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

## 🏛️ Política de Dominios Únicos

**Tu dominio fue asignado por el instructor al inicio del trimestre.** Este proyecto debe implementarse usando entidades de tu dominio para demostrar el uso de Sets y Maps.

### Ejemplos de Adaptación

| Dominio | Set para | Map para | WeakMap para |
|---------|----------|----------|--------------|
| **Planetario 🔭** | Constelaciones únicas | Cuerpos por constelación | Caché de cálculos |
| **Acuario 🐠** | Especies únicas | Especies por tanque | Datos de salud |
| **Museo 🏛️** | Autores únicos | Obras por sala | Préstamos activos |

---

## 📋 Descripción

Construirás un **Sistema de Gestión** que utiliza Sets y Maps para manejar entidades únicas, categorías, estados y relaciones. El sistema incluye funcionalidades de caché con WeakMap y tracking de objetos con WeakSet.

## 🎯 Objetivos del Proyecto

- Aplicar Set para garantizar unicidad de entidades
- Usar Map para almacenar datos estructurados
- Implementar WeakMap para datos privados y caché
- Usar WeakSet para tracking de estados activos
- Crear operaciones de conjuntos para gestión de categorías

## 📁 Estructura del Proyecto

```
3-proyecto/
├── index.html          # Interfaz del sistema
├── styles.css          # Estilos
├── starter/
│   └── script.js       # Tu código (completa los TODOs)
└── solution/
    └── script.js       # Solución de referencia
```

## ✨ Funcionalidades a Implementar

### 1. Gestión de Entidades (Map + Set)
- Registro de entidades con identificadores únicos
- Almacenamiento de datos en Map
- Validación de duplicados con Set

**Ejemplo Planetario 🔭:**
- Registro de cuerpos celestes por ID único
- Set de constelaciones/sistemas donde se ubican
- Map de datos científicos por cuerpo

### 2. Sistema de Categorías (Set Operations)
- Categorías del dominio
- Asignar múltiples categorías a entidades
- Operaciones: entidades con categoría X, con ambas, etc.

**Ejemplo Planetario 🔭:**
- Tipos: planeta, estrella, asteroide, satélite
- Subcategorías: rocoso, gaseoso, enano, gigante

### 3. Estados Activos (WeakSet)
- Tracking de entidades en proceso
- Activar/desactivar sin memory leaks
- Verificación de estado activo

**Ejemplo Planetario 🔭:**
- Cuerpos en observación activa
- Eventos astronómicos en curso

### 4. Caché de Cálculos (WeakMap)
- Cachear resultados de consultas
- Datos computados costosos
- Limpieza automática

**Ejemplo Planetario 🔭:**
- Cálculos de órbitas
- Posiciones calculadas por fecha

## 📝 Instrucciones

1. **Abre `starter/script.js`**
2. **Adapta los TODOs a tu dominio asignado**
3. **Completa cada función** usando Sets, Maps, WeakMap y WeakSet
4. **Prueba en el navegador** abriendo `index.html`
5. **Verifica** que todas las funcionalidades funcionen correctamente

## 🧪 Funcionalidades de Prueba

La interfaz incluye:
- Formulario de registro de entidades
- Panel de gestión de categorías
- Indicador de estados activos
- Consola de operaciones de conjuntos

## ✅ Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Registro de entidades únicas | 20 |
| Gestión de categorías con Set | 20 |
| Operaciones de conjuntos | 20 |
| Sistema de estados con WeakSet | 20 |
| Caché con WeakMap | 20 |
| **Total** | **100** |

## 💡 Adaptación por Dominio

| Dominio | Entidades | Categorías | Estados |
|---------|-----------|------------|---------|
| **Planetario 🔭** | Cuerpos celestes | Tipo/Sistema | En observación |
| **Acuario 🐠** | Especies marinas | Tanque/Hábitat | En cuarentena |
| **Museo 🏛️** | Obras de arte | Sala/Período | En préstamo |

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
