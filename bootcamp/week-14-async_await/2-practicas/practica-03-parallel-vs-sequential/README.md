# ⚡ Práctica 03: Ejecución Paralela vs Secuencial

## 📋 Descripción

En esta práctica aprenderás a distinguir cuándo usar ejecución secuencial (una operación después de otra) y cuándo usar ejecución paralela (todas al mismo tiempo) para optimizar el rendimiento.

---

## 🎯 Objetivos

- Identificar cuándo las operaciones son independientes
- Usar `Promise.all()` para ejecución paralela
- Medir y comparar tiempos de ejecución
- Combinar patrones secuenciales y paralelos

---

## ⏱️ Duración

45 minutos

---

## 📝 Instrucciones

### Paso 1: Ejecución Secuencial

Cuando cada operación depende de la anterior:

```javascript
async function sequential() {
  const user = await fetchUser();       // 1s
  const cart = await fetchCart(user.id); // 1s - necesita user
  return { user, cart };                  // Total: 2s
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Ejecución Paralela

Cuando las operaciones son independientes:

```javascript
async function parallel() {
  const [users, products] = await Promise.all([
    fetchUsers(),    // 1s
    fetchProducts()  // 1s (simultáneo)
  ]);                // Total: 1s
  return { users, products };
}
```

**Descomenta** la sección del Paso 2.

---

### Paso 3: Comparación de Tiempos

Mide la diferencia de rendimiento:

```javascript
console.time('operación');
await operation();
console.timeEnd('operación'); // Muestra tiempo transcurrido
```

**Descomenta** la sección del Paso 3.

---

### Paso 4: Patrón Mixto

Combina secuencial y paralelo según dependencias:

```javascript
async function mixed() {
  // Primero: operación requerida
  const user = await fetchUser();

  // Luego: operaciones paralelas que dependen de user
  const [posts, followers] = await Promise.all([
    fetchPosts(user.id),
    fetchFollowers(user.id)
  ]);

  return { user, posts, followers };
}
```

**Descomenta** la sección del Paso 4.

---

### Paso 5: Promise.allSettled

Cuando quieres todos los resultados aunque algunos fallen:

```javascript
const results = await Promise.allSettled([
  fetchA(), // puede fallar
  fetchB(), // puede fallar
  fetchC()  // puede fallar
]);

// results contiene { status, value/reason } para cada Promise
```

**Descomenta** la sección del Paso 5.

---

## 🧪 Verificación

Al ejecutar el código completo deberías ver tiempos similares a:

```
--- Paso 1: Ejecución Secuencial ---
Secuencial: ~600ms (300 + 300)

--- Paso 2: Ejecución Paralela ---
Paralelo: ~300ms (simultáneo)

--- Paso 3: Comparación de Tiempos ---
Secuencial tomó: 600ms
Paralelo tomó: 300ms
Mejora: 50% más rápido

--- Paso 4: Patrón Mixto ---
Mixto: usuario primero, luego paralelo
Tiempo total: ~400ms

--- Paso 5: Promise.allSettled ---
Éxitos: 2
Fallos: 1
```

---

## 📚 Recursos

- [MDN: Promise.all()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [MDN: Promise.allSettled()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

---

[⬅️ Anterior: Error Handling](../practica-02-error-handling/) | [Siguiente: Async Iteration ➡️](../practica-04-async-iteration/)
