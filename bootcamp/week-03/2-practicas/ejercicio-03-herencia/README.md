# 🏋️ Ejercicio 03: Herencia

## 🎯 Objetivo

Aprender a implementar herencia en JavaScript usando `extends`, `super` y sobrescritura de métodos.

---

## 📋 Descripción

Crearás un sistema de gestión de vehículos con una jerarquía de clases que demuestre herencia, polimorfismo y el uso de `super`.

---

## 🚀 Instrucciones

### Parte 1: Clase Base Vehicle

Crea la clase base `Vehicle` con:

1. **Constructor** que reciba:
   - `brand` (string)
   - `model` (string)
   - `year` (number)

2. **Propiedades**:
   - `id`: UUID generado
   - `isRunning`: false inicialmente
   - `fuelLevel`: 100 (porcentaje)
   - `mileage`: 0 (kilómetros)

3. **Métodos**:
   - `start()`: arranca el vehículo
   - `stop()`: detiene el vehículo
   - `refuel(amount)`: recarga combustible
   - `drive(km)`: simula conducir (consume combustible)
   - `getInfo()`: retorna información del vehículo
   - `getStatus()`: retorna estado actual

### Parte 2: Clase Car (extiende Vehicle)

Crea la clase `Car` que hereda de `Vehicle`:

1. **Constructor adicional**:
   - `doors` (number)
   - `transmission` ('manual' | 'automatic')

2. **Propiedades adicionales**:
   - `gear`: 'P' inicialmente
   - `trunkOpen`: false

3. **Métodos adicionales**:
   - `shift(gear)`: cambia de marcha ('P', 'R', 'N', 'D')
   - `openTrunk()`: abre el maletero
   - `closeTrunk()`: cierra el maletero

4. **Sobrescribir**:
   - `getInfo()`: incluir información del auto
   - `drive(km)`: validar que esté en marcha 'D'

### Parte 3: Clase Motorcycle (extiende Vehicle)

Crea la clase `Motorcycle` que hereda de `Vehicle`:

1. **Constructor adicional**:
   - `type` ('sport' | 'cruiser' | 'touring' | 'dirt')
   - `engineCC` (cilindrada)

2. **Propiedades adicionales**:
   - `helmetOn`: false
   - `kickstandDown`: true

3. **Métodos adicionales**:
   - `putHelmet()`: ponerse el casco
   - `removeHelmet()`: quitarse el casco
   - `raiseKickstand()`: levantar pata de cabra
   - `lowerKickstand()`: bajar pata de cabra
   - `wheelie()`: hacer wheelie (solo si está andando)

4. **Sobrescribir**:
   - `start()`: validar que tenga casco
   - `getInfo()`: incluir información de la moto

### Parte 4: Clase ElectricCar (extiende Car)

Crea la clase `ElectricCar` que hereda de `Car`:

1. **Constructor adicional**:
   - `batteryCapacity` (kWh)
   - `range` (km con carga completa)

2. **Propiedades adicionales**:
   - `batteryLevel`: 100 (porcentaje)
   - `isCharging`: false

3. **Métodos adicionales**:
   - `charge()`: inicia carga
   - `stopCharging()`: detiene carga
   - `getBatteryStatus()`: retorna estado de batería

4. **Sobrescribir**:
   - `drive(km)`: usa batería en lugar de combustible
   - `refuel()` → `charge()`: adaptar para eléctricos
   - `getInfo()`: incluir información del vehículo eléctrico

---

## 📝 Código Starter

