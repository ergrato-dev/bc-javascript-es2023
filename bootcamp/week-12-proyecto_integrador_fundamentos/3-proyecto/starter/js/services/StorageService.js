/**
 * Storage Service
 * Handles localStorage operations with error handling
 */

import { STORAGE_KEYS } from '../config.js';

class StorageServiceClass {
  // ============================================
  // GENERIC METHODS
  // ============================================

  /**
   * Save data to localStorage
   * @param {string} key - Storage key
   * @param {*} data - Data to save
   * @returns {boolean} - Success status
   */
  save(key, data) {
    // TODO: Implementar guardado en localStorage
    // try {
    //   const serialized = JSON.stringify(data);
    //   localStorage.setItem(key, serialized);
    //   return true;
    // } catch (error) {
    //   console.error(`Error saving to localStorage: ${error.message}`);
    //   return false;
    // }
    return false;
  }

  /**
   * Load data from localStorage
   * @param {string} key - Storage key
   * @param {*} defaultValue - Default value if not found
   * @returns {*} - Parsed data or default value
   */
  load(key, defaultValue = null) {
    // TODO: Implementar carga desde localStorage
    // try {
    //   const serialized = localStorage.getItem(key);
    //   if (serialized === null) {
    //     return defaultValue;
    //   }
    //   return JSON.parse(serialized);
    // } catch (error) {
    //   console.error(`Error loading from localStorage: ${error.message}`);
    //   return defaultValue;
    // }
    return defaultValue;
  }

  /**
   * Remove data from localStorage
   * @param {string} key - Storage key
   * @returns {boolean} - Success status
   */
  remove(key) {
    // TODO: Implementar eliminación
    // try {
    //   localStorage.removeItem(key);
    //   return true;
    // } catch (error) {
    //   console.error(`Error removing from localStorage: ${error.message}`);
    //   return false;
    // }
    return false;
  }

  /**
   * Check if key exists
   * @param {string} key - Storage key
   * @returns {boolean}
   */
  exists(key) {
    // TODO: Verificar si existe la clave
    return false;
  }

  /**
   * Clear all app data
   */
  clearAll() {
    // TODO: Eliminar todas las claves de la app
    // Object.values(STORAGE_KEYS).forEach(key => {
    //   this.remove(key);
    // });
  }

  // ============================================
  // CART SPECIFIC METHODS
  // ============================================

  /**
   * Save cart data
   * @param {Object} cartData
   * @returns {boolean}
   */
  saveCart(cartData) {
    // TODO: Guardar carrito usando STORAGE_KEYS.cart
    return this.save(STORAGE_KEYS.cart, cartData);
  }

  /**
   * Load cart data
   * @returns {Object|null}
   */
  loadCart() {
    // TODO: Cargar carrito
    return this.load(STORAGE_KEYS.cart, null);
  }

  /**
   * Clear cart data
   */
  clearCart() {
    // TODO: Eliminar carrito
    this.remove(STORAGE_KEYS.cart);
  }

  // ============================================
  // USER SPECIFIC METHODS
  // ============================================

  /**
   * Save user session
   * @param {Object} userData
   * @returns {boolean}
   */
  saveUser(userData) {
    // TODO: Guardar usuario usando STORAGE_KEYS.user
    return this.save(STORAGE_KEYS.user, userData);
  }

  /**
   * Load user session
   * @returns {Object|null}
   */
  loadUser() {
    // TODO: Cargar usuario
    return this.load(STORAGE_KEYS.user, null);
  }

  /**
   * Clear user session
   */
  clearUser() {
    // TODO: Eliminar sesión de usuario
    this.remove(STORAGE_KEYS.user);
  }
}

// Export singleton instance
export const StorageService = new StorageServiceClass();
