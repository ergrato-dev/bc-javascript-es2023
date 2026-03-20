/**
 * CartItem Model
 * Represents an item in the shopping cart
 */

export class CartItem {
  // TODO: Declarar campos privados
  // #product;
  // #quantity;

  /**
   * Create a new CartItem
   * @param {Object} product - Product data or Product instance
   * @param {number} quantity - Initial quantity
   */
  constructor(product, quantity = 1) {
    // TODO: Validar que product existe
    // if (!product) {
    //   throw new Error('CartItem requires a product');
    // }
    // TODO: Validar que quantity es válida (>= 1)
    // if (quantity < 1) {
    //   throw new Error('Quantity must be at least 1');
    // }
    // TODO: Asignar valores
    // this.#product = product;
    // this.#quantity = quantity;
  }

  // ============================================
  // GETTERS
  // ============================================

  // TODO: Implementar getters
  // get product() { return this.#product; }
  // get quantity() { return this.#quantity; }

  /**
   * Get product ID (shortcut)
   * @returns {string}
   */
  get productId() {
    // TODO: Retornar ID del producto
    return '';
  }

  /**
   * Calculate subtotal for this item
   * @returns {number}
   */
  get subtotal() {
    // TODO: Calcular precio * cantidad
    return 0;
  }

  /**
   * Get formatted subtotal
   * @returns {string}
   */
  get formattedSubtotal() {
    // TODO: Retornar subtotal formateado
    return '$0';
  }

  // ============================================
  // METHODS
  // ============================================

  /**
   * Increase quantity
   * @param {number} amount
   */
  increaseQuantity(amount = 1) {
    // TODO: Incrementar cantidad
    // TODO: Considerar límite máximo (ej: 10)
  }

  /**
   * Decrease quantity
   * @param {number} amount
   * @returns {boolean} - false si cantidad llega a 0
   */
  decreaseQuantity(amount = 1) {
    // TODO: Decrementar cantidad
    // TODO: Retornar false si quantity <= 0
    return true;
  }

  /**
   * Set specific quantity
   * @param {number} quantity
   */
  setQuantity(quantity) {
    // TODO: Validar y establecer cantidad
  }

  /**
   * Convert to plain object (for storage)
   * @returns {Object}
   */
  toJSON() {
    // TODO: Retornar objeto plano
    // Incluir product como objeto y quantity
    return {};
  }

  // ============================================
  // STATIC METHODS
  // ============================================

  /**
   * Create CartItem from plain object
   * @param {Object} data - { product, quantity }
   * @returns {CartItem}
   */
  static create(data) {
    // TODO: Crear CartItem desde datos guardados
    return new CartItem(data.product, data.quantity);
  }
}
