# 🏗️ Proyecto Semana 04: Sistema Modular con ES2023 Modules

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

## 🏛️ Política de Dominios Únicos

**Tu dominio fue asignado por el instructor al inicio del trimestre.** Este proyecto debe implementarse completamente dentro del contexto de tu dominio asignado.

### ¿Por qué dominios únicos?

- Previene copia entre compañeros
- Fomenta implementaciones originales
- Desarrolla capacidad de organizar código modular
- Aplica módulos ES2023 a contextos específicos

---

## 🎯 Objetivo

Crear una aplicación de gestión utilizando arquitectura modular ES2023, destructuring avanzado y dynamic imports, aplicada a tu dominio asignado.

---

## 📋 Descripción

Sistema completo para gestionar elementos de tu dominio con:

- CRUD de elementos principales
- Categorías y filtros
- Reportes y estadísticas (carga bajo demanda)
- Persistencia en localStorage
- Arquitectura modular clara

---

## 💡 Ejemplos de Adaptación por Dominio

| Concepto | Planetario 🔭 | Acuario 🐠 |
|----------|---------------|------------|
| **Elemento Principal** | CelestialBody | MarineCreature |
| **Categorías** | Planet, Star, Moon | Fish, Mammal, Crustacean |
| **Servicio** | ObservatoryService | AquariumService |
| **Reportes** | VisibilityReport | PopulationReport |
| **Configuración** | Magnitudes, distancias | Temperaturas, salinidad |

---

## 🗂️ Estructura del Proyecto

```
3-proyecto/
├── README.md               # Este archivo
├── index.html              # HTML principal
├── styles.css              # Estilos
├── starter/                # 👈 Plantilla para estudiantes
│   ├── main.js             # Punto de entrada
│   ├── config.js           # Configuración y constantes
│   ├── models/
│   │   ├── index.js        # Barrel export de modelos
│   │   ├── BaseEntity.js   # Clase base (renombrar según dominio)
│   │   └── Category.js     # Clase para categorías
│   ├── services/
│   │   ├── index.js        # Barrel export de servicios
│   │   ├── storage.js      # Servicio de LocalStorage
│   │   └── manager.js      # Lógica principal de gestión
│   ├── features/
│   │   ├── reports.js      # Reportes (lazy load)
│   │   └── export.js       # Exportación (lazy load)
│   ├── ui/
│   │   ├── index.js        # Barrel export de UI
│   │   ├── render.js       # Funciones de renderizado
│   │   └── events.js       # Event handlers
│   └── utils/
│       ├── index.js        # Barrel export de utilidades
│       ├── formatters.js   # Funciones de formateo
│       └── validators.js   # Funciones de validación
└── solution/               # Referencia (no copiar)
```

---

## 🎯 Requisitos Funcionales

### Elementos Principales

- [ ] Agregar elemento con propiedades de tu dominio
- [ ] Editar elemento existente
- [ ] Eliminar elemento
- [ ] Buscar/filtrar elementos

### Categorías

- [ ] Lista de categorías específicas de tu dominio
- [ ] Filtrar por categoría

### Reportes (Dynamic Import)

- [ ] Total de elementos
- [ ] Estadísticas calculadas (valor total, promedios, etc.)
- [ ] Elementos con alertas (stock bajo, vencidos, etc.)
- [ ] Distribución por categoría

### Persistencia

- [ ] Guardar en localStorage
- [ ] Cargar al iniciar

---

## 🧪 Criterios Técnicos

### Destructuring (Obligatorio)

```javascript
// En parámetros de funciones
const createEntity = ({ name, category, value }) => { ... };

// En retornos de funciones
const { total, average, max } = calculateStats(items);

// En iteraciones
items.forEach(({ id, name }) => console.log(id, name));

// Con valores por defecto
const { quantity = 0, active = true } = entity;
```

### Módulos ES2023 (Obligatorio)

```javascript
// Named exports para utilidades
export const formatCurrency = value => `$${value.toFixed(2)}`;
export const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Default exports para clases principales
export default class Entity { ... }

// Barrel exports (index.js)
export { Entity } from './Entity.js';
export { Category } from './Category.js';

// Re-exports organizados
export * from './formatters.js';
export { default as Entity } from './Entity.js';
```

