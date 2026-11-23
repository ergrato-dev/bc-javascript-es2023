// Funciones asíncronas para hablar con la API del catálogo. Están terminadas:
// no se cambian. Los comentarios de cada una son su especificación, y tus tests
// comprueban que el código cumple lo que promete.

// Un error HTTP: la respuesta llegó, pero con un status que no es 2xx.
export class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
  }
}

// La promesa no se resolvió a tiempo.
export class TimeoutError extends Error {
  constructor(ms) {
    super(`Sin respuesta en ${ms} ms`);
    this.name = 'TimeoutError';
  }
}

// Pide url con fetchFn (por defecto, el fetch global) y devuelve el JSON de la respuesta.
// Las demás opciones (method, headers, body) se pasan tal cual a fetchFn.
// - Si la respuesta no es ok, lanza un HttpError con su status y el campo error del JSON;
//   si el cuerpo no es JSON, el mensaje es 'HTTP <status>'.
// - Una respuesta 204 (sin contenido) devuelve null.
// Ejemplo: requestJson('/items/1') → { id: 1, name: 'Sirio', ... }
export const requestJson = async (url, { fetchFn = globalThis.fetch, ...options } = {}) => {
  const response = await fetchFn(url, options);
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new HttpError(response.status, body.error ?? `HTTP ${response.status}`);
  }
  if (response.status === 204) return null;
  return response.json();
};

// Espera ms milisegundos.
export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Ejecuta task() y, si falla, la reintenta hasta retries veces.
// Antes de cada reintento espera delay ms, el doble que la vez anterior:
// delay, 2 × delay, 4 × delay...
// - task recibe el número de intento: 0 la primera vez, 1 en el primer reintento...
// - Solo reintenta los errores que no son HttpError y los HttpError 5xx (el servidor
//   falló). Un 4xx (la petición estaba mal) se lanza enseguida: repetirla no lo arregla.
// - Si se acaban los reintentos, lanza el error del último intento.
// Ejemplo: con retries 2 y delay 100, una tarea que falla siempre se ejecuta 3 veces,
// con esperas de 100 y 200 ms, y lanza el tercer error.
export const withRetry = async (task, { retries = 2, delay = 100 } = {}) => {
  for (let attempt = 0; ; attempt += 1) {
    try {
      return await task(attempt);
    } catch (error) {
      const retryable = !(error instanceof HttpError) || error.status >= 500;
      if (attempt >= retries || !retryable) throw error;
      await wait(delay * 2 ** attempt);
    }
  }
};

// Devuelve una promesa que se resuelve como promise o se rechaza con un TimeoutError
// si promise no termina antes de ms milisegundos (justo a los ms, ya es tarde).
// Al terminar, cancela su temporizador.
export const withTimeout = (promise, ms) => {
  let timer;
  const timeout = new Promise((resolve, reject) => {
    timer = setTimeout(() => reject(new TimeoutError(ms)), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
};

// Una caché en memoria con caducidad. now() da la hora en ms (por defecto, Date.now()).
// - get(key): el valor guardado, o undefined si no existe o ha caducado.
//   Una entrada caduca justo al cumplir ttl ms desde que se guardó.
// - set(key, value): guarda el valor con la hora de ahora.
// - getOrLoad(key, load): si hay valor, lo devuelve; si no, espera a load(key),
//   lo guarda y lo devuelve. Si load falla, no guarda nada.
// - size: cuántas entradas tiene, caducadas incluidas.
// Lanza RangeError si ttl no es un número mayor que 0.
export const createCache = ({ ttl, now = () => Date.now() } = {}) => {
  if (!(ttl > 0)) throw new RangeError('ttl debe ser mayor que 0');
  const entries = new Map();

  const get = (key) => {
    const entry = entries.get(key);
    if (!entry) return undefined;
    if (now() - entry.savedAt >= ttl) return undefined;
    return entry.value;
  };
  const set = (key, value) => {
    entries.set(key, { value, savedAt: now() });
  };

  return {
    get,
    set,
    async getOrLoad(key, load) {
      const cached = get(key);
      if (cached !== undefined) return cached;
      const value = await load(key);
      set(key, value);
      return value;
    },
    get size() {
      return entries.size;
    },
  };
};

// Devuelve una función que llama a fn ms después de la última llamada,
// con los argumentos de esa última llamada. debounced.cancel() anula la llamada pendiente.
export const debounce = (fn, ms) => {
  let timer;
  const debounced = (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
  debounced.cancel = () => clearTimeout(timer);
  return debounced;
};

// Cliente de la API del catálogo en baseUrl (ver src/server.js). Usa requestJson.
// - list(query): GET /items?q=<query sin espacios a los lados, codificada para una URL>.
// - get(id): GET /items/<id>.
// - create(item): POST /items con item en JSON y la cabecera content-type: application/json.
// fetchFn es opcional: sin él, usa el fetch global.
export const createCatalogClient = ({ baseUrl, fetchFn }) => {
  const url = (path) => new URL(path, baseUrl).href;
  return {
    list: (query = '') => requestJson(url(`/items?q=${encodeURIComponent(query.trim())}`), { fetchFn }),
    get: (id) => requestJson(url(`/items/${id}`), { fetchFn }),
    create: (item) =>
      requestJson(url('/items'), {
        fetchFn,
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(item),
      }),
  };
};

// Ejecuta task() cada interval ms y pasa cada resultado a onData, o cada error a onError.
// - start(): ejecuta task enseguida y después cada interval ms. Si ya estaba en marcha, no hace nada.
// - stop(): deja de ejecutarla.
// - running: true entre start() y stop().
// Un fallo no para el sondeo: el siguiente intento llega a su hora.
export const createPoller = (task, { interval, onData, onError = () => {} }) => {
  let timer = null;
  const tick = async () => {
    try {
      onData(await task());
    } catch (error) {
      onError(error);
    }
  };
  return {
    start() {
      if (timer !== null) return;
      timer = setInterval(tick, interval);
      tick();
    },
    stop() {
      clearInterval(timer);
      timer = null;
    },
    get running() {
      return timer !== null;
    },
  };
};
