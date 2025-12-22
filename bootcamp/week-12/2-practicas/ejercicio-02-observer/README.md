# Ejercicio 02: Patrón Observer

## 🎯 Objetivo

Implementar el patrón Observer usando Set y callbacks - el patrón que usarás para notificar cambios en el carrito.

---

## � Diagrama del Patrón

![Patrón Observer en CartService](../../0-assets/03-observer-pattern.svg)

---

## �📋 Conceptos a Practicar

- Set para almacenar listeners únicos
- Callbacks como funciones de primera clase
- Suscripción y desuscripción
- Notificación a múltiples observadores

---

## 🏋️ Instrucciones

1. Abre `starter/index.js`
2. Lee cada sección y descomenta el código
3. Ejecuta con `node index.js` después de cada paso
4. Observa cómo funciona el patrón Observer

---

## 📚 Pasos del Ejercicio

### Paso 1: Set para Listeners
- Crear clase con `#listeners = new Set()`
- Método `subscribe(callback)`

### Paso 2: Método Notify
- Iterar sobre listeners con `forEach`
- Pasar estado actual a cada callback

### Paso 3: Unsubscribe
- Retornar función para cancelar suscripción
- `delete` del Set

### Paso 4: Observer en CartService
- Implementación práctica completa
- Múltiples observers (CartView, Badge, Logger)

---

## ✅ Resultado Esperado

```
--- Paso 1: Set para Listeners ---
Listener A suscrito
Listener B suscrito
Total listeners: 2

--- Paso 2: Notify ---
Observer 1 recibió: Primer mensaje
Observer 2 recibió: Primer mensaje
Observer 1 recibió: Segundo mensaje
Observer 2 recibió: Segundo mensaje

--- Paso 3: Unsubscribe ---
Antes de unsubscribe: 2 listeners
Observer 1: Mensaje de prueba
Observer 2: Mensaje de prueba
Después de unsubscribe Observer 1: 1 listener
Observer 2: Otro mensaje

--- Paso 4: CartService con Observer ---
[CartView] Renderizando 1 items, total: $999.99
[Badge] Actualizando contador: 1
[Logger] Cart updated: 1 items
[CartView] Renderizando 2 items, total: $1049.98
[Badge] Actualizando contador: 2
[Logger] Cart updated: 2 items

✅ ¡Ejercicio completado!
```

---

## 🔗 Navegación

| ⬅️ Anterior | Lista | Siguiente ➡️ |
|:------------|:-----:|-------------:|
| [Ejercicio 01](../ejercicio-01-clases/README.md) | [Ejercicios](../README.md) | [Ejercicio 03](../ejercicio-03-modulos/README.md) |
