// Lógica del formulario de inscripción: lee el formulario, comprueba sus reglas, decide qué
// errores se ven y trata la respuesta del servidor. Ninguna función usa el DOM: reciben un
// FormData, la lista de campos de data.js u objetos simples, así que se pueden probar con
// Node (scripts/verificar-semana.sh 20) y main.js solo pinta lo que devuelven.
//
// Un campo (field) de FIELDS es un objeto { name, label, type, ...reglas }:
// - type: 'text', 'email', 'number', 'textarea', 'select', 'checkbox' (una casilla)
//   o 'checkboxes' (varias casillas con el mismo name, con sus valores en options).
// - Reglas opcionales: required, minLength, maxLength, min, max, pattern (texto de una
//   expresión regular, sin ^ ni $) con patternMessage, options (en select y checkboxes),
//   minChecked (en checkboxes) y sameAs (el name de otro campo que tiene que coincidir).

// Un correo con algo antes y después de la @ y un punto en el dominio, sin espacios.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Convierte un FormData en un objeto con una propiedad por campo, con su tipo:
// - checkbox: true si está en el FormData, false si no.
// - checkboxes: el array de valores marcados (getAll), quizá vacío.
// - number: null si está vacío; si no, Number(texto) (NaN si no es un número).
// - El resto: el texto sin espacios en los extremos ('' si falta).
// Ejemplo: readValues(data, [{ name: 'age', type: 'number' }]) → { age: 12 }
export const readValues = (formData, fields) => {
  // TODO
};

// Devuelve el primer error del campo, o null si no tiene. values es el objeto de readValues
// (hace falta entero para sameAs). Comprueba en este orden y devuelve el primer mensaje:
// - checkbox: si es required y no está marcada, 'Marca esta casilla para continuar.'
// - checkboxes: menos de minChecked, `Elige al menos ${minChecked}.`; un valor que no está
//   en options, 'Elige una de las opciones.'
// - Vacío ('' o null): si es required, 'Rellena este campo.'; si no, null (sin mirar más).
// - number: NaN, 'Escribe un número.'; menor que min, `El mínimo es ${min}.`;
//   mayor que max, `El máximo es ${max}.`
// - email: no encaja con EMAIL, 'Escribe un correo como nombre@ejemplo.com.'
// - minLength: `Escribe al menos ${minLength} caracteres (llevas ${n}).`
// - maxLength: `Escribe como máximo ${maxLength} caracteres (llevas ${n}).`
// - pattern: no encaja entero, patternMessage (o 'El formato no es válido.' si no tiene).
// - options (select): un valor que no está en options, 'Elige una de las opciones.'
// - sameAs: distinto de values[sameAs], 'Los dos valores no coinciden.'
export const checkField = (field, values) => {
  // TODO
};

// Comprueba todos los campos. Devuelve { valid, errors }: errors tiene una propiedad por
// cada campo con error (name → mensaje), en el orden de fields; valid es true si no hay ninguno.
export const validate = (fields, values) => {
  // TODO
};

// Los atributos HTML que main.js pone al control del campo, como textos:
// - Siempre id y name (el name del campo) y 'aria-describedby' (`${name}-error`).
// - type: el del campo en text, email, number y checkbox; nada en textarea, select y checkboxes.
// - required: '' si el campo es required, salvo en checkboxes (el HTML no sabe pedir «al menos N»).
// - minlength, maxlength, min, max y pattern: el valor de la regla, en texto, si la tiene.
// Ejemplo: toAttributes({ name: 'age', type: 'number', required: true, min: 8 })
//   → { id: 'age', name: 'age', 'aria-describedby': 'age-error', type: 'number', required: '', min: '8' }
export const toAttributes = (field) => {
  // TODO
};

// Recuerda qué campos ha tocado la persona y si ya intentó enviar. Devuelve un objeto con:
// - touch(name): marca el campo como tocado.
// - isTouched(name): si está tocado.
// - submit(): marca que se intentó enviar.
// - visible(errors): un objeto nuevo solo con los errores de los campos tocados, o todos
//   si ya se intentó enviar.
// - reset(): olvida los campos tocados y el intento de envío.
export const createFormState = () => {
  // TODO
};

// El resumen de errores que se muestra arriba del formulario: un array de { name, text } en
// el orden de fields, solo con los campos que tienen error, con text = `${label}: ${mensaje}`.
// Ejemplo: summarize([{ name: 'age', label: 'Edad' }], { age: 'El mínimo es 8.' })
//   → [{ name: 'age', text: 'Edad: El mínimo es 8.' }]
export const summarize = (fields, errors) => {
  // TODO
};

// Convierte la respuesta del servidor en { status, errors }:
// - { ok: true }: { status: 'ok', errors: {} }.
// - { ok: false, errors: [{ field, message }, ...] }: { status: 'invalid', errors } con
//   errors como el de validate (field → message).
// - Cualquier otra cosa (null, sin ok, errors que no es un array): { status: 'error', errors: {} }.
export const fromServer = (response) => {
  // TODO
};

// Envuelve send (una función async que manda los valores al servidor) para que no haya
// envíos dobles. Devuelve una función async submit(values) que:
// - Si ya hay un envío en marcha, no llama a send y devuelve { status: 'busy', errors: {} }.
// - Si no, llama a send(values) y devuelve fromServer(respuesta).
// - Si send lanza un error, devuelve { status: 'error', errors: {} }.
// Al terminar, haya ido bien o mal, permite un envío nuevo.
export const createSubmitter = (send) => {
  // TODO
};
