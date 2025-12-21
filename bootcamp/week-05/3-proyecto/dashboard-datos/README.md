# 🎯 Proyecto: Dashboard de Análisis de Datos

## 📋 Descripción

Construirás un **Dashboard de Análisis de Datos** que procesa información de ventas de una empresa. El dashboard mostrará estadísticas, rankings, agrupaciones y transformaciones de datos usando todas las técnicas aprendidas en la semana.

---

## 🎯 Objetivos

Al completar este proyecto, demostrarás dominio de:

- ✅ `flat()` y `flatMap()` para aplanar estructuras
- ✅ `Array.from()` para generar datos y rangos
- ✅ Chaining de métodos para pipelines de datos
- ✅ `sort()` con comparadores personalizados
- ✅ `reduce()` para agregaciones y transformaciones

---

## 📊 Datos del Proyecto

El dashboard trabaja con datos de ventas que incluyen:

```javascript
const salesData = [
  {
    id: 'ORD001',
    date: '2024-01-15',
    customer: 'Ana García',
    region: 'North',
    items: [
      { product: 'Laptop', category: 'Electronics', price: 1200, qty: 1 },
      { product: 'Mouse', category: 'Electronics', price: 25, qty: 2 }
    ],
    status: 'completed'
  },
  // ... más órdenes
];
```

---

## 🔧 Funcionalidades a Implementar

### 1. **Obtener Todos los Items** (flatMap)
Extrae todos los items de todas las órdenes en un solo array plano, agregando `orderId` y `region` a cada item.

### 2. **Calcular Total por Orden** (map + reduce)
Calcula el total de cada orden sumando `price * qty` de todos sus items.

### 3. **Top N Clientes** (chaining + sort)
Obtiene los N clientes con mayor total de compras.

### 4. **Ventas por Región** (reduce - groupBy)
Agrupa las ventas totales por región.

### 5. **Ventas por Categoría** (flatMap + reduce)
Calcula el total vendido en cada categoría de producto.

### 6. **Productos Más Vendidos** (flatMap + reduce + sort)
Lista los productos ordenados por cantidad total vendida.

### 7. **Filtrar Órdenes por Fecha** (filter + chaining)
Filtra órdenes en un rango de fechas dado.

### 8. **Estadísticas Generales** (reduce)
Calcula: total ventas, promedio por orden, orden más grande, orden más pequeña.

### 9. **Tendencia Mensual** (groupBy por mes)
Agrupa ventas por mes para ver tendencias.

### 10. **Generar Reporte** (pipeline completo)
Combina todo en un objeto de reporte completo.

---

## 📁 Estructura de Archivos

```
3-proyecto/dashboard-datos/
├── README.md          # Este archivo
├── index.html         # Interfaz del dashboard
├── styles.css         # Estilos
├── starter/
│   └── script.js      # Tu código (con TODOs)
└── solution/
    └── script.js      # Solución de referencia
```

---

## 🚀 Cómo Empezar

1. **Abre** `index.html` en tu navegador
2. **Edita** `starter/script.js`
3. **Implementa** cada función siguiendo los TODOs
4. **Verifica** que el dashboard muestre los datos correctos
5. **Compara** con `solution/script.js` si necesitas ayuda

---

## ✅ Criterios de Evaluación

| Criterio | Peso | Descripción |
|----------|------|-------------|
| **Funcionalidad** | 40% | Todas las funciones implementadas correctamente |
| **Métodos Correctos** | 30% | Uso apropiado de flat, flatMap, reduce, sort, etc. |
| **Código Limpio** | 20% | Nombres descriptivos, funciones puras, inmutabilidad |
| **Chaining** | 10% | Uso elegante de encadenamiento de métodos |

---

## 💡 Pistas

1. **flatMap para items**: `orders.flatMap(o => o.items.map(i => ({...i, orderId: o.id})))`
2. **groupBy con reduce**: Acumulador es un objeto `{}`
3. **sort no muta**: Usa `[...arr].sort()` para preservar el original
4. **Fechas**: Compara con `new Date(dateString)`

---

## ⏱️ Tiempo Estimado

2-2.5 horas

---

## 📚 Recursos

- [Ejercicio 01: flat/flatMap](../../2-practicas/ejercicio-01-flat-flatmap/)
- [Ejercicio 02: Array.from/of](../../2-practicas/ejercicio-02-array-from-of/)
- [Ejercicio 03: Chaining](../../2-practicas/ejercicio-03-chaining/)
- [Ejercicio 04: Sort/Transform](../../2-practicas/ejercicio-04-sort-transform/)

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Índice | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Prácticas](../../2-practicas/) | [Week 05](../../) | [Recursos](../../4-recursos/) |
