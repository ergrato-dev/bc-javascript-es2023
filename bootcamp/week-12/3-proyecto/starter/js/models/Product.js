/**
 * Product Model
 * Represents a product in the store catalog
 */

export class Product {
  // TODO: Declarar campos privados
  // #id;
  // #name;
  // #description;
  // #price;
  // #category;
  // #image;
  // #stock;
  // #rating;

  /**
   * Create a new Product
   * @param {Object} data - Product data
   */
  constructor(data) {
    // TODO: Usar destructuring para extraer propiedades de data
    // const { id, name, description, price, category, image, stock, rating } = data;
    // TODO: Validar datos requeridos
    // if (!id || !name || price === undefined) {
    //   throw new Error('Product requires id, name, and price');
    // }
    // TODO: Asignar valores a campos privados
    // this.#id = id;
    // this.#name = name;
    // this.#description = description ?? '';
    // this.#price = price;
    // this.#category = category ?? 'uncategorized';
    // this.#image = image ?? '📦';
    // this.#stock = stock ?? 0;
    // this.#rating = rating ?? 0;
  }

  // ============================================
  // GETTERS
  // ============================================

  // TODO: Implementar getters para acceder a campos privados
  // get id() { return this.#id; }
  // get name() { return this.#name; }
  // get description() { return this.#description; }
  // get price() { return this.#price; }
  // get category() { return this.#category; }
  // get image() { return this.#image; }
  // get stock() { return this.#stock; }
  // get rating() { return this.#rating; }

  // ============================================
  // COMPUTED PROPERTIES
  // ============================================

  /**
   * Check if product is in stock
   * @returns {boolean}
   */
  get isInStock() {
    // TODO: Retornar true si stock > 0
    return false;
  }

  /**
   * Get formatted price with currency symbol
   * @returns {string}
   */
  get formattedPrice() {
    // TODO: Retornar precio formateado (ej: "$999")
    return '$0';
  }

  /**
   * Get rating as stars
   * @returns {string}
   */
  get ratingStars() {
    // TODO: Convertir rating numérico a estrellas
    // Ejemplo: 4.5 -> "⭐⭐⭐⭐½"
    return '';
  }

  // ============================================
  // METHODS
  // ============================================

  /**
   * Decrease stock by quantity
   * @param {number} quantity - Amount to decrease
   * @returns {boolean} - Success status
   */
  decreaseStock(quantity = 1) {
    // TODO: Validar que hay suficiente stock
    // TODO: Decrementar stock
    // TODO: Retornar true si fue exitoso, false si no hay stock
    return false;
  }

  /**
   * Increase stock by quantity
   * @param {number} quantity - Amount to increase
   */
  increaseStock(quantity = 1) {
    // TODO: Incrementar stock
  }

  /**
   * Convert to plain object (for storage)
   * @returns {Object}
   */
  toJSON() {
    // TODO: Retornar objeto plano con todas las propiedades
    return {};
  }

  // ============================================
  // STATIC METHODS
  // ============================================

  /**
   * Create Product from plain object
   * @param {Object} data - Product data
   * @returns {Product}
   */
  static create(data) {
    // TODO: Validar data y crear nueva instancia
    return new Product(data);
  }

  /**
   * Create multiple products from array
   * @param {Array} dataArray - Array of product data
   * @returns {Product[]}
   */
  static createMany(dataArray) {
    // TODO: Usar map para crear array de Products
    return [];
  }
}
