# Lab 01 — Spread y rest

## Objetivo

Usar `...` en sus dos papeles: **spread** (expande un array u objeto en sus elementos) para combinar y copiar sin modificar el original, y **rest** (recoge varios valores en un array u objeto) en parámetros y destructuring.

**Tiempo:** 40 min · **Teoría:** [01 - Spread](../../1-teoria/01-spread-operator.md) y [02 - Rest](../../1-teoria/02-rest-parameters.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 8 pasos. En cada uno, descomenta el bloque que hay debajo de `Descomenta las siguientes líneas:` (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-02-operadores_metodos_modernos_arrays/2-practicas/lab-01-spread-rest
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: combinar arrays

`[...fruits1, ...fruits2]` crea un array nuevo con los elementos de los dos. Entre los `...` puedes poner elementos sueltos (`'mango'`, `'kiwi'`). `fruits1` y `fruits2` no cambian.

```text
--- Paso 1: Spread - Combinar Arrays ---
Frutas combinadas: [ 'apple', 'banana', 'orange', 'grape' ]
Con extras: [ 'apple', 'banana', 'mango', 'orange', 'grape', 'kiwi' ]
```

## Paso 2: copiar arrays

`[...original]` es una copia: el `push` de la copia no llega al original. Spread también sirve para pasar un array a una función que espera argumentos sueltos: `Math.max(...numbers)` equivale a `Math.max(5, 2, 9, 1, 7)`.

```text
--- Paso 2: Spread - Clonar Arrays ---
Original: [ 1, 2, 3 ]
Copia: [ 1, 2, 3, 4 ]
Máximo: 9
Mínimo: 1
```

## Paso 3: spread con objetos

`{ ...defaults, ...userSettings }` copia las propiedades de los dos objetos en orden; si una se repite (`theme`), gana la última. Con el mismo patrón, `{ ...product, price: 899 }` crea un producto nuevo con otro precio y deja `product` igual.

```text
--- Paso 3: Spread con Objetos ---
Config final: { theme: 'dark', language: 'en', debug: false, fontSize: 16 }
Original: { name: 'Laptop', price: 999, stock: 5 }
Actualizado: { name: 'Laptop', price: 899, stock: 5 }
```

## Paso 4: objetos anidados

Spread solo copia el primer nivel. En `shallowCopy`, `address` es **el mismo objeto** que `user.address`: cambiarlo en uno lo cambia en los dos. Por eso `deepCopy` copia también `address` con su propio spread, y cambiar su ciudad no toca la de `user`.

```text
--- Paso 4: Spread Anidado ---
Original city: Madrid
Deep copy city: Barcelona
```

Prueba: añade `shallowCopy.address.city = 'Sevilla';` antes de los `console.log` y vuelve a ejecutar. La ciudad original también cambia.

## Paso 5: rest en parámetros

`(...numbers) => ...` recoge todos los argumentos en un array, así que `sum` admite cualquier cantidad. En `greetAll(greeting, ...names)` el primer argumento va a `greeting` y el resto a `names`. El parámetro rest siempre va el último.

```text
--- Paso 5: Rest en Parámetros ---
Suma: 15
[ 'Hola, Ana!', 'Hola, Bob!', 'Hola, Carlos!' ]
```

## Paso 6: rest en destructuring

`const [first, second, ...remaining] = [...]` guarda en `remaining` los elementos que sobran. En objetos, `{ name, ...otherProps }` saca `name` y deja el resto de propiedades en un objeto nuevo.

```text
--- Paso 6: Rest en Destructuring ---
Primero: 1
Segundo: 2
Resto: [ 3, 4, 5 ]
Nombre: Product
Otras props: { price: 100, category: 'Tech', inStock: true }
```

## Paso 7: insertar en una posición

`insertAt` une tres trozos: `array.slice(0, index)` (lo de antes), los elementos nuevos y `array.slice(index)` (lo de después). `slice` no modifica el array, así que `letters` queda igual.

```text
--- Paso 7: Insertar en Posición ---
Original: [ 'a', 'b', 'e', 'f' ]
Con inserción: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

## Paso 8: combinar configuraciones

`createConfig` junta los valores por defecto con los del usuario. Como `api` es un objeto anidado, lo combina aparte; si no, `api: { timeout: 10000 }` borraría `retries`. `userOptions = {}` es un parámetro por defecto (lo verás en la teoría 03) y `(userOptions.api || {})` evita expandir `undefined` cuando no llega `api`.

```text
--- Paso 8: Caso Práctico ---
Mi configuración: {
  theme: 'dark',
  language: 'es',
  notifications: true,
  api: { timeout: 10000, retries: 3 }
}

🎉 ¡Excelente! Has completado el lab de Spread & Rest.
Revisa cada paso y experimenta modificando los valores.
```

---

## Comprobación

- [ ] Los 8 pasos descomentados y `node starter/index.js` termina sin errores.
- [ ] Sabes distinguir spread de rest mirando dónde está el `...`.
- [ ] Sabes explicar por qué el paso 4 necesita un segundo spread para `address`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Buscar en arrays](../lab-02-array-methods/README.md) → |

[↑ Semana 02](../../README.md)
