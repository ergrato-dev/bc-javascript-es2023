# Lab 01 — Variables con `const` y `let`

## Objetivo

Declarar variables con `const` y `let`, ver qué permite cada una y comprobar en la terminal qué es el ámbito de bloque.

**Tiempo:** 40 min · **Teoría:** [02 - let y const](../../1-teoria/02-let-const.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) está dividido en 8 pasos. En cada paso hay un bloque de código comentado con `//` debajo de la línea `Descomenta las siguientes líneas:`.

1. Abre la carpeta del lab en la terminal:

   ```bash
   cd bootcamp/week-01-introduccion_javascript_moderno_es2023/2-practicas/lab-01-variables-const-let
   ```

2. Abre `starter/index.js` en VS Code. Para descomentar un bloque, selecciónalo y pulsa `Ctrl+/` (`Cmd+/` en macOS): quita un `//` de cada línea.
3. Después de cada paso, ejecuta el archivo y compara con la salida esperada:

   ```bash
   node starter/index.js
   ```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: `const`

El paso 1 ya viene descomentado. `const` declara una variable que **no se puede reasignar**. Para comprobarlo, quita los dos `//` de la línea `appName = 'Otro Nombre';`, ejecuta y mira el error; después vuelve a comentarla:

```text
TypeError: Assignment to constant variable.
```

Con el paso 1 tal como viene, la salida es:

```text
--- Paso 1: const Básico ---
Nombre: Mi Aplicación
Versión: 1.0.0
Máximo usuarios: 100
```

## Paso 2: `let`

`let` declara una variable que **sí se puede reasignar**. El paso prueba tres formas de sumar 1: `counter = counter + 1`, `counter += 1` y `counter++`.

```text
--- Paso 2: let Básico ---
Contador inicial: 0
Después de +1: 1
Después de +=1: 2
Después de ++: 3
```

## Paso 3: `const` con objetos

`const` protege la variable, no el contenido. Puedes cambiar y añadir propiedades al objeto; lo que no puedes es asignar a `user` un objeto nuevo.

```text
--- Paso 3: const con Objetos ---
Usuario inicial: { name: 'Ana', age: 25 }
Usuario modificado: { name: 'Ana', age: 26, city: 'Madrid' }
```

## Paso 4: `const` con arrays

Lo mismo con un array: `push` y el cambio de una posición funcionan porque modifican el array, no la variable.

```text
--- Paso 4: const con Arrays ---
Frutas iniciales: [ 'apple', 'banana' ]
Frutas modificadas: [ 'grape', 'banana', 'orange' ]
```

## Paso 5: ámbito de bloque

Una variable declarada con `let` o `const` dentro de `{ }` (un `if`, un `for`) solo existe dentro de esas llaves. `globalMessage` se ve dentro y fuera del `if`; `blockMessage` solo dentro. Si quitas el `//` que queda en `console.log(blockMessage)`, Node lanza `ReferenceError: blockMessage is not defined`.

```text
--- Paso 5: Block Scope ---
Dentro del if: Soy global
Dentro del if: Soy de bloque
Fuera del if: Soy global
```

## Paso 6: `let` en bucles

El contador de un `for` se declara con `let` porque cambia en cada vuelta. El paso también acumula la suma de 1 a 5 en otra variable `let`.

```text
--- Paso 6: let en Loops ---
Loop con let:
  Iteración: 1
  Iteración: 2
  Iteración: 3
  Iteración: 4
  Iteración: 5
Suma de 1 a 5: 15
```

## Paso 7: Temporal Dead Zone

Usar una variable `let` o `const` antes de la línea que la declara lanza `ReferenceError: Cannot access 'myVar' before initialization`. El tramo entre el inicio del bloque y la declaración se llama *Temporal Dead Zone* (TDZ). El código descomentado declara primero y usa después:

```text
--- Paso 7: Temporal Dead Zone ---
Declarado primero: valor correcto
```

## Paso 8: caso práctico

Una configuración de aplicación: el objeto `config` es `const` y aun así se ajusta para desarrollo cambiando `timeout` y añadiendo `debug`; un contador `let` registra las peticiones.

```text
--- Paso 8: Caso Práctico ---
Configuración inicial: { apiUrl: 'https://api.example.com', timeout: 5000, maxRetries: 3 }
Configuración de desarrollo: {
  apiUrl: 'https://api.example.com',
  timeout: 10000,
  maxRetries: 3,
  debug: true
}
Peticiones realizadas: 2

🎉 ¡Excelente! Has completado el lab de variables modernas.
Recuerda: const por defecto, let solo cuando necesites reasignar.
```

---

## Comprobación

- [ ] Los 8 pasos descomentados y `node starter/index.js` termina sin errores.
- [ ] Sabes explicar por qué el paso 3 no da error aunque `user` es `const`.
- [ ] Provocaste el `TypeError` del paso 1 y el `ReferenceError` del paso 5, y volviste a comentar esas líneas.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Template literals](../lab-02-template-literals/README.md) → |

[↑ Semana 01](../../README.md)
