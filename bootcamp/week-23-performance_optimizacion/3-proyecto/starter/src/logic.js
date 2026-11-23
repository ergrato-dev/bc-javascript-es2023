// Lógica del buscador: prepara el catálogo para buscar rápido, busca, pagina los resultados y
// controla cuántas veces se ejecuta el trabajo caro. Ninguna función usa el DOM, así que se
// pueden probar con Node (scripts/verificar-semana.sh 23).
//
// Un registro (record) es un objeto con una propiedad por cada campo de FIELDS, más su id.

// Un texto preparado para comparar: sin tildes ni diéresis, en minúsculas, sin espacios al
// principio ni al final y con los espacios repetidos convertidos en uno.
// Ejemplo: normalize('  Nebulosa   de ORIÓN ') → 'nebulosa de orion'
export const normalize = (text) => {
  // TODO
};

// El índice de búsqueda: un elemento { record, text } por registro, en el mismo orden. text es
// normalize de los valores de los campos fields unidos con un espacio. Se calcula una sola vez,
// para no normalizar el catálogo entero en cada búsqueda.
// Ejemplo: buildIndex([{ name: 'Vega', type: 'Estrella' }], ['name', 'type'])
//   → [{ record: { name: 'Vega', type: 'Estrella' }, text: 'vega estrella' }]
export const buildIndex = (records, fields) => {
  // TODO
};

// Los registros del índice cuyo text contiene todas las palabras de la búsqueda, en el orden del
// índice. La búsqueda se normaliza y se parte por espacios; sin palabras, devuelve todos.
// Ejemplo: search(index, 'ORION neb') → los registros con 'orion' y con 'neb' en su text
export const search = (index, query) => {
  // TODO
};

// Una página de la lista, empezando por la página 1:
//   { items, page, pages, total, hasMore }
// items son los elementos de esa página (vacío si la página no existe), pages el número de
// páginas (como mínimo 1), total la longitud de la lista y hasMore si hay páginas después.
// Ejemplo: paginate(['a', 'b', 'c'], 2, 2) → { items: ['c'], page: 2, pages: 2, total: 3, hasMore: false }
export const paginate = (items, page, size) => {
  // TODO
};

// Devuelve una función que espera a que dejen de llamarla: cada llamada reinicia una espera de
// ms milisegundos, y solo cuando la espera termina se ejecuta fn con los argumentos de la última
// llamada. La función devuelta tiene un método cancel() que anula la ejecución pendiente.
export const debounce = (fn, ms) => {
  // TODO
};

// Devuelve una función que ejecuta fn como mucho una vez cada ms milisegundos. La primera llamada
// ejecuta fn enseguida y abre una ventana de ms. Si llegan llamadas durante la ventana, al
// cerrarse se ejecuta fn una vez con los argumentos de la última, y se abre otra ventana.
// cancel() anula la ejecución pendiente y cierra la ventana.
export const throttle = (fn, ms) => {
  // TODO
};

// Devuelve una función que guarda los resultados de fn según su primer argumento, en un Map que
// se puede leer en la propiedad cache. Si el argumento ya está en la caché, devuelve el resultado
// guardado sin llamar a fn. La caché guarda como mucho max resultados: al pasar de max, se borra
// el que lleva más tiempo sin usarse. Usar un resultado guardado lo pone el último del Map.
export const memoize = (fn, max = 100) => {
  // TODO
};

// Ejecuta fn runs veces y mide cada ejecución con performance.now(). Devuelve
//   { result, ms, runs }
// result es lo que devolvió la última ejecución, ms la mediana de los tiempos (el del medio
// ordenados; con un número par, la media de los dos del medio) y runs el número de ejecuciones.
export const measure = (fn, runs = 5) => {
  // TODO
};

