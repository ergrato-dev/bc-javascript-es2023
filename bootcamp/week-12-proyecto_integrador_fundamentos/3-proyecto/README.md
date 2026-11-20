# Proyecto Semana 12 — Gestor de colección

## Descripción

Una página para gestionar las piezas de tu dominio. El formulario añade piezas nuevas y, si un dato no vale, dice qué campo corregir y pone el cursor en él. La lista se puede buscar por nombre, filtrar por sala y ordenar por nombre o por valor, y se reparte en páginas de 4 piezas. La cabecera resume cuántas piezas hay, cuánto valen en total y cuántas hay en cada sala. Al añadir o borrar una pieza, todo se actualiza solo.

La página ya está montada. Tu trabajo es escribir `src/logic.js` con lo que has visto en las semanas 1 a 11, sin nada nuevo: una clase con campos privados, un `Map` y un `Set`, un iterador con `Symbol.iterator`, un generador, métodos de array que no modifican el original y un error propio. También cambias los datos de ejemplo por los de tu dominio.

**Tiempo:** 4 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-12
cp -r bootcamp/week-12-proyecto_integrador_fundamentos/3-proyecto/starter/. ~/js-proyecto-semana-12/
cd ~/js-proyecto-semana-12
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | El formulario, los filtros, la lista y los botones de página; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título, el prefijo de los ids, las salas y las piezas de ejemplo | Sí: paso 2 |
| `src/logic.js` | `ValidationError`, `validatePiece`, la clase `Collection` y tres funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | El código que conecta la página con `logic.js` | No |

- **Qué:** `Collection` es la única dueña de las piezas. Las guarda en un `Map` por id, les pone el id y avisa a quien se haya suscrito cada vez que cambian (el patrón *observer* del [lab 02](../2-practicas/lab-02-observer/README.md)). `search`, `paginate` y `summarize` no guardan nada: reciben piezas y devuelven un resultado nuevo.
- **Para qué:** `main.js` se suscribe una vez con su función `render`. Desde ese momento, el formulario y el botón de borrar solo llaman a `add` y `remove`, y la página se repinta sola: nadie tiene que acordarse de llamar a `render` después de cada cambio. Como el estado vive en campos privados (`#`), solo se puede cambiar a través de esos métodos, que siempre validan y avisan.
- **Impacto:** toda la lógica vive en `logic.js` y no toca el DOM, así `scripts/verificar-semana.sh` la prueba desde Node sin navegador. Las piezas viven en memoria: al recargar, la colección vuelve a tener solo las de ejemplo. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

---

## Paso 1: ver la página (10 min)

```bash
pnpm dlx serve .
```

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. Con el starter, la página muestra `Piezas: 0` y la lista vacía, porque `Collection` todavía no guarda ni avisa de nada. Si escribes en **Buscar**, la consola de las DevTools (`F12`, pestaña **Console**) muestra `TypeError: Cannot destructure property 'count' of 'summarize(...)' as it is undefined.`, y si pulsas **Añadir**, `TypeError: Cannot read properties of undefined (reading 'name')`. La página funciona entera al terminar el paso 10, cuando `render` tiene todo lo que usa. Mientras tanto, comprueba cada parte con el comando `node` de su paso, que importa tus datos y tu código. Deja el servidor abierto en esa terminal y usa otra para el resto.

## Paso 2: tus datos (15 min)

En `src/data.js` están los datos del dominio Planetario, que es solo un ejemplo. Cámbialos por los de **tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- `ID_PREFIX`: de 2 a 4 letras mayúsculas que abrevien tu dominio (`PLA` para Planetario).
- `ROOMS`: de 3 a 8 salas, zonas o secciones de tu dominio, sin repetir. Son las únicas que acepta la colección.
- El export por defecto: de 5 a 12 piezas sin `id`, con `name` (3 caracteres o más, sin repetir), `room` (una de `ROOMS`) y `value` (un número de 0 o más, sin comillas). Con más de 4 piezas verás al menos dos páginas.

Las salidas de los pasos siguientes son las de los datos de ejemplo; con los tuyos verás tus piezas y tus salas.

## Paso 3: `ValidationError` (10 min)

Un error propio que dice qué campo falla ([semana 11](../../week-11-manejo_errores_moderno/README.md), lab 02). El constructor recibe `field` y `message`, llama a `super(message)` y guarda `this.name = 'ValidationError'` y `this.field = field`.

```bash
node --input-type=module -e "import { ValidationError } from './src/logic.js'; const error = new ValidationError('name', 'Campo obligatorio'); console.log(error instanceof Error, error.name, error.field, error.message);"
```

```text
true ValidationError name Campo obligatorio
```

