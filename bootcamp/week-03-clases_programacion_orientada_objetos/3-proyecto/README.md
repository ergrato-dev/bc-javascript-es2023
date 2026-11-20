# Proyecto Semana 03 — Catálogo con clases

## Descripción

Una página para gestionar un catálogo de tu dominio con varios **tipos** de elemento: cada tipo tiene un dato propio (en el ejemplo, un planeta tiene lunas y una estrella, magnitud). Puedes crear, editar el nombre y la descripción, marcar como activo o inactivo, eliminar, filtrar por tipo y estado, buscar y ver cuántos hay de cada tipo.

La página ya está montada. Tu trabajo es escribir las dos clases de `src/logic.js` con lo que has visto esta semana (clases, `static`, campos privados, getters y setters) y crear en `src/types.js` las clases hijas de tu dominio con `extends` y `super`.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-03
cp -r bootcamp/week-03-clases_programacion_orientada_objetos/3-proyecto/starter/. ~/js-proyecto-semana-03/
cd ~/js-proyecto-semana-03
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | El formulario, los filtros, la lista y las estadísticas; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/main.js` | El código que lee el formulario y pinta la página | No |
| `src/logic.js` | Las clases `Item` y `Collection`, con `TODO` | Sí: pasos 2, 3, 5 y 6 |
| `src/types.js` | El título y los tipos del dominio Planetario, que es solo un ejemplo | Sí: paso 4 |

- **Qué:** `logic.js` no toca la página. `Item` es un elemento cualquiera y `Collection` guarda los elementos y los busca, filtra y cuenta. `types.js` define clases hijas de `Item`, una por tipo de tu dominio.
- **Para qué:** `main.js` solo habla con la colección (`add`, `remove`, `filter`...) y no sabe qué hay dentro. Si añades un tipo nuevo en `types.js`, el formulario, los filtros y las estadísticas lo incluyen solos. Y las clases se pueden probar desde Node, que es lo que hace `scripts/verificar-semana.sh`.
- **Impacto:** el nombre de un elemento y la lista de la colección son **privados** (`#`): solo se cambian a través de sus métodos, que validan. Las comprobaciones lo verifican: si dejas `name` o `items` como propiedades públicas, fallan. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

La colección vive en memoria: al recargar, la página vuelve a los elementos de ejemplo.

---

## Paso 1: ver la página (10 min)

Igual que en las semanas anteriores, los módulos necesitan un servidor local:

```bash
pnpm dlx serve .
```

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. Con el starter, la lista sale vacía y la consola de las DevTools (`F12`, pestaña **Console**) muestra un `TypeError`: `Collection.from` todavía no devuelve nada. Deja el servidor abierto en esa terminal, usa otra para el resto de pasos y recarga la página después de cada uno.

## Paso 2: la clase `Item` (25 min)

Un `Item` guarda `id`, `name`, `description` (por defecto `''`) y `active` (empieza en `true`):

- **El id:** un campo **estático privado**, `static #nextId = 1`, es un contador compartido por todos los elementos ([lab 02](../2-practicas/lab-02-metodos-estaticos/README.md), paso 3). En el constructor, `this.id = Item.#nextId++` guarda el valor actual y después lo sube en 1.
- **`get type()`:** cada clase tiene un `static type` (`Item` tiene `'item'`; `Planet`, `'planet'`). El getter devuelve el de la clase con la que se creó el objeto: `this.constructor.type`. Así las clases hijas solo cambian su `static type` y el getter sirve para todas.
- **`toggle()`:** invierte `active` y devuelve `this`, para poder encadenar ([lab 01](../2-practicas/lab-01-clases-basicas/README.md), paso 3).
- **`describe()`:** devuelve `[tipo] nombre`.

En este paso guarda el nombre como una propiedad normal (`this.name = name`); en el paso 3 lo haces privado.

```bash
node --input-type=module -e "import { Item } from './src/logic.js'; const marte = new Item('Marte'); console.log(marte); console.log(marte.describe(), marte.type); console.log(new Item('Venus').id, marte.toggle().active)"
# Item { id: 1, name: 'Marte', description: '', active: true }
# [item] Marte item
# 2 false
```

## Paso 3: el nombre privado (15 min)

Un nombre vacío no tiene sentido. Para impedirlo, guarda el nombre en un campo privado `#name` y da acceso a él con un getter y un setter ([lab 04](../2-practicas/lab-04-encapsulacion/README.md), pasos 1 a 3):

- `get name()` devuelve `this.#name`.
- `set name(value)` convierte el valor a texto, le quita los espacios de los extremos (`String(value ?? '').trim()`) y, si queda vacío, lanza `new Error('El nombre no puede estar vacío')`. Si no, lo guarda en `this.#name`.

El constructor no cambia: `this.name = name` ahora pasa por el setter, así que `new Item('')` también lanza el error. `main.js` captura ese error y lo muestra como aviso: prueba a guardar un elemento sin nombre.

```bash
node --input-type=module -e "import { Item } from './src/logic.js'; const marte = new Item('  Marte '); console.log(marte, marte.name); marte.name = '   '"
# Item { id: 1, description: '', active: true } Marte
# ...
# Error: El nombre no puede estar vacío
```

Node no muestra `#name` al imprimir el objeto: es privado. `marte.name` sí funciona, porque pasa por el getter.

## Paso 4: los tipos de tu dominio (25 min)

Abre `src/types.js`. Tiene el título de la página y dos tipos del Planetario, `Planet` y `Star`. Cada tipo es una clase hija de `Item` ([lab 03](../2-practicas/lab-03-herencia/README.md)):

