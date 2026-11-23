// Lógica del explorador: pedir fichas a un servidor simulado con async/await, sin DOM.
// main.js la importa para pintar la página y scripts/verificar-semana.sh la comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md. Esta semana se escribe con async/await: sin .then().

// Ya hecha: espera ms milisegundos.
export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// TODO paso 3: pide una ficha por su id.
// Busca en items la ficha con ese id, espera su delay (100 ms si no existe) y:
// - si existe, devuelve la ficha
// - si no, lanza new Error(`No existe la ficha ${id}`)
export const getItem = async (items, id) => {
  // TODO
};

// TODO paso 4: pide las fichas de ids una detrás de otra, con un await dentro de un for...of.
// Devuelve un array con las fichas en el orden de ids. Si una falla, lanza su error
// y las siguientes no se piden. Con [] devuelve [].
export const getInSequence = async (items, ids) => {
  // TODO
};

// TODO paso 5: pide todas las fichas de ids a la vez, con Promise.all.
// Devuelve las fichas en el orden de ids, o lanza el error de la primera que falle.
export const getInParallel = async (items, ids) => {
  // TODO
};

// TODO paso 6: pide todas a la vez con Promise.allSettled y separa las que existen de las que no.
// Devuelve { found, missing }: found, las fichas que llegaron, y missing, los ids que fallaron,
// los dos en el orden de ids. Nunca lanza.
export const getAvailable = async (items, ids) => {
  // TODO
};

// TODO paso 7: ejecuta task() hasta attempts veces y devuelve lo que devuelva la primera que no falle.
// Entre un intento fallido y el siguiente, espera delayMs milisegundos (después del último, no).
// Si fallan todos, lanza new Error(`Falló tras ${attempts} intentos`, { cause: último error }).
export const retry = async (task, attempts, delayMs) => {
  // TODO
};

// TODO paso 8: generador asíncrono que entrega las fichas en páginas de size elementos.
// Antes de entregar cada página, espera 100 ms (lo que tarda el servidor en devolverla).
// Con 5 fichas y size 2 entrega 3 páginas: [f1, f2], [f3, f4], [f5]. Con [] no entrega ninguna.
export async function* pages(items, size) {
  // TODO
}

// TODO paso 9: recorre pages(items, size) con for await y devuelve la primera ficha cuyo name
// contiene text, sin distinguir mayúsculas de minúsculas. En cuanto la encuentra, deja de pedir páginas.
// Si no hay ninguna, devuelve null.
export const findFirst = async (items, size, text) => {
  // TODO
};
