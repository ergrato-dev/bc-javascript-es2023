# 🏋️ Ejercicio 04: Encapsulación

## 🎯 Objetivo

Aprender a implementar encapsulación usando getters, setters y campos privados (`#`) para proteger datos y validar información.

---

## 📋 Descripción

Crearás un sistema bancario con encapsulación completa para proteger datos sensibles como saldos, PINs y transacciones.

---

## 🚀 Instrucciones

### Parte 1: Clase BankAccount

Crea una clase `BankAccount` con encapsulación completa:

1. **Campos privados**:
   - `#accountNumber`: número de cuenta
   - `#balance`: saldo actual
   - `#pin`: PIN de 4 dígitos
   - `#transactions`: historial de transacciones
   - `#isLocked`: estado de bloqueo
   - `#loginAttempts`: intentos de login fallidos

2. **Getters (solo lectura)**:
   - `accountNumber`: últimos 4 dígitos (enmascarado)
   - `balance`: requiere PIN válido
   - `isLocked`: estado de bloqueo

3. **Setters con validación**:
   - `pin`: validar formato (4 dígitos), requiere PIN actual

4. **Métodos públicos**:
   - `deposit(amount)`: depositar dinero
   - `withdraw(amount, pin)`: retirar dinero (validar PIN)
   - `transfer(targetAccount, amount, pin)`: transferir a otra cuenta
   - `getStatement(pin)`: obtener historial
   - `validatePin(pin)`: validar PIN

5. **Métodos privados**:
   - `#recordTransaction(type, amount)`: registrar transacción
   - `#validateAmount(amount)`: validar monto positivo
   - `#checkPin(pin)`: verificar PIN con bloqueo

### Parte 2: Clase CreditCard

Crea una clase `CreditCard` con:

1. **Campos privados**:
   - `#cardNumber`: número de tarjeta
   - `#cvv`: código de seguridad
   - `#expiryDate`: fecha de expiración
   - `#creditLimit`: límite de crédito
   - `#currentBalance`: saldo actual (deuda)
   - `#holder`: titular

2. **Getters**:
   - `cardNumber`: enmascarado (****-****-****-1234)
   - `availableCredit`: crédito disponible
   - `holder`: nombre del titular

3. **Setters**:
   - `creditLimit`: solo puede aumentar (validación)

4. **Métodos**:
   - `charge(amount, cvv)`: realizar cargo
   - `pay(amount)`: realizar pago
   - `getStatement()`: obtener resumen

### Parte 3: Clase SecureUser

Crea una clase `SecureUser` para gestión segura de usuarios:

1. **Campos privados**:
   - `#id`: ID de usuario
   - `#email`: email (validado)
   - `#passwordHash`: contraseña hasheada
   - `#twoFactorSecret`: secreto 2FA
   - `#sessions`: sesiones activas
   - `#loginHistory`: historial de logins

2. **Getters**:
   - `id`: solo lectura
   - `email`: solo lectura
   - `isAuthenticated`: estado de autenticación

3. **Setters con validación**:
   - `email`: validar formato
   - `password`: hashear antes de guardar

4. **Métodos**:
   - `authenticate(email, password)`: autenticar usuario
   - `logout()`: cerrar sesión
   - `changePassword(oldPassword, newPassword)`: cambiar contraseña
   - `enable2FA()`: activar 2FA
   - `verify2FA(code)`: verificar código 2FA

---

## 📝 Código Starter

