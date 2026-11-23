# 🗂️ Organizar los tests

## 🎯 Objetivos

- Escribir cada test en tres partes: preparar, actuar y comprobar.
- Poner nombres que digan qué comportamiento se prueba.
- Hacer que cada test empiece de cero con `beforeEach`, y conocer `afterEach`, `beforeAll` y `afterAll`.
- Agrupar con `describe` dentro de `describe`.
- Repetir un test con varios datos con `it.each`.
- Encontrar los casos límite de una función.
- Usar `todo`, `skip`, `only` y `-t`, y saber por qué `skip` y `only` no deben quedarse en el código.

Con unos pocos tests, el orden da igual. Con cien, un test mal nombrado o que depende de otro te hace perder más tiempo del que ahorra. Esta teoría va de escribir tests que se entienden al leerlos y al verlos fallar.

---

## 📋 Contenido

### 1. Preparar, actuar y comprobar

Casi todos los tests tienen tres partes, en este orden (en inglés, *Arrange, Act, Assert*):

```js
it('add suma unidades a las que ya había', () => {
  // Preparar: el estado de partida
  const stock = createStock();
  stock.add('lápiz', 2);
  // Actuar: lo que se prueba, una sola vez
  stock.add('lápiz', 3);
  // Comprobar
  expect(stock.count('lápiz')).toBe(5);
});
```

- **Preparar** crea los datos o el estado de partida.
- **Actuar** es una sola llamada: la que el nombre del test promete probar.
- **Comprobar** son uno o varios `expect` sobre el resultado de esa llamada.

Con funciones puras, las tres partes caben a menudo en una línea: `expect(paginate(letters, 2, 2).items).toEqual(['c', 'd'])`. Los comentarios no hacen falta cuando se ve a simple vista. Lo que importa es no mezclar: si un test actúa, comprueba, vuelve a actuar y vuelve a comprobar, en realidad son dos tests.

### 2. Nombres que se leen como frases

El nombre aparece en el informe cuando el test falla. Debe decir **qué comportamiento** se espera, no cómo se comprueba:

| Peor | Mejor |
|---|---|
| `test 1` | `un carrito vacío vale 0` |
| `paginate funciona` | `lleva una página fuera de rango a la última` |
| `comprueba toThrow` | `lanza un RangeError si perPage no es un entero mayor que 0` |

Con `describe('paginate')` delante, el informe se lee como una frase: `paginate > lleva una página fuera de rango a la última`. Si falla, sabes qué se ha roto sin abrir el archivo.

### 3. Cada test empieza de cero

Un test no debe depender de que otro se ejecute antes, ni de lo que otro deje hecho. Este `describe` comparte un almacén entre sus tests:

```js
describe('un almacén para todos los tests', () => {
  const stock = createStock();
  it('add guarda un producto nuevo', () => {
    stock.add('goma', 2);
    expect(stock.count('goma')).toBe(2);
  });
  it('un almacén nuevo está vacío', () => {
    expect(stock.size).toBe(0); // falla: la goma del test anterior sigue ahí
  });
});
```

El segundo test falla, pero solo si se ejecuta después del primero. Es el peor tipo de fallo: el que depende del orden. La solución es crear el estado **antes de cada test**:

```js
describe('createStock', () => {
  let stock;
  beforeEach(() => {
    stock = createStock();
  });
  // ...cada it recibe un almacén nuevo
});
```

| Función | Cuándo se ejecuta | Para qué |
|---|---|---|
| `beforeEach(fn)` | Antes de cada test del `describe` | Crear un estado nuevo para cada test |
| `afterEach(fn)` | Después de cada test, también si falla | Deshacer lo que el test cambió fuera: un temporizador, un archivo |
| `beforeAll(fn)` | Una vez, antes del primer test | Preparar algo caro que ningún test modifica, como arrancar un servidor (semana 26) |
| `afterAll(fn)` | Una vez, después del último | Cerrar lo que abrió `beforeAll` |

Se importan de `'vitest'` como `describe` e `it`. Con funciones puras casi no hacen falta: si no hay estado, no hay nada que compartir.

### 4. describe dentro de describe

```js
describe('createStock', () => {
  let stock;
  beforeEach(() => {
    stock = createStock();
    stock.add('regla', 3);
  });

  describe('remove', () => {
    it('quita unidades', () => { /* ... */ });
    it('no quita más de las que hay', () => { /* ... */ });
  });

  describe('add', () => {
    it('rechaza cantidades que no son enteros mayores que 0', () => { /* ... */ });
  });
});
```

