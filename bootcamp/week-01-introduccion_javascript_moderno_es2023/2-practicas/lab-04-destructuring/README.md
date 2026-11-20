# Lab 04 — Destructuring

## Objetivo

Extraer valores de objetos y arrays a variables con destructuring: valores por defecto, renombrado, estructuras anidadas, el resto con `...` y parámetros de función.

**Tiempo:** 45 min · **Teoría:** [05 - Destructuring básico](../../1-teoria/05-destructuring-basico.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 9 pasos. En cada uno, descomenta el bloque que hay debajo de `Descomenta las siguientes líneas:` (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-01-introduccion_javascript_moderno_es2023/2-practicas/lab-04-destructuring
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: objetos

`const { firstName, lastName, email } = user;` crea tres variables con el valor de las propiedades del mismo nombre. Equivale a tres líneas `const firstName = user.firstName;`...

```text
--- Paso 1: Objetos Básico ---
Nombre: Ana
Apellido: García
Email: ana@example.com
```

## Paso 2: arrays

En un array se extrae por **posición**, no por nombre. Una coma sin nombre salta un elemento: `const [primary, , tertiary] = colors;`.

```text
--- Paso 2: Arrays Básico ---
Primer color: red
Segundo color: green
Tercer color: blue
Primario: red
Terciario: blue
```

## Paso 3: valores por defecto

Si la propiedad no existe, la variable vale `undefined`. Con `= valor` le das un valor por defecto: `country: userCountry = 'Spain'` renombra y pone el defecto a la vez. En arrays funciona igual: `three = 0`.

```text
--- Paso 3: Valores por Defecto ---
Name: Carlos
Country: undefined
User Country: Spain
one, two, three: 1 2 0
```

## Paso 4: renombrar variables

`{ name: productName }` lee la propiedad `name` y la guarda en la variable `productName`. Sirve cuando dos objetos tienen propiedades con el mismo nombre, como aquí `product` y `category`.

```text
--- Paso 4: Renombrar Variables ---
Producto: Laptop
Categoría: Electronics
Stock: 0
```

## Paso 5: objetos anidados

El patrón copia la forma del objeto: `{ address: { city, zipCode } }` entra en `address` y saca `city` y `zipCode`. `{ skills: [firstSkill] }` entra en un array dentro del objeto.

```text
--- Paso 5: Objetos Anidados ---
Nombre: María
Ciudad: Barcelona
CP: 08001
Primera skill: JavaScript
```

## Paso 6: el resto con `...`

`...restOfUser` recoge en un objeto nuevo las propiedades que no extrajiste. En un array, `...otherColors` recoge los elementos restantes. Va siempre al final del patrón.

```text
--- Paso 6: Rest (...) ---
Nombre: Ana
Resto: {
  lastName: 'García',
  age: 25,
  email: 'ana@example.com',
  city: 'Madrid'
}
Primeros: red green
Otros: [ 'blue', 'yellow', 'purple' ]
```

## Paso 7: en parámetros de función

Una función puede desestructurar el objeto que recibe: `({ firstName, lastName, age }) => ...`. Con `= {}` al final, `createConfig()` funciona aunque no le pases nada. `forEach(([x, y]) => ...)` desestructura cada par de coordenadas.

```text
--- Paso 7: En Funciones ---
Ana García, 25 años
Timeout: 5000, Debug: false
Timeout: 3000, Debug: false
Punto: (0, 0)
Punto: (10, 20)
Punto: (30, 40)
```

## Paso 8: intercambiar variables

`[x, y] = [y, x];` intercambia dos variables `let` sin una variable auxiliar. Con tres funciona igual.

```text
--- Paso 8: Swap de Variables ---
Antes - x: 1 y: 2
Después - x: 2 y: 1
Rotación - a: 3 b: 1 c: 2
```

## Paso 9: caso práctico

Una respuesta de API con datos anidados: se extraen el estado, la paginación y la lista de usuarios en un solo patrón, y `map(({ email }) => email)` saca los emails.

```text
--- Paso 9: Caso Práctico ---
Status: 200
Página: 1 de 5
Usuarios: 2
Emails: [ 'ana@example.com', 'bob@example.com' ]

🎉 ¡Excelente! Has dominado el destructuring.
Úsalo para escribir código más limpio y legible.
```

---

## Comprobación

- [ ] Los 9 pasos descomentados y `node starter/index.js` termina sin errores.
- [ ] Sabes por qué en el paso 3 `country` vale `undefined` y `userCountry` vale `Spain`.
- [ ] Sabes renombrar y poner un valor por defecto en la misma propiedad.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Arrow functions](../lab-03-arrow-functions/README.md) | [Lab 05 — Operadores modernos](../lab-05-operadores-modernos/README.md) → |

[↑ Semana 01](../../README.md)