### Dynamic Imports (Obligatorio)

```javascript
// Carga bajo demanda
const loadReports = async () => {
  const { generateReport, getStatistics } = await import('./features/reports.js');
  return generateReport(items);
};

// Con manejo de errores
try {
  const module = await import('./features/export.js');
  module.exportToCSV(data);
} catch (error) {
  console.error('Error cargando módulo:', error);
}
```

---

## ✅ Criterios de Evaluación

### Destructuring (25 puntos)

- [ ] En parámetros de funciones (7pts)
- [ ] En retornos/asignaciones (6pts)
- [ ] En iteraciones de arrays (6pts)
- [ ] Con valores por defecto (6pts)

### Módulos ES2023 (40 puntos)

- [ ] Named exports correctos (10pts)
- [ ] Default exports apropiados (10pts)
- [ ] Barrel exports (index.js) (10pts)
- [ ] Estructura modular clara (10pts)

### Dynamic Imports (20 puntos)

- [ ] Al menos 2 módulos con lazy loading (10pts)
- [ ] Manejo de errores en imports (10pts)

### Funcionalidad (15 puntos)

- [ ] CRUD funcional (10pts)
- [ ] Persistencia en localStorage (5pts)

**Total: 100 puntos**
**Mínimo para aprobar: 70 puntos**

---

## 🚀 Cómo Empezar

### 1. Define tu Configuración

Adapta `config.js` con las constantes de tu dominio:

```javascript
// EJEMPLO (Planetario - NO asignable)
export const CATEGORIES = {
  PLANET: { id: 'planet', name: 'Planeta', emoji: '🪐' },
  STAR: { id: 'star', name: 'Estrella', emoji: '⭐' },
  SATELLITE: { id: 'satellite', name: 'Satélite', emoji: '🌙' },
};

export const APP_CONFIG = {
  APP_NAME: 'Observatorio Estelar',
  STORAGE_KEY: 'observatory_data',
  VISIBILITY_THRESHOLD: 6, // Magnitud mínima visible
};
```

### 2. Crea tus Modelos

Adapta las clases en `models/`:

```javascript
// EJEMPLO (Planetario - NO asignable)
export default class CelestialBody {
  constructor({ name, type, magnitude, distance }) {
    this.id = Date.now();
    this.name = name;
    this.type = type;
    this.magnitude = magnitude;
    this.distance = distance;
  }

  get isVisible() {
    return this.magnitude <= VISIBILITY_THRESHOLD;
  }
}
```

### 3. Implementa los Servicios

Crea la lógica de negocio en `services/`.

### 4. Implementa la UI

Conecta todo en `ui/render.js` y `ui/events.js`.

### 5. Agrega Features con Dynamic Import

Implementa `features/reports.js` y cárgalo bajo demanda.

---

## 💡 Pistas sobre Imports/Exports

### Estructura de Barrel Export

```javascript
// models/index.js
export { default as Entity } from './Entity.js';
export { default as Category } from './Category.js';

// Uso
import { Entity, Category } from './models/index.js';
```

### Dynamic Import Pattern

```javascript
// Botón que carga reportes
document.getElementById('reports-btn').addEventListener('click', async () => {
  const { generateReport } = await import('./features/reports.js');
  const report = generateReport(items);
  renderReport(report);
});
```

---

## ⏱️ Tiempo Estimado

- **Configuración y modelos**: 1 hora
- **Servicios**: 1 hora
- **UI y eventos**: 1.5 horas
- **Dynamic imports**: 30 minutos
- **Testing y refinamiento**: 1 hora

**Total: ~5 horas**

---

## 📋 Entregables

1. **Código modular** con estructura de carpetas correcta
2. **Todos los archivos** usando import/export ES2023
3. **README personal** documentando tu implementación
4. **Todo el código debe usar**:
   - Nomenclatura técnica en inglés
   - Comentarios en español
   - Destructuring en todo el código
   - Módulos ES2023 (nunca CommonJS)

---

_Proyecto Week-04 - JavaScript Moderno Bootcamp_
