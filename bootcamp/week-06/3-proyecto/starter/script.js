/**
 * ============================================
 * VALIDADOR DE FORMULARIOS
 * Semana 06: Strings y RegExp Modernos
 * ============================================
 *
 * Implementa las validaciones usando RegExp y
 * métodos modernos de strings.
 */

// ============================================
// PATRONES REGEXP
// ============================================

/**
 * Define los patrones de validación para cada campo.
 * Usa expresiones regulares modernas con flags apropiados.
 */
const patterns = {
  // Nombre: 2-50 caracteres, letras, espacios y tildes
  // Ej: "Juan García", "María José López"
  name: null, // TODO: Implementar patrón

  // Email: formato estándar
  // Ej: "usuario@dominio.com"
  email: null, // TODO: Implementar patrón

  // Teléfono: formato internacional o local
  // Ej: "+34 612 345 678", "612345678"
  phone: null, // TODO: Implementar patrón

  // Contraseña: mín 8 chars, mayúscula, minúscula, número, especial
  // Cada requisito se valida por separado
  password: {
    minLength: null, // TODO: mínimo 8 caracteres
    uppercase: null, // TODO: al menos una mayúscula
    lowercase: null, // TODO: al menos una minúscula
    number: null, // TODO: al menos un número
    special: null, // TODO: al menos un carácter especial
  },

  // Fecha: DD/MM/YYYY
  // Usa grupos nombrados: (?<day>...) (?<month>...) (?<year>...)
  date: null, // TODO: Implementar patrón con grupos nombrados

  // Código postal: 5 dígitos
  postal: null, // TODO: Implementar patrón

  // URL: http o https
  url: null, // TODO: Implementar patrón
};

// ============================================
// FUNCIONES DE VALIDACIÓN
// ============================================

/**
 * Objeto con funciones de validación para cada campo.
 * Cada función retorna: { isValid, message, formatted? }
 */
const validators = {
  /**
   * Valida el nombre completo
   * @param {string} value - Valor a validar
   * @returns {{ isValid: boolean, message: string }}
   */
  validateName(value) {
    // TODO: Implementar validación
    // - Verificar que no esté vacío
    // - Verificar que cumpla el patrón
    // - Retornar mensaje apropiado

    return {
      isValid: false,
      message: 'Validación no implementada',
    };
  },

  /**
   * Valida el email
   * @param {string} value - Valor a validar
   * @returns {{ isValid: boolean, message: string }}
   */
  validateEmail(value) {
    // TODO: Implementar validación

    return {
      isValid: false,
      message: 'Validación no implementada',
    };
  },

  /**
   * Valida y formatea el teléfono
   * @param {string} value - Valor a validar
   * @returns {{ isValid: boolean, message: string, formatted: string }}
   */
  validatePhone(value) {
    // TODO: Implementar validación
    // - Limpiar caracteres no numéricos (excepto +)
    // - Verificar longitud mínima
    // - Formatear como +XX XXX XXX XXX

    return {
      isValid: false,
      message: 'Validación no implementada',
      formatted: value,
    };
  },

  /**
   * Valida la contraseña y calcula fortaleza
   * @param {string} value - Valor a validar
   * @returns {{ isValid: boolean, message: string, strength: number }}
   */
  validatePassword(value) {
    // TODO: Implementar validación
    // - Verificar cada requisito individualmente
    // - Calcular puntuación de fortaleza (0-5)
    // - Retornar mensaje con requisitos faltantes

    return {
      isValid: false,
      message: 'Validación no implementada',
      strength: 0,
    };
  },

  /**
   * Valida que las contraseñas coincidan
   * @param {string} password - Contraseña original
   * @param {string} confirm - Confirmación
   * @returns {{ isValid: boolean, message: string }}
   */
  validateConfirmPassword(password, confirm) {
    // TODO: Implementar validación

    return {
      isValid: false,
      message: 'Validación no implementada',
    };
  },

  /**
   * Valida la fecha de nacimiento y calcula edad
   * @param {string} value - Valor a validar (DD/MM/YYYY)
   * @returns {{ isValid: boolean, message: string, age: number }}
   */
  validateBirthdate(value) {
    // TODO: Implementar validación
    // - Verificar formato con grupos nombrados
    // - Extraer día, mes, año
    // - Calcular edad
    // - Verificar que sea mayor de 18 y menor de 120

    return {
      isValid: false,
      message: 'Validación no implementada',
      age: 0,
    };
  },

  /**
   * Valida el código postal
   * @param {string} value - Valor a validar
   * @returns {{ isValid: boolean, message: string }}
   */
  validatePostal(value) {
    // TODO: Implementar validación

    return {
      isValid: false,
      message: 'Validación no implementada',
    };
  },

  /**
   * Valida la URL (opcional)
   * @param {string} value - Valor a validar
   * @returns {{ isValid: boolean, message: string }}
   */
  validateUrl(value) {
    // TODO: Implementar validación
    // - Si está vacío, es válido (campo opcional)
    // - Si tiene valor, verificar formato

    return {
      isValid: true,
      message: '',
    };
  },
};

