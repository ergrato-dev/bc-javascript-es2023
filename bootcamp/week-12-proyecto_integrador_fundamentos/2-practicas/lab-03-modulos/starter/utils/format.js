// Funciones de formato. Cada `export` delante de una declaración es un export con nombre.
export const APP_NAME = 'Mi App';

export const formatPrice = (price) => `$${price.toFixed(2)}`;

export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// pad no lleva export: solo existe dentro de este módulo.
const pad = (text) => ` ${text} `;

export const badge = (text) => `[${pad(text)}]`;