## Paso 4: `validatePiece` (25 min)

Comprueba los datos de una pieza y devuelve una copia limpia `{ name, room, value }`, o lanza un `ValidationError` con el primer problema. Las reglas, en orden, están en el comentario del `TODO`.

- El primer `if` va antes de leer `data.name`: con `null`, esa lectura lanzaría un `TypeError`. `typeof [] === 'object'`, así que los arrays se descartan con `Array.isArray`.
- El nombre se recorta con `trim()` antes de medirlo: `' ab '` tiene 2 caracteres útiles.
- El formulario envía el valor como texto (`'12.5'`). Si es un texto con algo dentro, conviértelo con `Number()`. Ojo: `Number('')` y `Number('  ')` dan `0`, así que un texto vacío o con solo espacios tiene que fallar antes. `Number.isFinite` descarta `NaN` (`Number('doce')`) y lo que no es número.
- Devuelve un objeto nuevo. Así una propiedad de más en los datos no llega a la colección y los datos originales no cambian.

```bash
node --input-type=module -e "import { ROOMS } from './src/data.js'; import { validatePiece } from './src/logic.js'; console.log(validatePiece({ name: '  Reloj de sol ', room: ROOMS[0], value: '12.5' }, ROOMS)); for (const data of [null, { name: 'ab', room: ROOMS[0], value: 1 }, { name: 'Pieza', room: 'Garaje', value: 1 }, { name: 'Pieza', room: ROOMS[0], value: '' }]) { try { validatePiece(data, ROOMS); } catch (error) { console.log(error.name, error.field, '·', error.message); } }"
```

```text
{ name: 'Reloj de sol', room: 'Cúpula', value: 12.5 }
ValidationError piece · Cada pieza debe ser un objeto
ValidationError name · Mínimo 3 caracteres
ValidationError room · Elige una sala válida
ValidationError value · Debe ser un número de 0 o más
```

## Paso 5: `Collection` guarda piezas (35 min)

Una clase con campos privados ([semana 03](../../week-03-clases_programacion_orientada_objetos/README.md) y [lab 01](../2-practicas/lab-01-clases/README.md)) que guarda las piezas en un `Map` ([semana 07](../../week-07-sets_maps/README.md) y [lab 04](../2-practicas/lab-04-map/README.md)):

1. Declara los campos privados: `#pieces = new Map()`, `#listeners = new Set()`, `#prefix`, `#rooms` y `#lastNumber = 0`. El constructor guarda `prefix` y `rooms`.
2. `get size()` devuelve `this.#pieces.size`.
3. `add(data)` valida primero con `validatePiece(data, this.#rooms)`. Si lanza, el error sale de `add` sin haber tocado nada. Si no, suma 1 a `#lastNumber`, crea la pieza `{ id, ...clean }` con el id `` `${this.#prefix}-${String(this.#lastNumber).padStart(3, '0')}` ``, la congela con `Object.freeze`, la guarda con `set` y la devuelve.
4. `get(id)` devuelve `this.#pieces.get(id)`.

- **Qué:** `Object.freeze` impide cambiar la pieza devuelta. En un módulo, que siempre funciona en modo estricto, `piece.value = 0` lanza `TypeError: Cannot assign to read only property 'value' of object '#<Object>'`.
- **Para qué:** quien recibe una pieza no puede cambiarla por la espalda de la colección, sin validar ni avisar.
- **Impacto:** para cambiar una pieza habría que crear otra, que es lo que hacen los métodos que no modifican el original, como `toSorted`.

```bash
node --input-type=module -e "import pieces, { ID_PREFIX, ROOMS } from './src/data.js'; import { Collection } from './src/logic.js'; const collection = new Collection(ID_PREFIX, ROOMS); try { collection.add({ name: 'x' }); } catch (error) { console.log(error.message); } pieces.forEach((piece) => collection.add(piece)); console.log(collection.size, collection.get(ID_PREFIX + '-001'), Object.keys(collection));"
```

```text
Mínimo 3 caracteres
9 {
  id: 'PLA-001',
  name: 'Telescopio refractor',
  room: 'Cúpula',
  value: 18500
} []
```

La primera pieza válida recibe `PLA-001` aunque antes fallara un `add`. `Object.keys(collection)` da `[]`: los campos privados no se ven desde fuera.

## Paso 6: suscriptores y `remove` (30 min)

El patrón observer del [lab 02](../2-practicas/lab-02-observer/README.md):

