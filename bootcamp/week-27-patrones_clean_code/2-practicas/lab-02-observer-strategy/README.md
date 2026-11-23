# Lab 02 — Observer y Strategy

## Objetivo

Usar un emisor de eventos: suscribirse, emitir, dejar de escuchar y escuchar una sola vez; meterlo dentro de un almacén que avisa sin saber a quién; compararlo con `EventTarget`, el Observer que ya trae JavaScript; y cambiar un `switch` por un objeto de estrategias.

**Tiempo:** 50 min · **Teoría:** [02 - Observer y Strategy](../../1-teoria/02-observer-strategy.md)

## Cómo trabajar

En [`starter/src/`](starter/src/) están `emitter.js` (un emisor de eventos de 20 líneas, léelo primero), `stock.js` (un almacén que emite `'low'`) y `shipping.js` (el coste de envío, con un `switch` y con estrategias). [`starter/index.js`](starter/index.js) tiene un bloque por paso: descomenta el bloque y ejecuta desde la carpeta `starter`:

```bash
cd bootcamp/week-27-patrones_clean_code/2-practicas/lab-02-observer-strategy/starter
node index.js
```

No necesita instalar nada. Deja descomentados los pasos que ya hiciste. Las salidas se obtuvieron con Node 24.19.0; en cada paso se muestran solo las líneas nuevas.

---

## Paso 1: Escuchar y emitir

```text
--- Paso 1: escuchar y emitir ---
  caja: cobrar 12 €
  almacén: restar 3 unidades
  (refund no tiene oyentes: no pasa nada)
```

- `shop.on('sale', función)` apunta la función en la lista del evento `'sale'`. Dos `on`, dos oyentes.
- `shop.emit('sale', datos)` llama a cada oyente de `'sale'` con los datos, **en el orden en que se suscribieron**: primero la caja, después el almacén.
- `'refund'` no tiene oyentes: `emit` no hace nada y no da error.

Quien emite no sabe cuántos oyentes hay ni qué hacen. Es el patrón **Observer**.

## Paso 2: Dejar de escuchar

```text
--- Paso 2: dejar de escuchar ---
  caja: cobrar 5 €
  almacén: restar 2 unidades
  registro: venta de 5 €
  (el registro deja de escuchar)
  caja: cobrar 8 €
  almacén: restar 2 unidades
```

`on` devuelve una función. Al llamarla (`stopLog()`), el registro sale de la lista, y la venta de 8 € ya no le llega. Un oyente que no se quita sigue en la lista mientras exista el emisor, y con él todo lo que recuerda: es la fuga de memoria de los oyentes de la [semana 23](../../../week-23-performance_optimizacion/1-teoria/04-fugas-memoria.md).

## Paso 3: Un almacén que avisa

```text
--- Paso 3: un almacén que avisa ---
  (quedan 4: no avisa)
  aviso: lápiz, quedan 2
  compras: primer pedido urgente, de lápiz
  aviso: lápiz, quedan 1
```

`createStock(alerts)` recibe un emisor y, cuando a un producto le quedan menos de 3 unidades, emite `'low'`. No sabe nada de avisos ni de compras: esos oyentes se suscriben desde `index.js`.

- Con 4 unidades no emite. Con 2 y con 1, sí.
- `once` escucha una sola vez: el pedido urgente sale con el primer aviso y no con el segundo. Mira cómo lo hace en `emitter.js`: se suscribe con una función que primero se quita y después llama a la tuya.

Para que `createStock` avise a alguien más (un correo, un registro), no hay que cambiarlo: basta otro `alerts.on('low', ...)`.

## Paso 4: EventTarget

```text
--- Paso 4: EventTarget ---
  caja: 12 €
  primera venta del día
  caja: 7 €
  (tras abort, nadie escucha)
```

`EventTarget` es la clase que usan todos los elementos del DOM para sus eventos ([semana 18](../../../week-18-event_handling_avanzado/1-teoria/04-acciones-eventos-propios.md)), y también existe en Node. Es el mismo patrón:

| Emisor propio | EventTarget |
|---|---|
| `on(nombre, función)` | `addEventListener(nombre, función)` |
| `emit(nombre, datos)` | `dispatchEvent(new CustomEvent(nombre, { detail: datos }))` |
| la función recibe `datos` | la función recibe un evento, con los datos en `event.detail` |
| `once(nombre, función)` | `addEventListener(nombre, función, { once: true })` |
| la función que devuelve `on` | `removeEventListener`, o `signal` con `controller.abort()` |

`abort()` quita al oyente de la caja, y la venta de 3 € no la escucha nadie. Un mismo `AbortController` puede quitar muchos oyentes de golpe.

## Paso 5: Estrategias

```text
--- Paso 5: estrategias ---
  standard 5 5
  express  11 11
  locker   3 3
  pickup   0
  con el switch: Método de envío desconocido: pickup
```

`shippingCostSwitch` y `shippingCost` dan lo mismo para los tres métodos. La diferencia aparece al añadir uno:

- `SHIPPING.pickup = () => 0` añade una estrategia desde fuera, y `shippingCost('pickup', 2)` la usa sin cambiar una línea de la función.
- `shippingCostSwitch` no conoce `pickup`: para añadirlo hay que abrir la función y escribir otro `case`.

Cada estrategia tiene la misma forma: recibe el peso y devuelve el coste. Por eso `shippingCost` puede llamar a cualquiera sin saber cuál es.

```text
✅ Lab completado.
```

---

## Comprobación

1. Haz que un oyente del paso 1 lance un error (`throw new Error('caja rota')`) y vuelve a ejecutar. ¿Se llama al oyente del almacén? ¿Cómo cambiarías `emit` para que un oyente roto no pare a los demás?
2. En el paso 3, ¿por qué `createStock` recibe el emisor en lugar de crearlo dentro? ¿Cómo lo probarías con Vitest?
3. Añade a `SHIPPING` un método `'international'` que cueste 15 € más 2 € por kilo. ¿Qué devuelve `Object.keys(SHIPPING)`? ¿Para qué te serviría en un formulario?
4. Busca en la [teoría 01](../../1-teoria/01-module-singleton-factory.md#4-factory-que-elige-qué-crear) el objeto `BUILDERS`. ¿Por qué es también un objeto de estrategias?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Module, Singleton y Factory](../lab-01-module-singleton-factory/README.md) | [Lab 03 — Refactorizar con tests](../lab-03-refactorizar-con-tests/README.md) → |

[↑ Semana 27](../../README.md)
