# 🎯 Proyecto Semana 05: Dashboard de Análisis de Datos

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

## 🏛️ Política de Dominios Únicos

**Tu dominio fue asignado por el instructor al inicio del trimestre.** Este proyecto debe implementarse completamente dentro del contexto de tu dominio asignado.

### ¿Por qué dominios únicos?

- Previene copia entre compañeros
- Fomenta implementaciones originales
- Desarrolla capacidad de análisis de datos en contextos específicos
- Aplica métodos avanzados de arrays a datos reales

---

## 📋 Descripción

Construirás un **Dashboard de Análisis de Datos** que procesa información de tu dominio asignado. El dashboard mostrará estadísticas, rankings, agrupaciones y transformaciones de datos usando todas las técnicas aprendidas en la semana.

---

## 🎯 Objetivos

Al completar este proyecto, demostrarás dominio de:

- ✅ `flat()` y `flatMap()` para aplanar estructuras
- ✅ `Array.from()` para generar datos y rangos
- ✅ `toSorted()`, `toReversed()`, `with()` (métodos inmutables ES2023)
- ✅ `findLast()` y `findLastIndex()` (ES2023)
- ✅ Chaining de métodos para pipelines de datos
- ✅ `reduce()` para agregaciones y transformaciones

---

## 💡 Ejemplos de Adaptación por Dominio

| Concepto | Planetario 🔭 | Acuario 🐠 |
|----------|---------------|------------|
| **Registro Principal** | Observation (observación) | Feeding (alimentación) |
| **Items Anidados** | celestialBodies[] | species[] |
| **Categorías** | type: planet/star | type: fish/mammal |
| **Métrica Principal** | magnitude | quantity |
| **Agrupación** | Por constelación | Por tanque |
| **Ranking** | Cuerpos más brillantes | Especies más alimentadas |

---

## 📊 Estructura de Datos Genérica

Adapta esta estructura a tu dominio:

```javascript
// EJEMPLO (Planetario - NO es un dominio asignable)
const observationData = [
  {
    id: 'OBS001',
    date: '2024-01-15',
    astronomer: 'Dr. García',
    location: 'Domo Norte',
    celestialBodies: [
      { name: 'Júpiter', type: 'planet', magnitude: -2.5, constellation: 'Piscis' },
      { name: 'Europa', type: 'moon', magnitude: 5.3, constellation: 'Piscis' }
    ],
    status: 'verified'
  },
  // ... más observaciones
];
```

Tu dominio debe tener:
- **Registros principales** (observaciones, transacciones, eventos)
- **Items anidados** (elementos dentro de cada registro)
- **Categorías** (tipos de elementos)
- **Métricas** (valores numéricos para análisis)
- **Fechas** (para análisis temporal)
- **Agrupadores** (región, ubicación, categoría)

---

## 🔧 Funcionalidades a Implementar

### 1. **Aplanar Items Anidados** (flatMap)

Extrae todos los items de todos los registros en un solo array plano.

```javascript
// Ejemplo genérico
const getAllItems = records =>
  records.flatMap(record =>
    record.items.map(item => ({
      ...item,
      recordId: record.id,
      location: record.location
    }))
  );
```

### 2. **Calcular Total por Registro** (map + reduce)

Calcula una métrica agregada para cada registro.

### 3. **Top N Elementos** (chaining + toSorted)

Obtiene los N elementos con mayor valor usando `toSorted()` (inmutable).

### 4. **Agrupar por Categoría** (reduce)

Agrupa los datos por una categoría del dominio.

### 5. **Estadísticas por Agrupador** (flatMap + reduce)

Calcula totales/promedios agrupados.

### 6. **Ranking de Items** (flatMap + reduce + toSorted)

Lista items ordenados por alguna métrica.

### 7. **Filtrar por Rango de Fechas** (filter + chaining)

Filtra registros en un rango de fechas dado.

### 8. **Estadísticas Generales** (reduce)

Calcula: total, promedio, máximo, mínimo.

### 9. **Tendencia Temporal** (groupBy por mes/semana)

Agrupa datos por período para ver tendencias.

### 10. **Buscar Último Elemento** (findLast/findLastIndex ES2023)

Encuentra el último elemento que cumpla una condición.

### 11. **Modificar Sin Mutar** (with() ES2023)

Actualiza un elemento en un índice específico sin mutar el array original.

