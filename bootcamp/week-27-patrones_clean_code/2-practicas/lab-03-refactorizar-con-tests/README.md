# Lab 03 — Refactorizar con tests

## Objetivo

Mejorar una función heredada sin cambiar lo que hace: leer sus tests de caracterización y, en pasos pequeños con los tests después de cada uno, renombrar, extraer funciones, salir pronto, dar nombre a los números, cambiar condiciones por estrategias y separar un parámetro booleano en dos funciones. Uno de los pasos rompe un test a propósito.

**Tiempo:** 55 min · **Teoría:** [03 - Clean code](../../1-teoria/03-clean-code.md) y [05 - Code smells, refactorizar y herramientas](../../1-teoria/05-refactorizar-y-herramientas.md)

## Cómo trabajar

[`starter/src/invoice.js`](starter/src/invoice.js) tiene `calc`, que calcula el total de un pedido: suma las líneas, aplica un cupón, añade el envío y, si se le pide, da formato. Funciona. [`starter/tests/invoice.test.js`](starter/tests/invoice.test.js) tiene sus tests de caracterización. En cada paso cambias **solo** `src/invoice.js` por el código del paso y ejecutas los tests. Los tests no se tocan en todo el lab.

Una sola vez, instala las dependencias:

```bash
cd bootcamp/week-27-patrones_clean_code/2-practicas/lab-03-refactorizar-con-tests/starter
pnpm install
```

Y en cada paso:

```bash
pnpm test --reporter=verbose
```

Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0 y Vitest 5.1.0. Después del paso 1, se muestra solo el resumen o el fallo.

---

## Paso 1: La red

Antes de cambiar nada, ejecuta los tests:

```text
 ✓ tests/invoice.test.js > calc: lo que hace hoy > suma las líneas y añade 4.95 € de envío 1ms
 ✓ tests/invoice.test.js > calc: lo que hace hoy > el envío es gratis desde 100 € 0ms
 ✓ tests/invoice.test.js > calc: lo que hace hoy > VIP descuenta un 10 %, y el descuento puede quitar el envío gratis 0ms
 ✓ tests/invoice.test.js > calc: lo que hace hoy > NUEVO descuenta 5 € con 50 € justos 0ms
 ✓ tests/invoice.test.js > calc: lo que hace hoy > NUEVO no descuenta nada por debajo de 50 € 0ms
 ✓ tests/invoice.test.js > calc: lo que hace hoy > un cupón que no existe no hace nada 0ms
 ✓ tests/invoice.test.js > calc: lo que hace hoy > un pedido vacío cuesta el envío 0ms
 ✓ tests/invoice.test.js > calc: lo que hace hoy > redondea a céntimos 0ms
 ✓ tests/invoice.test.js > calc: lo que hace hoy > con el tercer parámetro a true, devuelve un texto en euros 0ms

 Test Files  1 passed (1)
      Tests  9 passed (9)
```

