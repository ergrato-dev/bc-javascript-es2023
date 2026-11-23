// Datos del formulario. Cámbialos por los de tu dominio (paso 2 del README).
// Las reglas de cada campo están explicadas al principio de src/logic.js.

export const APP = {
  title: 'Taller de observación del planetario',
  intro: 'Apúntate a una noche de observación con los telescopios del planetario.',
  submitLabel: 'Inscribirme',
};

export const FIELDS = [
  { name: 'fullName', label: 'Nombre y apellidos', type: 'text', required: true, minLength: 3, maxLength: 60 },
  { name: 'email', label: 'Correo', type: 'email', required: true },
  { name: 'confirmEmail', label: 'Repite el correo', type: 'email', required: true, sameAs: 'email' },
  { name: 'age', label: 'Edad', type: 'number', required: true, min: 8, max: 99 },
  {
    name: 'session',
    label: 'Sesión',
    type: 'select',
    required: true,
    options: ['Viernes 21:00', 'Sábado 21:00', 'Sábado 23:00'],
  },
  {
    name: 'targets',
    label: 'Qué quieres observar',
    type: 'checkboxes',
    options: ['Luna', 'Planetas', 'Cúmulos de estrellas', 'Galaxias'],
    minChecked: 1,
  },
  {
    name: 'memberCard',
    label: 'Carné de socio (opcional)',
    type: 'text',
    pattern: 'PL-\\d{4}',
    patternMessage: 'Escribe PL- y cuatro cifras, como PL-0042.',
  },
  { name: 'notes', label: 'Comentarios (opcional)', type: 'textarea', maxLength: 200 },
  { name: 'rules', label: 'Acepto las normas del planetario', type: 'checkbox', required: true },
];

// Correos que el servidor simulado de main.js da por ya inscritos.
export const TAKEN_EMAILS = ['ana@planetario.es', 'luis@planetario.es'];
