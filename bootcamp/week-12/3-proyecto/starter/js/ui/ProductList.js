/**
 * ProductList UI Component
 * Renders product grid and handles interactions
 */

import { ProductService } from '../services/ProductService.js';
import { CartService } from '../services/CartService.js';
import { Notifications } from './Notifications.js';

class ProductListClass {
  // TODO: Declarar campos privados
  // #container;
  // #countElement;
  // #emptyState;
  // #currentFilters;

  constructor() {
    // TODO: Obtener elementos del DOM
    // this.#container = document.getElementById('productGrid');
    // this.#countElement = document.getElementById('productCount');
    // this.#emptyState = document.getElementById('emptyProducts');
    //
    // this.#currentFilters = {
    //   category: '',
    //   search: '',
    //   minPrice: 0,
    //   maxPrice: Infinity,
    //   sortBy: 'default'
    // };
  }

  /**
   * Initialize component and set up event listeners
   */
  init() {
    // TODO: Configurar event listeners
    // this.#setupCategoryFilters();
    // this.#setupSearchInput();
    // this.#setupPriceFilter();
    // this.#setupSortSelect();
    // this.#setupClearFilters();
    //
    // // Render inicial
    // this.render();
  }

  /**
   * Set up category filter listeners
   * @private
   */
  #setupCategoryFilters() {
    // TODO: Escuchar cambios en radio buttons de categoría
    // const categoryFilters = document.getElementById('categoryFilters');
    // categoryFilters?.addEventListener('change', (e) => {
    //   if (e.target.name === 'category') {
    //     this.#currentFilters.category = e.target.value;
    //     this.render();
    //   }
    // });
  }

  /**
   * Set up search input listener
   * @private
   */
  #setupSearchInput() {
    // TODO: Escuchar input de búsqueda con debounce
    // const searchInput = document.getElementById('searchInput');
    // let debounceTimer;
    //
    // searchInput?.addEventListener('input', (e) => {
    //   clearTimeout(debounceTimer);
    //   debounceTimer = setTimeout(() => {
    //     this.#currentFilters.search = e.target.value;
    //     this.render();
    //   }, 300);
    // });
  }

  /**
   * Set up price filter
   * @private
   */
  #setupPriceFilter() {
    // TODO: Escuchar click en botón de aplicar precio
    // const applyBtn = document.getElementById('applyPriceFilter');
    // const minInput = document.getElementById('minPrice');
    // const maxInput = document.getElementById('maxPrice');
    //
    // applyBtn?.addEventListener('click', () => {
    //   this.#currentFilters.minPrice = Number(minInput?.value) || 0;
    //   this.#currentFilters.maxPrice = Number(maxInput?.value) || Infinity;
    //   this.render();
    // });
  }

  /**
   * Set up sort select
   * @private
   */
  #setupSortSelect() {
    // TODO: Escuchar cambio en select de ordenamiento
    // const sortSelect = document.getElementById('sortSelect');
    // sortSelect?.addEventListener('change', (e) => {
    //   this.#currentFilters.sortBy = e.target.value;
    //   this.render();
    // });
  }

  /**
   * Set up clear filters button
   * @private
   */
  #setupClearFilters() {
    // TODO: Escuchar click en botón de limpiar filtros
    // const clearBtn = document.getElementById('clearFilters');
    // clearBtn?.addEventListener('click', () => {
    //   this.clearFilters();
    // });
  }

  /**
   * Render product grid
   */
  render() {
    // TODO: Obtener productos filtrados y renderizar
    // const products = ProductService.query(this.#currentFilters);
    //
    // // Actualizar contador
    // this.#updateCount(products.length);
    //
    // // Mostrar empty state si no hay productos
    // if (products.length === 0) {
    //   this.#showEmptyState();
    //   return;
    // }
    //
    // this.#hideEmptyState();
    //
    // // Renderizar grid
    // this.#container.innerHTML = products
    //   .map(product => this.#renderProductCard(product))
    //   .join('');
    //
    // // Agregar event listeners a botones
    // this.#setupAddToCartButtons();

    console.log('ProductList.render() - TODO: Implementar');
  }

  /**
   * Render single product card
   * @private
   * @param {Product} product
   * @returns {string} HTML string
   */
  #renderProductCard(product) {
    // TODO: Generar HTML de tarjeta de producto usando template literals
    // const stockClass = product.isInStock ? '' : 'out-of-stock';
    // const stockText = product.isInStock ? `${product.stock} en stock` : 'Sin stock';
    // const buttonDisabled = product.isInStock ? '' : 'disabled';
    //
    // return `
    //   <article class="product-card" data-product-id="${product.id}">
    //     <div class="product-image">${product.image}</div>
    //     <div class="product-info">
    //       <span class="product-category">${product.category}</span>
    //       <h3 class="product-name">${product.name}</h3>
    //       <div class="product-rating">${product.ratingStars} (${product.rating})</div>
    //     </div>
    //     <div class="product-footer">
    //       <span class="product-price">${product.formattedPrice}</span>
    //       <span class="product-stock ${stockClass}">${stockText}</span>
    //     </div>
    //     <button
    //       class="btn btn-primary add-to-cart-btn"
    //       data-product-id="${product.id}"
    //       ${buttonDisabled}
    //     >
    //       Agregar 🛒
    //     </button>
    //   </article>
    // `;
    return '';
  }

  /**
   * Set up add to cart button listeners
   * @private
   */
  #setupAddToCartButtons() {
    // TODO: Agregar event listeners a botones de agregar al carrito
    // const buttons = this.#container?.querySelectorAll('.add-to-cart-btn');
    //
    // buttons?.forEach(button => {
    //   button.addEventListener('click', (e) => {
    //     const productId = e.target.dataset.productId;
    //     const product = ProductService.getById(productId);
    //
    //     if (product) {
    //       const result = CartService.addItem(product);
    //       if (result.success) {
    //         Notifications.success(`${product.name} agregado al carrito`);
    //       } else {
    //         Notifications.error(result.error);
    //       }
    //     }
    //   });
    // });
  }

  /**
   * Update product count display
   * @private
   * @param {number} count
   */
  #updateCount(count) {
    // TODO: Actualizar texto de contador
    // if (this.#countElement) {
    //   this.#countElement.textContent = `${count} producto${count !== 1 ? 's' : ''}`;
    // }
  }

  /**
   * Show empty state
   * @private
   */
  #showEmptyState() {
    // TODO: Mostrar estado vacío
    // this.#container?.classList.add('hidden');
    // this.#emptyState?.classList.remove('hidden');
  }

  /**
   * Hide empty state
   * @private
   */
  #hideEmptyState() {
    // TODO: Ocultar estado vacío
    // this.#container?.classList.remove('hidden');
    // this.#emptyState?.classList.add('hidden');
  }

  /**
   * Clear all filters
   */
  clearFilters() {
    // TODO: Resetear filtros y re-renderizar
    // this.#currentFilters = {
    //   category: '',
    //   search: '',
    //   minPrice: 0,
    //   maxPrice: Infinity,
    //   sortBy: 'default'
    // };
    //
    // // Reset UI elements
    // document.querySelector('input[name="category"][value=""]')?.checked = true;
    // document.getElementById('searchInput').value = '';
    // document.getElementById('minPrice').value = '';
    // document.getElementById('maxPrice').value = '';
    // document.getElementById('sortSelect').value = 'default';
    //
    // this.render();
  }
}

// Export singleton instance
export const ProductList = new ProductListClass();
