# 🔌 Semana 16: APIs REST y CRUD

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Diferenciar operaciones CRUD y mapearlas a métodos HTTP
- ✅ Implementar flujos completos con GET, POST, PUT, PATCH y DELETE
- ✅ Diseñar consumo de endpoints RESTful con parámetros y recursos
- ✅ Enviar headers para autenticación básica con tokens
- ✅ Gestionar estados de carga, éxito y error en interfaces
- ✅ Aplicar buenas prácticas de organización en un cliente API

---

## 📚 Requisitos Previos

Antes de comenzar, asegúrate de dominar:

- Fetch API (Semana 15)
- async/await y manejo de errores (Semana 14)
- Promises y ejecución paralela (Semana 13)
- Manipulación de objetos y arrays modernos (Semanas 2-5)

---

## 🗂️ Estructura de la Semana

```text
week-16/
├── README.md                              # Este archivo
├── RETO-SEMANAL.md                        # Desafío opcional avanzado
├── rubrica-evaluacion.md                  # Criterios de evaluación
├── 0-assets/                              # Diagramas y recursos visuales
│   ├── README.md
│   ├── 01-rest-crud-map.svg
│   ├── 02-http-methods-flow.svg
│   └── 03-loading-states.svg
├── 1-teoria/                              # Material teórico
│   ├── 01-rest-foundations.md
│   ├── 02-http-methods-crud.md
│   ├── 03-auth-headers-tokens.md
│   └── 04-loading-and-error-states.md
├── 2-practicas/                           # Ejercicios guiados
│   ├── practica-01-get-read/
│   ├── practica-02-post-create/
│   ├── practica-03-put-patch-update/
│   └── practica-04-delete-auth-state/
├── 3-proyecto/                            # Proyecto integrador
│   ├── README.md
│   ├── index.html
│   ├── styles.css
│   └── starter/
│       └── script.js
├── 4-recursos/                            # Material adicional
│   ├── README.md
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                            # Términos clave
    └── README.md
```

---

## 📝 Contenidos

### 1️⃣ Teoría (2.5 horas)

| # | Tema | Archivo | Duración |
|---|------|---------|----------|
| 1 | Fundamentos REST | [01-rest-foundations.md](1-teoria/01-rest-foundations.md) | 35 min |
| 2 | Métodos HTTP y CRUD | [02-http-methods-crud.md](1-teoria/02-http-methods-crud.md) | 45 min |
| 3 | Headers y Tokens | [03-auth-headers-tokens.md](1-teoria/03-auth-headers-tokens.md) | 35 min |
| 4 | Estados de Carga y Error | [04-loading-and-error-states.md](1-teoria/04-loading-and-error-states.md) | 35 min |

### 2️⃣ Prácticas (3 horas)

| # | Práctica | Carpeta | Duración |
|---|----------|---------|----------|
| 1 | Lectura de recursos (GET) | [practica-01](2-practicas/practica-01-get-read/) | 45 min |
| 2 | Creación de recursos (POST) | [practica-02](2-practicas/practica-02-post-create/) | 45 min |
| 3 | Actualización (PUT/PATCH) | [practica-03](2-practicas/practica-03-put-patch-update/) | 45 min |
| 4 | Eliminación + auth + estados | [practica-04](2-practicas/practica-04-delete-auth-state/) | 45 min |

### 3️⃣ Proyecto (2 horas)

**Panel CRUD conectado a API REST**

Implementarás una aplicación CRUD completa con retroalimentación de estados y capa de cliente API reusable.

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

### Proyecto: Panel CRUD REST

- [ ] Implementa GET, POST, PUT/PATCH y DELETE
- [ ] Usa headers apropiados (Accept, Content-Type, Authorization)
- [ ] Muestra estados de carga, éxito y error
- [ ] Organiza código en funciones reutilizables
- [ ] Adapta la solución a tu dominio asignado

---

## 💡 Conceptos Clave

```javascript
const apiRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.status === 204 ? null : response.json();
};
```

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Inicio | Siguiente ➡️ |
|-------------|-----------|--------------|
| [Semana 15: Fetch API](../week-15/README.md) | [Índice](../../README.md) | [Semana 17: DOM Manipulation Moderna](../week-17/README.md) |

---

_Semana 16 de 28 · Etapa 2: Intermedio · APIs REST y CRUD_