Son **tests de caracterización**: apuntan lo que `calc` hace hoy, no lo que debería hacer ([teoría 05](../../1-teoria/05-refactorizar-y-herramientas.md#2-refactorizar-es-no-cambiar-lo-que-hace)). Lee dos:

- «un pedido vacío cuesta el envío»: cobrar 4.95 € por nada parece un error, pero es lo que hace. Arreglarlo es otra tarea, después del refactor.
- «VIP descuenta un 10 %, y el descuento puede quitar el envío gratis»: 104 € con un 10 % menos son 93.60 €, por debajo de 100, y se cobra el envío. Es fácil cambiarlo sin querer al reordenar los cálculos.

Ahora lee `calc` y apunta todos los olores que encuentres, con la tabla de la teoría 05.

## Paso 2: Nombres

Cambia el contenido de `src/invoice.js` por:

```js
export function calc(lines, coupon, formatted) {
  let subtotal = 0;
  for (const line of lines) {
    subtotal += line.price * line.quantity;
  }
  let discount = 0;
  if (coupon) {
    if (coupon === 'VIP') {
      discount = subtotal * 0.1;
    } else {
      if (coupon === 'NUEVO') {
        if (subtotal >= 50) {
          discount = 5;
        }
      }
    }
  }
  let shipping;
  if (subtotal - discount >= 100) {
    shipping = 0;
  } else {
    shipping = 4.95;
  }
  const total = subtotal - discount + shipping;
  if (formatted) {
    return total.toFixed(2) + ' €';
  }
  return Math.round(total * 100) / 100;
}
```

```text
 Test Files  1 passed (1)
      Tests  9 passed (9)
```

Solo cambian los nombres, y el bucle `for` con índice pasa a `for...of`. La estructura es la misma, pero ya se lee: un subtotal, un descuento, un envío y un total. El nombre exportado, `calc`, no se cambia: lo usan los tests y, en un proyecto de verdad, otros módulos.

## Paso 3: Funciones que hacen una cosa

```js
const subtotalOf = (lines) => lines.reduce((sum, line) => sum + line.price * line.quantity, 0);

const discountFor = (subtotal, coupon) => {
  if (coupon === 'VIP') return subtotal * 0.1;
  if (coupon === 'NUEVO' && subtotal >= 50) return 5;
  return 0;
};

const shippingFor = (amount) => (amount >= 100 ? 0 : 4.95);

export function calc(lines, coupon, formatted) {
  const subtotal = subtotalOf(lines);
  const discounted = subtotal - discountFor(subtotal, coupon);
  const total = discounted + shippingFor(discounted);
  if (formatted) {
    return total.toFixed(2) + ' €';
  }
  return Math.round(total * 100) / 100;
}
```

```text
 Test Files  1 passed (1)
      Tests  9 passed (9)
```

- Cada parte tiene nombre: `subtotalOf`, `discountFor`, `shippingFor`. `calc` queda como la lista de pasos.
- `discountFor` sale en cuanto sabe la respuesta (**cláusulas de guarda**): de cuatro niveles de `if` a ninguno. El `if (coupon)` de fuera sobraba: sin cupón, ninguna comparación se cumple.
- Ninguna de las tres se exporta: son detalles de `invoice.js`.

## Paso 4: Números con nombre

Añade al principio del archivo las constantes, y usa cada una en su sitio:

```js
const VIP_RATE = 0.1;
const NEW_CUSTOMER_MINIMUM = 50;
const NEW_CUSTOMER_DISCOUNT = 5;
const FREE_SHIPPING_FROM = 100;
const SHIPPING_COST = 4.95;

const subtotalOf = (lines) => lines.reduce((sum, line) => sum + line.price * line.quantity, 0);

const discountFor = (subtotal, coupon) => {
  if (coupon === 'VIP') return subtotal * VIP_RATE;
  if (coupon === 'NUEVO' && subtotal >= NEW_CUSTOMER_MINIMUM) return NEW_CUSTOMER_DISCOUNT;
  return 0;
};

const shippingFor = (amount) => (amount >= FREE_SHIPPING_FROM ? 0 : SHIPPING_COST);
```

`calc` no cambia.

```text
 Test Files  1 passed (1)
      Tests  9 passed (9)
```

Ahora el envío gratis desde 120 € es un cambio en una línea, y quien lea `shippingFor` entiende la regla sin saber de dónde salía el 100. `Math.round(total * 100) / 100` y `toFixed(2)` siguen igual: ahí el 100 y el 2 son «dos decimales», no una regla del negocio.

## Paso 5: Cupones como estrategias

Cambia `discountFor` por un objeto de cupones y una línea:

```js
// Un cupón es una estrategia: recibe el subtotal y devuelve el descuento.
const COUPONS = {
  VIP: (subtotal) => subtotal * VIP_RATE,
  NUEVO: (subtotal) => (subtotal > NEW_CUSTOMER_MINIMUM ? NEW_CUSTOMER_DISCOUNT : 0),
};

const discountFor = (subtotal, coupon) => COUPONS[coupon]?.(subtotal) ?? 0;
```

```text
 × tests/invoice.test.js > calc: lo que hace hoy > NUEVO descuenta 5 € con 50 € justos 4ms
   → expected 54.95 to be 49.95 // Object.is equality

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/invoice.test.js > calc: lo que hace hoy > NUEVO descuenta 5 € con 50 € justos
AssertionError: expected 54.95 to be 49.95 // Object.is equality

- Expected
+ Received

- 49.95
+ 54.95

 ❯ tests/invoice.test.js:24:42
     22|
     23|   it('NUEVO descuenta 5 € con 50 € justos', () => {
     24|     expect(calc([pens, books], 'NUEVO')).toBe(49.95);
       |                                          ^
     25|   });
     26|

 Test Files  1 failed (1)
      Tests  1 failed | 8 passed (9)
```

El código del paso tiene un error, puesto a propósito: `>` donde el original decía `>=`. Con 50 € justos, el original descuenta 5 € y esta versión no. Es el error típico de un refactor: al reescribir una condición, cambia un borde.

El test lo encuentra en el momento, y sabes dónde buscar: lo único que has cambiado es `COUPONS`. Cambia `>` por `>=` y vuelve a ejecutar:

```text
 Test Files  1 passed (1)
      Tests  9 passed (9)
```

- `COUPONS[coupon]` busca la estrategia del cupón; `?.(subtotal)` la llama solo si existe; `?? 0` da 0 si no existe o no había cupón.
- Un cupón nuevo es una línea en `COUPONS`, sin tocar `discountFor`.

## Paso 6: Un booleano, dos funciones

`calc(lines, coupon, true)` devuelve un texto y `calc(lines, coupon)` un número: el tercer parámetro cambia lo que hace la función. Cambia `calc` por dos funciones con nombre y deja `calc` para el código que aún la usa:

```js
const roundCents = (amount) => Math.round(amount * 100) / 100;

export const orderTotal = (lines, { coupon } = {}) => {
  const subtotal = subtotalOf(lines);
  const discounted = subtotal - discountFor(subtotal, coupon);
  return roundCents(discounted + shippingFor(discounted));
};

export const formatEuros = (amount) => `${amount.toFixed(2)} €`;

// La firma antigua, para el código que aún la usa.
export const calc = (lines, coupon, formatted) => {
  const total = orderTotal(lines, { coupon });
  return formatted ? formatEuros(total) : total;
};
```

```text
 Test Files  1 passed (1)
      Tests  9 passed (9)
```

- `orderTotal(lines, { coupon: 'VIP' })` se lee sin abrir la función, y el cupón va en un objeto de opciones: añadir otra opción no rompe ninguna llamada.
- `formatEuros` sirve para cualquier importe, no solo para totales.
- `calc` sigue existiendo y los tests siguen pasando. El código que la usa se puede pasar a las funciones nuevas poco a poco; cuando nadie la use, se borra.

Compara el archivo con el del principio: lo mismo, en funciones con nombre, sin anidamiento, sin números sueltos y sin parámetros que haya que adivinar.

```text
✅ Lab completado.
```

---

## Comprobación

1. Haz que los pasos 2 a 6 te fallen a propósito: cambia en cada uno un detalle (un `>=`, el orden entre descuento y envío, un redondeo). ¿Qué test lo detecta? ¿Hay algún cambio que ningún test detecte?
2. Escribe un `describe` nuevo para `orderTotal` y `formatEuros`, con sus propios tests. ¿Por qué no hacía falta escribirlos antes del refactor?
3. Añade un cupón `'ENVIO'` que quite el coste del envío. ¿Encaja en `COUPONS` tal como está? ¿Qué cambiarías?
4. Ahora que el refactor está hecho, decide qué hacer con el pedido vacío que cuesta 4.95 €. ¿Qué cambias primero: el test o el código?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Observer y Strategy](../lab-02-observer-strategy/README.md) | [Lab 04 — ESLint y Prettier](../lab-04-eslint-prettier/README.md) → |

[↑ Semana 27](../../README.md)
