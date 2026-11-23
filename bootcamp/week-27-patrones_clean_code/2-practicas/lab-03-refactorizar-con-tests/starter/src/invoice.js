// Calcula el total de un pedido. Lo escribió alguien con prisa, y funciona.
// En este lab lo mejoras paso a paso sin cambiar lo que hace.
export function calc(l, c, f) {
  let t = 0;
  for (let i = 0; i < l.length; i++) {
    t = t + l[i].price * l[i].quantity;
  }
  let d = 0;
  if (c) {
    if (c === 'VIP') {
      d = t * 0.1;
    } else {
      if (c === 'NUEVO') {
        if (t >= 50) {
          d = 5;
        }
      }
    }
  }
  let s;
  if (t - d >= 100) {
    s = 0;
  } else {
    s = 4.95;
  }
  const r = t - d + s;
  if (f) {
    return r.toFixed(2) + ' €';
  }
  return Math.round(r * 100) / 100;
}
