# 📡 Semana 15: Fetch API

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Realizar peticiones HTTP con Fetch API
- ✅ Comprender los objetos Request y Response
- ✅ Configurar headers y opciones de petición
- ✅ Trabajar con datos JSON de forma eficiente
- ✅ Manejar errores de red y respuestas HTTP correctamente
- ✅ Implementar patrones de carga y feedback al usuario

---

## 📚 Requisitos Previos

Antes de comenzar, asegúrate de dominar:

- Funciones async/await (Semana 14)
- Manejo de errores con try/catch (Semana 14)
- Promesas y su encadenamiento (Semana 13)
- Desestructuración de objetos (Semana 04)

---

## 🗂️ Estructura de la Semana

```
week-15/
├── README.md                    # Este archivo
├── RETO-SEMANAL.md             # Desafío opcional avanzado
├── rubrica-evaluacion.md       # Criterios de evaluación
├── 0-assets/                   # Recursos visuales
│   └── README.md
├── 1-teoria/                   # Material teórico
│   ├── 01-fetch-basics.md
│   ├── 02-request-response.md
│   ├── 03-headers-config.md
│   └── 04-error-handling.md
├── 2-practicas/                # Ejercicios guiados
│   ├── practica-01-primera-peticion/
│   ├── practica-02-metodos-http/
│   ├── practica-03-headers-config/
│   └── practica-04-error-handling/
├── 3-proyecto/                 # Proyecto integrador
│   └── README.md
├── 4-recursos/                 # Material adicional
│   └── README.md
└── 5-glosario/                 # Términos clave
    └── README.md
```

---

## 📝 Contenidos

### 1️⃣ Teoría (2.5 horas)

| # | Tema | Archivo | Duración |
|---|------|---------|----------|
| 1 | Fetch API Básica | [01-fetch-basics.md](1-teoria/01-fetch-basics.md) | 40 min |
| 2 | Request y Response | [02-request-response.md](1-teoria/02-request-response.md) | 35 min |
| 3 | Headers y Configuración | [03-headers-config.md](1-teoria/03-headers-config.md) | 35 min |
| 4 | Manejo de Errores | [04-error-handling.md](1-teoria/04-error-handling.md) | 40 min |

### 2️⃣ Prácticas (3 horas)

| # | Práctica | Carpeta | Duración |
|---|----------|---------|----------|
| 1 | Tu Primera Petición | [practica-01](2-practicas/practica-01-primera-peticion/) | 40 min |
| 2 | Métodos HTTP | [practica-02](2-practicas/practica-02-metodos-http/) | 45 min |
| 3 | Headers y Config | [practica-03](2-practicas/practica-03-headers-config/) | 45 min |
| 4 | Manejo de Errores | [practica-04](2-practicas/practica-04-error-handling/) | 50 min |

### 3️⃣ Proyecto (2 horas)

**Consumidor de API REST Pública**

Construirás una aplicación que consume una API REST pública, mostrando datos de forma dinámica con estados de carga, manejo de errores y paginación.

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

### Proyecto: Consumidor de API REST

- [ ] Consumir al menos una API pública
- [ ] Mostrar datos con UI dinámica
- [ ] Implementar estados de carga
- [ ] Manejar errores de red y HTTP
- [ ] Código documentado y limpio

---

## 💡 Conceptos Clave

```javascript
// Petición GET básica
const response = await fetch('https://api.example.com/data');
const data = await response.json();

// Petición POST con JSON
const response = await fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Usuario' })
});

// Verificar respuesta HTTP
if (!response.ok) {
  throw new Error(`HTTP ${response.status}: ${response.statusText}`);
}

// Headers personalizados
const headers = new Headers({
  'Authorization': 'Bearer token123',
  'Accept': 'application/json'
});
```

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Inicio | Siguiente ➡️ |
|-------------|-----------|--------------|
| [Semana 14: Async/Await](../week-14/README.md) | [Índice](../../README.md) | [Semana 16: APIs REST y CRUD](../week-16/README.md) |

---

## 📚 Recursos Adicionales

- [MDN: Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [MDN: Using Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
- [JavaScript.info: Fetch](https://javascript.info/fetch)
