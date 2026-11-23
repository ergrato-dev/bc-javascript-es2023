// Lógica del centro de avisos: interpreta botones y teclas, cambia la lista de avisos sin
// modificarla y crea los eventos propios de la página. Ninguna función toca el DOM, así que
// se pueden probar con Node (scripts/verificar-semana.sh 18); EventTarget, Event y
// CustomEvent también existen en Node. main.js pone los listeners y pinta la página.
//
// Un aviso es un objeto { id, title, level, read, pinned }:
// - id: entero positivo, sin repetir.
// - level: 'info', 'aviso' o 'urgente'.
// - read: si ya se ha leído. pinned: si está fijado arriba.

// Acciones de los botones de cada aviso (necesitan un id) y de la barra de la lista (no).
export const NOTICE_ACTIONS = ['toggle-read', 'pin', 'dismiss'];
export const LIST_ACTIONS = ['read-all', 'clear-read'];

// Convierte el dataset de un botón en una acción, o devuelve null si no es válida.
// - Recibe { action, id }, los dos como texto, igual que llegan de dataset.
// - Una acción de NOTICE_ACTIONS necesita un id entero positivo: { type, id } con el id
//   como número. Sin id válido, null.
// - Una acción de LIST_ACTIONS ignora el id: { type, id: null }.
// - Cualquier otra acción (o ninguna): null.
// Ejemplo: parseAction({ action: 'pin', id: '3' }) → { type: 'pin', id: 3 }
export const parseAction = ({ action, id } = {}) => {
  // TODO
};

// Devuelve la lista de avisos después de aplicar la acción, sin modificar la que recibe:
// - toggle-read: cambia read del aviso con ese id. pin: cambia su pinned.
// - dismiss: quita el aviso con ese id.
// - read-all: todos con read a true.
// - clear-read: quita los leídos que no están fijados.
// - add: añade action.notice al final.
// Con una acción desconocida, devuelve la misma lista que recibe.
export const applyAction = (notices, action) => {
  // TODO
};

// Cuenta los avisos: { total, unread, pinned, urgent }, donde urgent son los urgentes sin leer.
export const summarize = (notices) => {
  // TODO
};

// Ordena para pintar: primero los fijados, después los no leídos y, dentro de cada grupo,
// el id más alto (el más reciente) primero. No modifica la lista que recibe.
export const sortNotices = (notices) => {
  // TODO
};

// Teclas de los atajos y la acción de cada una.
const SHORTCUTS = {
  j: 'next',
  k: 'prev',
  ArrowDown: 'next',
  ArrowUp: 'prev',
  r: 'toggle-read',
  p: 'pin',
  x: 'dismiss',
  Delete: 'dismiss',
};

// Devuelve la acción del atajo de una pulsación, o null si no es un atajo.
// - Recibe { key, ctrlKey, metaKey, altKey, inField }, donde inField dice si la tecla se
//   pulsó escribiendo en un campo del formulario.
// - null si inField es true o si hay Ctrl, Meta (Cmd) o Alt pulsado: esas teclas son del
//   campo o del navegador. Mayúsculas sí vale.
// - Las teclas de una letra valen en mayúscula y en minúscula: 'R' → 'toggle-read'.
// - Las acciones están en SHORTCUTS; una tecla que no está ahí, null.
export const shortcutFor = ({ key, ctrlKey, metaKey, altKey, inField }) => {
  // TODO
};

// Calcula la posición a la que mover el foco en una lista de `length` elementos.
// - step es 1 (siguiente) o -1 (anterior). Al pasar del último se vuelve al primero, y al revés.
// - current -1 significa que no hay ninguno enfocado: con 1 va al primero; con -1, al último.
// - Con la lista vacía, -1.
// Ejemplo: nextIndex(2, 3, 1) → 0
export const nextIndex = (current, length, step) => {
  // TODO
};

// Crea el evento propio de un tipo de acción: un CustomEvent llamado `notice:${type}`,
// que sube (bubbles) y se puede cancelar (cancelable), con una copia congelada de detail.
// Ejemplo: createNoticeEvent('pin', { id: 3 }).type → 'notice:pin'
export const createNoticeEvent = (type, detail = {}) => {
  // TODO
};

// Crea un bus de eventos sobre un EventTarget propio. Devuelve { on, emit }:
// - on(type, handler, options): escucha `notice:${type}` con las opciones de
//   addEventListener (once...). Devuelve una función que quita ese listener.
// - emit(type, detail): lanza createNoticeEvent(type, detail) y devuelve lo mismo que
//   dispatchEvent: false si algún listener llamó a preventDefault.
// Cada llamada a createBus crea un bus independiente.
export const createBus = () => {
  // TODO
};
