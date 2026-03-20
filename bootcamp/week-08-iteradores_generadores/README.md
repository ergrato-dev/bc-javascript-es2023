# 📅 Week 08: Iteradores y Generadores

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Comprender el protocolo de iteración en JavaScript
- ✅ Diferenciar y usar correctamente `for...of` vs `for...in`
- ✅ Crear y utilizar funciones generadoras con `function*`
- ✅ Aplicar `yield` y delegación de generadores
- ✅ Implementar iterables personalizados para tus propias estructuras

---

## 📚 Requisitos Previos

Antes de comenzar esta semana, debes dominar:

- Sets y Maps (Week 07)
- Spread operator y rest parameters (Week 02)
- Arrow functions y métodos de arrays (Week 01-02)
- Clases ES2023 (Week 03)

---

## 🗂️ Estructura de la Semana

```
week-08-iteradores_generadores/
├── README.md                    # Este archivo
├── rubrica-evaluacion.md        # Criterios de evaluación
├── 0-assets/                    # Diagramas SVG
├── 1-teoria/                    # Material teórico
│   ├── 01-iteration-protocol.md
│   ├── 02-for-of-vs-for-in.md
│   ├── 03-generators-basics.md
│   ├── 04-yield-delegation.md
│   └── 05-custom-iterables.md
├── 2-practicas/                 # Ejercicios guiados
│   ├── ejercicio-01-iterators/
│   ├── ejercicio-02-for-loops/
│   ├── ejercicio-03-generators/
│   └── ejercicio-04-custom-iterable/
├── 3-proyecto/                  # Proyecto integrador
│   └── paginador-generadores/
├── 4-recursos/                  # Material complementario
└── 5-glosario/                  # Términos clave
```

---

## 📝 Contenidos

### 1. Teoría (2.5 horas)

| Archivo | Tema | Duración |
|---------|------|----------|
| [01-iteration-protocol.md](1-teoria/01-iteration-protocol.md) | Protocolo de iteración | 30 min |
| [02-for-of-vs-for-in.md](1-teoria/02-for-of-vs-for-in.md) | for...of vs for...in | 25 min |
| [03-generators-basics.md](1-teoria/03-generators-basics.md) | Generadores básicos | 35 min |
| [04-yield-delegation.md](1-teoria/04-yield-delegation.md) | yield y delegación | 30 min |
| [05-custom-iterables.md](1-teoria/05-custom-iterables.md) | Iterables personalizados | 30 min |

### 2. Prácticas (3 horas)

| Ejercicio | Descripción | Duración |
|-----------|-------------|----------|
| [ejercicio-01](2-practicas/ejercicio-01-iterators/) | Iteradores básicos | 45 min |
| [ejercicio-02](2-practicas/ejercicio-02-for-loops/) | for...of y for...in | 40 min |
| [ejercicio-03](2-practicas/ejercicio-03-generators/) | Generadores y yield | 50 min |
| [ejercicio-04](2-practicas/ejercicio-04-custom-iterable/) | Iterables personalizados | 45 min |

### 3. Proyecto (2 horas)

**[Paginador Personalizado con Generadores](3-proyecto/paginador-generadores/)**

Sistema de paginación que utiliza generadores para manejar grandes conjuntos de datos de forma eficiente y lazy.

### 4. Recursos (30 minutos)

Material complementario para profundizar en los temas.

---

## ⏱️ Distribución del Tiempo

| Actividad | Tiempo | Porcentaje |
|-----------|--------|------------|
| 📖 Teoría | 2.5h | 31% |
| 💻 Prácticas | 3h | 38% |
| 🚀 Proyecto | 2h | 25% |
| 📚 Recursos | 0.5h | 6% |
| **Total** | **8h** | **100%** |

---

## 📌 Entregables

### 📦 Proyecto (100%)

El **único entregable** para esta semana es el proyecto:

- [ ] **Proyecto "Paginador con Generadores" funcional**
- [ ] Implementación correcta de iteradores y generadores
- [ ] Uso de Symbol.iterator
- [ ] Código limpio y documentado

> **Nota**: Los ejercicios prácticos son materiales de aprendizaje. No se entregan de forma separada.

---

## 🔑 Conceptos Clave de la Semana

```javascript
// Protocolo de iteración
const iterable = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        return i < 3
          ? { value: i++, done: false }
          : { done: true };
      }
    };
  }
};

// for...of itera sobre valores
for (const value of [1, 2, 3]) {
  console.log(value); // 1, 2, 3
}

// for...in itera sobre claves
for (const key in { a: 1, b: 2 }) {
  console.log(key); // 'a', 'b'
}

// Generador básico
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Delegación de generadores
function* combined() {
  yield* [1, 2];
  yield* 'ab';
}

// Generador infinito con lazy evaluation
function* infiniteSequence() {
  let n = 0;
  while (true) {
    yield n++;
  }
}
```

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Inicio | Siguiente ➡️ |
|-------------|-----------|---------------|
| [Week 07: Sets y Maps](../week-07-sets_maps/README.md) | [Bootcamp](../README.md) | [Week 09: Símbolos](../week-09-simbolos_metaprogramacion_basica/README.md) |

---

## 💡 Tips de la Semana

> 🎯 **Lazy Evaluation**: Los generadores no ejecutan todo el código de una vez. Cada `yield` pausa la ejecución hasta que se solicita el siguiente valor. Esto es perfecto para manejar grandes datasets.

> ⚠️ **Cuidado**: `for...in` itera sobre propiedades enumerables (incluyendo las heredadas), mientras que `for...of` solo funciona con iterables.

> 🔧 **Práctica**: Los generadores son ideales para paginación, streaming de datos, y secuencias infinitas.

---

*Semana 08 de 28 | Bootcamp JavaScript ES2023*