```javascript
// ============================================
// EJERCICIO 04: Encapsulación
// ============================================

// TODO: Implementa la clase BankAccount
class BankAccount {
  // Campos privados
  #accountNumber;
  #balance;
  #pin;
  #transactions;
  #isLocked;
  #loginAttempts;

  static #MAX_ATTEMPTS = 3;

  constructor(accountNumber, initialBalance, pin) {
    // Tu código aquí
  }

  // Getters
  get accountNumber() {
    // Retornar enmascarado: ****1234
  }

  get isLocked() {
    // Tu código aquí
  }

  // Métodos privados
  #recordTransaction(type, amount, balance) {
    // Tu código aquí
  }

  #validateAmount(amount) {
    // Tu código aquí
  }

  #checkPin(pin) {
    // Tu código aquí
  }

  // Métodos públicos
  getBalance(pin) {
    // Tu código aquí
  }

  deposit(amount) {
    // Tu código aquí
  }

  withdraw(amount, pin) {
    // Tu código aquí
  }

  transfer(targetAccount, amount, pin) {
    // Tu código aquí
  }

  getStatement(pin) {
    // Tu código aquí
  }

  changePin(oldPin, newPin) {
    // Tu código aquí
  }

  unlock(masterKey) {
    // Tu código aquí
  }
}

// TODO: Implementa la clase CreditCard
class CreditCard {
  #cardNumber;
  #cvv;
  #expiryDate;
  #creditLimit;
  #currentBalance;
  #holder;
  #transactions;

  constructor(cardNumber, cvv, expiryDate, holder, creditLimit) {
    // Tu código aquí
  }

  // Getters
  get cardNumber() {
    // Retornar enmascarado: ****-****-****-1234
  }

  get availableCredit() {
    // Tu código aquí
  }

  get holder() {
    // Tu código aquí
  }

  get currentBalance() {
    // Tu código aquí
  }

  // Setter
  set creditLimit(value) {
    // Solo puede aumentar
  }

  // Métodos
  charge(amount, cvv) {
    // Tu código aquí
  }

  pay(amount) {
    // Tu código aquí
  }

  getStatement() {
    // Tu código aquí
  }
}

// TODO: Implementa la clase SecureUser
class SecureUser {
  #id;
  #email;
  #passwordHash;
  #twoFactorEnabled;
  #twoFactorSecret;
  #currentSession;
  #loginHistory;

  constructor(email, password) {
    // Tu código aquí
  }

  // Getters
  get id() {
    // Tu código aquí
  }

  get email() {
    // Tu código aquí
  }

  get isAuthenticated() {
    // Tu código aquí
  }

  // Métodos privados
  #hashPassword(password) {
    // Tu código aquí (simulación)
  }

  #verifyPassword(password) {
    // Tu código aquí
  }

  #generateSessionToken() {
    // Tu código aquí
  }

  // Setters
  set email(value) {
    // Validar formato
  }

  // Métodos públicos
  authenticate(password) {
    // Tu código aquí
  }

  logout() {
    // Tu código aquí
  }

  changePassword(oldPassword, newPassword) {
    // Tu código aquí
  }

  enable2FA() {
    // Tu código aquí
  }

  verify2FA(code) {
    // Tu código aquí
  }

  getLoginHistory() {
    // Tu código aquí
  }
}

// ============================================
// PRUEBAS
// ============================================

console.log('=== BankAccount Test ===');
const account1 = new BankAccount('1234567890', 1000, '1234');
const account2 = new BankAccount('0987654321', 500, '5678');

console.log('Account:', account1.accountNumber); // ****7890
console.log('Balance:', account1.getBalance('1234')); // 1000

account1.deposit(500);
console.log('After deposit:', account1.getBalance('1234')); // 1500

account1.withdraw(200, '1234');
console.log('After withdrawal:', account1.getBalance('1234')); // 1300

account1.transfer(account2, 300, '1234');
console.log('Account1 after transfer:', account1.getBalance('1234')); // 1000
console.log('Account2 after transfer:', account2.getBalance('5678')); // 800

console.log('\nStatement:');
console.log(account1.getStatement('1234'));

// Test PIN lockout
console.log('\n=== PIN Lockout Test ===');
console.log(account1.getBalance('wrong')); // Attempt 1
console.log(account1.getBalance('wrong')); // Attempt 2
console.log(account1.getBalance('wrong')); // Attempt 3 - Locked!
console.log('Is locked:', account1.isLocked);

console.log('\n=== CreditCard Test ===');
const card = new CreditCard('4111111111111111', '123', '12/25', 'Ana García', 5000);
console.log('Card:', card.cardNumber); // ****-****-****-1111
console.log('Available credit:', card.availableCredit); // 5000

card.charge(1500, '123');
console.log('After charge:', card.availableCredit); // 3500

card.pay(500);
console.log('After payment:', card.availableCredit); // 4000

console.log('\n=== SecureUser Test ===');
const user = new SecureUser('ana@email.com', 'SecurePass123!');
console.log('User ID:', user.id);
console.log('Email:', user.email);

console.log('Auth result:', user.authenticate('SecurePass123!'));
console.log('Is authenticated:', user.isAuthenticated);

user.changePassword('SecurePass123!', 'NewSecure456!');
user.logout();
console.log('After logout:', user.isAuthenticated);

console.log('Login history:', user.getLoginHistory());
```

---

## ✅ Resultado Esperado

```
=== BankAccount Test ===
Account: ****7890
Balance: 1000
After deposit: 1500
After withdrawal: 1300
Account1 after transfer: 1000
Account2 after transfer: 800

Statement:
[
  { type: 'deposit', amount: 500, balance: 1500, date: '...' },
  { type: 'withdrawal', amount: 200, balance: 1300, date: '...' },
  { type: 'transfer_out', amount: 300, balance: 1000, date: '...' }
]

=== PIN Lockout Test ===
Invalid PIN. 2 attempts remaining.
Invalid PIN. 1 attempts remaining.
Account locked! Contact customer service.
Is locked: true

=== CreditCard Test ===
Card: ****-****-****-1111
Available credit: 5000
After charge: 3500
After payment: 4000

=== SecureUser Test ===
User ID: usr_xxx
Email: ana@email.com
Auth result: { success: true, token: '...' }
Is authenticated: true
After logout: false
Login history: [{ date: '...', success: true, ip: '...' }]
```

---

## 🎯 Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Clase BankAccount con encapsulación | 40 |
| Clase CreditCard con encapsulación | 30 |
| Clase SecureUser con encapsulación | 20 |
| Validaciones y seguridad | 10 |
| **Total** | **100** |

---

## 💡 Pistas

1. Usa `#` para todos los campos sensibles
2. Nunca expongas datos sensibles completos (enmascara números)
3. Implementa bloqueo después de X intentos fallidos
4. Los getters deben retornar copias de arrays/objetos, no referencias
5. Valida todos los inputs en setters y métodos públicos
6. Para simular hash: `btoa(password + 'salt')`

---

## 🔗 Recursos

- [MDN: Private class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [MDN: get](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/get)
- [MDN: set](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/set)
