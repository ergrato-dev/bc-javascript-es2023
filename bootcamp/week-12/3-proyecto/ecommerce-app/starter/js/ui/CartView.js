/**
 * CartView UI Component
 * Renders cart sidebar and handles interactions
 */

import { CartService } from '../services/CartService.js';
import { Notifications } from './Notifications.js';

class CartViewClass {
  // TODO: Declarar campos privados
  // #sidebar;
  // #overlay;
  // #itemsContainer;
  // #emptyState;
  // #footer;
  // #countBadge;
  // #subtotalElement;
  // #shippingElement;
  // #totalElement;

  constructor() {
    // TODO: Obtener elementos del DOM
    // this.#sidebar = document.getElementById('cartSidebar');
    // this.#overlay = document.getElementById('cartOverlay');
    // this.#itemsContainer = document.getElementById('cartItems');
    // this.#emptyState = document.getElementById('cartEmpty');
    // this.#footer = document.getElementById('cartFooter');
    // this.#countBadge = document.getElementById('cartCount');
    // this.#subtotalElement = document.getElementById('cartSubtotal');
    // this.#shippingElement = document.getElementById('cartShipping');
    // this.#totalElement = document.getElementById('cartTotal');
  }

  /**
   * Initialize component
   */
  init() {
    // TODO: Configurar event listeners y suscribirse a cambios
    // this.#setupToggleButtons();
    // this.#setupCartActions();
    //
    // // Suscribirse a cambios del carrito
    // CartService.subscribe(() => this.render());
    //
    // // Render inicial
    // this.render();
  }