// ============================================
// FUNCIONES AUXILIARES
// ============================================

/**
 * Sanitiza el input para prevenir XSS
 * @param {string} input - Texto a sanitizar
 * @returns {string} Texto sanitizado
 */
const sanitizeInput = input => {
  // TODO: Implementar sanitización
  // Escapar: < > & " '

  return input;
};

/**
 * Obtiene el nivel de fortaleza como texto
 * @param {number} strength - Puntuación 0-5
 * @returns {{ class: string, text: string }}
 */
const getStrengthLevel = strength => {
  // TODO: Implementar
  // 0-1: weak, 2: fair, 3-4: good, 5: strong

  return { class: '', text: '' };
};

/**
 * Formatea el teléfono con espacios
 * @param {string} phone - Teléfono limpio
 * @returns {string} Teléfono formateado
 */
const formatPhoneNumber = phone => {
  // TODO: Implementar formateo
  // Ej: "34612345678" -> "+34 612 345 678"

  return phone;
};

// ============================================
// MANEJO DEL DOM
// ============================================

/**
 * Actualiza el estado visual de un campo
 * @param {HTMLInputElement} input - Elemento input
 * @param {boolean} isValid - Estado de validación
 * @param {string} message - Mensaje de error
 */
const updateFieldState = (input, isValid, message) => {
  const errorElement = document.getElementById(`${input.id}Error`);

  // Remover clases anteriores
  input.classList.remove('valid', 'invalid');

  if (input.value.trim() === '') {
    // Campo vacío - sin estado
    if (errorElement) errorElement.textContent = '';
    return;
  }

  // Aplicar nuevo estado
  input.classList.add(isValid ? 'valid' : 'invalid');

  if (errorElement) {
    errorElement.textContent = isValid ? '' : message;
  }
};

/**
 * Actualiza el medidor de fortaleza de contraseña
 * @param {number} strength - Puntuación 0-5
 */
