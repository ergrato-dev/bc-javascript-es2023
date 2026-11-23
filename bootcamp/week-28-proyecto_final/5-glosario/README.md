# 📖 Glosario - Semana 28: Proyecto Final

Términos clave de esta semana ordenados alfabéticamente. Casi todos vienen de semanas anteriores: aquí están con el sentido que tienen en el proyecto final.

---

## A

### Acción
Objeto que describe algo que ha pasado, con un `type` y sus datos: `{ type: 'sort', by: 'year' }`. Es lo único que cambia el estado, a través de `dispatch`.

### Almacén (store)
Objeto que guarda el estado de la aplicación, lo cambia solo con acciones a través del reductor y avisa a los oyentes cuando cambia. En el proyecto lo crea `createStore`.

## C

### Cadena de calidad
Las comprobaciones que se ejecutan juntas antes de dar algo por terminado: ESLint, Prettier y los tests con cobertura. En el proyecto, `pnpm check`.

### Cliente de API
Módulo que concentra cómo se habla con un servidor: las URL, el JSON, las cabeceras y los errores HTTP. El resto de la aplicación llama a `api.list()` sin saber nada de HTTP.

## D

### Dispatch
Enviar una acción al almacén: `store.dispatch({ type: 'loading' })`. El almacén calcula el estado nuevo con el reductor y, si cambió, avisa a los oyentes.

## E

### Estado derivado
Lo que se calcula desde el estado en lugar de guardarse en él, como la página visible que devuelve `selectPage`. No puede quedar desincronizado, porque se recalcula cada vez.

## F

### Fallo silencioso
Un error que no lanza ninguna excepción y hace algo distinto de lo esperado, como quitar el oyente equivocado. Solo lo encuentra un test que comprueba el resultado.

## I

### Inyección de dependencias
Pasar a una función lo que necesita para hablar con el exterior en lugar de que lo use directamente: `createApi({ fetchFn })`. Permite probarla con un doble.

## O

### Oyente (listener)
Función que se suscribe al almacén con `subscribe` y a la que el almacén llama con el estado nuevo y la acción cada vez que el estado cambia. `render` es el oyente de la página.

## P

### Plan de trabajo
Lista de tareas pequeñas, en orden y con un tiempo estimado, escrita antes de empezar un proyecto. Sirve para saber pronto si vas con retraso.

## R

### Reductor (reducer)
Función pura `(estado, acción) => estado nuevo`. Nunca cambia el estado que recibe, y con una acción que no conoce devuelve el mismo objeto.

## S

### Selector
Función que calcula una parte de lo que se ve a partir del estado, como `selectPage`. Es la forma de obtener el estado derivado.

### Suscribirse
Pedir a un objeto que te avise cuando pase algo. `subscribe` devuelve la función que deja de escuchar.

## U

### Umbral de cobertura
El porcentaje mínimo de líneas, ramas, funciones y sentencias que tienen que ejecutar los tests. Con `thresholds` en `vitest.config.js`, por debajo del umbral el comando falla.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | — |

[↑ Semana 28](../README.md)