```javascript
// ============================================
// EJERCICIO 03: Herencia
// ============================================

// TODO: Implementa la clase base Vehicle
class Vehicle {
  constructor(brand, model, year) {
    // Tu código aquí
  }

  start() {
    // Tu código aquí
  }

  stop() {
    // Tu código aquí
  }

  refuel(amount) {
    // Tu código aquí
  }

  drive(km) {
    // Tu código aquí
  }

  getInfo() {
    // Tu código aquí
  }

  getStatus() {
    // Tu código aquí
  }
}

// TODO: Implementa la clase Car
class Car extends Vehicle {
  constructor(brand, model, year, doors, transmission) {
    // Tu código aquí
  }

  shift(gear) {
    // Tu código aquí
  }

  openTrunk() {
    // Tu código aquí
  }

  closeTrunk() {
    // Tu código aquí
  }

  // Sobrescribir getInfo()
  getInfo() {
    // Tu código aquí
  }

  // Sobrescribir drive()
  drive(km) {
    // Tu código aquí
  }
}

// TODO: Implementa la clase Motorcycle
class Motorcycle extends Vehicle {
  constructor(brand, model, year, type, engineCC) {
    // Tu código aquí
  }

  putHelmet() {
    // Tu código aquí
  }

  removeHelmet() {
    // Tu código aquí
  }

  raiseKickstand() {
    // Tu código aquí
  }

  lowerKickstand() {
    // Tu código aquí
  }

  wheelie() {
    // Tu código aquí
  }

  // Sobrescribir start()
  start() {
    // Tu código aquí
  }

  // Sobrescribir getInfo()
  getInfo() {
    // Tu código aquí
  }
}

// TODO: Implementa la clase ElectricCar
class ElectricCar extends Car {
  constructor(brand, model, year, doors, batteryCapacity, range) {
    // Tu código aquí
  }

  charge() {
    // Tu código aquí
  }

  stopCharging() {
    // Tu código aquí
  }

  getBatteryStatus() {
    // Tu código aquí
  }

  // Sobrescribir drive()
  drive(km) {
    // Tu código aquí
  }

  // Sobrescribir getInfo()
  getInfo() {
    // Tu código aquí
  }
}

// ============================================
// PRUEBAS
// ============================================

console.log('=== Car Test ===');
const car = new Car('Toyota', 'Camry', 2023, 4, 'automatic');
console.log(car.getInfo());
car.start();
car.shift('D');
car.drive(50);
console.log(car.getStatus());
car.openTrunk();
console.log('Trunk open:', car.trunkOpen);

console.log('\n=== Motorcycle Test ===');
const moto = new Motorcycle('Harley-Davidson', 'Sportster', 2022, 'cruiser', 1200);
console.log(moto.getInfo());
moto.putHelmet();
moto.raiseKickstand();
moto.start();
moto.drive(30);
console.log(moto.wheelie());
console.log(moto.getStatus());

console.log('\n=== ElectricCar Test ===');
const tesla = new ElectricCar('Tesla', 'Model 3', 2024, 4, 75, 500);
console.log(tesla.getInfo());
tesla.start();
tesla.shift('D');
tesla.drive(100);
console.log(tesla.getBatteryStatus());
tesla.charge();
console.log('Is charging:', tesla.isCharging);

console.log('\n=== Polimorfismo ===');
const vehicles = [car, moto, tesla];
vehicles.forEach(v => {
  console.log(v.getInfo());
});
```

---

## ✅ Resultado Esperado

```
=== Car Test ===
2023 Toyota Camry - 4 doors (automatic)
Toyota Camry started
Shifted to D
Drove 50 km. Fuel: 95%
{ brand: 'Toyota', model: 'Camry', isRunning: true, fuel: 95, mileage: 50 }
Trunk open: true

=== Motorcycle Test ===
2022 Harley-Davidson Sportster - cruiser 1200cc
Helmet on!
Kickstand raised
Harley-Davidson Sportster started
Drove 30 km. Fuel: 97%
Harley-Davidson Sportster is doing a wheelie! 🏍️
{ brand: 'Harley-Davidson', model: 'Sportster', isRunning: true, fuel: 97, mileage: 30 }

=== ElectricCar Test ===
2024 Tesla Model 3 - 4 doors (automatic) - Electric 75kWh (500km range)
Tesla Model 3 started
Shifted to D
Drove 100 km. Battery: 80%
{ level: 80, range: 400, isCharging: false }
Is charging: true

=== Polimorfismo ===
2023 Toyota Camry - 4 doors (automatic)
2022 Harley-Davidson Sportster - cruiser 1200cc
2024 Tesla Model 3 - 4 doors (automatic) - Electric 75kWh (500km range)
```

---

## 🎯 Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Clase Vehicle completa | 20 |
| Clase Car con herencia correcta | 25 |
| Clase Motorcycle con herencia correcta | 25 |
| Clase ElectricCar (herencia multinivel) | 20 |
| Uso correcto de super | 10 |
| **Total** | **100** |

---

## 💡 Pistas

1. Siempre llama `super()` primero en el constructor de clases hijas
2. Usa `super.metodoPadre()` para extender funcionalidad
3. El consumo de combustible puede ser `km * 0.1` (10L/100km)
4. Para ElectricCar, el consumo de batería puede ser `km / range * 100`
5. Valida estados antes de realizar acciones (ej: no conducir sin arrancar)

---

## 🔗 Recursos

- [MDN: extends](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/extends)
- [MDN: super](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/super)
