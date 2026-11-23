# Lab 02 — Validación con atributos HTML

## Objetivo

Probar cada restricción de HTML con valores buenos y malos, ver qué valida el navegador cuando el valor lo pone el código y cuándo lo escribe la persona, enviar un formulario con errores, comparar `:invalid` con `:user-invalid` y desactivar la validación con `novalidate`.

**Tiempo:** 50 min · **Teoría:** [02 - Validación con atributos HTML](../../1-teoria/02-validacion-html.md)

## Cómo trabajar

[`starter/index.html`](starter/index.html) tiene un formulario de socios con una restricción distinta en cada campo; míralo antes de empezar. Sus estilos marcan en rojo los campos `:user-invalid` y en verde los `:user-valid`. [`starter/main.js`](starter/main.js) tiene 6 pasos y una función, `tryValue`, que pone un valor en un campo y muestra si es válido y el mensaje del navegador (`validationMessage`).

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Los pasos 1 a 4 dejan los campos como estaban; el 5 y el 6 envían el formulario. Las salidas de este README se obtuvieron en Chromium en español con todos los pasos descomentados. **Los mensajes son del navegador**: en Firefox, en Safari o en otro idioma verás otras frases, pero los mismos `valid`.

---

## Paso 1: Campos obligatorios

Con `required`, un campo de texto vacío, un `<select>` en la opción de `value=""` y una casilla sin marcar no son válidos. Cada uno tiene su mensaje. Un campo vacío **sin** `required` es válido: es opcional.

```text
--- Paso 1: Campos obligatorios ---
  visitor: valid false · Completa este campo
  zone: valid false · Selecciona un elemento de la lista
  terms: valid false · Selecciona esta casilla de verificación si quieres continuar
  website (opcional y vacío): valid true
¿Formulario válido? false
```

`form.checkValidity()` comprueba todos los campos: basta con que falle uno.

## Paso 2: Correos y direcciones

`type="email"` pide algo con forma de correo: `ana@acuario` vale, aunque no tenga punto. `type="url"` pide la dirección completa, con `https://`. El campo de la web no tiene `required`, así que vacío es válido.

```text
--- Paso 2: Correos y direcciones ---
  email = "ana": NO válido · Incluye un signo "@" en la dirección de correo electrónico. La dirección "ana" no incluye el signo "@".
  email = "ana@acuario": válido
  email = "ana@acuario.es": válido
  website = "acuario.es": NO válido · Introduce una URL
  website = "https://acuario.es": válido
  website = "": válido
```

## Paso 3: Números

`min="1"` y `max="10"` acotan el valor. Sin atributo `step`, el paso es 1: `2.5` no es válido y el mensaje propone los dos enteros más cercanos. Aunque el campo sea de tipo `number`, `value` sigue siendo texto.

```text
--- Paso 3: Números ---
  tickets = "0": NO válido · El valor debe ser superior o igual a 1
  tickets = "12": NO válido · El valor debe ser inferior o igual a 10
  tickets = "2.5": NO válido · Introduce un valor válido. Los dos valores válidos más aproximados son 2 y 3.
  tickets = "3": válido
  tickets.value es string · valueAsNumber: 3
  Escribe 1e en Entradas para ver badInput.
```

Con el campo vacío, escribe `1e` en **Entradas**. Al escribir `1`, la consola muestra `value "1" · badInput false`. Al añadir la `e`, `value ""` y `badInput true`: el navegador no sabe convertir `1e` en número, así que `value` queda vacío aunque el campo tenga texto. Un `value` vacío no siempre significa que la persona no escribió nada.

## Paso 4: Formato y longitud

`pattern` tiene que encajar con el valor **entero**: `AC-12345` falla aunque empiece por `AC-1234`, y `ac-0420` falla porque distingue mayúsculas. Después, el paso pone `"A"` en el nombre desde código: aunque tiene `minlength="2"`, es válido, porque `minlength` solo cuenta lo que escribe la persona.

```text
--- Paso 4: Formato y longitud ---
  card = "AC-12": NO válido · Utiliza un formato que coincida con el solicitado
  card = "AC-12345": NO válido · Utiliza un formato que coincida con el solicitado
  card = "ac-0420": NO válido · Utiliza un formato que coincida con el solicitado
  card = "AC-0420": válido
  visitor = "A" desde código: valid true · tooShort false
  Escribe una letra en Nombre para ver tooShort.
```

Escribe `An` en **Nombre**:

```text
  Escribes «A»: tooShort true · Aumenta la longitud de este texto a 2 caracteres o más (actualmente, el texto tiene 1 carácter).
  Escribes «An»: tooShort false · 
```

Ahora sí cuenta. Sal del campo con `Tab` y bórralo para verlo en rojo. Prueba también a escribir más de 40 caracteres: `maxlength` no deja.

## Paso 5: Enviar con errores

El formulario vacío tiene 5 campos `:invalid` desde que se carga, pero ninguno `:user-invalid`, porque nadie los ha tocado. `requestSubmit()` valida antes de enviar: como hay errores, el navegador cancela el envío (el listener de `submit` no se ejecuta), lleva el foco al primer campo incorrecto y desde ese momento los 5 cuentan como `:user-invalid`.

```text
--- Paso 5: Al enviar ---
Antes de enviar · :invalid 5 · :user-invalid 0
  (no aparece «submit: llegó al listener»: el navegador canceló el envío)
Después · :user-invalid 5 · foco en: visitor
```

Mira la página: los cinco campos tienen ahora el borde rojo. Pulsa **Hacerme socio** y verás la burbuja del navegador junto a **Nombre**.

## Paso 6: `novalidate`

Con `form.noValidate = true` el navegador no valida al enviar: el listener se ejecuta siempre, también con el formulario vacío. Las restricciones siguen ahí: `checkValidity()` sigue diciendo `false` hasta que los datos son correctos. Al final, el paso vuelve a activar la validación.

```text
--- Paso 6: Sin validación del navegador ---
  submit: llegó al listener
  submit con novalidate · ¿válido? false
  submit: llegó al listener
  submit con novalidate · ¿válido? true

✅ Lab completado.
```

Las líneas `submit: llegó al listener` son del listener del paso 5.

---

## Comprobación

1. Añade `step="0.5"` al campo **Entradas** en `index.html`. ¿Qué dice el paso 3 de `2.5`? ¿Y de `2.3`?
2. Cambia el `pattern` del carné por `AC-\d{4}|SOCIO`. ¿Qué valores del paso 4 son válidos? ¿Lo es `SOCIO-1`?
3. Cambia `:user-invalid` por `:invalid` en los estilos y recarga sin pasos descomentados. ¿Qué ve la persona antes de escribir nada? ¿Por qué es peor?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Formularios y FormData](../lab-01-formularios-formdata/README.md) | [Lab 03 — La API de validación](../lab-03-api-validacion/README.md) → |

[↑ Semana 20](../../README.md)