1. `subscribe(listener)` añade `listener` al `Set` `#listeners` y devuelve una función que lo borra: `() => this.#listeners.delete(listener)`.
2. Añade un método privado `#notify()` que llama a cada suscriptor con la colección: `this.#listeners.forEach((listener) => listener(this))`.
3. Llama a `this.#notify()` en `add`, después de guardar la pieza.
4. `remove(id)`: `this.#pieces.delete(id)` ya devuelve `true` o `false`. Guárdalo, avisa solo si es `true` y devuélvelo.

El número de los ids nunca baja: si borras `PLA-003`, la siguiente pieza recibe el número que tocaba, no el `003`. Así un id no puede señalar dos piezas distintas.

```bash
node --input-type=module -e "import pieces, { ID_PREFIX, ROOMS } from './src/data.js'; import { Collection } from './src/logic.js'; const collection = new Collection(ID_PREFIX, ROOMS); const unsubscribe = collection.subscribe((current) => console.log('Cambio:', current.size, 'piezas')); collection.add(pieces[0]); collection.add(pieces[1]); console.log(collection.remove(ID_PREFIX + '-001'), collection.remove(ID_PREFIX + '-001')); unsubscribe(); collection.add(pieces[2]); console.log('Final:', collection.size, 'piezas');"
```

```text
Cambio: 1 piezas
Cambio: 2 piezas
Cambio: 1 piezas
true false
Final: 2 piezas
```

El segundo `remove` no encuentra la pieza y no avisa. Después de `unsubscribe()`, el tercer `add` tampoco avisa.

## Paso 7: una colección iterable (15 min)

Con `*[Symbol.iterator]()` ([semana 08](../../week-08-iteradores_generadores/README.md) y [semana 09](../../week-09-simbolos_metaprogramacion_basica/README.md)), la colección funciona con `for...of`, con el spread `[...collection]` y con todo lo que acepta un iterable. El cuerpo es una línea: `yield* this.#pieces.values()`. Un `Map` recuerda el orden en que se añadieron las claves, así que las piezas salen en ese orden.

```bash
node --input-type=module -e "import pieces, { ID_PREFIX, ROOMS } from './src/data.js'; import { Collection } from './src/logic.js'; const collection = new Collection(ID_PREFIX, ROOMS); pieces.slice(0, 3).forEach((piece) => collection.add(piece)); collection.remove(ID_PREFIX + '-002'); for (const piece of collection) console.log(piece.id, piece.name); console.log([...collection].length);"
```

```text
PLA-001 Telescopio refractor
PLA-003 Esfera armilar
2
```

## Paso 8: `search` (30 min)

Recibe cualquier iterable de piezas (un array o una `Collection`) y unos filtros con valores por defecto ([semana 04](../../week-04-destructuring_modulos_es2023/README.md)). Devuelve un array nuevo:

1. Convierte las piezas en array con `[...pieces]` y quédate con las que cumplen los dos filtros con `filter`. Para el texto, compara `name.toLowerCase()` con `text.trim().toLowerCase()` usando `includes`. Un texto vacío está incluido en cualquier nombre, así que `''` deja pasar todas. Una sala vacía, también.
2. Ordena con `toSorted` ([semana 05](../../week-05-arrays_avanzados/README.md)): por valor, `(a, b) => b.value - a.value`; por nombre, `(a, b) => a.name.localeCompare(b.name, 'es')`, que coloca bien las tildes y la ñ.

```bash
node --input-type=module -e "import pieces from './src/data.js'; import { search } from './src/logic.js'; const names = (list) => list.map(({ name, value }) => name + ' (' + value + ')'); console.log(names(search(pieces)).slice(0, 3)); console.log(names(search(pieces, { text: ' DE ', sort: 'value' }))); console.log(names(search(pieces, { room: pieces[0].room })));"
```

```text
[
  'Astrolabio de latón (15200)',
  'Esfera armilar (9800)',
  'Fotografía de Saturno (900)'
]
[
  'Meteorito de hierro (42000)',
  'Traje de astronauta (18400)',
  'Astrolabio de latón (15200)',
  'Reloj de sol (6400)',
  'Fotografía de Saturno (900)'
]
[ 'Globo celeste (7600)', 'Telescopio refractor (18500)' ]
```

## Paso 9: `paginate` (20 min)

Un generador ([semana 08](../../week-08-iteradores_generadores/README.md)): `function*` con un bucle `for` que avanza `size` posiciones cada vez y hace `yield items.slice(start, start + size)`. Cada `next()` calcula solo la página siguiente; `main.js` las recoge todas con `[...paginate(found, 4)]` para poder ir hacia atrás.

```bash
node --input-type=module -e "import pieces from './src/data.js'; import { paginate } from './src/logic.js'; const pages = paginate(pieces.map(({ name }) => name), 4); console.log(pages.next()); console.log([...pages]); console.log(pages.next());"
```

