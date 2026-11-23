// Funciones de un catálogo de productos. Están bien: en este lab cambias los tests, no este archivo.

export const createProduct = (name, price) => ({ name, price, tags: [] });

export const withTag = (product, tag) => ({ ...product, tags: [...product.tags, tag] });

// Una fila para una tabla: note queda sin valor si el producto no tiene nota.
export const toRow = (product) => ({ name: product.name, price: product.price, note: product.note });

export const sum = (values) => values.reduce((total, value) => total + value, 0);

export const describeProduct = (product) => `${product.name}: ${product.price.toFixed(2)} €`;

// Convierte un texto como '3,50' en 3.5. Lanza un RangeError si no es un precio válido.
export const parsePrice = (text) => {
  const value = Number(String(text).replace(',', '.'));
  if (!Number.isFinite(value) || value < 0) throw new RangeError(`Precio no válido: ${text}`);
  return value;
};

export const findProduct = (products, name) => products.find((product) => product.name === name);
