# 📊 Rúbrica de Evaluación - Semana 15: Fetch API

## 📋 Información General

| Aspecto | Detalle |
|---------|---------|
| **Semana** | 15 |
| **Tema** | Fetch API |
| **Entregable** | Consumidor de API REST Pública |
| **Fecha límite** | Según calendario del instructor |

---

## 🎯 Criterios de Evaluación

### 1. Conocimiento (30%) 🧠

Evaluación teórica sobre conceptos de Fetch API.

| Criterio | Excelente (100%) | Bueno (80%) | Suficiente (70%) | Insuficiente (<70%) |
|----------|------------------|-------------|------------------|---------------------|
| **Comprende Fetch API** | Explica correctamente cómo funciona fetch, su sintaxis y diferencias con XMLHttpRequest | Explica fetch con algunos detalles faltantes | Explica conceptos básicos de fetch | No comprende el funcionamiento de fetch |
| **Request y Response** | Domina los objetos Request/Response, sus propiedades y métodos | Comprende la mayoría de propiedades | Conoce propiedades básicas | Confunde Request y Response |
| **Headers y Config** | Configura headers correctamente, entiende Content-Type y Authorization | Configura headers con pequeños errores | Configura headers básicos | No sabe configurar headers |
| **Manejo de errores** | Distingue errores de red vs HTTP, implementa estrategias robustas | Maneja errores correctamente con detalles menores | Maneja errores básicos | No diferencia tipos de errores |

---

### 2. Desempeño (40%) 💪

Evaluación práctica durante ejercicios en clase.

| Criterio | Excelente (100%) | Bueno (80%) | Suficiente (70%) | Insuficiente (<70%) |
|----------|------------------|-------------|------------------|---------------------|
| **Peticiones GET** | Realiza peticiones GET correctamente con async/await | Realiza GET con pequeños errores | Realiza GET básico | No logra hacer peticiones GET |
| **Peticiones POST** | Envía datos JSON correctamente con Content-Type apropiado | Envía POST con detalles menores faltantes | Envía POST básico sin headers | No logra enviar POST |
| **Parseo de respuestas** | Usa .json(), .text(), .blob() según el tipo de respuesta | Parsea JSON correctamente, otros tipos con ayuda | Solo parsea JSON básico | No parsea respuestas correctamente |
| **Verificación HTTP** | Verifica response.ok, status, statusText correctamente | Verifica respuestas con errores menores | Verificación básica | No verifica respuestas HTTP |
| **Manejo de errores** | Implementa try/catch con mensajes descriptivos | Implementa try/catch básico | Captura errores sin procesarlos | No maneja errores |

---

### 3. Producto (30%) 📦

Evaluación del proyecto entregable.

| Criterio | Excelente (100%) | Bueno (80%) | Suficiente (70%) | Insuficiente (<70%) |
|----------|------------------|-------------|------------------|---------------------|
| **Consumo de API** | Consume API pública correctamente, maneja múltiples endpoints | Consume API con un endpoint funcional | Consume API parcialmente | No logra consumir API |
| **Estados de carga** | Implementa loading, success, error con UI clara | Implementa estados con feedback básico | Muestra loading básico | Sin estados de carga |
| **Manejo de errores** | Errores de red y HTTP diferenciados con retry | Maneja errores con mensajes al usuario | Maneja errores básicos | Sin manejo de errores |
| **Interfaz de usuario** | UI limpia, responsiva, con feedback visual | UI funcional con diseño aceptable | UI básica pero funcional | UI no funcional |
| **Adaptación al dominio** | Implementación creativa y coherente con el dominio | Adaptación correcta al dominio | Adaptación parcial | Sin adaptar al dominio |
| **Código limpio** | Código modular, comentado, reutilizable | Código organizado con comentarios | Código funcional | Código desorganizado |

---

## 📝 Rúbrica del Proyecto

### Requisitos Funcionales (60%)

| Requisito | Puntos | Descripción |
|-----------|--------|-------------|
| RF1: Peticiones GET | 15 | Obtener datos de API y mostrarlos |
| RF2: Estados de carga | 15 | Loading, success, error visibles |
| RF3: Manejo de errores | 15 | try/catch con feedback al usuario |
| RF4: UI dinámica | 15 | Datos renderizados dinámicamente |

### Requisitos Técnicos (25%)

| Requisito | Puntos | Descripción |
|-----------|--------|-------------|
| RT1: Fetch con async/await | 10 | Uso correcto de async/await |
| RT2: Verificación HTTP | 5 | Verificar response.ok y status |
| RT3: Headers apropiados | 5 | Accept header configurado |
| RT4: Código modular | 5 | Funciones separadas y reutilizables |

### Calidad de Código (15%)

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Nomenclatura en inglés | 5 | Variables y funciones en inglés |
| Comentarios en español | 5 | Documentación clara y educativa |
| Código limpio | 5 | Sin código duplicado, bien formateado |

---

## 🎓 Escala de Calificación

| Rango | Calificación | Descripción |
|-------|--------------|-------------|
| 90-100% | Excelente | Dominio completo del tema |
| 80-89% | Bueno | Comprensión sólida con detalles menores |
| 70-79% | Suficiente | Cumple requisitos mínimos |
| <70% | Insuficiente | No cumple requisitos mínimos |

---

## ✅ Checklist de Entrega

### Antes de entregar, verifica:

- [ ] El proyecto consume al menos una API pública
- [ ] Se muestran estados de carga (loading)
- [ ] Los errores se manejan con mensajes al usuario
- [ ] La UI muestra los datos de forma clara
- [ ] El código está comentado en español
- [ ] Las variables/funciones están en inglés
- [ ] El proyecto está adaptado a tu dominio asignado
- [ ] Incluye capturas de pantalla en el README
- [ ] El código funciona sin errores en consola

---

## 🔗 Navegación

[⬅️ Volver a Semana 15](README.md)
