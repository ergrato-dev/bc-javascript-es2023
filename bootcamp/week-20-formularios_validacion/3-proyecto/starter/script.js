// ============================================
// PROYECTO: Registro y Login con Validación
// ============================================

const dom = {
  registerForm: document.querySelector('#register-form'),
  loginForm: document.querySelector('#login-form'),
  status: document.querySelector('#status')
};

const setStatus = message => {
  dom.status.textContent = `Estado: ${message}`;
};

const validateRegisterBusinessRules = values => {
  // TODO: Personaliza reglas según tu dominio.
  if (values.username.length < 6) {
    return 'El usuario debe tener minimo 6 caracteres';
  }

  if (!values.password || values.password.length < 8) {
    return 'La password debe tener minimo 8 caracteres';
  }

  return '';
};

const handleRegisterSubmit = event => {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    setStatus('registro con errores de validación');
    return;
  }

  const values = Object.fromEntries(new FormData(form));
  const customError = validateRegisterBusinessRules(values);

  if (customError) {
    setStatus(customError);
    return;
  }

  setStatus('registro válido (simulado)');
};

const handleLoginSubmit = event => {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    setStatus('login con errores de validación');
    return;
  }

  const values = Object.fromEntries(new FormData(form));
  if (!values.email || !values.password) {
    setStatus('faltan credenciales');
    return;
  }

  setStatus('login válido (simulado)');
};

const init = () => {
  dom.registerForm.addEventListener('submit', handleRegisterSubmit);
  dom.loginForm.addEventListener('submit', handleLoginSubmit);
};

init();
