/**
 * 📘 Lab 02: Errores personalizados
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Error Personalizado Básico
// ============================================
console.log('--- Paso 1: Error Personalizado Básico ---');

// Crea una clase que extiende Error
// Descomenta las siguientes líneas:

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'ValidationError';
//   }
// }
//
// // Test the custom error
// try {
//   throw new ValidationError('Email is required');
// } catch (error) {
//   console.log('Name:', error.name);
//   console.log('Message:', error.message);
//   console.log('Is ValidationError?', error instanceof ValidationError);
//   console.log('Is Error?', error instanceof Error);
// }

console.log('');

// ============================================
// PASO 2: Añadir Propiedades
// ============================================
console.log('--- Paso 2: Añadir Propiedades ---');

// Los errores personalizados pueden tener propiedades extra
// Descomenta las siguientes líneas:

// class FieldValidationError extends Error {
//   constructor(field, message, value = undefined) {
//     super(message);
//     this.name = 'FieldValidationError';
//     this.field = field;
//     this.value = value;
//     this.timestamp = new Date().toISOString();
//   }
// }
//
// // Test with extra properties
// try {
//   const email = 'invalid-email';
//   if (!email.includes('@')) {
//     throw new FieldValidationError('email', 'Must contain @', email);
//   }
// } catch (error) {
//   console.log('Field:', error.field);
//   console.log('Message:', error.message);
//   console.log('Invalid value:', error.value);
//   console.log('When:', error.timestamp);
// }

console.log('');

// ============================================
// PASO 3: Error con Código
// ============================================
console.log('--- Paso 3: Error con Código ---');

// Códigos de error facilitan el manejo programático
// Descomenta las siguientes líneas:

// class AppError extends Error {
//   constructor(code, message) {
//     super(message);
//     this.name = 'AppError';
//     this.code = code;
//   }
// }
//
// // Define error codes
// const ErrorCodes = {
//   VALIDATION: 'VALIDATION_ERROR',
//   NOT_FOUND: 'NOT_FOUND',
//   UNAUTHORIZED: 'UNAUTHORIZED',
//   NETWORK: 'NETWORK_ERROR'
// };
//
// // Handler based on code
// const handleError = error => {
//   switch (error.code) {
//     case ErrorCodes.VALIDATION:
//       return '⚠️ Please check your input';
//     case ErrorCodes.NOT_FOUND:
//       return '🔍 Resource not found';
//     case ErrorCodes.UNAUTHORIZED:
//       return '🔒 Please log in';
//     case ErrorCodes.NETWORK:
//       return '🌐 Check your connection';
//     default:
//       return '❌ An error occurred';
//   }
// };
//
// // Test different codes
// const errors = [
//   new AppError(ErrorCodes.VALIDATION, 'Invalid email'),
//   new AppError(ErrorCodes.NOT_FOUND, 'User 123 not found'),
//   new AppError(ErrorCodes.UNAUTHORIZED, 'Token expired')
// ];
//
// errors.forEach(error => {
//   console.log(`[${error.code}] ${handleError(error)}`);
// });

console.log('');

// ============================================
// PASO 4: Jerarquía de Errores
// ============================================
console.log('--- Paso 4: Jerarquía de Errores ---');

// Crea errores específicos que heredan de una base
// Descomenta las siguientes líneas:

// // Base error
// class BaseAppError extends Error {
//   constructor(message, code = 'UNKNOWN') {
//     super(message);
//     this.name = 'AppError';
//     this.code = code;
//   }
// }
//
// // Specific errors
// class InputValidationError extends BaseAppError {
//   constructor(field, message) {
//     super(message, 'VALIDATION_ERROR');
//     this.name = 'InputValidationError';
//     this.field = field;
//   }
// }
//
// class HttpRequestError extends BaseAppError {
//   constructor(status, statusText) {
//     super(`HTTP ${status}: ${statusText}`, 'HTTP_ERROR');
//     this.name = 'HttpRequestError';
//     this.status = status;
//   }
// }
//
// class DatabaseError extends BaseAppError {
//   constructor(operation, message) {
//     super(message, 'DB_ERROR');
//     this.name = 'DatabaseError';
//     this.operation = operation;
//   }
// }
//
// // Test hierarchy with instanceof
// const testErrors = [
//   new InputValidationError('email', 'Invalid format'),
//   new HttpRequestError(404, 'Not Found'),
//   new DatabaseError('INSERT', 'Duplicate key')
// ];
//
// testErrors.forEach(error => {
//   console.log(`\n${error.name}:`);
//   console.log('  Is BaseAppError?', error instanceof BaseAppError);
//   console.log('  Is Error?', error instanceof Error);
//   console.log('  Code:', error.code);
// });

console.log('');

// ============================================
// PASO 5: Método toJSON()
// ============================================
console.log('--- Paso 5: Método toJSON() ---');

// Útil para logging y envío a APIs
// Descomenta las siguientes líneas:

// class SerializableError extends Error {
//   constructor(message, code = 'ERROR') {
//     super(message);
//     this.name = 'SerializableError';
//     this.code = code;
//     this.timestamp = Date.now();
//   }
//
//   toJSON() {
//     return {
//       name: this.name,
//       code: this.code,
//       message: this.message,
//       timestamp: this.timestamp,
//     };
//   }
// }
//
// const error = new SerializableError('Operation failed', 'OP_FAILED');
//
// // message y stack no son enumerables: JSON.stringify no los ve
// console.log('Plain Error as JSON:', JSON.stringify(new Error('Operation failed')));
//
// // JSON.stringify llama a toJSON() automáticamente
// console.log('SerializableError as JSON:');
// console.log(JSON.stringify(error, null, 2));

console.log('');

// ============================================
// PASO 6: Mensaje para Usuario
// ============================================
console.log('--- Paso 6: Mensaje para Usuario ---');

// Separar mensaje técnico del mensaje amigable
// Descomenta las siguientes líneas:

// class UserFriendlyError extends Error {
//   constructor(status, technicalMessage) {
//     super(technicalMessage);
//     this.name = 'UserFriendlyError';
//     this.status = status;
//   }
//
//   // Technical message for logs
//   toDebugMessage() {
//     return `[${this.status}] ${this.message}`;
//   }
//
//   // Friendly message for users
//   toUserMessage() {
//     const messages = {
//       400: '😕 There was a problem with your request',
//       401: '🔒 Please log in to continue',
//       403: '⛔ You don\'t have permission for this',
//       404: '🔍 We couldn\'t find what you\'re looking for',
//       500: '🔧 Our servers are having issues. Try again later'
//     };
//
//     return messages[this.status] || '❌ Something went wrong';
//   }
// }
//
// // Test both messages
// const httpErrors = [
//   new UserFriendlyError(401, 'JWT token expired at 1703270400'),
//   new UserFriendlyError(404, 'User with id=abc123 not found in users table'),
//   new UserFriendlyError(500, 'ECONNREFUSED postgres://localhost:5432')
// ];
//
// httpErrors.forEach(error => {
//   console.log('For developer:', error.toDebugMessage());
//   console.log('For user:', error.toUserMessage());
//   console.log('');
// });

console.log('');

// ============================================
// PASO 7: Factory Methods
// ============================================
console.log('--- Paso 7: Factory Methods ---');

// Métodos estáticos para crear errores comunes
// Descomenta las siguientes líneas:

// class ApiError extends Error {
//   constructor(code, message, details = {}) {
//     super(message);
//     this.name = 'ApiError';
//     this.code = code;
//     this.details = details;
//   }
//
//   // Factory methods
//   static validation(field, message) {
//     return new ApiError('VALIDATION', message, { field });
//   }
//
//   static notFound(resource, id) {
//     return new ApiError('NOT_FOUND', `${resource} not found`, { resource, id });
//   }
//
//   static unauthorized(reason = 'Authentication required') {
//     return new ApiError('UNAUTHORIZED', reason);
//   }
//
//   static serverError(details = {}) {
//     return new ApiError('SERVER_ERROR', 'Internal server error', details);
//   }
// }
//
// // Clean and readable error creation
// console.log('Using factory methods:');
//
// const apiErrors = [
//   ApiError.validation('email', 'Invalid email format'),
//   ApiError.notFound('User', 12345),
//   ApiError.unauthorized('Token expired'),
//   ApiError.serverError({ operation: 'database query' })
// ];
//
// apiErrors.forEach(error => {
//   console.log(`[${error.code}] ${error.message}`, error.details);
// });

console.log('');

console.log('✅ Lab completado.');
