// Lógica del importador: clases de error, validación y reintentos, sin DOM.
// main.js las importa para pintar la página y scripts/verificar-semana.sh las comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md.

// TODO paso 3: clase base de los errores de la aplicación.
// - Hereda de Error y pasa { cause } a super para encadenar el error original.
// - name: el nombre de la clase que se instancia (this.constructor.name), también en las subclases.
// - code: el que llega en las opciones, o 'APP_ERROR' si no llega ninguno.
// new AppError('Fallo', { code: 'X', cause: original }) → name 'AppError', code 'X', cause original
export class AppError extends Error {
  // TODO
}

// TODO paso 4: un dato no cumple una regla. Guarda el campo en field. code: 'VALIDATION'.
// new ValidationError('name', 'Campo obligatorio') → field 'name', message 'Campo obligatorio'
export class ValidationError extends AppError {
  // TODO
}

// TODO paso 4: el texto no se pudo leer como JSON. Acepta { cause }. code: 'PARSE'.
export class ParseError extends AppError {
  // TODO
}

// TODO paso 4: el servidor respondió con un error. Guarda status y el mensaje es `Error de red (${status})`.
// code: 'NETWORK'. El getter retryable es true con status 0 (sin conexión) o de 500 en adelante.
export class NetworkError extends AppError {
  // TODO
}

// TODO paso 5: devuelve JSON.parse(text). Si falla, lanza
// new ParseError('El texto no es JSON válido', { cause: error }) con el SyntaxError original como cause.
export const parseJson = (text) => {
  // TODO
};

// TODO paso 6: comprueba una pieza y devuelve una copia limpia { name, room, value }, con name sin espacios en los extremos.
// Lanza ValidationError con el primer problema, en este orden:
// - item no es un objeto (null, array u otro tipo) → field 'item', 'Cada pieza debe ser un objeto'
// - name no es texto o queda vacío → 'name', 'Campo obligatorio'; menos de 3 caracteres → 'name', 'Mínimo 3 caracteres'
// - room no está en rooms → 'room', 'Elige una sala válida'
// - value no es un número finito de 0 o más → 'value', 'Debe ser un número de 0 o más'
export const validateItem = (item, rooms) => {
  // TODO
};

// TODO paso 7: lee el texto con parseJson y valida cada pieza con validateItem.
// - Si el JSON no es un array, lanza new ParseError('Se esperaba una lista de piezas').
// - Una pieza inválida no detiene el resto: su ValidationError se apunta en errors como { index, field, message }.
// - Cualquier otro error no es un dato malo sino un fallo del programa: se relanza.
// Devuelve { items, errors }.
export const importItems = (text, rooms) => {
  // TODO
};

// TODO paso 8: llama a fn(intento) hasta attempts veces y devuelve lo que devuelva (fn puede ser async).
// Si falla, relanza el error cuando no es reintentable (error.retryable !== true) o era el último intento;
// si no, llama a onError(error, intento) y lo intenta otra vez.
export const retry = async (fn, attempts = 3, onError = () => {}) => {
  // TODO
};

// TODO paso 9: traduce un error a un mensaje para la persona que usa la página.
// - ValidationError → `Revisa el campo ${field}: ${message}`
// - ParseError → su message
// - NetworkError reintentable → 'El servidor no responde. Inténtalo más tarde.'
// - NetworkError no reintentable → `El servidor rechazó los datos (${status})`
// - Cualquier otro → 'Algo salió mal. Inténtalo de nuevo.'
export const userMessage = (error) => {
  // TODO
};
