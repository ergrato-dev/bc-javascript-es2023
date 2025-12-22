/**
 * AuthView UI Component
 * Handles login/register modal and user display
 */

import { AuthService } from '../services/AuthService.js';
import { Notifications } from './Notifications.js';

class AuthViewClass {
  // TODO: Declarar campos privados
  // #modal;
  // #overlay;
  // #form;
  // #userArea;
  // #isLoginMode;

  constructor() {
    // TODO: Obtener elementos del DOM
    // this.#modal = document.getElementById('loginModal');
    // this.#overlay = document.getElementById('modalOverlay');
    // this.#form = document.getElementById('authForm');
    // this.#userArea = document.getElementById('userArea');
    // this.#isLoginMode = true;
  }

  /**
   * Initialize component
   */
  init() {
    // TODO: Configurar event listeners y suscribirse a cambios
    // this.#setupModalButtons();
    // this.#setupForm();
    // this.#setupModeSwitch();
    //
    // // Suscribirse a cambios de auth
    // AuthService.subscribe(() => this.render());
    //
    // // Render inicial
    // this.render();
  }

  /**
   * Set up modal open/close buttons
   * @private
   */
  #setupModalButtons() {
    // TODO: Configurar apertura/cierre del modal
    // const loginBtn = document.getElementById('loginBtn');
    // const closeBtn = document.getElementById('closeModal');
    //
    // loginBtn?.addEventListener('click', () => this.openModal());
    // closeBtn?.addEventListener('click', () => this.closeModal());
    // this.#overlay?.addEventListener('click', () => this.closeModal());
  }

  /**
   * Set up form submission
   * @private
   */
  #setupForm() {
    // TODO: Manejar submit del formulario
    // this.#form?.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //
    //   const formData = new FormData(e.target);
    //   const email = document.getElementById('emailInput')?.value;
    //   const password = document.getElementById('passwordInput')?.value;
    //   const name = document.getElementById('nameInput')?.value;
    //
    //   if (this.#isLoginMode) {
    //     this.#handleLogin({ email, password });
    //   } else {
    //     this.#handleRegister({ name, email, password });
    //   }
    // });
  }

  /**
   * Set up mode switch (login/register)
   * @private
   */
  #setupModeSwitch() {
    // TODO: Configurar cambio entre login y registro
    // const switchLink = document.getElementById('switchToRegister');
    // switchLink?.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   this.#toggleMode();
    // });
  }

  /**
   * Handle login
   * @private
   * @param {Object} credentials
   */
  #handleLogin({ email, password }) {
    // TODO: Intentar login
    // const result = AuthService.login({ email, password });
    //
    // if (result.success) {
    //   Notifications.success(`¡Bienvenido, ${result.user.firstName}!`);
    //   this.closeModal();
    //   this.#clearForm();
    // } else {
    //   this.#showError(result.error);
    // }
  }

  /**
   * Handle registration
   * @private
   * @param {Object} userData
   */
  #handleRegister({ name, email, password }) {
    // TODO: Intentar registro
    // const result = AuthService.register({ name, email, password });
    //
    // if (result.success) {
    //   Notifications.success(`¡Cuenta creada! Bienvenido, ${result.user.firstName}!`);
    //   this.closeModal();
    //   this.#clearForm();
    // } else {
    //   this.#showError(result.error);
    // }
  }

  /**
   * Toggle between login and register mode
   * @private
   */
  #toggleMode() {
    // TODO: Cambiar modo y actualizar UI
    // this.#isLoginMode = !this.#isLoginMode;
    //
    // const modalTitle = document.getElementById('modalTitle');
    // const submitBtn = document.getElementById('submitAuth');
    // const nameGroup = document.getElementById('nameGroup');
    // const switchText = document.getElementById('authSwitch');
    //
    // if (this.#isLoginMode) {
    //   modalTitle.textContent = 'Iniciar Sesión';
    //   submitBtn.textContent = 'Iniciar Sesión';
    //   nameGroup.style.display = 'none';
    //   switchText.innerHTML = '¿No tienes cuenta? <a href="#" id="switchToRegister">Regístrate</a>';
    // } else {
    //   modalTitle.textContent = 'Crear Cuenta';
    //   submitBtn.textContent = 'Registrarse';
    //   nameGroup.style.display = 'block';
    //   switchText.innerHTML = '¿Ya tienes cuenta? <a href="#" id="switchToRegister">Inicia sesión</a>';
    // }
    //
    // // Re-attach switch listener
    // this.#setupModeSwitch();
    // this.#clearError();
  }

  /**
   * Open modal
   */
  openModal() {
    // TODO: Mostrar modal
    // this.#modal?.classList.remove('hidden');
    // this.#overlay?.classList.remove('hidden');
  }

  /**
   * Close modal
   */
  closeModal() {
    // TODO: Ocultar modal
    // this.#modal?.classList.add('hidden');
    // this.#overlay?.classList.add('hidden');
  }

  /**
   * Render user area based on auth state
   */
  render() {
    // TODO: Actualizar área de usuario
    // const state = AuthService.getState();
    //
    // if (state.isAuthenticated && state.user) {
    //   this.#renderLoggedIn(state.user);
    // } else {
    //   this.#renderLoggedOut();
    // }

    console.log('AuthView.render() - TODO: Implementar');
  }

  /**
   * Render logged in state
   * @private
   * @param {User} user
   */
  #renderLoggedIn(user) {
    // TODO: Mostrar información del usuario
    // this.#userArea.innerHTML = `
    //   <div class="user-info">
    //     <div class="user-avatar">${user.initials}</div>
    //     <span class="user-name">${user.firstName}</span>
    //     <button class="btn btn-secondary" id="logoutBtn">Salir</button>
    //   </div>
    // `;
    //
    // // Agregar listener a logout
    // document.getElementById('logoutBtn')?.addEventListener('click', () => {
    //   AuthService.logout();
    //   Notifications.info('Sesión cerrada');
    // });
  }

  /**
   * Render logged out state
   * @private
   */
  #renderLoggedOut() {
    // TODO: Mostrar botón de login
    // this.#userArea.innerHTML = `
    //   <button class="btn btn-secondary" id="loginBtn">👤 Login</button>
    // `;
    //
    // // Re-attach listener
    // document.getElementById('loginBtn')?.addEventListener('click', () => this.openModal());
  }

  /**
   * Show error message
   * @private
   * @param {string} message
   */
  #showError(message) {
    // TODO: Mostrar error en el formulario
    // const errorElement = document.getElementById('formError');
    // if (errorElement) {
    //   errorElement.textContent = message;
    //   errorElement.classList.remove('hidden');
    // }
  }

  /**
   * Clear error message
   * @private
   */
  #clearError() {
    // TODO: Ocultar error
    // const errorElement = document.getElementById('formError');
    // if (errorElement) {
    //   errorElement.textContent = '';
    //   errorElement.classList.add('hidden');
    // }
  }

  /**
   * Clear form inputs
   * @private
   */
  #clearForm() {
    // TODO: Limpiar formulario
    // this.#form?.reset();
    // this.#clearError();
  }
}

// Export singleton instance
export const AuthView = new AuthViewClass();
