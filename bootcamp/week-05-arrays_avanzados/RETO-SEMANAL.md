# 🎯 Reto Semanal - Week 05

## 📺 Video de la Semana

[![Video Week 05](https://img.shields.io/badge/YouTube-Video_Week_05-red?style=for-the-badge&logo=youtube)](https://youtube.com/@bc-channel-epti)

> **Importante**: Mira el video completo antes de realizar el reto. Contiene el **código de verificación** necesario para completar tu autoevaluación.

---

## 🧩 El Reto

### Contexto

Dominas métodos de array avanzados incluyendo `findLast()`, `findLastIndex()`, `toSorted()`, `toReversed()`, y `with()`.

### Tu Misión

Crea un sistema de historial de transacciones que:

1. Use **findLast()** para encontrar la última transacción de un tipo
2. Use **findLastIndex()** para localizar posiciones
3. Use **toSorted()** para ordenar sin mutar
4. Use **toReversed()** para invertir sin mutar
5. Use **with()** para actualizar sin mutar

```javascript
const transacciones = [
  { id: 1, tipo: 'ingreso', monto: 1000, fecha: '2025-01-01' },
  { id: 2, tipo: 'gasto', monto: 50, fecha: '2025-01-02' },
  { id: 3, tipo: 'ingreso', monto: 500, fecha: '2025-01-03' },
  { id: 4, tipo: 'gasto', monto: 200, fecha: '2025-01-04' },
  { id: 5, tipo: 'ingreso', monto: 300, fecha: '2025-01-05' }
];

// Implementa estas funciones:
const ultimoIngreso = obtenerUltimoIngreso(transacciones);
// { id: 5, tipo: 'ingreso', monto: 300, ... }

const ordenadas = ordenarPorMonto(transacciones); // No muta original
const invertidas = invertirHistorial(transacciones); // No muta original
const actualizadas = actualizarMonto(transacciones, 2, 75); // No muta original
```

---

## ✅ Requisitos de Entrega

### Paso 1: Resuelve el reto
- Usa los 5 métodos ES2023 mencionados
- **NUNCA** mutes el array original
- Demuestra que el original no cambió

### Paso 2: Comenta en YouTube (REQUERIDO)

Deja un comentario en el video de esta semana con el siguiente formato:

```
✅ RETO WEEK-05 COMPLETADO

Usé findLast() para: [tu caso de uso]

🔄 ¿Por qué es importante la inmutabilidad en JavaScript moderno?
[Tu reflexión]
```

### Paso 3: Autoevaluación

Completa el [formulario de autoevaluación](https://forms.gle/PLACEHOLDER_WEEK05):

- Código de verificación del video
- **Link a tu comentario en YouTube**
- Link a tu código

---

## 💡 Pregunta de Reflexión

> **¿En qué caso real preferirías `findLast()` sobre `filter().at(-1)`?**

Incluye tu respuesta en el comentario de YouTube.

---

## 🏆 Criterios de Éxito

| Criterio | Puntos |
|----------|--------|
| Usa findLast()/findLastIndex() | 20 |
| Usa toSorted() sin mutar | 20 |
| Usa toReversed() sin mutar | 15 |
| Usa with() sin mutar | 15 |
| Demuestra inmutabilidad | 10 |
| Comentario en YouTube completo | 20 |
| **Total** | **100** |

---

## 🔗 Recursos

- [Video de la semana](https://youtube.com/@bc-channel-epti)
- [MDN: Array.prototype.findLast()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
- [MDN: Array.prototype.toSorted()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)

---

_Reto Week 05 | Bootcamp JavaScript ES2023 | [bc-channel-epti](https://youtube.com/@bc-channel-epti)_
