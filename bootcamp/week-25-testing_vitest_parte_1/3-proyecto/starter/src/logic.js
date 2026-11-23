// Utilidades del catálogo. Este archivo ya funciona y no se cambia: tu trabajo es escribir sus tests
// en tests/logic.test.js. Ninguna función usa el DOM ni modifica lo que recibe.
// Los ejemplos de cada comentario son resultados reales: úsalos para tus primeros tests.

// Pasa un texto a minúsculas sin tildes, sin espacios al principio ni al final y con un solo espacio
// entre palabras. Con null o undefined devuelve ''.
// Ejemplo: normalize('  Nebulosa  de ORIÓN ') → 'nebulosa de orion'
export const normalize = (text) =>
  String(text ?? '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');

// Escribe un número como en España, con 2 decimales como mucho. Si no es un número finito, devuelve '—'.
// Ejemplo: formatNumber(12345.678) → '12.345,68' · formatNumber(NaN) → '—'
const numberFormat = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 2 });
export const formatNumber = (value) => (Number.isFinite(value) ? numberFormat.format(value) : '—');

// Devuelve la página `page` (empezando en 1) de `items`, con `perPage` elementos por página.
// Una página fuera de rango se lleva a la primera o a la última. Una lista vacía tiene 1 página.
// Lanza un RangeError si perPage no es un entero mayor que 0.
// Ejemplo: paginate(['a', 'b', 'c', 'd', 'e'], 2, 2) → { items: ['c', 'd'], page: 2, pages: 3, total: 5 }
export const paginate = (items, page, perPage) => {
  if (!Number.isInteger(perPage) || perPage < 1) throw new RangeError('perPage debe ser un entero mayor que 0');
  const pages = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(Math.max(1, Math.trunc(page) || 1), pages);
  const start = (current - 1) * perPage;
  return { items: items.slice(start, start + perPage), page: current, pages, total: items.length };
};

// Filtra las fichas que contienen todas las palabras de `query` en alguno de los campos de `fields`,
// sin distinguir mayúsculas ni tildes. Con una búsqueda vacía devuelve todas las fichas.
// Ejemplo: search(SEED, 'orion nebulosa', FIELDS) → [la ficha de la Nebulosa de Orión]
export const search = (items, query, fields) => {
  const words = normalize(query).split(' ').filter(Boolean);
  if (words.length === 0) return items;
  return items.filter((item) => {
    const text = normalize(fields.map((field) => item[field.name] ?? '').join(' '));
    return words.every((word) => text.includes(word));
  });
};

// Devuelve una copia de `items` ordenada por el campo `key`: los números de menor a mayor y los textos
// en orden alfabético español. Con direction 'desc', al revés. Las fichas sin valor van siempre al final.
// Ejemplo: sortBy([{ n: 2 }, {}, { n: 1 }], 'n') → [{ n: 1 }, { n: 2 }, {}]
export const sortBy = (items, key, direction = 'asc') => {
  const sign = direction === 'desc' ? -1 : 1;
  return items.toSorted((a, b) => {
    const x = a[key];
    const y = b[key];
    if (x == null) return y == null ? 0 : 1;
    if (y == null) return -1;
    const order = typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y), 'es');
    return sign * order;
  });
};

// Comprueba unos valores de formulario (textos) con las reglas de `fields`. Devuelve los datos limpios
// (textos sin espacios a los lados, números como number, vacíos como null) y un error por campo.
// Lanza un TypeError si fields no es un array.
// Ejemplo: validate({ name: ' Ve ', magnitude: 'x' }, FIELDS).errors
//          → { name: 'Mínimo 3 caracteres', type: 'Obligatorio', magnitude: 'Debe ser un número' }
export const validate = (values, fields) => {
  if (!Array.isArray(fields)) throw new TypeError('fields debe ser un array');
  const data = {};
  const errors = {};
  for (const { name, type, required, minLength, min, max } of fields) {
    const text = String(values[name] ?? '').trim();
    if (text === '') {
      data[name] = null;
      if (required) errors[name] = 'Obligatorio';
    } else if (type === 'number') {
      const value = Number(text);
      data[name] = value;
      if (!Number.isFinite(value)) errors[name] = 'Debe ser un número';
      else if (min !== undefined && value < min) errors[name] = `Mínimo ${min}`;
      else if (max !== undefined && value > max) errors[name] = `Máximo ${max}`;
    } else {
      data[name] = text;
      if (minLength !== undefined && text.length < minLength) errors[name] = `Mínimo ${minLength} caracteres`;
    }
  }
  return { data, errors };
};

// Resume el campo numérico `key` de las fichas: cuántas lo tienen, el menor, el mayor y la media.
// Las fichas sin un número finito en ese campo no cuentan. Sin ninguna, todo es null salvo count: 0.
// Ejemplo: summarize([{ n: 1 }, { n: 2 }, {}], 'n') → { count: 2, min: 1, max: 2, average: 1.5 }
export const summarize = (items, key) => {
  const values = items.map((item) => item[key]).filter((value) => Number.isFinite(value));
  if (values.length === 0) return { count: 0, min: null, max: null, average: null };
  const total = values.reduce((sum, value) => sum + value, 0);
  return { count: values.length, min: Math.min(...values), max: Math.max(...values), average: total / values.length };
};
