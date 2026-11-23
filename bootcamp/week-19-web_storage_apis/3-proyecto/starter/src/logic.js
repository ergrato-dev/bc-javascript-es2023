// Lógica del cuaderno persistente: convierte la lista de entradas en texto y de vuelta,
// migra los datos de versiones anteriores y guarda sin romper la página cuando el
// almacenamiento falla. Ninguna función usa localStorage directamente: reciben un objeto
// con getItem, setItem y removeItem, así que se pueden probar con Node
// (scripts/verificar-semana.sh 19) y main.js les pasa localStorage o sessionStorage.
//
// Una entrada es un objeto { id, title, category, createdAt, favorite }:
// - id: entero positivo, sin repetir.
// - title y category: texto; title no puede estar vacío.
// - createdAt: un Date válido. favorite: true o false.

// Versión del formato que se guarda. Súbela cuando cambie la forma de los datos.
export const SCHEMA_VERSION = 2;

// Convierte la lista en el texto que se guarda: un sobre { version, entries } en JSON.
// Los Date se guardan como texto ISO (JSON.stringify llama a su toJSON).
// Ejemplo: serialize([]) → '{"version":2,"entries":[]}'
export const serialize = (entries) => {
  // TODO
};

// Comprueba que un valor tiene la forma de una entrada (ver arriba).
export const isValidEntry = (value) => {
  // TODO
};

// Lleva los datos recién leídos (ya pasados por JSON.parse) a la versión actual:
// - Un array es la versión 1: [{ id, title, date }]. Devuelve el sobre de la versión 2, con
//   category 'general', createdAt igual a date (todavía texto) y favorite false.
// - Un sobre con version igual a SCHEMA_VERSION se devuelve tal cual.
// - Cualquier otra cosa lanza Error con el mensaje «Versión desconocida: <version>».
export const migrate = (data) => {
  // TODO
};

// Convierte el texto guardado en { entries, status }:
// - null (no hay nada guardado): { entries: [], status: 'empty' }.
// - Texto válido de la versión actual: status 'ok'. De la versión 1: status 'migrated'.
//   En los dos casos, createdAt de cada entrada pasa a ser un Date.
// - JSON roto, versión desconocida o alguna entrada no válida: { entries: [], status: 'corrupt' }.
export const deserialize = (text) => {
  // TODO
};

// Crea el almacén de la lista en storage, bajo la clave key:
// - load(): lo que devuelve deserialize con el texto guardado.
// - save(entries): guarda serialize(entries) y devuelve { ok: true }. Si el almacenamiento
//   está lleno (un error con name 'QuotaExceededError'), devuelve { ok: false, reason: 'quota' };
//   cualquier otro error se relanza.
// - clear(): borra la clave.
export const createStore = (storage, key) => {
  // TODO
};

// Crea el borrador del formulario en storage, bajo la clave key, que caduca a los ttlMs
// milisegundos. now es la función que da la hora (en las pruebas, una hora fija).
// - save(fields): guarda { fields, savedAt: now() } en JSON.
// - load(): devuelve fields, o null si no hay borrador. Si ha caducado (now() - savedAt >= ttlMs)
//   o el texto no es JSON válido, borra la clave y devuelve null.
// - clear(): borra la clave.
export const createDraft = (storage, key, ttlMs, now = Date.now) => {
  // TODO
};

// Devuelve true si se puede escribir y borrar en el almacenamiento que da getStorage, y false
// si getStorage, setItem o removeItem lanzan un error. Deja el almacenamiento como estaba.
export const isStorageAvailable = (getStorage) => {
  // TODO
};

// Interpreta un evento storage de otra pestaña para la clave key:
// - event.key null (otra pestaña llamó a clear()): { entries: [], status: 'empty' }.
// - Otra clave: null (el cambio no es de la lista).
// - La clave key: lo que devuelve deserialize con event.newValue.
export const fromStorageEvent = (event, key) => {
  // TODO
};
