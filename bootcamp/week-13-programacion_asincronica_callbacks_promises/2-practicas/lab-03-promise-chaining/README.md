# Lab 03 — Encadenar promesas

## Objetivo

Encadenar `.then()` pasando valores y promesas de un paso al siguiente, ver cómo un error salta todos los pasos hasta el `.catch()`, detectar el `return` olvidado y recuperarse de un fallo devolviendo otra promesa desde el `.catch()`.

**Tiempo:** 55 min · **Teoría:** [03 - Promises: fundamentos](../../1-teoria/03-promises-fundamentos.md), sección de encadenamiento

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-13-programacion_asincronica_callbacks_promises/2-practicas/lab-03-promise-chaining
node starter/index.js
```

`wait(ms, value)` cumple la promesa con `value` pasados `ms` milisegundos: imita un servidor que tarda en responder. Cada cadena empieza con `await` para que termine antes del paso siguiente. Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: cadena con valores

`.then()` **devuelve una promesa nueva**, que se cumple con lo que devuelva su callback. Por eso puedes escribir otro `.then()` detrás, y cada uno recibe lo que devolvió el anterior.

```text
--- Paso 1: Cadena simple ---
Valor inicial: 5
Después de x2: 10
Después de +10: 20
Valor final: 10
```

## Paso 2: cadena con promesas

Si el callback de un `.then()` devuelve una **promesa**, el siguiente `.then()` espera a que se cumpla y recibe su valor, no la promesa. Así tres peticiones que dependen una de otra quedan en una lista plana, sin la pirámide del [lab 01](../lab-01-callbacks/README.md), paso 5. Lo dibuja [`04-promise-chaining.svg`](../../0-assets/04-promise-chaining.svg).

```text
--- Paso 2: Cadena con promesas ---
1. Visitante: Ana García
2. Reservas: 2
3. Butacas de la primera reserva: F4, F5
```

## Paso 3: un error salta al `.catch()`

Un rechazo en cualquier punto de la cadena se salta los `.then()` que quedan y llega al primer `.catch()`. Un solo `.catch()` al final cubre todos los pasos. En la segunda ejecución, `Paso C` no llega a empezar.

```text
--- Paso 3: Errores en la cadena ---
Paso A: OK
Paso B: OK
Paso C: OK
✅ Los tres pasos terminaron
Paso A: OK
❌ Error en la cadena: Paso B falló
```

## Paso 4: acumular datos por la cadena

Cada `.then()` solo ve el valor del anterior. Para llegar al final con todo, cada paso devuelve un objeto nuevo con lo que recibió más lo suyo (`{ ...session, profile }`). Cuando el callback solo pasa el valor a otra función, puedes pasar la función directamente: `.then(fetchPreferences)`.

```text
--- Paso 4: Acumular datos ---
Token: abc123
Datos completos: {
  userId: 123,
  token: 'abc123',
  profile: { name: 'Ana' },
  preferences: { theme: 'dark' }
}
```

## Paso 5: el error típico, olvidar el `return`

Sin `return`, el callback devuelve `undefined`: el siguiente `.then()` se ejecuta enseguida con `undefined` y la promesa de `wait(100, 'perfil')` queda suelta, sin que nadie la espere ni capture sus errores.

```text
--- Paso 5: Olvidar el return ---
Sin return llega: undefined
Con return llega: perfil
```

## Paso 6: recuperarse de un error

`.catch()` también devuelve una promesa. Si su callback devuelve un valor o una promesa que se cumple, la cadena **vuelve al camino del éxito**: el `.then()` siguiente recibe el resultado de la caché. El último `.catch()` solo se ejecutaría si la caché también fallara.

```text
--- Paso 6: Recuperarse de un error ---
⚠️ Servidor caído → uso la caché
Resultado: Cartelera guardada en caché
```

## Paso 7: callbacks contra promesas

La misma secuencia de tres peticiones, escrita con callbacks anidados y con una cadena de promesas. El resultado es el mismo; la cadena se lee de arriba abajo y admite un `.catch()` único.

```text
--- Paso 7: Callbacks contra promesas ---
Con callbacks: [ 'F4', 'F5' ]
Con promesas: [ 'F4', 'F5' ]

✅ Lab completado.
```

---

## Comprobación

1. En el paso 3, ¿cuántos `.catch()` necesitarías con callbacks *error-first* para cubrir los tres pasos?
2. En el paso 6, haz que `fetchFromCache` también se rechace con `new Error('Caché vacía')`. Antes de ejecutar, escribe qué dos líneas saldrán.
3. En el paso 2, `getBookings` y `getSeats` tardan 100 ms cada una. ¿Cuánto tarda la cadena entera y por qué no se puede acortar? Compáralo con el paso 1 del [lab 04](../lab-04-promise-combinators/README.md).

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Promesas básicas](../lab-02-promises-basicas/README.md) | [Lab 04 — Combinadores de promesas](../lab-04-promise-combinators/README.md) → |

[↑ Semana 13](../../README.md)
