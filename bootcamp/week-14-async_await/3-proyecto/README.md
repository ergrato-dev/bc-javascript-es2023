# 🚀 Proyecto Semanal: Sistema de Carga de Datos Asíncrono

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

## 🎯 Objetivo

Crear un sistema de carga de datos asíncrono que demuestre dominio de:

- Funciones `async`/`await`
- Manejo de errores con `try/catch/finally`
- Ejecución paralela vs secuencial
- Estados de carga y retroalimentación visual
- Patrones de retry y timeout

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio al inicio del trimestre]

Adaptarás este sistema de carga de datos a las entidades de tu dominio específico.

## 🎬 Descripción del Proyecto

Construirás un **Dashboard de Datos Asíncrono** que:

1. Carga datos de múltiples fuentes (simuladas) de forma paralela
2. Muestra indicadores de carga individual para cada fuente
3. Maneja errores gracefully con opciones de reintentar
4. Permite al usuario controlar la carga (cancelar, reintentar)
5. Muestra estadísticas de tiempos de carga

## 💡 Ejemplo de Adaptación: Planetario 🔭

Para ilustrar el proyecto, usamos el dominio "Planetario":

### Datos a Cargar

| Fuente | Latencia Simulada | Puede Fallar |
|--------|-------------------|--------------|
| Planetas | 800ms | No |
| Estrellas | 1200ms | Sí (20%) |
| Constelaciones | 600ms | No |
| Eventos Astronómicos | 1500ms | Sí (30%) |
| Telescopios | 400ms | No |

### Interfaz del Planetario

```
┌─────────────────────────────────────────────────────┐
│  🔭 Dashboard Astronómico                           │
├─────────────────────────────────────────────────────┤
│                                                     │
│  [Cargar Todo]  [Cancelar]  [Reiniciar]            │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ 🪐 Planetas        [████████████] ✅ 823ms   │   │
│  │ ⭐ Estrellas       [████░░░░░░░░] 🔄 Retry   │   │
│  │ ✨ Constelaciones  [████████████] ✅ 601ms   │   │
│  │ 📅 Eventos         [██████░░░░░░] ⏳ 45%     │   │
│  │ 🔭 Telescopios     [████████████] ✅ 412ms   │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  📊 Estadísticas:                                  │
│  - Tiempo total: 1.5s (paralelo) vs 4.5s (serial) │
│  - Éxitos: 4/5  |  Fallos: 1/5                    │
│  - Promedio: 612ms/fuente                          │
│                                                     │
│  ┌─ Datos Cargados ─────────────────────────────┐  │
│  │ Planetas: Mercurio, Venus, Tierra, Marte...  │  │
│  │ Constelaciones: Orión, Osa Mayor, Escorpio...│  │
│  │ Telescopios: Hubble, James Webb, VLT...      │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## 💡 Ejemplos de Adaptación por Dominio

### 📖 Biblioteca
- **Fuentes**: Libros, Autores, Géneros, Préstamos, Usuarios
- **Contexto**: Dashboard de gestión bibliotecaria

### 💊 Farmacia
- **Fuentes**: Medicamentos, Laboratorios, Inventario, Ventas, Proveedores
- **Contexto**: Panel de control de farmacia

### 🏋️ Gimnasio
- **Fuentes**: Miembros, Rutinas, Clases, Equipos, Reservas
- **Contexto**: Dashboard de administración del gimnasio

### 🍽️ Restaurante
- **Fuentes**: Platillos, Ingredientes, Mesas, Pedidos, Personal
- **Contexto**: Sistema de gestión de restaurante

### 🏥 Hospital
- **Fuentes**: Pacientes, Médicos, Citas, Medicamentos, Habitaciones
- **Contexto**: Dashboard de gestión hospitalaria

## ✅ Requisitos Funcionales

### RF1: Simulación de APIs (Obligatorio)
- [ ] Crear funciones async que simulen llamadas a API
- [ ] Cada función debe tener latencia configurable
- [ ] Algunas funciones deben simular fallos aleatorios
- [ ] Usar `delay` helper para simular latencia

### RF2: Carga Paralela (Obligatorio)
- [ ] Usar `Promise.all()` o `Promise.allSettled()` para carga paralela
- [ ] Medir y mostrar tiempo total de carga
- [ ] Comparar con tiempo que tomaría secuencialmente

### RF3: Indicadores de Estado (Obligatorio)
- [ ] Estado "pendiente" (gris)
- [ ] Estado "cargando" con barra de progreso animada
- [ ] Estado "éxito" con checkmark y tiempo
- [ ] Estado "error" con botón de retry

### RF4: Manejo de Errores (Obligatorio)
- [ ] Usar `try/catch/finally` en cada operación
- [ ] Mostrar mensaje de error descriptivo
- [ ] Permitir reintentar operaciones fallidas individualmente
- [ ] Implementar patrón de retry automático (máx. 3 intentos)

### RF5: Controles de Usuario (Obligatorio)
- [ ] Botón "Cargar Todo" para iniciar carga paralela
- [ ] Botón "Reiniciar" para limpiar estados
- [ ] Botón "Retry" individual para cada fuente fallida

### RF6: Estadísticas (Obligatorio)
- [ ] Tiempo total de carga
- [ ] Comparación paralelo vs secuencial
- [ ] Contador de éxitos/fallos
- [ ] Tiempo promedio por fuente

## 🎨 Requisitos de Interfaz

- Diseño limpio y responsivo
- Tema oscuro
- Animaciones suaves para estados de carga
- Colores semánticos (verde=éxito, rojo=error, amarillo=cargando)

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
| Funcionalidad | 30% | Todas las características funcionan correctamente |
| Async/Await | 25% | Uso correcto de async/await y manejo de promesas |
| Manejo de Errores | 20% | try/catch/finally implementado correctamente |
| Código Limpio | 15% | Código organizado, comentado y legible |
| UX/UI | 10% | Interfaz intuitiva y atractiva |

## 🚀 Instrucciones de Desarrollo

1. **Revisa** el código en `starter/script.js`
2. **Adapta** las constantes y datos a tu dominio
3. **Completa** cada TODO siguiendo las instrucciones
4. **Prueba** cada funcionalidad individualmente
5. **Refina** la interfaz y experiencia de usuario

## 📋 Entregables

1. Código funcional adaptado a tu dominio
2. Capturas de pantalla mostrando:
   - Estado inicial
   - Cargando datos
   - Éxito completo
   - Manejo de errores
3. README actualizado describiendo tu implementación

## ⏱️ Tiempo Estimado

2-3 horas

## 🔗 Recursos de Apoyo

- [Teoría: Async/Await](../1-teoria/01-async-functions.md)
- [Teoría: Manejo de Errores](../1-teoria/03-error-handling.md)
- [Práctica: Parallel vs Sequential](../2-practicas/practica-03-parallel-vs-sequential/)
- [MDN: Promise.allSettled()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
