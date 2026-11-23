# ✨ Clean code

## 🎯 Objetivos

- Elegir nombres que dicen qué es cada cosa sin leer el código que la rodea.
- Escribir funciones cortas que hacen una sola cosa, con pocos parámetros.
- Cambiar el anidamiento por salidas tempranas.
- Cambiar los números mágicos por constantes con nombre.
- Separar el cálculo de los efectos, y escribir comentarios que dicen por qué.

**Clean code** (código limpio) es código fácil de leer y de cambiar por alguien que no lo escribió, o por ti dentro de seis meses. Un programa se lee muchas más veces de las que se escribe: cada error que se arregla y cada función que se añade empieza leyendo lo que ya hay. Las reglas de esta teoría no hacen el código más rápido ni más corto; lo hacen más barato de cambiar.

El ejemplo es la función del [lab 03](../2-practicas/lab-03-refactorizar-con-tests/README.md). Funciona, y tiene casi todos los problemas de esta teoría:

```js
export function calc(l, c, f) {
  let t = 0;
  for (let i = 0; i < l.length; i++) {
    t = t + l[i].price * l[i].quantity;
  }
  let d = 0;
  if (c) {
    if (c === 'VIP') {
      d = t * 0.1;
    } else {
      if (c === 'NUEVO') {
        if (t >= 50) {
          d = 5;
        }
      }
    }
  }
  let s;
  if (t - d >= 100) {
    s = 0;
  } else {
    s = 4.95;
  }
  const r = t - d + s;
  if (f) {
    return r.toFixed(2) + ' €';
  }
  return Math.round(r * 100) / 100;
}
```

---

## 📋 Contenido

### 1. Nombres que se explican

`calc(l, c, f)` obliga a leer la función entera para saber qué recibe. `t`, `d`, `s` y `r` obligan a recordar qué era cada letra.

| Regla | Mal | Bien |
|---|---|---|
| El nombre dice qué es, no de qué tipo es | `l`, `arr`, `data` | `lines`, `products` |
| Las funciones, con un verbo; los valores, con un sustantivo | `total()` para calcular, `calculate` para el resultado | `orderTotal()`, `subtotal` |
| Los booleanos se leen como una pregunta | `flag`, `check` | `isOpen`, `hasStock`, `formatted` |
| Sin abreviaturas que haya que adivinar | `qty`, `prc`, `cfg` | `quantity`, `price`, `config` |
| La misma palabra para la misma idea | `fetchUser`, `getOrder`, `loadProduct` en el mismo archivo | un solo verbo para lo mismo |

Un nombre largo y claro es mejor que uno corto que necesita un comentario. La excepción son los nombres de vida muy corta y uso conocido: `a` y `b` en una función de comparación, o `i` en un bucle de tres líneas.

### 2. Funciones que hacen una cosa

`calc` hace cuatro cosas: suma las líneas, calcula el descuento, calcula el envío y, a veces, da formato. Una función que hace una cosa se puede describir en una frase sin «y», y se puede probar sola:

```js
const subtotalOf = (lines) => lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
const shippingFor = (amount) => (amount >= FREE_SHIPPING_FROM ? 0 : SHIPPING_COST);
```

- **Qué:** cada parte de `calc` pasa a ser una función con nombre, y `calc` queda como la lista de pasos.
- **Para qué:** el nombre de cada función documenta ese trozo, y un cambio en el envío se hace en `shippingFor` sin leer lo demás.
- **Impacto:** las funciones cortas (unas 15 líneas como mucho, como guía) caben en pantalla y se entienden de una vez. ESLint puede avisar cuando una crece de más (teoría 05).

### 3. Pocos parámetros, y ningún booleano que cambie lo que hace

Con tres parámetros posicionales, `calc(lines, 'VIP', true)` no se entiende sin abrir la función: ¿qué es `true`? Dos reglas:

- **Más de dos datos, un objeto de opciones:** `orderTotal(lines, { coupon: 'VIP' })` se lee solo, el orden da igual y añadir una opción no rompe las llamadas que ya hay.
- **Un booleano que elige entre dos comportamientos es una señal de dos funciones:** `calc(lines, coupon, true)` devuelve un texto y `calc(lines, coupon)` un número. Mejor `orderTotal` para el número y `formatEuros(orderTotal(...))` para el texto.

### 4. Salir pronto en lugar de anidar

Cada `if` dentro de otro es un nivel más de contexto que recordar. Una **cláusula de guarda** trata el caso especial al principio y sale con `return`, y el resto de la función se queda sin sangría:

