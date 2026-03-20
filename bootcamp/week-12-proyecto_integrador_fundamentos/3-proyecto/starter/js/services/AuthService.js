/**
 * Auth Service
 * Handles user authentication (simulated)
 */

import { User } from '../models/User.js';
import { StorageService } from './StorageService.js';

class AuthServiceClass {
  // TODO: Declarar campos privados
  // #currentUser;
  // #listeners;

  constructor() {
    // TODO: Inicializar estado y cargar sesión guardada
    // this.#currentUser = null;
    // this.#listeners = new Set();
    // this.#loadSession();
  }

  // ============================================
  // SESSION MANAGEMENT
  // ============================================

  /**
   * Load saved session
   * @private
   */
  #loadSession() {
    // TODO: Cargar usuario desde StorageService
    // const userData = StorageService.loadUser();
    // if (userData) {
    //   this.#currentUser = User.create(userData);
    // }
  }

  /**
   * Save current session
   * @private
   */
  #saveSession() {
    // TODO: Guardar usuario en StorageService
    // if (this.#currentUser) {
    //   StorageService.saveUser(this.#currentUser.toJSON());
    // }
  }

  /**
   * Notify listeners about auth changes
   * @private
   */
  #notifyListeners() {
    // TODO: Notificar a todos los listeners
    // this.#listeners.forEach(callback => {
    //   callback(this.getState());
    // });
  }

  // ============================================
  // GETTERS
  // ============================================

  /**
   * Get current auth state
   * @returns {Object}
   */
  getState() {
    // TODO: Retornar estado de autenticación
    // return {
    //   isAuthenticated: this.isAuthenticated,
    //   user: this.#currentUser
    // };
    return {
      isAuthenticated: false,
      user: null,
    };
  }

  /**
   * Check if user is authenticated
   * @returns {boolean}
   */
  get isAuthenticated() {
    // TODO: Retornar true si hay usuario logueado
    return false;
  }

  /**
   * Get current user
   * @returns {User|null}
   */
  get currentUser() {
    // TODO: Retornar usuario actual
    return null;
  }

  // ============================================
  // AUTHENTICATION
  // ============================================

  /**
   * Register new user
   * @param {Object} userData - { name, email, password }
   * @returns {Object} - { success, user?, error? }
   */
  register({ name, email, password }) {
    // TODO: Implementar registro
    // try {
    //   // Validar email
    //   if (!User.isValidEmail(email)) {
    //     return { success: false, error: 'Invalid email format' };
    //   }
    //
    //   // Validar password
    //   const passwordValidation = User.validatePassword(password);
    //   if (!passwordValidation.valid) {
    //     return { success: false, error: passwordValidation.errors.join(', ') };
    //   }
    //
    //   // Crear usuario (simulado - no hay backend)
    //   const user = User.create({ name, email });
    //   this.#currentUser = user;
    //   this.#saveSession();
    //   this.#notifyListeners();
    //
    //   return { success: true, user };
    // } catch (error) {
    //   return { success: false, error: error.message };
    // }
    return { success: false, error: 'Not implemented' };
  }

  /**
   * Login user
   * @param {Object} credentials - { email, password }
   * @returns {Object} - { success, user?, error? }
   */
  login({ email, password }) {
    // TODO: Implementar login (simulado)
    // try {
    //   // Validar email
    //   if (!User.isValidEmail(email)) {
    //     return { success: false, error: 'Invalid email format' };
    //   }
    //
    //   // Validar password
    //   if (!password || password.length < 6) {
    //     return { success: false, error: 'Password must be at least 6 characters' };
    //   }
    //
    //   // Simular login exitoso
    //   // En una app real, verificaríamos contra un backend
    //   const user = User.create({
    //     name: email.split('@')[0],
    //     email
    //   });
    //
    //   this.#currentUser = user;
    //   this.#saveSession();
    //   this.#notifyListeners();
    //
    //   return { success: true, user };
    // } catch (error) {
    //   return { success: false, error: error.message };
    // }
    return { success: false, error: 'Not implemented' };
  }

  /**
   * Logout current user
   */
  logout() {
    // TODO: Implementar logout
    // this.#currentUser = null;
    // StorageService.clearUser();
    // this.#notifyListeners();
  }

  // ============================================
  // SUBSCRIPTIONS
  // ============================================

  /**
   * Subscribe to auth changes
   * @param {Function} callback
   * @returns {Function} - Unsubscribe function
   */
  subscribe(callback) {
    // TODO: Agregar listener y retornar unsubscribe
    // this.#listeners.add(callback);
    // return () => this.#listeners.delete(callback);
    return () => {};
  }
}

// Export singleton instance
export const AuthService = new AuthServiceClass();
