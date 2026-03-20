# 📊 Rúbrica de Evaluación - Week 10

## Proxies y Reflect

---

## 🎯 Distribución de Evidencias

| Tipo de Evidencia | Peso     | Puntaje Mínimo |
| ----------------- | -------- | -------------- |
| 📦 Producto       | 100%     | 70/100 (70%)   |
| **TOTAL**         | **100%** | **70/100**     |

> **Nota**: Ejercicios prácticos no se entregan de forma separada.

| Competencia | Descripción |
|-------------|-------------|
| **C1** | Crear y configurar objetos Proxy |
| **C2** | Implementar traps correctamente |
| **C3** | Usar Reflect API apropiadamente |
| **C4** | Construir sistemas reactivos |
| **C5** | Aplicar patrones de observador |

---

## 📝 Evidencias de Aprendizaje

### 1. Conocimiento (30%) 🧠

#### Quiz Teórico

| Criterio | Excelente (10) | Bueno (8) | Suficiente (6) | Insuficiente (0-5) |
|----------|----------------|-----------|----------------|-------------------|
| Proxy basics | Explica target, handler, receiver | Explica target y handler | Concepto básico | No comprende |
| Traps | Conoce 5+ traps y cuándo usar cada uno | Conoce 3-4 traps | Conoce 1-2 traps | No conoce traps |
| Reflect | Explica todos los métodos Reflect | Conoce métodos principales | Conoce algunos | No conoce Reflect |

**Puntaje Conocimiento: ___ / 30**

---

### 2. Desempeño (40%) 💪

#### Ejercicio 01: Proxy Básico

| Criterio | Excelente (10) | Bueno (8) | Suficiente (6) | Insuficiente (0-5) |
|----------|----------------|-----------|----------------|-------------------|
| Creación | Proxy creado correctamente | Funciona con pequeños errores | Proxy básico | No funciona |
| Get trap | Intercepta y retorna correctamente | Intercepta con limitaciones | Intercepta parcialmente | No intercepta |

**Puntaje Ejercicio 01: ___ / 20**

#### Ejercicio 02: Traps Avanzados

| Criterio | Excelente (10) | Bueno (8) | Suficiente (6) | Insuficiente (0-5) |
|----------|----------------|-----------|----------------|-------------------|
| Set trap | Validación completa antes de set | Validación básica | Set sin validación | No implementado |
| Has/Delete | Ambos traps funcionan | Uno funciona bien | Implementación parcial | No implementados |

**Puntaje Ejercicio 02: ___ / 20**

#### Ejercicio 03: Reflect API

| Criterio | Excelente (10) | Bueno (8) | Suficiente (6) | Insuficiente (0-5) |
|----------|----------------|-----------|----------------|-------------------|
| Uso de Reflect | Usa Reflect en todos los traps | Usa Reflect en la mayoría | Uso parcial | No usa Reflect |
| Correctitud | Maneja receiver correctamente | Funciona sin receiver | Errores menores | No funciona |

**Puntaje Ejercicio 03: ___ / 20**

#### Ejercicio 04: Validación Reactiva

| Criterio | Excelente (10) | Bueno (8) | Suficiente (6) | Insuficiente (0-5) |
|----------|----------------|-----------|----------------|-------------------|
| Reactividad | Cambios detectados y notificados | Detecta la mayoría | Detección parcial | No detecta |
| Validación | Reglas aplicadas correctamente | Reglas básicas | Validación mínima | Sin validación |

**Puntaje Ejercicio 04: ___ / 20**

**Puntaje Total Desempeño: ___ / 80 → Normalizado: ___ / 40**

---

### 3. Producto (30%) 📦

#### Proyecto: Sistema de Validación Reactivo

| Criterio | Excelente (10) | Bueno (8) | Suficiente (6) | Insuficiente (0-5) |
|----------|----------------|-----------|----------------|-------------------|
| **Funcionalidad** | Todas las features funcionan | 80% funciona | 60% funciona | < 60% funciona |
| **Proxy/Reflect** | Uso correcto y eficiente | Uso correcto | Uso básico | Uso incorrecto |
| **Observadores** | Sistema de notificación completo | Notificación básica | Notificación parcial | Sin notificación |
| **Validación** | Múltiples tipos de validación | Validación estándar | Validación básica | Sin validación |
| **Código** | Limpio, documentado, modular | Bien estructurado | Funcional | Desorganizado |
| **UI** | Interfaz completa e intuitiva | UI funcional | UI básica | Sin UI |

**Puntaje Producto: ___ / 60 → Normalizado: ___ / 30**

---

## 📊 Resumen de Evaluación

| Tipo de Evidencia | Puntaje Obtenido | Puntaje Máximo | Porcentaje |
|-------------------|------------------|----------------|------------|
| Conocimiento 🧠 | | 30 | 30% |
| Desempeño 💪 | | 40 | 40% |
| Producto 📦 | | 30 | 30% |
| **TOTAL** | | **100** | **100%** |

---

## 🏆 Escala de Calificación

| Rango | Calificación | Descripción |
|-------|--------------|-------------|
| 90-100 | ⭐ Excelente | Dominio completo de Proxy y Reflect |
| 80-89 | ✅ Muy Bueno | Buen manejo con detalles menores |
| 70-79 | 👍 Bueno | Comprensión sólida, práctica necesaria |
| 60-69 | 📝 Suficiente | Conceptos básicos adquiridos |
| 0-59 | ❌ Insuficiente | Requiere refuerzo significativo |

---

## ✅ Checklist de Competencias

### Proxy

- [ ] Crear Proxy con target y handler
- [ ] Entender el concepto de intercepción
- [ ] Usar Proxy con objetos y arrays
- [ ] Crear Proxies anidados
- [ ] Manejar Proxy revocable

### Traps

- [ ] Implementar get trap
- [ ] Implementar set trap con validación
- [ ] Usar has trap (operador `in`)
- [ ] Usar deleteProperty trap
- [ ] Implementar apply trap (funciones)
- [ ] Usar construct trap (new)
- [ ] Conocer ownKeys y getOwnPropertyDescriptor

### Reflect

- [ ] Usar Reflect.get() y Reflect.set()
- [ ] Usar Reflect.has() y Reflect.deleteProperty()
- [ ] Entender el parámetro receiver
- [ ] Usar Reflect.apply() y Reflect.construct()
- [ ] Comparar Reflect vs operaciones directas

### Patrones

- [ ] Implementar validación reactiva
- [ ] Crear observadores de cambios
- [ ] Implementar logging automático
- [ ] Crear propiedades computadas
- [ ] Implementar caché con Proxy

---

## 📝 Notas del Evaluador

```
Fortalezas:


Áreas de mejora:


Recomendaciones:


```

---

## 🔄 Retroalimentación

| Aspecto | Comentario |
|---------|------------|
| Comprensión de Proxy | |
| Uso de traps | |
| Manejo de Reflect | |
| Patrones reactivos | |
| Calidad del código | |

---

_Week 10 | Bootcamp JavaScript ES2023_
