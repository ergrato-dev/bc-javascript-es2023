# Lab 02 — Promesas básicas

## Objetivo

Crear promesas con `new Promise`, ver sus estados, consumirlas con `.then()`, `.catch()` y `.finally()`, crear promesas ya resueltas con `Promise.resolve()` y `Promise.reject()`, y convertir una función con callback *error-first* en una que devuelve una promesa.

**Tiempo:** 50 min · **Teoría:** [03 - Promises: fundamentos](../../1-teoria/03-promises-fundamentos.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-13-programacion_asincronica_callbacks_promises/2-practicas/lab-02-promises-basicas
node starter/index.js
```

Igual que en el [lab 01](../lab-01-callbacks/README.md), cada paso termina con `await wait(...)` para que su salida quede junta. Ahora ya puedes leer `wait`: devuelve una promesa que se cumple cuando vence el `setTimeout`. Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: tu primera promesa

Una promesa es un objeto que representa un resultado que todavía no existe. `new Promise(executor)` ejecuta `executor` **en el momento** y le pasa dos funciones: `resolve(valor)` la cumple y `reject(error)` la rechaza. Mientras ninguna de las dos se llama, la promesa está **pendiente** (`<pending>`).

`.then(callback)` registra qué hacer con el valor cuando llegue. Si la promesa ya está cumplida, el callback igualmente espera a la cola de microtareas del [lab 01](../lab-01-callbacks/README.md), paso 3.

```text
--- Paso 1: Primera promesa ---
Recién creada: Promise { <pending> }
then recibe: ¡Promesa cumplida! 🎉
Después: Promise { '¡Promesa cumplida! 🎉' }
```

Los tres estados están en el diagrama [`03-promise-states.svg`](../../0-assets/03-promise-states.svg).

## Paso 2: una promesa que se rechaza

`checkTicket` cumple la promesa si el código empieza por `PLA-` y la rechaza con un `Error` si no. `.catch(callback)` recibe ese error. A diferencia del callback *error-first*, el éxito y el error van por caminos separados: el `.then` no tiene que comprobar nada.

```text
--- Paso 2: Promesa rechazada ---
✅ Entrada PLA-042 válida
❌ Entrada XYZ-001 no reconocida
```

## Paso 3: `.finally()`

`.finally(callback)` se ejecuta tanto si la promesa se cumple como si se rechaza, y no recibe ningún valor. Es el sitio para quitar un indicador de carga.

```text
--- Paso 3: .finally() ---
⏳ Cargando datos...
✅ Datos cargados
🏁 Carga finalizada
⏳ Cargando datos...
❌ Error al cargar
🏁 Carga finalizada
```

## Paso 4: `Promise.resolve()` y `Promise.reject()`

Crean una promesa ya cumplida o ya rechazada, sin `executor`. Sirven cuando una función tiene que devolver una promesa pero el valor ya lo tienes. Aun así, sus callbacks son microtareas: la línea síncrona sale primero.

```text
--- Paso 4: Promise.resolve/reject ---
Esta línea sale primero
Resuelta: Valor inmediato
Rechazada: Error inmediato
```

## Paso 5: simular una petición HTTP

`fetchVisitor` imita una petición a un servidor: tarda 100 ms y devuelve un objeto o un error. Las dos peticiones salen a la vez (los dos `📡` se imprimen antes que cualquier respuesta) y cada una termina por su camino.

```text
--- Paso 5: Petición simulada ---
📡 Pidiendo el visitante 123...
📡 Pidiendo el visitante -1...
Visitante: { id: 123, name: 'Ana García', visits: 3 }
Error: Id de visitante no válido: -1
```

## Paso 6: una promesa solo se resuelve una vez

El primer `resolve` o `reject` decide el estado para siempre: las llamadas siguientes se ignoran sin error. Pero llamar a `resolve` **no detiene** el `executor`: el `console.log` de después se ejecuta.

- **Qué:** una promesa cumplida o rechazada ya no cambia.
- **Para qué:** quien recibe la promesa sabe que el valor que le llega es el definitivo.
- **Impacto:** si después de `reject(...)` no hay nada más que hacer, escribe `return reject(...)` para no seguir ejecutando código por error.

```text
--- Paso 6: Se resuelve una vez ---
El ejecutor sigue corriendo después de resolve
Valor: primer resolve
```

## Paso 7: de callback a promesa

`readFile` envuelve a `readFileCallback` en una promesa: si el callback recibe un error, llama a `reject`; si no, a `resolve` con el contenido. Es el patrón que usarás en el proyecto para convertir un servicio con callback en uno con promesa.

```text
--- Paso 7: Callback a promesa ---
✅ Contenido de notas.txt
❌ Formato no admitido: foto.png

✅ Lab completado.
```

---

## Comprobación

1. En el paso 2, borra el `.catch(...)` de `checkTicket('XYZ-001')` y ejecuta. Node se detiene con el error y no llega al paso 3:

   ```text
   Error: Entrada XYZ-001 no reconocida
       at Timeout._onTimeout (...)
   ```

   ¿Qué pasa con una promesa rechazada que nadie maneja?
2. En el paso 1, ¿por qué `Recién creada` sale antes que `then recibe` aunque el `.then()` se escribe antes del `await`?
3. Escribe `wait` sin mirarla: una función que recibe `ms` y devuelve una promesa que se cumple pasados `ms` milisegundos. Pruébala con `wait(200).then(() => console.log('200 ms después'))`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Callbacks y event loop](../lab-01-callbacks/README.md) | [Lab 03 — Encadenar promesas](../lab-03-promise-chaining/README.md) → |

[↑ Semana 13](../../README.md)
