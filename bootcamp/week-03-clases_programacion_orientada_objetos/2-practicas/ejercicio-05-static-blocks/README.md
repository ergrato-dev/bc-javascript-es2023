# 🧪 Ejercicio 05: Static Blocks (ES2022)

## 🎯 Objetivos

- Practicar el uso de bloques de inicialización estáticos
- Aplicar static blocks para configuración de clases
- Combinar static blocks con campos privados estáticos
- Implementar patrones comunes con static blocks

## ⏱️ Duración

45 minutos

## 📋 Instrucciones

Este es un ejercicio guiado. Sigue cada paso y **descomenta el código** en `starter/index.js` para ver los resultados.

Para ejecutar el código:

```bash
cd ejercicio-05-static-blocks/starter
node index.js
```

---

## Paso 1: Introducción a Static Blocks

Un static block se ejecuta una vez, cuando la clase se define:

```javascript
class Example {
  static value;

  static {
    this.value = 'initialized';
    console.log('Static block executed!');
  }
}
// El bloque ya se ejecutó al definir la clase
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

## Paso 2: Inicialización Condicional

Static blocks permiten lógica compleja para inicializar campos:

```javascript
class Config {
  static mode;

  static {
    this.mode = process.env.NODE_ENV === 'production'
      ? 'prod'
      : 'dev';
  }
}
```

**Descomenta** la sección del Paso 2.

---

## Paso 3: Acceso a Campos Privados

Los static blocks pueden acceder a campos privados estáticos:

```javascript
class Secure {
  static #secret;

  static {
    this.#secret = 'hidden value';
  }

  static getSecret() {
    return this.#secret;
  }
}
```

**Descomenta** la sección del Paso 3.

---

## Paso 4: Múltiples Static Blocks

Puedes tener varios static blocks que se ejecutan en orden:

```javascript
class MultiBlock {
  static {
    console.log('Primero');
  }

  static {
    console.log('Segundo');
  }
}
```

**Descomenta** la sección del Paso 4.

---

## Paso 5: Patrón Singleton

Static blocks son útiles para implementar singletons:

```javascript
class Singleton {
  static #instance = null;

  static {
    // Pre-configuración del singleton
  }

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new Singleton();
    }
    return this.#instance;
  }
}
```

**Descomenta** la sección del Paso 5.

---

## Paso 6: Registro de Plugins

Implementa un sistema de registro con configuración inicial:

```javascript
class Registry {
  static #items = new Map();

  static {
    // Registrar items por defecto
    this.#items.set('default', { name: 'Default' });
  }
}
```

**Descomenta** la sección del Paso 6.

---

## Paso 7: Ejercicio Integrador

Crea un sistema de configuración de aplicación completo usando static blocks.

**Descomenta** la sección del Paso 7.

---

## ✅ Verificación

Al completar todos los pasos, deberías ver en la consola:
- Ejecución de static blocks al definir clases
- Configuración condicional funcionando
- Acceso a campos privados desde static blocks
- Orden de ejecución correcto con múltiples bloques
- Singleton y registro funcionando

## 🎯 Resultado Esperado

```
--- Paso 1: Introducción a Static Blocks ---
Static block ejecutado!
Counter.count: 0
Counter.prefix: CNT

--- Paso 2: Inicialización Condicional ---
AppMode.environment: development
AppMode.apiUrl: http://localhost:3000
...
```

## 📚 Recursos

- [MDN: Static initialization blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- [TC39: Class Static Block Proposal](https://github.com/tc39/proposal-class-static-block)
