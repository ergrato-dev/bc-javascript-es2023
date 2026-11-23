// Funciones de una tienda que dependen de algo externo: un cobro, un aviso,
// el azar o la consola. Los tests las prueban con dobles de prueba.

// Cobra el carrito con pay(total) y avisa con notify(mensaje).
// pay devuelve el recibo del cobro ({ id }). checkout devuelve el recibo con el total.
// Si pay lanza un error, checkout lo deja pasar y no avisa.
export const checkout = (cart, { pay, notify }) => {
  if (cart.length === 0) throw new Error('El carrito está vacío');
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const receipt = pay(total);
  notify(`Pedido ${receipt.id}: ${total.toFixed(2)} €`);
  return { ...receipt, total };
};

// Elige al azar el producto de la oferta del día.
export const pickOffer = (products) => products[Math.floor(Math.random() * products.length)];

// Avisa con console.warn de cada producto sin stock y devuelve cuántos son.
export const warnOutOfStock = (products) => {
  const missing = products.filter((product) => product.stock === 0);
  for (const product of missing) console.warn(`Sin stock: ${product.name}`);
  return missing.length;
};
