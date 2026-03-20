# 🖱️ Semana 18: Event Handling Avanzado

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Gestionar eventos con `addEventListener` y `removeEventListener`
- ✅ Diferenciar bubbling y capturing en el flujo de eventos
- ✅ Implementar delegación de eventos para listas dinámicas
- ✅ Crear y despachar eventos personalizados con `CustomEvent`
- ✅ Controlar comportamiento nativo con `preventDefault` y `stopPropagation`
- ✅ Diseñar interacciones robustas y escalables en UI

---

## 📚 Requisitos Previos

Antes de iniciar esta semana, debes dominar:

- Manipulación moderna del DOM (Semana 17)
- APIs REST y manejo de estados de UI (Semana 16)
- async/await y manejo de errores (Semanas 13-14)

---

## 🗂️ Estructura de la Semana

```text
week-18-event_handling_avanzado/
├── README.md
├── RETO-SEMANAL.md
├── rubrica-evaluacion.md
├── 0-assets/
│   ├── README.md
│   ├── 01-event-flow-bubbling-capturing.svg
│   ├── 02-delegation-pattern.svg
│   ├── 03-preventdefault-stoppropagation.svg
│   ├── 04-custom-event-architecture.svg
│   └── 05-listener-lifecycle.svg
├── 1-teoria/
│   ├── 01-add-remove-listeners.md
│   ├── 02-bubbling-capturing.md
│   ├── 03-event-delegation.md
│   └── 04-custom-events-control.md
├── 2-practicas/
│   ├── practica-01-add-remove-listeners/
│   ├── practica-02-bubbling-capturing/
│   ├── practica-03-event-delegation/
│   └── practica-04-custom-events/
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
| 1 | add/remove Event Listeners | [01-add-remove-listeners.md](1-teoria/01-add-remove-listeners.md) | 35 min |
| 2 | Bubbling y Capturing | [02-bubbling-capturing.md](1-teoria/02-bubbling-capturing.md) | 40 min |
| 3 | Event Delegation | [03-event-delegation.md](1-teoria/03-event-delegation.md) | 35 min |
| 4 | CustomEvent y control de flujo | [04-custom-events-control.md](1-teoria/04-custom-events-control.md) | 40 min |

### 2️⃣ Prácticas (3 horas)

| # | Práctica | Carpeta | Duración |
|---|----------|---------|----------|
| 1 | Listeners básicos | [practica-01](2-practicas/practica-01-add-remove-listeners/) | 45 min |
| 2 | Bubbling vs capturing | [practica-02](2-practicas/practica-02-bubbling-capturing/) | 45 min |
| 3 | Delegación de eventos | [practica-03](2-practicas/practica-03-event-delegation/) | 45 min |
| 4 | Eventos personalizados | [practica-04](2-practicas/practica-04-custom-events/) | 45 min |

### 3️⃣ Proyecto (2 horas)

**Sistema de notificaciones interactivas**

Construirás un sistema de notificaciones con delegación de eventos, control de propagación y eventos personalizados.

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

### Proyecto: Sistema de Notificaciones Interactivas

- [ ] Implementa listeners y limpieza de listeners
- [ ] Usa delegación de eventos en listas dinámicas
- [ ] Maneja bubbling/capturing según requerimiento
- [ ] Usa `CustomEvent` para comunicación entre componentes
- [ ] Controla `preventDefault` y `stopPropagation` cuando aplique

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Inicio | Siguiente ➡️ |
|-------------|-----------|--------------|
| [Semana 17: DOM Manipulation Moderna](../week-17-dom_manipulation_moderna/README.md) | [Índice](../../README.md) | [Semana 19: Web Storage APIs](../week-19/README.md) |

---

_Semana 18 de 28 · Etapa 2: Intermedio · Event Handling Avanzado_
