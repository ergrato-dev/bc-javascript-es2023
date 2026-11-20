# 📖 Glosario - Semana 12

## Proyecto Integrador - Fundamentos

Términos clave de la semana ordenados alfabéticamente. Ninguno es nuevo: cada uno enlaza la semana o el lab donde se explica.

---

## A

### Arquitectura
Cómo se reparte un programa en partes y qué responsabilidad tiene cada una. En el proyecto: `data.js` guarda los datos del dominio, `logic.js` las reglas sin DOM y `main.js` la página. Ver [02 - Arquitectura del proyecto](../1-teoria/02-arquitectura-aplicacion.md).

## C

### Campo privado
Propiedad de una clase que empieza por `#` y solo se puede usar dentro de la clase. Escribir `objeto.#campo` desde fuera es un `SyntaxError`. Ver [semana 03](../../week-03-clases_programacion_orientada_objetos/README.md) y [lab 01](../2-practicas/lab-01-clases/README.md).

```javascript
class Collection {
  #pieces = new Map();
}
```

### Clean code
Código que se lee y se cambia con facilidad: nombres que dicen qué guardan, funciones cortas, sin repeticiones ni código muerto. Ver [03 - Clean Code](../1-teoria/03-clean-code.md).

## D

### DRY (Don't Repeat Yourself)
No repetir la misma lógica en dos sitios. Si dos funciones hacen lo mismo, se extrae una y se llama desde las dos.

## E

### Encapsulación
Esconder el estado de un objeto y dejar que se cambie solo a través de sus métodos. En el proyecto, `Collection` guarda sus piezas en `#pieces` y solo `add` y `remove` las cambian, siempre validando y avisando.

### Estado
Los datos que un programa recuerda mientras funciona. En el proyecto, el estado son las piezas de la colección; los filtros se leen del formulario en cada `render()`.

### Export por defecto
El valor que un módulo exporta con `export default`. Se importa sin llaves y con cualquier nombre: `import Product from './models/Product.js'`. Ver [lab 03](../2-practicas/lab-03-modulos/README.md).

## G

### Generador
Función declarada con `function*` que entrega valores uno a uno con `yield` y se detiene hasta el siguiente `next()`. `paginate` es un generador. Ver [semana 08](../../week-08-iteradores_generadores/README.md).

### Getter
Método declarado con `get` que se lee como una propiedad, sin paréntesis: `collection.size`. Puede devolver un campo privado o un valor calculado. Ver [lab 01](../2-practicas/lab-01-clases/README.md).

## I

### `import()` dinámico
Carga un módulo cuando el programa llega a esa línea y devuelve una promesa con sus exports. Ver [lab 03](../2-practicas/lab-03-modulos/README.md), paso 5.

### Iterable
Objeto con un método `[Symbol.iterator]` que devuelve un iterador. Funciona con `for...of` y con el spread `[...objeto]`. Los arrays, los `Map`, los `Set` y la `Collection` del proyecto son iterables. Ver [semana 09](../../week-09-simbolos_metaprogramacion_basica/README.md).

## M

### Map
Colección de pares clave → valor que encuentra un valor por su clave sin recorrer nada y recuerda el orden de inserción. Ver [semana 07](../../week-07-sets_maps/README.md) y [lab 04](../2-practicas/lab-04-map/README.md).

### Módulo
Archivo con su propio ámbito: solo sale lo que lleva `export` y solo entra lo que se pide con `import`. Ver [semana 04](../../week-04-destructuring_modulos_es2023/README.md).

## O

### `Object.freeze`
Congela un objeto: sus propiedades ya no se pueden cambiar, añadir ni borrar. En un módulo, intentarlo lanza `TypeError`. La `Collection` congela las piezas que devuelve.

### Observer
Patrón en el que un objeto guarda una lista de funciones interesadas (suscriptores) y las llama cada vez que cambia. Ver [lab 02](../2-practicas/lab-02-observer/README.md).

## P

### Paginar
Repartir una lista larga en páginas de un tamaño fijo para mostrar una cada vez. En el proyecto, `paginate(lista, 4)`.

## R

### Re-exportar
Exportar desde un módulo lo que exporta otro: `export { User } from './User.js'`. Un `index.js` que re-exporta toda una carpeta deja importarla desde un solo sitio. Ver [lab 03](../2-practicas/lab-03-modulos/README.md), paso 4.

### Refactorizar
Cambiar cómo está escrito el código sin cambiar lo que hace. Las comprobaciones de `checks.json` avisan si un cambio rompe algo.

### Render
Pintar en la página el estado actual. En el proyecto, `render()` de `main.js` lo hace cada vez que la colección avisa o cambia un filtro.

## S

### Separación de responsabilidades
Que cada parte del programa se ocupe de una sola cosa. Por eso `logic.js` no toca el DOM y `main.js` no decide qué pieza es válida.

### Set
Colección de valores sin repetir. La `Collection` guarda sus suscriptores en un `Set`, así una misma función no se apunta dos veces. Ver [semana 07](../../week-07-sets_maps/README.md).

### Suscriptor
Función que se apunta con `subscribe` para enterarse de los cambios. `subscribe` devuelve otra función que la da de baja.

## V

### Validación
Comprobar que unos datos cumplen las reglas antes de usarlos. Si no las cumplen, `validatePiece` lanza un `ValidationError` con el campo que falla. Ver [semana 11](../../week-11-manejo_errores_moderno/README.md).

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | [📅 Semana 13: Programación Asincrónica - Callbacks y Promises](../../week-13-programacion_asincronica_callbacks_promises/README.md) → |

[↑ Semana 12](../README.md)
