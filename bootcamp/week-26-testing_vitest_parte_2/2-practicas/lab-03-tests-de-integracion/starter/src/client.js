// Cliente de la API de productos. Usa el fetch global.
export const createClient = (baseUrl) => {
  const request = async (path, options) => {
    const response = await fetch(`${baseUrl}${path}`, options);
    const body = await response.json();
    if (!response.ok) throw new Error(`${response.status}: ${body.error}`);
    return body;
  };

  return {
    list: () => request('/products'),
    get: (id) => request(`/products/${id}`),
    create: (product) => request('/products', { method: 'POST', body: JSON.stringify(product) }),
  };
};
