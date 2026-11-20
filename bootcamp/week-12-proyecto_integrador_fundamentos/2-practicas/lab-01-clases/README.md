# Lab 01 — Clases y encapsulación

## Objetivo

Repasar las clases de la [semana 03](../../../week-03-clases_programacion_orientada_objetos/README.md) con lo que necesita el proyecto: campos privados, getters que calculan, métodos que cambian el estado de forma controlada, `toJSON` y métodos estáticos.

**Tiempo:** 50 min · **Teoría:** [01 - Repaso](../../1-teoria/01-revision-conceptos.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-12-proyecto_integrador_fundamentos/2-practicas/lab-01-clases
node starter/index.js
```

Cada paso funciona solo, sin los anteriores. Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: campos privados

Un campo que empieza por `#` solo se puede leer y escribir dentro de la clase. Los getters (`get title()`) dejan leerlo desde fuera sin poder cambiarlo.

```text
--- Paso 1: Clase con Campos Privados ---
Libro: Clean Code por Robert C. Martin
Precio: 45.99
Disponible: true
```

## Paso 2: getters que calculan

Un getter no tiene por qué devolver un campo: `totalValue` multiplica el precio por la cantidad y `stockStatus` elige un texto según la cantidad que queda. Se usan como propiedades, sin paréntesis.

```text
--- Paso 2: Getters Computados ---
Producto: MacBook Pro
Precio: $1999.99
Valor total inventario: $5999.97
Estado: Pocas unidades
```

## Paso 3: métodos que cambian el estado

`increment`, `decrement` y `reset` son la única forma de cambiar el contador privado. Así la clase decide qué cambios son válidos.

```text
--- Paso 3: Métodos de Instancia ---
Valor inicial: 5
Después de 3 incrementos: 8
Después de 1 decremento: 7
Después de reset: 0
```

## Paso 4: `toJSON`

`JSON.stringify` no ve los campos privados. Si la clase define `toJSON()`, `JSON.stringify` usa lo que devuelve: aquí, el id, el nombre y el email, pero no la contraseña.

```text
--- Paso 4: toJSON para Serialización ---
Usuario serializado:
{
  "id": "u1",
  "name": "Ana García",
  "email": "ana@example.com"
}
```

## Paso 5: métodos estáticos

`static create()` y `static fromJSON()` se llaman sobre la clase (`Task.create(...)`), no sobre una instancia. Sirven para fabricar instancias: una nueva con id generado o una restaurada desde un JSON.

```text
--- Paso 5: Métodos Estáticos ---
Nueva tarea: Aprender clases ES2023
ID generado: fa60b6ca-86d0-4c3d-89f6-e376abce7a45
Tarea restaurada: Aprender clases ES2023
Completada: false
```

El id lo genera `crypto.randomUUID()`, así que cambia en cada ejecución.

## Paso 6: todo junto

`CartItem` junta los cinco pasos: campos privados, getters que calculan el subtotal, métodos que devuelven `this` para encadenarse, `toJSON` y un método estático.

```text
--- Paso 6: Clase Completa ---
Producto: Laptop
Cantidad: 1
Subtotal: $999.99
Después de +2: cantidad=3, subtotal=$2999.97
JSON: {"productId":"p1","quantity":3}

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, añade al final `console.log(book.#title);` y ejecuta. ¿Qué error sale y en qué momento: al llegar a esa línea o antes de ejecutar nada?
2. En el paso 4, ¿qué imprimiría `JSON.stringify(user)` si borras el método `toJSON`? Pruébalo.
3. En el paso 6, ¿por qué `increaseQuantity` devuelve `this`? Escribe una línea que lo aproveche.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Patrón observer](../lab-02-observer/README.md) → |

[↑ Semana 12](../../README.md)
