# 💾 Semana 19: Web Storage APIs

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Persistir datos en `localStorage` y `sessionStorage`
- ✅ Serializar y deserializar datos con `JSON.stringify` y `JSON.parse`
- ✅ Implementar operaciones CRUD básicas con IndexedDB
- ✅ Manejar errores de almacenamiento y límites de cuota
- ✅ Diseñar estrategias de respaldo y degradación progresiva
- ✅ Construir interfaces con persistencia local confiable

---

## 📚 Requisitos Previos

Antes de iniciar esta semana, debes dominar:

- Event handling y delegación de eventos (Semana 18)
- DOM manipulation moderna (Semana 17)
- Manejo de errores moderno (Semana 11)

---

## 🗂️ Estructura de la Semana

```text
week-19-web_storage_apis/
├── README.md
├── RETO-SEMANAL.md
├── rubrica-evaluacion.md
├── 0-assets/
│   ├── README.md
│   ├── 01-storage-comparison.svg
│   ├── 02-json-serialization-flow.svg
│   ├── 03-indexeddb-lifecycle.svg
│   ├── 04-quota-error-handling.svg
│   └── 05-persistence-architecture.svg
├── 1-teoria/
│   ├── 01-local-session-storage.md
│   ├── 02-json-serialization.md
│   ├── 03-indexeddb-basico.md
│   └── 04-cuotas-limites-estrategias.md
├── 2-practicas/
│   ├── practica-01-local-session-storage/
│   ├── practica-02-json-serialization/
│   ├── practica-03-indexeddb-basico/
│   └── practica-04-storage-quota-handling/
├── 3-proyecto/
│   ├── README.md
│   ├── index.html
│   ├── styles.css
│   ├── starter/
│   │   └── script.js
│   └── solution/          # Oculta por .gitignore
├── 4-recursos/
│   ├── README.md
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/
    └── README.md
```

---

## 📝 Contenidos

### 1️⃣ Teoría (2.5 horas)

| # | Tema | Archivo | Duración |
|---|------|---------|----------|
| 1 | localStorage y sessionStorage | [01-local-session-storage.md](1-teoria/01-local-session-storage.md) | 35 min |
| 2 | Serialización JSON | [02-json-serialization.md](1-teoria/02-json-serialization.md) | 35 min |
| 3 | IndexedDB básico | [03-indexeddb-basico.md](1-teoria/03-indexeddb-basico.md) | 40 min |
| 4 | Cuotas y límites de almacenamiento | [04-cuotas-limites-estrategias.md](1-teoria/04-cuotas-limites-estrategias.md) | 40 min |

### 2️⃣ Prácticas (3 horas)

| # | Práctica | Carpeta | Duración |
|---|----------|---------|----------|
| 1 | Persistencia básica | [practica-01](2-practicas/practica-01-local-session-storage/) | 45 min |
| 2 | JSON robusto | [practica-02](2-practicas/practica-02-json-serialization/) | 45 min |
| 3 | IndexedDB inicial | [practica-03](2-practicas/practica-03-indexeddb-basico/) | 45 min |
| 4 | Manejo de cuota | [practica-04](2-practicas/practica-04-storage-quota-handling/) | 45 min |

### 3️⃣ Proyecto (2 horas)

**Aplicación con persistencia de datos local**

Construirás una aplicación de gestión local con persistencia en navegador, respaldos y recuperación ante errores de almacenamiento.

📁 [Ver instrucciones del proyecto](3-proyecto/README.md)

---

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad | Tiempo | Porcentaje |
|-----------|--------|------------|
| Teoría | 2.5h | 31% |
| Prácticas | 3h | 38% |
| Proyecto | 2h | 25% |
| Recursos | 0.5h | 6% |

---

## 📌 Entregables

> **🎯 ÚNICO ENTREGABLE**: El proyecto semanal es el único entregable obligatorio.

### Proyecto: Aplicación con Persistencia de Datos Local

- [ ] Guarda y recupera datos con `localStorage`
- [ ] Usa serialización JSON correctamente
- [ ] Implementa una capa básica con IndexedDB
- [ ] Gestiona errores de almacenamiento y fallback
- [ ] Adapta funcionalidad al dominio asignado

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Inicio | Siguiente ➡️ |
|-------------|-----------|--------------|
| [Semana 18: Event Handling Avanzado](../week-18-event_handling_avanzado/README.md) | [Índice](../../README.md) | [Semana 20: Formularios y Validación](../week-20-formularios_validacion/README.md) |

---

_Semana 19 de 28 · Etapa 2: Intermedio · Web Storage APIs_
