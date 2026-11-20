// Lógica del registro: funciones puras, sin DOM.
// main.js las importa para pintar la página y scripts/verificar-semana.sh las comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md. Todas reciben texto y devuelven un valor nuevo.

// TODO paso 3: quita los espacios de los extremos y deja un solo espacio donde haya varios seguidos.
// normalizeText('  Taller   de \n telescopios ') → 'Taller de telescopios'
export const normalizeText = (text) => {
  // TODO
};

// TODO paso 4: devuelve el código de la ficha: el prefijo, un guion y el número con 4 cifras.
// formatCode('PLA', 7) → 'PLA-0007'
export const formatCode = (prefix, number) => {
  // TODO
};

// TODO paso 4: true si code es exactamente el prefijo, un guion y 4 dígitos.
// isValidCode('PLA-0007', 'PLA') → true · isValidCode('PLA-7', 'PLA') → false
export const isValidCode = (code, prefix) => {
  // TODO
};

// TODO paso 5: true si email tiene la forma usuario@dominio.ext.
// isValidEmail('cupula@planetario.org') → true · isValidEmail('cupula@planetario') → false
export const isValidEmail = (email) => {
  // TODO
};

// TODO paso 6: convierte 'AAAA-MM-DD' en 'DD/MM/AAAA'. Si el texto no tiene esa forma, devuelve null.
// formatDate('2025-03-14') → '14/03/2025' · formatDate('') → null
export const formatDate = (isoDate) => {
  // TODO
};

// TODO paso 7: devuelve las etiquetas (#palabra) del texto, sin '#', en minúsculas, sin repetir y en orden de aparición.
// extractTags('Desde la #Cúpula. #luna #cúpula') → ['cúpula', 'luna']
export const extractTags = (text) => {
  // TODO
};

// TODO paso 8: función tag que escapa &, <, >, " y ' en los valores interpolados; el texto fijo queda igual.
// safeHtml`<p>${'<b>'}</p>` → '<p>&lt;b&gt;</p>'
export const safeHtml = (strings, ...values) => {
  // TODO
};
