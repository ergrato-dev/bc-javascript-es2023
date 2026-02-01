# Ejercicio 01: Clases y Encapsulación

## 🎯 Objetivo

Practicar la creación de clases con campos privados, getters computados, métodos de instancia y métodos estáticos.

---

## 📋 Conceptos a Practicar

- Campos privados con `#`
- Getters para valores computados
- Métodos de instancia con encadenamiento
- Método `toJSON()` para serialización
- Métodos estáticos (factory methods)

---

## 🏋️ Instrucciones

1. Abre `starter/index.js`
2. Lee cada sección y descomenta el código
3. Ejecuta con `node index.js` después de cada paso
4. Observa los resultados en la consola

---

## 📚 Pasos del Ejercicio

### Paso 1: Clase con Campos Privados
- Crear clase `Book` con campos `#id`, `#title`, etc.
- Constructor con destructuring
- Getters básicos

### Paso 2: Getters Computados
- Clase `Product` con getters calculados
- `formattedPrice`, `totalValue`, `stockStatus`

### Paso 3: Métodos de Instancia
- Clase `Counter` con métodos que modifican estado
- Encadenamiento de métodos (method chaining)

### Paso 4: toJSON para Serialización
- Clase `User` con método `toJSON()`
- Controlar qué campos se incluyen en JSON

### Paso 5: Métodos Estáticos
- Clase `Task` con factory methods
- `static create()` y `static fromJSON()`

### Paso 6: Clase Completa
- Clase `CartItem` integrando todos los conceptos

---

## ✅ Resultado Esperado

```
--- Paso 1: Clase con Campos Privados ---
Libro: Clean Code por Robert C. Martin
Precio: 45.99
Disponible: true

--- Paso 2: Getters Computados ---
Producto: MacBook Pro
Precio: $1999.99
Valor total inventario: $5999.97
Estado: Pocas unidades

--- Paso 3: Métodos de Instancia ---
Valor inicial: 5
Después de 3 incrementos: 8
Después de 1 decremento: 7
Después de reset: 0

--- Paso 4: toJSON para Serialización ---
Usuario serializado:
{
  "id": "u1",
  "name": "Ana García",
  "email": "ana@example.com"
}

--- Paso 5: Métodos Estáticos ---
Nueva tarea: Aprender clases ES2023
ID generado: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Tarea restaurada: Aprender clases ES2023
Completada: false

--- Paso 6: Clase Completa ---
Producto: Laptop
Cantidad: 1
Subtotal: $999.99
Después de +2: cantidad=3, subtotal=$2999.97
JSON: {"productId":"p1","quantity":3}

✅ ¡Ejercicio completado!
```

---

## 🔗 Navegación

| ⬅️ Lista | Siguiente ➡️ |
|:---------|-------------:|
| [Ejercicios](../README.md) | [Ejercicio 02](../ejercicio-02-observer/README.md) |
