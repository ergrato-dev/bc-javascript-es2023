# 📅 Week 10: Proxies y Reflect

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana serás capaz de:

- ✅ Crear objetos Proxy para interceptar operaciones
- ✅ Implementar traps para get, set, has, deleteProperty y más
- ✅ Usar la API Reflect para operaciones reflexivas
- ✅ Construir sistemas de validación reactiva
- ✅ Implementar observadores de cambios en objetos

---

## 📋 Contenido

### 1. Teoría (2.5 horas)

| Archivo | Tema | Duración |
|---------|------|----------|
| [01-proxy-intro.md](1-teoria/01-proxy-intro.md) | Introducción a Proxy | 30 min |
| [02-traps-basicos.md](1-teoria/02-traps-basicos.md) | Traps básicos (get, set, has) | 30 min |
| [03-reflect-api.md](1-teoria/03-reflect-api.md) | API Reflect | 30 min |
| [04-validacion-reactiva.md](1-teoria/04-validacion-reactiva.md) | Validación reactiva | 30 min |
| [05-observadores.md](1-teoria/05-observadores.md) | Observadores de cambios | 30 min |

### 2. Prácticas (3 horas)

| Ejercicio | Tema | Duración |
|-----------|------|----------|
| [ejercicio-01](2-practicas/ejercicio-01-proxy-basico/) | Proxy básico | 45 min |
| [ejercicio-02](2-practicas/ejercicio-02-traps-avanzados/) | Traps avanzados | 45 min |
| [ejercicio-03](2-practicas/ejercicio-03-reflect/) | Reflect API | 45 min |
| [ejercicio-04](2-practicas/ejercicio-04-reactive-validation/) | Validación reactiva | 45 min |

### 3. Proyecto (2 horas)

| Proyecto | Descripción |
|----------|-------------|
| [Sistema de Validación Reactivo](3-proyecto/sistema-validacion/) | Sistema completo con Proxy y Reflect |

### 4. Recursos Adicionales

- [📚 eBooks gratuitos](4-recursos/ebooks-free/)
- [🎬 Videografía](4-recursos/videografia/)
- [🌐 Webgrafía](4-recursos/webgrafia/)

### 5. Glosario

- [📖 Términos clave](5-glosario/)

---

## 🗂️ Estructura de la Semana

```
week-10-proxies_reflect/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/
│   ├── 01-proxy-overview.svg
│   ├── 02-traps-diagram.svg
│   ├── 03-reflect-api.svg
│   ├── 04-reactive-validation.svg
│   └── 05-observer-pattern.svg
├── 1-teoria/
│   ├── 01-proxy-intro.md
│   ├── 02-traps-basicos.md
│   ├── 03-reflect-api.md
│   ├── 04-validacion-reactiva.md
│   └── 05-observadores.md
├── 2-practicas/
│   ├── README.md
│   ├── ejercicio-01-proxy-basico/
│   ├── ejercicio-02-traps-avanzados/
│   ├── ejercicio-03-reflect/
│   └── ejercicio-04-reactive-validation/
├── 3-proyecto/
│   └── sistema-validacion/
├── 4-recursos/
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/
    └── README.md
```

---

## ⏱️ Distribución del Tiempo

| Actividad | Tiempo | Porcentaje |
|-----------|--------|------------|
| Teoría | 2.5 h | 31% |
| Prácticas | 3 h | 38% |
| Proyecto | 2 h | 25% |
| Recursos | 0.5 h | 6% |
| **Total** | **8 h** | **100%** |

---

## 📚 Requisitos Previos

Antes de comenzar esta semana, debes dominar:

- ✅ Objetos y sus métodos (Week 01-02)
- ✅ Clases ES2023 (Week 03)
- ✅ Symbols y metaprogramación básica (Week 09)
- ✅ Funciones y closures

---

## 🎯 Conceptos Clave

### Proxy

Objeto que envuelve otro objeto e intercepta operaciones:

```javascript
const proxy = new Proxy(target, handler);
```

### Traps

Métodos del handler que interceptan operaciones:

```javascript
const handler = {
  get(target, prop, receiver) {
    console.log(`Accediendo a ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`Estableciendo ${prop} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  }
};
```

### Reflect

API que proporciona métodos para operaciones interceptables:

```javascript
Reflect.get(obj, 'prop');
Reflect.set(obj, 'prop', value);
Reflect.has(obj, 'prop');
Reflect.deleteProperty(obj, 'prop');
```

---

## 📌 Entregables

### 📦 Proyecto (100%)

El **único entregable** para esta semana es el proyecto:

- [ ] **Proyecto "Sistema de Validación Reactivo" funcional**
- [ ] Uso correcto de Proxies para validación
- [ ] Implementación de Reflect API
- [ ] Código limpio y documentado

> **Nota**: Los ejercicios prácticos son materiales de aprendizaje. No se entregan de forma separada.

---

## 🔗 Navegación

| ← Anterior | Inicio | Siguiente → |
|------------|--------|-------------|
| [Week 09: Símbolos](../week-09-simbolos_metaprogramacion_basica/) | [Índice](../../README.md) | [Week 11: Errores](../week-11-manejo_errores_moderno/) |

---

## 💡 Tips de Estudio

1. **Practica con la consola**: Prueba cada trap individualmente
2. **Usa Reflect**: Siempre usa Reflect dentro de traps
3. **Debugging**: console.log en cada trap para ver el flujo
4. **Casos de uso**: Piensa en validación, logging, caché

---

## 🌟 Casos de Uso Reales

- **Vue 3**: Sistema de reactividad basado en Proxy
- **MobX**: State management con observables
- **Immer**: Inmutabilidad con Proxy
- **Validación**: Formularios reactivos

---

_Week 10 | Bootcamp JavaScript ES2023_
