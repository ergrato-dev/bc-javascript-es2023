# 📘 Ejercicio 05: findLast() y findLastIndex()

## 🎯 Objetivos

- Dominar `findLast()` para encontrar el último elemento que cumple una condición
- Usar `findLastIndex()` para obtener el índice del último elemento coincidente
- Comparar con `find()` y `findIndex()` tradicionales
- Aplicar estos métodos en casos de uso reales

---

## 📋 Descripción

Este es un **ejercicio guiado paso a paso** donde aprenderás a usar los métodos ES2023 para buscar desde el final de un array. Los ejemplos usan datos realistas como logs, transacciones y versiones.

---

## 🗂️ Estructura del Ejercicio

```
ejercicio-05-findlast/
├── README.md           # Este archivo
├── starter/
│   └── index.js        # Código con comentarios para descomentar
└── solution/
    └── index.js        # Solución completa
```

---

## 📝 Práctica Guiada

**Abre `starter/index.js`** y sigue los pasos descomentando el código correspondiente.

### Paso 1: findLast() Básico

Encontrar el último elemento que cumple una condición simple.

```javascript
const numbers = [5, 12, 8, 130, 44, 8, 22];
const lastGreater10 = numbers.findLast(n => n > 10);
// 22 (último mayor que 10)
```

---

### Paso 2: findLast() vs find()

Comparar el comportamiento de buscar desde el inicio vs desde el final.

```javascript
// find() → primer elemento que cumple
// findLast() → último elemento que cumple
```

---

### Paso 3: findLastIndex() Básico

Obtener el índice del último elemento que cumple la condición.

```javascript
const lastIndex = numbers.findLastIndex(n => n === 8);
// 5 (índice del último 8)
```

---

### Paso 4: Historial de Actividad

Caso de uso real: encontrar la última acción de cierto tipo en un log.

```javascript
const lastLogin = activityLog.findLast(log => log.action === 'login');
```

---

### Paso 5: Sistema de Versiones

Encontrar la última versión estable de un software.

```javascript
const latestStable = versions.findLast(v => v.stable);
```

---

### Paso 6: Procesamiento de Pedidos

Buscar el último pedido con cierto estado de un cliente específico.

```javascript
const lastDelivered = orders.findLast(
  o => o.customer === 'Alice' && o.status === 'delivered'
);
```

---

### Paso 7: Combinando con Otros Métodos ES2023

Usar `findLastIndex()` junto con `with()` y `toSpliced()` para operaciones inmutables.

```javascript
const lastUnreadIndex = notifications.findLastIndex(n => !n.read);
const updated = notifications.with(lastUnreadIndex, { ...notifications[lastUnreadIndex], read: true });
```

---

## ▶️ Ejecución

```bash
cd starter
node index.js
```

---

## ⏱️ Tiempo Estimado

35-40 minutos

---

## ✅ Checklist

- [ ] Paso 1: findLast() básico funciona
- [ ] Paso 2: Diferencia entre find() y findLast() clara
- [ ] Paso 3: findLastIndex() retorna índice correcto
- [ ] Paso 4: Búsqueda en logs funciona
- [ ] Paso 5: Última versión estable encontrada
- [ ] Paso 6: Filtro combinado de pedidos funciona
- [ ] Paso 7: Combinación con with()/toSpliced() funciona

---

## 🔍 Observaciones

1. `findLast()` retorna `undefined` si ningún elemento cumple
2. `findLastIndex()` retorna `-1` si no encuentra coincidencias
3. Ambos métodos iteran desde el final, lo que es más eficiente que `reverse() + find()`
4. Son ideales para logs, historial, y cualquier dato ordenado cronológicamente

---

## 🔗 Recursos

- [Teoría: findLast y findLastIndex](../../1-teoria/06-findLast-findLastIndex.md)
- [MDN: Array.prototype.findLast()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
- [MDN: Array.prototype.findLastIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)