Un `describe` dentro de otro agrupa los tests de un método dentro de los de su objeto. El `beforeEach` de fuera se ejecuta antes de cada test de dentro. Si el `describe` de dentro tiene su propio `beforeEach`, se ejecuta después del de fuera. En el informe, los nombres se encadenan: `createStock > remove > quita unidades`.

Con dos niveles suele bastar. Si necesitas cuatro, probablemente el código que pruebas hace demasiadas cosas.

### 5. El mismo test con varios datos: it.each

Cuando varios tests solo cambian en los datos, una tabla evita copiar el mismo código:

```js
it.each([
  { weight: 0.5, cost: 3 },
  { weight: 3, cost: 5 },
  { weight: 7, cost: 7 },
])('$weight kg cuestan $cost €', ({ weight, cost }) => {
  expect(shippingCost(weight)).toBe(cost);
});
```

`it.each(tabla)` devuelve una función que se llama como `it`: un nombre y la función del test. Vitest crea un test por fila:

- **Filas que son objetos:** la función recibe el objeto, y `$nombre` en el título se cambia por esa propiedad.
- **Filas que son arrays:** `it.each([[1, 3], [5, 5]])('%s kg cuestan %s €', (weight, cost) => ...)`. La función recibe cada elemento como un argumento, y cada `%s` se cambia por el siguiente valor.
- **Filas de un solo valor:** `it.each([0, -2, NaN])('rechaza %o', (weight) => ...)`. `%o` escribe el valor tal cual es, con las comillas si es un texto.

`describe.each` hace lo mismo con un grupo entero de tests.

### 6. Casos límite

Los errores se esconden en los bordes. Para cada función, repasa esta lista:

| Qué probar | Ejemplo |
|---|---|
| El caso normal | 3 kg cuestan 5 € |
| Vacío | `[]`, `''`, `{}` |
| Uno solo | un array de un elemento |
| Justo en un límite y a cada lado | 1 kg, 1,01 kg; 5 kg, 5,01 kg |
| Fuera de rango | página 0, página 99, nota 11 |
| Valores especiales | `0`, `-1`, `NaN`, `Infinity`, `null`, `undefined` |
| El tipo equivocado | `'3'` en lugar de `3` |
| Textos raros | tildes, mayúsculas, espacios a los lados o repetidos |
| Lo que no debe cambiar | el array que recibe, el estado tras un error |

No todos aplican a todas las funciones. La pregunta es: ¿qué valor haría que este código se equivocara? Un límite mal puesto (`<` en lugar de `<=`) solo lo detecta un test con el valor exacto del límite. Con 0,5 kg y 3 kg, la tarifa del [lab 03](../2-practicas/lab-03-organizar-tests/README.md) parece perfecta; con `'3'` no lanza el error que promete su comentario.

### 7. todo, skip, only y -t

| Escribes | Qué pasa | En el informe |
|---|---|---|
| `it.todo('nombre')` | Apunta un test que falta, sin función | `□`, cuenta como `todo` |
| `it.skip('nombre', fn)` | No ejecuta ese test | `↓`, cuenta como `skipped` |
| `it.only('nombre', fn)` | Ejecuta solo los `only` de ese archivo | Los demás, `↓` |
| `pnpm test -t "texto"` | Solo los tests cuyo nombre contiene el texto | Los demás, `↓` |

Funcionan igual con `describe`: `describe.skip`, `describe.only`.

`todo` es una lista de tareas útil: el proyecto de esta semana empieza con 29. `skip` y `only` sirven un rato, mientras trabajas en un test concreto, pero no deben quedarse en el código. Un `skip` olvidado es un test que dejó de proteger y nadie se acuerda de por qué. Un `only` olvidado esconde todos los demás tests del archivo, y todo «pasa». Para trabajar en unos pocos tests sin tocar el código, usa `-t`.

---

## 🧪 Pruébalo

El [lab 03](../2-practicas/lab-03-organizar-tests/README.md) recorre los siete apartados con un almacén y una tarifa de envío.

## ✅ Checklist de aprendizaje

- [ ] Escribo tests en tres partes: preparar, actuar y comprobar.
- [ ] Pongo nombres que dicen qué comportamiento se espera.
- [ ] Uso `beforeEach` para que cada test empiece de cero, y sé para qué son `afterEach`, `beforeAll` y `afterAll`.
- [ ] Agrupo con `describe` dentro de `describe`.
- [ ] Escribo un `it.each` con filas que son objetos, arrays o valores sueltos.
- [ ] Repaso los casos límite de una función antes de dar sus tests por terminados.
- [ ] Uso `todo`, `skip`, `only` y `-t`, y no dejo `skip` ni `only` en el código.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🎯 Matchers](03-matchers.md) | [Teoría — 📊 Cobertura](05-cobertura.md) → |

[↑ Semana 25](../README.md)
