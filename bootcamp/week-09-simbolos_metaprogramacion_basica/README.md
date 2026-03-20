# 📅 Week 09: Símbolos y Metaprogramación Básica

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Comprender qué son los Symbols y por qué existen
- ✅ Crear símbolos únicos y símbolos compartidos (Symbol.for)
- ✅ Utilizar Well-known Symbols para personalizar comportamiento
- ✅ Implementar Symbol.iterator y Symbol.toStringTag
- ✅ Usar símbolos como claves "privadas" en objetos
- ✅ Acceder a propiedades simbólicas con Object.getOwnPropertySymbols()

---

## 📋 Contenido de la Semana

### 📚 Teoría (2 horas)

| # | Tema | Archivo |
|---|------|---------|
| 01 | Introducción a Symbols | [01-symbols-intro.md](1-teoria/01-symbols-intro.md) |
| 02 | Symbol.for y Registro Global | [02-symbol-for-registry.md](1-teoria/02-symbol-for-registry.md) |
| 03 | Well-known Symbols | [03-well-known-symbols.md](1-teoria/03-well-known-symbols.md) |
| 04 | Símbolos como Claves Privadas | [04-symbols-as-keys.md](1-teoria/04-symbols-as-keys.md) |
| 05 | Object.getOwnPropertySymbols | [05-get-own-property-symbols.md](1-teoria/05-get-own-property-symbols.md) |

### 💻 Prácticas (3 horas)

| # | Ejercicio | Carpeta |
|---|-----------|---------|
| 01 | Creación y Uso de Symbols | [ejercicio-01-symbols-basics/](2-practicas/ejercicio-01-symbols-basics/) |
| 02 | Symbol.for y Registro Global | [ejercicio-02-symbol-registry/](2-practicas/ejercicio-02-symbol-registry/) |
| 03 | Well-known Symbols | [ejercicio-03-well-known/](2-practicas/ejercicio-03-well-known/) |
| 04 | Propiedades Privadas con Symbols | [ejercicio-04-private-props/](2-practicas/ejercicio-04-private-props/) |

### 🚀 Proyecto (2.5 horas)

**Objeto Seguro con Propiedades Privadas**

Crear un sistema de objetos que use símbolos para implementar propiedades verdaderamente privadas, con control de acceso y metaprogramación.

📁 [Ver proyecto](3-proyecto/objeto-seguro/)

### 📖 Recursos (0.5 horas)

- [E-books gratuitos](4-recursos/ebooks-free/)
- [Videografía recomendada](4-recursos/videografia/)
- [Webgrafía y documentación](4-recursos/webgrafia/)

### 📝 Glosario

[Términos clave de la semana](5-glosario/)

---

## ⏱️ Distribución del Tiempo

| Actividad | Duración | Porcentaje |
|-----------|----------|------------|
| 📚 Teoría | 2 horas | 25% |
| 💻 Prácticas | 3 horas | 37.5% |
| 🚀 Proyecto | 2.5 horas | 31.25% |
| 📖 Recursos | 0.5 horas | 6.25% |
| **Total** | **8 horas** | **100%** |

---

## 📌 Requisitos Previos

Antes de comenzar esta semana, asegúrate de:

- ✅ Dominar iteradores y generadores (Week 08)
- ✅ Comprender el protocolo de iteración
- ✅ Conocer for...of y Symbol.iterator
- ✅ Entender objetos y propiedades en JavaScript

---

## 🎓 Criterios de Evaluación

| Criterio | Peso |
|----------|------|
| 🧠 Conocimiento teórico | 30% |
| 💪 Ejercicios prácticos | 40% |
| 📦 Proyecto final | 30% |

Para más detalles, consulta la [rúbrica de evaluación](rubrica-evaluacion.md).

---

## 📚 Resumen de Conceptos Clave

### ¿Qué es un Symbol?

```javascript
// Crear un símbolo único
const id = Symbol('descripción');

// Cada símbolo es único
Symbol('foo') === Symbol('foo'); // false

// Símbolos compartidos (registro global)
const shared = Symbol.for('app.key');
Symbol.for('app.key') === shared; // true
```

### Well-known Symbols

```javascript
// Symbol.toStringTag - personalizar [object Type]
const obj = {
  [Symbol.toStringTag]: 'MyObject'
};
Object.prototype.toString.call(obj); // '[object MyObject]'

// Symbol.iterator - hacer objeto iterable
const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
};
```

### Símbolos como Claves "Privadas"

```javascript
const _secret = Symbol('secret');

const user = {
  name: 'Alice',
  [_secret]: 'hidden data'
};

// No visible en for...in ni Object.keys()
Object.keys(user); // ['name']

// Accesible con el símbolo
user[_secret]; // 'hidden data'

// Accesible con Object.getOwnPropertySymbols()
Object.getOwnPropertySymbols(user); // [Symbol(secret)]
```

---

## 🔗 Navegación

| ← Anterior | Inicio | Siguiente → |
|------------|--------|-------------|
| [Week 08: Iteradores y Generadores](../week-08-iteradores_generadores/README.md) | [Bootcamp](../README.md) | [Week 10: Proxy y Reflect](../week-10-proxies_reflect/README.md) |

---

## 💡 Tips para esta Semana

1. **No son privados "de verdad"**: Los símbolos no proporcionan privacidad real, solo ocultan propiedades de las enumeraciones comunes
2. **Symbol() vs Symbol.for()**: Usa Symbol() para únicos locales, Symbol.for() para compartir entre módulos
3. **Well-known Symbols**: Son la clave de la metaprogramación en JavaScript
4. **Usa descripciones**: Siempre pasa una descripción a Symbol() para debugging más fácil

---

_Semana 9 de 28 | Bootcamp JavaScript ES2023_