---

## 🧪 Requisitos Técnicos

### Métodos ES2023 Obligatorios

```javascript
// toSorted() - ordenar sin mutar
const sortedByMetric = items.toSorted((a, b) => b.value - a.value);

// toReversed() - invertir sin mutar
const reversed = items.toReversed();

// findLast() - buscar desde el final
const lastHighValue = items.findLast(item => item.value > threshold);

// findLastIndex() - índice del último que cumple
const lastIndex = items.findLastIndex(item => item.category === 'target');

// with() - reemplazar en índice sin mutar
const updated = items.with(2, { ...items[2], status: 'updated' });
```

### Chaining de Métodos

```javascript
// Pipeline de transformación
const result = records
  .filter(r => r.status === 'active')
  .flatMap(r => r.items)
  .filter(item => item.value > threshold)
  .toSorted((a, b) => b.value - a.value)
  .slice(0, 10);
```

---

## 📁 Estructura de Archivos

```
3-proyecto/
├── README.md           # Este archivo
├── index.html          # HTML del dashboard
├── styles.css          # Estilos
├── starter/
│   ├── script.js       # Código inicial con TODOs
│   └── data.js         # Datos de ejemplo (adaptar a tu dominio)
└── solution/
    └── script.js       # Referencia
```

---

## ✅ Criterios de Evaluación

### Métodos de Arrays (50 puntos)

- [ ] Uso correcto de `flatMap()` (10pts)
- [ ] Uso de `toSorted()` en lugar de `sort()` (10pts)
- [ ] Uso de `findLast()`/`findLastIndex()` (10pts)
- [ ] Uso de `with()` para inmutabilidad (10pts)
- [ ] Chaining efectivo de métodos (10pts)

### Agregaciones con Reduce (25 puntos)

- [ ] Agrupación por categoría (10pts)
- [ ] Estadísticas calculadas correctamente (10pts)
- [ ] Código limpio y legible (5pts)

### Funcionalidad (25 puntos)

- [ ] Dashboard muestra datos correctamente (10pts)
- [ ] Filtros funcionan (10pts)
- [ ] Datos adaptados al dominio asignado (5pts)

**Total: 100 puntos**
**Mínimo para aprobar: 70 puntos**

---

## 🚀 Cómo Empezar

### 1. Define tus Datos

Crea en `data.js` la estructura de datos de tu dominio:

```javascript
// EJEMPLO (Planetario - NO asignable)
export const observationData = [
  {
    id: 'OBS001',
    date: '2024-01-15',
    astronomer: 'Dr. García',
    location: 'Domo Norte',
    celestialBodies: [
      { name: 'Júpiter', type: 'planet', magnitude: -2.5 },
      { name: 'Saturno', type: 'planet', magnitude: 0.7 }
    ],
    status: 'verified'
  },
  // Agrega al menos 10 registros con varios items cada uno
];
```

### 2. Implementa las Funciones

Completa los TODOs en `script.js` usando los métodos ES2023.

### 3. Conecta con el DOM

Renderiza los resultados en el dashboard.

---

## 💡 Pistas

### Array.from() para Generar Rangos

```javascript
// Generar array de números
const range = Array.from({ length: 12 }, (_, i) => i + 1);

// Generar desde otro iterable
const uniqueCategories = Array.from(new Set(items.map(i => i.category)));
```

### Reduce para Agrupar

```javascript
const groupByCategory = items.reduce((acc, item) => {
  const key = item.category;
  acc[key] = acc[key] ?? [];
  acc[key].push(item);
  return acc;
}, {});
```

---

## ⏱️ Tiempo Estimado

- **Definir estructura de datos**: 30 min
- **Implementar funciones de análisis**: 2 horas
- **Conectar con UI**: 1.5 horas
- **Pruebas y refinamiento**: 1 hora

**Total: ~5 horas**

---

## 📋 Entregables

1. **Código funcional** con todas las transformaciones
2. **Datos de ejemplo** adaptados a tu dominio (mínimo 10 registros)
3. **Dashboard visual** que muestre los análisis
4. **Todo el código debe usar**:
   - Nomenclatura técnica en inglés
   - Comentarios en español
   - Métodos inmutables ES2023 (toSorted, toReversed, with)

---

_Proyecto Week-05 - JavaScript Moderno Bootcamp_
