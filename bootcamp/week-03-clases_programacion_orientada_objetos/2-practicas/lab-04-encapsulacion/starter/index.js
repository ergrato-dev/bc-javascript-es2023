/**
 * 📘 Lab 04: Encapsulación
 *
 * Este es un lab guiado. Descomenta el código en cada paso
 * para aprender encapsulación con campos privados en ES2023.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Campos Privados con #
// ============================================
console.log('--- Paso 1: Campos Privados ---');
{ // Bloque del paso: sus clases y variables no chocan con las de otros pasos.

// Los campos privados usan # y solo son accesibles dentro de la clase
// Descomenta las siguientes líneas:

// class User {
//   #password;
//
//   constructor(username, password) {
//     this.username = username; // Público
//     this.#password = password; // Privado
//   }
//
//   // Método para verificar password (no expone el valor)
//   checkPassword(input) {
//     return input === this.#password;
//   }
// }
//
// const user = new User('john_doe', 'secret123');
// console.log('Username:', user.username); // Funciona
// // console.log('Password:', user.#password); // Error! No accesible
// console.log('Password correcto:', user.checkPassword('secret123'));
// console.log('Password incorrecto:', user.checkPassword('wrong'));

}
console.log('');

// ============================================
// PASO 2: Getters para Datos Privados
// ============================================
console.log('--- Paso 2: Getters ---');
{ // Bloque del paso: sus clases y variables no chocan con las de otros pasos.

// Los getters permiten acceso controlado a datos privados
// Descomenta las siguientes líneas:

// class BankAccount {
//   #balance;
//   #accountNumber;
//
//   constructor(accountNumber, initialBalance) {
//     this.#accountNumber = accountNumber;
//     this.#balance = initialBalance;
//   }
//
//   // Getter que enmascara el número de cuenta
//   get accountNumber() {
//     const masked = this.#accountNumber.slice(-4);
//     return `****${masked}`;
//   }
//
//   // Getter que retorna el balance formateado
//   get balance() {
//     return `$${this.#balance.toFixed(2)}`;
//   }
//
//   // Getter para el balance numérico
//   get numericBalance() {
//     return this.#balance;
//   }
// }
//
// const account = new BankAccount('1234567890', 1500.50);
// console.log('Cuenta:', account.accountNumber); // ****7890
// console.log('Balance:', account.balance); // $1500.50
// console.log('Balance numérico:', account.numericBalance);

}
console.log('');

// ============================================
// PASO 3: Setters con Validación
// ============================================
console.log('--- Paso 3: Setters con Validación ---');
{ // Bloque del paso: sus clases y variables no chocan con las de otros pasos.

// Los setters permiten validar antes de modificar datos privados
// Descomenta las siguientes líneas:

// class Product {
//   #price;
//   #stock;
//
//   constructor(name, price, stock) {
//     this.name = name;
//     this.#price = price;
//     this.#stock = stock;
//   }
//
//   get price() {
//     return this.#price;
//   }
//
//   // Setter con validación
//   set price(value) {
//     if (typeof value !== 'number' || value < 0) {
//       throw new Error('Precio debe ser un número positivo');
//     }
//     this.#price = value;
//   }
//
//   get stock() {
//     return this.#stock;
//   }
//
//   set stock(value) {
//     if (!Number.isInteger(value) || value < 0) {
//       throw new Error('Stock debe ser un entero no negativo');
//     }
//     this.#stock = value;
//   }
// }
//
// const product = new Product('Laptop', 999, 10);
// console.log('Precio inicial:', product.price);
// product.price = 899; // Funciona
// console.log('Precio actualizado:', product.price);
//
// try {
//   product.price = -100; // Error!
// } catch (e) {
//   console.log('Error esperado:', e.message);
// }

}
console.log('');

// ============================================
// PASO 4: Métodos Privados
// ============================================
console.log('--- Paso 4: Métodos Privados ---');
{ // Bloque del paso: sus clases y variables no chocan con las de otros pasos.

// Los métodos privados solo se llaman internamente
// Descomenta las siguientes líneas:

// class BankAccount {
//   #balance;
//   #transactions = [];
//
//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//     this.#recordTransaction('INITIAL', initialBalance, this.#balance);
//   }
//
//   // Método privado - solo uso interno
//   #recordTransaction(type, amount, newBalance) {
//     this.#transactions.push({
//       type,
//       amount,
//       balance: newBalance,
//       date: new Date().toISOString()
//     });
//   }
//
//   // Método privado de validación
//   #validateAmount(amount) {
//     if (typeof amount !== 'number' || amount <= 0) {
//       throw new Error('Monto inválido');
//     }
//   }
//
//   deposit(amount) {
//     this.#validateAmount(amount);
//     this.#balance += amount;
//     this.#recordTransaction('DEPOSIT', amount, this.#balance);
//     return this.#balance;
//   }
//
//   withdraw(amount) {
//     this.#validateAmount(amount);
//     if (amount > this.#balance) {
//       throw new Error('Fondos insuficientes');
//     }
//     this.#balance -= amount;
//     this.#recordTransaction('WITHDRAW', -amount, this.#balance);
//     return this.#balance;
//   }
//
//   getStatement() {
//     return this.#transactions.map(t =>
//       `${t.type}: ${t.amount >= 0 ? '+' : ''}${t.amount} → ${t.balance}`
//     ).join('\n');
//   }
// }
//
// const account = new BankAccount(1000);
// account.deposit(500);
// account.withdraw(200);
// console.log('Estado de cuenta:');
// console.log(account.getStatement());

}
console.log('');

// ============================================
// PASO 5: Propiedades Estáticas Privadas
// ============================================
console.log('--- Paso 5: Propiedades Estáticas Privadas ---');
{ // Bloque del paso: sus clases y variables no chocan con las de otros pasos.

// Las propiedades estáticas privadas se comparten entre instancias
// Descomenta las siguientes líneas:

// class BankAccount {
//   static #totalAccounts = 0;
//   static #allBalances = 0;
//
//   #balance;
//   #id;
//
//   constructor(initialBalance) {
//     BankAccount.#totalAccounts++;
//     this.#id = BankAccount.#totalAccounts;
//     this.#balance = initialBalance;
//     BankAccount.#allBalances += initialBalance;
//   }
//
//   get id() {
//     return `ACC-${String(this.#id).padStart(5, '0')}`;
//   }
//
//   get balance() {
//     return this.#balance;
//   }
//
//   // Métodos estáticos para acceder a datos globales
//   static getTotalAccounts() {
//     return BankAccount.#totalAccounts;
//   }
//
//   static getTotalDeposits() {
//     return BankAccount.#allBalances;
//   }
// }
//
// const acc1 = new BankAccount(1000);
// const acc2 = new BankAccount(2500);
// const acc3 = new BankAccount(500);
//
// console.log('Cuenta 1:', acc1.id, '- Balance:', acc1.balance);
// console.log('Cuenta 2:', acc2.id, '- Balance:', acc2.balance);
// console.log('Cuenta 3:', acc3.id, '- Balance:', acc3.balance);
// console.log('Total de cuentas:', BankAccount.getTotalAccounts());
// console.log('Balance total:', BankAccount.getTotalDeposits());

}
console.log('');

// ============================================
// PASO 6: Sistema de Autenticación
// ============================================
console.log('--- Paso 6: Sistema de Autenticación ---');
{ // Bloque del paso: sus clases y variables no chocan con las de otros pasos.

// Ejemplo completo con PIN y bloqueo
// Descomenta las siguientes líneas:

// class SecureAccount {
//   #pin;
//   #balance;
//   #isLocked = false;
//   #attempts = 0;
//
//   static #MAX_ATTEMPTS = 3;
//
//   constructor(initialBalance, pin) {
//     this.#balance = initialBalance;
//     this.#pin = pin;
//   }
//
//   get isLocked() {
//     return this.#isLocked;
//   }
//
//   #verifyPin(pin) {
//     if (this.#isLocked) {
//       throw new Error('Cuenta bloqueada');
//     }
//
//     if (pin !== this.#pin) {
//       this.#attempts++;
//       if (this.#attempts >= SecureAccount.#MAX_ATTEMPTS) {
//         this.#isLocked = true;
//         throw new Error('Cuenta bloqueada por múltiples intentos fallidos');
//       }
//       throw new Error(`PIN incorrecto. Intentos: ${this.#attempts}/${SecureAccount.#MAX_ATTEMPTS}`);
//     }
//
//     this.#attempts = 0; // Reset en éxito
//     return true;
//   }
//
//   getBalance(pin) {
//     this.#verifyPin(pin);
//     return this.#balance;
//   }
//
//   withdraw(amount, pin) {
//     this.#verifyPin(pin);
//     if (amount > this.#balance) {
//       throw new Error('Fondos insuficientes');
//     }
//     this.#balance -= amount;
//     return `Retiro exitoso. Nuevo balance: $${this.#balance}`;
//   }
//
//   unlock(masterKey) {
//     if (masterKey === 'MASTER-KEY-2024') {
//       this.#isLocked = false;
//       this.#attempts = 0;
//       return 'Cuenta desbloqueada';
//     }
//     throw new Error('Clave maestra inválida');
//   }
// }
//
// const secure = new SecureAccount(5000, '1234');
//
// // Prueba correcta
// console.log('Balance:', secure.getBalance('1234'));
//
// // Pruebas con PIN incorrecto
// try { secure.getBalance('0000'); } catch(e) { console.log(e.message); }
// try { secure.getBalance('0000'); } catch(e) { console.log(e.message); }
// try { secure.getBalance('0000'); } catch(e) { console.log(e.message); }
//
// console.log('¿Bloqueada?', secure.isLocked);
//
// // Desbloquear
// console.log(secure.unlock('MASTER-KEY-2024'));
// console.log('Balance después de desbloquear:', secure.getBalance('1234'));

}
console.log('');

// ============================================
// ✅ EJERCICIO COMPLETADO
// ============================================
console.log('🎉 ¡Excelente! Has completado el lab de encapsulación.');
console.log('Revisa cada paso y experimenta con los campos privados.');
