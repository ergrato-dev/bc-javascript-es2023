# Lab 03 — La API de validación

## Objetivo

Preguntar a cada campo qué restricción falla con `validity`, comprobar el formulario sin enviarlo, escuchar el evento `invalid`, añadir una regla propia con `setCustomValidity()` y mostrar tus propios mensajes junto a cada campo al enviar.

**Tiempo:** 55 min · **Teoría:** [03 - La API de validación](../../1-teoria/03-constraint-validation.md)

## Cómo trabajar

[`starter/index.html`](starter/index.html) tiene un formulario para recibir avisos del acuario. Cada campo tiene debajo un párrafo vacío para su error (`visitor-error`, `email-error`...), enlazado con `aria-describedby`. Los estilos marcan en rojo los campos con `aria-invalid="true"`. [`starter/main.js`](starter/main.js) tiene 6 pasos. Arriba están `FLAGS`, los nombres de los indicadores de `validity`, y `failing`, que devuelve los que están a `true`.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Los pasos 1 a 5 funcionan solos. El 6 usa `showError` del paso 5 y `checkSame` del paso 4: descomenta antes esos dos. Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados.

---

## Paso 1: `validity`

Cada valor de **Entradas** activa un indicador distinto: vacío, `valueMissing`; por debajo de `min`, `rangeUnderflow`; por encima de `max`, `rangeOverflow`; con decimales, `stepMismatch`. Un valor correcto no activa ninguno y `valid` es `true`.

```text
--- Paso 1: Qué restricción falla ---
  tickets = "" · valid false · ["valueMissing"]
  tickets = "0" · valid false · ["rangeUnderflow"]
  tickets = "12" · valid false · ["rangeOverflow"]
  tickets = "2.5" · valid false · ["stepMismatch"]
  tickets = "4" · valid true · []
  email = "ana" · ["typeMismatch"]
```

`validity` dice **qué** falla, sin depender del idioma del navegador. Es la base para escribir tus mensajes.

## Paso 2: `checkValidity()` y `reportValidity()`

Los dos dicen si el campo (o el formulario entero) es válido. `checkValidity()` no cambia nada en la página: el foco sigue en el `<body>`. `reportValidity()` además muestra la burbuja del navegador en el primer campo con error y le lleva el foco.

```text
--- Paso 2: Comprobar sin enviar ---
  visitor.checkValidity(): false
  form.checkValidity(): false · foco en: BODY
  form.reportValidity(): false · foco en: visitor
```

El paso termina con `visitor.blur()` para quitar el foco. Coméntalo y verás la burbuja junto a **Nombre** al recargar.

## Paso 3: El evento `invalid`

Cada campo que falla recibe `invalid`. El paso pone dos listeners en el formulario: uno normal y otro en fase de captura. Solo llega el de captura, porque `invalid` no sube desde el campo al formulario.

```text
--- Paso 3: invalid no sube ---
  Recibidos en el formulario: visitor, email, confirmEmail, tickets
```

Ninguna entrada empieza por `burbuja:`. Para escuchar `invalid` de todos los campos con un solo listener, usa `{ capture: true }`.

## Paso 4: `setCustomValidity()`

Que los dos correos coincidan no se puede decir con un atributo. `setCustomValidity(mensaje)` marca el campo con `customError`, y su `validationMessage` es tu mensaje. Ese error **no se va solo**: aunque la persona escriba el mismo correo, el campo sigue inválido hasta que llames a `setCustomValidity('')`. Por eso `checkSame` compara en cada `input`, y en los dos campos: cambiar el primer correo también rompe la confirmación.

```text
--- Paso 4: Una regla propia ---
  Con el error · ["customError"] · Los dos correos no coinciden.
  Corregido pero sin quitar el error · valid false
  Tras checkSame · valid true
  Cambia el primer correo · valid false · Los dos correos no coinciden.
```

`email.dispatchEvent(new Event('input'))` simula que la persona ha escrito, porque un valor puesto desde código no lanza `input`.

## Paso 5: Mensajes propios

`messageFor` elige un mensaje según el primer indicador que falla, y `showError` lo escribe en el párrafo del campo con `textContent` y marca `aria-invalid`. Con `customError`, el mensaje es el de `setCustomValidity`.

```text
--- Paso 5: Tus mensajes junto a cada campo ---
  visitor: Rellena este campo.
  email: Escribe un correo como nombre@ejemplo.com.
  tickets: Como máximo 10.
  aria-invalid de email: true
```

Mira la página: los tres campos tienen el borde rojo y su mensaje debajo. Los mensajes son tuyos, así que son iguales en todos los navegadores.

## Paso 6: Todo junto al enviar

Con `noValidate`, el navegador deja que llegue `submit` y el listener decide: muestra el error de cada campo, lleva el foco al primero que falla y escribe un resumen en `#status`, que tiene `role="status"` para que lo lea también un lector de pantalla. Con los datos correctos, confirma el envío.

```text
--- Paso 6: Enviar con novalidate y mensajes propios ---
  submit · Campos con errores: 4. · foco en: visitor
  submit · Avisaremos a ana@acuario.es.

✅ Lab completado.
```

Ahora prueba en la página: escribe una letra más en **Repite el correo** y pulsa **Avisarme**. El resumen dice `Campos con errores: 1.` y el foco va a ese campo.

---

## Comprobación

1. En el paso 5, cambia el orden de `messageFor` para que `typeMismatch` vaya antes que `valueMissing`. ¿Cambia algún mensaje? ¿Por qué?
2. Comenta las dos líneas `addEventListener` de `checkSame` en el paso 4. En la página, corrige el segundo correo después de un envío con error. ¿Desaparece el error al volver a enviar? Explica qué falta.
3. En el paso 6, ¿qué ves si quitas `form.noValidate = true`? ¿Se ejecuta el listener de `submit` con datos incorrectos?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Validación con atributos HTML](../lab-02-validacion-html/README.md) | [Lab 04 — Validación propia y envío](../lab-04-validacion-propia-envio/README.md) → |

[↑ Semana 20](../../README.md)