const updateStrengthMeter = strength => {
  const bar = document.getElementById('strengthBar');
  const text = document.getElementById('strengthText');

  if (!bar || !text) return;

  const level = getStrengthLevel(strength);

  // Remover clases anteriores
  bar.className = 'strength-bar';

  if (strength > 0) {
    bar.classList.add(level.class);
    text.textContent = level.text;
  } else {
    text.textContent = '';
  }
};

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const result = document.getElementById('result');
  const formData = document.getElementById('formData');

  // Obtener inputs
  const inputs = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword'),
    birthdate: document.getElementById('birthdate'),
    postal: document.getElementById('postal'),
    website: document.getElementById('website'),
  };

  // Estado de validación
  const validationState = {
    name: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
    birthdate: false,
    postal: false,
    website: true, // Opcional, válido por defecto
  };

  // ----------------------------------------
  // VALIDACIÓN EN TIEMPO REAL
  // ----------------------------------------

  // Nombre
  inputs.name?.addEventListener('input', e => {
    const { isValid, message } = validators.validateName(e.target.value);
    validationState.name = isValid;
    updateFieldState(e.target, isValid, message);
  });

  // Email
  inputs.email?.addEventListener('input', e => {
    const { isValid, message } = validators.validateEmail(e.target.value);
    validationState.email = isValid;
    updateFieldState(e.target, isValid, message);
  });

  // Teléfono
  inputs.phone?.addEventListener('input', e => {
    const { isValid, message, formatted } = validators.validatePhone(
      e.target.value
    );
    validationState.phone = isValid;
    updateFieldState(e.target, isValid, message);

    // Aplicar formateo automático
    if (formatted && formatted !== e.target.value) {
      e.target.value = formatted;
    }
  });

  // Contraseña
  inputs.password?.addEventListener('input', e => {
    const { isValid, message, strength } = validators.validatePassword(
      e.target.value
    );
    validationState.password = isValid;
    updateFieldState(e.target, isValid, message);
    updateStrengthMeter(strength);

    // Re-validar confirmación si tiene valor
    if (inputs.confirmPassword?.value) {
      const confirmResult = validators.validateConfirmPassword(
        e.target.value,
        inputs.confirmPassword.value
      );
      validationState.confirmPassword = confirmResult.isValid;
      updateFieldState(
        inputs.confirmPassword,
        confirmResult.isValid,
        confirmResult.message
      );
    }
  });

  // Confirmar contraseña
  inputs.confirmPassword?.addEventListener('input', e => {
    const { isValid, message } = validators.validateConfirmPassword(
      inputs.password?.value || '',
      e.target.value
    );
    validationState.confirmPassword = isValid;
    updateFieldState(e.target, isValid, message);
  });

  // Fecha de nacimiento
  inputs.birthdate?.addEventListener('input', e => {
    const { isValid, message } = validators.validateBirthdate(e.target.value);
    validationState.birthdate = isValid;
    updateFieldState(e.target, isValid, message);
  });

  // Código postal
  inputs.postal?.addEventListener('input', e => {
    const { isValid, message } = validators.validatePostal(e.target.value);
    validationState.postal = isValid;
    updateFieldState(e.target, isValid, message);
  });

  // URL (opcional)
  inputs.website?.addEventListener('input', e => {
    const { isValid, message } = validators.validateUrl(e.target.value);
    validationState.website = isValid;
    updateFieldState(e.target, isValid, message);
  });

  // ----------------------------------------
  // ENVÍO DEL FORMULARIO
  // ----------------------------------------

  form?.addEventListener('submit', e => {
    e.preventDefault();

    // Verificar que todos los campos sean válidos
    const allValid = Object.values(validationState).every(
      isValid => isValid === true
    );

    if (!allValid) {
      // Encontrar primer campo inválido
      const firstInvalid = Object.entries(validationState).find(
        ([, isValid]) => !isValid
      );

      if (firstInvalid && inputs[firstInvalid[0]]) {
        inputs[firstInvalid[0]].focus();
      }

      return;
    }

    // Recopilar datos sanitizados
    const data = {
      name: sanitizeInput(inputs.name?.value || ''),
      email: sanitizeInput(inputs.email?.value || ''),
      phone: sanitizeInput(inputs.phone?.value || ''),
      birthdate: sanitizeInput(inputs.birthdate?.value || ''),
      postal: sanitizeInput(inputs.postal?.value || ''),
      website: sanitizeInput(inputs.website?.value || ''),
    };

    // Mostrar resultado
    if (result && formData) {
      formData.textContent = JSON.stringify(data, null, 2);
      result.classList.remove('hidden');
      result.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // ----------------------------------------
  // RESET
  // ----------------------------------------

  form?.addEventListener('reset', () => {
    // Limpiar estados
    Object.keys(validationState).forEach(key => {
      validationState[key] = key === 'website';
    });

    // Limpiar clases
    Object.values(inputs).forEach(input => {
      input?.classList.remove('valid', 'invalid');
    });

    // Limpiar mensajes de error
    document.querySelectorAll('.error-message').forEach(el => {
      el.textContent = '';
    });

    // Limpiar medidor de fortaleza
    updateStrengthMeter(0);

    // Ocultar resultado
    result?.classList.add('hidden');
  });
});

// ============================================
// EXPORTACIONES (para testing)
// ============================================

// Si estamos en un entorno de módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    patterns,
    validators,
    sanitizeInput,
    getStrengthLevel,
    formatPhoneNumber,
  };
}
