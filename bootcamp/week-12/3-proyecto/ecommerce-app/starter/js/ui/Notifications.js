/**
 * Notifications UI Component
 * Shows toast notifications
 */

class NotificationsClass {
  // TODO: Declarar campos privados
  // #container;
  // #defaultDuration;

  constructor() {
    // TODO: Obtener contenedor de notificaciones del DOM
    // this.#container = document.getElementById('notifications');
    // this.#defaultDuration = 3000;
  }

  /**
   * Show a notification
   * @param {string} message - Message to display
   * @param {string} type - Type: 'success', 'error', 'warning', 'info'
   * @param {number} duration - Duration in ms
   */
  show(message, type = 'info', duration = 3000) {
    // TODO: Crear elemento de notificación
    // const notification = document.createElement('div');
    // notification.className = `notification ${type}`;
    // notification.textContent = message;
    //
    // // Agregar al contenedor
    // this.#container?.appendChild(notification);
    //
    // // Auto-remove después de duration
    // setTimeout(() => {
    //   notification.remove();
    // }, duration);

    // Fallback: console.log mientras no esté implementado
    console.log(`[${type.toUpperCase()}] ${message}`);
  }

  /**
   * Show success notification
   * @param {string} message
   */
  success(message) {
    this.show(message, 'success');
  }

  /**
   * Show error notification
   * @param {string} message
   */
  error(message) {
    this.show(message, 'error');
  }

  /**
   * Show warning notification
   * @param {string} message
   */
  warning(message) {
    this.show(message, 'warning');
  }

  /**
   * Show info notification
   * @param {string} message
   */
  info(message) {
    this.show(message, 'info');
  }
}

// Export singleton instance
export const Notifications = new NotificationsClass();
