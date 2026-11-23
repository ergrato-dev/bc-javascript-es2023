// Un carrito de la compra muy sencillo. Cada línea tiene un precio (price) y una cantidad (quantity).

// El importe de una línea: precio por cantidad.
export const lineTotal = (line) => line.price * line.quantity;

// La suma de todas las líneas. Un carrito vacío vale 0.
export const cartTotal = (lines) => lines.reduce((sum, line) => sum + lineTotal(line), 0);

// Aplica un descuento en tanto por ciento. Un total nunca puede quedar por debajo de 0.
export const applyDiscount = (total, percent) => total - (total * percent) / 100;
