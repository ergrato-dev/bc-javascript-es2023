# 🎯 Reto Semanal - Week 08

## 📺 Video de la Semana

[![Video Week 08](https://img.shields.io/badge/YouTube-Video_Week_08-red?style=for-the-badge&logo=youtube)](https://youtube.com/@bc-channel-epti)

> **Importante**: Mira el video completo antes de realizar el reto. Contiene el **código de verificación** necesario para completar tu autoevaluación.

---

## 🧩 El Reto

### Contexto

Dominas el protocolo de iteración, generadores (`function*`), `yield`, `yield*`, e iterables personalizados.

### Tu Misión

Crea un **generador de paginación infinita** para una API simulada:

```javascript
// Generador que simula fetch paginado de una API
function* paginatedFetch(baseData, pageSize = 10) {
  // Yield páginas de datos
  // Cuando se acaban, yield { done: true, hasMore: false }
}

// Generador infinito con lazy loading
function* infiniteScroll(fetchGenerator) {
  // Usa yield* para delegar
  // Implementa lógica de "cargar más"
}

// Clase iterable personalizada
class DataStream {
  constructor(data, pageSize) {
    this.data = data;
    this.pageSize = pageSize;
  }

  *[Symbol.iterator]() {
    // Implementa el protocolo iterable
  }

  // Método que retorna generador con transformación
  *map(fn) {
    for (const item of this) {
      yield fn(item);
    }
  }
}

// Uso esperado
const stream = new DataStream(productos, 5);

for (const page of stream) {
  console.log('Página:', page);
  // Procesa 5 productos a la vez
}

// Con transformación lazy
for (const nombre of stream.map(p => p.nombre)) {
  console.log(nombre);
}
```

---

## ✅ Requisitos de Entrega

### Paso 1: Resuelve el reto
- Implementa al menos 2 generadores con `function*`
- Usa `yield*` para delegación
- Crea una clase iterable con `[Symbol.iterator]()`
- Implementa lazy evaluation

### Paso 2: Comenta en YouTube (REQUERIDO)

Deja un comentario en el video de esta semana con el siguiente formato:

```
✅ RETO WEEK-08 COMPLETADO

Mi generador más útil: [describe qué hace]

⚡ ¿Cuál es la ventaja de lazy evaluation con generadores?
[Tu explicación]
```

### Paso 3: Autoevaluación

Completa el [formulario de autoevaluación](https://forms.gle/PLACEHOLDER_WEEK08):

- Código de verificación del video
- **Link a tu comentario en YouTube**
- Link a tu código

---

## 💡 Pregunta de Reflexión

> **¿Cuándo usarías un generador en lugar de un array normal?**

Incluye tu respuesta en el comentario (piensa en: datos grandes, streaming, infinite scroll).

---

## 🏆 Criterios de Éxito

| Criterio | Puntos |
|----------|--------|
| Generador function* funcional | 25 |
| Usa yield* para delegación | 15 |
| Clase iterable [Symbol.iterator] | 25 |
| Lazy evaluation demostrado | 15 |
| Comentario en YouTube completo | 20 |
| **Total** | **100** |

---

## 🔗 Recursos

- [Video de la semana](https://youtube.com/@bc-channel-epti)
- [MDN: Iterators and generators](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_generators)
- [MDN: function*](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function*)

---

_Reto Week 08 | Bootcamp JavaScript ES2023 | [bc-channel-epti](https://youtube.com/@bc-channel-epti)_
