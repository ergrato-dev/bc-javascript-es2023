# Lab 02 — `Symbol.for` y el registro global

## Objetivo

Distinguir los símbolos locales de `Symbol()` de los del registro global de `Symbol.for()`, leer su clave con `Symbol.keyFor()` y usarlos para compartir claves entre partes del código.

**Tiempo:** 50 min · **Teoría:** [02 - Symbol.for y registro global](../../1-teoria/02-symbol-for-registry.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 8 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-09-simbolos_metaprogramacion_basica/2-practicas/lab-02-symbol-registry
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: `Symbol()` crea uno nuevo cada vez

Repaso del lab 01: dos llamadas a `Symbol()` dan dos símbolos distintos aunque la descripción sea la misma.

```text
--- Paso 1: Symbol() siempre crea nuevos ---
local1 === local2: false
Cada Symbol() es único
```

## Paso 2: `Symbol.for()` reutiliza

`Symbol.for(clave)` busca la clave en un registro global que comparte todo el programa. Si ya hay un símbolo con esa clave lo devuelve; si no, lo crea y lo guarda. Por eso dos llamadas con `'app.id'` dan el mismo símbolo.

```text
--- Paso 2: Symbol.for() reutiliza ---
global1 === global2: true
Symbol.for() retorna el mismo símbolo para la misma clave
```

## Paso 3: `Symbol.keyFor()`

`Symbol.keyFor(simbolo)` devuelve la clave con la que se registró. Un símbolo creado con `Symbol()` no está en el registro: da `undefined`.

```text
--- Paso 3: Symbol.keyFor() ---
Clave de registered: app.shared
Clave de local: undefined
Solo símbolos de Symbol.for() tienen clave
```

## Paso 4: compartir entre módulos

Cada función `(() => { ... })()` se ejecuta en el momento y tiene su propio ámbito, como si fuera un módulo aparte. Ninguna exporta su símbolo a la otra, y aun así los dos son el mismo porque salen del registro con la misma clave.

```text
--- Paso 4: Compartir entre módulos ---
En módulo A: Symbol(module.shared)
En módulo B: Symbol(module.shared)
¿Son iguales? true
```

## Paso 5: espacios de nombres

El registro es uno para todo el programa, incluidas las librerías que uses. Una clave genérica como `'config'` puede coincidir con la de otra librería; con un prefijo propio (`'myapp.config'`) eso no pasa.

```text
--- Paso 5: Namespacing ---
Símbolo config: Symbol(myapp.config)
Símbolo database: Symbol(myapp.database)
```

## Paso 6: un sistema de plugins

El plugin define sus métodos con claves del registro, y `loadPlugin` obtiene esas mismas claves por su cuenta con `Symbol.for`. Así el plugin y quien lo carga se entienden sin importarse nada.

```text
--- Paso 6: Sistema de Plugins ---
  Cargando plugin: MyAwesomePlugin
  Inicializando MyAwesomePlugin v1.0.0
```

## Paso 7: resumen

Una tabla con las diferencias entre los dos tipos de símbolo.

```text
--- Paso 7: Comparativa ---
| Característica         | Symbol()  | Symbol.for() |
|------------------------|-----------|--------------|
| Crea único cada vez    | ✅ Sí     | ❌ No        |
| Usa registro global    | ❌ No     | ✅ Sí        |
| keyFor() retorna clave | ❌ No     | ✅ Sí        |
| Compartir entre módulos| Manual    | Automático   |
```

## Paso 8: catálogo de eventos

`Events` agrupa símbolos del registro. `emit` imprime la clave de cada evento con `Symbol.keyFor`. La segunda llamada pasa `Symbol.for('events.user.login')` en lugar de `Events.USER_LOGIN`: es el mismo símbolo.

```text
--- Paso 8: Catálogo de eventos ---
  Evento: events.user.login { userId: 123 }
  Evento: events.user.login { userId: 456 }
  Evento: events.user.logout { userId: 123 }

✅ Lab completado.
```

---

## Comprobación

1. En el paso 8, ¿qué imprimiría `emit(Symbol('events.user.login'), {})`? ¿Por qué?
2. En el paso 3, ¿qué devuelve `Symbol.keyFor(Symbol.iterator)`? Pruébalo.
3. En el paso 5, ¿por qué conviene `'myapp.config'` en lugar de `'config'`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Crear y usar símbolos](../lab-01-symbols-basics/README.md) | [Lab 03 — Well-known symbols](../lab-03-well-known/README.md) → |

[↑ Semana 09](../../README.md)
