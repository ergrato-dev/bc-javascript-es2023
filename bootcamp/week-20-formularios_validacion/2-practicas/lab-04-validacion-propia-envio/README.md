# Lab 04 — Validación propia y envío

## Objetivo

Escribir las reglas de un formulario como datos y comprobarlas con funciones puras, mostrar los errores de forma accesible, decidir cuándo aparece cada error, enviar a un servidor sin envíos dobles y colocar los errores que devuelve el servidor en su campo.

**Tiempo:** 55 min · **Teoría:** [04 - Validación propia y envío](../../1-teoria/04-validacion-propia-envio.md)

## Cómo trabajar

[`starter/index.html`](starter/index.html) tiene un formulario de inscripción a un taller con `novalidate`: el navegador no valida, lo hace tu código. Cada campo tiene su párrafo de error enlazado con `aria-describedby`. [`starter/main.js`](starter/main.js) tiene 6 pasos dentro de la función `async` `main`. Arriba están `wait` y `send`, un servidor simulado que tarda 300 ms, cuenta las peticiones en `requests` y rechaza el correo `ana@acuario.es` porque ya está inscrito.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Los pasos van en orden: cada uno usa las funciones de los anteriores, así que descomenta del 1 en adelante. Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados.

---

## Paso 1: Las reglas como datos

`FIELDS` describe cada campo con sus reglas, y `checkField` devuelve el primer error de un valor o `null`. Un campo opcional vacío (el carné) no tiene error: la función sale antes de mirar el resto. El correo pide un punto en el dominio, más que `type="email"`. `pattern` se ancla con `^(?:...)$` para que encaje entero.

```text
--- Paso 1: checkField ---
  visitor = "": Rellena este campo.
  visitor = "A": Escribe al menos 2 caracteres.
  visitor = "Ana": sin error
  email = "ana@acuario": Escribe un correo como nombre@ejemplo.com.
  tickets = 0: El mínimo es 1.
  tickets = 6: El máximo es 4.
  card = "": sin error
  card = "AC-12345": Escribe AC- y cuatro cifras, como AC-0420.
```

`checkField` no usa el DOM: la podrías copiar a un archivo y probarla con Node.

## Paso 2: Leer y validar el formulario

`readValues` convierte el `FormData` en un objeto: quita los espacios de los extremos y convierte las plazas en número solo si hay algo escrito. `validate` aplica `checkField` a cada campo y se queda con los errores.

```text
--- Paso 2: readValues y validate ---
  values: {"visitor":"A","email":"","tickets":6,"card":""}
  validate: {"valid":false,"errors":{"visitor":"Escribe al menos 2 caracteres.","email":"Rellena este campo.","tickets":"El máximo es 4."}}
```

## Paso 3: Mostrar los errores

`render` recibe un objeto de errores y, para cada campo, escribe su mensaje (o lo vacía) y marca `aria-invalid`. Con el formulario vacío fallan los tres campos obligatorios. Al final, `render({})` lo limpia todo.

```text
--- Paso 3: render accesible ---
  Con aria-invalid: visitor, email, tickets
  Texto de #email-error: Rellena este campo.
```

Con solo los pasos 1 a 3 descomentados, comenta `render({})` y verás los tres errores en la página. Un lector de pantalla, al llegar a **Correo**, anuncia que no es válido y lee el mensaje enlazado con `aria-describedby`.

## Paso 4: Cuándo mostrar cada error

`touched` guarda los campos por los que la persona ya ha pasado, y `submitted` si ya intentó enviar. `refresh` valida todo pero solo muestra los errores de los campos tocados, o todos tras intentar enviar. El listener de `focusout` (que sube, a diferencia de `blur`) marca el campo como tocado; el de `input` actualiza el error de un campo ya tocado.

```text
--- Paso 4: Tocado, al escribir y al enviar ---
  Escribe «A» sin salir: {}
  Sale del campo: {"visitor":"Escribe al menos 2 caracteres."}
  Escribe «An»: {}
  Intenta enviar: email, tickets
```

Mientras escribe la primera letra no hay error; al salir del campo, aparece; al corregirlo, desaparece en la misma tecla; al enviar, salen los de los campos que no tocó. Pruébalo en la página: escribe una letra en **Nombre** y pulsa `Tab`.

## Paso 5: Enviar una sola vez

El listener de `submit` valida y, si hay errores, los muestra todos y lleva el foco al primero. Si los datos son válidos, desactiva el botón, cambia su texto y espera a `send`; el `finally` lo reactiva haya ido bien o mal. El paso envía primero el formulario vacío y después dos veces seguidas con datos correctos: la segunda se ignora porque `sending` sigue a `true`.

```text
--- Paso 5: Sin envíos dobles ---
  submit: 3 errores, no se envía
  submit: ya hay un envío en marcha, se ignora
  Botón desactivado: true · «Enviando…»
  Respuesta: {"ok":true}
  Peticiones al servidor: 1 · botón desactivado: false
```

Un botón desactivado no basta: `requestSubmit()` (y `Enter` en un campo) envía igual. Por eso la variable `sending`.

## Paso 6: Errores del servidor y después de enviar

`fromServer` convierte la lista de errores del servidor en el mismo objeto que da `validate`, así que `render` los muestra igual. Con un error, el formulario **conserva lo escrito**. Con la respuesta correcta, avisa en `#status`, vacía el formulario y olvida los campos tocados, para que no aparezcan errores en el formulario recién vacío.

```text
--- Paso 6: Respuesta del servidor ---
  Revisa los campos marcados.
  Texto de #email-error: Ese correo ya está inscrito.
  ¿Se conserva lo escrito? Luis
  Inscripción hecha para eva@acuario.es.
  Tras el envío correcto · visitor: "" · errores visibles: 0

✅ Lab completado.
```

El mensaje de estado se escribe antes de `form.reset()`: después, el correo ya estaría vacío.

---

## Comprobación

1. En el paso 4, cambia `focusout` por `blur`. ¿Se marca el campo como tocado al salir? ¿Por qué? (Pista: [semana 18](../../../week-18-event_handling_avanzado/1-teoria/02-propagacion.md)).
2. En el paso 5, quita la comprobación de `sending`. ¿Cuántas peticiones llegan al servidor? ¿Qué pasaría en una inscripción real?
3. Haz que `send` lance un error (`throw new Error('Sin red')`) en lugar de devolver una respuesta. ¿Se reactiva el botón? ¿Qué ve la persona? Añade un `catch` que escriba «No se pudo enviar. Inténtalo de nuevo.» en `#status`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — La API de validación](../lab-03-api-validacion/README.md) | [Proyecto — Formulario de inscripción](../../3-proyecto/README.md) → |

[↑ Semana 20](../../README.md)
