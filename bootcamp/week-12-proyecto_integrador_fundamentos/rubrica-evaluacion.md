# 📋 Rúbrica de Evaluación - Semana 12

## Proyecto Integrador: E-commerce App

---

## 🎯 Distribución de Evidencias

| Tipo de Evidencia | Peso     | Puntaje Mínimo |
| ----------------- | -------- | -------------- |
| 📦 Producto       | 100%     | 70/100 (70%)   |
| **TOTAL**         | **100%** | **70/100**     |

> **Nota Importante**: Este es un proyecto integrador. Los ejercicios prácticos son materiales de aprendizaje. **No se entregan de forma separada**.

---

## 📊 Distribución de Puntos del Proyecto

| Criterio | Puntos |
|----------|--------|
| Uso de ES2023 | 25 |
| Arquitectura y Módulos | 25 |
| Funcionalidad | 30 |
| Clean Code | 20 |
| **Total** | **100** |

---

## 1️⃣ Uso de ES2023 (25 puntos)

### Excelente (23-25 pts)
- Uso consistente de `const`/`let` (nunca `var`)
- Arrow functions aplicadas correctamente
- Destructuring utilizado donde es apropiado
- Spread/rest operators bien implementados
- Template literals para strings dinámicos
- Optional chaining y nullish coalescing

### Bueno (18-22 pts)
- Mayoría de sintaxis ES2023 correcta
- Algunos casos donde se podría mejorar
- Uso básico de destructuring
- Arrow functions presentes

### Suficiente (13-17 pts)
- Mezcla de ES2023 con patrones antiguos
- Uso inconsistente de const/let
- Poco destructuring
- Arrow functions limitadas

### Insuficiente (0-12 pts)
- Predomina sintaxis pre-ES2023
- Uso de `var`
- No usa características modernas

---

## 2️⃣ Arquitectura y Módulos (25 puntos)

### Excelente (23-25 pts)
- Estructura de carpetas clara y lógica
- Módulos ES2023 bien organizados (import/export)
- Separación de responsabilidades (models, services, UI)
- Clases bien diseñadas con encapsulación
- Uso apropiado de campos privados (#)
- Herencia aplicada cuando es necesario

### Bueno (18-22 pts)
- Estructura modular presente
- Separación básica de responsabilidades
- Clases implementadas correctamente
- Algunos módulos podrían mejorarse

### Suficiente (13-17 pts)
- Módulos básicos pero funcionales
- Clases simples sin encapsulación fuerte
- Mezcla de responsabilidades
- Organización mejorable

### Insuficiente (0-12 pts)
- Todo en un solo archivo
- No usa módulos ES2023
- Sin estructura clara
- Sin clases o mal implementadas

---

## 3️⃣ Funcionalidad (30 puntos)

### Catálogo de Productos (10 pts)

| Característica | Puntos |
|----------------|--------|
| Lista productos correctamente | 3 |
| Filtros funcionan | 3 |
| Búsqueda operativa | 2 |
| Ordenamiento | 2 |

### Carrito de Compras (10 pts)

| Característica | Puntos |
|----------------|--------|
| Agregar productos | 3 |
| Modificar cantidades | 2 |
| Eliminar productos | 2 |
| Calcular totales | 3 |

### Sistema de Usuarios (5 pts)

| Característica | Puntos |
|----------------|--------|
| Registro/Login simulado | 2 |
| Validación de datos | 2 |
| Estado de sesión | 1 |

### Persistencia y Errores (5 pts)

| Característica | Puntos |
|----------------|--------|
| localStorage funciona | 2 |
| Manejo de errores | 2 |
| Recuperación de fallos | 1 |

---

## 4️⃣ Clean Code (20 puntos)

### Excelente (18-20 pts)
- Nombres descriptivos y consistentes (camelCase)
- Funciones pequeñas con una responsabilidad
- Código bien comentado donde es necesario
- Sin código duplicado (DRY)
- Sin código muerto o comentado
- Indentación y formato consistente

### Bueno (14-17 pts)
- Buenos nombres en general
- Funciones razonablemente pequeñas
- Algunos comentarios útiles
- Poca duplicación

### Suficiente (10-13 pts)
- Nombres aceptables
- Funciones algo largas
- Comentarios escasos
- Algo de duplicación

### Insuficiente (0-9 pts)
- Nombres poco descriptivos
- Funciones muy largas
- Sin comentarios
- Mucha duplicación

---

## 🎯 Checklist de Evaluación

### ES2023 Features
- [ ] const/let (no var)
- [ ] Arrow functions
- [ ] Template literals
- [ ] Destructuring
- [ ] Spread/Rest operators
- [ ] Default parameters
- [ ] Optional chaining (?.)
- [ ] Nullish coalescing (??)
- [ ] Classes con constructor
- [ ] Getters/Setters
- [ ] Private fields (#)
- [ ] Static methods
- [ ] Herencia (extends)
- [ ] Módulos (import/export)

### Arquitectura
- [ ] Carpeta models/
- [ ] Carpeta services/
- [ ] Carpeta ui/ o components/
- [ ] Archivo main.js como entry point
- [ ] Separación clara de responsabilidades

### Funcionalidad
- [ ] Ver lista de productos
- [ ] Filtrar por categoría
- [ ] Buscar por nombre
- [ ] Ordenar productos
- [ ] Agregar al carrito
- [ ] Ver carrito
- [ ] Modificar cantidades
- [ ] Eliminar del carrito
- [ ] Ver total
- [ ] Login/Registro básico
- [ ] Datos persisten en localStorage

### Clean Code
- [ ] Nombres en inglés y descriptivos
- [ ] camelCase para variables/funciones
- [ ] PascalCase para clases
- [ ] Funciones <= 20 líneas
- [ ] Sin console.log de debug
- [ ] Código formateado

---

## 📈 Escala de Calificación

| Puntuación | Calificación | Descripción |
|------------|--------------|-------------|
| 90-100 | Excelente | Dominio completo de ES2023 |
| 80-89 | Muy Bueno | Sólido conocimiento |
| 70-79 | Bueno | Cumple requisitos |
| 60-69 | Suficiente | Necesita mejorar |
| < 60 | Insuficiente | No aprueba |

---

## 🌟 Bonus Points (hasta +10)

| Característica Extra | Bonus |
|---------------------|-------|
| Sistema de favoritos | +2 |
| Historial de compras | +2 |
| Comparador de productos | +2 |
| Dark/Light mode | +2 |
| Animaciones CSS | +1 |
| Tests manuales documentados | +1 |

---

## 📝 Notas del Evaluador

```
Estudiante: _______________________
Fecha: _______________________

Puntuación:
- ES2023: ___/25
- Arquitectura: ___/25
- Funcionalidad: ___/30
- Clean Code: ___/20
- Bonus: ___/10

TOTAL: ___/100

Comentarios:
_________________________________
_________________________________
_________________________________
```

---

## 🔗 Navegación

| ⬅️ Teoría | 🏠 Semana |
|:----------|:---------:|
| [1-teoria](./1-teoria/) | [README](./README.md) |
