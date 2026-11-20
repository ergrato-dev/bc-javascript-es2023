# Lab 01 — Crear y usar símbolos

## Objetivo

Crear símbolos con `Symbol()`, comprobar que cada uno es único, usarlos como claves de objeto y ver qué métodos los ignoran y cuáles los encuentran.

**Tiempo:** 50 min · **Teoría:** [01 - Introducción a Symbols](../../1-teoria/01-symbols-intro.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-09-simbolos_metaprogramacion_basica/2-practicas/lab-01-symbols-basics
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: crear un símbolo

`Symbol('user-id')` crea un valor de tipo `symbol`. El texto entre paréntesis es una descripción: sirve para reconocerlo al imprimirlo y se lee con `.description`, pero no forma parte de su identidad.

```text
--- Paso 1: Crear Símbolos ---
Símbolo creado: Symbol(user-id)
Descripción: user-id
Tipo: symbol
```

## Paso 2: cada símbolo es único

Dos símbolos con la misma descripción son valores distintos: `===` da `false`. Dos strings iguales, en cambio, sí son iguales.

```text
--- Paso 2: Unicidad ---
sym1 === sym2: false
Aunque tienen la misma descripción, son únicos
str1 === str2: true
```

## Paso 3: símbolos como claves

Para usar un símbolo como clave se escribe entre corchetes: `[ID]: 12345` al crear el objeto y `user[ID]` al leerlo. `user.ID` busca una clave de texto llamada `'ID'`, que no existe: da `undefined`.

```text
--- Paso 3: Como Claves de Objeto ---
Nombre: Alice
ID (con símbolo): 12345
ID (con punto): undefined
```

## Paso 4: ocultos para las enumeraciones

`Object.keys`, `Object.values`, `for...in` y `JSON.stringify` solo ven las claves de texto. Las claves simbólicas no aparecen en ninguno.

```text
--- Paso 4: Ocultos de Enumeraciones ---
Object.keys: [ 'name', 'email' ]
Object.values: [ 'Alice', 'alice@test.com' ]
JSON: {"name":"Alice","email":"alice@test.com"}
for...in: name, email
```

## Paso 5: encontrar las claves simbólicas

Ocultas no quiere decir inaccesibles. `Object.getOwnPropertySymbols` devuelve solo los símbolos del objeto y `Reflect.ownKeys` devuelve todas las claves, de texto y simbólicas. Con el símbolo encontrado se lee el valor.

```text
--- Paso 5: Acceder a Símbolos ---
Símbolos del objeto: [ Symbol(secret), Symbol(metadata) ]
Todas las claves: [ 'visible', Symbol(secret), Symbol(metadata) ]
Valor de _secret: dato oculto
```

## Paso 6: claves públicas y simbólicas

El mismo objeto mezcla claves de texto (`name`, `price`) y simbólicas (`_internalId`, `_supplierCode`). `Object.keys` enseña solo las primeras; `Reflect.ownKeys` enseña las cuatro, primero las de texto.

```text
--- Paso 6: Claves públicas y simbólicas ---
Claves públicas: [ 'name', 'price' ]
Todas las claves: [ 'name', 'price', Symbol(internalId), Symbol(supplierCode) ]
ID interno: INT-042
```

## Paso 7: `Symbol` no es un constructor

`Symbol` se llama como función. Con `new` lanza un `TypeError`: los símbolos son valores primitivos, como los números, no objetos.

```text
--- Paso 7: Symbol no es constructor ---
Error: Symbol is not a constructor
Symbol() se llama como función, no con new

✅ Lab completado.
```

---

## Comprobación

1. En el paso 2, cambia `Symbol('id')` por `Symbol.for('id')` en las dos líneas. ¿Qué imprime ahora `sym1 === sym2`?
2. En el paso 3, ¿qué imprime `user['ID']`? ¿Por qué?
3. En el paso 6, ¿qué devuelve `Object.getOwnPropertySymbols(product).length`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — `Symbol.for` y el registro global](../lab-02-symbol-registry/README.md) → |

[↑ Semana 09](../../README.md)
