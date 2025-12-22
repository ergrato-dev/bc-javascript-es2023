/**
 * Cart Model
 * Represents the shopping cart
 */

import { CartItem } from './CartItem.js';
import { APP_CONFIG } from '../config.js';

export class Cart {
  // TODO: Declarar campos privados
  // #items; // Map<productId, CartItem>

  /**
   * Create a new Cart
   */
  constructor() {
    // TODO: Inicializar items como Map vacío
    // this.#items = new Map();
  }

  // ============================================
  // GETTERS
  // ============================================

  /**
   * Get all items as array
   * @returns {CartItem[]}
   */
  get items() {
    // TODO: Convertir Map values a array
    return [];
  }

  /**
   * Get total number of items (sum of quantities)
   * @returns {number}
   */
  get totalItems() {
    // TODO: Sumar todas las cantidades
    // Usar reduce sobre items
    return 0;
  }

  /**
   * Get number of unique products
   * @returns {number}
   */
  get uniqueItems() {
    // TODO: Retornar tamaño del Map
    return 0;
  }

  /**
   * Calculate cart subtotal
   * @returns {number}
   */
  get subtotal() {
    // TODO: Sumar subtotales de todos los items
    return 0;
  }

  /**
   * Calculate shipping cost
   * @returns {number}
   */
  get shipping() {
    // TODO: Retornar 0 si subtotal >= freeShippingThreshold
    // De lo contrario, calcular costo de envío
    return 0;
  }

  /**
   * Calculate total (subtotal + shipping)
   * @returns {number}
   */
  get total() {
    // TODO: Retornar subtotal + shipping
    return 0;
  }

  /**
   * Get formatted subtotal
   * @returns {string}
   */
  get formattedSubtotal() {
    return `${APP_CONFIG.currencySymbol}${this.subtotal.toFixed(2)}`;
  }

  /**
   * Get formatted total
   * @returns {string}
   */
  get formattedTotal() {
    return `${APP_CONFIG.currencySymbol}${this.total.toFixed(2)}`;
  }

  /**
   * Check if cart is empty
   * @returns {boolean}
   */
  get isEmpty() {
    // TODO: Retornar true si no hay items
    return true;
  }

  // ============================================
  // METHODS
  // ============================================

  /**
   * Add product to cart
   * @param {Object} product - Product to add
   * @param {number} quantity - Quantity to add
   * @returns {CartItem} - The cart item
   */
  addItem(product, quantity = 1) {
    // TODO: Verificar si producto ya existe en carrito
    // Si existe, incrementar cantidad
    // Si no existe, crear nuevo CartItem

    // const existingItem = this.#items.get(product.id);
    // if (existingItem) {
    //   existingItem.increaseQuantity(quantity);
    //   return existingItem;
    // }

    // const newItem = new CartItem(product, quantity);
    // this.#items.set(product.id, newItem);
    // return newItem;

    return null;
  }

  /**
   * Remove product from cart
   * @param {string} productId - Product ID to remove
   * @returns {boolean} - Success status
   */
  removeItem(productId) {
    // TODO: Eliminar item del Map
    return false;
  }

  /**
   * Update item quantity
   * @param {string} productId - Product ID
   * @param {number} quantity - New quantity
   * @returns {boolean} - Success status
   */
  updateQuantity(productId, quantity) {
    // TODO: Buscar item y actualizar cantidad
    // Si quantity <= 0, eliminar item
    return false;
  }

  /**
   * Get item by product ID
   * @param {string} productId
   * @returns {CartItem|undefined}
   */
  getItem(productId) {
    // TODO: Retornar item del Map
    return undefined;
  }

  /**
   * Check if product is in cart
   * @param {string} productId
   * @returns {boolean}
   */
  hasItem(productId) {
    // TODO: Verificar si existe en Map
    return false;
  }

  /**
   * Clear all items from cart
   */
  clear() {
    // TODO: Limpiar el Map
  }

  /**
   * Convert to plain object (for storage)
   * @returns {Object}
   */
  toJSON() {
    // TODO: Convertir items a array de objetos
    return {
      items: [],
    };
  }

  // ============================================
  // STATIC METHODS
  // ============================================

  /**
   * Create Cart from plain object (restored from storage)
   * @param {Object} data - { items: [] }
   * @returns {Cart}
   */
  static fromJSON(data) {
    // TODO: Crear Cart y restaurar items
    const cart = new Cart();

    // if (data?.items && Array.isArray(data.items)) {
    //   data.items.forEach(itemData => {
    //     const item = CartItem.create(itemData);
    //     cart.#items.set(item.productId, item);
    //   });
    // }

    return cart;
  }
}