```javascript
export class Planet extends Item {
  static type = 'planet';
  static label = '🪐 Planeta';
  static extraLabel = 'Lunas';

  constructor(name, description = '', moons = 0) {
    super(name, description);
    this.moons = Number(moons);
  }

  describe() {
    return `${super.describe()} · ${this.moons} lunas`;
  }
}
```

- `super(name, description)` ejecuta el constructor de `Item`, que pone el id, valida el nombre y deja `active` en `true`. Después, la clase hija guarda su dato propio, con valor por defecto.
- `describe()` sobrescribe el de `Item` y lo amplía: `super.describe()` devuelve `[planet] Júpiter` y la hija le añade su dato.
- `type` va en inglés y en `camelCase`: los filtros y las estadísticas lo usan. `label` y `extraLabel` son los textos que enseña la página.

Sustitúyelos por **los tipos de tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- De 2 a 4 clases hijas de `Item`, cada una con `static type`, `static label`, `static extraLabel`, un dato propio con valor por defecto y su `describe()` con `super.describe()`.
- `ITEM_TYPES`: el array con tus clases.
- `createSamples()`: de 4 a 6 elementos de ejemplo creados con tus clases.

El dato propio llega del formulario como texto. Si es un número (como `moons`), conviértelo con `Number()`; si es texto, guárdalo tal cual.

Con los tipos del Planetario, antes de cambiarlos:

```bash
node --input-type=module -e "import { Planet, Star } from './src/types.js'; const jupiter = new Planet('Júpiter', '', 95); console.log(jupiter); console.log(jupiter.describe(), jupiter.type); console.log(new Star('Sirio').describe())"
# Planet { id: 1, description: '', active: true, moons: 95 }
# [planet] Júpiter · 95 lunas planet
# [star] Sirio · magnitud 0
```

## Paso 5: la clase `Collection` (25 min)

La colección guarda los elementos en un array **privado**, `#items = []`, y solo deja tocarlo con sus métodos:

| Miembro | Qué hace |
|---|---|
| `static from(items)` | Crea una colección nueva, le añade los elementos del array con `add` y la devuelve. Es un método *factory* ([lab 02](../2-practicas/lab-02-metodos-estaticos/README.md), paso 6) |
| `get size` | Cuántos elementos hay |
| `get activeCount` | Cuántos tienen `active` a `true` |
| `add(item)` | Añade el elemento y devuelve `this`. Si no es un `Item` (`!(item instanceof Item)`), lanza `new TypeError(...)` |
| `find(id)` | El elemento con ese id, o `undefined` |
| `remove(id)` | Quita el elemento con ese id; devuelve `true` si lo quitó y `false` si no existía |

`instanceof Item` también es `true` para un `Planet`: un objeto de una clase hija es también de la clase padre. Para `remove`, compara la longitud del array antes y después de filtrarlo.

Al recargar, la lista aparece y puedes crear, marcar y eliminar elementos (los filtros funcionan después del paso 6).

## Paso 6: filtrar y contar (15 min)

- `filter({ type, status, query })`: los tres filtros con valor por defecto (`'all'`, `'all'` y `''`), y el objeto entero con `= {}`, igual que `filterItems` en la semana 02. `type` compara con `item.type`; `status` vale `'all'`, `'active'` o `'inactive'`; `query` busca en `name` y `description` sin distinguir mayúsculas. Devuelve un array.
- `countByType()`: un objeto con cuántos elementos hay de cada tipo, con `reduce` y una propiedad computada, como `getStats` en la semana 02.

```bash
node --input-type=module -e "import { Collection } from './src/logic.js'; import { createSamples } from './src/types.js'; const col = Collection.from(createSamples()); col.find(2).toggle(); console.log(col.size, col.activeCount, col.remove(4), col.remove(4)); console.log(col.filter({ type: 'planet' }).map((item) => item.name), col.countByType())"
# 4 3 true false
# [ 'Júpiter', 'Saturno' ] { planet: 2, star: 1 }
```

La salida es la de los ejemplos del Planetario; con tus tipos será otra.

## Paso 7: comprobar (5 min)

Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-03 ./scripts/verificar-semana.sh 03
# Semana 03 — Clases y Programación Orientada a Objetos
#   ✅ src/logic.js y src/types.js son módulos ES válidos
#   ...
# 12/12 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla. `tipos-dominio` falla mientras `types.js` siga con `planet` y `star`.

Por último, prueba la página entera: crea un elemento de cada tipo, intenta guardar uno sin nombre, edita uno, márcalo como inactivo, filtra por tipo y estado, busca y elimina.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/logic.js` y `src/types.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `tipos-dominio` | `ITEM_TYPES` tiene 2 o más clases hijas de `Item`, cada una con un `type` propio, distinto de `item`, `planet` y `star` |
| `tipos-describe` | Cada tipo se crea solo con el nombre y su `describe()` amplía el de `Item` |
| `item-crear` | `new Item()` guarda los datos con valores por defecto y un id que sube de uno en uno |
| `item-privado` | El contador de ids y el nombre son privados |
| `item-nombre` | El setter de `name` quita los espacios y rechaza un nombre vacío |
| `item-toggle-describe` | `toggle()` invierte `active` y devuelve el objeto; `describe()` devuelve `[tipo] nombre` |
| `coleccion-add` | `Collection` añade solo objetos `Item`, en un array privado; `Collection.from` crea una colección |
| `coleccion-find-remove` | `find`, `remove` y `activeCount` |
| `coleccion-filter` | `filter` combina tipo, estado y búsqueda; `countByType` cuenta por tipo |

Que los tipos y los ejemplos sean de tu dominio y que la página funcione lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-03` con `src/logic.js` completo y tus tipos en `src/types.js`, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 05 — Static blocks](../2-practicas/lab-05-static-blocks/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 03](../README.md)
