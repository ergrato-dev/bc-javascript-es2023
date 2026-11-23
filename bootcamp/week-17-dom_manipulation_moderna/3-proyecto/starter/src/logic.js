// Lógica del constructor de fichas: describe la interfaz con objetos y la convierte en HTML.
// Ninguna función toca el DOM, así que se pueden probar con Node
// (scripts/verificar-semana.sh 17). main.js convierte las descripciones en nodos reales.
//
// Una descripción es un objeto { tag, props, children }:
// - tag: la etiqueta ('li', 'h3', 'button'...).
// - props: los atributos. `class` es un texto con las clases, `dataset` un objeto con los
//   data-*, y el resto se escriben tal cual ('aria-pressed', 'type'...).
// - children: un array de textos y de otras descripciones.

// Describe un elemento: devuelve { tag, props, children }.
// - Sin props (undefined o null), props es {}.
// - Los hijos pueden llegar sueltos o en arrays, a cualquier profundidad: se aplanan.
// - Se quitan los hijos null, undefined, false y '' (así se escribe un hijo condicional:
//   `featured && 'Destacada'`).
// - Los números se convierten en texto.
// Ejemplo: h('p', null, 'Hay ', 3, [' fichas', false]) → { tag: 'p', props: {}, children: ['Hay ', '3', ' fichas'] }
export const h = (tag, props, ...children) => {
  // TODO
};

// Junta, separadas por un espacio, las clases que no son falsy.
// Ejemplo: classNames('card', false, 'is-featured', null, '') → 'card is-featured'
export const classNames = (...values) => {
  // TODO
};

// Sustituye & < > " ' por &amp; &lt; &gt; &quot; &#39; para meter un texto dentro de HTML.
// Convierte antes el valor en texto (puede llegar un número). El & va el primero.
export const escapeHtml = (text) => {
  // TODO
};

// Convierte una descripción en HTML (teoría 03, sección 3):
// - Un texto: el texto escapado con escapeHtml.
// - Un elemento: <tag atributos>hijos</tag>, con los hijos convertidos uno a uno y juntos.
// Los atributos van en el orden de `props`, cada uno con un espacio delante:
// - class: class="..." (si es '', no se escribe).
// - dataset: un data-* por clave, con el nombre en kebab-case: { lastCheck: 'x' } → data-last-check="x".
// - Valor true: solo el nombre (disabled). Valor false, null o undefined: no se escribe.
// - Cualquier otro valor: nombre="valor", con el valor escapado.
// Ejemplo: toHtml(h('p', { class: 'note', hidden: true }, 'a < b')) → '<p class="note" hidden>a &lt; b</p>'
export const toHtml = (spec) => {
  // TODO
};

// Describe la ficha de un elemento de la colección (paso 6 del README). Con h:
// <li class="card [is-featured] [is-selected]" data-id="ID">
//   <h3 class="card-title">NAME</h3>
//   <p class="card-category">CATEGORY</p>
//   <p class="card-detail">DETAIL</p>
//   <div class="card-actions">
//     <button type="button" class="feature" aria-pressed="true|false">Quitar destacado|Destacar</button>
//     <button type="button" class="show-html">Ver HTML</button>
//     <button type="button" class="remove">Quitar</button>
//   </div>
// </li>
// is-featured si item.featured; is-selected si `selected`. data-id es el id en texto.
// El botón feature dice «Quitar destacado» si la ficha está destacada y «Destacar» si no.
export const cardSpec = (item, { selected = false } = {}) => {
  // TODO
};

// Las fichas que se ven con los filtros, sin cambiar `items`:
// - category: solo las de esa categoría ('' = todas).
// - search: solo las que lo contienen en name o en detail, sin distinguir mayúsculas
//   y sin los espacios del principio y del final ('' = todas).
// Las destacadas van primero; dentro de cada grupo, en el orden de `items`.
export const visibleItems = (items, { search = '', category = '' } = {}) => {
  // TODO
};

// Las categorías de las fichas, sin repetir y en orden alfabético en español.
// Ejemplo: [{ category: 'Planeta' }, { category: 'Estrella' }, { category: 'Planeta' }] → ['Estrella', 'Planeta']
export const categoriesOf = (items) => {
  // TODO
};

// Compara las claves (ids) que hay en la página con las que tiene que haber (teoría 04, sección 5):
// - removed: las de `previous` que no están en `next`, en el orden de `previous`.
// - added: las de `next` que no estaban en `previous`, en el orden de `next`.
// - kept: las de `next` que ya estaban en `previous`, en el orden de `next`.
// Ejemplo: diffKeys([1, 2, 3], [4, 3, 1]) → { removed: [2], added: [4], kept: [3, 1] }
export const diffKeys = (previous, next) => {
  // TODO
};
