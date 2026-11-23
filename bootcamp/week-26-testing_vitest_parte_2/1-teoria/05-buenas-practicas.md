# 🧭 Buenas prácticas

## 🎯 Objetivos

- Escribir tests deterministas: el mismo resultado en cada ejecución, en cualquier equipo y a cualquier hora.
- Probar lo que hace el código, no cómo está escrito por dentro.
- Usar los dobles justos y dejar todo como estaba al terminar cada test.
- Reconocer un test inestable y arreglar su causa.
- Mantener los tests rápidos y legibles.

Con dobles, reloj falso y servidores de prueba, se pueden probar casi todas las piezas de una aplicación. Esta teoría junta las reglas que hacen que esos tests sigan siendo útiles dentro de un año, cuando el código haya cambiado y nadie recuerde por qué se escribió cada uno.

---

## 📋 Contenido

### 1. Deterministas

Un test **determinista** da el mismo resultado cada vez que se ejecuta con el mismo código. Lo que lo rompe es todo lo que cambia entre ejecuciones:

| Fuente | Ejemplo | Arreglo |
|---|---|---|
| La hora | `new Date()`, `Date.now()` | `vi.setSystemTime` o recibir `now` como parámetro |
| El azar | `Math.random()`, `crypto.randomUUID()` | `vi.spyOn(Math, 'random').mockReturnValue(...)` o recibir el generador |
| La red externa | Una API de otra empresa | Un doble de `fetch`, o un servidor de prueba en tu equipo |
| Los temporizadores | Esperas de verdad que a veces tardan más | El reloj falso |
| La zona horaria y el idioma | `getHours()`, `toLocaleString()` | Fechas en hora local con `new Date(año, mes, día, hora)`, `TZ` fija o `Intl` con la zona explícita ([semana 21](../../week-21-fechas_tiempos_date_api/README.md)) |
| Otros tests | Un objeto, un espía o un servidor con datos que dejó el anterior | `beforeEach` y `afterEach` |

Un test que pasa unas veces y falla otras sin cambiar el código es un **test inestable** (en inglés, *flaky*). Es peor que no tener test: cuando falla, nadie se fía, se vuelve a ejecutar «a ver si pasa», y el día que falla por un error de verdad, también se ignora. Un test inestable se arregla buscando su causa en esta tabla, no subiendo el tiempo límite.

### 2. El comportamiento, no los detalles

Prueba lo que el código **hace** (lo que devuelve, lo que cambia, lo que envía) y no **cómo** lo hace por dentro. Un test que comprueba los detalles falla cuando reescribes el código aunque siga funcionando, y deja de ser una red para refactorizar.

```js
// ✅ Comportamiento: el resultado que importa.
expect(formatDuration(3725)).toBe('1 h 2 min 5 s');

// ❌ Detalle: que por dentro llama a Math.floor tres veces.
const floor = vi.spyOn(Math, 'floor');
formatDuration(3725);
expect(floor).toHaveBeenCalledTimes(3);
```

El refactor del [lab 04](../2-practicas/lab-04-tdd/README.md#ciclo-5-refactorizar) cambió la función entera, y sus tests siguieron en verde: comprobaban resultados. El segundo test habría fallado sin que nada se rompiera.

Con los dobles pasa lo mismo. `expect(pay).toHaveBeenCalledWith(12.5)` es comportamiento: cobrar el total es lo que debe hacer `checkout`. Comprobar las opciones exactas de cada `fetch` con `toHaveBeenCalledWith` también lo es, cuando esas opciones son el contrato con el servidor; en el [lab 03](../2-practicas/lab-03-tests-de-integracion/README.md#paso-2-el-doble-no-lo-sabía) tuviste que actualizar ese test al añadir la cabecera, porque el contrato cambió.

### 3. Los dobles justos

- **Dobla solo los bordes:** lo que sale de tu código (red, hora, azar, consola, servicios externos). No dobles tus propias funciones puras: ejecútalas de verdad.
- **Un doble tan simple como puedas.** La respuesta falsa de los labs tiene `ok`, `status` y `json()`, lo que lee el código, y nada más.
- **Si un test necesita muchos dobles**, el código que prueba hace demasiadas cosas. Es una señal para separar la lógica de las dependencias, no para escribir más dobles.
- **Comprueba con integración** que los dobles dicen la verdad sobre la pieza real ([teoría 03](03-tests-de-integracion.md#4-qué-encuentra-y-qué-no)).

### 4. Dejar todo como estaba

Cada test empieza desde cero y termina sin dejar nada. Un `afterEach` común, al principio del archivo, sirve para todos los `describe`:

```js
afterEach(() => {
  vi.useRealTimers(); // el reloj de verdad
  vi.restoreAllMocks(); // los métodos espiados con vi.spyOn
  vi.unstubAllGlobals(); // las globales cambiadas con vi.stubGlobal
});
```

Y lo que arranca un `beforeAll` (un servidor, un sondeo), lo para su `afterAll`. Para comprobar que los tests no dependen del orden, ejecuta uno solo con `-t "nombre"`: debe dar lo mismo que con todos.

### 5. Rápidos

Una suite rápida se ejecuta a menudo; una lenta, solo antes de subir el código, y los errores se descubren tarde. Los 39 tests del proyecto de la semana tardan menos de medio segundo. Si un test tarda más de unas decenas de milisegundos, pregúntate por qué:

- **Espera de verdad.** Reloj falso.
- **Arranca algo caro en cada test.** `beforeAll` en lugar de `beforeEach`.
- **Usa la red externa.** Un doble o un servidor local.

Mientras trabajas, `pnpm vitest` (sin `run`) se queda vigilando y vuelve a ejecutar los tests al guardar. Con una suite rápida, ves el rojo o el verde en cuanto guardas.

### 6. Legibles

Un test es también documentación: lo lee quien cambia el código para saber qué tiene que seguir funcionando.

- **El nombre dice qué se espera**, en una frase: `'get de un id que no existe lanza HttpError 404'`. Cuando falle, el nombre ya dice qué se ha roto.
- **Preparar, actuar, comprobar** ([semana 25](../../week-25-testing_vitest_parte_1/1-teoria/04-organizar-tests.md)), con datos del dominio que se entienden (`'Las meninas'`, no `'foo'`).
- **Sin lógica en el test:** ni `if`, ni bucles que calculan el resultado esperado. Si el test calcula igual que el código, comparte sus errores. Escribe el valor esperado tal cual: `'1 h 2 min 5 s'`.
- **Un comportamiento por test.** Varios `expect` están bien si comprueban el mismo caso; si el nombre necesita «y», quizá son dos tests.

---

## 🧪 Pruébalo

El [proyecto de la semana](../3-proyecto/README.md) aplica todas estas reglas: dobles solo en los bordes, reloj falso en todo lo que espera, un `afterEach` común, un servidor por archivo de integración y datos del dominio en los tests.

## ✅ Checklist de aprendizaje

- [ ] Encuentro lo que hace inestable un test (hora, azar, red, temporizadores, orden) y lo arreglo en su causa.
- [ ] Pruebo lo que hace el código y no cómo está escrito por dentro.
- [ ] Doblo solo los bordes y con dobles tan simples como puedo.
- [ ] Dejo todo como estaba al terminar cada test, con un `afterEach` común.
- [ ] Escribo tests rápidos, con nombres que dicen qué se espera y sin lógica dentro.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🔁 TDD](04-tdd.md) | [Índice de labs](../2-practicas/README.md) → |

[↑ Semana 26](../README.md)
