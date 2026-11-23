// Funciones asíncronas o con temporizadores de una tienda.
// Las que usan la red reciben fetchFn, para que los tests le pasen un fetch falso.

// Pide un producto. Si la respuesta no es ok, lanza un error con el status.
export const loadProduct = async (id, fetchFn) => {
  const response = await fetchFn(`/products/${id}`);
  if (!response.ok) throw new Error(`Error ${response.status} al cargar ${id}`);
  return response.json();
};

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Como loadProduct, pero si falla espera delay ms y lo vuelve a intentar,
// hasta retries veces. Si el último intento falla, lanza su error.
export const loadWithRetry = async (id, fetchFn, { retries = 2, delay = 1000 } = {}) => {
  for (let attempt = 0; ; attempt += 1) {
    try {
      return await loadProduct(id, fetchFn);
    } catch (error) {
      if (attempt === retries) throw error;
      await wait(delay);
    }
  }
};

// Devuelve una función que guarda los datos ms después de la última llamada.
// Si la llaman otra vez antes, vuelve a empezar a contar: solo guarda lo último.
export const createAutosave = (save, ms) => {
  let timer;
  return (data) => {
    clearTimeout(timer);
    timer = setTimeout(() => save(data), ms);
  };
};

// La tienda abre de 9:00 a 21:00, hora local.
export const isOpen = (date = new Date()) => {
  const hour = date.getHours();
  return hour >= 9 && hour < 21;
};
