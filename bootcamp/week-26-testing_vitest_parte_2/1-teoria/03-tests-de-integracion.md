# 🔌 Tests de integración

## 🎯 Objetivos

- Explicar qué prueba un test de integración que no prueba uno unitario.
- Arrancar y parar un servidor desde los tests con `beforeAll` y `afterAll`.
- Dejar cada test con los datos iniciales con `beforeEach`.
- Elegir qué probar con dobles y qué contra la pieza de verdad.

Los tests unitarios con dobles prueban cada pieza aislada: el cliente de la API con un `fetch` falso, el servidor sin cliente. Pero una aplicación funciona cuando las piezas **se entienden entre sí**: el cliente envía lo que el servidor espera y sabe leer lo que contesta. Eso es lo que prueba un test de integración.

---

## 📋 Contenido

### 1. Qué es un test de integración

Un **test de integración** prueba varias piezas juntas, de verdad, sin dobles entre ellas. En la semana 25 viste los tres tipos de tests ([teoría 01 de la semana 25](../../week-25-testing_vitest_parte_1/1-teoria/01-por-que-tests.md)); aquí el de integración es concreto:

| Test | Qué se ejecuta de verdad | Qué es un doble |
|---|---|---|
| Unitario del cliente | `createClient` | `fetch` y el servidor |
| De integración | `createClient`, el `fetch` de Node, HTTP y el servidor | Nada: todo en tu equipo, con datos de prueba |
| De extremo a extremo | Lo anterior, más la página en un navegador | Nada |

El de integración sigue siendo un test de Vitest con `describe`, `it` y `expect`. Lo único distinto es lo que prepara: un servidor de verdad en lugar de un doble.

### 2. Arrancar y parar el servidor

Arrancar un servidor tarda milisegundos; hacerlo en cada test multiplica ese tiempo. Lo habitual es arrancarlo **una vez** para todos los tests del `describe`:

```js
describe('integración: createClient contra el servidor', () => {
  let server;
  let client;

  beforeAll(async () => {
    server = await startServer();
    client = createClient(server.url);
  });

  afterAll(async () => {
    await server.close();
  });

  // los tests usan client
});
```

| Función | Se ejecuta | Para |
|---|---|---|
| `beforeAll(fn)` | Una vez, antes del primer test del `describe` | Lo caro: arrancar el servidor, crear el cliente |
| `afterAll(fn)` | Una vez, después del último | Parar lo que arrancó `beforeAll` |
| `beforeEach(fn)` | Antes de cada test | Dejar el estado como al principio |
| `afterEach(fn)` | Después de cada test | Deshacer lo que cambió el test: espías, reloj, globales |

Las cuatro esperan si su función es `async`. Tres detalles del servidor de los labs:

- **Puerto 0.** `startServer()` escucha en el puerto 0, y el sistema le da uno libre. `server.url` dice cuál. Si los tests usaran el 3000 y lo tuvieras ocupado con otro programa, fallarían por algo que no tiene nada que ver con el código.
- **Cerrar con `await`.** `close()` devuelve una promesa que se cumple cuando el servidor ha parado. Si no se espera, el servidor sigue abierto cuando Vitest termina.
- **`closeAllConnections`.** `fetch` deja la conexión abierta un rato para reutilizarla. `server.close()` espera a que se cierren todas; `closeAllConnections()` las cierra ya.

### 3. Cada test empieza igual

El servidor guarda los datos en memoria, y todos los tests usan el mismo. Un test que crea un producto cambia lo que ve el siguiente, el mismo problema de la [semana 25](../../week-25-testing_vitest_parte_1/1-teoria/04-organizar-tests.md) con un objeto compartido. Arreglo: lo caro una vez, el estado en cada test.

```js
beforeEach(() => {
  server.reset(); // vuelve a los tres productos iniciales
});
```

Con una base de datos de verdad, como el PostgreSQL de un proyecto real, la idea es la misma: una base de datos solo para los tests, en Docker, que se vacía o se rellena con datos conocidos antes de cada test.

### 4. Qué encuentra y qué no

Un test de integración encuentra lo que se pierde **entre** las piezas:

- **Contratos que no coinciden.** El cliente envía el JSON sin la cabecera `content-type`, y el servidor lo rechaza con un 415. El test unitario con un `fetch` falso pasaba, porque el doble aceptaba cualquier cosa ([lab 03, paso 2](../2-practicas/lab-03-tests-de-integracion/README.md#paso-2-el-doble-no-lo-sabía)).
- **Datos reales.** Los mensajes de error que de verdad escribe el servidor, cómo codifica la URL, qué devuelve al crear.
- **Configuración.** Una ruta mal escrita, un método que no existe.

Pero tiene sus límites:

- Es más lento: 13 ms frente a 2 ms en el lab 03. Con cientos de tests se nota.
- Cuando falla, dice menos: el error puede estar en el cliente, en el servidor o entre los dos.
- Algunos casos no los puedes provocar cuando quieres: un 500, un servidor que tarda 30 s, un fallo de red.

### 5. Cuándo un doble y cuándo lo de verdad

| Situación | Mejor |
|---|---|
| La lógica de una función: cálculos, ramas, casos límite | Unitario. Si tiene dependencias, con dobles |
| Errores que la pieza real no da cuando quieres: 500, sin red, lentitud | Unitario con un doble que falla |
| Esperas, reintentos, caducidades | Unitario con el reloj falso |
| Que el cliente y el servidor se entienden | Integración |
| Algo externo que no controlas: un pago, un correo, una API de otra empresa | Un doble siempre. En integración, una versión de prueba que te dé ese servicio |

Se necesitan los dos tipos. Muchos unitarios, rápidos, para cada rama; unos pocos de integración para cada forma en que las piezas se hablan. En el proyecto de la semana escribes las dos cosas: `tests/logic.test.js` con dobles y reloj falso, y `tests/integration.test.js` contra el servidor, sin un solo doble.

---

## 🧪 Pruébalo

El [lab 03](../2-practicas/lab-03-tests-de-integracion/README.md) arranca la API de productos desde los tests, encuentra un error que el test unitario no ve, comparte el servidor entre tests sin compartir los datos y prueba los errores reales.

## ✅ Checklist de aprendizaje

- [ ] Explico qué prueba un test de integración que no prueba uno unitario, y al revés.
- [ ] Arranco un servidor en `beforeAll`, lo paro en `afterAll` con `await` y reinicio sus datos en `beforeEach`.
- [ ] Explico por qué el servidor de los tests escucha en el puerto 0.
- [ ] Decido para cada caso si lo pruebo con un doble o contra la pieza de verdad.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — ⏳ Tests asíncronos y reloj falso](02-tests-asincronos.md) | [Teoría — 🔁 TDD](04-tdd.md) → |

[↑ Semana 26](../README.md)
