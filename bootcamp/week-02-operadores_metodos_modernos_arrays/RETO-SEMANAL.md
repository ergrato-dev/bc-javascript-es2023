# 🎯 Reto Semanal - Week 02

## 📺 Video de la Semana

[![Video Week 02](https://img.shields.io/badge/YouTube-Video_Week_02-red?style=for-the-badge&logo=youtube)](https://youtube.com/@bc-channel-epti)

> **Importante**: Mira el video completo antes de realizar el reto. Contiene el **código de verificación** necesario para completar tu autoevaluación.

---

## 🧩 El Reto

### Contexto

Dominas spread, rest, y los métodos de array más potentes: `map`, `filter`, `reduce`, `at()`, y `Object.hasOwn()`.

### Tu Misión

Dado un array de productos, implementa una función `analizarInventario` que:

1. Use **spread** para crear copia del array
2. Use **filter** para obtener productos en stock
3. Use **map** para transformar datos
4. Use **reduce** para calcular el valor total del inventario
5. Use **at(-1)** para obtener el último producto agregado
6. Use **Object.hasOwn()** para verificar propiedades

```javascript
const productos = [
  { id: 1, nombre: 'Laptop', precio: 999, stock: 5 },
  { id: 2, nombre: 'Mouse', precio: 29, stock: 0 },
  { id: 3, nombre: 'Teclado', precio: 79, stock: 12 },
  { id: 4, nombre: 'Monitor', precio: 349, stock: 3 }
];

const resultado = analizarInventario(productos);
// {
//   totalProductos: 4,
//   enStock: 3,
//   valorInventario: 6122, // suma de (precio * stock) de productos con stock
//   ultimoAgregado: 'Monitor',
//   resumen: ['Laptop (5)', 'Teclado (12)', 'Monitor (3)']
// }
```

---

## ✅ Requisitos de Entrega

### Paso 1: Resuelve el reto
- Usa TODOS los métodos mencionados
- Una sola función con encadenamiento limpio
- No uses loops tradicionales (`for`, `while`)

### Paso 2: Comenta en YouTube (REQUERIDO)

Deja un comentario en el video de esta semana con el siguiente formato:

```
✅ RETO WEEK-02 COMPLETADO

Mi cadena de métodos: [describe tu enfoque]

🤔 ¿Cuándo usarías at(-1) en lugar de array[array.length - 1]?
[Tu respuesta]
```

### Paso 3: Autoevaluación

Completa el [formulario de autoevaluación](https://forms.gle/PLACEHOLDER_WEEK02):

- Código de verificación del video
- **Link a tu comentario en YouTube**
- Link a tu código

---

## 💡 Pregunta de Reflexión

> **¿Por qué `Object.hasOwn()` es mejor que `obj.hasOwnProperty()`?**

Incluye tu respuesta en el comentario de YouTube.

---

## 🏆 Criterios de Éxito

| Criterio | Puntos |
|----------|--------|
| Usa spread operator | 15 |
| Usa filter correctamente | 15 |
| Usa map correctamente | 15 |
| Usa reduce correctamente | 20 |
| Usa at(-1) | 10 |
| Usa Object.hasOwn() | 5 |
| Comentario en YouTube completo | 20 |
| **Total** | **100** |

---

## 🔗 Recursos

- [Video de la semana](https://youtube.com/@bc-channel-epti)
- [MDN: Array.prototype.at()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [MDN: Object.hasOwn()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)

---

_Reto Week 02 | Bootcamp JavaScript ES2023 | [bc-channel-epti](https://youtube.com/@bc-channel-epti)_
