# 🎯 Reto Semanal - Week 09

## 📺 Video de la Semana

[![Video Week 09](https://img.shields.io/badge/YouTube-Video_Week_09-red?style=for-the-badge&logo=youtube)](https://youtube.com/@bc-channel-epti)

> **Importante**: Mira el video completo antes de realizar el reto. Contiene el **código de verificación** necesario para completar tu autoevaluación.

---

## 🧩 El Reto

### Contexto

Dominas Symbols, Symbol.for(), well-known symbols, y su uso para propiedades "privadas".

### Tu Misión

Crea un **objeto "observable"** usando well-known symbols:

```javascript
// Implementa una clase que use:
// 1. Symbol() para propiedades privadas
// 2. Symbol.toStringTag para identificación
// 3. Symbol.iterator para ser iterable
// 4. Symbol.toPrimitive para conversiones

class ObservableList {
  #items = [];
  #observers = [];

  // Symbol privado para estado interno
  static #state = Symbol('state');

  constructor(initialItems = []) {
    this.#items = [...initialItems];
    this[ObservableList.#state] = 'ready';
  }

  // Well-known: personaliza [object ???]
  get [Symbol.toStringTag]() {
    return 'ObservableList';
  }

  // Well-known: hace la lista iterable
  *[Symbol.iterator]() {
    // yield items
  }

  // Well-known: conversión a primitivo
  [Symbol.toPrimitive](hint) {
    // 'number' -> length
    // 'string' -> items joined
    // 'default' -> string representation
  }

  // Métodos de observer pattern
  subscribe(callback) { }
  push(item) { } // notifica observers
}

// Uso esperado
const list = new ObservableList([1, 2, 3]);

console.log(Object.prototype.toString.call(list)); // '[object ObservableList]'
console.log(+list); // 3 (length)
console.log(`${list}`); // '1, 2, 3'

for (const item of list) {
  console.log(item); // 1, 2, 3
}
```

---

## ✅ Requisitos de Entrega

### Paso 1: Resuelve el reto
- Usa Symbol() para al menos una propiedad privada
- Implementa Symbol.toStringTag
- Implementa Symbol.iterator
- Implementa Symbol.toPrimitive

### Paso 2: Comenta en YouTube (REQUERIDO)

Deja un comentario en el video de esta semana con el siguiente formato:

```
✅ RETO WEEK-09 COMPLETADO

Usé estos well-known symbols: [lista]

🔮 ¿Cuál well-known symbol te parece más útil y por qué?
[Tu opinión]
```

### Paso 3: Autoevaluación

Completa el [formulario de autoevaluación](https://forms.gle/PLACEHOLDER_WEEK09):

- Código de verificación del video
- **Link a tu comentario en YouTube**
- Link a tu código

---

## 💡 Pregunta de Reflexión

> **¿Cuándo preferirías Symbol() sobre # (private fields) para "privacidad"?**

Incluye tu respuesta en el comentario de YouTube.

---

## 🏆 Criterios de Éxito

| Criterio | Puntos |
|----------|--------|
| Symbol() para propiedad privada | 20 |
| Symbol.toStringTag implementado | 20 |
| Symbol.iterator funcional | 20 |
| Symbol.toPrimitive con 3 hints | 20 |
| Comentario en YouTube completo | 20 |
| **Total** | **100** |

---

## 🔗 Recursos

- [Video de la semana](https://youtube.com/@bc-channel-epti)
- [MDN: Symbol](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [MDN: Well-known symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols)

---

_Reto Week 09 | Bootcamp JavaScript ES2023 | [bc-channel-epti](https://youtube.com/@bc-channel-epti)_
