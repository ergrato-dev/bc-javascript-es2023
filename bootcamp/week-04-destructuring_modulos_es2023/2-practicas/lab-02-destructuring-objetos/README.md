# Lab 02 — Destructuring de objetos

## Objetivo

Sacar propiedades de un objeto a variables por su nombre, renombrarlas, darles valores por defecto, abrir objetos anidados y usar el patrón en parámetros y bucles.

**Tiempo:** 55 min · **Teoría:** [02 - Destructuring de objetos](../../1-teoria/02-destructuring-objetos.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 10 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-04-destructuring_modulos_es2023/2-practicas/lab-02-destructuring-objetos
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: extraer por nombre

`const { username, email, age } = user;` crea tres variables con las propiedades del mismo nombre. En los objetos cuenta el nombre, no el orden.

```text
--- Paso 1: Extracción Básica ---
Username: john_doe
Email: john@example.com
Age: 28
```

## Paso 2: renombrar

`product_id: productId` lee la propiedad `product_id` y la guarda en la variable `productId`. A la izquierda de los dos puntos va la propiedad; a la derecha, la variable. Sirve para pasar a `camelCase` los datos que llegan con otro estilo.

```text
--- Paso 2: Alias (Renombrar) ---
Product ID: SKU-001
Product Name: Laptop Pro
Product Price: 1299.99
```

## Paso 3: valores por defecto

`config` no tiene `language`, así que `language = 'en'` usa el valor por defecto. `theme` sí existe y conserva su valor.

```text
--- Paso 3: Valores por Defecto ---
Theme: dark
Language: en
```

## Paso 4: renombrar y valor por defecto a la vez

`api_url: apiUrl = 'http://localhost'` hace las dos cosas: renombra y, si la propiedad no existe, usa el valor por defecto. `settings` solo trae `api_url`; los otros dos salen del valor por defecto.

```text
--- Paso 4: Alias + Default Combinados ---
API URL: https://api.example.com
Max Retries: 3
Timeout: 5000
```

## Paso 5: objetos anidados

El patrón copia la forma del objeto: `department: { name: deptName, manager: { email: managerEmail } }` entra en `department` y luego en `manager`. `department` y `manager` no se convierten en variables, solo indican el camino.

```text
--- Paso 5: Destructuring Anidado ---
Employee: María García
Department: Engineering
Manager Email: carlos@company.com
```

## Paso 6: rest en objetos

`const { id, ...userInfo } = user;` saca `id` y guarda el resto de propiedades en un objeto nuevo. Es una forma de quitar una propiedad sin modificar `user`.

```text
--- Paso 6: Rest en Objetos ---
ID: 1
User Info: {
  username: 'john_doe',
  email: 'john@example.com',
  age: 28,
  country: 'Spain'
}
```

## Paso 7: en los parámetros

`createUser` desestructura el objeto que recibe y da valores por defecto a `role` y `active`. Quien llama pasa solo lo que necesita, en cualquier orden.

```text
--- Paso 7: En Parámetros de Función ---
New User: {
  name: 'Ana',
  email: 'ana@mail.com',
  role: 'user',
  active: true,
  createdAt: '2026-11-20T03:07:58.036Z'
}
```

`createdAt` es la fecha y hora en que lo ejecutes.

## Paso 8: objetos y arrays mezclados

`data: { users: [firstUser] }` entra en `data`, luego en `users`, y saca el primer elemento del array.

```text
--- Paso 8: Destructuring Complejo ---
First User: { id: 1, name: 'Ana' }
Status: 200
Response Message: Success
```

## Paso 9: en un bucle

`for (const { id, name, price } of products)` desestructura cada elemento en cada vuelta. El `$${price}` de la plantilla imprime un `$` y después el valor.

```text
--- Paso 9: Destructuring en Loops ---
1: Laptop - $999
2: Phone - $699
3: Tablet - $499
```

## Paso 10: caso práctico

`processClick` recibe un objeto con la forma de un evento de clic del navegador (`target`, `clientX`, `clientY`, `shiftKey`) y se queda solo con lo que necesita. `shiftKey` no viene en `mockEvent`, así que vale `false` por defecto.

```text
--- Paso 10: Caso Práctico ---
Click Info: {
  x: 150,
  y: 300,
  element: { id: 'btn-submit', tagName: 'BUTTON' },
  withShift: false
}

🎉 ¡Excelente! Has completado el lab de destructuring de objetos.
Revisa cada paso y experimenta modificando los valores.
```

---

## Comprobación

1. En el paso 1, añade `const { country } = user;` e imprímelo. Luego prueba `const { phone } = user;`. ¿Qué vale `phone`?
2. En el paso 5, añade `console.log(department);` debajo. ¿Qué error sale y por qué?
3. En el paso 7, llama a `createUser()` sin argumentos. ¿Qué error sale? ¿Qué añadirías al parámetro para que funcione? (Lo viste en la semana 02.)

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Destructuring de arrays](../lab-01-destructuring-arrays/README.md) | [Lab 03 — Módulos básicos](../lab-03-modulos-basicos/README.md) → |

[↑ Semana 04](../../README.md)
