/**
 * Product Model
 * Represents a product in the inventory
 */

// TODO: Import CATEGORIES from config
// import { CATEGORIES } from '../config.js';

class Product {
  // TODO: Use static property for auto-increment ID
  static nextId = 1;

  /**
   * Create a new Product
   * TODO: Use destructuring in constructor parameter
   * @param {Object} productData - Product data
   */
  constructor({ name, category, price, quantity }) {
    // TODO: Implement constructor
    // - Assign auto-increment id
    // - Set name, category, price, quantity
    // - Set createdAt timestamp
    // - Set updatedAt timestamp
  }

  /**
   * Calculate total value (price * quantity)
   * @returns {number}
   */
  get totalValue() {
    // TODO: Implement getter
  }

  /**
   * Check if stock is low
   * TODO: Import STOCK_THRESHOLDS and use it
   * @returns {boolean}
   */
  get isLowStock() {
    // TODO: Implement getter
  }

  /**
   * Check if out of stock
   * @returns {boolean}
   */
  get isOutOfStock() {
    // TODO: Implement getter
  }

  /**
   * Update product data
   * TODO: Use destructuring with defaults
   * @param {Object} updates - Fields to update
   * @returns {Product} - Returns this for chaining
   */
  update(updates) {
    // TODO: Implement update method
    // - Use destructuring to get only allowed fields
    // - Update only provided fields
    // - Update updatedAt timestamp
    // - Return this for chaining
  }

  /**
   * Convert to plain object
   * TODO: Use shorthand properties
   * @returns {Object}
   */
  toJSON() {
    // TODO: Return plain object with all properties
    const { id, name, category, price, quantity, createdAt, updatedAt } = this;
    return { id, name, category, price, quantity, createdAt, updatedAt };
  }

  /**
   * Create Product from plain object (from localStorage)
   * TODO: Use static method with destructuring
   * @param {Object} data - Plain object data
   * @returns {Product}
   */
  static fromJSON(data) {
    // TODO: Reconstruct Product from saved data
    // - Create new Product with data
    // - Restore original id, createdAt, updatedAt
  }
}

// TODO: Export as default
// export default Product;
