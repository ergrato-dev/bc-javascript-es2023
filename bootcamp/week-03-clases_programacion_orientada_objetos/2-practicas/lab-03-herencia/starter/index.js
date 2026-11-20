/**
 * 📘 Lab 03: Herencia
 *
 * Este es un lab guiado. Descomenta el código en cada paso
 * para aprender herencia de clases en JavaScript ES2023.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Clase Base (Padre)
// ============================================
console.log('--- Paso 1: Clase Base ---');
{ // Bloque del paso: sus clases y variables no chocan con las de otros pasos.

// La clase base define propiedades y métodos comunes
// Las clases hijas heredarán todo esto
// Descomenta las siguientes líneas:

// class Vehicle {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.isRunning = false;
//     this.fuel = 100;
//     this.mileage = 0;
//   }
//
//   start() {
//     if (this.fuel <= 0) {
//       console.log('Sin combustible');
//       return false;
//     }
//     this.isRunning = true;
//     console.log(`${this.brand} ${this.model} encendido`);
//     return true;
//   }
//
//   stop() {
//     this.isRunning = false;
//     console.log(`${this.brand} ${this.model} apagado`);
//   }
//
//   getInfo() {
//     return `${this.brand} ${this.model} (${this.year})`;
//   }
// }
//
// const vehicle = new Vehicle('Generic', 'Vehicle', 2024);
// console.log('Info:', vehicle.getInfo());
// vehicle.start();
// vehicle.stop();

}
console.log('');

// ============================================
// PASO 2: Herencia Básica con extends
// ============================================
console.log('--- Paso 2: Herencia con extends ---');
{ // Bloque del paso: sus clases y variables no chocan con las de otros pasos.

// extends crea una clase hija que hereda de la clase padre
// super() llama al constructor del padre
// Descomenta las siguientes líneas:

// class Vehicle {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.isRunning = false;
//   }
//
//   start() {
//     this.isRunning = true;
//     return `${this.brand} encendido`;
//   }
//
//   stop() {
//     this.isRunning = false;
//     return `${this.brand} apagado`;
//   }
// }
//
// class Car extends Vehicle {
//   constructor(brand, model, year, doors) {
//     super(brand, model, year); // Llama al constructor de Vehicle
//     this.doors = doors;
//     this.trunkOpen = false;
//   }
//
//   // Método propio de Car
//   openTrunk() {
//     this.trunkOpen = true;
//     return 'Maletero abierto';
//   }
//
//   closeTrunk() {
//     this.trunkOpen = false;
//     return 'Maletero cerrado';
//   }
// }
//
// const car = new Car('Toyota', 'Corolla', 2024, 4);
// console.log('Marca (heredada):', car.brand);
// console.log('Puertas (propia):', car.doors);
// console.log(car.start()); // Método heredado
// console.log(car.openTrunk()); // Método propio

}
console.log('');

// ============================================
// PASO 3: Sobrescribir Métodos (Override)
// ============================================
console.log('--- Paso 3: Override de Métodos ---');
{ // Bloque del paso: sus clases y variables no chocan con las de otros pasos.

// La clase hija puede redefinir métodos del padre
// super.method() llama al método del padre
// Descomenta las siguientes líneas:

// class Vehicle {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
//
//   getInfo() {
//     return `${this.brand} ${this.model} (${this.year})`;
//   }
//
//   drive(km) {
//     return `Recorriendo ${km} km`;
//   }
// }
//
// class Car extends Vehicle {
//   constructor(brand, model, year, doors, transmission) {
//     super(brand, model, year);
//     this.doors = doors;
//     this.transmission = transmission;
//   }
//
//   // Sobrescribe getInfo() agregando más información
//   getInfo() {
//     const baseInfo = super.getInfo(); // Llama al método del padre
//     return `${baseInfo} - ${this.doors} puertas, ${this.transmission}`;
//   }
//
//   // Sobrescribe drive() con comportamiento específico
//   drive(km) {
//     const fuelUsed = km * 0.08; // 8L/100km
//     return `${super.drive(km)}. Consumo: ${fuelUsed.toFixed(1)}L`;
//   }
// }
//
// const sedan = new Car('Honda', 'Civic', 2024, 4, 'automático');
// console.log('Info:', sedan.getInfo());
// console.log(sedan.drive(100));

}
console.log('');

// ============================================
// PASO 4: Múltiples Clases Hijas
// ============================================
console.log('--- Paso 4: Múltiples Clases Hijas ---');
{ // Bloque del paso: sus clases y variables no chocan con las de otros pasos.

// Una clase padre puede tener varias clases hijas
// Cada una con su propio comportamiento
// Descomenta las siguientes líneas:

// class Vehicle {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.isRunning = false;
//   }
//
//   start() {
//     this.isRunning = true;
//     return 'Vehículo encendido';
//   }
//
//   getInfo() {
//     return `${this.brand} ${this.model}`;
//   }
// }
//
// class Car extends Vehicle {
//   constructor(brand, model, year, doors) {
//     super(brand, model, year);
//     this.doors = doors;
//     this.type = 'car';
//   }
//
//   start() {
//     this.isRunning = true;
//     return `🚗 ${this.brand} arrancando motor...`;
//   }
// }
//
// class Motorcycle extends Vehicle {
//   constructor(brand, model, year, engineCC) {
//     super(brand, model, year);
//     this.engineCC = engineCC;
//     this.type = 'motorcycle';
//     this.helmetOn = false;
//   }
//
//   start() {
//     if (!this.helmetOn) {
//       return '⚠️ Primero ponte el casco';
//     }
//     this.isRunning = true;
//     return `🏍️ ${this.brand} rugiendo...`;
//   }
//
//   putHelmet() {
//     this.helmetOn = true;
//     return 'Casco puesto';
//   }
// }
//
// class Truck extends Vehicle {
//   constructor(brand, model, year, capacity) {
//     super(brand, model, year);
//     this.capacity = capacity;
//     this.type = 'truck';
//     this.cargo = 0;
//   }
//
//   start() {
//     this.isRunning = true;
//     return `🚛 ${this.brand} motor diésel encendido`;
//   }
//
//   loadCargo(weight) {
//     if (this.cargo + weight > this.capacity) {
//       return `Excede capacidad (${this.capacity}kg)`;
//     }
//     this.cargo += weight;
//     return `Cargado: ${this.cargo}/${this.capacity}kg`;
//   }
// }
//
// const car = new Car('Mazda', '3', 2024, 4);
// const moto = new Motorcycle('Ducati', 'Monster', 2024, 937);
// const truck = new Truck('Volvo', 'FH', 2024, 25000);
//
// console.log(car.start());
// console.log(moto.start()); // Sin casco
// console.log(moto.putHelmet());
// console.log(moto.start()); // Con casco
// console.log(truck.start());
// console.log(truck.loadCargo(10000));

}
console.log('');

// ============================================
// PASO 5: instanceof y Polimorfismo
// ============================================
console.log('--- Paso 5: instanceof y Polimorfismo ---');
{ // Bloque del paso: sus clases y variables no chocan con las de otros pasos.

// instanceof verifica si un objeto es instancia de una clase
// El polimorfismo permite tratar objetos diferentes de forma uniforme
// Descomenta las siguientes líneas:

// class Vehicle {
//   constructor(brand) {
//     this.brand = brand;
//   }
//   start() {
//     return `${this.brand} encendido`;
//   }
// }
//
// class Car extends Vehicle {
//   start() {
//     return `🚗 ${super.start()}`;
//   }
// }
//
// class Motorcycle extends Vehicle {
//   start() {
//     return `🏍️ ${super.start()}`;
//   }
// }
//
// // Array de diferentes vehículos
// const garage = [
//   new Car('Toyota'),
//   new Motorcycle('Honda'),
//   new Car('Ford'),
//   new Motorcycle('Yamaha')
// ];
//
// // Polimorfismo: todos responden a start() de manera diferente
// console.log('Encendiendo todos los vehículos:');
// garage.forEach(vehicle => {
//   console.log(vehicle.start());
// });
//
// // Verificar tipos con instanceof
// console.log('\nVerificando tipos:');
// garage.forEach(v => {
//   const type = v instanceof Car ? 'Carro' : 'Moto';
//   console.log(`${v.brand}: ${type}`);
// });

}
console.log('');

// ============================================
// PASO 6: Cadena de Herencia
// ============================================
console.log('--- Paso 6: Cadena de Herencia ---');
{ // Bloque del paso: sus clases y variables no chocan con las de otros pasos.

// Puedes extender clases que ya extienden otras
// Descomenta las siguientes líneas:

// class Vehicle {
//   constructor(brand) {
//     this.brand = brand;
//   }
//   getType() {
//     return 'vehicle';
//   }
// }
//
// class Car extends Vehicle {
//   constructor(brand, doors) {
//     super(brand);
//     this.doors = doors;
//   }
//   getType() {
//     return 'car';
//   }
// }
//
// class ElectricCar extends Car {
//   constructor(brand, doors, batteryCapacity) {
//     super(brand, doors);
//     this.batteryCapacity = batteryCapacity;
//     this.batteryLevel = 100;
//   }
//
//   getType() {
//     return 'electric-car';
//   }
//
//   charge() {
//     this.batteryLevel = 100;
//     return `${this.brand} cargado al 100%`;
//   }
//
//   getStatus() {
//     return `${this.brand}: ${this.batteryLevel}% batería`;
//   }
// }
//
// const tesla = new ElectricCar('Tesla', 4, 100);
// console.log('Tipo:', tesla.getType());
// console.log('Es Vehicle:', tesla instanceof Vehicle);
// console.log('Es Car:', tesla instanceof Car);
// console.log('Es ElectricCar:', tesla instanceof ElectricCar);
// console.log(tesla.getStatus());

}
console.log('');

// ============================================
// ✅ EJERCICIO COMPLETADO
// ============================================
console.log('🎉 ¡Excelente! Has completado el lab de herencia.');
console.log('Revisa cada paso y experimenta creando tus propias jerarquías.');