  /**
   * Set up cart toggle buttons
   * @private
   */
  #setupToggleButtons() {
    // TODO: Configurar apertura/cierre del carrito
    // const toggleBtn = document.getElementById('cartToggle');
    // const closeBtn = document.getElementById('closeCart');
    // const startShoppingBtn = document.getElementById('startShopping');
    //
    // toggleBtn?.addEventListener('click', () => this.open());
    // closeBtn?.addEventListener('click', () => this.close());
    // startShoppingBtn?.addEventListener('click', () => this.close());
    // this.#overlay?.addEventListener('click', () => this.close());
  }

  /**
   * Set up cart action buttons
   * @private
   */
  #setupCartActions() {
    // TODO: Configurar botones de vaciar y checkout
    // const clearBtn = document.getElementById('clearCart');
    // const checkoutBtn = document.getElementById('checkoutBtn');
    //
    // clearBtn?.addEventListener('click', () => {
    //   CartService.clear();
    //   Notifications.info('Carrito vaciado');
    // });
    //
    // checkoutBtn?.addEventListener('click', () => {
    //   Notifications.success('¡Checkout completado! (simulado)');
    //   CartService.clear();
    //   this.close();
    // });
  }

  /**
   * Open cart sidebar
   */
  open() {
    // TODO: Mostrar sidebar y overlay
    // this.#sidebar?.classList.remove('hidden');
    // this.#overlay?.classList.remove('hidden');
    // document.body.style.overflow = 'hidden';
  }

  /**
   * Close cart sidebar
   */
  close() {
    // TODO: Ocultar sidebar y overlay
    // this.#sidebar?.classList.add('hidden');
    // this.#overlay?.classList.add('hidden');
    // document.body.style.overflow = '';
  }

  /**
   * Render cart contents
   */
  render() {
    // TODO: Obtener estado del carrito y renderizar
    // const state = CartService.getState();
    //
    // // Actualizar badge
    // this.#updateBadge(state.totalItems);
    //
    // // Mostrar empty state si está vacío
    // if (state.isEmpty) {
    //   this.#showEmptyState();
    //   return;
    // }
    //
    // this.#hideEmptyState();
    //
    // // Renderizar items
    // this.#itemsContainer.innerHTML = state.items
    //   .map(item => this.#renderCartItem(item))
    //   .join('');
    //
    // // Actualizar totales
    // this.#updateTotals(state);
    //
    // // Agregar event listeners
    // this.#setupItemButtons();

    console.log('CartView.render() - TODO: Implementar');
  }

  /**
   * Render single cart item
   * @private
   * @param {CartItem} item
   * @returns {string} HTML string
   */
  #renderCartItem(item) {
    // TODO: Generar HTML de item del carrito
    // const { product, quantity, formattedSubtotal } = item;
    //
    // return `
    //   <div class="cart-item" data-product-id="${product.id}">
    //     <div class="cart-item-image">${product.image}</div>
    //     <div class="cart-item-details">
    //       <div class="cart-item-name">${product.name}</div>
    //       <div class="cart-item-price">${product.formattedPrice}</div>
    //       <div class="cart-item-actions">
    //         <button class="quantity-btn decrease-qty" data-product-id="${product.id}">-</button>
    //         <span class="cart-item-quantity">${quantity}</span>
    //         <button class="quantity-btn increase-qty" data-product-id="${product.id}">+</button>
    //       </div>
    //     </div>
    //     <div class="cart-item-total">${formattedSubtotal}</div>
    //     <button class="cart-item-remove" data-product-id="${product.id}">🗑️</button>
    //   </div>
    // `;
    return '';
  }

  /**
   * Set up item action buttons
   * @private
   */
  #setupItemButtons() {
    // TODO: Agregar listeners a botones de cantidad y eliminar
    // // Botones de incrementar
    // this.#itemsContainer?.querySelectorAll('.increase-qty').forEach(btn => {
    //   btn.addEventListener('click', (e) => {
    //     const productId = e.target.dataset.productId;
    //     CartService.increaseQuantity(productId);
    //   });
    // });
    //
    // // Botones de decrementar
    // this.#itemsContainer?.querySelectorAll('.decrease-qty').forEach(btn => {
    //   btn.addEventListener('click', (e) => {
    //     const productId = e.target.dataset.productId;
    //     CartService.decreaseQuantity(productId);
    //   });
    // });
    //
    // // Botones de eliminar
    // this.#itemsContainer?.querySelectorAll('.cart-item-remove').forEach(btn => {
    //   btn.addEventListener('click', (e) => {
    //     const productId = e.target.dataset.productId;
    //     CartService.removeItem(productId);
    //     Notifications.info('Producto eliminado del carrito');
    //   });
    // });
  }

  /**
   * Update cart badge
   * @private
   * @param {number} count
   */
  #updateBadge(count) {
    // TODO: Actualizar número en badge
    // if (this.#countBadge) {
    //   this.#countBadge.textContent = count;
    // }
  }

  /**
   * Update totals display
   * @private
   * @param {Object} state
   */
  #updateTotals(state) {
    // TODO: Actualizar subtotal, envío y total
    // if (this.#subtotalElement) {
    //   this.#subtotalElement.textContent = state.formattedSubtotal;
    // }
    // if (this.#shippingElement) {
    //   this.#shippingElement.textContent = state.shipping === 0 ? 'Gratis' : `$${state.shipping}`;
    // }
    // if (this.#totalElement) {
    //   this.#totalElement.textContent = state.formattedTotal;
    // }
  }

  /**
   * Show empty state
   * @private
   */
  #showEmptyState() {
    // TODO: Mostrar estado vacío
    // this.#itemsContainer?.classList.add('hidden');
    // this.#emptyState?.classList.remove('hidden');
    // this.#footer?.classList.add('hidden');
  }

  /**
   * Hide empty state
   * @private
   */
  #hideEmptyState() {
    // TODO: Ocultar estado vacío
    // this.#itemsContainer?.classList.remove('hidden');
    // this.#emptyState?.classList.add('hidden');
    // this.#footer?.classList.remove('hidden');
  }
}

// Export singleton instance
export const CartView = new CartViewClass();
