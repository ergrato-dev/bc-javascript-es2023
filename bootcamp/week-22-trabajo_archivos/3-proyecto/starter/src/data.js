// Datos del importador. Cámbialos por los de tu dominio (paso 2).
//
// APP describe la página y las reglas de los archivos:
//   - title, intro: el título y el texto de presentación
//   - accept: las extensiones que se admiten; maxBytes: el tamaño máximo de cada archivo
//   - key: el name del campo que identifica cada registro (si se repite, se actualiza)
//   - exportName: el nombre, sin extensión, de los archivos exportados
export const APP = {
  title: 'Importador de sesiones del planetario',
  intro: 'Reúne las sesiones de la programación desde las hojas de cálculo de cada sala y descárgalas en un solo archivo.',
  accept: ['.csv', '.json'],
  maxBytes: 50 * 1024,
  key: 'id',
  exportName: 'sesiones-planetario',
};

// Las columnas de cada registro, en el orden de la tabla y de la exportación:
//   - name: el nombre de la columna en el CSV y de la propiedad en el JSON (camelCase, en inglés)
//   - label: el título de la columna en la tabla
//   - type: 'text' o 'number'; required: si puede quedar vacío
export const FIELDS = [
  { name: 'id', label: 'Código', type: 'text', required: true },
  { name: 'title', label: 'Sesión', type: 'text', required: true },
  { name: 'room', label: 'Sala', type: 'text', required: true },
  { name: 'seats', label: 'Plazas', type: 'number', required: true },
  { name: 'minutes', label: 'Minutos', type: 'number', required: false },
];
