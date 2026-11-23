# 🗺️ Planificar y presentar

## 🎯 Objetivos

- Repartir un proyecto grande en pasos pequeños que terminan en verde.
- Saber qué hacer cuando un paso se atasca.
- Preparar una presentación de 5 minutos que enseñe la aplicación y explique sus decisiones.

El proyecto final tiene once funciones, tres archivos de tests y una página. Si lo escribes todo y lo ejecutas al final, encontrarás veinte errores a la vez y no sabrás cuál causa cuál. Esta lectura va de cómo evitarlo, y de cómo contar después lo que has hecho.

---

## 📋 Contenido

### 1. Antes de escribir: 30 minutos de plan

Lee el [README del proyecto](../3-proyecto/README.md) entero antes de tocar el código, y después:

1. **Lee los requisitos.** La lista «✅ Requisitos verificables» dice qué comprueba `verificar-semana.sh`. Cada requisito es una tarea con un final claro.
2. **Lee lo que ya está escrito.** `main.js` y `view.js` llaman a tus funciones: ahí ves con qué datos las llaman y qué esperan recibir. `server.js` dice qué responde la API.
3. **Escribe tu lista de tareas.** Una línea por función, en el orden de los pasos del README, con un tiempo estimado. Por ejemplo:

   ```text
   [ ] data.js con mi dominio (20 min)
   [ ] validate + 5 tests (30 min)
   [ ] filterItems + 4 tests (20 min)
   ...
   ```

4. **Decide el catálogo.** Los campos de `FIELDS` (al menos uno `number`, para ordenar y resumir) y 8 fichas de `SEED` reales de tu dominio.

Al terminar cada tarea, apunta cuánto tardaste de verdad. Si a mitad de la semana vas el doble de lento de lo previsto, es mejor saberlo el martes que el viernes.

### 2. Pasos pequeños, siempre en verde

El orden de trabajo para cada función es el de la [semana 26](../../week-26-testing_vitest_parte_2/1-teoria/04-tdd.md):

1. Cambia un `it.todo` por un test de verdad. Ejecuta `pnpm test`: falla (rojo).
2. Escribe el código mínimo para que pase (verde).
3. Mejora nombres y estructura sin romper el test (refactorizar). Ejecuta `pnpm lint`.
4. Siguiente caso.

Cuando una función tiene todos sus casos, ejecuta `pnpm check` en tu proyecto y, desde la raíz del repositorio del bootcamp, las comprobaciones:

```bash
PROYECTO=~/js-proyecto-final ./scripts/verificar-semana.sh 28
```

No pases a la siguiente función con la anterior en rojo. Un error que dejas atrás aparece después, mezclado con otros, en un sitio que ya no recuerdas.

### 3. Cuando un paso se atasca

| Síntoma | Qué hacer |
|---|---|
| Un test falla y no ves por qué | Lee la diferencia entre `Expected` y `Received` línea a línea. Si hace falta, añade un `console.log` dentro de la función, ejecuta solo ese test con `pnpm test -t 'nombre del test'` y quítalo después |
| ESLint dice que una función es demasiado larga o compleja | Saca una parte con nombre: una función que calcula un valor, una tabla en lugar de varios `if`. No desactives la regla |
| La comprobación falla pero tus tests pasan | Tus tests no cubren ese caso. Lee la descripción de la comprobación, escribe un test que la reproduzca y arregla el código |
| La página no se ve bien pero los tests pasan | Abre la consola de las DevTools. Casi siempre es una función que devuelve `undefined` o un dato con otra forma |
| Llevas más de 30 minutos en lo mismo | Para. Explica el problema por escrito en tres líneas, como si se lo contaras a otra persona. Muchas veces la respuesta aparece al escribirlo; si no, ya tienes la pregunta para el instructor |

### 4. La presentación: 5 minutos

Al final de la semana enseñas el proyecto en 5 minutos. No es un recorrido por el código: es contar qué hace la aplicación y por qué está hecha así.

| Tiempo | Qué enseñas |
|---|---|
| 1 min | **La aplicación funcionando** con tu catálogo: buscar, ordenar por un campo y luego al revés, cambiar de página, crear una ficha con un error de validación y después bien, borrarla |
| 1 min | **La arquitectura:** qué hace cada módulo y el camino de una acción, con el [diagrama](02-arquitectura-final.md) |
| 2 min | **Dos decisiones con su porqué.** Elige dos: un patrón que usaste y qué ganaste, una función que ESLint te obligó a dividir, un caso límite que encontró un test, por qué la API recibe `fetch` |
| 1 min | **`pnpm check` en verde** y la salida de `verificar-semana.sh 28` |

Prepara la página abierta con el servidor en marcha y la terminal en la carpeta del proyecto antes de empezar. Ensaya una vez con reloj: 5 minutos pasan rápido.

Las preguntas que suele hacer el instructor después son del estilo de «¿qué pasaría si...?»: si la API tardara 10 segundos, si hubiera 100 000 fichas, si quisieras ordenar por dos campos. No hace falta tener la respuesta escrita; sí saber qué parte del código cambiaría.

---

## ✅ Resumen

- Lee los requisitos y el código ya escrito antes de empezar, y escribe una lista de tareas con tiempos.
- Una función cada vez, test a test, y no pasas a la siguiente con la anterior en rojo.
- Si llevas 30 minutos atascado, escribe el problema en tres líneas antes de seguir.
- En la presentación: la aplicación funcionando, la arquitectura, dos decisiones con su porqué y `pnpm check` en verde, en 5 minutos.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🏗️ Arquitectura de la aplicación final](02-arquitectura-final.md) | [Índice de labs](../2-practicas/README.md) → |

[↑ Semana 28](../README.md)