```js
// Antes: tres niveles para un descuento.
let d = 0;
if (c) {
  if (c === 'VIP') {
    d = t * 0.1;
  } else {
    if (c === 'NUEVO') {
      if (t >= 50) d = 5;
    }
  }
}

// Después: cada caso, una línea.
const discountFor = (subtotal, coupon) => {
  if (coupon === 'VIP') return subtotal * VIP_RATE;
  if (coupon === 'NUEVO' && subtotal >= NEW_CUSTOMER_MINIMUM) return NEW_CUSTOMER_DISCOUNT;
  return 0;
};
```

El `if (c)` de fuera sobraba: si no hay cupón, ninguna de las dos comparaciones se cumple. Con más casos, el siguiente paso es un objeto de estrategias ([teoría 02](02-observer-strategy.md#4-strategy-un-objeto-en-lugar-de-un-switch)).

### 5. Números con nombre

`0.1`, `50`, `5`, `100` y `4.95` son **números mágicos**: valores que significan algo que el código no dice. Con un nombre, el significado queda escrito y el valor se cambia en un solo sitio:

```js
const VIP_RATE = 0.1;
const NEW_CUSTOMER_MINIMUM = 50;
const NEW_CUSTOMER_DISCOUNT = 5;
const FREE_SHIPPING_FROM = 100;
const SHIPPING_COST = 4.95;
```

Las constantes de configuración se escriben en `MAYÚSCULAS_CON_GUIONES` por costumbre, para distinguirlas de las variables. `0` y `1` como «nada» y «uno más» no necesitan nombre.

### 6. Sin efectos escondidos

Una función **pura** devuelve un resultado que solo depende de sus parámetros y no cambia nada fuera, como el reductor de la [semana 16](../../week-16-apis_rest_crud/1-teoria/04-estados-carga.md#2-el-estado-siguiente-con-una-función-pura). Una función con **efectos** escribe en la consola, guarda en `localStorage`, cambia un parámetro o hace una petición. Las dos son necesarias; el problema es mezclarlas sin avisar:

```js
// Escondido: se llama «total», pero además ordena el array que recibe.
const total = (lines) => {
  lines.sort((a, b) => b.price - a.price);
  return lines.reduce((sum, line) => sum + line.price, 0);
};
```

- Quien llama a `total(cart)` no espera que su carrito cambie de orden. `toSorted` en lugar de `sort` lo evita, y la regla `no-param-reassign` de ESLint avisa cuando reasignas un parámetro.
- Junta los cálculos en funciones puras y deja los efectos en los bordes del programa: el código que lee el formulario, el que pinta, el que guarda. Es la separación entre `logic.js` y `main.js` de todos los proyectos del bootcamp.

### 7. Comentarios que dicen por qué

El código dice **qué** hace. Un comentario que lo repite (`// suma 1 a i`) es ruido que además se queda viejo cuando el código cambia. Un buen comentario dice lo que el código no puede decir:

```js
// El descuento puede bajar el pedido de 100 € y quitar el envío gratis: así lo pidió Ventas.
const total = discounted + shippingFor(discounted);
```

Si necesitas un comentario para explicar **qué** hace un trozo, prueba antes a extraerlo a una función cuyo nombre lo diga.

### 8. Sin repetirse, sin pasarse

**DRY** (*Don't Repeat Yourself*) pide que cada idea esté escrita en un solo sitio: si la regla del envío gratis está copiada en tres funciones, un día alguien cambiará dos. Pero dos trozos de código que se parecen no siempre son la misma idea. Juntarlos en una función con un parámetro para cada diferencia crea una función que nadie entiende. Una guía habitual: a la tercera repetición de la misma idea, extrae.

---

## 🧪 Pruébalo

El [lab 03](../2-practicas/lab-03-refactorizar-con-tests/README.md) aplica estas reglas a `calc` una a una, con los tests en verde después de cada cambio.

## ✅ Checklist de aprendizaje

- [ ] Pongo nombres que dicen qué es cada cosa, con verbos para las funciones y preguntas para los booleanos.
- [ ] Divido una función que hace varias cosas en funciones con nombre que hacen una.
- [ ] Uso un objeto de opciones en lugar de muchos parámetros, y dos funciones en lugar de un booleano que cambia el resultado.
- [ ] Cambio el anidamiento por cláusulas de guarda.
- [ ] Doy nombre a los números mágicos.
- [ ] Separo los cálculos puros de los efectos y escribo comentarios que explican por qué.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 📣 Observer y Strategy](02-observer-strategy.md) | [Teoría — 🧱 SOLID](04-solid.md) → |

[↑ Semana 27](../README.md)
