# Lab 02 — Errores con async/await

## Objetivo

Capturar errores asíncronos con `try`/`catch`/`finally`, distinguir tipos de error con `instanceof`, relanzarlos con `cause`, seguir adelante cuando falla una operación de varias, saber cuándo hace falta `return await` y reintentar una operación que falla.

**Tiempo:** 55 min · **Teoría:** [03 - Manejo de errores](../../1-teoria/03-error-handling.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-14-async_await/2-practicas/lab-02-error-handling
node starter/index.js
```

Todos los pasos usan `checkTicket(code)`, una función `async` que tarda 30 ms y lanza un `Error` si el código no empieza por `PLA-`. Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: `try`/`catch` con `await`

Cuando la promesa que esperas con `await` se rechaza, `await` **lanza** el error en esa línea, como un `throw`. Por eso el `try`/`catch` de la [semana 11](../../../week-11-manejo_errores_moderno/README.md) vuelve a servir: el `.catch()` de la semana 13 pasa a ser un bloque `catch`.

```text
--- Paso 1: try/catch ---
✅ Entrada PLA-042 válida
❌ Entrada XYZ-001 no reconocida
```

## Paso 2: `finally`

El bloque `finally` se ejecuta siempre, con éxito o con error, e incluso cuando el `try` o el `catch` hacen `return`. Por eso `🏁` sale antes que el valor devuelto: la función no termina hasta que acaba `finally`.

```text
--- Paso 2: finally ---
⏳ Cargando...
🏁 Indicador de carga oculto
Entrada PLA-100 válida
⏳ Cargando...
🏁 Indicador de carga oculto
Sin datos (Entrada ABC-100 no reconocida)
```

El diagrama [`03-try-catch-finally.svg`](../../0-assets/03-try-catch-finally.svg) dibuja los dos caminos.

## Paso 3: errores propios e `instanceof`

`NotFoundError` extiende `Error` y guarda el `id` que no se encontró. En el `catch`, `instanceof` separa el error esperado (la sesión no existe) del inesperado (un `TypeError` por un id mal escrito), para tratarlos distinto.

```text
--- Paso 3: Errores propios ---
✅ Viaje a Saturno
🔍 NotFoundError: No existe la sesión 9
💥 TypeError: El id debe ser un número
```

## Paso 4: relanzar con `cause`

`reserveSeat` captura el error técnico y lanza uno que explica qué no se pudo hacer, con el original en `cause`. Quien llama ve el mensaje útil y puede llegar al detalle.

```text
--- Paso 4: cause ---
Error: No se pudo reservar la butaca
Causa: Entrada MAL-7 no reconocida
```

## Paso 5: un fallo no tiene por qué parar todo

Con el `try`/`catch` **dentro** del bucle, cada entrada se comprueba por separado: la que falla se anota y el bucle sigue. Si el `try` envolviera todo el `for`, el primer error saltaría al `catch` y las entradas siguientes no se comprobarían.

```text
--- Paso 5: Errores por operación ---
[
  'Entrada PLA-1 válida',
  '(saltada) Entrada BAD-2 no reconocida',
  'Entrada PLA-3 válida'
]
```

## Paso 6: `return` sin `await` dentro de `try`

`withoutAwait` devuelve la promesa sin esperarla: la función sale del `try` antes de que la promesa se rechace, y su `catch` nunca se ejecuta. El error lo recibe quien llama. Con `return await`, el rechazo ocurre dentro del `try` y lo captura la propia función.

```text
--- Paso 6: return vs return await ---
return await: capturado dentro
return: el error salió de la función → Entrada MAL-1 no reconocida
```

Fuera de un `try`, `return promesa` y `return await promesa` dan el mismo resultado.

## Paso 7: reintentar

`unstableService` falla las dos primeras llamadas. `retry` la llama hasta `attempts` veces: si responde, `return await task()` sale del bucle con el valor; si falla, espera `delayMs` y lo vuelve a intentar. En el último intento relanza el error.

```text
--- Paso 7: Reintentar ---
Intento 1: Fallo en la llamada 1
Intento 2: Fallo en la llamada 2
✅ Respuesta en la llamada 3
Intento 1: Fallo en la llamada 1
Intento 2: Fallo en la llamada 2
❌ Se acabaron los intentos: Fallo en la llamada 2

✅ Lab completado.
```

En el proyecto escribirás un `retry` parecido que, al rendirse, lanza un error nuevo con el último fallo en `cause`.

---

## Comprobación

1. En el paso 1, borra el `try`/`catch` de `showTicket` y ejecuta. ¿En qué línea se detiene Node y qué pasos ya no se ejecutan?
2. En el paso 5, mueve el `try` para que envuelva el `for` entero. ¿Qué contiene ahora `report`?
3. Cambia `retry` para que espere el doble cada vez (50, 100, 200 ms...). Con `retry(unstableService, 5, 50)` la salida no cambia, pero las esperas entre intentos suman 150 ms en lugar de 100 ms.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Funciones async y await](../lab-01-async-basico/README.md) | [Lab 03 — En orden o a la vez](../lab-03-parallel-vs-sequential/README.md) → |

[↑ Semana 14](../../README.md)