```text
{
  value: [
    'Telescopio refractor',
    'Meteorito de hierro',
    'Esfera armilar',
    'Mapa lunar'
  ],
  done: false
}
[
  [
    'Reloj de sol',
    'Traje de astronauta',
    'Globo celeste',
    'Astrolabio de latón'
  ],
  [ 'Fotografía de Saturno' ]
]
{ value: undefined, done: true }
```

El spread recoge solo las páginas que quedaban: la primera ya la había entregado `next()`. Al final, el generador queda agotado y responde `done: true`.

## Paso 10: `summarize` (20 min)

Recibe cualquier iterable de piezas y devuelve `{ count, total, byRoom }`. `count` es la longitud de `[...pieces]` y `total` la suma de los valores con `reduce`. `byRoom` es un `Map` nuevo en el que cada pieza suma 1 a su sala: `byRoom.set(room, (byRoom.get(room) ?? 0) + 1)`. El `??` da `0` la primera vez que aparece una sala.

```bash
node --input-type=module -e "import pieces from './src/data.js'; import { summarize } from './src/logic.js'; console.log(summarize(pieces));"
```

```text
{
  count: 9,
  total: 122000,
  byRoom: Map(4) {
    'Cúpula' => 2,
    'Vestíbulo' => 2,
    'Sala Solar' => 3,
    'Sala Lunar' => 2
  }
}
```

## Paso 11: probar la página y comprobar (30 min)

Recarga la página. Ahora todo funciona:

1. La cabecera muestra tus piezas, su valor total y cuántas hay en cada sala. La lista enseña la página 1, ordenada por nombre.
2. **Siguiente →** y **← Anterior** cambian de página. Cada uno se desactiva al llegar a un extremo.
3. **Añadir** con un nombre de 2 letras: sale `✖ Revisa el campo name: Mínimo 3 caracteres` y el cursor salta al nombre. Con un valor vacío, el mensaje habla de `value`.
4. **Añadir** con datos válidos: sale `✔ <nombre> añadida como <PREFIJO>-0NN`, y la cabecera y la lista se actualizan solas.
5. **Buscar**, **Sala** y **Ordenar por** cambian la lista y vuelven a la página 1. Si nada coincide, sale `📭 No hay piezas que mostrar`.
6. 🗑️ borra una pieza y todo se actualiza.

Repasa `src/logic.js` antes de entregar. Borra los `TODO` que queden, cambia cualquier `var` por `const` o `let` y deja nombres que digan qué guarda cada variable. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-12 ./scripts/verificar-semana.sh 12
# Semana 12 — Proyecto Integrador - Fundamentos
#   ✅ src/data.js, src/logic.js y src/main.js son módulos ES válidos
#   ...
# 15/15 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js`, `src/logic.js` y `src/main.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `datos-exports` | `data.js` exporta `TITLE`, `ID_PREFIX` de 2 a 4 mayúsculas, de 3 a 8 salas sin repetir y por defecto de 5 a 12 piezas sin `id`, con nombre de 3 o más caracteres sin repetir, una sala de `ROOMS` y valor numérico de 0 o más |
| `datos-dominio` | El título, el prefijo, las salas y las piezas no son los del ejemplo Planetario |
| `validation-error` | `ValidationError` hereda de `Error`, se llama `ValidationError` y guarda `field` y `message` |
| `validate-ok` | `validatePiece` devuelve una copia `{ name, room, value }` con el nombre recortado y el valor convertido a número, sin modificar los datos |
| `validate-errores` | `validatePiece` lanza `ValidationError` con el campo y el mensaje del primer problema |
| `collection-add` | `Collection` guarda las piezas validadas con ids `PREFIJO-001`, `PREFIJO-002`..., congeladas, con `size` y `get`, y sin propiedades públicas |
| `collection-remove` | `remove` borra por id, devuelve `true` o `false` y no reutiliza los ids |
| `collection-observer` | `subscribe` avisa con la colección tras cada `add` o `remove` que cambia algo y devuelve una función para darse de baja |
| `collection-iterable` | `Collection` es iterable con `for...of` y spread, en el orden en que se añadieron las piezas |
| `search` | `search` filtra por texto (sin distinguir mayúsculas) y sala, ordena por nombre o por valor y no modifica la lista |
| `paginate` | `paginate` es un generador que entrega la lista en páginas del tamaño pedido |
| `summarize` | `summarize` cuenta las piezas, suma su valor y devuelve un `Map` con cuántas hay en cada sala, desde un array o una `Collection` |

Que los datos sean de tu dominio, que la página funcione y que el código se lea bien lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-12` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Map para colecciones](../2-practicas/lab-04-map/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 12](../README.md)
