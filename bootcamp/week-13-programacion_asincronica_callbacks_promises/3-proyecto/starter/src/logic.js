// Lógica del panel: consultar servicios simulados con callbacks y con promesas, sin DOM.
// main.js la importa para pintar la página y scripts/verificar-semana.sh la comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md. Esta semana no se usa async/await: solo callbacks y promesas.

// TODO paso 3: consulta un servicio con un callback error-first.
// Pasados service.delay milisegundos (setTimeout):
// - si service.available es true → callback(null, service.result)
// - si no → callback(new Error(`${service.name}: sin respuesta`))
export const requestWithCallback = (service, callback) => {
  // TODO
};

// TODO paso 4: la misma consulta, pero devuelve una promesa.
// Envuelve requestWithCallback en new Promise: el error va a reject y el resultado a resolve.
export const request = (service) => {
  // TODO
};

// TODO paso 5: consulta los servicios uno detrás de otro, encadenando .then().
// Cada consulta empieza cuando termina la anterior. Se cumple con el array de resultados en orden;
// si un servicio falla, se rechaza con su error y los siguientes no se consultan.
// Con [] se cumple con [].
export const requestInSequence = (services) => {
  // TODO
};

// TODO paso 6: consulta todos los servicios a la vez con Promise.all.
// Se cumple con el array de resultados en el orden de services, o se rechaza con el primer error.
export const requestAll = (services) => {
  // TODO
};

// TODO paso 7: consulta todos a la vez con Promise.allSettled y devuelve un informe.
// Se cumple siempre, con un objeto por servicio y en el orden de services:
// - si respondió:    { name, ok: true, text: resultado }
// - si no respondió: { name, ok: false, text: mensaje del error }
export const requestReport = (services) => {
  // TODO
};

// TODO paso 8: el resultado del primer servicio que responda bien, con Promise.any.
// Si no responde ninguno, se rechaza con new Error('Ningún servicio respondió', { cause: error }),
// con el AggregateError original como cause.
export const requestFirst = (services) => {
  // TODO
};

// TODO paso 9: pone un tiempo límite a una promesa con Promise.race.
// Se cumple o se rechaza como promise si termina antes de ms milisegundos;
// si no, se rechaza con new Error(`Tiempo agotado: ${ms} ms`).
export const withTimeout = (promise, ms) => {
  // TODO
};
