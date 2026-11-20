# Lab 03 — Herencia

## Objetivo

Crear clases hijas con `extends`, llamar al constructor y a los métodos del padre con `super`, sobrescribir métodos y tratar objetos de clases distintas con el mismo código (polimorfismo).

**Tiempo:** 45 min · **Teoría:** [03 - Herencia](../../1-teoria/03-herencia.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-03-clases_programacion_orientada_objetos/2-practicas/lab-03-herencia
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

Cada paso va entre llaves `{ }`, que ya están sin comentar. Un bloque crea su propio ámbito: lo que declares dentro (`class`, `const`) solo existe ahí. Por eso cada paso puede volver a declarar la misma clase con más métodos sin que Node diga `Identifier 'Vehicle' has already been declared`.

---

## Paso 1: la clase base

`Vehicle` tiene lo común a cualquier vehículo: marca, modelo, año y los métodos `getInfo`, `start` y `stop`. Es una clase normal, como las del lab 01.

```text
--- Paso 1: Clase Base ---
Info: Generic Vehicle (2024)
Generic Vehicle encendido
Generic Vehicle apagado
```

## Paso 2: `extends` y `super()`

`class Car extends Vehicle` hereda todo lo de `Vehicle`. Su constructor tiene que llamar a `super(brand, model, year)` **antes** de usar `this`: es lo que ejecuta el constructor del padre. Después añade lo suyo (`doors`) y sus propios métodos (`openTrunk`). `car.brand` y `car.start()` vienen del padre.

```text
--- Paso 2: Herencia con extends ---
Marca (heredada): Toyota
Puertas (propia): 4
Toyota encendido
Maletero abierto
```

## Paso 3: sobrescribir métodos

Si la hija define un método con el mismo nombre que el padre, se usa el de la hija (*override*). Con `super.getInfo()` o `super.drive(km)`, la hija aprovecha el resultado del padre y le añade información, en lugar de repetir su código.

```text
--- Paso 3: Override de Métodos ---
Info: Honda Civic (2024) - 4 puertas, automático
Recorriendo 100 km. Consumo: 8.0L
```

## Paso 4: varias hijas del mismo padre

`Car`, `Motorcycle` y `Truck` heredan de `Vehicle`, y cada una sobrescribe `start()` a su manera. `Motorcycle` no arranca sin casco: el primer `start()` devuelve el aviso, `putHelmet()` cambia el estado y el segundo arranca.

```text
--- Paso 4: Múltiples Clases Hijas ---
🚗 Mazda arrancando motor...
⚠️ Primero ponte el casco
Casco puesto
🏍️ Ducati rugiendo...
🚛 Volvo motor diésel encendido
Cargado: 10000/25000kg
```

## Paso 5: `instanceof` y polimorfismo

El array `garage` mezcla coches y motos, y el mismo `v.start()` ejecuta el método de la clase de cada uno: eso es **polimorfismo**. `v instanceof Car` responde si `v` se creó con `Car` (o con una clase hija de `Car`).

```text
--- Paso 5: instanceof y Polimorfismo ---
Encendiendo todos los vehículos:
🚗 Toyota encendido
🏍️ Honda encendido
🚗 Ford encendido
🏍️ Yamaha encendido

Verificando tipos:
Toyota: Carro
Honda: Moto
Ford: Carro
Yamaha: Moto
```

## Paso 6: cadena de herencia

`ElectricCar extends Car`, que a su vez `extends Vehicle`: un `ElectricCar` es las tres cosas a la vez, y `instanceof` da `true` con cualquiera. `getType()` está en las tres clases; se ejecuta el de la más concreta.

```text
--- Paso 6: Cadena de Herencia ---
Tipo: electric-car
Es Vehicle: true
Es Car: true
Es ElectricCar: true
Tesla: 100% batería

🎉 ¡Excelente! Has completado el lab de herencia.
Revisa cada paso y experimenta creando tus propias jerarquías.
```

---

## Comprobación

1. En el paso 2, mueve `this.doors = doors;` encima de `super(...)`. ¿Qué error sale?
2. En el paso 3, ¿qué devolvería `sedan.getInfo()` si `Car` no sobrescribiera `getInfo`?
3. En el paso 6, ¿qué imprime `console.log(new Car('Seat', 4) instanceof ElectricCar)`? ¿Por qué?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Métodos estáticos](../lab-02-metodos-estaticos/README.md) | [Lab 04 — Encapsulación](../lab-04-encapsulacion/README.md) → |

[↑ Semana 03](../../README.md)
