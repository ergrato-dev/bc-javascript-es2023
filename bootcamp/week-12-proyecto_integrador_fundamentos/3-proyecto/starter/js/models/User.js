/**
 * User Model
 * Represents a user account
 */

export class User {
  // TODO: Declarar campos privados
  // #id;
  // #name;
  // #email;
  // #createdAt;

  /**
   * Create a new User
   * @param {Object} data - User data
   */
  constructor({ id, name, email, createdAt }) {
    // TODO: Validar email
    // if (!User.isValidEmail(email)) {
    //   throw new Error('Invalid email format');
    // }
    // TODO: Asignar valores a campos privados
    // this.#id = id ?? crypto.randomUUID();
    // this.#name = name;
    // this.#email = email;
    // this.#createdAt = createdAt ?? new Date().toISOString();
  }

  // ============================================
  // GETTERS
  // ============================================

  // TODO: Implementar getters
  // get id() { return this.#id; }
  // get name() { return this.#name; }
  // get email() { return this.#email; }
  // get createdAt() { return this.#createdAt; }

  /**
   * Get user initials for avatar
   * @returns {string}
   */
  get initials() {
    // TODO: Extraer iniciales del nombre
    // Ejemplo: "John Doe" -> "JD"
    return '';
  }

  /**
   * Get first name
   * @returns {string}
   */
  get firstName() {
    // TODO: Extraer primer nombre
    return '';
  }

  // ============================================
  // METHODS
  // ============================================

  /**
   * Convert to plain object (for storage)
   * @returns {Object}
   */
  toJSON() {
    // TODO: Retornar objeto plano
    return {};
  }

  // ============================================
  // STATIC METHODS
  // ============================================

  /**
   * Validate email format
   * @param {string} email
   * @returns {boolean}
   */
  static isValidEmail(email) {
    // TODO: Validar formato de email con regex
    // Regex simple: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return false;
  }

  /**
   * Validate password strength
   * @param {string} password
   * @returns {Object} - { valid: boolean, errors: string[] }
   */
  static validatePassword(password) {
    // TODO: Validar contraseña
    // Requisitos mínimos:
    // - Al menos 6 caracteres
    // - Al menos una letra
    // - Al menos un número
    return { valid: false, errors: [] };
  }

  /**
   * Create User from plain object
   * @param {Object} data
   * @returns {User}
   */
  static create(data) {
    return new User(data);
  }
}
