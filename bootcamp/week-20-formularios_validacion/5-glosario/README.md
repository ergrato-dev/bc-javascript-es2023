# 📖 Glosario - Semana 20: Formularios y Validación

Términos clave de esta semana ordenados alfabéticamente.

---

## A

### aria-describedby
Atributo que enlaza un campo con el elemento que lo describe, por su `id`. Un lector de pantalla lee ese texto (por ejemplo, el mensaje de error) después de la etiqueta del campo.

### aria-invalid
Atributo que dice a las tecnologías de asistencia si un campo tiene un error: `aria-invalid="true"`.

## B

### badInput
Indicador de `validity` que se activa cuando el navegador no sabe convertir lo escrito, como `1e` en un campo `type="number"`. En ese caso `value` vale `''`.

## C

### checkValidity()
Método de un campo o de un formulario que devuelve si es válido y lanza `invalid` en cada campo que falla, sin mostrar nada.

### Constraint Validation API
La API de validación del navegador: `validity`, `validationMessage`, `checkValidity()`, `reportValidity()`, `setCustomValidity()` y el evento `invalid`.

## E

### Evento invalid
Evento que recibe cada campo que falla al enviar o al llamar a `checkValidity()`. No sube por el árbol: para escucharlo en el formulario hace falta `{ capture: true }`.

### Evento submit
Evento que lanza un formulario al enviarse, con un botón, con `Enter` o con `requestSubmit()`. `event.submitter` es el botón que lo envió.

## F

### FormData
Objeto con las parejas `[name, value]` que enviaría un formulario. Solo incluye los campos con `name` que no están desactivados, y las casillas marcadas.

### form.elements
Colección de los campos de un formulario, accesibles por su `name` o su `id`.

## N

### novalidate
Atributo de `<form>` que impide que el navegador valide al enviar. Las restricciones siguen disponibles para el CSS y para la API de validación.

## P

### pattern
Atributo con una expresión regular que el valor tiene que cumplir entero, sin `^` ni `$`.

## R

### reportValidity()
Como `checkValidity()`, pero además muestra la burbuja del navegador en el primer campo con error y le lleva el foco.

### requestSubmit()
Método que envía un formulario como si se pulsara un botón: valida antes y lanza `submit`. `form.submit()`, en cambio, no hace ninguna de las dos cosas.

### Restricción
Condición que el valor de un campo tiene que cumplir, expresada con un atributo: `required`, `min`, `max`, `step`, `minlength`, `maxlength`, `pattern` o el `type`.

## S

### setCustomValidity()
Método que marca un campo como inválido con un mensaje propio (`customError`). Con `''` vuelve a ser válido; el error no se quita solo.

### Submitter
El botón que envió el formulario (`event.submitter`). `new FormData(form, submitter)` añade su `name` y su `value`.

## T

### Tocado (campo)
Campo por el que la persona ya ha pasado. Mostrar los errores solo en los campos tocados (y en todos al enviar) evita marcar errores antes de tiempo.

## U

### :user-invalid
Pseudoclase de CSS que marca un campo inválido solo después de que la persona lo haya cambiado y haya salido de él, o tras intentar enviar. `:invalid` lo marca desde el principio.

## V

### validationMessage
El mensaje que mostraría el navegador para un campo, en su idioma, o `''` si es válido.

### validity
Objeto `ValidityState` de cada campo, con un indicador por restricción (`valueMissing`, `typeMismatch`, `tooShort`...) y `valid`, que es `true` si no falla ninguno.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | [📅 Semana 21: Fechas y Tiempos (Date API)](../../week-21-fechas_tiempos_date_api/README.md) → |

[↑ Semana 20](../README.md)
