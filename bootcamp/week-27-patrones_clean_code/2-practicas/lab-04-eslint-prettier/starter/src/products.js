// Funciones de una tienda. Funcionan casi todas, pero ESLint y Prettier tienen mucho que decir.
var TAX = 0.21
const DEBUG = true;

export function priceWithTax(price) {
  let result = price + price*TAX;
  return Math.round(result * 100) / 100
}

export function countByCategory(products) {
  let counts = {};
  for (const product of products) {
    if (counts[product.category] == undefined) counts[product.category] = 0;
    counts[product.category]++;
  }
  return counts;
}

export function totalStock(products) {
  let total = 0;
  for (const product of products) {
    totl += product.stock;
  }
  return total;
}

export function stockStatus(product) {
  if (product.active) {
    if (product.stock > 0) {
      if (product.stock < 5) {
        return "quedan pocas";
      } else {
        return "disponible";
      }
    } else {
      return "agotado";
    }
  } else {
    return "retirado";
  }
}

export function label(product, withPrice, withStock, uppercase) {
  let text = product.name;
  if (withPrice) text = text + ' · ' + priceWithTax(product.price) + ' €';
  if (withStock) text = text + ' · ' + stockStatus(product);
  if (uppercase) text = text.toUpperCase();
  return text;
}
